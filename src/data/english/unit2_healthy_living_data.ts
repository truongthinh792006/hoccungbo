import { EnglishExercise, EnglishVocabWord } from './unit1_hobbies_data';

export const UNIT2_VOCABULARY: EnglishVocabWord[] = [
  {
    id: 'u2_v01',
    word: 'acne',
    type: 'n',
    ipa: '/ˈækni/',
    meaning: 'mụn trứng cá',
    collocation: 'have acne / cause acne',
    example: 'Washing your face regularly can help prevent acne.'
  },
  {
    id: 'u2_v02',
    word: 'sunburn',
    type: 'n, v',
    ipa: '/ˈsʌnbɜːn/',
    meaning: 'sự cháy nắng, vết rám nắng đau rát',
    collocation: 'get sunburn / avoid sunburn',
    example: 'Wear a wide hat and use sunscreen to avoid severe sunburn.'
  },
  {
    id: 'u2_v03',
    word: 'chapped lips',
    type: 'phr n',
    ipa: '/tʃæpt lɪps/',
    meaning: 'môi bị nứt nẻ (do thời tiết khô hanh hoặc thiếu nước)',
    collocation: 'have chapped lips / lip balm for chapped lips',
    example: 'In cold weather, you should use lip balm to protect your chapped lips.'
  },
  {
    id: 'u2_v04',
    word: 'dimple',
    type: 'n',
    ipa: '/ˈdɪmpl/',
    meaning: 'má lúm đồng tiền',
    collocation: 'have cute dimples',
    example: 'She has a lovely smile with two little dimples on her cheeks.'
  },
  {
    id: 'u2_v05',
    word: 'sunscreen',
    type: 'n',
    ipa: '/ˈsʌnskriːn/',
    meaning: 'kem chống nắng',
    collocation: 'apply sunscreen / put on sunscreen',
    example: 'Remember to apply sunscreen before going swimming under the hot sun.'
  },
  {
    id: 'u2_v06',
    word: 'vegetarian',
    type: 'n, adj',
    ipa: '/ˌvedʒəˈteəriən/',
    meaning: 'người ăn chay / thuộc về ăn chay',
    collocation: 'a vegetarian diet / be a vegetarian',
    example: 'My aunt is a vegetarian; she only eats vegetables, tofu, and fruits.'
  },
  {
    id: 'u2_v07',
    word: 'colored vegetables',
    type: 'phr n',
    ipa: '/ˈkʌləd ˈvedʒtəblz/',
    meaning: 'rau củ quả nhiều màu sắc (giàu vitamin và khoáng chất)',
    collocation: 'eat plenty of colored vegetables',
    example: 'Carrots, tomatoes, and broccoli are healthy colored vegetables.'
  },
  {
    id: 'u2_v08',
    word: 'put on weight',
    type: 'phr v',
    ipa: '/pʊt ɒn weɪt/',
    meaning: 'tăng cân, béo lên',
    collocation: 'put on weight (trái nghĩa: lose weight)',
    example: 'Eating too much fast food and sweet snacks can make you put on weight.'
  },
  {
    id: 'u2_v09',
    word: 'stay in shape',
    type: 'phr',
    ipa: '/steɪ ɪn ʃeɪp/',
    meaning: 'giữ vóc dáng cân đối, khỏe mạnh',
    collocation: 'stay in shape / keep fit',
    example: 'Jogging for 30 minutes every morning helps him stay in shape.'
  },
  {
    id: 'u2_v10',
    word: 'soft drink',
    type: 'n',
    ipa: '/ˌsɒft ˈdrɪŋk/',
    meaning: 'nước ngọt có gas',
    collocation: 'avoid soft drinks / drink water instead of soft drinks',
    example: 'Soft drinks contain too much sugar and are bad for your teeth.'
  },
  {
    id: 'u2_v11',
    word: 'allergy',
    type: 'n',
    ipa: '/ˈælədʒi/',
    meaning: 'sự dị ứng (với thức ăn, thời tiết, phấn hoa...)',
    collocation: 'have an allergy to seafood / allergic reaction',
    example: 'He has a severe allergy to peanuts, so he never eats peanut butter.'
  },
  {
    id: 'u2_v12',
    word: 'energy',
    type: 'n',
    ipa: '/ˈenədʒi/',
    meaning: 'năng lượng, sinh lực hoạt động',
    collocation: 'provide energy / give plenty of energy',
    example: 'A healthy breakfast gives students enough energy for a long school day.'
  }
];

