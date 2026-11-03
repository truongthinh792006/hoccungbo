import React, { useState, useMemo } from 'react';
import { 
  PieChart, Sliders, Sparkles, HelpCircle, 
  ChevronDown, ChevronUp, RotateCcw, Calculator
} from 'lucide-react';

interface PieItem {
  id: string;
  name: string;
  value: number; // Raw value / frequency (e.g. hours or students)
  color: string;
  unit: string;
}

interface PiePreset {
  id: string;
  title: string;
  subtitle: string;
  totalUnit: string;
  items: PieItem[];
}

const PRESETS: PiePreset[] = [
  {
    id: 'student-24h',
    title: 'Phân bổ 24 Giờ của Học Sinh',
    subtitle: 'Cơ cấu thời gian biểu sinh hoạt trong 1 ngày (Tổng = 24 giờ)',
    totalUnit: 'giờ',
    items: [
      { id: 'study', name: 'Học tập & Ở trường', value: 8.4, color: '#3b82f6', unit: 'giờ' }, // 35%
      { id: 'sleep', name: 'Giấc ngủ ban đêm', value: 8.0, color: '#8b5cf6', unit: 'giờ' }, // 33.3%
      { id: 'play', name: 'Thể thao & Giải trí', value: 4.8, color: '#10b981', unit: 'giờ' }, // 20%
      { id: 'personal', name: 'Ăn uống & Sinh hoạt', value: 2.8, color: '#f59e0b', unit: 'giờ' } // 11.7%
    ]
  },
  {
    id: 'sports-survey',
    title: 'Khảo Sát Môn Thể Thao Yêu Thích',
    subtitle: 'Thống kê nguyện vọng 40 học sinh lớp 7A (Tổng = 40 bạn)',
    totalUnit: 'bạn',
    items: [
      { id: 'football', name: 'Bóng đá', value: 16, color: '#ef4444', unit: 'bạn' }, // 40%
      { id: 'swim', name: 'Bơi lội', value: 10, color: '#06b6d4', unit: 'bạn' }, // 25%
      { id: 'badminton', name: 'Cầu lông', value: 8, color: '#10b981', unit: 'bạn' }, // 20%
      { id: 'basketball', name: 'Bóng rổ', value: 6, color: '#f97316', unit: 'bạn' } // 15%
    ]
  },
  {
    id: 'monthly-budget',
    title: 'Cơ Cấu Chi Tiêu Tiết Kiệm',
    subtitle: 'Kế hoạch phân bổ tiền tiêu vặt tháng (Tổng = 500 nghìn đồng)',
    totalUnit: 'nghìn',
    items: [
      { id: 'books', name: 'Mua sách vở, đồ dùng', value: 200, color: '#6366f1', unit: 'nghìn' }, // 40%
      { id: 'save', name: 'Heo đất tiết kiệm', value: 150, color: '#10b981', unit: 'nghìn' }, // 30%
      { id: 'breakfast', name: 'Ăn sáng & Nước uống', value: 100, color: '#f59e0b', unit: 'nghìn' }, // 20%
      { id: 'emergency', name: 'Quỹ dự phòng', value: 50, color: '#ec4899', unit: 'nghìn' } // 10%
    ]
  }
];

