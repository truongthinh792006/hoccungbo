import { Math7Lesson } from '../../types/curriculum';

export const chapter2Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 5: LÀM QUEN VỚI SỐ THẬP PHÂN VÔ HẠN TUẦN HOÀN
  // ==========================================================================
  {
    id: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 7,
    chapterId: 'chuong_2_so_thuc',
    chapterTitle: 'Chương II: Số Thực',
    unit: 'Chương II: Số thực',
    title: 'Bài 5: Làm quen với số thập phân vô hạn tuần hoàn',
    subtitle: 'Khám phá chu kỳ lặp lại vô tận của phân số và cách viết gọn bằng dấu ngoặc đơn',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c2-5-1',
        level: 'nhan_biet',
        code: 'KNTT-T05-01',
        description: 'Nhận biết số thập phân hữu hạn và số thập phân vô hạn tuần hoàn, chỉ ra được chu kỳ.',
        mastered: false
      },
      {
        id: 'lt-c2-5-2',
        level: 'thong_hieu',
        code: 'KNTT-T05-02',
        description: 'Giải thích được điều kiện để một phân số tối giản viết được dưới dạng số thập phân hữu hạn hoặc vô hạn tuần hoàn.',
        mastered: false
      },
      {
        id: 'lt-c2-5-3',
        level: 'van_dung',
        code: 'KNTT-T05-03',
        description: 'Chuyển đổi qua lại giữa phân số và số thập phân vô hạn tuần hoàn đơn giản: $0,(1) = \\frac{1}{9}; 0,(3) = \\frac{1}{3}$.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c2-5-1',
        title: 'Khái niệm số thập phân vô hạn tuần hoàn & Chu kỳ',
        summary: 'Khi chia tử số cho mẫu số mà phép chia không bao giờ dứt và xuất hiện một cụm chữ số lặp đi lặp lại mãi mãi, ta được một số thập phân vô hạn tuần hoàn. Cụm chữ số lặp lại đó gọi là chu kỳ.',
        latexFormula: '\\frac{1}{3} = 0,333\\dots = 0,(3); \\quad \\frac{1}{11} = 0,0909\\dots = 0,(09); \\quad -\\frac{5}{6} = -0,8333\\dots = -0,8(3)',
        exampleSnippet: 'Chu kỳ của 0,(3) là 3. Chu kỳ của 0,(09) là 09. Chu kỳ của 1,2(35) là 35.',
        pitfallWarning: 'Đặt dấu ngoặc đơn đúng vào phần lặp lại: Số 0,8333... lặp số 3 thì viết là 0,8(3), KHÔNG viết là 0,(83)!',
        realLifeApplication: 'Chia đều 1 triệu đồng cho 3 người góp vốn, mỗi người nhận được $333.333,(3)$ đồng.'
      },
      {
        id: 'c2-5-2',
        title: 'Dấu hiệu nhận biết phân số hữu hạn và tuần hoàn',
        summary: 'Nếu phân số tối giản với mẫu dương KHÔNG có ước nguyên tố nào khác 2 và 5 thì viết được dưới dạng số thập phân hữu hạn. Nếu mẫu có ước nguyên tố khác 2 và 5 (như 3, 7, 11...) thì viết được dưới dạng số thập phân vô hạn tuần hoàn.',
        latexFormula: '\\text{Mẫu } m = 2^a \\cdot 5^b \\implies \\text{Hữu hạn}; \\qquad \\text{Mẫu có ước nguyên tố khác 2, 5} \\implies \\text{Tuần hoàn}',
        exampleSnippet: '$\\frac{7}{20}$: Mẫu $20 = 2^2 \\cdot 5$ chỉ có ước 2 và 5 $\\implies 0,35$ (hữu hạn).\n$\\frac{5}{12}$: Mẫu $12 = 2^2 \\cdot 3$ có ước nguyên tố 3 $\\implies 0,41(6)$ (vô hạn tuần hoàn).',
        pitfallWarning: 'Bắt buộc phải RÚT GỌN phân số về tối giản trước khi xét mẫu số! Ví dụ: $\\frac{6}{15} = \\frac{2}{5}$ có mẫu là 5 nên là số hữu hạn, đừng nhìn vội mẫu 15 có số 3 mà kết luận sai!',
        realLifeApplication: 'Đo lường thể tích chia vạch: một số lượng chia được thành vạch chẵn hữu hạn (1/4 lít = 0,25l), còn 1/3 lít bắt buộc phải làm tròn.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c2-5-1',
        tier: 'nhan_biet',
        question: 'Chu kỳ của số thập phân vô hạn tuần hoàn -0,8333... là bao nhiêu?',
        formula: 'x = -0,8333\\dots',
        options: [
          { id: 'opt-c2-5-1a', text: '3', isCorrect: true },
          { id: 'opt-c2-5-1b', text: '83', isCorrect: false },
          { id: 'opt-c2-5-1c', text: '8', isCorrect: false },
          { id: 'opt-c2-5-1d', text: '33', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-5-1a',
        progressiveHints: [
          'Tìm phần chữ số lặp lại tuần hoàn mãi mãi sau dấu phẩy.',
          'Số 8 chỉ xuất hiện một lần, chỉ có chữ số 3 là lặp lại liên tục: -0,8(3).'
        ],
        explanation: 'Số -0,8333... có chữ số 3 lặp lại vô tận nên chu kỳ là 3, viết gọn là -0,8(3).',
        competencyRef: 'lt-c2-5-1',
        points: 10
      },
      {
        id: 'q-c2-5-2',
        tier: 'nhan_biet',
        question: 'Phân số nào sau đây viết được dưới dạng số thập phân hữu hạn?',
        formula: 'A = \\frac{3}{8}; \\; B = \\frac{1}{6}; \\; C = \\frac{5}{7}; \\; D = \\frac{4}{9}',
        options: [
          { id: 'opt-c2-5-2a', text: '\\frac{3}{8}', isCorrect: true },
          { id: 'opt-c2-5-2b', text: '\\frac{1}{6}', isCorrect: false },
          { id: 'opt-c2-5-2c', text: '\\frac{5}{7}', isCorrect: false },
          { id: 'opt-c2-5-2d', text: '\\frac{4}{9}', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-5-2a',
        progressiveHints: [
          'Phân tích mẫu số thành các thừa số nguyên tố.',
          'Mẫu 8 = 2^3 chỉ chứa thừa số nguyên tố 2 nên sẽ viết được thành số thập phân hữu hạn.'
        ],
        explanation: 'Phân số 3/8 tối giản và mẫu 8 = 2^3 (chỉ có ước nguyên tố 2) nên viết được thành số thập phân hữu hạn 0,375. Các mẫu 6, 7, 9 đều có ước nguyên tố 3 hoặc 7.',
        competencyRef: 'lt-c2-5-2',
        points: 10
      },
      {
        id: 'q-c2-5-3',
        tier: 'thong_hieu',
        question: 'Tại sao phân số 9/15 lại viết được dưới dạng số thập phân hữu hạn dù mẫu số 15 chia hết cho 3?',
        formula: 'x = \\frac{9}{15}',
        options: [
          { id: 'opt-c2-5-3a', text: 'Vì khi rút gọn tối giản ta được 3/5, mẫu số 5 chỉ có ước nguyên tố là 5', isCorrect: true },
          { id: 'opt-c2-5-3b', text: 'Vì tử số 9 lớn hơn 5', isCorrect: false },
          { id: 'opt-c2-5-3c', text: 'Vì số 15 là số lẻ', isCorrect: false },
          { id: 'opt-c2-5-3d', text: 'Khẳng định trên sai, 9/15 là số tuần hoàn', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-5-3a',
        progressiveHints: [
          'Quy tắc vàng: Phân số phải được RÚT GỌN TỐI GIẢN trước khi kiểm tra mẫu.',
          '9/15 chia cả tử và mẫu cho 3 được 3/5.'
        ],
        explanation: 'Rút gọn tối giản: 9/15 = 3/5. Mẫu số 5 chỉ có ước nguyên tố là 5 nên 9/15 = 0,6 (số thập phân hữu hạn).',
        competencyRef: 'lt-c2-5-2',
        points: 10
      },
      {
        id: 'q-c2-5-4',
        tier: 'van_dung',
        question: 'Số thập phân vô hạn tuần hoàn 0,(6) tương ứng với phân số tối giản nào?',
        formula: 'x = 0,(6) = 0,666\\dots',
        options: [
          { id: 'opt-c2-5-4a', text: '\\frac{2}{3}', isCorrect: true },
          { id: 'opt-c2-5-4b', text: '\\frac{6}{10}', isCorrect: false },
          { id: 'opt-c2-5-4c', text: '\\frac{3}{5}', isCorrect: false },
          { id: 'opt-c2-5-4d', text: '\\frac{6}{100}', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-5-4a',
        progressiveHints: [
          'Biết rằng 0,(1) = 1/9.',
          'Vậy 0,(6) = 6 * 0,(1) = 6 * (1/9) = 6/9, rút gọn phân số này.'
        ],
        explanation: 'Ta có 0,(1) = 1/9, do đó 0,(6) = 6/9 = 2/3. Thử lại: 2 : 3 = 0,6666... = 0,(6).',
        competencyRef: 'lt-c2-5-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c2-5-1',
        prompt: 'Bố hỏi con: "Khi chia 1 cho 3, phép chia có bao giờ dừng lại không con? Trong toán người ta ghi kết quả đó như thế nào?"',
        contextForParent: 'Khái niệm chu kỳ và cách viết dấu ngoặc đơn.',
        suggestedAnswerTip: 'Không bao giờ dừng lại, ra 0,333... lặp vô tận, viết gọn là 0,(3) với 3 là chu kỳ.',
        sampleChildResponse: 'Không bao giờ hết bố ạ! Ra 0,333... mãi mãi, toán học viết gọn là 0,(3) với số 3 nằm trong ngoặc tròn gọi là chu kỳ ạ!'
      },
      {
        id: 'dp-c2-5-2',
        prompt: 'Mẹ hỏi con: "Làm sao nhìn một phân số mà biết ngay nó chia ra số thập phân hữu hạn hay số tuần hoàn vô hạn?"',
        contextForParent: 'Dấu hiệu nhận biết mẫu số: chỉ chứa ước 2 và 5.',
        suggestedAnswerTip: 'Rút gọn phân số tối giản trước, nếu mẫu chỉ có thừa số 2 hoặc 5 thì là hữu hạn; nếu có số khác như 3, 7 thì là tuần hoàn.',
        sampleChildResponse: 'Con rút gọn tối giản rồi xem mẫu số mẹ ạ, mẫu mà chỉ có ước nguyên tố 2 và 5 thì ra số hữu hạn chẵn đẹp, còn có 3 hay 7 thì lặp vô hạn!'
      },
      {
        id: 'dp-c2-5-3',
        prompt: 'Bố hỏi con: "Số thập phân vô hạn tuần hoàn có phải là số hữu tỉ không con nhỉ?"',
        contextForParent: 'Khẳng định bản chất: mọi số tuần hoàn đều viết được thành phân số nên đều là số hữu tỉ.',
        suggestedAnswerTip: 'Là số hữu tỉ! Vì mọi số thập phân vô hạn tuần hoàn đều đổi được về dạng phân số a/b.',
        sampleChildResponse: 'Chắc chắn là số hữu tỉ bố ơi! Vì số tuần hoàn nào cũng đổi ngược lại thành phân số a/b được ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 6: SỐ VÔ TỈ. CĂN BẬC HAI SỐ HỌC
  // ==========================================================================
  {
    id: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 8,
    chapterId: 'chuong_2_so_thuc',
    chapterTitle: 'Chương II: Số Thực',
    unit: 'Chương II: Số thực',
    title: 'Bài 6: Số vô tỉ. Căn bậc hai số học',
    subtitle: 'Khám phá thế giới số vô tỉ I bí ẩn và phép toán lấy căn bậc hai số học',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c2-6-1',
        level: 'nhan_biet',
        code: 'KNTT-T06-01',
        description: 'Nhận biết khái niệm số vô tỉ là số thập phân vô hạn KHÔNG tuần hoàn (tập I) và số pi, căn 2.',
        mastered: false
      },
      {
        id: 'lt-c2-6-2',
        level: 'nhan_biet',
        code: 'KNTT-T06-02',
        description: 'Nhận biết khái niệm và kí hiệu căn bậc hai số học: $\\sqrt{a} = x \\iff x \\ge 0 \\text{ và } x^2 = a$.',
        mastered: false
      },
      {
        id: 'lt-c2-6-3',
        level: 'thong_hieu',
        code: 'KNTT-T06-03',
        description: 'Tính chính xác căn bậc hai số học của các số chính phương: $\\sqrt{0} = 0, \\sqrt{1} = 1, \\sqrt{4} = 2, \\sqrt{9} = 3, \\sqrt{16} = 4\\dots$',
        mastered: false
      },
      {
        id: 'lt-c2-6-4',
        level: 'van_dung',
        code: 'KNTT-T06-04',
        description: 'Sử dụng máy tính cầm tay để tính hoặc ước lượng giá trị căn bậc hai số học và giải bài toán cạnh hình vuông.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c2-6-1',
        title: 'Số vô tỉ (Tập hợp I)',
        summary: 'Số vô tỉ là số viết được dưới dạng số thập phân vô hạn không tuần hoàn. Tập hợp các số vô tỉ được kí hiệu là $\\mathbb{I}$. Số vô tỉ không thể viết được dưới dạng phân số $\\frac{a}{b}$.',
        latexFormula: '\\mathbb{I} = \\{ x \\mid x \\text{ là số thập phân vô hạn không tuần hoàn} \\}; \\quad \\pi \\approx 3,14159\\dots \\in \\mathbb{I}',
        exampleSnippet: 'Các ví dụ điển hình:\n- Số $\\pi = 3,1415926535... \\in \\mathbb{I}$\n- Căn của số không chính phương: $\\sqrt{2} = 1,4142135... \\in \\mathbb{I}$\n- Số $0,1010010001... \\in \\mathbb{I}$ (số số 0 tăng dần, không có chu kỳ lặp lại).',
        pitfallWarning: 'Đừng nhầm lẫn số $\\pi$ bằng đúng $3,14$ hay $\\frac{22}{7}$. Đó chỉ là các giá trị xấp xỉ gần đúng trong tính toán!',
        realLifeApplication: 'Đường chéo của sân bóng chuyền hình vuông cạnh 9m có độ dài là $9\\sqrt{2} \\approx 12,73$ mét.'
      },
      {
        id: 'c2-6-2',
        title: 'Căn bậc hai số học',
        summary: 'Căn bậc hai số học của một số a không âm là số x không âm sao cho $x^2 = a$. Kí hiệu là $\\sqrt{a}$. Số âm không có căn bậc hai số học.',
        latexFormula: '\\sqrt{a} = x \\iff \\begin{cases} x \\ge 0 \\\\ x^2 = a \\end{cases} \\quad (a \\ge 0)',
        exampleSnippet: '$\\sqrt{25} = 5$ vì $5 \\ge 0$ và $5^2 = 25$.\n$\\sqrt{0} = 0$.\n$\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$.',
        pitfallWarning: 'Bẫy rất hay gặp: $\\sqrt{25}$ chỉ bằng $+5$, TUYỆT ĐỐI KHÔNG BẰNG $-5$. Dù $(-5)^2 = 25$, nhưng căn bậc hai số học quy ước luôn KHÔNG ÂM ($x \\ge 0$)!',
        realLifeApplication: 'Biết diện tích mảnh đất hình vuông là $64 \\text{ m}^2$, độ dài hàng rào một cạnh là $\\sqrt{64} = 8$ mét.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c2-6-1',
        tier: 'nhan_biet',
        question: 'Số nào sau đây là một số vô tỉ?',
        formula: 'x \\in \\mathbb{I}',
        options: [
          { id: 'opt-c2-6-1a', text: '\\sqrt{2}', isCorrect: true },
          { id: 'opt-c2-6-1b', text: '\\sqrt{4}', isCorrect: false },
          { id: 'opt-c2-6-1c', text: '0,(3)', isCorrect: false },
          { id: 'opt-c2-6-1d', text: '-2,5', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-6-1a',
        progressiveHints: [
          'Số vô tỉ là số thập phân vô hạn không tuần hoàn.',
          'Căn bậc hai của một số không chính phương (như 2, 3, 5) luôn là số vô tỉ. Chú ý sqrt(4) = 2 là số hữu tỉ.'
        ],
        explanation: 'sqrt(2) = 1,41421... là số thập phân vô hạn không tuần hoàn (số vô tỉ). sqrt(4) = 2 (hữu tỉ), 0,(3) = 1/3 (hữu tỉ), -2,5 = -5/2 (hữu tỉ).',
        competencyRef: 'lt-c2-6-1',
        points: 10
      },
      {
        id: 'q-c2-6-2',
        tier: 'nhan_biet',
        question: 'Căn bậc hai số học của 49 là:',
        formula: '\\sqrt{49} = ?',
        options: [
          { id: 'opt-c2-6-2a', text: '7', isCorrect: true },
          { id: 'opt-c2-6-2b', text: '-7', isCorrect: false },
          { id: 'opt-c2-6-2c', text: '\\pm 7', isCorrect: false },
          { id: 'opt-c2-6-2d', text: '24,5', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-6-2a',
        progressiveHints: [
          'Căn bậc hai số học theo định nghĩa luôn là một số không âm (x >= 0).',
          '7^2 = 49 và 7 >= 0.'
        ],
        explanation: 'Theo định nghĩa, căn bậc hai số học của 49 là số không âm mà bình phương bằng 49, đó là 7 (vì 7 >= 0 và 7^2 = 49).',
        competencyRef: 'lt-c2-6-2',
        points: 10
      },
      {
        id: 'q-c2-6-3',
        tier: 'thong_hieu',
        question: 'Tính giá trị của biểu thức: H = sqrt(64) - sqrt(25) + sqrt(1)',
        formula: 'H = \\sqrt{64} - \\sqrt{25} + \\sqrt{1}',
        options: [
          { id: 'opt-c2-6-3a', text: '4', isCorrect: true },
          { id: 'opt-c2-6-3b', text: '2', isCorrect: false },
          { id: 'opt-c2-6-3c', text: '6', isCorrect: false },
          { id: 'opt-c2-6-3d', text: '14', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-6-3a',
        progressiveHints: [
          'Tính từng căn bậc hai số học: sqrt(64) = 8, sqrt(25) = 5, sqrt(1) = 1.',
          'Thực hiện phép tính: 8 - 5 + 1.'
        ],
        explanation: 'sqrt(64) = 8; sqrt(25) = 5; sqrt(1) = 1. Do đó H = 8 - 5 + 1 = 4.',
        competencyRef: 'lt-c2-6-3',
        points: 10
      },
      {
        id: 'q-c2-6-4',
        tier: 'van_dung',
        question: 'Một căn phòng hình vuông có diện tích sàn là 81 m2. Người ta cần mua nẹp chân tường để nẹp xung quanh phòng (trừ đi cửa ra vào rộng 1 m). Hỏi cần bao nhiêu mét nẹp?',
        formula: 'a = \\sqrt{81}; \\quad \\text{Chu vi} = 4a - 1',
        options: [
          { id: 'opt-c2-6-4a', text: '35 m', isCorrect: true },
          { id: 'opt-c2-6-4b', text: '36 m', isCorrect: false },
          { id: 'opt-c2-6-4c', text: '32 m', isCorrect: false },
          { id: 'opt-c2-6-4d', text: '80 m', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-6-4a',
        progressiveHints: [
          'Bước 1: Cạnh của phòng hình vuông là sqrt(81) = 9 m.',
          'Bước 2: Chu vi 4 bức tường là 4 * 9 = 36 m. Trừ đi cửa ra vào 1 m.'
        ],
        explanation: 'Cạnh phòng hình vuông là sqrt(81) = 9m. Tổng chiều dài 4 bức tường là 4 * 9 = 36m. Trừ 1m cửa: 36 - 1 = 35m nẹp.',
        competencyRef: 'lt-c2-6-4',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c2-6-1',
        prompt: 'Bố hỏi con: "Số pi = 3,14159... hay số căn 2 có gì khác với số 0,333... mà người ta gọi là số vô tỉ?"',
        contextForParent: 'Phân biệt số vô hạn tuần hoàn (hữu tỉ) và vô hạn KHÔNG tuần hoàn (vô tỉ).',
        suggestedAnswerTip: 'Số 0,333... lặp lại đều đặn (tuần hoàn) nên là hữu tỉ, còn số pi và căn 2 các chữ số phía sau nhảy lộn xộn không theo chu kỳ nên là số vô tỉ.',
        sampleChildResponse: 'Dạ số pi và căn 2 lặp vô tận nhưng không hề có chu kỳ lặp lại nào cả, các chữ số ngẫu nhiên nên gọi là số vô tỉ bố ạ!'
      },
      {
        id: 'dp-c2-6-2',
        prompt: 'Mẹ hỏi con: "Căn bậc hai của 25 có bằng -5 không con, hay chỉ bằng +5?"',
        contextForParent: 'Nhấn mạnh quy ước căn bậc hai số học luôn không âm.',
        suggestedAnswerTip: 'Chỉ bằng +5 thôi! Dù (-5)^2 = 25, nhưng kí hiệu căn bậc hai số học bắt buộc kết quả phải không âm.',
        sampleChildResponse: 'Dạ chỉ bằng 5 thôi mẹ ơi! Kí hiệu căn bậc hai số học quy định kết quả luôn luôn là số dương ạ!'
      },
      {
        id: 'dp-c2-6-3',
        prompt: 'Bố hỏi con: "Nếu một khu vườn hình vuông rộng 100 mét vuông thì một cạnh của vườn dài bao nhiêu mét?"',
        contextForParent: 'Ứng dụng hình học của căn bậc hai số học.',
        suggestedAnswerTip: 'Dài 10 mét, vì 10 x 10 = 100 (căn bậc hai số học của 100 là 10).',
        sampleChildResponse: 'Dạ một cạnh dài 10 mét bố ạ, vì căn bậc hai số học của 100 là 10 (10 nhân 10 bằng 100)!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 7: TẬP HỢP CÁC SỐ THỰC
  // ==========================================================================
  {
    id: 'bai_7_tap_hop_cac_so_thuc',
    order: 9,
    chapterId: 'chuong_2_so_thuc',
    chapterTitle: 'Chương II: Số Thực',
    unit: 'Chương II: Số thực',
    title: 'Bài 7: Tập hợp các số thực',
    subtitle: 'Hợp nhất số hữu tỉ và số vô tỉ thành tập số thực R, giá trị tuyệt đối của số thực',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c2-7-1',
        level: 'nhan_biet',
        code: 'KNTT-T07-01',
        description: 'Nhận biết tập hợp số thực R bao gồm cả số hữu tỉ Q và số vô tỉ I: $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$.',
        mastered: false
      },
      {
        id: 'lt-c2-7-2',
        level: 'nhan_biet',
        code: 'KNTT-T07-02',
        description: 'Nhận biết khái niệm giá trị tuyệt đối $|x|$ của một số thực: khoảng cách từ điểm x đến gốc 0 trên trục số.',
        mastered: false
      },
      {
        id: 'lt-c2-7-3',
        level: 'thong_hieu',
        code: 'KNTT-T07-03',
        description: 'Biểu diễn và so sánh hai số thực bất kì, nắm được nguyên tắc trục số thực được lấp đầy kín mít.',
        mastered: false
      },
      {
        id: 'lt-c2-7-4',
        level: 'van_dung',
        code: 'KNTT-T07-04',
        description: 'Tính toán biểu thức có chứa dấu giá trị tuyệt đối và giải bài toán tìm x dạng $|x| = a \\ (a \\ge 0)$.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c2-7-1',
        title: 'Tập hợp các số thực (R)',
        summary: 'Số hữu tỉ và số vô tỉ được gọi chung là số thực. Tập hợp các số thực được kí hiệu là R. Mỗi số thực được biểu diễn bởi một điểm trên trục số. Ngược lại, mỗi điểm trên trục số đều biểu diễn một số thực. Trục số thực được lấp đầy kín.',
        latexFormula: '\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}; \\qquad \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}',
        exampleSnippet: '- Số hữu tỉ: $0, -3, 1/2, 0,(3) \\in \\mathbb{R}$.\n- Số vô tỉ: $\\sqrt{2}, \\pi, -\\sqrt{5} \\in \\mathbb{R}$.',
        pitfallWarning: 'Tập hợp Q và I không có phần tử chung nào (giao nhau bằng rỗng), nhưng hợp lại tạo thành toàn bộ tập R!',
        realLifeApplication: 'Mọi đại lượng vật lý đo đạc trong thực tế (chiều dài, khối lượng, điện áp, thời gian) đều là số thực.'
      },
      {
        id: 'c2-7-2',
        title: 'Giá trị tuyệt đối của một số thực',
        summary: 'Giá trị tuyệt đối của số thực x là khoảng cách từ điểm x đến điểm 0 trên trục số, kí hiệu là |x|. Giá trị tuyệt đối của số dương là chính nó, của số âm là số đối của nó, của số 0 là 0.',
        latexFormula: '|x| = \\begin{cases} x & \\text{nếu } x \\ge 0 \\\\ -x & \\text{nếu } x < 0 \\end{cases}; \\qquad |x| \\ge 0, \\; |-x| = |x|',
        exampleSnippet: '$|3,5| = 3,5; \\quad |-1,8| = 1,8; \\quad |-\\sqrt{2}| = \\sqrt{2}; \\quad |0| = 0.$',
        pitfallWarning: 'Giá trị tuyệt đối của mọi số thực LUÔN LUÔN KHÔNG ÂM ($|x| \\ge 0$). Phương trình $|x| = -3$ là VÔ NGHIỆM vì khoảng cách không thể âm!',
        realLifeApplication: 'Đo sai số kỹ thuật trong sản xuất: $|d - d_{\\text{chuẩn}}| \\le 0,05 \\text{ mm}$.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c2-7-1',
        tier: 'nhan_biet',
        question: 'Tập hợp các số thực R được tạo thành bởi sự kết hợp của hai tập hợp nào?',
        formula: '\\mathbb{R} = ?',
        options: [
          { id: 'opt-c2-7-1a', text: 'Tập số hữu tỉ Q và tập số vô tỉ I', isCorrect: true },
          { id: 'opt-c2-7-1b', text: 'Tập số tự nhiên N và tập số nguyên Z', isCorrect: false },
          { id: 'opt-c2-7-1c', text: 'Chỉ gồm các số nguyên và phân số', isCorrect: false },
          { id: 'opt-c2-7-1d', text: 'Tập số nguyên Z và tập số vô tỉ I', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-7-1a',
        progressiveHints: [
          'Số thực gồm tất cả số hữu tỉ và tất cả số vô tỉ.',
          'R = Q hợp I.'
        ],
        explanation: 'Số thực bao gồm toàn bộ số hữu tỉ Q và số vô tỉ I: R = Q hợp I.',
        competencyRef: 'lt-c2-7-1',
        points: 10
      },
      {
        id: 'q-c2-7-2',
        tier: 'nhan_biet',
        question: 'Giá trị tuyệt đối của số thực -sqrt(3) là bao nhiêu?',
        formula: '|-\\sqrt{3}| = ?',
        options: [
          { id: 'opt-c2-7-2a', text: '\\sqrt{3}', isCorrect: true },
          { id: 'opt-c2-7-2b', text: '-\\sqrt{3}', isCorrect: false },
          { id: 'opt-c2-7-2c', text: '3', isCorrect: false },
          { id: 'opt-c2-7-2d', text: '-3', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-7-2a',
        progressiveHints: [
          'Giá trị tuyệt đối là khoảng cách đến gốc 0 nên luôn không âm.',
          '|-a| = a với a > 0.'
        ],
        explanation: 'Vì -sqrt(3) < 0 nên | -sqrt(3) | = -(-sqrt(3)) = sqrt(3).',
        competencyRef: 'lt-c2-7-2',
        points: 10
      },
      {
        id: 'q-c2-7-3',
        tier: 'thong_hieu',
        question: 'So sánh hai số thực: a = sqrt(5) và b = 2, kết luận nào đúng?',
        formula: 'a = \\sqrt{5}; \\quad b = 2 = \\sqrt{4}',
        options: [
          { id: 'opt-c2-7-3a', text: '\\sqrt{5} > 2 \\text{ (vì } 5 > 4)', isCorrect: true },
          { id: 'opt-c2-7-3b', text: '\\sqrt{5} < 2', isCorrect: false },
          { id: 'opt-c2-7-3c', text: '\\sqrt{5} = 2', isCorrect: false },
          { id: 'opt-c2-7-3d', text: 'Không so sánh được vì căn 5 là số vô tỉ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-7-3a',
        progressiveHints: [
          'Đưa số 2 về dạng căn bậc hai: 2 = sqrt(4).',
          'Vì 5 > 4 nên sqrt(5) > sqrt(4) = 2.'
        ],
        explanation: 'Ta có 2 = sqrt(4). Vì 5 > 4 nên sqrt(5) > sqrt(4) = 2. Do đó sqrt(5) > 2.',
        competencyRef: 'lt-c2-7-3',
        points: 10
      },
      {
        id: 'q-c2-7-4',
        tier: 'van_dung',
        question: 'Tìm tất cả các số thực x thỏa mãn: |x - 1,5| = 2,5',
        formula: '|x - 1,5| = 2,5',
        options: [
          { id: 'opt-c2-7-4a', text: 'x = 4 \\text{ hoặc } x = -1', isCorrect: true },
          { id: 'opt-c2-7-4b', text: 'Chỉ có x = 4', isCorrect: false },
          { id: 'opt-c2-7-4c', text: 'x = 4 \\text{ hoặc } x = 1', isCorrect: false },
          { id: 'opt-c2-7-4d', text: 'x = 1 \\text{ hoặc } x = -4', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-7-4a',
        progressiveHints: [
          'Phương trình |A| = b (với b > 0) chia ra hai trường hợp: A = b hoặc A = -b.',
          'TH1: x - 1,5 = 2,5 -> x = 4. TH2: x - 1,5 = -2,5 -> x = -1.'
        ],
        explanation: 'Trường hợp 1: x - 1,5 = 2,5 => x = 4. Trường hợp 2: x - 1,5 = -2,5 => x = -2,5 + 1,5 = -1. Vậy x = 4 hoặc x = -1.',
        competencyRef: 'lt-c2-7-4',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c2-7-1',
        prompt: 'Bố hỏi con: "Tập số thực R có gì kì diệu mà lấp đầy được toàn bộ trục số hả con?"',
        contextForParent: 'Ý nghĩa hình học của tập số thực: không còn một lỗ hổng nào trên trục số.',
        suggestedAnswerTip: 'Vì trước đây tập số hữu tỉ vẫn còn những khe hở (như vị trí của căn 2, pi), khi bổ sung thêm số vô tỉ thì trục số trở nên liên tục kín mít.',
        sampleChildResponse: 'Dạ trước đây số hữu tỉ còn những lỗ trống chưa lấp kín, nay gom cả số vô tỉ lại thành tập số thực R thì kín mít toàn bộ trục số luôn bố ạ!'
      },
      {
        id: 'dp-c2-7-2',
        prompt: 'Mẹ hỏi con: "Tại sao giá trị tuyệt đối của một số không bao giờ là số âm?"',
        contextForParent: 'Bản chất hình học của giá trị tuyệt đối là khoảng cách.',
        suggestedAnswerTip: 'Vì giá trị tuyệt đối chính là khoảng cách từ số đó về số 0, mà khoảng cách thì không thể nào âm được.',
        sampleChildResponse: 'Bởi vì giá trị tuyệt đối chính là khoảng cách từ điểm đó về gốc 0 mẹ ạ, mà khoảng cách bước đi thì luôn lớn hơn hoặc bằng 0 ạ!'
      },
      {
        id: 'dp-c2-7-3',
        prompt: 'Bố hỏi con: "Nếu đề bài cho |x| = -5 thì tìm được x bằng bao nhiêu con nhỉ?"',
        contextForParent: 'Bẫy vô nghiệm của giá trị tuyệt đối.',
        suggestedAnswerTip: 'Vô nghiệm! Không có số nào có giá trị tuyệt đối là số âm cả.',
        sampleChildResponse: 'Vô nghiệm ngay bố ơi! Giá trị tuyệt đối luôn không âm nên không thể nào bằng -5 được ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 8: LUYỆN TẬP CHUNG CHƯƠNG II
  // ==========================================================================
  {
    id: 'luyen_tap_chung_chuong_2',
    order: 10,
    chapterId: 'chuong_2_so_thuc',
    chapterTitle: 'Chương II: Số Thực',
    unit: 'Chương II: Số thực',
    title: 'Luyện tập chung Chương II',
    subtitle: 'Rèn kỹ năng làm tròn số, ước lượng kết quả tính toán và tổng kết số thực',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c2-8-1',
        level: 'nhan_biet',
        code: 'KNTT-T08-01',
        description: 'Nhận biết quy tắc làm tròn số theo hàng quy chuẩn hoặc theo độ chính xác d cho trước.',
        mastered: false
      },
      {
        id: 'lt-c2-8-2',
        level: 'thong_hieu',
        code: 'KNTT-T08-02',
        description: 'Ước lượng nhanh kết quả của các phép tính phức tạp trong đời sống thực tế bằng cách làm tròn.',
        mastered: false
      },
      {
        id: 'lt-c2-8-3',
        level: 'van_dung',
        code: 'KNTT-T08-03',
        description: 'Vận dụng tổng hợp căn bậc hai, giá trị tuyệt đối và số thực để giải các bài toán thực tiễn.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c2-8-1',
        title: 'Quy tắc làm tròn số',
        summary: 'Nếu chữ số đầu tiên bỏ đi nhỏ hơn 5 thì giữ nguyên chữ số hàng làm tròn. Nếu chữ số đầu tiên bỏ đi lớn hơn hoặc bằng 5 thì cộng thêm 1 vào chữ số hàng làm tròn. Các chữ số hàng thập phân bỏ đi; các chữ số phần nguyên thay bằng chữ số 0.',
        latexFormula: '3,14159\\dots \\approx 3,14 \\text{ (làm tròn đến hàng phần trăm)}; \\quad 75.840 \\approx 76.000 \\text{ (hàng nghìn)}',
        exampleSnippet: '- Làm tròn số $4,537$ đến hàng phần mười: chữ số sau hàng phần mười là 3 (< 5) $\\implies 4,5$.\n- Làm tròn số $12,68$ đến hàng đơn vị: chữ số sau hàng đơn vị là 6 ($\\ge 5$) $\\implies 13$.',
        pitfallWarning: 'Xác định đúng chữ số đứng liền sau hàng cần làm tròn để quyết định giữ nguyên hay cộng thêm 1.',
        realLifeApplication: 'Đi siêu thị thanh toán hóa đơn: Tổng tiền 127.350 đồng được làm tròn đến hàng nghìn thành 127.000 đồng.'
      },
      {
        id: 'c2-8-2',
        title: 'Ước lượng kết quả phép tính',
        summary: 'Để kiểm tra nhanh xem phép tính có hợp lý không, ta làm tròn các số hạng/thừa số đến hàng thích hợp rồi thực hiện phép tính nhẩm.',
        latexFormula: '49,8 \\cdot 20,2 \\approx 50 \\cdot 20 = 1000',
        exampleSnippet: 'Ước lượng $102 \\cdot 4,95$: Ta làm tròn $102 \\approx 100$ và $4,95 \\approx 5$, tích ước lượng khoảng $100 \\cdot 5 = 500$.',
        pitfallWarning: 'Ước lượng chỉ dùng để định lượng nhanh kết quả, không thay thế cho lời giải chính xác khi đề bài yêu cầu tính đúng giá trị.',
        realLifeApplication: 'Ước tính nhanh số tiền cần mang khi đi chợ mua 4,8 kg gạo giá 21.000đ/kg: $5 \\times 20.000 = 100.000$đ.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c2-8-1',
        tier: 'nhan_biet',
        question: 'Làm tròn số 3,14159 đến chữ số thập phân thứ hai (hàng phần trăm) ta được kết quả là:',
        formula: 'x = 3,14159 \\approx ?',
        options: [
          { id: 'opt-c2-8-1a', text: '3,14', isCorrect: true },
          { id: 'opt-c2-8-1b', text: '3,15', isCorrect: false },
          { id: 'opt-c2-8-1c', text: '3,1', isCorrect: false },
          { id: 'opt-c2-8-1d', text: '3,142', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-8-1a',
        progressiveHints: [
          'Hàng phần trăm là chữ số 4.',
          'Chữ số ngay sau nó là 1 (< 5), nên ta giữ nguyên chữ số 4.'
        ],
        explanation: 'Chữ số ở hàng phần trăm là 4. Chữ số ngay sau nó là 1 < 5, do đó giữ nguyên hàng phần trăm: 3,14159 ≈ 3,14.',
        competencyRef: 'lt-c2-8-1',
        points: 10
      },
      {
        id: 'q-c2-8-2',
        tier: 'nhan_biet',
        question: 'Làm tròn số 85.620 đến hàng nghìn ta được số nào?',
        formula: 'x = 85.620 \\approx ?',
        options: [
          { id: 'opt-c2-8-2a', text: '86.000', isCorrect: true },
          { id: 'opt-c2-8-2b', text: '85.000', isCorrect: false },
          { id: 'opt-c2-8-2c', text: '90.000', isCorrect: false },
          { id: 'opt-c2-8-2d', text: '85.600', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-8-2a',
        progressiveHints: [
          'Chữ số hàng nghìn là 5.',
          'Chữ số ngay sau nó (hàng trăm) là 6 >= 5, nên cộng thêm 1 vào hàng nghìn: 5 + 1 = 6.'
        ],
        explanation: 'Chữ số hàng nghìn là 5, hàng trăm là 6 >= 5 nên tăng hàng nghìn lên 1 đơn vị thành 86.000.',
        competencyRef: 'lt-c2-8-1',
        points: 10
      },
      {
        id: 'q-c2-8-3',
        tier: 'thong_hieu',
        question: 'Ước lượng kết quả của phép nhân 39,8 * 5,1 bằng cách làm tròn đến hàng đơn vị:',
        formula: 'P = 39,8 \\cdot 5,1 \\approx ?',
        options: [
          { id: 'opt-c2-8-3a', text: '200 (vì 40 * 5 = 200)', isCorrect: true },
          { id: 'opt-c2-8-3b', text: '2000', isCorrect: false },
          { id: 'opt-c2-8-3c', text: '150', isCorrect: false },
          { id: 'opt-c2-8-3d', text: '250', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-8-3a',
        progressiveHints: [
          'Làm tròn 39,8 ≈ 40.',
          'Làm tròn 5,1 ≈ 5. Tính nhẩm: 40 * 5.'
        ],
        explanation: '39,8 ≈ 40 và 5,1 ≈ 5. Tích ước lượng là 40 * 5 = 200.',
        competencyRef: 'lt-c2-8-2',
        points: 10
      },
      {
        id: 'q-c2-8-4',
        tier: 'van_dung',
        question: 'Một mảnh đất hình chữ nhật có chiều dài 19,8 m và chiều rộng 10,2 m. Bác Ba ước tính diện tích để mua hạt giống cỏ, hỏi diện tích ước lượng khoảng bao nhiêu m2?',
        formula: 'S = 19,8 \\cdot 10,2 \\approx 20 \\cdot 10 = ?',
        options: [
          { id: 'opt-c2-8-4a', text: '200 m2', isCorrect: true },
          { id: 'opt-c2-8-4b', text: '300 m2', isCorrect: false },
          { id: 'opt-c2-8-4c', text: '190 m2', isCorrect: false },
          { id: 'opt-c2-8-4d', text: '400 m2', isCorrect: false }
        ],
        correctAnswerId: 'opt-c2-8-4a',
        progressiveHints: [
          'Làm tròn chiều dài 19,8 m ≈ 20 m.',
          'Làm tròn chiều rộng 10,2 m ≈ 10 m. Tính diện tích: 20 * 10.'
        ],
        explanation: 'Làm tròn chiều dài ≈ 20m, chiều rộng ≈ 10m. Diện tích ước lượng S ≈ 20 * 10 = 200 m2.',
        competencyRef: 'lt-c2-8-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c2-8-1',
        prompt: 'Bố hỏi con: "Khi đi siêu thị, làm sao để ước lượng nhanh tổng tiền trong giỏ hàng để không bị thiếu tiền thanh toán?"',
        contextForParent: 'Kỹ năng tính nhẩm ước lượng trong cuộc sống thực tế.',
        suggestedAnswerTip: 'Làm tròn giá từng món đồ lên hàng chục nghìn rồi cộng nhẩm lại.',
        sampleChildResponse: 'Con làm tròn mỗi món lên hàng chục nghìn gần nhất rồi cộng nhẩm, ví dụ 38 nghìn con tính tròn là 40 nghìn cho nhanh bố ạ!'
      },
      {
        id: 'dp-c2-8-2',
        prompt: 'Mẹ hỏi con: "Quy tắc làm tròn số khi nào thì cộng thêm 1, khi nào thì giữ nguyên hả con?"',
        contextForParent: 'Quy tắc làm tròn số cơ bản (mốc số 5).',
        suggestedAnswerTip: 'Nếu chữ số sau nó từ 5 trở lên thì cộng 1, nếu nhỏ hơn 5 (từ 0 đến 4) thì giữ nguyên.',
        sampleChildResponse: 'Nếu số ngay sau nhỏ hơn 5 thì giữ nguyên, còn từ 5 trở lên thì cộng thêm 1 đơn vị mẹ ạ!'
      },
      {
        id: 'dp-c2-8-3',
        prompt: 'Bố hỏi con: "Số thực và số hữu tỉ khác nhau thế nào, cái nào bao trùm cái nào?"',
        contextForParent: 'Khái quát hóa tập số thực R bao trùm toàn bộ số hữu tỉ Q và số vô tỉ I.',
        suggestedAnswerTip: 'Số thực R bao trùm tất cả, gồm cả số hữu tỉ (viết được dạng phân số) và số vô tỉ (không viết được dạng phân số).',
        sampleChildResponse: 'Tập số thực R bao trùm tất cả bố ạ! Số hữu tỉ viết được phân số, số vô tỉ thì không, và cả hai đều là số thực!'
      }
    ]
  }
];
