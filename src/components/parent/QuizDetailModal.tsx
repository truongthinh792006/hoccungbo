import React from 'react';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { CheckCircle2, AlertCircle, X, Award, Lightbulb, Clock } from 'lucide-react';

interface QuizDetailModalProps {
  lessonId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const QuizDetailModal: React.FC<QuizDetailModalProps> = ({
  lessonId,
  isOpen,
  onClose
}) => {
  const { allLessons, quizSubmissions } = useApp();

  if (!isOpen) return null;

  const lesson = allLessons.find(l => l.id === lessonId);
  const submission = quizSubmissions[lessonId];

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-100 overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900">
                Chi Tiết Bài Làm Của Con
              </h3>
              <p className="text-xs text-slate-500">
                {lesson ? lesson.title : 'Bài kiểm tra chẩn đoán'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-200/60 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {submission ? (
            <>
              {/* Score summary bar */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-emerald-800 font-bold block">Tổng kết quả đạt được:</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-extrabold text-emerald-950">
                      {submission.score} / {submission.totalPoints} điểm
                    </span>
                    <span className="text-xs font-bold text-emerald-700">
                      ({submission.percentage}% chính xác)
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {submission.timestamp}
                  </span>
                </div>
              </div>

              {/* Question list breakdown */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Phân tích từng câu hỏi:
                </span>

                {lesson?.diagnosticQuiz.map((q, idx) => {
                  const userAnsId = submission.answers[q.id];
                  const userOpt = q.options.find(o => o.id === userAnsId);
                  const correctOpt = q.options.find(o => o.isCorrect);
                  const isQCorrect = submission.isCorrect[q.id];
                  const hintsUsed = submission.hintsUsedCount[q.id] || 0;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border text-xs space-y-2.5 transition-all ${
                        isQCorrect
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : 'bg-rose-50/50 border-rose-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-md bg-white border border-slate-200 font-bold text-slate-700 flex items-center justify-center shrink-0 text-[10px]">
                            {idx + 1}
                          </span>
                          <span className="font-bold text-slate-900 leading-snug">
                            <MathText>{q.question}</MathText>
                          </span>
                        </div>

                        {isQCorrect ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                            <CheckCircle2 className="w-3 h-3" /> Đúng (+{q.points}đ)
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                            <AlertCircle className="w-3 h-3" /> Chưa đúng
                          </span>
                        )}
                      </div>

                      {/* Chosen vs Correct */}
                      <div className="bg-white/80 p-2.5 rounded-xl border border-slate-200/80 space-y-1">
                        <div>
                          <span className="font-semibold text-slate-600">Con đã chọn: </span>
                          <span className={isQCorrect ? 'font-bold text-emerald-800' : 'font-bold text-rose-800'}>
                            {userOpt ? <MathText>{userOpt.text}</MathText> : 'Chưa chọn'}
                          </span>
                        </div>

                        {!isQCorrect && (
                          <div>
                            <span className="font-semibold text-slate-600">Đáp án chuẩn: </span>
                            <span className="font-bold text-emerald-800">
                              {correctOpt ? <MathText>{correctOpt.text}</MathText> : ''}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Hints Used info */}
                      {hintsUsed > 0 && (
                        <div className="flex items-center gap-1 text-[11px] text-amber-800 bg-amber-50 px-2 py-1 rounded-lg">
                          <Lightbulb className="w-3 h-3 text-amber-600 shrink-0" />
                          <span>Con đã mở {hintsUsed} gợi ý Socratic trước khi trả lời.</span>
                        </div>
                      )}

                      {/* Explanation */}
                      <div className="text-[11px] text-slate-600 pt-1 border-t border-slate-200/50 leading-relaxed">
                        <span className="font-bold text-slate-700">Lời giải chi tiết: </span>
                        <MathText>{q.explanation}</MathText>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="text-center py-8 space-y-2">
              <p className="text-sm text-slate-600">Con chưa làm bài kiểm tra cho bài học này.</p>
              <p className="text-xs text-slate-400">Khi con làm xong Micro-Quiz bên Phòng Tự Học, kết quả sẽ hiện ở đây.</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
