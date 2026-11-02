import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole, Math7Lesson, QuizSubmissionRecord } from '../types/curriculum';
import { math7Chapter1Lessons } from '../data/math7_chapter1';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  switchRoleWithPinCheck: (targetRole: UserRole) => void;
  currentLessonId: string;
  setCurrentLessonId: (id: string) => void;
  currentLesson: Math7Lesson;
  allLessons: Math7Lesson[];
  xp: number;
  streak: number;
  weakTags: string[];
  quizSubmissions: Record<string, QuizSubmissionRecord>;
  submitQuiz: (
    lessonId: string,
    answers: Record<string, string>,
    score: number,
    totalPoints: number,
    isCorrect: Record<string, boolean>,
    hintsUsedCount: Record<string, number>
  ) => void;
  isPinModalOpen: boolean;
  openPinModal: () => void;
  closePinModal: () => void;
  verifyPin: (pin: string) => boolean;
  masteryPercentage: number;
  completedLessonIds: string[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  ROLE: 'math7_user_role',
  CURRENT_LESSON: 'math7_current_lesson',
  XP: 'math7_user_xp',
  STREAK: 'math7_user_streak',
  QUIZ_SUBMISSIONS: 'math7_quiz_submissions',
  WEAK_TAGS: 'math7_weak_tags',
  COMPLETED_LESSONS: 'math7_completed_lessons'
};

const PARENT_PIN = '1234';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<UserRole>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ROLE);
      return (saved === 'STUDENT' || saved === 'PARENT') ? saved : 'STUDENT';
    } catch {
      return 'STUDENT';
    }
  });

  const [currentLessonId, setCurrentLessonIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_LESSON);
      return saved || math7Chapter1Lessons[0].id;
    } catch {
      return math7Chapter1Lessons[0].id;
    }
  });

  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.XP);
      return saved ? parseInt(saved, 10) : 120;
    } catch {
      return 120;
    }
  });

  const [streak] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STREAK);
      return saved ? parseInt(saved, 10) : 3;
    } catch {
      return 3;
    }
  });

  const [weakTags, setWeakTags] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WEAK_TAGS);
      return saved ? JSON.parse(saved) : ['So sánh số hữu tỉ âm', 'Điều kiện mẫu số khác 0'];
    } catch {
      return ['So sánh số hữu tỉ âm', 'Điều kiện mẫu số khác 0'];
    }
  });

  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
      return saved ? JSON.parse(saved) : ['bai_1_tap_hop_cac_so_huu_ti'];
    } catch {
      return ['bai_1_tap_hop_cac_so_huu_ti'];
    }
  });

  const [quizSubmissions, setQuizSubmissions] = useState<Record<string, QuizSubmissionRecord>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_SUBMISSIONS);
      if (saved) return JSON.parse(saved);
      // Pre-seed an initial attempt for Bài 1
      return {
        bai_1_tap_hop_cac_so_huu_ti: {
          lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
          timestamp: 'Hôm nay, 19:45',
          score: 30,
          totalPoints: 30,
          percentage: 100,
          answers: { 'q1-nb': 'opt-1c', 'q2-th': 'opt-2a', 'q3-vd': 'opt-3a' },
          isCorrect: { 'q1-nb': true, 'q2-th': true, 'q3-vd': true },
          hintsUsedCount: { 'q1-nb': 0, 'q2-th': 1, 'q3-vd': 1 }
        }
      };
    } catch {
      return {};
    }
  });

  const [isPinModalOpen, setIsPinModalOpen] = useState(false);

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ROLE, role);
    } catch {}
  }, [role]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CURRENT_LESSON, currentLessonId);
    } catch {}
  }, [currentLessonId]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.XP, xp.toString());
    } catch {}
  }, [xp]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.WEAK_TAGS, JSON.stringify(weakTags));
    } catch {}
  }, [weakTags]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(completedLessonIds));
    } catch {}
  }, [completedLessonIds]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.QUIZ_SUBMISSIONS, JSON.stringify(quizSubmissions));
    } catch {}
  }, [quizSubmissions]);

  const setRole = (newRole: UserRole) => {
    setRoleState(newRole);
  };

  const switchRoleWithPinCheck = (targetRole: UserRole) => {
    if (targetRole === 'PARENT') {
      setIsPinModalOpen(true);
    } else {
      setRoleState('STUDENT');
    }
  };

  const verifyPin = (pin: string): boolean => {
    if (pin === PARENT_PIN) {
      setRoleState('PARENT');
      setIsPinModalOpen(false);
      return true;
    }
    return false;
  };

  const setCurrentLessonId = (id: string) => {
    setCurrentLessonIdState(id);
  };

  const submitQuiz = (
    lessonId: string,
    answers: Record<string, string>,
    score: number,
    totalPoints: number,
    isCorrect: Record<string, boolean>,
    hintsUsedCount: Record<string, number>
  ) => {
    const percentage = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;
    const record: QuizSubmissionRecord = {
      lessonId,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      score,
      totalPoints,
      percentage,
      answers,
      isCorrect,
      hintsUsedCount
    };

    setQuizSubmissions(prev => ({ ...prev, [lessonId]: record }));
    setXp(prev => prev + score * 2);

    if (percentage >= 70 && !completedLessonIds.includes(lessonId)) {
      setCompletedLessonIds(prev => [...prev, lessonId]);
    }

    // Check for mistakes to update weak tags
    const newWeak: string[] = [];
    Object.keys(isCorrect).forEach(qId => {
      if (!isCorrect[qId]) {
        if (qId.includes('vd')) newWeak.push('So sánh số hữu tỉ âm (cần củng cố)');
        if (qId.includes('nb')) newWeak.push('Điều kiện mẫu số b khác 0');
      }
    });

    if (newWeak.length > 0) {
      setWeakTags(prev => Array.from(new Set([...prev, ...newWeak])));
    }
  };

  const currentLesson =
    math7Chapter1Lessons.find(l => l.id === currentLessonId) || math7Chapter1Lessons[0];

  // Calculate overall mastery index
  const attempts = Object.values(quizSubmissions);
  const masteryPercentage =
    attempts.length > 0
      ? Math.round(attempts.reduce((sum, a) => sum + a.percentage, 0) / attempts.length)
      : 85;

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        switchRoleWithPinCheck,
        currentLessonId,
        setCurrentLessonId,
        currentLesson,
        allLessons: math7Chapter1Lessons,
        xp,
        streak,
        weakTags,
        quizSubmissions,
        submitQuiz,
        isPinModalOpen,
        openPinModal: () => setIsPinModalOpen(true),
        closePinModal: () => setIsPinModalOpen(false),
        verifyPin,
        masteryPercentage,
        completedLessonIds
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
