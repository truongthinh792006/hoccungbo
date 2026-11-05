import { EnglishExercise, EnglishVocabWord } from './unit1_hobbies_data';

export const UNIT6_VOCABULARY: EnglishVocabWord[] = [
  {
    id: 'u6_v01',
    word: 'Imperial Academy',
    type: 'phr n',
    ipa: '/ɪmˈpɪəriəl əˈkædəmi/',
    meaning: 'Quốc Tử Giám (trường đại học đầu tiên của Việt Nam)',
    collocation: 'founded in 1076 / study at the Imperial Academy',
    example: 'The Imperial Academy was regarded as the first university in Vietnam, founded in 1076.'
  },
  {
    id: 'u6_v02',
    word: 'laboratory',
    type: 'n',
    ipa: '/ləˈbɒrətri/',
    meaning: 'phòng thí nghiệm (thường gọi tắt là lab)',
    collocation: 'science laboratory / modern computer lab',
    example: 'Students wear protective white coats when conducting experiments in the chemistry laboratory.'
  },
  {
    id: 'u6_v03',
    word: 'historic',
    type: 'adj',
    ipa: '/hɪˈstɒrɪk/',
    meaning: 'mang ý nghĩa lịch sử trọng đại, cổ kính',
    collocation: 'historic building / historic monument',
    example: 'The Temple of Literature is one of the most famous historic sites in Hanoi.'
  },
  {
    id: 'u6_v04',
    word: 'greenhouse',
    type: 'n',
    ipa: '/ˈɡriːnhaʊs/',
    meaning: 'nhà kính (trồng rau, hoa và nghiên cứu sinh học)',
    collocation: 'school greenhouse / grow plants in a greenhouse',
    example: 'Our biology club grows rare orchids and organic tomatoes in the school greenhouse.'
  },
  {
    id: 'u6_v05',
    word: 'surround',
    type: 'v',
    ipa: '/səˈraʊnd/',
    meaning: 'bao quanh, vây quanh bởi',
    collocation: 'be surrounded by green trees and brick walls',
    example: 'The ancient courtyard is surrounded by hundred-year-old banyan trees.'
  },
  {
    id: 'u6_v06',
    word: 'pavilion',
    type: 'n',
    ipa: '/pəˈvɪliən/',
    meaning: 'lầu, đình, tạ (kiến trúc truyền thống Á Đông)',
    collocation: 'Khue Van Pavilion (Khuê Văn Các)',
    example: 'Khue Van Pavilion is the official cultural symbol of Hanoi capital.'
  },
  {
    id: 'u6_v07',
    word: 'stone tablet',
    type: 'phr n',
    ipa: '/stəʊn ˈtæblət/',
    meaning: 'bia đá (đặc biệt là bia tiến sĩ Văn Miếu)',
    collocation: 'Doctor\'s stone tablets / carved on stone tablets',
    example: 'There are 82 Doctor\'s stone tablets placed on the backs of tortoises at Van Mieu.'
  },
  {
    id: 'u6_v08',
    word: 'gymnasium',
    type: 'n',
    ipa: '/dʒɪmˈneɪziəm/',
    meaning: 'nhà tập thể dục, nhà thi đấu thể thao (viết tắt: gym)',
    collocation: 'indoor gymnasium / play badminton in the gym',
    example: 'During rainy days, physical education classes take place inside the spacious gymnasium.'
  },
  {
    id: 'u6_v09',
    word: 'courtyard',
    type: 'n',
    ipa: '/ˈkɔːtjɑːd/',
    meaning: 'sân trong, khuôn viên sân trường có tường bao',
    collocation: 'ancient courtyard / school courtyard',
    example: 'Students often gather in the central courtyard to play shuttlecock during break time.'
  },
  {
    id: 'u6_v10',
    word: 'midterm exam',
    type: 'phr n',
    ipa: '/ˌmɪdtɜːm ɪɡˈzæm/',
    meaning: 'kỳ thi giữa kỳ',
    collocation: 'take a midterm exam / prepare for the midterm exam',
    example: 'Next week, all grade 7 students will sit for their English and maths midterm exams.'
  },
  {
    id: 'u6_v11',
    word: 'scholar',
    type: 'n',
    ipa: '/ˈskɒlə(r)/',
    meaning: 'học giả, bậc trí thức uyên bác',
    collocation: 'talented scholar / Confucian scholars',
    example: 'Chu Van An was one of the most respected scholars and headmasters in Vietnamese history.'
  },
  {
    id: 'u6_v12',
    word: 'entrance exam',
    type: 'phr n',
    ipa: '/ˈentrəns ɪɡˈzæm/',
    meaning: 'kỳ thi tuyển sinh đầu vào',
    collocation: 'pass the entrance exam / university entrance exam',
    example: 'She studied very diligently to pass the entrance exam into the gifted high school.'
  }
];

