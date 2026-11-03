import { Math7Lesson } from '../../types/curriculum';

export const chapter8Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 29: LÀM QUEN VỚI BIẾN CỐ
  // ==========================================================================
  {
    id: 'bai_29_lam_quen_voi_bien_co',
    order: 32,
    chapterId: 'chuong_8_bien_co_va_xac_suat',
    chapterTitle: 'Chương VIII: Biến Cố và Xác Suất Của Biến Cố',
    unit: 'Chương VIII: Biến cố và xác suất',
    term: 2,
    title: 'Bài 29: Làm quen với biến cố',
    subtitle: 'Khái niệm hiện tượng/sự kiện, phân loại biến cố chắc chắn, không thể và ngẫu nhiên',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-29-1',
        level: 'nhan_biet',
        code: 'KNTT-T29-01',
        description: 'Nhận biết biến cố là một sự kiện có thể xảy ra hoặc không xảy ra trong một thí nghiệm, phép thử.',
        mastered: true
      },
      {
        id: 'lt-29-2',
        level: 'nhan_biet',
        code: 'KNTT-T29-02',
        description: 'Phân loại được 3 loại biến cố: Biến cố chắc chắn (luôn xảy ra), Biến cố không thể (không bao giờ xảy ra), Biến cố ngẫu nhiên (có thể xảy ra hoặc không tùy thuộc vào kết quả).',
        mastered: true
      },
      {
        id: 'lt-29-3',
        level: 'thong_hieu',
        code: 'KNTT-T29-03',
        description: 'Lấy được các ví dụ thực tế minh họa cho từng loại biến cố trong các trò chơi may rủi và đời sống.',
        mastered: false
      },
      {
        id: 'lt-29-4',
        level: 'van_dung',
        code: 'KNTT-T29-04',
        description: 'Xác định được biến cố xảy ra hay không xảy ra khi biết trước kết quả cụ thể của một phép thử.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c29-1',
        title: 'Khái niệm Phép thử và Biến cố',
        summary: 'Các hành động thực nghiệm lặp lại như tung đồng xu, gieo con xúc xắc, quay vòng quay may mắn, rút thẻ... gọi là phép thử nghiệm (hay phép thử).\nMỗi sự kiện liên quan đến kết quả của phép thử được gọi là một biến cố (thường kí hiệu bằng chữ cái in hoa $A, B, C, \\dots$).',
        exampleSnippet: 'Phép thử: Gieo một con xúc xắc 6 mặt.\nBiến cố A: "Mặt xuất hiện có số chấm là số chẵn" ({2, 4, 6}).',
        pitfallWarning: 'Biến cố chỉ có ý nghĩa khi gắn liền với một phép thử cụ thể xác định.',
        realLifeApplication: 'Dự báo thời tiết ngày mai có mưa hay không, kết quả bốc thăm chia bảng World Cup.'
      },
      {
        id: 'c29-2',
        title: 'Ba loại biến cố trong thực tế',
        summary: 'Trong một phép thử, có ba loại biến cố:\n1. Biến cố chắc chắn: Là biến cố LUÔN LUÔN xảy ra trong mọi trường hợp (khả năng xảy ra là $100\\%$).\n2. Biến cố không thể: Là biến cố KHÔNG BAO GIỜ xảy ra trong bất kì trường hợp nào (khả năng xảy ra là $0\\%$).\n3. Biến cố ngẫu nhiên: Là biến cố có thể xảy ra hoặc không xảy ra, kết quả phụ thuộc hoàn toàn vào sự ngẫu nhiên.',
        latexFormula: 'P(\\text{Chắc chắn}) = 1; \\quad P(\\text{Không thể}) = 0; \\quad 0 < P(\\text{Ngẫu nhiên}) < 1',
        exampleSnippet: 'Gieo một con xúc xắc 6 mặt (từ 1 đến 6 chấm):\n- Chắc chắn: "Số chấm xuất hiện nhỏ hơn 7".\n- Không thể: "Số chấm xuất hiện bằng 8".\n- Ngẫu nhiên: "Số chấm xuất hiện là 5".',
        pitfallWarning: 'Cần đọc kĩ câu từ, chỉ một từ "lớn hơn", "nhỏ hơn hoặc bằng" cũng biến đổi biến cố từ ngẫu nhiên thành chắc chắn hoặc không thể.',
        realLifeApplication: 'Quản lý rủi ro bảo hiểm: Đánh giá khả năng xảy ra tai nạn hoặc rủi ro thiên tai để định mức phí.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q29-1',
        tier: 'nhan_biet',
        question: 'Gieo một con xúc xắc 6 mặt cân đối. Biến cố nào sau đây là "Biến cố chắc chắn"?',
        options: [
          { id: 'opt-29-1a', text: 'Số chấm xuất hiện là số tự nhiên nhỏ hơn 7', isCorrect: true },
          { id: 'opt-29-1b', text: 'Số chấm xuất hiện là số chẵn', isCorrect: false },
          { id: 'opt-29-1c', text: 'Số chấm xuất hiện bằng 6', isCorrect: false },
          { id: 'opt-29-1d', text: 'Số chấm xuất hiện lớn hơn 3', isCorrect: false }
        ],
        correctAnswerId: 'opt-29-1a',
        progressiveHints: [
          'Con xúc xắc chỉ có các mặt mang từ 1 đến 6 chấm.',
          'Các số từ 1 đến 6 đều nhỏ hơn 7.'
        ],
        explanation: 'Vì các mặt xúc xắc chỉ có số chấm là {1; 2; 3; 4; 5; 6}, tất cả đều nhỏ hơn 7, nên biến cố này luôn luôn xảy ra (chắc chắn).',
        competencyRef: 'KNTT-T29-02',
        points: 25
      },
      {
        id: 'q29-2',
        tier: 'nhan_biet',
        question: 'Trong một hộp kín có 5 viên bi màu xanh và 3 viên bi màu đỏ. Lấy ngẫu nhiên 1 viên bi. Biến cố nào sau đây là "Biến cố không thể"?',
        options: [
          { id: 'opt-29-2a', text: 'Lấy được viên bi màu vàng', isCorrect: true },
          { id: 'opt-29-2b', text: 'Lấy được viên bi màu xanh', isCorrect: false },
          { id: 'opt-29-2c', text: 'Lấy được viên bi màu đỏ', isCorrect: false },
          { id: 'opt-29-2d', text: 'Lấy được một viên bi xanh hoặc đỏ', isCorrect: false }
        ],
        correctAnswerId: 'opt-29-2a',
        progressiveHints: [
          'Trong hộp chỉ có bi màu xanh và màu đỏ.',
          'Có thể rút ra một viên bi màu vàng không?'
        ],
        explanation: 'Trong hộp không hề có bi màu vàng nên việc lấy được viên bi màu vàng là không thể xảy ra (biến cố không thể).',
        competencyRef: 'KNTT-T29-02',
        points: 25
      },
      {
        id: 'q29-3',
        tier: 'thong_hieu',
        question: 'Biến cố nào sau đây là "Biến cố ngẫu nhiên"?',
        options: [
          { id: 'opt-29-3a', text: 'Ngày mai tại Hà Nội trời sẽ có mưa', isCorrect: true },
          { id: 'opt-29-3b', text: 'Nước nguyên chất đóng băng ở nhiệt độ 100°C dưới áp suất chuẩn', isCorrect: false },
          { id: 'opt-29-3c', text: 'Mặt trời mọc ở hướng Đông vào buổi sáng', isCorrect: false },
          { id: 'opt-29-3d', text: 'Một tuần có 8 ngày', isCorrect: false }
        ],
        correctAnswerId: 'opt-29-3a',
        progressiveHints: [
          'Biến cố ngẫu nhiên là biến cố chưa biết trước có xảy ra hay không.',
          'Thời tiết ngày mai có thể mưa hoặc không mưa.'
        ],
        explanation: 'Thời tiết ngày mai có thể mưa hoặc không mưa, không ai dám chắc 100% nên đó là biến cố ngẫu nhiên.',
        competencyRef: 'KNTT-T29-03',
        points: 25
      },
      {
        id: 'q29-4',
        tier: 'van_dung',
        question: 'Tung đồng thời hai đồng xu cân đối. Có bao nhiêu kết quả có thể xảy ra đối với mặt xuất hiện của hai đồng xu?',
        options: [
          { id: 'opt-29-4a', text: '4 kết quả: (S, S), (S, N), (N, S), (N, N)', isCorrect: true },
          { id: 'opt-29-4b', text: '2 kết quả: Cùng Sấp hoặc Cùng Ngửa', isCorrect: false },
          { id: 'opt-29-4c', text: '3 kết quả', isCorrect: false },
          { id: 'opt-29-4d', text: '8 kết quả', isCorrect: false }
        ],
        correctAnswerId: 'opt-29-4a',
        progressiveHints: [
          'Mỗi đồng xu có 2 khả năng: Sấp (S) hoặc Ngửa (N).',
          'Hai đồng xu độc lập có 2 * 2 = 4 cặp kết quả.'
        ],
        explanation: 'Có 4 kết quả có thể xảy ra: (Sấp, Sấp), (Sấp, Ngửa), (Ngửa, Sấp), (Ngửa, Ngửa).',
        competencyRef: 'KNTT-T29-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-29-1',
        prompt: 'Bố hỏi con: Hãy đố bố 1 biến cố chắc chắn và 1 biến cố không thể xảy ra trong ngôi nhà của chúng ta ngay lúc này?',
        contextForParent: 'Tạo trò chơi đố vui tương tác tại bàn ăn để con củng cố khái niệm.',
        suggestedAnswerTip: 'Chắc chắn: "Bố con mình đều là con người" hoặc "Mặt trời sẽ lặn vào buổi tối". Không thể: "Bàn ăn này tự bay lên trần nhà".',
        sampleChildResponse: 'Chắc chắn là bố con mình đang ngồi ăn cơm! Còn không thể là con tự nhiên biến thành chú khủng long bay được bố ạ!'
      },
      {
        id: 'dp-29-2',
        prompt: 'Bố hỏi con: Trọng tài bóng đá tung đồng xu trước trận đấu để làm gì và tại sao lại công bằng?',
        contextForParent: 'Ý nghĩa của tính ngẫu nhiên và tính đối xứng xác suất.',
        suggestedAnswerTip: 'Để chọn sân hoặc giao bóng; công bằng vì cơ hội xuất hiện mặt Sấp và mặt Ngửa là hoàn toàn ngang nhau (50% - 50%).',
        sampleChildResponse: 'Để chia sân bóng công bằng bố ạ, vì đồng xu cân đối nên hai đội có cơ hội 50-50 như nhau, không ai can thiệp được!'
      },
      {
        id: 'dp-29-3',
        prompt: 'Bố hỏi con: Người ta có thể dùng biến cố ngẫu nhiên để đánh bạc hoặc trúng số làm giàu bền vững được không?',
        contextForParent: 'Giáo dục tài chính và nhận thức về toán học xác suất.',
        suggestedAnswerTip: 'Không thể, vì các trò chơi cờ bạc luôn được nhà cái thiết kế xác suất thắng nghiêng về nhà cái, người chơi càng chơi lâu càng mất tiền.',
        sampleChildResponse: 'Không bao giờ bố ơi! Vì đó là ngẫu nhiên và xác suất trúng cực kì thấp, chỉ có học tập và lao động thật mới bền vững thôi!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 30: XÁC SUẤT CỦA BIẾN CỐ
  // ==========================================================================
  {
    id: 'bai_30_xac_suat_cua_bien_co',
    order: 33,
    chapterId: 'chuong_8_bien_co_va_xac_suat',
    chapterTitle: 'Chương VIII: Biến Cố và Xác Suất Của Biến Cố',
    unit: 'Chương VIII: Biến cố và xác suất',
    term: 2,
    title: 'Bài 30: Xác suất của biến cố',
    subtitle: 'Đo lường cơ hội xảy ra của biến cố, xác suất của các kết quả đồng khả năng',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-30-1',
        level: 'nhan_biet',
        code: 'KNTT-T30-01',
        description: 'Nhận biết xác suất là một con số từ 0 đến 1 (hoặc $0\\%$ đến $100\\%$) đo lường mức độ khả thi xảy ra của một biến cố.',
        mastered: true
      },
      {
        id: 'lt-30-2',
        level: 'nhan_biet',
        code: 'KNTT-T30-02',
        description: 'Biết xác suất của biến cố chắc chắn bằng 1 (hay $100\\%$), xác suất của biến cố không thể bằng 0.',
        mastered: true
      },
      {
        id: 'lt-30-3',
        level: 'thong_hieu',
        code: 'KNTT-T30-03',
        description: 'Tính được xác suất của biến cố trong các mô hình đồng khả năng: $P(A) = \\frac{m}{n}$ (số kết quả thuận lợi chia cho tổng số kết quả có thể).',
        mastered: false
      },
      {
        id: 'lt-30-4',
        level: 'van_dung',
        code: 'KNTT-T30-04',
        description: 'Ứng dụng xác suất để đưa ra quyết định hợp lí trong các trò chơi may rủi và tình huống đời sống.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c30-1',
        title: 'Khái niệm Xác suất và Mô hình đồng khả năng',
        summary: 'Xác suất của một biến cố là thước đo khả năng xảy ra của biến cố đó:\n- Nếu tất cả các kết quả có thể xảy ra của một phép thử đều có khả năng xuất hiện ngang nhau thì gọi là các kết quả đồng khả năng.\n- Công thức tính xác suất cổ điển: $P(A) = \\frac{m}{n}$, trong đó $m$ là số kết quả thuận lợi cho biến cố $A$, $n$ là tổng số tất cả các kết quả có thể xảy ra.',
        latexFormula: 'P(A) = \\frac{\\text{Số kết quả thuận lợi cho } A}{\\text{Tổng số kết quả có thể xảy ra}} = \\frac{m}{n} \\quad (0 \\le P(A) \\le 1)',
        exampleSnippet: 'Tung con xúc xắc 6 mặt cân đối ($n = 6$). Biến cố A: "Xuất hiện mặt số chẵn" ({2, 4, 6} -> $m = 3$). Xác suất $P(A) = \\frac{3}{6} = \\frac{1}{2} = 0,5$ ($50\\%$).',
        pitfallWarning: 'Công thức $P(A) = \\frac{m}{n}$ CHỈ ĐÚNG khi tất cả các kết quả là ĐỒNG KHẢ NĂNG (con xúc xắc, đồng xu phải hoàn toàn cân đối, rút thẻ không nhìn).',
        realLifeApplication: 'Xác suất dự báo thời tiết có mưa $70\\%$ giúp người dân quyết định mang theo áo mưa khi ra đường.'
      },
      {
        id: 'c30-2',
        title: 'Quy ước thang đo xác suất',
        summary: 'Giá trị xác suất luôn nằm trong đoạn từ 0 đến 1:\n- $P(A) = 0$: Biến cố $A$ là biến cố không thể.\n- $P(A) = 1$: Biến cố $A$ là biến cố chắc chắn.\n- $P(A) = 0,5$: Khả năng xảy ra và không xảy ra là ngang nhau (50-50).\n- Xác suất càng gần 1 thì biến cố càng có nhiều cơ hội xảy ra.',
        latexFormula: '0 \\le P(A) \\le 1; \\quad P(\\text{Không thể}) = 0; \\quad P(\\text{Chắc chắn}) = 1',
        exampleSnippet: 'Rút 1 lá bài từ bộ bài 52 lá. Xác suất rút trúng lá Át là $P = \\frac{4}{52} = \\frac{1}{13} \\approx 7,7\\%$.',
        pitfallWarning: 'Không bao giờ có xác suất âm hoặc xác suất lớn hơn 1 ($> 100\\%$). Nếu tính ra $P > 1$ chắc chắn đã đếm nhầm.',
        realLifeApplication: 'Các hãng hàng không tính toán xác suất khách bỏ chuyến (no-show) để bán vé vượt số ghế một cách an toàn.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q30-1',
        tier: 'nhan_biet',
        question: 'Xác suất của một biến cố bất kì luôn nhận giá trị trong khoảng nào?',
        options: [
          { id: 'opt-30-1a', text: 'Từ 0 đến 1 (tức từ 0% đến 100%)', isCorrect: true },
          { id: 'opt-30-1b', text: 'Từ -1 đến 1', isCorrect: false },
          { id: 'opt-30-1c', text: 'Lớn hơn hoặc bằng 1', isCorrect: false },
          { id: 'opt-30-1d', text: 'Bất kì số thực nào', isCorrect: false }
        ],
        correctAnswerId: 'opt-30-1a',
        progressiveHints: [
          'Biến cố không thể có xác suất bằng 0, biến cố chắc chắn có xác suất bằng 1.',
          'Mọi khả năng ngẫu nhiên khác đều nằm giữa hai mốc này.'
        ],
        explanation: 'Theo định nghĩa, xác suất của một biến cố luôn thỏa mãn $0 \\le P(A) \\le 1$.',
        competencyRef: 'KNTT-T30-01',
        points: 25
      },
      {
        id: 'q30-2',
        tier: 'nhan_biet',
        question: 'Tung một đồng xu cân đối. Xác suất xuất hiện mặt Ngửa bằng bao nhiêu?',
        options: [
          { id: 'opt-30-2a', text: '$\\frac{1}{2}$ (hay 50%)', isCorrect: true },
          { id: 'opt-30-2b', text: '1', isCorrect: false },
          { id: 'opt-30-2c', text: '0', isCorrect: false },
          { id: 'opt-30-2d', text: '$\\frac{1}{4}$', isCorrect: false }
        ],
        correctAnswerId: 'opt-30-2a',
        progressiveHints: [
          'Đồng xu có 2 mặt có khả năng xuất hiện ngang nhau: Sấp và Ngửa.',
          'Thuận lợi cho mặt Ngửa là 1 mặt trên tổng số 2 mặt.'
        ],
        explanation: 'Tổng số kết quả có thể là 2 (Sấp hoặc Ngửa), kết quả thuận lợi là 1. Xác suất $P = \\frac{1}{2} = 50\\%$.',
        competencyRef: 'KNTT-T30-03',
        points: 25
      },
      {
        id: 'q30-3',
        tier: 'thong_hieu',
        question: 'Gieo một con xúc xắc 6 mặt cân đối. Xác suất để mặt xuất hiện có số chấm là số nguyên tố bằng bao nhiêu?',
        options: [
          { id: 'opt-30-3a', text: '$\\frac{1}{2}$', isCorrect: true },
          { id: 'opt-30-3b', text: '$\\frac{1}{3}$', isCorrect: false },
          { id: 'opt-30-3c', text: '$\\frac{2}{3}$', isCorrect: false },
          { id: 'opt-30-3d', text: '$\\frac{1}{6}$', isCorrect: false }
        ],
        correctAnswerId: 'opt-30-3a',
        progressiveHints: [
          'Các số từ 1 đến 6 gồm: 1, 2, 3, 4, 5, 6.',
          'Các số nguyên tố là những số nào? (Nhớ rằng 1 không phải là số nguyên tố: có 2, 3, 5 -> 3 số).'
        ],
        explanation: 'Các mặt có số chấm là số nguyên tố là {2; 3; 5} (gồm 3 kết quả thuận lợi). Xác suất là $P = \\frac{3}{6} = \\frac{1}{2}$.',
        competencyRef: 'KNTT-T30-03',
        points: 25
      },
      {
        id: 'q30-4',
        tier: 'van_dung',
        question: 'Một hộp có 12 chiếc thẻ cùng loại được đánh số từ 1 đến 12. Rút ngẫu nhiên 1 chiếc thẻ. Xác suất để rút được thẻ ghi số chia hết cho 3 là:',
        options: [
          { id: 'opt-30-4a', text: '$\\frac{1}{3}$', isCorrect: true },
          { id: 'opt-30-4b', text: '$\\frac{1}{4}$', isCorrect: false },
          { id: 'opt-30-4c', text: '$\\frac{1}{2}$', isCorrect: false },
          { id: 'opt-30-4d', text: '$\\frac{5}{12}$', isCorrect: false }
        ],
        correctAnswerId: 'opt-30-4a',
        progressiveHints: [
          'Liệt kê các số từ 1 đến 12 chia hết cho 3: {3, 6, 9, 12} -> Có 4 số.',
          'Tính: P = 4 / 12 rút gọn.'
        ],
        explanation: 'Các số chia hết cho 3 từ 1 đến 12 là {3; 6; 9; 12} (có 4 kết quả thuận lợi). Xác suất $P = \\frac{4}{12} = \\frac{1}{3}$.',
        competencyRef: 'KNTT-T30-03',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-30-1',
        prompt: 'Bố hỏi con: Khi xem bản tin thời tiết nói "Khả năng mưa ngày mai là 80%", con hiểu con số 80% này theo góc độ toán học như thế nào?',
        contextForParent: 'Giúp con hiểu ý nghĩa thống kê của xác suất trong dự báo.',
        suggestedAnswerTip: 'Nghĩa là trong 100 ngày có điều kiện khí quyển tương tự thì có tới 80 ngày trời mưa (khả năng mưa rất cao, nên mang áo mưa).',
        sampleChildResponse: 'Nghĩa là khả năng mưa rất cao bố ạ! Cứ 10 lần có thời tiết thế này thì 8 lần trời đổ mưa, mai đi học chắc chắn phải mang áo mưa rồi!'
      },
      {
        id: 'dp-30-2',
        prompt: 'Bố hỏi con: Nếu tung một con xúc xắc cân đối, tại sao cơ hội ra mặt 1 chấm và mặt 6 chấm lại bằng nhau?',
        contextForParent: 'Khái niệm tính đồng khả năng và sự cân đối vật lí.',
        suggestedAnswerTip: 'Vì 6 mặt của con xúc xắc có diện tích và trọng lượng đồng đều như nhau, không có mặt nào nặng hơn hay méo mó.',
        sampleChildResponse: 'Vì xúc xắc là hình lập phương cân đối, mặt nào cũng như mặt nào nên cơ hội rơi vào mỗi mặt đều là 1/6 như nhau ạ!'
      },
      {
        id: 'dp-30-3',
        prompt: 'Bố hỏi con: Có bao giờ xác suất của một sự việc nào đó vượt quá 100% không?',
        contextForParent: 'Nhắc con ranh giới tối đa của xác suất.',
        suggestedAnswerTip: 'Không bao giờ! 100% (tức giá trị 1) là biến cố chắc chắn xảy ra, không thể có gì "chắc chắn hơn cả chắc chắn".',
        sampleChildResponse: 'Không bao giờ bố ơi! 100% là chắc chắn nhất rồi, bạn nào tính ra 120% hay số âm là tính sai công thức ngay!'
      }
    ]
  }
];
