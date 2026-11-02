export interface SocraticMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  content: string;
  mathFormula?: string;
  timestamp: string;
  hintLevel?: 1 | 2 | 3;
  suggestedAction?: string;
  quickReplies?: string[];
}

export interface QuizAttempt {
  drillId: string;
  lessonId: string;
  timestamp: string;
  score: number;
  totalPoints: number;
  answers: Record<string, any>; // questionId -> answer
  isCompleted: boolean;
  accuracyRate: number;
  weakCompetenciesIdentified: string[]; // Competency IDs where mistakes happened
}

export interface StudentProgress {
  studentName: string;
  grade: number;
  activeLessonId: string;
  completedLessons: string[];
  totalStudyMinutes: number;
  streakDays: number;
  recentAttempts: QuizAttempt[];
  masteredCompetencyIds: string[];
  weakConceptLogs: {
    id: string;
    lessonId: string;
    conceptTitle: string;
    competencyId: string;
    errorCount: number;
    lastOccurred: string;
    note: string;
    status: 'needs_attention' | 'improving' | 'resolved';
  }[];
}
