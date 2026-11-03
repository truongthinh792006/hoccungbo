import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserRole, Math7Lesson, QuizSubmissionRecord, StreakState, Badge, FamilyRewardContract } from '../types/curriculum';
import { math7CurriculumLessons } from '../data/math7_curriculum';

interface AppContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  switchRoleWithPinCheck: (targetRole: UserRole) => void;
  currentLessonId: string;
  setCurrentLessonId: (id: string) => void;
  currentLesson: Math7Lesson;
  allLessons: Math7Lesson[];
  todayLessonId: string;
  setTodayLessonId: (id: string) => void;
  isTodayLesson: (id: string) => boolean;
  isSyllabusOpen: boolean;
  openSyllabus: () => void;
  closeSyllabus: () => void;
  toggleSyllabus: () => void;
  isQuizModalOpen: boolean;
  openQuizModal: () => void;
  closeQuizModal: () => void;
  toggleQuizModal: () => void;
  masteredCompetencies: Record<string, boolean>;
  markCompetencyMastered: (codeOrId: string, mastered?: boolean) => void;
  toggleCompetency: (codeOrId: string) => void;
  isCompetencyMastered: (codeOrId: string) => boolean;
  todayStudyTimeMinutes: number;
  setTodayStudyTimeMinutes: (minutes: number) => void;
  xp: number;
  streak: number;
  streakState: StreakState;
  setStreakState: React.Dispatch<React.SetStateAction<StreakState>>;
  completeTodayStreak: () => void;
  familyContracts: FamilyRewardContract[];
  addFamilyContract: (targetXp: number, rewardName: string) => void;
  toggleClaimContract: (id: string) => void;
  deleteFamilyContract: (id: string) => void;
  badges: Badge[];
  unlockBadge: (badgeId: string) => void;
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
  TODAY_LESSON: 'math7_today_lesson',
  MASTERED_COMPETENCIES: 'math7_mastered_competencies',
  STUDY_TIME: 'math7_today_study_time',
  XP: 'math7_user_xp',
  STREAK: 'math7_user_streak',
  STREAK_STATE: 'math7_streak_state',
  FAMILY_CONTRACTS: 'math7_family_contracts',
  BADGES: 'math7_badges',
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
      return saved || 'bai_3_luy_thua_so_mu_tu_nhien';
    } catch {
      return 'bai_3_luy_thua_so_mu_tu_nhien';
    }
  });

  const [todayLessonId, setTodayLessonIdState] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TODAY_LESSON);
      return saved || 'bai_3_luy_thua_so_mu_tu_nhien';
    } catch {
      return 'bai_3_luy_thua_so_mu_tu_nhien';
    }
  });

  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // Mastered competencies map
  const [masteredCompetencies, setMasteredCompetencies] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.MASTERED_COMPETENCIES);
      if (saved) return JSON.parse(saved);
      // Pre-seed Lesson 1 & Lesson 3 targets
      return {
        'lt-1-1': true,
        'KNTT-T01-01': true,
        'lt-1-2': true,
        'KNTT-T01-02': true,
        'lt-1-3': true,
        'KNTT-T01-03': true,
        'lt-3-1': true,
        'KNTT-T03-01': true,
        'lt-3-2': true,
        'KNTT-T03-02': true,
        'lt-3-3': false,
        'KNTT-T03-03': false
      };
    } catch {
      return {
        'lt-1-1': true,
        'KNTT-T01-01': true,
        'lt-1-2': true,
        'KNTT-T01-02': true,
        'lt-3-1': true,
        'KNTT-T03-01': true
      };
    }
  });

  const [todayStudyTimeMinutes, setTodayStudyTimeMinutesState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STUDY_TIME);
      return saved ? parseInt(saved, 10) : 45;
    } catch {
      return 45;
    }
  });

  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.XP);
      return saved ? parseInt(saved, 10) : 180;
    } catch {
      return 180;
    }
  });

  const [streakState, setStreakState] = useState<StreakState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.STREAK_STATE);
      if (saved) return JSON.parse(saved);
      const savedNum = localStorage.getItem(STORAGE_KEYS.STREAK);
      const cur = savedNum ? parseInt(savedNum, 10) : 4;
      return {
        currentStreak: cur,
        bestStreak: Math.max(cur, 6),
        lastActiveDate: new Date().toISOString().split('T')[0],
        todayCompleted: false
      };
    } catch {
      return {
        currentStreak: 4,
        bestStreak: 6,
        lastActiveDate: new Date().toISOString().split('T')[0],
        todayCompleted: false
      };
    }
  });

  const streak = streakState.currentStreak;

  const [familyContracts, setFamilyContracts] = useState<FamilyRewardContract[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAMILY_CONTRACTS);
      if (saved) return JSON.parse(saved);
      return [
        {
          id: 'contract-1',
          targetXp: 300,
          rewardName: 'Cùng bố đi bơi và ăn kem ngày Chủ Nhật',
          isClaimed: false
        },
        {
          id: 'contract-2',
          targetXp: 600,
          rewardName: 'Được chọn thực đơn món ngon bữa tối Thứ 7',
          isClaimed: false
        },
        {
          id: 'contract-3',
          targetXp: 1000,
          rewardName: 'Mua bộ cờ vua hoặc cuốn sách con yêu thích',
          isClaimed: false
        }
      ];
    } catch {
      return [];
    }
  });

  const [badges, setBadges] = useState<Badge[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BADGES);
      if (saved) return JSON.parse(saved);
      return [
        {
          id: 'badge-rational-master',
          title: 'Chiến Thần Số Hữu Tỉ',
          description: 'Hoàn thành xuất sắc 5 bài học của Chương I: Số hữu tỉ',
          icon: 'Calculator',
          category: 'mastery',
          unlockedAt: '2026-11-01',
          progress: 100
        },
        {
          id: 'badge-parallel-lines',
          title: 'Bậc Thầy Cát Tuyến',
          description: 'Thành thạo góc so le trong, đồng vị và tiên đề Euclid (Chương III)',
          icon: 'Compass',
          category: 'mastery',
          unlockedAt: null,
          progress: 60
        },
        {
          id: 'badge-triangle-centers',
          title: 'Nhà Thám Hiểm 4 Tâm',
          description: 'Khám phá và tương tác với 4 tâm kì diệu G, H, O, I trong tam giác',
          icon: 'Triangle',
          category: 'explorer',
          unlockedAt: null,
          progress: 40
        },
        {
          id: 'badge-streak-7',
          title: 'Kỷ Luật Thép (7 Ngày)',
          description: 'Duy trì thói quen tự học liên tục trong 7 ngày không ngắt quãng',
          icon: 'Flame',
          category: 'streak',
          unlockedAt: null,
          progress: 57
        },
        {
          id: 'badge-family-teamwork',
          title: 'Đồng Đội Gia Đình',
          description: 'Cùng bố mẹ thảo luận 3 câu hỏi bàn ăn buổi tối',
          icon: 'HeartHandshake',
          category: 'family',
          unlockedAt: '2026-11-02',
          progress: 100
        },
        {
          id: 'badge-probability-explorer',
          title: 'Vòng Quay Thống Kê',
          description: 'Quay vòng may mắn trên 50 lần để kiểm chứng Luật số lớn',
          icon: 'Dices',
          category: 'explorer',
          unlockedAt: null,
          progress: 20
        }
      ];
    } catch {
      return [];
    }
  });

  const [weakTags, setWeakTags] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.WEAK_TAGS);
      return saved ? JSON.parse(saved) : ['Số âm mang số mũ chẵn vs lẻ', 'Lũy thừa tầng (nhân số mũ)'];
    } catch {
      return ['Số âm mang số mũ chẵn vs lẻ', 'Lũy thừa tầng (nhân số mũ)'];
    }
  });

  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
      return saved ? JSON.parse(saved) : ['bai_1_tap_hop_cac_so_huu_ti', 'bai_2_cong_tru_nhan_chia_so_huu_ti'];
    } catch {
      return ['bai_1_tap_hop_cac_so_huu_ti', 'bai_2_cong_tru_nhan_chia_so_huu_ti'];
    }
  });

  const [quizSubmissions, setQuizSubmissions] = useState<Record<string, QuizSubmissionRecord>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.QUIZ_SUBMISSIONS);
      if (saved) return JSON.parse(saved);
      // Pre-seed an initial attempt for Lesson 3
      return {
        bai_1_tap_hop_cac_so_huu_ti: {
          lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
          timestamp: 'Hôm qua, 19:45',
          score: 30,
          totalPoints: 30,
          percentage: 100,
          answers: { 'q-b1-1': 'b1-opt-1c', 'q-b1-2': 'b1-opt-2a', 'q-b1-3': 'b1-opt-3a' },
          isCorrect: { 'q-b1-1': true, 'q-b1-2': true, 'q-b1-3': true },
          hintsUsedCount: { 'q-b1-1': 0, 'q-b1-2': 1, 'q-b1-3': 1 }
        },
        bai_3_luy_thua_so_mu_tu_nhien: {
          lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
          timestamp: 'Hôm nay, 20:15',
          score: 30,
          totalPoints: 40,
          percentage: 75,
          answers: { 'q-b3-1': 'b3-opt-1a', 'q-b3-2': 'b3-opt-2a', 'q-b3-3': 'b3-opt-3a' },
          isCorrect: { 'q-b3-1': true, 'q-b3-2': true, 'q-b3-3': true, 'q-b3-4': false },
          hintsUsedCount: { 'q-b3-1': 0, 'q-b3-2': 0, 'q-b3-3': 1, 'q-b3-4': 2 }
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
      localStorage.setItem(STORAGE_KEYS.TODAY_LESSON, todayLessonId);
    } catch {}
  }, [todayLessonId]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.MASTERED_COMPETENCIES, JSON.stringify(masteredCompetencies));
    } catch {}
  }, [masteredCompetencies]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STUDY_TIME, todayStudyTimeMinutes.toString());
    } catch {}
  }, [todayStudyTimeMinutes]);

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

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.STREAK_STATE, JSON.stringify(streakState));
      localStorage.setItem(STORAGE_KEYS.STREAK, streakState.currentStreak.toString());
    } catch {}
  }, [streakState]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAMILY_CONTRACTS, JSON.stringify(familyContracts));
    } catch {}
  }, [familyContracts]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BADGES, JSON.stringify(badges));
    } catch {}
  }, [badges]);

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

  const setTodayLessonId = (id: string) => {
    setTodayLessonIdState(id);
  };

  const isTodayLesson = (id: string) => {
    return todayLessonId === id;
  };

  const openSyllabus = () => setIsSyllabusOpen(true);
  const closeSyllabus = () => setIsSyllabusOpen(false);
  const toggleSyllabus = () => setIsSyllabusOpen(prev => !prev);

  const openQuizModal = () => setIsQuizModalOpen(true);
  const closeQuizModal = () => setIsQuizModalOpen(false);
  const toggleQuizModal = () => setIsQuizModalOpen(prev => !prev);

  // Competency management helpers
  const markCompetencyMastered = (codeOrId: string, mastered: boolean = true) => {
    setMasteredCompetencies(prev => {
      const updated = { ...prev, [codeOrId]: mastered };
      // Also sync matching lesson target if found
      math7CurriculumLessons.forEach(lesson => {
        lesson.learningTargets.forEach(target => {
          if (target.id === codeOrId || target.code === codeOrId) {
            updated[target.id] = mastered;
            updated[target.code] = mastered;
          }
        });
      });
      return updated;
    });
  };

  const toggleCompetency = (codeOrId: string) => {
    const current = masteredCompetencies[codeOrId] || false;
    markCompetencyMastered(codeOrId, !current);
  };

  const isCompetencyMastered = (codeOrId: string): boolean => {
    return Boolean(masteredCompetencies[codeOrId]);
  };

  const setTodayStudyTimeMinutes = (minutes: number) => {
    setTodayStudyTimeMinutesState(minutes);
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

    if (percentage >= 70) {
      completeTodayStreak();
    }

    // Check for mistakes to update weak tags
    const newWeak: string[] = [];
    Object.keys(isCorrect).forEach(qId => {
      if (!isCorrect[qId]) {
        if (qId.includes('vd')) newWeak.push('Vận dụng kiến thức bài học (cần củng cố)');
        if (qId.includes('th')) newWeak.push('Thông hiểu công thức và định lí');
        if (qId.includes('nb')) newWeak.push('Nhận biết định nghĩa cơ bản');
      }
    });

    if (newWeak.length > 0) {
      setWeakTags(prev => Array.from(new Set([...prev, ...newWeak])));
    }
  };

  const completeTodayStreak = () => {
    const today = new Date().toISOString().split('T')[0];
    setStreakState(prev => {
      if (prev.todayCompleted && prev.lastActiveDate === today) return prev;
      const nextStreak = prev.currentStreak + 1;
      return {
        currentStreak: nextStreak,
        bestStreak: Math.max(prev.bestStreak, nextStreak),
        lastActiveDate: today,
        todayCompleted: true
      };
    });
  };

  const addFamilyContract = (targetXp: number, rewardName: string) => {
    if (!rewardName.trim()) return;
    const newContract: FamilyRewardContract = {
      id: `contract-${Date.now()}`,
      targetXp: Math.max(50, targetXp),
      rewardName: rewardName.trim(),
      isClaimed: false
    };
    setFamilyContracts(prev => [...prev, newContract]);
  };

  const toggleClaimContract = (id: string) => {
    setFamilyContracts(prev => prev.map(c => 
      c.id === id ? { ...c, isClaimed: !c.isClaimed } : c
    ));
  };

  const deleteFamilyContract = (id: string) => {
    setFamilyContracts(prev => prev.filter(c => c.id !== id));
  };

  const unlockBadge = (badgeId: string) => {
    setBadges(prev => prev.map(b => 
      b.id === badgeId ? { ...b, unlockedAt: new Date().toISOString().split('T')[0], progress: 100 } : b
    ));
  };

  const currentLesson =
    math7CurriculumLessons.find(l => l.id === currentLessonId) || math7CurriculumLessons[0];

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
        allLessons: math7CurriculumLessons,
        todayLessonId,
        setTodayLessonId,
        isTodayLesson,
        isSyllabusOpen,
        openSyllabus,
        closeSyllabus,
        toggleSyllabus,
        isQuizModalOpen,
        openQuizModal,
        closeQuizModal,
        toggleQuizModal,
        masteredCompetencies,
        markCompetencyMastered,
        toggleCompetency,
        isCompetencyMastered,
        todayStudyTimeMinutes,
        setTodayStudyTimeMinutes,
        xp,
        streak,
        streakState,
        setStreakState,
        completeTodayStreak,
        familyContracts,
        addFamilyContract,
        toggleClaimContract,
        deleteFamilyContract,
        badges,
        unlockBadge,
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
