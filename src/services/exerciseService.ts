import { PracticeExercise, ExerciseDifficulty, ExerciseOption } from '../types/curriculum';
import { math7CurriculumLessons } from '../data/math7_curriculum';

type ChapterExerciseModule = {
  default?: PracticeExercise[];
  [key: string]: unknown;
};

/**
 * Dynamic import map per chapter:
 * Enables Vite/Rollup code-splitting so exercise datasets for each chapter
 * are loaded asynchronously on demand as separate chunks, keeping the main bundle lightweight.
 */
const CHAPTER_LOADERS: Record<string, () => Promise<ChapterExerciseModule>> = {
  chuong_1_so_huu_ti: () => import('../data/exercises/chapter1_exercises'),
  chuong_4_tam_giac_bang_nhau: () => import('../data/exercises/chapter4_exercises'),
  chuong_2_so_thuc: () => import('../data/exercises/chapter2_exercises'),
  // Fallbacks for other chapters (expandable as new chapters are authored)
  chuong_3_goc_duong_thang_song_song: async () => ({ default: [] }),
  chuong_5_thu_thap_va_bieu_dien_du_lieu: async () => ({ default: [] }),
  chuong_6_ti_le_thuc: () => import('../data/exercises/chapter6_exercises'),
  chuong_6_ti_le_thuc_va_dai_luong_ti_le: () => import('../data/exercises/chapter6_exercises'),
  chuong_7_bieu_thuc_dai_so: async () => ({ default: [] }),
  chuong_8_bien_co_va_xac_suat: async () => ({ default: [] }),
  chuong_9_quan_he_cac_yeu_to_tam_giac: () => import('../data/exercises/chapter9_exercises')
};

// In-memory cache to guarantee instant subsequent queries
const lessonExercisesCache = new Map<string, PracticeExercise[]>();
const loadedChapters = new Set<string>();

/**
 * Normalizes an exercise to ensure uniform structure whether options were defined as string[] or ExerciseOption[]
 */
export function normalizeExercise(ex: PracticeExercise): Omit<PracticeExercise, 'options'> & { options: ExerciseOption[] } {
  const difficulty = (ex.difficulty || ex.level || 'co_ban') as ExerciseDifficulty;
  const level = (ex.level || ex.difficulty || 'co_ban') as ExerciseDifficulty;

  let options: ExerciseOption[] = [];
  let correctAnswerId = ex.correctAnswerId || '';

  if (Array.isArray(ex.options) && ex.options.length > 0) {
    if (typeof ex.options[0] === 'string') {
      const strOpts = ex.options as string[];
      const cIdx = typeof ex.correctIndex === 'number' ? ex.correctIndex : 0;
      options = strOpts.map((text, idx) => ({
        id: `opt-${idx}`,
        text,
        isCorrect: idx === cIdx
      }));
      correctAnswerId = `opt-${cIdx}`;
    } else {
      options = ex.options as ExerciseOption[];
      if (!correctAnswerId) {
        const found = options.find(o => o.isCorrect);
        correctAnswerId = found ? found.id : options[0]?.id || '';
      }
    }
  }

  const correctIndex = typeof ex.correctIndex === 'number' 
    ? ex.correctIndex 
    : options.findIndex(o => o.id === correctAnswerId);

  return {
    ...ex,
    difficulty,
    level,
    options,
    correctAnswerId,
    correctIndex: correctIndex >= 0 ? correctIndex : 0
  };
}

/**
 * Find the chapterId for a given lessonId from the master curriculum registry
 */
