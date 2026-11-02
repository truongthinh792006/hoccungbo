import React, { useState } from 'react';
import { QuizQuestionItem } from '../../types/curriculum';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { 
  CheckCircle2, AlertCircle, ArrowRight, RotateCcw, 
  Lightbulb, Award, Check
} from 'lucide-react';

interface DrillQuizProps {
  lessonId: string;
  questions: QuizQuestionItem[];
}

export const DrillQuiz: React.FC<DrillQuizProps> = ({ lessonId, questions = [] }) => {
  const { submitQuiz } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, number>>({});
  const [attemptCount, setAttemptCount] = useState<Record<string, number>>({});
  const [quizFinished, setQuizFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-6 text-center border border-slate-200">
        <p className="text-xs text-slate-500">Bài học này chưa có câu hỏi kiểm tra chẩn đoán.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isSubmitted = submittedStatus[currentQ.id] || false;
  const currentAttempts = attemptCount[currentQ.id] || 0;
  const currentHintIndex = revealedHints[currentQ.id] || 0;
  const isCorrect = selectedAnswers[currentQ.id] === currentQ.correctAnswerId;

  const handleSelectOption = (optId: string) => {
    if (isSubmitted && isCorrect) return; // Locked once fully correct
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: optId }));
    // Reset submission state on re-choosing
    setSubmittedStatus(prev => ({ ...prev, [currentQ.id]: false }));
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswers[currentQ.id]) return;

    const newAttempts = currentAttempts + 1;
    setAttemptCount(prev => ({ ...prev, [currentQ.id]: newAttempts }));
    setSubmittedStatus(prev => ({ ...prev, [currentQ.id]: true }));

    const correct = selectedAnswers[currentQ.id] === currentQ.correctAnswerId;
    // On incorrect attempt: automatically unlock next guiding hint!
    if (!correct) {
      setRevealedHints(prev => ({
        ...prev,
        [currentQ.id]: Math.min(currentQ.progressiveHints.length, (prev[currentQ.id] || 0) + 1)
      }));
    }
  };

  const handleUnlockHint = () => {
    setRevealedHints(prev => ({
      ...prev,
      [currentQ.id]: Math.min(currentQ.progressiveHints.length, (prev[currentQ.id] || 0) + 1)
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Calculate final score
      let score = 0;
      let total = 0;
      const isCorrectMap: Record<string, boolean> = {};

      questions.forEach(q => {
        total += q.points;
        const correct = selectedAnswers[q.id] === q.correctAnswerId;
        isCorrectMap[q.id] = correct;
        if (correct) score += q.points;
      });

      submitQuiz(lessonId, selectedAnswers, score, total, isCorrectMap, revealedHints);
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmittedStatus({});
    setRevealedHints({});
    setAttemptCount({});
    setQuizFinished(false);
  };

  // Completion Screen
  if (quizFinished) {
    let earned = 0;
    let total = 0;
    questions.forEach(q => {
      total += q.points;
      if (selectedAnswers[q.id] === q.correctAnswerId) earned += q.points;
    });
    const pct = total > 0 ? Math.round((earned / total) * 100) : 0;

    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 text-center space-y-5 animate-fadeIn">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-sm">
          <Award className="w-7 h-7" />
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Tổng Kết Bài Luyện Chẩn Đoán (Micro-Quiz)
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-1">
            {pct >= 80 ? 'Con Đạt Chuẩn Xuất Sắc! 🎉' : pct >= 60 ? 'Hoàn Thành Tốt! Cố Thêm Chút Nữa Nhé! 💪' : 'Cần Xem Lại Gợi Ý & Lý Thuyết 🌱'}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Kết quả đã được đồng bộ trực tiếp sang Dashboard của Bố Mẹ.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-[10px] font-bold text-emerald-800 uppercase block">Điểm số</span>
            <span className="text-xl font-extrabold text-emerald-900">{earned} / {total}</span>
          </div>
          <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-200">
            <span className="text-[10px] font-bold text-indigo-800 uppercase block">Độ chính xác</span>
            <span className="text-xl font-extrabold text-indigo-900">{pct}%</span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Luyện tập lại</span>
        </button>
      </div>
    );
  }

  const tierBadge =
    currentQ.tier === 'nhan_biet'
      ? { label: 'Bậc 1: Nhận biết', color: 'bg-sky-50 text-sky-700 border-sky-200' }
      : currentQ.tier === 'thong_hieu'
      ? { label: 'Bậc 2: Thông hiểu', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
      : { label: 'Bậc 3: Vận dụng', color: 'bg-purple-50 text-purple-700 border-purple-200' };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-5">
      {/* Quiz Progress & Tier Tag */}
      <div>
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tierBadge.color}`}>
              {tierBadge.label}
            </span>
          </div>
          <span className="font-semibold text-slate-600">
            Câu {currentIndex + 1} / {questions.length} • {currentQ.points} điểm
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Text */}
      <div className="space-y-2">
        <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
          <MathText>{currentQ.question}</MathText>
        </h4>

        {currentQ.formula && (
          <div className="bg-slate-900 text-emerald-300 p-2.5 rounded-xl text-center text-xs font-mono">
            <MathText formula={currentQ.formula} block={true} />
          </div>
        )}
      </div>

      {/* Options List */}
      <div className="space-y-2">
        {currentQ.options.map((opt, idx) => {
          const letter = String.fromCharCode(65 + idx);
          const isSelected = selectedAnswers[currentQ.id] === opt.id;

          let style = 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100';
          if (isSelected) {
            style = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20';
          }
          if (isSubmitted) {
            if (isCorrect && isSelected) {
              style = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
            } else if (!isCorrect && isSelected) {
              style = 'bg-amber-100 border-amber-400 text-amber-950'; // Yellow cue for incorrect!
            }
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleSelectOption(opt.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-2xl border text-left text-xs sm:text-sm transition-all ${style}`}
            >
              <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 text-xs flex items-center justify-center shrink-0">
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

      {/* Feedback & Guiding Hints */}
      {isSubmitted && (
        <div className="space-y-2 animate-fadeIn">
          {isCorrect ? (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Tuyệt vời! Em đã nắm rất vững kiến thức này (+{currentQ.points} điểm)</span>
              </div>
              <p className="leading-relaxed pt-1 border-t border-emerald-200/60">
                <MathText>{currentQ.explanation}</MathText>
              </p>
            </div>
          ) : (
            /* Yellow hint visual cue: NO DIRECT SOLUTION on first mistake! */
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold flex items-center gap-1.5 text-amber-900">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Chưa hoàn toàn chính xác. Hãy đọc gợi ý để tự chọn lại nhé:</span>
                </span>
                <span className="text-[10px] font-bold bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-full">
                  Lần thử {currentAttempts}
                </span>
              </div>

              {/* Progressive Hints List */}
              <div className="space-y-1.5 pt-1">
                {currentQ.progressiveHints.slice(0, currentHintIndex).map((hint, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-2 rounded-xl bg-white/90 border border-amber-200 text-amber-900 text-xs leading-relaxed"
                  >
                    <MathText>{hint}</MathText>
                  </div>
                ))}
              </div>

              {currentHintIndex < currentQ.progressiveHints.length && (
                <button
                  onClick={handleUnlockHint}
                  className="text-xs font-bold text-amber-900 underline hover:text-amber-950 block pt-1"
                >
                  Mở thêm gợi ý sâu hơn ({currentHintIndex + 1}/{currentQ.progressiveHints.length})
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <button
          onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
          disabled={currentIndex === 0}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-800 disabled:opacity-30"
        >
          Câu trước
        </button>

        {!isSubmitted ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswers[currentQ.id]}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Kiểm tra</span>
            <CheckCircle2 className="w-3.5 h-3.5" />
          </button>
        ) : !isCorrect ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswers[currentQ.id]}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>Thử lại đáp án</span>
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5"
          >
            <span>{currentIndex === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