export const UNIT6_EXERCISES: EnglishExercise[] = [
  // CATEGORY 1: VOCABULARY & FACILITIES (5 QUESTIONS)
  {
    id: 'u06_q01',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Trường đại học đầu tiên của Việt Nam',
    question: 'The _____ was established in 1076 under Emperor Ly Nhan Tong as the first university in Vietnam.',
    options: ['National Museum', 'Imperial Academy', 'Khue Van Pavilion', 'Ha Long Bay'],
    correctIndex: 1,
    hint: 'Quốc Tử Giám trong tiếng Anh được gọi là gì?',
    explanation: 'Đáp án là "Imperial Academy" (Quốc Tử Giám - trường đại học đầu tiên của Việt Nam thành lập năm 1076).'
  },
  {
    id: 'u06_q02',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Phòng thực hành thí nghiệm khoa học',
    question: 'A room equipped with microscopes, test tubes, and chemicals for scientific research in a school is a _____.',
    options: ['canteen', 'laboratory', 'greenhouse', 'gymnasium'],
    correctIndex: 1,
    hint: 'Phòng học có kính hiển vi, ống nghiệm và hóa chất.',
    explanation: '"laboratory" (hoặc lab) nghĩa là phòng thí nghiệm. "canteen" (nhà ăn), "greenhouse" (nhà kính), "gymnasium" (nhà tập thể dục).'
  },
  {
    id: 'u06_q03',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Từ vựng: Bia tiến sĩ đặt trên lưng rùa đá',
    question: 'In Van Mieu, the names of outstanding scholars who passed the royal examinations were carved on 82 _____.',
    options: ['stone tablets', 'wooden puppets', 'paper books', 'glass bottles'],
    correctIndex: 0,
    hint: 'Tên của các tiến sĩ đỗ đạt được khắc trang trọng trên những tấm bia đá (stone tablets) đặt trên lưng rùa đá.',
    explanation: '"stone tablets" mang nghĩa là các tấm bia đá. 82 bia tiến sĩ tại Văn Miếu ghi danh các nhà khoa bảng qua các kỳ thi đình.'
  },
  {
    id: 'u06_q04',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Từ vựng: Nhà kính trồng cây trong trường',
    question: 'Our school built a modern _____ where students can grow vegetables and study botany under controlled temperature.',
    options: ['gymnasium', 'greenhouse', 'courtyard', 'library'],
    correctIndex: 1,
    hint: 'Công trình bằng kính/nhựa trong suốt dùng để trồng rau và cây hoa học tập.',
    explanation: '"greenhouse" nghĩa là nhà kính trồng cây sinh học. "gymnasium" là phòng tập thể thao.'
  },
  {
    id: 'u06_q05',
    category: 'vocabulary',
    level: 'van_dung',
    title: 'Từ vựng: Biểu tượng văn hóa Khuê Văn Các',
    question: 'Khue Van _____ is a famous two-tiered wooden structure built in 1805, selected as the symbol of Hanoi.',
    options: ['Academy', 'Pavilion', 'Laboratory', 'Tablet'],
    correctIndex: 1,
    hint: 'Khuê Văn Các trong tiếng Anh được dịch là Khue Van Pavilion.',
    explanation: '"Pavilion" (lầu, các, đình tạ). "Khue Van Pavilion" chính là Khuê Văn Các, biểu tượng văn hiến nghìn năm của thủ đô Hà Nội.'
  },

  // CATEGORY 2: PRONUNCIATION /tʃ/ & /dʒ/ (4 QUESTIONS)
  {
    id: 'u06_q06',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa phụ âm vô thanh /tʃ/ (ch)',
    question: 'Which of the following words contains the voiceless consonant sound /tʃ/?',
    options: ['gym', 'jam', 'chair', 'page'],
    correctIndex: 2,
    hint: 'Từ "chair" bắt đầu bằng chữ "ch" phát âm là /tʃ/ (/tʃeə/).',
    explanation: '"chair" /tʃeə/ chứa âm vô thanh /tʃ/. Ba từ còn lại: "gym" /dʒɪm/, "jam" /dʒæm/, "page" /peɪdʒ/ đều chứa âm hữu thanh /dʒ/.'
  },
  {
    id: 'u06_q07',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa phụ âm hữu thanh /dʒ/ (j)',
    question: 'Which word contains the voiced affricate consonant sound /dʒ/?',
    options: ['teacher', 'chicken', 'juice', 'watch'],
    correctIndex: 2,
    hint: 'Từ "juice" bắt đầu bằng âm /dʒ/ rung thanh quản (/dʒuːs/).',
    explanation: '"juice" /dʒuːs/ chứa âm hữu thanh /dʒ/. Ba từ còn lại: "teacher" /ˈtiːtʃə/, "chicken" /ˈtʃɪkɪn/, "watch" /wɒtʃ/ đều chứa âm vô thanh /tʃ/.'
  },
  {
    id: 'u06_q08',
    category: 'pronunciation',
    level: 'thong_hieu',
    title: 'Phát âm: Phân biệt âm /tʃ/ và /dʒ/',
    question: 'Find the word whose sound is DIFFERENT from the other three:',
    options: ['cherry', 'match', 'village', 'cheap'],
    correctIndex: 2,
    hint: 'Ba từ chứa âm /tʃ/, một từ có đuôi -ge phát âm là /dʒ/.',
    explanation: '"village" /ˈvɪlɪdʒ/ kết thúc bằng âm hữu thanh /dʒ/. Ba từ còn lại đều chứa âm /tʃ/: "cherry" /ˈtʃeri/, "match" /mætʃ/, "cheap" /tʃiːp/.'
  },
  {
    id: 'u06_q09',
    category: 'pronunciation',
    level: 'van_dung',
    title: 'Phát âm: Nhận biết âm /dʒ/ qua cách viết đặc biệt',
    question: 'In which of the following words is the letter "g" pronounced as /dʒ/?',
    options: ['green', 'ginger', 'garden', 'gift'],
    correctIndex: 1,
    hint: 'Từ chỉ củ gừng (ginger) có chữ g phát âm là /dʒ/ (/ˈdʒɪndʒə/). Các từ green, garden, gift có g phát âm là /ɡ/.',
    explanation: '"ginger" /ˈdʒɪndʒə/ có chữ "g" phát âm thành /dʒ/. Các từ "green" /ɡriːn/, "garden" /ˈɡɑːdn/, "gift" /ɡɪft/ đều phát âm là /ɡ/.'
  },

  // CATEGORY 3: GRAMMAR - PREPOSITIONS OF TIME AND PLACE (7 QUESTIONS)
  {
    id: 'u06_q10',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Giới từ chỉ năm / thế kỷ "in"',
    question: 'The Imperial Academy in Hanoi was established _____ 1076 by Emperor Ly Nhan Tong.',
    options: ['at', 'on', 'in', 'to'],
    correctIndex: 2,
    hint: 'Đi trước năm cụ thể (1076), ta dùng giới từ nào?',
    explanation: 'Giới từ "in" đi trước năm, tháng, mùa, thế kỷ: in 1076, in the 11th century.'
  },
  {
    id: 'u06_q11',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Giới từ chỉ thứ trong tuần "on"',
    question: 'Our class will have an exciting biology experiment in the lab _____ Tuesday morning.',
    options: ['in', 'at', 'on', 'for'],
    correctIndex: 2,
    hint: 'Đi trước các ngày trong tuần (Tuesday) hoặc buổi của một ngày cụ thể, ta dùng giới từ nào?',
    explanation: 'Giới từ "on" đi trước các ngày trong tuần hoặc buổi của ngày cụ thể: "on Tuesday morning".'
  },
  {
    id: 'u06_q12',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Giới từ chỉ thời gian chính xác "at"',
    question: 'The guided tour around the historic school starts promptly _____ 8:30 AM.',
    options: ['at', 'in', 'on', 'by'],
    correctIndex: 0,
    hint: 'Đi trước giờ cụ thể trong ngày (8:30 AM), ta dùng giới từ nào?',
    explanation: 'Giới từ "at" đi trước mốc thời gian chính xác: "at 8:30 AM", "at noon", "at midnight".'
  },
  {
    id: 'u06_q13',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Giới từ chỉ nơi chốn trong tòa nhà / phòng "in"',
    question: 'The students are sitting quietly _____ the school library, reading books for their assignment.',
    options: ['at', 'on', 'in', 'under'],
    correctIndex: 2,
    hint: 'Ở bên trong một căn phòng hoặc không gian kín (thư viện).',
    explanation: 'Giới từ "in" dùng để chỉ vị trí bên trong một không gian kín: "in the library", "in the classroom", "in the lab".'
  },
  {
    id: 'u06_q14',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Giới từ chỉ tầng nhà "on the ... floor"',
    question: 'The modern computer room is located _____ the third floor of the main building.',
    options: ['at', 'in', 'on', 'from'],
    correctIndex: 2,
    hint: 'Chỉ vị trí tầng nhà (the first floor, the second floor, the third floor), ta dùng giới từ nào?',
    explanation: 'Cụm từ cố định chỉ vị trí tầng: "on the third floor" (trên tầng ba).'
  },
  {
    id: 'u06_q15',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Phối hợp giới từ thời gian và nơi chốn',
    question: 'We met _____ the school gate _____ 7 o\'clock yesterday to catch the bus.',
    options: [
      'at / at',
      'in / at',
      'on / in',
      'at / on'
    ],
    correctIndex: 0,
    hint: 'Tại cổng trường (địa điểm cụ thể) dùng "at"; vào lúc 7 giờ đúng (giờ cụ thể) dùng "at".',
    explanation: 'Địa điểm cụ thể: "at the school gate". Giờ giấc cụ thể: "at 7 o\'clock". Cả hai vị trí đều dùng "at".'
  },
  {
    id: 'u06_q16',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Phối hợp ngày tháng cụ thể và thành phố',
    question: 'The festival will take place _____ October 10th _____ Hanoi capital.',
    options: [
      'on / in',
      'in / at',
      'at / in',
      'on / on'
    ],
    correctIndex: 0,
    hint: 'Ngày tháng đầy đủ (October 10th) dùng "on"; tên thành phố lớn (Hanoi) dùng "in".',
    explanation: 'Ngày tháng cụ thể (ngày mùng 10 tháng 10): dùng "on". Thành phố/đất nước: dùng "in". Cặp đúng: "on / in".'
  },

  // CATEGORY 4: READING COMPREHENSION & SITUATIONAL REFLEX (4 QUESTIONS)
  {
    id: 'u06_q17',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Giao tiếp phản xạ: Hỏi vị trí phòng chức năng',
    question: 'Visitor: "Excuse me, where is the science laboratory?" - Student: "_____. It is next to the staff room."',
    options: [
      'Go straight and turn left on the second floor',
      'I am 13 years old and study maths',
      'The weather is very sunny today',
      'I ate two apples this morning'
    ],
    correctIndex: 0,
    hint: 'Khách hỏi đường tới phòng thí nghiệm ("where is the science laboratory?").',
    explanation: 'Câu chỉ dẫn đường phù hợp: "Go straight and turn left on the second floor. It is next to the staff room" (Đi thẳng rồi rẽ trái ở tầng hai, phòng nằm cạnh phòng giáo viên).'
  },
  {
    id: 'u06_q18',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Đọc hiểu Văn Miếu: Đối tượng dựng bia vinh danh',
    question: 'Why were the Doctor\'s stone tablets erected at the Temple of Literature?',
    options: [
      'To sell tickets to foreign tourists.',
      'To honor talented scholars and encourage learning in the country.',
      'To build a barrier around the lake.',
      'To keep tortoises as pets.'
    ],
    correctIndex: 1,
    hint: 'Bia tiến sĩ được dựng để vinh danh người hiền tài và khuyến khích tinh thần hiếu học của quốc gia.',
    explanation: 'Theo SGK Tiếng Anh 7 Unit 6: Các bia tiến sĩ được dựng nhằm vinh danh các nhân tài đỗ đại khoa và cổ vũ tinh thần hiếu học ("To honor talented scholars and encourage learning in the country").'
  },
  {
    id: 'u06_q19',
    category: 'reading',
    level: 'van_dung',
    title: 'Đọc hiểu đoạn văn: Chu Văn An - Thầy giáo mẫu mực',
    question: 'Read: "Chu Van An was born in 1292. He was a dedicated teacher and the first headmaster of the Imperial Academy. He was famous for his deep knowledge, high integrity, and strict teaching methods." What was Chu Van An renowned for?',
    options: [
      'Being a wealthy merchant in Hanoi.',
      'His profound knowledge, integrity, and dedication to education.',
      'Building the ancient brick walls.',
      'Designing modern sports gyms.'
    ],
    correctIndex: 1,
    hint: 'Thầy Chu Văn An nổi tiếng với tri thức uyên bác, tính cách chính trực liêm khiết và lòng tận tụy với giáo dục.',
    explanation: 'Đoạn văn nêu rõ thầy Chu Văn An nổi tiếng với tri thức sâu rộng, tính cách liêm chính và phương pháp giảng dạy nghiêm khắc ("deep knowledge, high integrity, and strict teaching methods").'
  },
  {
    id: 'u06_q20',
    category: 'reading',
    level: 'van_dung',
    title: 'Giao tiếp phản xạ: Chia sẻ cảm nhận sau chuyến tham quan',
    question: 'Peter: "How was your field trip to the Temple of Literature yesterday?" - Mary: "_____. We learned so much about Vietnamese history!"',
    options: [
      'It was fascinating and educational',
      'I failed my midterm exam',
      'The library is closed today',
      'I don\'t like eating beef soup'
    ],
    correctIndex: 0,
    hint: 'Hỏi về chuyến tham quan thực tế ("How was your field trip?"). Vế sau Mary nói: "Tụi mình học được bao điều bổ ích về lịch sử Việt Nam!".',
    explanation: '"It was fascinating and educational. We learned so much about Vietnamese history!" (Chuyến đi vô cùng thú vị và bổ ích) là câu nhận xét chính xác và biểu cảm nhất.'
  }
];
