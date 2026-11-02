import { QuizAttempt, StudentProgress } from '../types/study';
import { DailyProgressSummary, ParentGoal, RewardMilestone } from '../types/parent';
import { initialDailyProgress, initialParentGoals, initialRewardMilestones } from '../data/mockParentData';

const STORAGE_KEYS = {
  STUDENT_PROGRESS: 'donghanh7_student_progress',
  PARENT_PROGRESS: 'donghanh7_daily_progress',
  PARENT_GOALS: 'donghanh7_parent_goals',
  REWARDS: 'donghanh7_rewards',
  CHAT_HISTORY_PREFIX: 'donghanh7_chat_',
  SYNC_STATUS: 'donghanh7_sync_status'
};

const defaultStudentProgress: StudentProgress = {
  studentName: 'Minh Quân',
  grade: 7,
  activeLessonId: 'bai_1_tap_hop_cac_so_huu_ti',
  completedLessons: ['bai_1_tap_hop_cac_so_huu_ti'],
  totalStudyMinutes: 52,
  streakDays: 3,
  masteredCompetencyIds: ['tc-kntt-01', 'tc-kntt-02', 'tc-khtn-01'],
  recentAttempts: [],
  weakConceptLogs: [
    {
      id: 'weak-1',
      lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
      conceptTitle: 'So sánh số hữu tỉ âm',
      competencyId: 'tc-toan-03',
      errorCount: 2,
      lastOccurred: 'Hôm nay',
      note: 'Nhầm lẫn -9 < -10 khi so sánh phân số âm',
      status: 'needs_attention'
    },
    {
      id: 'weak-2',
      lessonId: 'khtn7-nguyen-tu-nguyen-to',
      conceptTitle: 'Khối lượng nguyên tử amu',
      competencyId: 'tc-khtn-02',
      errorCount: 1,
      lastOccurred: 'Hôm nay',
      note: 'Còn cộng cả khối lượng electron khi tính khối lượng',
      status: 'improving'
    }
  ]
};

export const StorageService = {
  getStudentProgress(): StudentProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STUDENT_PROGRESS);
      return data ? JSON.parse(data) : defaultStudentProgress;
    } catch {
      return defaultStudentProgress;
    }
  },

  saveStudentProgress(progress: StudentProgress): void {
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENT_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  },

  recordQuizAttempt(attempt: QuizAttempt): void {
    const progress = this.getStudentProgress();
    const existingIndex = progress.recentAttempts.findIndex(a => a.drillId === attempt.drillId);
    if (existingIndex >= 0) {
      progress.recentAttempts[existingIndex] = attempt;
    } else {
      progress.recentAttempts.push(attempt);
    }

    if (!progress.completedLessons.includes(attempt.lessonId)) {
      progress.completedLessons.push(attempt.lessonId);
    }

    this.saveStudentProgress(progress);
  },

  getDailyProgress(): DailyProgressSummary {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PARENT_PROGRESS);
      return data ? JSON.parse(data) : initialDailyProgress;
    } catch {
      return initialDailyProgress;
    }
  },

  saveDailyProgress(summary: DailyProgressSummary): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PARENT_PROGRESS, JSON.stringify(summary));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  },

  getRewardMilestones(): RewardMilestone[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.REWARDS);
      return data ? JSON.parse(data) : initialRewardMilestones;
    } catch {
      return initialRewardMilestones;
    }
  },

  saveRewardMilestones(milestones: RewardMilestone[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.REWARDS, JSON.stringify(milestones));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  },

  getParentGoals(): ParentGoal[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PARENT_GOALS);
      return data ? JSON.parse(data) : initialParentGoals;
    } catch {
      return initialParentGoals;
    }
  },

  saveParentGoals(goals: ParentGoal[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PARENT_GOALS, JSON.stringify(goals));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  },

  getChatHistory(lessonId: string): any[] | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CHAT_HISTORY_PREFIX + lessonId);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveChatHistory(lessonId: string, messages: any[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.CHAT_HISTORY_PREFIX + lessonId, JSON.stringify(messages));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }
};
