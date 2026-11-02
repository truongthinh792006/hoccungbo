import React, { useState } from 'react';
import { DrillItem, QuizQuestion } from '../../types/curriculum';
import { QuizAttempt } from '../../types/study';
import { StorageService } from '../../services/storageService';
import { MathRenderer } from '../common/MathRenderer';
import { 
  CheckCircle2, XCircle, 
  Award, ArrowRight, RotateCcw, 
  Lightbulb, Check, X
} from 'lucide-react';

interface QuizEngineProps {
  drill: DrillItem;
  lessonId: string;
  onDrillComplete: (attempt: QuizAttempt) => void;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  drill,
  lessonId,
  onDrillComplete
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, any>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, number>>({});
  const [drillCompleted, setDrillCompleted] = useState(false);
  const [shortAnswerInputs, setShortAnswerInputs] = useState<Record<string, string>>({});
  const [tfSelections, setTfSelections] = useState<Record<string, Record<number, boolean>>>({});

  const question = drill.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === drill.questions.length - 1;

  // Handle Multiple Choice selection
  const handleSelectOption = (questionId: string, optionId: string) => {
    if (submittedQuestions[questionId]) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  // Handle True / False item selection
  const handleToggleTf = (questionId: string, itemIdx: number, value: boolean) => {
    if (submittedQuestions[questionId]) return;
    setTfSelections(prev => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [itemIdx]: value
      }
    }));
  };

  // Submit current question
  const handleSubmitQuestion = () => {
    if (!question) return;
    setSubmittedQuestions(prev => ({ ...prev, [question.id]: true }));
  };

  // Reveal next progressive hint for question
  const handleNextHint = (questionId: string) => {
    const current = revealedHints[questionId] || 0;
    const max = question.hints.length;
    if (current < max) {
      setRevealedHints(prev => ({ ...prev, [questionId]: current + 1 }));
    }
  };

  // Evaluate single question score
  const isQuestionCorrect = (q: QuizQuestion): boolean => {
    if (q.tier === 'multiple_choice') {
      const selected = selectedAnswers[q.id];
      const correctOpt = q.options?.find(o => o.isCorrect);
      return selected === correctOpt?.id;
    } else if (q.tier === 'true_false') {
      const userChoices = tfSelections[q.id] || {};
      if (!q.tfItems) return false;
      return q.tfItems.every((item, idx) => userChoices[idx] === item.isTrue);
    } else if (q.tier === 'short_answer') {
      const input = (shortAnswerInputs[q.id] || '').trim().toLowerCase();
      if (!q.acceptedAnswers) return false;
      return q.acceptedAnswers.some(ans => ans.trim().toLowerCase() === input);
    }
    return false;
  };

  // Calculate final score when finished
  const handleFinishDrill = () => {
    let earnedPoints = 0;
    let totalPoints = 0;
    const weakCompetencies: string[] = [];

    drill.questions.forEach(q => {
      totalPoints += q.points;
      const correct = isQuestionCorrect(q);
      if (correct) {
        earnedPoints += q.points;
      } else if (q.competencyRef) {
        weakCompetencies.push(q.competencyRef);
      }
    });

    const accuracyRate = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;

    const attempt: QuizAttempt = {
      drillId: drill.id,
      lessonId,
      timestamp: new Date().toISOString(),
      score: earnedPoints,
      totalPoints,
      answers: {
        mc: selectedAnswers,
        tf: tfSelections,
        sa: shortAnswerInputs
      },
      isCompleted: true,
      accuracyRate,
      weakCompetenciesIdentified: weakCompetencies
    };

    StorageService.recordQuizAttempt(attempt);
    setDrillCompleted(true);
    onDrillComplete(attempt);
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setSubmittedQuestions({});
    setRevealedHints({});
    setShortAnswerInputs({});
    setTfSelections({});
    setDrillCompleted(false);
  };

  if (drillCompleted) {
    let earnedPoints = 0;
    let totalPoints = 0;
    drill.questions.forEach(q => {
      totalPoints += q.points;
      if (isQuestionCorrect(q)) earnedPoints += q.points;
    });
    const accuracy = Math.round((earnedPoints / totalPoints) * 100);

    return (
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 text-center space-y-6 shadow-sm animate-fadeIn">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto shadow-md shadow-amber-200">
          <Award className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Kết Quả Luyện Tập 3 Cấp Độ
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
            {accuracy >= 80 ? 'Xuất Sắc! Con Đã Nắm Rất Vững! 🎉' : accuracy >= 50 ? 'Khá Lắm! Cố Gắng Thêm Một Chút Nhé! 💪' : 'Cần Ôn Lại Lý Thuyết Trọng Tâm! 🌱'}
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Bài luyện: <strong>{drill.title}</strong>
          </p>
        </div>

        {/* Score metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <span className="text-xs text-emerald-700 font-semibold block">Điểm số</span>
            <span className="text-2xl font-extrabold text-emerald-800">{earnedPoints} / {totalPoints}</span>
          </div>
          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-center">
            <span className="text-xs text-sky-700 font-semibold block">Độ chính xác</span>
            <span className="text-2xl font-extrabold text-sky-800">{accuracy}%</span>
          </div>
          <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-center col-span-2 sm:col-span-1">
            <span className="text-xs text-indigo-700 font-semibold block">Lưu kết quả</span>
            <span className="text-xs font-bold text-indigo-800 mt-2 block">Đã đồng bộ sang sổ phụ huynh</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <button
            onClick={handleRestart}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Làm lại bài này</span>
          </button>
        </div>
      </div>
    );
  }

  const isSubmitted = submittedQuestions[question.id] || false;
  const isCorrect = isSubmitted && isQuestionCorrect(question);
  const currentHintCount = revealedHints[question.id] || 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-sm space-y-6">
      {/* Quiz Header & Progress Bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 uppercase tracking-wide">
              {question.tier === 'multiple_choice' && 'Cấp độ 1: Trắc Nghiệm 4 Phương Án'}
              {question.tier === 'true_false' && 'Cấp độ 2: Đánh Giá Đúng / Sai (Chuẩn GDPT 2018)'}
              {question.tier === 'short_answer' && 'Cấp độ 3: Trả Lời Ngắn / Điền Kết Quả'}
            </span>
          </div>
          <span className="font-semibold text-slate-700">
            Câu {currentQuestionIndex + 1} / {drill.questions.length} • {question.points} điểm
          </span>
        </div>

        {/* Progress Line */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / drill.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Content */}
      <div className="space-y-3">
        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          <MathRenderer content={question.questionText} />
        </h4>

        {question.mathFormula && (
          <div className="p-3 bg-slate-900 text-white rounded-xl text-center shadow-inner">
            <MathRenderer math={question.mathFormula} block={true} className="text-base font-mono text-emerald-300" />
          </div>
        )}
      </div>

      {/* Tier 1: Multiple Choice Options */}
      {question.tier === 'multiple_choice' && question.options && (
        <div className="space-y-2.5">
          {question.options.map((opt, idx) => {
            const isSelected = selectedAnswers[question.id] === opt.id;
            const letter = String.fromCharCode(65 + idx); // A, B, C, D

            let buttonStyle = 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300';
            if (isSelected) {
              buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20';
            }
            if (isSubmitted) {
              if (opt.isCorrect) {
                buttonStyle = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-semibold';
              } else if (isSelected && !opt.isCorrect) {
                buttonStyle = 'bg-rose-100 border-rose-400 text-rose-900';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(question.id, opt.id)}
                disabled={isSubmitted}
                className={`w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all text-xs sm:text-sm ${buttonStyle}`}
              >
                <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 font-bold text-slate-700 flex items-center justify-center shrink-0">
                  {letter}
                </span>
                <span className="flex-1 leading-relaxed">
                  <MathRenderer content={opt.text} />
                </span>
                {isSubmitted && opt.isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isSubmitted && isSelected && !opt.isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Tier 2: True/False (GDPT 2018 format with 4 statements) */}
      {question.tier === 'true_false' && question.tfItems && (
        <div className="space-y-3">
          <p className="text-xs text-slate-500 italic">
            * Với mỗi ý a), b), c), d) - hãy chọn ĐÚNG hoặc SAI:
          </p>
          <div className="space-y-2.5">
            {question.tfItems.map((item, idx) => {
              const letter = String.fromCharCode(97 + idx); // a, b, c, d
              const userSelection = tfSelections[question.id]?.[idx];
              const isItemCorrect = isSubmitted && userSelection === item.isTrue;

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isSubmitted
                      ? isItemCorrect
                        ? 'bg-emerald-50/60 border-emerald-300'
                        : 'bg-rose-50/60 border-rose-300'
                      : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 leading-relaxed flex-1">
                      <span className="font-bold text-slate-900 shrink-0">{letter})</span>
                      <MathRenderer content={item.statement} />
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleToggleTf(question.id, idx, true)}
                        disabled={isSubmitted}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1 transition-all ${
                          userSelection === true
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>ĐÚNG</span>
                      </button>
                      <button
                        onClick={() => handleToggleTf(question.id, idx, false)}
                        disabled={isSubmitted}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-1 transition-all ${
                          userSelection === false
                            ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>SAI</span>
                      </button>
                    </div>
                  </div>

                  {isSubmitted && item.explanation && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                      <span className="font-semibold text-slate-700">Giải thích: </span>
                      <MathRenderer content={item.explanation} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tier 3: Short Answer */}
      {question.tier === 'short_answer' && (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Nhập Câu Trả Lời Của Em:
            </label>
            <input
              type="text"
              value={shortAnswerInputs[question.id] || ''}
              onChange={(e) => setShortAnswerInputs(prev => ({ ...prev, [question.id]: e.target.value }))}
              disabled={isSubmitted}
              placeholder={question.placeholder || 'Nhập kết quả...'}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-medium"
            />
          </div>
        </div>
      )}

      {/* Progressive Hints Section */}
      {question.hints && question.hints.length > 0 && !isSubmitted && (
        <div className="bg-amber-50/70 border border-amber-200/70 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Gợi Ý Dẫn Dắt Socratic ({currentHintCount} / {question.hints.length})</span>
            </span>
            {currentHintCount < question.hints.length && (
              <button
                onClick={() => handleNextHint(question.id)}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline"
              >
                Mở gợi ý tiếp theo
              </button>
            )}
          </div>

          {currentHintCount > 0 ? (
            <div className="space-y-1.5">
              {question.hints.slice(0, currentHintCount).map((hint, idx) => (
                <div key={idx} className="text-xs text-amber-900 bg-white/70 p-2 rounded-lg border border-amber-200/50">
                  <span className="font-semibold text-amber-950">Gợi ý {idx + 1}: </span>
                  <MathRenderer content={hint} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-amber-800/80">
              Nếu em còn băn khoăn cách giải, hãy nhấn "Mở gợi ý tiếp theo" để xem hướng dẫn gợi mở nhé!
            </p>
          )}
        </div>
      )}

      {/* Explanation after submission */}
      {isSubmitted && (
        <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 animate-fadeIn ${
          isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
        }`}>
          <div className="flex items-center gap-2 font-bold text-sm">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Chính xác tuyệt vời! (+{question.points} điểm)</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Chưa hoàn toàn chính xác. Hãy xem giải thích chi tiết bên dưới nhé:</span>
              </>
            )}
          </div>
          <div className="leading-relaxed pt-1 border-t border-current/20">
            <span className="font-semibold">Lời giải & Lập luận: </span>
            <MathRenderer content={question.explanation} />
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 transition-all"
        >
          Câu trước
        </button>

        {!isSubmitted ? (
          <button
            onClick={handleSubmitQuestion}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm shadow-emerald-600/30 transition-all flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Kiểm tra đáp án</span>
          </button>
        ) : isLastQuestion ? (
          <button
            onClick={handleFinishDrill}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/30 transition-all flex items-center gap-1.5"
          >
            <Award className="w-4 h-4 text-amber-200" />
            <span>Xem tổng kết & Lưu tiến độ</span>
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.min(drill.questions.length - 1, prev + 1))}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>Câu tiếp theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
