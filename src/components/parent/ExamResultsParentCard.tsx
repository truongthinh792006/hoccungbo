import React, { useMemo } from 'react';
import { Trophy, Clock, Sparkles } from 'lucide-react';
import { getExamHistory, getExamStats } from '../../services/examService';
import { useApp } from '../../context/AppContext';

export const ExamResultsParentCard: React.FC = () => {
  const { openExamModal } = useApp();
  const history = useMemo(() => getExamHistory(), []);
  const stats = useMemo(() => getExamStats(), []);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
            <Trophy className="w-5 h-5 fill-amber-500 text-amber-600" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-slate-900">
              Kết Quả Các Bài Thi Thử Của Con
            </h3>
            <p className="text-xs text-slate-500">
              Đánh giá năng lực theo đề kiểm tra chuẩn 45 - 60 phút
            </p>
          </div>
        </div>

        <button
          onClick={openExamModal}
          className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-colors cursor-pointer"
        >
          Xem phòng thi thử
        </button>
      </div>

      {/* Summary KPI Badges */}
      <div className="grid grid-cols-3 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-center">
        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase">Số đề đã thi</span>
          <p className="text-lg font-black text-slate-800">{stats.totalTaken} đề</p>
        </div>
        <div className="border-l border-slate-200">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Điểm trung bình</span>
          <p className="text-lg font-black text-indigo-600">{stats.averageScore} / 10</p>
        </div>
        <div className="border-l border-slate-200">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Điểm cao nhất</span>
          <p className="text-lg font-black text-emerald-600">{stats.highestScore} / 10</p>
        </div>
      </div>

      {/* Recent Exam Runs */}
      {history.length === 0 ? (
        <div className="text-center py-6 text-slate-400 space-y-1">
          <Clock className="w-8 h-8 mx-auto stroke-1 text-slate-300" />
          <p className="text-xs font-semibold">Con chưa làm bài thi thử nào gần đây.</p>
          <p className="text-[11px]">Bố mẹ có thể nhắc con thử sức với đề 15 phút hoặc 45 phút cuối tuần nhé!</p>
        </div>
      ) : (
        <div className="space-y-2.5">
          <span className="text-xs font-bold text-slate-700 block">
            Bài thi gần nhất:
          </span>

          <div className="space-y-2">
            {history.slice(0, 3).map(rec => {
              const dateStr = new Date(rec.submittedAt).toLocaleDateString('vi-VN', {
                day: '2-digit',
                month: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
              });

              return (
                <div
                  key={rec.id}
                  className="p-3 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-xs text-slate-900 truncate">
                        {rec.examTitle}
                      </h4>
                      <span className="text-[10px] text-slate-400">
                        {dateStr}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Đúng {rec.correctCount}/{rec.totalQuestions} câu • {Math.floor(rec.durationSecondsUsed / 60)} phút làm bài
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="flex items-center gap-0.5 text-xs font-bold text-amber-600">
                      <Sparkles className="w-3 h-3 text-amber-500" />
                      <span>+{rec.xpEarned} XP</span>
                    </span>

                    <span 
                      className={`text-sm font-black px-2.5 py-1 rounded-xl ${
                        rec.score >= 8.0 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : rec.score >= 5.0 
                          ? 'bg-amber-100 text-amber-800' 
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {rec.score}đ
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
