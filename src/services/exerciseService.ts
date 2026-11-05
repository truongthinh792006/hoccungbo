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
  // Fallbacks for other chapters (expandable as new chapters are authored)
  chuong_2_so_thuc: async () => ({ default: [] }),
  chuong_3_goc_duong_thang_song_song: async () => ({ default: [] }),
  chuong_5_thu_thap_va_bieu_dien_du_lieu: async () => ({ default: [] }),
  chuong_6_ti_le_thuc: async () => ({ default: [] }),
  chuong_7_bieu_thuc_dai_so: async () => ({ default: [] }),
  chuong_8_bien_co_va_xac_suat: async () => ({ default: [] }),
  chuong_9_quan_he_cac_yeu_to_tam_giac: async () => ({ default: [] })
};

// In-memory cache to guarantee instant subsequent queries
const lessonExercisesCache = new Map<string, PracticeExercise[]>();
const loadedChapters = new Set<string>();

/**
 * Normalizes an exercise to ensure uniform structure whether options were defined as string[] or ExerciseOption[]
 */
export function normalizeExercise(ex: PracticeExercise): PracticeExercise {
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
  if (/12|13|14|15|16|ch4/i.test(lessonId)) {
    return 'chuong_4_tam_giac_bang_nhau';
  }
  if (/1|2|3|4|ch1/i.test(lessonId)) {
    return 'chuong_1_so_huu_ti';
  }

  return null;
}

const LESSON_ALIAS_MAP: Record<string, string[]> = {
  'bai_12_tong_cac_goc_trong_mot_tam_giac': ['lesson-12', 'ch4_l12', '12'],
  'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc': ['lesson-13', 'ch4_l13', '13'],
  'bai_14_truong_hop_bang_nhau_cgc_gcg': ['lesson-14', 'ch4_l14', '14', 'bai_14_truong_hop_bang_nhau_thu_hai_cgc'],
  'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong': ['lesson-15', 'ch4_l15', '15', 'bai_15_truong_hop_bang_nhau_thu_ba_gcg'],
  'bai_16_tam_giac_can_duong_trung_truc': ['lesson-16', 'ch4_l16', '16']
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
