import React, { useState } from 'react';
import { QuizQuestionItem } from '../../types/curriculum';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { 
  CheckCircle2, AlertCircle, ArrowRight, RotateCcw, 
  Lightbulb, Award, Check, Maximize2, Bot, Target 
} from 'lucide-react';

interface DrillQuizProps {
  lessonId: string;
  questions: QuizQuestionItem[];
}

export const DrillQuiz: React.FC<DrillQuizProps> = ({ lessonId, questions = [] }) => {
  const { submitQuiz, markCompetencyMastered, openQuizModal } = useApp();
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
    setSubmittedStatus(prev => ({ ...prev, [currentQ.id]: false }));
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswers[currentQ.id]) return;

    const newAttempts = currentAttempts + 1;
    setAttemptCount(prev => ({ ...prev, [currentQ.id]: newAttempts }));
    setSubmittedStatus(prev => ({ ...prev, [currentQ.id]: true }));

    const correct = selectedAnswers[currentQ.id] === currentQ.correctAnswerId;
    if (correct) {
      // Automatically check off corresponding competency in left panel!
      if (currentQ.competencyRef) {
        markCompetencyMastered(currentQ.competencyRef, true);
      }
    } else {
      // On incorrect attempt: automatically unlock guiding hint from Socratic AI without revealing answer!
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
    let finalScore = 0;
    let totalPoints = 0;
    questions.forEach(q => {
      totalPoints += q.points;
      if (selectedAnswers[q.id] === q.correctAnswerId) finalScore += q.points;
    });
    const percentage = totalPoints > 0 ? Math.round((finalScore / totalPoints) * 100) : 0;

    return (
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 text-center space-y-4 shadow-xs animate-fadeIn">
        <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center font-bold text-xl shadow-xs">
          <Award className="w-8 h-8" />
        </div>

        <div className="space-y-1">
          <h4 className="font-extrabold text-lg text-slate-900">
            {percentage >= 75 ? 'Xuất Sắc! Em Đã Nắm Vững!' : 'Em Đã Hoàn Thành Luyện Tập!'}
          </h4>
          <p className="text-xs text-slate-500">
            Kết quả của em đã được ghi nhận vào Bảng Tổng Kết Năng Lực.
          </p>
        </div>

        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 flex items-center justify-around">
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-800 block">Điểm số</span>
            <span className="text-xl font-extrabold text-emerald-950">{finalScore} / {totalPoints}</span>
          </div>
          <div className="h-8 w-px bg-emerald-200" />
          <div>
            <span className="text-[10px] uppercase font-bold text-emerald-800 block">Độ chính xác</span>
            <span className="text-xl font-extrabold text-emerald-950">{percentage}%</span>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Luyện lại bộ câu hỏi này</span>
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
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
      {/* Top Banner: Quick trigger to open Sliding Panel */}
      <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tierBadge.color}`}>
            {tierBadge.label}
          </span>
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
            [{currentQ.competencyRef}]
          </span>
        </div>

        <button
          onClick={openQuizModal}
          className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-lg border border-emerald-200 transition-colors"
          title="Mở toàn màn hình / Sliding Panel"
        >
          <Maximize2 className="w-3 h-3" />
          <span>Sliding Panel</span>
        </button>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
          <span>Tiến độ câu hỏi</span>
          <span className="font-semibold text-slate-700">Câu {currentIndex + 1} / {questions.length}</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Text */}
      <div className="space-y-2">
        <h4 className="font-bold text-sm text-slate-900 leading-snug">
          <MathText>{currentQ.question}</MathText>
        </h4>

        {currentQ.formula && (
          <div className="bg-slate-900 text-emerald-300 p-2.5 rounded-xl text-center text-xs font-mono shadow-inner">
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
              style = 'bg-amber-100 border-amber-400 text-amber-950';
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

      {/* Feedback & Socratic Hints */}
      {isSubmitted && (
        <div className="space-y-2 animate-fadeIn">
          {isCorrect ? (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Chính xác tuyệt đối! (+{currentQ.points} điểm)</span>
              </div>
              <div className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-1 rounded-lg flex items-center gap-1">
                <Target className="w-3 h-3 text-emerald-600" />
                <span>Đã làm chủ mục tiêu [{currentQ.competencyRef}] (cột bên trái đã tích xanh!)</span>
              </div>
              <p className="leading-relaxed pt-1 border-t border-emerald-200/60 text-slate-700">
                <MathText>{currentQ.explanation}</MathText>
              </p>
            </div>
          ) : (
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>Gia Sư Socratic Gợi Ý (Mức {currentHintIndex}/{currentQ.progressiveHints.length}):</span>
              </div>

              <div className="bg-white/90 p-2.5 rounded-xl border border-amber-200 text-slate-800 font-medium">
                💡 <em>"{currentQ.progressiveHints[currentHintIndex - 1] || currentQ.progressiveHints[0]}"</em>
              </div>

              <p className="text-[11px] text-amber-900">
                Thầy/cô chưa tiết lộ đáp án ngay để em tự làm chủ bài học! Hãy chọn lại phương án khác và bấm <strong>Kiểm Tra Lại</strong> nhé!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="pt-2 flex items-center justify-between gap-2">
        {!isSubmitted ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswers[currentQ.id]}
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-xs transition-all"
          >
            Kiểm tra đáp án
          </button>
        ) : isCorrect ? (
          <button
            onClick={handleNext}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <span>{currentIndex < questions.length - 1 ? 'Sang câu tiếp theo' : 'Xem kết quả tổng kết'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <div className="w-full flex items-center gap-2">
            <button
              onClick={handleCheckAnswer}
              className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition-all shadow-xs"
            >
              Kiểm tra lại
            </button>
            {currentHintIndex < currentQ.progressiveHints.length && (
              <button
                onClick={handleUnlockHint}
                className="px-3 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs flex items-center gap-1 transition-all"
                title="Mở thêm gợi ý"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>Gợi ý thêm</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
