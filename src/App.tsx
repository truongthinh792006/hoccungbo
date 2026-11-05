import { AppProvider, useApp } from './context/AppContext';
import { RoleSwitcher } from './components/common/RoleSwitcher';
import { PinModal } from './components/common/PinModal';
import { StudentStudyView } from './components/student/StudentStudyView';
import { ParentDashboardView } from './components/parent/ParentDashboardView';
import { SyllabusNavigator } from './components/curriculum/SyllabusNavigator';
import { QuizSlidingPanel } from './components/student/QuizSlidingPanel';
import { InstallAppPrompt } from './components/common/InstallAppPrompt';
import { MistakeNotebookModal } from './components/student/MistakeNotebookModal';
import { ExamModal } from './components/student/exam/ExamModal';

function MainAppContent() {
  const { role, isExamModalOpen, closeExamModal } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Dual-View Switcher Header */}
      <RoleSwitcher />

      {/* Main Dual-View Screen */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {role === 'STUDENT' ? (
          <StudentStudyView />
        ) : (
          <ParentDashboardView />
        )}
      </main>

      {/* Parental PIN Modal Gate */}
      <PinModal />

      {/* Syllabus Navigator Slide-Over Drawer */}
      <SyllabusNavigator />

      {/* Interactive Micro-Quiz Sliding Panel */}
      <QuizSlidingPanel />

      {/* Mistake Bank & Retry Modal */}
      <MistakeNotebookModal />

      {/* Mock Exam Room Modal */}
      <ExamModal isOpen={isExamModalOpen} onClose={closeExamModal} />

      {/* PWA Install Banner */}
      <InstallAppPrompt />

      {/* Footer */}
      <footer className="mt-8 border-t border-slate-200/80 bg-white/70 py-5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            <strong>Học Cùng Con 7</strong> — Toán 7 Kết nối tri thức với cuộc sống (GDPT 2018).
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Dual-View Interface: Học Sinh • Phụ Huynh (PIN: 1234)</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">Offline-First Caching</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}

export default App;
