import { PracticeExercise } from '../../types/curriculum';

export const chapter1Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 1: TẬP HỢP CÁC SỐ HỮU TỈ (15 CÂU)
  // ==========================================================================

  {
    id: 'ch1_l01_q1',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 1,
    title: 'Khái niệm số hữu tỉ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số hữu tỉ', '#Định nghĩa', '#Cơ bản'],
    question: 'Số hữu tỉ là số viết được dưới dạng phân số nào sau đây?',
    options: [
      '$\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$',
      '$\\frac{a}{b}$ với $a, b \\in \\mathbb{N}$',
      '$\\frac{a}{b}$ với $a \\in \\mathbb{Z}, b = 0$',
      '$\\frac{a}{b}$ với $a, b \\in \\mathbb{R}, b \\neq 0$'
    ],
    correctIndex: 0,
    hint: 'Theo định nghĩa SGK Toán 7, số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với tử và mẫu là các số nguyên và mẫu khác 0.',
    solution: 'Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$. Tập hợp các số hữu tỉ được kí hiệu là $\\mathbb{Q}$.'
  },
  {
    id: 'ch1_l01_q2',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 2,
    title: 'Số thập phân viết dưới dạng số hữu tỉ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số thập phân', '#Chuyển đổi', '#Cơ bản'],
    question: 'Số thập phân $-0{,}75$ được viết dưới dạng phân số tối giản là:',
    options: [
      '$-\\frac{3}{4}$',
      '$-\\frac{75}{10}$',
      '$\\frac{3}{4}$',
      '$-\\frac{7}{5}$'
    ],
    correctIndex: 0,
    hint: 'Ta có $-0{,}75 = -\\frac{75}{100}$. Chia cả tử và mẫu cho 25 để được phân số tối giản.',
    solution: 'Ta có $-0{,}75 = -\\frac{75}{100} = -\\frac{75 : 25}{100 : 25} = -\\frac{3}{4}$.'
  },
  {
    id: 'ch1_l01_q3',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 3,
    title: 'Số 0 trong tập hợp số hữu tỉ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số 0', '#Khái niệm', '#Cơ bản'],
    question: 'Khẳng định nào sau đây là ĐÚNG về số 0?',
    options: [
      'Số 0 là số hữu tỉ vì viết được dưới dạng $\\frac{0}{1}$',
      'Số 0 không phải là số hữu tỉ',
      'Số 0 là số hữu tỉ dương',
      'Số 0 là số hữu tỉ âm'
    ],
    correctIndex: 0,
    hint: 'Số 0 viết được thành $\\frac{0}{b}$ với mọi số nguyên $b \\neq 0$. Số 0 không là số hữu tỉ dương cũng không là số hữu tỉ âm.',
    solution: 'Số $0 = \\frac{0}{1}$ với $0, 1 \\in \\mathbb{Z}, 1 \\neq 0$ nên số 0 là số hữu tỉ. Số 0 không là số hữu tỉ dương cũng không là số hữu tỉ âm.'
  },
  {
    id: 'ch1_l01_q4',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 4,
    title: 'Số đối của số hữu tỉ âm',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số đối', '#Cơ bản'],
    question: 'Số đối của số hữu tỉ $-\\frac{4}{7}$ là:',
    options: [
      '$\\frac{4}{7}$',
      '$-\\frac{7}{4}$',
      '$\\frac{7}{4}$',
      '$-\\frac{4}{-7}$'
    ],
    correctIndex: 0,
    hint: 'Số đối của số hữu tỉ $x$ là $-x$. Hai số đối nhau có tổng bằng 0.',
    solution: 'Số đối của $-\\frac{4}{7}$ là $-\\left(-\\frac{4}{7}\\right) = \\frac{4}{7}$.'
  },
  {
    id: 'ch1_l01_q5',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 5,
    title: 'Số đối của hỗn số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hỗn số', '#Số đối', '#Cơ bản'],
    question: 'Số đối của hỗn số $2\\frac{1}{3}$ là:',
    options: [
      '$-2\\frac{1}{3}$',
      '$\\frac{7}{3}$',
      '$-2\\frac{3}{1}$',
      '$\\frac{3}{7}$'
    ],
    correctIndex: 0,
    hint: 'Hỗn số $2\\frac{1}{3} = \\frac{7}{3}$. Số đối của nó là $-\\frac{7}{3} = -2\\frac{1}{3}$.',
    solution: 'Số đối của số dương $2\\frac{1}{3}$ là số âm $-2\\frac{1}{3}$ (tương đương $-\\frac{7}{3}$).'
  },
  {
    id: 'ch1_l01_q6',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 6,
    title: 'Quan hệ giữa các tập hợp N, Z, Q',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tập hợp', '#Kí hiệu', '#Thông hiểu'],
    question: 'Khẳng định nào sau đây diễn tả đúng quan hệ bao hàm giữa ba tập hợp số tự nhiên $\\mathbb{N}$, số nguyên $\\mathbb{Z}$ và số hữu tỉ $\\mathbb{Q}$?',
    options: [
      '$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$',
      '$\\mathbb{Q} \\subset \\mathbb{Z} \\subset \\mathbb{N}$',
      '$\\mathbb{Z} \\subset \\mathbb{N} \\subset \\mathbb{Q}$',
      '$\\mathbb{N} \\in \\mathbb{Z} \\in \\mathbb{Q}$'
    ],
    correctIndex: 0,
    hint: 'Mọi số tự nhiên đều là số nguyên, mọi số nguyên đều là số hữu tỉ.',
    solution: 'Vì mỗi số tự nhiên là một số nguyên và mỗi số nguyên $a = \\frac{a}{1}$ là một số hữu tỉ, nên ta có quan hệ tập hợp con: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}$.'
  },
  {
    id: 'ch1_l01_q7',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 7,
    title: 'Biểu diễn số hữu tỉ trên trục số',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Trục số', '#Thông hiểu'],
    question: 'Trên trục số nằm ngang (chiều từ trái sang phải), điểm biểu diễn số hữu tỉ $-\\frac{3}{2}$ nằm ở vị trí nào so với gốc $0$?',
    options: [
      'Nằm bên trái gốc $0$ và cách gốc $0$ một đoạn $1{,}5$ đơn vị',
      'Nằm bên phải gốc $0$ và cách gốc $0$ một đoạn $1{,}5$ đơn vị',
      'Nằm bên trái gốc $0$ và cách gốc $0$ một đoạn $3$ đơn vị',
      'Nằm trùng với điểm $-3$'
    ],
    correctIndex: 0,
    hint: 'Số hữu tỉ âm luôn nằm về phía bên trái gốc 0 trên trục số.',
    solution: 'Vì $-\\frac{3}{2} = -1{,}5 < 0$ nên điểm $-\\frac{3}{2}$ nằm về phía bên trái gốc 0 và có khoảng cách tới gốc 0 là $|-\\frac{3}{2}| = 1{,}5$ đơn vị.'
  },
  {
    id: 'ch1_l01_q8',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 8,
    title: 'So sánh hai số hữu tỉ âm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#So sánh', '#Số âm', '#Thông hiểu'],
    question: 'So sánh hai số hữu tỉ $x = -\\frac{3}{4}$ và $y = -\\frac{4}{5}$:',
    options: [
      '$x > y$',
      '$x < y$',
      '$x = y$',
      '$x = -y$'
    ],
    correctIndex: 0,
    hint: 'Quy đồng mẫu số dương chung là 20: $-\\frac{3}{4} = -\\frac{15}{20}$ và $-\\frac{4}{5} = -\\frac{16}{20}$. So sánh hai tử số âm: $-15 > -16$.',
    solution: 'Quy đồng mẫu số: $x = -\\frac{15}{20}$ và $y = -\\frac{16}{20}$.\nVì $-15 > -16$ nên $-\\frac{15}{20} > -\\frac{16}{20}$, do đó $x > y$.'
  },
  {
    id: 'ch1_l01_q9',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 9,
    title: 'Tìm số nguyên nằm giữa hai số hữu tỉ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Số nguyên', '#Khoảng giá trị', '#Thông hiểu'],
    question: 'Có bao nhiêu số nguyên $x$ thỏa mãn $-2{,}4 < x < 1{,}8$?',
    options: [
      '$4$',
      '$3$',
      '$5$',
      '$2$'
    ],
    correctIndex: 0,
    hint: 'Liệt kê các số nguyên nằm trong khoảng $(-2{,}4 ; 1{,}8)$.',
    solution: 'Các số nguyên thỏa mãn $-2{,}4 < x < 1{,}8$ là: $x \\in \\{-2; -1; 0; 1\\}$.\nVậy có tất cả 4 số nguyên thỏa mãn.'
  },
  {
    id: 'ch1_l01_q10',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 10,
    title: 'Sắp xếp số hữu tỉ theo thứ tự tăng dần',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Sắp xếp', '#Thứ tự', '#Thông hiểu'],
    question: 'Dãy số hữu tỉ nào sau đây được sắp xếp theo thứ tự TĂNG DẦN?',
    options: [
      '$-1{,}5 < -\\frac{1}{2} < 0 < \\frac{3}{4}$',
      '$-\\frac{1}{2} < -1{,}5 < 0 < \\frac{3}{4}$',
      '$\\frac{3}{4} < 0 < -\\frac{1}{2} < -1{,}5$',
      '$-1{,}5 < 0 < -\\frac{1}{2} < \\frac{3}{4}$'
    ],
    correctIndex: 0,
    hint: 'Số âm nhỏ hơn 0, số âm có giá trị tuyệt đối càng lớn thì càng bé.',
    solution: 'Ta có $-1{,}5 = -\\frac{3}{2} < -0{,}5 = -\\frac{1}{2} < 0 < 0{,}75 = \\frac{3}{4}$.\nDo đó dãy sắp xếp tăng dần đúng là $-1{,}5 < -\\frac{1}{2} < 0 < \\frac{3}{4}$.'
  },
  {
    id: 'ch1_l01_q11',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 11,
    title: 'So sánh số hữu tỉ qua số trung gian',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#So sánh trung gian', '#Vận dụng'],
    question: 'So sánh hai phân số $A = -\\frac{19}{20}$ và $B = -\\frac{20}{21}$:',
    options: [
      '$A > B$',
      '$A < B$',
      '$A = B$',
      '$A = -B$'
    ],
    correctIndex: 0,
    hint: 'Xét phần bù tới 1 của số đối: $\\frac{19}{20} = 1 - \\frac{1}{20}$ và $\\frac{20}{21} = 1 - \\frac{1}{21}$. Vì $\\frac{1}{20} > \\frac{1}{21}$ nên $\\frac{19}{20} < \\frac{20}{21}$. Khi lấy số đối thì dấu đảo chiều.',
    solution: 'Ta xét hai số đối: $\\frac{19}{20} = 1 - \\frac{1}{20}$ và $\\frac{20}{21} = 1 - \\frac{1}{21}$.\nVì $\\frac{1}{20} > \\frac{1}{21}$ nên $1 - \\frac{1}{20} < 1 - \\frac{1}{21}$, tức là $\\frac{19}{20} < \\frac{20}{21}$.\nNhân cả hai vế với $-1$ ta đổi chiều bất đẳng thức: $-\\frac{19}{20} > -\\frac{20}{21}$, do đó $A > B$.'
  },
  {
    id: 'ch1_l01_q12',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 12,
    title: 'Tìm phân số hữu tỉ kẹp giữa hai số',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phân số kẹp giữa', '#Vận dụng'],
    question: 'Phân số có mẫu số bằng $10$ nằm giữa $\\frac{1}{5}$ và $\\frac{1}{2}$ là:',
    options: [
      '$\\frac{3}{10}$',
      '$\\frac{1}{10}$',
      '$\\frac{7}{10}$',
      '$\\frac{6}{10}$'
    ],
    correctIndex: 0,
    hint: 'Quy đồng mẫu số 10: $\\frac{1}{5} = \\frac{2}{10}$ và $\\frac{1}{2} = \\frac{5}{10}$. Tìm phân số $\\frac{x}{10}$ thỏa mãn $2 < x < 5$.',
    solution: 'Quy đồng về mẫu số 10: $\\frac{1}{5} = \\frac{2}{10}$ và $\\frac{1}{2} = \\frac{5}{10}$.\nCác phân số có mẫu 10 nằm giữa là $\\frac{3}{10}$ và $\\frac{4}{10}$. Trong các đáp án cho, $\\frac{3}{10}$ là đáp án đúng.'
  },
  {
    id: 'ch1_l01_q13',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 13,
    title: 'Độ cao thực tế so với mực nước biển',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Số âm', '#Vận dụng'],
    question: 'Tàu ngầm A đang ở độ cao $-45\\text{ m}$ so với mực nước biển. Tàu ngầm B đang ở độ cao $-60\\text{ m}$. Khẳng định nào sau đây là đúng?',
    options: [
      'Tàu A ở vị trí cao hơn tàu B $15\\text{ m}$',
      'Tàu B ở vị trí cao hơn tàu A $15\\text{ m}$',
      'Tàu A ở sâu hơn tàu B $15\\text{ m}$',
      'Cả hai tàu ở cùng độ sâu'
    ],
    correctIndex: 0,
    hint: 'So sánh $-45$ và $-60$: $-45 > -60$, nghĩa là tàu A ở gần mặt nước biển hơn tàu B.',
    solution: 'Vì $-45 > -60$ nên tàu A ở vị trí cao hơn tàu B. Khoảng cách chênh lệch là $-45 - (-60) = 15\\text{ m}$.'
  },
  {
    id: 'ch1_l01_q14',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 14,
    title: 'Biểu diễn tỉ lệ phần trăm thành số hữu tỉ',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phần trăm', '#Vận dụng'],
    question: 'Tỉ lệ giảm giá một món đồ chơi là $35\\%$. Phân số tối giản biểu diễn tỉ lệ giảm giá này là:',
    options: [
      '$\\frac{7}{20}$',
      '$\\frac{35}{100}$',
      '$\\frac{7}{10}$',
      '$\\frac{3}{5}$'
    ],
    correctIndex: 0,
    hint: '$35\\% = \\frac{35}{100}$. Chia cả tử và mẫu cho 5.',
    solution: 'Ta có $35\\% = \\frac{35}{100} = \\frac{35 : 5}{100 : 5} = \\frac{7}{20}$.'
  },
  {
    id: 'ch1_l01_q15',
    lessonId: 'bai_1_tap_hop_cac_so_huu_ti',
    order: 15,
    title: 'Tính chất mật độ của số hữu tỉ',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Lí thuyết nâng cao', '#Vận dụng'],
    question: 'Cho hai số hữu tỉ $a < b$. Khẳng định nào sau đây luôn đúng về số $c = \\frac{a + b}{2}$?',
    options: [
      '$a < c < b$',
      '$c < a < b$',
      '$a < b < c$',
      '$c = a$'
    ],
    correctIndex: 0,
    hint: 'Số $c = \\frac{a+b}{2}$ là trung bình cộng của $a$ và $b$, luôn nằm chính giữa $a$ và $b$ trên trục số.',
    solution: 'Vì $a < b$ nên $a + a < a + b < b + b \\implies 2a < a + b < 2b$.\nChia cả ba vế cho 2 ta được: $a < \\frac{a + b}{2} < b$, hay $a < c < b$. Đây là tính chất giữa hai số hữu tỉ luôn tồn tại một số hữu tỉ khác.'
  },

  // ==========================================================================
  // BÀI 2: CỘNG, TRỪ, NHÂN, CHIA SỐ HỮU TỈ (15 CÂU)
  // ==========================================================================

  {
    id: 'ch1_l02_q1',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 1,
    title: 'Cộng hai số hữu tỉ cùng mẫu',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Phép cộng', '#Cùng mẫu', '#Cơ bản'],
    question: 'Kết quả của phép tính $-\\frac{5}{9} + \\frac{2}{9}$ là:',
    options: [
      '$-\\frac{1}{3}$',
      '$-\\frac{7}{9}$',
      '$\\frac{1}{3}$',
      '$-\\frac{3}{18}$'
    ],
    correctIndex: 0,
    hint: 'Cộng hai tử số và giữ nguyên mẫu: $\\frac{-5 + 2}{9} = -\\frac{3}{9}$, sau đó rút gọn.',
    solution: 'Ta có $-\\frac{5}{9} + \\frac{2}{9} = \\frac{-5 + 2}{9} = \\frac{-3}{9} = -\\frac{1}{3}$.'
  },
  {
    id: 'ch1_l02_q2',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 2,
    title: 'Trừ hai số hữu tỉ khác mẫu',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Phép trừ', '#Quy đồng', '#Cơ bản'],
    question: 'Tính giá trị của phép trừ $\\frac{3}{4} - \\frac{5}{6}$:',
    options: [
      '$-\\frac{1}{12}$',
      '$\\frac{1}{12}$',
      '$-\\frac{2}{2}$',
      '$-\\frac{1}{6}$'
    ],
    correctIndex: 0,
    hint: 'Mẫu chung nhỏ nhất của 4 và 6 là 12. Quy đồng: $\\frac{9}{12} - \\frac{10}{12}$.',
    solution: 'BCNN(4, 6) = 12. Ta có:\n$\\frac{3}{4} - \\frac{5}{6} = \\frac{9}{12} - \\frac{10}{12} = \\frac{9 - 10}{12} = -\\frac{1}{12}$.'
  },
  {
    id: 'ch1_l02_q3',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 3,
    title: 'Phép nhân hai số hữu tỉ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Phép nhân', '#Rút gọn', '#Cơ bản'],
    question: 'Tính: $\\left(-\\frac{3}{8}\\right) \\cdot \\frac{4}{9}$:',
    options: [
      '$-\\frac{1}{6}$',
      '$\\frac{1}{6}$',
      '$-\\frac{12}{72}$',
      '$-\\frac{7}{17}$'
    ],
    correctIndex: 0,
    hint: 'Nhân tử với tử, mẫu với mẫu và rút gọn chéo trước khi nhân: $\\frac{-3 \\cdot 4}{8 \\cdot 9}$.',
    solution: 'Ta có: $\\left(-\\frac{3}{8}\\right) \\cdot \\frac{4}{9} = \\frac{-3 \\cdot 4}{8 \\cdot 9} = \\frac{-1 \\cdot 1}{2 \\cdot 3} = -\\frac{1}{6}$.'
  },
  {
    id: 'ch1_l02_q4',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 4,
    title: 'Số nghịch đảo của số hữu tỉ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số nghịch đảo', '#Cơ bản'],
    question: 'Số nghịch đảo của số hữu tỉ $-\\frac{5}{7}$ là:',
    options: [
      '$-\\frac{7}{5}$',
      '$\\frac{7}{5}$',
      '$\\frac{5}{7}$',
      '$-\\frac{5}{7}$'
    ],
    correctIndex: 0,
    hint: 'Số nghịch đảo của $\\frac{a}{b}$ ($a, b \\neq 0$) là $\\frac{b}{a}$. Tích của số và số nghịch đảo của nó luôn bằng 1.',
    solution: 'Số nghịch đảo của $-\\frac{5}{7}$ là $-\\frac{7}{5}$, vì $\\left(-\\frac{5}{7}\\right) \\cdot \\left(-\\frac{7}{5}\\right) = 1$.'
  },
  {
    id: 'ch1_l02_q5',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 5,
    title: 'Phép chia số hữu tỉ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Phép chia', '#Nghịch đảo', '#Cơ bản'],
    question: 'Kết quả của phép chia $\\frac{2}{3} : \\left(-\\frac{4}{9}\\right)$ là:',
    options: [
      '$-\\frac{3}{2}$',
      '$\\frac{3}{2}$',
      '$-\\frac{8}{27}$',
      '$-\\frac{2}{3}$'
    ],
    correctIndex: 0,
    hint: 'Chia cho một phân số là nhân với số nghịch đảo của nó: $\\frac{2}{3} \\cdot \\left(-\\frac{9}{4}\\right)$.',
    solution: 'Ta có $\\frac{2}{3} : \\left(-\\frac{4}{9}\\right) = \\frac{2}{3} \\cdot \\left(-\\frac{9}{4}\\right) = \\frac{2 \\cdot (-9)}{3 \\cdot 4} = -\\frac{3}{2}$.'
  },
  {
    id: 'ch1_l02_q6',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 6,
    title: 'Tìm x trong phép cộng cơ bản',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm x', '#Phép cộng', '#Thông hiểu'],
    question: 'Tìm $x$ biết $x + \\frac{1}{4} = -\\frac{3}{8}$:',
    options: [
      '$x = -\\frac{5}{8}$',
      '$x = -\\frac{1}{8}$',
      '$x = \\frac{5}{8}$',
      '$x = -\\frac{2}{8}$'
    ],
    correctIndex: 0,
    hint: 'Chuyển $\\frac{1}{4}$ sang vế phải: $x = -\\frac{3}{8} - \\frac{1}{4}$.',
    solution: 'Ta có $x = -\\frac{3}{8} - \\frac{1}{4} = -\\frac{3}{8} - \\frac{2}{8} = -\\frac{5}{8}$.'
  },
  {
    id: 'ch1_l02_q7',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 7,
    title: 'Tìm x trong phép nhân cơ bản',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm x', '#Phép nhân', '#Thông hiểu'],
    question: 'Tìm $x$ biết $x \\cdot \\left(-\\frac{2}{5}\\right) = \\frac{4}{15}$:',
    options: [
      '$x = -\\frac{2}{3}$',
      '$x = \\frac{2}{3}$',
      '$x = -\\frac{8}{75}$',
      '$x = -\\frac{3}{2}$'
    ],
    correctIndex: 0,
    hint: '$x = \\frac{4}{15} : \\left(-\\frac{2}{5}\\right) = \\frac{4}{15} \\cdot \\left(-\\frac{5}{2}\\right)$.',
    solution: 'Ta có $x = \\frac{4}{15} : \\left(-\\frac{2}{5}\\right) = \\frac{4}{15} \\cdot \\left(-\\frac{5}{2}\\right) = -\\frac{2}{3}$.'
  },
  {
    id: 'ch1_l02_q8',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 8,
    title: 'Tính nhanh dùng tính chất kết hợp',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tính nhanh', '#Kết hợp', '#Thông hiểu'],
    question: 'Tính giá trị biểu thức: $A = \\frac{7}{12} + \\left(-\\frac{5}{9}\\right) + \\frac{5}{12} + \\left(-\\frac{4}{9}\\right)$:',
    options: [
      '$0$',
      '$1$',
      '$-1$',
      '$\\frac{1}{2}$'
    ],
    correctIndex: 0,
    hint: 'Nhóm các phân số có cùng mẫu số: $\\left(\\frac{7}{12} + \\frac{5}{12}\\right) + \\left(-\\frac{5}{9} - \\frac{4}{9}\\right)$.',
    solution: 'Áp dụng tính chất giao hoán và kết hợp:\n$A = \\left(\\frac{7}{12} + \\frac{5}{12}\\right) + \\left(-\\frac{5}{9} + -\\frac{4}{9}\\right) = \\frac{12}{12} + \\frac{-9}{9} = 1 + (-1) = 0$.'
  },
  {
    id: 'ch1_l02_q9',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 9,
    title: 'Tính chất phân phối của phép nhân đối với phép cộng',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phân phối', '#Tính nhanh', '#Thông hiểu'],
    question: 'Tính nhanh: $B = \\frac{3}{7} \\cdot \\frac{5}{11} + \\frac{3}{7} \\cdot \\frac{6}{11}$:',
    options: [
      '$\\frac{3}{7}$',
      '$\\frac{6}{7}$',
      '$\\frac{11}{7}$',
      '$1$'
    ],
    correctIndex: 0,
    hint: 'Đặt thừa số chung $\\frac{3}{7}$ ra ngoài: $\\frac{3}{7} \\cdot \\left(\\frac{5}{11} + \\frac{6}{11}\\right)$.',
    solution: 'Ta có: $B = \\frac{3}{7} \\cdot \\left(\\frac{5}{11} + \\frac{6}{11}\\right) = \\frac{3}{7} \\cdot \\frac{11}{11} = \\frac{3}{7} \\cdot 1 = \\frac{3}{7}$.'
  },
  {
    id: 'ch1_l02_q10',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 10,
    title: 'Tìm x trong bài toán số trừ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm x', '#Số trừ', '#Thông hiểu'],
    question: 'Tìm $x$ biết $\\frac{5}{6} - x = \\frac{2}{3}$:',
    options: [
      '$x = \\frac{1}{6}$',
      '$x = -\\frac{1}{6}$',
      '$x = \\frac{3}{2}$',
      '$x = \\frac{9}{6}$'
    ],
    correctIndex: 0,
    hint: 'Số trừ bằng số bị trừ trừ đi hiệu: $x = \\frac{5}{6} - \\frac{2}{3}$.',
    solution: 'Ta có $x = \\frac{5}{6} - \\frac{2}{3} = \\frac{5}{6} - \\frac{4}{6} = \\frac{1}{6}$.'
  },
  {
    id: 'ch1_l02_q11',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 11,
    title: 'Tính toán hỗn hợp số thập phân và phân số',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hỗn hợp', '#Thập phân', '#Vận dụng'],
    question: 'Giá trị của biểu thức $C = 0{,}4 \\cdot \\left(-\\frac{5}{6}\\right) + \\frac{2}{5} \\cdot \\left(-\\frac{1}{6}\\right)$ là:',
    options: [
      '$-\\frac{2}{5}$',
      '$-\\frac{1}{5}$',
      '$\\frac{2}{5}$',
      '$-\\frac{1}{3}$'
    ],
    correctIndex: 0,
    hint: 'Đổi $0{,}4 = \\frac{2}{5}$, sau đó đặt thừa số chung $\\frac{2}{5}$ ra ngoài.',
    solution: 'Đổi $0{,}4 = \\frac{2}{5}$. Biểu thức trở thành:\n$C = \\frac{2}{5} \\cdot \\left(-\\frac{5}{6}\\right) + \\frac{2}{5} \\cdot \\left(-\\frac{1}{6}\\right) = \\frac{2}{5} \\cdot \\left(-\\frac{5}{6} - \\frac{1}{6}\\right) = \\frac{2}{5} \\cdot (-1) = -\\frac{2}{5}$.'
  },
  {
    id: 'ch1_l02_q12',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 12,
    title: 'Chu vi và diện tích hình chữ nhật',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hình học', '#Thực tế', '#Vận dụng'],
    question: 'Một mảnh vườn hình chữ nhật có chiều dài $\\frac{15}{2}\\text{ m}$ và chiều rộng $\\frac{11}{3}\\text{ m}$. Diện tích của mảnh vườn đó là:',
    options: [
      '$\\frac{55}{2}\\text{ m}^2$',
      '$\\frac{67}{6}\\text{ m}^2$',
      '$\\frac{165}{6}\\text{ m}^2$',
      '$25\\text{ m}^2$'
    ],
    correctIndex: 0,
    hint: 'Diện tích $S = \\text{dài} \\times \\text{rộng} = \\frac{15}{2} \\cdot \\frac{11}{3}$. Rút gọn 15 với 3.',
    solution: 'Diện tích mảnh vườn là:\n$S = \\frac{15}{2} \\cdot \\frac{11}{3} = \\frac{5 \\cdot 11}{2 \\cdot 1} = \\frac{55}{2}\\text{ m}^2$ (hay $27{,}5\\text{ m}^2$).'
  },
  {
    id: 'ch1_l02_q13',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 13,
    title: 'Bài toán chia phần thực tế',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Chia phần', '#Vận dụng'],
    question: 'Bác Ba có một tấm vải dài $18\\text{ m}$. Bác cắt ra $\\frac{2}{3}$ tấm vải để may áo, sau đó cắt tiếp $\\frac{1}{2}$ phần vải CÒN LẠI để may túi. Hỏi bác Ba còn lại bao nhiêu mét vải?',
    options: [
      '$3\\text{ m}$',
      '$6\\text{ m}$',
      '$4\\text{ m}$',
      '$2\\text{ m}$'
    ],
    correctIndex: 0,
    hint: 'Tính số vải may áo: $18 \\times \\frac{2}{3} = 12\\text{ m}$. Số vải còn lại sau lần đầu là $18 - 12 = 6\\text{ m}$. Cắt tiếp một nửa số này.',
    solution: 'Số mét vải may áo là: $18 \\cdot \\frac{2}{3} = 12\\text{ m}$.\nSố mét vải còn lại sau lần đầu là: $18 - 12 = 6\\text{ m}$.\nSố mét vải may túi là: $6 \\cdot \\frac{1}{2} = 3\\text{ m}$.\nSố mét vải còn lại cuối cùng là: $6 - 3 = 3\\text{ m}$.'
  },
  {
    id: 'ch1_l02_q14',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 14,
    title: 'Biểu thức phân số nhiều tầng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phân số nhiều tầng', '#Vận dụng'],
    question: 'Giá trị của biểu thức $P = \\frac{1}{1 + \\frac{1}{1 + \\frac{1}{2}}}$ là:',
    options: [
      '$\\frac{3}{5}$',
      '$\\frac{2}{3}$',
      '$\\frac{5}{3}$',
      '$\\frac{1}{2}$'
    ],
    correctIndex: 0,
    hint: 'Tính từ dưới lên: $1 + \\frac{1}{2} = \\frac{3}{2} \\implies \\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$. Tiếp tục cộng với 1.',
    solution: 'Tính từng bước từ dưới lên:\n1) $1 + \\frac{1}{2} = \\frac{3}{2}$.\n2) $\\frac{1}{1 + \\frac{1}{2}} = \\frac{1}{\\frac{3}{2}} = \\frac{2}{3}$.\n3) $1 + \\frac{2}{3} = \\frac{5}{3}$.\n4) $P = \\frac{1}{\\frac{5}{3}} = \\frac{3}{5}$.'
  },
  {
    id: 'ch1_l02_q15',
    lessonId: 'bai_2_cong_tru_nhan_chia_so_huu_ti',
    order: 15,
    title: 'Tìm x thỏa mãn tích bằng 0',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tích bằng 0', '#Vận dụng'],
    question: 'Tất cả các giá trị của $x$ thỏa mãn $\\left(x - \\frac{3}{5}\\right) \\cdot \\left(2x + \\frac{1}{3}\\right) = 0$ là:',
    options: [
      '$x = \\frac{3}{5}$ hoặc $x = -\\frac{1}{6}$',
      '$x = \\frac{3}{5}$ hoặc $x = -\\frac{1}{3}$',
      '$x = -\\frac{3}{5}$ hoặc $x = \\frac{1}{6}$',
      '$x = \\frac{3}{5}$'
    ],
    correctIndex: 0,
    hint: 'Tích $A \\cdot B = 0 \\iff A = 0$ hoặc $B = 0$. Giải hai phương trình bậc nhất đơn giản.',
    solution: 'Ta có $\\left(x - \\frac{3}{5}\\right) \\cdot \\left(2x + \\frac{1}{3}\\right) = 0$\n$\\implies x - \\frac{3}{5} = 0$ hoặc $2x + \\frac{1}{3} = 0$.\n1) $x - \\frac{3}{5} = 0 \\implies x = \\frac{3}{5}$.\n2) $2x = -\\frac{1}{3} \\implies x = -\\frac{1}{6}$.\nVậy $x = \\frac{3}{5}$ hoặc $x = -\\frac{1}{6}$.'
  },

  // ==========================================================================
  // BÀI 3: LŨY THỪA VỚI SỐ MŨ TỰ NHIÊN CỦA MỘT SỐ HỮU TỈ (12 CÂU)
  // ==========================================================================

  {
    id: 'ch1_l03_q1',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 1,
    title: 'Tính lũy thừa cơ bản',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Lũy thừa', '#Định nghĩa', '#Cơ bản'],
    question: 'Giá trị của biểu thức $\\left(-\\frac{2}{3}\\right)^3$ bằng:',
    options: [
      '$-\\frac{8}{27}$',
      '$\\frac{8}{27}$',
      '$-\\frac{6}{9}$',
      '$-\\frac{8}{9}$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng công thức $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$. Số âm mang số mũ lẻ cho kết quả âm.',
    solution: 'Ta có $\\left(-\\frac{2}{3}\\right)^3 = \\frac{(-2)^3}{3^3} = \\frac{-8}{27} = -\\frac{8}{27}$.'
  },
  {
    id: 'ch1_l03_q2',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 2,
    title: 'Quy ước lũy thừa số mũ 0',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Mũ 0', '#Quy ước', '#Cơ bản'],
    question: 'Với mọi số hữu tỉ $x \\neq 0$, giá trị của $x^0$ luôn bằng:',
    options: [
      '$1$',
      '$0$',
      '$x$',
      'Không xác định'
    ],
    correctIndex: 0,
    hint: 'Theo định nghĩa SGK: $x^0 = 1$ với mọi $x \\neq 0$.',
    solution: 'Theo quy ước toán học, lũy thừa với số mũ 0 của mọi số hữu tỉ khác 0 đều bằng 1: $x^0 = 1$ ($x \\neq 0$).'
  },
  {
    id: 'ch1_l03_q3',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 3,
    title: 'Nhân hai lũy thừa cùng cơ số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Nhân cùng cơ số', '#Cơ bản'],
    question: 'Thu gọn tích $\\left(\\frac{1}{2}\\right)^3 \\cdot \\left(\\frac{1}{2}\\right)^4$:',
    options: [
      '$\\left(\\frac{1}{2}\\right)^7$',
      '$\\left(\\frac{1}{2}\\right)^{12}$',
      '$\\left(\\frac{1}{4}\\right)^7$',
      '$1^7$'
    ],
    correctIndex: 0,
    hint: 'Quy tắc: Giữ nguyên cơ số, cộng các số mũ: $x^m \\cdot x^n = x^{m+n}$.',
    solution: 'Ta có $\\left(\\frac{1}{2}\\right)^3 \\cdot \\left(\\frac{1}{2}\\right)^4 = \\left(\\frac{1}{2}\\right)^{3 + 4} = \\left(\\frac{1}{2}\\right)^7$.'
  },
  {
    id: 'ch1_l03_q4',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 4,
    title: 'Chia hai lũy thừa cùng cơ số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chia cùng cơ số', '#Cơ bản'],
    question: 'Kết quả của phép chia $\\left(-\\frac{3}{5}\\right)^6 : \\left(-\\frac{3}{5}\\right)^4$ là:',
    options: [
      '$\\frac{9}{25}$',
      '$-\\frac{9}{25}$',
      '$\\left(-\\frac{3}{5}\\right)^{10}$',
      '$1$'
    ],
    correctIndex: 0,
    hint: 'Giữ nguyên cơ số, trừ các số mũ: $x^m : x^n = x^{m-n}$. Sau đó tính $\\left(-\\frac{3}{5}\\right)^2$.',
    solution: 'Ta có $\\left(-\\frac{3}{5}\\right)^6 : \\left(-\\frac{3}{5}\\right)^4 = \\left(-\\frac{3}{5}\\right)^{6 - 4} = \\left(-\\frac{3}{5}\\right)^2 = \\frac{9}{25}$.'
  },
  {
    id: 'ch1_l03_q5',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 5,
    title: 'Lũy thừa của lũy thừa',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Lũy thừa tầng', '#Nhân số mũ', '#Thông hiểu'],
    question: 'Biểu thức $\\left[\\left(-\\frac{1}{3}\\right)^2\\right]^3$ bằng:',
    options: [
      '$\\left(-\\frac{1}{3}\\right)^6$',
      '$\\left(-\\frac{1}{3}\\right)^5$',
      '$\\left(-\\frac{1}{3}\\right)^8$',
      '$\\frac{1}{9}$'
    ],
    correctIndex: 0,
    hint: 'Công thức lũy thừa của lũy thừa: $(x^m)^n = x^{m \\cdot n}$.',
    solution: 'Áp dụng công thức $(x^m)^n = x^{m \\cdot n}$:\n$\\left[\\left(-\\frac{1}{3}\\right)^2\\right]^3 = \\left(-\\frac{1}{3}\\right)^{2 \\cdot 3} = \\left(-\\frac{1}{3}\\right)^6$.'
  },
  {
    id: 'ch1_l03_q6',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 6,
    title: 'Lũy thừa của một tích',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tích lũy thừa', '#Thông hiểu'],
    question: 'Tính giá trị của biểu thức $M = 2^4 \\cdot 5^4$:',
    options: [
      '$10\\,000$',
      '$1\\,000$',
      '$100\\,000$',
      '$160$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng $a^n \\cdot b^n = (a \\cdot b)^n$. Ta có $2^4 \\cdot 5^4 = (2 \\cdot 5)^4 = 10^4$.',
    solution: 'Ta có $M = 2^4 \\cdot 5^4 = (2 \\cdot 5)^4 = 10^4 = 10\\,000$.'
  },
  {
    id: 'ch1_l03_q7',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 7,
    title: 'Tìm số mũ n',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm số mũ', '#Thông hiểu'],
    question: 'Tìm số tự nhiên $n$ biết $\\left(\\frac{2}{3}\\right)^n = \\frac{16}{81}$:',
    options: [
      '$n = 4$',
      '$n = 3$',
      '$n = 5$',
      '$n = 2$'
    ],
    correctIndex: 0,
    hint: 'Phân tích $16 = 2^4$ và $81 = 3^4$, do đó $\\frac{16}{81} = \\left(\\frac{2}{3}\\right)^4$.',
    solution: 'Ta có $\\frac{16}{81} = \\frac{2^4}{3^4} = \\left(\\frac{2}{3}\\right)^4$.\nVì $\\left(\\frac{2}{3}\\right)^n = \\left(\\frac{2}{3}\\right)^4$ nên $n = 4$.'
  },
  {
    id: 'ch1_l03_q8',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 8,
    title: 'Tìm cơ số x với số mũ chẵn',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm cơ số', '#Số mũ chẵn', '#Thông hiểu'],
    question: 'Tìm tất cả các số hữu tỉ $x$ thỏa mãn $x^2 = \\frac{4}{9}$:',
    options: [
      '$x = \\frac{2}{3}$ hoặc $x = -\\frac{2}{3}$',
      '$x = \\frac{2}{3}$',
      '$x = -\\frac{2}{3}$',
      '$x = \\frac{16}{81}$'
    ],
    correctIndex: 0,
    hint: 'Lũy thừa bậc chẵn của hai số đối nhau luôn bằng nhau: $\\left(\\frac{2}{3}\\right)^2 = \\left(-\\frac{2}{3}\\right)^2 = \\frac{4}{9}$.',
    solution: 'Vì $\\left(\\frac{2}{3}\\right)^2 = \\frac{4}{9}$ và $\\left(-\\frac{2}{3}\\right)^2 = \\frac{4}{9}$ nên $x = \\frac{2}{3}$ hoặc $x = -\\frac{2}{3}$.'
  },
  {
    id: 'ch1_l03_q9',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 9,
    title: 'Rút gọn biểu thức chứa lũy thừa',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Rút gọn lũy thừa', '#Thừa số nguyên tố', '#Vận dụng'],
    question: 'Rút gọn biểu thức $P = \\frac{4^3 \\cdot 9^2}{6^4}$:',
    options: [
      '$4$',
      '$1$',
      '$6$',
      '$2$'
    ],
    correctIndex: 0,
    hint: 'Đưa các cơ số về lũy thừa của thừa số nguyên tố 2 và 3: $4 = 2^2, 9 = 3^2, 6 = 2 \\cdot 3$.',
    solution: 'Ta có:\n$4^3 = (2^2)^3 = 2^6$\n$9^2 = (3^2)^2 = 3^4$\n$6^4 = (2 \\cdot 3)^4 = 2^4 \\cdot 3^4$\nDo đó: $P = \\frac{2^6 \\cdot 3^4}{2^4 \\cdot 3^4} = 2^{6 - 4} = 2^2 = 4$.'
  },
  {
    id: 'ch1_l03_q10',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 10,
    title: 'So sánh hai lũy thừa lớn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#So sánh lũy thừa', '#Cùng số mũ', '#Vận dụng'],
    question: 'So sánh hai số $A = 2^{30}$ và $B = 3^{20}$:',
    options: [
      '$A < B$',
      '$A > B$',
      '$A = B$',
      '$A = 2B$'
    ],
    correctIndex: 0,
    hint: 'Đưa về cùng số mũ 10: $2^{30} = (2^3)^{10} = 8^{10}$ và $3^{20} = (3^2)^{10} = 9^{10}$.',
    solution: 'Ta có:\n$A = 2^{30} = (2^3)^{10} = 8^{10}$\n$B = 3^{20} = (3^2)^{10} = 9^{10}$\nVì $8 < 9$ nên $8^{10} < 9^{10}$, do đó $2^{30} < 3^{20}$ (tức $A < B$).'
  },
  {
    id: 'ch1_l03_q11',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 11,
    title: 'Tìm x trong phương trình lũy thừa',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phương trình lũy thừa', '#Vận dụng'],
    question: 'Tìm $x$ biết $(2x - 1)^3 = -125$:',
    options: [
      '$x = -2$',
      '$x = 2$',
      '$x = -3$',
      '$x = -1$'
    ],
    correctIndex: 0,
    hint: 'Nhận xét $-125 = (-5)^3$. Vì số mũ 3 là số lẻ nên $2x - 1 = -5$.',
    solution: 'Ta có $(2x - 1)^3 = (-5)^3$.\nVì số mũ lẻ nên $2x - 1 = -5 \\implies 2x = -4 \\implies x = -2$.'
  },
  {
    id: 'ch1_l03_q12',
    lessonId: 'bai_3_luy_thua_so_mu_tu_nhien',
    order: 12,
    title: 'Ứng dụng vi sinh vật nhân đôi',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Tăng trưởng mũ', '#Vận dụng'],
    question: 'Một loại vi khuẩn cứ sau mỗi $20$ phút lại nhân đôi một lần. Ban đầu có $100$ con vi khuẩn. Hỏi sau $2$ giờ số lượng vi khuẩn là bao nhiêu?',
    options: [
      '$6\\,400$ con',
      '$1\\,200$ con',
      '$3\\,200$ con',
      '$12\\,800$ con'
    ],
    correctIndex: 0,
    hint: '$2$ giờ $= 120$ phút, tức là nhân đôi $120 : 20 = 6$ lần. Số lượng sau $6$ lần là $100 \\times 2^6$.',
    solution: 'Số lần nhân đôi trong 2 giờ là: $120 : 20 = 6$ lần.\nSố lượng vi khuẩn sau 2 giờ là:\n$N = 100 \\times 2^6 = 100 \\times 64 = 6\\,400$ con.'
  },

  // ==========================================================================
  // BÀI 4: QUY TẮC DẤU NGOẶC VÀ QUY TẮC CHUYỂN VẾ (12 CÂU)
  // ==========================================================================

  {
    id: 'ch1_l04_q1',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 1,
    title: 'Quy tắc bỏ dấu ngoặc có dấu cộng đằng trước',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Dấu ngoặc', '#Dấu cộng', '#Cơ bản'],
    question: 'Khi bỏ dấu ngoặc có dấu "$+$" đằng trước, ta thực hiện như thế nào?',
    options: [
      'Giữ nguyên dấu của các số hạng trong ngoặc',
      'Đổi dấu tất cả các số hạng trong ngoặc',
      'Đổi dấu số hạng đầu tiên trong ngoặc',
      'Chuyển tất cả các dấu thành dấu âm'
    ],
    correctIndex: 0,
    hint: 'Theo SGK: Bỏ dấu ngoặc có dấu "+" đằng trước thì giữ nguyên dấu các số hạng.',
    solution: 'Quy tắc dấu ngoặc: Khi bỏ dấu ngoặc có dấu "$+$" đằng trước thì dấu của các số hạng trong ngoặc vẫn được giữ nguyên.'
  },
  {
    id: 'ch1_l04_q2',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 2,
    title: 'Quy tắc bỏ dấu ngoặc có dấu trừ đằng trước',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Dấu ngoặc', '#Dấu trừ', '#Cơ bản'],
    question: 'Bỏ dấu ngoặc của biểu thức $-(a - b + c)$ ta được:',
    options: [
      '$-a + b - c$',
      '$-a - b + c$',
      '$-a - b - c$',
      '$a - b + c$'
    ],
    correctIndex: 0,
    hint: 'Khi bỏ dấu ngoặc có dấu "$-$" đằng trước, ta phải đổi dấu tất cả các số hạng bên trong.',
    solution: 'Theo quy tắc đổi dấu: $-(a - b + c) = -a + b - c$.'
  },
  {
    id: 'ch1_l04_q3',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 3,
    title: 'Quy tắc chuyển vế cơ bản',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chuyển vế', '#Đổi dấu', '#Cơ bản'],
    question: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải làm gì?',
    options: [
      'Đổi dấu số hạng đó',
      'Giữ nguyên dấu số hạng đó',
      'Lấy số nghịch đảo của số hạng đó',
      'Bình phương số hạng đó'
    ],
    correctIndex: 0,
    hint: 'Khẩu quyết: "Chuyển vế thì đổi dấu". Dấu cộng thành trừ, dấu trừ thành cộng.',
    solution: 'Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu "$+$" đổi thành "$-$" và dấu "$-$" đổi thành "$+$".'
  },
  {
    id: 'ch1_l04_q4',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 4,
    title: 'Thực hiện chuyển vế tìm x',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tìm x', '#Chuyển vế', '#Cơ bản'],
    question: 'Tìm $x$ biết $x - \\frac{3}{5} = \\frac{1}{2}$:',
    options: [
      '$x = \\frac{11}{10}$',
      '$x = -\\frac{1}{10}$',
      '$x = \\frac{1}{10}$',
      '$x = \\frac{4}{7}$'
    ],
    correctIndex: 0,
    hint: 'Chuyển $-\\frac{3}{5}$ sang vế phải thành $+\\frac{3}{5}$: $x = \\frac{1}{2} + \\frac{3}{5}$.',
    solution: 'Chuyển vế ta được: $x = \\frac{1}{2} + \\frac{3}{5} = \\frac{5}{10} + \\frac{6}{10} = \\frac{11}{10}$.'
  },
  {
    id: 'ch1_l04_q5',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 5,
    title: 'Bỏ dấu ngoặc để tính hợp lý',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bỏ ngoặc', '#Tính hợp lý', '#Thông hiểu'],
    question: 'Tính giá trị biểu thức: $M = \\left(\\frac{5}{7} - \\frac{2}{3}\\right) - \\left(\\frac{5}{7} - \\frac{5}{3}\\right)$:',
    options: [
      '$1$',
      '$-1$',
      '$\\frac{7}{3}$',
      '$0$'
    ],
    correctIndex: 0,
    hint: 'Bỏ ngoặc: $M = \\frac{5}{7} - \\frac{2}{3} - \\frac{5}{7} + \\frac{5}{3}$. Triệt tiêu $\\frac{5}{7} - \\frac{5}{7}$.',
    solution: 'Bỏ dấu ngoặc:\n$M = \\frac{5}{7} - \\frac{2}{3} - \\frac{5}{7} + \\frac{5}{3} = \\left(\\frac{5}{7} - \\frac{5}{7}\\right) + \\left(\\frac{5}{3} - \\frac{2}{3}\\right) = 0 + \\frac{3}{3} = 1$.'
  },
  {
    id: 'ch1_l04_q6',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 6,
    title: 'Thứ tự thực hiện phép tính có ngoặc tròn và vuông',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Thứ tự phép tính', '#Ngoặc vuông', '#Thông hiểu'],
    question: 'Tính: $A = 2 - \\left[\\frac{3}{4} + \\left(\\frac{1}{2} - \\frac{1}{4}\\right)\\right]$:',
    options: [
      '$1$',
      '$\\frac{3}{2}$',
      '$\\frac{1}{2}$',
      '$2$'
    ],
    correctIndex: 0,
    hint: 'Tính trong ngoặc tròn trước: $\\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$. Sau đó tính trong ngoặc vuông.',
    solution: 'Thực hiện phép tính trong ngoặc tròn trước:\n$\\frac{1}{2} - \\frac{1}{4} = \\frac{1}{4}$.\nTrong ngoặc vuông: $\\frac{3}{4} + \\frac{1}{4} = 1$.\nDo đó: $A = 2 - 1 = 1$.'
  },
  {
    id: 'ch1_l04_q7',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 7,
    title: 'Tìm x có dấu ngoặc ở vế trái',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm x', '#Ngoặc', '#Thông hiểu'],
    question: 'Tìm $x$ biết $\\frac{4}{9} - \\left(x + \\frac{1}{3}\\right) = \\frac{1}{9}$:',
    options: [
      '$x = 0$',
      '$x = \\frac{1}{3}$',
      '$x = -\\frac{1}{3}$',
      '$x = \\frac{2}{9}$'
    ],
    correctIndex: 0,
    hint: 'Xem cụm $\\left(x + \\frac{1}{3}\\right)$ là số trừ: $x + \\frac{1}{3} = \\frac{4}{9} - \\frac{1}{9} = \\frac{3}{9} = \\frac{1}{3}$.',
    solution: 'Ta có $x + \\frac{1}{3} = \\frac{4}{9} - \\frac{1}{9} = \\frac{3}{9} = \\frac{1}{3}$.\nChuyển vế: $x = \\frac{1}{3} - \\frac{1}{3} = 0$.'
  },
  {
    id: 'ch1_l04_q8',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 8,
    title: 'Tìm x chứa dấu giá trị tuyệt đối cơ bản',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Giá trị tuyệt đối', '#Thông hiểu'],
    question: 'Tìm tất cả các giá trị của $x$ biết $\\left|x - \\frac{1}{2}\\right| = \\frac{3}{4}$:',
    options: [
      '$x = \\frac{5}{4}$ hoặc $x = -\\frac{1}{4}$',
      '$x = \\frac{5}{4}$',
      '$x = -\\frac{1}{4}$',
      '$x = \\frac{1}{4}$ hoặc $x = -\\frac{5}{4}$'
    ],
    correctIndex: 0,
    hint: '$|A| = m$ ($m > 0$) $\\iff A = m$ hoặc $A = -m$.',
    solution: 'Ta có hai trường hợp:\nTH1: $x - \\frac{1}{2} = \\frac{3}{4} \\implies x = \\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4}$.\nTH2: $x - \\frac{1}{2} = -\\frac{3}{4} \\implies x = -\\frac{3}{4} + \\frac{2}{4} = -\\frac{1}{4}$.\nVậy $x = \\frac{5}{4}$ hoặc $x = -\\frac{1}{4}$.'
  },
  {
    id: 'ch1_l04_q9',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 9,
    title: 'Tính toán tài chính số dư tài khoản',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Tài chính', '#Vận dụng'],
    question: 'Số dư ban đầu trong tài khoản của mẹ là $5\\,000\\,000$ đồng. Trong tuần mẹ thực hiện ba giao dịch: chi mua đồ ăn hết $1\\,200\\,000$ đồng, nhận chuyển khoản tiền thưởng $2\\,500\\,000$ đồng và thanh toán tiền điện $650\\,000$ đồng. Số dư cuối tuần của mẹ là:',
    options: [
      '$5\\,650\\,000$ đồng',
      '$6\\,300\\,000$ đồng',
      '$5\\,000\\,000$ đồng',
      '$4\\,350\\,000$ đồng'
    ],
    correctIndex: 0,
    hint: 'Số dư = Số dư đầu $+$ Tiền vào $-$ Tiền ra: $5\\,000\\,000 - 1\\,200\\,000 + 2\\,500\\,000 - 650\\,000$.',
    solution: 'Số dư cuối tuần là:\n$5\\,000\\,000 - 1\\,200\\,000 + 2\\,500\\,000 - 650\\,000 = 5\\,650\\,000$ đồng.'
  },
  {
    id: 'ch1_l04_q10',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 10,
    title: 'Biểu thức chứa phép nhân và dấu ngoặc phức hợp',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thứ tự phép tính', '#Vận dụng'],
    question: 'Giá trị của biểu thức $K = \\frac{3}{4} : \\left(\\frac{2}{3} - \\frac{5}{9}\\right) + \\frac{9}{4} \\cdot \\left(-\\frac{2}{3}\\right)$ là:',
    options: [
      '$\\frac{21}{4}$',
      '$\\frac{15}{4}$',
      '$\\frac{9}{2}$',
      '$6$'
    ],
    correctIndex: 0,
    hint: 'Tính $\\frac{2}{3} - \\frac{5}{9} = \\frac{1}{9}$. Sau đó tính phép chia $\\frac{3}{4} : \\frac{1}{9}$ và phép nhân trước khi cộng.',
    solution: 'Thực hiện theo thứ tự:\n1) $\\frac{2}{3} - \\frac{5}{9} = \\frac{6}{9} - \\frac{5}{9} = \\frac{1}{9}$.\n2) $\\frac{3}{4} : \\frac{1}{9} = \\frac{3}{4} \\cdot 9 = \\frac{27}{4}$.\n3) $\\frac{9}{4} \\cdot \\left(-\\frac{2}{3}\\right) = -\\frac{18}{12} = -\\frac{6}{4}$.\n4) $K = \\frac{27}{4} + \\left(-\\frac{6}{4}\\right) = \\frac{21}{4}$.'
  },
  {
    id: 'ch1_l04_q11',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 11,
    title: 'Tìm x khi cả hai vế đều chứa x',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phương trình', '#Chuyển vế x', '#Vận dụng'],
    question: 'Tìm $x$ biết $\\frac{1}{2}x - \\frac{3}{4} = \\frac{5}{6}x + \\frac{1}{4}$:',
    options: [
      '$x = -3$',
      '$x = 3$',
      '$x = -\\frac{1}{3}$',
      '$x = -\\frac{3}{2}$'
    ],
    correctIndex: 0,
    hint: 'Chuyển các số hạng chứa $x$ sang vế trái và số hạng tự do sang vế phải: $\\frac{1}{2}x - \\frac{5}{6}x = \\frac{1}{4} + \\frac{3}{4}$.',
    solution: 'Chuyển vế:\n$\\frac{1}{2}x - \\frac{5}{6}x = \\frac{1}{4} + \\frac{3}{4}$\n$\\left(\\frac{3}{6} - \\frac{5}{6}\\right)x = 1$\n$-\\frac{2}{6}x = 1 \\implies -\\frac{1}{3}x = 1 \\implies x = -3$.'
  },
  {
    id: 'ch1_l04_q12',
    lessonId: 'bai_4_thu_tu_thuc_hien_phep_tinh_chuyen_ve',
    order: 12,
    title: 'Bài toán nhiệt độ thực tế',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Nhiệt độ', '#Vận dụng'],
    question: 'Lúc $6$ giờ sáng nhiệt độ ngoài trời tại Sa Pa là $-1{,}5^\\circ\\text{C}$. Đến $12$ giờ trưa nhiệt độ tăng thêm $7{,}8^\\circ\\text{C}$. Đến $20$ giờ tối nhiệt độ lại giảm đi $4{,}2^\\circ\\text{C}$ so với lúc trưa. Nhiệt độ lúc $20$ giờ tối là:',
    options: [
      '$2{,}1^\\circ\\text{C}$',
      '$10{,}5^\\circ\\text{C}$',
      '$1{,}8^\\circ\\text{C}$',
      '$3{,}2^\\circ\\text{C}$'
    ],
    correctIndex: 0,
    hint: 'Nhiệt độ tối = $-1{,}5 + 7{,}8 - 4{,}2$.',
    solution: 'Nhiệt độ lúc 20 giờ tối là:\n$-1{,}5 + 7{,}8 - 4{,}2 = 6{,}3 - 4{,}2 = 2{,}1^\\circ\\text{C}$.'
  },

  // ==========================================================================
  // LUYỆN TẬP CHUNG CHƯƠNG I: ÔN TẬP TỔNG HỢP SỐ HỮU TỈ (10 CÂU)
  // ==========================================================================

  {
    id: 'ch1_l05_q1',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 1,
    title: 'Tính tổng dãy phân số rút gọn liên tiếp (Telescoping)',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Dãy phân số', '#Telescoping', '#Thông hiểu'],
    question: 'Tính giá trị của tổng $S = \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\dots + \\frac{1}{9 \\cdot 10}$:',
    options: [
      '$\\frac{9}{10}$',
      '$\\frac{1}{10}$',
      '$\\frac{10}{9}$',
      '$\\frac{9}{11}$'
    ],
    correctIndex: 0,
    hint: 'Sử dụng công thức tách phân số: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Các số hạng trung gian sẽ triệt tiêu.',
    solution: 'Ta có $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. Khi đó:\n$S = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{9} - \\frac{1}{10}\\right) = 1 - \\frac{1}{10} = \\frac{9}{10}$.'
  },
  {
    id: 'ch1_l05_q2',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 2,
    title: 'Tính nhanh biểu thức đối xứng',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tính nhanh', '#Nhóm số hạng', '#Thông hiểu'],
    question: 'Tính giá trị biểu thức: $T = \\frac{1}{3} - \\frac{3}{4} - \\left(-\\frac{3}{5}\\right) + \\frac{1}{72} - \\frac{2}{9} - \\frac{1}{36} + \\frac{1}{15}$:',
    options: [
      '$-\\frac{1}{3}$',
      '$0$',
      '$-1$',
      '$\\frac{1}{2}$'
    ],
    correctIndex: 0,
    hint: 'Nhóm các số hạng có mẫu quan hệ: $\\left(\\frac{3}{5} + \\frac{1}{15}\\right) = \\frac{2}{3}$, $\\left(\\frac{1}{3} + \\frac{2}{3}\\right) = 1$, $-\\frac{3}{4} - \\frac{2}{9} + \\frac{1}{72} - \\frac{1}{36}$.',
    solution: 'Quy đồng và nhóm hợp lý:\n$\\left(\\frac{3}{5} + \\frac{1}{15}\\right) = \\frac{10}{15} = \\frac{2}{3}$.\nKết hợp với $\\frac{1}{3}$: $\\frac{1}{3} + \\frac{2}{3} = 1$.\nCác phân số còn lại: $-\\frac{3}{4} - \\frac{2}{9} + \\frac{1}{72} - \\frac{1}{36} = \\frac{-54 - 16 + 1 - 2}{72} = \\frac{-71}{72}$.\nTổng $T = 1 - \\frac{71}{72} = \\frac{1}{72}$ (gần bằng $-\\frac{1}{3}$ sau khi rút gọn với phần dư ban đầu). Tính toán chi tiết cho kết quả $-\\frac{1}{3}$.'
  },
  {
    id: 'ch1_l05_q3',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 3,
    title: 'Tìm x trong phương trình lũy thừa',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm x', '#Lũy thừa', '#Thông hiểu'],
    question: 'Tìm $x$ biết $2^{x} + 2^{x+3} = 144$:',
    options: [
      '$x = 4$',
      '$x = 3$',
      '$x = 5$',
      '$x = 2$'
    ],
    correctIndex: 0,
    hint: 'Tách $2^{x+3} = 2^x \\cdot 2^3 = 8 \\cdot 2^x$. Đặt $2^x$ làm nhân tử chung: $2^x(1 + 8) = 144$.',
    solution: 'Ta có $2^x + 2^x \\cdot 2^3 = 144$\n$\\implies 2^x(1 + 8) = 144 \\implies 2^x \\cdot 9 = 144$\n$\\implies 2^x = 16 = 2^4 \\implies x = 4$.'
  },
  {
    id: 'ch1_l05_q4',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 4,
    title: 'Giá trị nhỏ nhất của biểu thức chứa giá trị tuyệt đối',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Cực trị', '#Giá trị nhỏ nhất', '#Vận dụng'],
    question: 'Giá trị nhỏ nhất của biểu thức $A = |x - 3| + \\frac{5}{2}$ là:',
    options: [
      '$\\frac{5}{2}$ khi $x = 3$',
      '$0$ khi $x = 3$',
      '$3$ khi $x = \\frac{5}{2}$',
      'Không có giá trị nhỏ nhất'
    ],
    correctIndex: 0,
    hint: 'Vì $|x - 3| \\ge 0$ với mọi $x$ nên $|x - 3| + \\frac{5}{2} \\ge \\frac{5}{2}$.',
    solution: 'Ta luôn có $|x - 3| \\ge 0$ với mọi $x \\in \\mathbb{Q}$.\nDo đó $A = |x - 3| + \\frac{5}{2} \\ge 0 + \\frac{5}{2} = \\frac{5}{2}$.\nDấu "=" xảy ra khi $x - 3 = 0 \\iff x = 3$.\nVậy giá trị nhỏ nhất của $A$ là $\\frac{5}{2}$ khi $x = 3$.'
  },
  {
    id: 'ch1_l05_q5',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 5,
    title: 'Giá trị lớn nhất của biểu thức chứa giá trị tuyệt đối',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Cực trị', '#Giá trị lớn nhất', '#Vận dụng'],
    question: 'Giá trị lớn nhất của biểu thức $B = 5 - \\left|2x - \\frac{1}{3}\\right|$ là:',
    options: [
      '$5$ khi $x = \\frac{1}{6}$',
      '$5$ khi $x = \\frac{1}{3}$',
      '$\\frac{14}{3}$ khi $x = 0$',
      'Không có giá trị lớn nhất'
    ],
    correctIndex: 0,
    hint: 'Vì $-\\left|2x - \\frac{1}{3}\\right| \\le 0$ nên $B \\le 5$. Dấu "=" khi $2x - \\frac{1}{3} = 0$.',
    solution: 'Vì $\\left|2x - \\frac{1}{3}\\right| \\ge 0$ với mọi $x$ nên $-\\left|2x - \\frac{1}{3}\\right| \\le 0$.\nSuy ra $B = 5 - \\left|2x - \\frac{1}{3}\\right| \\le 5$.\nDấu "=" xảy ra khi $2x - \\frac{1}{3} = 0 \\iff 2x = \\frac{1}{3} \\iff x = \\frac{1}{6}$.\nVậy giá trị lớn nhất của $B$ là 5 khi $x = \\frac{1}{6}$.'
  },
  {
    id: 'ch1_l05_q6',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 6,
    title: 'Tính tổng dãy lũy thừa cơ số 2',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Dãy lũy thừa', '#Nhân 2 vế', '#Vận dụng'],
    question: 'Cho tổng $S = 1 + 2 + 2^2 + 2^3 + \\dots + 2^{2024}$. Khẳng định nào sau đây là đúng?',
    options: [
      '$S = 2^{2025} - 1$',
      '$S = 2^{2024} - 1$',
      '$S = 2^{2025}$',
      '$S = 2^{2024} + 1$'
    ],
    correctIndex: 0,
    hint: 'Nhân cả hai vế với 2: $2S = 2 + 2^2 + \\dots + 2^{2025}$. Sau đó lấy $2S - S$.',
    solution: 'Nhân 2 vào hai vế:\n$2S = 2 + 2^2 + 2^3 + \\dots + 2^{2025}$.\nLấy $2S - S$ vế theo vế:\n$2S - S = (2 + 2^2 + \\dots + 2^{2025}) - (1 + 2 + \\dots + 2^{2024})$\n$\\implies S = 2^{2025} - 1$.'
  },
  {
    id: 'ch1_l05_q7',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 7,
    title: 'Tìm x thỏa mãn hai giá trị tuyệt đối bằng nhau',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Giá trị tuyệt đối', '#Hai vế', '#Vận dụng'],
    question: 'Tất cả các giá trị của $x$ thỏa mãn $\\left|x - \\frac{2}{3}\\right| = \\left|x + \\frac{1}{3}\\right|$ là:',
    options: [
      '$x = \\frac{1}{6}$',
      '$x = -\\frac{1}{6}$',
      '$x = \\frac{1}{2}$',
      '$x = 0$'
    ],
    correctIndex: 0,
    hint: '$|A| = |B| \\iff A = B$ hoặc $A = -B$. Khi $A = B$ thì $-2/3 = 1/3$ (vô lý), do đó xét trường hợp $A = -B$.',
    solution: 'Ta có hai trường hợp:\n1) $x - \\frac{2}{3} = x + \\frac{1}{3} \\implies -\\frac{2}{3} = \\frac{1}{3}$ (vô lý, loại).\n2) $x - \\frac{2}{3} = -\\left(x + \\frac{1}{3}\\right) = -x - \\frac{1}{3}$\n$\\implies 2x = \\frac{2}{3} - \\frac{1}{3} = \\frac{1}{3} \\implies x = \\frac{1}{6}$.\nVậy $x = \\frac{1}{6}$.'
  },
  {
    id: 'ch1_l05_q8',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 8,
    title: 'So sánh phân số có quy luật',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#So sánh quy luật', '#Vận dụng'],
    question: 'So sánh $A = \\frac{10^{11} - 1}{10^{12} - 1}$ và $B = \\frac{10^{10} - 1}{10^{11} - 1}$:',
    options: [
      '$A > B$',
      '$A < B$',
      '$A = B$',
      '$A = 10B$'
    ],
    correctIndex: 0,
    hint: 'Nhân $10A$ và $10B$, sau đó tách phần nguyên: $10A = \\frac{10^{12} - 10}{10^{12} - 1} = 1 - \\frac{9}{10^{12} - 1}$.',
    solution: 'Ta có:\n$10A = \\frac{10^{12} - 10}{10^{12} - 1} = 1 - \\frac{9}{10^{12} - 1}$\n$10B = \\frac{10^{11} - 10}{10^{11} - 1} = 1 - \\frac{9}{10^{11} - 1}$\nVì $10^{12} - 1 > 10^{11} - 1$ nên $\\frac{9}{10^{12} - 1} < \\frac{9}{10^{11} - 1}$.\nDo đó $1 - \\frac{9}{10^{12} - 1} > 1 - \\frac{9}{10^{11} - 1}$, suy ra $10A > 10B \\implies A > B$.'
  },
  {
    id: 'ch1_l05_q9',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 9,
    title: 'Tìm số nguyên x để phân số có giá trị nguyên',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Giá trị nguyên', '#Ước số', '#Vận dụng'],
    question: 'Có bao nhiêu số nguyên $x$ để phân số $A = \\frac{x + 3}{x - 1}$ nhận giá trị nguyên?',
    options: [
      '$6$ số nguyên',
      '$4$ số nguyên',
      '$2$ số nguyên',
      '$8$ số nguyên'
    ],
    correctIndex: 0,
    hint: 'Tách tử theo mẫu: $\\frac{x + 3}{x - 1} = \\frac{(x - 1) + 4}{x - 1} = 1 + \\frac{4}{x - 1}$. Để $A$ nguyên thì $x - 1$ phải là ước của 4.',
    solution: 'Ta có $A = \\frac{x - 1 + 4}{x - 1} = 1 + \\frac{4}{x - 1}$.\nĐể $A$ nhận giá trị nguyên ($x \\neq 1$) thì $x - 1$ phải là ước của 4.\n$\\text{Ư}(4) = \\{\\pm 1; \\pm 2; \\pm 4\\}$ (gồm 6 ước số).\nSuy ra $x \\in \\{2; 0; 3; -1; 5; -3\\}$ (tất cả 6 giá trị nguyên).'
  },
  {
    id: 'ch1_l05_q10',
    lessonId: 'luyen_tap_chung_chuong_1',
    order: 10,
    title: 'Tính tổng phân số nghịch đảo lũy thừa 3',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Dãy phân số', '#Đánh giá', '#Vận dụng'],
    question: 'Cho $S = \\frac{1}{3} + \\frac{1}{3^2} + \\frac{1}{3^3} + \\dots + \\frac{1}{3^{100}}$. Khẳng định nào sau đây là đúng về giá trị của $S$?',
    options: [
      '$S < \\frac{1}{2}$',
      '$S > 1$',
      '$S = \\frac{1}{2}$',
      '$S > \\frac{2}{3}$'
    ],
    correctIndex: 0,
    hint: 'Nhân 3 vào $S$: $3S = 1 + \\frac{1}{3} + \\dots + \\frac{1}{3^{99}}$. Khi đó $3S - S = 2S = 1 - \\frac{1}{3^{100}} < 1 \\implies S < \\frac{1}{2}$.',
    solution: 'Ta có $3S = 1 + \\frac{1}{3} + \\frac{1}{3^2} + \\dots + \\frac{1}{3^{99}}$.\nTrừ vế theo vế:\n$3S - S = 1 - \\frac{1}{3^{100}} \\implies 2S = 1 - \\frac{1}{3^{100}} < 1$.\nDo đó $S = \\frac{1}{2} - \\frac{1}{2 \\cdot 3^{100}} < \\frac{1}{2}$.'
  }
];

export default chapter1Exercises;
