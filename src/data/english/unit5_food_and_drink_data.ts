import { EnglishExercise, EnglishVocabWord } from './unit1_hobbies_data';

export const UNIT5_VOCABULARY: EnglishVocabWord[] = [
  {
    id: 'u5_v01',
    word: 'ingredient',
    type: 'n',
    ipa: '/ɪnˈɡriːdiənt/',
    meaning: 'nguyên liệu, thành phần cấu tạo món ăn',
    collocation: 'main ingredient / list of ingredients',
    example: 'The main ingredients of an omelette are eggs, a pinch of salt, and cooking oil.'
  },
  {
    id: 'u5_v02',
    word: 'recipe',
    type: 'n',
    ipa: '/ˈresəpi/',
    meaning: 'công thức nấu ăn, hướng dẫn chế biến',
    collocation: 'follow a recipe / traditional recipe',
    example: 'My grandmother gave me her secret recipe for making delicious spring rolls.'
  },
  {
    id: 'u5_v03',
    word: 'broth',
    type: 'n',
    ipa: '/brɒθ/',
    meaning: 'nước dùng, nước hầm xương (nấu phở, bún, súp)',
    collocation: 'simmer the broth / clear beef broth',
    example: 'The broth of pho is made by stewing beef bones for many hours with cinnamon and ginger.'
  },
  {
    id: 'u5_v04',
    word: 'omelette',
    type: 'n',
    ipa: '/ˈɒmlət/',
    meaning: 'trứng rán ốp-lết, trứng cuộn',
    collocation: 'make an omelette / cheese omelette',
    example: 'He beat two eggs in a bowl and fried them in a pan to make a quick omelette.'
  },
  {
    id: 'u5_v05',
    word: 'mineral water',
    type: 'phr n',
    ipa: '/ˈmɪnərəl ˈwɔːtə(r)/',
    meaning: 'nước khoáng đóng chai',
    collocation: 'a bottle of mineral water / cold mineral water',
    example: 'Waitress, could you please bring us two bottles of chilled mineral water?'
  },
  {
    id: 'u5_v06',
    word: 'pancake',
    type: 'n',
    ipa: '/ˈpænkeɪk/',
    meaning: 'bánh kếp (làm từ bột mì, trứng, sữa rán trên chảo)',
    collocation: 'sweet pancake / Vietnamese pancake (bánh xèo)',
    example: 'Banh xeo is a famous savory Vietnamese pancake filled with shrimp and bean sprouts.'
  },
  {
    id: 'u5_v07',
    word: 'turmeric',
    type: 'n',
    ipa: '/ˈtɜːmərɪk/',
    meaning: 'củ nghệ, bột nghệ (tạo màu vàng và hương thơm đặc trưng)',
    collocation: 'turmeric powder / add a teaspoon of turmeric',
    example: 'Turmeric gives Cha ca La Vong its signature golden yellow color and distinct aroma.'
  },
  {
    id: 'u5_v08',
    word: 'pepper',
    type: 'n',
    ipa: '/ˈpepə(r)/',
    meaning: 'hạt tiêu, ớt chuông',
    collocation: 'black pepper / a pinch of black pepper',
    example: 'Sprinkle a little freshly ground black pepper on the noodle soup before serving.'
  },
  {
    id: 'u5_v09',
    word: 'pour',
    type: 'v',
    ipa: '/pɔː(r)/',
    meaning: 'rót, đổ (chất lỏng vào bát, chảo, ly)',
    collocation: 'pour broth over the noodles / pour milk into a cup',
    example: 'Carefully pour the hot broth over the noodles and beef slices.'
  },
  {
    id: 'u5_v10',
    word: 'stew',
    type: 'v, n',
    ipa: '/stjuː/',
    meaning: 'ninh, hầm (thịt hoặc xương trong lửa nhỏ nhiều giờ)',
    collocation: 'stew beef bones / slow-cooked stew',
    example: 'To make delicious pho soup, you should stew beef bones slowly for at least 8 hours.'
  },
  {
    id: 'u5_v11',
    word: 'serve',
    type: 'v',
    ipa: '/sɜːv/',
    meaning: 'dọn món ra bàn, phục vụ thức ăn kèm với gia vị',
    collocation: 'serve with fresh herbs / served hot',
    example: 'Pho is always served piping hot with fresh lime wedges, chili, and herbs.'
  },
  {
    id: 'u5_v12',
    word: 'tasty',
    type: 'adj',
    ipa: '/ˈteɪsti/',
    meaning: 'ngon miệng, đậm đà hương vị',
    collocation: 'delicious and tasty / tasty street food',
    example: 'Hanoi is renowned for its tasty street food, from bun cha to crispy banh mi.'
  }
];

