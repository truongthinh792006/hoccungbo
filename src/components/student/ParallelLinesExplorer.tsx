import React, { useState, useRef, useCallback } from 'react';
import { MathText } from '../common/MathText';
import {
  Sparkles,
  RefreshCw,
  Compass,
  MessageCircleQuestion,
  HelpCircle,
  SlidersHorizontal,
  CheckCircle2
} from 'lucide-react';

type HighlightMode = 'all' | 'so_le_trong' | 'dong_vi' | 'trong_cung_phia';

interface ParallelLinesExplorerProps {
  initialAngle?: number;
  className?: string;
}

// SVG geometry helpers
function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad), // SVG y is inverted
  };
}

function describeWedge(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const p1 = polarToCartesian(cx, cy, r, startDeg);
  const p2 = polarToCartesian(cx, cy, r, endDeg);
  const diff = (endDeg - startDeg + 360) % 360;
  const largeArc = diff > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 0 ${p2.x} ${p2.y} Z`;
}

function describeArc(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const p1 = polarToCartesian(cx, cy, r, startDeg);
  const p2 = polarToCartesian(cx, cy, r, endDeg);
  const diff = (endDeg - startDeg + 360) % 360;
  const largeArc = diff > 180 ? 1 : 0;
  return `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 0 ${p2.x} ${p2.y}`;
}

export const ParallelLinesExplorer: React.FC<ParallelLinesExplorerProps> = ({
  initialAngle = 65,
  className = '',
}) => {
  const [angle, setAngle] = useState<number>(initialAngle);
  const [mode, setMode] = useState<HighlightMode>('so_le_trong');
  const [showParentAnswer, setShowParentAnswer] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // SVG Dimension Constants
  const SVG_WIDTH = 740;
  const SVG_HEIGHT = 360;
  const LINE_A_Y = 110;
  const LINE_B_Y = 250;
  const MID_Y = (LINE_A_Y + LINE_B_Y) / 2; // 180
  const MID_X = SVG_WIDTH / 2; // 370

  // Clamped angle in degrees (35° to 145°)
  const currentAngle = Math.max(35, Math.min(145, angle));
  const obtuseAngle = 180 - currentAngle;
  const rad = (currentAngle * Math.PI) / 180;
  const tanVal = Math.tan(rad);

  // Intersection coordinates for Line a and Line b with transversal c
  // Since transversal passes through (MID_X, MID_Y):
  // (x - MID_X) = (MID_Y - y) / tan(rad)
  const xA = MID_X + (MID_Y - LINE_A_Y) / tanVal; // Intersection A (top)
  const yA = LINE_A_Y;
  const xB = MID_X + (MID_Y - LINE_B_Y) / tanVal; // Intersection B (bottom)
  const yB = LINE_B_Y;

  // Transversal top and bottom endpoints (extended)
  const topY = 30;
  const bottomY = 330;
  const xTop = MID_X + (MID_Y - topY) / tanVal;
  const xBottom = MID_X + (MID_Y - bottomY) / tanVal;

  // Calculate mouse/touch angle during drag
  const updateAngleFromPointer = useCallback((clientX: number, clientY: number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = SVG_WIDTH / rect.width;
    const scaleY = SVG_HEIGHT / rect.height;
    const svgX = (clientX - rect.left) * scaleX;
    const svgY = (clientY - rect.top) * scaleY;

    // Angle relative to center (MID_X, MID_Y)
    const dy = MID_Y - svgY;
    const dx = svgX - MID_X;
    if (Math.abs(dy) < 5) return;

    let computedDeg = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (computedDeg < 0) computedDeg += 360;

    // When dragging top handle (dy > 0), angle is in 0..180
    if (dy > 0) {
      const clamped = Math.round(Math.max(35, Math.min(145, computedDeg)));
      setAngle(clamped);
    } else {
      // When dragging bottom handle
      const oppositeDeg = (computedDeg + 180) % 360;
      const clamped = Math.round(Math.max(35, Math.min(145, oppositeDeg)));
      setAngle(clamped);
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateAngleFromPointer(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updateAngleFromPointer(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  // Preset angle chips
  const anglePresets = [
    { label: '45°', val: 45 },
    { label: '60°', val: 60 },
    { label: '70°', val: 70 },
    { label: '90° (Vuông góc)', val: 90 },
    { label: '110°', val: 110 },
    { label: '135°', val: 135 },
  ];

  // Arc Radius for visualization
  const ARC_R = 26;
  const LABEL_OFFSET = 42;

  // Configuration for 8 angles:
  // At A:
  // A1: 0 to alpha (span alpha)
  // A2: alpha to 180 (span 180 - alpha)
  // A3: 180 to 180 + alpha (span alpha)
  // A4: 180 + alpha to 360 (span 180 - alpha)
  // At B:
  // B1: 0 to alpha (span alpha)
  // B2: alpha to 180 (span 180 - alpha)
  // B3: 180 to 180 + alpha (span alpha)
  // B4: 180 + alpha to 360 (span 180 - alpha)

  const getAngleStyle = (id: string) => {
    // Determine colors based on active mode
    if (mode === 'all') {
      const isAcute = id.includes('1') || id.includes('3');
      return {
        fill: isAcute ? '#06b6d4' : '#8b5cf6',
        stroke: isAcute ? '#0891b2' : '#7c3aed',
        opacity: 0.28,
        active: true,
      };
    }

    if (mode === 'so_le_trong') {
      if (id === 'A3' || id === 'B1') {
        return { fill: '#f59e0b', stroke: '#d97706', opacity: 0.45, active: true, pulse: true };
      }
      if (id === 'A4' || id === 'B2') {
        return { fill: '#f43f5e', stroke: '#e11d48', opacity: 0.45, active: true, pulse: true };
      }
      return { fill: '#94a3b8', stroke: '#cbd5e1', opacity: 0.08, active: false };
    }

    if (mode === 'dong_vi') {
      if (id === 'A1' || id === 'B1') {
        return { fill: '#06b6d4', stroke: '#0891b2', opacity: 0.45, active: true, pulse: true };
      }
      if (id === 'A2' || id === 'B2') {
        return { fill: '#8b5cf6', stroke: '#7c3aed', opacity: 0.45, active: true, pulse: true };
      }
      if (id === 'A3' || id === 'B3') {
        return { fill: '#f59e0b', stroke: '#d97706', opacity: 0.45, active: true, pulse: true };
      }
      if (id === 'A4' || id === 'B4') {
        return { fill: '#10b981', stroke: '#059669', opacity: 0.45, active: true, pulse: true };
      }
      return { fill: '#94a3b8', stroke: '#cbd5e1', opacity: 0.08, active: false };
    }

    if (mode === 'trong_cung_phia') {
      // A4 and B1 on the right interior
      if (id === 'A4' || id === 'B1') {
        return { fill: '#10b981', stroke: '#059669', opacity: 0.45, active: true, pulse: true };
      }
      // A3 and B2 on the left interior
      if (id === 'A3' || id === 'B2') {
        return { fill: '#f59e0b', stroke: '#d97706', opacity: 0.45, active: true, pulse: true };
      }
      return { fill: '#94a3b8', stroke: '#cbd5e1', opacity: 0.08, active: false };
    }

    return { fill: '#64748b', stroke: '#94a3b8', opacity: 0.2, active: false };
  };

  const angleDefs = [
    // Vertex A angles
    { id: 'A1', cx: xA, cy: yA, start: 0, end: currentAngle, deg: currentAngle, name: 'A₁' },
    { id: 'A2', cx: xA, cy: yA, start: currentAngle, end: 180, deg: obtuseAngle, name: 'A₂' },
    { id: 'A3', cx: xA, cy: yA, start: 180, end: 180 + currentAngle, deg: currentAngle, name: 'A₃' },
    { id: 'A4', cx: xA, cy: yA, start: 180 + currentAngle, end: 360, deg: obtuseAngle, name: 'A₄' },

    // Vertex B angles
    { id: 'B1', cx: xB, cy: yB, start: 0, end: currentAngle, deg: currentAngle, name: 'B₁' },
    { id: 'B2', cx: xB, cy: yB, start: currentAngle, end: 180, deg: obtuseAngle, name: 'B₂' },
    { id: 'B3', cx: xB, cy: yB, start: 180, end: 180 + currentAngle, deg: currentAngle, name: 'B₃' },
    { id: 'B4', cx: xB, cy: yB, start: 180 + currentAngle, end: 360, deg: obtuseAngle, name: 'B₄' },
  ];

  return (
    <div className={`space-y-5 ${className}`}>
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center font-bold text-sm">
              <Compass className="w-4 h-4" />
            </span>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
              Hai Đường Thẳng Song Song Cắt Bởi Một Cát Tuyến
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Kéo xoay đường thẳng c để khám phá quan hệ so le trong, đồng vị và trong cùng phía
          </p>
        </div>

        <button
          onClick={() => {
            setAngle(65);
            setMode('so_le_trong');
          }}
          className="p-1.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors self-start sm:self-auto flex items-center gap-1.5 text-xs font-semibold"
          title="Đặt lại mặc định"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Đặt lại</span>
        </button>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setMode('so_le_trong')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
            mode === 'so_le_trong'
              ? 'bg-amber-500 text-white border-amber-600 shadow-xs scale-102 ring-2 ring-amber-200'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>⚡ So le trong (Chữ Z)</span>
        </button>

        <button
          onClick={() => setMode('dong_vi')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
            mode === 'dong_vi'
              ? 'bg-cyan-600 text-white border-cyan-700 shadow-xs scale-102 ring-2 ring-cyan-200'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>🎯 Đồng vị (Chữ F)</span>
        </button>

        <button
          onClick={() => setMode('trong_cung_phia')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
            mode === 'trong_cung_phia'
              ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs scale-102 ring-2 ring-emerald-200'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>🤝 Trong cùng phía (Chữ U - Bù nhau)</span>
        </button>

        <button
          onClick={() => setMode('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
            mode === 'all'
              ? 'bg-slate-900 text-white border-slate-900 shadow-xs scale-102'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>📐 Tất cả 8 góc</span>
        </button>
      </div>

      {/* SVG Interactive Canvas */}
      <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 shadow-md border border-slate-800 relative overflow-hidden select-none">
        {/* Top Badges */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-emerald-400">
              a // b
            </span>
            <span className="font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-300">
              Góc nghiêng α = {currentAngle}°
            </span>
            <span className="font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-indigo-300">
              Góc kề bù = {obtuseAngle}°
            </span>
          </div>

          <div className="text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
            Kéo núm tròn màu vàng trên đường c để xoay
          </div>
        </div>

        {/* Scalable SVG Canvas */}
        <div className="w-full overflow-x-auto py-2">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-full h-auto min-w-[620px] cursor-crosshair"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <defs>
              {/* Arrow markers */}
              <marker id="arrowRight" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#64748b" />
              </marker>
              <marker id="transversalArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#f59e0b" />
              </marker>
            </defs>

            {/* Parallel Region Tint */}
            <rect
              x="40"
              y={LINE_A_Y}
              width={SVG_WIDTH - 80}
              height={LINE_B_Y - LINE_A_Y}
              fill="#1e293b"
              fillOpacity="0.4"
            />
            <text x="50" y={MID_Y} fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">
              MIỀN TRONG (INTERIOR)
            </text>

            {/* Line a (Top Parallel Line) */}
            <line
              x1="40"
              y1={LINE_A_Y}
              x2={SVG_WIDTH - 40}
              y2={LINE_A_Y}
              stroke="#94a3b8"
              strokeWidth="2.5"
              markerEnd="url(#arrowRight)"
            />
            <text x="50" y={LINE_A_Y - 10} fill="#94a3b8" fontSize="14" fontWeight="bold" fontStyle="italic">
              đường thẳng a
            </text>

            {/* Line b (Bottom Parallel Line) */}
            <line
              x1="40"
              y1={LINE_B_Y}
              x2={SVG_WIDTH - 40}
              y2={LINE_B_Y}
              stroke="#94a3b8"
              strokeWidth="2.5"
              markerEnd="url(#arrowRight)"
            />
            <text x="50" y={LINE_B_Y + 22} fill="#94a3b8" fontSize="14" fontWeight="bold" fontStyle="italic">
              đường thẳng b
            </text>

            {/* Transversal Line c */}
            <line
              x1={xBottom}
              y1={bottomY}
              x2={xTop}
              y2={topY}
              stroke="#f59e0b"
              strokeWidth="3"
              markerStart="url(#transversalArrow)"
              markerEnd="url(#transversalArrow)"
            />
            <text
              x={xTop + (currentAngle > 90 ? -28 : 12)}
              y={topY - 8}
              fill="#fbbf24"
              fontSize="14"
              fontWeight="bold"
              fontStyle="italic"
            >
              cát tuyến c
            </text>

            {/* 8 Angle Arcs & Wedges */}
            {angleDefs.map(item => {
              const style = getAngleStyle(item.id);
              const bisector = (item.start + ((item.end - item.start + 360) % 360) / 2) % 360;
              const labelPos = polarToCartesian(item.cx, item.cy, LABEL_OFFSET, bisector);

              return (
                <g key={item.id} className="transition-all duration-150">
                  {/* Filled Pie Wedge */}
                  <path
                    d={describeWedge(item.cx, item.cy, ARC_R, item.start, item.end)}
                    fill={style.fill}
                    fillOpacity={style.opacity}
                  />

                  {/* Arc Stroke */}
                  <path
                    d={describeArc(item.cx, item.cy, ARC_R, item.start, item.end)}
                    fill="none"
                    stroke={style.stroke}
                    strokeWidth={style.active ? '2.5' : '1.2'}
                  />

                  {/* Angle Name & Degrees Label */}
                  <text
                    x={labelPos.x}
                    y={labelPos.y + 4}
                    textAnchor="middle"
                    fill={style.active ? '#ffffff' : '#64748b'}
                    fontSize={style.active ? '11' : '10'}
                    fontWeight={style.active ? 'bold' : 'normal'}
                    className="font-mono drop-shadow-md select-none"
                  >
                    {item.name}
                    {style.active ? ` (${item.deg}°)` : ''}
                  </text>
                </g>
              );
            })}

            {/* Intersection Node A */}
            <circle cx={xA} cy={yA} r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
            <text x={xA - (currentAngle > 90 ? -12 : 18)} y={yA - 8} fill="#ffffff" fontSize="14" fontWeight="900">
              A
            </text>

            {/* Intersection Node B */}
            <circle cx={xB} cy={yB} r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
            <text x={xB - (currentAngle > 90 ? -12 : 18)} y={yB + 20} fill="#ffffff" fontSize="14" fontWeight="900">
              B
            </text>

            {/* Draggable Rotation Handle on Transversal */}
            <g
              transform={`translate(${xTop}, ${topY})`}
              className="cursor-grab active:cursor-grabbing"
            >
              <circle cx="0" cy="0" r="14" fill="#f59e0b" fillOpacity="0.3" className="animate-pulse" />
              <circle cx="0" cy="0" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="2.5" />
              <text x="0" y="-14" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="bold">
                Kéo xoay
              </text>
            </g>
          </svg>
        </div>

        {/* Real-time Math Property Notification Bar */}
        <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2">
          {mode === 'so_le_trong' && (
            <div className="space-y-1 w-full">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  Cặp 1: A₃ = B₁ = {currentAngle}° (so le trong)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40">
                  Cặp 2: A₄ = B₂ = {obtuseAngle}° (so le trong)
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                ✨ <strong>Định lí:</strong> Nếu hai đường thẳng song song bị cắt bởi một cát tuyến thì hai góc so le trong bằng nhau.
              </p>
            </div>
          )}

          {mode === 'dong_vi' && (
            <div className="space-y-1 w-full">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40">
                  A₁ = B₁ = {currentAngle}°
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 font-bold border border-purple-500/40">
                  A₂ = B₂ = {obtuseAngle}°
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  A₃ = B₃ = {currentAngle}°
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                  A₄ = B₄ = {obtuseAngle}°
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                ✨ <strong>Định lí:</strong> Hai góc đồng vị có vị trí tương ứng cùng hướng và có số đo hoàn toàn bằng nhau.
              </p>
            </div>
          )}

          {mode === 'trong_cung_phia' && (
            <div className="space-y-1 w-full">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40">
                  A₄ + B₁ = {obtuseAngle}° + {currentAngle}° = 180° (Bù nhau)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  A₃ + B₂ = {currentAngle}° + {obtuseAngle}° = 180° (Bù nhau)
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                ✨ <strong>Định lí:</strong> Hai góc trong cùng phía có tổng số đo bằng đúng 180° (hình chữ U).
              </p>
            </div>
          )}

          {mode === 'all' && (
            <p className="text-[11px] text-slate-400">
              Có 4 góc nhọn ({currentAngle}°) và 4 góc tù ({obtuseAngle}°). Các góc đối đỉnh thì bằng nhau, các góc kề bù có tổng bằng 180°.
            </p>
          )}
        </div>
      </div>

      {/* Angle Slider & Stepper Controls */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <label className="text-xs font-bold text-slate-700 flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-indigo-600" />
            <span>
              Điều chỉnh độ dốc cát tuyến (Góc α):{' '}
              <strong className="text-sm font-extrabold text-indigo-600 font-mono">
                {currentAngle}°
              </strong>
            </span>
          </label>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setAngle(prev => Math.max(35, prev - 5))}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              title="Giảm 5 độ"
            >
              -5°
            </button>
            <button
              onClick={() => setAngle(prev => Math.max(35, prev - 1))}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              title="Giảm 1 độ"
            >
              -1°
            </button>
            <button
              onClick={() => setAngle(prev => Math.min(145, prev + 1))}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              title="Tăng 1 độ"
            >
              +1°
            </button>
            <button
              onClick={() => setAngle(prev => Math.min(145, prev + 5))}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              title="Tăng 5 độ"
            >
              +5°
            </button>
          </div>
        </div>

        <input
          type="range"
          min={35}
          max={145}
          step={1}
          value={currentAngle}
          onChange={e => setAngle(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
        />

        <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>35° (Nghiêng sâu)</span>
          <span className="text-indigo-600 font-bold">90° (Cát tuyến vuông góc)</span>
          <span>145° (Nghiêng ngược)</span>
        </div>

        {/* Quick Angle Preset Chips */}
        <div className="pt-1 flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-bold text-slate-500 mr-1">Góc chuẩn:</span>
          {anglePresets.map(preset => (
            <button
              key={preset.val}
              onClick={() => setAngle(preset.val)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                currentAngle === preset.val
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Family Challenge Card ("Bố đố con") */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
            <MessageCircleQuestion className="w-4 h-4 text-amber-700" />
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Thử thách đố vui Bố & Con</span>
              </span>

              <button
                onClick={() => setShowParentAnswer(!showParentAnswer)}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showParentAnswer ? 'Ẩn đáp án' : 'Bố xem đáp án & cách hỏi con'}</span>
              </button>
            </div>

            <p className="text-sm font-extrabold text-slate-900 leading-snug">
              "Bố đố con: Hiện tại góc <MathText formula="A_1" /> đang bằng{' '}
              <strong className="text-indigo-700">{currentAngle}°</strong>. Con hãy tìm nhanh số đo của góc so le trong với <MathText formula="A_3" /> và góc trong cùng phía với <MathText formula="A_4" />?"
            </p>

            {showParentAnswer && (
              <div className="mt-3 p-3.5 bg-white/95 rounded-xl border border-amber-200 text-xs text-slate-700 leading-relaxed space-y-2.5 animate-fadeIn">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Câu 1: Góc so le trong với <MathText formula="A_3" />:</strong>
                    <p className="mt-0.5 text-slate-600">
                      Góc so le trong với <MathText formula="A_3" /> chính là góc <MathText formula="B_1" />. Do hai đường thẳng <MathText formula="a \parallel b" /> nên hai góc so le trong bằng nhau: <MathText formula={`B_1 = A_3 = A_1 = ${currentAngle}^\\circ`} />.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Câu 2: Góc trong cùng phía với <MathText formula="A_4" />:</strong>
                    <p className="mt-0.5 text-slate-600">
                      Góc trong cùng phía với <MathText formula="A_4" /> là góc <MathText formula="B_1" />. Hai góc này bù nhau (tổng bằng 180°), do đó số đo của <MathText formula={`A_4 = 180^\\circ - B_1 = 180^\\circ - ${currentAngle}^\\circ = ${obtuseAngle}^\\circ`} />.
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-amber-900 italic pt-1 border-t border-amber-100">
                  💡 <strong>Bố hướng dẫn con mẹo nhớ hình:</strong> Góc so le trong tạo thành hình <strong>chữ Z</strong>, góc đồng vị tạo thành hình <strong>chữ F</strong>, còn góc trong cùng phía tạo thành hình <strong>chữ U</strong>!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
