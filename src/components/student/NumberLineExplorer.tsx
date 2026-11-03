import React, { useState, useMemo } from 'react';
import { MathText } from '../common/MathText';
import { ArrowLeftRight, HelpCircle, Sparkles, RefreshCw, SlidersHorizontal, MessageCircleQuestion } from 'lucide-react';

interface NumberLineExplorerProps {
  initialNumerator?: number;
  initialDenominator?: number;
  className?: string;
}

// Greatest common divisor helper
function gcd(x: number, y: number): number {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x || 1;
}

// Preset fractions commonly taught in Grade 7 Chapter 1
const PRESET_FRACTIONS = [
  { label: '-\\frac{3}{4}', a: -3, b: 4, desc: 'Bài 1: Phân số âm quen thuộc' },
  { label: '\\frac{5}{2}', a: 5, b: 2, desc: 'Hỗn số 2 1/2' },
  { label: '-\\frac{1}{2}', a: -1, b: 2, desc: 'Nửa đơn vị âm' },
  { label: '\\frac{4}{3}', a: 4, b: 3, desc: 'Lớn hơn 1 đơn vị' },
  { label: '-\\frac{7}{3}', a: -7, b: 3, desc: 'Gần mốc -2' },
  { label: '\\frac{2}{5}', a: 2, b: 5, desc: 'Số thập phân 0,4' },
];

