import React, { useState, useRef, useMemo } from 'react';
import { 
  Dices, Play, FastForward, RotateCcw, 
  HelpCircle, ChevronDown, ChevronUp, Sparkles, Award, BarChart2
} from 'lucide-react';

interface SectorConfig {
  id: string;
  label: string;
  percent: number; // e.g. 50
  color: string;
  textColor: string;
  bgBarColor: string;
}

interface Preset {
  id: string;
  name: string;
  description: string;
  sectors: SectorConfig[];
}

const PRESETS: Preset[] = [
  {
    id: 'uneven-3',
    name: 'Vòng quay May mắn (50% - 25% - 25%)',
    description: 'Màu Đỏ chiếm nửa vòng tròn (50%), Xanh và Vàng chiếm 25%',
    sectors: [
      { id: 'red', label: 'Đỏ', percent: 50, color: '#ef4444', textColor: '#fee2e2', bgBarColor: 'bg-red-500' },
      { id: 'blue', label: 'Xanh Lam', percent: 25, color: '#3b82f6', textColor: '#dbeafe', bgBarColor: 'bg-blue-500' },
      { id: 'yellow', label: 'Vàng', percent: 25, color: '#eab308', textColor: '#fef9c3', bgBarColor: 'bg-yellow-500' },
    ]
  },
  {
    id: 'even-4',
    name: '4 Màu Đồng Khả Năng (25% mỗi màu)',
    description: '4 ô bằng nhau, mỗi ô 90 độ, xác suất lý thuyết 1/4 = 25%',
    sectors: [
      { id: 'red', label: 'Đỏ', percent: 25, color: '#ef4444', textColor: '#fee2e2', bgBarColor: 'bg-red-500' },
      { id: 'blue', label: 'Xanh Lam', percent: 25, color: '#3b82f6', textColor: '#dbeafe', bgBarColor: 'bg-blue-500' },
      { id: 'yellow', label: 'Vàng', percent: 25, color: '#eab308', textColor: '#fef9c3', bgBarColor: 'bg-yellow-500' },
      { id: 'green', label: 'Xanh Lục', percent: 25, color: '#10b981', textColor: '#d1fae5', bgBarColor: 'bg-emerald-500' },
    ]
  },
  {
    id: 'coin-2',
    name: 'Đồng xu Sấp - Ngửa (50% - 50%)',
    description: 'Mô phỏng tung đồng xu: Mặt Sấp và Mặt Ngửa có xác suất 1/2',
    sectors: [
      { id: 'sap', label: 'Mặt Sấp (S)', percent: 50, color: '#06b6d4', textColor: '#cffafe', bgBarColor: 'bg-cyan-500' },
      { id: 'ngua', label: 'Mặt Ngửa (N)', percent: 50, color: '#8b5cf6', textColor: '#ede9fe', bgBarColor: 'bg-purple-500' },
    ]
  },
  {
    id: 'dice-6',
    name: 'Xúc xắc 6 mặt (16.7% mỗi mặt)',
    description: 'Gieo con xúc xắc 6 chấm cân đối, mỗi mặt có xác suất 1/6',
    sectors: [
      { id: 'd1', label: '1 Chấm', percent: 16.666, color: '#f43f5e', textColor: '#ffe4e6', bgBarColor: 'bg-rose-500' },
      { id: 'd2', label: '2 Chấm', percent: 16.666, color: '#f97316', textColor: '#ffedd5', bgBarColor: 'bg-orange-500' },
      { id: 'd3', label: '3 Chấm', percent: 16.666, color: '#eab308', textColor: '#fef9c3', bgBarColor: 'bg-yellow-500' },
      { id: 'd4', label: '4 Chấm', percent: 16.666, color: '#10b981', textColor: '#d1fae5', bgBarColor: 'bg-emerald-500' },
      { id: 'd5', label: '5 Chấm', percent: 16.666, color: '#06b6d4', textColor: '#cffafe', bgBarColor: 'bg-cyan-500' },
      { id: 'd6', label: '6 Chấm', percent: 16.670, color: '#8b5cf6', textColor: '#ede9fe', bgBarColor: 'bg-purple-500' },
    ]
  }
];

