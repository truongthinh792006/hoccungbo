import { EnglishExercise, EnglishVocabWord } from './unit1_hobbies_data';

export const UNIT3_VOCABULARY: EnglishVocabWord[] = [
  {
    id: 'u3_v01',
    word: 'community service',
    type: 'phr n',
    ipa: '/kəˈmjuːnəti ˈsɜːvɪs/',
    meaning: 'hoạt động phục vụ cộng đồng, công ích xã hội',
    collocation: 'do community service / join community service',
    example: 'Our school organizes community service projects every summer vacation.'
  },
  {
    id: 'u3_v02',
    word: 'volunteer',
    type: 'n, v',
    ipa: '/ˌvɒlənˈtɪə(r)/',
    meaning: 'tình nguyện viên / tình nguyện làm việc gì',
    collocation: 'work as a volunteer / volunteer to help',
    example: 'Last weekend, many volunteers came to help elderly people at the nursing home.'
  },
  {
    id: 'u3_v03',
    word: 'donate',
    type: 'v',
    ipa: '/dəʊˈneɪt/',
    meaning: 'quyên góp, ủng hộ (tiền, sách vở, quần áo, máu)',
    collocation: 'donate books/clothes to somebody',
    example: 'Students in our class donated 100 warm coats to children in mountainous areas.'
  },
  {
    id: 'u3_v04',
    word: 'nursing home',
    type: 'phr n',
    ipa: '/ˈnɜːsɪŋ həʊm/',
    meaning: 'viện dưỡng lão, nhà dưỡng lão',
    collocation: 'visit a nursing home / help at a nursing home',
    example: 'We visited a local nursing home and read stories to the elderly residents.'
  },
  {
    id: 'u3_v05',
    word: 'homeless children',
    type: 'phr n',
    ipa: '/ˈhəʊmləs ˈtʃɪldrən/',
    meaning: 'trẻ em vô gia cư, không nơi nương tựa',
    collocation: 'help homeless children / provide food for homeless children',
    example: 'The charity group provides hot meals and shelter for homeless children in the city.'
  },
  {
    id: 'u3_v06',
    word: 'tutor',
    type: 'v, n',
    ipa: '/ˈtjuːtə(r)/',
    meaning: 'dạy kèm, phụ đạo bài học cho trẻ em',
    collocation: 'tutor younger students in maths and English',
    example: 'Mai volunteers to tutor primary school students every Saturday afternoon.'
  },
  {
    id: 'u3_v07',
    word: 'pick up litter',
    type: 'phr v',
    ipa: '/pɪk ʌp ˈlɪtə(r)/',
    meaning: 'nhặt rác (để bảo vệ môi trường sạch đẹp)',
    collocation: 'pick up litter in the park / on the beach',
    example: 'We wore gloves and picked up plastic litter along the beach yesterday.'
  },
  {
    id: 'u3_v08',
    word: 'plant trees',
    type: 'phr v',
    ipa: '/plɑːnt triːz/',
    meaning: 'trồng cây xanh',
    collocation: 'plant trees in the schoolyard / around the neighbourhood',
    example: 'Our youth club planted 50 green trees around the local lake last month.'
  },
  {
    id: 'u3_v09',
    word: 'elderly people',
    type: 'phr n',
    ipa: '/ˈeldəli ˈpiːpl/',
    meaning: 'người cao tuổi, người già',
    collocation: 'help elderly people with housework / respect the elderly',
    example: 'It is important to care for and respect elderly people in our community.'
  },
  {
    id: 'u3_v10',
    word: 'orphanage',
    type: 'n',
    ipa: '/ˈɔːfənɪdʒ/',
    meaning: 'trại trẻ mồ côi',
    collocation: 'visit an orphanage / donate toys to an orphanage',
    example: 'They brought notebooks and toys to the local orphanage on Children\'s Day.'
  },
  {
    id: 'u3_v11',
    word: 'recycle',
    type: 'v',
    ipa: '/ˌriːˈsaɪkl/',
    meaning: 'tái chế (rác thải nhựa, giấy vụn, vỏ chai...)',
    collocation: 'recycle plastic bottles / exchange used paper',
    example: 'We collect used plastic bottles and cans to recycle them into new useful items.'
  },
  {
    id: 'u3_v12',
    word: 'proud',
    type: 'adj',
    ipa: '/praʊd/',
    meaning: 'tự hào, hãnh diện về việc tốt đã làm',
    collocation: 'be proud of somebody/something',
    example: 'All the students felt very proud of making their town cleaner and greener.'
  }
];

