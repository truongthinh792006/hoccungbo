import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Utensils, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

export const ConversationPrompts: React.FC = () => {
  const { currentLesson } = useApp();
  const [expandedId, setExpandedId] = useState<string | null>(
    currentLesson.dinnerPrompts[0]?.id || null
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
            <Utensils className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
              <span>Gợi Ý Trò Chuyện Cùng Con Bên Bữa Cơm</span>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                AI Khuyên Dùng
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Cha mẹ không cần giỏi toán vẫn hỏi con tự nhiên, không tạo áp lực thi cử
            </p>
          </div>
        </div>

        <span className="text-xs text-slate-400">
          Chủ đề: <strong>{currentLesson.title.split(':')[0]}</strong>
        </span>
      </div>

      {/* Prompts Cards */}
      <div className="space-y-3">
        {currentLesson.dinnerPrompts.map((item, idx) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50/60 to-orange-50/40 p-4 transition-all hover:border-amber-300"
            >
              <div
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="cursor-pointer flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-0.5">
                      Câu bố mẹ có thể hỏi con:
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 italic leading-snug">
                      "{item.prompt}"
                    </h4>
                  </div>
                </div>

                <button className="text-amber-800 p-1 hover:bg-amber-100 rounded-lg">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Collapsible Answer Tip & Expected Response */}
              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-amber-200/60 space-y-2.5 text-xs animate-fadeIn">
                  <div className="bg-white/90 p-3 rounded-xl border border-amber-200 space-y-1">
                    <span className="font-bold text-emerald-800 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                      Mẹo cho bố mẹ (Câu trả lời chuẩn):
                    </span>
                    <p className="text-slate-700 leading-relaxed">
                      {item.suggestedAnswerTip}
                    </p>
                  </div>

                  <div className="text-slate-600 px-1">
                    <span className="font-semibold text-slate-800">Câu con trả lời chuẩn mong đợi: </span>
                    <em>"{item.sampleChildResponse}"</em>
                  </div>

                  <div className="text-[11px] text-slate-500 bg-amber-100/50 p-2 rounded-lg">
                    <strong>Mục đích câu hỏi:</strong> {item.contextForParent}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
