import React, { useState } from 'react';
import { StorageService } from '../../services/storageService';
import { DailyProgressSummary, ParentGoal, RewardMilestone } from '../../types/parent';
import { dinnerConversationPromptsList, initialEncouragementNotes } from '../../data/mockParentData';
import { 
  HeartHandshake, Utensils, Award, Target, Flame, 
  Clock, CheckCircle2, AlertTriangle, Sparkles, Plus, 
  Send, Check, Smile, ChevronRight
} from 'lucide-react';

interface ParentDashboardProps {
  onSwitchToLesson: (lessonId: string) => void;
}

export const ParentDashboard: React.FC<ParentDashboardProps> = ({ onSwitchToLesson }) => {
  const [dailyProgress] = useState<DailyProgressSummary>(() => StorageService.getDailyProgress());
  const [rewards, setRewards] = useState<RewardMilestone[]>(() => StorageService.getRewardMilestones());
  const [goals] = useState<ParentGoal[]>(() => StorageService.getParentGoals());
  const [activeTab, setActiveTab] = useState<'feed' | 'dinner_prompts' | 'rewards'>('feed');

  // Notes state
  const [notes, setNotes] = useState(initialEncouragementNotes);
  const [newNoteText, setNewNoteText] = useState('');
  const [noteAuthor, setNoteAuthor] = useState<'Mẹ' | 'Bố'>('Mẹ');

  // New reward modal state
  const [showAddReward, setShowAddReward] = useState(false);
  const [newRewardTitle, setNewRewardTitle] = useState('');
  const [newRewardOffer, setNewRewardOffer] = useState('');

  const handleToggleReward = (id: string) => {
    const updated = rewards.map(r => {
      if (r.id === id) {
        return {
          ...r,
          isAchieved: !r.isAchieved,
          achievedAt: !r.isAchieved ? 'Vừa trao thưởng' : undefined
        };
      }
      return r;
    });
    setRewards(updated);
    StorageService.saveRewardMilestones(updated);
  };

  const handleAddReward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRewardTitle.trim() || !newRewardOffer.trim()) return;

    const newReward: RewardMilestone = {
      id: `rm-${Date.now()}`,
      title: newRewardTitle,
      description: 'Mục tiêu phụ huynh và con đã thỏa thuận',
      targetCount: 3,
      currentCount: 0,
      unit: 'nỗ lực',
      rewardOffer: newRewardOffer,
      isAchieved: false,
      icon: 'Gift'
    };

    const updated = [...rewards, newReward];
    setRewards(updated);
    StorageService.saveRewardMilestones(updated);
    setNewRewardTitle('');
    setNewRewardOffer('');
    setShowAddReward(false);
  };

  const handleSendNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    const newNote = {
      id: `note-${Date.now()}`,
      author: noteAuthor,
      date: 'Hôm nay, ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      message: newNoteText,
      sticker: '💖',
      readByStudent: false
    };

    setNotes([newNote, ...notes]);
    setNewNoteText('');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Banner for Parents */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 p-6 sm:p-8 text-white shadow-lg shadow-indigo-900/10">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-300" />
            <span>Sổ Tay Đồng Hành Cùng Con Lớp 7</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Gắn Kết Bàn Học & Bữa Cơm Gia Đình
          </h1>
          <p className="mt-2 text-indigo-100 text-sm sm:text-base leading-relaxed">
            Giúp phụ huynh nắm bắt chính xác những gì con đã học trong ngày, nhận diện điểm con còn vấp ngã, 
            và gợi ý những câu chuyện tự nhiên bên mâm cơm mà không biến thành bài kiểm tra căng thẳng.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-8 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      </div>

      {/* Parent Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200/90 pb-2">
        <button
          onClick={() => setActiveTab('feed')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'feed'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Nhật Ký Tiến Độ Hôm Nay</span>
        </button>

        <button
          onClick={() => setActiveTab('dinner_prompts')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'dinner_prompts'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Utensils className="w-4 h-4" />
          <span>Gợi Ý Trò Chuyện Bữa Cơm</span>
          <span className="text-[10px] bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.2 rounded-full">
            AI gợi ý
          </span>
        </button>

        <button
          onClick={() => setActiveTab('rewards')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'rewards'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Mục Tiêu & Thưởng Động Viên</span>
        </button>
      </div>

      {/* TAB 1: DAILY PROGRESS FEED */}
      {activeTab === 'feed' && (
        <div className="space-y-6">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 block">Thời gian tự học</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-extrabold text-slate-900">{dailyProgress.totalMinutesSpent}</span>
                <span className="text-xs text-slate-500">phút</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3 h-3" /> Đạt chỉ tiêu tự học tối thiểu
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 block">Độ chính xác trung bình</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-extrabold text-emerald-700">{dailyProgress.overallAccuracy}%</span>
              </div>
              <span className="text-[11px] text-emerald-600 font-medium mt-1 block">
                Nắm chắc trên 80% kiến thức
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 block">Số bài học đã xem</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-extrabold text-indigo-700">{dailyProgress.lessonsCovered.length}</span>
                <span className="text-xs text-slate-500">bài</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Toán 7 & KHTN 7
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm">
              <span className="text-xs font-semibold text-slate-500 block">Chuỗi học tập</span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl font-extrabold text-amber-600">3</span>
                <span className="text-xs text-slate-500">ngày liên tiếp</span>
              </div>
              <span className="text-[11px] text-amber-700 font-medium flex items-center gap-1 mt-1">
                <Flame className="w-3 h-3 text-amber-500 fill-amber-500" /> Đang duy trì thói quen tốt
              </span>
            </div>
          </div>

          {/* Lessons Covered List */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span>Tiến Độ Từng Bài Học Hôm Nay ({dailyProgress.date})</span>
              </h3>
            </div>

            <div className="divide-y divide-slate-100">
              {dailyProgress.lessonsCovered.map((item) => (
                <div key={item.lessonId} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {item.subjectName}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800">
                        {item.lessonTitle}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-500 block">
                      Hoàn thành lúc: {item.completedAt}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Độ chính xác</span>
                      <span className="text-sm font-extrabold text-emerald-700">{item.accuracyRate}%</span>
                    </div>

                    <button
                      onClick={() => onSwitchToLesson(item.lessonId)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 transition-colors"
                    >
                      <span>Xem chi tiết</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weak Concepts Detected Card */}
          <div className="bg-amber-50/60 rounded-2xl border border-amber-200/80 p-5 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <span>Điểm Con Còn Lúng Túng Cần Phụ Huynh Lưu Ý</span>
              </div>
              <span className="text-xs bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded-full font-bold">
                {dailyProgress.weakConceptsSummary.length} điểm chú ý
              </span>
            </div>

            <p className="text-xs text-amber-900/80">
              Hệ thống tự động phát hiện qua những câu con trả lời sai hoặc cần nhiều gợi ý. Bố mẹ không nên la mắng hay tạo áp lực, mà hãy áp dụng lời khuyên nhẹ nhàng bên dưới:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {dailyProgress.weakConceptsSummary.map((weak, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 border border-amber-200 shadow-sm space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                      {weak.subject}
                    </span>
                    <span className="text-[11px] text-amber-700 font-semibold">Cần củng cố nhẹ</span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900">
                    {weak.concept}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Nguyên nhân:</strong> {weak.explanationForParent}
                  </p>

                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed">
                    <span className="font-bold text-emerald-950 block mb-0.5">💡 Cách bố mẹ gợi ý cho con:</span>
                    {weak.suggestedHelp}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Encouragement Notes Section */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Smile className="w-5 h-5 text-rose-500" />
              <span>Gửi Lời Động Viên Đến Góc Tự Học Của Con</span>
            </h3>

            {/* Note form */}
            <form onSubmit={handleSendNote} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-600">Lời nhắn từ:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setNoteAuthor('Mẹ')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                      noteAuthor === 'Mẹ' ? 'bg-rose-50 border-rose-300 text-rose-700' : 'bg-slate-50 text-slate-600'
                    }`}
                  >
                    👩 Mẹ
                  </button>
                  <button
                    type="button"
                    onClick={() => setNoteAuthor('Bố')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                      noteAuthor === 'Bố' ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-slate-50 text-slate-600'
                    }`}
                  >
                    👨 Bố
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  placeholder="Ví dụ: Hôm nay con tự giác học mẹ rất vui! Tối nay mẹ nấu canh chua con thích nhé..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!newNoteText.trim()}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi lời khen</span>
                </button>
              </div>
            </form>

            {/* Notes stream */}
            <div className="space-y-2.5 pt-2">
              {notes.map(note => (
                <div
                  key={note.id}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-xs"
                >
                  <span className="text-xl">{note.sticker}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-1">
                      <span>{note.author} gửi • {note.date}</span>
                      <span className={note.readByStudent ? 'text-emerald-600' : 'text-amber-600'}>
                        {note.readByStudent ? '✓ Con đã xem' : '○ Con chưa xem'}
                      </span>
                    </div>
                    <p className="text-slate-800 text-xs sm:text-sm font-medium">{note.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DINNER CONVERSATION PROMPTS */}
      {activeTab === 'dinner_prompts' && (
        <div className="space-y-6">
          <div className="bg-indigo-50/70 rounded-2xl border border-indigo-200/70 p-5 text-xs sm:text-sm text-indigo-900 leading-relaxed space-y-1">
            <h3 className="font-bold text-indigo-950 flex items-center gap-2 text-base">
              <Utensils className="w-5 h-5 text-indigo-600" />
              <span>Nghệ Thuật Trò Chuyện Bữa Cơm (Dinner-Table Socratic Review)</span>
            </h3>
            <p className="text-indigo-800/90">
              Không cần cầm sách vở kiểm tra bài cũ! Trẻ lớp 7 bước vào tuổi dậy thì rất dễ phòng thủ nếu bị hỏi kiểu "hôm nay được mấy điểm". 
              Hãy dùng các câu hỏi gợi mở dưới đây như những câu chuyện phiếm ấm cúng bên mâm cơm gia đình.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {dinnerConversationPromptsList.map((prompt) => (
              <div
                key={prompt.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4 hover:border-indigo-300 transition-all"
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full">
                      {prompt.subjectName}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {prompt.lessonTitle}
                    </span>
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    prompt.category === 'khởi_động'
                      ? 'bg-sky-50 text-sky-700 border-sky-200'
                      : prompt.category === 'đào_sâu'
                      ? 'bg-purple-50 text-purple-700 border-purple-200'
                      : 'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {prompt.category === 'khởi_động' && 'Câu hỏi khởi động vui vẻ'}
                    {prompt.category === 'đào_sâu' && 'Câu hỏi đào sâu tư duy'}
                    {prompt.category === 'gắn_liền_thực_tế' && 'Gắn liền thực tế đời sống'}
                  </span>
                </div>

                {/* The Prompt Text */}
                <div className="bg-gradient-to-r from-amber-50/90 to-orange-50/90 border border-amber-200/90 rounded-2xl p-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                    💬 Câu Bố Mẹ Có Thể Hỏi Con Tự Nhiên:
                  </span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 italic leading-snug">
                    "{prompt.promptText}"
                  </p>
                </div>

                {/* Context for parent */}
                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-800">Mục đích câu hỏi: </span>
                  {prompt.whyThisQuestion}
                </div>

                {/* How to react guide */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                    <span className="font-bold text-emerald-800 block flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Nếu con trả lời lưu loát:
                    </span>
                    <p className="leading-relaxed">{prompt.howToReact.ifChildKnows}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-200/80 text-xs text-sky-950 space-y-1">
                    <span className="font-bold text-sky-800 block flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      Nếu con còn ngập ngừng:
                    </span>
                    <p className="leading-relaxed">{prompt.howToReact.ifChildHesitant}</p>
                  </div>
                </div>

                {/* Expected child response */}
                <div className="text-xs text-slate-500 pt-1">
                  <span className="font-semibold text-slate-700">Câu trả lời mong đợi từ con: </span>
                  <em>"{prompt.sampleChildAnswer}"</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: REWARD MILESTONES & GOALS */}
      {activeTab === 'rewards' && (
        <div className="space-y-6">
          {/* Active Goals */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span>Mục Tiêu Học Tập Tuần Này Của Con</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map(g => {
                const percent = Math.min(100, Math.round((g.currentValue / g.targetValue) * 100));
                return (
                  <div key={g.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-800">{g.title}</h4>
                      <span className="text-xs font-bold text-indigo-700">{g.currentValue} / {g.targetValue}</span>
                    </div>

                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full transition-all duration-300"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <span className="text-[11px] text-slate-500 block">
                      Thời hạn đến: {g.endDate} • Tiến độ: {percent}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reward Milestones */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Hộp Quà & Phần Thưởng Động Viên</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Phần thưởng tinh thần và trải nghiệm gia đình giúp con có thêm động lực học tập
                </p>
              </div>

              <button
                onClick={() => setShowAddReward(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Thêm phần thưởng mới</span>
              </button>
            </div>

            {/* Reward Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rewards.map(reward => (
                <div
                  key={reward.id}
                  className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                    reward.isAchieved
                      ? 'bg-amber-50/60 border-amber-300 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                        🎁
                      </span>
                      {reward.isAchieved ? (
                        <span className="text-[11px] font-bold bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check className="w-3 h-3" /> Đã trao thưởng
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-slate-500">
                          Đang phấn đấu
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-sm text-slate-900">{reward.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{reward.description}</p>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-amber-900">
                      🎁 Phần thưởng: {reward.rewardOffer}
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleReward(reward.id)}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition-all border ${
                      reward.isAchieved
                        ? 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200'
                        : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
                    }`}
                  >
                    {reward.isAchieved ? 'Thu hồi trao thưởng' : 'Xác nhận con đã hoàn thành 🎉'}
                  </button>
                </div>
              ))}
            </div>

            {/* Modal for adding custom reward */}
            {showAddReward && (
              <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl border border-slate-200 max-w-md w-full p-6 shadow-xl space-y-4">
                  <h4 className="font-bold text-base text-slate-900">Thêm Phần Thưởng / Thỏa Thuận Mới</h4>
                  <form onSubmit={handleAddReward} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Tên mục tiêu / Cột mốc
                      </label>
                      <input
                        type="text"
                        value={newRewardTitle}
                        onChange={(e) => setNewRewardTitle(e.target.value)}
                        placeholder="Ví dụ: Giữ chuỗi 7 ngày tự học môn Toán"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">
                        Phần thưởng bố mẹ sẽ dành cho con
                      </label>
                      <input
                        type="text"
                        value={newRewardOffer}
                        onChange={(e) => setNewRewardOffer(e.target.value)}
                        placeholder="Ví dụ: Được chọn bộ lego yêu thích / Đi bơi cùng bố"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowAddReward(false)}
                        className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                      >
                        Hủy
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
                      >
                        Lưu phần thưởng
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
