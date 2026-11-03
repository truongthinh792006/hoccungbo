import React from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, Sparkles, User, ShieldCheck, ChevronRight, BookOpen, Layers, Bookmark } from 'lucide-react';

export const RoleSwitcher: React.FC = () => {
  const { 
    role, 
    switchRoleWithPinCheck, 
    setRole, 
    currentLesson, 
    streak, 
    xp, 
    openSyllabus, 
    todayLessonId, 
    allLessons,
    setCurrentLessonId 
  } = useApp();

  const todayLesson = allLessons.find(l => l.id === todayLessonId) || currentLesson;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Left: Subject Tag & Breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={openSyllabus}
              className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 shrink-0 transition-transform active:scale-95"
              title="Nhấn để mở Mục lục 4 Chương"
            >
              <BookOpen className="w-5 h-5" />
            </button>

            <div className="min-w-0">
              {/* Subject Tag & Syllabus Trigger */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                  Toán 7
                </span>
                <span className="text-[11px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200/80 flex items-center gap-1">
                  <Layers className="w-3 h-3" />
                  <span>Kết nối tri thức</span>
                </span>

                <button
                  onClick={openSyllabus}
                  className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200 transition-colors"
                >
                  <BookOpen className="w-3 h-3 text-emerald-600" />
                  <span>Mục lục SGK ({allLessons.length} bài)</span>
                </button>
              </div>

              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate mt-0.5">
                <span className="hidden sm:inline font-medium text-slate-600">{currentLesson.chapterTitle.split(':')[0]}</span>
                <ChevronRight className="w-3 h-3 text-slate-400 hidden sm:inline shrink-0" />
                <button
                  onClick={openSyllabus}
                  className="font-semibold text-emerald-800 hover:underline truncate text-left"
                >
                  {currentLesson.title}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Gamification & Role Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Bookmark Badge: "Bài học hôm nay" */}
            <button
              onClick={() => {
                if (currentLesson.id !== todayLesson.id) {
                  setCurrentLessonId(todayLesson.id);
                } else {
                  openSyllabus();
                }
              }}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100/70 text-amber-900 text-xs font-bold transition-all"
              title="Nhấn để nhảy nhanh đến bài học hôm nay tại trường"
            >
              <Bookmark className="w-3.5 h-3.5 fill-current text-amber-600" />
              <span>Hôm nay: B.{todayLesson.order}</span>
            </button>

            {/* Streak Flame */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold shadow-xs">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-bounce" />
              <span>{streak} ngày</span>
            </div>

            {/* XP Badge */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>+{xp} XP</span>
            </div>

            {/* Role Switcher Pill */}
            {role === 'STUDENT' ? (
              <button
                onClick={() => switchRoleWithPinCheck('PARENT')}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all"
                title="Yêu cầu mã PIN 1234 của phụ huynh"
              >
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span className="hidden sm:inline">Góc Phụ Huynh</span>
                <span className="sm:hidden">Bố Mẹ</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-mono">PIN</span>
              </button>
            ) : (
              <button
                onClick={() => setRole('STUDENT')}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/30 transition-all"
              >
                <User className="w-4 h-4 text-emerald-200" />
                <span>Trở Lại Phòng Tự Học</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
