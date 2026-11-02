import { DailyProgressSummary, DinnerConversationPrompt, ParentEncouragementNote, ParentGoal, RewardMilestone } from '../types/parent';

export const initialDailyProgress: DailyProgressSummary = {
  date: 'Hôm nay, 02/11/2026',
  totalMinutesSpent: 52,
  overallAccuracy: 84,
  lessonsCovered: [
    {
      lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
      subjectName: 'Toán 7 (KNTT)',
      lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
      accuracyRate: 90,
      completedAt: '19:45',
      status: 'completed'
    },
    {
      lessonId: 'khtn7-nguyen-tu-nguyen-to',
      subjectName: 'KHTN 7 (KNTT)',
      lessonTitle: 'Bài 2: Nguyên tử',
      accuracyRate: 85,
      completedAt: '20:20',
      status: 'completed'
    }
  ],
  weakConceptsSummary: [
    {
      concept: 'So sánh số hữu tỉ âm (khi tử hoặc mẫu có dấu trừ)',
      subject: 'Toán 7',
      explanationForParent: 'Học sinh thường quên quy tắc so sánh số âm: số có giá trị tuyệt đối lớn hơn thì lại nhỏ hơn (ví dụ: -9 > -10 nên -9/12 > -10/12).',
      suggestedHelp: 'Nhắc con nhớ hình ảnh trục số: số nào nằm về phía bên phải thì luôn lớn hơn số bên trái!'
    },
    {
      concept: 'Khối lượng nguyên tử tính theo đơn vị amu',
      subject: 'Khoa học tự nhiên 7',
      explanationForParent: 'Con hay cộng cả khối lượng electron vào khiến phép tính bị rối, trong khi khối lượng electron quá nhỏ bé nên khoa học quy ước bỏ qua.',
      suggestedHelp: 'Gợi ý cho con ví dụ: Như con cân một chiếc cặp sách nặng 3kg, một hạt bụi đậu lên cặp thì khối lượng chiếc cặp vẫn là 3kg.'
    }
  ]
};

export const dinnerConversationPromptsList: DinnerConversationPrompt[] = [
  {
    id: 'dcp-kntt-1',
    subjectName: 'Toán 7 (Kết nối tri thức)',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    category: 'khởi_động',
    promptText: 'Hôm nay con học số hữu tỉ, con giải thích nhanh cho mẹ số hữu tỉ khác số nguyên chỗ nào?',
    whyThisQuestion: 'Câu hỏi kích thích con tự hào giải thích bản chất mở rộng từ tập hợp số nguyên Z lên tập số hữu tỉ Q một cách ngắn gọn, súc tích.',
    howToReact: {
      ifChildKnows: 'Tán thưởng: "Hay quá! Nghĩa là mọi số nguyên đều là số hữu tỉ, nhưng số hữu tỉ thì có thêm cả phân số với số thập phân nữa con nhỉ!"',
      ifChildHesitant: 'Gợi mở: "Mẹ nhớ loáng thoáng số hữu tỉ là mọi số viết được dưới dạng phân số a/b (mẫu khác 0). Số nguyên n = n/1 nên cũng là số hữu tỉ đúng không con?"'
    },
    sampleChildAnswer: 'Số nguyên chỉ gồm các số nguyên âm, số 0 và số nguyên dương thôi mẹ ạ; còn số hữu tỉ thì bao gồm cả số nguyên, phân số và số thập phân vì đều viết được thành dạng a/b (b khác 0)!'
  },
  {
    id: 'dcp-kntt-2',
    subjectName: 'Toán 7 (Kết nối tri thức)',
    lessonTitle: 'Bài 1: Tập hợp các số hữu tỉ',
    category: 'đào_sâu',
    promptText: 'Một phân số như -3/4 biểu diễn trên trục số nằm bên trái hay bên phải số 0 hả con?',
    whyThisQuestion: 'Kiểm tra phản xạ hình học về trục số: Số âm luôn nằm bên trái điểm gốc 0, số dương nằm bên phải.',
    howToReact: {
      ifChildKnows: 'Hỏi tiếp vui vẻ: "Chuẩn luôn! Thế số đối của -3/4 là số nào và nó nằm ở phía nào hả con?"',
      ifChildHesitant: 'Gợi ý: "Dấu trừ (-) biểu thị giá trị nhỏ hơn 0, vậy trên thước kẻ nằm ngang nó sẽ quay về bên nào con nhỉ?"'
    },
    sampleChildAnswer: 'Dạ nằm bên trái số 0 mẹ ạ! Vì -3/4 là số âm, số nào nhỏ hơn 0 đều nằm về phía bên trái!'
  },
  {
    id: 'dcp-1',
    subjectName: 'Toán 7',
    lessonTitle: 'Số hữu tỉ & Thực tế cuộc sống',
    category: 'khởi_động',
    promptText: 'Mẹ nghe nói hôm nay con học bài số hữu tỉ. Nghe tên hơi "hàn lâm", thế nó khác gì phân số hay số thập phân con học hồi lớp 5 và 6 nhỉ?',
    whyThisQuestion: 'Câu hỏi nhẹ nhàng khơi gợi, không áp lực kiểm tra bài cũ, giúp trẻ tự hào giải thích thuật ngữ học thuật bằng ngôn ngữ của chính mình.',
    howToReact: {
      ifChildKnows: 'Khen ngợi: "À ra là vậy! Thế mà trước giờ mẹ cứ tưởng số hữu tỉ là một loại số cao siêu lắm cơ đấy!"',
      ifChildHesitant: 'Gợi mở: "Mẹ nhớ loáng thoáng hình như bất kỳ số nào viết được thành một phân số a/b (mẫu khác 0) thì đều là số hữu tỉ thì phải, đúng không con?"'
    },
    sampleChildAnswer: 'Dạ, số hữu tỉ là mọi số viết được dưới dạng phân số a/b ạ. Số 3 cũng là số hữu tỉ vì viết được là 3/1 mẹ ạ!'
  },
  {
    id: 'dcp-2',
    subjectName: 'Khoa học tự nhiên 7',
    lessonTitle: 'Nguyên tử - Mô hình Rutherford - Bohr',
    category: 'đào_sâu',
    promptText: 'Con có biết cơ thể chúng mình hay cái thìa, hạt cơm này nếu phóng to hàng tỷ lần thì gồm những hạt siêu nhỏ gì không?',
    whyThisQuestion: 'Kích thích trí tò mò khoa học và hình dung về thế giới vi mô kỳ thú quanh ta.',
    howToReact: {
      ifChildKnows: 'Hào hứng hỏi tiếp: "Thế nguyên tử có hạt nhân ở giữa, xung quanh có electron quay như Hệ Mặt Trời thật hả con?"',
      ifChildHesitant: 'Khích lệ: "Bố nhớ có 3 hạt gì tên là proton, neutron với electron ấy nhỉ?"'
    },
    sampleChildAnswer: 'Dạ là nguyên tử ạ! Bên trong có hạt nhân chứa proton mang điện dương, neutron không mang điện, và electron quay xung quanh!'
  },
  {
    id: 'dcp-3',
    subjectName: 'Khoa học tự nhiên 7',
    lessonTitle: 'Trung hòa điện trong nguyên tử',
    category: 'gắn_liền_thực_tế',
    promptText: 'Nguyên tử có hạt mang điện dương và hạt mang điện âm, thế tại sao khi hai mẹ con mình chạm vào nhau lại không bị điện giật nhỉ?',
    whyThisQuestion: 'Củng cố hiểu biết cốt lõi: Nguyên tử luôn trung hòa về điện (số proton = số electron).',
    howToReact: {
      ifChildKnows: 'Tán thưởng: "Hay quá! Dương với âm triệt tiêu lẫn nhau, toán với lý kết hợp tuyệt vời thật!"',
      ifChildHesitant: 'Gợi ý: "Có phải vì số hạt điện tích dương với điện tích âm bằng nhau nên cộng lại bằng 0 không con?"'
    },
    sampleChildAnswer: 'Vì nguyên tử trung hòa về điện ạ! Số proton mang điện dương bằng đúng số electron mang điện âm nên tổng điện tích bằng 0!'
  }
];

