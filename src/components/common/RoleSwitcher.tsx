import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, Sparkles, User, ShieldCheck, ChevronRight, BookOpen, Layers, Bookmark, BookMarked, Trophy, Languages, ChevronDown, GraduationCap } from 'lucide-react';
import { GamificationModal } from './GamificationModal';

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
    setCurrentLessonId,
    activeMistakesCount,
    openMistakeNotebook,
    openExamModal,
    currentSubject,
    openSubjectHub
  } = useApp();

  const [isGamificationModalOpen, setIsGamificationModalOpen] = useState(false);

  const todayLesson = allLessons.find(l => l.id === todayLessonId) || currentLesson;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-3">
            {/* Left: Subject Tag & Breadcrumb */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={currentSubject === 'toan' ? openSyllabus : openSubjectHub}
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0 transition-transform active:scale-95 ${
                  currentSubject === 'toan'
                    ? 'bg-gradient-to-tr from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/20'
                    : 'bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-indigo-500/20'
                }`}
                title={currentSubject === 'toan' ? "Nhấn để mở Mục lục Toán 7" : "Nhấn để mở Bàn học 4 môn"}
              >
                {currentSubject === 'toan' ? <BookOpen className="w-5 h-5" /> : <Languages className="w-5 h-5" />}
              </button>

              <div className="min-w-0 flex flex-col justify-center">
                {/* Subject Tag & Subject Switcher Pill */}
                <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap">
                  {/* Clickable Subject Dropdown Pill */}
                  <button
                    onClick={openSubjectHub}
                    className="group flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-900 hover:bg-indigo-950 text-white transition-all shadow-xs shrink-0 cursor-pointer"
                    title="Nhấn để đổi giữa Toán 7, Tiếng Anh 7, KHTN 7, Ngữ văn 7"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-extrabold text-xs sm:text-sm tracking-tight whitespace-nowrap">
                      {currentSubject === 'toan' ? 'Toán 7' : 'Tiếng Anh 7'}
                    </span>
                    <ChevronDown className="w-3 h-3 text-slate-400 group-hover:text-white transition-transform group-hover:translate-y-0.5 shrink-0" />
                  </button>

                  <span className="hidden xs:inline-flex text-[11px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full border border-indigo-200/80 items-center gap-1 shrink-0 whitespace-nowrap">
                    <Layers className="w-3 h-3 shrink-0" />
                    <span>{currentSubject === 'toan' ? 'Kết nối tri thức' : 'Global Success'}</span>
                  </span>

                  {currentSubject === 'toan' && (
                    <button
                      onClick={openSyllabus}
                      className="hidden md:inline-flex items-center gap-1 text-[11px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-200 transition-colors shrink-0 whitespace-nowrap"
                    >
                      <BookOpen className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Mục lục SGK ({allLessons.length} bài)</span>
                    </button>
                  )}
                </div>

                {/* Breadcrumb - Single line strictly truncated */}
                {currentSubject === 'toan' ? (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate mt-0.5 max-w-[200px] sm:max-w-xs md:max-w-md">
                    <span className="hidden sm:inline font-medium text-slate-600 truncate">{currentLesson.chapterTitle.split(':')[0]}</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 hidden sm:inline shrink-0" />
                    <button
                      onClick={openSyllabus}
                      className="font-semibold text-emerald-800 hover:underline truncate text-left"
                    >
                      {currentLesson.title}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 truncate mt-0.5 max-w-[200px] sm:max-w-xs md:max-w-md">
                    <span className="hidden sm:inline font-medium text-slate-600 shrink-0">Global Success 7</span>
                    <ChevronRight className="w-3 h-3 text-slate-400 hidden sm:inline shrink-0" />
                    <button
                      onClick={openSubjectHub}
                      className="font-semibold text-indigo-800 hover:underline truncate text-left"
                      title="Nhấn để mở Bàn học 4 môn"
                    >
                      Unit 1: Hobbies • Unit 2: Healthy Living
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Gamification & Role Switcher */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Quick Bookmark Badge: "Bài học hôm nay" (Toán 7) */}
              {currentSubject === 'toan' && (
                <button
                  onClick={() => {
                    if (currentLesson.id !== todayLesson.id) {
                      setCurrentLessonId(todayLesson.id);
                    } else {
                      openSyllabus();
                    }
                  }}
                  className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200 hover:bg-amber-100/70 text-amber-900 text-xs font-bold transition-all shrink-0"
                  title="Nhấn để nhảy nhanh đến bài học hôm nay tại trường"
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current text-amber-600" />
                  <span>Hôm nay: B.{todayLesson.order}</span>
                </button>
              )}

              {/* Streak Flame (Clickable) */}
              <button
                onClick={() => setIsGamificationModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-800 text-xs font-bold shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
                title="Xem chuỗi ngày học tập và khế ước phần thưởng cùng bố"
              >
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-bounce" />
                <span>{streak} ngày</span>
              </button>

              {/* XP Badge (Clickable) */}
              <button
                onClick={() => setIsGamificationModalOpen(true)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-bold transition-all active:scale-95 cursor-pointer shrink-0"
                title="Xem điểm tích lũy và đổi quà bố thưởng"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>+{xp} XP</span>
              </button>

              {/* Sổ tay câu sai button (Desktop/Tablet - Toán 7) */}
              {role === 'STUDENT' && currentSubject === 'toan' && (
                <button
                  onClick={openMistakeNotebook}
                  className={`hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs font-bold transition-all active:scale-95 cursor-pointer shrink-0 ${
                    activeMistakesCount > 0
                      ? 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-800 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600'
                  }`}
                  title="Mở Sổ tay câu sai & Phục thù điểm yếu"
                >
                  <BookMarked className="w-3.5 h-3.5 text-rose-600" />
                  <span>Sổ tay câu sai</span>
                  {activeMistakesCount > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-black animate-pulse">
                      {activeMistakesCount}
                    </span>
                  )}
                </button>
              )}

              {/* Phòng Thi Thử button (Desktop/Tablet - Toán 7) */}
              {role === 'STUDENT' && currentSubject === 'toan' && (
                <button
                  onClick={openExamModal}
                  className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs shrink-0"
                  title="Mở Phòng Thi Thử 45 phút - Đề chuẩn KNTT"
                >
                  <Trophy className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Phòng Thi Thử</span>
                </button>
              )}

              {/* Bàn học 4 môn button (Desktop/Tablet - Tiếng Anh) */}
              {role === 'STUDENT' && currentSubject === 'tieng-anh' && (
                <button
                  onClick={openSubjectHub}
                  className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold transition-all active:scale-95 cursor-pointer shadow-xs shrink-0"
                  title="Mở Bàn học 4 môn"
                >
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Bàn học 4 môn</span>
                </button>
              )}

              {/* Role Switcher Pill (Desktop/Tablet) */}
              {role === 'STUDENT' ? (
                <button
                  onClick={() => switchRoleWithPinCheck('PARENT')}
                  className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all"
                  title="Yêu cầu mã PIN 1234 của phụ huynh"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>Góc Phụ Huynh</span>
                  <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-mono">PIN</span>
                </button>
              ) : (
                <button
                  onClick={() => setRole('STUDENT')}
                  className="hidden md:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/30 transition-all"
                >
                  <User className="w-4 h-4 text-emerald-200" />
                  <span>Trở Lại Phòng Tự Học</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Gamification, Rewards & Badges Modal */}
      <GamificationModal 
        isOpen={isGamificationModalOpen} 
        onClose={() => setIsGamificationModalOpen(false)} 
      />
    </>
  );
};
