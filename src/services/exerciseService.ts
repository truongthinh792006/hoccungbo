import { PracticeExercise, ExerciseDifficulty } from '../types/curriculum';
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
 * Find the chapterId for a given lessonId from the master curriculum registry
 */
export function getChapterIdForLesson(lessonId: string): string | null {
  const lesson = math7CurriculumLessons.find(l => l.id === lessonId);
  return lesson ? lesson.chapterId : null;
}

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
    // If not found, try fallback lookup
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

    // Populate cache for all lessons within this chapter
    const grouped = new Map<string, PracticeExercise[]>();
    for (const ex of chapterList) {
      if (!grouped.has(ex.lessonId)) {
        grouped.set(ex.lessonId, []);
      }
      grouped.get(ex.lessonId)!.push(ex);
    }

    for (const [lId, exList] of grouped.entries()) {
      // Sort by order ascending
      exList.sort((a, b) => a.order - b.order);
      lessonExercisesCache.set(lId, exList);
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
  return {
    total: exercises.length,
    coBan: exercises.filter(e => e.difficulty === 'co_ban').length,
    thongHieu: exercises.filter(e => e.difficulty === 'thong_hieu').length,
    vanDung: exercises.filter(e => e.difficulty === 'van_dung').length
  };
}

/**
 * Filter exercises by difficulty tier
 */
export function filterExercises(
  exercises: PracticeExercise[],
  filter: ExerciseDifficulty | 'all'
): PracticeExercise[] {
  if (filter === 'all') return exercises;
  return exercises.filter(e => e.difficulty === filter);
}
