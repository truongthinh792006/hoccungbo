import { EnglishExercise, EnglishVocabWord } from './unit1_hobbies_data';

export const UNIT4_VOCABULARY: EnglishVocabWord[] = [
  {
    id: 'u4_v01',
    word: 'art gallery',
    type: 'phr n',
    ipa: '/ˈɑːt ɡæləri/',
    meaning: 'phòng triển lãm nghệ thuật, phòng tranh',
    collocation: 'visit an art gallery / display in an art gallery',
    example: 'We visited the National Art Gallery to see famous modern oil paintings.'
  },
  {
    id: 'u4_v02',
    word: 'water puppetry',
    type: 'phr n',
    ipa: '/ˈwɔːtə ˈpʌpɪtri/',
    meaning: 'nghệ thuật múa rối nước truyền thống của Việt Nam',
    collocation: 'watch water puppetry / traditional water puppetry',
    example: 'Water puppetry is a unique Vietnamese traditional art form that originated in the 11th century.'
  },
  {
    id: 'u4_v03',
    word: 'composer',
    type: 'n',
    ipa: '/kəmˈpəʊzə(r)/',
    meaning: 'nhà soạn nhạc (sáng tác các bản nhạc, ca khúc)',
    collocation: 'famous composer / classical composer',
    example: 'Van Cao was a great Vietnamese composer who wrote Tien Quan Ca.'
  },
  {
    id: 'u4_v04',
    word: 'musical instrument',
    type: 'phr n',
    ipa: '/ˈmjuːzɪkl ˈɪnstrəmənt/',
    meaning: 'nhạc cụ (đàn piano, ghi-ta, sáo, đàn tranh...)',
    collocation: 'play a musical instrument / traditional instruments',
    example: 'Can you play any musical instrument, such as the violin or guitar?'
  },
  {
    id: 'u4_v05',
    word: 'puppeteer',
    type: 'n',
    ipa: '/ˌpʌpɪˈtɪə(r)/',
    meaning: 'nghệ nhân điều khiển con rối',
    collocation: 'skillful puppeteer / behind the bamboo screen',
    example: 'Puppeteers stand behind a bamboo screen in the water to control the puppets with long poles.'
  },
  {
    id: 'u4_v06',
    word: 'portrait',
    type: 'n',
    ipa: '/ˈpɔːtreɪt/',
    meaning: 'bức vẽ chân dung',
    collocation: 'paint a portrait / self-portrait',
    example: 'The Mona Lisa by Leonardo da Vinci is arguably the most famous portrait in the world.'
  },
  {
    id: 'u4_v07',
    word: 'sculpture',
    type: 'n',
    ipa: '/ˈskʌlptʃə(r)/',
    meaning: 'nghệ thuật điêu khắc, bức tượng điêu khắc',
    collocation: 'stone sculpture / marble sculpture',
    example: 'There are many ancient marble sculptures displayed in the central museum.'
  },
  {
    id: 'u4_v08',
    word: 'orchestra',
    type: 'n',
    ipa: '/ˈɔːkɪstrə/',
    meaning: 'dàn nhạc giao hưởng',
    collocation: 'symphony orchestra / play in an orchestra',
    example: 'The orchestra played Beethoven\'s Symphony No. 5 with great energy and passion.'
  },
  {
    id: 'u4_v09',
    word: 'exhibition',
    type: 'n',
    ipa: '/ˌeksɪˈbɪʃn/',
    meaning: 'buổi triển lãm, cuộc trưng bày tác phẩm',
    collocation: 'photo exhibition / art exhibition',
    example: 'Our school is holding an annual photography exhibition next Monday.'
  },
  {
    id: 'u4_v10',
    word: 'originate',
    type: 'v',
    ipa: '/əˈrɪdʒɪneɪt/',
    meaning: 'bắt nguồn từ, có nguồn gốc từ',
    collocation: 'originate in/from somewhere',
    example: 'Water puppetry originated in the villages of the Red River Delta in northern Vietnam.'
  },
  {
    id: 'u4_v11',
    word: 'puppet',
    type: 'n',
    ipa: '/ˈpʌpɪt/',
    meaning: 'con rối (bằng gỗ, dây hoặc que)',
    collocation: 'wooden puppet / shadow puppet',
    example: 'The wooden puppets are carved from light fig wood and painted with lacquer.'
  },
  {
    id: 'u4_v12',
    word: 'melodic',
    type: 'adj',
    ipa: '/məˈlɒdɪk/',
    meaning: 'êm dịu, du dương, có giai điệu hay',
    collocation: 'melodic voice / melodic tune',
    example: 'Folk songs often have gentle and melodic tunes that stay in our hearts.'
  }
];

