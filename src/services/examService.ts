import { 
  ExamConfig, 
  ExamQuestion, 
  ExamResultRecord, 
  ExerciseDifficulty,
  PracticeExercise
} from '../types/curriculum';
import { math7Chapters } from '../data/math7_curriculum';
import { getExercisesByLessonId, normalizeExercise } from './exerciseService';

export const STANDARD_EXAM_CONFIGS: ExamConfig[] = [
  {
    id: 'exam_gk1',
    type: 'GIUA_KI_1',
    title: 'Đề Kiểm Tra Giữa Kì I',
    subtitle: 'Toán 7 - KNTT (Chương I, II, III)',
    durationMinutes: 45,
    questionCount: 20,
    chapterIds: [
      'chuong_1_so_huu_ti',
      'chuong_2_so_thuc',
      'chuong_3_goc_duong_thang_song_song'
    ],
    description: 'Bao quát số hữu tỉ, số thực, góc kề bù, đối đỉnh và hai đường thẳng song song.',
    badgeLabel: 'Giữa Kì 1 • 45 phút',
    colorScheme: 'indigo'
  },
  {
    id: 'exam_ck1',
    type: 'CUOI_KI_1',
    title: 'Đề Kiểm Tra Cuối Kì I',
    subtitle: 'Toán 7 - Toàn bộ Học kì 1 (Chương I, II, III, IV)',
    durationMinutes: 60,
    questionCount: 25,
    chapterIds: [
      'chuong_1_so_huu_ti',
      'chuong_2_so_thuc',
      'chuong_3_goc_duong_thang_song_song',
      'chuong_4_tam_giac_bang_nhau'
    ],
    description: 'Tổng hợp kiến thức toàn bộ Học kì 1: Số học, Số thực và các trường hợp Tam giác bằng nhau.',
    badgeLabel: 'Cuối Kì 1 • 60 phút',
    colorScheme: 'emerald'
  },
  {
    id: 'exam_gk2',
    type: 'GIUA_KI_2',
    title: 'Đề Kiểm Tra Giữa Kì II',
    subtitle: 'Toán 7 - KNTT (Chương V, VI, VII)',
    durationMinutes: 45,
    questionCount: 20,
    chapterIds: [
      'chuong_5_thu_thap_va_bieu_dien_du_lieu',
      'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
      'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien'
    ],
    description: 'Thống kê biểu đồ, tỉ lệ thức và đại lượng tỉ lệ, biểu thức đại số và đa thức một biến.',
    badgeLabel: 'Giữa Kì 2 • 45 phút',
    colorScheme: 'amber'
  },
  {
    id: 'exam_ck2',
    type: 'CUOI_KI_2',
    title: 'Đề Thi Cuối Kì II & Tổng Hợp Cả Năm',
    subtitle: 'Toán 7 - Toàn bộ 9 Chương SGK',
    durationMinutes: 60,
    questionCount: 30,
    chapterIds: [
      'chuong_1_so_huu_ti',
      'chuong_2_so_thuc',
      'chuong_3_goc_duong_thang_song_song',
      'chuong_4_tam_giac_bang_nhau',
      'chuong_5_thu_thap_va_bieu_dien_du_lieu',
      'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
      'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien',
      'chuong_8_bien_co_va_xac_suat',
      'chuong_9_quan_he_cac_yeu_to_tam_giac'
    ],
    description: 'Đề tổng hợp toàn diện nhất, quét qua mọi chủ đề Đại số, Hình học, Thống kê và Xác suất.',
    badgeLabel: 'Cuối Kì 2 • 60 phút',
    colorScheme: 'purple'
  },
  {
    id: 'exam_speed',
    type: 'SPEED_TEST',
    title: 'Khởi Động Phản Xạ 15 Phút',
    subtitle: 'Đề Trắc Nghiệm Tốc Độ (10 câu ngẫu nhiên)',
    durationMinutes: 15,
    questionCount: 10,
    chapterIds: [
      'chuong_1_so_huu_ti',
      'chuong_2_so_thuc',
      'chuong_3_goc_duong_thang_song_song',
      'chuong_4_tam_giac_bang_nhau'
    ],
    description: 'Luyện tập nhanh trước giờ học hoặc kiểm tra 15 phút trên lớp.',
    badgeLabel: 'Khởi Động • 15 phút',
    colorScheme: 'cyan'
  }
];

const EXAM_STORAGE_KEY = 'dong_hanh_toan_7_exam_results';

