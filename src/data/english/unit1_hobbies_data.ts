export interface EnglishExercise {
  id: string;
  category: 'vocabulary' | 'pronunciation' | 'grammar' | 'reading';
  level: 'nhan_biet' | 'thong_hieu' | 'van_dung';
  title: string;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
}

export interface EnglishVocabWord {
  id: string;
  word: string;
  type: string;
  ipa: string;
  meaning: string;
  collocation?: string;
  example: string;
}

export const UNIT1_VOCABULARY: EnglishVocabWord[] = [
  { id: 'v01', word: 'hobby', type: 'n', ipa: '/ˈhɒbi/', meaning: 'sở thích, thú vui khi rảnh rỗi', collocation: 'take up a hobby (bắt đầu một sở thích)', example: 'My father took up gardening as a hobby after retiring.' },
  { id: 'v02', word: 'origami', type: 'n', ipa: '/ˌɒrɪˈɡɑːmi/', meaning: 'nghệ thuật gấp giấy Nhật Bản', collocation: 'do origami / make origami', example: 'Doing origami requires a lot of patience.' },
  { id: 'v03', word: 'horse riding', type: 'n', ipa: '/ˈhɔːs raɪdɪŋ/', meaning: 'môn cưỡi ngựa', collocation: 'go horse riding', example: 'We often go horse riding in the countryside during the summer.' },
  { id: 'v04', word: 'gardening', type: 'n', ipa: '/ˈɡɑːdnɪŋ/', meaning: 'công việc làm vườn', collocation: 'do gardening / love gardening', example: 'Gardening helps us connect with nature and stay healthy.' },
  { id: 'v05', word: 'dollhouse', type: 'n', ipa: '/ˈdɒlhaʊs/', meaning: 'ngôi nhà búp bê thu nhỏ', collocation: 'build a dollhouse / make dollhouses', example: 'My sister spends hours making tiny cardboard furniture for her dollhouse.' },
  { id: 'v06', word: 'collecting', type: 'n', ipa: '/kəˈlektɪŋ/', meaning: 'sự sưu tầm', collocation: 'collect coins / stamps / postcards', example: 'Collecting old stamps is a very popular hobby worldwide.' },
  { id: 'v07', word: 'fragile', type: 'adj', ipa: '/ˈfrædʒaɪl/', meaning: 'mỏng manh, dễ vỡ', collocation: 'fragile objects / fragile eggshells', example: 'Carved eggshells are extremely fragile, so handle them with care.' },
  { id: 'v08', word: 'carve', type: 'v', ipa: '/kɑːv/', meaning: 'chạm khắc, đục đẽo', collocation: 'carve wood / carve eggshells', example: 'He can carve amazing animal figures out of empty eggshells.' },
  { id: 'v09', word: 'patient', type: 'adj', ipa: '/ˈpeɪʃnt/', meaning: 'kiên nhẫn, kiên trì', collocation: 'be patient with somebody/something', example: 'You need to be patient if you want to complete this 1000-piece puzzle.' },
  { id: 'v10', word: 'creative', type: 'adj', ipa: '/kriˈeɪtɪv/', meaning: 'sáng tạo', collocation: 'creative hobby / creative thinking', example: 'Painting is a creative hobby that lets you express your feelings.' },
  { id: 'v11', word: 'unique', type: 'adj', ipa: '/juˈniːk/', meaning: 'độc đáo, độc nhất vô nhị', collocation: 'a unique gift / unique artwork', example: 'Each handmade greeting card is completely unique.' },
  { id: 'v12', word: 'relaxing', type: 'adj', ipa: '/rɪˈlæksɪŋ/', meaning: 'thư giãn, thoải mái', collocation: 'a relaxing hobby / feel relaxed', example: 'Listening to soft music after school is very relaxing.' }
];

