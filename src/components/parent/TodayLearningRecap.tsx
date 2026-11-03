import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { 
  Clock, CheckCircle2, Circle, Target, Award, 
  Bookmark, User 
} from 'lucide-react';

export const TodayLearningRecap: React.FC = () => {
  const { 
    allLessons, 
    currentLessonId, 
    setCurrentLessonId, 
    isCompetencyMastered, 
    todayStudyTimeMinutes,
    quizSubmissions,
    setRole
  } = useApp();

  // Find Lesson 3 specifically or current lesson
  const lesson3 = allLessons.find(l => l.id === 'bai_3_luy_thua_so_mu_tu_nhien') || allLessons[2] || allLessons[0];
  const [selectedLessonId, setSelectedLessonId] = useState<string>(
    currentLessonId === 'bai_3_luy_thua_so_mu_tu_nhien' ? 'bai_3_luy_thua_so_mu_tu_nhien' : lesson3.id
  );

  const activeLesson = allLessons.find(l => l.id === selectedLessonId) || lesson3;
  const submission = quizSubmissions[activeLesson.id];

  const masteredCount = activeLesson.learningTargets.filter(t => 
    isCompetencyMastered(t.id) || isCompetencyMastered(t.code)
  ).length;

  const totalTargets = activeLesson.learningTargets.length;
  const progressPercent = totalTargets > 0 ? Math.round((masteredCount / totalTargets) * 100) : 0;

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-5">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
            <Bookmark className="w-5 h-5 text-amber-700 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                Báo cáo tự học hôm nay
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                {activeLesson.chapterTitle}
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mt-0.5">
              {activeLesson.title}
            </h2>
          </div>
        </div>

        {/* Quick Lesson Switcher for Parent */}
        <div className="flex items-center gap-2">
          <select
            value={selectedLessonId}
            onChange={(e) => {
              setSelectedLessonId(e.target.value);
              setCurrentLessonId(e.target.value);
            }}
            className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="bai_3_luy_thua_so_mu_tu_nhien">Bài 3: Lũy thừa với số mũ tự nhiên (Hôm nay)</option>
            <option value="bai_1_tap_hop_cac_so_huu_ti">Bài 1: Tập hợp các số hữu tỉ</option>
            <option value="bai_2_cong_tru_nhan_chia_so_huu_ti">Bài 2: Cộng trừ nhân chia số hữu tỉ</option>
            <option value="bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve">Bài 4: Thứ tự phép tính & Chuyển vế</option>
          </select>

          <button
            onClick={() => {
              setCurrentLessonId(activeLesson.id);
              setRole('STUDENT');
            }}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-colors shrink-0"
          >
            <User className="w-3.5 h-3.5" />
            <span>Xem góc học của con</span>
          </button>
        </div>
      </div>

      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {/* Metric 1: Time spent */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Thời gian học hôm nay
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl font-extrabold text-slate-900">{todayStudyTimeMinutes}</span>
              <span className="text-xs text-slate-500 font-semibold">phút (Đạt chuẩn)</span>
            </div>
          </div>
        </div>

        {/* Metric 2: Competencies checked off */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Mục tiêu đã đạt
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl font-extrabold text-emerald-800">{masteredCount} / {totalTargets}</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded">
                {progressPercent}%
              </span>
            </div>
          </div>
        </div>

        {/* Metric 3: Micro-Quiz results */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
              Micro-Quiz chẩn đoán
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-xl font-extrabold text-slate-900">
                {submission ? `${submission.percentage}%` : 'Đã luyện tập'}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                {submission ? `(${submission.score}/${submission.totalPoints}đ)` : '4 câu hỏi'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Competency Checklist Breakdown */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-700 uppercase tracking-wide flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Bảng kiểm năng lực chi tiết (Competency Checklist - CV 5512)</span>
          </span>
          <span className="text-slate-400">Tự động đồng bộ từ phòng tự học</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {activeLesson.learningTargets.map(target => {
            const isChecked = isCompetencyMastered(target.id) || isCompetencyMastered(target.code);
            return (
              <div
                key={target.id}
                className={`p-3.5 rounded-2xl border transition-all text-xs space-y-1.5 ${
                  isChecked
                    ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950 shadow-2xs'
                    : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">[{target.code}]</span>
                  {isChecked ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Đã đạt</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-full">
                      <Circle className="w-3 h-3 text-slate-400" />
                      <span>Đang luyện</span>
                    </span>
                  )}
                </div>

                <div className="text-slate-700 leading-relaxed">
                  <MathText>{target.description}</MathText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
