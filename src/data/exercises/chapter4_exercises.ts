import { PracticeExercise } from '../../types/curriculum';

export const chapter4Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 12: TỔNG CÁC GÓC TRONG MỘT TAM GIÁC (15 BÀI TẬP PHÂN HÓA)
  // ==========================================================================

  // --- MỨC ĐỘ 1: CƠ BẢN (5 BÀI) ---

  {
    id: 'c4-12-ex-01',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 1,
    title: 'Tính góc thứ ba trong tam giác',
    difficulty: 'co_ban',
    question: 'Cho tam giác $ABC$ có $\\widehat{A} = 65^\\circ$ và $\\widehat{B} = 55^\\circ$. Số đo góc $C$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{C} = 50^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{C} = 60^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{C} = 70^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{C} = 80^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Áp dụng định lí tổng ba góc trong một tam giác: Trong tam giác $ABC$, $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$. Muốn tìm góc $C$, ta lấy $180^\\circ$ trừ đi tổng hai góc đã biết.',
    solution: 'Áp dụng định lí tổng ba góc trong $\\Delta ABC$:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\nThay số:\n$$65^\\circ + 55^\\circ + \\widehat{C} = 180^\\circ$$\n$$120^\\circ + \\widehat{C} = 180^\\circ$$\n$$\\widehat{C} = 180^\\circ - 120^\\circ = 60^\\circ$$\nVậy số đo của góc $C$ bằng $60^\\circ$.',
    keyTakeaway: 'Tổng ba góc của một tam giác luôn bằng $180^\\circ$. Do đó: $\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B})$.',
    tags: ['Tổng 3 góc', 'Cơ bản', 'Tính góc']
  },

  {
    id: 'c4-12-ex-02',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 2,
    title: 'Hai góc nhọn trong tam giác vuông',
    difficulty: 'co_ban',
    question: 'Cho tam giác $MNP$ vuông tại $M$ có $\\widehat{N} = 38^\\circ$. Số đo góc nhọn $P$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{P} = 62^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{P} = 52^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{P} = 142^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{P} = 42^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Trong tam giác vuông, hai góc nhọn phụ nhau, nghĩa là tổng của chúng bằng $90^\\circ$. Do đó $\\widehat{P} = 90^\\circ - \\widehat{N}$.',
    solution: 'Vì $\\Delta MNP$ vuông tại $M$ nên hai góc nhọn $N$ và $P$ phụ nhau:\n$$\\widehat{N} + \\widehat{P} = 90^\\circ$$\nSuy ra:\n$$\\widehat{P} = 90^\\circ - \\widehat{N} = 90^\\circ - 38^\\circ = 52^\\circ$$\nVậy $\\widehat{P} = 52^\\circ$.',
    keyTakeaway: 'Trong tam giác vuông, hai góc nhọn phụ nhau (có tổng số đo bằng $90^\\circ$).',
    tags: ['Tam giác vuông', 'Góc phụ nhau']
  },

  {
    id: 'c4-12-ex-03',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 3,
    title: 'Số đo hai góc đáy của tam giác vuông cân',
    difficulty: 'co_ban',
    question: 'Tam giác $DEF$ vuông cân tại đỉnh $D$. Số đo mỗi góc nhọn $\\widehat{E}$ và $\\widehat{F}$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{E} = \\widehat{F} = 45^\\circ$', isCorrect: true },
      { id: 'opt-b', text: '$\\widehat{E} = \\widehat{F} = 60^\\circ$', isCorrect: false },
      { id: 'opt-c', text: '$\\widehat{E} = \\widehat{F} = 30^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{E} = 50^\\circ, \\widehat{F} = 40^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-a',
    hint: '💡 Tam giác vuông cân có góc ở đỉnh bằng $90^\\circ$ và hai góc ở đáy bằng nhau. Tổng hai góc ở đáy bằng $90^\\circ$.',
    solution: 'Vì $\\Delta DEF$ vuông cân tại $D$ nên:\n- $\\widehat{D} = 90^\\circ$\n- $\\widehat{E} = \\widehat{F}$\nTheo tính chất tam giác vuông, hai góc nhọn phụ nhau:\n$$\\widehat{E} + \\widehat{F} = 90^\\circ \\implies 2\\widehat{E} = 90^\\circ \\implies \\widehat{E} = \\widehat{F} = 45^\\circ$$\nVậy mỗi góc đáy của tam giác vuông cân bằng $45^\\circ$.',
    keyTakeaway: 'Mỗi góc nhọn của một tam giác vuông cân luôn luôn bằng đúng $45^\\circ$.',
    tags: ['Tam giác vuông cân', 'Cơ bản']
  },

  {
    id: 'c4-12-ex-04',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 4,
    title: 'Góc trong tam giác đều',
    difficulty: 'co_ban',
    question: 'Tam giác $ABC$ là tam giác đều. Khẳng định nào sau đây là đúng về số đo các góc của tam giác?',
    options: [
      { id: 'opt-a', text: '$\\widehat{A} = \\widehat{B} = \\widehat{C} = 90^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{A} = \\widehat{B} = \\widehat{C} = 45^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{A} = 70^\\circ, \\widehat{B} = 60^\\circ, \\widehat{C} = 50^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Tam giác đều có ba góc bằng nhau. Lấy tổng $180^\\circ$ chia đều cho 3 góc.',
    solution: 'Tam giác đều là tam giác có 3 cạnh bằng nhau và 3 góc bằng nhau:\n$$\\widehat{A} = \\widehat{B} = \\widehat{C}$$\nMặt khác theo định lí tổng 3 góc trong tam giác:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ \\implies 3\\widehat{A} = 180^\\circ \\implies \\widehat{A} = \\frac{180^\\circ}{3} = 60^\\circ$$\nDo đó $\\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ$.',
    keyTakeaway: 'Trong tam giác đều, mỗi góc luôn bằng đúng $60^\\circ$.',
    tags: ['Tam giác đều', 'Cơ bản']
  },

  {
    id: 'c4-12-ex-05',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 5,
    title: 'Kiểm tra bộ ba số đo góc của tam giác',
    difficulty: 'co_ban',
    question: 'Bộ ba số đo góc nào sau đây **không thể** là ba góc của một tam giác?',
    options: [
      { id: 'opt-a', text: '$40^\\circ, 60^\\circ, 80^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$90^\\circ, 45^\\circ, 45^\\circ$', isCorrect: false },
      { id: 'opt-c', text: '$70^\\circ, 65^\\circ, 55^\\circ$', isCorrect: true },
      { id: 'opt-d', text: '$100^\\circ, 50^\\circ, 30^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-c',
    hint: '💡 Hãy tính tổng của ba góc trong mỗi phương án. Tổng ba góc của một tam giác bắt buộc phải bằng chính xác $180^\\circ$.',
    solution: 'Ta kiểm tra tổng số đo 3 góc của từng phương án:\n- Phương án A: $40^\\circ + 60^\\circ + 80^\\circ = 180^\\circ$ (Hợp lệ)\n- Phương án B: $90^\\circ + 45^\\circ + 45^\\circ = 180^\\circ$ (Hợp lệ)\n- Phương án C: $70^\\circ + 65^\\circ + 55^\\circ = 190^\\circ \\neq 180^\\circ$ (Không thể là 3 góc của một tam giác)\n- Phương án D: $100^\\circ + 50^\\circ + 30^\\circ = 180^\\circ$ (Hợp lệ)\nVậy chọn C.',
    keyTakeaway: 'Điều kiện cần và đủ để 3 số đo là 3 góc của một tam giác là tổng của chúng phải đúng bằng $180^\\circ$.',
    tags: ['Kiểm tra góc', 'Định lí 180 độ']
  },

  // --- MỨC ĐỘ 2: THÔNG HIỂU (6 BÀI) ---

  {
    id: 'c4-12-ex-06',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 6,
    title: 'Tính số đo góc ngoài của tam giác',
    difficulty: 'thong_hieu',
    question: 'Cho tam giác $ABC$ có $\\widehat{A} = 72^\\circ$ và $\\widehat{B} = 48^\\circ$. Kẻ tia $Cx$ là tia đối của tia $CB$. Số đo góc ngoài $\\widehat{ACx}$ tại đỉnh $C$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{ACx} = 110^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{ACx} = 120^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{ACx} = 130^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{ACx} = 60^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Áp dụng định lí góc ngoài: Số đo góc ngoài của một tam giác bằng tổng số đo hai góc trong không kề với nó, tức là $\\widehat{ACx} = \\widehat{A} + \\widehat{B}$.',
    solution: 'Vì góc $\\widehat{ACx}$ là góc ngoài tại đỉnh $C$ của $\\Delta ABC$, nên theo định lí góc ngoài ta có:\n$$\\widehat{ACx} = \\widehat{A} + \\widehat{B}$$\nThay số đo đã cho vào công thức:\n$$\\widehat{ACx} = 72^\\circ + 48^\\circ = 120^\\circ$$\n(Cách khác: Ta có $\\widehat{C} = 180^\\circ - (72^\\circ + 48^\\circ) = 60^\\circ$. Vì $\\widehat{ACx}$ kề bù với $\\widehat{C}$ nên $\\widehat{ACx} = 180^\\circ - 60^\\circ = 120^\\circ$).',
    keyTakeaway: 'Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó: $\\widehat{G\\acute{o}c\\;ngo\\grave{a}i} = \\widehat{A} + \\widehat{B}$.',
    tags: ['Góc ngoài', 'Thông hiểu']
  },

  {
    id: 'c4-12-ex-07',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 7,
    title: 'Tìm góc trong khi biết góc ngoài',
    difficulty: 'thong_hieu',
    question: 'Biết góc ngoài tại đỉnh $B$ của tam giác $ABC$ có số đo là $125^\\circ$ và $\\widehat{C} = 45^\\circ$. Số đo góc $A$ của tam giác là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{A} = 70^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{A} = 80^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{A} = 85^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{A} = 90^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Gọi góc ngoài tại đỉnh $B$ là $\\widehat{B}_{ngo\\grave{a}i}$. Theo định lí góc ngoài: $\\widehat{B}_{ngo\\grave{a}i} = \\widehat{A} + \\widehat{C}$. Từ đó suy ra $\\widehat{A} = \\widehat{B}_{ngo\\grave{a}i} - \\widehat{C}$.',
    solution: 'Theo định lí góc ngoài của tam giác, số đo góc ngoài tại đỉnh $B$ bằng tổng hai góc trong không kề với nó là $\\widehat{A}$ và $\\widehat{C}$:\n$$\\widehat{B}_{ngo\\grave{a}i} = \\widehat{A} + \\widehat{C}$$\nThay số:\n$$125^\\circ = \\widehat{A} + 45^\\circ$$\n$$\\widehat{A} = 125^\\circ - 45^\\circ = 80^\\circ$$\nVậy $\\widehat{A} = 80^\\circ$.',
    keyTakeaway: 'Từ định lí góc ngoài: $\\widehat{A} = \\widehat{B}_{ngo\\grave{a}i} - \\widehat{C}$.',
    tags: ['Góc ngoài', 'Tính góc trong']
  },

  {
    id: 'c4-12-ex-08',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 8,
    title: 'Tam giác có ba góc tỉ lệ với 1, 2, 3',
    difficulty: 'thong_hieu',
    question: 'Cho tam giác $ABC$ có số đo ba góc tỉ lệ với $1; 2; 3$, nghĩa là $\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3}$. Số đo góc lớn nhất $\\widehat{C}$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{C} = 60^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{C} = 75^\\circ$', isCorrect: false },
      { id: 'opt-c', text: '$\\widehat{C} = 90^\\circ$', isCorrect: true },
      { id: 'opt-d', text: '$\\widehat{C} = 100^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-c',
    hint: '💡 Áp dụng tính chất của dãy tỉ số bằng nhau: $\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3} = \\frac{\\widehat{A} + \\widehat{B} + \\widehat{C}}{1 + 2 + 3} = \\frac{180^\\circ}{6}$.',
    solution: 'Áp dụng tính chất dãy tỉ số bằng nhau và định lí tổng 3 góc trong tam giác:\n$$\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3} = \\frac{\\widehat{A} + \\widehat{B} + \\widehat{C}}{1 + 2 + 3} = \\frac{180^\\circ}{6} = 30^\\circ$$\nTừ đó ta tính được số đo từng góc:\n- $\\widehat{A} = 1 \\times 30^\\circ = 30^\\circ$\n- $\\widehat{B} = 2 \\times 30^\\circ = 60^\\circ$\n- $\\widehat{C} = 3 \\times 30^\\circ = 90^\\circ$\nVậy góc lớn nhất là $\\widehat{C} = 90^\\circ$ (Tam giác này là tam giác vuông tại $C$).',
    keyTakeaway: 'Kết hợp tính chất dãy tỉ số bằng nhau với định lí $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.',
    tags: ['Dãy tỉ số bằng nhau', 'Tam giác vuông 30-60-90']
  },

  {
    id: 'c4-12-ex-09',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 9,
    title: 'Tam giác cân biết góc ở đỉnh',
    difficulty: 'thong_hieu',
    question: 'Tam giác $ABC$ cân tại $A$ có góc ở đỉnh $\\widehat{A} = 70^\\circ$. Số đo mỗi góc ở đáy $\\widehat{B}$ và $\\widehat{C}$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{B} = \\widehat{C} = 55^\\circ$', isCorrect: true },
      { id: 'opt-b', text: '$\\widehat{B} = \\widehat{C} = 60^\\circ$', isCorrect: false },
      { id: 'opt-c', text: '$\\widehat{B} = \\widehat{C} = 50^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{B} = \\widehat{C} = 65^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-a',
    hint: '💡 Trong tam giác cân tại $A$, hai góc ở đáy bằng nhau: $\\widehat{B} = \\widehat{C}$. Tổng hai góc ở đáy bằng $180^\\circ - \\widehat{A}$. Do đó $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}$.',
    solution: 'Vì $\\Delta ABC$ cân tại $A$ nên $\\widehat{B} = \\widehat{C}$.\nTheo định lí tổng ba góc trong tam giác:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$$\n$$70^\\circ + 2\\widehat{B} = 180^\\circ$$\n$$2\\widehat{B} = 180^\\circ - 70^\\circ = 110^\\circ$$\n$$\\widehat{B} = \\widehat{C} = \\frac{110^\\circ}{2} = 55^\\circ$$\nVậy hai góc ở đáy có số đo là $55^\\circ$.',
    keyTakeaway: 'Công thức tính góc ở đáy tam giác cân khi biết góc đỉnh: $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}$.',
    tags: ['Tam giác cân', 'Góc ở đáy']
  },

  {
    id: 'c4-12-ex-10',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 10,
    title: 'Tam giác cân biết góc ở đáy',
    difficulty: 'thong_hieu',
    question: 'Tam giác $DEF$ cân tại đỉnh $D$ có góc ở đáy $\\widehat{E} = 52^\\circ$. Số đo góc ở đỉnh $\\widehat{D}$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{D} = 74^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{D} = 76^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{D} = 66^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{D} = 86^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Vì tam giác $DEF$ cân tại $D$ nên hai góc ở đáy bằng nhau: $\\widehat{E} = \\widehat{F} = 52^\\circ$. Góc ở đỉnh $\\widehat{D} = 180^\\circ - 2\\widehat{E}$.',
    solution: 'Vì $\\Delta DEF$ cân tại $D$ nên hai góc ở đáy bằng nhau:\n$$\\widehat{F} = \\widehat{E} = 52^\\circ$$\nTổng hai góc ở đáy là:\n$$\\widehat{E} + \\widehat{F} = 52^\\circ + 52^\\circ = 104^\\circ$$\nTheo định lí tổng ba góc trong $\\Delta DEF$:\n$$\\widehat{D} = 180^\\circ - (\\widehat{E} + \\widehat{F}) = 180^\\circ - 104^\\circ = 76^\\circ$$\nVậy góc đỉnh $\\widehat{D} = 76^\\circ$.',
    keyTakeaway: 'Công thức tính góc ở đỉnh tam giác cân khi biết góc đáy: $\\widehat{D} = 180^\\circ - 2\\widehat{E}$.',
    tags: ['Tam giác cân', 'Góc ở đỉnh']
  },

  {
    id: 'c4-12-ex-11',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 11,
    title: 'Tam giác vuông có một góc nhọn gấp 4 lần góc kia',
    difficulty: 'thong_hieu',
    question: 'Cho tam giác $ABC$ vuông tại $A$. Biết góc nhọn $\\widehat{B}$ gấp 4 lần góc nhọn $\\widehat{C}$ (nghĩa là $\\widehat{B} = 4\\widehat{C}$). Số đo góc nhọn nhỏ hơn là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{C} = 18^\\circ$', isCorrect: true },
      { id: 'opt-b', text: '$\\widehat{C} = 22{,}5^\\circ$', isCorrect: false },
      { id: 'opt-c', text: '$\\widehat{C} = 15^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{C} = 20^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-a',
    hint: '💡 Trong tam giác vuông tại $A$, hai góc nhọn phụ nhau: $\\widehat{B} + \\widehat{C} = 90^\\circ$. Thay $\\widehat{B} = 4\\widehat{C}$ vào để giải phương trình bậc nhất.',
    solution: 'Vì tam giác $ABC$ vuông tại $A$ nên hai góc nhọn phụ nhau:\n$$\\widehat{B} + \\widehat{C} = 90^\\circ$$\nTheo đề bài ta có $\\widehat{B} = 4\\widehat{C}$, thay vào phương trình trên:\n$$4\\widehat{C} + \\widehat{C} = 90^\\circ$$\n$$5\\widehat{C} = 90^\\circ$$\n$$\\widehat{C} = \\frac{90^\\circ}{5} = 18^\\circ$$\nSuy ra góc nhọn lớn hơn là $\\widehat{B} = 4 \\times 18^\\circ = 72^\\circ$.\nVậy góc nhọn nhỏ hơn là $\\widehat{C} = 18^\\circ$.',
    keyTakeaway: 'Thiết lập phương trình phụ nhau: $k \\cdot x + x = 90^\\circ \\implies (k+1)x = 90^\\circ$.',
    tags: ['Tam giác vuông', 'Phương trình góc']
  },

  // --- MỨC ĐỘ 3: VẬN DỤNG (4 BÀI) ---

  {
    id: 'c4-12-ex-12',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 12,
    title: 'Tính góc với tia phân giác của tam giác',
    difficulty: 'van_dung',
    question: 'Cho tam giác $ABC$ có $\\widehat{B} = 70^\\circ, \\widehat{C} = 30^\\circ$. Kẻ tia phân giác của góc $A$ cắt cạnh $BC$ tại điểm $D$. Số đo góc $\\widehat{ADC}$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{ADC} = 100^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{ADC} = 110^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{ADC} = 120^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{ADC} = 105^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Bước 1: Tính góc $A$ của $\\Delta ABC$. Bước 2: Tính góc $\\widehat{BAD} = \\widehat{CAD} = \\frac{\\widehat{A}}{2}$. Bước 3: Nhận xét góc $\\widehat{ADC}$ là góc ngoài tại đỉnh $D$ của $\\Delta ABD$, do đó $\\widehat{ADC} = \\widehat{B} + \\widehat{BAD}$.',
    solution: 'Bước 1: Tính góc $A$ của $\\Delta ABC$:\n$$\\widehat{A} = 180^\\circ - (\\widehat{B} + \\widehat{C}) = 180^\\circ - (70^\\circ + 30^\\circ) = 80^\\circ$$\nBước 2: Vì $AD$ là tia phân giác của góc $A$ nên:\n$$\\widehat{BAD} = \\widehat{CAD} = \\frac{\\widehat{A}}{2} = \\frac{80^\\circ}{2} = 40^\\circ$$\nBước 3: Góc $\\widehat{ADC}$ là góc ngoài tại đỉnh $D$ của $\\Delta ABD$, do đó:\n$$\\widehat{ADC} = \\widehat{B} + \\widehat{BAD} = 70^\\circ + 40^\\circ = 110^\\circ$$\n(Hoặc xét trong $\\Delta ADC$: $\\widehat{ADC} = 180^\\circ - (\\widehat{CAD} + \\widehat{C}) = 180^\\circ - (40^\\circ + 30^\\circ) = 110^\\circ$).\nVậy $\\widehat{ADC} = 110^\\circ$.',
    keyTakeaway: 'Vận dụng kết hợp định lí phân giác và định lí góc ngoài giúp tính toán nhanh chóng mà không cần qua nhiều bước.',
    tags: ['Tia phân giác', 'Góc ngoài', 'Vận dụng']
  },

  {
    id: 'c4-12-ex-13',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 13,
    title: 'Góc giữa đường cao và cạnh trong tam giác vuông',
    difficulty: 'van_dung',
    question: 'Cho tam giác $ABC$ vuông tại $A$, kẻ đường cao $AH$ vuông góc với cạnh huyền $BC$ ($H \\in BC$). Biết $\\widehat{B} = 55^\\circ$. Số đo góc $\\widehat{HAC}$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{HAC} = 35^\\circ$', isCorrect: false },
      { id: 'opt-b', text: '$\\widehat{HAC} = 55^\\circ$', isCorrect: true },
      { id: 'opt-c', text: '$\\widehat{HAC} = 45^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{HAC} = 65^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Nhận xét: Trong $\\Delta ABC$ vuông tại $A$ thì $\\widehat{C} = 90^\\circ - \\widehat{B}$. Trong $\\Delta AHC$ vuông tại $H$ thì $\\widehat{HAC} = 90^\\circ - \\widehat{C}$. Do đó $\\widehat{HAC} = \\widehat{B}$ (cùng phụ với góc $C$).',
    solution: 'Xét hai tam giác vuông:\n1) Trong $\\Delta ABC$ vuông tại $A$:\n$$\\widehat{C} = 90^\\circ - \\widehat{B} = 90^\\circ - 55^\\circ = 35^\\circ$$\n2) Trong $\\Delta AHC$ vuông tại $H$ (vì $AH \\perp BC$):\n$$\\widehat{HAC} + \\widehat{C} = 90^\\circ \\implies \\widehat{HAC} = 90^\\circ - \\widehat{C} = 90^\\circ - 35^\\circ = 55^\\circ$$\nTổng quát: Ta luôn có $\\widehat{HAC} = \\widehat{B}$ và $\\widehat{HAB} = \\widehat{C}$ vì chúng là các cặp góc cùng phụ với một góc thứ ba.\nVậy $\\widehat{HAC} = 55^\\circ$.',
    keyTakeaway: 'Hai góc cùng phụ với một góc thứ ba thì bằng nhau: $\\widehat{HAC} = \\widehat{B}$.',
    tags: ['Đường cao tam giác vuông', 'Cùng phụ', 'Vận dụng']
  },

  {
    id: 'c4-12-ex-14',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 14,
    title: 'Kết hợp đường thẳng song song và tam giác',
    difficulty: 'van_dung',
    question: 'Cho tam giác $ABC$ có $\\widehat{A} = 50^\\circ$ và $\\widehat{B} = 75^\\circ$. Lấy điểm $M$ trên cạnh $AB$, điểm $N$ trên cạnh $AC$ sao cho $MN \\parallel BC$. Số đo góc $\\widehat{ANM}$ là:',
    options: [
      { id: 'opt-a', text: '$\\widehat{ANM} = 55^\\circ$', isCorrect: true },
      { id: 'opt-b', text: '$\\widehat{ANM} = 75^\\circ$', isCorrect: false },
      { id: 'opt-c', text: '$\\widehat{ANM} = 50^\\circ$', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{ANM} = 65^\\circ$', isCorrect: false }
    ],
    correctAnswerId: 'opt-a',
    hint: '💡 Bước 1: Tính góc $C$ của $\\Delta ABC$. Bước 2: Vì $MN \\parallel BC$, hãy sử dụng tính chất của hai góc đồng vị: $\\widehat{ANM} = \\widehat{C}$.',
    solution: 'Bước 1: Áp dụng định lí tổng ba góc trong $\\Delta ABC$:\n$$\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (50^\\circ + 75^\\circ) = 180^\\circ - 125^\\circ = 55^\\circ$$\nBước 2: Vì $MN \\parallel BC$ nên hai góc $\\widehat{ANM}$ và $\\widehat{C}$ là hai góc đồng vị:\n$$\\widehat{ANM} = \\widehat{C} = 55^\\circ$$\n(Tương tự ta cũng có $\\widehat{AMN} = \\widehat{B} = 75^\\circ$).\nVậy $\\widehat{ANM} = 55^\\circ$.',
    keyTakeaway: 'Nếu một đường thẳng song song với một cạnh của tam giác thì tạo ra các góc đồng vị hoặc so le trong bằng với các góc của tam giác ban đầu.',
    tags: ['Đường thẳng song song', 'Đồng vị', 'Vận dụng']
  },

  {
    id: 'c4-12-ex-15',
    lessonId: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 15,
    title: 'Bài toán thực tế: Góc đỉnh của khung vì kèo mái nhà',
    difficulty: 'van_dung',
    question: 'Một khung vì kèo mái nhà bằng thép có hình dạng một tam giác cân $ABC$ với $AB = AC$. Để đảm bảo thoát nước mưa hiệu quả và an toàn chịu gió, người thợ thiết kế góc nghiêng của mái nhà so với phương ngang là $\\widehat{B} = \\widehat{C} = 34^\\circ$. Hỏi góc đỉnh $\\widehat{A}$ của vì kèo mái nhà là bao nhiêu độ và thuộc loại góc nào?',
    options: [
      { id: 'opt-a', text: '$\\widehat{A} = 112^\\circ$ (Góc tù)', isCorrect: true },
      { id: 'opt-b', text: '$\\widehat{A} = 112^\\circ$ (Góc nhọn)', isCorrect: false },
      { id: 'opt-c', text: '$\\widehat{A} = 122^\\circ$ (Góc tù)', isCorrect: false },
      { id: 'opt-d', text: '$\\widehat{A} = 90^\\circ$ (Góc vuông)', isCorrect: false }
    ],
    correctAnswerId: 'opt-a',
    hint: '💡 Khung vì kèo là tam giác cân tại $A$. Tổng ba góc bằng $180^\\circ$. Góc đỉnh $\\widehat{A} = 180^\\circ - 2 \\times 34^\\circ$. Nhớ lại: Góc có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$ là góc tù.',
    solution: 'Khung vì kèo mái nhà có dạng tam giác cân $ABC$ tại $A$ với hai góc ở đáy:\n$$\\widehat{B} = \\widehat{C} = 34^\\circ$$\nTổng hai góc ở đáy là:\n$$34^\\circ + 34^\\circ = 68^\\circ$$\nTheo định lí tổng ba góc trong tam giác:\n$$\\widehat{A} = 180^\\circ - (\\widehat{B} + \\widehat{C}) = 180^\\circ - 68^\\circ = 112^\\circ$$\nVì $90^\\circ < 112^\\circ < 180^\\circ$ nên góc đỉnh $\\widehat{A}$ là một góc tù.\nVậy góc đỉnh của khung vì kèo bằng $112^\\circ$ (góc tù).',
    keyTakeaway: 'Ứng dụng thực tế: Độ dốc mái nhà liên hệ chặt chẽ với góc đỉnh vì kèo thông qua định lí tổng 3 góc trong tam giác cân.',
    tags: ['Thực tế', 'Vì kèo mái nhà', 'Góc tù']
  }
];

export default chapter4Exercises;
