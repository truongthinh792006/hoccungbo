export interface DailyProgressSummary {
  date: string;
  lessonsCovered: {
    lessonId: string;
    subjectName: string;
    lessonTitle: string;
    accuracyRate: number;
    completedAt: string;
    status: 'completed' | 'in_progress';
  }[];
  totalMinutesSpent: number;
  overallAccuracy: number;
  weakConceptsSummary: {
    concept: string;
    subject: string;
    explanationForParent: string;
    suggestedHelp: string;
  }[];
}

export interface DinnerConversationPrompt {
  id: string;
  lessonTitle: string;
  subjectName: string;
  category: 'khởi_động' | 'đào_sâu' | 'gắn_liền_thực_tế';
  promptText: string;
  whyThisQuestion: string;
  howToReact: {
    ifChildKnows: string;
    ifChildHesitant: string;
  };
  sampleChildAnswer: string;
}

export interface RewardMilestone {
  id: string;
  title: string;
  description: string;
  targetCount: number; // e.g. 5 lessons or 85% accuracy
  currentCount: number;
  unit: string; // "bài học", "ngày liên tiếp", "% chính xác"
  rewardOffer: string; // e.g. "Cùng bố mẹ đi xem phim cuối tuần", "Được chọn thực đơn tối thứ Bảy"
  isAchieved: boolean;
  achievedAt?: string;
  icon: string;
}

export interface ParentGoal {
  id: string;
  title: string;
  category: 'weekly_lessons' | 'accuracy_target' | 'study_streak';
  targetValue: number;
  currentValue: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'expired';
}

export interface ParentEncouragementNote {
  id: string;
  author: 'Mẹ' | 'Bố';
  date: string;
  message: string;
  sticker: string;
  readByStudent: boolean;
}
