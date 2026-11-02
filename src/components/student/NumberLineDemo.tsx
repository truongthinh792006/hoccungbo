import React, { useState } from 'react';
import { NumberLinePoint } from '../../types/curriculum';
import { MathText } from '../common/MathText';
import { Compass, ArrowLeftRight } from 'lucide-react';

interface NumberLineDemoProps {
  points?: NumberLinePoint[];
}

export const NumberLineDemo: React.FC<NumberLineDemoProps> = ({ points = [] }) => {
  const [selectedPointId, setSelectedPointId] = useState<string>('p-neg-3-4');

  const selectedPoint = points.find(p => p.id === selectedPointId) || points[1] || null;
  const oppositePoint = selectedPoint?.isOppositeOf
    ? points.find(p => p.id === selectedPoint.isOppositeOf)
    : null;

  // Number line scale: range -2.5 to +2.5
  const minVal = -2.5;
  const maxVal = 2.5;
  const getPercent = (val: number) => {
    return ((val - minVal) / (maxVal - minVal)) * 100;
  };

  const handlePointClick = (p: NumberLinePoint) => {
    setSelectedPointId(p.id);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-4">
      {/* Title & Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Mô Hình Trực Quan: Trục Số Số Hữu Tỉ
            </h4>
            <p className="text-xs text-slate-500">
              Khám phá vị trí số âm, phân số, hỗn số & cặp số đối xứng qua gốc 0
            </p>
          </div>
        </div>

        <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200/80 w-fit">
          Tương tác trực quan
        </span>
      </div>

      {/* Main Visual Number Line Container */}
      <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-6">
        {/* SVG Number Line Rendering */}
        <div className="relative pt-6 pb-4 select-none">
          {/* Main Axis Line */}
          <div className="relative w-full h-1.5 bg-slate-400 rounded-full my-6">
            {/* Arrow on right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-slate-500 text-xs font-bold">
              ▶
            </div>
            {/* Left arrow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 text-slate-400 text-xs font-bold">
              ◀
            </div>

            {/* Major Integer Ticks: -2, -1, 0, 1, 2 */}
            {[-2, -1, 0, 1, 2].map(tick => {
              const pct = getPercent(tick);
              const isZero = tick === 0;
              return (
                <div
                  key={tick}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
                  style={{ left: `${pct}%` }}
                >
                  <div
                    className={`w-0.5 rounded-full ${
                      isZero ? 'h-6 bg-slate-900 ring-2 ring-emerald-400' : 'h-4 bg-slate-400'
                    }`}
                  />
                  <span
                    className={`text-xs mt-2 font-bold ${
                      isZero ? 'text-slate-900 text-sm' : 'text-slate-500'
                    }`}
                  >
                    {tick}
                  </span>
                </div>
              );
            })}

            {/* Interactive Points on the line */}
            {points.map(pt => {
              const pct = getPercent(pt.value);
              const isSelected = pt.id === selectedPointId;
              const isOpposite = pt.id === oppositePoint?.id;
              const isNeg = pt.value < 0;

              return (
                <button
                  key={pt.id}
                  onClick={() => handlePointClick(pt)}
                  className="group absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 transition-transform active:scale-90"
                  style={{ left: `${pct}%` }}
                  title={`${pt.label}: ${pt.description}`}
                >
                  {/* Point Marker */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                      isSelected
                        ? 'bg-indigo-600 border-white ring-4 ring-indigo-300 scale-125'
                        : isOpposite
                        ? 'bg-amber-500 border-white ring-4 ring-amber-200 scale-110'
                        : isNeg
                        ? 'bg-rose-500 border-white shadow-sm'
                        : pt.value === 0
                        ? 'bg-slate-900 border-white'
                        : 'bg-emerald-600 border-white shadow-sm'
                    }`}
                  />

                  {/* Label floating above */}
                  <div
                    className={`absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-lg text-[10px] font-bold whitespace-nowrap shadow-sm border transition-all ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-700 -translate-y-1'
                        : isOpposite
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : 'bg-white text-slate-700 border-slate-200 group-hover:border-slate-400'
                    }`}
                  >
                    {pt.label}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mirror Symmetry Visualization between Selected & Opposite */}
          {selectedPoint && oppositePoint && (
            <div className="pt-2 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200">
                <ArrowLeftRight className="w-3.5 h-3.5 text-amber-600" />
                <span>
                  Hai số đối nhau: <MathText formula={selectedPoint.displayFraction} /> và{' '}
                  <MathText formula={oppositePoint.displayFraction} /> cách đều điểm 0 đúng{' '}
                  {Math.abs(selectedPoint.value)} đơn vị
                </span>
              </span>
            </div>
          )}
        </div>

        {/* Selected Point Explanation Card */}
        {selectedPoint && (
          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs space-y-2 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                  📍
                </span>
                <span className="font-bold text-sm text-slate-900">
                  Điểm: <MathText formula={selectedPoint.displayFraction} />
                </span>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  selectedPoint.value < 0
                    ? 'bg-rose-50 text-rose-700 border border-rose-200'
                    : selectedPoint.value === 0
                    ? 'bg-slate-100 text-slate-700 border border-slate-300'
                    : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}
              >
                {selectedPoint.value < 0
                  ? 'Số hữu tỉ âm (Bên trái 0)'
                  : selectedPoint.value === 0
                  ? 'Gốc tọa độ'
                  : 'Số hữu tỉ dương (Bên phải 0)'}
              </span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {selectedPoint.description}
            </p>

            <div className="text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-slate-700 leading-relaxed">
              <strong>Vị trí chính xác:</strong> Giá trị số thập phân là <strong>{selectedPoint.value}</strong>. 
              {selectedPoint.value < 0 ? (
                <span> Nằm cách gốc 0 về phía chiều âm (bên trái).</span>
              ) : selectedPoint.value > 0 ? (
                <span> Nằm cách gốc 0 về phía chiều dương (bên phải).</span>
              ) : (
                <span> Là điểm ranh giới giữa tập số âm và số dương.</span>
              )}
            </div>
          </div>
        )}

        {/* Quick Click Chips */}
        <div>
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-2">
            Bấm nhanh để xem các điểm tiêu biểu:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {points.map(pt => (
              <button
                key={pt.id}
                onClick={() => handlePointClick(pt)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                  pt.id === selectedPointId
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {pt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
