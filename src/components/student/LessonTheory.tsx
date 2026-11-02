import React, { useState } from 'react';
import { Math7Lesson } from '../../types/curriculum';
import { MathText } from '../common/MathText';
import { NumberLineDemo } from './NumberLineDemo';
import { Target, BookOpen, AlertTriangle, Lightbulb, CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';

interface LessonTheoryProps {
  lesson: Math7Lesson;
}

export const LessonTheory: React.FC<LessonTheoryProps> = ({ lesson }) => {
  const [checkedTargets, setCheckedTargets] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    lesson.learningTargets.forEach(t => {
      initial[t.id] = t.mastered || false;
    });
    return initial;
  });

  const [expandedConceptId, setExpandedConceptId] = useState<string | null>(
    lesson.coreConcepts[0]?.id || null
  );

  const toggleTarget = (id: string) => {
    setCheckedTargets(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedTargets).filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Lesson Title Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center">
            #{lesson.order}
          </span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
            {lesson.chapterTitle}
          </span>
          <span className="text-xs text-slate-400">•</span>
          <span className="text-xs text-slate-500 font-medium">
            Thời lượng chuẩn: {lesson.estimatedMinutes} phút
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {lesson.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {lesson.subtitle}
        </p>

        {/* 1. Mục tiêu bài học (Learning Targets Checklist) */}
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-600" />
              <span>Yêu Cầu Cần Đạt (Mục Tiêu Năng Lực Chuẩn GDPT 2018)</span>
            </span>
            <span className="text-xs font-bold text-emerald-700">
              {completedCount} / {lesson.learningTargets.length} năng lực
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lesson.learningTargets.map(target => {
              const isChecked = checkedTargets[target.id] || false;
              return (
                <button
                  key={target.id}
                  onClick={() => toggleTarget(target.id)}
                  className={`flex items-start gap-2.5 p-3 rounded-2xl border text-left transition-all ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                  <div className="text-xs space-y-0.5 leading-relaxed">
                    <span className="font-bold text-slate-900 mr-1">[{target.code}]</span>
                    <MathText>{target.description}</MathText>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Interactive Number Line Component */}
      {lesson.numberLinePoints && lesson.numberLinePoints.length > 0 && (
        <NumberLineDemo points={lesson.numberLinePoints} />
      )}

      {/* 3. Trọng tâm kiến thức (Core Theory with KaTeX Formulas) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <span>Trọng Tâm Kiến Thức Cần Ghi Nhớ</span>
          </h3>
          <span className="text-xs text-slate-500">
            {lesson.coreConcepts.length} khái niệm cốt lõi
          </span>
        </div>

        <div className="space-y-3.5">
          {lesson.coreConcepts.map((concept, index) => {
            const isExpanded = expandedConceptId === concept.id;
            return (
              <div
                key={concept.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
              >
                {/* Header click to collapse/expand */}
                <button
                  onClick={() => setExpandedConceptId(isExpanded ? null : concept.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {concept.title}
                    </h4>
                  </div>
                  <div className="text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Content body */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 space-y-3.5 border-t border-slate-100 animate-fadeIn">
                    {/* Summary text */}
                    <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <MathText>{concept.summary}</MathText>
                    </div>

                    {/* Formula in LaTeX */}
                    {concept.latexFormula && (
                      <div className="bg-slate-900 text-emerald-300 rounded-2xl p-4 text-center shadow-inner my-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                          Công thức định nghĩa chuẩn
                        </span>
                        <MathText formula={concept.latexFormula} block={true} className="text-base sm:text-lg font-mono" />
                      </div>
                    )}

                    {/* Example Snippet */}
                    {concept.exampleSnippet && (
                      <div className="bg-slate-50/80 border border-slate-200/80 rounded-xl p-3.5 text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                        <span className="font-bold text-slate-900 block mb-1">Ví dụ minh họa chi tiết:</span>
                        <MathText>{concept.exampleSnippet}</MathText>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {/* Pitfall Warning */}
                      {concept.pitfallWarning && (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-900 text-xs leading-relaxed">
                          <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-rose-950 block mb-0.5">Bẫy kiểm tra hay mắc lỗi:</span>
                            <MathText>{concept.pitfallWarning}</MathText>
                          </div>
                        </div>
                      )}

                      {/* Real Life Application */}
                      {concept.realLifeApplication && (
                        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs leading-relaxed">
                          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-950 block mb-0.5">Ứng dụng thực tế đời sống:</span>
                            <MathText>{concept.realLifeApplication}</MathText>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
