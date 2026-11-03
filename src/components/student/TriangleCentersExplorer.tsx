import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  Compass, Eye, RotateCcw, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, Move
} from 'lucide-react';

type CenterMode = 'centroid' | 'orthocenter' | 'circumcenter' | 'incenter' | 'all';

interface Point {
  x: number;
  y: number;
}

export const TriangleCentersExplorer: React.FC = () => {
  // Base triangle vertices: B and C are fixed at the bottom
  const B: Point = { x: 120, y: 280 };
  const C: Point = { x: 380, y: 280 };

  // Draggable vertex A
  const [A, setA] = useState<Point>({ x: 210, y: 80 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [mode, setMode] = useState<CenterMode>('centroid');
  const [showParentAnswer, setShowParentAnswer] = useState<boolean>(false);
  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number>(0);

  const svgRef = useRef<SVGSVGElement | null>(null);

  // Calculate side lengths
  const a = Math.hypot(C.x - B.x, C.y - B.y); // BC
  const b = Math.hypot(C.x - A.x, C.y - A.y); // AC
  const c = Math.hypot(B.x - A.x, B.y - A.y); // AB

  // Calculate angles in degrees
  const cosA = Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)));
  const cosB = Math.max(-1, Math.min(1, (a * a + c * c - b * b) / (2 * a * c)));
  const angleA = (Math.acos(cosA) * 180) / Math.PI;
  const angleB = (Math.acos(cosB) * 180) / Math.PI;
  const angleC = Math.max(0, 180 - angleA - angleB);

  // Triangle type classification
  const maxAngle = Math.max(angleA, angleB, angleC);
  const isRight = Math.abs(maxAngle - 90) <= 2;
  const isObtuse = maxAngle > 92;
  const isEquilateral = Math.abs(a - b) < 6 && Math.abs(b - c) < 6;

  // 1. Centroid G (Trọng tâm)
  const G: Point = {
    x: (A.x + B.x + C.x) / 3,
    y: (A.y + B.y + C.y) / 3
  };
  const M_BC: Point = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
  const M_AC: Point = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
  const M_AB: Point = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };

  // 2. Orthocenter H (Trực tâm)
  // Because BC is horizontal (yB = yC = 280), altitude from A is vertical: x = A.x
  // Altitude from B is perpendicular to AC: (x - B.x)*(C.x - A.x) + (y - B.y)*(C.y - A.y) = 0
  // Substitute x = A.x:
  const denomH = C.y - A.y;
  const H_y = denomH !== 0 
    ? B.y - ((A.x - B.x) * (C.x - A.x)) / denomH 
    : 280;
  const H: Point = { x: A.x, y: H_y };

  // Feet of altitudes
  const footA: Point = { x: A.x, y: B.y };
  
  // Projection of B onto line AC:
  const tB = ((B.x - A.x) * (C.x - A.x) + (B.y - A.y) * (C.y - A.y)) / (b * b || 1);
  const footB: Point = {
    x: A.x + tB * (C.x - A.x),
    y: A.y + tB * (C.y - A.y)
  };

  // Projection of C onto line AB:
  const tC = ((C.x - A.x) * (B.x - A.x) + (C.y - A.y) * (B.y - A.y)) / (c * c || 1);
  const footC: Point = {
    x: A.x + tC * (B.x - A.x),
    y: A.y + tC * (B.y - A.y)
  };

  // 3. Circumcenter O (Tâm ngoại tiếp) & Circumradius R
  // Perpendicular bisector of BC is x = M_BC.x = 250
  // D = 2 * [A.x*(B.y - C.y) + B.x*(C.y - A.y) + C.x*(A.y - B.y)]
  const D_circum = 2 * (A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
  const O_x = Math.abs(D_circum) > 0.001
    ? ((A.x * A.x + A.y * A.y) * (B.y - C.y) + (B.x * B.x + B.y * B.y) * (C.y - A.y) + (C.x * C.x + C.y * C.y) * (A.y - B.y)) / D_circum
    : 250;
  const O_y = Math.abs(D_circum) > 0.001
    ? ((A.x * A.x + A.y * A.y) * (C.x - B.x) + (B.x * B.x + B.y * B.y) * (A.x - C.x) + (C.x * C.x + C.y * C.y) * (B.x - A.x)) / D_circum
    : 280;
  const O: Point = { x: O_x, y: O_y };
  const R_circum = Math.hypot(A.x - O.x, A.y - O.y);

  // 4. Incenter I (Tâm nội tiếp) & Inradius r
  const perimeter = a + b + c;
  const I: Point = {
    x: (a * A.x + b * B.x + c * C.x) / (perimeter || 1),
    y: (a * A.y + b * B.y + c * C.y) / (perimeter || 1)
  };
  const semiP = perimeter / 2;
  const area = 0.5 * Math.abs(A.x * (B.y - C.y) + B.x * (C.y - A.y) + C.x * (A.y - B.y));
  const r_in = semiP > 0 ? area / semiP : 0;

  // Dragging logic with touch + mouse
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const updateCoordinates = useCallback((clientX: number, clientY: number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const scaleX = 500 / rect.width;
    const scaleY = 400 / rect.height;

    const rawX = (clientX - rect.left) * scaleX;
    const rawY = (clientY - rect.top) * scaleY;

    // Constrain A inside bounding box so triangle remains visible
    const clampedX = Math.max(50, Math.min(450, rawX));
    const clampedY = Math.max(40, Math.min(235, rawY));

    setA({ x: Math.round(clampedX), y: Math.round(clampedY) });
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!isDragging) return;
    updateCoordinates(e.clientX, e.clientY);
  }, [isDragging, updateCoordinates]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  // Quick Preset Handlers
  const applyPreset = (type: 'acute' | 'right' | 'obtuse' | 'equilateral') => {
    switch (type) {
      case 'acute':
        setA({ x: 230, y: 75 });
        break;
      case 'right':
        // Right triangle at A using Thales circle: radius 130 from center (250, 280)
        // dx = 70 -> dy = sqrt(130^2 - 70^2) = sqrt(16900 - 4900) = sqrt(12000) ≈ 109.5
        setA({ x: 180, y: 280 - 110 });
        break;
      case 'obtuse':
        setA({ x: 300, y: 195 });
        break;
      case 'equilateral':
        // Base is 260 -> height = 260 * sqrt(3)/2 ≈ 225 -> y = 280 - 225 = 55
        setA({ x: 250, y: 55 });
        break;
    }
  };

  const challenges = [
    {
      q: "Khi kéo đỉnh A để tam giác trở thành tam giác TÙ, trực tâm H nằm bên trong hay bên ngoài tam giác?",
      a: "Trực tâm H sẽ NHẢY RA BÊN NGOÀI tam giác! Chỉ khi tam giác nhọn thì H mới nằm bên trong, còn khi tam giác vuông thì H trùng đúng đỉnh góc vuông.",
      tip: "Bố hãy thử bấm nút 'Tam giác tù' phía trên để chỉ cho con thấy chấm màu đỏ cam H bay ra ngoài tam giác nhé!"
    },
    {
      q: "Trong 4 điểm (G, H, O, I), điểm nào LUÔN LUÔN nằm bên trong tam giác dù tam giác có hình dạng nhọn, vuông hay tù?",
      a: "Chính là Trọng tâm G (giao điểm 3 đường trung tuyến) và Tâm nội tiếp I (giao điểm 3 đường phân giác). Hai điểm này không bao giờ ra khỏi tam giác!",
      tip: "H và O có thể nhảy ra ngoài khi có góc tù, nhưng G và I thì luôn vững vàng ở bên trong."
    },
    {
      q: "Khi tam giác trở thành Tam giác ĐỀU, 4 điểm G, H, O, I có vị trí thế nào so với nhau?",
      a: "Cả 4 điểm G, H, O, I sẽ TRÙNG KHÍT NHAU tại một điểm duy nhất! Khi đó trung tuyến cũng chính là đường cao, trung trực và phân giác.",
      tip: "Bố bấm nút 'Tam giác đều' để con quan sát cả 4 tâm chụm lại làm một!"
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-800 space-y-5">
      {/* Top Header: Title & Classification Badges */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight">
              Mô Phỏng 4 Đường Đồng Quy Trong Tam Giác
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Kéo thả đỉnh <strong className="text-emerald-400">A</strong> để biến đổi tam giác và quan sát sự dịch chuyển của các tâm
          </p>
        </div>

        {/* Real-time Triangle Metrics */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
            Â ≈ {Math.round(angleA)}°
          </span>
          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
            isEquilateral
              ? 'bg-purple-900/40 text-purple-300 border-purple-500/50'
              : isRight
              ? 'bg-amber-900/40 text-amber-300 border-amber-500/50'
              : isObtuse
              ? 'bg-rose-900/40 text-rose-300 border-rose-500/50'
              : 'bg-emerald-900/40 text-emerald-300 border-emerald-500/50'
          }`}>
            {isEquilateral ? 'Tam giác đều' : isRight ? 'Tam giác vuông' : isObtuse ? 'Tam giác tù' : 'Tam giác nhọn'}
          </span>
        </div>
      </div>

      {/* Preset Quick Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap mr-1 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Dáng hình mẫu:
        </span>
        <button
          onClick={() => applyPreset('acute')}
          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all whitespace-nowrap"
        >
          Tam giác nhọn
        </button>
        <button
          onClick={() => applyPreset('right')}
          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-all whitespace-nowrap"
        >
          Tam giác vuông
        </button>
        <button
          onClick={() => applyPreset('obtuse')}
          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700 transition-all whitespace-nowrap"
        >
          Tam giác tù
        </button>
        <button
          onClick={() => applyPreset('equilateral')}
          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-purple-300 border border-slate-700 transition-all whitespace-nowrap"
        >
          Tam giác đều
        </button>
        <button
          onClick={() => setA({ x: 210, y: 80 })}
          title="Đặt lại vị trí ban đầu"
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 border border-slate-700 ml-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Mode Selector Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 bg-slate-950/60 p-1.5 rounded-2xl border border-slate-800 text-xs font-bold">
        <button
          onClick={() => setMode('centroid')}
          className={`py-2 px-2.5 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            mode === 'centroid'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
          <span>1. Trọng tâm G</span>
        </button>

        <button
          onClick={() => setMode('orthocenter')}
          className={`py-2 px-2.5 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            mode === 'orthocenter'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
          <span>2. Trực tâm H</span>
        </button>

        <button
          onClick={() => setMode('circumcenter')}
          className={`py-2 px-2.5 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            mode === 'circumcenter'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 inline-block"></span>
          <span>3. Ngoại tiếp O</span>
        </button>

        <button
          onClick={() => setMode('incenter')}
          className={`py-2 px-2.5 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            mode === 'incenter'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
          <span>4. Nội tiếp I</span>
        </button>

        <button
          onClick={() => setMode('all')}
          className={`col-span-2 sm:col-span-1 py-2 px-2.5 rounded-xl transition-all text-center flex items-center justify-center gap-1.5 ${
            mode === 'all'
              ? 'bg-purple-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>✨ Cả 4 tâm</span>
        </button>
      </div>

      {/* Interactive SVG Canvas */}
      <div className="relative bg-slate-950 rounded-2xl p-2 border border-slate-800 overflow-hidden select-none touch-none">
        {/* Floating dragging indicator prompt */}
        <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-slate-700/60 text-[11px] text-slate-300">
          <Move className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Kéo chấm tròn đỉnh A</span>
        </div>

        <svg
          ref={svgRef}
          viewBox="0 0 500 400"
          className="w-full h-auto max-h-[380px] sm:max-h-[440px] mx-auto block"
        >
          <defs>
            {/* Subtle grid pattern */}
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect width="500" height="400" fill="url(#grid)" />

          {/* 3. MODE: CIRCUMCENTER CIRCLE (Draw under triangle) */}
          {(mode === 'circumcenter' || mode === 'all') && R_circum > 0 && R_circum < 450 && (
            <circle
              cx={O.x}
              cy={O.y}
              r={R_circum}
              fill="rgba(99, 102, 241, 0.05)"
              stroke="#6366f1"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
          )}

          {/* 4. MODE: INSCRIBED CIRCLE (Draw under triangle) */}
          {(mode === 'incenter' || mode === 'all') && r_in > 0 && (
            <circle
              cx={I.x}
              cy={I.y}
              r={r_in}
              fill="rgba(245, 158, 11, 0.1)"
              stroke="#f59e0b"
              strokeWidth="2"
            />
          )}

          {/* Base side BC Extension (dashed) when Orthocenter or Feet fall outside */}
          {(mode === 'orthocenter' || mode === 'all') && (footA.x < B.x || footA.x > C.x) && (
            <line
              x1={Math.min(footA.x - 20, B.x - 30)}
              y1={B.y}
              x2={Math.max(footA.x + 20, C.x + 30)}
              y2={B.y}
              stroke="#64748b"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )}

          {/* Extended lines to Orthocenter H if H is outside */}
          {(mode === 'orthocenter' || mode === 'all') && (
            <>
              {/* Line from A through footA to H */}
              <line
                x1={A.x}
                y1={Math.min(A.y, H.y)}
                x2={A.x}
                y2={Math.max(footA.y, H.y)}
                stroke="#f43f5e"
                strokeWidth="1.5"
                strokeDasharray={H.y > footA.y || H.y < A.y ? "3 3" : undefined}
              />
              {/* Line from B to H */}
              <line
                x1={B.x}
                y1={B.y}
                x2={H.x}
                y2={H.y}
                stroke="#f43f5e"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.7"
              />
              {/* Line from C to H */}
              <line
                x1={C.x}
                y1={C.y}
                x2={H.x}
                y2={H.y}
                stroke="#f43f5e"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.7"
              />
              {/* Altitudes right-angle markers & feet of altitudes */}
              <circle cx={footA.x} cy={footA.y} r="2.5" fill="#f43f5e" />
              <circle cx={footB.x} cy={footB.y} r="2.5" fill="#f43f5e" />
              <circle cx={footC.x} cy={footC.y} r="2.5" fill="#f43f5e" />
              <rect
                x={footA.x - 6}
                y={footA.y - 6}
                width="6"
                height="6"
                fill="none"
                stroke="#f43f5e"
                strokeWidth="1"
              />
            </>
          )}

          {/* 1. MODE: MEDIANS (Trung tuyến) */}
          {(mode === 'centroid' || mode === 'all') && (
            <>
              <line x1={A.x} y1={A.y} x2={M_BC.x} y2={M_BC.y} stroke="#10b981" strokeWidth="1.8" />
              <line x1={B.x} y1={B.y} x2={M_AC.x} y2={M_AC.y} stroke="#10b981" strokeWidth="1.8" />
              <line x1={C.x} y1={C.y} x2={M_AB.x} y2={M_AB.y} stroke="#10b981" strokeWidth="1.8" />
              {/* Midpoints tick markers */}
              <circle cx={M_BC.x} cy={M_BC.y} r="3" fill="#10b981" />
              <circle cx={M_AC.x} cy={M_AC.y} r="3" fill="#10b981" />
              <circle cx={M_AB.x} cy={M_AB.y} r="3" fill="#10b981" />
            </>
          )}

          {/* 3. MODE: PERPENDICULAR BISECTORS (Trung trực) */}
          {(mode === 'circumcenter' || mode === 'all') && (
            <>
              {/* Bisector of BC: vertical at M_BC.x */}
              <line
                x1={M_BC.x}
                y1={Math.min(O.y - 20, 100)}
                x2={M_BC.x}
                y2={Math.max(O.y + 20, 310)}
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Bisector of AB */}
              <line
                x1={M_AB.x}
                y1={M_AB.y}
                x2={O.x}
                y2={O.y}
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              {/* Bisector of AC */}
              <line
                x1={M_AC.x}
                y1={M_AC.y}
                x2={O.x}
                y2={O.y}
                stroke="#6366f1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </>
          )}

          {/* 4. MODE: ANGLE BISECTORS (Phân giác) */}
          {(mode === 'incenter' || mode === 'all') && (
            <>
              <line x1={A.x} y1={A.y} x2={I.x} y2={I.y} stroke="#f59e0b" strokeWidth="1.8" />
              <line x1={B.x} y1={B.y} x2={I.x} y2={I.y} stroke="#f59e0b" strokeWidth="1.8" />
              <line x1={C.x} y1={C.y} x2={I.x} y2={I.y} stroke="#f59e0b" strokeWidth="1.8" />
            </>
          )}

          {/* Main Triangle ABC Outline */}
          <polygon
            points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
            fill="rgba(30, 41, 59, 0.4)"
            stroke="#e2e8f0"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Vertices Labels & Fixed Pins */}
          {/* B */}
          <circle cx={B.x} cy={B.y} r="5" fill="#38bdf8" />
          <text x={B.x - 18} y={B.y + 16} fill="#94a3b8" fontSize="13" fontWeight="bold">B</text>

          {/* C */}
          <circle cx={C.x} cy={C.y} r="5" fill="#38bdf8" />
          <text x={C.x + 10} y={C.y + 16} fill="#94a3b8" fontSize="13" fontWeight="bold">C</text>

          {/* Draggable Vertex A */}
          <g
            className="cursor-grab active:cursor-grabbing"
            onPointerDown={handlePointerDown}
          >
            {/* Outer animated halo when idle */}
            <circle
              cx={A.x}
              cy={A.y}
              r="18"
              fill="rgba(16, 185, 129, 0.2)"
              className="animate-pulse"
            />
            <circle
              cx={A.x}
              cy={A.y}
              r="9"
              fill="#10b981"
              stroke="#ffffff"
              strokeWidth="2.5"
              className="shadow-lg"
            />
            <text
              x={A.x}
              y={A.y - 14}
              textAnchor="middle"
              fill="#10b981"
              fontSize="14"
              fontWeight="extrabold"
            >
              A
            </text>
          </g>

          {/* CENTER POINTS MARKERS */}

          {/* 1. G - Centroid */}
          {(mode === 'centroid' || mode === 'all') && (
            <g>
              <circle cx={G.x} cy={G.y} r="6" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
              <text x={G.x + 8} y={G.y - 6} fill="#34d399" fontSize="13" fontWeight="extrabold">G</text>
            </g>
          )}

          {/* 2. H - Orthocenter */}
          {(mode === 'orthocenter' || mode === 'all') && (
            <g>
              <circle cx={H.x} cy={H.y} r="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="2" />
              <text x={H.x + 8} y={H.y - 6} fill="#fb7185" fontSize="13" fontWeight="extrabold">
                H {isObtuse ? '(ngoài)' : isRight ? '(trùng)' : ''}
              </text>
            </g>
          )}

          {/* 3. O - Circumcenter */}
          {(mode === 'circumcenter' || mode === 'all') && (
            <g>
              <circle cx={O.x} cy={O.y} r="6" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
              <text x={O.x + 8} y={O.y - 6} fill="#818cf8" fontSize="13" fontWeight="extrabold">O</text>
            </g>
          )}

          {/* 4. I - Incenter */}
          {(mode === 'incenter' || mode === 'all') && (
            <g>
              <circle cx={I.x} cy={I.y} r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
              <text x={I.x + 8} y={I.y - 6} fill="#fbbf24" fontSize="13" fontWeight="extrabold">I</text>
            </g>
          )}
        </svg>
      </div>

      {/* Mode-Specific Insight Card */}
      <div className="rounded-2xl p-4 bg-slate-800/80 border border-slate-700/80 space-y-2">
        {mode === 'centroid' && (
          <div className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h4 className="font-bold text-emerald-300 text-sm">
                Trọng tâm G (Giao điểm 3 đường trung tuyến)
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Tỉ lệ vàng:</strong> Khoảng cách từ đỉnh tới trọng tâm bằng 2/3 trung tuyến: <span className="font-mono text-emerald-400">AG = 2/3 AM</span>, <span className="font-mono text-emerald-400">GM = 1/3 AM</span>.
            </p>
            <p className="text-xs text-slate-400">
              • <strong>Vị trí:</strong> Điểm <strong className="text-white">G luôn luôn nằm bên trong tam giác</strong> và là tâm điểm đặt ngón tay thăng bằng một tấm bìa tam giác.
            </p>
          </div>
        )}

        {mode === 'orthocenter' && (
          <div className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              <h4 className="font-bold text-rose-300 text-sm">
                Trực tâm H (Giao điểm 3 đường cao)
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Hiện tượng dịch chuyển kì diệu:</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-1">
              <div className={`p-2 rounded-xl border ${!isObtuse && !isRight ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                <strong>Tam giác nhọn:</strong><br />H nằm <u>bên trong</u> tam giác.
              </div>
              <div className={`p-2 rounded-xl border ${isRight ? 'bg-amber-950/60 border-amber-500/60 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                <strong>Tam giác vuông:</strong><br />H <u>trùng ngay đỉnh</u> góc vuông.
              </div>
              <div className={`p-2 rounded-xl border ${isObtuse ? 'bg-rose-950/60 border-rose-500/60 text-rose-200' : 'bg-slate-900 border-slate-800 text-slate-400'}`}>
                <strong>Tam giác tù:</strong><br />H <u>nhảy ra bên ngoài</u> tam giác!
              </div>
            </div>
          </div>
        )}

        {mode === 'circumcenter' && (
          <div className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400"></span>
              <h4 className="font-bold text-indigo-300 text-sm">
                Tâm đường tròn ngoại tiếp O (Giao điểm 3 đường trung trực)
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Tính chất cốt lõi:</strong> Điểm O cách đều cả 3 đỉnh tam giác: <span className="font-mono text-indigo-400">OA = OB = OC = R</span>.
            </p>
            <p className="text-xs text-slate-400">
              • Đường tròn nét đứt màu xanh tím đi qua đúng 3 đỉnh A, B, C gọi là đường tròn ngoại tiếp.
            </p>
          </div>
        )}

        {mode === 'incenter' && (
          <div className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <h4 className="font-bold text-amber-300 text-sm">
                Tâm đường tròn nội tiếp I (Giao điểm 3 đường phân giác)
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Tính chất cốt lõi:</strong> Điểm I cách đều cả 3 cạnh tam giác: <span className="font-mono text-amber-400">d(I, AB) = d(I, BC) = d(I, CA) = r</span>.
            </p>
            <p className="text-xs text-slate-400">
              • Điểm I <strong className="text-white">luôn nằm bên trong tam giác</strong> và vòng tròn vàng tiếp xúc khít 3 cạnh bên trong tam giác.
            </p>
          </div>
        )}

        {mode === 'all' && (
          <div className="space-y-1.5 animate-fadeIn">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
              <h4 className="font-bold text-purple-300 text-sm">
                So sánh tổng thể 4 điểm đặc biệt (G, H, O, I)
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • Khi tam giác đều, 4 điểm <strong className="text-emerald-400">G</strong>, <strong className="text-rose-400">H</strong>, <strong className="text-indigo-400">O</strong>, <strong className="text-amber-400">I</strong> sẽ trùng khít tại đúng một điểm tâm tam giác.
            </p>
            <p className="text-xs text-slate-400">
              • Ở mọi tam giác thường, ba điểm H, G, O luôn thẳng hàng trên một đường thẳng kì diệu gọi là <strong>Đường thẳng Euler</strong>!
            </p>
          </div>
        )}
      </div>

      {/* Parent-Child Interactive Challenge Card ("Bố đố con") */}
      <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900 p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                Bố đố con • Thử thách tương tác #{activeChallengeIdx + 1}
              </span>
              <h5 className="text-xs sm:text-sm font-bold text-white">
                {challenges[activeChallengeIdx].q}
              </h5>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {challenges.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveChallengeIdx(idx);
                  setShowParentAnswer(false);
                }}
                className={`w-5 h-5 rounded-md text-[10px] font-bold transition-all ${
                  activeChallengeIdx === idx
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Reveal Answer Toggle */}
        <div className="pt-1">
          <button
            onClick={() => setShowParentAnswer(!showParentAnswer)}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{showParentAnswer ? 'Ẩn đáp án gợi ý' : 'Bố mẹ bấm xem đáp án gợi mở'}</span>
            {showParentAnswer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showParentAnswer && (
            <div className="mt-2.5 p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-100 space-y-1.5 animate-fadeIn">
              <p className="leading-relaxed">
                <strong className="text-amber-300">💡 Đáp án chuẩn:</strong> {challenges[activeChallengeIdx].a}
              </p>
              <p className="text-[11px] text-amber-300/80 italic">
                👉 {challenges[activeChallengeIdx].tip}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
