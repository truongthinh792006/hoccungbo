import React, { useState, useEffect } from 'react';
import { Math7Lesson, PracticeExercise, ExerciseDifficulty } from '../../types/curriculum';
import { getExercisesByLessonId, getExerciseStats, filterExercises } from '../../services/exerciseService';
import { MathText } from '../common/MathText';
import { 
  Dumbbell, CheckCircle2, Lightbulb, BookOpen, 
  ChevronDown, ChevronUp, Sparkles, Award, 
  Check, RotateCcw, AlertCircle, Loader2
} from 'lucide-react';

interface PracticeDrillSectionProps {
  lesson: Math7Lesson;
}

export const PracticeDrillSection: React.FC<PracticeDrillSectionProps> = ({ lesson }) => {
  const [exercises, setExercises] = useState<PracticeExercise[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<ExerciseDifficulty | 'all'>('all');

  // Exercise interaction states: map by exercise.id
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [checkedStatus, setCheckedStatus] = useState<Record<string, boolean>>({});
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [solvedCorrectly, setSolvedCorrectly] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    getExercisesByLessonId(lesson.id).then(data => {
      if (isMounted) {
        setExercises(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [lesson.id]);

  const stats = getExerciseStats(exercises);
  const filteredList = filterExercises(exercises, activeFilter);

  const completedCount = Object.keys(checkedStatus).filter(id => checkedStatus[id]).length;
  const correctCount = Object.keys(solvedCorrectly).filter(id => solvedCorrectly[id]).length;

  const handleSelectOption = (exId: string, optId: string) => {
    setSelectedAnswers(prev => ({ ...prev, [exId]: optId }));
    // Reset checked status on change so user can re-check
    setCheckedStatus(prev => ({ ...prev, [exId]: false }));
  };

  const handleCheckAnswer = (ex: PracticeExercise) => {
    const selected = selectedAnswers[ex.id];
    if (!selected) return;

    const isCorrect = selected === ex.correctAnswerId;
    setCheckedStatus(prev => ({ ...prev, [ex.id]: true }));
    if (isCorrect) {
      setSolvedCorrectly(prev => ({ ...prev, [ex.id]: true }));
      // Automatically open solution when correct
      setOpenSolutions(prev => ({ ...prev, [ex.id]: true }));
    } else {
      // If incorrect, automatically offer the hint!
      setOpenHints(prev => ({ ...prev, [ex.id]: true }));
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCheckedStatus({});
    setOpenHints({});
    setOpenSolutions({});
    setSolvedCorrectly({});
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 p-8 text-center space-y-3">
        <Loader2 className="w-8 h-8 text-emerald-600 animate-spin mx-auto" />
        <p className="text-xs sm:text-sm font-semibold text-slate-600">
          Đang tải kho bài tập tự luyện chuẩn SGK Kết nối tri thức...
        </p>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center mx-auto">
          <Dumbbell className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-slate-800 text-base">Kho Bài Tập Tự Luyện Đang Cập Nhật</h3>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Hệ thống đang tích cực số hóa bài tập phân hóa 3 mức độ cho bài học này. Con hãy thử sức với bài tập của <strong>Bài 12 (Tổng các góc trong tam giác)</strong> hoặc làm bài Micro-Quiz ở cột bên phải nhé!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-6">
      {/* Header & Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0 shadow-xs">
              <Dumbbell className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                Bài Tập Tự Luyện Phân Hóa ({exercises.length} bài)
              </h3>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Hệ thống bài tập phân loại theo 3 mức độ: Cơ bản, Thông hiểu và Vận dụng kèm gợi ý tư duy & lời giải chi tiết
          </p>
        </div>

        {/* Progress Pill & Reset */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Đã đúng {correctCount}/{exercises.length}</span>
          </div>

          {completedCount > 0 && (
            <button
              onClick={handleReset}
              className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              title="Làm lại từ đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs / Chips */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs font-bold">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeFilter === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
          }`}
        >
          <span>Tất cả</span>
          <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
            activeFilter === 'all' ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-600'
          }`}>
            {stats.total}
          </span>
        </button>

        <button
          onClick={() => setActiveFilter('co_ban')}
          className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeFilter === 'co_ban'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'bg-emerald-50 hover:bg-emerald-100/70 text-emerald-800 border border-emerald-200/60'
          }`}
        >
          <span>🟢 Cơ bản</span>
          <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
            activeFilter === 'co_ban' ? 'bg-emerald-700 text-white' : 'bg-emerald-200 text-emerald-900'
          }`}>
            {stats.coBan}
          </span>
        </button>

        <button
          onClick={() => setActiveFilter('thong_hieu')}
          className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeFilter === 'thong_hieu'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-amber-50 hover:bg-amber-100/70 text-amber-800 border border-amber-200/60'
          }`}
        >
          <span>🟡 Thông hiểu</span>
          <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
            activeFilter === 'thong_hieu' ? 'bg-amber-700 text-white' : 'bg-amber-200 text-amber-900'
          }`}>
            {stats.thongHieu}
          </span>
        </button>

        <button
          onClick={() => setActiveFilter('van_dung')}
          className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
            activeFilter === 'van_dung'
              ? 'bg-purple-600 text-white shadow-xs'
              : 'bg-purple-50 hover:bg-purple-100/70 text-purple-800 border border-purple-200/60'
          }`}
        >
          <span>🔴 Vận dụng</span>
          <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
            activeFilter === 'van_dung' ? 'bg-purple-700 text-white' : 'bg-purple-200 text-purple-900'
          }`}>
            {stats.vanDung}
          </span>
        </button>
      </div>

      {/* Exercises List */}
      <div className="space-y-5">
        {filteredList.map(ex => {
          const selected = selectedAnswers[ex.id];
          const isChecked = checkedStatus[ex.id] || false;
          const isCorrect = isChecked && selected === ex.correctAnswerId;
          const isIncorrect = isChecked && !isCorrect;
          const isHintOpen = openHints[ex.id] || false;
          const isSolutionOpen = openSolutions[ex.id] || false;

          const difficultyBadge = {
            co_ban: { bg: 'bg-emerald-50 text-emerald-800 border-emerald-200', label: 'Cơ bản' },
            thong_hieu: { bg: 'bg-amber-50 text-amber-800 border-amber-200', label: 'Thông hiểu' },
            van_dung: { bg: 'bg-purple-50 text-purple-800 border-purple-200', label: 'Vận dụng' }
          }[ex.difficulty];

          return (
            <div
              key={ex.id}
              className={`rounded-2xl border transition-all p-4 sm:p-5 space-y-4 ${
                isCorrect 
                  ? 'bg-emerald-50/20 border-emerald-300 shadow-2xs' 
                  : isIncorrect
                  ? 'bg-rose-50/20 border-rose-300 shadow-2xs'
                  : 'bg-white border-slate-200/90 hover:border-slate-300'
              }`}
            >
              {/* Exercise Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-7 h-7 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {ex.order}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${difficultyBadge.bg}`}>
                        {difficultyBadge.label}
                      </span>
                      {ex.tags?.map(tag => (
                        <span key={tag} className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mt-1">
                      {ex.title}
                    </h4>
                  </div>
                </div>

                {isCorrect && (
                  <span className="flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0 animate-fadeIn">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chính xác!</span>
                  </span>
                )}
              </div>

              {/* Question Text */}
              <div className="text-slate-800 text-xs sm:text-sm leading-relaxed pl-9">
                <MathText>{ex.question}</MathText>
              </div>

              {/* Multiple Choice Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-9">
                {ex.options.map(opt => {
                  const isSelected = selected === opt.id;
                  let optStyle = 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 text-slate-800';

                  if (isSelected && !isChecked) {
                    optStyle = 'border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500/20 font-semibold';
                  } else if (isChecked) {
                    if (opt.id === ex.correctAnswerId) {
                      optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                    } else if (isSelected && !opt.isCorrect) {
                      optStyle = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                    } else {
                      optStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(ex.id, opt.id)}
                      className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${optStyle}`}
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected 
                          ? isChecked 
                            ? opt.id === ex.correctAnswerId ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-rose-500 bg-rose-500 text-white'
                            : 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <MathText text={opt.text}>{opt.text}</MathText>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons & Feedback Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-100 pl-9">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCheckAnswer(ex)}
                    disabled={!selected}
                    className={`px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 ${
                      !selected 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : isCorrect 
                        ? 'bg-emerald-600 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{isChecked ? 'Kiểm tra lại' : 'Kiểm tra đáp án'}</span>
                  </button>

                  {/* Toggle Hint */}
                  <button
                    onClick={() => setOpenHints(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 ${
                      isHintOpen
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-amber-50 hover:bg-amber-100/70 text-amber-800 border border-amber-200/80'
                    }`}
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>{isHintOpen ? 'Đóng gợi ý' : 'Gợi ý tư duy'}</span>
                  </button>

                  {/* Toggle Solution */}
                  <button
                    onClick={() => setOpenSolutions(prev => ({ ...prev, [ex.id]: !prev[ex.id] }))}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors flex items-center gap-1 ${
                      isSolutionOpen
                        ? 'bg-slate-200 text-slate-900'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                    <span>{isSolutionOpen ? 'Thu gọn lời giải' : 'Lời giải SGK'}</span>
                    {isSolutionOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {isIncorrect && (
                  <span className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                    <span>Chưa đúng, con hãy đọc gợi ý tư duy nhé!</span>
                  </span>
                )}
              </div>

              {/* Step-by-Step Hint Card */}
              {isHintOpen && (
                <div className="ml-9 p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-950 space-y-1.5 animate-fadeIn">
                  <div className="font-bold flex items-center gap-1.5 text-amber-900 text-xs uppercase tracking-wide">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>Gợi Ý Tư Duy Từng Bước</span>
                  </div>
                  <div className="leading-relaxed">
                    <MathText>{ex.hint}</MathText>
                  </div>
                </div>
              )}

              {/* Full Textbook Solution Card */}
              {isSolutionOpen && (
                <div className="ml-9 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2.5 animate-fadeIn">
                  <div className="font-bold flex items-center justify-between text-slate-900 text-xs uppercase tracking-wide border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-1.5 text-emerald-800">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Lời Giải Chi Tiết Chuẩn SGK</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 normal-case flex items-center gap-1">
                      <span>Đáp án đúng:</span>
                      <strong className="text-emerald-700 inline-flex items-center">
                        <MathText text={ex.options.find(o => o.id === ex.correctAnswerId)?.text} />
                      </strong>
                    </span>
                  </div>

                  <div className="leading-relaxed whitespace-pre-line font-serif sm:font-sans">
                    <MathText>{ex.solution}</MathText>
                  </div>

                  {ex.keyTakeaway && (
                    <div className="mt-2 p-2.5 rounded-xl bg-white border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-800">Điểm mấu chốt: </strong>
                        <MathText>{ex.keyTakeaway}</MathText>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
