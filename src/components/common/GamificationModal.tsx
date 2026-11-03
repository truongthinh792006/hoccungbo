import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, Flame, Sparkles, Gift, Award, CheckCircle2, 
  Lock, Trophy, ShieldCheck
} from 'lucide-react';

interface GamificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GamificationModal: React.FC<GamificationModalProps> = ({ isOpen, onClose }) => {
  const { 
    xp, 
    streakState, 
    familyContracts, 
    badges, 
    switchRoleWithPinCheck 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'rewards' | 'badges'>('rewards');
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'mastery' | 'streak' | 'family' | 'explorer'>('all');

  if (!isOpen) return null;

  const filteredBadges = badgeFilter === 'all' 
    ? badges 
    : badges.filter(b => b.category === badgeFilter);

  const unlockedCount = badges.filter(b => b.unlockedAt !== null).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Hero */}
        <div className="bg-gradient-to-r from-amber-500 via-emerald-600 to-teal-700 p-5 sm:p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-colors"
            title="Đóng"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold backdrop-blur-md uppercase tracking-wider">
              Góc Động Lực Của Con
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Khế Ước Phần Thưởng & Huy Hiệu
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-md">
            Mỗi bài quiz và bài học hoàn thành giúp con thắp sáng chuỗi học tập và tiến gần hơn đến phần thưởng của bố!
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4">
            {/* Streak */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 flex items-center gap-2.5 border border-white/20">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shrink-0 shadow-sm">
                <Flame className="w-5 h-5 fill-current animate-pulse" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-lg font-black leading-tight">
                  {streakState.currentStreak} ngày
                </div>
                <div className="text-[10px] text-amber-100 truncate">
                  Kỷ lục: {streakState.bestStreak} ngày
                </div>
              </div>
            </div>

            {/* Total XP */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 flex items-center gap-2.5 border border-white/20">
              <div className="w-9 h-9 rounded-xl bg-emerald-400 text-emerald-950 flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-lg font-black leading-tight">
                  {xp} XP
                </div>
                <div className="text-[10px] text-emerald-100 truncate">
                  Điểm tích lũy
                </div>
              </div>
            </div>

            {/* Badges Count */}
            <div className="col-span-2 sm:col-span-1 bg-white/15 backdrop-blur-md rounded-2xl p-2.5 flex items-center gap-2.5 border border-white/20">
              <div className="w-9 h-9 rounded-xl bg-purple-400 text-purple-950 flex items-center justify-center shrink-0 shadow-sm">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-base sm:text-lg font-black leading-tight">
                  {unlockedCount}/{badges.length}
                </div>
                <div className="text-[10px] text-purple-100 truncate">
                  Huy hiệu mở khóa
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 bg-slate-50/70 px-5 pt-3 gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('rewards')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'rewards'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Gift className="w-4 h-4" />
            <span>Phần Thưởng Của Bố ({familyContracts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('badges')}
            className={`flex items-center gap-2 pb-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTab === 'badges'
                ? 'border-emerald-600 text-emerald-800'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Bộ Sưu Tập Huy Hiệu ({unlockedCount})</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'rewards' ? (
            <div className="space-y-4">
              {/* Daily Streak Status Notification */}
              <div className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
                streakState.todayCompleted
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <div className="shrink-0 mt-0.5">
                  {streakState.todayCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-bounce" />
                  )}
                </div>
                <div className="text-xs sm:text-sm">
                  {streakState.todayCompleted ? (
                    <div>
                      <span className="font-bold">Tuyệt vời! Con đã hoàn thành nhiệm vụ tối nay.</span> Chuỗi học tập {streakState.currentStreak} ngày đã được thắp sáng!
                    </div>
                  ) : (
                    <div>
                      <span className="font-bold">Tối nay con chưa hoàn thành bài quiz.</span> Hãy thử sức với bài tự luyện 4 câu hỏi để duy trì chuỗi {streakState.currentStreak} ngày nhé!
                    </div>
                  )}
                </div>
              </div>

              {/* Family Contracts List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Các mốc thưởng bố mẹ đã đặt
                  </h4>
                  <span className="text-xs text-slate-400">
                    Hiện tại: <strong className="text-emerald-700">{xp} XP</strong>
                  </span>
                </div>

                {familyContracts.length === 0 ? (
                  <div className="text-center py-8 px-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50">
                    <Gift className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-600">Chưa có khế ước phần thưởng nào được tạo.</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Con hãy nhắc bố mẹ vào "Góc Phụ Huynh" để tạo phần thưởng khích lệ nhé!
                    </p>
                  </div>
                ) : (
                  familyContracts.map(contract => {
                    const isReached = xp >= contract.targetXp;
                    const progress = Math.min(100, Math.round((xp / contract.targetXp) * 100));
                    const remainingXp = Math.max(0, contract.targetXp - xp);

                    return (
                      <div 
                        key={contract.id}
                        className={`rounded-2xl p-4 border transition-all ${
                          contract.isClaimed
                            ? 'bg-slate-50 border-slate-200 opacity-70'
                            : isReached
                            ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-300 shadow-sm'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 min-w-0">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                              contract.isClaimed
                                ? 'bg-slate-200 text-slate-500'
                                : isReached
                                ? 'bg-emerald-500 text-white shadow-sm'
                                : 'bg-amber-100 text-amber-700'
                            }`}>
                              {contract.isClaimed ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              ) : isReached ? (
                                <Gift className="w-5 h-5" />
                              ) : (
                                <TargetIcon className="w-5 h-5" />
                              )}
                            </div>

                            <div className="min-w-0">
                              <h5 className={`font-bold text-sm ${contract.isClaimed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                                {contract.rewardName}
                              </h5>
                              <p className="text-xs text-slate-500 mt-0.5">
                                Mốc mục tiêu: <span className="font-semibold text-indigo-700">{contract.targetXp} XP</span>
                              </p>
                            </div>
                          </div>

                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                            contract.isClaimed
                              ? 'bg-slate-200 text-slate-600'
                              : isReached
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {contract.isClaimed 
                              ? 'Đã nhận thưởng' 
                              : isReached 
                              ? '🎉 Đủ điều kiện!' 
                              : `Còn thiếu ${remainingXp} XP`}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        {!contract.isClaimed && (
                          <div className="mt-3 space-y-1">
                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-500 ${
                                  isReached ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-400 to-emerald-500'
                                }`}
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-400">
                              <span>{xp} XP</span>
                              <span>{progress}%</span>
                              <span>{contract.targetXp} XP</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ) : (
            /* Badges Tab */
            <div className="space-y-4">
              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {(['all', 'mastery', 'streak', 'family', 'explorer'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setBadgeFilter(cat)}
                    className={`px-3 py-1 rounded-full font-bold whitespace-nowrap transition-colors ${
                      badgeFilter === cat
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat === 'all' && 'Tất cả'}
                    {cat === 'mastery' && 'Chinh Phục Kiến Thức'}
                    {cat === 'streak' && 'Chuỗi Chăm Chỉ'}
                    {cat === 'family' && 'Gắn Kết Gia Đình'}
                    {cat === 'explorer' && 'Khám Phá & Mô Phỏng'}
                  </button>
                ))}
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredBadges.map(badge => {
                  const isUnlocked = badge.unlockedAt !== null;

                  return (
                    <div 
                      key={badge.id}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        isUnlocked
                          ? 'bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 border-amber-200/80 shadow-xs'
                          : 'bg-slate-50/70 border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 text-lg shadow-sm ${
                          isUnlocked 
                            ? 'bg-gradient-to-tr from-amber-400 to-amber-500 text-white ring-2 ring-amber-300/60' 
                            : 'bg-slate-200 text-slate-400'
                        }`}>
                          {isUnlocked ? (
                            <Award className="w-5 h-5 text-white" />
                          ) : (
                            <Lock className="w-4 h-4 text-slate-500" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <h5 className={`font-bold text-xs truncate ${isUnlocked ? 'text-slate-900' : 'text-slate-600'}`}>
                              {badge.title}
                            </h5>
                            {isUnlocked && (
                              <span className="text-[9px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full shrink-0">
                                Đã đạt
                              </span>
                            )}
                          </div>

                          <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                            {badge.description}
                          </p>

                          {/* Progress */}
                          <div className="mt-2 space-y-1">
                            <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  isUnlocked ? 'bg-amber-500' : 'bg-slate-400'
                                }`}
                                style={{ width: `${badge.progress}%` }}
                              />
                            </div>
                            <div className="flex justify-between text-[9px] text-slate-400">
                              <span>Tiến độ</span>
                              <span>{badge.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              onClose();
              switchRoleWithPinCheck('PARENT');
            }}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-indigo-600 font-bold transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-indigo-500" />
            <span>Bố mẹ muốn thêm phần thưởng mới? Vào Góc Phụ Huynh (PIN)</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all text-center"
          >
            Đóng & Tiếp Tục Học
          </button>
        </div>
      </div>
    </div>
  );
};

// Target helper icon
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
