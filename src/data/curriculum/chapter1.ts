import { Math7Lesson } from '../../types/curriculum';

export const chapter1Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 1: TẬP HỢP CÁC SỐ HỮU TỈ
  // ==========================================================================
  {
    id: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 1,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    unit: 'Chương I: Số hữu tỉ',
    title: 'Bài 1: Tập hợp các số hữu tỉ',
    subtitle: 'Mở rộng từ phân số và số nguyên sang tập hợp số hữu tỉ Q',
    status: 'completed',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-1-1',
        level: 'nhan_biet',
        code: 'KNTT-T01-01',
        description: 'Nhận biết được số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b} \\ (a, b \\in \\mathbb{Z}, b \\neq 0)$.',
        mastered: true
      },
      {
        id: 'lt-1-2',
        level: 'nhan_biet',
        code: 'KNTT-T01-02',
        description: 'Nhận biết số đối của một số hữu tỉ: $-(-\\frac{a}{b}) = \\frac{a}{b}$ và $x + (-x) = 0$.',
        mastered: true
      },
      {
        id: 'lt-1-3',
        level: 'thong_hieu',
        code: 'KNTT-T01-03',
        description: 'Biểu diễn và xác định được vị trí của số hữu tỉ trên trục số thực.',
        mastered: true
      },
      {
        id: 'lt-1-4',
        level: 'van_dung',
        code: 'KNTT-T01-04',
        description: 'So sánh được hai số hữu tỉ bất kỳ (đặc biệt là phân số âm) và sắp xếp thứ tự.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c1-1',
        title: 'Định nghĩa số hữu tỉ',
        summary: 'Số hữu tỉ là số có thể viết được dưới dạng phân số $\\frac{a}{b}$, trong đó $a, b \\in \\mathbb{Z}$ và $b \\neq 0$. Tập hợp các số hữu tỉ được kí hiệu là $\\mathbb{Q}$.',
        latexFormula: '\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\;\\middle|\\; a, b \\in \\mathbb{Z},\\; b \\neq 0 \\right\\}',
        exampleSnippet: 'Các ví dụ cụ thể:\n- Số tự nhiên: $5 = \\frac{5}{1} \\in \\mathbb{Q}$\n- Số nguyên âm: $-3 = \\frac{-3}{1} \\in \\mathbb{Q}$\n- Số thập phân hữu hạn: $-0,6 = \\frac{-6}{10} = \\frac{-3}{5} \\in \\mathbb{Q}$\n- Hỗn số: $1\\frac{1}{3} = \\frac{4}{3} \\in \\mathbb{Q}$\n- Số 0: $0 = \\frac{0}{1} \\in \\mathbb{Q}$',
        pitfallWarning: 'Cảnh báo bẫy thi: Mẫu số b bắt buộc phải khác 0 ($b \\neq 0$). Số có mẫu bằng 0 như $\\frac{5}{0}$ là KHÔNG XÁC ĐỊNH và KHÔNG PHẢI số hữu tỉ!',
        realLifeApplication: 'Khi chia đều 4 chiếc bánh cho 3 bạn, mỗi bạn nhận được $\\frac{4}{3}$ chiếc bánh. Đó chính là một số hữu tỉ trong thực tế.'
      },
      {
        id: 'c1-2',
        title: 'Biểu diễn số hữu tỉ trên trục số & Số đối',
        summary: 'Mỗi số hữu tỉ được biểu diễn bởi một điểm trên trục số. Các số âm nằm bên trái điểm 0, các số dương nằm bên phải điểm 0. Hai số đối nhau cách đều gốc 0 về hai phía.',
        latexFormula: 'x < 0 \\implies x \\text{ nằm bên trái } 0; \\quad -(-x) = x; \\quad x + (-x) = 0',
        exampleSnippet: 'Để biểu diễn $-\\frac{3}{4}$, ta chia đoạn từ 0 đến -1 thành 4 phần bằng nhau, lấy 3 phần về bên trái điểm 0. Số đối của $-\\frac{3}{4}$ là $\\frac{3}{4}$.',
        pitfallWarning: 'Khi phân số có mẫu âm như $\\frac{3}{-4}$, em cần đổi thành $\\frac{-3}{4}$ trước khi biểu diễn để tránh nhầm hướng!',
        realLifeApplication: 'Mực nước biển quy ước là 0 m. Đỉnh núi cao $+1.200$ m, đáy rãnh biển sâu $-800$ m là hai điểm hữu tỉ đối dấu trên trục thẳng đứng.'
      },
      {
        id: 'c1-3',
        title: 'So sánh hai số hữu tỉ',
        summary: 'Với hai số hữu tỉ bất kì $x, y$ ta luôn có: hoặc $x < y$, hoặc $x = y$, hoặc $x > y$. Để so sánh, ta viết chúng dưới dạng phân số có cùng mẫu số dương rồi so sánh các tử số.',
        latexFormula: '\\text{Nếu } \\frac{a}{m} < \\frac{b}{m} \\; (m > 0) \\iff a < b',
        exampleSnippet: 'So sánh $-\\frac{3}{4}$ và $-\\frac{5}{6}$: Ta có $-\\frac{3}{4} = -\\frac{9}{12}$ và $-\\frac{5}{6} = -\\frac{10}{12}$. Vì $-9 > -10$ nên $-\\frac{3}{4} > -\\frac{5}{6}$.',
        pitfallWarning: 'Cẩn thận với số âm: Số âm có giá trị tuyệt đối càng lớn thì càng bé ($-10 < -9$). Đừng nhầm lẫn với số dương!',
        realLifeApplication: 'So sánh nhiệt độ: Ở vùng núi Sapa hôm nay là $-0,5^\\circ\\text{C}$, ngày mai là $-1,8^\\circ\\text{C}$. Ta thấy $-0,5 > -1,8$ nên hôm nay ấm hơn ngày mai.'
      }
    ],
    numberLinePoints: [
      { id: 'p-neg-2', label: '-2', value: -2, displayFraction: '-2', type: 'integer', description: 'Số nguyên âm -2' },
      { id: 'p-neg-3-4', label: '-3/4', value: -0.75, displayFraction: '-\\frac{3}{4}', type: 'fraction', description: 'Phân số âm -3/4 = -0,75' },
      { id: 'p-zero', label: '0', value: 0, displayFraction: '0', type: 'integer', description: 'Gốc tọa độ 0' },
      { id: 'p-pos-3-4', label: '3/4', value: 0.75, displayFraction: '\\frac{3}{4}', type: 'fraction', description: 'Số đối của -3/4' },
      { id: 'p-pos-2', label: '2', value: 2, displayFraction: '2', type: 'integer', description: 'Số tự nhiên 2' }
    ],
    diagnosticQuiz: [
      {
        id: 'q-b1-1',
        tier: 'nhan_biet',
        question: 'Trong các số sau, số nào KHÔNG PHẢI là số hữu tỉ?',
        formula: 'A = \\{-0,6;\\; 1\\frac{1}{3};\\; \\frac{5}{0};\\; 0\\}',
        options: [
          { id: 'b1-opt-1a', text: '-0,6', isCorrect: false },
          { id: 'b1-opt-1b', text: '1\\frac{1}{3}', isCorrect: false },
          { id: 'b1-opt-1c', text: '\\frac{5}{0}', isCorrect: true },
          { id: 'b1-opt-1d', text: '0', isCorrect: false }
        ],
        correctAnswerId: 'b1-opt-1c',
        progressiveHints: [
          'Nhớ lại định nghĩa số hữu tỉ là phân số a/b với a, b thuộc Z và b PHẢI KHÁC 0.',
          'Xem số nào có mẫu số bằng 0 thì số đó vi phạm điều kiện xác định.'
        ],
        explanation: 'Theo định nghĩa, số hữu tỉ có dạng a/b với b khác 0. Phân số 5/0 có mẫu bằng 0 nên không xác định, không phải số hữu tỉ.',
        competencyRef: 'lt-1-1',
        points: 10
      },
      {
        id: 'q-b1-2',
        tier: 'nhan_biet',
        question: 'Số đối của số hữu tỉ -4/7 là số nào?',
        formula: 'x = -\\frac{4}{7}',
        options: [
          { id: 'b1-opt-2a', text: '\\frac{4}{7}', isCorrect: true },
          { id: 'b1-opt-2b', text: '-\\frac{7}{4}', isCorrect: false },
          { id: 'b1-opt-2c', text: '\\frac{7}{4}', isCorrect: false },
          { id: 'b1-opt-2d', text: '-\\frac{4}{7}', isCorrect: false }
        ],
        correctAnswerId: 'b1-opt-2a',
        progressiveHints: [
          'Số đối của x là -x, tức là đổi dấu của số đó.',
          'Số đối của số âm sẽ là số dương có cùng giá trị tuyệt đối.'
        ],
        explanation: 'Số đối của -4/7 là -(-4/7) = 4/7 vì tổng (-4/7) + (4/7) = 0.',
        competencyRef: 'lt-1-2',
        points: 10
      },
      {
        id: 'q-b1-3',
        tier: 'thong_hieu',
        question: 'Khẳng định nào sau đây về vị trí của điểm -3/4 trên trục số là đúng?',
        formula: 'x = -\\frac{3}{4}',
        options: [
          { id: 'b1-opt-3a', text: 'Nằm bên trái điểm 0 và cách gốc 0 một khoảng bằng 3/4 đơn vị', isCorrect: true },
          { id: 'b1-opt-3b', text: 'Nằm bên phải điểm 0 và cách gốc 0 một khoảng bằng 3/4 đơn vị', isCorrect: false },
          { id: 'b1-opt-3c', text: 'Nằm bên trái điểm -1', isCorrect: false },
          { id: 'b1-opt-3d', text: 'Trùng với điểm biểu diễn phân số 3/4', isCorrect: false }
        ],
        correctAnswerId: 'b1-opt-3a',
        progressiveHints: [
          'Số âm luôn nằm về phía bên trái điểm gốc 0 trên trục số nằm ngang.',
          'Khoảng cách từ điểm x đến gốc 0 bằng giá trị tuyệt đối |x| = 3/4.'
        ],
        explanation: 'Vì -3/4 < 0 nên nó nằm bên trái điểm 0. Khoảng cách đến gốc 0 bằng |-3/4| = 3/4 đơn vị (nằm giữa 0 và -1).',
        competencyRef: 'lt-1-3',
        points: 10
      },
      {
        id: 'q-b1-4',
        tier: 'van_dung',
        question: 'So sánh hai số hữu tỉ x = -3/4 và y = -5/6, kết luận nào đúng?',
        formula: 'x = -\\frac{3}{4}; \\quad y = -\\frac{5}{6}',
        options: [
          { id: 'b1-opt-4a', text: 'x > y \\text{ (vì } -9/12 > -10/12)', isCorrect: true },
          { id: 'b1-opt-4b', text: 'x < y \\text{ (vì } 3/4 < 5/6)', isCorrect: false },
          { id: 'b1-opt-4c', text: 'x = y', isCorrect: false },
          { id: 'b1-opt-4d', text: 'Không so sánh được vì khác mẫu số', isCorrect: false }
        ],
        correctAnswerId: 'b1-opt-4a',
        progressiveHints: [
          'Quy đồng mẫu số chung dương của 4 và 6 là 12.',
          'So sánh hai tử số nguyên âm: tử số nào lớn hơn thì phân số đó lớn hơn.'
        ],
        explanation: 'Quy đồng mẫu số chung 12: x = -9/12, y = -10/12. Vì -9 > -10 nên -9/12 > -10/12, do đó x > y.',
        competencyRef: 'lt-1-4',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-b1-1',
        prompt: 'Bố hỏi con: "Hôm nay học số hữu tỉ, con thử đố bố xem số 0 và số -5 có phải số hữu tỉ không và tại sao?"',
        contextForParent: 'Kiểm tra con có hiểu mọi số nguyên đều là số hữu tỉ có mẫu bằng 1 hay không.',
        suggestedAnswerTip: 'Cả hai đều là số hữu tỉ! Vì 0 = 0/1 và -5 = -5/1 (viết được dạng a/b với b khác 0).',
        sampleChildResponse: 'Đều là số hữu tỉ bố ạ! Vì số nguyên nào cũng viết được thành phân số có mẫu số bằng 1!'
      },
      {
        id: 'dp-b1-2',
        prompt: 'Mẹ hỏi con: "Hai số đối nhau trên trục số có đặc điểm gì thú vị hả con?"',
        contextForParent: 'Khái niệm trục số: hai điểm đối xứng qua gốc 0 và tổng của chúng luôn bằng 0.',
        suggestedAnswerTip: 'Chúng nằm ở hai phía ngược nhau nhưng cách đều số 0, và cộng lại luôn bằng 0.',
        sampleChildResponse: 'Dạ hai số đó cách đều điểm 0 về hai phía mẹ ạ, ví dụ 3/4 và -3/4, cộng lại bằng 0!'
      },
      {
        id: 'dp-b1-3',
        prompt: 'Bố hỏi con: "Giữa -3/4 và -5/6 thì số nào lớn hơn con nhỉ, số âm có mẹo nhớ gì không?"',
        contextForParent: 'Bẫy số âm: số âm nhìn số càng to thì thực chất lại càng bé.',
        suggestedAnswerTip: '-3/4 = -9/12 lớn hơn -5/6 = -10/12 vì số -9 nằm bên phải số -10 trên trục số.',
        sampleChildResponse: 'Số -3/4 lớn hơn bố ơi! Vì quy đồng thành -9/12 và -10/12, số âm thì nợ ít hơn sẽ lớn hơn!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 2: CỘNG, TRỪ, NHÂN, CHIA SỐ HỮU TỈ
  // ==========================================================================
  {
    id: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 2,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    unit: 'Chương I: Số hữu tỉ',
    title: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    subtitle: 'Thực hiện 4 phép tính cơ bản và vận dụng tính chất phân phối để tính nhanh',
    status: 'in_progress',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-2-1',
        level: 'nhan_biet',
        code: 'KNTT-T02-01',
        description: 'Nhận biết được quy tắc cộng, trừ, nhân, chia số hữu tỉ và khái niệm số nghịch đảo.',
        mastered: true
      },
      {
        id: 'lt-2-2',
        level: 'thong_hieu',
        code: 'KNTT-T02-02',
        description: 'Thực hiện thành thạo phép cộng, trừ (quy đồng mẫu dương) và nhân, chia phân số.',
        mastered: true
      },
      {
        id: 'lt-2-3',
        level: 'van_dung',
        code: 'KNTT-T02-03',
        description: 'Vận dụng tính chất giao hoán, kết hợp, phân phối $a(b+c) = ab+ac$ để tính hợp lí.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c2-1',
        title: 'Cộng và trừ số hữu tỉ',
        summary: 'Muốn cộng hoặc trừ hai số hữu tỉ, ta viết chúng dưới dạng phân số có cùng một mẫu số dương rồi áp dụng quy tắc cộng, trừ phân số.',
        latexFormula: '\\frac{a}{m} + \\frac{b}{m} = \\frac{a+b}{m}; \\quad \\frac{a}{m} - \\frac{b}{m} = \\frac{a-b}{m} \\quad (m > 0)',
        exampleSnippet: '$-\\frac{2}{3} + \\frac{5}{6} = -\\frac{4}{6} + \\frac{5}{6} = \\frac{-4+5}{6} = \\frac{1}{6}.$',
        pitfallWarning: 'Nếu mẫu số có dấu âm, bắt buộc phải đưa dấu âm lên tử số trước khi tìm mẫu chung!',
        realLifeApplication: 'Tính toán tài chính cá nhân: chi tiêu $-\\frac{1}{4}$ số tiền lương, tiết kiệm $\\frac{1}{2}$ số tiền lương.'
      },
      {
        id: 'c2-2',
        title: 'Nhân, chia số hữu tỉ & Số nghịch đảo',
        summary: 'Tích của hai số hữu tỉ bằng tích các tử chia cho tích các mẫu. Phép chia thực hiện bằng cách nhân với số nghịch đảo của số chia.',
        latexFormula: '\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}; \\quad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} \\quad (c, d \\neq 0)',
        exampleSnippet: 'Số nghịch đảo của $-\\frac{3}{5}$ là $-\\frac{5}{3}$ vì $\\left(-\\frac{3}{5}\\right) \\cdot \\left(-\\frac{5}{3}\\right) = 1.$',
        pitfallWarning: 'Số nghịch đảo của số âm vẫn là số ÂM (giữ nguyên dấu, đảo vị trí tử và mẫu). Không được đổi dấu thành số dương!',
        realLifeApplication: 'Chia đều $2\\frac{1}{2}$ lít nước cam vào các chai nhỏ có dung tích $\\frac{1}{4}$ lít: $2,5 : 0,25 = 10$ chai.'
      },
      {
        id: 'c2-3',
        title: 'Tính chất tính nhanh và hợp lí',
        summary: 'Các phép toán trên Q thừa hưởng toàn bộ tính chất: giao hoán, kết hợp, nhân với số 1, và tính chất phân phối của phép nhân đối với phép cộng.',
        latexFormula: 'a \\cdot (b + c) = a \\cdot b + a \\cdot c; \\quad a \\cdot b + a \\cdot c = a \\cdot (b + c)',
        exampleSnippet: '$\\frac{3}{7} \\cdot \\frac{5}{11} + \\frac{3}{7} \\cdot \\frac{6}{11} = \\frac{3}{7} \\cdot \\left(\\frac{5}{11} + \\frac{6}{11}\\right) = \\frac{3}{7} \\cdot 1 = \\frac{3}{7}.$',
        pitfallWarning: 'Chú ý nhóm các hạng tử có cùng mẫu hoặc tổng/tích ra số tròn (0, 1) để tính nhanh.',
        realLifeApplication: 'Tính diện tích hai mảnh vườn liền kề có cùng chiều rộng bằng cách đặt chiều rộng làm thừa số chung.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-b2-1',
        tier: 'nhan_biet',
        question: 'Số nghịch đảo của phân số -2/7 là số nào?',
        formula: 'x = -\\frac{2}{7}',
        options: [
          { id: 'b2-opt-1a', text: '-\\frac{7}{2}', isCorrect: true },
          { id: 'b2-opt-1b', text: '\\frac{7}{2}', isCorrect: false },
          { id: 'b2-opt-1c', text: '\\frac{2}{7}', isCorrect: false },
          { id: 'b2-opt-1d', text: '-\\frac{2}{7}', isCorrect: false }
        ],
        correctAnswerId: 'b2-opt-1a',
        progressiveHints: [
          'Số nghịch đảo của phân số a/b là b/a (đảo vị trí tử và mẫu, giữ nguyên dấu).',
          'Tích của hai số nghịch đảo phải bằng +1.'
        ],
        explanation: 'Số nghịch đảo của -2/7 là -7/2 vì (-2/7) * (-7/2) = 1.',
        competencyRef: 'lt-2-1',
        points: 10
      },
      {
        id: 'q-b2-2',
        tier: 'nhan_biet',
        question: 'Kết quả của phép tính (-3/5) * (5/3) là bao nhiêu?',
        formula: 'P = \\left(-\\frac{3}{5}\\right) \\cdot \\frac{5}{3}',
        options: [
          { id: 'b2-opt-2a', text: '-1', isCorrect: true },
          { id: 'b2-opt-2b', text: '1', isCorrect: false },
          { id: 'b2-opt-2c', text: '-\\frac{9}{25}', isCorrect: false },
          { id: 'b2-opt-2d', text: '0', isCorrect: false }
        ],
        correctAnswerId: 'b2-opt-2a',
        progressiveHints: [
          'Nhân hai phân số: tử nhân tử, mẫu nhân mẫu hoặc rút gọn chéo trước.',
          'Chú ý dấu âm của phân số thứ nhất.'
        ],
        explanation: '(-3 * 5) / (5 * 3) = -15 / 15 = -1.',
        competencyRef: 'lt-2-1',
        points: 10
      },
      {
        id: 'q-b2-3',
        tier: 'thong_hieu',
        question: 'Tính giá trị của biểu thức: A = (-1/3) + (5/6) - (1/2)',
        formula: 'A = -\\frac{1}{3} + \\frac{5}{6} - \\frac{1}{2}',
        options: [
          { id: 'b2-opt-3a', text: '0', isCorrect: true },
          { id: 'b2-opt-3b', text: '\\frac{1}{6}', isCorrect: false },
          { id: 'b2-opt-3c', text: '-\\frac{1}{6}', isCorrect: false },
          { id: 'b2-opt-3d', text: '1', isCorrect: false }
        ],
        correctAnswerId: 'b2-opt-3a',
        progressiveHints: [
          'Mẫu số chung của 3, 6, 2 là 6.',
          'Quy đồng: -1/3 = -2/6; 1/2 = 3/6. Thực hiện: (-2 + 5 - 3)/6.'
        ],
        explanation: 'A = -2/6 + 5/6 - 3/6 = (-2 + 5 - 3)/6 = 0/6 = 0.',
        competencyRef: 'lt-2-2',
        points: 10
      },
      {
        id: 'q-b2-4',
        tier: 'van_dung',
        question: 'Tính nhanh giá trị biểu thức: B = (5/9) * (-3/7) + (5/9) * (-4/7)',
        formula: 'B = \\frac{5}{9} \\cdot \\left(-\\frac{3}{7}\\right) + \\frac{5}{9} \\cdot \\left(-\\frac{4}{7}\\right)',
        options: [
          { id: 'b2-opt-4a', text: '-\\frac{5}{9}', isCorrect: true },
          { id: 'b2-opt-4b', text: '\\frac{5}{9}', isCorrect: false },
          { id: 'b2-opt-4c', text: '-\\frac{35}{63}', isCorrect: false },
          { id: 'b2-opt-4d', text: '-1', isCorrect: false }
        ],
        correctAnswerId: 'b2-opt-4a',
        progressiveHints: [
          'Áp dụng tính chất phân phối: đặt thừa số chung 5/9 ra ngoài.',
          'Tính trong ngoặc: (-3/7) + (-4/7) = -7/7 = -1.'
        ],
        explanation: 'B = (5/9) * [(-3/7) + (-4/7)] = (5/9) * (-7/7) = (5/9) * (-1) = -5/9.',
        competencyRef: 'lt-2-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-b2-1',
        prompt: 'Bố hỏi con: "Số nghịch đảo của -2/3 là bao nhiêu con nhỉ? Có cần đổi dấu trừ thành cộng không?"',
        contextForParent: 'Giúp con phân biệt số đối (đổi dấu) với số nghịch đảo (đảo vị trí tử và mẫu, giữ nguyên dấu).',
        suggestedAnswerTip: 'Không đổi dấu! Số nghịch đảo là -3/2. Vì (-2/3) nhân với (-3/2) mới ra dương 1.',
        sampleChildResponse: 'Dạ không đổi dấu bố ạ! Số nghịch đảo là -3/2 vì nhân với nhau phải bằng 1 ạ!'
      },
      {
        id: 'dp-b2-2',
        prompt: 'Mẹ hỏi con: "Khi cộng hai phân số khác mẫu thì bước đầu tiên quan trọng nhất là gì?"',
        contextForParent: 'Nhắc con nhớ bước quy đồng mẫu số chung dương.',
        suggestedAnswerTip: 'Tìm mẫu số chung dương nhỏ nhất rồi nhân cả tử và mẫu với thừa số phụ tương ứng.',
        sampleChildResponse: 'Phải tìm mẫu số chung dương rồi quy đồng mẫu trước khi cộng tử với nhau mẹ ạ!'
      },
      {
        id: 'dp-b2-3',
        prompt: 'Bố hỏi con: "Gặp bài toán tính dài ngoằng có nhân và cộng, làm sao tính nhanh mà không cần bấm máy?"',
        contextForParent: 'Tính chất phân phối của phép nhân đối với phép cộng: rút thừa số chung.',
        suggestedAnswerTip: 'Tìm thừa số chung giống nhau đặt ra ngoài ngoặc, các số trong ngoặc cộng lại sẽ ra số rất đẹp (như 1 hoặc 0).',
        sampleChildResponse: 'Con áp dụng tính chất phân phối, đặt số giống nhau ra ngoài ngoặc để tính nhẩm siêu nhanh bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 3: LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN
  // ==========================================================================
  {
    id: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 3,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    unit: 'Chương I: Số hữu tỉ',
    title: 'Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ',
    subtitle: 'Quy tắc nhân chia hai lũy thừa cùng cơ số, lũy thừa của lũy thừa',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-3-1',
        level: 'nhan_biet',
        code: 'KNTT-T03-01',
        description: 'Biết khái niệm lũy thừa bậc n của số hữu tỉ x và quy ước $x^0 = 1 \\ (x \\neq 0), x^1 = x$.',
        mastered: false
      },
      {
        id: 'lt-3-2',
        level: 'thong_hieu',
        code: 'KNTT-T03-02',
        description: 'Hiểu và thực hiện nhân, chia hai lũy thừa cùng cơ số: $x^m \\cdot x^n = x^{m+n}; x^m : x^n = x^{m-n}$.',
        mastered: false
      },
      {
        id: 'lt-3-3',
        level: 'van_dung',
        code: 'KNTT-T03-03',
        description: 'Vận dụng lũy thừa của một lũy thừa $(x^m)^n = x^{m \\cdot n}$ và lũy thừa một tích, một thương.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c3-1',
        title: 'Định nghĩa lũy thừa bậc n',
        summary: 'Lũy thừa bậc n của số hữu tỉ x là tích của n thừa số bằng nhau, mỗi thừa số bằng x. Quy ước $x^0 = 1$ với mọi $x \\neq 0$.',
        latexFormula: 'x^n = \\underbrace{x \\cdot x \\dots x}_{n \\text{ thừa số}} \\quad (x \\in \\mathbb{Q}, n \\in \\mathbb{N}^*); \\quad x^0 = 1 \\ (x \\neq 0)',
        exampleSnippet: '$\\left(-\\frac{2}{3}\\right)^3 = \\left(-\\frac{2}{3}\\right) \\cdot \\left(-\\frac{2}{3}\\right) \\cdot \\left(-\\frac{2}{3}\\right) = -\\frac{8}{27}; \\quad (-5)^0 = 1.$',
        pitfallWarning: 'Cực kì lưu ý dấu ngoặc: $(-3)^2 = 9$ (dương vì bình phương cả dấu âm), nhưng $-3^2 = -(3^2) = -9$ (chỉ bình phương số 3)!',
        realLifeApplication: 'Sự tăng trưởng vi khuẩn: 1 tế bào phân đôi sau mỗi 20 phút. Sau 3 chu kỳ có $2^3 = 8$ tế bào.'
      },
      {
        id: 'c3-2',
        title: 'Quy tắc nhân, chia cùng cơ số & Lũy thừa tầng',
        summary: 'Khi nhân hai lũy thừa cùng cơ số thì giữ nguyên cơ số và cộng các số mũ. Khi chia thì trừ các số mũ. Lũy thừa của lũy thừa thì nhân các số mũ.',
        latexFormula: 'x^m \\cdot x^n = x^{m+n}; \\quad x^m : x^n = x^{m-n} \\ (x \\neq 0, m \\ge n); \\quad (x^m)^n = x^{m \\cdot n}',
        exampleSnippet: '$2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128; \\quad (0,5^2)^3 = 0,5^{2 \\cdot 3} = 0,5^6.$',
        pitfallWarning: 'Đừng nhầm $(x^m)^n$ với $x^m \\cdot x^n$. Lũy thừa tầng là phép NHÂN số mũ, không phải phép cộng!',
        realLifeApplication: 'Bộ nhớ máy tính đo bằng byte: $1\\text{ KB} = 2^{10}\\text{ bytes}$, $1\\text{ MB} = 2^{20}\\text{ bytes}$, $1\\text{ GB} = 2^{30}\\text{ bytes}$.'
      },
      {
        id: 'c3-3',
        title: 'Lũy thừa của một tích và một thương',
        summary: 'Lũy thừa của một tích bằng tích các lũy thừa. Lũy thừa của một thương bằng thương các lũy thừa.',
        latexFormula: '(x \\cdot y)^n = x^n \\cdot y^n; \\quad \\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n} \\quad (y \\neq 0)',
        exampleSnippet: '$(2 \\cdot 5)^3 = 2^3 \\cdot 5^3 = 8 \\cdot 125 = 1000; \\quad \\left(-\\frac{3}{4}\\right)^2 = \\frac{(-3)^2}{4^2} = \\frac{9}{16}.$',
        pitfallWarning: 'Không có công thức cho $(x + y)^n = x^n + y^n$. Phép cộng không được phân phối lũy thừa!',
        realLifeApplication: 'Tính thể tích khối lập phương kích thước gấp đôi: $V = (2a)^3 = 8a^3$ (thể tích tăng 8 lần).'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-b3-1',
        tier: 'nhan_biet',
        question: 'Giá trị của biểu thức (-2/3)^0 bằng bao nhiêu?',
        formula: 'x = \\left(-\\frac{2}{3}\\right)^0',
        options: [
          { id: 'b3-opt-1a', text: '1', isCorrect: true },
          { id: 'b3-opt-1b', text: '0', isCorrect: false },
          { id: 'b3-opt-1c', text: '-\\frac{2}{3}', isCorrect: false },
          { id: 'b3-opt-1d', text: '-1', isCorrect: false }
        ],
        correctAnswerId: 'b3-opt-1a',
        progressiveHints: [
          'Nhớ lại quy ước số mũ 0: mọi số hữu tỉ khác 0 mũ 0 đều bằng mấy?',
          'x^0 = 1 với mọi x khác 0.'
        ],
        explanation: 'Theo quy ước toán học, bất kì số hữu tỉ x nào khác 0 khi mang số mũ 0 đều có giá trị bằng 1.',
        competencyRef: 'lt-3-1',
        points: 10
      },
      {
        id: 'q-b3-2',
        tier: 'nhan_biet',
        question: 'Khẳng định nào sau đây là ĐÚNG khi nhân hai lũy thừa cùng cơ số?',
        formula: 'x^m \\cdot x^n = ?',
        options: [
          { id: 'b3-opt-2a', text: 'x^{m+n}', isCorrect: true },
          { id: 'b3-opt-2b', text: 'x^{m \\cdot n}', isCorrect: false },
          { id: 'b3-opt-2c', text: 'x^{m-n}', isCorrect: false },
          { id: 'b3-opt-2d', text: '(2x)^{m+n}', isCorrect: false }
        ],
        correctAnswerId: 'b3-opt-2a',
        progressiveHints: [
          'Nhân cùng cơ số: giữ nguyên cơ số, cộng các số mũ.',
          'Ví dụ: 2^2 * 2^3 = 4 * 8 = 32 = 2^5 = 2^(2+3).'
        ],
        explanation: 'Công thức nhân hai lũy thừa cùng cơ số là: x^m * x^n = x^(m + n).',
        competencyRef: 'lt-3-1',
        points: 10
      },
      {
        id: 'q-b3-3',
        tier: 'thong_hieu',
        question: 'Rút gọn biểu thức: C = (3^2)^4 : 3^5',
        formula: 'C = \\frac{(3^2)^4}{3^5}',
        options: [
          { id: 'b3-opt-3a', text: '3^3 = 27', isCorrect: true },
          { id: 'b3-opt-3b', text: '3^1 = 3', isCorrect: false },
          { id: 'b3-opt-3c', text: '3^{11}', isCorrect: false },
          { id: 'b3-opt-3d', text: '9', isCorrect: false }
        ],
        correctAnswerId: 'b3-opt-3a',
        progressiveHints: [
          'Bước 1: Tính lũy thừa tầng (3^2)^4 = 3^(2 * 4) = 3^8.',
          'Bước 2: Chia hai lũy thừa cùng cơ số: 3^8 : 3^5 = 3^(8 - 5).'
        ],
        explanation: '(3^2)^4 = 3^8. Tiếp tục: 3^8 : 3^5 = 3^(8 - 5) = 3^3 = 27.',
        competencyRef: 'lt-3-2',
        points: 10
      },
      {
        id: 'q-b3-4',
        tier: 'van_dung',
        question: 'Tìm số tự nhiên n thỏa mãn: (1/2)^n = 1/32',
        formula: '\\left(\\frac{1}{2}\\right)^n = \\frac{1}{32}',
        options: [
          { id: 'b3-opt-4a', text: 'n = 5', isCorrect: true },
          { id: 'b3-opt-4b', text: 'n = 4', isCorrect: false },
          { id: 'b3-opt-4c', text: 'n = 6', isCorrect: false },
          { id: 'b3-opt-4d', text: 'n = 16', isCorrect: false }
        ],
        correctAnswerId: 'b3-opt-4a',
        progressiveHints: [
          'Viết số 32 dưới dạng lũy thừa của cơ số 2.',
          '32 = 2^5, vậy 1/32 = (1/2)^5.'
        ],
        explanation: 'Ta có 32 = 2^5, suy ra 1/32 = 1/(2^5) = (1/2)^5. Do đó n = 5.',
        competencyRef: 'lt-3-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-b3-1',
        prompt: 'Mẹ hỏi con: "Số âm mà mang số mũ chẵn thì ra kết quả mang dấu gì, mũ lẻ thì ra dấu gì?"',
        contextForParent: 'Quy tắc vàng: Số âm mũ chẵn ra DƯƠNG, số âm mũ lẻ ra ÂM.',
        suggestedAnswerTip: 'Mũ chẵn ra số DƯƠNG (ví dụ (-2)^2 = +4). Mũ lẻ ra số ÂM (ví dụ (-2)^3 = -8).',
        sampleChildResponse: 'Dạ số âm mũ chẵn ra dương, mũ lẻ ra âm mẹ ạ! Vì mũ chẵn các cặp dấu trừ nhân nhau thành cộng!'
      },
      {
        id: 'dp-b3-2',
        prompt: 'Bố hỏi con: "Khi nhân hai lũy thừa cùng cơ số, ta nhân số mũ hay cộng số mũ với nhau?"',
        contextForParent: 'Nhắc con nhớ phân biệt nhân cơ số (cộng số mũ) với lũy thừa tầng (nhân số mũ).',
        suggestedAnswerTip: 'Nhân hai lũy thừa cùng cơ số thì CỘNG số mũ. Chỉ khi lũy thừa của lũy thừa mới NHÂN số mũ.',
        sampleChildResponse: 'Nhân cùng cơ số thì CỘNG số mũ bố ạ, ví dụ x^2 nhân x^3 bằng x^5!'
      },
      {
        id: 'dp-b3-3',
        prompt: 'Bố hỏi con: "Một con vi khuẩn cứ 20 phút phân đôi 1 lần, sau 1 tiếng sẽ có bao nhiêu con vi khuẩn?"',
        contextForParent: 'Ứng dụng lũy thừa trong thực tế sinh học.',
        suggestedAnswerTip: '1 tiếng có 3 lần 20 phút, vậy số vi khuẩn là 2^3 = 8 con.',
        sampleChildResponse: 'Dạ 1 tiếng có 3 lần phân đôi, nên có 2 mũ 3 bằng 8 con vi khuẩn bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 4: THỨ TỰ PHÉP TÍNH & QUY TẮC CHUYỂN VẾ
  // ==========================================================================
  {
    id: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 4,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    unit: 'Chương I: Số hữu tỉ',
    title: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
    subtitle: 'Nguyên tắc ngoặc tròn, vuông, nhọn và câu thần chú: Chuyển vế thì đổi dấu',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-4-1',
        level: 'nhan_biet',
        code: 'KNTT-T04-01',
        description: 'Nhận biết thứ tự thực hiện phép tính (lũy thừa -> nhân chia -> cộng trừ) và thứ tự ngoặc: ( ) -> [ ] -> { }.',
        mastered: false
      },
      {
        id: 'lt-4-2',
        level: 'thong_hieu',
        code: 'KNTT-T04-02',
        description: 'Hiểu và phát biểu chính xác quy tắc chuyển vế: khi chuyển một số hạng từ vế này sang vế kia phải đổi dấu số hạng đó.',
        mastered: false
      },
      {
        id: 'lt-4-3',
        level: 'van_dung',
        code: 'KNTT-T04-03',
        description: 'Tìm x thành thạo bằng cách kết hợp thứ tự thực hiện phép tính và quy tắc chuyển vế.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c4-1',
        title: 'Thứ tự thực hiện các phép tính',
        summary: 'Với biểu thức không có dấu ngoặc: Lũy thừa trước -> Nhân và chia -> Cộng và trừ. Với biểu thức có dấu ngoặc: Ngoặc tròn ( ) trước -> Ngoặc vuông [ ] -> Ngoặc nhọn { }.',
        latexFormula: '\\text{Thứ tự: } x^n \\longrightarrow (\\cdot, :) \\longrightarrow (+, -); \\qquad () \\longrightarrow [] \\longrightarrow \\{\\}',
        exampleSnippet: '$A = 50 - [30 - (6 - 2)^2] = 50 - [30 - 4^2] = 50 - [30 - 16] = 50 - 14 = 36.$',
        pitfallWarning: 'Nếu biểu thức chỉ có phép cộng/trừ hoặc chỉ có nhân/chia thì thực hiện lần lượt TỪ TRÁI SANG PHẢI, không được tự ý tính phép sau trước!',
        realLifeApplication: 'Lập trình máy tính hoặc bảng tính Excel luôn tuân thủ nghiêm ngặt quy tắc thứ tự thực hiện phép tính này.'
      },
      {
        id: 'c4-2',
        title: 'Quy tắc chuyển vế (Chuyển vế đổi dấu)',
        summary: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu cộng đổi thành dấu trừ, dấu trừ đổi thành dấu cộng.',
        latexFormula: 'A + B = C \\iff A = C - B; \\qquad A - B = C \\iff A = C + B',
        exampleSnippet: 'Tìm x: $x + \\frac{1}{3} = \\frac{4}{5} \\implies x = \\frac{4}{5} - \\frac{1}{3} = \\frac{12 - 5}{15} = \\frac{7}{15}.$',
        pitfallWarning: 'Bẫy kinh điển: Chuyển số hạng sang vế kia nhưng quên đổi dấu (giữ nguyên dấu cũ) dẫn đến sai toàn bài!',
        realLifeApplication: 'Cân đĩa thăng bằng: Lấy đi một vật 2 kg ở đĩa bên trái thì phải bớt đi 2 kg ở đĩa bên phải để cân vẫn thăng bằng.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-b4-1',
        tier: 'nhan_biet',
        question: 'Khi chuyển số hạng -3/4 từ vế trái sang vế phải của một đẳng thức, ta được:',
        formula: 'x - \\frac{3}{4} = \\frac{1}{2} \\implies x = ?',
        options: [
          { id: 'b4-opt-1a', text: '\\frac{1}{2} + \\frac{3}{4}', isCorrect: true },
          { id: 'b4-opt-1b', text: '\\frac{1}{2} - \\frac{3}{4}', isCorrect: false },
          { id: 'b4-opt-1c', text: '-\\frac{1}{2} + \\frac{3}{4}', isCorrect: false },
          { id: 'b4-opt-1d', text: '-\\frac{1}{2} - \\frac{3}{4}', isCorrect: false }
        ],
        correctAnswerId: 'b4-opt-1a',
        progressiveHints: [
          'Thần chú chuyển vế: Chuyển vế thì đổi dấu.',
          'Dấu trừ (-3/4) khi chuyển sang vế đối diện sẽ đổi thành dấu cộng (+3/4).'
        ],
        explanation: 'Theo quy tắc chuyển vế, khi chuyển số hạng -3/4 từ vế trái sang vế phải thì ta đổi dấu thành +3/4. Do đó x = 1/2 + 3/4.',
        competencyRef: 'lt-4-2',
        points: 10
      },
      {
        id: 'q-b4-2',
        tier: 'nhan_biet',
        question: 'Thứ tự ưu tiên đúng khi tính biểu thức có dấu ngoặc là gì?',
        formula: '\\text{Biểu thức chứa } ( ), [ ], \\{ \\}',
        options: [
          { id: 'b4-opt-2a', text: 'Ngoặc tròn ( ) trước -> Ngoặc vuông [ ] -> Ngoặc nhọn { }', isCorrect: true },
          { id: 'b4-opt-2b', text: 'Ngoặc nhọn { } trước -> Ngoặc vuông [ ] -> Ngoặc tròn ( )', isCorrect: false },
          { id: 'b4-opt-2c', text: 'Ngoặc vuông [ ] trước -> Ngoặc tròn ( ) -> Ngoặc nhọn { }', isCorrect: false },
          { id: 'b4-opt-2d', text: 'Thực hiện ngoặc nào trước cũng được', isCorrect: false }
        ],
        correctAnswerId: 'b4-opt-2a',
        progressiveHints: [
          'Luôn đi từ vòng trong ra vòng ngoài.',
          'Ngoặc tròn ( ) ở trong cùng nên làm đầu tiên.'
        ],
        explanation: 'Quy tắc thứ tự ngoặc: ưu tiên ngoặc tròn ( ) trước, sau đó đến ngoặc vuông [ ], và cuối cùng là ngoặc nhọn { }.',
        competencyRef: 'lt-4-1',
        points: 10
      },
      {
        id: 'q-b4-3',
        tier: 'thong_hieu',
        question: 'Tính giá trị của biểu thức: M = 20 - 2 * 3^2',
        formula: 'M = 20 - 2 \\cdot 3^2',
        options: [
          { id: 'b4-opt-3a', text: '2', isCorrect: true },
          { id: 'b4-opt-3b', text: '162', isCorrect: false },
          { id: 'b4-opt-3c', text: '324', isCorrect: false },
          { id: 'b4-opt-3d', text: '26', isCorrect: false }
        ],
        correctAnswerId: 'b4-opt-3a',
        progressiveHints: [
          'Thứ tự: Lũy thừa trước (3^2 = 9), sau đó đến nhân chia (2 * 9 = 18), cuối cùng là cộng trừ.',
          'Tuyệt đối không lấy 20 - 2 = 18 trước!'
        ],
        explanation: 'Tính lũy thừa trước: 3^2 = 9. Tiếp đến nhân: 2 * 9 = 18. Cuối cùng trừ: 20 - 18 = 2.',
        competencyRef: 'lt-4-1',
        points: 10
      },
      {
        id: 'q-b4-4',
        tier: 'van_dung',
        question: 'Tìm x biết: 2x - 1/3 = 1/2',
        formula: '2x - \\frac{1}{3} = \\frac{1}{2}',
        options: [
          { id: 'b4-opt-4a', text: 'x = \\frac{5}{12}', isCorrect: true },
          { id: 'b4-opt-4b', text: 'x = \\frac{5}{6}', isCorrect: false },
          { id: 'b4-opt-4c', text: 'x = \\frac{1}{12}', isCorrect: false },
          { id: 'b4-opt-4d', text: 'x = \\frac{1}{6}', isCorrect: false }
        ],
        correctAnswerId: 'b4-opt-4a',
        progressiveHints: [
          'Bước 1: Chuyển -1/3 sang vế phải đổi thành +1/3: 2x = 1/2 + 1/3.',
          'Bước 2: Quy đồng 1/2 + 1/3 = 5/6. Sau đó lấy 5/6 chia cho 2.'
        ],
        explanation: '2x = 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Suy ra x = (5/6) : 2 = (5/6) * (1/2) = 5/12.',
        competencyRef: 'lt-4-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-b4-1',
        prompt: 'Bố hỏi con: "Trong bài toán tìm x, câu thần chú nào giúp con không bao giờ chuyển vế bị sai?"',
        contextForParent: 'Khắc sâu quy tắc chuyển vế đổi dấu.',
        suggestedAnswerTip: 'Câu thần chú: "Chuyển vế thì đổi dấu" (cộng thành trừ, trừ thành cộng).',
        sampleChildResponse: 'Câu thần chú là "Chuyển vế thì đổi dấu" bố ạ! Cứ nhảy qua dấu bằng là phải đổi dấu ngay!'
      },
      {
        id: 'dp-b4-2',
        prompt: 'Mẹ hỏi con: "Trong biểu thức có cả nhân chia và cộng trừ thì cái nào làm trước?"',
        contextForParent: 'Quy tắc cơ bản: Nhân chia trước, cộng trừ sau.',
        suggestedAnswerTip: 'Nhân chia trước, cộng trừ sau. Nếu có lũy thừa thì lũy thừa phải làm đầu tiên.',
        sampleChildResponse: 'Lũy thừa đầu tiên, rồi nhân chia trước, cộng trừ sau mẹ ạ!'
      },
      {
        id: 'dp-b4-3',
        prompt: 'Bố hỏi con: "Tại sao khi chuyển số hạng từ vế này sang vế kia lại phải đổi dấu con nhỉ?"',
        contextForParent: 'Bản chất tương đương của đẳng thức toán học (cân đĩa).',
        suggestedAnswerTip: 'Vì ta thực hiện cùng cộng hoặc trừ hai vế cho cùng một số để giữ thăng bằng đẳng thức.',
        sampleChildResponse: 'Bởi vì giống như cân đĩa, ta bớt cả hai vế cùng một lượng thì chiếc cân mới giữ được thăng bằng bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 5: LUYỆN TẬP CHUNG CHƯƠNG I
  // ==========================================================================
  {
    id: 'luyen_tap_chung_chuong_1',
    order: 5,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    unit: 'Chương I: Số hữu tỉ',
    title: 'Luyện tập chung Chương I',
    subtitle: 'Rèn luyện kỹ năng kết hợp 4 phép tính, quy tắc lũy thừa và tìm ẩn số x',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-5-1',
        level: 'thong_hieu',
        code: 'KNTT-T05-01',
        description: 'Tổng hợp và kết hợp nhuần nhuyễn các phép tính số hữu tỉ với số thập phân, phân số, hỗn số.',
        mastered: false
      },
      {
        id: 'lt-5-2',
        level: 'van_dung',
        code: 'KNTT-T05-02',
        description: 'Vận dụng linh hoạt tính chất giao hoán, phân phối để rút gọn biểu thức phức tạp.',
        mastered: false
      },
      {
        id: 'lt-5-3',
        level: 'van_dung_cao',
        code: 'KNTT-T05-03',
        description: 'Giải các bài toán tìm x có chứa dấu giá trị tuyệt đối $|x|$ hoặc số mũ nguyên.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c5-1',
        title: 'Kỹ thuật đổi đồng nhất về phân số',
        summary: 'Khi một biểu thức vừa có số thập phân, hỗn số và phân số, cách an toàn nhất là chuyển đổi tất cả về phân số tối giản trước khi tính toán.',
        latexFormula: '1\\frac{1}{2} = \\frac{3}{2}; \\quad 0,75 = \\frac{3}{4}; \\quad -0,2 = -\\frac{1}{5}',
        exampleSnippet: '$0,75 - 1\\frac{1}{2} : \\frac{3}{4} = \\frac{3}{4} - \\frac{3}{2} \\cdot \\frac{4}{3} = \\frac{3}{4} - 2 = -\\frac{5}{4}.$',
        pitfallWarning: 'Tránh vội vàng bấm máy tính bỏ túi mà không viết các bước chuyển đổi trung gian, dễ mất điểm trình bày trong bài kiểm tra.',
        realLifeApplication: 'Đổi các đơn vị đo hỗn hợp: 1 giờ 15 phút = $1\\frac{1}{4}$ giờ = 1,25 giờ khi tính vận tốc chuyển động.'
      },
      {
        id: 'c5-2',
        title: 'Tìm x chứa lũy thừa hoặc tích bằng 0',
        summary: 'Dạng 1: $x^n = a^n$. Dạng 2: $A \\cdot B = 0 \\iff A = 0$ hoặc $B = 0$.',
        latexFormula: 'A \\cdot B = 0 \\iff \\left[ \\begin{matrix} A = 0 \\\\ B = 0 \\end{matrix} \\right.; \\qquad x^2 = a^2 \\iff x = a \\text{ hoặc } x = -a',
        exampleSnippet: '$(x - 1/2)(x + 3/4) = 0 \\implies x - 1/2 = 0 \\ (x = 1/2)$ hoặc $x + 3/4 = 0 \\ (x = -3/4).$',
        pitfallWarning: 'Với phương trình có lũy thừa bậc chẵn như $x^2 = 4$, luôn có HAI nghiệm đối nhau ($x = 2$ hoặc $x = -2$). Đừng bỏ quên nghiệm âm!',
        realLifeApplication: 'Bài toán quỹ đạo parabol trong vật lý hoặc tính độ dài cạnh hình vuông biết diện tích.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-b5-1',
        tier: 'nhan_biet',
        question: 'Dạng phân số tối giản của hỗn số 2 3/4 là gì?',
        formula: '2\\frac{3}{4} = ?',
        options: [
          { id: 'b5-opt-1a', text: '\\frac{11}{4}', isCorrect: true },
          { id: 'b5-opt-1b', text: '\\frac{6}{4}', isCorrect: false },
          { id: 'b5-opt-1c', text: '\\frac{9}{4}', isCorrect: false },
          { id: 'b5-opt-1d', text: '\\frac{8}{3}', isCorrect: false }
        ],
        correctAnswerId: 'b5-opt-1a',
        progressiveHints: [
          'Đổi hỗn số ra phân số: Lấy phần nguyên nhân mẫu số rồi cộng với tử số.',
          'Tử số = 2 * 4 + 3 = 11. Mẫu số giữ nguyên là 4.'
        ],
        explanation: '2 3/4 = (2 * 4 + 3) / 4 = 11/4.',
        competencyRef: 'lt-5-1',
        points: 10
      },
      {
        id: 'q-b5-2',
        tier: 'nhan_biet',
        question: 'Nếu tích A * B = 0 thì kết luận nào sau đây là chính xác nhất?',
        formula: 'A \\cdot B = 0',
        options: [
          { id: 'b5-opt-2a', text: 'A = 0 hoặc B = 0', isCorrect: true },
          { id: 'b5-opt-2b', text: 'Cả A và B đều bắt buộc phải bằng 0', isCorrect: false },
          { id: 'b5-opt-2c', text: 'Chỉ cần A = 0, B không được bằng 0', isCorrect: false },
          { id: 'b5-opt-2d', text: 'A = -B', isCorrect: false }
        ],
        correctAnswerId: 'b5-opt-2a',
        progressiveHints: [
          'Một tích bằng 0 khi có ít nhất một thừa số bằng 0.',
          'Chỉ cần A = 0 HOẶC B = 0 là tích đã bằng 0.'
        ],
        explanation: 'Quy tắc tích bằng 0: A * B = 0 khi và chỉ khi A = 0 hoặc B = 0.',
        competencyRef: 'lt-5-1',
        points: 10
      },
      {
        id: 'q-b5-3',
        tier: 'thong_hieu',
        question: 'Giá trị của biểu thức P = 0,5 + 2/3 - 1/6 bằng bao nhiêu?',
        formula: 'P = 0,5 + \\frac{2}{3} - \\frac{1}{6}',
        options: [
          { id: 'b5-opt-3a', text: '1', isCorrect: true },
          { id: 'b5-opt-3b', text: '\\frac{5}{6}', isCorrect: false },
          { id: 'b5-opt-3c', text: '\\frac{7}{6}', isCorrect: false },
          { id: 'b5-opt-3d', text: '0', isCorrect: false }
        ],
        correctAnswerId: 'b5-opt-3a',
        progressiveHints: [
          'Đổi 0,5 thành phân số 1/2.',
          'Quy đồng mẫu số chung 6: 1/2 = 3/6, 2/3 = 4/6. Thực hiện (3 + 4 - 1)/6.'
        ],
        explanation: '0,5 = 1/2 = 3/6. Biểu thức P = 3/6 + 4/6 - 1/6 = 6/6 = 1.',
        competencyRef: 'lt-5-1',
        points: 10
      },
      {
        id: 'q-b5-4',
        tier: 'van_dung',
        question: 'Tìm tất cả các giá trị của x thỏa mãn: (x - 1/2)^2 = 1/4',
        formula: '\\left(x - \\frac{1}{2}\\right)^2 = \\frac{1}{4}',
        options: [
          { id: 'b5-opt-4a', text: 'x = 1 \\text{ hoặc } x = 0', isCorrect: true },
          { id: 'b5-opt-4b', text: 'Chỉ có x = 1', isCorrect: false },
          { id: 'b5-opt-4c', text: 'Chỉ có x = 0', isCorrect: false },
          { id: 'b5-opt-4d', text: 'x = 1/2 \\text{ hoặc } x = -1/2', isCorrect: false }
        ],
        correctAnswerId: 'b5-opt-4a',
        progressiveHints: [
          'Số nào bình phương lên bằng 1/4? Có hai số: 1/2 và -1/2.',
          'Trường hợp 1: x - 1/2 = 1/2 -> x = 1. Trường hợp 2: x - 1/2 = -1/2 -> x = 0.'
        ],
        explanation: '(x - 1/2)^2 = (1/2)^2. Suy ra x - 1/2 = 1/2 => x = 1, hoặc x - 1/2 = -1/2 => x = 0. Có 2 nghiệm x = 1 hoặc x = 0.',
        competencyRef: 'lt-5-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-b5-1',
        prompt: 'Mẹ hỏi con: "Khi giải bài tìm x có x bình phương = 9, tại sao lại có tới 2 đáp số hả con?"',
        contextForParent: 'Lũy thừa bậc chẵn nhận cả nghiệm dương và nghiệm âm đối xứng.',
        suggestedAnswerTip: 'Vì cả (+3)^2 và (-3)^2 đều bằng 9, nên x có thể bằng +3 hoặc -3.',
        sampleChildResponse: 'Vì cả 3 nhân 3 và -3 nhân -3 đều bằng 9 mẹ ạ, nên số mũ chẵn luôn có 2 nghiệm đối nhau!'
      },
      {
        id: 'dp-b5-2',
        prompt: 'Bố hỏi con: "Khi bài thi có cả số thập phân 0,25 với hỗn số 1 1/2 thì con làm thế nào để không bị rối?"',
        contextForParent: 'Quy tắc thống nhất: chuyển tất cả về phân số tối giản trước.',
        suggestedAnswerTip: 'Đổi hết về phân số: 0,25 = 1/4, 1 1/2 = 3/2 rồi quy đồng tính toán bình thường.',
        sampleChildResponse: 'Con đổi hết về phân số tối giản rồi mới tính bố ạ, như vậy sẽ không bao giờ bị nhầm lẫn!'
      },
      {
        id: 'dp-b5-3',
        prompt: 'Bố hỏi con: "Nếu tích hai số bằng 0, có bắt buộc cả hai số phải cùng bằng 0 không?"',
        contextForParent: 'Quy tắc phép nhân: chỉ cần ít nhất một thừa số bằng 0.',
        suggestedAnswerTip: 'Không bắt buộc! Chỉ cần 1 trong 2 số bằng 0 là tích đã bằng 0 rồi.',
        sampleChildResponse: 'Dạ không cần bố ạ, chỉ cần một trong hai số bằng 0 là được ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 6: BÀI TẬP CUỐI CHƯƠNG I
  // ==========================================================================
  {
    id: 'bai_tap_cuoi_chuong_1',
    order: 6,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    unit: 'Chương I: Số hữu tỉ',
    title: 'Bài tập cuối chương I',
    subtitle: 'Đánh giá năng lực toàn diện chương Số hữu tỉ chuẩn CV 5512',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-6-1',
        level: 'nhan_biet',
        code: 'KNTT-T06-01',
        description: 'Hệ thống hóa toàn bộ định nghĩa, tính chất, quy tắc tính toán trên tập hợp số hữu tỉ Q.',
        mastered: false
      },
      {
        id: 'lt-6-2',
        level: 'thong_hieu',
        code: 'KNTT-T06-02',
        description: 'Giải thích và nhận diện các lỗi sai thường gặp khi làm bài thi giữa kì môn Toán 7.',
        mastered: false
      },
      {
        id: 'lt-6-3',
        level: 'van_dung_cao',
        code: 'KNTT-T06-03',
        description: 'Giải các bài toán thực tế tổng hợp liên quan đến tỷ lệ phần trăm, tài chính, hình học đơn giản.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c6-1',
        title: 'Bản đồ tư duy toàn bộ Chương I',
        summary: 'Tập Q gồm số nguyên và phân số. 4 phép tính cơ bản kèm quy tắc dấu ngoặc và chuyển vế. Lũy thừa số mũ tự nhiên với 5 công thức vàng.',
        latexFormula: '\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}; \\quad x + (-x) = 0; \\quad x \\cdot \\frac{1}{x} = 1 \\ (x \\neq 0)',
        exampleSnippet: 'Tóm tắt 5 công thức lũy thừa:\n1) $x^m \\cdot x^n = x^{m+n}$\n2) $x^m : x^n = x^{m-n}$\n3) $(x^m)^n = x^{m \\cdot n}$\n4) $(xy)^n = x^n y^n$\n5) $(x/y)^n = x^n/y^n$',
        pitfallWarning: '3 bẫy mất điểm lớn nhất: 1) Quên đổi dấu khi chuyển vế; 2) Nhầm số đối với số nghịch đảo; 3) Quên nghiệm âm của số mũ chẵn.',
        realLifeApplication: 'Ứng dụng trong hạch toán thu chi gia đình, tính lãi suất gửi tiết kiệm ngân hàng theo kì hạn.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-b6-1',
        tier: 'nhan_biet',
        question: 'Quan hệ bao hàm nào sau đây giữa các tập hợp số là đúng?',
        formula: '\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}',
        options: [
          { id: 'b6-opt-1a', text: '\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}', isCorrect: true },
          { id: 'b6-opt-1b', text: '\\mathbb{Q} \\subset \\mathbb{Z} \\subset \\mathbb{N}', isCorrect: false },
          { id: 'b6-opt-1c', text: '\\mathbb{Z} \\subset \\mathbb{N} \\subset \\mathbb{Q}', isCorrect: false },
          { id: 'b6-opt-1d', text: '\\mathbb{N} = \\mathbb{Z} = \\mathbb{Q}', isCorrect: false }
        ],
        correctAnswerId: 'b6-opt-1a',
        progressiveHints: [
          'N là số tự nhiên (0, 1, 2...), Z là số nguyên (...-1, 0, 1...), Q là số hữu tỉ.',
          'Mỗi số tự nhiên đều là số nguyên, mỗi số nguyên đều là số hữu tỉ.'
        ],
        explanation: 'Mọi số tự nhiên đều là số nguyên, mọi số nguyên đều là số hữu tỉ: N con của Z, Z con của Q.',
        competencyRef: 'lt-6-1',
        points: 10
      },
      {
        id: 'q-b6-2',
        tier: 'nhan_biet',
        question: 'Trong các số sau, số nào là số đối của số hữu tỉ 3/5?',
        formula: 'x = \\frac{3}{5}',
        options: [
          { id: 'b6-opt-2a', text: '-\\frac{3}{5}', isCorrect: true },
          { id: 'b6-opt-2b', text: '\\frac{5}{3}', isCorrect: false },
          { id: 'b6-opt-2c', text: '-\\frac{5}{3}', isCorrect: false },
          { id: 'b6-opt-2d', text: '1', isCorrect: false }
        ],
        correctAnswerId: 'b6-opt-2a',
        progressiveHints: [
          'Số đối là số đổi dấu (cộng thành trừ).',
          'Số đối của a/b là -a/b.'
        ],
        explanation: 'Số đối của 3/5 là -3/5 vì 3/5 + (-3/5) = 0.',
        competencyRef: 'lt-6-1',
        points: 10
      },
      {
        id: 'q-b6-3',
        tier: 'thong_hieu',
        question: 'Tính giá trị biểu thức: T = (1/2)^3 * 4 + 3/4',
        formula: 'T = \\left(\\frac{1}{2}\\right)^3 \\cdot 4 + \\frac{3}{4}',
        options: [
          { id: 'b6-opt-3a', text: '\\frac{5}{4}', isCorrect: true },
          { id: 'b6-opt-3b', text: '1', isCorrect: false },
          { id: 'b6-opt-3c', text: '\\frac{7}{4}', isCorrect: false },
          { id: 'b6-opt-3d', text: '\\frac{1}{2}', isCorrect: false }
        ],
        correctAnswerId: 'b6-opt-3a',
        progressiveHints: [
          '(1/2)^3 = 1/8.',
          'Nhân: (1/8) * 4 = 4/8 = 1/2. Cộng: 1/2 + 3/4 = 2/4 + 3/4.'
        ],
        explanation: 'T = (1/8) * 4 + 3/4 = 1/2 + 3/4 = 2/4 + 3/4 = 5/4.',
        competencyRef: 'lt-6-2',
        points: 10
      },
      {
        id: 'q-b6-4',
        tier: 'van_dung',
        question: 'Một cửa hàng giảm giá 20% cho một món đồ có giá niêm yết 500.000 đồng. Khách hàng có thẻ thành viên được giảm thêm 10% trên giá đã giảm. Hỏi số tiền khách phải trả là bao nhiêu?',
        formula: '\\text{Giá cuối} = 500.000 \\cdot (1 - 0,2) \\cdot (1 - 0,1)',
        options: [
          { id: 'b6-opt-4a', text: '360.000 đồng', isCorrect: true },
          { id: 'b6-opt-4b', text: '350.000 đồng', isCorrect: false },
          { id: 'b6-opt-4c', text: '400.000 đồng', isCorrect: false },
          { id: 'b6-opt-4d', text: '380.000 đồng', isCorrect: false }
        ],
        correctAnswerId: 'b6-opt-4a',
        progressiveHints: [
          'Bước 1: Sau khi giảm 20%, giá còn lại là: 500.000 * 0,8 = 400.000 đồng.',
          'Bước 2: Giảm tiếp 10% trên 400.000 đồng: 400.000 * 0,9.'
        ],
        explanation: 'Giá sau lần giảm 1: 500.000 * (1 - 0,2) = 400.000đ. Giá sau lần giảm 2: 400.000 * (1 - 0,1) = 360.000đ.',
        competencyRef: 'lt-6-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-b6-1',
        prompt: 'Bố hỏi con: "Kết thúc Chương 1, con thấy kiến thức nào dễ bị lừa và mất điểm nhất trong bài thi?"',
        contextForParent: 'Khuyến khích con tự đánh giá điểm yếu và rút kinh nghiệm kiểm tra.',
        suggestedAnswerTip: 'Quy tắc chuyển vế quên đổi dấu, nhầm số đối với nghịch đảo, hoặc quên nghiệm âm khi giải x^2.',
        sampleChildResponse: 'Dạ là quy tắc chuyển vế hay quên đổi dấu và số âm khi mang số mũ chẵn hay bị tính nhầm dấu bố ạ!'
      },
      {
        id: 'dp-b6-2',
        prompt: 'Mẹ hỏi con: "Số tự nhiên N, số nguyên Z và số hữu tỉ Q, cái nào to nhất và chứa cái nào?"',
        contextForParent: 'Kiểm tra sơ đồ bao hàm tập hợp số.',
        suggestedAnswerTip: 'Tập Q lớn nhất, chứa Z; tập Z chứa tập N (N con của Z, Z con của Q).',
        sampleChildResponse: 'Tập số hữu tỉ Q to nhất mẹ ạ, nó chứa cả số nguyên Z và số tự nhiên N!'
      },
      {
        id: 'dp-b6-3',
        prompt: 'Bố hỏi con: "Nếu một món hàng giảm giá 20% rồi lại giảm tiếp 10%, có phải là giảm tổng cộng 30% không?"',
        contextForParent: 'Bẫy toán học thực tế phổ biến trong cuộc sống và mua sắm.',
        suggestedAnswerTip: 'Không phải! Giảm 10% lần sau là tính trên giá ĐÃ GIẢM, nên chỉ giảm tổng cộng 28% thôi.',
        sampleChildResponse: 'Dạ không phải giảm 30% đâu bố! Lần 2 giảm trên giá đã bớt rồi nên chỉ được giảm 28% thôi bố ạ!'
      }
    ]
  }
];
