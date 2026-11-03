import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { LessonTheory } from './LessonTheory';
import { SocraticTutor } from './SocraticTutor';
import { DrillQuiz } from './DrillQuiz';
import { FocusTimerWidget } from './FocusTimerWidget';
import { math7Chapters, getNextLesson, getPrevLesson } from '../../data/math7_curriculum';
import { 
  Bot, Award, Bookmark, ChevronLeft, 
  ChevronRight, ListOrdered, CheckCircle2 
} from 'lucide-react';

export const StudentStudyView: React.FC = () => {
  const { 
    currentLesson, 
    allLessons, 
    currentLessonId, 
    setCurrentLessonId, 
    setTodayLessonId, 
    isTodayLesson,
    openSyllabus,
    openQuizModal,
    completedLessonIds
  } = useApp();

  const [rightTab, setRightTab] = useState<'socratic' | 'quiz'>('socratic');
  const [activeChapterFilter, setActiveChapterFilter] = useState<string>(currentLesson.chapterId);

  // Keep active chapter tab synced with current lesson when lesson changes
  React.useEffect(() => {
    setActiveChapterFilter(currentLesson.chapterId);
  }, [currentLesson.chapterId]);

  // Lessons belonging to the currently selected chapter in the ribbon
  const chapterLessons = useMemo(() => {
    return allLessons.filter(l => l.chapterId === activeChapterFilter);
  }, [allLessons, activeChapterFilter]);

  const prevLesson = getPrevLesson(currentLessonId);
  const nextLesson = getNextLesson(currentLessonId);
  const isBookmarkedToday = isTodayLesson(currentLesson.id);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Enhanced Syllabus Ribbon */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-xs space-y-3">
        {/* Top bar of ribbon: Chapter Tabs + Full Syllabus Button */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {math7Chapters.map(ch => {
              const isActive = activeChapterFilter === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setActiveChapterFilter(ch.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {ch.shortTitle}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Bookmark button for current lesson */}
            <button
              onClick={() => setTodayLessonId(currentLesson.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                isBookmarkedToday
                  ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-2xs'
                  : 'bg-slate-50 hover:bg-amber-50 text-slate-600 hover:text-amber-800 border-slate-200'
              }`}
              title="Ghim bài này làm Bài học hôm nay tại trường"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarkedToday ? 'fill-current text-amber-600' : ''}`} />
              <span>{isBookmarkedToday ? 'Đã ghim hôm nay' : 'Ghim bài hôm nay'}</span>
            </button>

            {/* Open Full Syllabus Drawer */}
            <button
              onClick={openSyllabus}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-all"
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>Mục lục ({allLessons.length} bài)</span>
            </button>
          </div>
        </div>

        {/* Bottom bar of ribbon: Horizontal Lessons list of the active chapter */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 border-t border-slate-100">
          {chapterLessons.map(lesson => {
            const isSelected = lesson.id === currentLessonId;
            const isCompleted = completedLessonIds.includes(lesson.id);
            const isToday = isTodayLesson(lesson.id);

            return (
              <button
                key={lesson.id}
                onClick={() => setCurrentLessonId(lesson.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs ring-2 ring-emerald-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {isCompleted && !isSelected && (
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                )}
                {isToday && (
                  <Bookmark className={`w-3 h-3 ${isSelected ? 'text-amber-200 fill-current' : 'text-amber-500 fill-current'}`} />
                )}
                <span>B.{lesson.order}: {lesson.title.split(':')[1]?.trim() || lesson.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pomodoro Focus Timer with Dinner-Talk Transition */}
      <FocusTimerWidget />

      {/* Main Dual-Pane Layout: 60% Left / 40% Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Pane: 60% Width (col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
          <LessonTheory lesson={currentLesson} />

          {/* Lesson Navigation Footer Bar */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs flex items-center justify-between gap-3">
            {prevLesson ? (
              <button
                onClick={() => setCurrentLessonId(prevLesson.id)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 transition-all text-left"
              >
                <ChevronLeft className="w-4 h-4 shrink-0 text-slate-400" />
                <div className="truncate max-w-[180px] sm:max-w-xs">
                  <span className="block text-[10px] text-slate-400 uppercase">Bài trước</span>
                  <span className="truncate">B.{prevLesson.order}: {prevLesson.title.split(':')[1]?.trim() || prevLesson.title}</span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <button
                onClick={() => setCurrentLessonId(nextLesson.id)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all text-right ml-auto"
              >
                <div className="truncate max-w-[180px] sm:max-w-xs">
                  <span className="block text-[10px] text-emerald-200 uppercase">Bài tiếp theo</span>
                  <span className="truncate">B.{nextLesson.order}: {nextLesson.title.split(':')[1]?.trim() || nextLesson.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 text-white" />
              </button>
            ) : (
              <div className="text-xs text-slate-400 font-medium ml-auto">
                🎉 Bạn đã tới bài cuối cùng của Học kì 1!
              </div>
            )}
          </div>
        </div>

        {/* Right Pane: 40% Width (col-span-5) */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-20">
          {/* Right Pane Sub-Tabs */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-1.5 shadow-xs flex items-center gap-1.5">
            <button
              onClick={() => setRightTab('socratic')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                rightTab === 'socratic'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>Gia Sư Socratic AI</span>
            </button>

            <button
              onClick={() => setRightTab('quiz')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                rightTab === 'quiz'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Luyện Micro-Quiz</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                rightTab === 'quiz' ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {currentLesson.diagnosticQuiz?.length || 0}
              </span>
            </button>
          </div>

          {/* Active Tab Component */}
          {rightTab === 'socratic' ? (
            <SocraticTutor lesson={currentLesson} />
          ) : (
            <div className="space-y-3">
              <button
                onClick={openQuizModal}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs shadow-sm shadow-emerald-600/20 transition-all active:scale-98"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>Mở bảng luyện tập Micro-Quiz (Sliding Panel)</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
              <DrillQuiz
                lessonId={currentLesson.id}
                questions={currentLesson.diagnosticQuiz || []}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
