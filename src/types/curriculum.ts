export type UserRole = 'STUDENT' | 'PARENT';

export type TextbookSeriesId = 'canh-dieu' | 'ket-noi-tri-thuc' | 'chan-troi-sang-tao';

export interface TextbookSeries {
  id: TextbookSeriesId;
  name: string;
  publisher: string;
  color: string;
  badge: string;
}

export type SubjectId = 'toan' | 'khtn' | 'ngu-van' | 'tieng-anh' | 'tin-hoc';

export interface Subject {
  id: SubjectId;
  name: string;
  grade: number;
  iconName: string;
  themeColor: string;
  description: string;
}

export type CompetencyLevel = 'biet' | 'hieu' | 'van-dung' | 'van-dung-cao' | 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao';

export interface TargetCompetency {
  id: string;
  level: CompetencyLevel;
  code: string; // e.g. "NLTH-01" or "KNTT-T01-01"
  description: string;
  mastered?: boolean;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestionItem {
  id: string;
  tier: 'nhan_biet' | 'thong_hieu' | 'van_dung';
  question: string;
  formula?: string;
  options: QuizOption[];
  correctAnswerId: string;
  progressiveHints: string[];
  explanation: string;
  competencyRef: string;
  points: number;
}

// Legacy QuizQuestion support for existing components
export type QuizTierType = 'multiple_choice' | 'true_false' | 'short_answer';

export interface QuizQuestion {
  id: string;
  tier: QuizTierType;
  competencyRef?: string;
  questionText: string;
  mathFormula?: string;
  options?: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  tfItems?: {
    statement: string;
    isTrue: boolean;
    explanation?: string;
  }[];
  acceptedAnswers?: string[];
  placeholder?: string;
  hints: string[];
  explanation: string;
  points: number;
}

export interface DrillItem {
  id: string;
  title: string;
  durationMinutes: number;
  totalQuestions: number;
  questions: QuizQuestion[];
}

export interface LessonKeyConcept {
  id: string;
  title: string;
  summary: string;
  mathFormula?: string;
  exampleSnippet?: string;
  pitfallWarning?: string;
  realLifeApplication?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  subjectId: SubjectId;
  seriesId: TextbookSeriesId;
  order: number;
  title: string;
  subtitle: string;
  estimatedStudyTimeMinutes: number;
  targetCompetencies: TargetCompetency[];
  keyConcepts: LessonKeyConcept[];
  practiceDrills: DrillItem[];
  dinnerConversationPrompts: {
    question: string;
    contextForParent: string;
    suggestedFollowUp: string;
    expectedChildTakeaway: string;
  }[];
}

export interface Unit {
  id: string;
  subjectId: SubjectId;
  seriesId: TextbookSeriesId;
  order: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface CurriculumData {
  series: TextbookSeries[];
  subjects: Subject[];
  units: Unit[];
}

export interface NumberLinePoint {
  id: string;
  label: string;
  value: number;
  displayFraction: string;
  type: 'integer' | 'fraction' | 'decimal';
  isOppositeOf?: string;
  description: string;
}

export interface CoreConcept {
  id: string;
  title: string;
  summary: string;
  latexFormula?: string;
  exampleSnippet?: string;
  pitfallWarning?: string;
  realLifeApplication?: string;
}

export interface DinnerPrompt {
  id: string;
  prompt: string;
  contextForParent: string;
  suggestedAnswerTip: string;
  sampleChildResponse: string;
}

export type LessonStatus = 'completed' | 'in_progress' | 'locked';

export interface Math7Lesson {
  id: string;
  order: number;
  chapterId: string;
  chapterTitle: string;
  term?: 1 | 2;
  title: string;
  subtitle: string;
  status: LessonStatus;
  estimatedMinutes: number;
  learningTargets: TargetCompetency[];
  coreConcepts: CoreConcept[];
  numberLinePoints?: NumberLinePoint[];
  diagnosticQuiz: QuizQuestionItem[];
  dinnerPrompts: DinnerPrompt[];
  // Convenience aliases matching deliverable specs
  unit?: string;
  competencies?: TargetCompetency[];
  keyTakeaways?: CoreConcept[];
  parentCheatsheet?: DinnerPrompt[];
  quiz?: QuizQuestionItem[];
}

export interface ChapterMeta {
  id: string;
  order: number;
  term?: 1 | 2;
  title: string;
  shortTitle: string;
  description: string;
  lessonIds: string[];
  themeColor: string;
  iconName?: string;
}

export interface QuizSubmissionRecord {
  lessonId: string;
  timestamp: string;
  score: number;
  totalPoints: number;
  percentage: number;
  answers: Record<string, string>;
  isCorrect: Record<string, boolean>;
  hintsUsedCount: Record<string, number>;
}

export interface StreakState {
  currentStreak: number;          // Số ngày liên tiếp hiện tại
  bestStreak: number;             // Kỷ lục chuỗi ngày cao nhất
  lastActiveDate: string;         // Định dạng YYYY-MM-DD
  todayCompleted: boolean;        // Đã hoàn thành nhiệm vụ tối nay chưa
}

export interface Badge {
  id: string;
  title: string;                  // Tên huy hiệu (VD: "Chiến thần Số hữu tỉ")
  description: string;            // Điều kiện đạt được
  icon: string;                   // Tên icon Lucide hoặc SVG
  category: 'mastery' | 'streak' | 'family' | 'explorer';
  unlockedAt: string | null;      // Ngày mở khóa (null nếu chưa đạt)
  progress: number;               // Tiến độ hiện tại (0 - 100%)
}

export interface FamilyRewardContract {
  id: string;
  targetXp: number;               // Mốc XP cần đạt (VD: 500 XP)
  rewardName: string;             // Phần thưởng do bố nhập (VD: "Đi bơi cùng bố cuối tuần")
  isClaimed: boolean;             // Trạng thái nhận thưởng
}

export type FocusTimerMode = 'FOCUS' | 'BREAK';

export interface FocusTimerState {
  mode: FocusTimerMode;
  durationMinutes: number;        // 15, 25, 45 (FOCUS) hoặc 5 (BREAK)
  timeLeftSeconds: number;        // Số giây còn lại
  isRunning: boolean;
  soundEnabled: boolean;          // Bật/tắt chuông hoàn thành (Web Audio API)
  tickSoundEnabled: boolean;      // Bật/tắt âm tích tắc nhẹ khi đang đếm
  completedSessionsToday: number; // Số phiên Pomodoro đã hoàn thành hôm nay
}
