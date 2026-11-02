import { Math7Lesson } from '../types/curriculum';

export const math7Chapter1Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 1: TẬP HỢP CÁC SỐ HỮU TỈ (FULL DETAILS)
  // ==========================================================================
  {
    id: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 1,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    title: 'Bài 1: Tập hợp các số hữu tỉ',
    subtitle: 'Mở rộng từ phân số và số nguyên sang tập hợp số hữu tỉ Q',
    status: 'completed',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-1',
        level: 'nhan_biet',
        code: 'KNTT-T01-01',
        description: 'Nhận biết được số hữu tỉ là số viết được dưới dạng phân số $x = \\frac{a}{b} \\ (a, b \\in \\mathbb{Z}, b \\neq 0)$.',
        mastered: true
      },
      {
        id: 'lt-2',
        level: 'thong_hieu',
        code: 'KNTT-T01-02',
        description: 'Biểu diễn và xác định được vị trí của số hữu tỉ trên trục số thực.',
        mastered: true
      },
      {
        id: 'lt-3',
        level: 'thong_hieu',
        code: 'KNTT-T01-03',
        description: 'Biết xác định và biểu diễn số đối của một số hữu tỉ: $-(-\\frac{a}{b}) = \\frac{a}{b}$.',
        mastered: true
      },
      {
        id: 'lt-4',
        level: 'van_dung',
        code: 'KNTT-T01-04',
        description: 'So sánh được hai số hữu tỉ bất kỳ (đặc biệt là phân số âm) và sắp xếp thứ tự.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'concept-1',
        title: 'Định nghĩa số hữu tỉ',
        summary: 'Số hữu tỉ là số có thể viết được dưới dạng phân số $\\frac{a}{b}$, trong đó $a, b \\in \\mathbb{Z}$ và $b \\neq 0$. Tập hợp các số hữu tỉ được kí hiệu là $\\mathbb{Q}$.',
        latexFormula: '\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\;\\middle|\\; a, b \\in \\mathbb{Z},\\; b \\neq 0 \\right\\}',
        exampleSnippet: 'Các ví dụ cụ thể:\n- Số tự nhiên: $5 = \\frac{5}{1} \\in \\mathbb{Q}$\n- Số nguyên âm: $-3 = \\frac{-3}{1} \\in \\mathbb{Q}$\n- Số thập phân hữu hạn: $-0,6 = \\frac{-6}{10} = \\frac{-3}{5} \\in \\mathbb{Q}$\n- Hỗn số: $1\\frac{1}{3} = \\frac{4}{3} \\in \\mathbb{Q}$\n- Số 0: $0 = \\frac{0}{1} \\in \\mathbb{Q}$',
        pitfallWarning: 'Cảnh báo bẫy thi: Mẫu số b bắt buộc phải khác 0 ($b \\neq 0$). Số có mẫu số bằng 0 như $\\frac{5}{0}$ là KHÔNG XÁC ĐỊNH và KHÔNG PHẢI số hữu tỉ!',
        realLifeApplication: 'Khi chia đều 4 chiếc bánh cho 3 bạn, mỗi bạn nhận được $\\frac{4}{3}$ chiếc bánh. Đó chính là một số hữu tỉ trong thực tế.'
      },
      {
        id: 'concept-2',
        title: 'Biểu diễn số hữu tỉ trên trục số',
        summary: 'Mỗi số hữu tỉ được biểu diễn bởi một điểm trên trục số nằm ngang. Điểm biểu diễn số hữu tỉ $x$ gọi là điểm $x$. Chiều từ trái sang phải là chiều dương. Các số hữu tỉ âm nằm về bên trái điểm 0, các số hữu tỉ dương nằm về bên phải điểm 0.',
        latexFormula: 'x < 0 \\implies x \\text{ nằm bên trái điểm } 0; \\quad x > 0 \\implies x \\text{ nằm bên phải điểm } 0',
        exampleSnippet: 'Để biểu diễn phân số $-\\frac{3}{4}$, ta chia đoạn đơn vị từ 0 đến -1 thành 4 phần bằng nhau, lấy 3 phần về bên trái điểm 0.',
        pitfallWarning: 'Khi phân số có mẫu âm như $\\frac{3}{-4}$, em cần đổi dấu thành $\\frac{-3}{4}$ trước khi biểu diễn trên trục số để không nhầm chiều!',
        realLifeApplication: 'Mực nước biển quy ước là mốc 0. Đỉnh núi cao $+1.200$ m nằm phía trên (dương), rãnh biển sâu $-800$ m nằm phía dưới (âm).'
      },
      {
        id: 'concept-3',
        title: 'Số đối của một số hữu tỉ',
        summary: 'Hai số hữu tỉ có điểm biểu diễn cách đều gốc 0 và nằm về hai phía khác nhau trên trục số gọi là hai số đối nhau. Số đối của số hữu tỉ $x$ được kí hiệu là $-x$.',
        latexFormula: '-(-x) = x; \\quad x + (-x) = 0; \\quad -\\left(-\\frac{a}{b}\\right) = \\frac{a}{b}',
        exampleSnippet: 'Số đối của $\\frac{3}{4}$ là $-\\frac{3}{4}$. Số đối của $-1,25$ là $1,25$. Số đối của 0 chính là 0.',
        pitfallWarning: 'Đừng nhầm lẫn giữa "số đối" (tổng bằng 0, đổi dấu) với "số nghịch đảo" (tích bằng 1, đảo ngược tử và mẫu)!',
        realLifeApplication: 'Giao dịch ngân hàng: Tiền nạp vào tài khoản là $+500.000$đ, tiền rút ra là $-500.000$đ. Đây là cặp số đối nhau hoàn hảo.'
      }
    ],
    numberLinePoints: [
      {
        id: 'p-neg-2',
        label: '-2',
        value: -2,
        displayFraction: '-2',
        type: 'integer',
        isOppositeOf: 'p-pos-2',
        description: 'Số nguyên âm -2 (nằm cách gốc 0 hai đơn vị về bên trái)'
      },
      {
        id: 'p-neg-3-4',
        label: '-3/4',
        value: -0.75,
        displayFraction: '-\\frac{3}{4}',
        type: 'fraction',
        isOppositeOf: 'p-pos-3-4',
        description: 'Phân số âm -3/4 = -0,75 (nằm giữa 0 và -1)'
      },
      {
        id: 'p-neg-0-6',
        label: '-0.6',
        value: -0.6,
        displayFraction: '-0,6 = -\\frac{3}{5}',
        type: 'decimal',
        description: 'Số thập phân âm -0,6 (bằng phân số -3/5)'
      },
      {
        id: 'p-zero',
        label: '0',
        value: 0,
        displayFraction: '0',
        type: 'integer',
        description: 'Gốc tọa độ 0 (ranh giới giữa số âm và số dương)'
      },
      {
        id: 'p-pos-1-2',
        label: '1/2',
        value: 0.5,
        displayFraction: '\\frac{1}{2}',
        type: 'fraction',
        description: 'Phân số dương 1/2 = 0,5 (chính giữa 0 và 1)'
      },
      {
        id: 'p-pos-3-4',
        label: '3/4',
        value: 0.75,
        displayFraction: '\\frac{3}{4}',
        type: 'fraction',
        isOppositeOf: 'p-neg-3-4',
        description: 'Số đối của -3/4, cách đều gốc 0 về bên phải'
      },
      {
        id: 'p-pos-4-3',
        label: '1 1/3',
        value: 1.333,
        displayFraction: '1\\frac{1}{3} = \\frac{4}{3}',
        type: 'fraction',
        description: 'Hỗn số dương 1 1/3 (xấp xỉ 1,33)'
      },
      {
        id: 'p-pos-2',
        label: '+2',
        value: 2,
        displayFraction: '+2',
        type: 'integer',
        isOppositeOf: 'p-neg-2',
        description: 'Số nguyên dương +2 (số đối của -2)'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q1-nb',
        tier: 'nhan_biet',
        question: 'Trong các số sau đây, số nào KHÔNG PHẢI là số hữu tỉ?',
        formula: '',
        options: [
          { id: 'opt-1a', text: '-0,6', isCorrect: false },
          { id: 'opt-1b', text: '1\\frac{1}{3}', isCorrect: false },
          { id: 'opt-1c', text: '\\frac{5}{0}', isCorrect: true },
          { id: 'opt-1d', text: '0', isCorrect: false }
        ],
        correctAnswerId: 'opt-1c',
        progressiveHints: [
          'Gợi ý 1: Hãy nhớ lại định nghĩa số hữu tỉ là phân số a/b với a, b thuộc Z. Điều kiện của mẫu số b là gì?',
          'Gợi ý 2: Trong toán học, phép chia cho số 0 có bao giờ được phép thực hiện không?',
          'Gợi ý 3: Mẫu số b bắt buộc phải KHÁC 0. Phân số có mẫu bằng 0 thì không xác định!'
        ],
        explanation: 'Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}$ và $b \\neq 0$. Số $\\frac{5}{0}$ có mẫu số bằng 0 (vi phạm điều kiện mẫu khác 0) nên không xác định và KHÔNG PHẢI là số hữu tỉ.',
        competencyRef: 'lt-1',
        points: 10
      },
      {
        id: 'q2-th',
        tier: 'thong_hieu',
        question: 'Điểm biểu diễn phân số -3/4 trên trục số nằm ở vị trí nào và số đối của nó là bao nhiêu?',
        formula: 'x = -\\frac{3}{4}',
        options: [
          { id: 'opt-2a', text: 'Nằm bên trái điểm 0, số đối là 3/4', isCorrect: true },
          { id: 'opt-2b', text: 'Nằm bên phải điểm 0, số đối là -3/4', isCorrect: false },
          { id: 'opt-2c', text: 'Nằm bên trái điểm 0, số đối là -4/3', isCorrect: false },
          { id: 'opt-2d', text: 'Nằm bên phải điểm 0, số đối là 4/3', isCorrect: false }
        ],
        correctAnswerId: 'opt-2a',
        progressiveHints: [
          'Gợi ý 1: Phân số mang dấu trừ (-) là số âm hay số dương? Số âm nằm ở bên nào của số 0 trên trục số?',
          'Gợi ý 2: Số đối của một số x là số -x (chỉ cần đổi dấu, không đảo ngược vị trí tử và mẫu).',
          'Gợi ý 3: -3/4 mang dấu âm nên nằm bên trái điểm 0. Đổi dấu âm thành dương, ta được số đối là 3/4.'
        ],
        explanation: 'Vì $-\\frac{3}{4} < 0$ nên điểm biểu diễn nằm về bên trái điểm gốc 0. Số đối của $-\\frac{3}{4}$ là $-\\left(-\\frac{3}{4}\\right) = \\frac{3}{4}$.',
        competencyRef: 'lt-2',
        points: 10
      },
      {
        id: 'q3-vd',
        tier: 'van_dung',
        question: 'So sánh hai số hữu tỉ âm: x = -3/4 và y = -5/6. Kết luận nào sau đây là ĐÚNG?',
        formula: 'x = -\\frac{3}{4}, \\quad y = -\\frac{5}{6}',
        options: [
          { id: 'opt-3a', text: 'x > y (vì -9/12 > -10/12)', isCorrect: true },
          { id: 'opt-3b', text: 'x < y (vì 3/4 < 5/6)', isCorrect: false },
          { id: 'opt-3c', text: 'x = y', isCorrect: false },
          { id: 'opt-3d', text: 'Không thể so sánh được vì hai phân số khác mẫu', isCorrect: false }
        ],
        correctAnswerId: 'opt-3a',
        progressiveHints: [
          'Gợi ý 1: Để so sánh hai phân số khác mẫu, bước đầu tiên hãy quy đồng mẫu số chung dương (ví dụ mẫu chung 12).',
          'Gợi ý 2: Khi quy đồng: x = -9/12 và y = -10/12. Giờ hãy so sánh hai tử số nguyên âm: -9 và -10.',
          'Gợi ý 3: Với số nguyên âm, -9 lớn hơn -10 (-9 > -10)! Do đó phân số có tử -9 sẽ lớn hơn phân số có tử -10.'
        ],
        explanation: 'Quy đồng mẫu số chung dương 12:\n$$x = -\\frac{3}{4} = \\frac{-9}{12}; \\quad y = -\\frac{5}{6} = \\frac{-10}{12}$$\nVì $-9 > -10$ nên $\\frac{-9}{12} > \\frac{-10}{12}$, nghĩa là $x > y$. Điểm $x$ nằm ở bên phải điểm $y$ trên trục số.',
        competencyRef: 'lt-4',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-1',
        prompt: 'Mẹ hỏi con: "Hôm nay con học số hữu tỉ, thế số 0 có phải là số hữu tỉ không con? Vì sao?"',
        contextForParent: 'Câu hỏi nhẹ nhàng để kiểm tra định nghĩa cốt lõi mà không cần giấy bút hay kiến thức toán phức tạp.',
        suggestedAnswerTip: 'Có, vì số 0 viết được thành phân số 0/1 (hoặc 0/2, 0/5...). Mẫu số là 1 khác 0 nên hoàn toàn hợp lệ!',
        sampleChildResponse: 'Dạ có mẹ ơi! Số 0 là số hữu tỉ vì viết được thành 0/1 mẹ ạ, miễn là mẫu số khác 0 là được!'
      },
      {
        id: 'dp-2',
        prompt: 'Bố hỏi con: "Một phân số như -3/4 biểu diễn trên trục số nằm bên trái hay bên phải số 0 hả con?"',
        contextForParent: 'Giúp con củng cố phản xạ không gian trực quan về trục số: số âm bên trái, số dương bên phải.',
        suggestedAnswerTip: 'Nằm bên trái số 0. Và số đối của nó là +3/4 nằm cách đều về bên phải.',
        sampleChildResponse: 'Dạ nằm bên trái điểm 0 bố ạ, vì nó mang dấu âm! Còn số đối của nó là 3/4 thì nằm bên phải.'
      },
      {
        id: 'dp-3',
        prompt: 'Mẹ hỏi con: "Mẹ thấy số 5/0 có mẫu số là 0, số này có được gọi là số hữu tỉ không con?"',
        contextForParent: 'Kiểm tra xem con có bị mắc "bẫy kinh điển" mẫu số bằng 0 không.',
        suggestedAnswerTip: 'Không được! Vì phép chia cho 0 không xác định, mẫu số b bắt buộc phải khác 0.',
        sampleChildResponse: 'Không được mẹ ơi! Mẫu số bắt buộc phải khác 0, số 5/0 là sai quy tắc toán học không tồn tại ạ!'
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
    title: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
    subtitle: 'Thực hiện 4 phép tính cơ bản và vận dụng tính chất phân phối để tính nhanh',
    status: 'in_progress',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-2-1',
        level: 'thong_hieu',
        code: 'KNTT-T02-01',
        description: 'Thực hiện thành thạo phép cộng và trừ số hữu tỉ bằng cách quy đồng mẫu số dương.',
        mastered: true
      },
      {
        id: 'lt-2-2',
        level: 'thong_hieu',
        code: 'KNTT-T02-02',
        description: 'Thực hiện phép nhân, chia số hữu tỉ và tìm số nghịch đảo của một số hữu tỉ khác 0.',
        mastered: true
      },
      {
        id: 'lt-2-3',
        level: 'van_dung',
        code: 'KNTT-T02-03',
        description: 'Vận dụng tính chất giao hoán, kết hợp, phân phối của phép nhân đối với phép cộng để tính nhanh.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c2-1',
        title: 'Cộng và trừ số hữu tỉ',
        summary: 'Muốn cộng hoặc trừ hai số hữu tỉ, ta viết chúng dưới dạng phân số có cùng một mẫu số dương rồi áp dụng quy tắc cộng, trừ phân số.',
        latexFormula: '\\frac{a}{m} + \\frac{b}{m} = \\frac{a+b}{m}; \\quad \\frac{a}{m} - \\frac{b}{m} = \\frac{a-b}{m} \\quad (m > 0)',
        exampleSnippet: '-\\frac{2}{3} + \\frac{5}{6} = -\\frac{4}{6} + \\frac{5}{6} = \\frac{-4+5}{6} = \\frac{1}{6}.'
      },
      {
        id: 'c2-2',
        title: 'Nhân, chia số hữu tỉ & Số nghịch đảo',
        summary: 'Tích của hai số hữu tỉ bằng tích các tử chia cho tích các mẫu. Phép chia thực hiện bằng cách nhân với số nghịch đảo của số chia.',
        latexFormula: '\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}; \\quad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} \\quad (c \\neq 0)',
        exampleSnippet: 'Số nghịch đảo của -\\frac{3}{5} là -\\frac{5}{3} vì \\left(-\\frac{3}{5}\\right) \\cdot \\left(-\\frac{5}{3}\\right) = 1.'
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
          'Số nghịch đảo của phân số a/b là b/a (đảo ngược tử và mẫu, giữ nguyên dấu).',
          'Tích của hai số nghịch đảo phải bằng +1.'
        ],
        explanation: 'Số nghịch đảo của -2/7 là -7/2 vì (-2/7) * (-7/2) = 1.',
        competencyRef: 'lt-2-2',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-b2-1',
        prompt: 'Bố hỏi con: "Số nghịch đảo của -2/3 là bao nhiêu con nhỉ? Có cần đổi dấu trừ thành dấu cộng không?"',
        contextForParent: 'Giúp con phân biệt số đối (đổi dấu) với số nghịch đảo (đảo vị trí tử và mẫu, giữ nguyên dấu).',
        suggestedAnswerTip: 'Không đổi dấu! Số nghịch đảo là -3/2. Vì (-2/3) nhân với (-3/2) mới ra dương 1.',
        sampleChildResponse: 'Dạ không đổi dấu bố ạ! Số nghịch đảo là -3/2 vì nhân với nhau phải bằng 1 ạ!'
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
    title: 'Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ',
    subtitle: 'Quy tắc nhân chia hai lũy thừa cùng cơ số, lũy thừa của lũy thừa',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-3-1',
        level: 'nhan_biet',
        code: 'KNTT-T03-01',
        description: 'Biết khái niệm lũy thừa bậc n của số hữu tỉ x và quy ước x^0 = 1 (x khác 0).',
        mastered: false
      },
      {
        id: 'lt-3-2',
        level: 'van_dung',
        code: 'KNTT-T03-02',
        description: 'Vận dụng các công thức: nhân chia cùng cơ số, lũy thừa của lũy thừa, lũy thừa một tích.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c3-1',
        title: 'Các công thức lũy thừa cơ bản',
        summary: 'Nhân thì cộng số mũ, chia thì trừ số mũ, lũy thừa tầng thì nhân hai số mũ.',
        latexFormula: 'x^m \\cdot x^n = x^{m+n}; \\quad x^m : x^n = x^{m-n}; \\quad (x^m)^n = x^{m \\cdot n}',
        exampleSnippet: '(2^3)^2 = 2^6 = 64; \\quad (-0,5)^3 = -0,125; \\quad (-0,5)^2 = 0,25.'
      }
    ],
    diagnosticQuiz: [],
    dinnerPrompts: [
      {
        id: 'dp-b3-1',
        prompt: 'Mẹ hỏi con: "Số âm mà mang số mũ chẵn thì ra kết quả mang dấu dương hay dấu âm con nhỉ?"',
        contextForParent: 'Quy tắc vàng: Số âm mũ chẵn ra DƯƠNG, số âm mũ lẻ ra ÂM.',
        suggestedAnswerTip: 'Ra số DƯƠNG! Ví dụ (-2)^2 = +4, (-2)^3 = -8.',
        sampleChildResponse: 'Dạ ra số dương mẹ ạ! Mũ chẵn thì các cặp dấu trừ nhân nhau đều triệt tiêu thành cộng!'
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
    title: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
    subtitle: 'Thứ tự ưu tiên ngoặc và phép tính; Bí quyết giải bài toán tìm x bằng chuyển vế',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-4-1',
        level: 'nhan_biet',
        code: 'KNTT-T04-01',
        description: 'Nắm vững thứ tự thực hiện phép tính và quy tắc dấu ngoặc.',
        mastered: false
      },
      {
        id: 'lt-4-2',
        level: 'van_dung',
        code: 'KNTT-T04-02',
        description: 'Vận dụng thành thạo quy tắc chuyển vế đổi dấu trong đẳng thức để tìm x.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c4-1',
        title: 'Quy tắc chuyển vế',
        summary: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu (+) đổi thành (-) và dấu (-) đổi thành (+).',
        latexFormula: 'A + B = C \\iff A = C - B; \\quad A - B = C \\iff A = C + B',
        exampleSnippet: 'Tìm x: x + \\frac{1}{3} = \\frac{4}{5} \\implies x = \\frac{4}{5} - \\frac{1}{3} = \\frac{7}{15}.'
      }
    ],
    diagnosticQuiz: [],
    dinnerPrompts: [
      {
        id: 'dp-b4-1',
        prompt: 'Bố hỏi con: "Quy tắc chuyển vế giống như chiếc cân đĩa thăng bằng thế nào hả con?"',
        contextForParent: 'Khơi gợi con giải thích quy tắc chuyển vế đổi dấu bằng hình tượng trực quan.',
        suggestedAnswerTip: 'Khi nhấc vật nặng ra khỏi đĩa cân bên này thì phải trừ bớt ở đĩa bên kia để cân giữ thăng bằng.',
        sampleChildResponse: 'Dạ giống hệt cân đĩa! Muốn thăng bằng thì chuyển vế phải đổi dấu cộng thành trừ, trừ thành cộng bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 5: LUYỆN TẬP CHUNG & BÀI TẬP CUỐI CHƯƠNG I
  // ==========================================================================
  {
    id: 'bai_5_luyen_tap_chung_chuong_1',
    order: 5,
    chapterId: 'chuong_1_so_huu_ti',
    chapterTitle: 'Chương I: Số Hữu Tỉ',
    title: 'Luyện tập chung & Bài tập cuối Chương I',
    subtitle: 'Tổng ôn tập toàn bộ kiến thức và giải bài toán ứng dụng thực tế',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-5-1',
        level: 'van_dung_cao',
        code: 'KNTT-T05-01',
        description: 'Hệ thống hóa toàn bộ kiến thức chương I và giải quyết các bài toán liên môn thực tế.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c5-1',
        title: 'Sơ đồ tư duy Chương I: Số hữu tỉ',
        summary: 'Chương I gồm 4 trụ cột: 1. Định nghĩa tập Q & trục số; 2. Bốn phép tính số hữu tỉ; 3. Lũy thừa số mũ tự nhiên; 4. Quy tắc chuyển vế.',
        latexFormula: '\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}'
      }
    ],
    diagnosticQuiz: [],
    dinnerPrompts: [
      {
        id: 'dp-b5-1',
        prompt: 'Mẹ hỏi con: "Học xong cả Chương I Số hữu tỉ, con thấy phần nào con tự tin nhất và phần nào cần chú ý nhất?"',
        contextForParent: 'Tạo không gian để con tự hào chia sẻ thành quả tự học của mình.',
        suggestedAnswerTip: 'Khích lệ con: Con đã nắm vững định nghĩa phân số và trục số, chú ý cẩn thận đổi dấu khi chuyển vế.',
        sampleChildResponse: 'Dạ con tự tin nhất phần biểu diễn trục số và số đối mẹ ạ! Con sẽ cẩn thận hơn khi chuyển vế để không bị nhầm dấu!'
      }
    ]
  }
];