export const NumberLineExplorer: React.FC<NumberLineExplorerProps> = ({
  initialNumerator = -3,
  initialDenominator = 4,
  className = ''
}) => {
  const [numerator, setNumerator] = useState<number>(initialNumerator);
  const [denominator, setDenominator] = useState<number>(initialDenominator);
  const [showOpposite, setShowOpposite] = useState<boolean>(true);
  const [showHintAnswer, setShowHintAnswer] = useState<boolean>(false);

  // SVG Geometry constants
  const SVG_WIDTH = 760;
  const SVG_HEIGHT = 160;
  const PADDING_X = 50;
  const AXIS_Y = 95;
  const MIN_VAL = -3;
  const MAX_VAL = 3;
  const TOTAL_SPAN = MAX_VAL - MIN_VAL; // 6
  const AVAILABLE_WIDTH = SVG_WIDTH - PADDING_X * 2; // 660
  const UNIT_PX = AVAILABLE_WIDTH / TOTAL_SPAN; // 110 px per unit
  const ORIGIN_X = PADDING_X + (0 - MIN_VAL) * UNIT_PX; // 380

  // Calculate current value
  const safeDenominator = denominator === 0 ? 1 : denominator;
  const currentValue = numerator / safeDenominator;
  const oppositeValue = -currentValue;

  // Clamped positions for SVG rendering
  const clampedVal = Math.max(MIN_VAL, Math.min(MAX_VAL, currentValue));
  const clampedOppVal = Math.max(MIN_VAL, Math.min(MAX_VAL, oppositeValue));

  const pointX = ORIGIN_X + clampedVal * UNIT_PX;
  const oppPointX = ORIGIN_X + clampedOppVal * UNIT_PX;

  // Simplified fraction computation
  const simplifiedFraction = useMemo(() => {
    if (numerator === 0) return '0';
    const divisor = gcd(numerator, safeDenominator);
    const simpA = numerator / divisor;
    const simpB = safeDenominator / divisor;
    if (simpB === 1) return `${simpA}`;
    if (simpB === -1) return `${-simpA}`;
    if (simpA === numerator && simpB === safeDenominator) return null; // already simplified
    return `\\frac{${simpA}}{${simpB}}`;
  }, [numerator, safeDenominator]);

  // LaTeX representation of current fraction
  const currentLatex = useMemo(() => {
    if (numerator === 0) return '0';
    if (safeDenominator === 1) return `${numerator}`;
    return `\\frac{${numerator}}{${safeDenominator}}`;
  }, [numerator, safeDenominator]);

  const oppositeLatex = useMemo(() => {
    if (numerator === 0) return '0';
    if (safeDenominator === 1) return `${-numerator}`;
    return `-\\left(${currentLatex}\\right) = \\frac{${-numerator}}{${safeDenominator}}`;
  }, [numerator, safeDenominator, currentLatex]);

  // Generate partition ticks based on denominator
  const partitionTicks = useMemo(() => {
    const ticks: { x: number; val: number; isInteger: boolean }[] = [];
    const b = safeDenominator;

    // From -3 to +3, subdivide each unit segment into b parts
    for (let k = MIN_VAL; k < MAX_VAL; k++) {
      for (let i = 1; i < b; i++) {
        const val = k + i / b;
        const x = ORIGIN_X + val * UNIT_PX;
        ticks.push({ x, val, isInteger: false });
      }
    }
    return ticks;
  }, [safeDenominator, ORIGIN_X, UNIT_PX]);

  // Major integer marks
  const integerMarks = [-3, -2, -1, 0, 1, 2, 3];

  // Quick reset
  const handleReset = () => {
    setNumerator(-3);
    setDenominator(4);
    setShowOpposite(true);
  };

  return (
    <div className={`space-y-5 ${className}`}>
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold text-sm flex items-center justify-center">
              📏
            </span>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
              Trục Số Tương Tác: Khám Phá Số Hữu Tỉ
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Kéo tử số và mẫu số để xem cách chia vạch đơn vị và xác định điểm trên trục số
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
          <button
            onClick={() => setShowOpposite(!showOpposite)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
              showOpposite
                ? 'bg-amber-500 text-white border-amber-600 shadow-xs ring-2 ring-amber-200'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>{showOpposite ? 'Đang hiện số đối' : 'Hiện số đối'}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
            title="Đặt lại mặc định (-3/4)"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 shadow-md border border-slate-800 overflow-hidden relative">
        {/* Top Badges overlay */}
        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Đang biểu diễn:</span>
            <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold tracking-wide">
              x = {currentValue >= 0 ? `+${(currentValue).toFixed(2)}` : (currentValue).toFixed(2)}
            </span>
            {simplifiedFraction && (
              <span className="text-slate-400 text-xs flex items-center gap-1">
                (tối giản: <MathText formula={simplifiedFraction} />)
              </span>
            )}
          </div>

          <div className="text-[11px] text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
            Mỗi đoạn đơn vị chia thành <strong className="text-emerald-400">{safeDenominator}</strong> vạch nhỏ
          </div>
        </div>

        {/* Scalable SVG Canvas */}
        <div className="w-full overflow-x-auto py-2">
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-full h-auto min-w-[560px] select-none"
          >
            <defs>
              {/* Gradient for number line */}
              <linearGradient id="axisGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              {/* Arrow markers */}
              <marker id="arrowRight" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#94a3b8" />
              </marker>
              <marker id="arrowLeft" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 8 1 L 0 5 L 8 9 z" fill="#94a3b8" />
              </marker>
            </defs>

            {/* Zero Origin Reference Background Glow */}
            <rect
              x={ORIGIN_X - 18}
              y={AXIS_Y - 30}
              width="36"
              height="60"
              rx="8"
              fill="#10b981"
              fillOpacity="0.08"
            />

            {/* Symmetry Arc (when showOpposite is active) */}
            {showOpposite && numerator !== 0 && (
              <g className="transition-opacity duration-300">
                <path
                  d={`M ${Math.min(pointX, oppPointX)} ${AXIS_Y - 8} Q ${ORIGIN_X} ${AXIS_Y - 55} ${Math.max(pointX, oppPointX)} ${AXIS_Y - 8}`}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx={ORIGIN_X} cy={AXIS_Y - 40} r="14" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                <text
                  x={ORIGIN_X}
                  y={AXIS_Y - 36}
                  textAnchor="middle"
                  fill="#f59e0b"
                  fontSize="10"
                  fontWeight="bold"
                >
                  d = {Math.abs(currentValue).toFixed(2)}
                </text>
              </g>
            )}

            {/* Main Axis Line */}
            <line
              x1="30"
              y1={AXIS_Y}
              x2={SVG_WIDTH - 30}
              y2={AXIS_Y}
              stroke="url(#axisGradient)"
              strokeWidth="2.5"
              markerEnd="url(#arrowRight)"
              markerStart="url(#arrowLeft)"
            />

            {/* Minor Partition Ticks (1/b intervals) */}
            {partitionTicks.map((tick, idx) => (
              <line
                key={`sub-${idx}`}
                x1={tick.x}
                y1={AXIS_Y - 5}
                x2={tick.x}
                y2={AXIS_Y + 5}
                stroke="#475569"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            ))}

            {/* Major Integer Ticks (-3, -2, -1, 0, 1, 2, 3) */}
            {integerMarks.map(k => {
              const x = ORIGIN_X + k * UNIT_PX;
              const isZero = k === 0;

              return (
                <g key={`int-${k}`}>
                  <line
                    x1={x}
                    y1={isZero ? AXIS_Y - 14 : AXIS_Y - 10}
                    x2={x}
                    y2={isZero ? AXIS_Y + 14 : AXIS_Y + 10}
                    stroke={isZero ? '#10b981' : '#cbd5e1'}
                    strokeWidth={isZero ? '3' : '1.8'}
                    strokeLinecap="round"
                  />

                  {/* Integer Label */}
                  <text
                    x={x}
                    y={AXIS_Y + 28}
                    textAnchor="middle"
                    fill={isZero ? '#10b981' : '#94a3b8'}
                    fontSize={isZero ? '15' : '13'}
                    fontWeight={isZero ? '900' : '600'}
                    className="font-mono"
                  >
                    {k}
                  </text>
                </g>
              );
            })}

            {/* Active Point x = a/b Marker */}
            <g
              style={{
                transform: `translateX(${pointX}px)`,
                transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Outer Pulse */}
              <circle cx="0" cy={AXIS_Y} r="10" fill="#6366f1" fillOpacity="0.3" className="animate-pulse" />
              {/* Center Dot */}
              <circle cx="0" cy={AXIS_Y} r="5" fill="#4f46e5" stroke="#ffffff" strokeWidth="2.5" />
              {/* Vertical Guide line */}
              <line x1="0" y1={AXIS_Y - 5} x2="0" y2={AXIS_Y - 32} stroke="#818cf8" strokeWidth="1.5" strokeDasharray="2 2" />

              {/* Pin Callout Badge */}
              <g transform={`translate(0, ${AXIS_Y - 38})`}>
                <rect
                  x="-30"
                  y="-22"
                  width="60"
                  height="22"
                  rx="6"
                  fill="#4f46e5"
                  stroke="#818cf8"
                  strokeWidth="1"
                />
                <polygon points="-5,0 0,5 5,0" fill="#4f46e5" />
                <text
                  x="0"
                  y="-7"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                >
                  {numerator === 0 ? '0' : `${numerator}/${safeDenominator}`}
                </text>
              </g>
            </g>

            {/* Opposite Point Marker (when showOpposite is true) */}
            {showOpposite && numerator !== 0 && (
              <g
                style={{
                  transform: `translateX(${oppPointX}px)`,
                  transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Outer Pulse */}
                <circle cx="0" cy={AXIS_Y} r="9" fill="#f59e0b" fillOpacity="0.3" />
                {/* Center Dot */}
                <circle cx="0" cy={AXIS_Y} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2.5" />
                {/* Vertical Guide line */}
                <line x1="0" y1={AXIS_Y - 5} x2="0" y2={AXIS_Y - 32} stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Pin Callout Badge in Amber */}
                <g transform={`translate(0, ${AXIS_Y - 38})`}>
                  <rect
                    x="-34"
                    y="-22"
                    width="68"
                    height="22"
                    rx="6"
                    fill="#d97706"
                    stroke="#fbbf24"
                    strokeWidth="1"
                  />
                  <polygon points="-5,0 0,5 5,0" fill="#d97706" />
                  <text
                    x="0"
                    y="-7"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    Đối: {-numerator}/{safeDenominator}
                  </text>
                </g>
              </g>
            )}
          </svg>
        </div>

        {/* Legend beneath the canvas */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 inline-block" />
              <span>Điểm <MathText formula={currentLatex} /></span>
            </span>
            {showOpposite && numerator !== 0 && (
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                <span>Số đối <MathText formula={oppositeLatex} /></span>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span>Gốc tọa độ 0</span>
            </span>
          </div>

          <span className="italic text-slate-500">
            Phạm vi hiển thị: [-3 đến +3]
          </span>
        </div>
      </div>

      {/* Interactive Controls Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Numerator (a) Control */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
              <span>Tử số (a): <strong className="text-sm font-extrabold text-indigo-600 font-mono">{numerator}</strong></span>
            </label>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setNumerator(prev => Math.max(-safeDenominator * 3, prev - 1))}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition-colors"
                title="Giảm tử số"
              >
                -
              </button>
              <button
                onClick={() => setNumerator(prev => Math.min(safeDenominator * 3, prev + 1))}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition-colors"
                title="Tăng tử số"
              >
                +
              </button>
            </div>
          </div>

          <input
            type="range"
            min={-safeDenominator * 3}
            max={safeDenominator * 3}
            step={1}
            value={numerator}
            onChange={e => setNumerator(Number(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
          />

          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>{-safeDenominator * 3}</span>
            <span className="text-slate-600 font-bold">0 (Gốc)</span>
            <span>+{safeDenominator * 3}</span>
          </div>
        </div>

        {/* Denominator (b) Control */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>Mẫu số (b): <strong className="text-sm font-extrabold text-emerald-600 font-mono">{safeDenominator}</strong></span>
            </label>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setDenominator(prev => Math.max(1, prev - 1))}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition-colors"
                title="Giảm mẫu số"
              >
                -
              </button>
              <button
                onClick={() => setDenominator(prev => Math.min(8, prev + 1))}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center transition-colors"
                title="Tăng mẫu số"
              >
                +
              </button>
            </div>
          </div>

          <input
            type="range"
            min={1}
            max={8}
            step={1}
            value={safeDenominator}
            onChange={e => setDenominator(Number(e.target.value))}
            className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
          />

          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>1 (Đơn vị)</span>
            <span className="text-emerald-700 font-bold">Chia thành {safeDenominator} phần</span>
            <span>8 phần</span>
          </div>
        </div>
      </div>

      {/* Preset Chips */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs space-y-2">
        <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Thử nhanh các phân số tiêu biểu trong SGK Toán 7:</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESET_FRACTIONS.map(item => {
            const isActive = numerator === item.a && safeDenominator === item.b;
            return (
              <button
                key={item.label}
                onClick={() => {
                  setNumerator(item.a);
                  setDenominator(item.b);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs scale-105'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
                title={item.desc}
              >
                <MathText formula={item.label} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Parent-Child Conversation Prompt Card */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
            <MessageCircleQuestion className="w-4 h-4 text-amber-700" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                <span>Gợi ý thảo luận Bố & Con</span>
              </span>
              <button
                onClick={() => setShowHintAnswer(!showHintAnswer)}
                className="text-xs font-bold text-amber-700 hover:text-amber-900 underline flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showHintAnswer ? 'Ẩn câu trả lời' : 'Bố xem gợi ý giải thích'}</span>
              </button>
            </div>

            <p className="text-sm font-extrabold text-slate-900 leading-snug">
              "Bố hãy hỏi con: Khi mẫu số càng lớn thì khoảng cách mỗi vạch nhỏ càng rộng hay càng hẹp?"
            </p>

            {showHintAnswer && (
              <div className="mt-3 p-3.5 bg-white/90 rounded-xl border border-amber-200 text-xs text-slate-700 leading-relaxed space-y-2 animate-fadeIn">
                <p>
                  💡 <strong>Gợi ý câu trả lời cho bố:</strong> Khi mẫu số <MathText formula="b" /> càng lớn, một đoạn thẳng đơn vị (từ 0 đến 1) được chia thành càng nhiều phần bằng nhau. Do đó, độ dài mỗi vạch chia nhỏ <MathText formula="\frac{1}{b}" /> sẽ <strong>càng hẹp lại</strong>.
                </p>
                <p>
                  👉 <strong>Thực hành ngay:</strong> Bố hãy bảo con kéo thanh trượt Mẫu số <MathText formula="b" /> từ <strong>1</strong> lên <strong>8</strong> để tận mắt nhìn thấy các vạch nhỏ xít lại gần nhau như thế nào!
                </p>
              </div>
            )}

            {/* Current Fraction Observation */}
            <div className="pt-2 text-xs text-amber-900/90 leading-relaxed">
              <strong>Quan sát thực tế với phân số hiện tại:</strong>{' '}
              {numerator === 0 ? (
                <span>Điểm đang trùng với <strong>gốc tọa độ 0</strong>.</span>
              ) : numerator < 0 ? (
                <span>
                  Phân số <MathText formula={currentLatex} /> là số âm (tử số âm), nằm ở bên <strong>trái gốc 0</strong>. Khoảng cách đến 0 là{' '}
                  <strong className="text-indigo-700">{Math.abs(currentValue).toFixed(2)} đơn vị</strong>.
                  {showOpposite && (
                    <span> Số đối của nó là <MathText formula={`\\frac{${-numerator}}{${safeDenominator}}`} /> nằm đối xứng qua 0 ở bên phải.</span>
                  )}
                </span>
              ) : (
                <span>
                  Phân số <MathText formula={currentLatex} /> là số dương, nằm ở bên <strong>phải gốc 0</strong>. Khoảng cách đến 0 là{' '}
                  <strong className="text-indigo-700">{currentValue.toFixed(2)} đơn vị</strong>.
                  {showOpposite && (
                    <span> Số đối của nó là <MathText formula={`-\\frac{${numerator}}{${safeDenominator}}`} /> nằm đối xứng qua 0 ở bên trái.</span>
                  )}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
