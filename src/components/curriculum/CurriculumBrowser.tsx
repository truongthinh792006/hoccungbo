import React, { useState } from 'react';
import { SubjectId, TextbookSeriesId, Lesson } from '../../types/curriculum';
import { fullCurriculumData } from '../../data/mockCurriculum';
import { 
  Calculator, Atom, BookOpen, Globe, Cpu, 
  Layers, Clock, ArrowRight, 
  Sparkles, Target, HelpCircle
} from 'lucide-react';
import { MathRenderer } from '../common/MathRenderer';

interface CurriculumBrowserProps {
  onSelectLesson: (lessonId: string) => void;
  onOpenParentPrompts: (lessonId: string) => void;
}

export const CurriculumBrowser: React.FC<CurriculumBrowserProps> = ({
  onSelectLesson,
  onOpenParentPrompts
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('toan');
  const [selectedSeriesId, setSelectedSeriesId] = useState<TextbookSeriesId>('ket-noi-tri-thuc');
  const [selectedUnitId, setSelectedUnitId] = useState<string>('chuong_1_so_huu_ti');

  // Filter subjects and series
  const currentSubject = fullCurriculumData.subjects.find(s => s.id === selectedSubjectId)!;
  const currentSeries = fullCurriculumData.series.find(s => s.id === selectedSeriesId)!;

  // Filter units matching current subject and series (with graceful fallback)
  const unitsInSeries = fullCurriculumData.units.filter(
    u => u.subjectId === selectedSubjectId && u.seriesId === selectedSeriesId
  );
  const displayedUnits = unitsInSeries.length > 0
    ? unitsInSeries
    : fullCurriculumData.units.filter(u => u.subjectId === selectedSubjectId);
  const activeUnit = displayedUnits.find(u => u.id === selectedUnitId) || displayedUnits[0] || null;

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  const getCompetencyBadge = (level: string) => {
    switch (level) {
      case 'biet':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-100 text-sky-700 border border-sky-200">Nhận biết</span>;
      case 'hieu':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">Thông hiểu</span>;
      case 'van-dung':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-700 border border-amber-200">Vận dụng</span>;
      case 'van-dung-cao':
        return <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-100 text-rose-700 border border-rose-200">Vận dụng cao</span>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Banner with Soft Pastel Styling */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-6 sm:p-8 text-white shadow-lg shadow-emerald-900/10">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Khung Chương Trình Chuẩn Bộ GD&ĐT (GDPT 2018)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Khám Phá Chương Trình Lớp 7 Toàn Diện
          </h1>
          <p className="mt-2 text-emerald-50 text-sm sm:text-base leading-relaxed">
            Hệ thống phân cấp chuẩn mực: Môn học → Bộ sách giáo khoa → Chủ đề/Bài học → Yêu cầu cần đạt chuẩn năng lực. 
            Giúp con nắm chắc gốc rễ và bố mẹ đồng hành đúng hướng.
          </p>
        </div>
        {/* Subtle decorative elements */}
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-8 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      </div>

      {/* Subject Filter Bar */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          1. Chọn Môn Học Lớp 7
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {fullCurriculumData.subjects.map(subject => {
            const isSelected = subject.id === selectedSubjectId;
            return (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubjectId(subject.id);
                  const firstUnit = fullCurriculumData.units.find(u => u.subjectId === subject.id);
                  if (firstUnit) setSelectedUnitId(firstUnit.id);
                }}
                className={`flex flex-col items-start p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <div className={`p-2 rounded-xl mb-2.5 transition-colors ${
                  isSelected ? 'bg-emerald-500 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                }`}>
                  {getSubjectIcon(subject.iconName)}
                </div>
                <span className="font-bold text-sm text-slate-800">{subject.name}</span>
                <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{subject.description}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Series Switcher (Bộ Sách Giáo Khoa) */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              2. Chọn Bộ Sách Theo Trường Của Con
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              Hỗ trợ đầy đủ cả 3 bộ sách mới hiện hành
            </p>
          </div>
          <div className="flex items-center gap-2">
            {fullCurriculumData.series.map(series => {
              const isSelected = series.id === selectedSeriesId;
              return (
                <button
                  key={series.id}
                  onClick={() => {
                    setSelectedSeriesId(series.id);
                    const matched = fullCurriculumData.units.find(
                      u => u.subjectId === selectedSubjectId && u.seriesId === series.id
                    );
                    if (matched) setSelectedUnitId(matched.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800 shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {series.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Active Info Banner */}
        <div className="flex items-center gap-3 bg-emerald-50/60 border border-emerald-200/60 rounded-xl p-3 text-xs text-emerald-900">
          <Layers className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Đang hiển thị chương trình <strong>{currentSubject.name}</strong> • Phiên bản chuẩn theo bộ sách <strong>{currentSeries.name}</strong> ({currentSeries.publisher}).
          </span>
        </div>
      </div>

      {/* Unit / Chapter & Lessons List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600" />
            <span>Danh Sách Bài Học & Yêu Cầu Cần Đạt</span>
          </h2>
          <span className="text-xs text-slate-500">
            {activeUnit ? `${activeUnit.lessons.length} bài học trong chương` : 'Chưa có bài học'}
          </span>
        </div>

        {activeUnit ? (
          <div className="space-y-5">
            {/* Unit Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                <span>{activeUnit.title}</span>
              </div>
              <p className="text-sm text-slate-300">{activeUnit.description}</p>
            </div>

            {/* Lesson Cards */}
            <div className="space-y-4">
              {activeUnit.lessons.map((lesson: Lesson) => {
                const hasPractice = lesson.practiceDrills && lesson.practiceDrills.length > 0;
                return (
                  <div
                    key={lesson.id}
                    className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-300 transition-all p-5 sm:p-6 shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Left: Lesson title & meta */}
                      <div className="space-y-1.5 max-w-2xl">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                            #{lesson.order}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            {lesson.title}
                          </h3>
                          <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {lesson.estimatedStudyTimeMinutes} phút
                          </span>
                          {hasPractice && (
                            <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                              Có bài luyện 3 cấp độ
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600">
                          {lesson.subtitle}
                        </p>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => onOpenParentPrompts(lesson.id)}
                          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 transition-colors"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>Gợi ý bố mẹ hỏi ({lesson.dinnerConversationPrompts?.length || 0})</span>
                        </button>

                        <button
                          onClick={() => onSelectLesson(lesson.id)}
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/30 transition-all"
                        >
                          <span>Vào học ngay</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Target Competencies (Yêu cầu cần đạt) */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 block">
                        Yêu Cầu Cần Đạt Chuẩn GDPT 2018:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {lesson.targetCompetencies.map(comp => (
                          <div
                            key={comp.id}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100 text-xs"
                          >
                            <div className="shrink-0 mt-0.5">
                              {getCompetencyBadge(comp.level)}
                            </div>
                            <div className="space-y-0.5 text-slate-700 leading-relaxed">
                              <span className="font-semibold text-slate-800 mr-1">[{comp.code}]</span>
                              <MathRenderer content={comp.description} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
            <p className="text-slate-500 text-sm">Chưa có bài học mẫu cho tổ hợp môn này. Hãy chọn Toán 7 hoặc KHTN 7 để trải nghiệm đầy đủ!</p>
          </div>
        )}
      </div>
    </div>
  );
};
