import React from 'react';
import { Lesson } from '../../types/curriculum';
import { MathRenderer } from '../common/MathRenderer';
import { BookOpen, AlertTriangle, Lightbulb, CheckCircle2, Circle } from 'lucide-react';

interface LessonOverviewProps {
  lesson: Lesson;
  masteredCompetencyIds: string[];
  onToggleCompetency: (id: string) => void;
}

export const LessonOverview: React.FC<LessonOverviewProps> = ({
  lesson,
  masteredCompetencyIds,
  onToggleCompetency
}) => {
  return (
    <div className="space-y-6">
      {/* Lesson Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit mb-2">
          <span>{lesson.subtitle}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {lesson.title}
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Thời lượng dự kiến: <strong>{lesson.estimatedStudyTimeMinutes} phút</strong> • Thời gian học được điều chỉnh tự do theo tốc độ cá nhân.
        </p>

        {/* Competencies Progress */}
        <div className="mt-5 pt-5 border-t border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Mục Tiêu Năng Lực Cần Đạt (Đánh dấu khi con đã hiểu chắc)
            </span>
            <span className="text-xs font-semibold text-emerald-700">
              {lesson.targetCompetencies.filter(c => masteredCompetencyIds.includes(c.id)).length} / {lesson.targetCompetencies.length} năng lực
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lesson.targetCompetencies.map(comp => {
              const isMastered = masteredCompetencyIds.includes(comp.id);
              return (
                <button
                  key={comp.id}
                  onClick={() => onToggleCompetency(comp.id)}
                  className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all ${
                    isMastered
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                      : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isMastered ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <div className="text-xs space-y-0.5 leading-relaxed">
                    <span className="font-bold text-slate-800">[{comp.code}]</span>{' '}
                    <MathRenderer content={comp.description} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Concepts Breakdown */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <span>Lý Thuyết Trọng Tâm & Điểm Nút Kiến Thức</span>
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {lesson.keyConcepts.map((concept, index) => (
            <div
              key={concept.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-3.5 hover:border-slate-300 transition-all"
            >
              {/* Title */}
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  {concept.title}
                </h4>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-700 leading-relaxed">
                <MathRenderer content={concept.summary} />
              </p>

              {/* Math Formula Highlight Box */}
              {concept.mathFormula && (
                <div className="bg-slate-900 text-white rounded-xl p-3.5 text-center shadow-inner my-2">
                  <div className="text-[11px] font-mono text-emerald-400 mb-1">CÔNG THỨC TRỌNG TÂM</div>
                  <MathRenderer math={concept.mathFormula} block={true} className="text-lg font-mono text-emerald-300" />
                </div>
              )}

              {/* Example Snippet */}
              {concept.exampleSnippet && (
                <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <span className="font-bold text-slate-800 block mb-1">Ví dụ minh họa:</span>
                  <MathRenderer content={concept.exampleSnippet} />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* Pitfall Warning */}
                {concept.pitfallWarning && (
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50/80 border border-rose-200/80 text-rose-900 text-xs leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-rose-800 mb-0.5">Bẫy thường gặp:</span>
                      <MathRenderer content={concept.pitfallWarning} />
                    </div>
                  </div>
                )}

                {/* Real-life Application */}
                {concept.realLifeApplication && (
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs leading-relaxed">
                    <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-amber-800 mb-0.5">Ứng dụng thực tế gần gũi:</span>
                      <MathRenderer content={concept.realLifeApplication} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