export const UNIT1_EXERCISES: EnglishExercise[] = [
  // CATEGORY 1: VOCABULARY & COLLOCATIONS (5 QUESTIONS)
  {
    id: 'u01_q01',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Cụm từ chỉ sở thích',
    question: 'My brother loves making things with his hands. He enjoys making _____ from paper, like birds and flowers.',
    options: ['origami', 'models', 'gardening', 'coins'],
    correctIndex: 0,
    hint: 'Nghệ thuật gấp giấy Nhật Bản tạo thành hình động vật, hoa sen gọi là gì?',
    explanation: 'Đáp án đúng là "origami" (nghệ thuật gấp giấy Nhật Bản). Các từ còn lại: models (mô hình), gardening (làm vườn), coins (tiền xu).'
  },
  {
    id: 'u01_q02',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Động từ đi kèm sở thích',
    question: 'My grandparents love flowers and vegetables, so they do _____ every morning in their backyard.',
    options: ['horse riding', 'gardening', 'judo', 'swimming'],
    correctIndex: 1,
    hint: 'Hoạt động trồng rau hoa ở sân sau nhà gắn với từ làm vườn.',
    explanation: 'Cụm từ cố định trong bài học: "do gardening" (làm vườn). backyard = sân sau nhà.'
  },
  {
    id: 'u01_q03',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Từ vựng: Tính từ miêu tả đồ vật dễ vỡ',
    question: 'Eggshell carving is a delicate art because eggshells are very _____ and easy to break.',
    options: ['creative', 'fragile', 'valuable', 'dangerous'],
    correctIndex: 1,
    hint: 'Vỏ trứng mỏng, rất dễ vỡ. Từ nào có nghĩa là "mỏng manh, dễ vỡ"?',
    explanation: 'Tính từ "fragile" có nghĩa là mỏng manh, dễ vỡ (synonym của easily broken). Các từ khác: creative (sáng tạo), valuable (quý giá), dangerous (nguy hiểm).'
  },
  {
    id: 'u01_q04',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Cụm động từ: Bắt đầu một sở thích',
    question: 'Peter decided to _____ cycling last month because he wanted to keep fit and healthy.',
    options: ['take up', 'give up', 'look after', 'turn off'],
    correctIndex: 0,
    hint: 'Cụm phrasal verb mang nghĩa "bắt đầu một sở thích hoặc thói quen mới".',
    explanation: 'Cụm "take up a hobby" mang nghĩa bắt đầu một thói quen/sở thích mới. "give up" là từ bỏ; "look after" là chăm sóc; "turn off" là tắt.'
  },
  {
    id: 'u01_q05',
    category: 'vocabulary',
    level: 'van_dung',
    title: 'Từ vựng: Tính từ chỉ phẩm chất cần có',
    question: 'To carve a delicate flower on an eggshell, an artist must be extremely _____ and careful.',
    options: ['impatient', 'boring', 'patient', 'noisy'],
    correctIndex: 2,
    hint: 'Điêu khắc vỏ trứng cần người nghệ nhân phải có đức tính "kiên nhẫn, nhẫn nại".',
    explanation: 'Đáp án là "patient" (kiên nhẫn). "impatient" (thiếu kiên nhẫn) trái nghĩa; "boring" (nhàm chán); "noisy" (ồn ào).'
  },

  // CATEGORY 2: PRONUNCIATION /ə/ & /ɜ:/ (4 QUESTIONS)
  {
    id: 'u01_q06',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ có phát âm âm dài /ɜ:/',
    question: 'Which of the following words has the underlined part pronounced as /ɜ:/? (Trong các từ sau, từ nào có phần gạch chân phát âm là /ɜ:/)?',
    options: ['about', 'away', 'burn', 'answer'],
    correctIndex: 2,
    hint: 'Âm /ɜ:/ là âm dài, thường gặp trong các từ có vần ur, ir, er như bird, turn, hurt...',
    explanation: '"burn" được phát âm là /bɜːn/ (chứa âm dài /ɜ:/). Trong khi đó: "about" /əˈbaʊt/, "away" /əˈweɪ/, "answer" /ˈɑːnsə/ đều chứa âm ngắn /ə/.'
  },
  {
    id: 'u01_q07',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ có phát âm âm ngắn /ə/',
    question: 'Which of the following words has the underlined part pronounced as /ə/ (schwa sound)?',
    options: ['girl', 'birth', 'hurt', 'neighbour'],
    correctIndex: 3,
    hint: 'Các từ girl, birth, hurt đều phát âm là /ɜ:/. Từ còn lại có âm đuôi nhẹ nhàng.',
    explanation: '"neighbour" kết thúc bằng âm schwa nhẹ /ˈneɪbə/. Ba từ còn lại đều chứa âm dài /ɜ:/: "girl" /ɡɜːl/, "birth" /bɜːθ/, "hurt" /hɜːt/.'
  },
  {
    id: 'u01_q08',
    category: 'pronunciation',
    level: 'thong_hieu',
    title: 'Phát âm: Phân biệt âm trong cặp từ',
    question: 'Find the word that has a DIFFERENT sound from the other three:',
    options: ['common', 'collect', 'shirt', 'control'],
    correctIndex: 2,
    hint: 'Xem xét nguyên âm đầu của common, collect, control so với shirt.',
    explanation: '"shirt" chứa âm /ɜː/ (/ʃɜːt/). Ba từ còn lại: "common" /ˈkɒmən/ (âm /ə/ ở cuối), "collect" /kəˈlekt/ (âm /ə/), "control" /kənˈtrəʊl/ (âm /ə/). Do đó "shirt" khác nhóm.'
  },
  {
    id: 'u01_q09',
    category: 'pronunciation',
    level: 'van_dung',
    title: 'Phát âm: Chọn từ có âm /ɜ:/',
    question: 'Choose the word containing the vowel sound /ɜ:/:',
    options: ['doctor', 'surface', 'worker', 'teacher'],
    correctIndex: 2,
    hint: 'Chú ý âm tiết thứ nhất của từ "worker".',
    explanation: '"worker" được phiên âm là /ˈwɜːkə/, trong đó âm tiết đầu mang nguyên âm /ɜː/. Trong các từ "doctor" /ˈdɒktə/, "teacher" /ˈtiːtʃə/, âm đuôi đều là /ə/.'
  },

  // CATEGORY 3: GRAMMAR - PRESENT SIMPLE & VERBS OF LIKING (7 QUESTIONS)
  {
    id: 'u01_q10',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Động từ chỉ sở thích + V-ing',
    question: 'My sister enjoys _____ teddy bears and keeping them on her bookshelf.',
    options: ['collect', 'collecting', 'collected', 'to collecting'],
    correctIndex: 1,
    hint: 'Quy tắc trọng tâm Unit 1: like / love / enjoy / adore + V-ing.',
    explanation: 'Theo cấu trúc ngữ pháp Unit 1: "enjoy + V-ing" (thích làm gì). Do đó dùng "collecting".'
  },
  {
    id: 'u01_q11',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Thì Hiện tại đơn với chủ ngữ số ít',
    question: 'Nam _____ judo three times a week to stay healthy.',
    options: ['do', 'does', 'doing', 'is do'],
    correctIndex: 1,
    hint: 'Chủ ngữ "Nam" là ngôi thứ ba số ít (he), động từ "do" phải chia thêm -es.',
    explanation: 'Với chủ ngữ ngôi thứ 3 số ít (Nam = he), động từ "do" biến đổi thành "does". "Nam does judo three times a week".'
  },
  {
    id: 'u01_q12',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Câu phủ định thì Hiện tại đơn',
    question: 'My parents _____ like watching horror movies; they prefer documentaries.',
    options: ['isn\'t', 'doesn\'t', 'don\'t', 'aren\'t'],
    correctIndex: 2,
    hint: '"My parents" là danh từ số nhiều (bố mẹ = they), trợ động từ phủ định là "don\'t" hay "doesn\'t"?',
    explanation: 'Chủ ngữ "My parents" (bố mẹ) là danh từ số nhiều tương đương đại từ "They". Trợ động từ phủ định ở hiện tại đơn là "don\'t + V-bare".'
  },
  {
    id: 'u01_q13',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Động từ ghét/không thích + V-ing',
    question: 'Linh hates _____ early in the cold winter mornings.',
    options: ['get up', 'gets up', 'getting up', 'got up'],
    correctIndex: 2,
    hint: 'Sau các động từ hate, dislike, love, like ta dùng dạng V-ing. Chú ý quy tắc gấp đôi phụ âm: get -> getting.',
    explanation: 'Cấu trúc "hate + V-ing". Động từ "get" có 1 nguyên âm đứng giữa 2 phụ âm (CVC) nên gấp đôi chữ t trước khi thêm -ing: getting.'
  },
  {
    id: 'u01_q14',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Câu hỏi nghi vấn Thì Hiện tại đơn',
    question: '_____ your sister often go jogging in the park after school?',
    options: ['Do', 'Does', 'Is', 'Are'],
    correctIndex: 1,
    hint: 'Chủ ngữ là "your sister" (ngôi thứ 3 số ít = she) và động từ chính là động từ thường "go".',
    explanation: 'Với chủ ngữ ngôi thứ 3 số ít "your sister" và động từ thường "go", câu hỏi nghi vấn hiện tại đơn dùng trợ động từ "Does": Does + S + V-bare?'
  },
  {
    id: 'u01_q15',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Phối hợp quy tắc chia động từ',
    question: 'Neither of my brothers _____ playing chess because they think it _____ boring.',
    options: ['likes / is', 'like / is', 'likes / are', 'like / are'],
    correctIndex: 0,
    hint: '"Neither of + plural noun" đi với động từ số ít; chủ ngữ "it" đi với to-be "is".',
    explanation: '"Neither of my brothers" đóng vai trò chủ ngữ số ít -> chia động từ "likes". Vế sau chủ ngữ "it" đi với động từ "is". Cả câu: "Neither of my brothers likes playing chess because they think it is boring."'
  },
  {
    id: 'u01_q16',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Viết lại câu không đổi nghĩa với like/prefer',
    question: 'Choose the sentence that has the SAME meaning: "David enjoys riding a bike to school every day."',
    options: [
      'David hates cycling to school every day.',
      'David loves cycling to school every day.',
      'David rarely rides a bike to school every day.',
      'David is not fond of riding a bike to school.'
    ],
    correctIndex: 1,
    hint: '"enjoys riding a bike" tương đương với "loves cycling" (yêu thích việc đi xe đạp).',
    explanation: '"enjoy V-ing" đồng nghĩa với "love V-ing" (thích làm gì). "ride a bike" đồng nghĩa với "cycle". Do đó câu mang nghĩa tương đương nhất là "David loves cycling to school every day."'
  },

  // CATEGORY 4: READING COMPREHENSION & SITUATIONAL REFLEX (4 QUESTIONS)
  {
    id: 'u01_q17',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Giao tiếp phản xạ: Hỏi về sở thích',
    question: 'Mai: "What do you do in your free time, Tom?" - Tom: "_____. It is very relaxing."',
    options: [
      'I usually listen to instrumental music',
      'I am doing my homework now',
      'I have two sisters and one brother',
      'I will go to London next year'
    ],
    correctIndex: 0,
    hint: 'Câu hỏi hỏi về thói quen/sở thích lúc rảnh rỗi ("in your free time").',
    explanation: 'Khi được hỏi "What do you do in your free time?", câu trả lời phù hợp nhất là nêu một sở thích thường làm: "I usually listen to instrumental music" (Tôi thường nghe nhạc không lời).'
  },
  {
    id: 'u01_q18',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Lợi ích của sở thích: Gardening',
    question: 'According to English 7 Unit 1, how does gardening benefit young students?',
    options: [
      'It makes them spend a lot of money.',
      'It makes them stay indoors all day long.',
      'It teaches them about nature and helps them be patient.',
      'It is very dangerous and causes allergies.'
    ],
    correctIndex: 2,
    hint: 'Làm vườn giúp con người gần gũi với thiên nhiên và rèn luyện tính kiên nhẫn.',
    explanation: 'Theo SGK Tiếng Anh 7 Global Success Unit 1: Làm vườn (gardening) giúp học sinh hiểu về thiên nhiên và rèn luyện tính kiên nhẫn: "It teaches them about nature and helps them be patient."'
  },
  {
    id: 'u01_q19',
    category: 'reading',
    level: 'van_dung',
    title: 'Đọc hiểu đoạn văn ngắn: My unusual hobby',
    question: 'Read: "Mark has an unusual hobby: making models from recycled materials like bottles and cans. He spends about 2 hours every weekend turning old cardboard into mini castles." What is true about Mark?',
    options: [
      'He buys expensive materials from the store.',
      'He makes models using recycled items.',
      'He dislikes making mini castles.',
      'He works on his hobby 5 hours every day.'
    ],
    correctIndex: 1,
    hint: 'Đoạn văn viết: "...making models from recycled materials like bottles and cans".',
    explanation: 'Thông tin trong bài nêu rõ: Mark làm mô hình từ các vật liệu tái chế như chai và lon ("making models from recycled materials").'
  },
  {
    id: 'u01_q20',
    category: 'reading',
    level: 'van_dung',
    title: 'Giao tiếp phản xạ: Đưa ra nhận xét về sở thích',
    question: 'Nam: "I find building dollhouses very difficult." - Lan: "_____ It takes time, but the result is wonderful."',
    options: [
      'I completely agree with you.',
      'Yes, you need to be patient.',
      'No, it is very boring.',
      'You should stop doing it.'
    ],
    correctIndex: 1,
    hint: 'Vế sau Lan nói: "Nó tốn thời gian nhưng kết quả rất tuyệt vời" -> Cần sự kiên nhẫn.',
    explanation: '"Yes, you need to be patient. It takes time, but the result is wonderful." là lời phản hồi hợp lý và khích lệ nhất, liên hệ trực tiếp đến đức tính kiên nhẫn (patient) khi làm nhà búp bê thu nhỏ.'
  }
];