export const UNIT2_EXERCISES: EnglishExercise[] = [
  // CATEGORY 1: VOCABULARY & HEALTH PROBLEMS (5 QUESTIONS)
  {
    id: 'u02_q01',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Vấn đề về da khi ra nắng',
    question: 'If you spend too many hours outdoors without a hat, your skin may get red and painful. You have _____.',
    options: ['sunburn', 'dimples', 'headache', 'allergy'],
    correctIndex: 0,
    hint: 'Hiện tượng da bị ửng đỏ và rát do tiếp xúc lâu với ánh nắng mặt trời gắt.',
    explanation: 'Đáp án là "sunburn" (cháy nắng). "dimples" (lúm đồng tiền), "headache" (đau đầu), "allergy" (dị ứng).'
  },
  {
    id: 'u02_q02',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Sản phẩm chăm sóc da',
    question: 'To protect your skin from harmful ultraviolet rays from the sun, you should apply _____ before leaving home.',
    options: ['lip balm', 'sunscreen', 'toothpaste', 'cough medicine'],
    correctIndex: 1,
    hint: 'Kem bôi da bảo vệ khỏi tia cực tím (UV) của ánh nắng mặt trời.',
    explanation: '"sunscreen" nghĩa là kem chống nắng. "lip balm" (son dưỡng môi), "toothpaste" (kem đánh răng), "cough medicine" (thuốc ho).'
  },
  {
    id: 'u02_q03',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Cụm từ: Cân nặng và chế độ ăn',
    question: 'If you drink too many sugary soft drinks and rarely exercise, you will easily _____.',
    options: ['stay in shape', 'lose weight', 'put on weight', 'keep fit'],
    correctIndex: 2,
    hint: 'Uống nhiều nước ngọt có gas và lười vận động sẽ dẫn tới việc "tăng cân / béo lên".',
    explanation: 'Cụm từ "put on weight" mang nghĩa tăng cân. Các cụm "stay in shape", "lose weight", "keep fit" đều mang nghĩa giữ dáng hoặc giảm cân.'
  },
  {
    id: 'u02_q04',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Từ vựng: Thời tiết khô hanh',
    question: 'In dry and windy winter days, many people suffer from _____ and need to drink plenty of water and apply lip balm.',
    options: ['chapped lips', 'sunburn', 'fatigue', 'dimples'],
    correctIndex: 0,
    hint: 'Vào mùa đông khô hanh, môi dễ bị nứt nẻ.',
    explanation: '"chapped lips" nghĩa là môi khô nứt nẻ. Việc uống nhiều nước và dùng son dưỡng (lip balm) giúp cải thiện tình trạng này.'
  },
  {
    id: 'u02_q05',
    category: 'vocabulary',
    level: 'van_dung',
    title: 'Từ vựng: Chế độ dinh dưỡng lành mạnh',
    question: 'Doctors recommend eating lots of _____ such as carrots, tomatoes, and pumpkins because they contain essential vitamin A.',
    options: ['fast food', 'soft drinks', 'colored vegetables', 'fatty meat'],
    correctIndex: 2,
    hint: 'Cà rốt, cà chua, bí đỏ là các loại rau củ nhiều màu sắc giàu vitamin.',
    explanation: '"colored vegetables" (rau củ nhiều màu sắc) cung cấp nhiều vitamin A rất tốt cho mắt và da. Các phương án còn lại đều là thực phẩm không tốt cho sức khỏe nếu dùng nhiều.'
  },

  // CATEGORY 2: PRONUNCIATION /f/ & /v/ (4 QUESTIONS)
  {
    id: 'u02_q06',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa âm /f/',
    question: 'Which of the following words has the underlined sound pronounced as /f/? (Từ nào có âm gạch chân phát âm là /f/)?',
    options: ['view', 'vegetables', 'fat', 'vitamin'],
    correctIndex: 2,
    hint: 'Từ "fat" bắt đầu bằng phụ âm vô thanh /f/, trong khi view, vegetables, vitamin bắt đầu bằng phụ âm hữu thanh /v/.',
    explanation: '"fat" /fæt/ phát âm với âm /f/. Các từ còn lại: "view" /vjuː/, "vegetables" /ˈvedʒtəblz/, "vitamin" /ˈvɪtəmɪn/ đều bắt đầu bằng âm /v/.'
  },
  {
    id: 'u02_q07',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa âm /v/',
    question: 'Which of the following words has the sound /v/?',
    options: ['fruit', 'activity', 'fast', 'fresh'],
    correctIndex: 1,
    hint: 'Chú ý phụ âm ở âm tiết thứ 2 của từ "activity".',
    explanation: '"activity" /ækˈtɪvəti/ chứa âm /v/. Ba từ còn lại: "fruit" /fruːt/, "fast" /fɑːst/, "fresh" /freʃ/ đều bắt đầu bằng âm /f/.'
  },
  {
    id: 'u02_q08',
    category: 'pronunciation',
    level: 'thong_hieu',
    title: 'Phát âm: Nhận biết âm /f/ qua cách viết đặc biệt',
    question: 'In which word is the letter combination "gh" pronounced as /f/?',
    options: ['cough', 'night', 'high', 'though'],
    correctIndex: 0,
    hint: 'Trong từ chỉ bệnh "ho", đuôi -gh phát âm là /f/. Trong các từ night, high, though thì -gh câm.',
    explanation: '"cough" được phát âm là /kɒf/, trong đó chữ "gh" phát âm thành /f/. Trong các từ "night" /naɪt/, "high" /haɪ/, "though" /ðəʊ/, cụm chữ "gh" là âm câm.'
  },
  {
    id: 'u02_q09',
    category: 'pronunciation',
    level: 'van_dung',
    title: 'Phát âm: Phân loại âm khác biệt',
    question: 'Find the word whose sound is DIFFERENT from the other three:',
    options: ['safe', 'leaf', 'have', 'laugh'],
    correctIndex: 2,
    hint: 'Ba từ có âm kết thúc là /f/, một từ kết thúc bằng âm hữu thanh /v/.',
    explanation: '"have" /hæv/ kết thúc bằng âm /v/. Ba từ còn lại đều kết thúc bằng âm /f/: "safe" /seɪf/, "leaf" /liːf/, "laugh" /lɑːf/. Do đó "have" khác nhóm.'
  },

  // CATEGORY 3: GRAMMAR - SIMPLE SENTENCES & CONJUNCTIONS (7 QUESTIONS)
  {
    id: 'u02_q10',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Liên từ chỉ kết quả "so"',
    question: 'He ate unwashed fruits yesterday, _____ he had a stomach ache last night.',
    options: ['so', 'but', 'or', 'and'],
    correctIndex: 0,
    hint: 'Vế sau là kết quả tất yếu của vế trước (hôm qua ăn quả chưa rửa -> nên bị đau bụng).',
    explanation: 'Liên từ "so" dùng để chỉ kết quả (vì vậy, cho nên). "He ate unwashed fruits yesterday, so he had a stomach ache last night."'
  },
  {
    id: 'u02_q11',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Liên từ chỉ sự tương phản "but"',
    question: 'Lan wanted to go cycling with her friends, _____ it started raining heavily.',
    options: ['and', 'so', 'but', 'or'],
    correctIndex: 2,
    hint: 'Hai vế có ý nghĩa trái ngược nhau (muốn đi đạp xe nhưng trời lại mưa to).',
    explanation: 'Liên từ "but" (nhưng) dùng để nối hai vế mang ý tương phản, đối lập.'
  },
  {
    id: 'u02_q12',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Liên từ chỉ sự bổ sung "and"',
    question: 'You should wash your hands carefully _____ brush your teeth twice a day.',
    options: ['or', 'and', 'but', 'so'],
    correctIndex: 1,
    hint: 'Rửa tay cẩn thận VÀ đánh răng ngày hai lần là hai thói quen tốt bổ sung cho nhau.',
    explanation: 'Liên từ "and" (và) dùng để nối hai hành động hoặc ý kiến bổ sung, cùng loại với nhau.'
  },
  {
    id: 'u02_q13',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Liên từ chỉ sự lựa chọn "or"',
    question: 'Wear a warm coat when going out, _____ you will catch a cold.',
    options: ['and', 'but', 'so', 'or'],
    correctIndex: 3,
    hint: '"Hãy mặc áo ấm khi ra ngoài, NẾU KHÔNG THÌ con sẽ bị cảm lạnh đấy".',
    explanation: 'Liên từ "or" mang nghĩa "hoặc là / nếu không thì" khi đưa ra lời cảnh báo hoặc sự lựa chọn.'
  },
  {
    id: 'u02_q14',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Lời khuyên với should / shouldn\'t',
    question: 'You have a bad cough. You _____ drink iced water.',
    options: ['should', 'shouldn\'t', 'must', 'need'],
    correctIndex: 1,
    hint: 'Đang bị ho nặng thì KHÔNG NÊN uống nước đá lạnh.',
    explanation: 'Cấu trúc khuyên không nên làm gì: "shouldn\'t + V-bare". Đang bị ho thì không nên uống nước đá ("You shouldn\'t drink iced water").'
  },
  {
    id: 'u02_q15',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Nhận biết câu đơn (Simple sentence)',
    question: 'Which of the following is a SIMPLE SENTENCE (Câu đơn có chủ ngữ ghép)?',
    options: [
      'My mother and my sister do yoga together every morning.',
      'I like apples, but my brother likes oranges.',
      'He exercises regularly, so he stays in good shape.',
      'You can drink green tea, or you can have warm water.'
    ],
    correctIndex: 0,
    hint: 'Câu đơn chỉ có 1 vị ngữ chính (do yoga) dù có chủ ngữ ghép (My mother and my sister). Các câu còn lại là câu ghép có 2 mệnh đề độc lập nối bằng but, so, or.',
    explanation: 'Câu A là câu đơn (Simple sentence) với chủ ngữ ghép "My mother and my sister" và vị ngữ "do yoga together every morning". Ba câu B, C, D đều là câu ghép (Compound sentences) gồm 2 mệnh đề độc lập nối bởi but, so, or.'
  },
  {
    id: 'u02_q16',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Câu mệnh lệnh đưa ra lời khuyên sức khỏe',
    question: '_____ more green vegetables and _____ too many sweet candies to protect your health.',
    options: [
      'Eat / don\'t eat',
      'Eating / not eat',
      'Eats / doesn\'t eat',
      'Ate / didn\'t eat'
    ],
    correctIndex: 0,
    hint: 'Câu mệnh lệnh (Imperatives) bắt đầu bằng động từ nguyên thể V-bare hoặc Don\'t + V-bare.',
    explanation: 'Câu mệnh lệnh khuyên nhủ dùng V-bare ở thể khẳng định và "Don\'t + V-bare" ở thể phủ định: "Eat more green vegetables and don\'t eat too many sweet candies."'
  },

  // CATEGORY 4: READING COMPREHENSION & SITUATIONAL REFLEX (4 QUESTIONS)
  {
    id: 'u02_q17',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Giao tiếp phản xạ: Hỏi thăm sức khỏe',
    question: 'Doctor: "What\'s the matter with you, young man?" - Patient: "_____. I have a fever and a sore throat."',
    options: [
      'I feel very sick and tired',
      'I enjoy playing computer games',
      'I live in a small village',
      'I am 13 years old'
    ],
    correctIndex: 0,
    hint: 'Bác sĩ hỏi "Cháu bị làm sao thế?", bệnh nhân cần mô tả triệu chứng sức khỏe.',
    explanation: 'Khi bác sĩ hỏi "What\'s the matter with you?", câu trả lời đúng bệnh cảnh là: "I feel very sick and tired" (Cháu cảm thấy rất mệt và ốm ạ).'
  },
  {
    id: 'u02_q18',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Đọc hiểu lời khuyên: Chăm sóc da mụn',
    question: 'According to health advice in English 7 Unit 2, what should teenagers with acne do?',
    options: [
      'Touch their face frequently with unwashed hands.',
      'Wash their face with special soap and avoid touching their acne.',
      'Eat more oily fast food and french fries.',
      'Stay up very late every night.'
    ],
    correctIndex: 1,
    hint: 'Lời khuyên cho da mụn: Rửa mặt bằng xà phòng/sữa rửa mặt phù hợp và không dùng tay bẩn sờ lên mụn.',
    explanation: 'Lời khuyên đúng theo SGK: "Wash their face with special soap and avoid touching their acne" (Rửa mặt bằng xà phòng chuyên dụng và tránh chạm tay vào mụn).'
  },
  {
    id: 'u02_q19',
    category: 'reading',
    level: 'van_dung',
    title: 'Đọc hiểu đoạn văn: Bí quyết sống lâu của người Nhật',
    question: 'Read: "People in Okinawa, Japan, live very long and healthy lives. They eat a lot of fresh fish, seaweed, and tofu instead of fatty meat. Furthermore, they stay active by doing gardening and walking every day." What is the main reason for their long life?',
    options: [
      'They eat plenty of fast food and meat.',
      'They have a healthy diet and stay physically active.',
      'They stay indoors and avoid outdoor light.',
      'They take a lot of sleeping pills.'
    ],
    correctIndex: 1,
    hint: 'Đoạn văn nêu hai yếu tố chính: chế độ ăn uống lành mạnh (cá tươi, rong biển, đậu phụ) và vận động thể chất hàng ngày (làm vườn, đi bộ).',
    explanation: 'Bí quyết trường thọ của người dân Okinawa được tóm lược là: Chế độ ăn uống lành mạnh và duy trì vận động thể chất thường xuyên ("They have a healthy diet and stay physically active").'
  },
  {
    id: 'u02_q20',
    category: 'reading',
    level: 'van_dung',
    title: 'Giao tiếp phản xạ: Đưa ra lời khuyên cho bạn',
    question: 'Minh: "I spent 4 hours playing video games in the dark last night, and my eyes hurt now." - An: "_____. You should let your eyes rest and look at green plants."',
    options: [
      'That is a great idea!',
      'You shouldn\'t stare at the computer screen for too long.',
      'You should play for 4 more hours.',
      'Video games are very healthy for your eyes.'
    ],
    correctIndex: 1,
    hint: 'Bạn bị đau mắt do chơi điện tử trong bóng tối 4 tiếng -> Khuyên bạn không nên nhìn màn hình quá lâu.',
    explanation: '"You shouldn\'t stare at the computer screen for too long." (Cậu không nên nhìn chằm chằm vào màn hình máy tính quá lâu) là lời khuyên chuẩn xác và phù hợp nhất với ngữ cảnh.'
  }
];
