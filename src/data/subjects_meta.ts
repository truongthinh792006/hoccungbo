import { SubjectId } from '../types/curriculum';

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  grade: number;
  seriesName: string;
  publisher: string;
  status: 'active' | 'coming_soon';
  tagline: string;
  description: string;
  stats: {
    unitsCount: string;
    exercisesCount?: string;
    featureHighlight: string;
  };
  gradient: string;
  accentColor: string;
  badgeColor: string;
  iconName: 'calculator' | 'languages' | 'atom' | 'book-open';
}

export const SUBJECTS_REGISTRY: SubjectMeta[] = [
  {
    id: 'toan',
    name: 'Toán 7',
    grade: 7,
    seriesName: 'Kết nối tri thức với cuộc sống',
    publisher: 'NXB Giáo dục Việt Nam',
    status: 'active',
    tagline: 'Số học, Đại số & Hình học trực quan',
    description: 'Học lý thuyết tương tác, luyện 496 bài tập theo chuẩn năng lực GDPT 2018, phòng thi thử 45 phút và sổ tay phục thù câu sai.',
    stats: {
      unitsCount: '9 Chương (38 Bài)',
      exercisesCount: '496 bài luyện tập',
      featureHighlight: 'Phòng thi thử & Sổ tay câu sai'
    },
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    accentColor: 'emerald',
    badgeColor: 'bg-emerald-500 text-white',
    iconName: 'calculator'
  },
  {
    id: 'tieng-anh',
    name: 'Tiếng Anh 7',
    grade: 7,
    seriesName: 'Global Success',
    publisher: 'NXB Giáo dục Việt Nam & Pearson',
    status: 'active',
    tagline: 'Từ vựng, Ngữ pháp & Giao tiếp phản xạ',
    description: 'Học từ vựng qua flashcard thông minh có phát âm chuẩn, nắm vững ngữ pháp trọng tâm và luyện đề phản xạ theo từng Unit.',
    stats: {
      unitsCount: '12 Units',
      exercisesCount: 'Sẵn sàng Unit 1: Hobbies',
      featureHighlight: 'Flashcard phát âm & AI English Buddy'
    },
    gradient: 'from-blue-600 via-indigo-600 to-sky-700',
    accentColor: 'indigo',
    badgeColor: 'bg-indigo-500 text-white',
    iconName: 'languages'
  },
  {
    id: 'khtn',
    name: 'Khoa học tự nhiên 7',
    grade: 7,
    seriesName: 'Kết nối tri thức với cuộc sống',
    publisher: 'NXB Giáo dục Việt Nam',
    status: 'coming_soon',
    tagline: 'Vật lí, Hóa học & Sinh học thực nghiệm',
    description: 'Khám phá thế giới tự nhiên qua mô phỏng thí nghiệm tương tác, bảng tuần hoàn và câu hỏi ứng dụng đời sống.',
    stats: {
      unitsCount: '11 Chương',
      exercisesCount: 'Sắp ra mắt',
      featureHighlight: 'Thí nghiệm ảo & Đời sống'
    },
    gradient: 'from-teal-600 via-emerald-600 to-green-700',
    accentColor: 'teal',
    badgeColor: 'bg-slate-600 text-slate-100',
    iconName: 'atom'
  },
  {
    id: 'ngu-van',
    name: 'Ngữ văn 7',
    grade: 7,
    seriesName: 'Kết nối tri thức với cuộc sống',
    publisher: 'NXB Giáo dục Việt Nam',
    status: 'coming_soon',
    tagline: 'Đọc hiểu, Thực hành Tiếng Việt & Tập làm văn',
    description: 'Rèn luyện năng lực đọc hiểu văn bản, nắm chắc ngữ pháp tiếng Việt và dàn ý bài viết biểu cảm, nghị luận.',
    stats: {
      unitsCount: '10 Bài học',
      exercisesCount: 'Sắp ra mắt',
      featureHighlight: 'Sơ đồ tư duy & Dàn ý văn mẫu'
    },
    gradient: 'from-amber-600 via-orange-600 to-rose-700',
    accentColor: 'amber',
    badgeColor: 'bg-slate-600 text-slate-100',
    iconName: 'book-open'
  }
];
