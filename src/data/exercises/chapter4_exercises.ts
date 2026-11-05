import { PracticeExercise } from '../../types/curriculum';

export const chapter4Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 12: TỔNG CÁC GÓC TRONG MỘT TAM GIÁC (15 CÂU)
  // ==========================================================================

  {
    id: 'ch4_l12_q1',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 1,
    title: 'Tính góc thứ ba trong tam giác',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tổng 3 góc', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ có $\\widehat{A} = 65^\\circ$ và $\\widehat{B} = 55^\\circ$. Số đo góc $\\widehat{C}$ là:',
    options: [
      '$\\widehat{C} = 50^\\circ$',
      '$\\widehat{C} = 60^\\circ$',
      '$\\widehat{C} = 70^\\circ$',
      '$\\widehat{C} = 80^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Tổng ba góc của một tam giác luôn bằng $180^\\circ$. Muốn tìm góc $\\widehat{C}$, lấy $180^\\circ - (\\widehat{A} + \\widehat{B})$.',
    solution: 'Trong $\\Delta ABC$ ta có:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\n$$\\implies \\widehat{C} = 180^\\circ - (65^\\circ + 55^\\circ) = 180^\\circ - 120^\\circ = 60^\\circ$$\nVậy $\\widehat{C} = 60^\\circ$.'
  },
  {
    id: 'ch4_l12_q2',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 2,
    title: 'Hai góc nhọn trong tam giác vuông',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác vuông', '#Góc phụ nhau'],
    question: 'Cho $\\Delta MNP$ vuông tại $M$ có $\\widehat{N} = 38^\\circ$. Số đo góc nhọn $P$ là:',
    options: [
      '$\\widehat{P} = 62^\\circ$',
      '$\\widehat{P} = 52^\\circ$',
      '$\\widehat{P} = 142^\\circ$',
      '$\\widehat{P} = 42^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng $90^\\circ$): $\\widehat{P} = 90^\\circ - \\widehat{N}$.',
    solution: 'Vì $\\Delta MNP$ vuông tại $M$ nên $\\widehat{N} + \\widehat{P} = 90^\\circ$.\n$$\\implies \\widehat{P} = 90^\\circ - 38^\\circ = 52^\\circ$$\nVậy $\\widehat{P} = 52^\\circ$.'
  },
  {
    id: 'ch4_l12_q3',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 3,
    title: 'Hai góc nhọn của tam giác vuông cân',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác vuông cân', '#Cơ bản'],
    question: 'Tam giác $DEF$ vuông cân tại đỉnh $D$. Số đo mỗi góc nhọn $\\widehat{E}$ và $\\widehat{F}$ là:',
    options: [
      '$\\widehat{E} = \\widehat{F} = 45^\\circ$',
      '$\\widehat{E} = \\widehat{F} = 60^\\circ$',
      '$\\widehat{E} = \\widehat{F} = 30^\\circ$',
      '$\\widehat{E} = 50^\\circ, \\widehat{F} = 40^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tam giác vuông cân có góc đỉnh bằng $90^\\circ$ và hai góc ở đáy bằng nhau. Tổng hai góc ở đáy bằng $90^\\circ$.',
    solution: 'Tam giác $DEF$ vuông cân tại $D$ nên $\\widehat{D} = 90^\\circ$ và $\\widehat{E} = \\widehat{F}$.\nTa có $\\widehat{E} + \\widehat{F} = 90^\\circ \\implies 2\\widehat{E} = 90^\\circ \\implies \\widehat{E} = \\widehat{F} = 45^\\circ$.'
  },
  {
    id: 'ch4_l12_q4',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 4,
    title: 'Góc trong tam giác đều',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác đều', '#Cơ bản'],
    question: 'Khẳng định nào sau đây là đúng về số đo các góc của tam giác đều $ABC$?',
    options: [
      '$\\widehat{A} = \\widehat{B} = \\widehat{C} = 90^\\circ$',
      '$\\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ$',
      '$\\widehat{A} = \\widehat{B} = \\widehat{C} = 45^\\circ$',
      '$\\widehat{A} = 70^\\circ, \\widehat{B} = 60^\\circ, \\widehat{C} = 50^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Tam giác đều có ba góc bằng nhau: $3\\widehat{A} = 180^\\circ$.',
    solution: 'Tam giác đều có 3 góc bằng nhau: $\\widehat{A} = \\widehat{B} = \\widehat{C} = \\frac{180^\\circ}{3} = 60^\\circ$.'
  },
  {
    id: 'ch4_l12_q5',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 5,
    title: 'Kiểm tra bộ ba số đo góc',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Kiểm tra góc', '#Định lí 180 độ'],
    question: 'Bộ ba số đo góc nào sau đây **không thể** là ba góc của một tam giác?',
    options: [
      '$40^\\circ, 60^\\circ, 80^\\circ$',
      '$90^\\circ, 45^\\circ, 45^\\circ$',
      '$70^\\circ, 65^\\circ, 55^\\circ$',
      '$100^\\circ, 50^\\circ, 30^\\circ$'
    ],
    correctIndex: 2,
    hint: 'Tổng ba góc của một tam giác phải đúng bằng $180^\\circ$. Hãy tính tổng các góc trong mỗi đáp án.',
    solution: 'Kiểm tra tổng: $70^\\circ + 65^\\circ + 55^\\circ = 190^\\circ \\neq 180^\\circ$. Do đó bộ ba này không thể là 3 góc của một tam giác.'
  },
  {
    id: 'ch4_l12_q6',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 6,
    title: 'Tính góc ngoài tại đỉnh C',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc ngoài', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có $\\widehat{A} = 70^\\circ, \\widehat{B} = 50^\\circ$. Tính số đo góc ngoài tại đỉnh $C$.',
    options: [
      '$\\widehat{C}_{ngoài} = 120^\\circ$',
      '$\\widehat{C}_{ngoài} = 60^\\circ$',
      '$\\widehat{C}_{ngoài} = 110^\\circ$',
      '$\\widehat{C}_{ngoài} = 130^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Góc ngoài tại một đỉnh của tam giác bằng tổng hai góc trong không kề với nó: $\\widehat{C}_{ngoài} = \\widehat{A} + \\widehat{B}$.',
    solution: 'Theo định lí góc ngoài của tam giác:\n$$\\widehat{C}_{ngoài} = \\widehat{A} + \\widehat{B} = 70^\\circ + 50^\\circ = 120^\\circ$$\n(Hoặc $\\widehat{C} = 180^\\circ - 120^\\circ = 60^\\circ \\implies \\widehat{C}_{ngoài} = 180^\\circ - 60^\\circ = 120^\\circ$).'
  },
  {
    id: 'ch4_l12_q7',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 7,
    title: 'Tìm góc trong khi biết góc ngoài',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc ngoài', '#Tính góc'],
    question: 'Biết góc ngoài tại đỉnh $B$ của $\\Delta ABC$ có số đo là $125^\\circ$ và $\\widehat{C} = 45^\\circ$. Số đo góc $A$ là:',
    options: [
      '$\\widehat{A} = 70^\\circ$',
      '$\\widehat{A} = 80^\\circ$',
      '$\\widehat{A} = 85^\\circ$',
      '$\\widehat{A} = 90^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Góc ngoài tại đỉnh $B$ bằng tổng hai góc trong không kề: $\\widehat{B}_{ngoài} = \\widehat{A} + \\widehat{C} \\implies \\widehat{A} = \\widehat{B}_{ngoài} - \\widehat{C}$.',
    solution: 'Ta có $\\widehat{B}_{ngoài} = \\widehat{A} + \\widehat{C} \\implies 125^\\circ = \\widehat{A} + 45^\\circ \\implies \\widehat{A} = 125^\\circ - 45^\\circ = 80^\\circ$.'
  },
  {
    id: 'ch4_l12_q8',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 8,
    title: 'Ba góc tỉ lệ với 1, 2, 3',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Dãy tỉ số', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có số đo ba góc tỉ lệ với $1; 2; 3$, nghĩa là $\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3}$. Số đo góc lớn nhất $\\widehat{C}$ là:',
    options: [
      '$\\widehat{C} = 60^\\circ$',
      '$\\widehat{C} = 75^\\circ$',
      '$\\widehat{C} = 90^\\circ$',
      '$\\widehat{C} = 100^\\circ$'
    ],
    correctIndex: 2,
    hint: 'Áp dụng tính chất dãy tỉ số bằng nhau: $\\frac{\\widehat{A} + \\widehat{B} + \\widehat{C}}{1 + 2 + 3} = \\frac{180^\\circ}{6} = 30^\\circ$.',
    solution: 'Ta có $\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3} = \\frac{180^\\circ}{6} = 30^\\circ$.\nSuy ra góc lớn nhất là $\\widehat{C} = 3 \\times 30^\\circ = 90^\\circ$.'
  },
  {
    id: 'ch4_l12_q9',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 9,
    title: 'Tam giác cân biết góc đỉnh',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác cân', '#Góc đáy'],
    question: 'Tam giác $ABC$ cân tại $A$ có góc đỉnh $\\widehat{A} = 70^\\circ$. Số đo mỗi góc ở đáy $\\widehat{B}$ và $\\widehat{C}$ là:',
    options: [
      '$\\widehat{B} = \\widehat{C} = 55^\\circ$',
      '$\\widehat{B} = \\widehat{C} = 60^\\circ$',
      '$\\widehat{B} = \\widehat{C} = 50^\\circ$',
      '$\\widehat{B} = \\widehat{C} = 65^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác cân tại $A$, hai góc ở đáy bằng nhau: $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}$.',
    solution: 'Ta có $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - 70^\\circ}{2} = \\frac{110^\\circ}{2} = 55^\\circ$.'
  },
  {
    id: 'ch4_l12_q10',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 10,
    title: 'Tam giác cân biết góc đáy',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác cân', '#Góc đỉnh'],
    question: 'Tam giác $DEF$ cân tại $D$ có góc ở đáy $\\widehat{E} = 52^\\circ$. Số đo góc ở đỉnh $\\widehat{D}$ là:',
    options: [
      '$\\widehat{D} = 74^\\circ$',
      '$\\widehat{D} = 76^\\circ$',
      '$\\widehat{D} = 66^\\circ$',
      '$\\widehat{D} = 86^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Vì tam giác cân tại $D$ nên $\\widehat{E} = \\widehat{F} = 52^\\circ$. Góc đỉnh $\\widehat{D} = 180^\\circ - 2\\widehat{E}$.',
    solution: 'Ta có $\\widehat{D} = 180^\\circ - 2 \\times 52^\\circ = 180^\\circ - 104^\\circ = 76^\\circ$.'
  },
  {
    id: 'ch4_l12_q11',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 11,
    title: 'Góc nhọn gấp 4 lần góc nhọn kia',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác vuông', '#Phương trình'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$. Biết góc nhọn $\\widehat{B}$ gấp 4 lần góc nhọn $\\widehat{C}$ ($\\,\\widehat{B} = 4\\widehat{C}$). Số đo góc nhọn nhỏ hơn là:',
    options: [
      '$\\widehat{C} = 18^\\circ$',
      '$\\widehat{C} = 22{,}5^\\circ$',
      '$\\widehat{C} = 15^\\circ$',
      '$\\widehat{C} = 20^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Hai góc nhọn phụ nhau: $\\widehat{B} + \\widehat{C} = 90^\\circ \\implies 4\\widehat{C} + \\widehat{C} = 90^\\circ$.',
    solution: 'Ta có $5\\widehat{C} = 90^\\circ \\implies \\widehat{C} = 18^\\circ$. Khi đó $\\widehat{B} = 72^\\circ$.'
  },
  {
    id: 'ch4_l12_q12',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 12,
    title: 'Góc tạo bởi tia phân giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tia phân giác', '#Góc ngoài', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ có $\\widehat{B} = 70^\\circ, \\widehat{C} = 30^\\circ$. Tia phân giác của góc $A$ cắt cạnh $BC$ tại $D$. Số đo góc $\\widehat{ADC}$ là:',
    options: [
      '$\\widehat{ADC} = 100^\\circ$',
      '$\\widehat{ADC} = 110^\\circ$',
      '$\\widehat{ADC} = 120^\\circ$',
      '$\\widehat{ADC} = 105^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Tính $\\widehat{A} = 180^\\circ - (70^\\circ + 30^\\circ) = 80^\\circ \\implies \\widehat{BAD} = 40^\\circ$. Góc $\\widehat{ADC}$ là góc ngoài tại đỉnh $D$ của $\\Delta ABD$.',
    solution: 'Ta có $\\widehat{A} = 80^\\circ \\implies \\widehat{BAD} = 40^\\circ$.\n$\\widehat{ADC}$ là góc ngoài của $\\Delta ABD$ nên $\\widehat{ADC} = \\widehat{B} + \\widehat{BAD} = 70^\\circ + 40^\\circ = 110^\\circ$.'
  },
  {
    id: 'ch4_l12_q13',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 13,
    title: 'Góc giữa đường cao và cạnh tam giác vuông',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đường cao', '#Cùng phụ', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$, kẻ đường cao $AH \\perp BC$ ($H \\in BC$). Biết $\\widehat{B} = 55^\\circ$. Số đo góc $\\widehat{HAC}$ là:',
    options: [
      '$\\widehat{HAC} = 35^\\circ$',
      '$\\widehat{HAC} = 55^\\circ$',
      '$\\widehat{HAC} = 45^\\circ$',
      '$\\widehat{HAC} = 65^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Trong tam giác vuông $ABC$, $\\widehat{C} = 90^\\circ - \\widehat{B}$. Trong tam giác vuông $AHC$, $\\widehat{HAC} = 90^\\circ - \\widehat{C} = \\widehat{B}$.',
    solution: 'Hai góc $\\widehat{HAC}$ và $\\widehat{B}$ cùng phụ với $\\widehat{C}$, do đó $\\widehat{HAC} = \\widehat{B} = 55^\\circ$.'
  },
  {
    id: 'ch4_l12_q14',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 14,
    title: 'Đường thẳng song song cắt hai cạnh tam giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Song song', '#Đồng vị', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ có $\\widehat{A} = 50^\\circ, \\widehat{B} = 75^\\circ$. Đoạn thẳng $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Số đo góc $\\widehat{ANM}$ là:',
    options: [
      '$\\widehat{ANM} = 55^\\circ$',
      '$\\widehat{ANM} = 75^\\circ$',
      '$\\widehat{ANM} = 50^\\circ$',
      '$\\widehat{ANM} = 65^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tính $\\widehat{C} = 180^\\circ - (50^\\circ + 75^\\circ) = 55^\\circ$. Vì $MN \\parallel BC$, góc $\\widehat{ANM}$ và $\\widehat{C}$ là hai góc đồng vị.',
    solution: 'Ta có $\\widehat{C} = 180^\\circ - (50^\\circ + 75^\\circ) = 55^\\circ$.\nVì $MN \\parallel BC$ nên $\\widehat{ANM} = \\widehat{C} = 55^\\circ$ (hai góc đồng vị).'
  },
  {
    id: 'ch4_l12_q15',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 15,
    title: 'Ứng dụng thực tế: Vì kèo mái nhà tam giác cân',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Vì kèo mái nhà', '#Vận dụng'],
    question: 'Khung vì kèo mái nhà có dạng tam giác cân $ABC$ ($AB = AC$) với góc nghiêng đáy $\\widehat{B} = \\widehat{C} = 34^\\circ$. Góc đỉnh $\\widehat{A}$ của vì kèo là bao nhiêu độ và thuộc loại góc nào?',
    options: [
      '$\\widehat{A} = 112^\\circ$ (Góc tù)',
      '$\\widehat{A} = 112^\\circ$ (Góc nhọn)',
      '$\\widehat{A} = 122^\\circ$ (Góc tù)',
      '$\\widehat{A} = 90^\\circ$ (Góc vuông)'
    ],
    correctIndex: 0,
    hint: 'Góc đỉnh $\\widehat{A} = 180^\\circ - 2 \\times 34^\\circ$. Góc có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$ là góc tù.',
    solution: 'Ta có $\\widehat{A} = 180^\\circ - (34^\\circ + 34^\\circ) = 112^\\circ$. Vì $112^\\circ > 90^\\circ$ nên $\\widehat{A}$ là góc tù.'
  },

  // ==========================================================================
  // BÀI 13: HAI TAM GIÁC BẰNG NHAU - TRƯỜNG HỢP C.C.C (12 CÂU)
  // ==========================================================================

  {
    id: 'ch4_l13_q1',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 1,
    title: 'Quy ước viết thứ tự đỉnh tương ứng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đỉnh tương ứng', '#Kí hiệu', '#Cơ bản'],
    question: 'Cho $\\Delta ABC = \\Delta MNP$. Khẳng định nào sau đây là **sai**?',
    options: [
      '$AB = MN$',
      '$\\widehat{A} = \\widehat{M}$',
      '$BC = MP$',
      '$\\widehat{C} = \\widehat{P}$'
    ],
    correctIndex: 2,
    hint: 'Theo đúng thứ tự đỉnh tương ứng: $A \\leftrightarrow M, B \\leftrightarrow N, C \\leftrightarrow P$. Cạnh tương ứng với $BC$ là $NP$.',
    solution: 'Vì $\\Delta ABC = \\Delta MNP$ nên các cạnh tương ứng là $AB = MN$, $BC = NP$, $AC = MP$. Do đó khẳng định $BC = MP$ là sai (phải là $BC = NP$).'
  },
  {
    id: 'ch4_l13_q2',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 2,
    title: 'Tính chu vi tam giác bằng nhau',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chu vi tam giác', '#Cạnh tương ứng', '#Cơ bản'],
    question: 'Cho $\\Delta ABC = \\Delta DEF$. Biết $AB = 5\\text{ cm}, BC = 6\\text{ cm}, DF = 7\\text{ cm}$. Chu vi của $\\Delta ABC$ là:',
    options: [
      '$P = 18\\text{ cm}$',
      '$P = 17\\text{ cm}$',
      '$P = 19\\text{ cm}$',
      '$P = 20\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Vì $\\Delta ABC = \\Delta DEF$ nên cạnh tương ứng $AC = DF = 7\\text{ cm}$. Chu vi bằng tổng 3 cạnh.',
    solution: 'Ta có $AC = DF = 7\\text{ cm}$. Chu vi $\\Delta ABC$ là:\n$$P = AB + BC + AC = 5 + 6 + 7 = 18\\text{ cm}$$.'
  },
  {
    id: 'ch4_l13_q3',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 3,
    title: 'Phát biểu định lí trường hợp c.c.c',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trường hợp c.c.c', '#Định lí', '#Cơ bản'],
    question: 'Trường hợp bằng nhau Cạnh - Cạnh - Cạnh (c.c.c) khẳng định rằng:',
    options: [
      'Nếu hai cạnh và một góc của tam giác này bằng hai cạnh và một góc của tam giác kia thì hai tam giác bằng nhau.',
      'Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.',
      'Nếu ba góc của tam giác này bằng ba góc của tam giác kia thì hai tam giác đó bằng nhau.',
      'Nếu hai tam giác có chu vi bằng nhau thì hai tam giác đó bằng nhau.'
    ],
    correctIndex: 1,
    hint: 'Trường hợp c.c.c chỉ xét mối quan hệ bằng nhau giữa 3 cặp cạnh tương ứng.',
    solution: 'Định lí c.c.c: Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.'
  },
  {
    id: 'ch4_l13_q4',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 4,
    title: 'Nhận diện cạnh chung trong hai tam giác',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cạnh chung', '#Hình học', '#Cơ bản'],
    question: 'Cho tứ giác $ABCD$ có $AB = CD$ và $BC = DA$. Khi chứng minh $\\Delta ABC = \\Delta CDA$ theo trường hợp c.c.c, yếu tố cạnh thứ ba bằng nhau là gì?',
    options: [
      '$BD$ là cạnh chung',
      '$AC$ là cạnh chung',
      '$AB = AD$',
      '$BC = CD$'
    ],
    correctIndex: 1,
    hint: 'Hai tam giác $\\Delta ABC$ và $\\Delta CDA$ có chung đoạn thẳng nối hai đỉnh $A$ và $C$.',
    solution: 'Đoạn thẳng $AC$ thuộc cả hai tam giác $\\Delta ABC$ và $\\Delta CDA$, do đó $AC$ là cạnh chung.'
  },
  {
    id: 'ch4_l13_q5',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 5,
    title: 'Bổ sung điều kiện bằng nhau c.c.c',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Điều kiện c.c.c', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ và $\\Delta MNP$ đã có $AB = MN, BC = NP$. Cần thêm điều kiện nào sau đây để $\\Delta ABC = \\Delta MNP$ theo trường hợp c.c.c?',
    options: [
      '$AC = MP$',
      '$\\widehat{B} = \\widehat{N}$',
      '$AC = MN$',
      '$\\widehat{A} = \\widehat{M}$'
    ],
    correctIndex: 0,
    hint: 'Trường hợp c.c.c cần đủ 3 cặp cạnh tương ứng bằng nhau. Đã có 2 cặp cạnh, cần thêm cặp cạnh thứ ba $AC$ và $MP$.',
    solution: 'Để $\\Delta ABC = \\Delta MNP$ theo c.c.c, ta cần cặp cạnh còn lại bằng nhau: $AC = MP$.'
  },
  {
    id: 'ch4_l13_q6',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 6,
    title: 'Chứng minh hai tam giác chung đáy bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác đối xứng', '#c.c.c', '#Thông hiểu'],
    question: 'Cho đoạn thẳng $AB$. Lấy điểm $C$ và điểm $D$ nằm về hai phía đối nhau qua $AB$ sao cho $CA = CB$ và $DA = DB$. Khi đó $\\Delta CAD = \\Delta CBD$ theo trường hợp nào?',
    options: [
      'Cạnh - Góc - Cạnh (c.g.c)',
      'Cạnh - Cạnh - Cạnh (c.c.c)',
      'Góc - Cạnh - Góc (g.c.g)',
      'Góc - Góc - Cạnh (g.g.c)'
    ],
    correctIndex: 1,
    hint: 'Xét 3 cặp cạnh: $CA = CB$ (giả thiết), $DA = DB$ (giả thiết), $CD$ là cạnh chung.',
    solution: 'Xét $\\Delta CAD$ và $\\Delta CBD$ có:\n- $CA = CB$ (giả thiết)\n- $DA = DB$ (giả thiết)\n- $CD$ là cạnh chung\n$\\implies \\Delta CAD = \\Delta CBD$ (c.c.c).'
  },
  {
    id: 'ch4_l13_q7',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 7,
    title: 'Tính góc của tam giác bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc tương ứng', '#Tính góc', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC = \\Delta XYZ$. Biết $\\widehat{A} = 60^\\circ$ và $\\widehat{B} = 75^\\circ$. Số đo góc $\\widehat{Z}$ của $\\Delta XYZ$ là:',
    options: [
      '$\\widehat{Z} = 55^\\circ$',
      '$\\widehat{Z} = 45^\\circ$',
      '$\\widehat{Z} = 65^\\circ$',
      '$\\widehat{Z} = 50^\\circ$'
    ],
    correctIndex: 1,
    hint: 'Góc tương ứng với $\\widehat{Z}$ là $\\widehat{C}$. Tính $\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B})$.',
    solution: 'Trong $\\Delta ABC$: $\\widehat{C} = 180^\\circ - (60^\\circ + 75^\\circ) = 45^\\circ$.\nVì $\\Delta ABC = \\Delta XYZ$ nên $\\widehat{Z} = \\widehat{C} = 45^\\circ$.'
  },
  {
    id: 'ch4_l13_q8',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 8,
    title: 'Đường chéo chia hình thoi thành hai tam giác',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình thoi', '#Tia phân giác', '#Thông hiểu'],
    question: 'Cho hình thoi $ABCD$ có $AB = BC = CD = DA$. Đoạn thẳng $AC$ chia hình thành $\\Delta ABC$ và $\\Delta ADC$. Từ sự bằng nhau của hai tam giác này, ta suy ra được:',
    options: [
      '$AC$ là tia phân giác của góc $\\widehat{BAD}$ và $\\widehat{BCD}$',
      '$AC$ vuông góc với $AB$',
      '$AB$ song song với $AC$',
      'Tam giác $ABC$ là tam giác đều'
    ],
    correctIndex: 0,
    hint: '$\\Delta ABC = \\Delta ADC$ (c.c.c) $\\implies \\widehat{BAC} = \\widehat{DAC}$, tức là $AC$ là tia phân giác của $\\widehat{BAD}$.',
    solution: 'Ta có $\\Delta ABC = \\Delta ADC$ (c.c.c) do $AB = AD, BC = DC$ và $AC$ chung.\nSuy ra $\\widehat{BAC} = \\widehat{DAC} \\implies AC$ là tia phân giác của góc $\\widehat{BAD}$.'
  },
  {
    id: 'ch4_l13_q9',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 9,
    title: 'Bẫy ba góc bằng nhau (g.g.g)',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bẫy hình học', '#g.g.g', '#Thông hiểu'],
    question: 'Nếu hai tam giác có ba góc tương ứng bằng nhau ($\\widehat{A}=\\widehat{M}, \\widehat{B}=\\widehat{N}, \\widehat{C}=\\widehat{P}$) thì hai tam giác đó:',
    options: [
      'Chắc chắn bằng nhau theo trường hợp g.g.g',
      'Chưa chắc bằng nhau vì có thể có kích thước khác nhau (đồng dạng)',
      'Luôn có chu vi bằng nhau',
      'Bằng nhau nếu có cùng một góc vuông'
    ],
    correctIndex: 1,
    hint: 'Hãy tưởng tượng phóng to một bức tranh hình tam giác: các góc giữ nguyên nhưng các cạnh dài gấp đôi.',
    solution: 'Ba góc bằng nhau chỉ đảm bảo hai tam giác cùng hình dạng (đồng dạng), không bảo đảm các cạnh bằng nhau. Do đó hai tam giác chưa chắc bằng nhau.'
  },
  {
    id: 'ch4_l13_q10',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 10,
    title: 'Đường trung tuyến của tam giác cân',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác cân', '#Trung điểm', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ cân tại $A$ ($AB = AC$). Gọi $M$ là trung điểm của $BC$. Khẳng định nào sau đây là **sai**?',
    options: [
      '$\\Delta ABM = \\Delta ACM$ (c.c.c)',
      '$\\widehat{BAM} = \\widehat{CAM}$',
      '$AM \\perp BC$',
      '$\\widehat{AMB} = 60^\\circ$'
    ],
    correctIndex: 3,
    hint: '$\\Delta ABM = \\Delta ACM$ (c.c.c) $\\implies \\widehat{AMB} = \\widehat{AMC}$. Mà hai góc này kề bù nên mỗi góc bằng $90^\\circ$, không thể bằng $60^\\circ$.',
    solution: 'Xét $\\Delta ABM$ và $\\Delta ACM$ có $AB = AC, BM = MC, AM$ chung $\\implies \\Delta ABM = \\Delta ACM$ (c.c.c).\nSuy ra $\\widehat{AMB} = \\widehat{AMC} = \\frac{180^\\circ}{2} = 90^\\circ$ ($AM \\perp BC$). Khẳng định $\\widehat{AMB} = 60^\\circ$ là sai.'
  },
  {
    id: 'ch4_l13_q11',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 11,
    title: 'Hai đường tròn cùng bán kính cắt nhau',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đường tròn', '#Phân giác', '#Vận dụng'],
    question: 'Cho hai đường tròn $(O; R)$ và $(O\'; R)$ cắt nhau tại hai điểm $A$ và $B$. Xét $\\Delta OAO\'$ và $\\Delta OBO\'$, ta có:',
    options: [
      '$\\Delta OAO\' = \\Delta OBO\'$ (c.c.c) và $OO\'$ là tia phân giác của $\\widehat{AOB}$',
      '$\\Delta OAO\' = \\Delta OBO\'$ (c.g.c) và $AB = R$',
      '$\\Delta OAO\'$ và $\\Delta OBO\'$ không bằng nhau',
      '$\\widehat{OAO\'} = 90^\\circ$'
    ],
    correctIndex: 0,
    hint: '$OA = OB = R, O\'A = O\'B = R$ và cạnh $OO\'$ chung.',
    solution: 'Ta có $OA = OB = R$, $O\'A = O\'B = R$ và $OO\'$ là cạnh chung.\nDo đó $\\Delta OAO\' = \\Delta OBO\'$ (c.c.c), suy ra $\\widehat{AOO\'} = \\widehat{BOO\'}$, tức $OO\'$ là tia phân giác của $\\widehat{AOB}$.'
  },
  {
    id: 'ch4_l13_q12',
    lessonId: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 12,
    title: 'Ứng dụng thực tế: Tính cứng vững của khung tam giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Tính cứng vững', '#Vận dụng'],
    question: 'Tại sao các kết cấu chịu lực như cầu thép, khung xe đạp, giàn cần cẩu luôn được hàn ghép từ các hình tam giác thay vì hình tứ giác?',
    options: [
      'Vì hình tam giác tốn ít vật liệu hơn hình tứ giác.',
      'Vì khi biết độ dài 3 cạnh, tam giác có hình dạng cố định duy nhất (tính chất c.c.c), không bị xiêu vẹo biến dạng khi chịu tải.',
      'Vì hình tam giác dễ sơn và chống rỉ sét hơn.',
      'Vì góc trong tam giác luôn nhỏ hơn góc trong tứ giác.'
    ],
    correctIndex: 1,
    hint: 'Theo trường hợp c.c.c, khi 3 cạnh của tam giác có độ dài không đổi thì cả 3 góc bị khóa cứng hoàn toàn.',
    solution: 'Tam giác có 3 cạnh cố định thì hình dạng và các góc là duy nhất (tính chất bất biến c.c.c). Tứ giác có 4 cạnh cố định vẫn có thể bị xô lệch thành hình bình hành hay hình thoi.'
  },

  // ==========================================================================
  // BÀI 14: TRƯỜNG HỢP BẰNG NHAU THỨ HAI C.G.C (12 CÂU)
  // ==========================================================================

  {
    id: 'ch4_l14_q1',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 1,
    title: 'Xác định góc xen giữa hai cạnh',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Góc xen giữa', '#Cơ bản'],
    question: 'Trong $\\Delta ABC$, góc xen giữa hai cạnh $AB$ và $AC$ là góc nào?',
    options: [
      'Góc $\\widehat{A}$',
      'Góc $\\widehat{B}$',
      'Góc $\\widehat{C}$',
      'Góc ngoài tại đỉnh $A$'
    ],
    correctIndex: 0,
    hint: 'Đỉnh chung của hai cạnh $AB$ và $AC$ chính là đỉnh của góc xen giữa.',
    solution: 'Hai cạnh $AB$ và $AC$ cùng xuất phát từ đỉnh $A$, nên góc xen giữa hai cạnh này là $\\widehat{A}$ (hay $\\widehat{BAC}$).'
  },
  {
    id: 'ch4_l14_q2',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 2,
    title: 'Điều kiện bằng nhau trường hợp c.g.c',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#c.g.c', '#Điều kiện', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ và $\\Delta DEF$ có $AB = DE, AC = DF$. Cần thêm điều kiện gì để $\\Delta ABC = \\Delta DEF$ theo trường hợp Cạnh - Góc - Cạnh (c.g.c)?',
    options: [
      '$\\widehat{B} = \\widehat{E}$',
      '$\\widehat{A} = \\widehat{D}$',
      '$\\widehat{C} = \\widehat{F}$',
      '$BC = EF$'
    ],
    correctIndex: 1,
    hint: 'Góc phải là góc xen giữa hai cạnh đã cho: góc giữa $AB$ và $AC$ là $\\widehat{A}$; góc giữa $DE$ và $DF$ là $\\widehat{D}$.',
    solution: 'Để hai tam giác bằng nhau theo c.g.c, góc xen giữa hai cạnh phải bằng nhau: $\\widehat{A} = \\widehat{D}$.'
  },
  {
    id: 'ch4_l14_q3',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 3,
    title: 'Hệ quả: Hai cạnh góc vuông bằng nhau',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác vuông', '#c.g.c', '#Cơ bản'],
    question: 'Nếu hai cạnh góc vuông của tam giác vuông này bằng hai cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau theo trường hợp nào?',
    options: [
      'Cạnh - Góc - Cạnh (c.g.c)',
      'Cạnh huyền - Cạnh góc vuông',
      'Góc - Cạnh - Góc (g.c.g)',
      'Cạnh - Cạnh - Cạnh (c.c.c)'
    ],
    correctIndex: 0,
    hint: 'Góc xen giữa hai cạnh góc vuông luôn là góc vuông $90^\\circ$, luôn bằng nhau.',
    solution: 'Vì góc xen giữa hai cạnh góc vuông là góc $90^\\circ$ nên hai tam giác vuông bằng nhau theo trường hợp c.g.c.'
  },
  {
    id: 'ch4_l14_q4',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 4,
    title: 'Bẫy góc không xen giữa (c.c.g)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Bẫy góc xen giữa', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ và $\\Delta A\'B\'C\'$ có $AB = A\'B\', BC = B\'C\'$ và $\\widehat{A} = \\widehat{A\'}$. Hai tam giác này có chắc chắn bằng nhau không?',
    options: [
      'Chắc chắn bằng nhau theo trường hợp c.g.c',
      'Không chắc chắn bằng nhau vì góc $\\widehat{A}$ không phải là góc xen giữa hai cạnh $AB$ và $BC$',
      'Chắc chắn bằng nhau theo trường hợp c.c.c',
      'Bằng nhau nếu cả hai đều là tam giác tù'
    ],
    correctIndex: 1,
    hint: 'Góc xen giữa hai cạnh $AB$ và $BC$ phải là góc $\\widehat{B}$, không phải $\\widehat{A}$.',
    solution: 'Trường hợp c.g.c bắt buộc góc phải kẹp xen giữa hai cạnh. Vì $\\widehat{A}$ không xen giữa $AB$ và $BC$ nên hai tam giác chưa chắc bằng nhau.'
  },
  {
    id: 'ch4_l14_q5',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 5,
    title: 'Hai đoạn thẳng cắt nhau tại trung điểm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đối đỉnh', '#c.g.c', '#Thông hiểu'],
    question: 'Cho đoạn thẳng $AB$ và $CD$ cắt nhau tại trung điểm $O$ của mỗi đoạn ($OA = OB, OC = OD$). Khi đó $\\Delta OAC = \\Delta OBD$ theo trường hợp nào?',
    options: [
      'c.g.c vì có hai góc đối đỉnh $\\widehat{AOC} = \\widehat{BOD}$',
      'c.c.c vì $AC = BD$',
      'g.c.g vì $\\widehat{OAC} = \\widehat{OBD}$',
      'Không bằng nhau'
    ],
    correctIndex: 0,
    hint: 'Góc xen giữa $OA$ và $OC$ là $\\widehat{AOC}$. Góc xen giữa $OB$ và $OD$ là $\\widehat{BOD}$. Hai góc này là hai góc đối đỉnh.',
    solution: 'Xét $\\Delta OAC$ và $\\Delta OBD$ có: $OA = OB$, $\\widehat{AOC} = \\widehat{BOD}$ (đối đỉnh), $OC = OD$. Do đó $\\Delta OAC = \\Delta OBD$ (c.g.c).'
  },
  {
    id: 'ch4_l14_q6',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 6,
    title: 'Suy ra hai đường thẳng song song từ tam giác bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Song song', '#So le trong', '#Thông hiểu'],
    question: 'Từ kết quả $\\Delta OAC = \\Delta OBD$ ở câu trên, ta suy ra được:',
    options: [
      '$AC \\parallel BD$ vì có cặp góc so le trong $\\widehat{OAC} = \\widehat{OBD}$',
      '$AC \\perp BD$',
      '$AB \\parallel CD$',
      '$\\widehat{OAC} + \\widehat{OBD} = 180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Hai góc tương ứng $\\widehat{OAC} = \\widehat{OBD}$ ở vị trí so le trong so với hai đường thẳng $AC$ và $BD$.',
    solution: 'Vì $\\Delta OAC = \\Delta OBD$ nên $\\widehat{OAC} = \\widehat{OBD}$. Mà hai góc này ở vị trí so le trong nên $AC \\parallel BD$.'
  },
  {
    id: 'ch4_l14_q7',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 7,
    title: 'Tia phân giác trong tam giác cân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tia phân giác', '#c.g.c', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có $AB = AC$. Gọi $AD$ là tia phân giác của góc $\\widehat{A}$ ($D \\in BC$). Ta có $\\Delta ABD = \\Delta ACD$ theo trường hợp nào?',
    options: [
      'c.g.c vì $AB = AC, \\widehat{BAD} = \\widehat{CAD}, AD$ là cạnh chung',
      'c.c.c vì $BD = CD$',
      'g.c.g vì $\\widehat{B} = \\widehat{C}$',
      'Cạnh huyền - góc nhọn'
    ],
    correctIndex: 0,
    hint: 'Góc $\\widehat{BAD}$ xen giữa $AB$ và $AD$. Góc $\\widehat{CAD}$ xen giữa $AC$ và $AD$.',
    solution: 'Xét $\\Delta ABD$ và $\\Delta ACD$ có $AB = AC$, $\\widehat{BAD} = \\widehat{CAD}$ ($AD$ là phân giác), $AD$ chung $\\implies \\Delta ABD = \\Delta ACD$ (c.g.c).'
  },
  {
    id: 'ch4_l14_q8',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 8,
    title: 'Tính cạnh huyền từ hai tam giác vuông bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác vuông', '#Cạnh tương ứng', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$ ($AB = 6\\text{ cm}, AC = 8\\text{ cm}$) và $\\Delta MNP$ vuông tại $M$ ($MN = 6\\text{ cm}, MP = 8\\text{ cm}$). Biết $NP = 10\\text{ cm}$, độ dài cạnh $BC$ là:',
    options: [
      '$BC = 14\\text{ cm}$',
      '$BC = 10\\text{ cm}$',
      '$BC = 8\\text{ cm}$',
      '$BC = 12\\text{ cm}$'
    ],
    correctIndex: 1,
    hint: 'Hai tam giác vuông có hai cặp cạnh góc vuông bằng nhau thì bằng nhau theo c.g.c $\\implies BC = NP$.',
    solution: 'Ta có $\\Delta ABC = \\Delta MNP$ (c.g.c vì có 2 cạnh góc vuông bằng nhau). Do đó cạnh huyền $BC = NP = 10\\text{ cm}$.'
  },
  {
    id: 'ch4_l14_q9',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 9,
    title: 'Tam giác có góc đỉnh chung',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc chung', '#c.g.c', '#Thông hiểu'],
    question: 'Cho góc nhọn $xOy$. Trên tia $Ox$ lấy hai điểm $A, B$; trên tia $Oy$ lấy $C, D$ sao cho $OA = OC$ và $OB = OD$. Hai tam giác $\\Delta OAD$ và $\\Delta OCB$ bằng nhau vì:',
    options: [
      '$OA = OC$, góc $\\widehat{O}$ chung, $OD = OB$ (c.g.c)',
      '$AD = BC$ (giả thiết)',
      'Hai tam giác có chu vi bằng nhau',
      '$\\widehat{ODA} = \\widehat{OBC}$ (giả thiết)'
    ],
    correctIndex: 0,
    hint: 'Cả hai tam giác đều chứa góc $\\widehat{O}$ kẹp giữa hai cạnh tương ứng.',
    solution: 'Xét $\\Delta OAD$ và $\\Delta OCB$ có: $OA = OC$, $\\widehat{O}$ là góc chung, $OD = OB$. Vậy $\\Delta OAD = \\Delta OCB$ (c.g.c).'
  },
  {
    id: 'ch4_l14_q10',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 10,
    title: 'Vẽ hai tam giác vuông cân ra phía ngoài',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vuông cân', '#c.g.c', '#Vận dụng'],
    question: 'Vẽ ra phía ngoài $\\Delta ABC$ hai tam giác vuông cân tại $A$ là $\\Delta ABD$ ($AD = AB$) và $\\Delta ACE$ ($AE = AC$). Khi đó đoạn thẳng $DC$ và $BE$ có mối quan hệ gì?',
    options: [
      '$DC = BE$ và $DC \\perp BE$',
      '$DC = 2BE$',
      '$DC \\parallel BE$',
      '$DC + BE = BC$'
    ],
    correctIndex: 0,
    hint: 'Xét $\\Delta ADC$ và $\\Delta ABE$ có $AD = AB, AC = AE$ và góc xen giữa $\\widehat{DAC} = \\widehat{BAE} = 90^\\circ + \\widehat{BAC}$.',
    solution: 'Ta có $\\widehat{DAC} = 90^\\circ + \\widehat{A} = \\widehat{BAE}$.\nXét $\\Delta ADC$ và $\\Delta ABE$ có $AD = AB, \\widehat{DAC} = \\widehat{BAE}, AC = AE \\implies \\Delta ADC = \\Delta ABE$ (c.g.c).\nSuy ra $DC = BE$ và góc giữa chúng bằng $90^\\circ$ ($DC \\perp BE$).'
  },
  {
    id: 'ch4_l14_q11',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 11,
    title: 'Chứng minh tam giác cân qua c.g.c',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác cân', '#c.g.c', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$. Trên tia đối của tia $AC$ lấy điểm $D$ sao cho $AD = AC$. Khi đó $\\Delta BCD$ là tam giác gì?',
    options: [
      'Tam giác đều',
      'Tam giác cân tại $B$',
      'Tam giác vuông cân tại $B$',
      'Tam giác tù'
    ],
    correctIndex: 1,
    hint: 'Chứng minh $\\Delta BAC = \\Delta BAD$ theo trường hợp hai cạnh góc vuông ($AB$ chung, $AC = AD$).',
    solution: 'Xét $\\Delta BAC$ và $\\Delta BAD$ có: $AB$ chung, $\\widehat{BAC} = \\widehat{BAD} = 90^\\circ, AC = AD$.\nDo đó $\\Delta BAC = \\Delta BAD$ (c.g.c) $\\implies BC = BD \\implies \\Delta BCD$ cân tại $B$.'
  },
  {
    id: 'ch4_l14_q12',
    lessonId: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 12,
    title: 'Bài toán thực tế: Thợ mộc kiểm tra mặt bàn hình chữ nhật',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Hình chữ nhật', '#Vận dụng'],
    question: 'Để kiểm tra một khung cửa gỗ có vuông vắn hay không, người thợ mộc đo hai cạnh góc vuông $a, b$ và hai đường chéo $d_1, d_2$. Dựa trên kiến thức tam giác bằng nhau c.g.c, khung cửa vuông khi nào?',
    options: [
      'Khi hai cạnh đối diện bằng nhau',
      'Khi hai tam giác vuông ở hai góc có hai cạnh góc vuông bằng nhau, suy ra hai đường chéo tương ứng $d_1 = d_2$',
      'Khi tổng 4 góc bằng $360^\\circ$',
      'Khi chu vi khung cửa lớn hơn 4 mét'
    ],
    correctIndex: 1,
    hint: 'Nếu các góc là $90^\\circ$, hai tam giác vuông sẽ bằng nhau theo c.g.c, dẫn tới hai đường chéo bắt buộc phải bằng nhau.',
    solution: 'Trong hình chữ nhật, hai tam giác vuông có các cạnh góc vuông bằng nhau nên bằng nhau theo c.g.c. Thợ mộc so sánh hai đường chéo bằng nhau là phương pháp chuẩn xác để kiểm tra độ vuông góc.'
  },

  // ==========================================================================
  // BÀI 15: TRƯỜNG HỢP BẰNG NHAU THỨ BA G.C.G (12 CÂU)
  // ==========================================================================

  {
    id: 'ch4_l15_q1',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 1,
    title: 'Xác định cạnh kề hai góc',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cạnh kề', '#g.c.g', '#Cơ bản'],
    question: 'Trong $\\Delta ABC$, cạnh kề (cạnh xen giữa) của hai góc $\\widehat{B}$ và $\\widehat{C}$ là cạnh nào?',
    options: [
      'Cạnh $AB$',
      'Cạnh $AC$',
      'Cạnh $BC$',
      'Đường cao $AH$'
    ],
    correctIndex: 2,
    hint: 'Cạnh kề hai góc là cạnh nối liền đỉnh của hai góc đó.',
    solution: 'Cạnh nối giữa hai đỉnh $B$ và $C$ chính là cạnh $BC$.'
  },
  {
    id: 'ch4_l15_q2',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 2,
    title: 'Định lí trường hợp Góc - Cạnh - Góc (g.c.g)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Định lí g.c.g', '#Cơ bản'],
    question: 'Phát biểu định lí trường hợp bằng nhau thứ ba (g.c.g) của tam giác:',
    options: [
      'Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.',
      'Nếu hai cạnh và một góc của tam giác này bằng hai cạnh và một góc của tam giác kia thì hai tam giác đó bằng nhau.',
      'Nếu ba góc của tam giác này bằng ba góc của tam giác kia thì hai tam giác đó bằng nhau.',
      'Nếu hai tam giác có một cạnh bằng nhau và một góc bằng nhau thì bằng nhau.'
    ],
    correctIndex: 0,
    hint: 'Cạnh phải nằm kẹp giữa hai góc kề.',
    solution: 'Định lí g.c.g: Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.'
  },
  {
    id: 'ch4_l15_q3',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 3,
    title: 'Hệ quả tam giác vuông: Cạnh góc vuông - Góc nhọn kề',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác vuông', '#g.c.g', '#Cơ bản'],
    question: 'Nếu một cạnh góc vuông và một góc nhọn kề cạnh ấy của tam giác vuông này bằng một cạnh góc vuông và một góc nhọn kề của tam giác vuông kia thì:',
    options: [
      'Hai tam giác vuông đó bằng nhau theo hệ quả của g.c.g',
      'Hai tam giác vuông đó chỉ đồng dạng, không bằng nhau',
      'Cần thêm điều kiện cạnh huyền bằng nhau',
      'Cần thêm điều kiện chu vi bằng nhau'
    ],
    correctIndex: 0,
    hint: 'Vì góc vuông $90^\\circ$ và góc nhọn kề đã là hai góc kề cạnh góc vuông đó.',
    solution: 'Đây là hệ quả trực tiếp từ trường hợp g.c.g: Cạnh góc vuông và góc nhọn kề bằng nhau thì hai tam giác vuông bằng nhau.'
  },
  {
    id: 'ch4_l15_q4',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 4,
    title: 'Hệ quả: Cạnh huyền - Góc nhọn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cạnh huyền - góc nhọn', '#Tam giác vuông', '#Cơ bản'],
    question: 'Trường hợp bằng nhau đặc biệt "Cạnh huyền - Góc nhọn" áp dụng cho loại tam giác nào?',
    options: [
      'Tam giác đều',
      'Tam giác cân',
      'Tam giác vuông',
      'Mọi tam giác bất kì'
    ],
    correctIndex: 2,
    hint: 'Chỉ tam giác vuông mới có cạnh đối diện góc $90^\\circ$ được gọi là cạnh huyền.',
    solution: 'Khái niệm "cạnh huyền" chỉ tồn tại trong tam giác vuông. Trường hợp cạnh huyền - góc nhọn là đặc quyền của tam giác vuông.'
  },
  {
    id: 'ch4_l15_q5',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 5,
    title: 'Bổ sung điều kiện bằng nhau g.c.g',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Điều kiện g.c.g', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ và $\\Delta DEF$ có $\\widehat{B} = \\widehat{E}$ và $BC = EF$. Cần thêm điều kiện nào để $\\Delta ABC = \\Delta DEF$ theo trường hợp g.c.g?',
    options: [
      '$\\widehat{C} = \\widehat{F}$',
      '$\\widehat{A} = \\widehat{D}$',
      '$AB = DE$',
      '$AC = DF$'
    ],
    correctIndex: 0,
    hint: 'Hai góc kề cạnh $BC$ là $\\widehat{B}$ và $\\widehat{C}$. Đã có $\\widehat{B} = \\widehat{E}$, cần thêm góc kề còn lại là $\\widehat{C} = \\widehat{F}$.',
    solution: 'Cạnh $BC$ kề với góc $\\widehat{B}$ và $\\widehat{C}$. Để bằng nhau theo g.c.g, cần $\\widehat{C} = \\widehat{F}$.'
  },
  {
    id: 'ch4_l15_q6',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 6,
    title: 'Đường chéo chia hình bình hành thành hai tam giác',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình bình hành', '#So le trong', '#Thông hiểu'],
    question: 'Cho hình bình hành $ABCD$ có $AB \\parallel CD$ và $AD \\parallel BC$. Đường chéo $BD$ chia hình thành $\\Delta ABD$ và $\\Delta CDB$. Hai tam giác này bằng nhau theo g.c.g do:',
    options: [
      '$\\widehat{ABD} = \\widehat{CDB}, BD\\text{ chung}, \\widehat{ADB} = \\widehat{CBD}$ (so le trong)',
      'Có 3 góc bằng nhau',
      'Có diện tích bằng nhau',
      '$\\widehat{A} = \\widehat{C} = 90^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Do các cạnh song song nên các cặp góc so le trong bằng nhau, kẹp giữa cạnh chung $BD$.',
    solution: 'Do $AB \\parallel CD \\implies \\widehat{ABD} = \\widehat{CDB}$. Do $AD \\parallel BC \\implies \\widehat{ADB} = \\widehat{CBD}$. Kết hợp cạnh $BD$ chung $\\implies \\Delta ABD = \\Delta CDB$ (g.c.g).'
  },
  {
    id: 'ch4_l15_q7',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 7,
    title: 'Khoảng cách từ điểm trên tia phân giác đến hai cạnh',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tia phân giác', '#Cạnh huyền - góc nhọn', '#Thông hiểu'],
    question: 'Cho điểm $M$ thuộc tia phân giác của góc nhọn $\\widehat{xOy}$. Kẻ $MA \\perp Ox$ tại $A$ và $MB \\perp Oy$ tại $B$. Khẳng định nào sau đây là đúng?',
    options: [
      '$MA = MB$ vì $\\Delta OMA = \\Delta OMB$ (cạnh huyền - góc nhọn)',
      '$MA > MB$',
      '$MA + MB = OM$',
      '$\\Delta OMA$ không bằng $\\Delta OMB$'
    ],
    correctIndex: 0,
    hint: 'Hai tam giác vuông $\\Delta OMA$ và $\\Delta OMB$ có chung cạnh huyền $OM$ và hai góc nhọn bằng nhau: $\\widehat{AOM} = \\widehat{BOM}$.',
    solution: 'Xét hai tam giác vuông $\\Delta OMA$ và $\\Delta OMB$ có: cạnh huyền $OM$ chung, $\\widehat{AOM} = \\widehat{BOM}$ (do $OM$ là phân giác). Do đó $\\Delta OMA = \\Delta OMB$ (cạnh huyền - góc nhọn) $\\implies MA = MB$.'
  },
  {
    id: 'ch4_l15_q8',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 8,
    title: 'Tam giác có hai góc bằng nhau là tam giác cân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Dấu hiệu tam giác cân', '#g.c.g', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có $\\widehat{B} = \\widehat{C}$. Kẻ tia phân giác $AD$ của góc $A$ ($D \\in BC$). Khi đó $\\Delta ABD = \\Delta ACD$ theo trường hợp nào và suy ra điều gì?',
    options: [
      'g.c.g $\\implies AB = AC$ (Tam giác $ABC$ là tam giác cân tại $A$)',
      'c.c.c $\\implies BC = AD$',
      'c.g.c $\\implies \\widehat{A} = 90^\\circ$',
      'Không bằng nhau'
    ],
    correctIndex: 0,
    hint: 'Ta có $\\widehat{ADB} = \\widehat{ADC}$ vì tổng 3 góc bằng $180^\\circ$. Kết hợp $AD$ chung và $\\widehat{BAD} = \\widehat{CAD}$.',
    solution: 'Vì $\\widehat{B} = \\widehat{C}$ và $\\widehat{BAD} = \\widehat{CAD}$ nên $\\widehat{ADB} = \\widehat{ADC}$.\nCạnh $AD$ chung kẹp giữa hai góc kề $\\implies \\Delta ABD = \\Delta ACD$ (g.c.g) $\\implies AB = AC$.'
  },
  {
    id: 'ch4_l15_q9',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 9,
    title: 'Cạnh huyền - Cạnh góc vuông',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Cạnh huyền - cạnh góc vuông', '#Thông hiểu'],
    question: 'Cho hai tam giác vuông $\\Delta ABC$ (vuông tại $A$) và $\\Delta DEF$ (vuông tại $D$) có cạnh huyền $BC = EF$ và một cạnh góc vuông $AB = DE$. Hai tam giác bằng nhau theo trường hợp:',
    options: [
      'Cạnh huyền - Cạnh góc vuông',
      'Cạnh - Góc - Cạnh',
      'Góc - Cạnh - Góc',
      'Cạnh - Cạnh - Cạnh'
    ],
    correctIndex: 0,
    hint: 'Đây là định lí bằng nhau đặc biệt dành riêng cho hai tam giác vuông.',
    solution: 'Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này bằng cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.'
  },
  {
    id: 'ch4_l15_q10',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 10,
    title: 'Ứng dụng thực tế: Đo khoảng cách gián tiếp ra đảo',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Đo gián tiếp', '#Vận dụng'],
    question: 'Để đo khoảng cách từ điểm $A$ trên bờ đến con tàu $C$ ngoài biển, người đo đạc chọn điểm $B$ trên bờ sao cho $AB \\perp AC$. Sau đó tại $B$, người đó đo góc $\\widehat{ABC} = 50^\\circ$. Trên đất liền, họ dựng $\\Delta ABD$ vuông tại $A$ sao cho $\\widehat{ABD} = 50^\\circ$. Khoảng cách $AC$ ra con tàu bằng độ dài đoạn nào?',
    options: [
      'Bằng đoạn $AD$ trên đất liền (vì $\\Delta ABC = \\Delta ABD$ theo g.c.g)',
      'Bằng đoạn $BD$',
      'Bằng đoạn $AB$',
      'Gấp đôi đoạn $AD$'
    ],
    correctIndex: 0,
    hint: 'Xét $\\Delta ABC$ và $\\Delta ABD$ vuông tại $A$, có cạnh $AB$ chung và $\\widehat{ABC} = \\widehat{ABD} = 50^\\circ$.',
    solution: 'Ta có $\\Delta ABC = \\Delta ABD$ (g.c.g vì $\\widehat{BAC} = \\widehat{BAD} = 90^\\circ, AB$ chung, $\\widehat{ABC} = \\widehat{ABD} = 50^\\circ$).\nSuy ra khoảng cách ra tàu $AC$ đúng bằng đoạn $AD$ đo được trực tiếp trên bờ.'
  },
  {
    id: 'ch4_l15_q11',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 11,
    title: 'Hai đường cao bằng nhau trong tam giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đường cao', '#Tam giác cân', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ có hai đường cao $BD$ và $CE$ bằng nhau ($BD = CE$, $D \\in AC, E \\in AB$). Khi đó $\\Delta ABC$ là:',
    options: [
      'Tam giác cân tại $A$',
      'Tam giác vuông tại $A$',
      'Tam giác đều',
      'Tam giác vuông cân tại $A$'
    ],
    correctIndex: 0,
    hint: 'Xét hai tam giác vuông $\\Delta EBC$ và $\\Delta DCB$ có cạnh huyền $BC$ chung và $CE = BD$.',
    solution: 'Xét hai tam giác vuông $\\Delta EBC$ và $\\Delta DCB$ có: $BC$ là cạnh huyền chung, $CE = BD$ (giả thiết).\n$\\implies \\Delta EBC = \\Delta DCB$ (cạnh huyền - cạnh góc vuông).\n$\\implies \\widehat{EBC} = \\widehat{DCB}$ (hay $\\widehat{B} = \\widehat{C}$) $\\implies \\Delta ABC$ cân tại $A$.'
  },
  {
    id: 'ch4_l15_q12',
    lessonId: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 12,
    title: 'Trung điểm cạnh huyền tam giác vuông',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Trung tuyến', '#Tam giác vuông', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$. Gọi $M$ là trung điểm của cạnh huyền $BC$. Trên tia đối của tia $MA$ lấy điểm $D$ sao cho $MD = MA$. Khi đó $\\Delta ACD$ là tam giác gì?',
    options: [
      'Tam giác vuông tại $C$',
      'Tam giác cân tại $A$',
      'Tam giác đều',
      'Tam giác tù'
    ],
    correctIndex: 0,
    hint: 'Chứng minh $\\Delta MAB = \\Delta MDC$ (c.g.c) $\\implies \\widehat{MDC} = \\widehat{MAB} \\implies CD \\parallel AB \\implies CD \\perp AC$.',
    solution: 'Ta có $\\Delta MAB = \\Delta MDC$ (c.g.c) $\\implies AB = CD$ và $CD \\parallel AB$.\nVì $AB \\perp AC$ nên $CD \\perp AC \\implies \\widehat{ACD} = 90^\\circ$. Vậy $\\Delta ACD$ vuông tại $C$.'
  },

  // ==========================================================================
  // BÀI 16: TAM GIÁC CÂN. ĐƯỜNG TRUNG TRỰC CỦA ĐOẠN THẲNG (15 CÂU)
  // ==========================================================================

  {
    id: 'ch4_l16_q1',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 1,
    title: 'Định nghĩa tam giác cân',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác cân', '#Định nghĩa', '#Cơ bản'],
    question: 'Tam giác cân là tam giác có đặc điểm nào sau đây?',
    options: [
      'Có ba cạnh bằng nhau',
      'Có hai cạnh bằng nhau',
      'Có một góc vuông',
      'Có ba góc nhọn'
    ],
    correctIndex: 1,
    hint: 'Tam giác có 2 cạnh bằng nhau gọi là tam giác cân. Hai cạnh đó gọi là hai cạnh bên.',
    solution: 'Định nghĩa SGK: Tam giác cân là tam giác có hai cạnh bằng nhau.'
  },
  {
    id: 'ch4_l16_q2',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 2,
    title: 'Tính chất hai góc ở đáy',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Góc ở đáy', '#Tính chất', '#Cơ bản'],
    question: 'Trong một tam giác cân, hai góc ở đáy luôn luôn:',
    options: [
      'Bằng nhau',
      'Phụ nhau (tổng bằng $90^\\circ$)',
      'Bù nhau (tổng bằng $180^\\circ$)',
      'Có số đo bằng $60^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Định lí tính chất tam giác cân: Trong một tam giác cân, hai góc ở đáy bằng nhau.',
    solution: 'Định lí: Trong một tam giác cân, hai góc ở đáy luôn luôn bằng nhau ($\\widehat{B} = \\widehat{C}$).'
  },
  {
    id: 'ch4_l16_q3',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 3,
    title: 'Tính góc đáy khi biết góc ở đỉnh',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính góc đáy', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ cân tại $A$ có góc ở đỉnh $\\widehat{A} = 40^\\circ$. Số đo góc ở đáy $\\widehat{B}$ là:',
    options: [
      '$\\widehat{B} = 70^\\circ$',
      '$\\widehat{B} = 60^\\circ$',
      '$\\widehat{B} = 80^\\circ$',
      '$\\widehat{B} = 50^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Công thức tính góc ở đáy tam giác cân: $\\widehat{B} = \\frac{180^\\circ - \\widehat{A}}{2}$.',
    solution: 'Ta có $\\widehat{B} = \\frac{180^\\circ - 40^\\circ}{2} = \\frac{140^\\circ}{2} = 70^\\circ$.'
  },
  {
    id: 'ch4_l16_q4',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 4,
    title: 'Tính góc ở đỉnh khi biết góc ở đáy',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính góc đỉnh', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ cân tại $A$ có góc ở đáy $\\widehat{B} = 65^\\circ$. Số đo góc ở đỉnh $\\widehat{A}$ là:',
    options: [
      '$\\widehat{A} = 50^\\circ$',
      '$\\widehat{A} = 55^\\circ$',
      '$\\widehat{A} = 60^\\circ$',
      '$\\widehat{A} = 45^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Góc ở đỉnh bằng $180^\\circ$ trừ đi hai lần góc ở đáy: $\\widehat{A} = 180^\\circ - 2\\widehat{B}$.',
    solution: 'Ta có $\\widehat{A} = 180^\\circ - 2 \\times 65^\\circ = 180^\\circ - 130^\\circ = 50^\\circ$.'
  },
  {
    id: 'ch4_l16_q5',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 5,
    title: 'Dấu hiệu nhận biết tam giác đều',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác đều', '#Dấu hiệu', '#Cơ bản'],
    question: 'Một tam giác cân có một góc bằng $60^\\circ$ thì tam giác đó là:',
    options: [
      'Tam giác đều',
      'Tam giác vuông cân',
      'Tam giác nhọn nhưng không đều',
      'Tam giác tù'
    ],
    correctIndex: 0,
    hint: 'Dù góc $60^\\circ$ là góc ở đỉnh hay góc ở đáy thì hai góc còn lại đều tính ra bằng $60^\\circ$.',
    solution: 'Dấu hiệu SGK: Tam giác cân có một góc bằng $60^\\circ$ là tam giác đều.'
  },
  {
    id: 'ch4_l16_q6',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 6,
    title: 'Định nghĩa đường trung trực',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đường trung trực', '#Định nghĩa', '#Cơ bản'],
    question: 'Đường trung trực của một đoạn thẳng là đường thẳng:',
    options: [
      'Vuông góc với đoạn thẳng tại trung điểm của đoạn thẳng đó',
      'Đi qua trung điểm nhưng không vuông góc',
      'Vuông góc tại một đầu mút của đoạn thẳng',
      'Song song với đoạn thẳng'
    ],
    correctIndex: 0,
    hint: 'Đường trung trực phải thỏa mãn đồng thời hai điều kiện: đi qua TRUNG ĐIỂM và VUÔNG GÓC.',
    solution: 'Định nghĩa: Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của đoạn thẳng đó gọi là đường trung trực của đoạn thẳng.'
  },
  {
    id: 'ch4_l16_q7',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 7,
    title: 'Tính chất điểm thuộc đường trung trực',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đường trung trực', '#Cách đều', '#Thông hiểu'],
    question: 'Điểm $M$ nằm trên đường trung trực của đoạn thẳng $AB$. Khẳng định nào sau đây luôn đúng?',
    options: [
      '$MA = MB$',
      '$MA \\perp MB$',
      '$MA + MB = AB$',
      '$MA = 2MB$'
    ],
    correctIndex: 0,
    hint: 'Định lí 1 (SGK): Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.',
    solution: 'Theo định lí tính chất đường trung trực: Điểm thuộc đường trung trực cách đều hai đầu mút nên $MA = MB$.'
  },
  {
    id: 'ch4_l16_q8',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 8,
    title: 'Tam giác tạo bởi điểm trên đường trung trực',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đường trung trực', '#Tam giác cân', '#Thông hiểu'],
    question: 'Cho đoạn thẳng $AB = 8\\text{ cm}$. Gọi $d$ là đường trung trực của $AB$. Lấy điểm $M$ bất kì trên $d$ ($M$ không trùng với trung điểm của $AB$). Khi đó $\\Delta MAB$ là tam giác gì?',
    options: [
      'Tam giác cân tại $M$',
      'Tam giác vuông tại $M$',
      'Tam giác đều',
      'Tam giác vuông cân tại $M$'
    ],
    correctIndex: 0,
    hint: 'Vì $M$ thuộc đường trung trực của $AB$ nên $MA = MB$. Tam giác có hai cạnh bằng nhau là tam giác gì?',
    solution: 'Vì $M \\in d$ nên $MA = MB$. Tam giác $MAB$ có hai cạnh bằng nhau $MA = MB$ nên luôn là tam giác cân tại $M$.'
  },
  {
    id: 'ch4_l16_q9',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 9,
    title: 'Nhận biết tam giác cân qua hai góc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Dấu hiệu', '#Tính góc', '#Thông hiểu'],
    question: 'Tam giác $MNP$ có $\\widehat{M} = 50^\\circ$ và $\\widehat{N} = 65^\\circ$. Hỏi $\\Delta MNP$ là tam giác gì?',
    options: [
      'Tam giác cân tại $M$',
      'Tam giác cân tại $P$',
      'Tam giác vuông',
      'Tam giác đều'
    ],
    correctIndex: 0,
    hint: 'Tính góc thứ ba $\\widehat{P} = 180^\\circ - (\\widehat{M} + \\widehat{N})$. So sánh góc $\\widehat{P}$ với $\\widehat{N}$.',
    solution: 'Ta có $\\widehat{P} = 180^\\circ - (50^\\circ + 65^\\circ) = 65^\\circ$.\nVì $\\widehat{P} = \\widehat{N} = 65^\\circ$ nên tam giác $MNP$ có hai góc ở đáy bằng nhau, do đó cân tại $M$.'
  },
  {
    id: 'ch4_l16_q10',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 10,
    title: 'Tính chất tam giác vuông cân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác vuông cân', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ vuông cân tại $A$. Khẳng định nào sau đây là **sai**?',
    options: [
      '$AB = AC$',
      '$\\widehat{B} = \\widehat{C} = 45^\\circ$',
      'Đường cao $AH$ cũng là đường trung tuyến và đường phân giác',
      '$\\widehat{B} = 60^\\circ, \\widehat{C} = 30^\\circ$'
    ],
    correctIndex: 3,
    hint: 'Tam giác vuông cân có hai góc nhọn bằng nhau và bằng $45^\\circ$.',
    solution: 'Trong tam giác vuông cân, hai góc nhọn luôn bằng $45^\\circ$. Khẳng định $\\widehat{B} = 60^\\circ, \\widehat{C} = 30^\\circ$ là hoàn toàn sai.'
  },
  {
    id: 'ch4_l16_q11',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 11,
    title: 'Góc 60 độ với hai cạnh bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác đều', '#Thông hiểu'],
    question: 'Cho góc nhọn $\\widehat{xOy} = 60^\\circ$. Trên tia $Ox$ lấy điểm $A$, trên tia $Oy$ lấy điểm $B$ sao cho $OA = OB$. Tam giác $OAB$ là tam giác gì?',
    options: [
      'Tam giác đều',
      'Tam giác vuông cân',
      'Tam giác cân nhưng không đều',
      'Tam giác tù'
    ],
    correctIndex: 0,
    hint: '$\\Delta OAB$ có $OA = OB$ nên cân tại $O$. Tam giác cân có góc ở đỉnh bằng $60^\\circ$ là tam giác đều.',
    solution: 'Vì $OA = OB$ nên $\\Delta OAB$ cân tại $O$. Mặt khác $\\widehat{O} = 60^\\circ$ nên $\\Delta OAB$ là tam giác đều.'
  },
  {
    id: 'ch4_l16_q12',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 12,
    title: 'Đoạn thẳng vuông góc kẻ từ trung điểm đáy',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác cân', '#Đoạn vuông góc', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ cân tại $A$. Gọi $M$ là trung điểm của $BC$. Kẻ $MD \\perp AB$ ($D \\in AB$) và $ME \\perp AC$ ($E \\in AC$). Khẳng định nào sau đây đúng?',
    options: [
      '$MD = ME$ và $\\Delta MDE$ cân tại $M$',
      '$MD > ME$',
      '$MD + ME = BC$',
      '$\\Delta MDE$ là tam giác đều'
    ],
    correctIndex: 0,
    hint: 'Chứng minh hai tam giác vuông $\\Delta MDB$ và $\\Delta MEC$ bằng nhau theo trường hợp cạnh huyền - góc nhọn ($MB = MC, \\widehat{B} = \\widehat{C}$).',
    solution: 'Xét hai tam giác vuông $\\Delta MDB$ và $\\Delta MEC$ có:\n- Cạnh huyền $MB = MC$ ($M$ là trung điểm $BC$)\n- $\\widehat{B} = \\widehat{C}$ (vì $\\Delta ABC$ cân tại $A$)\n$\\implies \\Delta MDB = \\Delta MEC$ (cạnh huyền - góc nhọn) $\\implies MD = ME$.\nDo đó $\\Delta MDE$ cân tại $M$.'
  },
  {
    id: 'ch4_l16_q13',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 13,
    title: 'Chứng minh đường thẳng là trung trực của đoạn thẳng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đường trung trực', '#Định lí đảo', '#Vận dụng'],
    question: 'Cho đoạn thẳng $AB$. Lấy hai điểm $C$ và $D$ nằm về hai phía khác nhau sao cho $CA = CB$ và $DA = DB$. Khi đó đường thẳng $CD$ là:',
    options: [
      'Đường trung trực của đoạn thẳng $AB$',
      'Đường song song với $AB$',
      'Đường trùng với đoạn thẳng $AB$',
      'Đường xiên bất kì không vuông góc'
    ],
    correctIndex: 0,
    hint: 'Theo định lí đảo: Điểm cách đều hai đầu mút thì nằm trên đường trung trực. Cả $C$ và $D$ đều cách đều $A$ và $B$.',
    solution: 'Vì $CA = CB$ nên $C$ thuộc đường trung trực của $AB$. Vì $DA = DB$ nên $D$ thuộc đường trung trực của $AB$. Do đó đường thẳng $CD$ chính là đường trung trực của đoạn thẳng $AB$.'
  },
  {
    id: 'ch4_l16_q14',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 14,
    title: 'Kéo dài đáy của tam giác cân',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác cân', '#Kéo dài', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ cân tại $A$. Trên tia đối của tia $BC$ lấy điểm $M$, trên tia đối của tia $CB$ lấy điểm $N$ sao cho $BM = CN$. Khi đó $\\Delta AMN$ là:',
    options: [
      'Tam giác cân tại $A$',
      'Tam giác vuông tại $A$',
      'Tam giác đều',
      'Tam giác thường không cân'
    ],
    correctIndex: 0,
    hint: 'Góc ngoài $\\widehat{ABM} = 180^\\circ - \\widehat{ABC} = 180^\\circ - \\widehat{ACB} = \\widehat{ACN}$. Chứng minh $\\Delta ABM = \\Delta ACN$ (c.g.c).',
    solution: 'Ta có $\\widehat{ABM} = \\widehat{ACN}$ (cùng kề bù với hai góc ở đáy bằng nhau).\nXét $\\Delta ABM$ và $\\Delta ACN$ có: $AB = AC, \\widehat{ABM} = \\widehat{ACN}, BM = CN$.\n$\\implies \\Delta ABM = \\Delta ACN$ (c.g.c) $\\implies AM = AN$.\nVậy $\\Delta AMN$ cân tại $A$.'
  },
  {
    id: 'ch4_l16_q15',
    lessonId: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 15,
    title: 'Ứng dụng thực tế: Đặt trạm cấp nước cách đều hai khu dân cư',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Trung trực', '#Vận dụng'],
    question: 'Hai khu dân cư $A$ và $B$ nằm cùng một bên bờ sông thẳng $d$. Kĩ sư cần tìm một vị trí trên bờ sông $d$ để xây trạm bơm nước sao cho đường ống dẫn nước từ trạm đến hai khu dân cư có độ dài bằng nhau. Vị trí trạm bơm là:',
    options: [
      'Giao điểm của bờ sông $d$ với đường trung trực của đoạn thẳng $AB$',
      'Trung điểm của đoạn thẳng $AB$',
      'Hình chiếu vuông góc của $A$ lên bờ sông $d$',
      'Hình chiếu vuông góc của $B$ lên bờ sông $d$'
    ],
    correctIndex: 0,
    hint: 'Điểm cách đều hai điểm $A$ và $B$ bắt buộc phải nằm trên đường trung trực của đoạn thẳng $AB$.',
    solution: 'Mọi điểm cách đều hai đầu mút $A$ và $B$ đều phải thuộc đường trung trực của đoạn thẳng $AB$. Vì trạm bơm nằm trên bờ sông $d$ nên trạm bơm chính là giao điểm của bờ sông $d$ với đường trung trực của đoạn thẳng $AB$.'
  }
];

export default chapter4Exercises;
