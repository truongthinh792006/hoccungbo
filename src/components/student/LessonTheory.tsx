import React, { useState } from 'react';
import { Math7Lesson } from '../../types/curriculum';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { NumberLineDemo } from './NumberLineDemo';
import { NumberLineExplorer } from './NumberLineExplorer';
import { ParallelLinesExplorer } from './ParallelLinesExplorer';
import { Target, BookOpen, AlertTriangle, Lightbulb, CheckCircle2, Circle, ChevronDown, ChevronUp, FlaskConical } from 'lucide-react';

interface LessonTheoryProps {
  lesson: Math7Lesson;
}

export const LessonTheory: React.FC<LessonTheoryProps> = ({ lesson }) => {
  const { isCompetencyMastered, toggleCompetency } = useApp();

  const [expandedConceptId, setExpandedConceptId] = useState<string | null>(
    lesson.coreConcepts[0]?.id || null
  );
  const [isSimulationOpen, setIsSimulationOpen] = useState<boolean>(true);

  const isChapter1 = lesson.chapterId === 'chuong_1_so_huu_ti' || lesson.chapterId?.includes('1');
  const isParallelLinesLesson =
    lesson.id === 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac' ||
    lesson.id === 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet' ||
    lesson.chapterId === 'chuong_3_goc_duong_thang_song_song';

  const completedCount = lesson.learningTargets.filter(t => 
    isCompetencyMastered(t.id) || isCompetencyMastered(t.code)
  ).length;

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
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              {completedCount} / {lesson.learningTargets.length} năng lực đã đạt
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lesson.learningTargets.map(target => {
              const isChecked = isCompetencyMastered(target.id) || isCompetencyMastered(target.code);
              return (
                <button
                  key={target.id}
                  onClick={() => toggleCompetency(target.id)}
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
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-bold text-slate-900">[{target.code}]</span>
                      {isChecked && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                          Đã làm chủ
                        </span>
                      )}
                    </div>
                    <div className="text-slate-600">
                      <MathText>{target.description}</MathText>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Collapsible Visual Simulation: Mô phỏng trực quan */}
      {isChapter1 && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden transition-all">
          <button
            onClick={() => setIsSimulationOpen(!isSimulationOpen)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center shrink-0">
                <FlaskConical className="w-4 h-4 text-indigo-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    🔬 Mô phỏng trực quan: Trục số số hữu tỉ
                  </h3>
                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
                    SVG Tương tác
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Khám phá quy tắc chia vạch đơn vị, biểu diễn phân số a/b và tìm số đối
                </p>
              </div>
            </div>
            <div className="text-slate-400">
              {isSimulationOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {isSimulationOpen && (
            <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 bg-slate-50/30">
              <NumberLineExplorer />
            </div>
          )}
        </div>
      )}

      {/* 2b. Visual Simulation for Chapter 3: Hai đường thẳng song song & Cát tuyến */}
      {isParallelLinesLesson && (
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden transition-all">
          <button
            onClick={() => setIsSimulationOpen(!isSimulationOpen)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-slate-50/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                <FlaskConical className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                    🔬 Mô phỏng trực quan: Góc & Hai đường thẳng song song
                  </h3>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    Hình học tương tác
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Xoay cát tuyến c để quan sát các cặp góc so le trong, đồng vị và trong cùng phía
                </p>
              </div>
            </div>
            <div className="text-slate-400">
              {isSimulationOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {isSimulationOpen && (
            <div className="p-4 sm:p-6 pt-0 border-t border-slate-100 bg-slate-50/30">
              <ParallelLinesExplorer />
            </div>
          )}
        </div>
      )}

      {/* Legacy Number Line points if provided and not in Chapter 1 or 3 */}
      {!isChapter1 && !isParallelLinesLesson && lesson.numberLinePoints && lesson.numberLinePoints.length > 0 && (
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
