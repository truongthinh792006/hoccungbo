import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DinnerTalkTransitionModal } from './DinnerTalkTransitionModal';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, 
  Target, Coffee, Utensils, Clock, ChevronDown, 
  ChevronUp
} from 'lucide-react';

export const FocusTimerWidget: React.FC = () => {
  const { 
    timerState, 
    startFocusTimer, 
    pauseFocusTimer, 
    resetFocusTimer, 
    setFocusDuration, 
    toggleFocusSound, 
    toggleTickSound,
    openDinnerTalkModal,
    todayStudyTimeMinutes
  } = useApp();

  const [isExpandedMobile, setIsExpandedMobile] = useState(false);

  const minutes = Math.floor(timerState.timeLeftSeconds / 60);
  const seconds = timerState.timeLeftSeconds % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const totalSeconds = timerState.durationMinutes * 60;
  const progressPercent = totalSeconds > 0 
    ? Math.min(100, Math.max(0, Math.round(((totalSeconds - timerState.timeLeftSeconds) / totalSeconds) * 100))) 
    : 0;

  // SVG Circle calculation
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progressPercent) / 100;

  const isBreak = timerState.mode === 'BREAK';

  return (
    <>
      {/* Desktop & Tablet Widget */}
      <div className="hidden sm:block bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-xs transition-all">
        <div className="flex items-center justify-between gap-3">
          {/* Left: Mode Badge & Timer Display */}
          <div className="flex items-center gap-3">
            {/* Circular Progress Ring */}
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <svg className="w-12 h-12 -rotate-90" viewBox="0 0 52 52">
                <circle
                  cx="26"
                  cy="26"
                  r={radius}
                  className="stroke-slate-100"
                  strokeWidth="4"
                  fill="transparent"
                />
                <circle
                  cx="26"
                  cy="26"
                  r={radius}
                  className={`transition-all duration-300 ${
                    isBreak ? 'stroke-amber-500' : 'stroke-emerald-600'
                  }`}
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                {isBreak ? (
                  <Coffee className="w-5 h-5 text-amber-600 animate-pulse" />
                ) : (
                  <Target className={`w-5 h-5 ${timerState.isRunning ? 'text-emerald-600 animate-spin-slow' : 'text-slate-500'}`} />
                )}
              </div>
            </div>

            {/* Time & Mode Label */}
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-black font-mono tracking-tight ${
                  isBreak ? 'text-amber-700' : 'text-slate-900'
                }`}>
                  {timeFormatted}
                </span>

                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider ${
                  isBreak 
                    ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                    : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                }`}>
                  {isBreak ? (
                    <>
                      <Coffee className="w-3 h-3 text-amber-700" />
                      <span>Nghỉ ngơi 5p</span>
                    </>
                  ) : (
                    <>
                      <Target className="w-3 h-3 text-emerald-700" />
                      <span>Tập trung sâu</span>
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                <span>Hôm nay: <strong className="text-emerald-700">{todayStudyTimeMinutes} phút</strong></span>
                {timerState.completedSessionsToday > 0 && (
                  <>
                    <span>•</span>
                    <span className="text-amber-800 font-semibold">{timerState.completedSessionsToday} phiên</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Middle: Quick Interval Chips (15m, 25m, 45m) */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200/60">
            {[15, 25, 45].map(dur => {
              const isActive = timerState.durationMinutes === dur && !isBreak;
              return (
                <button
                  key={dur}
                  onClick={() => setFocusDuration(dur)}
                  disabled={timerState.isRunning}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white disabled:opacity-50'
                  }`}
                  title={`${dur} phút tập trung`}
                >
                  {dur}m
                </button>
              );
            })}
          </div>

          {/* Right: Controls (Play/Pause, Reset, Audio, Dinner Modal trigger) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Play/Pause */}
            {timerState.isRunning ? (
              <button
                onClick={pauseFocusTimer}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-all active:scale-95"
                title="Tạm dừng"
              >
                <Pause className="w-4 h-4" />
                <span>Tạm dừng</span>
              </button>
            ) : (
              <button
                onClick={startFocusTimer}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95"
                title="Bắt đầu học"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Bắt đầu</span>
              </button>
            )}

            {/* Reset */}
            <button
              onClick={() => resetFocusTimer()}
              className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              title="Đặt lại thời gian"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Sound Toggle (Chime) */}
            <button
              onClick={toggleFocusSound}
              className={`p-1.5 rounded-xl transition-colors ${
                timerState.soundEnabled 
                  ? 'text-emerald-700 hover:bg-emerald-50' 
                  : 'text-slate-400 hover:bg-slate-100'
              }`}
              title={timerState.soundEnabled ? 'Chuông thiền hoàn thành đang bật' : 'Chuông hoàn thành đang tắt'}
            >
              {timerState.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Subtle Ticking sound toggle */}
            <button
              onClick={toggleTickSound}
              className={`p-1.5 rounded-xl text-[11px] font-mono font-bold transition-colors ${
                timerState.tickSoundEnabled 
                  ? 'bg-amber-100 text-amber-900 border border-amber-200' 
                  : 'text-slate-400 hover:bg-slate-100'
              }`}
              title="Âm tích tắc nhẹ khi học"
            >
              <Clock className="w-4 h-4" />
            </button>

            {/* Quick Trigger: 3 Câu hỏi bàn ăn */}
            <button
              onClick={openDinnerTalkModal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200 text-amber-900 font-bold text-xs transition-all ml-1"
              title="Mở 3 câu hỏi gợi ý để đố bố mẹ"
            >
              <Utensils className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden lg:inline">Đố Bố Mẹ</span>
              <span className="text-[10px] bg-amber-200/80 text-amber-900 px-1 rounded font-bold">+20XP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Floating Pill / Collapsible Bar (< 640px) */}
      <div className="sm:hidden fixed bottom-4 right-4 left-4 z-30">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl p-2.5 transition-all">
          <div className="flex items-center justify-between gap-2">
            {/* Left Pill Info */}
            <div 
              onClick={() => setIsExpandedMobile(prev => !prev)}
              className="flex items-center gap-2 cursor-pointer flex-1 min-w-0"
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                isBreak ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
              }`}>
                {isBreak ? <Coffee className="w-4 h-4" /> : <Target className="w-4 h-4" />}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono font-black text-sm text-slate-900">
                    {timeFormatted}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">
                    {isBreak ? 'Nghỉ ☕' : 'Học 🎯'}
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  Đã học {todayStudyTimeMinutes}m hôm nay
                </div>
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              {timerState.isRunning ? (
                <button
                  onClick={pauseFocusTimer}
                  className="p-2 rounded-xl bg-amber-500 text-white font-bold text-xs active:scale-95"
                >
                  <Pause className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={startFocusTimer}
                  className="p-2 rounded-xl bg-emerald-600 text-white font-bold text-xs active:scale-95"
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              )}

              <button
                onClick={openDinnerTalkModal}
                className="p-2 rounded-xl bg-amber-100 text-amber-800 text-xs font-bold"
                title="Đố bố mẹ"
              >
                <Utensils className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpandedMobile(prev => !prev)}
                className="p-1.5 text-slate-400 hover:text-slate-600"
              >
                {isExpandedMobile ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Expanded Drawer on Mobile */}
          {isExpandedMobile && (
            <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-bold">Chọn thời lượng tập trung:</span>
                <div className="flex items-center gap-1">
                  {[15, 25, 45].map(dur => (
                    <button
                      key={dur}
                      onClick={() => {
                        setFocusDuration(dur);
                        setIsExpandedMobile(false);
                      }}
                      className={`px-2.5 py-1 rounded-lg font-bold text-xs ${
                        timerState.durationMinutes === dur && !isBreak
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {dur}m
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  onClick={() => resetFocusTimer()}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-800"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Đặt lại</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleFocusSound}
                    className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-lg ${
                      timerState.soundEnabled ? 'text-emerald-700 bg-emerald-50' : 'text-slate-400'
                    }`}
                  >
                    {timerState.soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                    <span>Chuông thiền</span>
                  </button>

                  <button
                    onClick={toggleTickSound}
                    className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-lg ${
                      timerState.tickSoundEnabled ? 'text-amber-700 bg-amber-50' : 'text-slate-400'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>Tích tắc</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dinner-Talk Transition Modal */}
      <DinnerTalkTransitionModal />
    </>
  );
};
