import { Math7Lesson } from '../../types/curriculum';

export const chapter9Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 31: QUAN HỆ GIỮA GÓC VÀ CẠNH ĐỐI DIỆN TRONG MỘT TAM GIÁC
  // ==========================================================================
  {
    id: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 34,
    chapterId: 'chuong_9_quan_he_cac_yeu_to_tam_giac',
    chapterTitle: 'Chương IX: Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác',
    unit: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác',
    term: 2,
    title: 'Bài 31: Quan hệ giữa góc và cạnh đối diện trong một tam giác',
    subtitle: 'Định lí góc đối diện cạnh lớn hơn, so sánh các góc và các cạnh trong tam giác',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-31-1',
        level: 'nhan_biet',
        code: 'KNTT-T31-01',
        description: 'Nhận biết định lí 1: Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn.',
        mastered: true
      },
      {
        id: 'lt-31-2',
        level: 'nhan_biet',
        code: 'KNTT-T31-02',
        description: 'Nhận biết định lí đảo: Trong một tam giác, cạnh đối diện với góc lớn hơn là cạnh lớn hơn.',
        mastered: true
      },
      {
        id: 'lt-31-3',
        level: 'thong_hieu',
        code: 'KNTT-T31-03',
        description: 'Nhận xét hệ quả: Trong tam giác vuông (hoặc tam giác tù), cạnh huyền (hoặc cạnh đối diện góc tù) là cạnh lớn nhất.',
        mastered: false
      },
      {
        id: 'lt-31-4',
        level: 'van_dung',
        code: 'KNTT-T31-04',
        description: 'So sánh các cạnh khi biết các góc (hoặc ngược lại) để sắp xếp thứ tự hoặc chứng minh hình học.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c31-1',
        title: 'Định lí thuận và đảo về góc và cạnh đối diện',
        summary: 'Trong một tam giác $\\Delta ABC$:\n1. Góc đối diện với cạnh lớn hơn là góc lớn hơn: $AC > AB \\iff \\widehat{B} > \\widehat{C}$.\n2. Cạnh đối diện với góc lớn hơn là cạnh lớn hơn: $\\widehat{B} > \\widehat{C} \\iff AC > AB$.\n3. Trong tam giác đều: ba cạnh bằng nhau thì ba góc bằng nhau ($60^\\circ$). Trong tam giác cân: hai cạnh bằng nhau thì hai góc ở đáy bằng nhau.',
        latexFormula: 'AC > AB > BC \\iff \\widehat{B} > \\widehat{C} > \\widehat{A}',
        exampleSnippet: 'Cho $\\Delta ABC$ có $AB = 3\\text{ cm}, BC = 5\\text{ cm}, AC = 7\\text{ cm}$.\nVì $AC > BC > AB$ nên góc đối diện tương ứng là: $\\widehat{B} > \\widehat{A} > \\widehat{C}$.',
        pitfallWarning: 'Định lí này CHỈ ÁP DỤNG TRONG CÙNG MỘT TAM GIÁC. Không được so sánh góc của tam giác này với cạnh của tam giác khác.',
        realLifeApplication: 'Khi mở một cánh cửa hoặc cây kéo: Càng mở rộng góc thì khoảng cách giữa hai đầu kéo (cạnh đối diện) càng lớn.'
      },
      {
        id: 'c31-2',
        title: 'Cạnh lớn nhất trong Tam giác vuông và Tam giác tù',
        summary: '1. Trong tam giác vuông: Góc vuông ($90^\\circ$) là góc lớn nhất $\\implies$ Cạnh huyền (đối diện góc vuông) luôn là cạnh lớn nhất.\n2. Trong tam giác tù: Góc tù ($> 90^\\circ$) là góc lớn nhất $\\implies$ Cạnh đối diện góc tù là cạnh lớn nhất trong tam giác đó.',
        exampleSnippet: 'Cho $\\Delta MNP$ vuông tại $M$. Không cần đo đạc, ta kết luận ngay cạnh huyền $NP$ lớn hơn cả $MN$ và $MP$.',
        pitfallWarning: 'Trong tam giác tù, hai góc còn lại bắt buộc phải là góc nhọn (tổng 3 góc bằng $180^\\circ$).',
        realLifeApplication: 'Thiết kế cầu thang dốc: Cạnh huyền dốc thang luôn dài hơn chiều cao bậc thang vuông góc.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q31-1',
        tier: 'nhan_biet',
        question: 'Cho tam giác ABC có $AB = 4\\text{ cm}, AC = 6\\text{ cm}, BC = 8\\text{ cm}$. Góc nào có số đo lớn nhất?',
        options: [
          { id: 'opt-31-1a', text: 'Góc A', isCorrect: true },
          { id: 'opt-31-1b', text: 'Góc B', isCorrect: false },
          { id: 'opt-31-1c', text: 'Góc C', isCorrect: false },
          { id: 'opt-31-1d', text: 'Ba góc bằng nhau', isCorrect: false }
        ],
        correctAnswerId: 'opt-31-1a',
        progressiveHints: [
          'Cạnh lớn nhất trong 3 cạnh là cạnh nào?',
          'Cạnh BC lớn nhất (8 cm). Góc đối diện với cạnh BC là góc đỉnh nào?'
        ],
        explanation: 'Cạnh lớn nhất là $BC = 8\\text{ cm}$. Góc đối diện với cạnh $BC$ là góc $\\widehat{A}$, do đó góc $A$ là góc lớn nhất.',
        competencyRef: 'KNTT-T31-01',
        points: 25
      },
      {
        id: 'q31-2',
        tier: 'nhan_biet',
        question: 'Trong tam giác vuông, cạnh nào luôn là cạnh có độ dài lớn nhất?',
        options: [
          { id: 'opt-31-2a', text: 'Cạnh huyền (đối diện góc vuông)', isCorrect: true },
          { id: 'opt-31-2b', text: 'Cạnh góc vuông kề góc nhỏ', isCorrect: false },
          { id: 'opt-31-2c', text: 'Cạnh góc vuông dài hơn', isCorrect: false },
          { id: 'opt-31-2d', text: 'Tùy thuộc vào từng tam giác vuông', isCorrect: false }
        ],
        correctAnswerId: 'opt-31-2a',
        progressiveHints: [
          'Trong tam giác vuông, góc vuông (90°) là góc lớn nhất.',
          'Cạnh đối diện với góc lớn nhất là cạnh lớn nhất.'
        ],
        explanation: 'Vì góc vuông là góc lớn nhất trong tam giác vuông nên cạnh đối diện (cạnh huyền) luôn là cạnh có độ dài lớn nhất.',
        competencyRef: 'KNTT-T31-03',
        points: 25
      },
      {
        id: 'q31-3',
        tier: 'thong_hieu',
        question: 'Cho $\\Delta ABC$ có $\\widehat{A} = 70^\\circ, \\widehat{B} = 60^\\circ$. Sắp xếp độ dài 3 cạnh từ bé đến lớn là:',
        options: [
          { id: 'opt-31-3a', text: '$AB < AC < BC$', isCorrect: true },
          { id: 'opt-31-3b', text: '$BC < AC < AB$', isCorrect: false },
          { id: 'opt-31-3c', text: '$AC < AB < BC$', isCorrect: false },
          { id: 'opt-31-3d', text: '$AB < BC < AC$', isCorrect: false }
        ],
        correctAnswerId: 'opt-31-3a',
        progressiveHints: [
          'Tính góc C: 180° - (70° + 60°) = 50°.',
          'So sánh góc: C (50°) < B (60°) < A (70°).',
          'Cạnh đối diện tương ứng: AB đối diện C, AC đối diện B, BC đối diện A.'
        ],
        explanation: 'Ta có $\\widehat{C} = 180^\\circ - (70^\\circ + 60^\\circ) = 50^\\circ$. Vì $\\widehat{C} < \\widehat{B} < \\widehat{A}$ nên $AB < AC < BC$.',
        competencyRef: 'KNTT-T31-04',
        points: 25
      },
      {
        id: 'q31-4',
        tier: 'van_dung',
        question: 'Cho $\\Delta MNP$ tù tại đỉnh M. Khẳng định nào sau đây là LUÔN ĐÚNG?',
        options: [
          { id: 'opt-31-4a', text: '$NP > MN$ và $NP > MP$', isCorrect: true },
          { id: 'opt-31-4b', text: '$MN > NP$', isCorrect: false },
          { id: 'opt-31-4c', text: '$MP > NP$', isCorrect: false },
          { id: 'opt-31-4d', text: '$MN = MP$', isCorrect: false }
        ],
        correctAnswerId: 'opt-31-4a',
        progressiveHints: [
          'Góc M là góc tù (> 90°) nên là góc lớn nhất trong tam giác MNP.',
          'Cạnh đối diện với góc M là cạnh NP.'
        ],
        explanation: 'Vì góc $M$ là góc tù nên $M$ là góc lớn nhất. Cạnh đối diện $NP$ do đó lớn hơn cả hai cạnh còn lại ($NP > MN$ và $NP > MP$).',
        competencyRef: 'KNTT-T31-03',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-31-1',
        prompt: 'Bố hỏi con: Hãy tưởng tượng cái kéo cắt giấy: khi con há kéo càng to thì khoảng cách giữa hai đầu lưỡi kéo sẽ biến đổi thế nào?',
        contextForParent: 'Liên hệ định lí góc và cạnh đối diện qua hình ảnh cái kéo trực quan.',
        suggestedAnswerTip: 'Khoảng cách giữa hai đầu kéo (cạnh đối diện) càng rộng ra, đúng như định lí góc càng lớn thì cạnh đối diện càng dài.',
        sampleChildResponse: 'Khoảng cách hai đầu kéo càng mở rộng ra bố ơi! Góc ở khớp kéo càng to thì cạnh đối diện giữa hai mũi kéo càng dài ạ!'
      },
      {
        id: 'dp-31-2',
        prompt: 'Bố hỏi con: Trong tam giác vuông, có bao giờ một cạnh góc vuông lại dài hơn cạnh huyền được không?',
        contextForParent: 'Khắc sâu tính chất cạnh huyền lớn nhất.',
        suggestedAnswerTip: 'Không bao giờ, vì góc vuông $90^\\circ$ là góc lớn nhất, nên cạnh huyền luôn là cạnh dài nhất.',
        sampleChildResponse: 'Không bao giờ bố ạ! Cạnh huyền đối diện góc $90^\\circ$ to nhất nên lúc nào nó cũng là cạnh dài nhất tam giác!'
      },
      {
        id: 'dp-31-3',
        prompt: 'Bố hỏi con: Muốn so sánh 3 cạnh của một tam giác khi chỉ biết số đo 2 góc, con phải làm bước nào đầu tiên?',
        contextForParent: 'Quy trình giải bài tập hình học 7.',
        suggestedAnswerTip: 'Tính số đo góc thứ ba (lấy $180^\\circ$ trừ tổng hai góc đã biết), sau đó so sánh cả 3 góc rồi suy ra thứ tự 3 cạnh.',
        sampleChildResponse: 'Con phải tính góc thứ ba trước bằng cách lấy 180 độ trừ đi hai góc kia, rồi so sánh góc để ra cạnh bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 32: QUAN HỆ GIỮA ĐƯỜNG VUÔNG GÓC VÀ ĐƯỜNG XIÊN
  // ==========================================================================
  {
    id: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 35,
    chapterId: 'chuong_9_quan_he_cac_yeu_to_tam_giac',
    chapterTitle: 'Chương IX: Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác',
    unit: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác',
    term: 2,
    title: 'Bài 32: Quan hệ giữa đường vuông góc và đường xiên',
    subtitle: 'Khoảng cách từ một điểm đến đường thẳng, so sánh độ dài đường vuông góc và đường xiên',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-32-1',
        level: 'nhan_biet',
        code: 'KNTT-T32-01',
        description: 'Phân biệt đường vuông góc ($AH \\perp d$) và các đường xiên ($AM, AN$) kẻ từ một điểm $A$ nằm ngoài đường thẳng $d$.',
        mastered: true
      },
      {
        id: 'lt-32-2',
        level: 'nhan_biet',
        code: 'KNTT-T32-02',
        description: 'Định nghĩa khoảng cách từ một điểm $A$ đến đường thẳng $d$ chính là độ dài đoạn vuông góc $AH$.',
        mastered: true
      },
      {
        id: 'lt-32-3',
        level: 'thong_hieu',
        code: 'KNTT-T32-03',
        description: 'Nắm vững định lí: Trong các đường xiên và đường vuông góc kẻ từ điểm $A$ đến đường thẳng $d$, đường vuông góc là đường ngắn nhất ($AH < AM$).',
        mastered: false
      },
      {
        id: 'lt-32-4',
        level: 'van_dung',
        code: 'KNTT-T32-04',
        description: 'Ứng dụng tìm con đường ngắn nhất trong các bài toán thực tế (bơi qua sông ngắn nhất, kéo dây điện ngắn nhất).',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c32-1',
        title: 'Khái niệm Đường vuông góc, Đường xiên và Khoảng cách',
        summary: 'Cho điểm $A$ không nằm trên đường thẳng $d$:\n- Kẻ $AH \\perp d$ tại $H$: Đoạn thẳng $AH$ gọi là đoạn vuông góc kẻ từ $A$ đến $d$; điểm $H$ gọi là chân đường vuông góc (hoặc hình chiếu của $A$ trên $d$).\n- Lấy điểm $M \\in d$ ($M \\neq H$): Đoạn thẳng $AM$ gọi là một đường xiên kẻ từ $A$ đến $d$.\n- Độ dài đoạn thẳng $AH$ gọi là khoảng cách từ điểm $A$ đến đường thẳng $d$.',
        latexFormula: 'd(A, d) = AH \\quad (AH \\perp d, H \\in d)',
        exampleSnippet: 'Muốn đo khoảng cách từ một cột đèn $A$ đến mép đường ray $d$, ta kéo thước vuông góc từ chân cột đèn đến đường ray.',
        pitfallWarning: 'Khoảng cách từ một điểm đến đường thẳng luôn luôn được tính bằng ĐOẠN VUÔNG GÓC, không được đo theo đường chéo hay đường xiên.',
        realLifeApplication: 'Khi băng qua đường phố: Đi vuông góc thẳng sang bờ bên kia là con đường ngắn nhất và tốn ít thời gian nhất.'
      },
      {
        id: 'c32-2',
        title: 'Định lí: Đường vuông góc là đường ngắn nhất',
        summary: 'Trong các đoạn thẳng kẻ từ một điểm $A$ ở ngoài một đường thẳng $d$ đến các điểm trên đường thẳng $d$, đoạn vuông góc là đoạn thẳng ngắn nhất.\nChứng minh: Xét tam giác vuông $\\Delta AHM$ vuông tại $H$. Cạnh huyền $AM$ luôn lớn hơn cạnh góc vuông $AH$, do đó $AH < AM$.',
        latexFormula: 'AH < AM \\quad (\\forall M \\in d, M \\neq H)',
        exampleSnippet: 'Một người đang ở điểm $A$ trên bờ hồ muốn bơi nhanh nhất sang bờ kè đối diện $d$ thì phải bơi theo phương vuông góc với bờ kè.',
        pitfallWarning: 'Đường xiên nào có hình chiếu lớn hơn thì lớn hơn: $HM > HN \\iff AM > AN$.',
        realLifeApplication: 'Thợ xây dùng dây dọi thả vuông góc xuống đất để kiểm tra độ thẳng đứng của bức tường.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q32-1',
        tier: 'nhan_biet',
        question: 'Từ điểm A nằm ngoài đường thẳng d, kẻ đoạn AH vuông góc với d (H thuộc d) và đoạn AM cắt d tại M (M khác H). Đoạn thẳng nào là đường vuông góc?',
        options: [
          { id: 'opt-32-1a', text: 'Đoạn AH', isCorrect: true },
          { id: 'opt-32-1b', text: 'Đoạn AM', isCorrect: false },
          { id: 'opt-32-1c', text: 'Đoạn HM', isCorrect: false },
          { id: 'opt-32-1d', text: 'Cả AH và AM đều là đường vuông góc', isCorrect: false }
        ],
        correctAnswerId: 'opt-32-1a',
        progressiveHints: [
          'Đoạn vuông góc là đoạn tạo với đường thẳng d một góc 90°.',
          'AH vuông góc với d tại H.'
        ],
        explanation: 'Đoạn $AH$ vuông góc với đường thẳng $d$ tại $H$ nên $AH$ là đoạn vuông góc, còn $AM$ là đường xiên.',
        competencyRef: 'KNTT-T32-01',
        points: 25
      },
      {
        id: 'q32-2',
        tier: 'nhan_biet',
        question: 'Khoảng cách từ điểm A đến đường thẳng d được định nghĩa là:',
        options: [
          { id: 'opt-32-2a', text: 'Độ dài đoạn vuông góc AH kẻ từ A đến d', isCorrect: true },
          { id: 'opt-32-2b', text: 'Độ dài đường xiên AM bất kì kẻ từ A đến d', isCorrect: false },
          { id: 'opt-32-2c', text: 'Nửa độ dài đường xiên dài nhất', isCorrect: false },
          { id: 'opt-32-2d', text: 'Độ dài đoạn thẳng nối A với gốc tọa độ', isCorrect: false }
        ],
        correctAnswerId: 'opt-32-2a',
        progressiveHints: [
          'Khoảng cách giữa điểm và đường thẳng là đoạn ngắn nhất.',
          'Đoạn ngắn nhất chính là đoạn vuông góc.'
        ],
        explanation: 'Theo định nghĩa trong SGK, khoảng cách từ điểm $A$ đến đường thẳng $d$ chính là độ dài đoạn vuông góc $AH$.',
        competencyRef: 'KNTT-T32-02',
        points: 25
      },
      {
        id: 'q32-3',
        tier: 'thong_hieu',
        question: 'So sánh độ dài đoạn vuông góc AH và đường xiên AM kẻ từ cùng điểm A đến đường thẳng d ($M \\neq H$):',
        options: [
          { id: 'opt-32-3a', text: '$AH < AM$', isCorrect: true },
          { id: 'opt-32-3b', text: '$AH > AM$', isCorrect: false },
          { id: 'opt-32-3c', text: '$AH = AM$', isCorrect: false },
          { id: 'opt-32-3d', text: '$AH \\ge AM$', isCorrect: false }
        ],
        correctAnswerId: 'opt-32-3a',
        progressiveHints: [
          'Xét tam giác AHM vuông tại H.',
          'Trong tam giác vuông, cạnh huyền AM luôn dài hơn cạnh góc vuông AH.'
        ],
        explanation: 'Trong tam giác vuông $\\Delta AHM$ tại $H$, $AM$ là cạnh huyền nên $AM > AH$ (tức $AH < AM$).',
        competencyRef: 'KNTT-T32-03',
        points: 25
      },
      {
        id: 'q32-4',
        tier: 'van_dung',
        question: 'Một người đứng ở vị trí A cách một bờ mương thẳng d một khoảng 10m. Người đó muốn chạy ra bờ mương để lấy nước. Quãng đường ngắn nhất người đó phải chạy là:',
        options: [
          { id: 'opt-32-4a', text: 'Đúng 10 mét (theo phương vuông góc với bờ mương)', isCorrect: true },
          { id: 'opt-32-4b', text: '12 mét', isCorrect: false },
          { id: 'opt-32-4c', text: '8 mét', isCorrect: false },
          { id: 'opt-32-4d', text: '14,14 mét', isCorrect: false }
        ],
        correctAnswerId: 'opt-32-4a',
        progressiveHints: [
          'Đường vuông góc là đường ngắn nhất nối từ điểm A đến đường thẳng d.',
          'Khoảng cách từ A đến d đề bài cho là 10m.'
        ],
        explanation: 'Quãng đường ngắn nhất chính là độ dài đoạn vuông góc kẻ từ $A$ đến bờ mương $d$, bằng đúng khoảng cách $10\\text{m}$.',
        competencyRef: 'KNTT-T32-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-32-1',
        prompt: 'Bố hỏi con: Khi con đi bộ muốn băng qua một con đường lớn, tại sao đi vuông góc thẳng sang bờ bên kia lại là cách an toàn và nhanh nhất?',
        contextForParent: 'Vận dụng định lí đường vuông góc ngắn nhất vào kĩ năng an toàn giao thông.',
        suggestedAnswerTip: 'Vì đường vuông góc là đường ngắn nhất, giúp rút ngắn thời gian con phải ở trên lòng đường nguy hiểm.',
        sampleChildResponse: 'Vì đi vuông góc là quãng đường ngắn nhất bố ạ, đi nhanh nhất sang bờ bên kia thì đỡ gặp nguy hiểm xe cộ trên đường!'
      },
      {
        id: 'dp-32-2',
        prompt: 'Bố hỏi con: Tại sao trong tam giác vuông, đường vuông góc $AH$ lại luôn ngắn hơn đường xiên $AM$?',
        contextForParent: 'Chứng minh định lí bằng định lí cạnh huyền tam giác vuông.',
        suggestedAnswerTip: 'Vì tam giác $AHM$ vuông tại $H$, cạnh $AM$ là cạnh huyền đối diện góc $90^\\circ$ nên $AM$ bắt buộc phải lớn hơn cạnh góc vuông $AH$.',
        sampleChildResponse: 'Vì tam giác đó vuông tại $H$, đường xiên đóng vai trò cạnh huyền mà cạnh huyền thì luôn dài hơn cạnh góc vuông rồi bố!'
      },
      {
        id: 'dp-32-3',
        prompt: 'Bố hỏi con: Bác thợ nề dùng dụng cụ gì để tìm đường vuông góc từ trên cao thả thẳng xuống mặt đất?',
        contextForParent: 'Khám phá quả dọi trong xây dựng.',
        suggestedAnswerTip: 'Dùng dây dọi (quả dọi bằng chì treo dây) tự nhiên buông thẳng đứng vuông góc với mặt đất do trọng lực Trái Đất.',
        sampleChildResponse: 'Bác dùng quả dọi buộc sợi dây thả xuống bố ơi, nó chỉ đúng phương vuông góc với sàn nhà luôn ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 33: QUAN HỆ GIỮA BA CẠNH CỦA MỘT TAM GIÁC
  // ==========================================================================
  {
    id: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 36,
    chapterId: 'chuong_9_quan_he_cac_yeu_to_tam_giac',
    chapterTitle: 'Chương IX: Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác',
    unit: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác',
    term: 2,
    title: 'Bài 33: Quan hệ giữa ba cạnh của một tam giác',
    subtitle: 'Bất đẳng thức tam giác: Tổng hai cạnh luôn lớn hơn cạnh còn lại, điều kiện tồn tại tam giác',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-33-1',
        level: 'nhan_biet',
        code: 'KNTT-T33-01',
        description: 'Phát biểu được định lí Bất đẳng thức tam giác: Trong một tam giác, tổng độ dài hai cạnh bất kì luôn lớn hơn độ dài cạnh còn lại.',
        mastered: true
      },
      {
        id: 'lt-33-2',
        level: 'nhan_biet',
        code: 'KNTT-T33-02',
        description: 'Nắm vững hệ quả: Hiệu độ dài hai cạnh bất kì luôn nhỏ hơn độ dài cạnh còn lại: $|b - c| < a < b + c$.',
        mastered: true
      },
      {
        id: 'lt-33-3',
        level: 'thong_hieu',
        code: 'KNTT-T33-03',
        description: 'Kiểm tra nhanh điều kiện 3 đoạn thẳng có thể tạo thành một tam giác bằng cách so sánh cạnh dài nhất với tổng hai cạnh nhỏ hơn.',
        mastered: false
      },
      {
        id: 'lt-33-4',
        level: 'van_dung',
        code: 'KNTT-T33-04',
        description: 'Tìm khoảng giá trị khả dĩ của cạnh thứ ba khi biết độ dài hai cạnh của tam giác.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c33-1',
        title: 'Định lí Bất đẳng thức tam giác và Hệ quả',
        summary: 'Trong một tam giác $\\Delta ABC$ với ba cạnh $a, b, c$:\n1. Định lí: Tổng hai cạnh bất kì luôn lớn hơn cạnh còn lại:\n$a + b > c; \\quad b + c > a; \\quad c + a > b$.\n2. Hệ quả: Hiệu hai cạnh bất kì luôn nhỏ hơn cạnh còn lại:\n$|b - c| < a; \\quad |a - c| < b; \\quad |a - b| < c$.\n3. Công thức kẹp hoàn chỉnh: $|b - c| < a < b + c$.',
        latexFormula: '|b - c| < a < b + c',
        exampleSnippet: 'Một tam giác có hai cạnh là $4\\text{ cm}$ và $7\\text{ cm}$. Cạnh thứ ba $x$ phải thỏa mãn:\n$7 - 4 < x < 7 + 4 \\iff 3 < x < 11$.',
        pitfallWarning: 'Nếu tổng hai cạnh nhỏ hơn hoặc bằng cạnh lớn nhất ($a + b \\le c$) thì ba điểm đó sẽ thẳng hàng hoặc không thể khép góc tạo thành tam giác.',
        realLifeApplication: 'Đường đi nối 3 thành phố $A, B, C$: Đi thẳng từ $A$ đến $B$ luôn ngắn hơn việc đi vòng qua trạm trung chuyển $C$ ($AB < AC + CB$).'
      },
      {
        id: 'c33-2',
        title: 'Mẹo kiểm tra nhanh bộ ba độ dài tam giác',
        summary: 'Để kiểm tra ba độ dài $a \\le b \\le c$ có lập thành ba cạnh của tam giác hay không, ta KHÔNG CẦN kiểm tra cả ba bất đẳng thức, mà CHỈ CẦN so sánh:\nTổng của hai cạnh nhỏ hơn có LỚN HƠN cạnh lớn nhất hay không ($a + b > c$).',
        exampleSnippet: '- Bộ {2, 3, 6}: $2 + 3 = 5 < 6$ -> KHÔNG tạo thành tam giác.\n- Bộ {3, 4, 5}: $3 + 4 = 7 > 5$ -> Tạo thành tam giác vuông.',
        pitfallWarning: 'Đặc biệt cẩn thận trường hợp dấu bằng: Ví dụ bộ {3, 4, 7} có $3 + 4 = 7$, ba điểm sẽ nằm thẳng hàng trên một đoạn thẳng chứ KHÔNG tạo thành tam giác.',
        realLifeApplication: 'Kết cấu giàn không gian tam giác chịu lực của cần cẩu và cầu treo bắc qua sông.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q33-1',
        tier: 'nhan_biet',
        question: 'Bộ ba đoạn thẳng có độ dài nào sau đây CÓ THỂ tạo thành ba cạnh của một tam giác?',
        options: [
          { id: 'opt-33-1a', text: '3 cm, 4 cm, 6 cm', isCorrect: true },
          { id: 'opt-33-1b', text: '2 cm, 3 cm, 5 cm', isCorrect: false },
          { id: 'opt-33-1c', text: '1 cm, 2 cm, 4 cm', isCorrect: false },
          { id: 'opt-33-1d', text: '3 cm, 4 cm, 8 cm', isCorrect: false }
        ],
        correctAnswerId: 'opt-33-1a',
        progressiveHints: [
          'Kiểm tra: Tổng hai cạnh nhỏ hơn phải lớn hơn hẳn cạnh lớn nhất.',
          'Đáp án A: 3 + 4 = 7 > 6 (thỏa mãn).'
        ],
        explanation: 'Ta có $3 + 4 = 7 > 6$, thỏa mãn bất đẳng thức tam giác. Các bộ còn lại đều có tổng 2 cạnh nhỏ $\\le$ cạnh lớn ($2+3=5, 1+2<4, 3+4<8$).',
        competencyRef: 'KNTT-T33-03',
        points: 25
      },
      {
        id: 'q33-2',
        tier: 'nhan_biet',
        question: 'Bất đẳng thức nào sau đây ĐÚNG với ba cạnh a, b, c của một tam giác tùy ý?',
        options: [
          { id: 'opt-33-2a', text: '$|b - c| < a < b + c$', isCorrect: true },
          { id: 'opt-33-2b', text: '$a > b + c$', isCorrect: false },
          { id: 'opt-33-2c', text: '$a + b \\le c$', isCorrect: false },
          { id: 'opt-33-2d', text: '$a - b > c$', isCorrect: false }
        ],
        correctAnswerId: 'opt-33-2a',
        progressiveHints: [
          'Độ dài một cạnh luôn bị kẹp giữa hiệu và tổng của hai cạnh còn lại.',
          'Xem công thức chuẩn $|b - c| < a < b + c$.'
        ],
        explanation: 'Theo bất đẳng thức tam giác và hệ quả, độ dài một cạnh bất kì luôn lớn hơn hiệu và nhỏ hơn tổng hai cạnh còn lại.',
        competencyRef: 'KNTT-T33-02',
        points: 25
      },
      {
        id: 'q33-3',
        tier: 'thong_hieu',
        question: 'Một tam giác cân có độ dài hai cạnh là 2 cm và 5 cm. Độ dài cạnh thứ ba của tam giác đó là:',
        options: [
          { id: 'opt-33-3a', text: '5 cm', isCorrect: true },
          { id: 'opt-33-3b', text: '2 cm', isCorrect: false },
          { id: 'opt-33-3c', text: '7 cm', isCorrect: false },
          { id: 'opt-33-3d', text: '3 cm', isCorrect: false }
        ],
        correctAnswerId: 'opt-33-3a',
        progressiveHints: [
          'Tam giác cân nên cạnh thứ ba chỉ có thể bằng 2 cm hoặc bằng 5 cm.',
          'Nếu cạnh thứ ba là 2 cm: bộ {2, 2, 5} có 2 + 2 = 4 < 5 (loại).',
          'Nếu cạnh thứ ba là 5 cm: bộ {2, 5, 5} có 2 + 5 = 7 > 5 (thỏa mãn).'
        ],
        explanation: 'Nếu cạnh thứ ba bằng $2\\text{cm}$, ta có $2 + 2 = 4 < 5$ (vô lí). Vậy cạnh thứ ba bắt buộc phải bằng $5\\text{cm}$.',
        competencyRef: 'KNTT-T33-04',
        points: 25
      },
      {
        id: 'q33-4',
        tier: 'van_dung',
        question: 'Cho tam giác có hai cạnh là 3 cm và 8 cm. Biết cạnh thứ ba là một số nguyên (cm). Có bao nhiêu giá trị nguyên thỏa mãn cho cạnh thứ ba?',
        options: [
          { id: 'opt-33-4a', text: '5 giá trị: {6; 7; 8; 9; 10}', isCorrect: true },
          { id: 'opt-33-4b', text: '6 giá trị', isCorrect: false },
          { id: 'opt-33-4c', text: '4 giá trị', isCorrect: false },
          { id: 'opt-33-4d', text: '3 giá trị', isCorrect: false }
        ],
        correctAnswerId: 'opt-33-4a',
        progressiveHints: [
          'Áp dụng kẹp: 8 - 3 < x < 8 + 3 -> 5 < x < 11.',
          'Các số nguyên lớn hơn 5 và nhỏ hơn 11 là: 6, 7, 8, 9, 10.'
        ],
        explanation: 'Theo bất đẳng thức tam giác: $8 - 3 < x < 8 + 3 \\iff 5 < x < 11$. Các giá trị nguyên thỏa mãn là $x \\in \\{6; 7; 8; 9; 10\\}$ (tổng cộng 5 giá trị).',
        competencyRef: 'KNTT-T33-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-33-1',
        prompt: 'Bố hỏi con: Nếu bố bẻ một que tăm thành 3 mẩu có độ dài 1cm, 2cm và 4cm thì có xếp thành hình tam giác được không? Vì sao?',
        contextForParent: 'Thực nghiệm trực quan về điều kiện tồn tại tam giác.',
        suggestedAnswerTip: 'Không thể xếp được, vì $1 + 2 = 3 < 4$, hai que ngắn cộng lại vẫn không đủ với tới nhau để khép góc.',
        sampleChildResponse: 'Không thể bố ơi! Hai mẩu 1cm và 2cm cộng lại mới có 3cm, ngắn hơn mẩu 4cm nên gập lại nó vẫn không chạm đầu vào nhau được!'
      },
      {
        id: 'dp-33-2',
        prompt: 'Bố hỏi con: Tại sao người ta hay nói: "Đi đường thẳng từ A đến B bao giờ cũng gần hơn là ghé qua điểm C rồi mới đến B"?',
        contextForParent: 'Ý nghĩa đời sống của bất đẳng thức $AB < AC + CB$.',
        suggestedAnswerTip: 'Chính là bất đẳng thức tam giác: Cạnh $AB$ luôn nhỏ hơn tổng hai cạnh $AC + CB$.',
        sampleChildResponse: 'Đó chính là bất đẳng thức tam giác $AB < AC + CB$ bố ạ! Đi đường thẳng là cạnh tam giác, đi vòng là tổng hai cạnh nên xa hơn!'
      },
      {
        id: 'dp-33-3',
        prompt: 'Bố hỏi con: Nếu một tam giác cân có một cạnh 1m và một cạnh 3m thì cạnh đáy của nó dài bao nhiêu mét?',
        contextForParent: 'Tình huống bẫy tam giác cân kết hợp bất đẳng thức tam giác.',
        suggestedAnswerTip: 'Cạnh thứ ba bắt buộc là 3m (cạnh đáy 1m, hai cạnh bên 3m). Không thể có tam giác cân {1m, 1m, 3m} vì $1 + 1 = 2 < 3$.',
        sampleChildResponse: 'Bắt buộc cạnh kia phải là 3m bố ạ! Vì nếu là 1m thì $1 + 1 = 2 < 3$ không thể xếp thành tam giác được!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 34: SỰ ĐỒNG QUY CỦA BA ĐƯỜNG TRUNG TUYẾN, PHÂN GIÁC
  // ==========================================================================
  {
    id: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 37,
    chapterId: 'chuong_9_quan_he_cac_yeu_to_tam_giac',
    chapterTitle: 'Chương IX: Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác',
    unit: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác',
    term: 2,
    title: 'Bài 34: Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác',
    subtitle: 'Trọng tâm G với tỉ lệ vàng 2/3, Điểm I cách đều ba cạnh (Tâm đường tròn nội tiếp)',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-34-1',
        level: 'nhan_biet',
        code: 'KNTT-T34-01',
        description: 'Định nghĩa đường trung tuyến (nối đỉnh với trung điểm cạnh đối diện) và đường phân giác của tam giác.',
        mastered: true
      },
      {
        id: 'lt-34-2',
        level: 'nhan_biet',
        code: 'KNTT-T34-02',
        description: 'Nắm vững định lí: Ba đường trung tuyến cùng đi qua một điểm $G$ gọi là Trọng tâm của tam giác, với tỉ lệ $\\frac{GA}{AM} = \\frac{2}{3}$.',
        mastered: true
      },
      {
        id: 'lt-34-3',
        level: 'nhan_biet',
        code: 'KNTT-T34-03',
        description: 'Nắm vững định lí: Ba đường phân giác cùng đi qua một điểm $I$ gọi là Tâm đường tròn nội tiếp, điểm $I$ cách đều ba cạnh của tam giác.',
        mastered: true
      },
      {
        id: 'lt-34-4',
        level: 'van_dung',
        code: 'KNTT-T34-04',
        description: 'Vận dụng tỉ lệ trọng tâm để tính độ dài các đoạn trung tuyến và giải bài toán thăng bằng trọng lượng.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c34-1',
        title: 'Sự đồng quy của ba đường trung tuyến - Trọng tâm G',
        summary: 'Đoạn thẳng nối một đỉnh của tam giác với trung điểm cạnh đối diện gọi là đường trung tuyến của tam giác.\n- Định lí: Ba đường trung tuyến của một tam giác cùng đi qua một điểm. Điểm đó gọi là Trọng tâm của tam giác (kí hiệu $G$).\n- Tính chất khoảng cách: Trọng tâm $G$ cách mỗi đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó:\n$\\frac{GA}{AM} = \\frac{GB}{BN} = \\frac{GC}{CP} = \\frac{2}{3}$ và $\\frac{GM}{AM} = \\frac{1}{3}; \\ \\frac{GA}{GM} = 2$.',
        latexFormula: '\\frac{GA}{AM} = \\frac{2}{3}; \\quad \\frac{GM}{AM} = \\frac{1}{3}; \\quad GA = 2 \\cdot GM',
        exampleSnippet: 'Cho trung tuyến $AM = 9\\text{ cm}$. Trọng tâm $G$ chia $AM$ thành: $GA = \\frac{2}{3} \\cdot 9 = 6\\text{ cm}$ và $GM = 3\\text{ cm}$.',
        pitfallWarning: 'Học sinh rất hay nhầm tỉ lệ: $GA = \\frac{2}{3}AM$ (so với cả đoạn) nhưng $GA = 2GM$ (so với đoạn nhỏ phía dưới).',
        realLifeApplication: 'Điểm đặt ngón tay thăng bằng: Đặt một miếng bìa hình tam giác lên đầu ngón tay tại đúng trọng tâm $G$ thì miếng bìa sẽ thăng bằng không bị rơi.'
      },
      {
        id: 'c34-2',
        title: 'Sự đồng quy của ba đường phân giác - Điểm I cách đều ba cạnh',
        summary: 'Đoạn thẳng là tia phân giác của một góc trong tam giác nối từ đỉnh đến cạnh đối diện gọi là đường phân giác của tam giác.\n- Định lí: Ba đường phân giác của một tam giác cùng đi qua một điểm (kí hiệu $I$).\n- Tính chất đặc biệt: Điểm $I$ cách đều ba cạnh của tam giác (khoảng cách từ $I$ đến $AB, BC, CA$ bằng nhau). Điểm $I$ chính là tâm của đường tròn tiếp xúc trong với 3 cạnh (đường tròn nội tiếp).',
        latexFormula: 'd(I, AB) = d(I, BC) = d(I, CA) = r \\; (\\text{Bán kính đường tròn nội tiếp})',
        exampleSnippet: 'Trong tam giác cân tại $A$, đường phân giác của góc $A$ đồng thời là đường trung tuyến, đường cao và đường trung trực của cạnh đáy $BC$.',
        pitfallWarning: 'Phân biệt: Điểm $I$ (phân giác) cách đều BA CẠNH, còn điểm $O$ (trung trực) cách đều BA ĐỈNH.',
        realLifeApplication: 'Thiết kế vị trí đặt trạm cấp cứu hoặc loa phát thanh sao cho cách đều ba tuyến quốc lộ bao quanh khu vực.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q34-1',
        tier: 'nhan_biet',
        question: 'Giao điểm của ba đường trung tuyến trong một tam giác được gọi là gì?',
        options: [
          { id: 'opt-34-1a', text: 'Trọng tâm của tam giác', isCorrect: true },
          { id: 'opt-34-1b', text: 'Trực tâm của tam giác', isCorrect: false },
          { id: 'opt-34-1c', text: 'Tâm đường tròn ngoại tiếp', isCorrect: false },
          { id: 'opt-34-1d', text: 'Tâm đối xứng', isCorrect: false }
        ],
        correctAnswerId: 'opt-34-1a',
        progressiveHints: [
          'Đường trung tuyến nối đỉnh với trung điểm cạnh đối diện.',
          'Giao điểm của 3 đường trung tuyến gọi là trọng tâm G.'
        ],
        explanation: 'Ba đường trung tuyến của tam giác đồng quy tại một điểm gọi là Trọng tâm (kí hiệu G).',
        competencyRef: 'KNTT-T34-02',
        points: 25
      },
      {
        id: 'q34-2',
        tier: 'nhan_biet',
        question: 'Cho G là trọng tâm tam giác ABC, AM là đường trung tuyến. Tỉ số nào sau đây là ĐÚNG?',
        options: [
          { id: 'opt-34-2a', text: '$\\frac{AG}{AM} = \\frac{2}{3}$', isCorrect: true },
          { id: 'opt-34-2b', text: '$\\frac{AG}{AM} = \\frac{1}{2}$', isCorrect: false },
          { id: 'opt-34-2c', text: '$\\frac{AG}{GM} = \\frac{2}{3}$', isCorrect: false },
          { id: 'opt-34-2d', text: '$\\frac{GM}{AM} = \\frac{2}{3}$', isCorrect: false }
        ],
        correctAnswerId: 'opt-34-2a',
        progressiveHints: [
          'Trọng tâm cách đỉnh bằng 2/3 độ dài đường trung tuyến.',
          'AG / AM = 2/3.'
        ],
        explanation: 'Theo tính chất trọng tâm, khoảng cách từ đỉnh đến trọng tâm bằng $\\frac{2}{3}$ độ dài đường trung tuyến: $\\frac{AG}{AM} = \\frac{2}{3}$.',
        competencyRef: 'KNTT-T34-02',
        points: 25
      },
      {
        id: 'q34-3',
        tier: 'thong_hieu',
        question: 'Giao điểm của ba đường phân giác trong tam giác có tính chất đặc biệt nào sau đây?',
        options: [
          { id: 'opt-34-3a', text: 'Cách đều ba cạnh của tam giác', isCorrect: true },
          { id: 'opt-34-3b', text: 'Cách đều ba đỉnh của tam giác', isCorrect: false },
          { id: 'opt-34-3c', text: 'Chia mỗi đường phân giác thành 3 phần bằng nhau', isCorrect: false },
          { id: 'opt-34-3d', text: 'Luôn nằm bên ngoài tam giác', isCorrect: false }
        ],
        correctAnswerId: 'opt-34-3a',
        progressiveHints: [
          'Điểm nằm trên tia phân giác của một góc thì cách đều hai cạnh của góc đó.',
          'Giao điểm của 3 đường phân giác cách đều cả 3 cạnh tam giác.'
        ],
        explanation: 'Giao điểm ba đường phân giác (điểm I) cách đều ba cạnh của tam giác và là tâm đường tròn nội tiếp.',
        competencyRef: 'KNTT-T34-03',
        points: 25
      },
      {
        id: 'q34-4',
        tier: 'van_dung',
        question: 'Cho tam giác ABC có trung tuyến $AM = 12\\text{ cm}$. Gọi G là trọng tâm của tam giác. Độ dài đoạn thẳng GM bằng:',
        options: [
          { id: 'opt-34-4a', text: '4 cm', isCorrect: true },
          { id: 'opt-34-4b', text: '8 cm', isCorrect: false },
          { id: 'opt-34-4c', text: '6 cm', isCorrect: false },
          { id: 'opt-34-4d', text: '3 cm', isCorrect: false }
        ],
        correctAnswerId: 'opt-34-4a',
        progressiveHints: [
          'Đoạn GM bằng 1/3 độ dài trung tuyến AM.',
          'Tính: GM = (1/3) * 12 cm.'
        ],
        explanation: 'Ta có $GM = \\frac{1}{3}AM = \\frac{1}{3} \\cdot 12 = 4\\text{ cm}$ (đoạn $AG = 8\\text{ cm}$).',
        competencyRef: 'KNTT-T34-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-34-1',
        prompt: 'Bố hỏi con: Nếu bố cắt một miếng bìa carton hình tam giác và muốn đặt nó thăng bằng trên đầu ngón tay trỏ thì bố phải đặt ngón tay vào điểm nào?',
        contextForParent: 'Kiểm nghiệm ý nghĩa vật lí trực quan của trọng tâm tam giác.',
        suggestedAnswerTip: 'Đặt vào đúng Trọng tâm $G$ (giao điểm của 3 đường trung tuyến).',
        sampleChildResponse: 'Đặt vào đúng điểm Trọng tâm $G$ của tam giác bố ạ! Vì đó là tâm trọng lực phân bổ đều khối lượng của miếng bìa!'
      },
      {
        id: 'dp-34-2',
        prompt: 'Bố hỏi con: Trọng tâm $G$ chia đường trung tuyến theo tỉ lệ vàng nào mà các bạn luôn phải học thuộc lòng?',
        contextForParent: 'Khắc sâu tỉ lệ kinh điển $2/3$ và $1/3$.',
        suggestedAnswerTip: 'Cách đỉnh bằng $2/3$ chiều dài trung tuyến, cách đáy bằng $1/3$ trung tuyến.',
        sampleChildResponse: 'Đoạn từ đỉnh đến $G$ chiếm $2/3$, còn đoạn từ $G$ xuống đáy chiếm $1/3$ chiều dài trung tuyến bố ạ!'
      },
      {
        id: 'dp-34-3',
        prompt: 'Bố hỏi con: Điểm giao nhau của 3 đường phân giác có siêu năng lực gì đặc biệt?',
        contextForParent: 'Phân biệt điểm cách đều 3 cạnh (phân giác) và cách đều 3 đỉnh (trung trực).',
        suggestedAnswerTip: 'Nó cách đều cả ba cạnh của tam giác, là tâm để vẽ đường tròn nằm khít bên trong tam giác.',
        sampleChildResponse: 'Nó cách đều cả 3 cạnh của tam giác bố ơi, vẽ một hình tròn từ tâm đó sẽ chạm khít vào 3 cạnh luôn!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 35: SỰ ĐỒNG QUY CỦA BA ĐƯỜNG TRUNG TRỰC, BA ĐƯỜNG CAO
  // ==========================================================================
  {
    id: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 38,
    chapterId: 'chuong_9_quan_he_cac_yeu_to_tam_giac',
    chapterTitle: 'Chương IX: Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác',
    unit: 'Chương IX: Quan hệ giữa các yếu tố trong một tam giác',
    term: 2,
    title: 'Bài 35: Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác',
    subtitle: 'Tâm đường tròn ngoại tiếp O cách đều ba đỉnh, Trực tâm H và bảng tổng kết 4 điểm đặc biệt',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-35-1',
        level: 'nhan_biet',
        code: 'KNTT-T35-01',
        description: 'Định nghĩa đường trung trực của tam giác (đường trung trực của mỗi cạnh) và đường cao (đoạn vuông góc kẻ từ đỉnh đến cạnh đối diện).',
        mastered: true
      },
      {
        id: 'lt-35-2',
        level: 'nhan_biet',
        code: 'KNTT-T35-02',
        description: 'Nắm vững định lí: Ba đường trung trực cùng đi qua điểm $O$ cách đều ba đỉnh của tam giác (Tâm đường tròn ngoại tiếp: $OA = OB = OC$).',
        mastered: true
      },
      {
        id: 'lt-35-3',
        level: 'nhan_biet',
        code: 'KNTT-T35-03',
        description: 'Nắm vững định lí: Ba đường cao của tam giác cùng đi qua một điểm $H$ gọi là Trực tâm của tam giác.',
        mastered: true
      },
      {
        id: 'lt-35-4',
        level: 'thong_hieu',
        code: 'KNTT-T35-04',
        description: 'Tổng kết và phân biệt 4 điểm kì diệu trong tam giác: Trọng tâm G, Điểm I cách đều cạnh, Điểm O cách đều đỉnh, Trực tâm H.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c35-1',
        title: 'Ba đường trung trực và Tâm ngoại tiếp O',
        summary: 'Đường thẳng vuông góc với một cạnh của tam giác tại trung điểm của cạnh đó gọi là đường trung trực của tam giác.\n- Định lí: Ba đường trung trực của một tam giác cùng đi qua một điểm (kí hiệu $O$).\n- Tính chất khoảng cách: Điểm $O$ cách đều ba đỉnh của tam giác: $OA = OB = OC = R$.\n- Điểm $O$ chính là tâm của đường tròn đi qua cả ba đỉnh của tam giác (gọi là đường tròn ngoại tiếp tam giác).',
        latexFormula: 'OA = OB = OC = R \\; (\\text{Bán kính đường tròn ngoại tiếp})',
        exampleSnippet: 'Trong tam giác vuông, tâm đường tròn ngoại tiếp $O$ chính là trung điểm của cạnh huyền. Khi đó bán kính $R = \\frac{\\text{cạnh huyền}}{2}$.',
        pitfallWarning: 'Trong tam giác tù, điểm $O$ nằm BÊN NGOÀI tam giác; trong tam giác nhọn, điểm $O$ nằm BÊN TRONG tam giác.',
        realLifeApplication: 'Xây dựng vị trí đặt trạm biến áp trung tâm sao cho khoảng cách dây điện kéo đến ba khu dân cư $A, B, C$ là bằng nhau.'
      },
      {
        id: 'c35-2',
        title: 'Ba đường cao và Trực tâm H - Bảng tổng kết 4 điểm đặc biệt',
        summary: 'Đoạn vuông góc kẻ từ một đỉnh đến đường thẳng chứa cạnh đối diện gọi là đường cao của tam giác.\n- Định lí: Ba đường cao cùng đi qua một điểm gọi là Trực tâm (kí hiệu $H$).\n- Vị trí trực tâm $H$:\n  + Tam giác nhọn: $H$ nằm trong tam giác.\n  + Tam giác vuông tại $A$: $H$ trùng đúng với đỉnh góc vuông $A$.\n  + Tam giác tù: $H$ nằm ngoài tam giác.\n- Bảng 4 điểm đặc biệt:\n  * 3 Trung tuyến $\\rightarrow$ Trọng tâm $G$ (tỉ lệ $2/3$).\n  * 3 Phân giác $\\rightarrow$ Tâm nội tiếp $I$ (cách đều 3 cạnh).\n  * 3 Trung trực $\\rightarrow$ Tâm ngoại tiếp $O$ (cách đều 3 đỉnh).\n  * 3 Đường cao $\\rightarrow$ Trực tâm $H$.',
        exampleSnippet: 'Trong tam giác đều, cả 4 điểm $G, I, O, H$ TRÙNG NHAU tại một điểm duy nhất.',
        pitfallWarning: 'Đường cao của tam giác tù có chân đường vuông góc nằm trên phần kéo dài của cạnh đối diện.',
        realLifeApplication: 'Các giàn chịu lực hình tam giác trong kiến trúc kim tự tháp kính bảo tàng Louvre.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q35-1',
        tier: 'nhan_biet',
        question: 'Giao điểm của ba đường trung trực trong tam giác có tính chất gì?',
        options: [
          { id: 'opt-35-1a', text: 'Cách đều ba đỉnh của tam giác', isCorrect: true },
          { id: 'opt-35-1b', text: 'Cách đều ba cạnh của tam giác', isCorrect: false },
          { id: 'opt-35-1c', text: 'Cách mỗi đỉnh một khoảng bằng 2/3 đường thẳng', isCorrect: false },
          { id: 'opt-35-1d', text: 'Luôn trùng với đỉnh góc vuông', isCorrect: false }
        ],
        correctAnswerId: 'opt-35-1a',
        progressiveHints: [
          'Điểm nằm trên đường trung trực của đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.',
          'Giao điểm của 3 đường trung trực cách đều cả 3 đỉnh A, B, C.'
        ],
        explanation: 'Ba đường trung trực đồng quy tại điểm $O$ cách đều ba đỉnh của tam giác ($OA = OB = OC$) và là tâm đường tròn ngoại tiếp.',
        competencyRef: 'KNTT-T35-02',
        points: 25
      },
      {
        id: 'q35-2',
        tier: 'nhan_biet',
        question: 'Giao điểm của ba đường cao trong tam giác được gọi là gì?',
        options: [
          { id: 'opt-35-2a', text: 'Trực tâm của tam giác', isCorrect: true },
          { id: 'opt-35-2b', text: 'Trọng tâm của tam giác', isCorrect: false },
          { id: 'opt-35-2c', text: 'Tâm nội tiếp của tam giác', isCorrect: false },
          { id: 'opt-35-2d', text: 'Tâm ngoại tiếp của tam giác', isCorrect: false }
        ],
        correctAnswerId: 'opt-35-2a',
        progressiveHints: [
          'Đường cao là đường vuông góc kẻ từ đỉnh đến cạnh đối diện.',
          'Giao điểm của 3 đường cao gọi là trực tâm H.'
        ],
        explanation: 'Ba đường cao của tam giác cùng đi qua một điểm gọi là Trực tâm của tam giác (kí hiệu H).',
        competencyRef: 'KNTT-T35-03',
        points: 25
      },
      {
        id: 'q35-3',
        tier: 'thong_hieu',
        question: 'Trong một tam giác vuông tại đỉnh A, trực tâm H của tam giác nằm ở vị trí nào?',
        options: [
          { id: 'opt-35-3a', text: 'Trùng đúng với đỉnh A', isCorrect: true },
          { id: 'opt-35-3b', text: 'Nằm tại trung điểm của cạnh huyền BC', isCorrect: false },
          { id: 'opt-35-3c', text: 'Nằm bên ngoài tam giác', isCorrect: false },
          { id: 'opt-35-3d', text: 'Nằm chính giữa tam giác', isCorrect: false }
        ],
        correctAnswerId: 'opt-35-3a',
        progressiveHints: [
          'Hai cạnh góc vuông AB và AC chính là hai đường cao xuất phát từ B và C.',
          'Hai đường cao này cắt nhau ngay tại đỉnh góc vuông A.'
        ],
        explanation: 'Trong tam giác vuông, hai cạnh góc vuông chính là hai đường cao. Do đó giao điểm của các đường cao (trực tâm H) trùng ngay với đỉnh góc vuông $A$.',
        competencyRef: 'KNTT-T35-03',
        points: 25
      },
      {
        id: 'q35-4',
        tier: 'van_dung',
        question: 'Tam giác nào sau đây có cả 4 điểm: Trọng tâm G, Tâm nội tiếp I, Tâm ngoại tiếp O và Trực tâm H TRÙNG NHAU tại một điểm?',
        options: [
          { id: 'opt-35-4a', text: 'Tam giác đều', isCorrect: true },
          { id: 'opt-35-4b', text: 'Tam giác cân nhưng không đều', isCorrect: false },
          { id: 'opt-35-4c', text: 'Tam giác vuông cân', isCorrect: false },
          { id: 'opt-35-4d', text: 'Tam giác vuông thường', isCorrect: false }
        ],
        correctAnswerId: 'opt-35-4a',
        progressiveHints: [
          'Tam giác có tính đối xứng cao nhất cả về cạnh và góc.',
          'Trong tam giác đều, ba đường trung tuyến, phân giác, trung trực và đường cao trùng nhau từng đôi một.'
        ],
        explanation: 'Trong tam giác đều, mọi đường trung tuyến đồng thời là đường phân giác, trung trực và đường cao. Do đó 4 điểm G, I, O, H trùng nhau.',
        competencyRef: 'KNTT-T35-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-35-1',
        prompt: 'Bố hỏi con: Có 3 ngôi làng A, B, C tạo thành một hình tam giác. Người ta muốn đào một cái giếng chung sao cho khoảng cách từ giếng đến cả 3 ngôi làng bằng nhau. Con sẽ dùng điểm toán học nào để xác định vị trí giếng?',
        contextForParent: 'Ứng dụng thực tế của tâm đường tròn ngoại tiếp (cách đều 3 đỉnh).',
        suggestedAnswerTip: 'Dùng Tâm đường tròn ngoại tiếp $O$ (giao điểm của ba đường trung trực), vì $OA = OB = OC$.',
        sampleChildResponse: 'Tìm giao điểm của ba đường trung trực bố ạ! Điểm $O$ đó sẽ cách đều cả ba đỉnh làng $OA = OB = OC$ luôn!'
      },
      {
        id: 'dp-35-2',
        prompt: 'Bố hỏi con: Đố con phân biệt được: Điểm cách đều 3 CẠNH và điểm cách đều 3 ĐỈNH là giao của những đường nào?',
        contextForParent: 'Kiểm tra độ vững kiến thức phân biệt phân giác vs trung trực.',
        suggestedAnswerTip: 'Cách đều 3 cạnh là giao của 3 đường Phân giác. Cách đều 3 đỉnh là giao của 3 đường Trung trực.',
        sampleChildResponse: 'Cách đều 3 cạnh là 3 đường Phân giác (tâm nội tiếp), còn cách đều 3 đỉnh là 3 đường Trung trực (tâm ngoại tiếp) bố nhé!'
      },
      {
        id: 'dp-35-3',
        prompt: 'Bố hỏi con: Trong tam giác vuông, trực tâm $H$ và tâm ngoại tiếp $O$ nằm ở những vị trí kì diệu nào?',
        contextForParent: 'Khắc sâu vị trí đặc biệt của tam giác vuông.',
        suggestedAnswerTip: 'Trực tâm $H$ trùng luôn với đỉnh góc vuông. Tâm ngoại tiếp $O$ nằm ngay tại trung điểm của cạnh huyền.',
        sampleChildResponse: 'Trực tâm $H$ nằm ngay ở đỉnh góc vuông, còn tâm $O$ thì nằm chính giữa cạnh huyền bố ạ!'
      }
    ]
  }
];
