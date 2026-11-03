import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { 
  X, Sparkles, Utensils, HeartHandshake, CheckCircle2, 
  ChevronDown, ChevronUp, Coffee, MessageCircle, PartyPopper
} from 'lucide-react';

export const DinnerTalkTransitionModal: React.FC = () => {
  const { 
    isDinnerTalkModalOpen, 
    closeDinnerTalkModal, 
    claimDinnerTalkReward,
    currentLesson,
    timerState,
    startFocusTimer
  } = useApp();

  const [expandedId, setExpandedId] = useState<string | null>(
    currentLesson.dinnerPrompts[0]?.id || null
  );
  const [hasClaimed, setHasClaimed] = useState(false);

  if (!isDinnerTalkModalOpen) return null;

  const handleClaimReward = () => {
    setHasClaimed(true);
    setTimeout(() => {
      claimDinnerTalkReward();
      setHasClaimed(false);
    }, 1200);
  };

  const handleStartBreak = () => {
    closeDinnerTalkModal();
    startFocusTimer();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Celebration Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-600 p-5 sm:p-6 text-white relative shrink-0">
          <button
            onClick={closeDinnerTalkModal}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-colors"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold backdrop-blur-md uppercase tracking-wider flex items-center gap-1.5">
              <PartyPopper className="w-3.5 h-3.5 text-amber-200" />
              <span>Hết Giờ Tập Trung • Đến Giờ Trò Chuyện Bữa Cơm</span>
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
            🎉 Xuất Sắc! Con Đã Hoàn Thành Phiên Học!
          </h2>
          <p className="text-xs sm:text-sm text-amber-50 mt-1 max-w-lg leading-relaxed">
            Con đã hoàn thành {timerState.durationMinutes} phút tập trung sâu. Bây giờ hãy thư giãn mắt và chạy ra đố bố mẹ 3 câu hỏi thú vị của bài học để nhận thêm <strong>+20 XP</strong> nhé!
          </p>

          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-amber-100">
            <HeartHandshake className="w-4 h-4 text-amber-300" />
            <span>Bài học: {currentLesson.title}</span>
          </div>
        </div>

        {/* 3 Dinner Questions Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="w-4 h-4 text-amber-600" />
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">
                3 Câu Hỏi Đố Bố Mẹ Bên Bàn Ăn
              </h3>
            </div>
            <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-bold border border-amber-200/60">
              Nhận ngay +20 XP
            </span>
          </div>

          <div className="space-y-3">
            {currentLesson.dinnerPrompts.map((item, idx) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-amber-200/80 bg-white p-4 transition-all shadow-2xs space-y-3 hover:border-amber-300"
                >
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="cursor-pointer flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-amber-100 text-amber-900 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                          Con đố bố mẹ:
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 italic leading-snug">
                          "{item.prompt}"
                        </h4>
                      </div>
                    </div>

                    <button className="text-amber-800 p-1 hover:bg-amber-50 rounded-lg transition-colors shrink-0">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Suggestion for parents & children */}
                  <div className="bg-amber-50/70 rounded-xl border border-amber-200/60 p-3 text-xs space-y-1">
                    <span className="font-extrabold text-emerald-800 uppercase text-[10px] tracking-wide block">
                      💡 Gợi ý câu trả lời chuẩn:
                    </span>
                    <div className="font-semibold text-slate-800">
                      <MathText>{item.suggestedAnswerTip}</MathText>
                    </div>
                  </div>

                  {/* Collapsible Details */}
                  {isExpanded && (
                    <div className="pt-2 border-t border-slate-100 space-y-2 text-xs animate-fadeIn">
                      <div className="bg-emerald-50/60 p-2.5 rounded-xl text-slate-700 flex items-start gap-2 border border-emerald-100">
                        <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-800">Ý nghĩa thực tế: </span>
                          <span className="text-slate-600">{item.contextForParent}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-white border-t border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleStartBreak}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-amber-700 px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors w-full sm:w-auto justify-center"
          >
            <Coffee className="w-4 h-4 text-amber-600" />
            <span>Bắt đầu 5 phút nghỉ ngơi (Timer ☕)</span>
          </button>

          <button
            onClick={handleClaimReward}
            disabled={hasClaimed}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white shadow-md transition-all active:scale-95 ${
              hasClaimed
                ? 'bg-emerald-600 scale-102 ring-4 ring-emerald-300'
                : 'bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-600 hover:opacity-95 shadow-orange-500/20'
            }`}
          >
            {hasClaimed ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
                <span>🎉 Đã Nhận +20 XP & Cập Nhật Huy Hiệu!</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>Bố Mẹ Đã Trả Lời Cùng Con (+20 XP)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
