import { Math7Lesson, ChapterMeta } from '../types/curriculum';
import { chapter1Lessons } from './curriculum/chapter1';
import { chapter2Lessons } from './curriculum/chapter2';
import { chapter3Lessons } from './curriculum/chapter3';
import { chapter4Lessons } from './curriculum/chapter4';

// Normalize each lesson to ensure both standard and convenience aliases are fully populated
function enrichLesson(lesson: Math7Lesson): Math7Lesson {
  return {
    ...lesson,
    unit: lesson.unit || lesson.chapterTitle,
    competencies: lesson.learningTargets,
    keyTakeaways: lesson.coreConcepts,
    parentCheatsheet: lesson.dinnerPrompts,
    quiz: lesson.diagnosticQuiz
  };
}

// Master Curriculum Lessons Array (All 19 lessons across Chapters 1 to 4)
export const math7CurriculumLessons: Math7Lesson[] = [
  ...chapter1Lessons,
  ...chapter2Lessons,
  ...chapter3Lessons,
  ...chapter4Lessons
].map(enrichLesson);

// Chapter Metadata Registry
export const math7Chapters: ChapterMeta[] = [
  {
    id: 'chuong_1_so_huu_ti',
    order: 1,
    title: 'Chương I: Số Hữu Tỉ',
    shortTitle: 'Chương I',
    description: 'Tập hợp số hữu tỉ Q, 4 phép tính cơ bản, quy tắc lũy thừa số mũ tự nhiên, thứ tự phép tính và chuyển vế.',
    lessonIds: chapter1Lessons.map(l => l.id),
    themeColor: 'emerald',
    iconName: 'Calculator'
  },
  {
    id: 'chuong_2_so_thuc',
    order: 2,
    title: 'Chương II: Số Thực',
    shortTitle: 'Chương II',
    description: 'Số thập phân vô hạn tuần hoàn, số vô tỉ I, căn bậc hai số học, tập số thực R, giá trị tuyệt đối và làm tròn.',
    lessonIds: chapter2Lessons.map(l => l.id),
    themeColor: 'teal',
    iconName: 'Percent'
  },
  {
    id: 'chuong_3_goc_duong_thang_song_song',
    order: 3,
    title: 'Chương III: Góc và Đường Thẳng Song Song',
    shortTitle: 'Chương III',
    description: 'Góc kề bù, đối đỉnh, tia phân giác, góc so le trong, đồng vị, tiên đề Euclid và chứng minh định lí.',
    lessonIds: chapter3Lessons.map(l => l.id),
    themeColor: 'indigo',
    iconName: 'Compass'
  },
  {
    id: 'chuong_4_tam_giac_bang_nhau',
    order: 4,
    title: 'Chương IV: Tam Giác Bằng Nhau',
    shortTitle: 'Chương IV',
    description: 'Tổng ba góc trong tam giác (180°), các trường hợp c.c.c, c.g.c, g.c.g, tam giác vuông, tam giác cân và đường trung trực.',
    lessonIds: chapter4Lessons.map(l => l.id),
    themeColor: 'purple',
    iconName: 'Shapes'
  }
];

// Query Helpers
export function getLessonById(id: string): Math7Lesson | undefined {
  return math7CurriculumLessons.find(lesson => lesson.id === id);
}

export function getLessonsByChapter(chapterId: string): Math7Lesson[] {
  return math7CurriculumLessons.filter(lesson => lesson.chapterId === chapterId);
}

export function getChapterById(chapterId: string): ChapterMeta | undefined {
  return math7Chapters.find(ch => ch.id === chapterId);
}

export function getNextLesson(currentLessonId: string): Math7Lesson | undefined {
  const index = math7CurriculumLessons.findIndex(l => l.id === currentLessonId);
  if (index >= 0 && index < math7CurriculumLessons.length - 1) {
    return math7CurriculumLessons[index + 1];
  }
  return undefined;
}

export function getPrevLesson(currentLessonId: string): Math7Lesson | undefined {
  const index = math7CurriculumLessons.findIndex(l => l.id === currentLessonId);
  if (index > 0) {
    return math7CurriculumLessons[index - 1];
  }
  return undefined;
}

export function searchLessons(query: string): Math7Lesson[] {
  const q = query.trim().toLowerCase();
  if (!q) return math7CurriculumLessons;

  return math7CurriculumLessons.filter(l => 
    l.title.toLowerCase().includes(q) ||
    l.subtitle.toLowerCase().includes(q) ||
    l.chapterTitle.toLowerCase().includes(q) ||
    l.coreConcepts.some(c => c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q))
  );
}

// Re-export individual chapters for granular imports
export {
  chapter1Lessons,
  chapter2Lessons,
  chapter3Lessons,
  chapter4Lessons
};
