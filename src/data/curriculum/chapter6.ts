import { Math7Lesson } from '../../types/curriculum';

export const chapter6Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 20: TỈ LỆ THỨC
  // ==========================================================================
  {
    id: 'bai_20_ti_le_thuc',
    order: 23,
    chapterId: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    chapterTitle: 'Chương VI: Tỉ Lệ Thức và Đại Lượng Tỉ Lệ',
    unit: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
    term: 2,
    title: 'Bài 20: Tỉ lệ thức',
    subtitle: 'Đẳng thức của hai tỉ số, tính chất cơ bản tích chéo và cách hoán vị các số hạng',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-20-1',
        level: 'nhan_biet',
        code: 'KNTT-T20-01',
        description: 'Nhận biết định nghĩa tỉ lệ thức là đẳng thức của hai tỉ số $\\frac{a}{b} = \\frac{c}{d}$ (viết là $a : b = c : d$).',
        mastered: true
      },
      {
        id: 'lt-20-2',
        level: 'nhan_biet',
        code: 'KNTT-T20-02',
        description: 'Nắm vững tính chất cơ bản của tỉ lệ thức: Nếu $\\frac{a}{b} = \\frac{c}{d}$ thì $a \\cdot d = b \\cdot c$ (tích ngoại tỉ bằng tích trung tỉ).',
        mastered: true
      },
      {
        id: 'lt-20-3',
        level: 'thong_hieu',
        code: 'KNTT-T20-03',
        description: 'Từ đẳng thức tích $a \\cdot d = b \\cdot c$ ($a, b, c, d \\neq 0$), suy ra được 4 tỉ lệ thức tương đương bằng cách đổi chỗ các số hạng.',
        mastered: false
      },
      {
        id: 'lt-20-4',
        level: 'van_dung',
        code: 'KNTT-T20-04',
        description: 'Vận dụng tính chất tích chéo để tìm số hạng chưa biết $x$ trong một tỉ lệ thức.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c20-1',
        title: 'Định nghĩa Tỉ lệ thức',
        summary: 'Tỉ lệ thức là đẳng thức của hai tỉ số $\\frac{a}{b} = \\frac{c}{d}$ (hoặc viết $a : b = c : d$). Các số $a, b, c, d$ gọi là các số hạng của tỉ lệ thức; $a$ và $d$ là các ngoại tỉ, $b$ và $c$ là các trung tỉ.',
        latexFormula: '\\frac{a}{b} = \\frac{c}{d} \\iff a : b = c : d \\quad (b, d \\neq 0)',
        exampleSnippet: 'Tỉ số $\\frac{6}{10} = 0,6$ và tỉ số $\\frac{9}{15} = 0,6$. Do đó ta có tỉ lệ thức: $\\frac{6}{10} = \\frac{9}{15}$.',
        pitfallWarning: 'Chỉ khi hai tỉ số rút gọn ra cùng một phân số (hoặc cùng giá trị) thì mới lập thành một tỉ lệ thức.',
        realLifeApplication: 'Tỉ lệ phóng to ảnh hoặc bản đồ: Tỉ lệ xích $1 : 100.000$ tức là $1\\text{ cm}$ trên bản đồ bằng $1\\text{ km}$ ngoài thực địa.'
      },
      {
        id: 'c20-2',
        title: 'Tính chất cơ bản của Tỉ lệ thức & Tìm x',
        summary: '1. Tính chất 1: Nếu $\\frac{a}{b} = \\frac{c}{d}$ thì tích ngoại tỉ bằng tích trung tỉ: $a \\cdot d = b \\cdot c$.\n2. Công thức tìm số hạng chưa biết: $x = \\frac{b \\cdot c}{a}$ hoặc $x = \\frac{a \\cdot d}{b}$.\n3. Tính chất 2: Nếu $a \\cdot d = b \\cdot c$ ($a,b,c,d \\neq 0$) thì có thể lập 4 tỉ lệ thức:\n$\\frac{a}{b} = \\frac{c}{d}; \\quad \\frac{a}{c} = \\frac{b}{d}; \\quad \\frac{d}{b} = \\frac{c}{a}; \\quad \\frac{d}{c} = \\frac{b}{a}$.',
        latexFormula: '\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c \\implies x = \\frac{\\text{tích đường chéo đã biết}}{\\text{số đối diện chéo với } x}',
        exampleSnippet: 'Tìm $x$ biết $\\frac{x}{6} = \\frac{5}{2}$. Ta có: $x \\cdot 2 = 6 \\cdot 5 \\implies x = \\frac{30}{2} = 15$.',
        pitfallWarning: 'Khi đổi chỗ để lập tỉ lệ thức mới, đường chéo $a$ nối $d$ và đường chéo $b$ nối $c$ phải luôn được bảo toàn.',
        realLifeApplication: 'Quy tắc tam giác / nhân chéo chia ngang trong pha chế nước cam hoặc tính liều lượng thuốc theo cân nặng.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q20-1',
        tier: 'nhan_biet',
        question: 'Cặp tỉ số nào sau đây lập thành một tỉ lệ thức?',
        options: [
          { id: 'opt-20-1a', text: '$\\frac{2}{3}$ và $\\frac{6}{9}$', isCorrect: true },
          { id: 'opt-20-1b', text: '$\\frac{3}{4}$ và $\\frac{4}{5}$', isCorrect: false },
          { id: 'opt-20-1c', text: '$\\frac{1}{2}$ và $\\frac{2}{3}$', isCorrect: false },
          { id: 'opt-20-1d', text: '$\\frac{5}{6}$ và $\\frac{6}{7}$', isCorrect: false }
        ],
        correctAnswerId: 'opt-20-1a',
        progressiveHints: [
          'Rút gọn phân số thứ hai về tối giản hoặc nhân tích chéo kiểm tra.',
          'Ta có: 6/9 chia cả tử và mẫu cho 3 sẽ được bao nhiêu?'
        ],
        explanation: 'Vì $\\frac{6}{9} = \\frac{2}{3}$ (hoặc tích chéo $2 \\cdot 9 = 3 \\cdot 6 = 18$) nên $\\frac{2}{3} = \\frac{6}{9}$ là tỉ lệ thức.',
        competencyRef: 'KNTT-T20-01',
        points: 25
      },
      {
        id: 'q20-2',
        tier: 'nhan_biet',
        question: 'Từ đẳng thức tích $3 \\cdot 8 = 4 \\cdot 6$, tỉ lệ thức nào sau đây được suy ra ĐÚNG?',
        options: [
          { id: 'opt-20-2a', text: '$\\frac{3}{4} = \\frac{6}{8}$', isCorrect: true },
          { id: 'opt-20-2b', text: '$\\frac{3}{6} = \\frac{8}{4}$', isCorrect: false },
          { id: 'opt-20-2c', text: '$\\frac{3}{8} = \\frac{4}{6}$', isCorrect: false },
          { id: 'opt-20-2d', text: '$\\frac{4}{8} = \\frac{6}{3}$', isCorrect: false }
        ],
        correctAnswerId: 'opt-20-2a',
        progressiveHints: [
          'Kiểm tra tích chéo của từng đáp án: tử vế trái nhân mẫu vế phải phải bằng 3 * 8 = 24.',
          'Trong đáp án A: 3 * 8 = 24 và 4 * 6 = 24.'
        ],
        explanation: 'Trong $\\frac{3}{4} = \\frac{6}{8}$, tích ngoại tỉ là $3 \\cdot 8 = 24$, tích trung tỉ là $4 \\cdot 6 = 24$, đúng với đẳng thức ban đầu.',
        competencyRef: 'KNTT-T20-03',
        points: 25
      },
      {
        id: 'q20-3',
        tier: 'thong_hieu',
        question: 'Tìm giá trị của x trong tỉ lệ thức: $\\frac{x}{12} = \\frac{5}{3}$',
        formula: '\\frac{x}{12} = \\frac{5}{3} \\implies x = ?',
        options: [
          { id: 'opt-20-3a', text: 'x = 20', isCorrect: true },
          { id: 'opt-20-3b', text: 'x = 15', isCorrect: false },
          { id: 'opt-20-3c', text: 'x = 60', isCorrect: false },
          { id: 'opt-20-3d', text: 'x = 4', isCorrect: false }
        ],
        correctAnswerId: 'opt-20-3a',
        progressiveHints: [
          'Áp dụng quy tắc tích chéo: x * 3 = 12 * 5.',
          'Tính: x = (12 * 5) / 3'
        ],
        explanation: 'Ta có $x \\cdot 3 = 12 \\cdot 5 = 60 \\implies x = \\frac{60}{3} = 20$.',
        competencyRef: 'KNTT-T20-04',
        points: 25
      },
      {
        id: 'q20-4',
        tier: 'van_dung',
        question: 'Tìm x biết: $\\frac{x - 1}{4} = \\frac{9}{x - 1}$ (với $x > 1$)',
        formula: '\\frac{x - 1}{4} = \\frac{9}{x - 1}',
        options: [
          { id: 'opt-20-4a', text: 'x = 7', isCorrect: true },
          { id: 'opt-20-4b', text: 'x = 6', isCorrect: false },
          { id: 'opt-20-4c', text: 'x = 5', isCorrect: false },
          { id: 'opt-20-4d', text: 'x = 37', isCorrect: false }
        ],
        correctAnswerId: 'opt-20-4a',
        progressiveHints: [
          'Nhân chéo hai vế: (x - 1) * (x - 1) = 4 * 9.',
          'Ta có: (x - 1)^2 = 36. Với x > 1 thì x - 1 = 6.'
        ],
        explanation: 'Ta có $(x - 1)^2 = 4 \\cdot 9 = 36 = 6^2$. Vì $x > 1$ nên $x - 1 = 6 \\implies x = 7$.',
        competencyRef: 'KNTT-T20-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-20-1',
        prompt: 'Bố hỏi con: "Nhân chéo chia ngang" mà con hay dùng khi làm bài thực chất bắt nguồn từ tính chất toán học nào?',
        contextForParent: 'Giúp con hiểu gốc rễ toán học của mẹo tính nhẩm quen thuộc.',
        suggestedAnswerTip: 'Bắt nguồn từ tính chất cơ bản của tỉ lệ thức: Tích ngoại tỉ bằng tích trung tỉ ($a \\cdot d = b \\cdot c$).',
        sampleChildResponse: 'Từ tính chất tỉ lệ thức bố ạ! Nhân chéo hai số đã biết rồi chia cho số nằm đối diện với số cần tìm ạ!'
      },
      {
        id: 'dp-20-2',
        prompt: 'Bố hỏi con: Nếu bố mua 3kg táo giá 120.000 đồng, muốn mua 5kg táo thì con lập tỉ lệ thức thế nào để tính tiền?',
        contextForParent: 'Ứng dụng tỉ lệ thức vào bài toán chợ búa đời sống.',
        suggestedAnswerTip: 'Lập tỉ lệ thức: $\\frac{3}{120.000} = \\frac{5}{x} \\implies x = \\frac{5 \\cdot 120.000}{3} = 200.000$ đồng.',
        sampleChildResponse: 'Lập tỉ lệ: 3kg / 120k = 5kg / x. Nhân chéo chia ngang: 5 nhân 120 chia 3 là 200 nghìn đồng bố ạ!'
      },
      {
        id: 'dp-20-3',
        prompt: 'Bố hỏi con: Tại sao khi in ảnh thẻ, nếu thợ ảnh kéo dãn một chiều ngang mà không giữ tỉ lệ chiều dọc thì khuôn mặt trông sẽ thế nào?',
        contextForParent: 'Ý nghĩa trực quan của tỉ lệ thức trong nhiếp ảnh và đồ họa.',
        suggestedAnswerTip: 'Ảnh sẽ bị biến dạng, bẹt ra hoặc méo mó do tỉ lệ chiều dài và chiều rộng không được bảo toàn.',
        sampleChildResponse: 'Mặt sẽ bị méo và béo phị ra bố ơi, vì tỉ lệ chiều dài và chiều rộng không bằng nhau nữa!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 21: TÍNH CHẤT CỦA DÃY TỈ SỐ BẰNG NHAU
  // ==========================================================================
  {
    id: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 24,
    chapterId: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    chapterTitle: 'Chương VI: Tỉ Lệ Thức và Đại Lượng Tỉ Lệ',
    unit: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
    term: 2,
    title: 'Bài 21: Tính chất của dãy tỉ số bằng nhau',
    subtitle: 'Mở rộng tỉ lệ thức sang nhiều tỉ số, giải bài toán chia phần tỉ lệ và bài toán thực tế',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-21-1',
        level: 'nhan_biet',
        code: 'KNTT-T21-01',
        description: 'Thuộc công thức tính chất dãy tỉ số bằng nhau: $\\frac{a}{b} = \\frac{c}{d} = \\frac{a+c}{b+d} = \\frac{a-c}{b-d}$.',
        mastered: true
      },
      {
        id: 'lt-21-2',
        level: 'nhan_biet',
        code: 'KNTT-T21-02',
        description: 'Mở rộng dãy ba tỉ số $\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a+c+e}{b+d+f}$ và kí hiệu $a:b:c = 2:3:5$.',
        mastered: true
      },
      {
        id: 'lt-21-3',
        level: 'thong_hieu',
        code: 'KNTT-T21-03',
        description: 'Chuyển đổi bài toán lời văn có điều kiện tổng $x + y = S$ hoặc hiệu $x - y = D$ về dãy tỉ số bằng nhau để tìm ẩn số.',
        mastered: false
      },
      {
        id: 'lt-21-4',
        level: 'van_dung',
        code: 'KNTT-T21-04',
        description: 'Giải các bài toán chia phần tỉ lệ trong thực tế: chia tiền thưởng, chia số cây trồng, tỉ lệ pha chế hợp kim.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c21-1',
        title: 'Tính chất của hai tỉ số và dãy tỉ số bằng nhau',
        summary: 'Từ tỉ lệ thức $\\frac{a}{b} = \\frac{c}{d}$, ta có:\n$\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b + d} = \\frac{a - c}{b - d} \\quad (b \\neq \\pm d)$.\nMở rộng cho ba tỉ số:\n$\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a + c + e}{b + d + f} = \\frac{a - c + e}{b - d + f}$.',
        latexFormula: '\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a + c + e}{b + d + f} \\quad (b+d+f \\neq 0)',
        exampleSnippet: 'Cho $\\frac{x}{3} = \\frac{y}{5}$ và $x + y = 16$. Áp dụng tính chất:\n$\\frac{x}{3} = \\frac{y}{5} = \\frac{x+y}{3+5} = \\frac{16}{8} = 2 \\implies x = 2 \\cdot 3 = 6; \\quad y = 2 \\cdot 5 = 10$.',
        pitfallWarning: 'Dấu ở trên tử và dưới mẫu phải TUYỆT ĐỐI ĐỒNG NHẤT. Nếu tử là $a - c$ thì mẫu phải là $b - d$ (không được lấy $b + d$).',
        realLifeApplication: 'Chia lợi nhuận kinh doanh theo tỉ lệ góp vốn của các cổ đông trong công ty.'
      },
      {
        id: 'c21-2',
        title: 'Kí hiệu số tỉ lệ và bài toán chia phần',
        summary: 'Khi nói ba số $a, b, c$ tỉ lệ với các số $2, 3, 5$, ta hiểu là:\n$\\frac{a}{2} = \\frac{b}{3} = \\frac{c}{5}$ (hoặc viết $a : b : c = 2 : 3 : 5$).\nPhương pháp giải: Đưa về dãy tỉ số bằng nhau, sau đó cộng/trừ các số hạng tương ứng với điều kiện tổng/hiệu đề bài cho.',
        exampleSnippet: 'Ba lớp 7A, 7B, 7C trồng được 120 cây, tỉ lệ với $3; 4; 5$. Số cây lớp 7A là $120 / (3+4+5) \\cdot 3 = 10 \\cdot 3 = 30$ cây.',
        pitfallWarning: 'Cần kiểm tra lại điều kiện nghiệm xem các số tìm được có thỏa mãn tổng/hiệu ban đầu hay không.',
        realLifeApplication: 'Pha chế bê tông chuẩn mác: Tỉ lệ Xi măng : Cát : Đá sỏi = 1 : 2 : 4 theo thể tích.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q21-1',
        tier: 'nhan_biet',
        question: 'Công thức nào sau đây biểu diễn SAI tính chất của dãy tỉ số bằng nhau từ $\\frac{a}{b} = \\frac{c}{d}$?',
        options: [
          { id: 'opt-21-1a', text: '$\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b - d}$', isCorrect: true },
          { id: 'opt-21-1b', text: '$\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b + d}$', isCorrect: false },
          { id: 'opt-21-1c', text: '$\\frac{a}{b} = \\frac{c}{d} = \\frac{a - c}{b - d}$', isCorrect: false },
          { id: 'opt-21-1d', text: '$\\frac{a}{b} = \\frac{c}{d} = \\frac{2a + 2c}{2b + 2d}$', isCorrect: false }
        ],
        correctAnswerId: 'opt-21-1a',
        progressiveHints: [
          'Dấu phép tính ở tử và mẫu phải hoàn toàn đồng bộ với nhau.',
          'Nếu tử là phép cộng (a + c) thì mẫu phải là phép cộng (b + d).'
        ],
        explanation: 'Công thức A sai vì tử dùng dấu cộng ($a+c$) nhưng mẫu lại dùng dấu trừ ($b-d$), vi phạm tính chất dãy tỉ số bằng nhau.',
        competencyRef: 'KNTT-T21-01',
        points: 25
      },
      {
        id: 'q21-2',
        tier: 'thong_hieu',
        question: 'Tìm hai số x và y biết: $\\frac{x}{2} = \\frac{y}{5}$ và $x + y = 21$.',
        formula: '\\frac{x}{2} = \\frac{y}{5}; \\quad x + y = 21',
        options: [
          { id: 'opt-21-2a', text: 'x = 6; y = 15', isCorrect: true },
          { id: 'opt-21-2b', text: 'x = 7; y = 14', isCorrect: false },
          { id: 'opt-21-2c', text: 'x = 4; y = 17', isCorrect: false },
          { id: 'opt-21-2d', text: 'x = 10; y = 11', isCorrect: false }
        ],
        correctAnswerId: 'opt-21-2a',
        progressiveHints: [
          'Áp dụng tính chất: (x + y) / (2 + 5) = 21 / 7 = 3.',
          'Khi đó: x = 3 * 2 và y = 3 * 5.'
        ],
        explanation: 'Ta có $\\frac{x}{2} = \\frac{y}{5} = \\frac{x+y}{2+5} = \\frac{21}{7} = 3 \\implies x = 3 \\cdot 2 = 6; \\ y = 3 \\cdot 5 = 15$.',
        competencyRef: 'KNTT-T21-03',
        points: 25
      },
      {
        id: 'q21-3',
        tier: 'thong_hieu',
        question: 'Cho $\\frac{a}{3} = \\frac{b}{7}$ và $b - a = 20$. Giá trị của a và b là:',
        formula: '\\frac{a}{3} = \\frac{b}{7}; \\quad b - a = 20',
        options: [
          { id: 'opt-21-3a', text: 'a = 15; b = 35', isCorrect: true },
          { id: 'opt-21-3b', text: 'a = 12; b = 32', isCorrect: false },
          { id: 'opt-21-3c', text: 'a = 9; b = 29', isCorrect: false },
          { id: 'opt-21-3d', text: 'a = 6; b = 26', isCorrect: false }
        ],
        correctAnswerId: 'opt-21-3a',
        progressiveHints: [
          'Lấy tỉ số b trừ đi tỉ số a: (b - a) / (7 - 3) = 20 / 4 = 5.',
          'Tìm a: 5 * 3; tìm b: 5 * 7.'
        ],
        explanation: 'Ta có $\\frac{b}{7} = \\frac{a}{3} = \\frac{b-a}{7-3} = \\frac{20}{4} = 5 \\implies a = 5 \\cdot 3 = 15; \\ b = 5 \\cdot 7 = 35$.',
        competencyRef: 'KNTT-T21-03',
        points: 25
      },
      {
        id: 'q21-4',
        tier: 'van_dung',
        question: 'Một mảnh đất hình chữ nhật có chu vi bằng 48m, tỉ số giữa chiều rộng và chiều dài là 3 : 5. Diện tích mảnh đất đó là bao nhiêu?',
        options: [
          { id: 'opt-21-4a', text: '135 m²', isCorrect: true },
          { id: 'opt-21-4b', text: '240 m²', isCorrect: false },
          { id: 'opt-21-4c', text: '540 m²', isCorrect: false },
          { id: 'opt-21-4d', text: '120 m²', isCorrect: false }
        ],
        correctAnswerId: 'opt-21-4a',
        progressiveHints: [
          'Nửa chu vi (tổng dài + rộng) là 48 : 2 = 24m.',
          'Đặt chiều rộng là x, chiều dài là y -> x/3 = y/5 = 24/(3+5) = 3.',
          'Tìm x, y rồi nhân lại để tính diện tích: S = x * y.'
        ],
        explanation: 'Nửa chu vi là $48 : 2 = 24\\text{m}$. Ta có $\\frac{x}{3} = \\frac{y}{5} = \\frac{x+y}{3+5} = \\frac{24}{8} = 3 \\implies x = 9\\text{m}, y = 15\\text{m}$. Diện tích $S = 9 \\cdot 15 = 135\\text{ m}^2$.',
        competencyRef: 'KNTT-T21-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-21-1',
        prompt: 'Bố hỏi con: Nếu bố và con cùng làm chung một việc rồi được thưởng 500 nghìn, chia theo tỉ lệ công sức 3 : 2 thì mỗi người nhận bao nhiêu?',
        contextForParent: 'Tạo tình huống chia thưởng gần gũi để con tính nhẩm dãy tỉ số bằng nhau.',
        suggestedAnswerTip: 'Tổng là 5 phần (3 + 2 = 5). Mỗi phần 100k -> Bố nhận 300k, con nhận 200k.',
        sampleChildResponse: 'Tổng là 5 phần bố ạ! Bố 3 phần là 300k, con 2 phần là 200k ạ!'
      },
      {
        id: 'dp-21-2',
        prompt: 'Bố hỏi con: Hãy chỉ ra một sai lầm chết người mà học sinh hay mắc khi dùng tính chất dãy tỉ số bằng nhau?',
        contextForParent: 'Nhắc con lỗi kinh điển về dấu tử và mẫu.',
        suggestedAnswerTip: 'Lấy tử cộng lại nhưng mẫu lại trừ đi (hoặc ngược lại), không đồng bộ phép tính ở tử và mẫu.',
        sampleChildResponse: 'Lấy tử cộng mà mẫu lại trừ bố ơi, ví dụ $(a+c)/(b-d)$ là sai bét ngay!'
      },
      {
        id: 'dp-21-3',
        prompt: 'Bố hỏi con: Khi làm bài toán hình học có chu vi hình chữ nhật, bước đầu tiên con phải nhớ làm trước khi lập dãy tỉ số là gì?',
        contextForParent: 'Lưu ý chia đôi chu vi để lấy tổng chiều dài và chiều rộng (nửa chu vi).',
        suggestedAnswerTip: 'Phải chia 2 chu vi để tìm nửa chu vi (vì chu vi bằng 2 lần tổng dài + rộng).',
        sampleChildResponse: 'Phải tính nửa chu vi trước ạ, nếu lấy nguyên chu vi thì bị gấp đôi kết quả!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 22: ĐẠI LƯỢNG TỈ LỆ THUẬN
  // ==========================================================================
  {
    id: 'bai_22_dai_luong_ti_le_thuan',
    order: 25,
    chapterId: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    chapterTitle: 'Chương VI: Tỉ Lệ Thức và Đại Lượng Tỉ Lệ',
    unit: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
    term: 2,
    title: 'Bài 22: Đại lượng tỉ lệ thuận',
    subtitle: 'Công thức liên hệ y = kx, hệ số tỉ lệ và tính chất tỉ số tương ứng',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-22-1',
        level: 'nhan_biet',
        code: 'KNTT-T22-01',
        description: 'Nhận biết công thức đại lượng tỉ lệ thuận $y = kx$ ($k \\neq 0$, $k$ là hằng số gọi là hệ số tỉ lệ của $y$ đối với $x$).',
        mastered: true
      },
      {
        id: 'lt-22-2',
        level: 'nhan_biet',
        code: 'KNTT-T22-02',
        description: 'Xác định hệ số tỉ lệ nghịch đảo: Nếu $y$ tỉ lệ thuận với $x$ theo hệ số $k$ thì $x$ tỉ lệ thuận với $y$ theo hệ số $\\frac{1}{k}$.',
        mastered: true
      },
      {
        id: 'lt-22-3',
        level: 'thong_hieu',
        code: 'KNTT-T22-03',
        description: 'Nắm vững tính chất tỉ số: $\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = \\dots = k$ và $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$.',
        mastered: false
      },
      {
        id: 'lt-22-4',
        level: 'van_dung',
        code: 'KNTT-T22-04',
        description: 'Giải các bài toán thực tế: Quãng đường chuyển động đều $s = v \\cdot t$, khối lượng và thể tích $m = D \\cdot V$.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c22-1',
        title: 'Định nghĩa Đại lượng tỉ lệ thuận',
        summary: 'Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức $y = kx$ (với hằng số $k \\neq 0$) thì ta nói $y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $k$.\nChú ý: Khi $y$ tỉ lệ thuận với $x$ theo hệ số $k$ thì $x$ tỉ lệ thuận với $y$ theo hệ số $\\frac{1}{k}$.',
        latexFormula: 'y = kx \\iff \\frac{y}{x} = k \\quad (k \\neq 0)',
        exampleSnippet: 'Nếu mua gạo với giá $20.000$ đ/kg thì số tiền $y$ (nghìn đồng) tỉ lệ thuận với số kg gạo $x$ theo công thức $y = 20x$ (hệ số $k = 20$).',
        pitfallWarning: 'Phân biệt rõ: $y$ tỉ lệ thuận với $x$ theo hệ số $k$, nhưng $x$ tỉ lệ thuận với $y$ theo hệ số $\\frac{1}{k}$ (nghịch đảo).',
        realLifeApplication: 'Điện năng tiêu thụ và tiền điện, quãng đường đi được và lượng xăng tiêu hao của xe máy.'
      },
      {
        id: 'c22-2',
        title: 'Tính chất của hai đại lượng tỉ lệ thuận',
        summary: 'Nếu hai đại lượng $y$ và $x$ tỉ lệ thuận với nhau thì:\n1. Tỉ số hai giá trị tương ứng của chúng luôn không đổi: $\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = \\dots = k$.\n2. Tỉ số hai giá trị bất kì của đại lượng này bằng tỉ số hai giá trị tương ứng của đại lượng kia: $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$.',
        latexFormula: '\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = k \\iff \\frac{y_1}{y_2} = \\frac{x_1}{x_2}',
        exampleSnippet: 'Một ô tô chạy đều tiêu thụ $8$ lít xăng cho $100\\text{ km}$. Hỏi đi $250\\text{ km}$ tốn bao nhiêu lít xăng? Ta có: $\\frac{x}{250} = \\frac{8}{100} \\implies x = 20$ lít.',
        pitfallWarning: 'Đại lượng này tăng bao nhiêu lần thì đại lượng kia cũng tăng bấy nhiêu lần (và ngược lại khi giảm).',
        realLifeApplication: 'Đổi tiền ngoại tệ: Tỉ giá USD sang VND là đại lượng tỉ lệ thuận trực tiếp.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q22-1',
        tier: 'nhan_biet',
        question: 'Cho biết y tỉ lệ thuận với x theo công thức $y = -3x$. Hệ số tỉ lệ của y đối với x là:',
        options: [
          { id: 'opt-22-1a', text: '-3', isCorrect: true },
          { id: 'opt-22-1b', text: '3', isCorrect: false },
          { id: 'opt-22-1c', text: '-\\frac{1}{3}', isCorrect: false },
          { id: 'opt-22-1d', text: '\\frac{1}{3}', isCorrect: false }
        ],
        correctAnswerId: 'opt-22-1a',
        progressiveHints: [
          'Đối chiếu với công thức tổng quát y = kx.',
          'Hệ số đứng liền trước x chính là hệ số tỉ lệ k.'
        ],
        explanation: 'Từ công thức $y = -3x$, hệ số tỉ lệ $k = -3$.',
        competencyRef: 'KNTT-T22-01',
        points: 25
      },
      {
        id: 'q22-2',
        tier: 'nhan_biet',
        question: 'Nếu y tỉ lệ thuận với x theo hệ số tỉ lệ $k = 4$ thì x tỉ lệ thuận với y theo hệ số tỉ lệ nào?',
        options: [
          { id: 'opt-22-2a', text: '$\\frac{1}{4}$', isCorrect: true },
          { id: 'opt-22-2b', text: '-4', isCorrect: false },
          { id: 'opt-22-2c', text: '4', isCorrect: false },
          { id: 'opt-22-2d', text: '1', isCorrect: false }
        ],
        correctAnswerId: 'opt-22-2a',
        progressiveHints: [
          'Nếu y = kx thì rút x ra theo y: x = (1/k) * y.',
          'Nghịch đảo của 4 là bao nhiêu?'
        ],
        explanation: 'Ta có $y = 4x \\implies x = \\frac{1}{4}y$, nên hệ số tỉ lệ của $x$ đối với $y$ là $\\frac{1}{4}$.',
        competencyRef: 'KNTT-T22-02',
        points: 25
      },
      {
        id: 'q22-3',
        tier: 'thong_hieu',
        question: 'Cho x và y là hai đại lượng tỉ lệ thuận. Biết khi $x = 3$ thì $y = 12$. Khi $x = 5$ thì giá trị của y bằng bao nhiêu?',
        options: [
          { id: 'opt-22-3a', text: 'y = 20', isCorrect: true },
          { id: 'opt-22-3b', text: 'y = 15', isCorrect: false },
          { id: 'opt-22-3c', text: 'y = 25', isCorrect: false },
          { id: 'opt-22-3d', text: 'y = 10', isCorrect: false }
        ],
        correctAnswerId: 'opt-22-3a',
        progressiveHints: [
          'Tìm hệ số tỉ lệ k = y / x = 12 / 3.',
          'Khi đó công thức là y = 4x. Thay x = 5 vào.'
        ],
        explanation: 'Hệ số tỉ lệ $k = \\frac{y}{x} = \\frac{12}{3} = 4$. Khi $x = 5$, ta có $y = 4 \\cdot 5 = 20$.',
        competencyRef: 'KNTT-T22-03',
        points: 25
      },
      {
        id: 'q22-4',
        tier: 'van_dung',
        question: 'Cứ 100g hạt đậu nành thì làm được 250g đậu phụ. Để làm được 1kg đậu phụ thì cần bao nhiêu gam hạt đậu nành?',
        options: [
          { id: 'opt-22-4a', text: '400 gam', isCorrect: true },
          { id: 'opt-22-4b', text: '250 gam', isCorrect: false },
          { id: 'opt-22-4c', text: '500 gam', isCorrect: false },
          { id: 'opt-22-4d', text: '350 gam', isCorrect: false }
        ],
        correctAnswerId: 'opt-22-4a',
        progressiveHints: [
          'Đổi 1kg = 1000g đậu phụ.',
          'Khối lượng hạt đậu nành tỉ lệ thuận với khối lượng đậu phụ: x / 1000 = 100 / 250.'
        ],
        explanation: 'Đổi $1\\text{kg} = 1000\\text{g}$. Vì hai đại lượng tỉ lệ thuận nên $\\frac{x}{1000} = \\frac{100}{250} \\implies x = \\frac{100 \\cdot 1000}{250} = 400\\text{g}$.',
        competencyRef: 'KNTT-T22-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-22-1',
        prompt: 'Bố hỏi con: Hãy nêu một ví dụ thực tế nhất về hai đại lượng tỉ lệ thuận mà con gặp mỗi ngày?',
        contextForParent: 'Kiểm tra khả năng liên hệ khái niệm tỉ lệ thuận với cuộc sống thường nhật.',
        suggestedAnswerTip: 'Số lượng mua và số tiền trả; hoặc thời gian sạc pin và lượng điện nạp vào.',
        sampleChildResponse: 'Số que kem con mua và số tiền phải trả bố ạ, mua càng nhiều que kem thì trả càng nhiều tiền theo đúng giá mỗi cây!'
      },
      {
        id: 'dp-22-2',
        prompt: 'Bố hỏi con: Khi xe chạy với vận tốc không đổi trên đường cao tốc, thời gian đi và quãng đường là quan hệ gì?',
        contextForParent: 'Củng cố công thức kinh điển s = v * t trong vật lý và toán học.',
        suggestedAnswerTip: 'Là hai đại lượng tỉ lệ thuận với nhau (hệ số tỉ lệ chính là vận tốc v).',
        sampleChildResponse: 'Là tỉ lệ thuận bố ạ, đi càng lâu thì đi được càng xa theo công thức s = v nhân t!'
      },
      {
        id: 'dp-22-3',
        prompt: 'Bố hỏi con: Nếu đại lượng x tăng lên gấp 3 lần thì đại lượng y tỉ lệ thuận với nó sẽ thay đổi như thế nào?',
        contextForParent: 'Tính chất cốt lõi: Cùng tăng hoặc cùng giảm với cùng tỉ số.',
        suggestedAnswerTip: 'Đại lượng y cũng tăng lên đúng gấp 3 lần.',
        sampleChildResponse: 'y cũng tăng lên gấp 3 lần luôn bố ơi, cùng tỉ lệ với nhau mà!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 23: ĐẠI LƯỢNG TỈ LỆ NGHỊCH
  // ==========================================================================
  {
    id: 'bai_23_dai_luong_ti_le_nghich',
    order: 26,
    chapterId: 'chuong_6_ti_le_thuc_va_dai_luong_ti_le',
    chapterTitle: 'Chương VI: Tỉ Lệ Thức và Đại Lượng Tỉ Lệ',
    unit: 'Chương VI: Tỉ lệ thức và đại lượng tỉ lệ',
    term: 2,
    title: 'Bài 23: Đại lượng tỉ lệ nghịch',
    subtitle: 'Công thức liên hệ y = a / x, tính chất tích không đổi x * y = a và so sánh với tỉ lệ thuận',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-23-1',
        level: 'nhan_biet',
        code: 'KNTT-T23-01',
        description: 'Nhận biết công thức đại lượng tỉ lệ nghịch $y = \\frac{a}{x}$ hay $x \\cdot y = a$ ($a \\neq 0$, $a$ là hệ số tỉ lệ).',
        mastered: true
      },
      {
        id: 'lt-23-2',
        level: 'nhan_biet',
        code: 'KNTT-T23-02',
        description: 'Nắm vững vai trò đối xứng: Nếu $y$ tỉ lệ nghịch với $x$ theo hệ số $a$ thì $x$ cũng tỉ lệ nghịch với $y$ theo đúng hệ số $a$.',
        mastered: true
      },
      {
        id: 'lt-23-3',
        level: 'thong_hieu',
        code: 'KNTT-T23-03',
        description: 'Vận dụng tính chất tích không đổi $x_1 \\cdot y_1 = x_2 \\cdot y_2 = \\dots = a$ và tỉ số nghịch đảo $\\frac{x_1}{x_2} = \\frac{y_2}{y_1}$.',
        mastered: false
      },
      {
        id: 'lt-23-4',
        level: 'van_dung',
        code: 'KNTT-T23-04',
        description: 'Giải các bài toán thực tế: Năng suất và thời gian hoàn thành công việc, vận tốc và thời gian trên cùng quãng đường.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c23-1',
        title: 'Định nghĩa Đại lượng tỉ lệ nghịch',
        summary: 'Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức $y = \\frac{a}{x}$ hay $x \\cdot y = a$ (với hằng số $a \\neq 0$) thì ta nói $y$ tỉ lệ nghịch với $x$ theo hệ số tỉ lệ $a$.\nĐặc điểm nổi bật: $x$ và $y$ có vai trò đối xứng hoàn toàn (cùng hệ số tỉ lệ $a$).',
        latexFormula: 'y = \\frac{a}{x} \\iff x \\cdot y = a \\quad (a \\neq 0)',
        exampleSnippet: 'Trên cùng quãng đường $s = 60\\text{ km}$, vận tốc $v$ và thời gian $t$ liên hệ bởi $v \\cdot t = 60$. Vậy vận tốc và thời gian tỉ lệ nghịch với nhau theo hệ số $a = 60$.',
        pitfallWarning: 'Khác với tỉ lệ thuận, trong tỉ lệ nghịch hệ số tỉ lệ của $x$ đối với $y$ cũng chính là $a$ (KHÔNG ĐỔI NGHỊCH ĐẢO).',
        realLifeApplication: 'Số người cùng làm một công việc và thời gian hoàn thành (càng đông người thì thời gian làm càng ít).'
      },
      {
        id: 'c23-2',
        title: 'Tính chất của hai đại lượng tỉ lệ nghịch',
        summary: 'Nếu hai đại lượng $y$ và $x$ tỉ lệ nghịch với nhau thì:\n1. Tích hai giá trị tương ứng của chúng luôn không đổi (bằng hệ số $a$): $x_1 y_1 = x_2 y_2 = \\dots = a$.\n2. Tỉ số hai giá trị bất kì của đại lượng này bằng nghịch đảo của tỉ số hai giá trị tương ứng của đại lượng kia: $\\frac{x_1}{x_2} = \\frac{y_2}{y_1}$.',
        latexFormula: 'x_1 \\cdot y_1 = x_2 \\cdot y_2 = a \\iff \\frac{x_1}{x_2} = \\frac{y_2}{y_1}',
        exampleSnippet: 'Biết 4 người thợ xây một bức tường mất 12 ngày. Muốn xây xong trong 6 ngày cần bao nhiêu người? Ta có: $x \\cdot 6 = 4 \\cdot 12 = 48 \\implies x = 8$ người.',
        pitfallWarning: 'Đại lượng này tăng bao nhiêu lần thì đại lượng kia giảm đi bấy nhiêu lần.',
        realLifeApplication: 'Bánh răng truyền động cơ khí: Bánh răng có số răng càng nhiều thì quay càng chậm.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q23-1',
        tier: 'nhan_biet',
        question: 'Công thức nào sau đây thể hiện y và x là hai đại lượng tỉ lệ nghịch?',
        options: [
          { id: 'opt-23-1a', text: '$y = \\frac{12}{x}$', isCorrect: true },
          { id: 'opt-23-1b', text: '$y = 12x$', isCorrect: false },
          { id: 'opt-23-1c', text: '$y = x + 12$', isCorrect: false },
          { id: 'opt-23-1d', text: '$y = 12 - x$', isCorrect: false }
        ],
        correctAnswerId: 'opt-23-1a',
        progressiveHints: [
          'Đại lượng tỉ lệ nghịch có dạng y = a / x hoặc x * y = a.',
          'Xem công thức nào x nằm ở dưới mẫu số.'
        ],
        explanation: 'Công thức $y = \\frac{12}{x}$ (hay $x \\cdot y = 12$) là dạng chuẩn của hai đại lượng tỉ lệ nghịch với hệ số $a = 12$.',
        competencyRef: 'KNTT-T23-01',
        points: 25
      },
      {
        id: 'q23-2',
        tier: 'nhan_biet',
        question: 'Nếu y tỉ lệ nghịch với x theo hệ số tỉ lệ $a = 24$ thì x tỉ lệ nghịch với y theo hệ số tỉ lệ nào?',
        options: [
          { id: 'opt-23-2a', text: '24', isCorrect: true },
          { id: 'opt-23-2b', text: '$\\frac{1}{24}$', isCorrect: false },
          { id: 'opt-23-2c', text: '-24', isCorrect: false },
          { id: 'opt-23-2d', text: '1', isCorrect: false }
        ],
        correctAnswerId: 'opt-23-2a',
        progressiveHints: [
          'Trong tỉ lệ nghịch: x * y = a thì y * x cũng bằng a.',
          'Hệ số tỉ lệ nghịch có đối xứng không?'
        ],
        explanation: 'Vì $x \\cdot y = 24$ nên vai trò của $x$ và $y$ như nhau. Do đó $x$ cũng tỉ lệ nghịch với $y$ theo đúng hệ số $a = 24$.',
        competencyRef: 'KNTT-T23-02',
        points: 25
      },
      {
        id: 'q23-3',
        tier: 'thong_hieu',
        question: 'Cho x và y tỉ lệ nghịch với nhau. Khi $x = 4$ thì $y = 9$. Khi $x = 6$ thì y bằng bao nhiêu?',
        options: [
          { id: 'opt-23-3a', text: 'y = 6', isCorrect: true },
          { id: 'opt-23-3b', text: 'y = 13,5', isCorrect: false },
          { id: 'opt-23-3c', text: 'y = 24', isCorrect: false },
          { id: 'opt-23-3d', text: 'y = 36', isCorrect: false }
        ],
        correctAnswerId: 'opt-23-3a',
        progressiveHints: [
          'Tính hệ số tích không đổi: a = x * y = 4 * 9 = 36.',
          'Khi x = 6 thì y = 36 / 6.'
        ],
        explanation: 'Tích không đổi $a = 4 \\cdot 9 = 36$. Khi $x = 6$ thì $y = \\frac{36}{6} = 6$.',
        competencyRef: 'KNTT-T23-03',
        points: 25
      },
      {
        id: 'q23-4',
        tier: 'van_dung',
        question: 'Một ô tô chạy từ Hà Nội đến Hải Phòng với vận tốc 60 km/h hết 2 giờ. Nếu ô tô chạy với vận tốc 80 km/h thì thời gian đi là bao lâu?',
        options: [
          { id: 'opt-23-4a', text: '1,5 giờ (1 giờ 30 phút)', isCorrect: true },
          { id: 'opt-23-4b', text: '1,2 giờ', isCorrect: false },
          { id: 'opt-23-4c', text: '2,5 giờ', isCorrect: false },
          { id: 'opt-23-4d', text: '1,8 giờ', isCorrect: false }
        ],
        correctAnswerId: 'opt-23-4a',
        progressiveHints: [
          'Quãng đường s = v * t = 60 * 2 = 120 km.',
          'Tính thời gian mới: t2 = s / v2 = 120 / 80.'
        ],
        explanation: 'Quãng đường là $s = 60 \\cdot 2 = 120\\text{ km}$. Thời gian đi với vận tốc $80\\text{ km/h}$ là $t = \\frac{120}{80} = 1,5$ giờ.',
        competencyRef: 'KNTT-T23-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-23-1',
        prompt: 'Bố hỏi con: Vận tốc đi xe và thời gian đến nơi là quan hệ tỉ lệ thuận hay tỉ lệ nghịch? Vì sao?',
        contextForParent: 'Kiểm tra độ hiểu bản chất của tỉ lệ nghịch trong đời sống di chuyển.',
        suggestedAnswerTip: 'Là tỉ lệ nghịch, vì đi càng nhanh (vận tốc tăng) thì thời gian đến nơi càng ít (thời gian giảm).',
        sampleChildResponse: 'Tỉ lệ nghịch bố ạ, vì bố phóng xe nhanh hơn thì thời gian đi sẽ ngắn lại!'
      },
      {
        id: 'dp-23-2',
        prompt: 'Bố hỏi con: Có một gói kẹo 60 cái, số cái kẹo mỗi người nhận và số người cùng chia kẹo là quan hệ gì?',
        contextForParent: 'Hình dung về tích không đổi $x \\cdot y = 60$.',
        suggestedAnswerTip: 'Tỉ lệ nghịch, vì càng đông người chia thì mỗi người nhận được càng ít kẹo, nhưng tổng số kẹo luôn là 60.',
        sampleChildResponse: 'Tỉ lệ nghịch bố ơi, 2 người chia thì mỗi người 30 cái, nhưng 6 người chia thì mỗi người chỉ được 10 cái thôi!'
      },
      {
        id: 'dp-23-3',
        prompt: 'Bố hỏi con: Điểm khác biệt lớn nhất giữa tỉ lệ thuận và tỉ lệ nghịch là gì?',
        contextForParent: 'Giúp con tóm tắt ngắn gọn sự đối lập giữa hai bài học trọng tâm.',
        suggestedAnswerTip: 'Tỉ lệ thuận: Thương không đổi ($y/x = k$). Tỉ lệ nghịch: Tích không đổi ($x \\cdot y = a$).',
        sampleChildResponse: 'Tỉ lệ thuận thì thương không đổi (cùng tăng cùng giảm), còn tỉ lệ nghịch thì tích không đổi (cái này tăng thì cái kia giảm) bố ạ!'
      }
    ]
  }
];
