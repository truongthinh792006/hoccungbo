import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { math7Chapters, math7CurriculumLessons } from '../../data/math7_curriculum';
import { 
  X, Search, BookOpen, CheckCircle2, Play, 
  Clock, ChevronRight, Bookmark, 
  Award, Target, HelpCircle
} from 'lucide-react';

export const SyllabusNavigator: React.FC = () => {
  const { 
    isSyllabusOpen, 
    closeSyllabus, 
    currentLessonId, 
    setCurrentLessonId, 
    todayLessonId, 
    setTodayLessonId,
    isTodayLesson,
    completedLessonIds,
    quizSubmissions 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');

  // Filter lessons based on active chapter tab and search keyword
  const filteredLessons = useMemo(() => {
    let result = math7CurriculumLessons;

    if (selectedChapterId !== 'all') {
      result = result.filter(l => l.chapterId === selectedChapterId);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(l => 
        l.title.toLowerCase().includes(q) ||
        l.subtitle.toLowerCase().includes(q) ||
        l.chapterTitle.toLowerCase().includes(q) ||
        l.coreConcepts.some(c => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q))
      );
    }

    return result;
  }, [selectedChapterId, searchQuery]);

  const todayLesson = useMemo(() => {
    return math7CurriculumLessons.find(l => l.id === todayLessonId) || math7CurriculumLessons[0];
  }, [todayLessonId]);

  if (!isSyllabusOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Dark backdrop blur */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={closeSyllabus}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-extrabold text-lg text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Mục Lục Chương Trình SGK</span>
                  <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    Toán 7 KNTT
                  </span>
                </h2>
                <p className="text-xs text-slate-500">
                  Học kì 1: Trọn bộ 4 Chương (19 bài học chuẩn năng lực CV 5512)
                </p>
              </div>
            </div>

            <button
              onClick={closeSyllabus}
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick "Bài học hôm nay" Highlight Card */}
          <div className="rounded-2xl border border-amber-300/80 bg-gradient-to-r from-amber-50 to-orange-50/60 p-3.5 flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
                <Bookmark className="w-4 h-4 fill-current" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-900">
                    Bài học hôm nay tại trường:
                  </span>
                  <span className="text-[10px] bg-amber-200/90 text-amber-900 px-1.5 py-0.2 rounded font-bold">
                    Đã ghim
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  {todayLesson.title}
                </h4>
              </div>
            </div>

            <button
              onClick={() => {
                setCurrentLessonId(todayLesson.id);
                closeSyllabus();
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shrink-0 shadow-xs flex items-center gap-1 transition-all"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Vào học</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative mt-4">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên bài, số hữu tỉ, căn bậc hai, tiên đề, tam giác..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-slate-800"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Xóa
              </button>
            )}
          </div>

          {/* Chapter Filter Tabs */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setSelectedChapterId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedChapterId === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              Tất cả ({math7CurriculumLessons.length})
            </button>

            {math7Chapters.map(ch => {
              const isSelected = selectedChapterId === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChapterId(ch.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {ch.shortTitle} ({ch.lessonIds.length})
                </button>
              );
            })}
          </div>
        </div>

        {/* Lesson List Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 bg-slate-50/40">
          {filteredLessons.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-600">Không tìm thấy bài học nào phù hợp</p>
              <p className="text-xs text-slate-400">Hãy thử đổi từ khóa tìm kiếm khác</p>
            </div>
          ) : (
            filteredLessons.map(lesson => {
              const isSelected = lesson.id === currentLessonId;
              const isToday = isTodayLesson(lesson.id);
              const isCompleted = completedLessonIds.includes(lesson.id);
              const submission = quizSubmissions[lesson.id];

              return (
                <div
                  key={lesson.id}
                  className={`rounded-2xl border p-4 transition-all bg-white ${
                    isSelected
                      ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/10'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    {/* Left: Info */}
                    <div 
                      onClick={() => {
                        setCurrentLessonId(lesson.id);
                        closeSyllabus();
                      }}
                      className="cursor-pointer flex-1 min-w-0 space-y-1.5"
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          #{lesson.order}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                          {lesson.chapterTitle.split(':')[0]}
                        </span>

                        {isCompleted && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Đã xong</span>
                          </span>
                        )}

                        {isToday && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                            <Bookmark className="w-3 h-3 fill-current" />
                            <span>Hôm nay học</span>
                          </span>
                        )}

                        {isSelected && (
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">
                            Đang mở
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug hover:text-emerald-700 transition-colors">
                        {lesson.title}
                      </h3>

                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {lesson.subtitle}
                      </p>

                      {/* Specs Row */}
                      <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{lesson.estimatedMinutes} phút</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Target className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{lesson.learningTargets.length} mục tiêu CV 5512</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-amber-500" />
                          <span>{lesson.diagnosticQuiz.length} câu quiz</span>
                        </span>
                        {submission && (
                          <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                            Điểm: {submission.percentage}%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      {/* Bookmark as "Bài học hôm nay" */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTodayLessonId(lesson.id);
                        }}
                        className={`p-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1 ${
                          isToday
                            ? 'bg-amber-100 text-amber-900 border-amber-300 shadow-xs'
                            : 'bg-white hover:bg-amber-50 text-slate-400 hover:text-amber-700 border-slate-200'
                        }`}
                        title={isToday ? 'Đang là bài học hôm nay' : 'Đặt làm bài học hôm nay tại trường'}
                      >
                        <Bookmark className={`w-4 h-4 ${isToday ? 'fill-current text-amber-600' : ''}`} />
                        <span className="hidden sm:inline text-[11px]">
                          {isToday ? 'Đã ghim' : 'Ghim bài hôm nay'}
                        </span>
                      </button>

                      {/* Quick Select button */}
                      <button
                        onClick={() => {
                          setCurrentLessonId(lesson.id);
                          closeSyllabus();
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                          isSelected
                            ? 'bg-slate-900 text-white'
                            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        <span>{isSelected ? 'Đang học' : 'Chọn học'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Summary */}
        <div className="p-4 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
          <span>
            Đã hoàn thành: <strong>{completedLessonIds.length}</strong> / {math7CurriculumLessons.length} bài
          </span>
          <span className="font-medium text-emerald-700">
            Khung chuẩn GDPT 2018 (CV 5512)
          </span>
        </div>
      </div>
    </div>
  );
};
