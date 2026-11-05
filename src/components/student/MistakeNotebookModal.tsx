import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { MathText } from '../common/MathText';
import { normalizeExercise } from '../../services/exerciseService';
import { 
  X, BookMarked, CheckCircle2, AlertCircle, Lightbulb, 
  RotateCcw, Sparkles, Trophy, Trash2, Filter,
  BookOpen, Flame, ChevronDown, ChevronUp, Check
} from 'lucide-react';
import { MistakeRecord } from '../../types/curriculum';

export const MistakeNotebookModal: React.FC = () => {
  const { 
    isMistakeNotebookOpen, 
    closeMistakeNotebook, 
    mistakes, 
    resolveMistake, 
    deleteMistake,
    recordMistake
  } = useApp();

  const [filterStatus, setFilterStatus] = useState<'active' | 'mastered' | 'all'>('active');
  const [selectedLessonFilter, setSelectedLessonFilter] = useState<string>('all');
  
  // Interactive retry state per mistake card
  const [activeRetryingId, setActiveRetryingId] = useState<string | null>(null);
  const [selectedRetryOptions, setSelectedRetryOptions] = useState<Record<string, string>>({});
  const [retryResult, setRetryResult] = useState<Record<string, 'correct' | 'wrong' | null>>({});
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});

  // Summary statistics
  const totalCount = mistakes.length;
  const activeCount = useMemo(() => mistakes.filter(m => !m.mastered).length, [mistakes]);
  const masteredCount = useMemo(() => mistakes.filter(m => m.mastered).length, [mistakes]);
  const masteredPercentage = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 100;

  // Extract unique lessons for filter dropdown
  const uniqueLessons = useMemo(() => {
    const map = new Map<string, string>();
    mistakes.forEach(m => {
      if (!map.has(m.lessonId)) {
        map.set(m.lessonId, m.lessonTitle);
      }
    });
    return Array.from(map.entries()).map(([id, title]) => ({ id, title }));
  }, [mistakes]);

  // Filtered list
  const filteredMistakes = useMemo(() => {
    return mistakes.filter(m => {
      if (filterStatus === 'active' && m.mastered) return false;
      if (filterStatus === 'mastered' && !m.mastered) return false;
      if (selectedLessonFilter !== 'all' && m.lessonId !== selectedLessonFilter) return false;
      return true;
    });
  }, [mistakes, filterStatus, selectedLessonFilter]);

  if (!isMistakeNotebookOpen) return null;

  const handleStartRetry = (id: string) => {
    setActiveRetryingId(id);
    setSelectedRetryOptions(prev => ({ ...prev, [id]: '' }));
    setRetryResult(prev => ({ ...prev, [id]: null }));
  };

  const handleSelectRetryOption = (id: string, optId: string) => {
    setSelectedRetryOptions(prev => ({ ...prev, [id]: optId }));
    setRetryResult(prev => ({ ...prev, [id]: null }));
  };

  const handleVerifyRetry = (record: MistakeRecord) => {
    const selected = selectedRetryOptions[record.id];
    if (!selected || !record.exerciseSnapshot) return;

    const normalized = normalizeExercise(record.exerciseSnapshot);
    const correctId = normalized.correctAnswerId || (typeof normalized.correctIndex === 'number' ? `opt-${normalized.correctIndex}` : '');
    const isCorrect = selected === correctId;

    if (isCorrect) {
      setRetryResult(prev => ({ ...prev, [record.id]: 'correct' }));
      resolveMistake(record.id);
      setOpenSolutions(prev => ({ ...prev, [record.id]: true }));
    } else {
      setRetryResult(prev => ({ ...prev, [record.id]: 'wrong' }));
      setOpenHints(prev => ({ ...prev, [record.id]: true }));
      // Increase wrong attempts count
      recordMistake(record.exerciseSnapshot, { id: record.lessonId, title: record.lessonTitle });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-fadeIn">
      <div 
        className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative overflow-hidden bg-gradient-to-r from-rose-600 via-rose-700 to-amber-700 p-5 sm:p-6 text-white shrink-0">
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-rose-100">
                <BookMarked className="w-3.5 h-3.5 text-amber-300" />
                <span>Sổ Tay Câu Sai & Phục Thù • Toán 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
                <span>📕 Sổ Tay Phục Thù Điểm Yếu</span>
                {activeCount > 0 && (
                  <span className="text-xs bg-amber-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full shadow-xs">
                    {activeCount} câu cần gỡ
                  </span>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 max-w-2xl leading-relaxed">
                Tự động thu thập các câu con từng chọn nhầm. Thử sức làm lại đúng để nhận ngay <strong>+10 XP</strong> và biến sai sót thành bài học khắc sâu!
              </p>
            </div>

            <button
              onClick={closeMistakeNotebook}
              className="p-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white transition-all shrink-0 cursor-pointer"
              title="Đóng sổ tay"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mastery Progress Bar */}
          <div className="relative z-10 mt-5 pt-4 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-300" />
              <span className="font-bold">
                Tiến độ làm chủ: <span className="text-amber-300">{masteredCount}</span> / {totalCount} câu từng sai ({masteredPercentage}%)
              </span>
            </div>

            <div className="w-full sm:w-56 bg-black/20 h-2.5 rounded-full overflow-hidden p-0.5 border border-white/20">
              <div 
                className="bg-gradient-to-r from-amber-300 to-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${masteredPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Toolbar & Filter Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Status Tabs */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200 text-xs font-bold shadow-2xs">
            <button
              onClick={() => setFilterStatus('active')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                filterStatus === 'active'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Cần phục thù ({activeCount})</span>
            </button>

            <button
              onClick={() => setFilterStatus('mastered')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                filterStatus === 'mastered'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Đã làm chủ ({masteredCount})</span>
            </button>

            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                filterStatus === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Tất cả ({totalCount})</span>
            </button>
          </div>

          {/* Lesson Filter Dropdown */}
          {uniqueLessons.length > 0 && (
            <div className="flex items-center gap-2 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={selectedLessonFilter}
                onChange={e => setSelectedLessonFilter(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs focus:outline-none focus:ring-2 focus:ring-rose-500/20"
              >
                <option value="all">Tất cả bài học ({uniqueLessons.length})</option>
                {uniqueLessons.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Content Body: Mistake Cards List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {filteredMistakes.length === 0 ? (
            <div className="py-12 px-4 text-center space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-black text-slate-800">
                {filterStatus === 'active' 
                  ? 'Tuyệt vời! Con không còn câu sai nào cần phục thù 🎉' 
                  : 'Chưa có câu hỏi nào trong danh mục này'}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {filterStatus === 'active'
                  ? 'Tất cả các câu con từng phân vân đều đã được giải đúng và làm chủ hoàn toàn. Hãy tiếp tục duy trì phong độ nhé!'
                  : 'Khi con làm bài tập tự luyện và trả lời chưa chính xác, hệ thống sẽ tự động lưu vào đây để con ôn tập.'}
              </p>
            </div>
          ) : (
            filteredMistakes.map((record, index) => {
              const ex = record.exerciseSnapshot;
              if (!ex) return null;

              const normalized = normalizeExercise(ex);
              const isRetrying = activeRetryingId === record.id;
              const selectedOpt = selectedRetryOptions[record.id];
              const result = retryResult[record.id];
              const isHintOpen = openHints[record.id];
              const isSolutionOpen = openSolutions[record.id];
              const correctId = normalized.correctAnswerId || `opt-${normalized.correctIndex}`;

              return (
                <div
                  key={record.id}
                  className={`bg-white rounded-2xl border p-4 sm:p-5 transition-all shadow-xs space-y-4 ${
                    record.mastered
                      ? 'border-emerald-200/90 bg-emerald-50/20'
                      : 'border-rose-200/80 hover:border-rose-300'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                          {record.lessonTitle}
                        </span>
                        <span className="text-[11px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                          Đã sai {record.wrongAttemptsCount} lần
                        </span>
                        {record.mastered ? (
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-300">
                            <Sparkles className="w-3 h-3 text-emerald-600" />
                            <span>Đã làm chủ (+10 XP)</span>
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1 border border-amber-300">
                            <Flame className="w-3 h-3 text-amber-600" />
                            <span>Cần phục thù</span>
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base pt-1">
                        #{index + 1}. {record.exerciseTitle}
                      </h4>
                    </div>

                    {/* Delete / Dismiss Button */}
                    <button
                      onClick={() => deleteMistake(record.id)}
                      className="p-1.5 rounded-xl hover:bg-rose-50 text-slate-300 hover:text-rose-600 transition-colors"
                      title="Xóa khỏi sổ tay"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Question Content */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                    <MathText text={normalized.question}>{normalized.question}</MathText>
                  </div>

                  {/* Retry Interactive Mode */}
                  {isRetrying ? (
                    <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-200/80 space-y-3.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-900 uppercase tracking-wide flex items-center gap-1.5">
                          <RotateCcw className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Thử sức chọn lại đáp án đúng:</span>
                        </span>
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                          🎁 Thưởng +10 XP khi đúng
                        </span>
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {normalized.options.map(opt => {
                          const isSelected = selectedOpt === opt.id;
                          let optStyle = 'border-slate-200 bg-white hover:bg-indigo-50/50 text-slate-800';

                          if (result === 'correct') {
                            if (opt.id === correctId) {
                              optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/20';
                            } else {
                              optStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                            }
                          } else if (result === 'wrong') {
                            if (isSelected) {
                              optStyle = 'border-rose-400 bg-rose-50 text-rose-900 font-semibold';
                            } else {
                              optStyle = 'border-slate-200 bg-white text-slate-700';
                            }
                          } else if (isSelected) {
                            optStyle = 'border-indigo-600 bg-indigo-50 text-indigo-950 font-bold ring-2 ring-indigo-500/20';
                          }

                          return (
                            <button
                              key={opt.id}
                              disabled={result === 'correct'}
                              onClick={() => handleSelectRetryOption(record.id, opt.id)}
                              className={`text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${optStyle}`}
                            >
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                                isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <div className="min-w-0 flex-1">
                                <MathText text={opt.text}>{opt.text}</MathText>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Verify Action Bar */}
                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-indigo-100 flex-wrap">
                        <div className="flex items-center gap-2">
                          {result !== 'correct' ? (
                            <button
                              onClick={() => handleVerifyRetry(record)}
                              disabled={!selectedOpt}
                              className={`px-4 py-2 rounded-xl text-xs font-black shadow-xs transition-all flex items-center gap-1.5 ${
                                !selectedOpt
                                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                  : 'bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95'
                              }`}
                            >
                              <Check className="w-4 h-4" />
                              <span>Xác nhận & Phục thù</span>
                            </button>
                          ) : (
                            <div className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-black flex items-center gap-1.5 shadow-xs animate-bounce">
                              <Sparkles className="w-4 h-4 text-amber-200" />
                              <span>Phục thù thành công! +10 XP 🎉</span>
                            </div>
                          )}

                          <button
                            onClick={() => setActiveRetryingId(null)}
                            className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/60 transition-colors"
                          >
                            Đóng lại
                          </button>
                        </div>

                        {result === 'wrong' && (
                          <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>Vẫn chưa đúng! Con hãy đọc gợi ý tư duy dưới đây:</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Default Row Action Bar */
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleStartRetry(record.id)}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-all flex items-center gap-1.5 active:scale-95"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>{record.mastered ? 'Luyện lại lần nữa' : 'Thử sức lại (Phục thù)'}</span>
                        </button>

                        <button
                          onClick={() => setOpenHints(prev => ({ ...prev, [record.id]: !prev[record.id] }))}
                          className="px-3 py-2 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 transition-colors flex items-center gap-1"
                        >
                          <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                          <span>{isHintOpen ? 'Đóng gợi ý' : 'Gợi ý tư duy'}</span>
                        </button>

                        <button
                          onClick={() => setOpenSolutions(prev => ({ ...prev, [record.id]: !prev[record.id] }))}
                          className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-slate-600" />
                          <span>{isSolutionOpen ? 'Đóng lời giải' : 'Xem lời giải SGK'}</span>
                          {isSolutionOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      </div>

                      {record.mastered && (
                        <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Đã làm chủ kiến thức</span>
                        </span>
                      )}
                    </div>
                  )}

                  {/* Hint Drawer */}
                  {isHintOpen && (
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-1.5 animate-fadeIn">
                      <div className="font-bold flex items-center gap-1.5 text-amber-900 text-xs uppercase tracking-wide">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                        <span>💡 Gợi ý tư duy phục thù</span>
                      </div>
                      <div className="leading-relaxed">
                        <MathText text={normalized.hint}>{normalized.hint}</MathText>
                      </div>
                    </div>
                  )}

                  {/* Solution Drawer */}
                  {isSolutionOpen && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-2 animate-fadeIn">
                      <div className="font-bold flex items-center justify-between text-slate-900 text-xs uppercase tracking-wide border-b border-slate-200 pb-2">
                        <div className="flex items-center gap-1.5 text-emerald-800">
                          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Lời giải chi tiết chuẩn SGK</span>
                        </div>
                        <span className="text-[11px] font-bold text-slate-500 normal-case flex items-center gap-1">
                          <span>Đáp án đúng:</span>
                          <strong className="text-emerald-700 inline-flex items-center">
                            <MathText text={normalized.options.find(o => o.id === correctId)?.text} />
                          </strong>
                        </span>
                      </div>
                      <div className="leading-relaxed whitespace-pre-line">
                        <MathText text={normalized.solution}>{normalized.solution}</MathText>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 shrink-0">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Mẹo: "Sai sót là cơ hội tốt nhất để não bộ hiểu sâu bản chất hình học và đại số!"</span>
          </span>

          <button
            onClick={closeMistakeNotebook}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-all"
          >
            Đóng sổ tay
          </button>
        </div>
      </div>
    </div>
  );
};
