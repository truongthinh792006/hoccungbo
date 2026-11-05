import { MistakeRecord, PracticeExercise } from '../types/curriculum';

export const MISTAKE_STORAGE_KEY = 'math7_mistake_bank';

const INITIAL_SEEDED_MISTAKES: MistakeRecord[] = [
  {
    id: 'ch4_l12_q6',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    lessonTitle: 'Bài 12: Tổng các góc trong một tam giác',
    exerciseTitle: 'Định lí góc ngoài của tam giác',
    addedAt: '2026-11-04T19:30:00.000Z',
    wrongAttemptsCount: 2,
    mastered: false,
    lastAttemptedAt: '2026-11-04T19:35:00.000Z',
    exerciseSnapshot: {
      id: 'ch4_l12_q6',
      lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
      order: 6,
      title: 'Định lí góc ngoài của tam giác',
      level: 'thong_hieu',
      difficulty: 'thong_hieu',
      tags: ['#Góc ngoài', '#Định lí', '#Thông hiểu'],
      question: 'Cho $\\Delta ABC$ có $\\widehat{A} = 50^\\circ, \\widehat{B} = 70^\\circ$. Số đo góc ngoài tại đỉnh $C$ bằng:',
      options: [
        '$120^\\circ$',
        '$110^\\circ$',
        '$60^\\circ$',
        '$130^\\circ$'
      ],
      correctIndex: 0,
      hint: 'Mỗi góc ngoài của một tam giác có số đo bằng tổng số đo của hai góc trong không kề với nó.',
      solution: 'Theo định lí góc ngoài của tam giác, góc ngoài tại đỉnh $C$ bằng:\n$\\widehat{A} + \\widehat{B} = 50^\\circ + 70^\\circ = 120^\\circ$.'
    }
  },
  {
    id: 'ch4_l12_q11',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    lessonTitle: 'Bài 12: Tổng các góc trong một tam giác',
    exerciseTitle: 'Tính góc với tia phân giác',
    addedAt: '2026-11-04T20:10:00.000Z',
    wrongAttemptsCount: 1,
    mastered: false,
    lastAttemptedAt: '2026-11-04T20:10:00.000Z',
    exerciseSnapshot: {
      id: 'ch4_l12_q11',
      lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
      order: 11,
      title: 'Tính góc với tia phân giác',
      level: 'van_dung',
      difficulty: 'van_dung',
      tags: ['#Phân giác', '#Tính góc', '#Vận dụng'],
      question: 'Cho $\\Delta ABC$ có $\\widehat{A} = 80^\\circ$. Hai tia phân giác của góc $B$ và góc $C$ cắt nhau tại $I$. Số đo của $\\widehat{BIC}$ là:',
      options: [
        '$130^\\circ$',
        '$120^\\circ$',
        '$140^\\circ$',
        '$100^\\circ$'
      ],
      correctIndex: 0,
      hint: 'Trong $\\Delta ABC$: $\\widehat{B} + \\widehat{C} = 180^\\circ - \\widehat{A}$. Trong $\\Delta BIC$: $\\widehat{IBC} + \\widehat{ICB} = \\frac{\\widehat{B} + \\widehat{C}}{2}$.',
      solution: 'Ta có $\\widehat{B} + \\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - 80^\\circ = 100^\\circ$.\nVì $BI, CI$ là phân giác nên $\\widehat{IBC} + \\widehat{ICB} = \\frac{\\widehat{B} + \\widehat{C}}{2} = \\frac{100^\\circ}{2} = 50^\\circ$.\nTrong $\\Delta BIC$: $\\widehat{BIC} = 180^\\circ - (\\widehat{IBC} + \\widehat{ICB}) = 180^\\circ - 50^\\circ = 130^\\circ$.'
    }
  }
];

export function getStoredMistakes(): MistakeRecord[] {
  try {
    const raw = localStorage.getItem(MISTAKE_STORAGE_KEY);
    if (!raw) {
      // Seed initial sample data if first time
      localStorage.setItem(MISTAKE_STORAGE_KEY, JSON.stringify(INITIAL_SEEDED_MISTAKES));
      return INITIAL_SEEDED_MISTAKES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('[mistakeService] Error reading localStorage:', err);
    return INITIAL_SEEDED_MISTAKES;
  }
}

export function saveStoredMistakes(records: MistakeRecord[]): void {
  try {
    localStorage.setItem(MISTAKE_STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('[mistakeService] Error saving to localStorage:', err);
  }
}

export function recordMistake(
  exercise: PracticeExercise,
  lesson: { id: string; title: string }
): MistakeRecord[] {
  const current = getStoredMistakes();
  const index = current.findIndex(m => m.id === exercise.id);
  const now = new Date().toISOString();

  let updated: MistakeRecord[];

  if (index >= 0) {
    const existing = current[index];
    const updatedRecord: MistakeRecord = {
      ...existing,
      wrongAttemptsCount: existing.wrongAttemptsCount + 1,
      mastered: false, // Re-opened if solved wrong again
      lastAttemptedAt: now,
      exerciseSnapshot: exercise
    };
    updated = [...current];
    updated[index] = updatedRecord;
  } else {
    const newRecord: MistakeRecord = {
      id: exercise.id,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      exerciseTitle: exercise.title || `Câu hỏi ${exercise.order}`,
      addedAt: now,
      wrongAttemptsCount: 1,
      mastered: false,
      lastAttemptedAt: now,
      exerciseSnapshot: exercise
    };
    updated = [newRecord, ...current];
  }

  saveStoredMistakes(updated);
  return updated;
}

export function resolveMistake(exerciseId: string): { updated: MistakeRecord[]; resolved?: MistakeRecord } {
  const current = getStoredMistakes();
  const index = current.findIndex(m => m.id === exerciseId);
  if (index < 0) {
    return { updated: current };
  }

  const existing = current[index];
  const resolved: MistakeRecord = {
    ...existing,
    mastered: true,
    lastAttemptedAt: new Date().toISOString()
  };

  const updated = [...current];
  updated[index] = resolved;
  saveStoredMistakes(updated);

  return { updated, resolved };
}

export function deleteMistake(exerciseId: string): MistakeRecord[] {
  const current = getStoredMistakes();
  const updated = current.filter(m => m.id !== exerciseId);
  saveStoredMistakes(updated);
  return updated;
}

export function getMistakeStats(records: MistakeRecord[]) {
  const total = records.length;
  const activeRecords = records.filter(m => !m.mastered);
  const masteredRecords = records.filter(m => m.mastered);

  // Group by lesson to find top lessons needing attention
  const lessonCounts: Record<string, { lessonId: string; lessonTitle: string; activeCount: number; totalCount: number }> = {};
  for (const r of records) {
    if (!lessonCounts[r.lessonId]) {
      lessonCounts[r.lessonId] = {
        lessonId: r.lessonId,
        lessonTitle: r.lessonTitle,
        activeCount: 0,
        totalCount: 0
      };
    }
    lessonCounts[r.lessonId].totalCount++;
    if (!r.mastered) {
      lessonCounts[r.lessonId].activeCount++;
    }
  }

  const topLessonsWithMistakes = Object.values(lessonCounts)
    .sort((a, b) => (b.activeCount * 2 + b.totalCount) - (a.activeCount * 2 + a.totalCount));

  return {
    total,
    activeCount: activeRecords.length,
    masteredCount: masteredRecords.length,
    masteredPercentage: total > 0 ? Math.round((masteredRecords.length / total) * 100) : 100,
    topLessonsWithMistakes
  };
}
