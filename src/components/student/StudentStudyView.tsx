import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LessonTheory } from './LessonTheory';
import { SocraticTutor } from './SocraticTutor';
import { DrillQuiz } from './DrillQuiz';
import { Bot, Award, BookOpen } from 'lucide-react';

export const StudentStudyView: React.FC = () => {
  const { currentLesson, allLessons, currentLessonId, setCurrentLessonId } = useApp();
  const [rightTab, setRightTab] = useState<'socratic' | 'quiz'>('socratic');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Chapter 1 Quick Lesson Switcher Ribbon */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-xs flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 shrink-0">
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Bài học Chương I:
          </span>
        </div>

        <div className="flex items-center gap-1.5 flex-nowrap shrink-0">
          {allLessons.map(lesson => {
            const isSelected = lesson.id === currentLessonId;
            return (
              <button
                key={lesson.id}
                onClick={() => setCurrentLessonId(lesson.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs ring-2 ring-emerald-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <span>B.{lesson.order}: {lesson.title.split(':')[1]?.trim() || lesson.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Dual-Pane Layout: 60% Left / 40% Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Pane: 60% Width (col-span-7) */}
        <div className="lg:col-span-7 space-y-6">
          <LessonTheory lesson={currentLesson} />
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
            <DrillQuiz
              lessonId={currentLesson.id}
              questions={currentLesson.diagnosticQuiz || []}
            />
          )}
        </div>
      </div>
    </div>
  );
};