export const initialRewardMilestones: RewardMilestone[] = [
  {
    id: 'rm-1',
    title: 'Huy hiệu "Nhà Thám Hiểm Lớp 7"',
    description: 'Hoàn thành trọn vẹn 3 bài học đầu tiên của học kì I',
    targetCount: 3,
    currentCount: 2,
    unit: 'bài học',
    rewardOffer: 'Cuối tuần được tự do chọn một bộ phim yêu thích xem cùng cả nhà 🎬',
    isAchieved: false,
    icon: 'Compass'
  },
  {
    id: 'rm-2',
    title: 'Chuyên Gia Lập Luận Socratic',
    description: 'Chinh phục 3 lần gợi ý Socratic mà không bỏ cuộc giữa chừng',
    targetCount: 3,
    currentCount: 3,
    unit: 'lần tự tìm tòi',
    rewardOffer: 'Bữa tối thứ Bảy được chọn món ăn yêu thích nhất 🍕',
    isAchieved: true,
    achievedAt: 'Hôm qua',
    icon: 'Award'
  },
  {
    id: 'rm-3',
    title: 'Bậc Thầy Điểm 10 Luyện Tập',
    description: 'Đạt độ chính xác trên 85% trong 5 bài kiểm tra ngắn liên tiếp',
    targetCount: 5,
    currentCount: 4,
    unit: 'bài đạt chuẩn',
    rewardOffer: 'Một chuyến đi hiệu sách chọn cuốn truyện con yêu thích 📚',
    isAchieved: false,
    icon: 'Sparkles'
  }
];

export const initialParentGoals: ParentGoal[] = [
  {
    id: 'goal-1',
    title: 'Mục tiêu tuần này: Hoàn thành 4 bài học trọng tâm',
    category: 'weekly_lessons',
    targetValue: 4,
    currentValue: 2,
    startDate: '2026-11-02',
    endDate: '2026-11-08',
    status: 'active'
  },
  {
    id: 'goal-2',
    title: 'Giữ vững chuỗi tự học 5 ngày liên tiếp',
    category: 'study_streak',
    targetValue: 5,
    currentValue: 3,
    startDate: '2026-10-31',
    endDate: '2026-11-04',
    status: 'active'
  }
];

export const initialEncouragementNotes: ParentEncouragementNote[] = [
  {
    id: 'note-1',
    author: 'Mẹ',
    date: 'Hôm nay, 18:30',
    message: 'Mẹ thấy hôm nay con chủ động ngồi vào bàn học bài Số hữu tỉ mà không cần nhắc nhở. Con của mẹ rất tự giác, tự hào về con lắm! Cố lên nhé!',
    sticker: '🌟',
    readByStudent: true
  },
  {
    id: 'note-2',
    author: 'Bố',
    date: 'Hôm qua, 21:00',
    message: 'Bố xem qua bài trắc nghiệm KHTN con giải đúng câu mô hình nguyên tử rất thông minh. Cuối tuần hai bố con mình cùng làm thí nghiệm nhỏ nhé!',
    sticker: '🚀',
    readByStudent: false
  }
];
