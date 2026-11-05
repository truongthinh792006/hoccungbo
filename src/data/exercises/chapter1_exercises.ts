import { PracticeExercise } from '../../types/curriculum';

export const chapter1Exercises: PracticeExercise[] = [
  // --- BÀI 1: TẬP HỢP CÁC SỐ HỮU TỈ ---
  {
    id: 'c1-01-ex-01',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 1,
    title: 'Nhận biết số hữu tỉ',
    difficulty: 'co_ban',
    question: 'Khẳng định nào sau đây là **đúng** về tập hợp số hữu tỉ $\\mathbb{Q}$?',
    options: [
      { id: 'opt-a', text: 'Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$.', isCorrect: true },
      { id: 'opt-b', text: 'Mọi số thập phân đều không phải là số hữu tỉ.', isCorrect: false },
      { id: 'opt-c', text: 'Số 0 không phải là số hữu tỉ vì không viết được dưới dạng phân số.', isCorrect: false },
      { id: 'opt-d', text: 'Số hữu tỉ chỉ gồm các số nguyên dương và phân số dương.', isCorrect: false }
    ],
    correctAnswerId: 'opt-a',
    hint: '💡 Nhớ lại định nghĩa: Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}$ và mẫu số $b \\neq 0$.',
    solution: 'Theo định nghĩa trong SGK Toán 7 (Kết nối tri thức):\n- Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$.\n- Số $0 = \\frac{0}{1}$ là số hữu tỉ.\n- Các số thập phân hữu hạn như $0{,}5 = \\frac{1}{2}$ đều là số hữu tỉ.\nDo đó, khẳng định đúng là khẳng định A.',
    keyTakeaway: 'Số hữu tỉ viết được dưới dạng phân số tối giản $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$.'
  },
  {
    id: 'c1-01-ex-02',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 2,
    title: 'Biểu diễn số hữu tỉ đối nhau',
    difficulty: 'co_ban',
    question: 'Số đối của số hữu tỉ $-\\frac{3}{5}$ là:',
    options: [
      { id: 'opt-a', text: '$-\\frac{5}{3}$', isCorrect: false },
      { id: 'opt-b', text: '$\\frac{3}{5}$', isCorrect: true },
      { id: 'opt-c', text: '$\\frac{5}{3}$', isCorrect: false },
      { id: 'opt-d', text: '$-\\frac{3}{-5}$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Hai số đối nhau có tổng bằng 0 và nằm về hai phía đối xứng nhau qua gốc 0 trên trục số.',
    solution: 'Số đối của số hữu tỉ $x$ là $-x$.\nSố đối của $-\\frac{3}{5}$ là $-\\left(-\\frac{3}{5}\\right) = \\frac{3}{5}$.\nTa có $-\\frac{3}{5} + \\frac{3}{5} = 0$.',
    keyTakeaway: 'Số đối của số hữu tỉ $-x$ là $x$.'
  },

  // --- BÀI 3: LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN CỦA MỘT SỐ HỮU TỈ ---
  {
    id: 'c1-03-ex-01',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 1,
    title: 'Tính lũy thừa của một tích',
    difficulty: 'co_ban',
    question: 'Tính giá trị của biểu thức: $A = \\left(-\\frac{2}{3}\\right)^3$.',
    options: [
      { id: 'opt-a', text: '$-\\frac{8}{27}$', isCorrect: true },
      { id: 'opt-b', text: '$\\frac{8}{27}$', isCorrect: false },
      { id: 'opt-c', text: '$-\\frac{6}{9}$', isCorrect: false },
      { id: 'opt-d', text: '$-\\frac{8}{9}$', isCorrect: false }
    ],
    correctAnswerId: 'opt-a',
    hint: '💡 Áp dụng công thức $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$. Lưu ý dấu âm nâng lên lũy thừa bậc lẻ vẫn là dấu âm.',
    solution: 'Áp dụng công thức lũy thừa của một thương:\n$$\\left(-\\frac{2}{3}\\right)^3 = \\frac{(-2)^3}{3^3} = \\frac{-8}{27} = -\\frac{8}{27}$$\nVì số mũ 3 là số lẻ, nên kết quả mang dấu âm.',
    keyTakeaway: 'Lũy thừa bậc lẻ của số âm là số âm, lũy thừa bậc chẵn của số âm là số dương.'
  },
  {
    id: 'c1-03-ex-02',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 2,
    title: 'Nhân hai lũy thừa cùng cơ số',
    difficulty: 'thong_hieu',
    question: 'Rút gọn biểu thức: $M = \\left(\\frac{1}{2}\\right)^3 \\cdot \\left(\\frac{1}{2}\\right)^4$.',
    options: [
      { id: 'opt-a', text: '$\\left(\\frac{1}{2}\\right)^{12}$', isCorrect: false },
      { id: 'opt-b', text: '$\\left(\\frac{1}{2}\\right)^7$', isCorrect: true },
      { id: 'opt-c', text: '$1^7$', isCorrect: false },
      { id: 'opt-d', text: '$\\left(\\frac{1}{4}\\right)^7$', isCorrect: false }
    ],
    correctAnswerId: 'opt-b',
    hint: '💡 Áp dụng quy tắc nhân hai lũy thừa cùng cơ số: $x^m \\cdot x^n = x^{m+n}$. Giữ nguyên cơ số và cộng các số mũ.',
    solution: 'Áp dụng công thức $x^m \\cdot x^n = x^{m+n}$ với $x = \\frac{1}{2}$:\n$$M = \\left(\\frac{1}{2}\\right)^3 \\cdot \\left(\\frac{1}{2}\\right)^4 = \\left(\\frac{1}{2}\\right)^{3+4} = \\left(\\frac{1}{2}\\right)^7$$\nĐáp án chính xác là B.',
    keyTakeaway: 'Khi nhân hai lũy thừa cùng cơ số: Giữ nguyên cơ số, cộng các số mũ.'
  }
];

export default chapter1Exercises;
