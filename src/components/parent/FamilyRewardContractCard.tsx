import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Gift, Plus, CheckCircle2, Trash2, 
  Sparkles, Award, Flame, HeartHandshake, Lock
} from 'lucide-react';

export const FamilyRewardContractCard: React.FC = () => {
  const { 
    xp, 
    streakState,
    familyContracts, 
    addFamilyContract, 
    toggleClaimContract, 
    deleteFamilyContract,
    badges
  } = useApp();

  const [isAdding, setIsAdding] = useState(false);
  const [newRewardName, setNewRewardName] = useState('');
  const [newTargetXp, setNewTargetXp] = useState<number>(500);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRewardName.trim()) return;
    addFamilyContract(newTargetXp, newRewardName);
    setNewRewardName('');
    setNewTargetXp(prev => prev + 250);
    setIsAdding(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Gift className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
              Khế Ước Phần Thưởng Gia Đình & Huy Hiệu
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Bố mẹ thiết lập mốc XP và phần thưởng gắn kết để khích lệ con tự giác học tập mỗi tối
          </p>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Con hiện có: {xp} XP</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
            <Flame className="w-3.5 h-3.5 text-amber-600 fill-current" />
            <span>Chuỗi: {streakState.currentStreak} ngày (Kỷ lục: {streakState.bestStreak})</span>
          </div>
        </div>
      </div>

      {/* Reward Contracts List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-purple-600" />
            <span>Danh Sách Khế Ước Đổi Thưởng ({familyContracts.length})</span>
          </h4>

          {!isAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl border border-purple-200 transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Tạo phần thưởng mới</span>
            </button>
          )}
        </div>

        {/* Add Contract Form */}
        {isAdding && (
          <form onSubmit={handleCreate} className="p-4 rounded-2xl bg-slate-50 border border-purple-200 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-950 uppercase tracking-wide">
                Bố/Mẹ thêm phần thưởng khích lệ:
              </span>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                Hủy
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 space-y-1">
                <label className="text-[11px] font-semibold text-slate-600 block">
                  Tên phần thưởng (hoạt động trải nghiệm cùng gia đình):
                </label>
                <input
                  type="text"
                  value={newRewardName}
                  onChange={e => setNewRewardName(e.target.value)}
                  placeholder="VD: Đi bơi cùng bố, Cả nhà đi ăn kem, Mua sách yêu thích..."
                  className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-600 block">
                  Mốc XP cần đạt:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="50"
                    step="50"
                    value={newTargetXp}
                    onChange={e => setNewTargetXp(parseInt(e.target.value, 10) || 50)}
                    className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shrink-0 shadow-sm"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* Contracts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {familyContracts.map(contract => {
            const isReached = xp >= contract.targetXp;
            const progressPercent = Math.min(100, Math.round((xp / contract.targetXp) * 100));

            return (
              <div
                key={contract.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                  contract.isClaimed
                    ? 'bg-slate-50/80 border-slate-200 opacity-75'
                    : isReached
                    ? 'bg-gradient-to-br from-emerald-50/80 to-teal-50/50 border-emerald-300 shadow-sm ring-2 ring-emerald-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md font-mono bg-purple-100 text-purple-800">
                      Mốc: {contract.targetXp} XP
                    </span>

                    <button
                      onClick={() => deleteFamilyContract(contract.id)}
                      className="text-slate-300 hover:text-rose-500 p-1 transition-colors"
                      title="Xóa khế ước này"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h5 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                    {contract.rewardName}
                  </h5>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-slate-500">
                      <span>{xp} / {contract.targetXp} XP</span>
                      <span className={isReached ? 'text-emerald-700 font-bold' : ''}>
                        {progressPercent}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          contract.isClaimed
                            ? 'bg-slate-400'
                            : isReached
                            ? 'bg-emerald-500'
                            : 'bg-purple-500'
                        }`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Claim action */}
                <div className="pt-2 border-t border-slate-100/80 flex items-center justify-between">
                  {contract.isClaimed ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Đã trao thưởng</span>
                    </span>
                  ) : isReached ? (
                    <button
                      onClick={() => toggleClaimContract(contract.id)}
                      className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Gift className="w-3.5 h-3.5" />
                      <span>Bố mẹ bấm: Đã Trao Thưởng!</span>
                    </button>
                  ) : (
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-slate-300" />
                      <span>Còn thiếu {contract.targetXp - xp} XP nữa</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Gallery */}
      <div className="space-y-3 pt-3 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Bộ Sưu Tập Huy Hiệu Của Con ({badges.filter(b => b.unlockedAt !== null).length} / {badges.length} đã mở)</span>
          </h4>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {badges.map(badge => {
            const isUnlocked = badge.unlockedAt !== null;

            return (
              <div
                key={badge.id}
                className={`p-3 rounded-2xl border text-center space-y-1.5 transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/50 border-amber-200/80 shadow-2xs'
                    : 'bg-slate-50/60 border-slate-200/60 opacity-60'
                }`}
                title={badge.description}
              >
                <div className={`w-9 h-9 mx-auto rounded-xl flex items-center justify-center ${
                  isUnlocked ? 'bg-amber-100 text-amber-800 shadow-xs' : 'bg-slate-200 text-slate-400'
                }`}>
                  <Award className="w-5 h-5" />
                </div>

                <h6 className="font-bold text-slate-900 text-xs truncate">
                  {badge.title}
                </h6>

                <p className="text-[10px] text-slate-500 line-clamp-2 leading-snug">
                  {badge.description}
                </p>

                {isUnlocked ? (
                  <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.2 rounded-full">
                    Đã mở
                  </span>
                ) : (
                  <span className="inline-block text-[10px] text-slate-400 font-mono">
                    {badge.progress}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
