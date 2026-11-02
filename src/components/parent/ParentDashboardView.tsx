import React from 'react';
import { useApp } from '../../context/AppContext';
import { MasteryCard } from './MasteryCard';
import { ConversationPrompts } from './ConversationPrompts';
import { SyllabusTimeline } from './SyllabusTimeline';
import { HeartHandshake, User } from 'lucide-react';

export const ParentDashboardView: React.FC = () => {
  const { setRole } = useApp();

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-800 p-6 sm:p-7 text-white shadow-lg shadow-indigo-950/10">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-2xl space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-indigo-100">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-300" />
              <span>Góc Đồng Hành Cùng Con • Toán 7 Kết Nối Tri Thức</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Bảng Theo Dõi & Gợi Ý Trò Chuyện Bữa Cơm
            </h1>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Giúp cha mẹ nắm rõ tiến độ làm chủ kiến thức của con, nhận diện nhanh các điểm con còn lúng túng, 
              và gợi ý câu hỏi tự nhiên không tạo áp lực học hành.
            </p>
          </div>

          <button
            onClick={() => setRole('STUDENT')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-indigo-900 font-bold text-xs shadow-md hover:bg-indigo-50 transition-all shrink-0 self-start md:self-auto"
          >
            <User className="w-4 h-4 text-emerald-600" />
            <span>Vào Phòng Tự Học Của Con</span>
          </button>
        </div>
      </div>

      {/* 1. Overview Stat Cards */}
      <MasteryCard />

      {/* 2. Family Engagement Widget */}
      <ConversationPrompts />

      {/* 3. Syllabus Tracker Timeline */}
      <SyllabusTimeline />
    </div>
  );
};