export const UNIT4_EXERCISES: EnglishExercise[] = [
  // CATEGORY 1: VOCABULARY & MUSICAL TERMS (5 QUESTIONS)
  {
    id: 'u04_q01',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Người sáng tác các bản nhạc',
    question: 'A person who writes music, especially classical music, is called a _____.',
    options: ['composer', 'puppeteer', 'painter', 'actor'],
    correctIndex: 0,
    hint: 'Người sáng tác bài hát hoặc nhạc giao hưởng như Văn Cao, Trịnh Công Sơn hay Beethoven.',
    explanation: 'Đáp án là "composer" (nhà soạn nhạc). "puppeteer" (nghệ nhân múa rối), "painter" (họa sĩ), "actor" (diễn viên nam).'
  },
  {
    id: 'u04_q02',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Nghệ thuật múa rối nước dân gian',
    question: '_____ is a unique traditional art form of Vietnam where puppets dance on the surface of water.',
    options: ['Origami', 'Water puppetry', 'Ballet', 'Sculpture'],
    correctIndex: 1,
    hint: 'Loại hình nghệ thuật dân gian độc đáo của Việt Nam mà con rối nhảy múa trên mặt nước.',
    explanation: '"Water puppetry" là nghệ thuật múa rối nước truyền thống của Việt Nam.'
  },
  {
    id: 'u04_q03',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Từ vựng: Tranh vẽ chân dung',
    question: 'The painter spent three whole weeks finishing this beautiful oil _____ of his grandmother.',
    options: ['concert', 'portrait', 'instrument', 'origami'],
    correctIndex: 1,
    hint: 'Bức tranh vẽ khuôn mặt một con người cụ thể (bà của họa sĩ) được gọi là tranh gì?',
    explanation: '"portrait" có nghĩa là bức tranh chân dung. "concert" (buổi hòa nhạc), "instrument" (nhạc cụ), "origami" (gấp giấy).'
  },
  {
    id: 'u04_q04',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Cụm từ: Chơi một loại nhạc cụ',
    question: 'Learning to play a _____ like the piano or violin requires daily practice and patience.',
    options: ['musical instrument', 'puppet show', 'sculpture', 'bamboo screen'],
    correctIndex: 0,
    hint: 'Piano và violin là hai ví dụ điển hình của loại thiết bị âm nhạc nào?',
    explanation: 'Cụm từ "musical instrument" mang nghĩa là nhạc cụ. "play a musical instrument" = chơi nhạc cụ.'
  },
  {
    id: 'u04_q05',
    category: 'vocabulary',
    level: 'van_dung',
    title: 'Từ vựng: Nguồn gốc xuất xứ nghệ thuật',
    question: 'According to historians, water puppetry _____ in the rural villages of the Red River Delta in the eleventh century.',
    options: ['decided', 'originated', 'painted', 'collected'],
    correctIndex: 1,
    hint: 'Bắt nguồn, khởi nguồn từ một vùng đất hoặc thời điểm lịch sử.',
    explanation: '"originated" (bắt nguồn từ, khởi nguồn): originate in + địa điểm/thời gian. Múa rối nước bắt nguồn từ vùng đồng bằng sông Hồng thế kỷ 11.'
  },

  // CATEGORY 2: PRONUNCIATION /ʃ/ & /ʒ/ (4 QUESTIONS)
  {
    id: 'u04_q06',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa phụ âm vô thanh /ʃ/',
    question: 'Which of the following words has the sound /ʃ/ (như tiếng "sh")?',
    options: ['decision', 'pleasure', 'musician', 'television'],
    correctIndex: 2,
    hint: 'Đuôi -cian trong từ chỉ nhạc sĩ musician được phát âm là /ʃ/ (/mjuːˈzɪʃn/).',
    explanation: '"musician" /mjuːˈzɪʃn/ chứa âm vô thanh /ʃ/. Các từ còn lại: "decision" /dɪˈsɪʒn/, "pleasure" /ˈpleʒə/, "television" /ˈtelɪvɪʒn/ đều chứa âm hữu thanh /ʒ/.'
  },
  {
    id: 'u04_q07',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa phụ âm hữu thanh /ʒ/',
    question: 'Which word contains the voiced palato-alveolar sound /ʒ/?',
    options: ['show', 'exhibition', 'special', 'measure'],
    correctIndex: 3,
    hint: 'Từ "measure" phát âm là /ˈmeʒə/, có âm hữu thanh /ʒ/ rung cổ họng.',
    explanation: '"measure" /ˈmeʒə/ chứa âm /ʒ/. Ba từ còn lại: "show" /ʃəʊ/, "exhibition" /ˌeksɪˈbɪʃn/, "special" /ˈspeʃl/ đều chứa âm vô thanh /ʃ/.'
  },
  {
    id: 'u04_q08',
    category: 'pronunciation',
    level: 'thong_hieu',
    title: 'Phát âm: Phân biệt âm trong đuôi -tion và -sion',
    question: 'Find the word whose underlined part is pronounced DIFFERENTLY from the other three:',
    options: ['action', 'condition', 'conclusion', 'production'],
    correctIndex: 2,
    hint: 'Đuôi -tion trong action, condition, production đọc là /ʃn/, còn -sion trong conclusion đọc là /ʒn/.',
    explanation: '"conclusion" được phát âm là /kənˈkluːʒn/ (chứa âm /ʒ/). Ba từ còn lại đều có đuôi -tion phát âm là /ʃ/: "action" /ˈækʃn/, "condition" /kənˈdɪʃn/, "production" /prəˈdʌkʃn/.'
  },
  {
    id: 'u04_q09',
    category: 'pronunciation',
    level: 'van_dung',
    title: 'Phát âm: Phân biệt âm /ʃ/ và /ʒ/',
    question: 'Choose the word that has the same sound as the "s" in "treasure" /ˈtreʒə/:',
    options: ['usual', 'sure', 'sugar', 'anxious'],
    correctIndex: 0,
    hint: '"treasure" chứa âm /ʒ/. Từ nào trong 4 từ trên cũng phát âm là /ʒ/?',
    explanation: '"usual" được phát âm là /ˈjuːʒuəl/ (chứa âm /ʒ/ giống "treasure"). Ba từ còn lại đều chứa âm /ʃ/: "sure" /ʃɔː/, "sugar" /ˈʃʊɡə/, "anxious" /ˈæŋkʃəs/.'
  },

  // CATEGORY 3: GRAMMAR - COMPARISONS & AGREEMENT (7 QUESTIONS)
  {
    id: 'u04_q10',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: So sánh ngang bằng "as... as"',
    question: 'Pop music is _____ popular _____ rock music among young teenagers in our town.',
    options: ['as / as', 'so / than', 'the same / as', 'different / from'],
    correctIndex: 0,
    hint: 'Cấu trúc so sánh ngang bằng với tính từ: as + adj + as.',
    explanation: 'Cấu trúc so sánh ngang bằng: "as + adj + as". Pop music is as popular as rock music (Nhạc pop cũng phổ biến như nhạc rock).'
  },
  {
    id: 'u04_q11',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: So sánh khác biệt "different from"',
    question: 'Traditional water puppetry is quite different _____ modern 3D cinema movies.',
    options: ['with', 'as', 'from', 'to'],
    correctIndex: 2,
    hint: 'Tính từ "different" luôn đi với giới từ nào để chỉ sự khác biệt?',
    explanation: 'Cấu trúc so sánh khác nhau: "different from" (khác với). Water puppetry is quite different from modern 3D cinema.'
  },
  {
    id: 'u04_q12',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: So sánh giống nhau "the same as"',
    question: 'Her taste in music is _____ mine; we both love listening to classical piano solos.',
    options: ['the same as', 'as different as', 'same to', 'different with'],
    correctIndex: 0,
    hint: 'Cả hai đều cùng thích nghe piano cổ điển -> Gu âm nhạc "giống với" của tôi.',
    explanation: 'Cấu trúc so sánh giống nhau: "the same as + noun/pronoun". Her taste in music is the same as mine (Gu âm nhạc của cô ấy giống hệt của tôi).'
  },
  {
    id: 'u04_q13',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: So sánh không bằng "not as... as"',
    question: 'My drawing is not _____ yours, but my teacher still praised my effort.',
    options: ['as artistic as', 'artistic than', 'more artistic as', 'so artistic than'],
    correctIndex: 0,
    hint: 'Cấu trúc so sánh không bằng: not as + adj + as (hoặc not so + adj + as).',
    explanation: 'So sánh không bằng: "not as + adj + as". "My drawing is not as artistic as yours" (Tranh của tớ không mang tính nghệ thuật bằng của cậu).'
  },
  {
    id: 'u04_q14',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Từ đồng tình khẳng định "too" ở cuối câu',
    question: 'Phong loves watching puppet shows, and his younger sister loves them, _____.',
    options: ['either', 'too', 'neither', 'so'],
    correctIndex: 1,
    hint: 'Từ đứng cuối câu khẳng định mang nghĩa "cũng vậy, cũng thế".',
    explanation: '"too" đứng ở cuối câu khẳng định để diễn đạt sự đồng tình (cũng vậy). "either" đứng cuối câu phủ định.'
  },
  {
    id: 'u04_q15',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Từ đồng tình phủ định "either" ở cuối câu',
    question: 'Mai doesn\'t know how to play the cello, and her brother doesn\'t, _____.',
    options: ['too', 'either', 'also', 'neither'],
    correctIndex: 1,
    hint: 'Câu thứ hai là câu phủ định (doesn\'t), từ chỉ "cũng không" đứng ở cuối câu là gì?',
    explanation: 'Trong câu phủ định, từ "either" đứng ở cuối câu mang nghĩa "cũng không": "...and her brother doesn\'t, either."'
  },
  {
    id: 'u04_q16',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Viết lại câu so sánh tương đương',
    question: 'Choose the sentence that has the SAME meaning: "The tickets to the art museum are 50,000 VND, and the concert tickets are 100,000 VND."',
    options: [
      'The concert tickets are as cheap as the museum tickets.',
      'The museum tickets are not as expensive as the concert tickets.',
      'The museum tickets are the same price as the concert tickets.',
      'The concert tickets are cheaper than the museum tickets.'
    ],
    correctIndex: 1,
    hint: 'Vé bảo tàng (50k) rẻ hơn vé hòa nhạc (100k) -> Vé bảo tàng không đắt bằng vé hòa nhạc.',
    explanation: 'Vé bảo tàng 50k, vé hòa nhạc 100k, do đó vé bảo tàng không đắt bằng vé hòa nhạc: "The museum tickets are not as expensive as the concert tickets."'
  },

  // CATEGORY 4: READING COMPREHENSION & SITUATIONAL REFLEX (4 QUESTIONS)
  {
    id: 'u04_q17',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Giao tiếp phản xạ: Hỏi về cảm nhận buổi hòa nhạc',
    question: 'David: "How did you find the symphony concert last night?" - Linda: "_____. The violin soloist was fantastic!"',
    options: [
      'It was one of the best concerts I have ever attended',
      'I found my lost keys under the seat',
      'I will buy two tickets tomorrow',
      'No, I don\'t like eating seafood'
    ],
    correctIndex: 0,
    hint: '"How did you find...?" là câu hỏi "Cậu cảm thấy/thấy ... như thế nào?".',
    explanation: 'Khi được hỏi "How did you find the concert?" (Bạn thấy buổi hòa nhạc thế nào?), câu trả lời đưa ra nhận xét: "It was one of the best concerts I have ever attended" (Đó là một trong những buổi hòa nhạc tuyệt vời nhất mình từng dự).'
  },
  {
    id: 'u04_q18',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Đọc hiểu múa rối nước: Nơi biểu diễn',
    question: 'Where do water puppet shows traditionally take place in Vietnamese villages?',
    options: [
      'On dry indoor wooden stages.',
      'In village ponds or waist-deep water pavilions.',
      'In high school classrooms.',
      'On modern computer screens.'
    ],
    correctIndex: 1,
    hint: 'Múa rối nước biểu diễn ở ao làng hoặc thủy đình ngập nước ngang thắt lưng nghệ nhân.',
    explanation: 'Theo SGK Tiếng Anh 7 Unit 4: Múa rối nước truyền thống được biểu diễn ở các ao làng hoặc hồ nước (village ponds or water pavilions) nơi sân khấu chính là mặt nước.'
  },
  {
    id: 'u04_q19',
    category: 'reading',
    level: 'van_dung',
    title: 'Đọc hiểu đoạn văn: Con rối nước được làm như thế nào?',
    question: 'Read: "Water puppets are made of fig wood because this wood is light and floats easily on water. After being carved, the puppets are coated with natural lacquer to make them waterproof and colorful." Why is fig wood used to make water puppets?',
    options: [
      'Because it is heavy and sinks to the bottom.',
      'Because it is light, durable, and floats on water easily.',
      'Because it is the most expensive metal.',
      'Because it produces loud music.'
    ],
    correctIndex: 1,
    hint: 'Gỗ sung (fig wood) nhẹ (light) và dễ nổi trên mặt nước (floats easily on water).',
    explanation: 'Đoạn văn nêu rõ: Gỗ sung được sử dụng vì loại gỗ này nhẹ và nổi rất tốt trên mặt nước ("light and floats easily on water").'
  },
  {
    id: 'u04_q20',
    category: 'reading',
    level: 'van_dung',
    title: 'Giao tiếp phản xạ: Đồng ý về gu thưởng thức nghệ thuật',
    question: 'Tom: "I think visiting art galleries is much more relaxing than staying home." - Nick: "_____. It inspires our imagination."',
    options: [
      'I totally agree with you.',
      'I am busy doing housework.',
      'No, you shouldn\'t say that.',
      'I dislike reading novels.'
    ],
    correctIndex: 0,
    hint: 'Vế sau Nick nói: "Nó khơi nguồn trí tưởng tượng của chúng mình" -> Nick hoàn toàn đồng ý.',
    explanation: '"I totally agree with you. It inspires our imagination." (Mình hoàn toàn đồng ý với cậu. Nó khơi nguồn cảm hứng cho trí tưởng tượng của chúng mình) là câu đối đáp hoàn toàn phù hợp.'
  }
];
