import { Lesson } from '../types/curriculum';

// ============================================================================
// TOÁN 7 - BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (CHƯƠNG I: SỐ HỮU TỈ)
// ============================================================================

// BÀI 1: TẬP HỢP CÁC SỐ HỮU TỈ
export const lessonToanKNTTBai1: Lesson = {
  id: 'bai_1_tap_hop_cac_so_huu_ti',
  unitId: 'chuong_1_so_huu_ti',
  subjectId: 'toan',
  seriesId: 'ket-noi-tri-thuc',
  order: 1,
  title: 'Bài 1: Tập hợp các số hữu tỉ',
  subtitle: 'Chương I: Số hữu tỉ • Bộ sách Kết nối tri thức với cuộc sống',
  estimatedStudyTimeMinutes: 45,
  targetCompetencies: [
    {
      id: 'tc-kntt-01',
      level: 'biet',
      code: 'KNTT-01',
      description: 'Nhận biết được số hữu tỉ và lấy được ví dụ về số hữu tỉ.',
      mastered: true
    },
    {
      id: 'tc-kntt-02',
      level: 'hieu',
      code: 'KNTT-02',
      description: 'Biểu diễn được số hữu tỉ trên trục số.',
      mastered: true
    },
    {
      id: 'tc-kntt-03',
      level: 'hieu',
      code: 'KNTT-03',
      description: 'Biết biểu diễn số đối của một số hữu tỉ.',
      mastered: false
    },
    {
      id: 'tc-kntt-04',
      level: 'van-dung',
      code: 'KNTT-04',
      description: 'So sánh được hai số hữu tỉ bất kỳ.',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-kntt-1',
      title: 'Định nghĩa số hữu tỉ',
      summary: 'Số hữu tỉ là số viết được dưới dạng phân số \\frac{a}{b} với a, b \\in \\mathbb{Z} và b \\neq 0. Tập hợp các số hữu tỉ ký hiệu là \\mathbb{Q}.',
      mathFormula: '\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\;\\middle|\\; a, b \\in \\mathbb{Z},\\; b \\neq 0 \\right\\}',
      exampleSnippet: 'Ví dụ: $-0,6 = \\frac{-6}{10} = \\frac{-3}{5}; \\quad 1\\frac{1}{3} = \\frac{4}{3}; \\quad 0 = \\frac{0}{1}; \\quad -3 = \\frac{-3}{1}$. Mọi số nguyên, hỗn số, số thập phân đều là số hữu tỉ.',
      pitfallWarning: 'Lưu ý điều kiện quan trọng: Mẫu số b bắt buộc phải khác 0. Ví dụ số \\frac{5}{0} KHÔNG PHẢI là số hữu tỉ vì phép chia cho 0 không xác định!',
      realLifeApplication: 'Khi chia đều 4 chiếc bánh cho 3 bạn, mỗi bạn được \\frac{4}{3} chiếc bánh (hỗn số 1\\frac{1}{3}), đó là một số hữu tỉ.'
    },
    {
      id: 'kc-kntt-2',
      title: 'Biểu diễn trên trục số & Số đối',
      summary: 'Mỗi số hữu tỉ được biểu diễn bởi một điểm trên trục số. Các số hữu tỉ âm nằm về bên trái điểm 0, các số hữu tỉ dương nằm về bên phải điểm 0. Hai số hữu tỉ cách đều điểm 0 và nằm ở hai phía là hai số đối nhau.',
      mathFormula: '-\\left(-\\frac{a}{b}\\right) = \\frac{a}{b}; \\quad x + (-x) = 0',
      exampleSnippet: 'Điểm biểu diễn phân số $-\\frac{3}{4}$ nằm ở bên trái điểm 0 (giữa 0 và -1). Số đối của $-\\frac{3}{4}$ là $\\frac{3}{4}$.',
      pitfallWarning: 'Khi biểu diễn phân số có mẫu âm (ví dụ \\frac{3}{-4}), ta cần chuyển dấu trừ lên tử số: \\frac{-3}{4} để xác định đúng chiều trên trục số.',
      realLifeApplication: 'Mực nước biển quy ước là mốc 0. Đỉnh núi cao +1.200 m, rãnh biển sâu -800 m. Hai độ cao cách đều mốc 0 là hai đại lượng đối nhau.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-kntt-01',
      title: 'Luyện tập: Nhận biết & Vận dụng Số Hữu Tỉ',
      durationMinutes: 15,
      totalQuestions: 3,
      questions: [
        {
          id: 'q1',
          tier: 'multiple_choice',
          competencyRef: 'tc-kntt-01',
          questionText: 'Trong các số sau, số nào KHÔNG PHẢI là số hữu tỉ?',
          mathFormula: '',
          options: [
            { id: 'opt-1a', text: '-0,6', isCorrect: false },
            { id: 'opt-1b', text: '1\\frac{1}{3}', isCorrect: false },
            { id: 'opt-1c', text: '\\frac{5}{0}', isCorrect: true },
            { id: 'opt-1d', text: '0', isCorrect: false }
          ],
          hints: [
            'Nhớ lại điều kiện của mẫu số trong phân số a/b: b phải khác 0.',
            'Xét các số: -0,6 = -3/5, 1 1/3 = 4/3, 0 = 0/1. Còn 5/0 có mẫu số là bao nhiêu?'
          ],
          explanation: 'Số hữu tỉ là số viết được dưới dạng phân số \\frac{a}{b} với a, b \\in \\mathbb{Z} và b \\neq 0. Do mẫu số của \\frac{5}{0} bằng 0 (vi phạm điều kiện b \\neq 0) nên \\frac{5}{0} không xác định và KHÔNG PHẢI là số hữu tỉ.',
          points: 10
        },
        {
          id: 'q2-kntt-tf',
          tier: 'true_false',
          competencyRef: 'tc-kntt-02',
          questionText: 'Xét tính ĐÚNG hay SAI của các mệnh đề sau về biểu diễn số hữu tỉ trên trục số:',
          mathFormula: 'x = -\\frac{3}{4}, \\quad y = 1\\frac{1}{3}',
          tfItems: [
            {
              statement: 'Điểm biểu diễn phân số -3/4 trên trục số nằm về bên trái điểm gốc 0.',
              isTrue: true,
              explanation: 'Đúng, vì -3/4 là số hữu tỉ âm nên luôn nằm về phía bên trái điểm 0.'
            },
            {
              statement: 'Số đối của phân số -3/4 là 3/4 và điểm biểu diễn của nó nằm về bên phải điểm 0.',
              isTrue: true,
              explanation: 'Đúng, số đối của một số âm là số dương, nằm đối xứng qua gốc 0 về bên phải.'
            },
            {
              statement: 'Khoảng cách từ điểm -3/4 đến điểm 0 dài hơn khoảng cách từ điểm 1 1/3 đến điểm 0.',
              isTrue: false,
              explanation: 'Sai, |-3/4| = 0,75 còn |1 1/3| = 4/3 ≈ 1,33. Khoảng cách của 1 1/3 đến 0 lớn hơn.'
            },
            {
              statement: 'Số 0 là số hữu tỉ duy nhất có số đối bằng chính nó.',
              isTrue: true,
              explanation: 'Đúng, -0 = 0.'
            }
          ],
          hints: [
            'Quy ước trục số: Chiều từ trái sang phải là chiều dương.',
            'Khoảng cách từ một điểm đến điểm 0 chính là giá trị tuyệt đối của số đó.'
          ],
          explanation: 'Mọi số âm đều nằm bên trái điểm 0, mọi số dương nằm bên phải điểm 0. Hai số đối nhau cách đều điểm 0.',
          points: 15
        },
        {
          id: 'q3-kntt-sa',
          tier: 'short_answer',
          competencyRef: 'tc-kntt-04',
          questionText: 'Viết số đối của hỗn số -2\\frac{1}{4} dưới dạng phân số tối giản a/b:',
          mathFormula: 'x = -2\\frac{1}{4} = -\\frac{9}{4} \\implies -x = ?',
          acceptedAnswers: ['9/4', '9 / 4', '+9/4', '2.25'],
          placeholder: 'Nhập phân số tối giản, ví dụ: 9/4',
          hints: [
            'Bước 1: Đổi hỗn số -2 1/4 thành phân số: -(2*4 + 1)/4 = -9/4.',
            'Bước 2: Tìm số đối bằng cách đổi dấu trừ thành cộng.'
          ],
          explanation: 'Ta có -2\\frac{1}{4} = -\\frac{9}{4}. Số đối của -\\frac{9}{4} là \\frac{9}{4}.',
          points: 15
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Hôm nay con học số hữu tỉ, con giải thích nhanh cho mẹ số hữu tỉ khác số nguyên chỗ nào?',
      contextForParent: 'Giúp con ôn lại định nghĩa: Mọi số nguyên đều là số hữu tỉ (vì n = n/1), nhưng số hữu tỉ thì phong phú hơn vì còn chứa cả phân số, số thập phân và hỗn số.',
      suggestedFollowUp: 'Thế số -0,6 hay 1 1/3 có phải số hữu tỉ không con?',
      expectedChildTakeaway: 'Con giải thích được số hữu tỉ bao trùm cả số nguyên, số thập phân và phân số.'
    },
    {
      question: 'Một phân số như -3/4 biểu diễn trên trục số nằm bên trái hay bên phải số 0 hả con?',
      contextForParent: 'Kiểm tra xem con đã hình dung được trục số nằm ngang: Số âm luôn nằm về phía bên trái, số dương nằm về phía bên phải.',
      suggestedFollowUp: 'Thế số đối của -3/4 là số nào và nó nằm ở đâu trên trục số?',
      expectedChildTakeaway: 'Con trả lời tự tin: -3/4 là số âm nên nằm bên trái số 0, số đối của nó là 3/4 nằm bên phải số 0.'
    }
  ]
};

// BÀI 2: CỘNG, TRỪ, NHÂN, CHIA SỐ HỮU TỈ
export const lessonToanKNTTBai2: Lesson = {
  id: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
  unitId: 'chuong_1_so_huu_ti',
  subjectId: 'toan',
  seriesId: 'ket-noi-tri-thuc',
  order: 2,
  title: 'Bài 2: Cộng, trừ, nhân, chia số hữu tỉ',
  subtitle: 'Chương I: Số hữu tỉ • Bộ sách Kết nối tri thức với cuộc sống',
  estimatedStudyTimeMinutes: 45,
  targetCompetencies: [
    {
      id: 'tc-kntt-t02-1',
      level: 'hieu',
      code: 'KNTT-T02-01',
      description: 'Thực hiện thành thạo phép cộng và trừ số hữu tỉ bằng cách quy đồng mẫu số dương.',
      mastered: true
    },
    {
      id: 'tc-kntt-t02-2',
      level: 'hieu',
      code: 'KNTT-T02-02',
      description: 'Thực hiện phép nhân, chia số hữu tỉ và tìm số nghịch đảo.',
      mastered: true
    },
    {
      id: 'tc-kntt-t02-3',
      level: 'van-dung',
      code: 'KNTT-T02-03',
      description: 'Vận dụng tính chất giao hoán, kết hợp, phân phối để tính toán nhanh và hợp lý.',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-kntt-t02-1',
      title: 'Cộng và trừ số hữu tỉ',
      summary: 'Để cộng, trừ hai số hữu tỉ viết dưới dạng phân số, ta quy đồng mẫu số về cùng một mẫu số dương rồi cộng hoặc trừ tử số và giữ nguyên mẫu số.',
      mathFormula: '\\frac{a}{m} + \\frac{b}{m} = \\frac{a+b}{m}; \\quad \\frac{a}{m} - \\frac{b}{m} = \\frac{a-b}{m}',
      exampleSnippet: 'Tính: $-\\frac{2}{3} + \\frac{5}{6} = -\\frac{4}{6} + \\frac{5}{6} = \\frac{-4+5}{6} = \\frac{1}{6}.',
      pitfallWarning: 'Luôn đưa mẫu số về số nguyên dương trước khi tìm mẫu số chung!',
      realLifeApplication: 'Khi tính toán chi tiêu: thu nhập (+ tiền lương) cộng với các khoản chi phí (- tiền mua sắm).'
    },
    {
      id: 'kc-kntt-t02-2',
      title: 'Nhân, chia số hữu tỉ & Số nghịch đảo',
      summary: 'Muốn nhân hai số hữu tỉ, ta nhân các tử số với nhau và nhân các mẫu số với nhau. Muốn chia, ta lấy số bị chia nhân với số nghịch đảo của số chia.',
      mathFormula: '\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}; \\quad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} \\quad (c \\neq 0)',
      exampleSnippet: 'Số nghịch đảo của $-\\frac{3}{5}$ là $-\\frac{5}{3}$ vì $\\left(-\\frac{3}{5}\\right) \\cdot \\left(-\\frac{5}{3}\\right) = 1.$',
      pitfallWarning: 'Số 0 không có số nghịch đảo! Đừng nhầm số nghịch đảo với số đối: Số đối đổi dấu, còn số nghịch đảo đảo ngược tử và mẫu.',
      realLifeApplication: 'Chia đều quãng đường hoặc tính vận tốc $v = s : t$ khi đại lượng là phân số.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-kntt-02',
      title: 'Luyện tập: 4 Phép tính với số hữu tỉ',
      durationMinutes: 15,
      totalQuestions: 3,
      questions: [
        {
          id: 'q-t02-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-kntt-t02-1',
          questionText: 'Tính giá trị của phép tính: -\\frac{3}{4} + \\frac{1}{2}',
          mathFormula: '-\\frac{3}{4} + \\frac{1}{2} = ?',
          options: [
            { id: 'opt-2a', text: '-\\frac{1}{4}', isCorrect: true },
            { id: 'opt-2b', text: '\\frac{1}{4}', isCorrect: false },
            { id: 'opt-2c', text: '-\\frac{2}{6}', isCorrect: false },
            { id: 'opt-2d', text: '-\\frac{5}{4}', isCorrect: false }
          ],
          hints: [
            'Quy đồng mẫu số chung là 4: 1/2 = 2/4.',
            'Lấy (-3 + 2) / 4.'
          ],
          explanation: 'Ta có: -\\frac{3}{4} + \\frac{1}{2} = -\\frac{3}{4} + \\frac{2}{4} = \\frac{-3+2}{4} = -\\frac{1}{4}.',
          points: 10
        },
        {
          id: 'q-t02-2',
          tier: 'true_false',
          competencyRef: 'tc-kntt-t02-2',
          questionText: 'Xét tính ĐÚNG hay SAI của các phát biểu sau về phép nhân chia số hữu tỉ:',
          mathFormula: '',
          tfItems: [
            {
              statement: 'Tích của hai số hữu tỉ âm luôn là một số hữu tỉ dương.',
              isTrue: true,
              explanation: 'Đúng, quy tắc dấu: (-) * (-) = (+).'
            },
            {
              statement: 'Số nghịch đảo của phân số -2/7 là 7/2.',
              isTrue: false,
              explanation: 'Sai! Số nghịch đảo của -2/7 phải là -7/2 (giữ nguyên dấu âm).'
            },
            {
              statement: 'Số 0 là số hữu tỉ duy nhất không có số nghịch đảo.',
              isTrue: true,
              explanation: 'Đúng, vì không có số nào nhân với 0 bằng 1.'
            },
            {
              statement: 'Tính chất phân phối a*(b + c) = a*b + a*c áp dụng được cho mọi số hữu tỉ.',
              isTrue: true,
              explanation: 'Đúng, tính chất phân phối đúng trên toàn tập số hữu tỉ Q.'
            }
          ],
          hints: [
            'Lưu ý số nghịch đảo của số âm vẫn là số âm.',
            'Tích của hai số nghịch đảo luôn bằng 1.'
          ],
          explanation: 'Nhớ phân biệt rõ: Số đối có tổng bằng 0, số nghịch đảo có tích bằng 1.',
          points: 15
        },
        {
          id: 'q-t02-3',
          tier: 'short_answer',
          competencyRef: 'tc-kntt-t02-3',
          questionText: 'Tính nhanh giá trị biểu thức sau (nhập phân số tối giản a/b):',
          mathFormula: 'A = \\frac{4}{9} \\cdot \\left(-\\frac{3}{7}\\right) + \\frac{4}{9} \\cdot \\left(-\\frac{4}{7}\\right)',
          acceptedAnswers: ['-4/9', '- 4/9', '-4 / 9'],
          placeholder: 'Nhập kết quả, ví dụ: -4/9',
          hints: [
            'Đặt thừa số chung 4/9 ra ngoài: A = 4/9 * [(-3/7) + (-4/7)].',
            'Tính trong ngoặc vuông: (-3/7) + (-4/7) = -7/7 = -1.'
          ],
          explanation: 'Áp dụng tính chất phân phối: A = \\frac{4}{9} \\cdot \\left[ \\left(-\\frac{3}{7}\\right) + \\left(-\\frac{4}{7}\\right) \\right] = \\frac{4}{9} \\cdot (-1) = -\\frac{4}{9}.',
          points: 15
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Khi tính tiền đi chợ hoặc chia phần ăn, tại sao gộp các số tròn chục hoặc số đối nhau lại thì tính nhanh hơn nhiều hả con?',
      contextForParent: 'Giúp con thấy tính ứng dụng của tính chất giao hoán và kết hợp trong cuộc sống hàng ngày.',
      suggestedFollowUp: 'Hôm nay con có bài toán nào áp dụng tính chất phân phối đặt thừa số chung để tính nhẩm siêu tốc không?',
      expectedChildTakeaway: 'Con tự tin nói về tính chất phân phối a*(b+c) = a*b + a*c giúp tính nhẩm nhanh.'
    },
    {
      question: 'Số nghịch đảo của -2/3 là bao nhiêu con nhỉ? Có phải đổi dấu thành cộng không hay chỉ đảo ngược tử và mẫu?',
      contextForParent: 'Giúp con phân biệt chính xác giữa "số đối" (đổi dấu, tổng bằng 0) và "số nghịch đảo" (đảo ngược, tích bằng 1).',
      suggestedFollowUp: 'Thế số đối của -2/3 là gì và số nghịch đảo của nó là gì con phân biệt cho mẹ nghe nào!',
      expectedChildTakeaway: 'Con trả lời rành mạch: Số đối là 2/3, còn số nghịch đảo là -3/2 vì (-2/3)*(-3/2) = 1.'
    }
  ]
};

// BÀI 3: LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN CỦA MỘT SỐ HỮU TỈ
export const lessonToanKNTTBai3: Lesson = {
  id: 'bai_3_luy_thua_so_mu_tu_nhien',
  unitId: 'chuong_1_so_huu_ti',
  subjectId: 'toan',
  seriesId: 'ket-noi-tri-thuc',
  order: 3,
  title: 'Bài 3: Lũy thừa với số mũ tự nhiên của một số hữu tỉ',
  subtitle: 'Chương I: Số hữu tỉ • Bộ sách Kết nối tri thức với cuộc sống',
  estimatedStudyTimeMinutes: 45,
  targetCompetencies: [
    {
      id: 'tc-kntt-t03-1',
      level: 'biet',
      code: 'KNTT-T03-01',
      description: 'Nhận biết khái niệm lũy thừa bậc n của một số hữu tỉ với số mũ tự nhiên.',
      mastered: true
    },
    {
      id: 'tc-kntt-t03-2',
      level: 'hieu',
      code: 'KNTT-T03-02',
      description: 'Vận dụng các quy tắc nhân, chia hai lũy thừa cùng cơ số và lũy thừa của lũy thừa.',
      mastered: false
    },
    {
      id: 'tc-kntt-t03-3',
      level: 'van-dung',
      code: 'KNTT-T03-03',
      description: 'Vận dụng quy tắc lũy thừa của một tích và lũy thừa của một thương để tính toán.',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-kntt-t03-1',
      title: 'Định nghĩa & Quy ước lũy thừa',
      summary: 'Lũy thừa bậc n của số hữu tỉ x (kí hiệu x^n) là tích của n thừa số x. Với x khác 0, quy ước x^0 = 1 và x^1 = x.',
      mathFormula: 'x^n = \\underbrace{x \\cdot x \\cdots x}_{n \\text{ thừa số}} \\quad (x \\in \\mathbb{Q},\\; n \\in \\mathbb{N}^*); \\quad x^0 = 1',
      exampleSnippet: '$\\left(-\\frac{1}{2}\\right)^3 = \\left(-\\frac{1}{2}\\right) \\cdot \\left(-\\frac{1}{2}\\right) \\cdot \\left(-\\frac{1}{2}\\right) = -\\frac{1}{8}; \\quad \\left(-\\frac{1}{2}\\right)^2 = \\frac{1}{4}.$',
      pitfallWarning: 'Quy tắc dấu: Lũy thừa bậc chẵn của số âm luôn ra số DƯƠNG. Lũy thừa bậc lẻ của số âm luôn ra số ÂM!',
      realLifeApplication: 'Kích thước của tế bào, khoảng cách vũ trụ hay diện tích hình vuông cạnh x (S = x^2), thể tích hình lập phương (V = x^3).'
    },
    {
      id: 'kc-kntt-t03-2',
      title: 'Các quy tắc nhân, chia và lũy thừa của lũy thừa',
      summary: 'Khi nhân hai lũy thừa cùng cơ số, giữ nguyên cơ số và cộng số mũ. Khi chia, trừ số mũ. Lũy thừa của lũy thừa thì nhân hai số mũ.',
      mathFormula: 'x^m \\cdot x^n = x^{m+n}; \\quad x^m : x^n = x^{m-n}; \\quad (x^m)^n = x^{m \\cdot n}',
      exampleSnippet: '$(2^3)^2 = 2^{3 \\cdot 2} = 2^6 = 64; \\quad \\left(\\frac{1}{3}\\right)^5 : \\left(\\frac{1}{3}\\right)^3 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}.$',
      pitfallWarning: 'Đừng nhầm lẫn giữa (x^m)^n = x^(m*n) và x^m * x^n = x^(m+n)!',
      realLifeApplication: 'Trong công nghệ thông tin: 1 KB = 2^10 Bytes = 1024 Bytes, 1 MB = 2^20 Bytes.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-kntt-03',
      title: 'Luyện tập: Các công thức lũy thừa',
      durationMinutes: 15,
      totalQuestions: 3,
      questions: [
        {
          id: 'q-t03-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-kntt-t03-1',
          questionText: 'Tính giá trị của lũy thừa: (-0,5)^3',
          mathFormula: '(-0,5)^3 = ?',
          options: [
            { id: 'opt-3a', text: '-0,125', isCorrect: true },
            { id: 'opt-3b', text: '0,125', isCorrect: false },
            { id: 'opt-3c', text: '-1,5', isCorrect: false },
            { id: 'opt-3d', text: '-0,25', isCorrect: false }
          ],
          hints: [
            'Số mũ 3 là số mũ lẻ, cơ số âm (-0,5) mũ lẻ sẽ cho kết quả mang dấu âm.',
            '0,5 * 0,5 * 0,5 = 0,125.'
          ],
          explanation: 'Ta có (-0,5)^3 = (-0,5) * (-0,5) * (-0,5) = -0,125.',
          points: 10
        },
        {
          id: 'q-t03-2',
          tier: 'true_false',
          competencyRef: 'tc-kntt-t03-2',
          questionText: 'Đánh giá tính ĐÚNG hay SAI của các công thức lũy thừa sau:',
          mathFormula: '',
          tfItems: [
            {
              statement: '(-1)^2026 = 1 (vì 2026 là số chẵn).',
              isTrue: true,
              explanation: 'Đúng, số -1 mũ chẵn luôn bằng 1.'
            },
            {
              statement: '(-1)^2027 = 1.',
              isTrue: false,
              explanation: 'Sai! 2027 là số lẻ nên (-1)^2027 = -1.'
            },
            {
              statement: '(x^2)^4 = x^8 với mọi số hữu tỉ x.',
              isTrue: true,
              explanation: 'Đúng, áp dụng công thức (x^m)^n = x^(m*n) = x^(2*4) = x^8.'
            },
            {
              statement: 'x^5 : x^2 = x^(5/2).',
              isTrue: false,
              explanation: 'Sai! Quy tắc chia hai lũy thừa cùng cơ số là trừ số mũ: x^5 : x^2 = x^(5-2) = x^3.'
            }
          ],
          hints: [
            'Nhớ quy tắc: nhân thì cộng mũ, chia thì trừ mũ, lũy thừa tầng thì nhân mũ.'
          ],
          explanation: 'Ghi nhớ công thức cốt lõi: x^m * x^n = x^(m+n); x^m : x^n = x^(m-n); (x^m)^n = x^(m*n).',
          points: 15
        },
        {
          id: 'q-t03-3',
          tier: 'short_answer',
          competencyRef: 'tc-kntt-t03-3',
          questionText: 'Tìm số hữu tỉ dương x thỏa mãn: x^2 = 9/16 (nhập phân số tối giản dạng a/b):',
          mathFormula: 'x^2 = \\frac{9}{16} \\quad (x > 0)',
          acceptedAnswers: ['3/4', '3 / 4', '0.75'],
          placeholder: 'Nhập phân số, ví dụ: 3/4',
          hints: [
            'Số nào bình phương lên bằng 9? Đó là 3.',
            'Số nào bình phương lên bằng 16? Đó là 4.',
            'Vậy x = 3/4.'
          ],
          explanation: 'Vì (3/4)^2 = 9/16 và x là số dương nên x = 3/4.',
          points: 15
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Số âm mũ chẵn thì ra số dương hay số âm con nhỉ? Ví dụ (-2)^2 với (-2)^3 khác nhau thế nào?',
      contextForParent: 'Kiểm tra xem con đã nắm vững quy tắc cơ bản: số âm mũ chẵn ra dương, số âm mũ lẻ ra âm.',
      suggestedFollowUp: 'Thế (-1) mũ 100 bằng bao nhiêu con nhẩm ngay được không?',
      expectedChildTakeaway: 'Con vui vẻ nhẩm ngay: Mũ 100 là chẵn nên bằng +1, mũ lẻ mới ra -1!'
    },
    {
      question: 'Con có biết khoảng cách từ Trái Đất đến Mặt Trời hay kích thước vi khuẩn được viết gọn bằng số mũ thế nào không?',
      contextForParent: 'Kích thích con thấy vai trò của lũy thừa cơ số 10 trong khoa học thực tế.',
      suggestedFollowUp: '10 mũ 6 là bao nhiêu con nhỉ? Có phải là 1 triệu không?',
      expectedChildTakeaway: 'Con chia sẻ về số mũ giúp ghi ngắn gọn các con số hàng triệu, hàng tỷ.'
    }
  ]
};

// BÀI 4: THỨ TỰ THỰC HIỆN CÁC PHÉP TÍNH. QUY TẮC CHUYỂN VẾ
export const lessonToanKNTTBai4: Lesson = {
  id: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
  unitId: 'chuong_1_so_huu_ti',
  subjectId: 'toan',
  seriesId: 'ket-noi-tri-thuc',
  order: 4,
  title: 'Bài 4: Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
  subtitle: 'Chương I: Số hữu tỉ • Bộ sách Kết nối tri thức với cuộc sống',
  estimatedStudyTimeMinutes: 45,
  targetCompetencies: [
    {
      id: 'tc-kntt-t04-1',
      level: 'biet',
      code: 'KNTT-T04-01',
      description: 'Nắm vững thứ tự ưu tiên các phép tính và quy tắc dấu ngoặc khi thực hiện phép tính.',
      mastered: true
    },
    {
      id: 'tc-kntt-t04-2',
      level: 'van-dung',
      code: 'KNTT-T04-02',
      description: 'Vận dụng thành thạo quy tắc chuyển vế đổi dấu để giải bài toán tìm x trong đẳng thức.',
      mastered: false
    },
    {
      id: 'tc-kntt-t04-3',
      level: 'van-dung-cao',
      code: 'KNTT-T04-03',
      description: 'Vận dụng giải các bài toán thực tế (bài toán nhiệt độ, bài toán quản lý tài chính).',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-kntt-t04-1',
      title: 'Thứ tự thực hiện các phép tính',
      summary: 'Với biểu thức không có ngoặc: Lũy thừa -> Nhân và chia -> Cộng và trừ. Với biểu thức có ngoặc: Ngoặc tròn () -> Ngoặc vuông [] -> Ngoặc nhọn {}.',
      mathFormula: '() \\longrightarrow [] \\longrightarrow \\{\\} \\quad | \\quad x^n \\longrightarrow (\\times, \\div) \\longrightarrow (+, -)',
      exampleSnippet: 'Tính: $2 \\cdot \\left(-\\frac{1}{2}\\right)^2 + \\frac{1}{4} = 2 \\cdot \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4}.$',
      pitfallWarning: 'Không được thực hiện phép cộng trừ trước phép nhân chia khi không có dấu ngoặc!',
      realLifeApplication: 'Thứ tự tính toán khi lập công thức bảng tính Excel trong máy tính.'
    },
    {
      id: 'kc-kntt-t04-2',
      title: 'Quy tắc chuyển vế',
      summary: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu cộng (+) đổi thành dấu trừ (-), và dấu trừ (-) đổi thành dấu cộng (+).',
      mathFormula: 'A + B = C \\iff A = C - B; \\quad A - B = C \\iff A = C + B',
      exampleSnippet: 'Tìm x: $x + \\frac{1}{3} = \\frac{4}{5} \\implies x = \\frac{4}{5} - \\frac{1}{3} = \\frac{12-5}{15} = \\frac{7}{15}.$',
      pitfallWarning: 'Bẫy kinh điển: Chuyển vế mà quên đổi dấu! "Chuyển vế thì phải đổi dấu".',
      realLifeApplication: 'Mô hình chiếc cân thăng bằng: Lấy một vật ở đĩa bên này thì phải trừ bớt ở đĩa bên kia.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-kntt-04',
      title: 'Luyện tập: Chuyển vế & Thứ tự phép tính',
      durationMinutes: 15,
      totalQuestions: 3,
      questions: [
        {
          id: 'q-t04-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-kntt-t04-1',
          questionText: 'Trong biểu thức: A = 1/2 + 3/4 * (1/3)^2, phép tính nào cần thực hiện ĐẦU TIÊN?',
          mathFormula: '',
          options: [
            { id: 'opt-4a', text: 'Phép lũy thừa (1/3)^2', isCorrect: true },
            { id: 'opt-4b', text: 'Phép cộng 1/2 + 3/4', isCorrect: false },
            { id: 'opt-4c', text: 'Phép nhân 3/4 * (1/3)', isCorrect: false },
            { id: 'opt-4d', text: 'Tùy ý thực hiện phép nào trước cũng được', isCorrect: false }
          ],
          hints: [
            'Nhớ khẩu quyết: Lũy thừa trước, nhân chia sau, cộng trừ cuối cùng.'
          ],
          explanation: 'Theo thứ tự ưu tiên, phép lũy thừa (1/3)^2 phải được tính trước tiên thành 1/9, sau đó đến phép nhân và cuối cùng là cộng.',
          points: 10
        },
        {
          id: 'q-t04-2',
          tier: 'true_false',
          competencyRef: 'tc-kntt-t04-2',
          questionText: 'Xét tính ĐÚNG hay SAI của các thao tác biến đổi đẳng thức sau:',
          mathFormula: '',
          tfItems: [
            {
              statement: 'Nếu x - 2/5 = 1/3 thì x = 1/3 + 2/5.',
              isTrue: true,
              explanation: 'Đúng, chuyển -2/5 sang vế phải thành +2/5.'
            },
            {
              statement: 'Nếu x + 3/7 = -1/2 thì x = -1/2 + 3/7.',
              isTrue: false,
              explanation: 'Sai! Chuyển +3/7 sang vế phải phải đổi dấu thành -3/7.'
            },
            {
              statement: 'Bỏ dấu ngoặc có dấu trừ đằng trước -(a - b + c) = -a + b - c.',
              isTrue: true,
              explanation: 'Đúng, quy tắc đổi dấu toàn bộ các số hạng bên trong.'
            },
            {
              statement: 'Khi nhân cả hai vế với một số khác 0 thì đẳng thức vẫn giữ nguyên.',
              isTrue: true,
              explanation: 'Đúng, tính chất đẳng thức toán học.'
            }
          ],
          hints: [
            'Chuyển vế nhớ đổi dấu: cộng thành trừ, trừ thành cộng.'
          ],
          explanation: 'Quy tắc chuyển vế: Luôn luôn đổi dấu số hạng được chuyển.',
          points: 15
        },
        {
          id: 'q-t04-3',
          tier: 'short_answer',
          competencyRef: 'tc-kntt-t04-2',
          questionText: 'Tìm giá trị của x trong đẳng thức: x - 1/4 = -2/3 (nhập phân số tối giản a/b):',
          mathFormula: 'x - \\frac{1}{4} = -\\frac{2}{3}',
          acceptedAnswers: ['-5/12', '- 5/12', '-5 / 12'],
          placeholder: 'Nhập phân số, ví dụ: -5/12',
          hints: [
            'Chuyển -1/4 sang vế phải: x = -2/3 + 1/4.',
            'Quy đồng mẫu 12: -2/3 = -8/12, 1/4 = 3/12. Ta có x = (-8 + 3)/12.'
          ],
          explanation: 'Ta có x = -\\frac{2}{3} + \\frac{1}{4} = -\\frac{8}{12} + \\frac{3}{12} = -\\frac{5}{12}.',
          points: 15
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Quy tắc chuyển vế giống như chiếc cân đĩa thăng bằng thế nào hả con?',
      contextForParent: 'Giúp con giải thích trực quan: Khi bớt một quả cân ở đĩa trái thì phải thêm hoặc bù trừ ở đĩa phải để cân vẫn thăng bằng.',
      suggestedFollowUp: 'Khi chuyển một số qua dấu bằng thì bắt buộc phải làm thao tác gì với dấu của nó?',
      expectedChildTakeaway: 'Con nhắc to câu khẩu quyết: "Chuyển vế thì phải đổi dấu!".'
    },
    {
      question: 'Trước dấu ngoặc có dấu trừ mà mở ngoặc ra thì các số hạng bên trong phải làm gì con nhỉ?',
      contextForParent: 'Kiểm tra quy tắc bỏ dấu ngoặc: -(a - b) = -a + b.',
      suggestedFollowUp: 'Có khi nào con quên đổi dấu số hạng thứ 2 không?',
      expectedChildTakeaway: 'Con nhớ phản xạ đổi dấu toàn bộ: cộng thành trừ, trừ thành cộng.'
    }
  ]
};

// BÀI 5: LUYỆN TẬP CHUNG & ÔN TẬP CHƯƠNG I
export const lessonToanKNTTBai5: Lesson = {
  id: 'bai_5_luyen_tap_chung_chuong_1',
  unitId: 'chuong_1_so_huu_ti',
  subjectId: 'toan',
  seriesId: 'ket-noi-tri-thuc',
  order: 5,
  title: 'Luyện tập chung & Bài tập cuối Chương I',
  subtitle: 'Chương I: Số hữu tỉ • Bộ sách Kết nối tri thức với cuộc sống',
  estimatedStudyTimeMinutes: 50,
  targetCompetencies: [
    {
      id: 'tc-kntt-t05-1',
      level: 'van-dung',
      code: 'KNTT-T05-01',
      description: 'Hệ thống hóa toàn bộ kiến thức Chương I: tập hợp Q, 4 phép tính, lũy thừa và quy tắc chuyển vế.',
      mastered: false
    },
    {
      id: 'tc-kntt-t05-2',
      level: 'van-dung-cao',
      code: 'KNTT-T05-02',
      description: 'Vận dụng giải quyết các bài toán thực tế tổng hợp (lãi suất ngân hàng, vận tốc, chi tiêu).',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-kntt-t05-1',
      title: 'Sơ đồ tư duy toàn bộ Chương I: Số hữu tỉ',
      summary: 'Chương I gồm 4 trụ cột: 1. Định nghĩa số hữu tỉ a/b và trục số; 2. Bốn phép tính cộng, trừ, nhân, chia; 3. Lũy thừa với số mũ tự nhiên; 4. Thứ tự phép tính & quy tắc chuyển vế.',
      mathFormula: '\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}; \\quad x^m \\cdot x^n = x^{m+n}; \\quad A + B = C \\iff A = C - B',
      exampleSnippet: 'Bài toán thực tế: Bác An gửi tiết kiệm 50 triệu đồng kì hạn 1 năm với lãi suất 6.5%/năm. Số tiền lãi sau 1 năm là 50 * 6.5% = 3.25 triệu đồng.',
      realLifeApplication: 'Ứng dụng trong việc quản lý chi tiêu gia đình, tính lãi suất tiết kiệm, so sánh các khoản giảm giá.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-kntt-05',
      title: 'Luyện tập tổng hợp: Chinh phục Chương I',
      durationMinutes: 20,
      totalQuestions: 2,
      questions: [
        {
          id: 'q-t05-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-kntt-t05-1',
          questionText: 'Khẳng định nào sau đây là SAI khi nói về tập hợp số hữu tỉ Q?',
          mathFormula: '',
          options: [
            { id: 'opt-5a', text: 'Mọi số nguyên đều là số hữu tỉ.', isCorrect: false },
            { id: 'opt-5b', text: 'Số 0 là số hữu tỉ dương.', isCorrect: true },
            { id: 'opt-5c', text: 'Phân số có mẫu khác 0 luôn biểu diễn một số hữu tỉ.', isCorrect: false },
            { id: 'opt-5d', text: 'Hai số hữu tỉ đối nhau có tổng bằng 0.', isCorrect: false }
          ],
          hints: [
            'Số 0 không phải là số hữu tỉ dương, cũng không phải là số hữu tỉ âm!'
          ],
          explanation: 'Số 0 là số hữu tỉ đặc biệt: 0 không phải số hữu tỉ dương và cũng không phải số hữu tỉ âm. Do đó khẳng định B là SAI.',
          points: 10
        },
        {
          id: 'q-t05-2',
          tier: 'short_answer',
          competencyRef: 'tc-kntt-t05-2',
          questionText: 'Tính giá trị biểu thức: B = (1/2)^2 - 3/4 + 1/2 (nhập kết quả dạng số thập phân hoặc phân số tối giản):',
          mathFormula: 'B = \\left(\\frac{1}{2}\\right)^2 - \\frac{3}{4} + \\frac{1}{2}',
          acceptedAnswers: ['0', '0/1', '0.0'],
          placeholder: 'Nhập kết quả, ví dụ: 0',
          hints: [
            '(1/2)^2 = 1/4.',
            'B = 1/4 - 3/4 + 1/2 = -2/4 + 1/2 = -1/2 + 1/2 = 0.'
          ],
          explanation: 'Ta có B = \\frac{1}{4} - \\frac{3}{4} + \\frac{1}{2} = -\\frac{2}{4} + \\frac{2}{4} = 0.',
          points: 15
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Học xong cả Chương I Số hữu tỉ, con thấy phần nào thú vị nhất và phần nào dễ bị lừa nhất?',
      contextForParent: 'Lắng nghe con tự đánh giá năng lực của mình, tạo không khí cởi mở và khen ngợi nỗ lực của con.',
      suggestedFollowUp: 'Con đã nắm chắc 100% quy tắc chuyển vế đổi dấu chưa?',
      expectedChildTakeaway: 'Con tự hào tổng kết lại những gì đã học và cảm thấy tự tin bước vào chương tiếp theo.'
    }
  ]
};

// ============================================================================
// KHTN 7 - BỘ SÁCH KẾT NỐI TRI THỨC VỚI CUỘC SỐNG (CHƯƠNG I: NGUYÊN TỬ)
// ============================================================================

// BÀI 1 KHTN: PHƯƠNG PHÁP VÀ KĨ NĂNG HỌC TẬP KHTN
export const lessonKHTNKNTTBai1: Lesson = {
  id: 'khtn7-bai-1-phuong-phap-hoc-tap',
  unitId: 'unit-khtn-ch1',
  subjectId: 'khtn',
  seriesId: 'ket-noi-tri-thuc',
  order: 1,
  title: 'Bài 1: Phương pháp và kĩ năng học tập môn Khoa học tự nhiên',
  subtitle: 'Chương I: Nguyên tử - Bảng tuần hoàn • Bộ sách Kết nối tri thức',
  estimatedStudyTimeMinutes: 35,
  targetCompetencies: [
    {
      id: 'tc-khtn-b1-1',
      level: 'biet',
      code: 'KHTN-B01-01',
      description: 'Trình bày được các bước trong tiến trình tìm hiểu tự nhiên (quan sát, đặt câu hỏi, giả thuyết, thí nghiệm, kết luận).',
      mastered: true
    },
    {
      id: 'tc-khtn-b1-2',
      level: 'hieu',
      code: 'KHTN-B01-02',
      description: 'Thực hiện được các kĩ năng cơ bản: quan sát, phân loại, liên hệ, đo đạc, dự đoán.',
      mastered: true
    }
  ],
  keyConcepts: [
    {
      id: 'kc-khtn-b1',
      title: 'Tiến trình tìm hiểu tự nhiên',
      summary: 'Tiến trình tìm hiểu tự nhiên gồm 5 bước: 1. Quan sát và đặt câu hỏi; 2. Đề xuất giả thuyết; 3. Lập kế hoạch kiểm tra giả thuyết; 4. Thực hiện kế hoạch (làm thí nghiệm, thu thập số liệu); 5. Viết báo cáo và thảo luận kết luận.',
      realLifeApplication: 'Phương pháp khoa học này giúp giải quyết mọi vấn đề trong cuộc sống: Từ việc tìm nguyên nhân cây bị héo đến sửa bóng đèn bị hỏng.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-khtn-b01',
      title: 'Luyện tập: Phương pháp nghiên cứu KHTN',
      durationMinutes: 10,
      totalQuestions: 2,
      questions: [
        {
          id: 'q-k01-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-khtn-b1-1',
          questionText: 'Bước đầu tiên trong tiến trình tìm hiểu tự nhiên là gì?',
          options: [
            { id: 'k-opt-1a', text: 'Quan sát và đặt câu hỏi nghiên cứu', isCorrect: true },
            { id: 'k-opt-1b', text: 'Lập tức làm thí nghiệm', isCorrect: false },
            { id: 'k-opt-1c', text: 'Viết báo cáo kết quả', isCorrect: false },
            { id: 'k-opt-1d', text: 'Đưa ra kết luận cuối cùng', isCorrect: false }
          ],
          hints: ['Mọi khám phá khoa học đều bắt đầu từ sự tò mò khi quan sát thế giới xung quanh.'],
          explanation: 'Bước khởi đầu của mọi nghiên cứu khoa học luôn là quan sát hiện tượng tự nhiên và đặt ra câu hỏi cần tìm hiểu.',
          points: 10
        },
        {
          id: 'q-k01-2',
          tier: 'true_false',
          competencyRef: 'tc-khtn-b1-2',
          questionText: 'Xét tính ĐÚNG hay SAI của các phát biểu sau về kĩ năng đo lường trong KHTN:',
          tfItems: [
            {
              statement: 'Khi đo chiều dài hay thể tích, cần ước lượng trước giá trị để chọn dụng cụ đo phù hợp.',
              isTrue: true,
              explanation: 'Đúng, ước lượng giúp chọn thước hoặc bình đo có giới hạn đo và độ chia nhỏ nhất thích hợp.'
            },
            {
              statement: 'Chỉ cần đo một lần duy nhất là kết quả luôn tuyệt đối chính xác.',
              isTrue: false,
              explanation: 'Sai! Cần đo nhiều lần và tính giá trị trung bình để giảm thiểu sai số.'
            }
          ],
          hints: ['Để có kết quả tin cậy, các nhà khoa học thường đo lặp lại.'],
          explanation: 'Đo lặp lại nhiều lần giúp loại bỏ sai số ngẫu nhiên.',
          points: 10
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Hôm nay học về các bước làm nghiên cứu khoa học, con thấy bước nào quan trọng nhất?',
      contextForParent: 'Giúp con thấy sự tò mò và dám đặt câu hỏi là khởi nguồn của tri thức.',
      suggestedFollowUp: 'Ở nhà mình có hiện tượng gì con muốn làm thí nghiệm kiểm chứng không?',
      expectedChildTakeaway: 'Con hào hứng chia sẻ về việc đặt câu hỏi "Tại sao" và cách lên kế hoạch thử nghiệm.'
    }
  ]
};

// BÀI 2 KHTN: NGUYÊN TỬ (KẾT NỐI TRI THỨC)
export const lessonKHTNKNTTBai2: Lesson = {
  id: 'khtn7-nguyen-tu-nguyen-to',
  unitId: 'unit-khtn-ch1',
  subjectId: 'khtn',
  seriesId: 'ket-noi-tri-thuc',
  order: 2,
  title: 'Bài 2: Nguyên tử',
  subtitle: 'Chương I: Nguyên tử - Bảng tuần hoàn • Bộ sách Kết nối tri thức',
  estimatedStudyTimeMinutes: 40,
  targetCompetencies: [
    {
      id: 'tc-khtn-01',
      level: 'biet',
      code: 'KHTN-01',
      description: 'Trình bày được mô hình nguyên tử Rutherford - Bohr (hạt nhân ở trung tâm, electron quay trên các quỹ đạo xác định).',
      mastered: true
    },
    {
      id: 'tc-khtn-02',
      level: 'hieu',
      code: 'KHTN-02',
      description: 'Nêu được khối lượng nguyên tử tính theo đơn vị amu và giải thích vì sao khối lượng nguyên tử hầu như tập trung ở hạt nhân.',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-k1',
      title: 'Mô hình nguyên tử Rutherford - Bohr',
      summary: 'Nguyên tử là hạt vô cùng nhỏ bé và trung hòa về điện. Nguyên tử gồm hạt nhân mang điện tích dương nằm ở tâm và lớp vỏ gồm các electron mang điện tích âm chuyển động xung quanh.',
      mathFormula: '\\text{Số proton } (p^+) = \\text{Số electron } (e^-) \\implies \\text{Trung hòa điện}',
      exampleSnippet: 'Ví dụ: Nguyên tử Carbon có 6 proton trong hạt nhân thì lớp vỏ của nó cũng có đúng 6 electron. Điện tích: (+6) + (-6) = 0.',
      pitfallWarning: 'Hạt nhân gồm proton (+) và neutron (không mang điện). Electron chỉ ở ngoài vỏ!',
      realLifeApplication: 'Mô hình nguyên tử giống hệt Hệ Mặt Trời thu nhỏ: hạt nhân là Mặt Trời, electron là các hành tinh.'
    },
    {
      id: 'kc-k2',
      title: 'Khối lượng nguyên tử & Đơn vị amu',
      summary: 'Khối lượng của proton và neutron xấp xỉ bằng nhau (khoảng 1 amu). Khối lượng electron rất nhỏ bé (khoảng 0.00055 amu). Vì vậy khối lượng nguyên tử được coi bằng khối lượng của hạt nhân.',
      mathFormula: 'm_{\\text{nguyên tử}} \\approx m_{\\text{hạt nhân}} = m_p + m_n \\;(\\text{amu})',
      exampleSnippet: 'Nguyên tử Nhôm (Al) có 13p, 14n. Khối lượng nguyên tử xấp xỉ là 13 + 14 = 27 amu.',
      pitfallWarning: 'Electron quá nhẹ nên luôn bỏ qua khi tính khối lượng nguyên tử!',
      realLifeApplication: '1 amu = 1.6605 \\times 10^{-24} g giúp các nhà khoa học không phải ghi những con số 0 dài dằng dặc.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-khtn-01',
      title: 'Luyện tập: Cấu trúc vi mô của nguyên tử',
      durationMinutes: 15,
      totalQuestions: 2,
      questions: [
        {
          id: 'q-khtn-mc-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-khtn-01',
          questionText: 'Trong nguyên tử, loại hạt nào sau đây mang điện tích âm và chuyển động ở lớp vỏ xung quanh hạt nhân?',
          options: [
            { id: 'k-opt-a', text: 'Hạt proton (kí hiệu là p)', isCorrect: false },
            { id: 'k-opt-b', text: 'Hạt neutron (kí hiệu là n)', isCorrect: false },
            { id: 'k-opt-c', text: 'Hạt electron (kí hiệu là e)', isCorrect: true },
            { id: 'k-opt-d', text: 'Hạt nhân nguyên tử', isCorrect: false }
          ],
          hints: ['Nhớ lại 3 loại hạt: p (+), n (0), e (-).'],
          explanation: 'Hạt electron (e) mang điện tích âm và chuyển động nhanh xung quanh hạt nhân.',
          points: 10
        },
        {
          id: 'q-khtn-tf-1',
          tier: 'true_false',
          competencyRef: 'tc-khtn-02',
          questionText: 'Cho biết nguyên tử Magnesium (Mg) có 12p, 12n và 12e. Đánh giá tính ĐÚNG / SAI:',
          tfItems: [
            {
              statement: 'Điện tích hạt nhân của nguyên tử Magnesium là +12.',
              isTrue: true,
              explanation: 'Đúng, hạt nhân có 12 hạt proton mang điện tích dương.'
            },
            {
              statement: 'Khối lượng của nguyên tử Magnesium xấp xỉ bằng 24 amu.',
              isTrue: true,
              explanation: 'Đúng, m ≈ p + n = 12 + 12 = 24 amu.'
            }
          ],
          hints: ['Khối lượng hạt nhân tập trung hơn 99.9% khối lượng nguyên tử.'],
          explanation: 'Khối lượng nguyên tử xấp xỉ bằng tổng khối lượng proton và neutron.',
          points: 10
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Con có biết cơ thể chúng mình hay cái thìa, cái bát cơm này nếu phóng to hàng tỷ lần thì gồm những hạt siêu nhỏ gì không?',
      contextForParent: 'Tạo sự tò mò kích thích trí tưởng tượng của con về cấu trúc vi mô của vạn vật.',
      suggestedFollowUp: 'Thế nguyên tử có những loại hạt gì bên trong hả con?',
      expectedChildTakeaway: 'Con hứng thú kể về 3 loại hạt: proton, neutron và electron.'
    },
    {
      question: 'Mẹ thấy nguyên tử có hạt nhân mang điện dương, electron mang điện âm, thế tại sao khi hai mẹ con chạm vào nhau lại không bị điện giật?',
      contextForParent: 'Củng cố khái niệm "nguyên tử trung hòa về điện" (số p = số e).',
      suggestedFollowUp: 'À ra là cộng trừ triệt tiêu bằng 0 đúng không con?',
      expectedChildTakeaway: 'Con giải thích được tính chất trung hòa điện một cách dễ hiểu.'
    }
  ]
};

// BÀI 3 KHTN: NGUYÊN TỐ HÓA HỌC (KẾT NỐI TRI THỨC)
export const lessonKHTNKNTTBai3: Lesson = {
  id: 'khtn7-bai-3-nguyen-to-hoa-hoc',
  unitId: 'unit-khtn-ch1',
  subjectId: 'khtn',
  seriesId: 'ket-noi-tri-thuc',
  order: 3,
  title: 'Bài 3: Nguyên tố hóa học',
  subtitle: 'Chương I: Nguyên tử - Bảng tuần hoàn • Bộ sách Kết nối tri thức',
  estimatedStudyTimeMinutes: 40,
  targetCompetencies: [
    {
      id: 'tc-khtn-b3-1',
      level: 'biet',
      code: 'KHTN-B03-01',
      description: 'Nêu được khái niệm nguyên tố hóa học là tập hợp các nguyên tử cùng loại có cùng số proton trong hạt nhân.',
      mastered: true
    },
    {
      id: 'tc-khtn-b3-2',
      level: 'van-dung',
      code: 'KHTN-B03-02',
      description: 'Đọc và viết đúng kí hiệu hóa học của các nguyên tố thông dụng (H, C, O, N, Na, Al, Fe, Cu...).',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-khtn-b3',
      title: 'Nguyên tố hóa học & Kí hiệu hóa học',
      summary: 'Nguyên tố hóa học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân. Mỗi nguyên tố được biểu diễn bằng một hoặc hai chữ cái (chữ đầu viết hoa, chữ thứ hai viết thường).',
      mathFormula: '\\text{Số } p \\text{ là số đặc trưng quyết định tên nguyên tố hóa học}',
      exampleSnippet: 'Hydrogen (H), Oxygen (O), Carbon (C), Nitrogen (N), Sodium (Na), Iron (Fe), Copper (Cu).',
      pitfallWarning: 'Quy tắc chính tả quốc tế: Chữ thứ hai BẮT BUỘC viết thường! Co là Cobalt, còn CO là khí Carbon Monoxide cực độc!',
      realLifeApplication: 'Canxi (Ca) trong xương và sữa, Sắt (Fe) trong tế bào hồng cầu máu, Clo (Cl) khử khuẩn nước sinh hoạt.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-khtn-b03',
      title: 'Luyện tập: Kí hiệu hóa học',
      durationMinutes: 10,
      totalQuestions: 2,
      questions: [
        {
          id: 'q-k03-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-khtn-b3-1',
          questionText: 'Đặc trưng cơ bản nhất để xác định hai nguyên tử có cùng thuộc về một nguyên tố hóa học hay không là gì?',
          options: [
            { id: 'k-opt-3a', text: 'Số hạt proton trong hạt nhân', isCorrect: true },
            { id: 'k-opt-3b', text: 'Số hạt neutron trong hạt nhân', isCorrect: false },
            { id: 'k-opt-3c', text: 'Số hạt electron ở lớp vỏ', isCorrect: false },
            { id: 'k-opt-3d', text: 'Màu sắc của nguyên tử', isCorrect: false }
          ],
          hints: ['Tất cả nguyên tử có cùng số proton thì thuộc cùng một nguyên tố.'],
          explanation: 'Số proton là số đặc trưng của nguyên tố hóa học.',
          points: 10
        },
        {
          id: 'q-k03-2',
          tier: 'short_answer',
          competencyRef: 'tc-khtn-b3-2',
          questionText: 'Viết kí hiệu hóa học của nguyên tố Sắt (Iron):',
          acceptedAnswers: ['Fe', 'fe'],
          placeholder: 'Nhập kí hiệu, ví dụ: Fe',
          hints: ['Tên tiếng Latin là Ferrum, gồm 2 chữ cái F và e.'],
          explanation: 'Kí hiệu của nguyên tố Sắt là Fe.',
          points: 10
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Hôm nay mẹ đọc báo thấy nói về Canxi trong sữa (Ca), Sắt trong thịt bò (Fe). Ở lớp thầy cô đã dạy con nhớ kí hiệu hóa học của những chất này chưa?',
      contextForParent: 'Giúp con thấy KHTN gắn liền với dinh dưỡng và sức khỏe.',
      suggestedFollowUp: 'Muối ăn hàng ngày bố/mẹ nấu có nguyên tố gì con nhỉ? Kí hiệu là gì?',
      expectedChildTakeaway: 'Con tự hào kể về Na (Sodium) và Cl (Chlorine) tạo thành muối ăn NaCl.'
    }
  ]
};

// BÀI 4 KHTN: SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC
export const lessonKHTNKNTTBai4: Lesson = {
  id: 'khtn7-bai-4-bang-tuan-hoan',
  unitId: 'unit-khtn-ch1',
  subjectId: 'khtn',
  seriesId: 'ket-noi-tri-thuc',
  order: 4,
  title: 'Bài 4: Sơ lược về Bảng tuần hoàn các nguyên tố hóa học',
  subtitle: 'Chương I: Nguyên tử - Bảng tuần hoàn • Bộ sách Kết nối tri thức',
  estimatedStudyTimeMinutes: 45,
  targetCompetencies: [
    {
      id: 'tc-khtn-b4-1',
      level: 'biet',
      code: 'KHTN-B04-01',
      description: 'Mô tả được cấu trúc của bảng tuần hoàn gồm: ô nguyên tố, chu kì và nhóm.',
      mastered: false
    },
    {
      id: 'tc-khtn-b4-2',
      level: 'hieu',
      code: 'KHTN-B04-02',
      description: 'Xác định được vị trí (ô, chu kì, nhóm) của một số nguyên tố thông dụng.',
      mastered: false
    }
  ],
  keyConcepts: [
    {
      id: 'kc-khtn-b4',
      title: 'Cấu trúc Bảng tuần hoàn',
      summary: 'Bảng tuần hoàn sắp xếp các nguyên tố theo chiều tăng dần của điện tích hạt nhân. Gồm có: 1. Ô nguyên tố (cho biết số hiệu, kí hiệu, tên, khối lượng); 2. Chu kì (hàng ngang); 3. Nhóm (cột dọc, gồm các nguyên tố có tính chất tương tự nhau).',
      realLifeApplication: 'Bảng tuần hoàn như "tấm bản đồ kho báu" của hóa học, giúp các nhà khoa học dự đoán tính chất của các vật liệu mới.'
    }
  ],
  practiceDrills: [
    {
      id: 'drill-khtn-b04',
      title: 'Luyện tập: Đọc Bảng tuần hoàn',
      durationMinutes: 10,
      totalQuestions: 1,
      questions: [
        {
          id: 'q-k04-1',
          tier: 'multiple_choice',
          competencyRef: 'tc-khtn-b4-1',
          questionText: 'Trong bảng tuần hoàn, các nguyên tố hóa học được sắp xếp theo chiều tăng dần của đại lượng nào?',
          options: [
            { id: 'k-opt-4a', text: 'Điện tích hạt nhân nguyên tử', isCorrect: true },
            { id: 'k-opt-4b', text: 'Khối lượng electron', isCorrect: false },
            { id: 'k-opt-4c', text: 'Đường kính nguyên tử', isCorrect: false },
            { id: 'k-opt-4d', text: 'Nhiệt độ nóng chảy', isCorrect: false }
          ],
          hints: ['Số hiệu nguyên tử bằng số điện tích hạt nhân.'],
          explanation: 'Các nguyên tố được sắp xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.',
          points: 10
        }
      ]
    }
  ],
  dinnerConversationPrompts: [
    {
      question: 'Bảng tuần hoàn hóa học nhìn như một tấm bản đồ ma trận. Con tìm thấy vàng (Au) hay bạc (Ag) nằm ở đâu chưa?',
      contextForParent: 'Kích thích sự khám phá bảng tuần hoàn của con.',
      suggestedFollowUp: 'Bố nghe nói người sáng minh ra bảng này mơ thấy cấu trúc trong giấc ngủ, đúng không con?',
      expectedChildTakeaway: 'Con thích thú chia sẻ câu chuyện về nhà bác học Mendeleev sắp xếp các nguyên tố.'
    }
  ]
};

// ============================================================================
// EXPORT TẤT CẢ CÁC BÀI HỌC MẪU
// ============================================================================
export const sampleLessons: Lesson[] = [
  // Toán 7 - KNTT
  lessonToanKNTTBai1,
  lessonToanKNTTBai2,
  lessonToanKNTTBai3,
  lessonToanKNTTBai4,
  lessonToanKNTTBai5,
  // KHTN 7 - KNTT
  lessonKHTNKNTTBai1,
  lessonKHTNKNTTBai2,
  lessonKHTNKNTTBai3,
  lessonKHTNKNTTBai4
];
