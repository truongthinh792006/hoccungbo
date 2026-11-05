import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  BookOpen, 
  Layers, 
  Trophy, 
  BookMarked, 
  ShieldCheck, 
  HeartHandshake, 
  User, 
  Sparkles,
  Award,
  GraduationCap,
  Languages
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { 
    role, 
    setRole, 
    switchRoleWithPinCheck, 
    openSyllabus, 
    openExamModal, 
    openMistakeNotebook, 
    activeMistakesCount,
    isMistakeNotebookOpen,
    isSyllabusOpen,
    currentSubject,
    openSubjectHub,
    isSubjectHubOpen
  } = useApp();

  return (
    <nav 
      aria-label="Thanh điều hướng nhanh trên di động"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="grid grid-cols-5 h-16 max-w-lg mx-auto px-1 items-center">
        {role === 'STUDENT' ? (
          <>
            {/* Tab 1: Bài Học (Home) */}
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center h-full py-1 active:scale-95 transition-transform cursor-pointer ${
                currentSubject === 'toan' ? 'text-emerald-700' : 'text-indigo-700'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                currentSubject === 'toan' ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'
              }`}>
                {currentSubject === 'toan' ? <BookOpen className="w-4 h-4" /> : <Languages className="w-4 h-4" />}
              </div>
              <span className="text-[10px] font-bold text-slate-800 mt-0.5 tracking-tight">
                {currentSubject === 'toan' ? 'Toán 7' : 'Tiếng Anh'}
              </span>
            </button>

            {/* Tab 2: Mục Lục (Math) hoặc Đổi Môn (Subject Hub) */}
            {currentSubject === 'toan' ? (
              <button
                onClick={openSyllabus}
                className={`flex flex-col items-center justify-center h-full py-1 active:scale-95 transition-transform cursor-pointer ${
                  isSyllabusOpen ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <div className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Mục lục</span>
              </button>
            ) : (
              <button
                onClick={openSubjectHub}
                className={`flex flex-col items-center justify-center h-full py-1 active:scale-95 transition-transform cursor-pointer ${
                  isSubjectHubOpen ? 'text-indigo-700' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <div className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-indigo-600">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Đổi môn</span>
              </button>
            )}

            {/* Tab 3: Phòng Thi Thử (Center Highlight) */}
            <button
              onClick={openExamModal}
              className="flex flex-col items-center justify-center h-full py-1 relative active:scale-95 transition-transform cursor-pointer -mt-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 border-2 border-white ring-2 ring-indigo-500/20">
                <Trophy className="w-5 h-5 text-amber-300 fill-amber-300" />
              </div>
              <span className="text-[10px] font-black text-indigo-700 mt-0.5 tracking-tight flex items-center gap-0.5">
                <span>Thi thử</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-ping"></span>
              </span>
            </button>

            {/* Tab 4: Sổ tay câu sai (Mistake Bank with Badge) */}
            <button
              onClick={openMistakeNotebook}
              className={`flex flex-col items-center justify-center h-full py-1 relative active:scale-95 transition-transform cursor-pointer ${
                isMistakeNotebookOpen ? 'text-rose-700' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600 relative">
                <BookMarked className="w-4 h-4 text-rose-600" />
                {activeMistakesCount > 0 && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[9px] font-black animate-pulse shadow-xs">
                    {activeMistakesCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Câu sai</span>
            </button>

            {/* Tab 5: Bố Mẹ (PIN protected) */}
            <button
              onClick={() => switchRoleWithPinCheck('PARENT')}
              className="flex flex-col items-center justify-center h-full py-1 text-slate-500 hover:text-slate-800 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600 relative">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span className="absolute -top-0.5 -right-0.5 text-[8px] font-mono font-bold bg-slate-900 text-white px-1 rounded-sm">
                  PIN
                </span>
              </div>
              <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Phụ huynh</span>
            </button>
          </>
        ) : (
          /* PARENT MODE BOTTOM NAV */
          <>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center h-full py-1 text-indigo-700 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-slate-800 mt-0.5 tracking-tight">Tổng quan</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('dinner-prompts-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center h-full py-1 text-slate-500 hover:text-slate-800 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Bữa cơm</span>
            </button>

            <button
              onClick={openExamModal}
              className="flex flex-col items-center justify-center h-full py-1 relative active:scale-95 transition-transform cursor-pointer -mt-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 border-2 border-white ring-2 ring-indigo-500/20">
                <Trophy className="w-5 h-5 text-amber-200 fill-amber-200" />
              </div>
              <span className="text-[10px] font-black text-indigo-700 mt-0.5 tracking-tight">
                Thi thử
              </span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('family-reward-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center h-full py-1 text-slate-500 hover:text-slate-800 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
                <Award className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-[10px] font-semibold mt-0.5 tracking-tight">Khế ước</span>
            </button>

            <button
              onClick={() => setRole('STUDENT')}
              className="flex flex-col items-center justify-center h-full py-1 text-emerald-700 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-emerald-800 mt-0.5 tracking-tight">Về con</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
