import React, { useState, useEffect } from 'react';
import { sampleLessons } from '../../data/mockLessons';
import { LessonOverview } from './LessonOverview';
import { SocraticChatbot } from './SocraticChatbot';
import { QuizEngine } from './QuizEngine';
import { StorageService } from '../../services/storageService';
import { QuizAttempt, StudentProgress } from '../../types/study';
import { BookOpen, Bot, Award, Calculator, Atom } from 'lucide-react';

interface StudyPortalProps {
  initialLessonId?: string;
}

export const StudyPortal: React.FC<StudyPortalProps> = ({ initialLessonId }) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    initialLessonId || sampleLessons[0].id
  );
  const [activeStudySubTab, setActiveStudySubTab] = useState<'overview' | 'socratic' | 'quiz'>('overview');
  const [progress, setProgress] = useState<StudentProgress>(() => StorageService.getStudentProgress());

  useEffect(() => {
    if (initialLessonId) {
      setSelectedLessonId(initialLessonId);
    }
  }, [initialLessonId]);

  const currentLesson = sampleLessons.find(l => l.id === selectedLessonId) || sampleLessons[0];
  const currentDrill = currentLesson.practiceDrills[0] || null;

  const handleToggleCompetency = (compId: string) => {
    const updated = { ...progress };
    if (updated.masteredCompetencyIds.includes(compId)) {
      updated.masteredCompetencyIds = updated.masteredCompetencyIds.filter(id => id !== compId);
    } else {
      updated.masteredCompetencyIds.push(compId);
    }
    setProgress(updated);
    StorageService.saveStudentProgress(updated);
  };

  const handleDrillComplete = (_attempt: QuizAttempt) => {
    const updated = StorageService.getStudentProgress();
    setProgress(updated);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Lesson Selector Ribbon */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            {currentLesson.subjectId === 'toan' ? (
              <Calculator className="w-5 h-5" />
            ) : (
              <Atom className="w-5 h-5" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Đang Tự Học:
              </span>
              <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
                {currentLesson.subjectId === 'toan' ? 'Toán 7' : 'KHTN 7'}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mt-0.5">
              {currentLesson.title}
            </h3>
          </div>
        </div>

        {/* Quick Lesson Switcher buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {sampleLessons.map(lesson => {
            const isSelected = lesson.id === selectedLessonId;
            const shortName = lesson.subjectId === 'toan'
              ? `Toán 7: ${lesson.title.replace('Bài ', 'B.')}`
              : `KHTN 7: ${lesson.title.replace('Bài ', 'B.')}`;
            return (
              <button
                key={lesson.id}
                onClick={() => setSelectedLessonId(lesson.id)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-slate-900/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <span>{shortName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sub-tab navigation */}
      <div className="flex items-center border-b border-slate-200/90 gap-2">
        <button
          onClick={() => setActiveStudySubTab('overview')}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs sm:text-sm font-bold transition-all ${
            activeStudySubTab === 'overview'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Lý Thuyết & Trọng Tâm</span>
        </button>

        <button
          onClick={() => setActiveStudySubTab('socratic')}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs sm:text-sm font-bold transition-all relative ${
            activeStudySubTab === 'socratic'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Bot className="w-4 h-4" />
          <span>Hỏi Đáp Socratic AI</span>
          <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded-full font-bold">
            Gợi mở
          </span>
        </button>

        <button
          onClick={() => setActiveStudySubTab('quiz')}
          className={`flex items-center gap-2 py-3 px-4 border-b-2 text-xs sm:text-sm font-bold transition-all ${
            activeStudySubTab === 'quiz'
              ? 'border-emerald-600 text-emerald-700'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Luyện Tập 3 Cấp Độ</span>
          {currentDrill && (
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-bold">
              {currentDrill.totalQuestions} câu
            </span>
          )}
        </button>
      </div>

      {/* Active Subtab View */}
      {activeStudySubTab === 'overview' && (
        <LessonOverview
          lesson={currentLesson}
          masteredCompetencyIds={progress.masteredCompetencyIds}
          onToggleCompetency={handleToggleCompetency}
        />
      )}

      {activeStudySubTab === 'socratic' && (
        <SocraticChatbot lesson={currentLesson} />
      )}

      {activeStudySubTab === 'quiz' && (
        currentDrill ? (
          <QuizEngine
            drill={currentDrill}
            lessonId={currentLesson.id}
            onDrillComplete={handleDrillComplete}
          />
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
            <p className="text-slate-500 text-sm">Chưa có bài luyện tập cho bài học này.</p>
          </div>
        )
      )}
    </div>
  );
};
