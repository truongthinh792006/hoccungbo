import { CurriculumData, Subject, TextbookSeries, Unit } from '../types/curriculum';
import { 
  lessonToanKNTTBai1, 
  lessonToanKNTTBai2, 
  lessonToanKNTTBai3, 
  lessonToanKNTTBai4, 
  lessonToanKNTTBai5,
  lessonKHTNKNTTBai1,
  lessonKHTNKNTTBai2,
  lessonKHTNKNTTBai3,
  lessonKHTNKNTTBai4
} from './mockLessons';

export const textbookSeriesList: TextbookSeries[] = [
  {
    id: 'ket-noi-tri-thuc',
    name: 'Kết nối tri thức với cuộc sống',
    publisher: 'NXB Giáo dục Việt Nam (Bộ SGK phổ biến chuẩn quốc gia)',
    color: 'from-blue-600 to-indigo-600',
    badge: 'Kết nối tri thức (Chuẩn quốc gia)'
  },
  {
    id: 'canh-dieu',
    name: 'Cánh Diều',
    publisher: 'NXB Đại học Sư phạm / NXB ĐH Sư phạm TP.HCM',
    color: 'from-amber-500 to-orange-500',
    badge: 'Bộ Cánh Diều'
  },
  {
    id: 'chan-troi-sang-tao',
    name: 'Chân trời sáng tạo',
    publisher: 'NXB Giáo dục Việt Nam',
    color: 'from-emerald-500 to-teal-600',
    badge: 'Chân trời sáng tạo'
  }
];

export const subjectsList: Subject[] = [
  {
    id: 'toan',
    name: 'Toán 7',
    grade: 7,
    iconName: 'Calculator',
    themeColor: 'emerald',
    description: 'Số hữu tỉ, số thực, góc & hai đường thẳng song song, tam giác bằng nhau, xác suất thống kê.'
  },
  {
    id: 'khtn',
    name: 'Khoa học tự nhiên 7',
    grade: 7,
    iconName: 'Atom',
    themeColor: 'sky',
    description: 'Nguyên tử, bảng tuần hoàn, phân tử, tốc độ chuyển động, âm thanh, ánh sáng, từ trường.'
  },
  {
    id: 'ngu-van',
    name: 'Ngữ văn 7',
    grade: 7,
    iconName: 'BookOpen',
    themeColor: 'rose',
    description: 'Bầu trời tuổi thơ, khúc nhạc tâm hồn, hình ảnh người dũng sĩ, tiếng nói của vạn vật.'
  },
  {
    id: 'tieng-anh',
    name: 'Tiếng Anh 7 (Global Success)',
    grade: 7,
    iconName: 'Globe',
    themeColor: 'indigo',
    description: 'Hobbies, Healthy Living, Community Service, Music and Arts, Natural Disasters.'
  },
  {
    id: 'tin-hoc',
    name: 'Tin học 7',
    grade: 7,
    iconName: 'Cpu',
    themeColor: 'amber',
    description: 'Thiết bị vào - ra, phần mềm bảng tính Excel, mạng xã hội và kênh truyền thông số.'
  }
];

