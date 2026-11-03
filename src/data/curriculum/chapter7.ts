import { Math7Lesson } from '../../types/curriculum';

export const chapter7Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 24: BIỂU THỨC ĐẠI SỐ
  // ==========================================================================
  {
    id: 'bai_24_bieu_thuc_dai_so',
    order: 27,
    chapterId: 'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien',
    chapterTitle: 'Chương VII: Biểu Thức Đại Số và Đa Thức Một Biến',
    unit: 'Chương VII: Biểu thức đại số và đa thức một biến',
    term: 2,
    title: 'Bài 24: Biểu thức đại số',
    subtitle: 'Làm quen với biến số, cách viết biểu thức đại số và tính giá trị biểu thức tại giá trị cho trước',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-24-1',
        level: 'nhan_biet',
        code: 'KNTT-T24-01',
        description: 'Nhận biết biểu thức đại số gồm các số, các chữ (biến số) và các phép toán cộng, trừ, nhân, chia, nâng lên lũy thừa.',
        mastered: true
      },
      {
        id: 'lt-24-2',
        level: 'nhan_biet',
        code: 'KNTT-T24-02',
        description: 'Nắm vững quy ước viết gọn: không viết dấu nhân giữa các chữ hoặc giữa số và chữ (viết $xy$ thay vì $x \\cdot y$, $4x$ thay vì $4 \\cdot x$).',
        mastered: true
      },
      {
        id: 'lt-24-3',
        level: 'thong_hieu',
        code: 'KNTT-T24-03',
        description: 'Tính được giá trị của biểu thức đại số bằng cách thay giá trị của biến vào biểu thức rồi thực hiện phép tính.',
        mastered: false
      },
      {
        id: 'lt-24-4',
        level: 'van_dung',
        code: 'KNTT-T24-04',
        description: 'Chuyển đổi bài toán thực tế thành biểu thức đại số biểu thị chu vi, diện tích, số tiền thanh toán.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c24-1',
        title: 'Khái niệm Biểu thức đại số và Biến số',
        summary: 'Biểu thức chứa chữ (đại diện cho các số bất kì) cùng các số và các phép toán gọi là biểu thức đại số. Chữ đại diện cho số gọi là biến số.\nQuy ước viết gọn:\n- Tích số và chữ: viết số trước chữ sau ($4x, -2y^2$).\n- Bỏ dấu nhân giữa các thừa số: $a \\cdot b = ab; \\ 1 \\cdot x = x; \\ (-1) \\cdot x = -x$.',
        latexFormula: 'A(x) = 2x^2 - 3x + 5; \\quad B(x, y) = 3xy - 4y',
        exampleSnippet: 'Biểu thức biểu thị chu vi hình chữ nhật có hai kích thước $a$ và $b$ là: $C = 2(a + b)$. Diện tích là $S = ab$.',
        pitfallWarning: 'Trong biểu thức chứa phép chia cho biến, điều kiện mẫu số phải luôn khác 0 (ví dụ trong $\\frac{5}{x - 2}$ thì $x \\neq 2$).',
        realLifeApplication: 'Công thức tính cước taxi: $T = 15.000 + 12.000(x - 1)$ với $x$ là số km di chuyển.'
      },
      {
        id: 'c24-2',
        title: 'Cách tính giá trị của Biểu thức đại số',
        summary: 'Để tính giá trị của một biểu thức đại số tại những giá trị cho trước của các biến:\n1. Thay các giá trị cho trước của biến vào biểu thức.\n2. Thực hiện các phép tính theo đúng thứ tự ưu tiên (Lũy thừa -> Nhân/Chia -> Cộng/Trừ, ngoặc tròn -> vuông -> nhọn).',
        latexFormula: 'P(x_0) = \\text{Thay } x = x_0 \\text{ vào biểu thức rồi tính}',
        exampleSnippet: 'Tính giá trị của $A = 3x^2 - 2x + 1$ tại $x = -2$:\nThay $x = -2$: $A = 3(-2)^2 - 2(-2) + 1 = 3 \\cdot 4 + 4 + 1 = 12 + 4 + 1 = 17$.',
        pitfallWarning: 'Khi thay số âm vào biến, BẮT BUỘC phải đặt trong dấu ngoặc đơn: $(-2)^2 = 4$, nếu viết $-2^2 = -4$ sẽ dẫn đến kết quả sai hoàn toàn.',
        realLifeApplication: 'Ứng dụng bảng tính Excel tự động tính tiền hóa đơn mua hàng khi người dùng nhập số lượng sản phẩm.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q24-1',
        tier: 'nhan_biet',
        question: 'Biểu thức nào sau đây KHÔNG PHẢI là biểu thức đại số?',
        options: [
          { id: 'opt-24-1a', text: '$2x + 3 = 7$', isCorrect: true },
          { id: 'opt-24-1b', text: '$3x^2 - 5x + 1$', isCorrect: false },
          { id: 'opt-24-1c', text: '$\\frac{x - y}{2}$', isCorrect: false },
          { id: 'opt-24-1d', text: '$4a^2b$', isCorrect: false }
        ],
        correctAnswerId: 'opt-24-1a',
        progressiveHints: [
          'Biểu thức đại số là một cụm phép toán, không có dấu bằng (=) liên kết hai vế.',
          'Biểu thức có dấu bằng (=) gọi là phương trình hoặc đẳng thức.'
        ],
        explanation: '$2x + 3 = 7$ là một đẳng thức (phương trình), không phải là một biểu thức đại số đơn thuần.',
        competencyRef: 'KNTT-T24-01',
        points: 25
      },
      {
        id: 'q24-2',
        tier: 'nhan_biet',
        question: 'Viết biểu thức đại số biểu thị "Tổng bình phương của hai số x và y":',
        options: [
          { id: 'opt-24-2a', text: '$x^2 + y^2$', isCorrect: true },
          { id: 'opt-24-2b', text: '$(x + y)^2$', isCorrect: false },
          { id: 'opt-24-2c', text: '$2(x + y)$', isCorrect: false },
          { id: 'opt-24-2d', text: '$x + y^2$', isCorrect: false }
        ],
        correctAnswerId: 'opt-24-2a',
        progressiveHints: [
          'Phân biệt: "Tổng các bình phương" (tính bình phương từng số rồi cộng lại) với "Bình phương của một tổng" ((x+y)^2).',
          'Bình phương x là x^2, bình phương y là y^2, tổng của chúng là x^2 + y^2.'
        ],
        explanation: 'Tổng bình phương của hai số $x$ và $y$ là $x^2 + y^2$. Còn $(x+y)^2$ là bình phương của một tổng.',
        competencyRef: 'KNTT-T24-01',
        points: 25
      },
      {
        id: 'q24-3',
        tier: 'thong_hieu',
        question: 'Tính giá trị của biểu thức $P = 2x^2 - 5x + 3$ tại $x = -1$:',
        formula: 'P = 2x^2 - 5x + 3 \\quad \\text{tại } x = -1',
        options: [
          { id: 'opt-24-3a', text: 'P = 10', isCorrect: true },
          { id: 'opt-24-3b', text: 'P = 0', isCorrect: false },
          { id: 'opt-24-3c', text: 'P = 4', isCorrect: false },
          { id: 'opt-24-3d', text: 'P = -4', isCorrect: false }
        ],
        correctAnswerId: 'opt-24-3a',
        progressiveHints: [
          'Thay x = -1 vào: P = 2*(-1)^2 - 5*(-1) + 3.',
          'Chú ý: (-1)^2 = 1 và -5*(-1) = +5.'
        ],
        explanation: 'Thay $x = -1$: $P = 2(-1)^2 - 5(-1) + 3 = 2(1) + 5 + 3 = 10$.',
        competencyRef: 'KNTT-T24-03',
        points: 25
      },
      {
        id: 'q24-4',
        tier: 'van_dung',
        question: 'Một người mua x quyển vở giá 8.000 đồng/quyển và y cái bút giá 5.000 đồng/cái. Người đó đưa tờ 100.000 đồng. Biểu thức số tiền thừa nhận lại là:',
        options: [
          { id: 'opt-24-4a', text: '$100.000 - (8.000x + 5.000y)$', isCorrect: true },
          { id: 'opt-24-4b', text: '$100.000 - 8.000x + 5.000y$', isCorrect: false },
          { id: 'opt-24-4c', text: '$8.000x + 5.000y - 100.000$', isCorrect: false },
          { id: 'opt-24-4d', text: '$100.000 - 13.000(x + y)$', isCorrect: false }
        ],
        correctAnswerId: 'opt-24-4a',
        progressiveHints: [
          'Tổng số tiền mua vở và bút là 8000x + 5000y.',
          'Số tiền thừa bằng tiền đưa (100.000) trừ đi tổng tiền mua.'
        ],
        explanation: 'Tổng tiền mua hàng là $8.000x + 5.000y$. Số tiền thừa nhận lại là $100.000 - (8.000x + 5.000y)$ đồng.',
        competencyRef: 'KNTT-T24-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-24-1',
        prompt: 'Bố hỏi con: Tại sao trong Toán học người ta lại dùng các chữ cái như x, y, a, b thay cho các con số cụ thể?',
        contextForParent: 'Giúp con hiểu bước chuyển tư duy trừu tượng từ Số học sang Đại số học.',
        suggestedAnswerTip: 'Để viết công thức tổng quát đại diện cho vô số trường hợp khác nhau thay vì chỉ một con số cụ thể.',
        sampleChildResponse: 'Dạ để viết công thức tổng quát bố ạ! Như công thức chu vi $2(a+b)$ thì hình chữ nhật nào thay kích thước vào cũng tính đúng!'
      },
      {
        id: 'dp-24-2',
        prompt: 'Bố hỏi con: Khi tính giá trị biểu thức mà thay số âm vào biến, có một bẫy kinh điển nào mà các bạn hay làm sai?',
        contextForParent: 'Nhắc con quy tắc ngoặc đơn khi bình phương số âm.',
        suggestedAnswerTip: 'Quên đóng mở ngoặc đơn quanh số âm dẫn đến tính sai dấu: ví dụ $(-3)^2 = 9$ nhưng viết nhầm $-3^2 = -9$.',
        sampleChildResponse: 'Quên cho số âm vào dấu ngoặc đơn bố ạ! Nếu quên ngoặc thì máy tính và mình đều tính ra dấu âm bị sai bét!'
      },
      {
        id: 'dp-24-3',
        prompt: 'Bố hỏi con: "Tổng bình phương của hai số" và "Bình phương của một tổng" khác nhau ở chỗ nào?',
        contextForParent: 'Kiểm tra phân biệt ngôn ngữ toán học: $x^2 + y^2$ so với $(x+y)^2$.',
        suggestedAnswerTip: 'Tổng bình phương: Bình phương trước rồi mới cộng ($x^2 + y^2$). Bình phương của tổng: Cộng trước rồi mới bình phương ($(x+y)^2$).',
        sampleChildResponse: 'Tổng bình phương là tính $x^2$ và $y^2$ rồi cộng; còn bình phương của tổng là cộng $(x+y)$ lại rồi mới đem bình phương ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 25: ĐA THỨC MỘT BIẾN
  // ==========================================================================
  {
    id: 'bai_25_da_thuc_mot_bien',
    order: 28,
    chapterId: 'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien',
    chapterTitle: 'Chương VII: Biểu Thức Đại Số và Đa Thức Một Biến',
    unit: 'Chương VII: Biểu thức đại số và đa thức một biến',
    term: 2,
    title: 'Bài 25: Đa thức một biến',
    subtitle: 'Đơn thức, đa thức thu gọn, sắp xếp theo lũy thừa giảm dần, bậc và nghiệm của đa thức',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-25-1',
        level: 'nhan_biet',
        code: 'KNTT-T25-01',
        description: 'Nhận biết đơn thức một biến ($ax^k$) và đa thức một biến là tổng của những đơn thức của cùng một biến.',
        mastered: true
      },
      {
        id: 'lt-25-2',
        level: 'nhan_biet',
        code: 'KNTT-T25-02',
        description: 'Xác định bậc của đa thức (số mũ lớn nhất), hệ số cao nhất và hệ số tự do (hệ số lũy thừa bậc 0).',
        mastered: true
      },
      {
        id: 'lt-25-3',
        level: 'thong_hieu',
        code: 'KNTT-T25-03',
        description: 'Thu gọn đa thức bằng cách cộng các đơn thức đồng dạng và sắp xếp theo lũy thừa giảm dần của biến.',
        mastered: false
      },
      {
        id: 'lt-25-4',
        level: 'van_dung',
        code: 'KNTT-T25-04',
        description: 'Hiểu khái niệm nghiệm của đa thức: Nếu $P(a) = 0$ thì $a$ là một nghiệm của $P(x)$, và biết cách kiểm tra nghiệm.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c25-1',
        title: 'Đa thức một biến và cách thu gọn, sắp xếp',
        summary: 'Đa thức một biến là tổng của những đơn thức của cùng một biến. Kí hiệu $P(x), Q(y), \\dots$\n- Thu gọn: Cộng trừ các hạng tử cùng số mũ (đồng dạng).\n- Sắp xếp: Viết các hạng tử theo lũy thừa giảm dần (hoặc tăng dần) của biến.\n- Bậc: Số mũ lớn nhất của biến trong đa thức thu gọn (khác đa thức không).\n- Hệ số cao nhất: Hệ số của lũy thừa bậc cao nhất.\n- Hệ số tự do: Hạng tử không chứa biến (bậc 0).',
        latexFormula: 'P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 \\quad (a_n \\neq 0)',
        exampleSnippet: 'Cho $P(x) = 5x^3 - 2x + 7x^3 - 4 + x$. Thu gọn:\n$P(x) = (5+7)x^3 + (-2+1)x - 4 = 12x^3 - x - 4$.\nBậc là 3; Hệ số cao nhất là 12; Hệ số tự do là -4.',
        pitfallWarning: 'Bắt buộc phải THU GỌN đa thức trước khi xác định bậc, nếu không sẽ bị nhầm khi hai hạng tử bậc cao triệt tiêu lẫn nhau.',
        realLifeApplication: 'Các hàm quỹ đạo chuyển động rơi tự do của quả bóng trong không gian: $h(t) = -4,9t^2 + v_0 t + h_0$.'
      },
      {
        id: 'c25-2',
        title: 'Nghiệm của Đa thức một biến',
        summary: 'Nếu tại $x = a$, đa thức $P(x)$ có giá trị bằng $0$ (tức là $P(a) = 0$) thì ta gọi $a$ (hoặc $x = a$) là một nghiệm của đa thức $P(x)$.\nMột đa thức (khác đa thức không) bậc $n$ có không quá $n$ nghiệm.',
        latexFormula: 'x = a \\text{ là nghiệm của } P(x) \\iff P(a) = 0',
        exampleSnippet: 'Tìm nghiệm của $P(x) = 2x - 6$:\nCho $P(x) = 0 \\implies 2x - 6 = 0 \\implies 2x = 6 \\implies x = 3$. Vậy $x = 3$ là nghiệm duy nhất.',
        pitfallWarning: 'Một đa thức có thể có 1 nghiệm, nhiều nghiệm hoặc không có nghiệm nào (ví dụ $x^2 + 1 = 0$ vô nghiệm vì $x^2 + 1 \\ge 1 > 0$).',
        realLifeApplication: 'Tìm điểm hòa vốn trong kinh doanh: Giải đa thức lợi nhuận $P(x) = 0$ để biết cần bán bao nhiêu sản phẩm để không lỗ.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q25-1',
        tier: 'nhan_biet',
        question: 'Cho đa thức $A(x) = 5x^4 - 3x^2 + 7x - 9$. Bậc, hệ số cao nhất và hệ số tự do của đa thức lần lượt là:',
        options: [
          { id: 'opt-25-1a', text: 'Bậc 4; hệ số cao nhất là 5; hệ số tự do là -9', isCorrect: true },
          { id: 'opt-25-1b', text: 'Bậc 4; hệ số cao nhất là 5; hệ số tự do là 9', isCorrect: false },
          { id: 'opt-25-1c', text: 'Bậc 7; hệ số cao nhất là -9; hệ số tự do là 5', isCorrect: false },
          { id: 'opt-25-1d', text: 'Bậc 2; hệ số cao nhất là -3; hệ số tự do là -9', isCorrect: false }
        ],
        correctAnswerId: 'opt-25-1a',
        progressiveHints: [
          'Số mũ lớn nhất của biến x là bậc của đa thức.',
          'Hệ số đi liền với x^4 là hệ số cao nhất, số tự do đứng độc lập cuối cùng.'
        ],
        explanation: 'Số mũ lớn nhất là 4 nên bậc bằng 4. Hệ số của $x^4$ là 5 (hệ số cao nhất). Hạng tử không chứa $x$ là $-9$ (hệ số tự do).',
        competencyRef: 'KNTT-T25-02',
        points: 25
      },
      {
        id: 'q25-2',
        tier: 'nhan_biet',
        question: 'Số nào sau đây là một nghiệm của đa thức $P(x) = x^2 - 4$?',
        options: [
          { id: 'opt-25-2a', text: 'x = 2', isCorrect: true },
          { id: 'opt-25-2b', text: 'x = 0', isCorrect: false },
          { id: 'opt-25-2c', text: 'x = 4', isCorrect: false },
          { id: 'opt-25-2d', text: 'x = 1', isCorrect: false }
        ],
        correctAnswerId: 'opt-25-2a',
        progressiveHints: [
          'Thay từng giá trị của x vào P(x), xem giá trị nào cho kết quả bằng 0.',
          'Với x = 2: 2^2 - 4 = 4 - 4 = 0.'
        ],
        explanation: 'Thay $x = 2$ vào $P(x)$: $P(2) = 2^2 - 4 = 4 - 4 = 0$. Vậy $x = 2$ là nghiệm của đa thức.',
        competencyRef: 'KNTT-T25-04',
        points: 25
      },
      {
        id: 'q25-3',
        tier: 'thong_hieu',
        question: 'Thu gọn và sắp xếp đa thức $Q(x) = 2x^3 - 5x + 3x^2 - 2x^3 + 4x - 1$ theo lũy thừa giảm dần:',
        options: [
          { id: 'opt-25-3a', text: '$Q(x) = 3x^2 - x - 1$', isCorrect: true },
          { id: 'opt-25-3b', text: '$Q(x) = 4x^3 + 3x^2 - x - 1$', isCorrect: false },
          { id: 'opt-25-3c', text: '$Q(x) = 3x^2 + 9x - 1$', isCorrect: false },
          { id: 'opt-25-3d', text: '$Q(x) = -x + 3x^2 - 1$', isCorrect: false }
        ],
        correctAnswerId: 'opt-25-3a',
        progressiveHints: [
          'Nhóm các hạng tử có cùng số mũ: (2x^3 - 2x^3) = 0.',
          'Nhóm tiếp: 3x^2, (-5x + 4x) = -x, và số -1.'
        ],
        explanation: '$Q(x) = (2x^3 - 2x^3) + 3x^2 + (-5x + 4x) - 1 = 3x^2 - x - 1$.',
        competencyRef: 'KNTT-T25-03',
        points: 25
      },
      {
        id: 'q25-4',
        tier: 'van_dung',
        question: 'Đa thức nào sau đây KHÔNG CÓ nghiệm (vô nghiệm) trên tập số thực?',
        options: [
          { id: 'opt-25-4a', text: '$M(x) = x^2 + 9$', isCorrect: true },
          { id: 'opt-25-4b', text: '$N(x) = x^2 - 9$', isCorrect: false },
          { id: 'opt-25-4c', text: '$H(x) = 2x + 6$', isCorrect: false },
          { id: 'opt-25-4d', text: '$K(x) = x^3 + 1$', isCorrect: false }
        ],
        correctAnswerId: 'opt-25-4a',
        progressiveHints: [
          'Bình phương x^2 luôn lớn hơn hoặc bằng 0 với mọi số thực x.',
          'Nếu cộng thêm một số dương thì tổng có bao giờ bằng 0 được không?'
        ],
        explanation: 'Vì $x^2 \\ge 0$ với mọi $x$, nên $x^2 + 9 \\ge 9 > 0$. Đa thức luôn dương nên không thể bằng 0, tức vô nghiệm.',
        competencyRef: 'KNTT-T25-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-25-1',
        prompt: 'Bố hỏi con: Thế nào là "nghiệm" của một đa thức? Con lấy một ví dụ thật dễ hiểu xem nào!',
        contextForParent: 'Kiểm tra xem con có nắm được định nghĩa cốt lõi của nghiệm ($P(a) = 0$).',
        suggestedAnswerTip: 'Nghiệm là con số mà khi thay vào biến $x$, nó làm cho toàn bộ đa thức có giá trị bằng 0.',
        sampleChildResponse: 'Nghiệm là con số làm cho đa thức biến thành số 0 bố ạ! Ví dụ $x - 5$ thì nghiệm là $5$, vì $5 - 5 = 0$!'
      },
      {
        id: 'dp-25-2',
        prompt: 'Bố hỏi con: Tại sao đa thức $x^2 + 10$ lại không bao giờ tìm được nghiệm?',
        contextForParent: 'Giúp con suy luận logic về tính chất không âm của bình phương.',
        suggestedAnswerTip: 'Vì $x^2$ luôn lớn hơn hoặc bằng 0, cộng thêm 10 thì luôn $\\ge 10$, không bao giờ bằng 0 được.',
        sampleChildResponse: 'Vì bình phương của mọi số đều không âm, cộng thêm 10 thì lúc nào cũng lớn hơn 0, làm sao bằng 0 được bố!'
      },
      {
        id: 'dp-25-3',
        prompt: 'Bố hỏi con: Đa thức bậc 3 thì có thể có tối đa bao nhiêu nghiệm?',
        contextForParent: 'Quy luật về số lượng nghiệm của đa thức bậc n.',
        suggestedAnswerTip: 'Đa thức bậc 3 có tối đa 3 nghiệm.',
        sampleChildResponse: 'Tối đa 3 nghiệm bố ạ, vì số nghiệm không bao giờ vượt quá bậc của nó!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 26: PHÉP CỘNG VÀ PHÉP TRỪ ĐA THỨC MỘT BIẾN
  // ==========================================================================
  {
    id: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 29,
    chapterId: 'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien',
    chapterTitle: 'Chương VII: Biểu Thức Đại Số và Đa Thức Một Biến',
    unit: 'Chương VII: Biểu thức đại số và đa thức một biến',
    term: 2,
    title: 'Bài 26: Phép cộng và phép trừ đa thức một biến',
    subtitle: 'Hai phương pháp tính: Cộng trừ theo hàng ngang và đặt tính theo cột dọc có canh thẳng bậc',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-26-1',
        level: 'nhan_biet',
        code: 'KNTT-T26-01',
        description: 'Nhận biết quy tắc phá ngoặc có dấu trừ đằng trước: đổi dấu tất cả các hạng tử bên trong ngoặc.',
        mastered: true
      },
      {
        id: 'lt-26-2',
        level: 'thong_hieu',
        code: 'KNTT-T26-02',
        description: 'Thực hiện cộng, trừ đa thức một biến theo hàng ngang bằng cách nhóm các đơn thức đồng dạng.',
        mastered: true
      },
      {
        id: 'lt-26-3',
        level: 'thong_hieu',
        code: 'KNTT-T26-03',
        description: 'Thực hiện phép tính theo cột dọc: sắp xếp hai đa thức theo lũy thừa giảm dần và đặt các hạng tử cùng bậc thẳng cột.',
        mastered: false
      },
      {
        id: 'lt-26-4',
        level: 'van_dung',
        code: 'KNTT-T26-04',
        description: 'Tìm đa thức chưa biết trong đẳng thức $A(x) + B(x) = C(x)$ hoặc $P(x) - Q(x) = R(x)$.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c26-1',
        title: 'Cộng, trừ đa thức theo hàng ngang',
        summary: 'Các bước thực hiện theo hàng ngang:\n1. Viết phép tính với các đa thức đặt trong dấu ngoặc tròn: $P(x) \\pm Q(x)$.\n2. Bỏ dấu ngoặc (LƯU Ý: Phía trước có dấu trừ thì ĐỔI DẤU mọi hạng tử bên trong).\n3. Nhóm các hạng tử có cùng số mũ rồi thực hiện phép cộng trừ hệ số.',
        latexFormula: '-(a - b + c) = -a + b - c',
        exampleSnippet: 'Cho $P(x) = 3x^2 - x + 2$ và $Q(x) = x^2 + 4x - 5$.\n$P(x) - Q(x) = (3x^2 - x + 2) - (x^2 + 4x - 5) = 3x^2 - x + 2 - x^2 - 4x + 5 = 2x^2 - 5x + 7$.',
        pitfallWarning: 'Bẫy phổ biến nhất: Quên đổi dấu các hạng tử phía sau dấu trừ (ví dụ $- (4x - 5) \\rightarrow -4x - 5$ là SAI, phải thành $-4x + 5$).',
        realLifeApplication: 'Tính doanh thu thuần bằng tổng doanh thu bán hàng trừ đi tổng chi phí vận hành và thuế.'
      },
      {
        id: 'c26-2',
        title: 'Cộng, trừ đa thức bằng cách đặt tính cột dọc',
        summary: 'Các bước đặt tính cột dọc:\n1. Thu gọn và sắp xếp cả hai đa thức theo cùng lũy thừa giảm dần của biến.\n2. Đặt các đơn thức có cùng số mũ thẳng hàng cột với nhau (nếu khuyết bậc nào thì để trống khoảng cách bậc đó).\n3. Thực hiện cộng hoặc trừ các hệ số theo từng cột từ trên xuống dưới.',
        exampleSnippet: 'Đặt tính:\n  2x^3       + 3x - 5\n+  x^3 - 4x^2 +  x + 2\n--------------------\n  3x^3 - 4x^2 + 4x - 3',
        pitfallWarning: 'Nếu đa thức bị khuyết bậc (ví dụ có bậc 3 và bậc 1 mà không có bậc 2), phải để một khoảng trống để tránh đặt lệch cột.',
        realLifeApplication: 'Các thuật toán máy tính cộng trừ ma trận và hệ số đa thức trong đồ họa game 3D.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q26-1',
        tier: 'nhan_biet',
        question: 'Khi phá dấu ngoặc của biểu thức $-(3x^2 - 2x + 7)$, ta được kết quả đúng là:',
        options: [
          { id: 'opt-26-1a', text: '$-3x^2 + 2x - 7$', isCorrect: true },
          { id: 'opt-26-1b', text: '$-3x^2 - 2x + 7$', isCorrect: false },
          { id: 'opt-26-1c', text: '$-3x^2 - 2x - 7$', isCorrect: false },
          { id: 'opt-26-1d', text: '$3x^2 - 2x + 7$', isCorrect: false }
        ],
        correctAnswerId: 'opt-26-1a',
        progressiveHints: [
          'Quy tắc dấu ngoặc: Đằng trước có dấu trừ thì đổi dấu toàn bộ các số hạng bên trong.',
          '+3x^2 thành -3x^2; -2x thành +2x; +7 thành -7.'
        ],
        explanation: 'Phía trước ngoặc có dấu trừ, ta đổi dấu tất cả các hạng tử: $+3x^2 \\rightarrow -3x^2$; $-2x \\rightarrow +2x$; $+7 \\rightarrow -7$.',
        competencyRef: 'KNTT-T26-01',
        points: 25
      },
      {
        id: 'q26-2',
        tier: 'thong_hieu',
        question: 'Cho $P(x) = 4x^2 - 3x + 1$ và $Q(x) = 2x^2 + 5x - 4$. Tổng $P(x) + Q(x)$ bằng:',
        options: [
          { id: 'opt-26-2a', text: '$6x^2 + 2x - 3$', isCorrect: true },
          { id: 'opt-26-2b', text: '$6x^2 - 8x + 5$', isCorrect: false },
          { id: 'opt-26-2c', text: '$2x^2 + 2x - 3$', isCorrect: false },
          { id: 'opt-26-2d', text: '$6x^2 + 8x - 3$', isCorrect: false }
        ],
        correctAnswerId: 'opt-26-2a',
        progressiveHints: [
          'Cộng các hệ số cùng bậc: (4 + 2)x^2, (-3 + 5)x, (1 - 4).',
          'Tính: 6x^2 + 2x - 3.'
        ],
        explanation: '$P(x) + Q(x) = (4+2)x^2 + (-3+5)x + (1-4) = 6x^2 + 2x - 3$.',
        competencyRef: 'KNTT-T26-02',
        points: 25
      },
      {
        id: 'q26-3',
        tier: 'thong_hieu',
        question: 'Cho $A(x) = 5x^3 - 2x + 4$ và $B(x) = 3x^3 + x^2 - 2x - 1$. Hiệu $A(x) - B(x)$ bằng:',
        options: [
          { id: 'opt-26-3a', text: '$2x^3 - x^2 + 5$', isCorrect: true },
          { id: 'opt-26-3b', text: '$2x^3 + x^2 - 4x + 3$', isCorrect: false },
          { id: 'opt-26-3c', text: '$8x^3 - x^2 + 5$', isCorrect: false },
          { id: 'opt-26-3d', text: '$2x^3 - x^2 - 4x + 5$', isCorrect: false }
        ],
        correctAnswerId: 'opt-26-3a',
        progressiveHints: [
          'A(x) - B(x) = 5x^3 - 2x + 4 - (3x^3 + x^2 - 2x - 1).',
          '= 5x^3 - 2x + 4 - 3x^3 - x^2 + 2x + 1.',
          'Chú ý: -2x + 2x = 0.'
        ],
        explanation: '$A(x) - B(x) = (5-3)x^3 - x^2 + (-2+2)x + (4+1) = 2x^3 - x^2 + 5$.',
        competencyRef: 'KNTT-T26-02',
        points: 25
      },
      {
        id: 'q26-4',
        tier: 'van_dung',
        question: 'Tìm đa thức $M(x)$ biết: $M(x) + (2x^2 - 3x + 1) = 5x^2 - x - 4$.',
        options: [
          { id: 'opt-26-4a', text: '$M(x) = 3x^2 + 2x - 5$', isCorrect: true },
          { id: 'opt-26-4b', text: '$M(x) = 7x^2 - 4x - 3$', isCorrect: false },
          { id: 'opt-26-4c', text: '$M(x) = 3x^2 - 4x - 5$', isCorrect: false },
          { id: 'opt-26-4d', text: '$M(x) = -3x^2 - 2x + 5$', isCorrect: false }
        ],
        correctAnswerId: 'opt-26-4a',
        progressiveHints: [
          'Chuyển vế: M(x) = (5x^2 - x - 4) - (2x^2 - 3x + 1).',
          'Đổi dấu vế bị trừ: 5x^2 - x - 4 - 2x^2 + 3x - 1.'
        ],
        explanation: '$M(x) = (5x^2 - x - 4) - (2x^2 - 3x + 1) = (5-2)x^2 + (-1+3)x + (-4-1) = 3x^2 + 2x - 5$.',
        competencyRef: 'KNTT-T26-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-26-1',
        prompt: 'Bố hỏi con: Khi trừ hai đa thức, tại sao thầy cô luôn nhắc phải cẩn thận nhất ở chỗ phá dấu ngoặc?',
        contextForParent: 'Nhắc con cảnh giác với bẫy đổi dấu phổ biến nhất trong kì thi.',
        suggestedAnswerTip: 'Vì đằng trước có dấu trừ thì tất cả các dấu cộng trừ bên trong ngoặc đều phải đổi ngược lại, nếu quên đổi một số là sai cả bài.',
        sampleChildResponse: 'Vì trước ngoặc có dấu trừ thì bên trong đang là cộng phải đổi thành trừ, đang là trừ phải thành cộng ạ!'
      },
      {
        id: 'dp-26-2',
        prompt: 'Bố hỏi con: Khi đặt tính cộng trừ đa thức theo cột dọc, nếu một đa thức bị khuyết mất bậc 2 thì con phải làm gì?',
        contextForParent: 'Kỹ năng trình bày khoa học khi đặt tính cột dọc.',
        suggestedAnswerTip: 'Phải chừa một khoảng trống ở cột bậc 2 để các bậc khác vẫn thẳng cột với nhau.',
        sampleChildResponse: 'Con phải để trống một khoảng ở cột đó để bậc 3 thẳng bậc 3, bậc 1 thẳng bậc 1, không bị lệch hàng bố ạ!'
      },
      {
        id: 'dp-26-3',
        prompt: 'Bố hỏi con: Bậc của tổng hai đa thức bậc 3 có chắc chắn luôn là bậc 3 không?',
        contextForParent: 'Tình huống đặc biệt: Các hạng tử bậc cao nhất có thể triệt tiêu nhau.',
        suggestedAnswerTip: 'Không chắc chắn, vì nếu hệ số cao nhất của chúng đối nhau (như $3x^3$ và $-3x^3$) thì khi cộng lại sẽ bị triệt tiêu, bậc có thể giảm xuống.',
        sampleChildResponse: 'Chưa chắc bố ạ! Nếu hai cái $x^3$ có hệ số đối nhau cộng lại bằng 0 thì bậc của nó sẽ tụt xuống bậc 2 hoặc nhỏ hơn!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 27: PHÉP NHÂN ĐA THỨC MỘT BIẾN
  // ==========================================================================
  {
    id: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 30,
    chapterId: 'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien',
    chapterTitle: 'Chương VII: Biểu Thức Đại Số và Đa Thức Một Biến',
    unit: 'Chương VII: Biểu thức đại số và đa thức một biến',
    term: 2,
    title: 'Bài 27: Phép nhân đa thức một biến',
    subtitle: 'Nhân đơn thức với đa thức, nhân đa thức với đa thức theo tính chất phân phối',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-27-1',
        level: 'nhan_biet',
        code: 'KNTT-T27-01',
        description: 'Vận dụng quy tắc nhân hai đơn thức một biến: nhân hệ số với hệ số, nhân phần biến lũy thừa cùng cơ số ($x^m \\cdot x^n = x^{m+n}$).',
        mastered: true
      },
      {
        id: 'lt-27-2',
        level: 'thong_hieu',
        code: 'KNTT-T27-02',
        description: 'Thực hiện phép nhân đơn thức với đa thức theo quy tắc phân phối: $A(B + C) = AB + AC$.',
        mastered: true
      },
      {
        id: 'lt-27-3',
        level: 'thong_hieu',
        code: 'KNTT-T27-03',
        description: 'Thực hiện phép nhân đa thức với đa thức: nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các kết quả lại.',
        mastered: false
      },
      {
        id: 'lt-27-4',
        level: 'van_dung',
        code: 'KNTT-T27-04',
        description: 'Khai triển và rút gọn các biểu thức chứa phép nhân đa thức để tính nhanh hoặc chứng minh đẳng thức.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c27-1',
        title: 'Nhân đơn thức với đơn thức và đơn thức với đa thức',
        summary: '1. Nhân hai đơn thức: $(ax^m) \\cdot (bx^n) = (a \\cdot b) \\cdot x^{m+n}$.\n2. Nhân đơn thức với đa thức: Lấy đơn thức nhân với từng hạng tử của đa thức rồi cộng các tích với nhau.',
        latexFormula: 'A \\cdot (B + C - D) = A \\cdot B + A \\cdot C - A \\cdot D',
        exampleSnippet: 'Tính $2x^2 \\cdot (3x^3 - 5x + 4)$:\n$= (2x^2 \\cdot 3x^3) - (2x^2 \\cdot 5x) + (2x^2 \\cdot 4) = 6x^5 - 10x^3 + 8x^2$.',
        pitfallWarning: 'Cần chú ý dấu của từng hạng tử khi nhân (ví dụ $(-2x) \\cdot (-3x) = +6x^2$, âm nhân âm thành dương).',
        realLifeApplication: 'Tính diện tích hình chữ nhật khi một cạnh được nới rộng thêm: $S = x(x + 5) = x^2 + 5x$.'
      },
      {
        id: 'c27-2',
        title: 'Nhân đa thức với đa thức',
        summary: 'Muốn nhân một đa thức với một đa thức, ta nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các kết quả với nhau.\n$(A + B)(C + D) = AC + AD + BC + BD$.\nChú ý: Bậc của tích hai đa thức (khác 0) bằng tổng các bậc của hai đa thức đó.',
        latexFormula: '(A + B)(C + D) = AC + AD + BC + BD; \\quad \\deg(P \\cdot Q) = \\deg(P) + \\deg(Q)',
        exampleSnippet: 'Tính $(x + 3)(2x - 1)$:\n$= x(2x - 1) + 3(2x - 1) = 2x^2 - x + 6x - 3 = 2x^2 + 5x - 3$.',
        pitfallWarning: 'Sau khi nhân bung ra, bắt buộc phải gom các hạng tử đồng dạng lại để đưa về đa thức thu gọn tối giản.',
        realLifeApplication: 'Mô hình hóa dự báo lợi nhuận khi tăng giá vé và dự đoán lượng khách sụt giảm tương ứng: $(P - x)(Q + y)$.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q27-1',
        tier: 'nhan_biet',
        question: 'Tích của hai đơn thức $3x^2$ và $-4x^3$ bằng:',
        options: [
          { id: 'opt-27-1a', text: '$-12x^5$', isCorrect: true },
          { id: 'opt-27-1b', text: '$-12x^6$', isCorrect: false },
          { id: 'opt-27-1c', text: '$12x^5$', isCorrect: false },
          { id: 'opt-27-1d', text: '$-7x^5$', isCorrect: false }
        ],
        correctAnswerId: 'opt-27-1a',
        progressiveHints: [
          'Nhân phần hệ số: 3 * (-4) = -12.',
          'Cộng số mũ: x^2 * x^3 = x^(2+3) = x^5.'
        ],
        explanation: 'Ta có: $(3 \\cdot (-4)) \\cdot x^{2+3} = -12x^5$.',
        competencyRef: 'KNTT-T27-01',
        points: 25
      },
      {
        id: 'q27-2',
        tier: 'thong_hieu',
        question: 'Thực hiện phép nhân $2x(3x^2 - 4x + 1)$, kết quả thu gọn là:',
        options: [
          { id: 'opt-27-2a', text: '$6x^3 - 8x^2 + 2x$', isCorrect: true },
          { id: 'opt-27-2b', text: '$6x^3 - 4x^2 + 2x$', isCorrect: false },
          { id: 'opt-27-2c', text: '$6x^2 - 8x + 2$', isCorrect: false },
          { id: 'opt-27-2d', text: '$5x^3 - 6x^2 + 3x$', isCorrect: false }
        ],
        correctAnswerId: 'opt-27-2a',
        progressiveHints: [
          'Lấy 2x nhân lần lượt với 3x^2, -4x, và +1.',
          '2x * 3x^2 = 6x^3; 2x * (-4x) = -8x^2; 2x * 1 = 2x.'
        ],
        explanation: '$2x \\cdot 3x^2 - 2x \\cdot 4x + 2x \\cdot 1 = 6x^3 - 8x^2 + 2x$.',
        competencyRef: 'KNTT-T27-02',
        points: 25
      },
      {
        id: 'q27-3',
        tier: 'thong_hieu',
        question: 'Khai triển và thu gọn tích $(x - 2)(x + 5)$:',
        options: [
          { id: 'opt-27-3a', text: '$x^2 + 3x - 10$', isCorrect: true },
          { id: 'opt-27-3b', text: '$x^2 - 3x - 10$', isCorrect: false },
          { id: 'opt-27-3c', text: '$x^2 + 3x + 10$', isCorrect: false },
          { id: 'opt-27-3d', text: '$x^2 - 10$', isCorrect: false }
        ],
        correctAnswerId: 'opt-27-3a',
        progressiveHints: [
          'Nhân lần lượt: x*x + x*5 - 2*x - 2*5.',
          '= x^2 + 5x - 2x - 10 = x^2 + 3x - 10.'
        ],
        explanation: '$(x - 2)(x + 5) = x^2 + 5x - 2x - 10 = x^2 + 3x - 10$.',
        competencyRef: 'KNTT-T27-03',
        points: 25
      },
      {
        id: 'q27-4',
        tier: 'van_dung',
        question: 'Nếu đa thức $P(x)$ có bậc 2 và đa thức $Q(x)$ có bậc 3 thì tích $P(x) \\cdot Q(x)$ có bậc bằng bao nhiêu?',
        options: [
          { id: 'opt-27-4a', text: 'Bậc 5', isCorrect: true },
          { id: 'opt-27-4b', text: 'Bậc 6', isCorrect: false },
          { id: 'opt-27-4c', text: 'Bậc 3', isCorrect: false },
          { id: 'opt-27-4d', text: 'Bậc 1', isCorrect: false }
        ],
        correctAnswerId: 'opt-27-4a',
        progressiveHints: [
          'Bậc của tích bằng tổng các bậc: deg(P * Q) = deg(P) + deg(Q).',
          'Lấy bậc 2 cộng bậc 3.'
        ],
        explanation: 'Khi nhân hai lũy thừa cao nhất $x^2 \\cdot x^3 = x^{2+3} = x^5$, do đó tích có bậc là $2 + 3 = 5$.',
        competencyRef: 'KNTT-T27-03',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-27-1',
        prompt: 'Bố hỏi con: Khi nhân hai lũy thừa cùng cơ số như $x^2$ nhân $x^3$, ta làm phép tính gì với hai số mũ 2 và 3?',
        contextForParent: 'Kiểm tra quy tắc cộng số mũ (rất nhiều học sinh nhầm sang phép nhân số mũ thành $x^6$).',
        suggestedAnswerTip: 'Cộng hai số mũ lại: $2 + 3 = 5$ (ra $x^5$, không phải $x^6$).',
        sampleChildResponse: 'Cộng số mũ lại bố ơi! $x^2$ nhân $x^3$ ra $x^5$, bạn nào nhân thành $x^6$ là sai to đấy ạ!'
      },
      {
        id: 'dp-27-2',
        prompt: 'Bố hỏi con: Hãy giải thích tại sao diện tích hình chữ nhật có kích thước $(x+2)$ và $(x+3)$ lại có thể vẽ thành 4 mảnh ghép nhỏ?',
        contextForParent: 'Ý nghĩa hình học trực quan của phép nhân hai đa thức.',
        suggestedAnswerTip: 'Vì cắt theo chiều dọc và ngang sẽ ra 4 ô chữ nhật nhỏ có diện tích là $x^2$, $3x$, $2x$ và 6.',
        sampleChildResponse: 'Đúng rồi bố! Nó gồm 1 ô vuông to $x^2$, 2 hình chữ nhật nhỏ $2x$ và $3x$, với 1 góc nhỏ là $2 \\times 3 = 6$ ạ!'
      },
      {
        id: 'dp-27-3',
        prompt: 'Bố hỏi con: Sau khi nhân bung các hạng tử của hai đa thức ra, việc làm bắt buộc tiếp theo là gì?',
        contextForParent: 'Thói quen thu gọn đa thức.',
        suggestedAnswerTip: 'Phải tìm các hạng tử đồng dạng và cộng trừ chúng lại để thu gọn kết quả.',
        sampleChildResponse: 'Phải gom các đơn thức cùng số mũ lại để thu gọn đa thức bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 28: PHÉP CHIA ĐA THỨC MỘT BIẾN
  // ==========================================================================
  {
    id: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 31,
    chapterId: 'chuong_7_bieu_thuc_dai_so_da_thuc_mot_bien',
    chapterTitle: 'Chương VII: Biểu Thức Đại Số và Đa Thức Một Biến',
    unit: 'Chương VII: Biểu thức đại số và đa thức một biến',
    term: 2,
    title: 'Bài 28: Phép chia đa thức một biến',
    subtitle: 'Chia đơn thức cho đơn thức, chia đa thức cho đa thức, phép chia hết và phép chia có dư',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-28-1',
        level: 'nhan_biet',
        code: 'KNTT-T28-01',
        description: 'Vận dụng quy tắc chia hai đơn thức một biến: chia hệ số cho hệ số, trừ số mũ ($x^m : x^n = x^{m-n}$ với $m \\ge n$).',
        mastered: true
      },
      {
        id: 'lt-28-2',
        level: 'thong_hieu',
        code: 'KNTT-T28-02',
        description: 'Chia đa thức cho đơn thức bằng cách chia từng hạng tử của đa thức cho đơn thức đó rồi cộng các kết quả lại.',
        mastered: true
      },
      {
        id: 'lt-28-3',
        level: 'thong_hieu',
        code: 'KNTT-T28-03',
        description: 'Nắm vững thuật toán chia đa thức cho đa thức theo cột dọc: Chia hạng tử bậc cao nhất, nhân ngược lại, trừ đi để tìm phần dư.',
        mastered: false
      },
      {
        id: 'lt-28-4',
        level: 'van_dung',
        code: 'KNTT-T28-04',
        description: 'Nhận biết phép chia hết (dư bằng 0) và phép chia có dư: $A(x) = B(x) \\cdot Q(x) + R(x)$ với bậc của $R(x)$ nhỏ hơn bậc của $B(x)$.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c28-1',
        title: 'Chia đơn thức và chia đa thức cho đơn thức',
        summary: '1. Chia hai đơn thức: $(ax^m) : (bx^n) = (a : b) \\cdot x^{m-n}$ (với $a, b \\neq 0$ và $m \\ge n$).\n2. Chia đa thức cho đơn thức: Muốn chia đa thức $A$ cho đơn thức $B$ (trường hợp chia hết), ta chia từng hạng tử của $A$ cho $B$ rồi cộng các kết quả với nhau.',
        latexFormula: '(A + B - C) : D = (A : D) + (B : D) - (C : D)',
        exampleSnippet: 'Tính $(6x^4 - 9x^3 + 3x^2) : (3x^2)$:\n$= (6x^4 : 3x^2) - (9x^3 : 3x^2) + (3x^2 : 3x^2) = 2x^2 - 3x + 1$.',
        pitfallWarning: 'Đặc biệt lưu ý: $3x^2 : 3x^2 = 1$ chứ KHÔNG PHẢI bằng 0 (nhiều học sinh quên số 1 dẫn đến thiếu hạng tử tự do).',
        realLifeApplication: 'Chia đều công suất tiêu thụ hoặc tính vận tốc trung bình $v = s / t$ khi quãng đường là đa thức theo thời gian.'
      },
      {
        id: 'c28-2',
        title: 'Chia đa thức cho đa thức (Chia hết và Chia có dư)',
        summary: 'Với hai đa thức tùy ý $A$ và $B$ ($B \\neq 0$), luôn tồn tại duy nhất cặp đa thức thương $Q$ và đa thức dư $R$ sao cho:\n$A = B \\cdot Q + R$, trong đó $R = 0$ hoặc bậc của $R$ nhỏ hơn bậc của $B$.\n- Nếu $R = 0$: Phép chia hết ($A$ chia hết cho $B$).\n- Nếu $R \\neq 0$: Phép chia có dư ($R$ là đa thức dư).',
        latexFormula: 'A(x) = B(x) \\cdot Q(x) + R(x) \\quad (\\deg(R) < \\deg(B))',
        exampleSnippet: 'Chia $(2x^2 + 5x + 3)$ cho $(x + 1)$:\nLấy $2x^2 : x = 2x$. Nhân ngược: $2x(x + 1) = 2x^2 + 2x$. Trừ đi còn $3x + 3$.\nLấy $3x : x = 3$. Nhân ngược: $3(x + 1) = 3x + 3$. Trừ đi còn dư 0.\nVậy thương là $2x + 3$, chia hết.',
        pitfallWarning: 'Phép chia dừng lại ngay khi bậc của phần dư NHỎ HƠN bậc của đa thức chia.',
        realLifeApplication: 'Thuật toán mã hóa RSA và kiểm tra lỗi đường truyền mạng bằng đa thức CRC.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q28-1',
        tier: 'nhan_biet',
        question: 'Kết quả của phép chia đơn thức $15x^5 : 3x^2$ bằng:',
        options: [
          { id: 'opt-28-1a', text: '$5x^3$', isCorrect: true },
          { id: 'opt-28-1b', text: '$5x^{2,5}$', isCorrect: false },
          { id: 'opt-28-1c', text: '$12x^3$', isCorrect: false },
          { id: 'opt-28-1d', text: '$5x^7$', isCorrect: false }
        ],
        correctAnswerId: 'opt-28-1a',
        progressiveHints: [
          'Lấy hệ số chia hệ số: 15 : 3 = 5.',
          'Lấy số mũ trừ đi số mũ: x^(5 - 2) = x^3.'
        ],
        explanation: 'Ta có $(15 : 3) \\cdot x^{5 - 2} = 5x^3$.',
        competencyRef: 'KNTT-T28-01',
        points: 25
      },
      {
        id: 'q28-2',
        tier: 'thong_hieu',
        question: 'Thực hiện phép chia $(8x^3 - 4x^2 + 2x) : (2x)$, ta được thương là:',
        options: [
          { id: 'opt-28-2a', text: '$4x^2 - 2x + 1$', isCorrect: true },
          { id: 'opt-28-2b', text: '$4x^2 - 2x$', isCorrect: false },
          { id: 'opt-28-2c', text: '$4x^2 - 2x + 2$', isCorrect: false },
          { id: 'opt-28-2d', text: '$6x^2 - 2x + 1$', isCorrect: false }
        ],
        correctAnswerId: 'opt-28-2a',
        progressiveHints: [
          'Chia từng hạng tử cho 2x: 8x^3 : 2x = 4x^2; -4x^2 : 2x = -2x.',
          'Đặc biệt lưu ý: 2x : 2x = 1 (không được bỏ sót).'
        ],
        explanation: '$(8x^3 : 2x) - (4x^2 : 2x) + (2x : 2x) = 4x^2 - 2x + 1$.',
        competencyRef: 'KNTT-T28-02',
        points: 25
      },
      {
        id: 'q28-3',
        tier: 'thong_hieu',
        question: 'Thực hiện phép chia $(x^2 - 5x + 6) : (x - 2)$, kết quả là:',
        options: [
          { id: 'opt-28-3a', text: '$x - 3$ (phép chia hết)', isCorrect: true },
          { id: 'opt-28-3b', text: '$x + 3$ (phép chia hết)', isCorrect: false },
          { id: 'opt-28-3c', text: '$x - 3$ dư 2', isCorrect: false },
          { id: 'opt-28-3d', text: '$x + 2$ dư 1', isCorrect: false }
        ],
        correctAnswerId: 'opt-28-3a',
        progressiveHints: [
          'Ta có thể phân tích tử thành tích: x^2 - 5x + 6 = (x - 2)(x - 3).',
          'Chia cho (x - 2) thì kết quả là x - 3.'
        ],
        explanation: 'Vì $(x - 2)(x - 3) = x^2 - 3x - 2x + 6 = x^2 - 5x + 6$ nên thương là $x - 3$ và số dư bằng 0.',
        competencyRef: 'KNTT-T28-03',
        points: 25
      },
      {
        id: 'q28-4',
        tier: 'van_dung',
        question: 'Tìm phần dư trong phép chia đa thức $A(x) = 2x^2 + 3x + 5$ cho đa thức $B(x) = x + 1$:',
        options: [
          { id: 'opt-28-4a', text: '4', isCorrect: true },
          { id: 'opt-28-4b', text: '0', isCorrect: false },
          { id: 'opt-28-4c', text: '2', isCorrect: false },
          { id: 'opt-28-4d', text: '-4', isCorrect: false }
        ],
        correctAnswerId: 'opt-28-4a',
        progressiveHints: [
          'Đặt tính chia 2x^2 + 3x + 5 cho x + 1: Thương được 2x + 1.',
          'Nhân ngược: (2x + 1)(x + 1) = 2x^2 + 3x + 1. Lấy A(x) trừ đi ta được phần dư.'
        ],
        explanation: 'Ta có $2x^2 + 3x + 5 = (2x + 1)(x + 1) + 4$. Phần dư là số 4.',
        competencyRef: 'KNTT-T28-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-28-1',
        prompt: 'Bố hỏi con: Khi chia một đa thức cho đơn thức, có một trường hợp các bạn rất hay quên ghi số 1 vào kết quả, đó là trường hợp nào?',
        contextForParent: 'Nhắc con lỗi kinh điển $A : A = 1$ thay vì bỏ quên biến thành 0.',
        suggestedAnswerTip: 'Khi hạng tử bị chia giống hệt đơn thức chia (ví dụ $3x : 3x = 1$, các bạn hay tưởng triệt tiêu hết nên bỏ quên số 1).',
        sampleChildResponse: 'Là khi chia hai cái giống y hệt nhau bố ơi, ví dụ $2x : 2x = 1$ mà nhiều bạn tưởng hết sạch nên quên ghi số 1 ạ!'
      },
      {
        id: 'dp-28-2',
        prompt: 'Bố hỏi con: Khi đặt tính chia đa thức theo cột dọc, khi nào thì ta biết phép chia đã kết thúc?',
        contextForParent: 'Điều kiện dừng của thuật toán chia đa thức.',
        suggestedAnswerTip: 'Khi phần dư bằng 0 (chia hết) hoặc khi bậc của phần dư nhỏ hơn bậc của đa thức chia.',
        sampleChildResponse: 'Khi phần dư bằng 0 hoặc khi số mũ cao nhất của phần dư nhỏ hơn số mũ của đa thức chia bố ạ!'
      },
      {
        id: 'dp-28-3',
        prompt: 'Bố hỏi con: Mối quan hệ giữa Số bị chia, Số chia, Thương và Số dư trong đa thức có giống như phép chia số tự nhiên hồi tiểu học không?',
        contextForParent: 'Liên hệ công thức tổng quát $A = B \\cdot Q + R$.',
        suggestedAnswerTip: 'Hoàn toàn giống: Đa thức bị chia = (Đa thức chia nhân Đa thức thương) + Đa thức dư.',
        sampleChildResponse: 'Y hệt hồi lớp 4 bố ạ! Số bị chia bằng Thương nhân Số chia rồi cộng với Số dư!'
      }
    ]
  }
];
