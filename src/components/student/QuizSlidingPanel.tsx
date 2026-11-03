import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { 
  X, CheckCircle2, AlertCircle, ArrowRight, RotateCcw, 
  Lightbulb, Award, Check, Sparkles, Target, Bot 
} from 'lucide-react';

export const QuizSlidingPanel: React.FC = () => {
  const { 
    isQuizModalOpen, 
    closeQuizModal, 
    currentLesson, 
    markCompetencyMastered, 
    submitQuiz 
  } = useApp();

  const questions = currentLesson.diagnosticQuiz || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, number>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isQuizModalOpen) return null;

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={closeQuizModal} />
        <div className="relative w-full max-w-xl bg-white h-full shadow-2xl p-6 flex flex-col justify-center text-center space-y-4">
          <p className="text-sm text-slate-500">Bài học này chưa có bộ câu hỏi Micro-Quiz.</p>
          <button onClick={closeQuizModal} className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold mx-auto">
            Đóng
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isSubmitted = submittedStatus[currentQ.id] || false;
  const currentHintIndex = revealedHints[currentQ.id] || 0;
  const isCorrect = selectedAnswers[currentQ.id] === currentQ.correctAnswerId;

  const handleSelectOption = (optId: string) => {
    if (isSubmitted && isCorrect) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: optId }));
    setSubmittedStatus(prev => ({ ...prev, [currentQ.id]: false }));
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswers[currentQ.id]) return;

    setSubmittedStatus(prev => ({ ...prev, [currentQ.id]: true }));
    const correct = selectedAnswers[currentQ.id] === currentQ.correctAnswerId;

    if (correct) {
      // Automatically check off competency in AppContext & Left Panel!
      if (currentQ.competencyRef) {
        markCompetencyMastered(currentQ.competencyRef, true);
      }
    } else {
      // Trigger Socratic AI Hint without revealing the final answer!
      setRevealedHints(prev => ({
        ...prev,
        [currentQ.id]: Math.min(currentQ.progressiveHints.length, (prev[currentQ.id] || 0) + 1)
      }));
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      let score = 0;
      let total = 0;
      const isCorrectMap: Record<string, boolean> = {};

      questions.forEach(q => {
        total += q.points;
        const correct = selectedAnswers[q.id] === q.correctAnswerId;
        isCorrectMap[q.id] = correct;
        if (correct) score += q.points;
      });

      submitQuiz(currentLesson.id, selectedAnswers, score, total, isCorrectMap, revealedHints);
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmittedStatus({});
    setRevealedHints({});
    setQuizFinished(false);
  };

  const tierBadge =
    currentQ.tier === 'nhan_biet'
      ? { label: 'Bậc 1: Nhận biết', color: 'bg-sky-50 text-sky-700 border-sky-200' }
      : currentQ.tier === 'thong_hieu'
      ? { label: 'Bậc 2: Thông hiểu', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
      : { label: 'Bậc 3: Vận dụng', color: 'bg-purple-50 text-purple-700 border-purple-200' };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={closeQuizModal}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Luyện Micro-Quiz 4 Câu
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs text-slate-500 font-semibold truncate max-w-[200px] sm:max-w-xs">
                  {currentLesson.title}
                </span>
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mt-0.5">
                Chẩn Đoán Năng Lực Từng Bước
              </h3>
            </div>
          </div>

          <button
            onClick={closeQuizModal}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 bg-slate-50/30">
          {quizFinished ? (
            /* Results Screen */
            <div className="text-center py-8 space-y-5 animate-fadeIn max-w-md mx-auto">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-md shadow-emerald-500/20">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xl font-extrabold text-slate-900">
                  Hoàn Thành Bài Luyện Tập!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Các mục tiêu năng lực tương ứng đã được tự động tích lũy và đánh dấu vào bảng học tập của em.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2 text-left">
                <div className="text-xs text-slate-500">Mục tiêu bài học đạt được:</div>
                <div className="space-y-1.5">
                  {currentLesson.learningTargets.map(t => (
                    <div key={t.id} className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>[{t.code}] {t.description.replace(/\$.*?\$/g, '')}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Luyện lại</span>
                </button>
                <button
                  onClick={closeQuizModal}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/30 transition-all"
                >
                  Hoàn tất & Đóng
                </button>
              </div>
            </div>
          ) : (
            /* Quiz Active Question Screen */
            <>
              {/* Progress Bar & Header */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tierBadge.color}`}>
                      {tierBadge.label}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                      <Target className="w-3 h-3 text-emerald-600" />
                      <span>Mục tiêu: {currentQ.competencyRef}</span>
                    </span>
                  </div>
                  <span className="font-semibold text-slate-600">
                    Câu {currentIndex + 1} / {questions.length} • {currentQ.points} điểm
                  </span>
                </div>

                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-3">
                <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                  <MathText>{currentQ.question}</MathText>
                </h4>

                {currentQ.formula && (
                  <div className="bg-slate-900 text-emerald-300 p-3 rounded-xl text-center text-xs font-mono shadow-inner">
                    <MathText formula={currentQ.formula} block={true} />
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {currentQ.options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isSelected = selectedAnswers[currentQ.id] === opt.id;

                  let style = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300';
                  if (isSelected) {
                    style = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20';
                  }
                  if (isSubmitted) {
                    if (isCorrect && isSelected) {
                      style = 'bg-emerald-100 border-emerald-600 text-emerald-950 font-bold';
                    } else if (!isCorrect && isSelected) {
                      style = 'bg-amber-100 border-amber-400 text-amber-950';
                    }
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all shadow-xs ${style}`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 font-bold text-slate-700 text-xs flex items-center justify-center shrink-0">
                        {letter}
                      </span>
                      <span className="flex-1 leading-relaxed">
                        <MathText>{opt.text}</MathText>
                      </span>
                      {isSubmitted && isCorrect && isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {isSubmitted && !isCorrect && isSelected && (
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback and Socratic Hints */}
              {isSubmitted && (
                <div className="space-y-3 animate-fadeIn">
                  {isCorrect ? (
                    /* Correct celebration & competency mastery cue */
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-2">
                      <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
                        <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Chính xác tuyệt đối! (+{currentQ.points} điểm)</span>
                      </div>
                      <p className="text-emerald-900 font-semibold bg-emerald-100/70 p-2 rounded-xl">
                        ✓ Năng lực <strong>[{currentQ.competencyRef}]</strong> đã được tự động đánh dấu hoàn thành ở bảng bên trái!
                      </p>
                      <p className="leading-relaxed pt-1 border-t border-emerald-200/60 text-slate-700">
                        <MathText>{currentQ.explanation}</MathText>
                      </p>
                    </div>
                  ) : (
                    /* Socratic AI Hint: NO DIRECT ANSWER, encourages retry! */
                    <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-2.5">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                        <Bot className="w-4 h-4 text-emerald-600" />
                        <span>Gia Sư Socratic AI Gợi Ý (Mức {currentHintIndex}/{currentQ.progressiveHints.length}):</span>
                      </div>

                      <div className="bg-white/90 p-3 rounded-xl border border-amber-200 text-slate-800 font-medium leading-relaxed">
                        💡 <em>"{currentQ.progressiveHints[currentHintIndex - 1] || currentQ.progressiveHints[0]}"</em>
                      </div>

                      <p className="text-[11px] text-amber-900">
                        Thầy/cô chưa tiết lộ đáp án ngay để em tự tư duy nhé! Em hãy đọc kĩ gợi ý trên, chọn lại phương án khác rồi bấm <strong>Kiểm Tra Lại</strong> nhé!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Actions */}
        {!quizFinished && (
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-white flex items-center justify-between gap-3">
            {!isSubmitted ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedAnswers[currentQ.id]}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Kiểm tra đáp án</span>
              </button>
            ) : isCorrect ? (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>{currentIndex < questions.length - 1 ? 'Sang câu tiếp theo' : 'Xem kết quả tổng kết'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="w-full flex items-center gap-2">
                <button
                  onClick={handleCheckAnswer}
                  className="flex-1 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Thử kiểm tra lại</span>
                </button>
                {currentHintIndex < currentQ.progressiveHints.length && (
                  <button
                    onClick={() => {
                      setRevealedHints(prev => ({
                        ...prev,
                        [currentQ.id]: Math.min(currentQ.progressiveHints.length, (prev[currentQ.id] || 0) + 1)
                      }));
                    }}
                    className="px-3 py-3 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-all flex items-center gap-1"
                    title="Mở thêm gợi ý tiếp theo"
                  >
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>Thêm gợi ý</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