export const initialUnits: Unit[] = [
  // ============================================================================
  // TOÁN 7 - BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ============================================================================
  {
    id: 'chuong_1_so_huu_ti',
    subjectId: 'toan',
    seriesId: 'ket-noi-tri-thuc',
    order: 1,
    title: 'Chương I: Số Hữu Tỉ',
    description: 'Tập hợp các số hữu tỉ, biểu diễn trên trục số, 4 phép tính cơ bản, lũy thừa với số mũ tự nhiên, thứ tự phép tính và quy tắc chuyển vế.',
    lessons: [
      lessonToanKNTTBai1, // Bài 1: Tập hợp các số hữu tỉ
      lessonToanKNTTBai2, // Bài 2: Cộng, trừ, nhân, chia số hữu tỉ
      lessonToanKNTTBai3, // Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ
      lessonToanKNTTBai4, // Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế
      lessonToanKNTTBai5  // Bài 5: Luyện tập chung & Bài tập cuối Chương I
    ]
  },
  {
    id: 'chuong_2_so_thuc',
    subjectId: 'toan',
    seriesId: 'ket-noi-tri-thuc',
    order: 2,
    title: 'Chương II: Số Thực',
    description: 'Số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học, tập hợp số thực và giá trị tuyệt đối.',
    lessons: [
      {
        id: 'bai_6_so_thap_phan_vo_han_tuan_hoan',
        unitId: 'chuong_2_so_thuc',
        subjectId: 'toan',
        seriesId: 'ket-noi-tri-thuc',
        order: 6,
        title: 'Bài 5: Làm quen với số thập phân vô hạn tuần hoàn',
        subtitle: 'Chương II: Số thực • Bộ sách Kết nối tri thức với cuộc sống',
        estimatedStudyTimeMinutes: 40,
        targetCompetencies: [
          {
            id: 'tc-kntt-t06-1',
            level: 'biet',
            code: 'KNTT-T06-01',
            description: 'Nhận biết số thập phân hữu hạn và số thập phân vô hạn tuần hoàn.',
            mastered: false
          }
        ],
        keyConcepts: [],
        practiceDrills: [],
        dinnerConversationPrompts: []
      },
      {
        id: 'bai_7_so_vo_ti_can_bac_hai',
        unitId: 'chuong_2_so_thuc',
        subjectId: 'toan',
        seriesId: 'ket-noi-tri-thuc',
        order: 7,
        title: 'Bài 6: Số vô tỉ. Căn bậc hai số học',
        subtitle: 'Chương II: Số thực • Bộ sách Kết nối tri thức với cuộc sống',
        estimatedStudyTimeMinutes: 45,
        targetCompetencies: [
          {
            id: 'tc-kntt-t07-1',
            level: 'hieu',
            code: 'KNTT-T07-01',
            description: 'Nhận biết khái niệm số vô tỉ và tính căn bậc hai số học của một số không âm.',
            mastered: false
          }
        ],
        keyConcepts: [],
        practiceDrills: [],
        dinnerConversationPrompts: []
      }
    ]
  },

  // ============================================================================
  // KHOA HỌC TỰ NHIÊN 7 - BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ============================================================================
  {
    id: 'unit-khtn-ch1',
    subjectId: 'khtn',
    seriesId: 'ket-noi-tri-thuc',
    order: 1,
    title: 'Chương I: Nguyên Tử - Sơ Lược Bảng Tuần Hoàn Các Nguyên Tố Hóa Học',
    description: 'Phương pháp học tập KHTN, mô hình nguyên tử Rutherford - Bohr, hạt nhân và lớp vỏ, nguyên tố hóa học và cấu trúc bảng tuần hoàn Men-đê-lê-ép.',
    lessons: [
      lessonKHTNKNTTBai1, // Bài 1: Phương pháp và kĩ năng học tập KHTN
      lessonKHTNKNTTBai2, // Bài 2: Nguyên tử
      lessonKHTNKNTTBai3, // Bài 3: Nguyên tố hóa học
      lessonKHTNKNTTBai4  // Bài 4: Sơ lược về Bảng tuần hoàn các nguyên tố hóa học
    ]
  },

  // ============================================================================
  // NGỮ VĂN 7 - BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ============================================================================
  {
    id: 'unit-van-ch1',
    subjectId: 'ngu-van',
    seriesId: 'ket-noi-tri-thuc',
    order: 1,
    title: 'Bài 1: Bầu Trời Tuổi Thơ (Truyện ngắn & Thực hành Tiếng Việt)',
    description: 'Trải nghiệm cuộc sống, bồi dưỡng tình yêu thương con người và vạn vật thiên nhiên qua truyện ngắn giàu cảm xúc.',
    lessons: [
      {
        id: 'van7-bai-1-bay-chim-chia-voi',
        unitId: 'unit-van-ch1',
        subjectId: 'ngu-van',
        seriesId: 'ket-noi-tri-thuc',
        order: 1,
        title: 'Bầy chim chìa vôi (Nguyễn Quang Thiều)',
        subtitle: 'Đọc hiểu văn bản & Lòng trắc ẩn trong sáng của trẻ thơ',
        estimatedStudyTimeMinutes: 40,
        targetCompetencies: [
          {
            id: 'tc-van-01',
            level: 'hieu',
            code: 'NLNV-01',
            description: 'Phân tích được tâm lý, hành động dũng cảm cứu chim non của hai anh em Mên và Mon trong đêm mưa lũ.',
            mastered: true
          }
        ],
        keyConcepts: [],
        practiceDrills: [],
        dinnerConversationPrompts: [
          {
            question: 'Hôm nay học truyện Bầy chim chìa vôi, nếu ở vào hoàn cảnh của hai bạn Mon và Mên giữa đêm mưa bão, con có dám chèo đò ra sông cứu chim non không?',
            contextForParent: 'Lắng nghe sự thấu cảm và lòng dũng cảm của con, khích lệ tình yêu thiên nhiên.',
            suggestedFollowUp: 'Điều gì khiến hai bạn nhỏ bật khóc khi nhìn thấy bầy chim cất cánh bay lên hả con?',
            expectedChildTakeaway: 'Con cảm nhận được vẻ đẹp của sự sống và niềm hạnh phúc khi làm một việc tốt.'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // TIẾNG ANH 7 - GLOBAL SUCCESS (BỘ GIÁO DỤC VIỆT NAM)
  // ============================================================================
  {
    id: 'unit-eng-ch1',
    subjectId: 'tieng-anh',
    seriesId: 'ket-noi-tri-thuc',
    order: 1,
    title: 'Unit 1: Hobbies (Sở Thích Cá Nhân)',
    description: 'Từ vựng về sở thích, thì Hiện tại đơn (Present Simple) và cấu trúc động từ chỉ sự yêu thích (like, love, enjoy + V-ing).',
    lessons: [
      {
        id: 'eng7-u1-hobbies',
        unitId: 'unit-eng-ch1',
        subjectId: 'tieng-anh',
        seriesId: 'ket-noi-tri-thuc',
        order: 1,
        title: 'A Closer Look 1 & 2: Present Simple & Verbs of Liking',
        subtitle: 'Thì hiện tại đơn và các động từ chỉ sự yêu thích',
        estimatedStudyTimeMinutes: 35,
        targetCompetencies: [
          {
            id: 'tc-eng-01',
            level: 'biet',
            code: 'NLE-01',
            description: 'Use the present simple for habits and general truths.',
            mastered: true
          }
        ],
        keyConcepts: [],
        practiceDrills: [],
        dinnerConversationPrompts: [
          {
            question: 'Can you tell me in English: What do you enjoy doing most after school?',
            contextForParent: 'Tạo cơ hội tự nhiên cho con nói tiếng Anh đơn giản.',
            suggestedFollowUp: 'And what does our family love doing together on Sundays?',
            expectedChildTakeaway: 'Con phản xạ tiếng Anh tự nhiên: I enjoy reading/cycling...'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // TIN HỌC 7 - BỘ KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ============================================================================
  {
    id: 'unit-tin-ch1',
    subjectId: 'tin-hoc',
    seriesId: 'ket-noi-tri-thuc',
    order: 1,
    title: 'Chủ đề 1: Máy Tính & Cộng Đồng',
    description: 'Thiết bị vào - ra, các cổng kết nối phổ biến và quy tắc an toàn khi sử dụng thiết bị số.',
    lessons: [
      {
        id: 'tin7-thiet-bi-vao-ra',
        unitId: 'unit-tin-ch1',
        subjectId: 'tin-hoc',
        seriesId: 'ket-noi-tri-thuc',
        order: 1,
        title: 'Bài 1: Thiết bị vào và thiết bị ra',
        subtitle: 'Phân loại chuột, bàn phím, màn hình, máy in và cách kết nối',
        estimatedStudyTimeMinutes: 30,
        targetCompetencies: [
          {
            id: 'tc-tin-01',
            level: 'biet',
            code: 'NLTIN-01',
            description: 'Phân biệt được thiết bị vào (thu nhận thông tin) và thiết bị ra (xuất thông tin).',
            mastered: true
          }
        ],
        keyConcepts: [],
        practiceDrills: [],
        dinnerConversationPrompts: [
          {
            question: 'Màn hình cảm ứng điện thoại của bố mẹ là thiết bị vào hay thiết bị ra con nhỉ?',
            contextForParent: 'Khơi gợi tư duy công nghệ: Màn hình cảm ứng vừa là thiết bị vào vừa là thiết bị ra.',
            suggestedFollowUp: 'Thế cái tai nghe có micro thì sao?',
            expectedChildTakeaway: 'Con phân tích tự tin các thiết bị công nghệ hiện đại.'
          }
        ]
      }
    ]
  }
];

export const fullCurriculumData: CurriculumData = {
  series: textbookSeriesList,
  subjects: subjectsList,
  units: initialUnits
};