export const UNIT3_EXERCISES: EnglishExercise[] = [
  // CATEGORY 1: VOCABULARY & COLLOCATIONS (5 QUESTIONS)
  {
    id: 'u03_q01',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Hoạt động quyên góp sách vở',
    question: 'Every September, our school encourages students to _____ old textbooks and warm clothes to children in poor areas.',
    options: ['recycle', 'donate', 'tutor', 'litter'],
    correctIndex: 1,
    hint: 'Hành động trao tặng sách cũ hoặc quần áo ấm để giúp đỡ người khó khăn.',
    explanation: 'Đáp án đúng là "donate" (quyên góp, ủng hộ). Các từ còn lại: recycle (tái chế), tutor (dạy kèm), litter (xả rác).'
  },
  {
    id: 'u03_q02',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Nơi chăm sóc người già',
    question: 'A place where old people live and are taken care of by doctors and nurses is called a _____.',
    options: ['nursing home', 'orphanage', 'primary school', 'playground'],
    correctIndex: 0,
    hint: 'Nơi người cao tuổi sinh sống và được chăm sóc sức khỏe.',
    explanation: '"nursing home" có nghĩa là viện dưỡng lão. "orphanage" là trại trẻ mồ côi; "primary school" là trường tiểu học; "playground" là sân chơi.'
  },
  {
    id: 'u03_q03',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Cụm động từ: Làm sạch môi trường',
    question: 'Last Sunday, our volunteer club went to the beach to _____ and put all plastic bottles into big trash bags.',
    options: ['plant flowers', 'pick up litter', 'read books', 'draw pictures'],
    correctIndex: 1,
    hint: 'Hành động thu gom chai nhựa và rác thải trên bãi biển.',
    explanation: 'Cụm từ "pick up litter" mang nghĩa nhặt rác để giữ gìn vệ sinh môi trường.'
  },
  {
    id: 'u03_q04',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Từ vựng: Hoạt động gia sư / dạy kèm',
    question: 'Nam is very good at English, so he decided to _____ primary school children in his neighbourhood every weekend.',
    options: ['donate', 'tutor', 'clean', 'visit'],
    correctIndex: 1,
    hint: 'Nam học giỏi tiếng Anh nên muốn "dạy kèm / phụ đạo" cho các em nhỏ.',
    explanation: 'Động từ "tutor" mang nghĩa dạy kèm, phụ đạo bài học cho học sinh nhỏ tuổi hơn.'
  },
  {
    id: 'u03_q05',
    category: 'vocabulary',
    level: 'van_dung',
    title: 'Từ vựng: Ý nghĩa của công việc tình nguyện',
    question: 'Community service not only helps needy people but also makes volunteers feel _____ of contributing to society.',
    options: ['boring', 'tired', 'proud', 'useless'],
    correctIndex: 2,
    hint: 'Làm việc thiện giúp tình nguyện viên cảm thấy "tự hào, hãnh diện" về bản thân.',
    explanation: 'Tính từ "proud" (tự hào) đi với giới từ "of": be proud of doing something. Các từ còn lại mang nghĩa tiêu cực: boring (nhàm chán), tired (mệt mỏi), useless (vô dụng).'
  },

  // CATEGORY 2: PRONUNCIATION /t/ & /d/ and past -ed (4 QUESTIONS)
  {
    id: 'u03_q06',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ có âm đầu là phụ âm /t/',
    question: 'Which of the following words begins with the voiceless sound /t/?',
    options: ['donate', 'dirty', 'tutor', 'during'],
    correctIndex: 2,
    hint: 'Âm /t/ là âm vô thanh bật hơi nhẹ ở đầu lưỡi, còn donate, dirty, during bắt đầu bằng âm hữu thanh /d/.',
    explanation: '"tutor" /ˈtjuːtə/ bắt đầu bằng âm vô thanh /t/. Ba từ còn lại: "donate" /dəʊˈneɪt/, "dirty" /ˈdɜːti/, "during" /ˈdjʊərɪŋ/ đều bắt đầu bằng âm hữu thanh /d/.'
  },
  {
    id: 'u03_q07',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ có âm kết thúc là phụ âm /d/',
    question: 'Which word ends with the voiced alveolar consonant sound /d/?',
    options: ['plant', 'street', 'provide', 'ticket'],
    correctIndex: 2,
    hint: 'Từ nào kết thúc bằng chữ "de" hoặc "d" được phát âm thành /d/?',
    explanation: '"provide" /prəˈvaɪd/ kết thúc bằng âm hữu thanh /d/. Các từ "plant" /plɑːnt/, "street" /striːt/, "ticket" /ˈtɪkɪt/ đều kết thúc bằng âm vô thanh /t/.'
  },
  {
    id: 'u03_q08',
    category: 'pronunciation',
    level: 'thong_hieu',
    title: 'Phát âm đuôi -ed: Phát âm là /-ɪd/',
    question: 'Which past tense verb has the "-ed" ending pronounced as /-ɪd/?',
    options: ['helped', 'donated', 'cleaned', 'played'],
    correctIndex: 1,
    hint: 'Đuôi -ed được phát âm là /-ɪd/ khi động từ gốc kết thúc bằng âm /t/ hoặc /d/ (như donate -> donated, plant -> planted).',
    explanation: 'Động từ "donate" kết thúc bằng âm /t/, nên khi thêm -ed phát âm là /dəʊˈneɪtɪd/ (đuôi /-ɪd/). "helped" phát âm là /t/ (/helpt/), "cleaned" và "played" phát âm là /d/ (/kliːnd/, /pleɪd/).'
  },
  {
    id: 'u03_q09',
    category: 'pronunciation',
    level: 'van_dung',
    title: 'Phát âm đuôi -ed: Tìm từ có cách đọc đuôi khác',
    question: 'Find the word whose "-ed" ending is pronounced DIFFERENTLY from the other three:',
    options: ['planted', 'needed', 'visited', 'washed'],
    correctIndex: 3,
    hint: 'Ba từ có đuôi -ed đọc là /-ɪd/, một từ đọc là /-t/ do tận cùng bằng âm /ʃ/ (sh).',
    explanation: '"washed" phát âm đuôi -ed là /-t/ (/wɒʃt/). Ba từ còn lại: "planted" /ˈplɑːntɪd/, "needed" /ˈniːdɪd/, "visited" /ˈvɪzɪtɪd/ đều có đuôi -ed phát âm là /-ɪd/ vì tận cùng bằng /t/ hoặc /d/.'
  },

  // CATEGORY 3: GRAMMAR - THE PAST SIMPLE TENSE (7 QUESTIONS)
  {
    id: 'u03_q10',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Động từ to-be ở quá khứ đơn',
    question: 'Last summer, there _____ hundreds of volunteers helping the flood victims in central Vietnam.',
    options: ['is', 'are', 'was', 'were'],
    correctIndex: 3,
    hint: '"Last summer" chỉ thời gian quá khứ; chủ ngữ là danh từ số nhiều "hundreds of volunteers".',
    explanation: 'Dấu hiệu "last summer" chỉ thì quá khứ đơn. Chủ ngữ số nhiều "hundreds of volunteers" đi với to-be "were".'
  },
  {
    id: 'u03_q11',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Động từ có quy tắc thêm -ed',
    question: 'Yesterday afternoon, our class _____ up the school playground and watered the flowers.',
    options: ['clean', 'cleaned', 'cleans', 'cleaning'],
    correctIndex: 1,
    hint: 'Dấu hiệu nhận biết thì quá khứ đơn là từ "Yesterday afternoon".',
    explanation: 'Với "Yesterday afternoon" (chiều hôm qua), ta chia động từ ở thì Quá khứ đơn: clean -> cleaned.'
  },
  {
    id: 'u03_q12',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Động từ bất quy tắc (give -> gave)',
    question: 'They _____ free warm meals to poor patients at the hospital last Sunday.',
    options: ['give', 'gave', 'given', 'giving'],
    correctIndex: 1,
    hint: 'Động từ bất quy tắc của "give" ở cột 2 (Past Simple) là gì?',
    explanation: 'Động từ bất quy tắc ở quá khứ đơn: "give" chuyển thành "gave" (V2). Câu: "They gave free warm meals to poor patients at the hospital last Sunday."'
  },
  {
    id: 'u03_q13',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Câu phủ định thì quá khứ đơn',
    question: 'We _____ visit the nursing home yesterday because it rained heavily all morning.',
    options: ['didn\'t', 'don\'t', 'weren\'t', 'wasn\'t'],
    correctIndex: 0,
    hint: 'Cấu trúc câu phủ định quá khứ đơn với động từ thường "visit": S + didn\'t + V-bare.',
    explanation: 'Trong câu phủ định thì quá khứ đơn có động từ thường "visit", ta dùng trợ động từ "didn\'t": S + didn\'t + V-bare.'
  },
  {
    id: 'u03_q14',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Câu hỏi nghi vấn thì quá khứ đơn',
    question: '_____ you plant any green trees around your house two days ago?',
    options: ['Do', 'Did', 'Were', 'Are'],
    correctIndex: 1,
    hint: 'Dấu hiệu "two days ago" (cách đây 2 ngày) và động từ thường "plant".',
    explanation: 'Câu hỏi nghi vấn thì quá khứ đơn với động từ thường bắt đầu bằng trợ động từ "Did": Did + S + V-bare?'
  },
  {
    id: 'u03_q15',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Động từ bất quy tắc phối hợp (teach & buy)',
    question: 'Last year, my mother _____ English to children at an orphanage and _____ them many comic books.',
    options: [
      'teached / bought',
      'taught / bought',
      'taught / buyed',
      'teach / buy'
    ],
    correctIndex: 1,
    hint: 'Quá khứ của teach là taught; quá khứ của buy là bought.',
    explanation: 'Cả hai động từ đều là bất quy tắc: teach -> taught; buy -> bought. "Last year, my mother taught English to children at an orphanage and bought them many comic books."'
  },
  {
    id: 'u03_q16',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Phân biệt thì Hiện tại đơn và Quá khứ đơn',
    question: 'Nam usually _____ books to the library on Saturdays, but last week he _____ them to an orphanage.',
    options: [
      'donates / donated',
      'donated / donates',
      'donate / donate',
      'is donating / donated'
    ],
    correctIndex: 0,
    hint: 'Vế đầu có "usually" (thói quen hiện tại đơn); vế sau có "last week" (hành động đã làm trong quá khứ).',
    explanation: 'Vế đầu diễn tả thói quen lặp lại ("usually") nên dùng Hiện tại đơn với chủ ngữ số ít: "donates". Vế sau có thời gian quá khứ xác định ("last week") nên dùng Quá khứ đơn: "donated".'
  },

  // CATEGORY 4: READING COMPREHENSION & SITUATIONAL REFLEX (4 QUESTIONS)
  {
    id: 'u03_q17',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Giao tiếp phản xạ: Hỏi về hoạt động cuối tuần trước',
    question: 'Lan: "What did your youth club do last weekend?" - Minh: "_____. The streets look much cleaner now."',
    options: [
      'We picked up litter and swept the pavements',
      'We will go to the cinema next Friday',
      'We are doing our homework right now',
      'We often play soccer on Monday'
    ],
    correctIndex: 0,
    hint: 'Câu hỏi hỏi về hành động trong quá khứ ("did... do last weekend?") và kết quả là đường phố sạch hơn.',
    explanation: 'Câu trả lời phù hợp nhất về hoạt động cộng đồng trong quá khứ là: "We picked up litter and swept the pavements" (Chúng tớ đã đi nhặt rác và quét dọn vỉa hè).'
  },
  {
    id: 'u03_q18',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Đọc hiểu dự án cộng đồng: "Green Summer"',
    question: 'What is the primary purpose of the "Green Summer" student campaign in Vietnam?',
    options: [
      'To earn extra money for students to buy games.',
      'To help rural communities, build bridges, and teach village children.',
      'To stay at home and watch television all summer.',
      'To travel abroad for luxury holidays.'
    ],
    correctIndex: 1,
    hint: 'Chiến dịch Mùa hè xanh nhằm giúp đỡ các vùng quê nghèo, sửa cầu đường và dạy học cho trẻ em làng quê.',
    explanation: 'Theo bài học trong SGK Tiếng Anh 7: Chiến dịch Mùa hè xanh là chương trình tình nguyện giúp đỡ cộng đồng nông thôn, xây sửa cầu đường và dạy học cho trẻ em vùng sâu vùng xa.'
  },
  {
    id: 'u03_q19',
    category: 'reading',
    level: 'van_dung',
    title: 'Đọc hiểu đoạn văn ngắn: An\'s volunteer experience',
    question: 'Read: "Last winter, An and her classmates collected 200 warm jackets and blankets for homeless people. They also cooked hot soup and handed it out on cold nights." How did An and her friends help?',
    options: [
      'They only donated money to the bank.',
      'They provided warm clothing and hot food directly to homeless people.',
      'They asked homeless people to clean their school.',
      'They sold soup on the street to make a profit.'
    ],
    correctIndex: 1,
    hint: 'Họ quyên góp áo ấm, chăn bông và nấu súp nóng phát tận tay người vô gia cư.',
    explanation: 'Thông tin trong bài nêu rõ: Họ đã cung cấp quần áo ấm (200 warm jackets and blankets) và thức ăn nóng (hot soup) trực tiếp cho người vô gia cư.'
  },
  {
    id: 'u03_q20',
    category: 'reading',
    level: 'van_dung',
    title: 'Giao tiếp phản xạ: Bày tỏ cảm xúc sau khi làm việc tốt',
    question: 'Bao: "Did you feel tired after cleaning the entire neighbourhood park yesterday?" - Hoa: "_____. We were exhausted, but we felt very happy and proud."',
    options: [
      'No, not at all, it was very boring.',
      'Yes, a little bit, but it was worth it!',
      'I hated every single minute of it.',
      'I didn\'t go to the park yesterday.'
    ],
    correctIndex: 1,
    hint: 'Vế sau Hoa nói: "Tụi mình thấm mệt, nhưng cảm thấy rất vui và tự hào!" -> Đáp lại: "Có một chút, nhưng rất đáng công!".',
    explanation: '"Yes, a little bit, but it was worth it! We were exhausted, but we felt very happy and proud." là câu phản hồi tự nhiên và tích cực nhất khi chia sẻ về công việc tình nguyện.'
  }
];
