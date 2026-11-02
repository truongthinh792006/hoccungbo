import React from 'react';
import { BookOpen, GraduationCap, HeartHandshake, Sparkles, CheckCircle2, Flame, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentTab: 'curriculum' | 'study' | 'parent';
  onTabChange: (tab: 'curriculum' | 'study' | 'parent') => void;
  activeRole: 'student' | 'parent';
  onRoleToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  activeRole,
  onRoleToggle
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('curriculum')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-emerald-200 ring-2 ring-emerald-100">
              <Sparkles className="w-5 h-5 text-amber-200 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-slate-800">
                  Học Cùng Con <span className="text-emerald-600 font-extrabold">7</span>
                </span>
                <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                  GDPT 2018
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Tự học chuẩn hóa & Đồng hành gia đình
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => onTabChange('curriculum')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                currentTab === 'curriculum'
                  ? 'bg-white text-emerald-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Chương trình</span>
            </button>

            <button
              onClick={() => onTabChange('study')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                currentTab === 'study'
                  ? 'bg-white text-emerald-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Góc tự học</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            </button>

            <button
              onClick={() => onTabChange('parent')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                currentTab === 'parent'
                  ? 'bg-white text-indigo-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Góc phụ huynh</span>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-1.5 py-0.2 rounded-full hidden md:inline">
                Gợi ý mâm cơm
              </span>
            </button>
          </nav>

          {/* Right Status & Role Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Streak Counter */}
            <div className="hidden lg:flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200/80 px-2.5 py-1 rounded-full text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Chuỗi 3 ngày</span>
            </div>

            {/* Offline-First Resilience Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Lưu offline</span>
            </div>

            {/* Role switch toggle */}
            <button
              onClick={onRoleToggle}
              title="Chuyển đổi góc nhìn giữa Con & Phụ huynh"
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all ${
                activeRole === 'parent'
                  ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>{activeRole === 'parent' ? 'Mẹ Minh Quân' : 'Minh Quân (Lớp 7)'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