export const UNIT5_EXERCISES: EnglishExercise[] = [
  // CATEGORY 1: VOCABULARY & INGREDIENTS (5 QUESTIONS)
  {
    id: 'u05_q01',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Nước dùng trong món phở',
    question: 'The clear and flavorful liquid made by boiling beef bones with spices in pho is called the _____.',
    options: ['sauce', 'broth', 'pancake', 'dessert'],
    correctIndex: 1,
    hint: 'Nước hầm xương thịt thơm ngon tạo nên linh hồn của bát phở.',
    explanation: 'Đáp án là "broth" (nước dùng, nước hầm). "sauce" (nước sốt), "pancake" (bánh kếp), "dessert" (món tráng miệng).'
  },
  {
    id: 'u05_q02',
    category: 'vocabulary',
    level: 'nhan_biet',
    title: 'Từ vựng: Thành phần nguyên liệu nấu ăn',
    question: 'Flour, sugar, butter, and eggs are the main _____ needed to bake this chocolate cake.',
    options: ['ingredients', 'recipes', 'dishes', 'menus'],
    correctIndex: 0,
    hint: 'Các chất, thực phẩm dùng để chế biến món ăn gọi là gì?',
    explanation: '"ingredients" nghĩa là nguyên liệu. "recipes" là công thức nấu ăn; "dishes" là món ăn; "menus" là thực đơn.'
  },
  {
    id: 'u05_q03',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Từ vựng: Gia vị tạo màu vàng tự nhiên',
    question: 'People often add a teaspoon of _____ powder to give the fried fish its attractive golden-yellow color.',
    options: ['sugar', 'salt', 'turmeric', 'pepper'],
    correctIndex: 2,
    hint: 'Củ nghệ / bột nghệ là loại gia vị đặc trưng tạo màu vàng bắt mắt trong ẩm thực Việt Nam.',
    explanation: '"turmeric" là củ nghệ / bột nghệ (mang lại màu vàng óng và hương vị thơm ngon cho món chả cá, bánh xèo).'
  },
  {
    id: 'u05_q04',
    category: 'vocabulary',
    level: 'thong_hieu',
    title: 'Đơn vị đo lường: Đồ uống đóng chai',
    question: 'Could you please pass me a _____ of cold mineral water? I feel very thirsty.',
    options: ['bowl', 'slice', 'bottle', 'kilo'],
    correctIndex: 2,
    hint: 'Nước khoáng đóng chai đi với lượng từ nào?',
    explanation: 'Cụm từ "a bottle of mineral water" (một chai nước khoáng). "a bowl of" (một bát), "a slice of" (một lát), "a kilo of" (một cân).'
  },
  {
    id: 'u05_q05',
    category: 'vocabulary',
    level: 'van_dung',
    title: 'Động từ chế biến: Rót nước dùng',
    question: 'After placing the cooked noodles and beef slices into the bowl, you should slowly _____ the boiling broth over them.',
    options: ['freeze', 'pour', 'peel', 'fry'],
    correctIndex: 1,
    hint: 'Hành động chế/rót/đổ nước dùng nóng hổi vào bát phở.',
    explanation: '"pour" mang nghĩa là rót, đổ chất lỏng. "freeze" là làm đông lạnh; "peel" là gọt vỏ; "fry" là chiên rán.'
  },

  // CATEGORY 2: PRONUNCIATION /ɒ/ & /ɔː/ (4 QUESTIONS)
  {
    id: 'u05_q06',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa nguyên âm ngắn /ɒ/',
    question: 'Which of the following words has the short vowel sound /ɒ/ (âm "o" ngắn, tròn môi)?',
    options: ['pork', 'pot', 'fork', 'sauce'],
    correctIndex: 1,
    hint: 'Từ "pot" /pɒt/ chứa âm /ɒ/ ngắn, trong khi pork, fork, sauce chứa âm /ɔː/ dài.',
    explanation: '"pot" /pɒt/ chứa âm ngắn /ɒ/. Ba từ còn lại: "pork" /pɔːk/, "fork" /fɔːk/, "sauce" /sɔːs/ đều chứa âm dài /ɔː/.'
  },
  {
    id: 'u05_q07',
    category: 'pronunciation',
    level: 'nhan_biet',
    title: 'Phát âm: Tìm từ chứa nguyên âm dài /ɔː/',
    question: 'Which word contains the long vowel sound /ɔː/?',
    options: ['hot', 'soft', 'bottle', 'water'],
    correctIndex: 3,
    hint: 'Từ "water" /ˈwɔːtə/ có âm tiết đầu phát âm là /ɔː/.',
    explanation: '"water" /ˈwɔːtə/ chứa âm dài /ɔː/. Ba từ còn lại: "hot" /hɒt/, "soft" /sɒft/, "bottle" /ˈbɒtl/ đều chứa âm ngắn /ɒ/.'
  },
  {
    id: 'u05_q08',
    category: 'pronunciation',
    level: 'thong_hieu',
    title: 'Phát âm: Phân biệt âm /ɒ/ và /ɔː/ trong nhóm từ',
    question: 'Find the word that has a DIFFERENT vowel sound from the other three:',
    options: ['lot', 'cost', 'short', 'want'],
    correctIndex: 2,
    hint: 'Ba từ có âm /ɒ/, một từ chứa âm kéo dài /ɔː/.',
    explanation: '"short" được phát âm là /ʃɔːt/ (chứa âm dài /ɔː/). Ba từ còn lại đều có âm ngắn /ɒ/: "lot" /lɒt/, "cost" /kɒst/, "want" /wɒnt/.'
  },
  {
    id: 'u05_q09',
    category: 'pronunciation',
    level: 'van_dung',
    title: 'Phát âm: Chọn từ có cùng âm với "sauce" /sɔːs/',
    question: 'Which of the following words has the same vowel sound as "sauce" /sɔːs/?',
    options: ['box', 'fall', 'top', 'clock'],
    correctIndex: 1,
    hint: '"sauce" chứa âm /ɔː/. Chữ a trong "fall" /fɔːl/ cũng phát âm là /ɔː/.',
    explanation: '"fall" /fɔːl/ chứa âm /ɔː/ giống như "sauce" /sɔːs/. Các từ "box" /bɒks/, "top" /tɒp/, "clock" /klɒk/ đều chứa âm /ɒ/.'
  },

  // CATEGORY 3: GRAMMAR - COUNTABLE/UNCOUNTABLE & QUANTIFIERS (7 QUESTIONS)
  {
    id: 'u05_q10',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Phân biệt Danh từ không đếm được',
    question: 'Which of the following items is an UNCOUNTABLE NOUN (Danh từ không đếm được)?',
    options: ['apple', 'beef', 'egg', 'carrot'],
    correctIndex: 1,
    hint: 'Thịt bò (beef) là danh từ chỉ chất liệu/thực phẩm không đếm được số lượng trực tiếp.',
    explanation: '"beef" (thịt bò) là danh từ không đếm được (Uncountable Noun). Ba từ "apple", "egg", "carrot" đều là danh từ đếm được có thể thêm số đếm (an apple, two eggs, three carrots).'
  },
  {
    id: 'u05_q11',
    category: 'grammar',
    level: 'nhan_biet',
    title: 'Ngữ pháp: Sử dụng "some" trong câu khẳng định',
    question: 'There is _____ fresh milk left in the fridge if you want to make hot chocolate.',
    options: ['some', 'any', 'many', 'a few'],
    correctIndex: 0,
    hint: 'Câu khẳng định với danh từ không đếm được "milk".',
    explanation: 'Trong câu khẳng định với danh từ không đếm được "milk", ta dùng "some" (một ít). "any" dùng trong câu phủ định hoặc nghi vấn; "many" và "a few" chỉ dùng với danh từ đếm được số nhiều.'
  },
  {
    id: 'u05_q12',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Sử dụng "any" trong câu phủ định',
    question: 'We need to go to the supermarket because we don\'t have _____ eggs or butter left.',
    options: ['some', 'any', 'much', 'a lot'],
    correctIndex: 1,
    hint: 'Câu phủ định có "don\'t have" đi với từ chỉ số lượng nào?',
    explanation: 'Trong câu phủ định (don\'t have), ta dùng từ chỉ lượng "any" (không còn chút nào). "We don\'t have any eggs or butter left."'
  },
  {
    id: 'u05_q13',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Hỏi số lượng với "How many"',
    question: '_____ bananas do you eat every week to stay healthy?',
    options: ['How much', 'How many', 'How often', 'How far'],
    correctIndex: 1,
    hint: '"bananas" là danh từ đếm được số nhiều (có -s). Hỏi số lượng đếm được dùng từ để hỏi nào?',
    explanation: 'Hỏi số lượng với danh từ đếm được số nhiều (bananas), ta dùng "How many + plural noun?".'
  },
  {
    id: 'u05_q14',
    category: 'grammar',
    level: 'thong_hieu',
    title: 'Ngữ pháp: Hỏi lượng với "How much"',
    question: '_____ water should a teenager drink each day according to nutritionists?',
    options: ['How many', 'How much', 'How long', 'How old'],
    correctIndex: 1,
    hint: '"water" là danh từ không đếm được. Hỏi lượng nước dùng "How much".',
    explanation: 'Hỏi lượng đối với danh từ không đếm được (water), ta dùng "How much + uncountable noun?".'
  },
  {
    id: 'u05_q15',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Lời mời lịch sự với "some"',
    question: 'Would you like _____ green tea with lemon slices, sir?',
    options: ['any', 'some', 'many', 'a few'],
    correctIndex: 1,
    hint: 'Mặc dù là câu hỏi, nhưng đây là lời mời/đề nghị lịch sự ("Would you like...?"), nên dùng "some" chứ không dùng "any".',
    explanation: 'Trong câu mời hoặc đề nghị lịch sự bắt đầu bằng "Would you like...?", ta dùng "some": "Would you like some green tea with lemon slices?"'
  },
  {
    id: 'u05_q16',
    category: 'grammar',
    level: 'van_dung',
    title: 'Ngữ pháp: Kết hợp lượng từ và danh từ',
    question: 'There aren\'t _____ vegetables in the kitchen, but there is _____ beef in the freezer.',
    options: [
      'any / some',
      'some / any',
      'much / many',
      'any / any'
    ],
    correctIndex: 0,
    hint: 'Vế 1 là câu phủ định (aren\'t) -> dùng "any". Vế 2 là câu khẳng định (there is) -> dùng "some".',
    explanation: 'Vế 1 phủ định (aren\'t) đi với "any" (aren\'t any vegetables). Vế 2 khẳng định (there is) đi với danh từ không đếm được beef dùng "some" (there is some beef). Cặp từ đúng: any / some.'
  },

  // CATEGORY 4: READING COMPREHENSION & SITUATIONAL REFLEX (4 QUESTIONS)
  {
    id: 'u05_q17',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Giao tiếp phản xạ: Gọi món trong nhà hàng',
    question: 'Waiter: "What would you like to order for dinner, miss?" - Customer: "_____, please."',
    options: [
      'A bowl of chicken noodle soup and a bottle of mineral water',
      'I want to play chess in the park',
      'My teacher is very kind',
      'I am 12 years old'
    ],
    correctIndex: 0,
    hint: 'Nhân viên phục vụ hỏi khách muốn gọi món gì cho bữa tối ("What would you like to order?").',
    explanation: 'Câu gọi món ăn và thức uống đúng chuẩn trong nhà hàng: "A bowl of chicken noodle soup and a bottle of mineral water, please" (Cho tôi một bát phở gà và một chai nước khoáng).'
  },
  {
    id: 'u05_q18',
    category: 'reading',
    level: 'thong_hieu',
    title: 'Đọc hiểu món Phở: Các loại phở truyền thống',
    question: 'According to English 7 Unit 5, what are the two most popular and traditional varieties of Vietnamese Pho?',
    options: [
      'Beef pho (pho bo) and chicken pho (pho ga)',
      'Fish pho and pork pho',
      'Cheese pho and potato pho',
      'Mushroom pho and tomato pho'
    ],
    correctIndex: 0,
    hint: 'Hai loại phở truyền thống và nổi tiếng nhất của Việt Nam là phở bò và phở gà.',
    explanation: 'Theo SGK Tiếng Anh 7: Hai loại phở phổ biến nhất là phở bò (beef pho) và phở gà (chicken pho).'
  },
  {
    id: 'u05_q19',
    category: 'reading',
    level: 'van_dung',
    title: 'Đọc hiểu đoạn văn: Bí quyết làm nước dùng phở thơm ngon',
    question: 'Read: "To prepare a fragrant pot of pho broth, beef or chicken bones must be stewed slowly for many hours. Spices like grilled shallots, ginger, star anise, and cinnamon sticks are added to create its unique and rich flavor." Which spices are used in the broth?',
    options: [
      'Sugar, chocolate, and strawberries.',
      'Shallots, ginger, star anise, and cinnamon.',
      'Milk, butter, and cheese.',
      'Tomatoes, potatoes, and pumpkins.'
    ],
    correctIndex: 1,
    hint: 'Các gia vị nêu trong đoạn văn: grilled shallots (hành nướng), ginger (gừng), star anise (hoa hồi), cinnamon (quế).',
    explanation: 'Đoạn văn nêu rõ các gia vị truyền thống gồm hành nướng, gừng, hoa hồi và thanh quế ("shallots, ginger, star anise, and cinnamon").'
  },
  {
    id: 'u05_q20',
    category: 'reading',
    level: 'van_dung',
    title: 'Giao tiếp phản xạ: Hỏi giá tiền món ăn',
    question: 'Customer: "Excuse me, how much is a bowl of beef noodle soup?" - Street vendor: "_____."',
    options: [
      'It is 45,000 VND',
      'It is 5 kilometers away',
      'It takes two hours',
      'I like eating apples'
    ],
    correctIndex: 0,
    hint: 'Hỏi giá tiền "How much is...?" cần câu trả lời chỉ số tiền.',
    explanation: 'Khi khách hỏi giá tiền "How much is a bowl of beef noodle soup?", người bán trả lời số tiền: "It is 45,000 VND" (Dạ 45 nghìn đồng ạ).'
  }
];