export const PieChartInteractiveBuilder: React.FC = () => {
  const [activePresetId, setActivePresetId] = useState<string>(PRESETS[0].id);
  const [customItems, setCustomItems] = useState<PieItem[]>(PRESETS[0].items);
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [hoveredSliceId, setHoveredSliceId] = useState<string | null>(null);

  // Challenge section state
  const [activeChallengeIdx, setActiveChallengeIdx] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  // Active items currently driving the chart
  const activeItems = isCustomMode ? customItems : (
    PRESETS.find(p => p.id === activePresetId)?.items || PRESETS[0].items
  );

  const totalValue = useMemo(() => {
    return activeItems.reduce((sum, item) => sum + Math.max(0.1, item.value), 0);
  }, [activeItems]);

  // Compute computed angles, percentages, and SVG geometry
  const computedSlices = useMemo(() => {
    let currentAngle = 0;
    return activeItems.map(item => {
      const val = Math.max(0.1, item.value);
      const percent = (val / totalValue) * 100;
      const angle = (percent / 100) * 360; // alpha = p * 3.6
      const startAngle = currentAngle;
      const endAngle = currentAngle + angle;
      const midAngle = startAngle + angle / 2;
      currentAngle = endAngle;

      // Calculate exploded offset (8px along midAngle vector)
      const radMid = ((midAngle - 90) * Math.PI) / 180;
      const offsetX = 8 * Math.cos(radMid);
      const offsetY = 8 * Math.sin(radMid);

      return {
        ...item,
        percent,
        angle,
        startAngle,
        endAngle,
        midAngle,
        offsetX,
        offsetY
      };
    });
  }, [activeItems, totalValue]);

  // Helper to map angle to Cartesian point on circle (cx: 160, cy: 160, r: 120)
  const polarToCartesian = (angleDeg: number, radius = 120) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: 160 + radius * Math.cos(rad),
      y: 160 + radius * Math.sin(rad)
    };
  };

  // Preset switch
  const handleSelectPreset = (preset: PiePreset) => {
    setIsCustomMode(false);
    setActivePresetId(preset.id);
    setCustomItems(preset.items);
    setHoveredSliceId(null);
  };

  // Slider update in customizer mode
  const handleUpdateItemValue = (id: string, newVal: number) => {
    setIsCustomMode(true);
    setCustomItems(prev => prev.map(item => 
      item.id === id ? { ...item, value: Math.max(0.1, newVal) } : item
    ));
  };

  const challenges = [
    {
      q: "Nếu một hình quạt tròn có góc ở tâm là 90° (góc vuông), thì nó chiếm bao nhiêu % chiếc bánh tròn?",
      a: "Chiếm đúng 25% (tức 1/4 hình tròn)! Công thức: p% = (90° / 360°) × 100% = 25%. Bốn góc vuông 90° cộng lại vừa khít 360° tương ứng 100%.",
      tip: "Bố hãy thử chỉnh một mục trong bảng đạt đúng góc 90° để con nhìn thấy hình quạt vuông góc trực quan nhé!"
    },
    {
      q: "Một hình quạt tròn chiếm đúng 50% tổng thể thì đường ranh giới của nó là loại đường gì trong hình học?",
      a: "Đó chính là ĐƯỜNG KÍNH của hình tròn! Đường kính chia hình tròn thành 2 nửa bằng nhau, mỗi nửa có góc ở tâm là góc bẹt 180° = 50% × 3.6°.",
      tip: "Liên hệ ngay với góc bẹt 180° mà con đã học ở Chương III."
    },
    {
      q: "Tại sao khi vẽ biểu đồ quạt tròn trên giấy kiểm tra, người ta bắt buộc phải dùng Thước Đo Góc (thước đo độ)?",
      a: "Vì mắt thường không thể áng chừng chính xác các tỉ lệ như 18% hay 32%. Ta phải nhân tỉ lệ phần trăm với 3,6° để đổi ra số đo góc ở tâm chuẩn, sau đó dùng thước đo độ kẻ chuẩn từng vạch góc.",
      tip: "Công thức vàng con cần ghi nhớ: Số độ góc ở tâm = % nhân 3,6°."
    }
  ];

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-800 space-y-5">
      {/* Top Header: Title & Pedagogical Formula Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              <PieChart className="w-5 h-5" />
            </span>
            <h3 className="font-extrabold text-base sm:text-lg text-white tracking-tight">
              Mô Phỏng Biểu Đồ Hình Quạt Tròn
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Khám phá mối liên hệ mật thiết giữa: <strong className="text-blue-400">Tỉ lệ phần trăm ($p\%$)</strong> và <strong className="text-amber-400">Góc ở tâm ($\alpha = p \times 3,6^\circ$)</strong>
          </p>
        </div>

        {/* Core Formula Badge */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-center font-mono text-xs">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
              Công thức góc ở tâm
            </span>
            <span className="text-amber-400 font-bold">
              $\alpha^\circ = p\% \times 3,6^\circ$
            </span>
          </div>

          {isCustomMode && (
            <button
              onClick={() => {
                const def = PRESETS.find(p => p.id === activePresetId) || PRESETS[0];
                handleSelectPreset(def);
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              title="Đặt lại số liệu ban đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Preset Selector */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap mr-1 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Bộ dữ liệu mẫu:
        </span>
        {PRESETS.map(preset => {
          const isSelected = !isCustomMode && activePresetId === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {preset.title}
            </button>
          );
        })}

        <button
          onClick={() => setIsCustomMode(true)}
          className={`px-3 py-1 rounded-xl text-xs font-bold transition-all whitespace-nowrap border flex items-center gap-1.5 ${
            isCustomMode
              ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
              : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
          }`}
        >
          <Sliders className="w-3 h-3" />
          <span>Tự chỉnh số liệu</span>
        </button>
      </div>

      {/* Main Grid: SVG Interactive Pie (Left) + Reactive Math Table & Sliders (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive SVG Pie Chart (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-2xl">
              {/* Outer boundary circle rim */}
              <circle cx="160" cy="160" r="132" fill="#0f172a" stroke="#1e293b" strokeWidth="4" />

              {/* Pie Sectors */}
              {computedSlices.map(slice => {
                const isHovered = hoveredSliceId === slice.id;
                const start = polarToCartesian(slice.startAngle, 120);
                const end = polarToCartesian(slice.endAngle, 120);
                const largeArc = slice.angle > 180 ? 1 : 0;
                const pathData = `M 160 160 L ${start.x} ${start.y} A 120 120 0 ${largeArc} 1 ${end.x} ${end.y} Z`;

                // Text coordinates for slice label
                const textPos = polarToCartesian(slice.midAngle, 75);

                return (
                  <g
                    key={slice.id}
                    onMouseEnter={() => setHoveredSliceId(slice.id)}
                    onMouseLeave={() => setHoveredSliceId(null)}
                    onClick={() => setHoveredSliceId(hoveredSliceId === slice.id ? null : slice.id)}
                    className="cursor-pointer transition-transform duration-200"
                    style={{
                      transform: isHovered 
                        ? `translate(${slice.offsetX}px, ${slice.offsetY}px)` 
                        : 'translate(0px, 0px)'
                    }}
                  >
                    {/* Sector Slice */}
                    <path
                      d={pathData}
                      fill={slice.color}
                      stroke="#0f172a"
                      strokeWidth={isHovered ? '3' : '2'}
                      opacity={isHovered ? 1 : 0.9}
                      className="transition-all"
                      filter={isHovered ? 'drop-shadow(0 0 8px rgba(255,255,255,0.4))' : undefined}
                    />

                    {/* Percentage text inside slice */}
                    {slice.percent >= 8 && (
                      <g className="select-none pointer-events-none">
                        <text
                          x={textPos.x}
                          y={textPos.y - 3}
                          fill="#ffffff"
                          fontSize="12"
                          fontWeight="extrabold"
                          textAnchor="middle"
                          className="drop-shadow"
                        >
                          {slice.percent.toFixed(1)}%
                        </text>
                        <text
                          x={textPos.x}
                          y={textPos.y + 11}
                          fill="#ffffff"
                          fontSize="10"
                          fontWeight="bold"
                          textAnchor="middle"
                          opacity="0.9"
                          className="drop-shadow"
                        >
                          {Math.round(slice.angle)}°
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Center Pivot Hub */}
              <circle cx="160" cy="160" r="14" fill="#0f172a" stroke="#ffffff" strokeWidth="2.5" />
              <circle cx="160" cy="160" r="5" fill="#38bdf8" />
            </svg>
          </div>

          {/* Active Highlighted Slice Banner */}
          {hoveredSliceId ? (() => {
            const active = computedSlices.find(s => s.id === hoveredSliceId);
            if (!active) return null;
            return (
              <div
                className="w-full text-center py-2 px-3 rounded-2xl border text-xs animate-fadeIn shadow-sm"
                style={{ backgroundColor: `${active.color}20`, borderColor: active.color }}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: active.color }}></span>
                  <span className="font-extrabold text-white">{active.name}:</span>
                  <span className="font-mono text-emerald-300 font-bold">{active.percent.toFixed(1)}%</span>
                  <span className="text-slate-300">ứng với góc</span>
                  <span className="font-mono text-amber-300 font-bold">{active.angle.toFixed(1)}°</span>
                </div>
              </div>
            );
          })() : (
            <p className="text-[11px] text-slate-400 italic text-center">
              💡 Chạm vào từng lát bánh để xem lát tách ra và soi số đo góc ở tâm
            </p>
          )}
        </div>

        {/* Right: Reactive Math Table & Dynamic Sliders (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-400" />
              <h4 className="font-extrabold text-xs sm:text-sm text-slate-200">
                Bảng Đối Chiếu Số Liệu - Tỉ Lệ - Góc Ở Tâm
              </h4>
            </div>
            <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              $\sum = 100\%$ • $360^\circ$
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] text-slate-400 uppercase tracking-wider">
                  <th className="py-2 px-2 font-bold">Hạng mục</th>
                  <th className="py-2 px-2 text-right font-bold">Số lượng</th>
                  <th className="py-2 px-2 text-right font-bold">Tỉ lệ (%)</th>
                  <th className="py-2 px-2 text-right font-bold text-amber-300">Góc ở tâm ($\alpha$)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {computedSlices.map(slice => {
                  const isHovered = hoveredSliceId === slice.id;
                  return (
                    <tr
                      key={slice.id}
                      onMouseEnter={() => setHoveredSliceId(slice.id)}
                      onMouseLeave={() => setHoveredSliceId(null)}
                      className={`transition-colors cursor-pointer ${
                        isHovered ? 'bg-slate-800/80' : 'hover:bg-slate-800/40'
                      }`}
                    >
                      <td className="py-2.5 px-2 flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: slice.color }}></span>
                        <span className="font-bold text-slate-200">{slice.name}</span>
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono text-slate-300">
                        {slice.value} {slice.unit}
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono font-bold text-emerald-400">
                        {slice.percent.toFixed(1)}%
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono font-bold text-amber-400">
                        {slice.angle.toFixed(1)}°
                      </td>
                    </tr>
                  );
                })}

                {/* Summary Row */}
                <tr className="bg-slate-900/90 font-extrabold border-t-2 border-slate-700 text-white">
                  <td className="py-2.5 px-2 uppercase tracking-wide text-slate-400">
                    Tổng thể
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono text-slate-200">
                    {totalValue.toFixed(1)}
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono text-emerald-300">
                    100.0%
                  </td>
                  <td className="py-2.5 px-2 text-right font-mono text-amber-300">
                    360.0°
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive Sliders (When in Customizer Mode) */}
          {isCustomMode && (
            <div className="pt-3 border-t border-slate-800 space-y-2.5 animate-fadeIn">
              <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Sliders className="w-3.5 h-3.5" /> Kéo thanh trượt để thay đổi số liệu từng phần:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {customItems.map(item => (
                  <div key={item.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                      <span className="truncate">{item.name}</span>
                      <span className="font-mono text-white">{item.value}</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="0.5"
                      value={item.value}
                      onChange={e => handleUpdateItemValue(item.id, parseFloat(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
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
                Bố đố con • Thử thách hình quạt tròn #{activeChallengeIdx + 1}
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
                  setShowAnswer(false);
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
            onClick={() => setShowAnswer(!showAnswer)}
            className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>{showAnswer ? 'Ẩn đáp án gợi ý' : 'Bố mẹ bấm xem đáp án gợi mở'}</span>
            {showAnswer ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showAnswer && (
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
