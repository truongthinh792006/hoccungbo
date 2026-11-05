import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  Trophy, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Flag, 
  RotateCcw, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Play, 
  BookMarked, 
  History,
  Timer
} from 'lucide-react';
import { 
  ExamConfig, 
  ExamQuestion, 
  ExamResultRecord, 
  ExerciseDifficulty
} from '../../../types/curriculum';
import { 
  STANDARD_EXAM_CONFIGS, 
  generateExam, 
  saveExamResult, 
  getExamHistory,
  getExamStats
} from '../../../services/examService';
import { MathText } from '../../common/MathText';
import { SoundEffects } from '../../../utils/soundEffects';
import { useApp } from '../../../context/AppContext';
import { math7Chapters } from '../../../data/math7_curriculum';

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ModalView = 'CATALOG' | 'ACTIVE' | 'RESULT' | 'HISTORY';

export const ExamModal: React.FC<ExamModalProps> = ({ isOpen, onClose }) => {
  const { addXp, recordMistake, openMistakeNotebook } = useApp();

  const [currentView, setCurrentView] = useState<ModalView>('CATALOG');
  const [selectedConfig, setSelectedConfig] = useState<ExamConfig>(STANDARD_EXAM_CONFIGS[0]);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [lastResult, setLastResult] = useState<ExamResultRecord | null>(null);
  const [viewingHistoricalRecord, setViewingHistoricalRecord] = useState<ExamResultRecord | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Load history stats
  const history = useMemo(() => getExamHistory(), [currentView]);
  const stats = useMemo(() => getExamStats(), [currentView]);

  // Clean timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Submit the exam and calculate results
  const handleSubmitExam = useCallback((_autoSubmit = false) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const totalQuestions = questions.length;
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    const chapterBreakdown: Record<string, { total: number; correct: number; chapterTitle: string }> = {};
    const difficultyBreakdown: Record<ExerciseDifficulty, { total: number; correct: number }> = {
      co_ban: { total: 0, correct: 0 },
      thong_hieu: { total: 0, correct: 0 },
      van_dung: { total: 0, correct: 0 }
    };

    // Evaluate answers
    questions.forEach(q => {
      const diff = (q.difficulty || q.level || 'co_ban') as ExerciseDifficulty;
      if (!difficultyBreakdown[diff]) {
        difficultyBreakdown[diff] = { total: 0, correct: 0 };
      }
      difficultyBreakdown[diff].total += 1;

      // Identify chapter
      const chapter = math7Chapters.find(ch => ch.lessonIds.includes(q.lessonId));
      const chId = chapter ? chapter.id : 'khac';
      const chTitle = chapter ? chapter.shortTitle : 'Chương khác';

      if (!chapterBreakdown[chId]) {
        chapterBreakdown[chId] = { total: 0, correct: 0, chapterTitle: chTitle };
      }
      chapterBreakdown[chId].total += 1;

      if (q.userSelectedOptionIndex === undefined) {
        skippedCount += 1;
      } else {
        const isCorrect = q.userSelectedOptionIndex === q.correctIndex;
        if (isCorrect) {
          correctCount += 1;
          difficultyBreakdown[diff].correct += 1;
          chapterBreakdown[chId].correct += 1;
        } else {
          wrongCount += 1;
          // Automatically log wrong questions into Mistake Bank!
          recordMistake(q, { id: q.lessonId, title: q.title });
        }
      }
    });

    // Score on 10-point scale
    const rawScore = (correctCount / totalQuestions) * 10;
    const score = Number(rawScore.toFixed(1));

    // XP calculation: base 30 XP + (score * 8 XP)
    const xpEarned = Math.round(30 + score * 8);
    addXp(xpEarned, `Hoàn thành đề thi thử: ${selectedConfig.title} (${score}/10 điểm)`);

    const secondsUsed = selectedConfig.durationMinutes * 60 - secondsRemaining;

    const record: ExamResultRecord = {
      id: `exam_${Date.now()}`,
      examId: selectedConfig.id,
      examTitle: selectedConfig.title,
      examType: selectedConfig.type,
      submittedAt: new Date().toISOString(),
      durationSecondsUsed: Math.max(1, secondsUsed),
      totalTimeMinutes: selectedConfig.durationMinutes,
      score,
      maxScore: 10,
      correctCount,
      totalQuestions,
      wrongCount,
      skippedCount,
      questions,
      chapterBreakdown,
      difficultyBreakdown,
      xpEarned
    };

    saveExamResult(record);
    setLastResult(record);
    setShowSubmitConfirm(false);
    setCurrentView('RESULT');

    if (score >= 8.0) {
      SoundEffects.playCelebration();
    } else {
      SoundEffects.playCompletionChime();
    }
  }, [questions, secondsRemaining, selectedConfig, addXp, recordMistake]);

  // Countdown clock tick
  useEffect(() => {
    if (currentView === 'ACTIVE') {
      timerRef.current = setInterval(() => {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            // Time is up! Auto submit
            if (timerRef.current) clearInterval(timerRef.current);
            handleSubmitExam(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentView, handleSubmitExam]);

  // Start exam flow
  const handleStartExam = async (config: ExamConfig) => {
    setIsGenerating(true);
    try {
      const generated = await generateExam(config);
      if (generated.length === 0) {
        alert('Kho bài tập đang tải, vui lòng thử lại sau giây lát!');
        setIsGenerating(false);
        return;
      }

      setSelectedConfig(config);
      setQuestions(generated);
      setCurrentQuestionIndex(0);
      setSecondsRemaining(config.durationMinutes * 60);
      setCurrentView('ACTIVE');
    } catch (err) {
      console.error('Failed to start exam:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Option select handler
  const handleSelectOption = (optionIndex: number) => {
    setQuestions(prev => {
      const updated = [...prev];
      updated[currentQuestionIndex] = {
        ...updated[currentQuestionIndex],
        userSelectedOptionIndex: optionIndex
      };
      return updated;
    });
  };

  // Toggle flag for review
  const handleToggleFlag = () => {
    setQuestions(prev => {
      const updated = [...prev];
      const cur = updated[currentQuestionIndex];
      updated[currentQuestionIndex] = {
        ...cur,
        isFlagged: !cur.isFlagged
      };
      return updated;
    });
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remSecs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  const activeQuestion = questions[currentQuestionIndex];
  const answeredCount = questions.filter(q => q.userSelectedOptionIndex !== undefined).length;
  const isTimeCritical = secondsRemaining < 300; // Under 5 minutes

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-5xl h-[100dvh] sm:h-auto sm:max-h-[95vh] rounded-none sm:rounded-3xl shadow-2xl border-0 sm:border border-slate-200/90 overflow-hidden flex flex-col relative">
        
        {/* ==================================================================== */}
        {/* MODAL HEADER */}
        {/* ==================================================================== */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-md shadow-amber-400/20 font-black shrink-0">
              <Trophy className="w-5 h-5 text-amber-900 fill-amber-900" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h2 className="font-extrabold text-sm sm:text-lg tracking-tight truncate">
                  Phòng Thi Thử Toán 7
                </h2>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 px-1.5 sm:px-2 py-0.5 rounded-full shrink-0">
                  KNTT
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                {currentView === 'ACTIVE' 
                  ? `${selectedConfig.title} • Còn lại: ${formatTime(secondsRemaining)}`
                  : 'Luyện đề chuẩn cấu trúc thi giữa kì & cuối kì'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Nav tabs when not active exam */}
            {currentView !== 'ACTIVE' && (
              <div className="flex items-center bg-white/10 p-0.5 sm:p-1 rounded-xl text-xs font-semibold mr-1 sm:mr-2">
                <button
                  onClick={() => setCurrentView('CATALOG')}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all text-xs ${
                    currentView === 'CATALOG' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Chọn đề
                </button>
                <button
                  onClick={() => setCurrentView('HISTORY')}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg transition-all flex items-center gap-1 text-xs ${
                    currentView === 'HISTORY' ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <History className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Bảng vàng ({history.length})</span>
                  <span className="sm:hidden">Lịch sử</span>
                </button>
              </div>
            )}

            {/* Exit/Close button */}
            <button
              onClick={() => {
                if (currentView === 'ACTIVE') {
                  if (confirm('Bạn có chắc muốn thoát phòng thi? Tiến độ bài thi hiện tại sẽ không được lưu.')) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    setCurrentView('CATALOG');
                    onClose();
                  }
                } else {
                  onClose();
                }
              }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              title="Đóng phòng thi"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* VIEW 1: EXAM CATALOG (CHỌN ĐỀ THI) */}
        {/* ==================================================================== */}
        {currentView === 'CATALOG' && (
          <div className="p-6 overflow-y-auto space-y-6 flex-1">
            {/* Quick Stat Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="text-center">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Đã hoàn thành</span>
                <p className="text-xl font-black text-slate-800">{stats.totalTaken} đề</p>
              </div>
              <div className="text-center border-l border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Điểm trung bình</span>
                <p className="text-xl font-black text-indigo-600">{stats.averageScore} / 10</p>
              </div>
              <div className="text-center border-l border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Điểm cao nhất</span>
                <p className="text-xl font-black text-emerald-600">{stats.highestScore} / 10</p>
              </div>
              <div className="text-center border-l border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Tỉ lệ đạt (≥ 5đ)</span>
                <p className="text-xl font-black text-amber-600">{stats.passRate}%</p>
              </div>
            </div>

            {/* Standard Exams Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
                  <span>🎯 Danh Sách Đề Thi Chuẩn Cấu Trúc</span>
                </h3>
                <span className="text-xs text-slate-500">
                  Phân hóa 50% Cơ bản • 30% Thông hiểu • 20% Vận dụng
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {STANDARD_EXAM_CONFIGS.map(cfg => {
                  return (
                    <div
                      key={cfg.id}
                      className="bg-white rounded-2xl border-2 border-slate-200 hover:border-indigo-400 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                            {cfg.badgeLabel}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            <span>{cfg.durationMinutes} phút</span>
                          </span>
                        </div>

                        <div>
                          <h4 className="font-extrabold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {cfg.title}
                          </h4>
                          <p className="text-xs font-medium text-slate-500 mt-0.5">
                            {cfg.subtitle}
                          </p>
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {cfg.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">
                          {cfg.questionCount} câu trắc nghiệm KaTeX
                        </span>

                        <button
                          onClick={() => handleStartExam(cfg)}
                          disabled={isGenerating}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white shadow-md shadow-indigo-600/20 transition-all cursor-pointer disabled:opacity-50"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Bắt đầu thi</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* VIEW 2: ACTIVE EXAM ROOM (ĐANG THI THẬT) */}
        {/* ==================================================================== */}
        {currentView === 'ACTIVE' && activeQuestion && (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Exam Control Bar */}
            <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between flex-wrap gap-3 shrink-0">
              {/* Question progress */}
              <div className="flex items-center gap-3">
                <span className="font-black text-sm text-slate-800">
                  Câu {currentQuestionIndex + 1} / {questions.length}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  (Đã làm: <strong className="text-emerald-700">{answeredCount}</strong>/{questions.length})
                </span>
              </div>

              {/* Countdown clock */}
              <div className="flex items-center gap-2">
                <div 
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-mono font-black text-sm tracking-wider ${
                    isTimeCritical
                      ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                      : 'bg-white text-slate-800 border-slate-300'
                  }`}
                >
                  <Timer className={`w-4 h-4 ${isTimeCritical ? 'text-rose-600' : 'text-slate-500'}`} />
                  <span>{formatTime(secondsRemaining)}</span>
                </div>

                {/* Flag question */}
                <button
                  onClick={handleToggleFlag}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                    activeQuestion.isFlagged
                      ? 'bg-amber-100 text-amber-900 border-amber-300'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'
                  }`}
                  title="Cắm cờ để xem lại câu hỏi này sau"
                >
                  <Flag className={`w-3.5 h-3.5 ${activeQuestion.isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                  <span className="hidden sm:inline">Cắm cờ xem lại</span>
                </button>

                {/* Finish exam button */}
                <button
                  onClick={() => setShowSubmitConfirm(true)}
                  className="px-4 py-1.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
                >
                  Nộp bài thi
                </button>
              </div>
            </div>

            {/* Main Content: Question + Options + Palette */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
              {/* Left col: Question & Options (col-span-8) */}
              <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                {/* Mobile Quick Question Scroller (Visible on mobile/tablet, hidden on desktop) */}
                <div className="lg:hidden bg-slate-50 p-2.5 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1.5 px-1">
                    <span>Chọn câu nhanh ({answeredCount}/{questions.length}):</span>
                    <span>Vuốt ngang ➔</span>
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                    {questions.map((q, idx) => {
                      const isCurrent = idx === currentQuestionIndex;
                      const isAnswered = q.userSelectedOptionIndex !== undefined;
                      const isFlagged = q.isFlagged;

                      let btnStyle = 'bg-white text-slate-700 border-slate-200';
                      if (isAnswered) btnStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                      if (isFlagged) btnStyle = 'bg-amber-100 text-amber-900 border-amber-400 font-bold';
                      if (isCurrent) btnStyle += ' ring-2 ring-indigo-500 font-black scale-105';

                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(idx)}
                          className={`w-8 h-8 rounded-xl border text-xs shrink-0 flex items-center justify-center transition-all cursor-pointer relative ${btnStyle}`}
                        >
                          <span>{idx + 1}</span>
                          {isFlagged && (
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-500"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question Box */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {activeQuestion.level === 'van_dung' ? 'Vận dụng' : activeQuestion.level === 'thong_hieu' ? 'Thông hiểu' : 'Cơ bản'}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {activeQuestion.tags?.join(' • ') || ''}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    {activeQuestion.title}
                  </h3>

                  <div className="text-slate-800 text-sm sm:text-base leading-relaxed bg-slate-50/80 p-3.5 sm:p-4 rounded-xl border border-slate-100 overflow-x-auto">
                    <MathText text={activeQuestion.question} />
                  </div>
                </div>

                {/* Choices (4 Options) with Mobile Touch Optimization */}
                <div className="space-y-2.5 sm:space-y-3">
                  {activeQuestion.options.map((opt, oIdx) => {
                    const optText = typeof opt === 'string' ? opt : opt.text;
                    const isSelected = activeQuestion.userSelectedOptionIndex === oIdx;
                    const letter = String.fromCharCode(65 + oIdx);

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(oIdx)}
                        className={`w-full text-left p-3.5 sm:p-4 min-h-[52px] rounded-2xl border-2 transition-all flex items-center gap-3 cursor-pointer select-none touch-manipulation active:scale-[0.99] ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-950 font-bold shadow-xs ring-2 ring-indigo-500/20'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <span 
                          className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 border ${
                            isSelected
                              ? 'bg-indigo-600 text-white border-indigo-600'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {letter}
                        </span>

                        <div className="flex-1 text-xs sm:text-base leading-snug overflow-x-auto py-0.5">
                          <MathText text={optText} />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Prev / Next Navigation Bar */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setCurrentQuestionIndex(i => Math.max(0, i - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Câu trước</span>
                  </button>

                  <button
                    onClick={() => setCurrentQuestionIndex(i => Math.min(questions.length - 1, i + 1))}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
                  >
                    <span>Câu tiếp theo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right col: Question Palette Grid (col-span-4) */}
              <div className="lg:col-span-4 bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-4">
                <div>
                  <h4 className="font-black text-xs uppercase tracking-wider text-slate-700">
                    Bảng điều hướng câu hỏi
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-2 flex-wrap">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>Đã làm ({answeredCount})</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span>Cắm cờ</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-white border border-slate-300"></span>
                      <span>Chưa làm</span>
                    </span>
                  </div>
                </div>

                {/* Grid 1 to N */}
                <div className="grid grid-cols-5 gap-2 max-h-[300px] overflow-y-auto pr-1">
                  {questions.map((q, idx) => {
                    const isCurrent = idx === currentQuestionIndex;
                    const isAnswered = q.userSelectedOptionIndex !== undefined;
                    const isFlagged = q.isFlagged;

                    let btnClass = 'bg-white text-slate-700 border-slate-200';
                    if (isAnswered) {
                      btnClass = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                    }
                    if (isFlagged) {
                      btnClass = 'bg-amber-100 text-amber-900 border-amber-400 font-bold';
                    }
                    if (isCurrent) {
                      btnClass += ' ring-2 ring-indigo-500 ring-offset-1 font-black';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => setCurrentQuestionIndex(idx)}
                        className={`h-9 rounded-xl border text-xs flex items-center justify-center transition-all cursor-pointer relative ${btnClass}`}
                      >
                        <span>{idx + 1}</span>
                        {isFlagged && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-500"></span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Big submit callout in sidebar */}
                <div className="pt-2 border-t border-slate-200">
                  <button
                    onClick={() => setShowSubmitConfirm(true)}
                    className="w-full py-2.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Nộp bài & Chấm điểm</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* SUBMIT CONFIRMATION MODAL OVERLAY */}
        {/* ==================================================================== */}
        {showSubmitConfirm && (
          <div className="absolute inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-4 animate-scaleUp">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center">
                <AlertCircle className="w-7 h-7" />
              </div>

              <div>
                <h3 className="font-black text-lg text-slate-900">
                  Xác nhận nộp bài thi?
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Bạn đã hoàn thành <strong className="text-emerald-700">{answeredCount}</strong> trên tổng số <strong>{questions.length}</strong> câu hỏi.
                  {questions.length - answeredCount > 0 && (
                    <span className="block text-rose-600 font-bold mt-1">
                      Còn {questions.length - answeredCount} câu chưa chọn đáp án!
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  Tiếp tục làm bài
                </button>
                <button
                  onClick={() => handleSubmitExam(false)}
                  className="flex-1 py-2.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 transition-all"
                >
                  Nộp bài ngay
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* VIEW 3: EXAM RESULT & DETAILED REVIEW */}
        {/* ==================================================================== */}
        {currentView === 'RESULT' && (lastResult || viewingHistoricalRecord) && (
          (() => {
            const res = viewingHistoricalRecord || lastResult!;
            const isPassing = res.score >= 5.0;
            const isExcellent = res.score >= 8.5;

            return (
              <div className="p-6 overflow-y-auto space-y-6 flex-1">
                {/* Score Hero Card */}
                <div 
                  className={`rounded-3xl p-6 text-center text-white relative overflow-hidden ${
                    isExcellent
                      ? 'bg-gradient-to-tr from-amber-500 via-emerald-600 to-teal-700 shadow-xl'
                      : isPassing
                      ? 'bg-gradient-to-tr from-emerald-600 to-teal-800 shadow-lg'
                      : 'bg-gradient-to-tr from-slate-800 to-rose-900 shadow-lg'
                  }`}
                >
                  <span className="text-xs font-extrabold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full inline-block mb-2">
                    {res.examTitle}
                  </span>

                  <div className="text-5xl sm:text-6xl font-black tracking-tight my-2">
                    {res.score} <span className="text-2xl font-bold opacity-80">/ 10</span>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-white/90">
                    {isExcellent 
                      ? 'Xuất sắc! Con nắm vững kiến thức toàn diện!'
                      : isPassing
                      ? 'Làm tốt lắm! Đạt chuẩn kiến thức cần nhớ.'
                      : 'Cần ôn tập lại các chủ đề bị sai để nâng cao điểm số nhé!'}
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-4 text-xs font-semibold text-white/80 flex-wrap">
                    <span>Đúng: <strong>{res.correctCount}</strong> / {res.totalQuestions} câu</span>
                    <span>•</span>
                    <span>Sai: <strong>{res.wrongCount}</strong> câu</span>
                    <span>•</span>
                    <span>Thời gian: <strong>{Math.floor(res.durationSecondsUsed / 60)}p {res.durationSecondsUsed % 60}s</strong></span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-300 font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>+{res.xpEarned} XP</span>
                    </span>
                  </div>
                </div>

                {/* Mistake Bank Notification Alert */}
                {res.wrongCount > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                        <BookMarked className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-rose-900">
                          Đã tự động lưu {res.wrongCount} câu làm sai vào Sổ tay câu sai!
                        </p>
                        <p className="text-[11px] text-rose-700">
                          Con có thể luyện tập lại từng câu sai để nhận thưởng +10 XP phục thù.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        openMistakeNotebook();
                      }}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-colors shrink-0 cursor-pointer"
                    >
                      Mở Sổ tay phục thù
                    </button>
                  </div>
                )}

                {/* Difficulty & Chapter breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Difficulty Breakdown */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                      Phổ điểm theo mức độ nhận thức
                    </h4>
                    <div className="space-y-2 text-xs">
                      {(['co_ban', 'thong_hieu', 'van_dung'] as ExerciseDifficulty[]).map(level => {
                        const data = res.difficultyBreakdown[level] || { total: 0, correct: 0 };
                        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                        const label = level === 'van_dung' ? 'Vận dụng' : level === 'thong_hieu' ? 'Thông hiểu' : 'Cơ bản';

                        return (
                          <div key={level} className="space-y-1">
                            <div className="flex justify-between font-bold text-slate-700">
                              <span>{label} ({data.correct}/{data.total} câu)</span>
                              <span>{pct}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                                }`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chapter Breakdown */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                    <h4 className="font-extrabold text-xs text-slate-800 uppercase tracking-wider">
                      Mức độ nắm vững theo từng Chương
                    </h4>
                    <div className="space-y-2 text-xs">
                      {Object.entries(res.chapterBreakdown).map(([chId, data]) => {
                        const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

                        return (
                          <div key={chId} className="space-y-1">
                            <div className="flex justify-between font-bold text-slate-700">
                              <span>{data.chapterTitle} ({data.correct}/{data.total} câu)</span>
                              <span>{pct}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  pct >= 80 ? 'bg-indigo-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                                }`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Detailed Questions & Solutions Accordion */}
                <div className="space-y-3">
                  <h4 className="font-black text-sm text-slate-900">
                    📖 Xem Lại Chi Tiết & Lời Giải Từng Câu
                  </h4>

                  <div className="space-y-3">
                    {res.questions.map((q, idx) => {
                      const isCorrect = q.userSelectedOptionIndex === q.correctIndex;
                      const isSkipped = q.userSelectedOptionIndex === undefined;

                      return (
                        <div
                          key={q.id || idx}
                          className={`rounded-2xl border p-4 space-y-3 bg-white ${
                            isCorrect 
                              ? 'border-emerald-300' 
                              : isSkipped 
                              ? 'border-slate-300' 
                              : 'border-rose-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span 
                                className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center text-white ${
                                  isCorrect ? 'bg-emerald-600' : isSkipped ? 'bg-slate-400' : 'bg-rose-600'
                                }`}
                              >
                                {idx + 1}
                              </span>
                              <span className="font-bold text-xs text-slate-800">
                                {q.title}
                              </span>
                            </div>

                            <span 
                              className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                                isCorrect 
                                  ? 'bg-emerald-100 text-emerald-800' 
                                  : isSkipped 
                                  ? 'bg-slate-100 text-slate-600' 
                                  : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {isCorrect ? 'Đúng (+0.5đ)' : isSkipped ? 'Chưa làm' : 'Sai'}
                            </span>
                          </div>

                          <div className="text-xs sm:text-sm text-slate-800">
                            <MathText text={q.question} />
                          </div>

                          {/* Options breakdown */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            {q.options.map((opt, oIdx) => {
                              const optText = typeof opt === 'string' ? opt : opt.text;
                              const isTargetCorrect = oIdx === q.correctIndex;
                              const isUserPick = oIdx === q.userSelectedOptionIndex;

                              let optBorder = 'border-slate-200 bg-slate-50 text-slate-700';
                              if (isTargetCorrect) {
                                optBorder = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                              } else if (isUserPick) {
                                optBorder = 'border-rose-500 bg-rose-50 text-rose-900 font-bold';
                              }

                              return (
                                <div
                                  key={oIdx}
                                  className={`p-2.5 rounded-xl border flex items-center gap-2 ${optBorder}`}
                                >
                                  <span className="font-mono font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                                  <div className="flex-1">
                                    <MathText text={optText} />
                                  </div>
                                  {isTargetCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                                  {isUserPick && !isTargetCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                                </div>
                              );
                            })}
                          </div>

                          {/* Solution Explanation */}
                          {q.solution && (
                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                              <span className="font-bold text-slate-900 block">💡 Lời giải chi tiết:</span>
                              <div className="leading-relaxed">
                                <MathText text={q.solution} />
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setViewingHistoricalRecord(null);
                      setCurrentView('CATALOG');
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    Về danh sách đề thi
                  </button>

                  <button
                    onClick={() => handleStartExam(selectedConfig)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Làm lại đề khác cùng loại</span>
                  </button>
                </div>
              </div>
            );
          })()
        )}

        {/* ==================================================================== */}
        {/* VIEW 4: EXAM HISTORY (BẢNG VÀNG LỊCH SỬ THI) */}
        {/* ==================================================================== */}
        {currentView === 'HISTORY' && (
          <div className="p-6 overflow-y-auto space-y-4 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-base text-slate-900">
                📜 Lịch Sử Các Lần Thi Thử
              </h3>
              <span className="text-xs text-slate-500">
                Lưu tự động trên thiết bị
              </span>
            </div>

            {history.length === 0 ? (
              <div className="text-center py-12 text-slate-400 space-y-2">
                <Trophy className="w-12 h-12 mx-auto stroke-1 text-slate-300" />
                <p className="text-sm font-semibold">Chưa có bài thi thử nào được ghi nhận.</p>
                <p className="text-xs">Hãy chọn một đề thi và bắt đầu thử sức ngay nhé!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {history.map(record => {
                  const dateStr = new Date(record.submittedAt).toLocaleDateString('vi-VN', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });

                  return (
                    <div
                      key={record.id}
                      className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex items-center justify-between gap-3 hover:border-indigo-400 transition-all"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-sm text-slate-900">
                            {record.examTitle}
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                            {dateStr}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          Đúng {record.correctCount}/{record.totalQuestions} câu • Thời gian: {Math.floor(record.durationSecondsUsed / 60)} phút • +{record.xpEarned} XP
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <span className="text-xl font-black text-indigo-600">
                            {record.score}
                          </span>
                          <span className="text-xs font-semibold text-slate-400">/10</span>
                        </div>

                        <button
                          onClick={() => {
                            setViewingHistoricalRecord(record);
                            setCurrentView('RESULT');
                          }}
                          className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 transition-colors"
                        >
                          Xem lại
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
