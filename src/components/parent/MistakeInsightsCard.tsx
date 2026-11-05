import React from 'react';
import { useApp } from '../../context/AppContext';
import { getMistakeStats } from '../../services/mistakeService';
import { 
  BookMarked, MessageCircleHeart, 
  CheckCircle2, Sparkles, ArrowRight, Flame 
} from 'lucide-react';

export const MistakeInsightsCard: React.FC = () => {
  const { mistakes, openMistakeNotebook } = useApp();
  const stats = getMistakeStats(mistakes);

  return (
    <div className="bg-white rounded-3xl border border-rose-200/80 p-5 sm:p-6 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-rose-100 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
              <BookMarked className="w-4 h-4" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Điểm Con Cần Lưu Ý</span>
              {stats.activeCount > 0 && (
                <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                  {stats.activeCount} câu cần củng cố
                </span>
              )}
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Tổng hợp từ các bài tập tự luyện con chọn sai để phụ huynh nắm bắt và khơi gợi trong bữa cơm
          </p>
        </div>

        {/* Action Button to Open Mistake Notebook */}
        <button
          onClick={openMistakeNotebook}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100/80 text-rose-800 border border-rose-200 text-xs font-bold transition-all shrink-0 active:scale-95 cursor-pointer"
        >
          <span>Xem Sổ tay câu sai</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Content: Lessons with Most Mistakes */}
      {stats.topLessonsWithMistakes.length === 0 ? (
        <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <strong className="block text-emerald-950 font-bold">Hiện tại con nắm kiến thức rất chắc chắn!</strong>
            <span>Chưa có câu hỏi nào cần lưu tâm đặc biệt. Con đã làm chủ mọi dạng bài tập tự luyện.</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {stats.topLessonsWithMistakes.slice(0, 2).map((lesson, idx) => (
            <div
              key={lesson.lessonId}
              className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-rose-200 transition-all space-y-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200/80 px-2 py-0.5 rounded-md">
                    Trọng tâm #{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-600 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-rose-500" />
                    <span>{lesson.activeCount} câu chưa phục thù ({lesson.totalCount} câu từng sai)</span>
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm mt-1.5">
                  {lesson.lessonTitle}
                </h4>
              </div>

              {/* Dinner Talk Prompt for Parents */}
              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-2">
                <MessageCircleHeart className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-amber-900 block text-[11px]">
                    Gợi ý hỏi con tại mâm cơm:
                  </span>
                  <p className="text-[11px] text-amber-900/90 italic leading-relaxed">
                    "Tối nay bố/mẹ thấy bài này có bài tập khá hay, con thấy phần nào thử thách tư duy nhất?"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Progress Footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>
            Tỉ lệ con tự giác phục thù câu sai: <strong className="text-slate-800">{stats.masteredCount}/{stats.total} câu ({stats.masteredPercentage}%)</strong>
          </span>
        </div>
        <span className="text-[11px] text-slate-400">
          Mỗi lần con làm lại đúng sẽ được thưởng +10 XP khích lệ
        </span>
      </div>
    </div>
  );
};
