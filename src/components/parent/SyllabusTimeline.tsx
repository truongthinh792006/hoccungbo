import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { QuizDetailModal } from './QuizDetailModal';
import { math7Chapters } from '../../data/math7_curriculum';
import { CheckCircle2, Circle, Play, Award, Bookmark, ListOrdered } from 'lucide-react';

export const SyllabusTimeline: React.FC = () => {
  const { 
    allLessons, 
    currentLessonId, 
    setCurrentLessonId, 
    isTodayLesson,
    completedLessonIds, 
    quizSubmissions,
    openSyllabus 
  } = useApp();

  const [selectedModalLessonId, setSelectedModalLessonId] = useState<string | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');

  const displayedLessons = useMemo(() => {
    if (selectedChapterId === 'all') return allLessons;
    return allLessons.filter(l => l.chapterId === selectedChapterId);
  }, [allLessons, selectedChapterId]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
            <span>Tiến Trình Học Tập (Syllabus Tracker)</span>
          </h3>
          <p className="text-xs text-slate-500">
            Lộ trình chuẩn {math7Chapters.length} Chương ({allLessons.length} bài) SGK Toán 7 Kết nối tri thức với cuộc sống
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Đã hoàn thành {completedLessonIds.length} / {allLessons.length} bài
          </span>

          <button
            onClick={openSyllabus}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            <ListOrdered className="w-3.5 h-3.5" />
            <span>Mở mục lục</span>
          </button>
        </div>
      </div>

      {/* Chapter Tabs for Parent */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setSelectedChapterId('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            selectedChapterId === 'all'
              ? 'bg-slate-900 text-white shadow-2xs'
              : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
          }`}
        >
          Tất cả ({allLessons.length})
        </button>

        {math7Chapters.map(ch => {
          const isSelected = selectedChapterId === ch.id;
          return (
            <button
              key={ch.id}
              onClick={() => setSelectedChapterId(ch.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {ch.shortTitle} ({ch.lessonIds.length})
            </button>
          );
        })}
      </div>

      {/* Timeline Steps */}
      <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
        {displayedLessons.map((lesson) => {
          const isCompleted = completedLessonIds.includes(lesson.id);
          const isCurrent = lesson.id === currentLessonId;
          const isToday = isTodayLesson(lesson.id);
          const hasSubmission = Boolean(quizSubmissions[lesson.id]);

          let statusTag = {
            text: 'Chưa học',
            color: 'bg-slate-100 text-slate-500 border-slate-200'
          };
          if (isCompleted) {
            statusTag = { text: 'Hoàn thành', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
          } else if (isCurrent) {
            statusTag = { text: 'Đang mở', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
          }

          return (
            <div key={lesson.id} className="relative group">
              {/* Timeline Bullet Node */}
              <div
                className={`absolute -left-6 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isCompleted
                    ? 'bg-emerald-600 border-white text-white shadow-xs'
                    : isCurrent
                    ? 'bg-indigo-600 border-white text-white ring-4 ring-indigo-200 shadow-xs'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : isCurrent ? (
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                ) : (
                  <Circle className="w-2 h-2" />
                )}
              </div>

              {/* Lesson Card */}
              <div
                className={`p-4 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-indigo-50/40 border-indigo-200 shadow-xs ring-1 ring-indigo-300/40'
                    : 'bg-slate-50/50 border-slate-200/80 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-extrabold text-sm text-slate-900">
                        {lesson.title}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusTag.color}`}>
                        {statusTag.text}
                      </span>
                      {isToday && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                          <Bookmark className="w-3 h-3 fill-current" />
                          <span>Hôm nay tại trường</span>
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500">
                      {lesson.subtitle} • {lesson.estimatedMinutes} phút • {lesson.learningTargets.length} mục tiêu
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    {hasSubmission && (
                      <button
                        onClick={() => setSelectedModalLessonId(lesson.id)}
                        className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 flex items-center gap-1.5 shadow-2xs transition-colors"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Xem bài làm ({quizSubmissions[lesson.id].percentage}%)</span>
                      </button>
                    )}

                    <button
                      onClick={() => setCurrentLessonId(lesson.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isCurrent
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-200 hover:bg-slate-300 text-slate-700'
                      }`}
                    >
                      {isCurrent ? 'Bài đang chọn' : 'Chọn bài này'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for Question Detail */}
      {selectedModalLessonId && (
        <QuizDetailModal
          lessonId={selectedModalLessonId}
          isOpen={Boolean(selectedModalLessonId)}
          onClose={() => setSelectedModalLessonId(null)}
        />
      )}
    </div>
  );
};