/**
 * Shuffles an array randomly in place (Fisher-Yates)
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Dynamically builds an exam with balanced difficulty distribution
 * (~50% co_ban, ~30% thong_hieu, ~20% van_dung)
 */
export async function generateExam(config: ExamConfig): Promise<ExamQuestion[]> {
  const targetChapters = math7Chapters.filter(ch => config.chapterIds.includes(ch.id));
  
  // 1. Gather all lesson IDs involved
  const allLessonIds: string[] = [];
  targetChapters.forEach(ch => {
    allLessonIds.push(...ch.lessonIds);
  });

  // 2. Fetch exercises asynchronously
  const exercisePromises = allLessonIds.map(lessonId => getExercisesByLessonId(lessonId));
  const exerciseArrays = await Promise.all(exercisePromises);
  const pool: PracticeExercise[] = [];
  
  for (const exList of exerciseArrays) {
    for (const ex of exList) {
      pool.push(ex);
    }
  }

  if (pool.length === 0) {
    return [];
  }

  // 3. Partition by difficulty
  const coBanPool: PracticeExercise[] = [];
  const thongHieuPool: PracticeExercise[] = [];
  const vanDungPool: PracticeExercise[] = [];

  for (const ex of pool) {
    const diff = (ex.difficulty || ex.level || 'co_ban') as ExerciseDifficulty;
    if (diff === 'co_ban') coBanPool.push(ex);
    else if (diff === 'thong_hieu') thongHieuPool.push(ex);
    else vanDungPool.push(ex);
  }

  // 4. Calculate quotas
  const count = config.questionCount;
  const coBanCount = Math.round(count * 0.5);
  const thongHieuCount = Math.round(count * 0.3);
  const vanDungCount = count - coBanCount - thongHieuCount;

  // 5. Pick random items
  const pickedCoBan = shuffleArray(coBanPool).slice(0, coBanCount);
  const pickedThongHieu = shuffleArray(thongHieuPool).slice(0, thongHieuCount);
  const pickedVanDung = shuffleArray(vanDungPool).slice(0, vanDungCount);

  let selected = [...pickedCoBan, ...pickedThongHieu, ...pickedVanDung];

  // Fill up if any tier was short
  if (selected.length < count) {
    const existingIds = new Set(selected.map(s => s.id));
    const remaining = shuffleArray(pool.filter(p => !existingIds.has(p.id)));
    selected.push(...remaining.slice(0, count - selected.length));
  }

  // 6. Final shuffle and map to ExamQuestion
  return shuffleArray(selected).slice(0, count).map((ex, index) => {
    const normalized = normalizeExercise(ex);
    return {
      ...normalized,
      order: index + 1,
      userSelectedOptionIndex: undefined,
      isFlagged: false
    };
  });
}

/**
 * Saves an exam result record to localStorage
 */
export function saveExamResult(record: ExamResultRecord): void {
  try {
    const existing = getExamHistory();
    const updated = [record, ...existing.filter(r => r.id !== record.id)];
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('[examService] Failed to save exam result:', err);
  }
}

/**
 * Loads exam history from localStorage
 */
export function getExamHistory(): ExamResultRecord[] {
  try {
    const raw = localStorage.getItem(EXAM_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn('[examService] Failed to read exam history:', err);
    return [];
  }
}

/**
 * Computes summary statistics across all mock exams taken
 */
export function getExamStats() {
  const history = getExamHistory();
  if (history.length === 0) {
    return {
      totalTaken: 0,
      averageScore: 0,
      highestScore: 0,
      totalXp: 0,
      passRate: 0
    };
  }

  const totalScore = history.reduce((sum, h) => sum + h.score, 0);
  const highestScore = Math.max(...history.map(h => h.score));
  const totalXp = history.reduce((sum, h) => sum + (h.xpEarned || 0), 0);
  const passCount = history.filter(h => h.score >= 5.0).length;

  return {
    totalTaken: history.length,
    averageScore: Number((totalScore / history.length).toFixed(1)),
    highestScore: Number(highestScore.toFixed(1)),
    totalXp,
    passRate: Math.round((passCount / history.length) * 100)
  };
}

/**
 * Delete a specific exam record by ID
 */
export function deleteExamResult(id: string): void {
  try {
    const existing = getExamHistory();
    const filtered = existing.filter(r => r.id !== id);
    localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(filtered));
  } catch (err) {
    console.warn('[examService] Failed to delete exam result:', err);
  }
}
