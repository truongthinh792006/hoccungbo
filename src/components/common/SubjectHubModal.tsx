import React from 'react';
import { useApp } from '../../context/AppContext';
import { SUBJECTS_REGISTRY, SubjectMeta } from '../../data/subjects_meta';
import { 
  X, 
  Check, 
  ArrowRight, 
  Lock, 
  Sparkles, 
  Calculator, 
  Languages, 
  Atom, 
  BookOpen, 
  GraduationCap,
  Layers,
  CheckCircle2
} from 'lucide-react';

export const SubjectHubModal: React.FC = () => {
  const { 
    isSubjectHubOpen, 
    closeSubjectHub, 
    currentSubject, 
    setCurrentSubject 
  } = useApp();

  if (!isSubjectHubOpen) return null;

  const getSubjectIcon = (iconName: SubjectMeta['iconName']) => {
    switch (iconName) {
      case 'calculator':
        return <Calculator className="w-6 h-6 text-emerald-600" />;
      case 'languages':
        return <Languages className="w-6 h-6 text-indigo-600" />;
      case 'atom':
        return <Atom className="w-6 h-6 text-teal-600" />;
      case 'book-open':
        return <BookOpen className="w-6 h-6 text-amber-600" />;
      default:
        return <GraduationCap className="w-6 h-6 text-slate-600" />;
    }
  };

  const handleSelectSubject = (subject: SubjectMeta) => {
    if (subject.status === 'coming_soon') {
      return;
    }
    setCurrentSubject(subject.id);
    closeSubjectHub();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative px-6 py-6 sm:px-8 sm:py-7 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white shrink-0">
          <button
            onClick={closeSubjectHub}
            aria-label="Đóng cửa sổ chọn môn"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-2xl space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-indigo-200 text-xs font-semibold backdrop-blur-sm">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              <span>Bàn Học 4 Môn Lớp 7 • Chuẩn GDPT 2018</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Chọn Môn Học Đồng Hành Cùng Con
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Hệ thống đồng hành phân loại theo từng môn học với lý thuyết tương tác, luyện tập câu hỏi chuẩn hóa và góc kết nối cùng bố mẹ.
            </p>
          </div>
        </div>

        {/* 4 Subject Cards Grid */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {SUBJECTS_REGISTRY.map((subject) => {
              const isSelected = currentSubject === subject.id;
              const isAvailable = subject.status === 'active';

              return (
                <div
                  key={subject.id}
                  onClick={() => isAvailable && handleSelectSubject(subject)}
                  className={`group relative rounded-2xl p-5 border-2 transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/40 shadow-md ring-2 ring-indigo-500/20'
                      : isAvailable
                      ? 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg cursor-pointer'
                      : 'border-slate-200/70 bg-slate-50/70 opacity-80 cursor-not-allowed'
                  }`}
                >
                  {/* Top Bar: Icon + Titles + Badge */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : isAvailable
                            ? 'bg-slate-100 group-hover:bg-indigo-50 transition-colors'
                            : 'bg-slate-200 text-slate-400'
                        }`}>
                          {getSubjectIcon(subject.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-extrabold text-base sm:text-lg text-slate-900">
                              {subject.name}
                            </h3>
                            {isSelected && (
                              <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">
                                <Check className="w-3 h-3" />
                                <span>Đang học</span>
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                            <Layers className="w-3 h-3" />
                            <span>{subject.seriesName}</span>
                          </p>
                        </div>
                      </div>

                      {/* Status Badge */}
                      {isAvailable ? (
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0 ${subject.badgeColor}`}>
                          {subject.id === 'toan' ? '9 Chương • 496 Câu' : 'Unit 1 & Unit 2 • 40 Câu'}
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-200 text-slate-600 flex items-center gap-1 shrink-0">
                          <Lock className="w-3 h-3 text-slate-500" />
                          <span>Sắp ra mắt</span>
                        </span>
                      )}
                    </div>

                    {/* Tagline & Description */}
                    <div className="mt-3.5 space-y-1">
                      <p className="text-xs font-bold text-indigo-900/80">
                        {subject.tagline}
                      </p>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {subject.description}
                      </p>
                    </div>

                    {/* Feature Stats Pills */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-[11px]">
                      <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                        {subject.stats.unitsCount}
                      </span>
                      {subject.stats.exercisesCount && (
                        <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 font-medium">
                          {subject.stats.exercisesCount}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{subject.stats.featureHighlight}</span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="mt-4 pt-2">
                    {isSelected ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          closeSubjectHub();
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-indigo-600/20"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Tiếp tục học ngay</span>
                      </button>
                    ) : isAvailable ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectSubject(subject);
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 group-hover:bg-indigo-600"
                      >
                        <span>Chuyển sang môn {subject.name}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <div className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 text-xs font-bold text-center flex items-center justify-center gap-1.5 select-none">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Đang biên soạn chuẩn GDPT 2018</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Advice Box */}
          <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 p-4 text-xs text-amber-900 flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div className="space-y-0.5 leading-relaxed">
              <p className="font-bold">Mẹo dành cho bố mẹ & con:</p>
              <p>
                Toán 7 và Tiếng Anh 7 là hai trụ cột kiến thức quan trọng nhất lớp 7. 
                Con có thể học xen kẽ mỗi tối: 25 phút giải bài tập Toán và 15 phút luyện từ vựng Tiếng Anh phản xạ để đạt hiệu quả cao nhất!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
