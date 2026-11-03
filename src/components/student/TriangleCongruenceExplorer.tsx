import React, { useState, useEffect, useRef } from 'react';
import { MathText } from '../common/MathText';
import {
  Sparkles,
  Layers,
  Play,
  RotateCcw,
  CheckCircle2,
  MessageCircleQuestion,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

type CongruenceCase = 'ccc' | 'cgc' | 'gcg';

interface TriangleCongruenceExplorerProps {
  initialCase?: CongruenceCase;
  className?: string;
}

export const TriangleCongruenceExplorer: React.FC<TriangleCongruenceExplorerProps> = ({
  initialCase = 'ccc',
  className = '',
}) => {
  const [selectedCase, setSelectedCase] = useState<CongruenceCase>(initialCase);
  const [overlapProgress, setOverlapProgress] = useState<number>(0); // 0 to 1
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [showParentAnswer, setShowParentAnswer] = useState<boolean>(false);
  const animFrameRef = useRef<number | null>(null);

  // SVG Geometry Dimensions
  const SVG_WIDTH = 740;
  const SVG_HEIGHT = 330;

  // Reference Triangle ABC (Left)
  // Vertex Coordinates
  const A = { x: 175, y: 70 };
  const B = { x: 80, y: 250 };
  const C = { x: 300, y: 250 };

  // Initial separation offset for Triangle A'B'C' (Right)
  const SEPARATION_X = 360;

  // Animation controller for "Chồng khít"
  const startAnimation = (targetProgress: number) => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setIsAnimating(true);
    const startVal = overlapProgress;
    const startTime = performance.now();
    const duration = 900; // ms

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // Ease in-out cubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const current = startVal + (targetProgress - startVal) * eased;
      setOverlapProgress(current);

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setOverlapProgress(targetProgress);
        setIsAnimating(false);
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Compute current offset of Triangle A'B'C' based on overlapProgress (0 = separated, 1 = fully overlapped)
  const currentOffsetX = (1 - overlapProgress) * SEPARATION_X;
  const currentRotateDeg = (1 - overlapProgress) * 10; // slight initial tilt that straightens out

  // Transformed vertices for Triangle A'B'C'
  const centerA_Prime = { x: 185 + currentOffsetX, y: 190 };

  const isFullyOverlapped = overlapProgress >= 0.99;

  // Helper to draw tick marks on edge (x1, y1) -> (x2, y2)
  const renderEdgeTicks = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    count: number,
    color: string
  ) => {
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len === 0) return null;

    const ux = dx / len;
    const uy = dy / len;
    // Normal vector
    const nx = -uy;
    const ny = ux;
    const tickLen = 7;

    const ticks: JSX.Element[] = [];
    const offsets = count === 1 ? [0] : count === 2 ? [-3.5, 3.5] : [-6, 0, 6];

    offsets.forEach((off, idx) => {
      const cx = midX + off * ux;
      const cy = midY + off * uy;
      ticks.push(
        <line
          key={`tick-${idx}`}
          x1={cx - nx * tickLen}
          y1={cy - ny * tickLen}
          x2={cx + nx * tickLen}
          y2={cy + ny * tickLen}
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      );
    });

    return <g>{ticks}</g>;
  };

  // Helper to draw an angle sector arc
  const renderAngleArc = (
    vertex: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    r: number,
    color: string,
    label: string,
    highlight: boolean
  ) => {
    const a1 = Math.atan2(p1.y - vertex.y, p1.x - vertex.x);
    const a2 = Math.atan2(p2.y - vertex.y, p2.x - vertex.x);

    let start = a1;
    let end = a2;
    let diff = end - start;
    while (diff < 0) diff += 2 * Math.PI;
    while (diff > 2 * Math.PI) diff -= 2 * Math.PI;

    // ensure shorter angle
    if (diff > Math.PI) {
      start = a2;
      end = a1;
      diff = 2 * Math.PI - diff;
    }

    const startX = vertex.x + r * Math.cos(start);
    const startY = vertex.y + r * Math.sin(start);
    const endX = vertex.x + r * Math.cos(end);
    const endY = vertex.y + r * Math.sin(end);

    const midAngle = start + diff / 2;
    const labelX = vertex.x + (r + 15) * Math.cos(midAngle);
    const labelY = vertex.y + (r + 15) * Math.sin(midAngle);

    const pathData = `M ${vertex.x} ${vertex.y} L ${startX} ${startY} A ${r} ${r} 0 0 1 ${endX} ${endY} Z`;

    return (
      <g>
        <path
          d={pathData}
          fill={color}
          fillOpacity={highlight ? 0.35 : 0.12}
          stroke={color}
          strokeWidth={highlight ? 2 : 1}
        />
        <text
          x={labelX}
          y={labelY + 4}
          textAnchor="middle"
          fill={highlight ? '#ffffff' : '#94a3b8'}
          fontSize="11"
          fontWeight={highlight ? 'bold' : 'normal'}
          className="select-none font-mono drop-shadow-xs"
        >
          {label}
        </text>
      </g>
    );
  };

  // Determine styling based on selected congruence case
  const isEdgeHighlighted = (edgeId: 'ab' | 'ac' | 'bc') => {
    if (selectedCase === 'ccc') return true;
    if (selectedCase === 'cgc') return edgeId === 'ab' || edgeId === 'ac';
    if (selectedCase === 'gcg') return edgeId === 'bc';
    return false;
  };

  const isAngleHighlighted = (angleId: 'a' | 'b' | 'c') => {
    if (selectedCase === 'ccc') return false;
    if (selectedCase === 'cgc') return angleId === 'a'; // INCLUDED angle
    if (selectedCase === 'gcg') return angleId === 'b' || angleId === 'c'; // ADJACENT angles
    return false;
  };

  return (
    <div className={`space-y-5 ${className}`}>
      {/* Simulation Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center font-bold text-sm">
              <Layers className="w-4 h-4" />
            </span>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg">
              Các Trường Hợp Bằng Nhau Của Hai Tam Giác
            </h4>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Khám phá 3 điều kiện chuẩn: c.c.c, c.g.c, g.c.g và trực quan hóa phép chồng khít
          </p>
        </div>

        {/* Action Toggle Button */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => startAnimation(isFullyOverlapped ? 0 : 1)}
            disabled={isAnimating}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 border ${
              isFullyOverlapped
                ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700'
            }`}
          >
            {isFullyOverlapped ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Tách rời hai hình</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Thử chồng khít tam giác</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            setSelectedCase('ccc');
            setOverlapProgress(0);
          }}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
            selectedCase === 'ccc'
              ? 'bg-indigo-600 text-white border-indigo-700 shadow-xs scale-102 ring-2 ring-indigo-200'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>📐 Trường hợp 1: c - c - c</span>
        </button>

        <button
          onClick={() => {
            setSelectedCase('cgc');
            setOverlapProgress(0);
          }}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
            selectedCase === 'cgc'
              ? 'bg-amber-500 text-white border-amber-600 shadow-xs scale-102 ring-2 ring-amber-200'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>⭐ Trường hợp 2: c - g - c (Góc xen giữa)</span>
        </button>

        <button
          onClick={() => {
            setSelectedCase('gcg');
            setOverlapProgress(0);
          }}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
            selectedCase === 'gcg'
              ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs scale-102 ring-2 ring-emerald-200'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
        >
          <span>🤝 Trường hợp 3: g - c - g (Hai góc kề)</span>
        </button>
      </div>

      {/* SVG Canvas Container */}
      <div className="bg-slate-950 rounded-2xl p-4 sm:p-6 shadow-md border border-slate-800 relative overflow-hidden select-none">
        {/* Top Status Bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-indigo-300">
              ΔABC (Tam giác chuẩn)
            </span>
            <span className="text-slate-600">và</span>
            <span className="font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-300">
              ΔA'B'C' (Tam giác di động)
            </span>
          </div>

          <div className="text-[11px] text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
            Tiến trình chồng khít: <strong>{Math.round(overlapProgress * 100)}%</strong>
          </div>
        </div>

        {/* Scalable SVG Canvas */}
        <div className="w-full overflow-x-auto py-2">
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-full h-auto min-w-[580px]"
          >
            <defs>
              <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#10b981" flood-opacity="0.8" />
              </filter>
            </defs>

            {/* Background Grid Lines (subtle) */}
            <line x1="40" y1="250" x2="700" y2="250" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

            {/* 1. Triangle ABC (Fixed Reference on the Left) */}
            <g className="transition-all duration-300">
              {/* Triangle Body */}
              <polygon
                points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
                fill={isFullyOverlapped ? '#059669' : '#1e1b4b'}
                fillOpacity={isFullyOverlapped ? 0.35 : 0.4}
                stroke={isFullyOverlapped ? '#10b981' : '#6366f1'}
                strokeWidth={isFullyOverlapped ? '3.5' : '2'}
                filter={isFullyOverlapped ? 'url(#glowGreen)' : undefined}
              />

              {/* Angle Arcs for Triangle ABC */}
              {renderAngleArc(A, B, C, 26, '#f59e0b', 'Â', isAngleHighlighted('a'))}
              {renderAngleArc(B, A, C, 24, '#06b6d4', 'B̂', isAngleHighlighted('b'))}
              {renderAngleArc(C, A, B, 24, '#ec4899', 'Ĉ', isAngleHighlighted('c'))}

              {/* Edge Ticks for Triangle ABC */}
              {isEdgeHighlighted('ab') && renderEdgeTicks(A, B, 1, '#6366f1')}
              {isEdgeHighlighted('ac') && renderEdgeTicks(A, C, 2, '#f43f5e')}
              {isEdgeHighlighted('bc') && renderEdgeTicks(B, C, 3, '#10b981')}

              {/* Vertex Dots & Labels for ABC */}
              <circle cx={A.x} cy={A.y} r="5" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
              <text x={A.x} y={A.y - 12} textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">
                A
              </text>

              <circle cx={B.x} cy={B.y} r="5" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
              <text x={B.x - 14} y={B.y + 16} textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">
                B
              </text>

              <circle cx={C.x} cy={C.y} r="5" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
              <text x={C.x + 14} y={C.y + 16} textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold">
                C
              </text>
            </g>

            {/* 2. Triangle A'B'C' (Animated Sliding/Rotating Group) */}
            <g
              transform={`translate(${currentOffsetX}, 0) rotate(${currentRotateDeg}, ${centerA_Prime.x}, ${centerA_Prime.y})`}
              className="transition-transform duration-75"
              opacity={isFullyOverlapped ? 0.95 : 1}
            >
              {/* Triangle A'B'C' Body */}
              <polygon
                points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
                fill={isFullyOverlapped ? '#10b981' : '#451a03'}
                fillOpacity={isFullyOverlapped ? 0.2 : 0.35}
                stroke={isFullyOverlapped ? '#34d399' : '#f59e0b'}
                strokeWidth={isFullyOverlapped ? '3' : '2'}
                strokeDasharray={isFullyOverlapped ? undefined : '6 4'}
              />

              {/* Angle Arcs for Triangle A'B'C' */}
              {renderAngleArc(A, B, C, 26, '#f59e0b', "Â'", isAngleHighlighted('a'))}
              {renderAngleArc(B, A, C, 24, '#06b6d4', "B̂'", isAngleHighlighted('b'))}
              {renderAngleArc(C, A, B, 24, '#ec4899', "Ĉ'", isAngleHighlighted('c'))}

              {/* Edge Ticks for Triangle A'B'C' */}
              {isEdgeHighlighted('ab') && renderEdgeTicks(A, B, 1, '#6366f1')}
              {isEdgeHighlighted('ac') && renderEdgeTicks(A, C, 2, '#f43f5e')}
              {isEdgeHighlighted('bc') && renderEdgeTicks(B, C, 3, '#10b981')}

              {/* Vertex Dots & Labels for A'B'C' */}
              <circle cx={A.x} cy={A.y} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
              <text x={A.x} y={A.y - 12} textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="bold">
                A'
              </text>

              <circle cx={B.x} cy={B.y} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
              <text x={B.x - 14} y={B.y + 16} textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="bold">
                B'
              </text>

              <circle cx={C.x} cy={C.y} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
              <text x={C.x + 14} y={C.y + 16} textAnchor="middle" fill="#fbbf24" fontSize="14" fontWeight="bold">
                C'
              </text>
            </g>

            {/* Overlap Success Celebration Notification in Canvas */}
            {isFullyOverlapped && (
              <g transform="translate(370, 45)" className="animate-scaleUp">
                <rect
                  x="-180"
                  y="-22"
                  width="360"
                  height="44"
                  rx="14"
                  fill="#064e3b"
                  stroke="#10b981"
                  strokeWidth="2"
                  filter="url(#glowGreen)"
                />
                <text
                  x="0"
                  y="6"
                  textAnchor="middle"
                  fill="#ecfdf5"
                  fontSize="13"
                  fontWeight="bold"
                >
                  ✓ Trùng khít hoàn toàn! ΔABC = ΔA'B'C'
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Dynamic Condition Explanations Card */}
        <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-2">
          {selectedCase === 'ccc' && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  AB = A'B' (1 gạch)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                  AC = A'C' (2 gạch)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  BC = B'C' (3 gạch)
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                ✨ <strong>Định lí c-c-c:</strong> Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.
              </p>
            </div>
          )}

          {selectedCase === 'cgc' && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  AB = A'B'
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                  Â = Â' (Góc xen giữa)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                  AC = A'C'
                </span>
              </div>
              <p className="text-[11px] text-amber-300/90 font-medium">
                ⚠️ <strong>Cực kì lưu ý:</strong> Góc bằng nhau bắt buộc phải là <strong>góc xen giữa</strong> hai cạnh bằng nhau (tạo bởi hai cạnh đó). Nếu góc bằng nhau là B̂ hay Ĉ thì không được kết luận hai tam giác bằng nhau!
              </p>
            </div>
          )}

          {selectedCase === 'gcg' && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                  B̂ = B̂' (Góc kề 1)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  BC = B'C' (Cạnh nằm giữa)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-pink-500/20 text-pink-300 font-bold border border-pink-500/30">
                  Ĉ = Ĉ' (Góc kề 2)
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                ✨ <strong>Định lí g-c-g:</strong> Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Manual Progress Slider Control */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Kéo thanh trượt để di chuyển hình chồng khít:</span>
          <span className="text-emerald-600 font-mono text-sm">
            {Math.round(overlapProgress * 100)}%
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={overlapProgress}
          onChange={e => setOverlapProgress(Number(e.target.value))}
          className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg appearance-none"
        />

        <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>0% (Tách rời hai hình)</span>
          <span className="text-indigo-600 font-bold">50% (Đang tịnh tiến & xoay)</span>
          <span className="text-emerald-700 font-bold">100% (Khớp khít hoàn toàn)</span>
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
                <span>Thử thách tư duy Bố & Con</span>
              </span>

              <button
                onClick={() => setShowParentAnswer(!showParentAnswer)}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{showParentAnswer ? 'Ẩn đáp án' : 'Bố xem đáp án & cách giải thích'}</span>
              </button>
            </div>

            <p className="text-sm font-extrabold text-slate-900 leading-snug">
              "Bố đố con: Nếu tam giác <MathText formula="ABC" /> và <MathText formula="A'B'C'" /> có cạnh <MathText formula="AB = A'B'" />, cạnh <MathText formula="AC = A'C'" />, thì cần thêm điều kiện góc nào bằng nhau để hai tam giác bằng nhau theo trường hợp c-g-c?"
            </p>

            {showParentAnswer && (
              <div className="mt-3 p-3.5 bg-white/95 rounded-xl border border-amber-200 text-xs text-slate-700 leading-relaxed space-y-2.5 animate-fadeIn">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Đáp án chuẩn xác:</strong>
                    <p className="mt-0.5 text-slate-700 font-semibold">
                      Bắt buộc phải là góc <MathText formula="\widehat{A} = \widehat{A'}" /> (góc xen giữa hai cạnh AB và AC).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1 border-t border-amber-100">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Bẫy kiểm tra thầy cô hay gài:</strong>
                    <p className="mt-0.5 text-slate-600">
                      Nếu đề bài cho góc <MathText formula="\widehat{B} = \widehat{B'}" /> hoặc <MathText formula="\widehat{C} = \widehat{C'}" /> thì <strong>tuyệt đối không được kết luận</strong> hai tam giác bằng nhau, vì góc B và góc C không nằm xen giữa hai cạnh AB và AC!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