export function getChapterIdForLesson(lessonId: string): string | null {
  const lesson = math7CurriculumLessons.find(l => l.id === lessonId);
  if (lesson) return lesson.chapterId;

  // Pattern matching fallbacks for lesson aliases
  if (/31|32|33|34|35|ch9/i.test(lessonId)) {
    return 'chuong_9_quan_he_cac_yeu_to_tam_giac';
  }
  if (/20|21|22|23|ch6/i.test(lessonId)) {
    return 'chuong_6_ti_le_thuc_va_dai_luong_ti_le';
  }
  if (/12|13|14|15|16|ch4/i.test(lessonId)) {
    return 'chuong_4_tam_giac_bang_nhau';
  }
  if (/ch2|chuong_2|so_thap_phan|so_vo_ti|can_bac_hai|so_thuc|luyen_tap_chung_chuong_2/i.test(lessonId) || /(^|[^0-9])(6|7|8)($|[^0-9])/i.test(lessonId)) {
    return 'chuong_2_so_thuc';
  }
  if (/luyen_tap_chung_chuong_1|cuoi_chuong_1|ch1|chuong_1/i.test(lessonId) || /(^|[^0-9])(1|2|3|4)($|[^0-9])/i.test(lessonId)) {
    return 'chuong_1_so_huu_ti';
  }

  return null;
}

const LESSON_ALIAS_MAP: Record<string, string[]> = {
  'bai_1_tap_hop_cac_so_huu_ti': ['lesson-01', 'lesson-1', 'ch1_l01', 'ch1_l1', '1', '01', 'bai_01', 'bai_1'],
  'bai_2_cong_tru_nhan_chia_so_huu_ti': ['lesson-02', 'lesson-2', 'ch1_l02', 'ch1_l2', '2', '02', 'bai_02', 'bai_2'],
  'bai_3_luy_thua_so_mu_tu_nhien': ['lesson-03', 'lesson-3', 'ch1_l03', 'ch1_l3', '3', '03', 'bai_03', 'bai_3'],
  'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve': ['lesson-04', 'lesson-4', 'ch1_l04', 'ch1_l4', '4', '04', 'bai_04', 'bai_4', 'bai_4_quy_tac_dau_ngoac_chuyen_ve'],
  'luyen_tap_chung_chuong_1': ['lesson-ch1-review', 'ch1_l05', 'ch1_l5', 'bai_tap_cuoi_chuong_1', 'luyen_tap_chung_1'],
  'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan': ['lesson-05', 'lesson-5', 'ch2_l05', 'ch2_l5', 'bai_05', 'bai_5', 'bai_05_lam_quen_voi_so_thap_phan_vo_han_tuan_hoan', '5', '05'],
  'bai_6_so_vo_ti_can_bac_hai_so_hoc': ['lesson-06', 'lesson-6', 'ch2_l06', 'ch2_l6', 'bai_06', 'bai_6', 'bai_06_so_vo_ti_can_bac_hai_so_hoc', '6', '06'],
  'bai_7_tap_hop_cac_so_thuc': ['lesson-07', 'lesson-7', 'ch2_l07', 'ch2_l7', 'bai_07', 'bai_7', 'bai_07_tap_hop_cac_so_thuc', '7', '07'],
  'luyen_tap_chung_chuong_2': ['lesson-08', 'lesson-8', 'ch2_l08', 'ch2_l8', 'bai_08', 'bai_8', 'bai_08_review', 'luyen_tap_chung_2', '8', '08'],
  'bai_12_tong_cac_goc_trong_mot_tam_giac': ['lesson-12', 'ch4_l12', '12'],
  'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc': ['lesson-13', 'ch4_l13', '13'],
  'bai_14_truong_hop_bang_nhau_cgc_gcg': ['lesson-14', 'ch4_l14', '14', 'bai_14_truong_hop_bang_nhau_thu_hai_cgc'],
  'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong': ['lesson-15', 'ch4_l15', '15', 'bai_15_truong_hop_bang_nhau_thu_ba_gcg'],
  'bai_16_tam_giac_can_duong_trung_truc': ['lesson-16', 'ch4_l16', '16'],
  'bai_20_ti_le_thuc': ['lesson-20', 'ch6_l20', '20', 'bai_20'],
  'bai_21_tinh_chat_day_ti_so_bang_nhau': ['lesson-21', 'ch6_l21', '21', 'bai_21'],
  'bai_22_dai_luong_ti_le_thuan': ['lesson-22', 'ch6_l22', '22', 'bai_22'],
  'bai_23_dai_luong_ti_le_nghich': ['lesson-23', 'ch6_l23', '23', 'bai_23'],
  'bai_31_quan_he_giua_goc_va_canh_doi_dien': ['lesson-31', 'ch9_l31', '31', 'bai_31'],
  'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien': ['lesson-32', 'ch9_l32', '32', 'bai_32'],
  'bai_33_quan_he_giua_ba_canh_cua_tam_giac': ['lesson-33', 'ch9_l33', '33', 'bai_33'],
  'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac': ['lesson-34', 'ch9_l34', '34', 'bai_34'],
  'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao': ['lesson-35', 'ch9_l35', '35', 'bai_35']
};

