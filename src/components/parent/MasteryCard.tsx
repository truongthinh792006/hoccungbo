import React from 'react';
import { useApp } from '../../context/AppContext';
import { Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const MasteryCard: React.FC = () => {
  const { currentLesson, masteryPercentage, weakTags, completedLessonIds } = useApp();

  const isCompleted = completedLessonIds.includes(currentLesson.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 1. Hôm nay con học gì */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Hôm nay con học gì
          </span>
          <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
            📚
          </span>
        </div>

        <div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 inline-block mb-1">
            {currentLesson.chapterTitle}
          </span>
          <h4 className="text-base font-extrabold text-slate-900 leading-snug">
            {currentLesson.title}
          </h4>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {currentLesson.estimatedMinutes} phút
          </span>
          <span
            className={`font-bold flex items-center gap-1 ${
              isCompleted ? 'text-emerald-700' : 'text-amber-700'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            {isCompleted ? 'Đã hoàn thành 100%' : 'Đang tự học'}
          </span>
        </div>
      </div>

      {/* 2. Mức độ nắm vững (Mastery Index) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Mức độ nắm vững
          </span>
          <span className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs">
            🎯
          </span>
        </div>

        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {masteryPercentage}%
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              {masteryPercentage >= 80 ? 'Xếp loại: Tốt' : 'Khá'}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Chỉ số làm chủ kiến thức tính từ kết quả Micro-Quiz và các mục tiêu đã đạt.
          </p>
        </div>

        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${masteryPercentage}%` }}
          />
        </div>
      </div>

      {/* 3. Điểm cần lưu ý (Weak Concept Alert) */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            <span>Điểm cần lưu ý</span>
          </span>
          <span className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
            ⚠️
          </span>
        </div>

        <div className="space-y-1.5">
          {weakTags.length > 0 ? (
            weakTags.slice(0, 2).map((tag, idx) => (
              <div
                key={idx}
                className="p-2 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-950 font-medium"
              >
                • {tag}
              </div>
            ))
          ) : (
            <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded-xl font-medium">
              ✓ Chưa ghi nhận lỗi sai nghiêm trọng nào!
            </p>
          )}
        </div>

        <p className="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-2">
          💡 <em>Bố mẹ xem mục "Gợi ý trò chuyện" bên dưới để hỏi con nhẹ nhàng vào bữa cơm.</em>
        </p>
      </div>
    </div>
  );
};
