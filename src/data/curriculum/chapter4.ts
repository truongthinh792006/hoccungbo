import { Math7Lesson } from '../../types/curriculum';

export const chapter4Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 12: TỔNG CÁC GÓC TRONG MỘT TAM GIÁC
  // ==========================================================================
  {
    id: 'bai_12_tong_cac_goc_trong_mot_tam_giac',
    order: 15,
    chapterId: 'chuong_4_tam_giac_bang_nhau',
    chapterTitle: 'Chương IV: Tam Giác Bằng Nhau',
    unit: 'Chương IV: Tam giác bằng nhau',
    title: 'Bài 12: Tổng các góc trong một tam giác',
    subtitle: 'Định lí kinh điển 180 độ, tính chất hai góc nhọn trong tam giác vuông và góc ngoài',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c4-12-1',
        level: 'nhan_biet',
        code: 'KNTT-T12-01',
        description: 'Biết và phát biểu đúng định lí: Tổng ba góc trong một tam giác luôn bằng $180^\\circ$.',
        mastered: false
      },
      {
        id: 'lt-c4-12-2',
        level: 'thong_hieu',
        code: 'KNTT-T12-02',
        description: 'Hiểu tính chất tam giác vuông: Trong một tam giác vuông, hai góc nhọn phụ nhau (tổng bằng $90^\\circ$).',
        mastered: false
      },
      {
        id: 'lt-c4-12-3',
        level: 'van_dung',
        code: 'KNTT-T12-03',
        description: 'Vận dụng định lí góc ngoài bằng tổng hai góc trong không kề với nó và tính số đo góc chưa biết trong tam giác.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c4-12-1',
        title: 'Định lí tổng ba góc trong một tam giác',
        summary: 'Trong bất kì tam giác nào (tam giác nhọn, vuông hay tù), tổng số đo ba góc trong luôn luôn bằng đúng 180 độ.',
        latexFormula: '\\text{Trong } \\Delta ABC: \\; \\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ',
        exampleSnippet: 'Cho tam giác ABC có góc A = 60 độ, góc B = 70 độ. Khi đó góc C = 180 - (60 + 70) = 50 độ.',
        pitfallWarning: 'Một tam giác chỉ có thể có TỐI ĐA một góc vuông hoặc một góc tù, không bao giờ có hai góc vuông hoặc hai góc tù!',
        realLifeApplication: 'Khung giàn không gian cầu thép, mái nhà hình tam giác chịu lực vững chãi nhất trong kiến trúc.'
      },
      {
        id: 'c4-12-2',
        title: 'Hai góc nhọn trong tam giác vuông & Định lí góc ngoài',
        summary: '1) Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng 90 độ). 2) Góc ngoài của một tam giác là góc kề bù với một góc của tam giác đó; số đo góc ngoài bằng TỔNG hai góc trong không kề với nó.',
        latexFormula: '\\text{Nếu } \\widehat{A} = 90^\\circ \\implies \\widehat{B} + \\widehat{C} = 90^\\circ; \\qquad \\widehat{ACx} = \\widehat{A} + \\widehat{B} > \\widehat{A}, \\; \\widehat{ACx} > \\widehat{B}',
        exampleSnippet: 'Tam giác ABC vuông tại A có góc B = 35 độ thì góc C = 90 - 35 = 55 độ. Góc ngoài tại đỉnh C là 90 + 35 = 125 độ.',
        pitfallWarning: 'Đừng nhầm góc ngoài bằng tổng tất cả 3 góc. Nó chỉ bằng tổng HAI góc trong KHÔNG KỀ với nó.',
        realLifeApplication: 'Thiết kế góc dốc cầu trượt, đường dốc xe lăn cho người khuyết tật với tiêu chuẩn độ nghiêng an toàn.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c4-12-1',
        tier: 'nhan_biet',
        question: 'Tổng số đo ba góc trong một tam giác bất kì luôn bằng bao nhiêu độ?',
        formula: '\\widehat{A} + \\widehat{B} + \\widehat{C} = ?',
        options: [
          { id: 'opt-c4-12-1a', text: '180^\\circ', isCorrect: true },
          { id: 'opt-c4-12-1b', text: '90^\\circ', isCorrect: false },
          { id: 'opt-c4-12-1c', text: '360^\\circ', isCorrect: false },
          { id: 'opt-c4-12-1d', text: '100^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-12-1a',
        progressiveHints: [
          'Định lí cơ bản mở đầu Chương IV.',
          'Tổng ba góc trong tam giác luôn bằng 180 độ.'
        ],
        explanation: 'Định lí: Tổng ba góc trong một tam giác luôn bằng 180°.',
        competencyRef: 'lt-c4-12-1',
        points: 10
      },
      {
        id: 'q-c4-12-2',
        tier: 'nhan_biet',
        question: 'Trong tam giác vuông, hai góc nhọn có mối quan hệ gì với nhau?',
        formula: '\\widehat{A} = 90^\\circ \\implies \\widehat{B} + \\widehat{C} = ?',
        options: [
          { id: 'opt-c4-12-2a', text: 'Phụ nhau (tổng bằng 90 độ)', isCorrect: true },
          { id: 'opt-c4-12-2b', text: 'Bù nhau (tổng bằng 180 độ)', isCorrect: false },
          { id: 'opt-c4-12-2c', text: 'Bằng nhau', isCorrect: false },
          { id: 'opt-c4-12-2d', text: 'Đối đỉnh nhau', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-12-2a',
        progressiveHints: [
          'Vì góc vuông đã chiếm 90 độ trong tổng 180 độ.',
          'Hai góc nhọn còn lại cộng lại bằng 180 - 90 = 90 độ (hai góc phụ nhau).'
        ],
        explanation: 'Trong tam giác vuông, tổng hai góc nhọn bằng 90° nên chúng phụ nhau.',
        competencyRef: 'lt-c4-12-2',
        points: 10
      },
      {
        id: 'q-c4-12-3',
        tier: 'thong_hieu',
        question: 'Cho tam giác MNP có góc M = 50 độ, góc N = 70 độ. Số đo góc P là bao nhiêu?',
        formula: '\\widehat{P} = 180^\\circ - (\\widehat{M} + \\widehat{N})',
        options: [
          { id: 'opt-c4-12-3a', text: '60^\\circ', isCorrect: true },
          { id: 'opt-c4-12-3b', text: '50^\\circ', isCorrect: false },
          { id: 'opt-c4-12-3c', text: '70^\\circ', isCorrect: false },
          { id: 'opt-c4-12-3d', text: '120^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-12-3a',
        progressiveHints: [
          'Tổng ba góc = 180 độ.',
          'Góc P = 180 - (50 + 70) = 180 - 120.'
        ],
        explanation: 'Góc P = 180° - (50° + 70°) = 180° - 120° = 60°.',
        competencyRef: 'lt-c4-12-1',
        points: 10
      },
      {
        id: 'q-c4-12-4',
        tier: 'van_dung',
        question: 'Cho tam giác ABC có góc A = 80 độ, góc B = 40 độ. Tia Ax là tia đối của tia AB. Số đo góc ngoài CAx bằng bao nhiêu?',
        formula: '\\widehat{CAx} = \\widehat{B} + \\widehat{C} \\text{ hoặc } 180^\\circ - \\widehat{A}',
        options: [
          { id: 'opt-c4-12-4a', text: '100^\\circ', isCorrect: true },
          { id: 'opt-c4-12-4b', text: '120^\\circ', isCorrect: false },
          { id: 'opt-c4-12-4c', text: '80^\\circ', isCorrect: false },
          { id: 'opt-c4-12-4d', text: '60^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-12-4a',
        progressiveHints: [
          'Cách 1: Góc ngoài CAx kề bù với góc trong A, vậy CAx = 180° - 80°.',
          'Cách 2: Tính góc C = 180 - (80 + 40) = 60°. Góc ngoài CAx = B + C = 40 + 60.'
        ],
        explanation: 'Góc ngoài CAx kề bù với góc trong A nên CAx = 180° - 80° = 100° (hoặc bằng góc B + góc C = 40° + 60° = 100°).',
        competencyRef: 'lt-c4-12-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c4-12-1',
        prompt: 'Bố hỏi con: "Dù tam giác to khổng lồ hay bé xíu như hạt gạo thì tổng 3 góc có khác nhau không con?"',
        contextForParent: 'Hằng số 180 độ bất biến trong hình học phẳng.',
        suggestedAnswerTip: 'Không bao giờ khác nhau! Mọi tam giác trong mặt phẳng đều có tổng 3 góc đúng bằng 180 độ.',
        sampleChildResponse: 'Không bao giờ khác bố ạ! Bất kì tam giác nào to hay nhỏ thì tổng 3 góc cộng lại luôn luôn bằng đúng 180 độ!'
      },
      {
        id: 'dp-c4-12-2',
        prompt: 'Mẹ hỏi con: "Một tam giác có thể có 2 góc vuông hoặc 2 góc tù cùng lúc được không, vì sao?"',
        contextForParent: 'Hệ quả trực tiếp của tổng 180 độ.',
        suggestedAnswerTip: 'Không thể! Nếu có 2 góc vuông thì tổng đã bằng 180 độ, góc thứ ba bằng 0 thì không còn là tam giác nữa.',
        sampleChildResponse: 'Không thể nào mẹ ơi! Nếu có 2 góc vuông thì 90 + 90 đã là 180 độ rồi, góc thứ 3 không thể tồn tại được ạ!'
      },
      {
        id: 'dp-c4-12-3',
        prompt: 'Bố hỏi con: "Trong tam giác vuông, nếu biết một góc nhọn là 30 độ thì góc nhọn kia bằng bao nhiêu?"',
        contextForParent: 'Tính nhẩm nhanh hai góc phụ nhau.',
        suggestedAnswerTip: 'Bằng 60 độ, vì hai góc nhọn trong tam giác vuông cộng lại luôn bằng 90 độ.',
        sampleChildResponse: 'Dạ bằng 60 độ bố ạ! Vì hai góc nhọn trong tam giác vuông cộng lại bằng 90 độ, lấy 90 trừ 30 là ra 60 độ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 13: HAI TAM GIÁC BẰNG NHAU. TRƯỜNG HỢP THỨ NHẤT (C.C.C)
  // ==========================================================================
  {
    id: 'bai_13_hai_tam_giac_bang_nhau_truong_hop_ccc',
    order: 16,
    chapterId: 'chuong_4_tam_giac_bang_nhau',
    chapterTitle: 'Chương IV: Tam Giác Bằng Nhau',
    unit: 'Chương IV: Tam giác bằng nhau',
    title: 'Bài 13: Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất (c.c.c)',
    subtitle: 'Nguyên tắc tương ứng đỉnh và trường hợp ba cạnh bằng nhau (Cạnh - Cạnh - Cạnh)',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c4-13-1',
        level: 'nhan_biet',
        code: 'KNTT-T13-01',
        description: 'Biết định nghĩa hai tam giác bằng nhau và cách viết kí hiệu theo đúng thứ tự các đỉnh tương ứng.',
        mastered: false
      },
      {
        id: 'lt-c4-13-2',
        level: 'thong_hieu',
        code: 'KNTT-T13-02',
        description: 'Hiểu trường hợp bằng nhau thứ nhất (c.c.c): Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.',
        mastered: false
      },
      {
        id: 'lt-c4-13-3',
        level: 'van_dung',
        code: 'KNTT-T13-03',
        description: 'Chứng minh hai tam giác bằng nhau theo trường hợp c.c.c để suy ra các góc hoặc các đoạn thẳng tương ứng bằng nhau.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c4-13-1',
        title: 'Định nghĩa & Kí hiệu hai tam giác bằng nhau',
        summary: 'Hai tam giác bằng nhau là hai tam giác có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau. Khi viết kí hiệu bằng nhau, các đỉnh tương ứng phải được viết theo cùng một thứ tự.',
        latexFormula: '\\Delta ABC = \\Delta A\'B\'C\' \\iff \\begin{cases} AB = A\'B\', \\; BC = B\'C\', \\; CA = C\'A\' \\\\ \\widehat{A} = \\widehat{A\'}, \\; \\widehat{B} = \\widehat{B\'}, \\; \\widehat{C} = \\widehat{C\'} \\end{cases}',
        exampleSnippet: 'Nếu $\\Delta ABC = \\Delta MNP$ thì đỉnh A tương ứng M, B tương ứng N, C tương ứng P. Khi đó $AB = MN$, góc $C = $ góc $P$.',
        pitfallWarning: 'Bẫy trừ điểm phổ biến: Viết sai thứ tự đỉnh! Viết $\\Delta ABC = \\Delta PNM$ khi các đỉnh không tương ứng sẽ bị gạch bài ngay lập tức.',
        realLifeApplication: 'Sản xuất công nghiệp hàng loạt: cắt các mảnh kính cường lực hoặc gạch lát nền trùng khít 100% lên nhau.'
      },
      {
        id: 'c4-13-2',
        title: 'Trường hợp bằng nhau thứ nhất: Cạnh - Cạnh - Cạnh (c.c.c)',
        summary: 'Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.',
        latexFormula: '\\begin{cases} AB = A\'B\' \\\\ BC = B\'C\' \\\\ AC = A\'C\' \\end{cases} \\implies \\Delta ABC = \\Delta A\'B\'C\' \\; (c.c.c)',
        exampleSnippet: 'Xét $\\Delta ABD$ và $\\Delta CBD$ có: $AB = CB$ (gt), $AD = CD$ (gt), và $BD$ là cạnh chung. Suy ra $\\Delta ABD = \\Delta CBD$ (c.c.c).',
        pitfallWarning: 'Cạnh chung cũng là một yếu tố cạnh bằng nhau rất thường gặp trong các bài toán chứng minh.',
        realLifeApplication: 'Độ vững chãi của tam giác: Ba thanh gỗ ghép thành tam giác sẽ cố định hình dạng không thể bị xô lệch (khác với tứ giác).'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c4-13-1',
        tier: 'nhan_biet',
        question: 'Cho tam giác ABC = tam giác DFE. Cạnh tương ứng với cạnh BC là cạnh nào?',
        formula: '\\Delta ABC = \\Delta DFE',
        options: [
          { id: 'opt-c4-13-1a', text: 'FE', isCorrect: true },
          { id: 'opt-c4-13-1b', text: 'DF', isCorrect: false },
          { id: 'opt-c4-13-1c', text: 'DE', isCorrect: false },
          { id: 'opt-c4-13-1d', text: 'EF', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-13-1a',
        progressiveHints: [
          'Nhìn vào vị trí các chữ cái trong tên tam giác: A(1) B(2) C(3) = D(1) F(2) E(3).',
          'BC gồm chữ cái thứ 2 và 3, nên tương ứng với FE (vị trí 2 và 3).'
        ],
        explanation: 'Trong kí hiệu tam giác ABC = tam giác DFE, vị trí thứ hai và thứ ba là BC tương ứng với FE.',
        competencyRef: 'lt-c4-13-1',
        points: 10
      },
      {
        id: 'q-c4-13-2',
        tier: 'nhan_biet',
        question: 'Trường hợp bằng nhau Cạnh - Cạnh - Cạnh (c.c.c) yêu cầu điều kiện gì?',
        formula: '\\text{Trường hợp } c.c.c',
        options: [
          { id: 'opt-c4-13-2a', text: 'Ba cạnh của tam giác này bằng ba cạnh của tam giác kia', isCorrect: true },
          { id: 'opt-c4-13-2b', text: 'Ba góc của tam giác này bằng ba góc của tam giác kia', isCorrect: false },
          { id: 'opt-c4-13-2c', text: 'Hai cạnh và một góc bằng nhau', isCorrect: false },
          { id: 'opt-c4-13-2d', text: 'Chu vi hai tam giác bằng nhau', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-13-2a',
        progressiveHints: [
          'Tên gọi c.c.c là viết tắt của: Cạnh - Cạnh - Cạnh.',
          'Nghĩa là cả ba cạnh của tam giác này bằng ba cạnh của tam giác kia.'
        ],
        explanation: 'Trường hợp c.c.c: Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.',
        competencyRef: 'lt-c4-13-2',
        points: 10
      },
      {
        id: 'q-c4-13-3',
        tier: 'thong_hieu',
        question: 'Cho tam giác ABC = tam giác MNP. Biết góc A = 45 độ, góc B = 75 độ. Hỏi góc P bằng bao nhiêu độ?',
        formula: '\\Delta ABC = \\Delta MNP',
        options: [
          { id: 'opt-c4-13-3a', text: '60^\\circ', isCorrect: true },
          { id: 'opt-c4-13-3b', text: '45^\\circ', isCorrect: false },
          { id: 'opt-c4-13-3c', text: '75^\\circ', isCorrect: false },
          { id: 'opt-c4-13-3d', text: '120^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-13-3a',
        progressiveHints: [
          'Bước 1: Tính góc C của tam giác ABC = 180° - (45° + 75°).',
          'Bước 2: Vì hai tam giác bằng nhau nên góc P tương ứng bằng góc C.'
        ],
        explanation: 'Góc C = 180° - (45° + 75°) = 60°. Vì tam giác ABC = tam giác MNP nên góc P = góc C = 60°.',
        competencyRef: 'lt-c4-13-1',
        points: 10
      },
      {
        id: 'q-c4-13-4',
        tier: 'van_dung',
        question: 'Cho đoạn thẳng AB. Vẽ đường tròn tâm A bán kính R và đường tròn tâm B bán kính R (R > AB/2) cắt nhau tại C và D. Tam giác ACD và tam giác BCD bằng nhau theo trường hợp nào?',
        formula: 'AC = BC = R; \\; AD = BD = R',
        options: [
          { id: 'opt-c4-13-4a', text: 'c.c.c (vì AC = BC = R, AD = BD = R, CD chung)', isCorrect: true },
          { id: 'opt-c4-13-4b', text: 'c.g.c', isCorrect: false },
          { id: 'opt-c4-13-4c', text: 'g.c.g', isCorrect: false },
          { id: 'opt-c4-13-4d', text: 'Không bằng nhau', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-13-4a',
        progressiveHints: [
          'Liệt kê 3 cặp cạnh của tam giác ACD và BCD.',
          'AC = BC = R; AD = BD = R; và CD là cạnh chung.'
        ],
        explanation: 'Ta có AC = BC = R, AD = BD = R, và cạnh CD chung. Do đó tam giác ACD = tam giác BCD (c.c.c).',
        competencyRef: 'lt-c4-13-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c4-13-1',
        prompt: 'Bố hỏi con: "Khi viết hai tam giác bằng nhau trong vở, điều tối kỵ nhất để không bị trừ điểm là gì?"',
        contextForParent: 'Quy tắc tương ứng thứ tự đỉnh trong hình học 7.',
        suggestedAnswerTip: 'Viết đúng thứ tự các đỉnh tương ứng (đỉnh A tương ứng đỉnh nào thì phải xếp ở vị trí giống nhau).',
        sampleChildResponse: 'Tối kỵ nhất là viết sai thứ tự đỉnh tương ứng bố ạ! Viết sai vị trí một chữ cái là bài thi bị trừ hết điểm luôn!'
      },
      {
        id: 'dp-c4-13-2',
        prompt: 'Mẹ hỏi con: "Tại sao đóng 4 thanh gỗ thành hình chữ nhật thì dễ bị xiêu vẹo, còn đóng 3 thanh thành tam giác lại cứng ngắc?"',
        contextForParent: 'Tính chất bất biến cạnh - cạnh - cạnh của tam giác trong đời sống.',
        suggestedAnswerTip: 'Vì tam giác khi biết 3 cạnh thì hình dạng bị khóa cứng cố định (trường hợp c.c.c), còn hình chữ nhật các góc vẫn lắc lư được.',
        sampleChildResponse: 'Bởi vì tam giác có 3 cạnh cố định thì không bao giờ thay đổi hình dạng được mẹ ạ, trong xây dựng người ta hay làm giàn tam giác vì thế!'
      },
      {
        id: 'dp-c4-13-3',
        prompt: 'Bố hỏi con: "Nếu hai tam giác có 3 góc bằng nhau thì chúng có chắc chắn bằng nhau không con?"',
        contextForParent: 'Bẫy hình học: góc - góc - góc chỉ là đồng dạng, không bằng nhau.',
        suggestedAnswerTip: 'Không bằng nhau! Có thể một tam giác nhỏ xíu và một tam giác to đùng (giống như phóng to hình trên màn hình).',
        sampleChildResponse: 'Không bằng nhau được bố ơi! Ba góc bằng nhau thì một hình nhỏ một hình to phóng đại vẫn có các góc giống nhau ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 14: TRƯỜNG HỢP BẰNG NHAU THỨ HAI VÀ THỨ BA (C.G.C VÀ G.C.G)
  // ==========================================================================
  {
    id: 'bai_14_truong_hop_bang_nhau_cgc_gcg',
    order: 17,
    chapterId: 'chuong_4_tam_giac_bang_nhau',
    chapterTitle: 'Chương IV: Tam Giác Bằng Nhau',
    unit: 'Chương IV: Tam giác bằng nhau',
    title: 'Bài 14: Trường hợp bằng nhau thứ hai và thứ ba (c.g.c và g.c.g)',
    subtitle: 'Nắm chắc điều kiện góc xen giữa (c.g.c) và cạnh xen giữa hai góc kề (g.c.g)',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c4-14-1',
        level: 'nhan_biet',
        code: 'KNTT-T14-01',
        description: 'Nhận biết góc xen giữa hai cạnh và cạnh kề hai góc trong một tam giác.',
        mastered: false
      },
      {
        id: 'lt-c4-14-2',
        level: 'thong_hieu',
        code: 'KNTT-T14-02',
        description: 'Hiểu và phát biểu trường hợp c.g.c (hai cạnh và góc xen giữa) và g.c.g (một cạnh và hai góc kề).',
        mastered: false
      },
      {
        id: 'lt-c4-14-3',
        level: 'van_dung',
        code: 'KNTT-T14-03',
        description: 'Trình bày bài chứng minh hai tam giác bằng nhau theo c.g.c hoặc g.c.g để tính khoảng cách không đo trực tiếp được.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c4-14-1',
        title: 'Trường hợp bằng nhau thứ hai: Cạnh - Góc - Cạnh (c.g.c)',
        summary: 'Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.',
        latexFormula: '\\begin{cases} AB = A\'B\' \\\\ \\widehat{A} = \\widehat{A\'} \\; (\\text{góc xen giữa}) \\\\ AC = A\'C\' \\end{cases} \\implies \\Delta ABC = \\Delta A\'B\'C\' \\; (c.g.c)',
        exampleSnippet: 'Góc xen giữa hai cạnh AB và AC chính là góc A. Nếu góc bằng nhau không nằm xen giữa (ví dụ góc B) thì KHÔNG được áp dụng c.g.c!',
        pitfallWarning: 'Bẫy cực lớn: Góc bắt buộc phải XEN GIỮA hai cạnh đã biết! Nếu góc nằm ngoài hai cạnh thì không thể kết luận hai tam giác bằng nhau.',
        realLifeApplication: 'Đo khoảng cách giữa hai điểm A và B bị ngăn cách bởi hồ nước bằng cách chọn điểm mốc C trên bờ.'
      },
      {
        id: 'c4-14-2',
        title: 'Trường hợp bằng nhau thứ ba: Góc - Cạnh - Góc (g.c.g)',
        summary: 'Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.',
        latexFormula: '\\begin{cases} \\widehat{B} = \\widehat{B\'} \\\\ BC = B\'C\' \\; (\\text{cạnh kề}) \\\\ \\widehat{C} = \\widehat{C\'} \\end{cases} \\implies \\Delta ABC = \\Delta A\'B\'C\' \\; (g.c.g)',
        exampleSnippet: 'Hai góc kề của cạnh BC là góc B và góc C. Nếu biết cạnh BC và góc A, góc B thì ta có thể tính góc C = 180° - (A + B) rồi áp dụng g.c.g.',
        pitfallWarning: 'Cạnh phải nằm giữa hai góc (cạnh kề hai góc đó).',
        realLifeApplication: 'Phương pháp đo đạc tam giác đạc (Triangulation) định vị GPS và đo khoảng cách của các vì sao trong thiên văn học.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c4-14-1',
        tier: 'nhan_biet',
        question: 'Trong tam giác ABC, góc xen giữa hai cạnh AB và BC là góc nào?',
        formula: '\\text{Góc xen giữa } AB \\text{ và } BC',
        options: [
          { id: 'opt-c4-14-1a', text: '\\widehat{B}', isCorrect: true },
          { id: 'opt-c4-14-1b', text: '\\widehat{A}', isCorrect: false },
          { id: 'opt-c4-14-1c', text: '\\widehat{C}', isCorrect: false },
          { id: 'opt-c4-14-1d', text: 'Cả ba góc', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-14-1a',
        progressiveHints: [
          'Tìm chữ cái chung giữa hai cạnh AB và BC.',
          'Chữ B xuất hiện ở cả hai cạnh nên đỉnh B chính là đỉnh góc xen giữa.'
        ],
        explanation: 'Góc xen giữa hai cạnh AB và BC có đỉnh là điểm chung B, tức là góc B.',
        competencyRef: 'lt-c4-14-1',
        points: 10
      },
      {
        id: 'q-c4-14-2',
        tier: 'nhan_biet',
        question: 'Hai góc kề của cạnh MN trong tam giác MNP là hai góc nào?',
        formula: '\\text{Hai góc kề cạnh } MN',
        options: [
          { id: 'opt-c4-14-2a', text: '\\widehat{M} \\text{ và } \\widehat{N}', isCorrect: true },
          { id: 'opt-c4-14-2b', text: '\\widehat{M} \\text{ và } \\widehat{P}', isCorrect: false },
          { id: 'opt-c4-14-2c', text: '\\widehat{N} \\text{ và } \\widehat{P}', isCorrect: false },
          { id: 'opt-c4-14-2d', text: 'Chỉ có góc P', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-14-2a',
        progressiveHints: [
          'Hai góc kề cạnh MN là hai góc tại hai đầu mút của cạnh đó.',
          'Hai đầu mút là M và N.'
        ],
        explanation: 'Hai góc kề cạnh MN chính là góc M và góc N ở hai đầu mút của đoạn thẳng MN.',
        competencyRef: 'lt-c4-14-1',
        points: 10
      },
      {
        id: 'q-c4-14-3',
        tier: 'thong_hieu',
        question: 'Cho tam giác ABC và tam giác DEF có AB = DE, AC = DF. Để kết luận tam giác ABC = tam giác DEF theo trường hợp c.g.c thì cần thêm điều kiện gì?',
        formula: 'AB = DE; \\; AC = DF',
        options: [
          { id: 'opt-c4-14-3a', text: '\\widehat{A} = \\widehat{D}', isCorrect: true },
          { id: 'opt-c4-14-3b', text: '\\widehat{B} = \\widehat{E}', isCorrect: false },
          { id: 'opt-c4-14-3c', text: '\\widehat{C} = \\widehat{F}', isCorrect: false },
          { id: 'opt-c4-14-3d', text: 'BC = EF', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-14-3a',
        progressiveHints: [
          'Góc cần thêm phải là góc XEN GIỮA hai cạnh đã cho.',
          'Góc xen giữa AB và AC là góc A. Góc xen giữa DE và DF là góc D.'
        ],
        explanation: 'Để áp dụng trường hợp c.g.c, góc phải xen giữa hai cạnh: góc A xen giữa AB, AC và góc D xen giữa DE, DF. Do đó cần góc A = góc D.',
        competencyRef: 'lt-c4-14-2',
        points: 10
      },
      {
        id: 'q-c4-14-4',
        tier: 'van_dung',
        question: 'Hai bạn An và Bình muốn đo khoảng cách từ vị trí A trên bờ đến con thuyền B trên mặt hồ. Họ dựng đoạn thẳng AC vuông góc AB trên bờ, lấy trung điểm O của AC rồi gióng tia CO vuông góc AC tại C đến điểm D sao cho B, O, D thẳng hàng. Khoảng cách AB bằng đoạn nào?',
        formula: '\\Delta ABO = \\Delta CDO \\; (g.c.g) \\implies AB = ?',
        options: [
          { id: 'opt-c4-14-4a', text: 'Đoạn CD', isCorrect: true },
          { id: 'opt-c4-14-4b', text: 'Đoạn AC', isCorrect: false },
          { id: 'opt-c4-14-4c', text: 'Đoạn BO', isCorrect: false },
          { id: 'opt-c4-14-4d', text: 'Đoạn AD', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-14-4a',
        progressiveHints: [
          'Xét tam giác ABO và tam giác CDO.',
          'Hai tam giác này bằng nhau theo trường hợp g.c.g (góc A = góc C = 90°, OA = OC, hai góc đối đỉnh tại O bằng nhau).',
          'Hai cạnh tương ứng bằng nhau: AB = CD.'
        ],
        explanation: 'Tam giác ABO = tam giác CDO (g.c.g) vì góc A = góc C = 90°, OA = OC và hai góc đối đỉnh tại O bằng nhau. Suy ra AB = CD. Chỉ cần đo CD trên bờ là biết AB.',
        competencyRef: 'lt-c4-14-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c4-14-1',
        prompt: 'Bố hỏi con: "Trong trường hợp bằng nhau Cạnh - Góc - Cạnh, từ quan trọng nhất mà đề thi hay gài bẫy là gì?"',
        contextForParent: 'Vị trí góc xen giữa.',
        suggestedAnswerTip: 'Từ quan trọng nhất là "XEN GIỮA", góc phải bị kẹp ở giữa hai cạnh đó, nếu góc nằm ở chỗ khác thì sai ngay.',
        sampleChildResponse: 'Từ quan trọng nhất là "góc XEN GIỮA" bố ạ! Góc mà không kẹp giữa 2 cạnh đó là không được bằng nhau đâu ạ!'
      },
      {
        id: 'dp-c4-14-2',
        prompt: 'Mẹ hỏi con: "Người ta đo khoảng cách một hòn đảo ngoài biển mà không cần bơi ra đảo bằng cách nào?"',
        contextForParent: 'Ứng dụng thực tế của tam giác bằng nhau (đo gián tiếp).',
        suggestedAnswerTip: 'Dựng tam giác trên bờ bằng với tam giác ra đảo (trường hợp g.c.g) rồi đo cạnh tương ứng trên đất liền.',
        sampleChildResponse: 'Họ dùng trường hợp tam giác bằng nhau góc - cạnh - góc trên bờ mẹ ạ, đo một đoạn trên đất liền là biết khoảng cách ra đảo luôn!'
      },
      {
        id: 'dp-c4-14-3',
        prompt: 'Bố hỏi con: "Góc xen giữa hai cạnh BC và CA là góc nào, làm sao nhìn ra ngay?"',
        contextForParent: 'Mẹo tìm đỉnh chung giữa hai cạnh.',
        suggestedAnswerTip: 'Là góc C! Nhìn chữ cái nào xuất hiện ở cả hai cạnh thì đó chính là góc xen giữa.',
        sampleChildResponse: 'Là góc C bố ơi! Vì chữ C là điểm chung của cả hai cạnh BC và CA ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 15: CÁC TRƯỜNG HỢP BẰNG NHAU CỦA TAM GIÁC VUÔNG
  // ==========================================================================
  {
    id: 'bai_15_cac_truong_hop_bang_nhau_tam_giac_vuong',
    order: 18,
    chapterId: 'chuong_4_tam_giac_bang_nhau',
    chapterTitle: 'Chương IV: Tam Giác Bằng Nhau',
    unit: 'Chương IV: Tam giác bằng nhau',
    title: 'Bài 15: Các trường hợp bằng nhau của tam giác vuông',
    subtitle: 'Bốn trường hợp đặc biệt: hai cạnh góc vuông, cạnh góc vuông - góc nhọn, cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c4-15-1',
        level: 'nhan_biet',
        code: 'KNTT-T15-01',
        description: 'Biết hai trường hợp bằng nhau cơ bản suy ra từ tam giác thường: hai cạnh góc vuông và cạnh góc vuông - góc nhọn kề.',
        mastered: false
      },
      {
        id: 'lt-c4-15-2',
        level: 'thong_hieu',
        code: 'KNTT-T15-02',
        description: 'Hiểu hai trường hợp bằng nhau đặc biệt dành riêng cho tam giác vuông: Cạnh huyền - Góc nhọn và Cạnh huyền - Cạnh góc vuông.',
        mastered: false
      },
      {
        id: 'lt-c4-15-3',
        level: 'van_dung',
        code: 'KNTT-T15-03',
        description: 'Vận dụng linh hoạt các trường hợp bằng nhau của tam giác vuông để chứng minh hai đoạn thẳng hoặc hai góc bằng nhau.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c4-15-1',
        title: 'Bốn trường hợp bằng nhau của tam giác vuông',
        summary: 'Vì tam giác vuông đã có sẵn một góc vuông 90 độ bằng nhau nên chỉ cần thêm 2 yếu tố:\n1) Hai cạnh góc vuông (suy từ c.g.c).\n2) Một cạnh góc vuông và góc nhọn kề (suy từ g.c.g).\n3) Cạnh huyền - Góc nhọn.\n4) Cạnh huyền - Cạnh góc vuông.',
        latexFormula: '\\text{Đặc biệt: } \\begin{cases} \\text{Cạnh huyền - Góc nhọn} \\\\ \\text{Cạnh huyền - Cạnh góc vuông} \\end{cases}',
        exampleSnippet: 'Cho tam giác ABC vuông tại A và tam giác DEF vuông tại D. Nếu cạnh huyền BC = EF và góc B = góc E thì hai tam giác bằng nhau (Cạnh huyền - Góc nhọn).',
        pitfallWarning: 'Trong trường hợp "Cạnh huyền - Cạnh góc vuông", KHÔNG cần biết góc xen giữa! Đây là trường hợp cực kì mạnh mẽ chỉ có ở tam giác vuông.',
        realLifeApplication: 'Chế tạo các thanh chống giàn chéo trong công trình cầu đường: đảm bảo hai bên sườn cầu cân đối tuyệt đối.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c4-15-1',
        tier: 'nhan_biet',
        question: 'Nếu hai tam giác vuông có cạnh huyền bằng nhau và một góc nhọn bằng nhau thì chúng bằng nhau theo trường hợp nào?',
        formula: '\\text{Tam giác vuông: } \\text{Cạnh huyền} = \\text{Cạnh huyền}, \\; \\text{Góc nhọn} = \\text{Góc nhọn}',
        options: [
          { id: 'opt-c4-15-1a', text: 'Cạnh huyền - góc nhọn', isCorrect: true },
          { id: 'opt-c4-15-1b', text: 'Cạnh - cạnh - cạnh', isCorrect: false },
          { id: 'opt-c4-15-1c', text: 'Hai cạnh góc vuông', isCorrect: false },
          { id: 'opt-c4-15-1d', text: 'Góc - cạnh - góc thông thường', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-15-1a',
        progressiveHints: [
          'Đọc kĩ hai yếu tố đề bài cho: Cạnh huyền và một Góc nhọn.',
          'Đó chính là trường hợp: Cạnh huyền - góc nhọn.'
        ],
        explanation: 'Trường hợp bằng nhau đặc biệt của tam giác vuông: Cạnh huyền - góc nhọn.',
        competencyRef: 'lt-c4-15-2',
        points: 10
      },
      {
        id: 'q-c4-15-2',
        tier: 'nhan_biet',
        question: 'Trường hợp bằng nhau "Hai cạnh góc vuông" của tam giác vuông thực chất được suy ra từ trường hợp bằng nhau nào của tam giác thường?',
        formula: '\\text{Hai cạnh góc vuông} \\equiv ?',
        options: [
          { id: 'opt-c4-15-2a', text: 'Cạnh - Góc - Cạnh (c.g.c) với góc xen giữa là góc vuông 90 độ', isCorrect: true },
          { id: 'opt-c4-15-2b', text: 'Cạnh - Cạnh - Cạnh (c.c.c)', isCorrect: false },
          { id: 'opt-c4-15-2c', text: 'Góc - Cạnh - Góc (g.c.g)', isCorrect: false },
          { id: 'opt-c4-15-2d', text: 'Không liên quan đến tam giác thường', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-15-2a',
        progressiveHints: [
          'Góc xen giữa hai cạnh góc vuông luôn là góc vuông 90 độ.',
          'Nên đây chính là trường hợp c.g.c đặc biệt.'
        ],
        explanation: 'Hai cạnh góc vuông kẹp giữa góc vuông 90° bằng nhau, do đó thực chất là trường hợp c.g.c.',
        competencyRef: 'lt-c4-15-1',
        points: 10
      },
      {
        id: 'q-c4-15-3',
        tier: 'thong_hieu',
        question: 'Cho tam giác ABC vuông tại A có AB = 6 cm, BC = 10 cm. Tam giác MNP vuông tại M có MN = 6 cm, NP = 10 cm. Hai tam giác này bằng nhau theo trường hợp nào?',
        formula: 'BC = NP = 10 \\text{ (cạnh huyền)}; \\; AB = MN = 6 \\text{ (cạnh góc vuông)}',
        options: [
          { id: 'opt-c4-15-3a', text: 'Cạnh huyền - cạnh góc vuông', isCorrect: true },
          { id: 'opt-c4-15-3b', text: 'Cạnh - góc - cạnh', isCorrect: false },
          { id: 'opt-c4-15-3c', text: 'Cạnh huyền - góc nhọn', isCorrect: false },
          { id: 'opt-c4-15-3d', text: 'Chưa đủ điều kiện bằng nhau', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-15-3a',
        progressiveHints: [
          'BC và NP đối diện góc vuông nên là hai CẠNH HUYỀN.',
          'AB và MN là hai CẠNH GÓC VUÔNG.',
          'Trường hợp: Cạnh huyền - Cạnh góc vuông.'
        ],
        explanation: 'BC và NP là cạnh huyền (bằng 10cm), AB và MN là cạnh góc vuông (bằng 6cm). Do đó hai tam giác vuông bằng nhau theo trường hợp Cạnh huyền - Cạnh góc vuông.',
        competencyRef: 'lt-c4-15-2',
        points: 10
      },
      {
        id: 'q-c4-15-4',
        tier: 'van_dung',
        question: 'Cho góc xOy nhọn và tia phân giác Ot. Lấy điểm M thuộc Ot, kẻ MA vuông góc Ox tại A và MB vuông góc Oy tại B. Khẳng định nào sau đây là ĐÚNG?',
        formula: '\\Delta OAM = \\Delta OBM',
        options: [
          { id: 'opt-c4-15-4a', text: 'MA = MB (vì tam giác OAM = tam giác OBM theo trường hợp cạnh huyền - góc nhọn)', isCorrect: true },
          { id: 'opt-c4-15-4b', text: 'MA > MB', isCorrect: false },
          { id: 'opt-c4-15-4c', text: 'MA + MB = OM', isCorrect: false },
          { id: 'opt-c4-15-4d', text: 'Không so sánh được MA và MB', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-15-4a',
        progressiveHints: [
          'Xét hai tam giác vuông OAM và OBM tại A và B.',
          'Có cạnh huyền OM chung, hai góc nhọn AOM = BOM (vì Ot là tia phân giác).',
          'Vậy tam giác OAM = tam giác OBM (cạnh huyền - góc nhọn) => MA = MB.'
        ],
        explanation: 'Hai tam giác vuông OAM và OBM có cạnh huyền OM chung và góc nhọn AOM = BOM (Ot là phân giác). Suy ra tam giác OAM = OBM (cạnh huyền - góc nhọn), do đó MA = MB.',
        competencyRef: 'lt-c4-15-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c4-15-1',
        prompt: 'Bố hỏi con: "Tam giác thường cần 3 điều kiện để bằng nhau, tại sao tam giác vuông chỉ cần 2 điều kiện thôi con nhỉ?"',
        contextForParent: 'Lợi thế của tam giác vuông: đã có sẵn 1 góc vuông 90 độ bằng nhau.',
        suggestedAnswerTip: 'Vì tam giác vuông đã có sẵn góc 90 độ giống nhau rồi, nên chỉ cần tìm thêm 2 điều kiện nữa là đủ 3.',
        sampleChildResponse: 'Dạ vì cả hai tam giác vuông đều đã có sẵn góc vuông 90 độ rồi bố ạ, nên chỉ cần thêm 2 cạnh hoặc 1 cạnh 1 góc nữa thôi ạ!'
      },
      {
        id: 'dp-c4-15-2',
        prompt: 'Mẹ hỏi con: "Điểm nằm trên tia phân giác của một góc thì cách đều hai cạnh của góc đó, con chứng minh bằng cách nào?"',
        contextForParent: 'Tính chất hình học quan trọng của tia phân giác chứng minh bằng tam giác vuông.',
        suggestedAnswerTip: 'Hạ hai đường vuông góc xuống hai cạnh, được hai tam giác vuông bằng nhau theo trường hợp cạnh huyền - góc nhọn.',
        sampleChildResponse: 'Con kẻ hai đoạn vuông góc xuống 2 cạnh mẹ ạ, sẽ tạo ra 2 tam giác vuông bằng nhau theo trường hợp cạnh huyền - góc nhọn nên khoảng cách bằng nhau!'
      },
      {
        id: 'dp-c4-15-3',
        prompt: 'Bố hỏi con: "Trường hợp cạnh huyền - cạnh góc vuông có cần biết góc xen giữa không?"',
        contextForParent: 'Điểm đặc biệt chỉ có ở tam giác vuông.',
        suggestedAnswerTip: 'Không cần! Đó là đặc quyền riêng của tam giác vuông, chỉ cần cạnh huyền và một cạnh góc vuông bằng nhau là đã bằng nhau rồi.',
        sampleChildResponse: 'Không cần góc xen giữa bố ơi! Đây là trường hợp đặc biệt riêng của tam giác vuông bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 16: TAM GIÁC CÂN. ĐƯỜNG TRUNG TRỰC CỦA ĐOẠN THẲNG
  // ==========================================================================
  {
    id: 'bai_16_tam_giac_can_duong_trung_truc',
    order: 19,
    chapterId: 'chuong_4_tam_giac_bang_nhau',
    chapterTitle: 'Chương IV: Tam Giác Bằng Nhau',
    unit: 'Chương IV: Tam giác bằng nhau',
    title: 'Bài 16: Tam giác cân. Đường trung trực của đoạn thẳng',
    subtitle: 'Tính chất đối xứng hai góc ở đáy, tam giác đều và định lí đường trung trực cách đều hai đầu mút',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c4-16-1',
        level: 'nhan_biet',
        code: 'KNTT-T16-01',
        description: 'Biết định nghĩa tam giác cân (2 cạnh bằng nhau), tam giác đều (3 cạnh bằng nhau) và đường trung trực của đoạn thẳng.',
        mastered: false
      },
      {
        id: 'lt-c4-16-2',
        level: 'thong_hieu',
        code: 'KNTT-T16-02',
        description: 'Hiểu tính chất: Trong tam giác cân, hai góc ở đáy bằng nhau; trong tam giác đều, mỗi góc bằng $60^\\circ$.',
        mastered: false
      },
      {
        id: 'lt-c4-16-3',
        level: 'van_dung',
        code: 'KNTT-T16-03',
        description: 'Vận dụng tính chất đường trung trực: Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c4-16-1',
        title: 'Tam giác cân & Tam giác đều',
        summary: 'Tam giác cân là tam giác có hai cạnh bằng nhau. Hai cạnh bằng nhau gọi là hai cạnh bên, cạnh còn lại là cạnh đáy. Tính chất: Hai góc ở đáy bằng nhau. Tam giác đều có 3 cạnh bằng nhau và 3 góc bằng nhau, mỗi góc bằng 60 độ.',
        latexFormula: '\\Delta ABC \\text{ cân tại } A \\iff AB = AC \\implies \\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}; \\qquad \\Delta \\text{ đều} \\implies \\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ',
        exampleSnippet: 'Tam giác cân tại A có góc ở đỉnh A = 40 độ thì hai góc ở đáy B = C = (180 - 40) / 2 = 70 độ.',
        pitfallWarning: 'Dấu hiệu nhận biết tam giác cân: Hoặc có 2 cạnh bằng nhau, HOẶC có 2 góc bằng nhau. Tam giác cân có một góc 60 độ sẽ trở thành tam giác đều!',
        realLifeApplication: 'Mái nhà chữ A truyền thống hoặc tháp Eiffel có kết cấu đối xứng tam giác cân chịu gió bão cực tốt.'
      },
      {
        id: 'c4-16-2',
        title: 'Đường trung trực của đoạn thẳng',
        summary: 'Đường trung trực của một đoạn thẳng là đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó. Tính chất: Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó (và ngược lại).',
        latexFormula: 'd \\text{ là trung trực của } AB \\iff d \\perp AB \\text{ tại trung điểm } I; \\qquad M \\in d \\iff MA = MB',
        exampleSnippet: 'Để tìm vị trí đặt một trạm phát sóng Wi-Fi hoặc trạm cứu hỏa sao cho cách đều hai thôn A và B, ta chỉ cần đặt trạm trên đường trung trực nối hai thôn.',
        pitfallWarning: 'Đường trung trực phải thỏa mãn ĐỒNG THỜI 2 điều kiện: VUÔNG GÓC và đi qua TRUNG ĐIỂM. Nếu chỉ vuông góc mà không qua trung điểm thì không phải trung trực!',
        realLifeApplication: 'Kỹ sư cầu đường định vị trụ tháp dây văng chính giữa sông để khoảng cách cáp treo sang hai bên mố cầu luôn bằng nhau.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c4-16-1',
        tier: 'nhan_biet',
        question: 'Trong tam giác cân ABC (cân tại A), khẳng định nào sau đây là ĐÚNG?',
        formula: '\\Delta ABC \\text{ cân tại } A',
        options: [
          { id: 'opt-c4-16-1a', text: 'AB = AC \\text{ và } \\widehat{B} = \\widehat{C}', isCorrect: true },
          { id: 'opt-c4-16-1b', text: 'AB = BC', isCorrect: false },
          { id: 'opt-c4-16-1c', text: '\\widehat{A} = \\widehat{B}', isCorrect: false },
          { id: 'opt-c4-16-1d', text: '\\widehat{A} = 60^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-16-1a',
        progressiveHints: [
          'Đỉnh cân là A nên hai cạnh bên là AB và AC.',
          'Hai góc ở đáy là góc B và góc C, chúng bằng nhau.'
        ],
        explanation: 'Tam giác cân tại A có hai cạnh bên AB = AC và hai góc ở đáy bằng nhau: góc B = góc C.',
        competencyRef: 'lt-c4-16-1',
        points: 10
      },
      {
        id: 'q-c4-16-2',
        tier: 'nhan_biet',
        question: 'Mỗi góc của một tam giác đều có số đo bằng bao nhiêu độ?',
        formula: '\\Delta \\text{ đều}',
        options: [
          { id: 'opt-c4-16-2a', text: '60^\\circ', isCorrect: true },
          { id: 'opt-c4-16-2b', text: '90^\\circ', isCorrect: false },
          { id: 'opt-c4-16-2c', text: '45^\\circ', isCorrect: false },
          { id: 'opt-c4-16-2d', text: '180^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-16-2a',
        progressiveHints: [
          'Tam giác đều có 3 góc bằng nhau.',
          'Tổng 3 góc bằng 180 độ: 180 / 3 = 60 độ.'
        ],
        explanation: 'Tam giác đều có 3 góc bằng nhau, mỗi góc bằng 180° : 3 = 60°.',
        competencyRef: 'lt-c4-16-2',
        points: 10
      },
      {
        id: 'q-c4-16-3',
        tier: 'thong_hieu',
        question: 'Cho tam giác cân ABC có góc ở đỉnh A = 80 độ. Số đo góc B ở đáy là bao nhiêu?',
        formula: '\\widehat{B} = \\frac{180^\\circ - 80^\\circ}{2}',
        options: [
          { id: 'opt-c4-16-3a', text: '50^\\circ', isCorrect: true },
          { id: 'opt-c4-16-3b', text: '100^\\circ', isCorrect: false },
          { id: 'opt-c4-16-3c', text: '80^\\circ', isCorrect: false },
          { id: 'opt-c4-16-3d', text: '40^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-16-3a',
        progressiveHints: [
          'Tổng hai góc ở đáy = 180° - 80° = 100°.',
          'Vì hai góc ở đáy bằng nhau nên mỗi góc = 100° / 2 = 50°.'
        ],
        explanation: 'Góc B = (180° - góc A) / 2 = (180° - 80°) / 2 = 100° / 2 = 50°.',
        competencyRef: 'lt-c4-16-2',
        points: 10
      },
      {
        id: 'q-c4-16-4',
        tier: 'van_dung',
        question: 'Đường thẳng d là đường trung trực của đoạn thẳng AB = 8 cm. Điểm M nằm trên d sao cho MA = 5 cm. Hỏi độ dài đoạn thẳng MB bằng bao nhiêu?',
        formula: 'M \\in d \\; (\\text{trung trực của } AB) \\implies MB = ?',
        options: [
          { id: 'opt-c4-16-4a', text: '5 cm', isCorrect: true },
          { id: 'opt-c4-16-4b', text: '8 cm', isCorrect: false },
          { id: 'opt-c4-16-4c', text: '4 cm', isCorrect: false },
          { id: 'opt-c4-16-4d', text: '3 cm', isCorrect: false }
        ],
        correctAnswerId: 'opt-c4-16-4a',
        progressiveHints: [
          'Áp dụng định lí tính chất đường trung trực của đoạn thẳng.',
          'Điểm nằm trên đường trung trực thì cách đều hai đầu mút: MA = MB.'
        ],
        explanation: 'Theo tính chất đường trung trực của đoạn thẳng, điểm M thuộc trung trực của AB thì cách đều A và B: MB = MA = 5 cm.',
        competencyRef: 'lt-c4-16-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c4-16-1',
        prompt: 'Bố hỏi con: "Mái nhà hình chữ A cân đối là hình ảnh của tam giác gì, có đặc điểm gì nổi bật?"',
        contextForParent: 'Hình ảnh tam giác cân trong kiến trúc dân gian.',
        suggestedAnswerTip: 'Là tam giác cân, có hai cạnh bên dài bằng nhau và độ dốc hai bên mái đều nhau giúp thoát nước mưa cân bằng.',
        sampleChildResponse: 'Là tam giác cân bố ạ! Hai mái dốc hai bên bằng nhau và góc nghiêng hai bên cũng bằng nhau giúp cân bằng chịu lực!'
      },
      {
        id: 'dp-c4-16-2',
        prompt: 'Mẹ hỏi con: "Đường trung trực của đoạn thẳng có tính chất siêu năng lực gì đối với khoảng cách?"',
        contextForParent: 'Tính chất cách đều hai đầu mút của đường trung trực.',
        suggestedAnswerTip: 'Bất kì điểm nào nằm trên đường trung trực đều cách đều hai đầu mút của đoạn thẳng đó.',
        sampleChildResponse: 'Nó có tính chất cách đều mẹ ạ! Cứ đứng ở bất kì điểm nào trên đường trung trực thì khoảng cách đến hai đầu đều bằng nhau!'
      },
      {
        id: 'dp-c4-16-3',
        prompt: 'Bố hỏi con: "Một tam giác cân mà có một góc bằng 60 độ thì ngay lập tức biến thành tam giác gì?"',
        contextForParent: 'Dấu hiệu nhận biết tam giác đều.',
        suggestedAnswerTip: 'Biến thành tam giác đều ngay lập tức, vì 2 góc còn lại cũng sẽ phải bằng 60 độ.',
        sampleChildResponse: 'Biến thành tam giác đều ngay lập tức bố ạ! Vì tính ra cả 3 góc đều bằng 60 độ nên 3 cạnh cũng bằng nhau luôn!'
      }
    ]
  }
];