/**
 * Asynchronously load exercises for a given lessonId
 */
export async function getExercisesByLessonId(lessonId: string): Promise<PracticeExercise[]> {
  // 1. Return from memory cache if already resolved
  if (lessonExercisesCache.has(lessonId)) {
    return lessonExercisesCache.get(lessonId) || [];
  }

  // 2. Identify the chapter
  const chapterId = getChapterIdForLesson(lessonId);
  if (!chapterId) {
    return [];
  }

  // 3. Dynamically import the chapter module if not yet loaded
  const loader = CHAPTER_LOADERS[chapterId];
  if (!loader) {
    lessonExercisesCache.set(lessonId, []);
    return [];
  }

  try {
    const mod = await loader();
    
    // Find array of exercises in module (default export or named export)
    let chapterList: PracticeExercise[] = [];
    if (Array.isArray(mod.default)) {
      chapterList = mod.default;
    } else {
      for (const val of Object.values(mod)) {
        if (Array.isArray(val) && val.length > 0 && val[0].lessonId) {
          chapterList = val as PracticeExercise[];
          break;
        }
      }
    }

    // Populate cache for all lessons within this chapter, normalizing each exercise
    const grouped = new Map<string, PracticeExercise[]>();
    for (const rawEx of chapterList) {
      const ex = normalizeExercise(rawEx);
      if (!grouped.has(ex.lessonId)) {
        grouped.set(ex.lessonId, []);
      }
      grouped.get(ex.lessonId)!.push(ex);
    }

    for (const [lId, exList] of grouped.entries()) {
      // Sort by order ascending
      exList.sort((a, b) => a.order - b.order);
      lessonExercisesCache.set(lId, exList);

      // Register aliases
      for (const [primaryId, aliases] of Object.entries(LESSON_ALIAS_MAP)) {
        if (lId === primaryId || aliases.includes(lId)) {
          lessonExercisesCache.set(primaryId, exList);
          for (const alias of aliases) {
            lessonExercisesCache.set(alias, exList);
          }
        }
      }
    }

    loadedChapters.add(chapterId);

    // Return exercises for the requested lesson (or empty array if none yet)
    const result = lessonExercisesCache.get(lessonId) || [];
    return result;
  } catch (err) {
    console.warn(`[exerciseService] Failed to load exercises for chapter "${chapterId}":`, err);
    return [];
  }
}

/**
 * Synchronous cache lookup for immediate rendering if already prefetched
 */
export function getExercisesSync(lessonId: string): PracticeExercise[] | null {
  return lessonExercisesCache.get(lessonId) || null;
}

/**
 * Calculate exercise difficulty statistics
 */
export function getExerciseStats(exercises: PracticeExercise[]) {
  const normalized = exercises.map(normalizeExercise);
  return {
    total: normalized.length,
    coBan: normalized.filter(e => (e.difficulty || e.level) === 'co_ban').length,
    thongHieu: normalized.filter(e => (e.difficulty || e.level) === 'thong_hieu').length,
    vanDung: normalized.filter(e => (e.difficulty || e.level) === 'van_dung').length
  };
}

/**
 * Filter exercises by difficulty tier
 */
export function filterExercises(
  exercises: PracticeExercise[],
  filter: ExerciseDifficulty | 'all'
): PracticeExercise[] {
  const normalized = exercises.map(normalizeExercise);
  if (filter === 'all') return normalized;
  return normalized.filter(e => (e.difficulty || e.level) === filter);
}
