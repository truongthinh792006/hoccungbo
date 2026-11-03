import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { Utensils, ChevronDown, ChevronUp, CheckCircle, MessageCircle } from 'lucide-react';

export const ConversationPrompts: React.FC = () => {
  const { currentLesson, allLessons } = useApp();

  // Allow parent to pick Lesson 3 specifically or follow current lesson
  const lesson3 = allLessons.find(l => l.id === 'bai_3_luy_thua_so_mu_tu_nhien') || currentLesson;
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    currentLesson.id === 'bai_3_luy_thua_so_mu_tu_nhien' ? 'bai_3_luy_thua_so_mu_tu_nhien' : lesson3.id
  );

  const activeLesson = allLessons.find(l => l.id === selectedLessonId) || currentLesson;

  const [expandedId, setExpandedId] = useState<string | null>(
    activeLesson.dinnerPrompts[0]?.id || null
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-5">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
            <Utensils className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                3 Câu Hỏi Gợi Ý Cho Bố Mẹ (Kèm Đáp Án Cô Đọng)
              </h3>
              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full hidden sm:inline">
                AI Soạn Thảo
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Cha mẹ không cần giải toán phức tạp vẫn nắm chắc bài để trò chuyện nhẹ nhàng cùng con bên mâm cơm
            </p>
          </div>
        </div>

        {/* Lesson Dropdown */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400 hidden md:inline">Xem theo bài:</span>
          <select
            value={selectedLessonId}
            onChange={(e) => {
              setSelectedLessonId(e.target.value);
              const targetL = allLessons.find(l => l.id === e.target.value);
              if (targetL) setExpandedId(targetL.dinnerPrompts[0]?.id || null);
            }}
            className="text-xs font-bold bg-amber-50/70 border border-amber-200 text-amber-900 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="bai_3_luy_thua_so_mu_tu_nhien">Bài 3: Lũy thừa với số mũ tự nhiên (Hôm nay)</option>
            <option value="bai_1_tap_hop_cac_so_huu_ti">Bài 1: Tập hợp các số hữu tỉ</option>
            <option value="bai_2_cong_tru_nhan_chia_so_huu_ti">Bài 2: Cộng trừ nhân chia số hữu tỉ</option>
            <option value="bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve">Bài 4: Thứ tự phép tính & Chuyển vế</option>
            <option value="luyen_tap_chung_chuong_1">Luyện tập chung Chương I</option>
          </select>
        </div>
      </div>

      {/* Prompts Cards */}
      <div className="space-y-3.5">
        {activeLesson.dinnerPrompts.map((item, idx) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-amber-200/90 bg-gradient-to-r from-amber-50/70 via-orange-50/40 to-amber-50/30 p-4 transition-all hover:border-amber-300 shadow-2xs space-y-3"
            >
              {/* Question Header */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="cursor-pointer flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-amber-300 text-amber-950 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
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

                <button className="text-amber-800 p-1.5 hover:bg-amber-100/80 rounded-xl transition-colors shrink-0">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Concise Answer Box for Quick Parent Review */}
              <div className="bg-white/95 rounded-xl border border-amber-200/90 p-3 shadow-2xs flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xs space-y-0.5 leading-relaxed">
                  <span className="font-extrabold text-emerald-800 uppercase text-[10px] tracking-wide block">
                    Đáp án cô đọng cho bố mẹ:
                  </span>
                  <div className="font-semibold text-slate-800">
                    <MathText>{item.suggestedAnswerTip}</MathText>
                  </div>
                </div>
              </div>

              {/* Collapsible Details */}
              {isExpanded && (
                <div className="pt-2 border-t border-amber-200/60 space-y-2 text-xs animate-fadeIn">
                  <div className="bg-amber-100/50 p-2.5 rounded-xl text-slate-700 flex items-start gap-2">
                    <MessageCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800">Câu con trả lời chuẩn mong đợi: </span>
                      <em className="text-slate-900">"{item.sampleChildResponse}"</em>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-500 bg-white/70 p-2 rounded-lg border border-amber-100">
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