export const ProbabilitySpinnerExplorer: React.FC = () => {
  const [activePresetId, setActivePresetId] = useState<string>(PRESETS[0].id);
  const activePreset = useMemo(() => {
    return PRESETS.find(p => p.id === activePresetId) || PRESETS[0];
  }, [activePresetId]);

  // Counts of each sector
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [totalSpins, setTotalSpins] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [needleRotation, setNeedleRotation] = useState<number>(0);
  const [lastResultSector, setLastResultSector] = useState<SectorConfig | null>(null);

  // Challenge toggle
  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number>(0);
  const [showParentAnswer, setShowParentAnswer] = useState<boolean>(false);

  const currentRotationRef = useRef<number>(0);

  // Calculate sector angles (starting at 12 o'clock = -90 deg in standard SVG, or 0 deg pointing up)
  const sectorsWithAngles = useMemo(() => {
    let currentAngle = 0;
    return activePreset.sectors.map(sector => {
      const angleSweep = (sector.percent / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + angleSweep;
      const midAngle = startAngle + angleSweep / 2;
      currentAngle = endAngle;

      return {
        ...sector,
        startAngle,
        endAngle,
        midAngle
      };
    });
  }, [activePreset]);

  // Helper to pick a random sector based on exact theoretical distribution
  const pickRandomSector = () => {
    const rand = Math.random() * 100;
    let accumulated = 0;
    for (const sec of activePreset.sectors) {
      accumulated += sec.percent;
      if (rand <= accumulated) {
        return sec;
      }
    }
    return activePreset.sectors[activePreset.sectors.length - 1];
  };

  // Perform a single animated spin
  const handleSpinOnce = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const winningSector = pickRandomSector();
    const winningSecMeta = sectorsWithAngles.find(s => s.id === winningSector.id);

    // Pick a random angle strictly inside this sector
    const margin = 2;
    const start = (winningSecMeta?.startAngle || 0) + margin;
    const end = (winningSecMeta?.endAngle || 360) - margin;
    const targetSectorAngle = start + Math.random() * (end - start);

    // Give it 4 to 7 full extra rotations (1440 to 2520 deg)
    const extraRotations = (4 + Math.floor(Math.random() * 4)) * 360;
    const targetTotalAngle = currentRotationRef.current + extraRotations + (targetSectorAngle - (currentRotationRef.current % 360) + 360) % 360;

    currentRotationRef.current = targetTotalAngle;
    setNeedleRotation(targetTotalAngle);

    setTimeout(() => {
      setIsSpinning(false);
      setLastResultSector(winningSector);
      setCounts(prev => ({
        ...prev,
        [winningSector.id]: (prev[winningSector.id] || 0) + 1
      }));
      setTotalSpins(prev => prev + 1);
    }, 2800);
  };

  // Fast Batch Simulation (50, 100, 500 spins)
  const handleBatchSimulation = (batchCount: number) => {
    if (isSpinning) return;

    const newCounts = { ...counts };
    let lastPicked = lastResultSector;

    for (let i = 0; i < batchCount; i++) {
      const picked = pickRandomSector();
      newCounts[picked.id] = (newCounts[picked.id] || 0) + 1;
      lastPicked = picked;
    }

    setCounts(newCounts);
    setTotalSpins(prev => prev + batchCount);
    setLastResultSector(lastPicked);
  };

  // Reset experiment data
  const handleReset = () => {
    setCounts({});
    setTotalSpins(0);
    setLastResultSector(null);
    currentRotationRef.current = 0;
    setNeedleRotation(0);
  };

  // Switch preset
  const handleSelectPreset = (id: string) => {
    setActivePresetId(id);
    setCounts({});
    setTotalSpins(0);
    setLastResultSector(null);
    currentRotationRef.current = 0;
    setNeedleRotation(0);
  };

  // Convert polar coordinates to SVG Cartesian (Center 160, 160, Radius 130)
  const getCoordinatesForPercent = (angleDeg: number, radius = 130) => {
    // 0 deg is at top (12 o'clock) -> subtract 90 deg for math cos/sin
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: 160 + radius * Math.cos(rad),
      y: 160 + radius * Math.sin(rad)
    };
  };

  const challenges = [
    {
      q: "Đố con: Khi mình quay càng nhiều lần (ví dụ 500 lần so với 5 lần), thì tỉ số thực nghiệm sẽ càng gần hay càng xa tỉ lệ lý thuyết?",
      a: "Tỉ số thực nghiệm sẽ CÀNG GẦN với xác suất lý thuyết! Đây là 'Luật số lớn' (Law of Large Numbers) trong Toán học: Số phép thử càng nhiều thì kết quả thống kê thực tế càng tiệm cận giá trị lý thuyết.",
      tip: "Bố hãy bấm thử nút 'Quay 500 lần' để con thấy thanh thực nghiệm áp sát vào vạch lý thuyết nét đứt màu trắng nhé!"
    },
    {
      q: "Nếu một người chơi quay 10 lần liên tiếp đều rơi vào ô màu ĐỎ, thì lần thứ 11 xác suất vào ô ĐỎ có bị giảm đi không?",
      a: "KHÔNG HỀ GIẢM! Mỗi lần quay là một phép thử hoàn toàn độc lập, con quay không có trí nhớ. Xác suất lần thứ 11 vẫn giữ nguyên đúng tỉ lệ vốn có của nó (50%). Ngộ nhận cho rằng 'ra đỏ nhiều rồi thì lần sau phải ra xanh' gọi là Ngụy biện con bạc (Gambler's fallacy)!",
      tip: "Nhắc con luôn dựa vào xác suất khách quan, không bị ảo giác cảm xúc chi phối."
    },
    {
      q: "Tại sao trong các trò chơi may rủi của sòng bạc, người chơi càng chơi lâu thì càng chắc chắn bị lỗ?",
      a: "Vì theo Luật số lớn, khi số lần chơi lên đến hàng nghìn lần, tỉ lệ thắng thua của người chơi sẽ tiến sát về xác suất toán học do sòng bạc thiết kế sẵn (luôn nghiêng 51%-53% về nhà cái). Chơi càng nhiều thì nhà cái càng chắc chắn thắng!",
      tip: "Giáo dục tài chính và nhận thức xác suất rất bổ ích cho tư duy của con."
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-800 space-y-5">
      {/* Top Header: Title & Experiment Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
              <Dices className="w-5 h-5" />
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight">
              Mô Phỏng Vòng Quay Xác Suất Thực Nghiệm
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            So sánh trực quan: <strong className="text-amber-400">Xác suất Lý thuyết</strong> vs. <strong className="text-emerald-400">Tần số Thực nghiệm</strong> qua Luật số lớn
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
              Tổng số lần thử
            </span>
            <span className="text-sm sm:text-base font-mono font-extrabold text-emerald-400">
              N = {totalSpins.toLocaleString('vi-VN')}
            </span>
          </div>

          <button
            onClick={handleReset}
            title="Đặt lại dữ liệu thí nghiệm"
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap mr-1 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Mô hình thử nghiệm:
        </span>
        {PRESETS.map(preset => {
          const isSelected = activePreset.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                isSelected
                  ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {preset.name.split(' (')[0]}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Grid: Spinner Canvas (Left) + Real-time Frequency Chart (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: SVG Wheel and Controls (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-2xl">
              {/* Outer decorative rim */}
              <circle cx="160" cy="160" r="148" fill="#1e293b" stroke="#334155" strokeWidth="6" />
              <circle cx="160" cy="160" r="138" fill="#0f172a" />

              {/* Pie Sectors */}
              {sectorsWithAngles.map(sec => {
                const start = getCoordinatesForPercent(sec.startAngle, 130);
                const end = getCoordinatesForPercent(sec.endAngle, 130);
                const largeArc = sec.endAngle - sec.startAngle > 180 ? 1 : 0;
                const pathData = `M 160 160 L ${start.x} ${start.y} A 130 130 0 ${largeArc} 1 ${end.x} ${end.y} Z`;

                // Text label coordinates inside the sector
                const textPos = getCoordinatesForPercent(sec.midAngle, 85);

                const isWinningHighlight = !isSpinning && lastResultSector?.id === sec.id;

                return (
                  <g key={sec.id}>
                    <path
                      d={pathData}
                      fill={sec.color}
                      stroke="#0f172a"
                      strokeWidth="2.5"
                      opacity={isWinningHighlight ? 1 : 0.85}
                      className="transition-opacity"
                    />
                    {/* Sector Text & Percentage */}
                    <text
                      x={textPos.x}
                      y={textPos.y - 4}
                      fill={sec.textColor}
                      fontSize="12"
                      fontWeight="bold"
                      textAnchor="middle"
                      className="select-none pointer-events-none drop-shadow"
                    >
                      {sec.label}
                    </text>
                    <text
                      x={textPos.x}
                      y={textPos.y + 11}
                      fill={sec.textColor}
                      fontSize="10"
                      fontWeight="bold"
                      textAnchor="middle"
                      opacity="0.9"
                      className="select-none pointer-events-none"
                    >
                      {Math.round(sec.percent)}%
                    </text>
                  </g>
                );
              })}

              {/* Center Hub Outer Ring */}
              <circle cx="160" cy="160" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
              <circle cx="160" cy="160" r="8" fill="#38bdf8" />
            </svg>

            {/* Spinning Needle Pointer */}
            <div
              className="absolute inset-0 pointer-events-none flex items-center justify-center"
              style={{
                transform: `rotate(${needleRotation}deg)`,
                transition: isSpinning ? 'transform 2.8s cubic-bezier(0.12, 0.8, 0.2, 1)' : 'none'
              }}
            >
              <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-xl">
                {/* Arrowhead pointing up at 12 o'clock */}
                <polygon
                  points="160,35 152,160 168,160"
                  fill="#ffffff"
                  stroke="#0f172a"
                  strokeWidth="2"
                />
                <circle cx="160" cy="160" r="10" fill="#f43f5e" stroke="#ffffff" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 w-full max-w-xs">
            <button
              onClick={handleSpinOnce}
              disabled={isSpinning}
              className={`flex-1 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                isSpinning
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  : 'bg-rose-600 hover:bg-rose-500 active:scale-98 text-white shadow-rose-900/40'
              }`}
            >
              <Play className={`w-4 h-4 fill-current ${isSpinning ? 'animate-spin' : ''}`} />
              <span>{isSpinning ? 'Đang quay...' : 'Quay 1 lần'}</span>
            </button>

            <button
              onClick={() => handleBatchSimulation(50)}
              disabled={isSpinning}
              className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 flex items-center gap-1 transition-all"
              title="Mô phỏng tức thì 50 lần quay"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>+50</span>
            </button>

            <button
              onClick={() => handleBatchSimulation(500)}
              disabled={isSpinning}
              className="py-2.5 px-3 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 flex items-center gap-1 transition-all"
              title="Mô phỏng nhanh 500 lần để quan sát Luật số lớn"
            >
              <FastForward className="w-3.5 h-3.5" />
              <span>+500</span>
            </button>
          </div>

          {/* Last Result Badge */}
          {lastResultSector && (
            <div className="text-center animate-fadeIn">
              <span className="text-[11px] text-slate-400 block mb-0.5">Kết quả lần quay mới nhất:</span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold shadow-sm"
                style={{ backgroundColor: lastResultSector.color, color: lastResultSector.textColor }}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Trúng ô: {lastResultSector.label}</span>
              </span>
            </div>
          )}
        </div>

        {/* Right: Comparative Frequency Bars (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-200">
                Bảng Thống Kê Tần Số Thực Nghiệm vs. Lý Thuyết
              </h4>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              k / N (%)
            </span>
          </div>

          {/* Bars List */}
          <div className="space-y-3.5">
            {activePreset.sectors.map(sec => {
              const count = counts[sec.id] || 0;
              const experimentalPercent = totalSpins > 0 ? (count / totalSpins) * 100 : 0;
              const theoreticalPercent = sec.percent;
              const diff = totalSpins > 0 ? experimentalPercent - theoreticalPercent : 0;

              return (
                <div key={sec.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: sec.color }}></span>
                      <span className="font-bold text-slate-200">{sec.label}</span>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-[11px]">
                      <span className="text-slate-400">
                        {count} lần
                      </span>
                      <span className="font-bold text-emerald-300 w-16 text-right">
                        {experimentalPercent.toFixed(1)}%
                      </span>
                      <span className="text-slate-500 text-[10px] w-16 text-right">
                        (LT: {Math.round(theoreticalPercent)}%)
                      </span>
                    </div>
                  </div>

                  {/* Dual Bar Graphic */}
                  <div className="relative h-5 bg-slate-800/80 rounded-lg overflow-hidden flex items-center px-1">
                    {/* Experimental Progress Bar */}
                    <div
                      className={`h-3.5 rounded transition-all duration-300 ${sec.bgBarColor}`}
                      style={{ width: `${Math.min(100, Math.max(1, experimentalPercent))}%` }}
                    />

                    {/* Theoretical Target Indicator Line */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xs z-10"
                      style={{ left: `${theoreticalPercent}%` }}
                      title={`Vạch lý thuyết: ${Math.round(theoreticalPercent)}%`}
                    />
                  </div>

                  {/* Convergence Note */}
                  {totalSpins > 0 && (
                    <div className="flex justify-end text-[10px] font-mono">
                      <span className={Math.abs(diff) < 2 ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                        Độ lệch: {diff >= 0 ? `+${diff.toFixed(1)}%` : `${diff.toFixed(1)}%`}
                        {Math.abs(diff) < 2 && ' ✓ Rất sát lý thuyết'}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Guide Legend */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-2 rounded bg-rose-500 inline-block"></span>
              <span>Cột màu: Thực nghiệm</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-3 border-l-2 border-white inline-block"></span>
              <span>Vạch trắng: Xác suất lý thuyết</span>
            </div>
            <span className="text-emerald-400/90 font-medium">
              💡 N càng lớn $\rightarrow$ Cột càng chạm vạch
            </span>
          </div>
        </div>
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
                Bố đố con • Thử thách xác suất #{activeChallengeIdx + 1}
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
