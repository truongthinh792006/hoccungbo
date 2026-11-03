import { Math7Lesson } from '../../types/curriculum';

export const chapter3Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 8: GÓC Ở VỊ TRÍ ĐẶC BIỆT. TIA PHÂN GIÁC CỦA MỘT GÓC
  // ==========================================================================
  {
    id: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 11,
    chapterId: 'chuong_3_goc_duong_thang_song_song',
    chapterTitle: 'Chương III: Góc & Đường Thẳng Song Song',
    unit: 'Chương III: Góc và đường thẳng song song',
    title: 'Bài 8: Góc ở vị trí đặc biệt. Tia phân giác của một góc',
    subtitle: 'Nắm chắc hai góc kề bù, đối đỉnh và tính chất tia phân giác chia đôi góc',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c3-8-1',
        level: 'nhan_biet',
        code: 'KNTT-T08-01',
        description: 'Nhận biết hai góc kề bù (có chung một cạnh, hai cạnh còn lại là hai tia đối nhau, tổng bằng $180^\\circ$).',
        mastered: false
      },
      {
        id: 'lt-c3-8-2',
        level: 'nhan_biet',
        code: 'KNTT-T08-02',
        description: 'Nhận biết hai góc đối đỉnh và định lí: Hai góc đối đỉnh thì bằng nhau.',
        mastered: false
      },
      {
        id: 'lt-c3-8-3',
        level: 'thong_hieu',
        code: 'KNTT-T08-03',
        description: 'Hiểu định nghĩa và tính chất của tia phân giác: nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau.',
        mastered: false
      },
      {
        id: 'lt-c3-8-4',
        level: 'van_dung',
        code: 'KNTT-T08-04',
        description: 'Tính số đo các góc dựa vào tính chất kề bù, đối đỉnh và tia phân giác.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c3-8-1',
        title: 'Hai góc kề bù & Hai góc đối đỉnh',
        summary: 'Hai góc kề bù là hai góc vừa kề nhau vừa bù nhau (tổng số đo bằng 180 độ). Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia; hai góc đối đỉnh thì BẰNG NHAU.',
        latexFormula: '\\widehat{xOy} + \\widehat{yOz} = 180^\\circ \\; (\\text{kề bù}); \\qquad \\widehat{O_1} = \\widehat{O_3}, \\; \\widehat{O_2} = \\widehat{O_4} \\; (\\text{đối đỉnh})',
        exampleSnippet: 'Hai đường thẳng xx\' và yy\' cắt nhau tại O tạo thành góc xOy = 60 độ. Khi đó góc đối đỉnh x\'Oy\' = 60 độ, và góc kề bù xOy\' = 180 - 60 = 120 độ.',
        pitfallWarning: 'Hai góc bằng nhau chưa chắc đã đối đỉnh! Chỉ đối đỉnh khi các cạnh của chúng là các tia đối nhau thành 2 đường thẳng cắt nhau.',
        realLifeApplication: 'Chiếc kéo cắt vải hoặc chữ X: khi mở rộng hai lưỡi kéo, hai góc đối đỉnh luôn mở rộng với số đo bằng nhau.'
      },
      {
        id: 'c3-8-2',
        title: 'Tia phân giác của một góc',
        summary: 'Tia phân giác của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau.',
        latexFormula: 'Oz \\text{ là phân giác } \\widehat{xOy} \\iff \\widehat{xOz} = \\widehat{zOy} = \\frac{\\widehat{xOy}}{2}',
        exampleSnippet: 'Cho góc xOy = 80 độ. Tia Oz là phân giác của góc xOy thì góc xOz = góc zOy = 80 / 2 = 40 độ.',
        pitfallWarning: 'Tia phân giác phải thỏa mãn ĐỒNG THỜI 2 điều kiện: nằm giữa hai cạnh và chia góc thành 2 phần bằng nhau.',
        realLifeApplication: 'Gấp giấy Origami hoặc chia đều một góc cua trên bản đồ giao thông để làm vòng xuyến đối xứng.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c3-8-1',
        tier: 'nhan_biet',
        question: 'Tổng số đo của hai góc kề bù luôn luôn bằng bao nhiêu độ?',
        formula: '\\widehat{A} + \\widehat{B} = ? \\; (\\text{kề bù})',
        options: [
          { id: 'opt-c3-8-1a', text: '180^\\circ', isCorrect: true },
          { id: 'opt-c3-8-1b', text: '90^\\circ', isCorrect: false },
          { id: 'opt-c3-8-1c', text: '360^\\circ', isCorrect: false },
          { id: 'opt-c3-8-1d', text: '45^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-8-1a',
        progressiveHints: [
          'Góc bẹt có số đo bằng 180 độ.',
          'Hai góc kề bù tạo thành một góc bẹt nên tổng bằng 180 độ.'
        ],
        explanation: 'Theo định nghĩa, hai góc kề bù có hai cạnh ngoài là hai tia đối nhau tạo thành góc bẹt 180 độ.',
        competencyRef: 'lt-c3-8-1',
        points: 10
      },
      {
        id: 'q-c3-8-2',
        tier: 'nhan_biet',
        question: 'Nếu hai góc đối đỉnh với nhau thì khẳng định nào sau đây luôn đúng?',
        formula: '\\widehat{O_1} \\text{ và } \\widehat{O_2} \\text{ đối đỉnh}',
        options: [
          { id: 'opt-c3-8-2a', text: 'Chúng có số đo bằng nhau', isCorrect: true },
          { id: 'opt-c3-8-2b', text: 'Tổng số đo của chúng bằng 180 độ', isCorrect: false },
          { id: 'opt-c3-8-2c', text: 'Tổng số đo của chúng bằng 90 độ', isCorrect: false },
          { id: 'opt-c3-8-2d', text: 'Một góc nhọn và một góc tù', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-8-2a',
        progressiveHints: [
          'Nhớ lại định lí hai góc đối đỉnh.',
          'Hai góc đối đỉnh thì BẰNG NHAU.'
        ],
        explanation: 'Định lí cơ bản: Hai góc đối đỉnh thì có số đo bằng nhau.',
        competencyRef: 'lt-c3-8-2',
        points: 10
      },
      {
        id: 'q-c3-8-3',
        tier: 'thong_hieu',
        question: 'Cho góc xOy = 110 độ. Góc kề bù với góc xOy có số đo bằng bao nhiêu?',
        formula: '\\widehat{yOz} + \\widehat{xOy} = 180^\\circ',
        options: [
          { id: 'opt-c3-8-3a', text: '70^\\circ', isCorrect: true },
          { id: 'opt-c3-8-3b', text: '110^\\circ', isCorrect: false },
          { id: 'opt-c3-8-3c', text: '90^\\circ', isCorrect: false },
          { id: 'opt-c3-8-3d', text: '20^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-8-3a',
        progressiveHints: [
          'Tổng hai góc kề bù bằng 180 độ.',
          'Lấy 180 độ trừ đi 110 độ.'
        ],
        explanation: 'Góc kề bù = 180° - 110° = 70°.',
        competencyRef: 'lt-c3-8-4',
        points: 10
      },
      {
        id: 'q-c3-8-4',
        tier: 'van_dung',
        question: 'Tia Ot là tia phân giác của góc mOn. Biết góc mOt = 35 độ, hỏi góc mOn bằng bao nhiêu độ?',
        formula: '\\widehat{mOn} = 2 \\cdot \\widehat{mOt}',
        options: [
          { id: 'opt-c3-8-4a', text: '70^\\circ', isCorrect: true },
          { id: 'opt-c3-8-4b', text: '35^\\circ', isCorrect: false },
          { id: 'opt-c3-8-4c', text: '17,5^\\circ', isCorrect: false },
          { id: 'opt-c3-8-4d', text: '145^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-8-4a',
        progressiveHints: [
          'Tia phân giác chia đôi góc ban đầu thành 2 góc bằng nhau.',
          'Vậy góc lớn gấp đôi góc nhỏ: mOn = 2 * mOt.'
        ],
        explanation: 'Vì Ot là tia phân giác của góc mOn nên góc mOn = 2 * góc mOt = 2 * 35° = 70°.',
        competencyRef: 'lt-c3-8-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c3-8-1',
        prompt: 'Bố hỏi con: "Hai góc đối đỉnh thì bằng nhau, vậy ngược lại hai góc bằng nhau có chắc chắn đối đỉnh không con?"',
        contextForParent: 'Bẫy hình học kinh điển: mệnh đề đảo không đúng.',
        suggestedAnswerTip: 'Không chắc chắn! Hai góc bằng nhau ở hai vị trí rời rạc thì không phải đối đỉnh (chỉ đối đỉnh khi các cạnh là tia đối của nhau).',
        sampleChildResponse: 'Không chắc chắn đâu bố! Phải có các cạnh là tia đối nhau (tạo bởi 2 đường thẳng cắt nhau) thì mới là đối đỉnh bố ạ!'
      },
      {
        id: 'dp-c3-8-2',
        prompt: 'Mẹ hỏi con: "Tia phân giác của một góc giống như hành động gì trong đời sống thường ngày?"',
        contextForParent: 'Hình ảnh trực quan: chia đôi chiếc bánh pizza hoặc nếp gấp chính giữa.',
        suggestedAnswerTip: 'Giống như nhát cắt chia đôi chiếc quạt giấy hoặc gấp đôi tờ giấy sao cho hai mép trùng khít nhau.',
        sampleChildResponse: 'Giống như nhát gấp đôi tờ giấy góc vuông thành 2 góc 45 độ bằng nhau mẹ ạ!'
      },
      {
        id: 'dp-c3-8-3',
        prompt: 'Bố hỏi con: "Chiếc kéo cắt giấy khi mở rộng ra tạo thành những cặp góc gì ở khớp nối?"',
        contextForParent: 'Ứng dụng thực tế của góc đối đỉnh và kề bù.',
        suggestedAnswerTip: 'Tạo thành 2 cặp góc đối đỉnh (bằng nhau) và 4 cặp góc kề bù (cộng lại bằng 180 độ).',
        sampleChildResponse: 'Tạo thành các cặp góc đối đỉnh bằng nhau ở lưỡi kéo và chuôi kéo, cùng các cặp góc kề bù bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 9: HAI ĐƯỜNG THẲNG SONG SONG VÀ DẤU HIỆU NHẬN BIẾT
  // ==========================================================================
  {
    id: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 12,
    chapterId: 'chuong_3_goc_duong_thang_song_song',
    chapterTitle: 'Chương III: Góc & Đường Thẳng Song Song',
    unit: 'Chương III: Góc và đường thẳng song song',
    title: 'Bài 9: Hai đường thẳng song song và dấu hiệu nhận biết',
    subtitle: 'Nhận diện các cặp góc so le trong, đồng vị và dấu hiệu để kết luận song song',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c3-9-1',
        level: 'nhan_biet',
        code: 'KNTT-T09-01',
        description: 'Nhận biết các cặp góc so le trong, đồng vị, trong cùng phía khi một đường thẳng cắt hai đường thẳng.',
        mastered: false
      },
      {
        id: 'lt-c3-9-2',
        level: 'thong_hieu',
        code: 'KNTT-T09-02',
        description: 'Hiểu dấu hiệu nhận biết hai đường thẳng song song: có một cặp góc so le trong bằng nhau hoặc đồng vị bằng nhau.',
        mastered: false
      },
      {
        id: 'lt-c3-9-3',
        level: 'van_dung',
        code: 'KNTT-T09-03',
        description: 'Vẽ hai đường thẳng song song bằng ê-ke và thước kẻ, chứng minh hai đường thẳng song song trong bài toán cụ thể.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c3-9-1',
        title: 'Các vị trí góc tạo bởi một cát tuyến cắt hai đường thẳng',
        summary: 'Khi đường thẳng c cắt hai đường thẳng a và b, tại mỗi giao điểm tạo ra 4 góc. Ta có các cặp góc: So le trong (hình chữ Z), Đồng vị (hình chữ F), Trong cùng phía (hình chữ U).',
        latexFormula: '\\text{So le trong (bằng nhau)}; \\quad \\text{Đồng vị (bằng nhau)}; \\quad \\text{Trong cùng phía (bù nhau, tổng } 180^\\circ)',
        exampleSnippet: 'Nhìn hình chữ Z: hai góc kẹp bên trong góc nhọn của chữ Z là hai góc so le trong. Nhìn hình chữ F: hai góc cùng hướng nhìn là đồng vị.',
        pitfallWarning: 'Chỉ khi hai đường thẳng a và b SONG SONG thì các cặp góc so le trong mới bằng nhau! Nếu a và b không song song thì chúng KHÔNG bằng nhau.',
        realLifeApplication: 'Bậc thang hoặc đường ray tàu hỏa: hai thanh ray song song đảm bảo khoảng cách luôn không đổi.'
      },
      {
        id: 'c3-9-2',
        title: 'Dấu hiệu nhận biết hai đường thẳng song song',
        summary: 'Nếu đường thẳng c cắt hai đường thẳng phân biệt a, b và trong các góc tạo thành có: một cặp góc so le trong bằng nhau HOẶC một cặp góc đồng vị bằng nhau HOẶC một cặp góc trong cùng phía bù nhau thì a và b song song với nhau.',
        latexFormula: '\\widehat{A_1} = \\widehat{B_3} \\; (\\text{so le trong}) \\implies a \\parallel b; \\qquad \\widehat{A_1} = \\widehat{B_1} \\; (\\text{đồng vị}) \\implies a \\parallel b',
        exampleSnippet: 'Cho đường thẳng c cắt a tại A, cắt b tại B. Nếu góc A_1 = 50 độ và góc B_3 (so le trong) = 50 độ thì kết luận a // b.',
        pitfallWarning: 'Phải chỉ rõ tên cặp góc và vị trí của chúng (so le trong hay đồng vị) khi trình bày bài chứng minh hình học.',
        realLifeApplication: 'Thợ mộc dùng thước ê-ke chữ T để vạch các đường song song cắt gỗ thẳng tắp.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c3-9-1',
        tier: 'nhan_biet',
        question: 'Dấu hiệu nào sau đây ĐỦ để kết luận đường thẳng a song song với đường thẳng b?',
        formula: 'a \\parallel b \\iff ?',
        options: [
          { id: 'opt-c3-9-1a', text: 'Có một cặp góc so le trong bằng nhau', isCorrect: true },
          { id: 'opt-c3-9-1b', text: 'Có hai góc đối đỉnh bằng nhau', isCorrect: false },
          { id: 'opt-c3-9-1c', text: 'Có hai góc kề bù bằng nhau', isCorrect: false },
          { id: 'opt-c3-9-1d', text: 'Có một cặp góc trong cùng phía bằng nhau', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-9-1a',
        progressiveHints: [
          'Dấu hiệu song song liên quan đến các góc tạo bởi cát tuyến.',
          'Cặp góc so le trong bằng nhau hoặc đồng vị bằng nhau.'
        ],
        explanation: 'Dấu hiệu nhận biết hai đường thẳng song song: nếu có một cặp góc so le trong bằng nhau thì a // b.',
        competencyRef: 'lt-c3-9-2',
        points: 10
      },
      {
        id: 'q-c3-9-2',
        tier: 'nhan_biet',
        question: 'Hai góc đồng vị có hình ảnh trực quan tương tự chữ cái in hoa nào sau đây?',
        formula: '\\text{Góc đồng vị}',
        options: [
          { id: 'opt-c3-9-2a', text: 'Chữ F', isCorrect: true },
          { id: 'opt-c3-9-2b', text: 'Chữ Z', isCorrect: false },
          { id: 'opt-c3-9-2c', text: 'Chữ X', isCorrect: false },
          { id: 'opt-c3-9-2d', text: 'Chữ U', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-9-2a',
        progressiveHints: [
          'Chữ Z là so le trong, chữ U là trong cùng phía, chữ X là đối đỉnh.',
          'Chữ F có hai nhánh ngang chỉ cùng hướng: đó là góc đồng vị.'
        ],
        explanation: 'Mẹo nhớ hình học: Chữ Z là so le trong, chữ F là đồng vị, chữ U là trong cùng phía.',
        competencyRef: 'lt-c3-9-1',
        points: 10
      },
      {
        id: 'q-c3-9-3',
        tier: 'thong_hieu',
        question: 'Đường thẳng c cắt a và b. Biết một cặp góc trong cùng phía có số đo lần lượt là 120 độ và 60 độ. Kết luận gì về a và b?',
        formula: '120^\\circ + 60^\\circ = 180^\\circ',
        options: [
          { id: 'opt-c3-9-3a', text: 'a song song với b vì hai góc trong cùng phía bù nhau', isCorrect: true },
          { id: 'opt-c3-9-3b', text: 'a cắt b', isCorrect: false },
          { id: 'opt-c3-9-3c', text: 'a vuông góc với b', isCorrect: false },
          { id: 'opt-c3-9-3d', text: 'Không thể kết luận được', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-9-3a',
        progressiveHints: [
          'Tính tổng hai góc trong cùng phía: 120 + 60 = 180 độ.',
          'Hai góc trong cùng phía bù nhau (tổng 180 độ) là dấu hiệu nhận biết hai đường thẳng song song.'
        ],
        explanation: 'Vì tổng hai góc trong cùng phía bằng 120° + 60° = 180° (bù nhau) nên theo dấu hiệu nhận biết, a // b.',
        competencyRef: 'lt-c3-9-2',
        points: 10
      },
      {
        id: 'q-c3-9-4',
        tier: 'van_dung',
        question: 'Cho hai đường thẳng a // b bị cắt bởi đường thẳng c tại A và B. Biết góc A_1 = 65 độ. Hỏi số đo góc B_2 (góc so le trong với A_1) bằng bao nhiêu?',
        formula: 'a \\parallel b \\implies \\widehat{B_2} = \\widehat{A_1}',
        options: [
          { id: 'opt-c3-9-4a', text: '65^\\circ', isCorrect: true },
          { id: 'opt-c3-9-4b', text: '115^\\circ', isCorrect: false },
          { id: 'opt-c3-9-4c', text: '25^\\circ', isCorrect: false },
          { id: 'opt-c3-9-4d', text: '90^\\circ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-9-4a',
        progressiveHints: [
          'Tính chất hai đường thẳng song song: hai góc so le trong bằng nhau.',
          'Góc B_2 so le trong với góc A_1 nên góc B_2 = góc A_1.'
        ],
        explanation: 'Vì a // b nên cặp góc so le trong bằng nhau: B_2 = A_1 = 65°.',
        competencyRef: 'lt-c3-9-3',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c3-9-1',
        prompt: 'Bố hỏi con: "Mẹo chữ Z và chữ F giúp con nhớ hai loại góc nào khi học đường thẳng song song?"',
        contextForParent: 'Phương pháp ghi nhớ trực quan hình học 7.',
        suggestedAnswerTip: 'Chữ Z là hai góc so le trong, chữ F là hai góc đồng vị.',
        sampleChildResponse: 'Dạ chữ Z là hai góc so le trong bằng nhau, còn chữ F là hai góc đồng vị cùng hướng bố ạ!'
      },
      {
        id: 'dp-c3-9-2',
        prompt: 'Mẹ hỏi con: "Đường ray xe lửa hai thanh sắt có bao giờ cắt nhau không, vì sao?"',
        contextForParent: 'Khái niệm thực tế của hai đường thẳng song song.',
        suggestedAnswerTip: 'Không bao giờ cắt nhau vì chúng song song, các thanh tà vẹt giữ khoảng cách hai thanh luôn bằng nhau.',
        sampleChildResponse: 'Không bao giờ cắt nhau mẹ ạ, vì hai thanh ray song song với nhau trên suốt hành trình tàu chạy!'
      },
      {
        id: 'dp-c3-9-3',
        prompt: 'Bố hỏi con: "Để chứng minh hai đường thẳng song song trên giấy kiểm tra, con thường dùng dấu hiệu nào nhất?"',
        contextForParent: 'Quy trình tư duy hình học của học sinh.',
        suggestedAnswerTip: 'Chỉ ra một cặp góc so le trong bằng nhau hoặc một cặp góc đồng vị bằng nhau.',
        sampleChildResponse: 'Con hay tìm cặp góc so le trong hình chữ Z bằng nhau hoặc đồng vị hình chữ F bằng nhau để chứng minh bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 10: TIÊN ĐỀ EUCLID. TÍNH CHẤT HAI ĐƯỜNG THẲNG SONG SONG
  // ==========================================================================
  {
    id: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 13,
    chapterId: 'chuong_3_goc_duong_thang_song_song',
    chapterTitle: 'Chương III: Góc & Đường Thẳng Song Song',
    unit: 'Chương III: Góc và đường thẳng song song',
    title: 'Bài 10: Tiên đề Euclid. Tính chất của hai đường thẳng song song',
    subtitle: 'Nền tảng hình học Euclid cổ điển và quy tắc từ vuông góc đến song song',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c3-10-1',
        level: 'nhan_biet',
        code: 'KNTT-T10-01',
        description: 'Phát biểu đúng Tiên đề Euclid: Qua một điểm ở ngoài đường thẳng, chỉ có MỘT đường thẳng song song với đường thẳng đó.',
        mastered: false
      },
      {
        id: 'lt-c3-10-2',
        level: 'thong_hieu',
        code: 'KNTT-T10-02',
        description: 'Hiểu tính chất bắc cầu: Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau.',
        mastered: false
      },
      {
        id: 'lt-c3-10-3',
        level: 'van_dung',
        code: 'KNTT-T10-03',
        description: 'Vận dụng tính chất từ vuông góc đến song song: Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng song song với nhau.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c3-10-1',
        title: 'Tiên đề Euclid về đường thẳng song song',
        summary: 'Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó. Đây là tiên đề không cần chứng minh, đặt nền móng cho toàn bộ hình học phẳng.',
        latexFormula: 'A \\notin a \\implies \\text{Tồn tại duy nhất } b \\text{ đi qua } A \\text{ sao cho } b \\parallel a',
        exampleSnippet: 'Nếu qua điểm M ta kẻ được đường thẳng a // d và đường thẳng b // d thì đường thẳng a và b phải TRÙNG NHAU.',
        pitfallWarning: 'Nhấn mạnh từ DUY NHẤT: không thể có đường thẳng song song thứ hai đi qua cùng điểm đó!',
        realLifeApplication: 'Quy hoạch lưới điện quốc gia và thiết kế bản vẽ kỹ thuật CAD.'
      },
      {
        id: 'c3-10-2',
        title: 'Quan hệ từ vuông góc đến song song & Tính chất bắc cầu',
        summary: '1) Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì chúng song song với nhau. 2) Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau. 3) Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.',
        latexFormula: '\\begin{cases} a \\parallel c \\\\ b \\parallel c \\end{cases} \\implies a \\parallel b; \\qquad \\begin{cases} a \\perp c \\\\ b \\perp c \\end{cases} \\implies a \\parallel b; \\qquad \\begin{cases} a \\parallel b \\\\ c \\perp a \\end{cases} \\implies c \\perp b',
        exampleSnippet: 'Kẻ d1 vuông góc d tại A, kẻ d2 vuông góc d tại B. Kết luận ngay d1 // d2 vì cùng vuông góc với d.',
        pitfallWarning: 'Phải có từ "PHÂN BIỆT" để tránh trường hợp hai đường thẳng trùng nhau.',
        realLifeApplication: 'Các cột cờ hoặc cọc tiêu cùng cắm vuông góc với mặt đất nằm ngang thì các cọc tiêu sẽ song song với nhau.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c3-10-1',
        tier: 'nhan_biet',
        question: 'Theo Tiên đề Euclid, qua một điểm A nằm ngoài đường thẳng d, vẽ được bao nhiêu đường thẳng song song với d?',
        formula: 'A \\notin d',
        options: [
          { id: 'opt-c3-10-1a', text: 'Chỉ có 1 đường thẳng duy nhất', isCorrect: true },
          { id: 'opt-c3-10-1b', text: 'Vô số đường thẳng', isCorrect: false },
          { id: 'opt-c3-10-1c', text: 'Có đúng 2 đường thẳng', isCorrect: false },
          { id: 'opt-c3-10-1d', text: 'Không vẽ được đường thẳng nào', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-10-1a',
        progressiveHints: [
          'Nhớ lại định nghĩa Tiên đề Euclid.',
          'Từ khóa quan trọng nhất: "tồn tại DUY NHẤT".'
        ],
        explanation: 'Tiên đề Euclid khẳng định: Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng duy nhất song song với đường thẳng đó.',
        competencyRef: 'lt-c3-10-1',
        points: 10
      },
      {
        id: 'q-c3-10-2',
        tier: 'nhan_biet',
        question: 'Nếu đường thẳng a vuông góc với d, và đường thẳng b phân biệt cũng vuông góc với d thì kết luận nào đúng?',
        formula: 'a \\perp d; \\; b \\perp d \\implies ?',
        options: [
          { id: 'opt-c3-10-2a', text: 'a song song với b', isCorrect: true },
          { id: 'opt-c3-10-2b', text: 'a vuông góc với b', isCorrect: false },
          { id: 'opt-c3-10-2c', text: 'a cắt b', isCorrect: false },
          { id: 'opt-c3-10-2d', text: 'a trùng với b', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-10-2a',
        progressiveHints: [
          'Quan hệ từ vuông góc đến song song.',
          'Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng song song với nhau.'
        ],
        explanation: 'Định lí từ vuông góc đến song song: Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau (a // b).',
        competencyRef: 'lt-c3-10-3',
        points: 10
      },
      {
        id: 'q-c3-10-3',
        tier: 'thong_hieu',
        question: 'Cho hai đường thẳng x // y. Một đường thẳng d cắt x và tạo một góc vuông 90 độ. Hỏi d có vuông góc với y không?',
        formula: 'x \\parallel y; \\; d \\perp x \\implies d \\dots y',
        options: [
          { id: 'opt-c3-10-3a', text: 'Có, d vuông góc với y (d ⊥ y)', isCorrect: true },
          { id: 'opt-c3-10-3b', text: 'Không, d song song với y', isCorrect: false },
          { id: 'opt-c3-10-3c', text: 'Chỉ vuông góc khi d đi qua gốc tọa độ', isCorrect: false },
          { id: 'opt-c3-10-3d', text: 'Không xác định được', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-10-3a',
        progressiveHints: [
          'Một đường thẳng vuông góc với một trong hai đường song song...',
          '...thì nó cũng vuông góc với đường thẳng kia.'
        ],
        explanation: 'Tính chất: Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia (d ⊥ y).',
        competencyRef: 'lt-c3-10-3',
        points: 10
      },
      {
        id: 'q-c3-10-4',
        tier: 'van_dung',
        question: 'Cho a // b và b // c (với a, b, c phân biệt). Nếu d vuông góc với c thì khẳng định nào sau đây là SAI?',
        formula: 'a \\parallel b \\parallel c; \\; d \\perp c',
        options: [
          { id: 'opt-c3-10-4a', text: 'd song song với a', isCorrect: true },
          { id: 'opt-c3-10-4b', text: 'a song song với c', isCorrect: false },
          { id: 'opt-c3-10-4c', text: 'd vuông góc với a', isCorrect: false },
          { id: 'opt-c3-10-4d', text: 'd vuông góc với b', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-10-4a',
        progressiveHints: [
          'Vì a // b // c nên d vuông góc với cả c, b, và a.',
          'Do đó d không thể song song với a (mà d vuông góc với a). Khẳng định d // a là SAI.'
        ],
        explanation: 'Vì a // b // c mà d ⊥ c nên d phải vuông góc với cả a và b. Do đó khẳng định "d song song với a" là sai.',
        competencyRef: 'lt-c3-10-2',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c3-10-1',
        prompt: 'Bố hỏi con: "Nhà toán học cổ đại Euclid có một tiên đề nổi tiếng thế giới về đường thẳng song song, con có nhớ nội dung không?"',
        contextForParent: 'Ý nghĩa lịch sử của Tiên đề Euclid.',
        suggestedAnswerTip: 'Qua một điểm ở ngoài đường thẳng, chỉ vẽ được duy nhất MỘT đường thẳng song song với đường thẳng đó.',
        sampleChildResponse: 'Dạ qua một điểm nằm ngoài đường thẳng, chỉ có duy nhất MỘT đường thẳng song song với đường thẳng đó thôi bố ạ!'
      },
      {
        id: 'dp-c3-10-2',
        prompt: 'Mẹ hỏi con: "Các cột đèn đường đều cắm thẳng đứng vuông góc với mặt đất, vậy các cột đèn đó có quan hệ gì với nhau?"',
        contextForParent: 'Ứng dụng định lí từ vuông góc đến song song.',
        suggestedAnswerTip: 'Chúng song song với nhau vì cùng vuông góc với mặt phẳng đất.',
        sampleChildResponse: 'Các cột đèn song song với nhau mẹ ạ, vì cùng vuông góc với mặt đường thẳng tắp!'
      },
      {
        id: 'dp-c3-10-3',
        prompt: 'Bố hỏi con: "Nếu đường thẳng a song song với b, b lại song song với c thì a và c thế nào với nhau?"',
        contextForParent: 'Tính chất bắc cầu của quan hệ song song.',
        suggestedAnswerTip: 'a cũng song song với c (tính chất bắc cầu: bạn của bạn cũng là bạn).',
        sampleChildResponse: 'a cũng song song với c bố ạ, đây gọi là tính chất bắc cầu trong hình học!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 11: ĐỊNH LÍ VÀ CHỨNG MINH ĐỊNH LÍ
  // ==========================================================================
  {
    id: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 14,
    chapterId: 'chuong_3_goc_duong_thang_song_song',
    chapterTitle: 'Chương III: Góc & Đường Thẳng Song Song',
    unit: 'Chương III: Góc và đường thẳng song song',
    title: 'Bài 11: Định lí và chứng minh định lí',
    subtitle: 'Rèn luyện tư duy logic: phân tách Giả thiết (GT) - Kết luận (KL) và các bước chứng minh',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-c3-11-1',
        level: 'nhan_biet',
        code: 'KNTT-T11-01',
        description: 'Biết cấu trúc của một định lí: "Nếu [Giả thiết] thì [Kết luận]" và viết tắt GT - KL.',
        mastered: false
      },
      {
        id: 'lt-c3-11-2',
        level: 'thong_hieu',
        code: 'KNTT-T11-02',
        description: 'Phân biệt được đâu là điều đã cho (Giả thiết) và đâu là điều cần chứng minh (Kết luận).',
        mastered: false
      },
      {
        id: 'lt-c3-11-3',
        level: 'van_dung',
        code: 'KNTT-T11-03',
        description: 'Thực hiện chứng minh một định lí hình học đơn giản bằng lập luận logic chặt chẽ qua từng bước.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c3-11-1',
        title: 'Định nghĩa & Cấu trúc của định lí',
        summary: 'Định lí là một khẳng định được coi là đúng nhờ suy luận logic (chứng minh), không phải do cảm tính đo đạc. Định lí thường phát biểu dưới dạng: "Nếu A thì B". A là Giả thiết (GT - điều đã cho), B là Kết luận (KL - điều suy ra).',
        latexFormula: '\\text{Định lí: Nếu } \\underbrace{A}_{\\text{Giả thiết (GT)}} \\text{ thì } \\underbrace{B}_{\\text{Kết luận (KL)}}',
        exampleSnippet: 'Định lí: "Nếu hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau."\n- GT: a // c, b // c, a khác b.\n- KL: a // b.',
        pitfallWarning: 'Đừng nhầm lẫn giữa Định lí (phải chứng minh bằng lý lẽ) với Tiên đề (thừa nhận hiển nhiên không cần chứng minh)!',
        realLifeApplication: 'Tư duy phản biện và tranh biện pháp lý: Luận cứ vững chắc (GT) suy ra phán quyết chuẩn xác (KL).'
      },
      {
        id: 'c3-11-2',
        title: 'Các bước chứng minh một định lí',
        summary: 'Chứng minh định lí là dùng lập luận từ các khẳng định đã biết là đúng (tiên đề, định lí đã học, giả thiết) để suy ra kết luận. Bước 1: Vẽ hình. Bước 2: Ghi GT, KL bằng kí hiệu toán học. Bước 3: Trình bày từng dòng suy luận kèm lý do trong ngoặc đơn.',
        latexFormula: '\\text{Các bước: Vẽ hình } \\longrightarrow \\text{ Ghi GT/KL } \\longrightarrow \\text{ Lập luận từng bước (vì... nên...)}',
        exampleSnippet: 'Chứng minh: "Hai góc đối đỉnh thì bằng nhau."\nVì góc O1 kề bù O2 nên O1 + O2 = 180°. Vì O3 kề bù O2 nên O3 + O2 = 180°. Suy ra O1 = O3.',
        pitfallWarning: 'Mỗi khẳng định viết ra bắt buộc phải có lý do đi kèm trong ngoặc (ví dụ: "(vì hai góc đối đỉnh)" hoặc "(theo giả thiết)").',
        realLifeApplication: 'Lập trình máy tính: mã nguồn chạy theo chuỗi logic điều kiện if... then... chính xác tuyệt đối.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q-c3-11-1',
        tier: 'nhan_biet',
        question: 'Trong định lí phát biểu dưới dạng "Nếu A thì B", phần A được gọi là gì?',
        formula: '\\text{Nếu A thì B}',
        options: [
          { id: 'opt-c3-11-1a', text: 'Giả thiết (GT)', isCorrect: true },
          { id: 'opt-c3-11-1b', text: 'Kết luận (KL)', isCorrect: false },
          { id: 'opt-c3-11-1c', text: 'Chứng minh', isCorrect: false },
          { id: 'opt-c3-11-1d', text: 'Tiên đề', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-11-1a',
        progressiveHints: [
          'Phần nằm giữa từ "Nếu" và từ "thì" là điều đề bài cho trước.',
          'Điều cho trước gọi là Giả thiết (GT).'
        ],
        explanation: 'Trong cấu trúc "Nếu A thì B", mệnh đề A là Giả thiết (GT), mệnh đề B là Kết luận (KL).',
        competencyRef: 'lt-c3-11-1',
        points: 10
      },
      {
        id: 'q-c3-11-2',
        tier: 'nhan_biet',
        question: 'Xác định Kết luận (KL) của định lí: "Nếu hai góc đối đỉnh thì hai góc đó bằng nhau":',
        formula: '\\text{Định lí về góc đối đỉnh}',
        options: [
          { id: 'opt-c3-11-2a', text: 'Hai góc đó bằng nhau', isCorrect: true },
          { id: 'opt-c3-11-2b', text: 'Hai góc đối đỉnh', isCorrect: false },
          { id: 'opt-c3-11-2c', text: 'Hai góc kề bù', isCorrect: false },
          { id: 'opt-c3-11-2d', text: 'Hai góc có tổng bằng 180 độ', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-11-2a',
        progressiveHints: [
          'Kết luận là phần đứng sau từ "thì".',
          'Sau từ "thì" là: "hai góc đó bằng nhau".'
        ],
        explanation: 'Giả thiết là "hai góc đối đỉnh", Kết luận là "hai góc đó bằng nhau".',
        competencyRef: 'lt-c3-11-2',
        points: 10
      },
      {
        id: 'q-c3-11-3',
        tier: 'thong_hieu',
        question: 'Hoạt động nào sau đây được gọi là "Chứng minh một định lí"?',
        formula: '\\text{Chứng minh hình học}',
        options: [
          { id: 'opt-c3-11-3a', text: 'Dùng lập luận suy luận logic từ Giả thiết để suy ra Kết luận', isCorrect: true },
          { id: 'opt-c3-11-3b', text: 'Dùng thước đo độ đo góc trên giấy và thấy nó bằng nhau', isCorrect: false },
          { id: 'opt-c3-11-3c', text: 'Nhìn bằng mắt thường thấy đúng', isCorrect: false },
          { id: 'opt-c3-11-3d', text: 'Thừa nhận không cần lý giải', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-11-3a',
        progressiveHints: [
          'Hình học đòi hỏi sự chặt chẽ logic, không chấp nhận việc chỉ đo đạc bằng mắt hay thước.',
          'Chứng minh là dùng chuỗi suy luận logic từ những điều đã biết.'
        ],
        explanation: 'Chứng minh định lí là dùng lập luận suy luận logic chặt chẽ dựa trên giả thiết và các tiên đề, định lí đã học để khẳng định kết luận là đúng.',
        competencyRef: 'lt-c3-11-3',
        points: 10
      },
      {
        id: 'q-c3-11-4',
        tier: 'van_dung',
        question: 'Cho định lí: "Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia". Hãy chỉ ra Giả thiết (GT) chuẩn bằng kí hiệu:',
        formula: '\\text{Kí hiệu GT}',
        options: [
          { id: 'opt-c3-11-4a', text: 'a \\parallel b \\text{ và } c \\perp a', isCorrect: true },
          { id: 'opt-c3-11-4b', text: 'c \\perp b', isCorrect: false },
          { id: 'opt-c3-11-4c', text: 'a \\parallel b \\parallel c', isCorrect: false },
          { id: 'opt-c3-11-4d', text: 'a \\perp b', isCorrect: false }
        ],
        correctAnswerId: 'opt-c3-11-4a',
        progressiveHints: [
          'Đề bài cho: hai đường song song (a // b) và một đường vuông góc với a (c ⊥ a).',
          'Kết luận là c ⊥ b. Vậy phần cho trước chính là a // b và c ⊥ a.'
        ],
        explanation: 'GT là điều cho trước: hai đường thẳng song song (a // b) và đường thẳng c vuông góc với a (c ⊥ a). KL là c ⊥ b.',
        competencyRef: 'lt-c3-11-2',
        points: 10
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-c3-11-1',
        prompt: 'Bố hỏi con: "Trong toán học, một định lí thường có 2 phần chính là gì con nhỉ?"',
        contextForParent: 'Cấu trúc Giả thiết và Kết luận.',
        suggestedAnswerTip: 'Có 2 phần: Giả thiết (những điều cho trước) và Kết luận (điều cần phải chứng minh).',
        sampleChildResponse: 'Dạ có 2 phần: Giả thiết (GT - điều đã cho) và Kết luận (KL - điều cần suy ra) bố ạ!'
      },
      {
        id: 'dp-c3-11-2',
        prompt: 'Mẹ hỏi con: "Nếu con lấy thước đo thấy hai góc bằng nhau thì đã gọi là chứng minh định lí được chưa?"',
        contextForParent: 'Bản chất suy luận toán học khác biệt với đo đạc thực nghiệm.',
        suggestedAnswerTip: 'Chưa được! Đo đạc có thể bị sai số mắt nhìn, toán học bắt buộc phải dùng lý lẽ logic từng bước.',
        sampleChildResponse: 'Chưa được mẹ ơi! Thước đo có thể bị lệch, môn Toán bắt buộc phải dùng lập luận logic vì... nên... thì mới công nhận ạ!'
      },
      {
        id: 'dp-c3-11-3',
        prompt: 'Bố hỏi con: "Học cách chứng minh định lí giúp con rèn luyện được kỹ năng gì ngoài đời thực?"',
        contextForParent: 'Giá trị tư duy phản biện và lập luận thuyết phục trong cuộc sống.',
        suggestedAnswerTip: 'Giúp rèn tư duy nói có sách mách có chứng, lập luận chặt chẽ để thuyết phục người khác.',
        sampleChildResponse: 'Giúp con nói chuyện có lý lẽ thuyết phục, nói câu nào có bằng chứng câu đó chứ không nói bừa bố ạ!'
      }
    ]
  }
];
