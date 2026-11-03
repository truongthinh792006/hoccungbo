import { Math7Lesson, ChapterMeta } from '../types/curriculum';
import { chapter1Lessons } from './curriculum/chapter1';
import { chapter2Lessons } from './curriculum/chapter2';
import { chapter3Lessons } from './curriculum/chapter3';
import { chapter4Lessons } from './curriculum/chapter4';
import { chapter5Lessons } from './curriculum/chapter5';
import { chapter6Lessons } from './curriculum/chapter6';
import { chapter7Lessons } from './curriculum/chapter7';
import { chapter8Lessons } from './curriculum/chapter8';
import { chapter9Lessons } from './curriculum/chapter9';

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

// Master Curriculum Lessons Array (All lessons across Chapters 1 to 9 - Term 1 & Term 2)
export const math7CurriculumLessons: Math7Lesson[] = [
  ...chapter1Lessons.map(l => ({ ...l, term: (l.term || 1) as (1 | 2) })),
  ...chapter2Lessons.map(l => ({ ...l, term: (l.term || 1) as (1 | 2) })),
  ...chapter3Lessons.map(l => ({ ...l, term: (l.term || 1) as (1 | 2) })),
  ...chapter4Lessons.map(l => ({ ...l, term: (l.term || 1) as (1 | 2) })),
  ...chapter5Lessons.map(l => ({ ...l, term: (l.term || 2) as (1 | 2) })),
  ...chapter6Lessons.map(l => ({ ...l, term: (l.term || 2) as (1 | 2) })),
  ...chapter7Lessons.map(l => ({ ...l, term: (l.term || 2) as (1 | 2) })),
  ...chapter8Lessons.map(l => ({ ...l, term: (l.term || 2) as (1 | 2) })),
  ...chapter9Lessons.map(l => ({ ...l, term: (l.term || 2) as (1 | 2) }))
].map(enrichLesson);

// Chapter Metadata Registry (Full-Year Chapters 1 through 9)
export const math7Chapters: ChapterMeta[] = [
  // --- HỌC KÌ 1 ---
  {
    id: 'chuong_1_so_huu_ti',
    order: 1,
    term: 1,
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
    term: 1,
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
    term: 1,
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
    term: 1,
    title: 'Chương IV: Tam Giác Bằng Nhau',
    shortTitle: 'Chương IV',
    description: 'Tổng ba góc trong tam giác (180°), các trường hợp c.c.c, c.g.c, g.c.g, tam giác vuông, tam giác cân và đường trung trực.',
    lessonIds: chapter4Lessons.map(l => l.id),
    themeColor: 'purple',
    iconName: 'Shapes'
  },
  // --- HỌC KÌ 2 ---
  {
    id: 'chuong_5_thu_thap_va_bieu_dien_du_lieu',
    order: 5,
    term: 2,
    title: 'Chương V: Thu Thập và Biểu Diễn Dữ Liệu',
    shortTitle: 'Chương V',
    description: 'Phương pháp thu thập dữ liệu định tính - định lượng, biểu đồ hình quạt tròn cơ cấu và biểu đồ đoạn thẳng theo thời gian.',
    lessonIds: chapter5Lessons.map(l => l.id),
    themeColor: 'amber',
    iconName: 'BarChart3'
  },
  {
    id: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    order: 6,
    term: 2,
    title: 'Chương VI: Tỉ Lệ Thức và Đại Lượng Tỉ Lệ',
    shortTitle: 'Chương VI',
    description: 'Định nghĩa tỉ lệ thức, tính chất dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận y = kx và tỉ lệ nghịch y = a/x.',
    lessonIds: chapter6Lessons.map(l => l.id),
    themeColor: 'cyan',
    iconName: 'Scale'
  },
  {
    id: 'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien',
    order: 7,
    term: 2,
    title: 'Chương VII: Biểu Thức Đại Số và Đa Thức Một Biến',
    shortTitle: 'Chương VII',
    description: 'Biểu thức đại số, đa thức một biến, bậc và nghiệm của đa thức, cộng trừ nhân chia đa thức.',
    lessonIds: chapter7Lessons.map(l => l.id),
    themeColor: 'blue',
    iconName: 'Binary'
  },
  {
    id: 'chuong_8_bien_co_va_xac_suat',
    order: 8,
    term: 2,
    title: 'Chương VIII: Biến Cố và Xác Suất Của Biến Cố',
    shortTitle: 'Chương VIII',
    description: 'Biến cố chắc chắn, không thể, ngẫu nhiên và công thức xác suất cổ điển P(A) = m/n trong mô hình đồng khả năng.',
    lessonIds: chapter8Lessons.map(l => l.id),
    themeColor: 'rose',
    iconName: 'Dices'
  },
  {
    id: 'chuong_9_quan_he_cac_yeu_to_tam_giac',
    order: 9,
    term: 2,
    title: 'Chương IX: Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác',
    shortTitle: 'Chương IX',
    description: 'Góc và cạnh đối diện, đường vuông góc và đường xiên, bất đẳng thức tam giác, sự đồng quy của 4 đường đặc biệt (G, I, O, H).',
    lessonIds: chapter9Lessons.map(l => l.id),
    themeColor: 'violet',
    iconName: 'Triangle'
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
