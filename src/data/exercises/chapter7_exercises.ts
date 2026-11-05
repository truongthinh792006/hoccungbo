import { PracticeExercise } from '../../types/curriculum';

export const chapter7Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 24: BIỂU THỨC ĐẠI SỐ (12 CÂU)
  // ==========================================================================

  {
    id: 'ch7_l24_q1',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 1,
    title: 'Khái niệm biểu thức đại số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Biểu thức đại số', '#Định nghĩa', '#Cơ bản'],
    question: 'Biểu thức nào sau đây là một BIỂU THỨC ĐẠI SỐ?',
    options: [
      '$2x^2 - 3x + 1$',
      '$2x^2 - 3x + 1 = 0$',
      '$2x - 3 > 5$',
      '$x^2 + y^2 \\le 4$'
    ],
    correctIndex: 0,
    hint: 'Biểu thức đại số là biểu thức chứa các số, các chữ (biến số) và các phép toán nối liền chúng, KHÔNG chứa dấu đẳng thức ($=$) hay bất đẳng thức ($>, <, \\ge, \\le$).',
    solution: 'Biểu thức đại số là dãy các phép toán nối các số và chữ số: $2x^2 - 3x + 1$. Các biểu thức chứa dấu $=, >, \\le$ là phương trình hoặc bất phương trình, không phải là biểu thức đại số đơn thuần.'
  },
  {
    id: 'ch7_l24_q2',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 2,
    title: 'Viết biểu thức đại số theo mô tả bằng lời: Tổng bình phương',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Mô tả bằng lời', '#Tổng bình phương', '#Cơ bản'],
    question: 'Biểu thức đại số biểu thị "Tổng bình phương của hai số $a$ và $b$" là:',
    options: [
      '$a^2 + b^2$',
      '$(a + b)^2$',
      '$2(a + b)$',
      '$(a + b)^3$'
    ],
    correctIndex: 0,
    hint: 'Chú ý phân biệt: "Tổng bình phương" là lấy từng số bình phương lên rồi cộng lại: $a^2 + b^2$. Còn "Bình phương của một tổng" là $(a+b)^2$.',
    solution: '"Tổng bình phương của $a$ và $b$" là tính bình phương của từng số rồi cộng lại: $a^2 + b^2$.'
  },
  {
    id: 'ch7_l24_q3',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 3,
    title: 'Viết biểu thức đại số: Bình phương của một tổng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Bình phương của tổng', '#Cơ bản'],
    question: 'Biểu thức đại số biểu thị "Bình phương của tổng hai số $x$ và $y$" là:',
    options: [
      '$(x + y)^2$',
      '$x^2 + y^2$',
      '$x^2 + y$',
      '$2x + 2y$'
    ],
    correctIndex: 0,
    hint: 'Tính tổng $x + y$ trước, sau đó đem toàn bộ tổng đó bình phương lên.',
    solution: '"Bình phương của tổng hai số $x$ và $y$" là $(x + y)^2$.'
  },
  {
    id: 'ch7_l24_q4',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 4,
    title: 'Tính giá trị biểu thức tại một giá trị của biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính giá trị', '#Thay số', '#Cơ bản'],
    question: 'Giá trị của biểu thức $A = 3x^2 - 5x + 2$ tại $x = 2$ là:',
    options: [
      '$4$',
      '$24$',
      '$0$',
      '$8$'
    ],
    correctIndex: 0,
    hint: 'Thay $x = 2$ vào biểu thức: $3 \\cdot (2)^2 - 5 \\cdot (2) + 2$.',
    solution: 'Thay $x = 2$ vào biểu thức $A$:\n$A = 3 \\cdot 2^2 - 5 \\cdot 2 + 2 = 3 \\cdot 4 - 10 + 2 = 12 - 10 + 2 = 4$.'
  },
  {
    id: 'ch7_l24_q5',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 5,
    title: 'Tính giá trị biểu thức với biến số âm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Biến âm', '#Bẫy dấu', '#Thông hiểu'],
    question: 'Giá trị của biểu thức $B = -2x^3 + 4x - 1$ tại $x = -1$ là:',
    options: [
      '$-3$',
      '$5$',
      '$-7$',
      '$1$'
    ],
    correctIndex: 0,
    hint: 'Thay $(-1)$ cẩn thận: $(-1)^3 = -1$. Do đó $-2(-1)^3 = -2(-1) = 2$.',
    solution: 'Thay $x = -1$ vào $B$:\n$B = -2 \\cdot (-1)^3 + 4 \\cdot (-1) - 1 = -2 \\cdot (-1) - 4 - 1 = 2 - 4 - 1 = -3$.'
  },
  {
    id: 'ch7_l24_q6',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 6,
    title: 'Tính giá trị biểu thức có hai biến x và y',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hai biến', '#Thông hiểu'],
    question: 'Giá trị của biểu thức $C = 2x^2y - 3xy + 1$ tại $x = 1, y = -2$ là:',
    options: [
      '$3$',
      '$-9$',
      '$5$',
      '$-1$'
    ],
    correctIndex: 0,
    hint: 'Thay $x = 1$ và $y = -2$: $2 \\cdot 1^2 \\cdot (-2) - 3 \\cdot 1 \\cdot (-2) + 1$.',
    solution: 'Thay $x = 1, y = -2$ vào $C$:\n$C = 2 \\cdot (1)^2 \\cdot (-2) - 3 \\cdot (1) \\cdot (-2) + 1 = 2 \\cdot (-2) + 6 + 1 = -4 + 7 = 3$.'
  },
  {
    id: 'ch7_l24_q7',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 7,
    title: 'Biểu thức tính quãng đường chuyển động',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Thực tế', '#Chuyển động', '#Thông hiểu'],
    question: 'Một người đi bộ với vận tốc $4\\text{ km/h}$ trong $x$ giờ, sau đó đi xe máy với vận tốc $35\\text{ km/h}$ trong $y$ giờ. Biểu thức đại số biểu thị tổng quãng đường người đó đã đi là:',
    options: [
      '$4x + 35y$',
      '$35x + 4y$',
      '$(4 + 35)(x + y)$',
      '$\\frac{x}{4} + \\frac{y}{35}$'
    ],
    correctIndex: 0,
    hint: 'Quãng đường đi bộ $s_1 = 4x$, quãng đường đi xe máy $s_2 = 35y$. Tổng quãng đường là $s_1 + s_2$.',
    solution: 'Quãng đường đi bộ là $4x\\text{ (km)}$.\nQuãng đường đi xe máy là $35y\\text{ (km)}$.\nTổng quãng đường người đó đi là $4x + 35y\\text{ (km)}$.'
  },
  {
    id: 'ch7_l24_q8',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 8,
    title: 'Biểu thức tính diện tích hình chữ nhật khi biến đổi cạnh',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình học', '#Diện tích', '#Thông hiểu'],
    question: 'Một hình chữ nhật ban đầu có chiều dài là $a\\text{ (m)}$ và chiều rộng là $b\\text{ (m)}$. Người ta tăng chiều dài thêm $3\\text{ m}$ và giảm chiều rộng đi $2\\text{ m}$. Biểu thức biểu thị diện tích hình chữ nhật mới là:',
    options: [
      '$(a + 3)(b - 2)$',
      '$a \\cdot b + 3 - 2$',
      '$(a - 2)(b + 3)$',
      '$2(a + 3 + b - 2)$'
    ],
    correctIndex: 0,
    hint: 'Chiều dài mới là $a + 3$, chiều rộng mới là $b - 2$. Diện tích mới bằng tích chiều dài mới và chiều rộng mới.',
    solution: 'Chiều dài mới của hình chữ nhật là $a + 3\\text{ (m)}$.\nChiều rộng mới là $b - 2\\text{ (m)}$.\nDiện tích hình chữ nhật mới là $(a + 3)(b - 2)\\text{ (m}^2\\text{)}$.'
  },
  {
    id: 'ch7_l24_q9',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 9,
    title: 'Tính tiền nước sinh hoạt thực tế',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Tiền nước', '#Vận dụng'],
    question: 'Giá tiền nước sinh hoạt được tính như sau: Giá cố định hàng tháng là $20\\,000$ đồng tiền thuê đồng hồ; mỗi mét khối nước dùng có giá $12\\,000$ đồng. Biểu thức biểu thị số tiền phải trả khi dùng $x\\text{ m}^3$ nước và số tiền phải nộp khi dùng $15\\text{ m}^3$ nước lần lượt là:',
    options: [
      '$20\\,000 + 12\\,000x$; phải trả $200\\,000$ đồng',
      '$12\\,000x$; phải trả $180\\,000$ đồng',
      '$20\\,000x + 12\\,000$; phải trả $312\\,000$ đồng',
      '$(20\\,000 + 12\\,000)x$; phải trả $480\\,000$ đồng'
    ],
    correctIndex: 0,
    hint: 'Số tiền = Phí thuê đồng hồ $+$ Tiền nước dùng: $T = 20\\,000 + 12\\,000x$. Thay $x = 15$ vào để tính số tiền.',
    solution: 'Biểu thức tính tiền nước là: $T = 20\\,000 + 12\\,000x$ (đồng).\nKhi dùng $x = 15\\text{ m}^3$, số tiền phải trả là:\n$T = 20\\,000 + 12\\,000 \\times 15 = 20\\,000 + 180\\,000 = 200\\,000$ đồng.'
  },
  {
    id: 'ch7_l24_q10',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 10,
    title: 'Tính giá trị biểu thức với phân số',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phân số', '#Vận dụng'],
    question: 'Giá trị của biểu thức $D = \\frac{2x - 1}{x + 2}$ tại $x = -\\frac{1}{2}$ là:',
    options: [
      '$-\\frac{4}{3}$',
      '$\\frac{4}{3}$',
      '$-2$',
      '$0$'
    ],
    correctIndex: 0,
    hint: 'Tính tử số: $2 \\cdot \\left(-\\frac{1}{2}\\right) - 1 = -1 - 1 = -2$. Tính mẫu số: $-\\frac{1}{2} + 2 = \\frac{3}{2}$. Chia tử cho mẫu.',
    solution: 'Thay $x = -\\frac{1}{2}$ vào $D$:\nTử số: $2 \\cdot \\left(-\\frac{1}{2}\\right) - 1 = -1 - 1 = -2$.\nMẫu số: $-\\frac{1}{2} + 2 = \\frac{3}{2}$.\nDo đó: $D = \\frac{-2}{\\frac{3}{2}} = -2 \\cdot \\frac{2}{3} = -\\frac{4}{3}$.'
  },
  {
    id: 'ch7_l24_q11',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 11,
    title: 'Tính giá trị biểu thức đối xứng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Biểu thức đối xứng', '#Vận dụng'],
    question: 'Cho $x - y = 5$. Giá trị của biểu thức $M = 3x(x - y) - 3y(x - y) + 10$ là:',
    options: [
      '$85$',
      '$25$',
      '$75$',
      '$40$'
    ],
    correctIndex: 0,
    hint: 'Đặt nhân tử chung $(x - y)$ ra ngoài: $M = (x - y)(3x - 3y) + 10 = 3(x - y)^2 + 10$.',
    solution: 'Ta có $M = (x - y)(3x - 3y) + 10 = 3(x - y)(x - y) + 10 = 3(x - y)^2 + 10$.\nThay $x - y = 5$ vào:\n$M = 3 \\cdot 5^2 + 10 = 3 \\cdot 25 + 10 = 75 + 10 = 85$.'
  },
  {
    id: 'ch7_l24_q12',
    lessonId: 'bai_24_bieu_thuc_dai_so',
    order: 12,
    title: 'Giá trị nhỏ nhất của biểu thức bậc hai',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Cực trị', '#GTNN', '#Vận dụng'],
    question: 'Giá trị nhỏ nhất của biểu thức $K = (x - 3)^2 + 7$ đạt được khi $x$ bằng:',
    options: [
      '$x = 3$',
      '$x = -3$',
      '$x = 0$',
      '$x = 7$'
    ],
    correctIndex: 0,
    hint: 'Vì $(x - 3)^2 \\ge 0$ với mọi $x$, nên $K \\ge 7$. Dấu "=" xảy ra khi $x - 3 = 0$.',
    solution: 'Vì $(x - 3)^2 \\ge 0$ với mọi $x \\in \\mathbb{R}$ nên $K = (x - 3)^2 + 7 \\ge 0 + 7 = 7$.\nDấu "=" xảy ra khi $x - 3 = 0 \\iff x = 3$.\nVậy giá trị nhỏ nhất của $K$ là 7 đạt được khi $x = 3$.'
  },

  // ==========================================================================
  // BÀI 25: ĐA THỨC MỘT BIẾN (15 CÂU)
  // ==========================================================================

  {
    id: 'ch7_l25_q1',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 1,
    title: 'Khái niệm đơn thức một biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đơn thức một biến', '#Định nghĩa', '#Cơ bản'],
    question: 'Biểu thức nào sau đây là một ĐƠN THỨC MỘT BIẾN?',
    options: [
      '$-5x^3$',
      '$2x^2 - 3x$',
      '$\\frac{3}{x}$',
      '$x^2 + 1$'
    ],
    correctIndex: 0,
    hint: 'Đơn thức một biến là biểu thức đại số chỉ gồm một số, hoặc một biến, hoặc một tích giữa số và các lũy thừa của biến đó.',
    solution: 'Biểu thức $-5x^3$ là tích giữa số $-5$ và lũy thừa $x^3$ nên là đơn thức một biến. Các biểu thức còn lại là đa thức có nhiều hạng tử hoặc chứa biến ở mẫu.'
  },
  {
    id: 'ch7_l25_q2',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 2,
    title: 'Xác định bậc của đa thức một biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Bậc đa thức', '#Cơ bản'],
    question: 'Bậc của đa thức $P(x) = 4x^5 - 2x^3 + x - 7$ là:',
    options: [
      '$5$',
      '$4$',
      '$3$',
      '$7$'
    ],
    correctIndex: 0,
    hint: 'Bậc của đa thức một biến (đã thu gọn, khác đa thức không) là số mũ lớn nhất của biến trong đa thức đó.',
    solution: 'Trong đa thức $P(x)$, số mũ lớn nhất của biến $x$ là 5 (trong hạng tử $4x^5$), do đó bậc của $P(x)$ là 5.'
  },
  {
    id: 'ch7_l25_q3',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 3,
    title: 'Xác định hệ số cao nhất và hệ số tự do',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hệ số cao nhất', '#Hệ số tự do', '#Cơ bản'],
    question: 'Cho đa thức $Q(x) = -3x^4 + 5x^2 - 6x + 9$. Hệ số cao nhất và hệ số tự do của $Q(x)$ lần lượt là:',
    options: [
      '$-3$ và $9$',
      '$4$ và $9$',
      '$5$ và $-6$',
      '$-3$ và $-6$'
    ],
    correctIndex: 0,
    hint: 'Hệ số cao nhất là hệ số của hạng tử có bậc cao nhất (ở đây là $-3x^4$). Hệ số tự do là hạng tử không chứa biến (ở đây là $9$).',
    solution: 'Hạng tử có bậc cao nhất là $-3x^4$ nên hệ số cao nhất là $-3$.\nHạng tử không chứa biến là $9$ nên hệ số tự do là $9$.'
  },
  {
    id: 'ch7_l25_q4',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 4,
    title: 'Sắp xếp đa thức theo lũy thừa giảm dần của biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Sắp xếp đa thức', '#Giảm dần', '#Cơ bản'],
    question: 'Sắp xếp đa thức $A(x) = 3 - 5x + 2x^3 - x^2$ theo lũy thừa GIẢM DẦN của biến $x$:',
    options: [
      '$A(x) = 2x^3 - x^2 - 5x + 3$',
      '$A(x) = 3 - 5x - x^2 + 2x^3$',
      '$A(x) = 2x^3 - 5x - x^2 + 3$',
      '$A(x) = -x^2 + 2x^3 - 5x + 3$'
    ],
    correctIndex: 0,
    hint: 'Xếp số mũ từ cao xuống thấp: bậc 3 $\\to$ bậc 2 $\\to$ bậc 1 $\\to$ bậc 0.',
    solution: 'Sắp xếp các hạng tử theo số mũ giảm dần của $x$: bậc 3 ($2x^3$), bậc 2 ($-x^2$), bậc 1 ($-5x$), bậc 0 ($3$). Ta được: $A(x) = 2x^3 - x^2 - 5x + 3$.'
  },
  {
    id: 'ch7_l25_q5',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 5,
    title: 'Kiểm tra nghiệm của đa thức một biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Nghiệm đa thức', '#Kiểm tra nghiệm', '#Cơ bản'],
    question: 'Số nào sau đây là NGHIỆM của đa thức $P(x) = 2x - 6$?',
    options: [
      '$x = 3$',
      '$x = -3$',
      '$x = 2$',
      '$x = 0$'
    ],
    correctIndex: 0,
    hint: 'Số $x_0$ là nghiệm của đa thức $P(x)$ nếu $P(x_0) = 0$. Thay từng giá trị vào để thử.',
    solution: 'Ta có $P(3) = 2 \\cdot 3 - 6 = 6 - 6 = 0$. Vậy $x = 3$ là nghiệm của $P(x)$.'
  },
  {
    id: 'ch7_l25_q6',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 6,
    title: 'Thu gọn đa thức một biến',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Thu gọn đa thức', '#Đồng dạng', '#Thông hiểu'],
    question: 'Thu gọn đa thức $M(x) = 5x^3 - 2x^2 + 3x - x^3 + 4x^2 - 7$ ta được:',
    options: [
      '$4x^3 + 2x^2 + 3x - 7$',
      '$6x^3 + 2x^2 + 3x - 7$',
      '$4x^3 + 6x^2 + 3x - 7$',
      '$4x^3 - 2x^2 + 3x - 7$'
    ],
    correctIndex: 0,
    hint: 'Nhóm các hạng tử có cùng số mũ của biến: $(5x^3 - x^3) + (-2x^2 + 4x^2) + 3x - 7$.',
    solution: 'Nhóm các hạng tử đồng dạng:\n$M(x) = (5x^3 - x^3) + (-2x^2 + 4x^2) + 3x - 7 = 4x^3 + 2x^2 + 3x - 7$.'
  },
  {
    id: 'ch7_l25_q7',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 7,
    title: 'Bẫy xác định bậc khi hệ số cao nhất bị triệt tiêu',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bẫy bậc đa thức', '#Thu gọn trước', '#Thông hiểu'],
    question: 'Bậc của đa thức $H(x) = 3x^4 - 2x^2 + 5 - 3x^4 + x^3$ là:',
    options: [
      '$3$',
      '$4$',
      '$2$',
      '$0$'
    ],
    correctIndex: 0,
    hint: 'PHẢI THU GỌN đa thức trước khi xác định bậc: $3x^4 - 3x^4 = 0$. Hạng tử có bậc cao nhất còn lại là $x^3$.',
    solution: 'Thu gọn đa thức: $H(x) = (3x^4 - 3x^4) + x^3 - 2x^2 + 5 = x^3 - 2x^2 + 5$.\nBậc của đa thức đã thu gọn là bậc của hạng tử $x^3$, tức là bậc 3.'
  },
  {
    id: 'ch7_l25_q8',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 8,
    title: 'Tìm nghiệm của đa thức bậc nhất',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Nghiệm bậc nhất', '#Thông hiểu'],
    question: 'Nghiệm của đa thức $f(x) = 3x + 12$ là:',
    options: [
      '$x = -4$',
      '$x = 4$',
      '$x = -12$',
      '$x = -36$'
    ],
    correctIndex: 0,
    hint: 'Cho $f(x) = 0 \\iff 3x + 12 = 0 \\iff 3x = -12$.',
    solution: 'Cho $f(x) = 0 \\iff 3x + 12 = 0 \\iff 3x = -12 \\iff x = -4$. Vậy nghiệm của đa thức là $x = -4$.'
  },
  {
    id: 'ch7_l25_q9',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 9,
    title: 'Tìm nghiệm của đa thức bậc hai dạng khuyết',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Nghiệm bậc hai', '#Khuyết', '#Thông hiểu'],
    question: 'Tất cả các nghiệm của đa thức $g(x) = x^2 - 16$ là:',
    options: [
      '$x = 4$ và $x = -4$',
      '$x = 4$',
      '$x = 16$',
      '$x = 8$ và $x = -8$'
    ],
    correctIndex: 0,
    hint: '$x^2 - 16 = 0 \\iff x^2 = 16 \\iff x = \\pm 4$.',
    solution: 'Cho $g(x) = 0 \\iff x^2 - 16 = 0 \\iff x^2 = 16 \\iff x = 4$ hoặc $x = -4$. Đa thức có hai nghiệm.'
  },
  {
    id: 'ch7_l25_q10',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 10,
    title: 'Nhận biết đa thức vô nghiệm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đa thức vô nghiệm', '#Thông hiểu'],
    question: 'Đa thức nào sau đây KHÔNG CÓ NGHIỆM trên tập hợp số thực?',
    options: [
      '$x^2 + 4$',
      '$x^2 - 4$',
      '$2x + 4$',
      '$x^3 + 8$'
    ],
    correctIndex: 0,
    hint: 'Vì $x^2 \\ge 0$ với mọi $x$, nên $x^2 + 4 \\ge 4 > 0$. Đa thức không thể bằng 0.',
    solution: 'Vì $x^2 \\ge 0$ với mọi $x \\in \\mathbb{R}$ nên $x^2 + 4 \\ge 4 > 0$. Đa thức $x^2 + 4$ luôn dương với mọi $x$, do đó không có nghiệm.'
  },
  {
    id: 'ch7_l25_q11',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 11,
    title: 'Tìm nghiệm của đa thức đặt nhân tử chung',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Nhân tử chung', '#Vận dụng'],
    question: 'Tập hợp các nghiệm của đa thức $P(x) = 2x^2 - 6x$ là:',
    options: [
      '$\\{0; 3\\}$',
      '$\\{3\\}$',
      '$\\{0; -3\\}$',
      '$\\{0; 6\\}$'
    ],
    correctIndex: 0,
    hint: 'Đặt $2x$ làm nhân tử chung: $2x(x - 3) = 0$. Suy ra $x = 0$ hoặc $x - 3 = 0$.',
    solution: 'Cho $P(x) = 0 \\iff 2x(x - 3) = 0 \\iff x = 0$ hoặc $x - 3 = 0 \\iff x = 3$.\nVậy tập hợp nghiệm của đa thức là $\\{0; 3\\}$.'
  },
  {
    id: 'ch7_l25_q12',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 12,
    title: 'Tìm hệ số m để đa thức nhận x0 làm nghiệm',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tìm tham số m', '#Vận dụng'],
    question: 'Tìm giá trị của $m$ để số $x = 2$ là một nghiệm của đa thức $A(x) = x^2 - mx + 6$:',
    options: [
      '$m = 5$',
      '$m = -5$',
      '$m = 4$',
      '$m = 8$'
    ],
    correctIndex: 0,
    hint: 'Vì $x = 2$ là nghiệm nên $A(2) = 0$. Thay $x = 2$ vào biểu thức để tìm $m$.',
    solution: 'Vì $x = 2$ là nghiệm của $A(x)$ nên $A(2) = 0$:\n$2^2 - m \\cdot 2 + 6 = 0$\n$4 - 2m + 6 = 0 \\implies 10 - 2m = 0 \\implies 2m = 10 \\implies m = 5$.'
  },
  {
    id: 'ch7_l25_q13',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 13,
    title: 'Số nghiệm tối đa của đa thức bậc n',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Định lí nghiệm', '#Vận dụng'],
    question: 'Một đa thức một biến bậc $3$ có thể có TỐI ĐA bao nhiêu nghiệm trên tập số thực?',
    options: [
      '$3$ nghiệm',
      '$1$ nghiệm',
      '$2$ nghiệm',
      'Vô số nghiệm'
    ],
    correctIndex: 0,
    hint: 'Định lí SGK: Một đa thức một biến (khác đa thức không) bậc $n$ có không quá $n$ nghiệm.',
    solution: 'Theo định lí số nghiệm của đa thức một biến, một đa thức bậc $n$ ($n \\ge 1$) có tối đa không quá $n$ nghiệm. Do đó đa thức bậc 3 có tối đa 3 nghiệm.'
  },
  {
    id: 'ch7_l25_q14',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 14,
    title: 'Chứng minh đa thức luôn dương',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Chứng minh vô nghiệm', '#Vận dụng'],
    question: 'Biết đa thức $Q(x) = x^2 - 2x + 5$ có thể viết lại thành $(x - 1)^2 + 4$. Khẳng định nào sau đây là đúng?',
    options: [
      '$Q(x) > 0$ với mọi số thực $x$, do đó $Q(x)$ vô nghiệm',
      '$Q(x)$ có nghiệm $x = 1$',
      '$Q(x)$ có nghiệm $x = -1$',
      '$Q(x)$ có hai nghiệm'
    ],
    correctIndex: 0,
    hint: 'Vì $(x - 1)^2 \\ge 0$ với mọi $x$ nên $(x - 1)^2 + 4 \\ge 4 > 0$.',
    solution: 'Ta có $Q(x) = (x - 1)^2 + 4$. Vì $(x - 1)^2 \\ge 0$ với mọi $x$ nên $(x - 1)^2 + 4 \\ge 4 > 0$ với mọi $x$. Đa thức luôn nhận giá trị dương nên không bao giờ bằng 0, tức là vô nghiệm.'
  },
  {
    id: 'ch7_l25_q15',
    lessonId: 'bai_25_da_thuc_mot_bien',
    order: 15,
    title: 'Tính tổng các hệ số của đa thức',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tổng các hệ số', '#Mẹo tính', '#Vận dụng'],
    question: 'Tổng tất cả các hệ số của đa thức $P(x) = (2x - 1)^{10}$ bằng:',
    options: [
      '$1$',
      '$2^{10}$',
      '$-1$',
      '$0$'
    ],
    correctIndex: 0,
    hint: 'Mẹo: Tổng các hệ số của bất kì đa thức $P(x)$ nào luôn bằng giá trị của đa thức đó tại $x = 1$, tức là $P(1)$.',
    solution: 'Tổng các hệ số của đa thức $P(x)$ chính là giá trị của đa thức khi thay biến $x = 1$:\n$P(1) = (2 \\cdot 1 - 1)^{10} = (2 - 1)^{10} = 1^{10} = 1$.'
  },

  // ==========================================================================
  // BÀI 26: PHÉP CỘNG VÀ PHÉP TRỪ ĐA THỨC MỘT BIẾN (15 CÂU)
  // ==========================================================================

  {
    id: 'ch7_l26_q1',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 1,
    title: 'Cộng hai đơn thức đồng dạng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cộng đơn thức', '#Cơ bản'],
    question: 'Kết quả của phép tính $3x^2 + 5x^2$ là:',
    options: [
      '$8x^2$',
      '$8x^4$',
      '$15x^2$',
      '$8$'
    ],
    correctIndex: 0,
    hint: 'Cộng phần hệ số và giữ nguyên phần biến: $(3 + 5)x^2 = 8x^2$.',
    solution: 'Ta có $3x^2 + 5x^2 = (3 + 5)x^2 = 8x^2$. Chú ý số mũ của biến được giữ nguyên.'
  },
  {
    id: 'ch7_l26_q2',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 2,
    title: 'Trừ hai đơn thức đồng dạng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trừ đơn thức', '#Cơ bản'],
    question: 'Kết quả của phép tính $2x^3 - 7x^3$ là:',
    options: [
      '$-5x^3$',
      '$5x^3$',
      '$-5$',
      '$-5x^6$'
    ],
    correctIndex: 0,
    hint: '$(2 - 7)x^3 = -5x^3$.',
    solution: 'Ta có $2x^3 - 7x^3 = (2 - 7)x^3 = -5x^3$.'
  },
  {
    id: 'ch7_l26_q3',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 3,
    title: 'Cộng hai đa thức theo hàng ngang',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cộng đa thức', '#Hàng ngang', '#Cơ bản'],
    question: 'Cho hai đa thức $P(x) = 2x^2 + 3x - 1$ và $Q(x) = x^2 - 2x + 4$. Đa thức $P(x) + Q(x)$ là:',
    options: [
      '$3x^2 + x + 3$',
      '$3x^2 + 5x + 3$',
      '$x^2 + x + 3$',
      '$3x^2 - x + 3$'
    ],
    correctIndex: 0,
    hint: 'Cộng từng cặp hạng tử cùng bậc: $(2+1)x^2 + (3-2)x + (-1+4)$.',
    solution: 'Ta có $P(x) + Q(x) = (2x^2 + x^2) + (3x - 2x) + (-1 + 4) = 3x^2 + x + 3$.'
  },
  {
    id: 'ch7_l26_q4',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 4,
    title: 'Trừ hai đa thức một biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trừ đa thức', '#Đổi dấu', '#Cơ bản'],
    question: 'Cho $A(x) = 4x^2 - 3x + 5$ và $B(x) = 2x^2 + x - 1$. Đa thức $A(x) - B(x)$ là:',
    options: [
      '$2x^2 - 4x + 6$',
      '$2x^2 - 2x + 4$',
      '$6x^2 - 2x + 4$',
      '$2x^2 - 4x + 4$'
    ],
    correctIndex: 0,
    hint: 'Nhớ đổi dấu tất cả các hạng tử của $B(x)$ khi trừ: $(4-2)x^2 + (-3-1)x + (5 - (-1))$.',
    solution: 'Ta có $A(x) - B(x) = (4x^2 - 3x + 5) - (2x^2 + x - 1) = 4x^2 - 3x + 5 - 2x^2 - x + 1 = (4-2)x^2 + (-3-1)x + (5+1) = 2x^2 - 4x + 6$.'
  },
  {
    id: 'ch7_l26_q5',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 5,
    title: 'Cộng đa thức theo cột dọc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Cột dọc', '#Khuyết hạng tử', '#Thông hiểu'],
    question: 'Khi cộng hai đa thức theo cột dọc, nếu một đa thức khuyết hạng tử bậc nào thì ta cần:',
    options: [
      'Để trống vị trí của hạng tử bậc đó hoặc ghi hệ số $0$',
      'Bỏ qua không cần chừa chỗ',
      'Điền số $1$ vào vị trí đó',
      'Đổi dấu các hạng tử tiếp theo'
    ],
    correctIndex: 0,
    hint: 'Cần đặt các hạng tử cùng bậc thẳng cột với nhau; nếu khuyết bậc nào thì để khoảng trống hoặc ghi $0x^k$.',
    solution: 'Theo quy tắc đặt phép tính theo cột dọc, các đơn thức cùng bậc phải được đặt thẳng cột. Nếu đa thức khuyết bậc nào thì để trống vị trí đó hoặc viết thêm với hệ số 0.'
  },
  {
    id: 'ch7_l26_q6',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 6,
    title: 'Tìm đa thức chưa biết trong phép cộng',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm đa thức', '#Chuyển vế', '#Thông hiểu'],
    question: 'Tìm đa thức $M(x)$ biết $M(x) + (x^2 - 3x + 2) = 3x^2 - x + 5$:',
    options: [
      '$M(x) = 2x^2 + 2x + 3$',
      '$M(x) = 4x^2 - 4x + 7$',
      '$M(x) = 2x^2 - 4x + 3$',
      '$M(x) = 2x^2 + 2x + 7$'
    ],
    correctIndex: 0,
    hint: '$M(x) = (3x^2 - x + 5) - (x^2 - 3x + 2)$.',
    solution: 'Ta có $M(x) = (3x^2 - x + 5) - (x^2 - 3x + 2) = 3x^2 - x + 5 - x^2 + 3x - 2 = 2x^2 + 2x + 3$.'
  },
  {
    id: 'ch7_l26_q7',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 7,
    title: 'Tìm đa thức chưa biết trong phép trừ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Số trừ', '#Thông hiểu'],
    question: 'Tìm đa thức $N(x)$ biết $(5x^3 - 2x + 1) - N(x) = 2x^3 - 4x - 3$:',
    options: [
      '$N(x) = 3x^3 + 2x + 4$',
      '$N(x) = 7x^3 - 6x - 2$',
      '$N(x) = 3x^3 - 6x - 2$',
      '$N(x) = -3x^3 - 2x - 4$'
    ],
    correctIndex: 0,
    hint: 'Đa thức trừ bằng số bị trừ trừ đi hiệu: $N(x) = (5x^3 - 2x + 1) - (2x^3 - 4x - 3)$.',
    solution: 'Ta có $N(x) = (5x^3 - 2x + 1) - (2x^3 - 4x - 3) = 5x^3 - 2x + 1 - 2x^3 + 4x + 3 = 3x^3 + 2x + 4$.'
  },
  {
    id: 'ch7_l26_q8',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 8,
    title: 'Bậc của đa thức tổng khi hai đa thức cùng bậc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bậc đa thức tổng', '#Triệt tiêu', '#Thông hiểu'],
    question: 'Cho hai đa thức $A(x) = -2x^3 + 4x - 1$ và $B(x) = 2x^3 + 5x^2 - 3$. Bậc của đa thức $A(x) + B(x)$ là:',
    options: [
      '$2$',
      '$3$',
      '$5$',
      '$1$'
    ],
    correctIndex: 0,
    hint: 'Thực hiện phép cộng: hạng tử bậc 3 là $(-2 + 2)x^3 = 0$. Hạng tử bậc cao nhất còn lại là $5x^2$.',
    solution: 'Cộng hai đa thức: $A(x) + B(x) = (-2x^3 + 2x^3) + 5x^2 + 4x + (-1 - 3) = 5x^2 + 4x - 4$.\nHạng tử bậc cao nhất là $5x^2$, nên bậc của đa thức tổng là 2.'
  },
  {
    id: 'ch7_l26_q9',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 9,
    title: 'Tính giá trị của đa thức tổng tại x0',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Giá trị tổng', '#Thông hiểu'],
    question: 'Cho $P(x) = x^2 - 3x + 2$ và $Q(x) = 2x^2 + 3x - 5$. Giá trị của $P(x) + Q(x)$ tại $x = -2$ là:',
    options: [
      '$9$',
      '$-3$',
      '$15$',
      '$6$'
    ],
    correctIndex: 0,
    hint: 'Tính $P(x) + Q(x) = 3x^2 - 3$. Sau đó thay $x = -2$ vào: $3(-2)^2 - 3$.',
    solution: 'Ta có $P(x) + Q(x) = (x^2 + 2x^2) + (-3x + 3x) + (2 - 5) = 3x^2 - 3$.\nTại $x = -2$, giá trị là: $3 \\cdot (-2)^2 - 3 = 3 \\cdot 4 - 3 = 12 - 3 = 9$.'
  },
  {
    id: 'ch7_l26_q10',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 10,
    title: 'Đa thức đối của một đa thức',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đa thức đối', '#Thông hiểu'],
    question: 'Đa thức đối của đa thức $P(x) = 3x^3 - 4x^2 + 2x - 5$ là:',
    options: [
      '$-3x^3 + 4x^2 - 2x + 5$',
      '$-3x^3 - 4x^2 + 2x - 5$',
      '$3x^3 + 4x^2 - 2x + 5$',
      '$-3x^3 + 4x^2 + 2x - 5$'
    ],
    correctIndex: 0,
    hint: 'Đa thức đối của $P(x)$ là $-P(x)$. Đổi dấu tất cả các hạng tử của $P(x)$.',
    solution: 'Đa thức đối của $P(x)$ là $-P(x) = -(3x^3 - 4x^2 + 2x - 5) = -3x^3 + 4x^2 - 2x + 5$.'
  },
  {
    id: 'ch7_l26_q11',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 11,
    title: 'Tìm nghiệm của đa thức hiệu',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Nghiệm đa thức hiệu', '#Vận dụng'],
    question: 'Cho hai đa thức $A(x) = 3x^2 - 2x + 7$ và $B(x) = 2x^2 - 2x + 3$. Nghiệm của đa thức $A(x) - B(x)$ là:',
    options: [
      'Đa thức vô nghiệm',
      '$x = 2$ và $x = -2$',
      '$x = 4$',
      '$x = 0$'
    ],
    correctIndex: 0,
    hint: 'Tính $A(x) - B(x) = x^2 + 4$. Nhận xét $x^2 + 4 > 0$ với mọi $x$.',
    solution: 'Ta có $A(x) - B(x) = (3x^2 - 2x^2) + (-2x - (-2x)) + (7 - 3) = x^2 + 4$.\nVì $x^2 \\ge 0$ nên $x^2 + 4 \\ge 4 > 0$ với mọi $x \\in \\mathbb{R}$. Do đó đa thức hiệu không có nghiệm (vô nghiệm).'
  },
  {
    id: 'ch7_l26_q12',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 12,
    title: 'Tìm hệ số để đa thức tổng có bậc cho trước',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tìm hệ số', '#Triệt tiêu bậc', '#Vận dụng'],
    question: 'Cho $P(x) = (m - 3)x^3 + 2x^2 - 5$ và $Q(x) = 4x^3 - x + 1$. Giá trị của $m$ để đa thức tổng $P(x) + Q(x)$ có bậc là 2 là:',
    options: [
      '$m = -1$',
      '$m = 3$',
      '$m = 7$',
      '$m = -4$'
    ],
    correctIndex: 0,
    hint: 'Để bậc của tổng là 2 thì hệ số của $x^3$ phải bằng 0: $(m - 3) + 4 = 0$.',
    solution: 'Ta có $P(x) + Q(x) = [(m - 3) + 4]x^3 + 2x^2 - x - 4 = (m + 1)x^3 + 2x^2 - x - 4$.\nĐể đa thức tổng có bậc là 2 thì hệ số của $x^3$ phải bằng 0:\n$m + 1 = 0 \\implies m = -1$.'
  },
  {
    id: 'ch7_l26_q13',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 13,
    title: 'Bài toán thực tế chu vi đa giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hình học', '#Chu vi', '#Vận dụng'],
    question: 'Một hình tam giác có độ dài ba cạnh lần lượt là $x + 2\\text{ (cm)}, 2x - 1\\text{ (cm)}$ và $3x + 5\\text{ (cm)}$. Biểu thức biểu thị chu vi tam giác đó và giá trị chu vi khi $x = 4$ lần lượt là:',
    options: [
      '$6x + 6\\text{ (cm)}$; chu vi bằng $30\\text{ cm}$',
      '$5x + 6\\text{ (cm)}$; chu vi bằng $26\\text{ cm}$',
      '$6x + 8\\text{ (cm)}$; chu vi bằng $32\\text{ cm}$',
      '$6x + 6\\text{ (cm)}$; chu vi bằng $24\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Chu vi tam giác là tổng độ dài 3 cạnh: $P = (x + 2) + (2x - 1) + (3x + 5)$. Sau đó thay $x = 4$.',
    solution: 'Chu vi tam giác là: $P = (x + 2) + (2x - 1) + (3x + 5) = (1+2+3)x + (2 - 1 + 5) = 6x + 6\\text{ (cm)}$.\nKhi $x = 4$, chu vi là: $P = 6 \\cdot 4 + 6 = 24 + 6 = 30\\text{ cm}$.'
  },
  {
    id: 'ch7_l26_q14',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 14,
    title: 'Hiệu hai đa thức luôn nhận giá trị không đổi',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Giá trị không đổi', '#Vận dụng'],
    question: 'Cho $A(x) = 2x^2 + 5x - 4$ và $B(x) = 2x^2 + 5x + 3$. Giá trị của $A(x) - B(x)$ là:',
    options: [
      '$-7$ với mọi giá trị của $x$',
      '$7$ với mọi giá trị của $x$',
      '$-1$',
      'Phụ thuộc vào biến $x$'
    ],
    correctIndex: 0,
    hint: 'Tính $A(x) - B(x)$: Các hạng tử chứa $x^2$ và $x$ đều triệt tiêu: $(2-2)x^2 + (5-5)x + (-4 - 3)$.',
    solution: 'Ta có $A(x) - B(x) = (2x^2 - 2x^2) + (5x - 5x) + (-4 - 3) = -7$.\nKết quả là một hằng số $-7$ không phụ thuộc vào giá trị của biến $x$.'
  },
  {
    id: 'ch7_l26_q15',
    lessonId: 'bai_26_phep_cong_va_phep_tru_da_thuc_mot_bien',
    order: 15,
    title: 'Tính giá trị biểu thức kết hợp phép tính đa thức',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tổng hiệu đa thức', '#Vận dụng'],
    question: 'Cho ba đa thức $P(x) = x^2 - x + 1$, $Q(x) = 2x^2 + 3$, $R(x) = -x^2 + 2x - 4$. Đa thức $P(x) - Q(x) + R(x)$ là:',
    options: [
      '$-2x^2 + x - 6$',
      '$-2x^2 - 3x - 6$',
      '$2x^2 + x + 6$',
      '$-2x^2 + x + 2$'
    ],
    correctIndex: 0,
    hint: 'Thu gọn từng hệ số theo bậc: $(1 - 2 - 1)x^2 + (-1 - 0 + 2)x + (1 - 3 - 4)$.',
    solution: 'Ta có:\nHệ số bậc 2: $1 - 2 + (-1) = -2$.\nHệ số bậc 1: $-1 - 0 + 2 = 1$.\nHệ số tự do: $1 - 3 + (-4) = -6$.\nVậy kết quả là $-2x^2 + x - 6$.'
  },

  // ==========================================================================
  // BÀI 27: PHÉP NHÂN ĐA THỨC MỘT BIẾN (12 CÂU)
  // ==========================================================================

  {
    id: 'ch7_l27_q1',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 1,
    title: 'Nhân hai đơn thức một biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Nhân đơn thức', '#Cơ bản'],
    question: 'Kết quả của phép nhân $3x^2 \\cdot (-2x^3)$ là:',
    options: [
      '$-6x^5$',
      '$-6x^6$',
      '$x^5$',
      '$6x^5$'
    ],
    correctIndex: 0,
    hint: 'Nhân hệ số với hệ số, nhân phần biến với phần biến: $3 \\cdot (-2) = -6$ và $x^2 \\cdot x^3 = x^{2+3} = x^5$.',
    solution: 'Ta có $3x^2 \\cdot (-2x^3) = [3 \\cdot (-2)] \\cdot (x^2 \\cdot x^3) = -6x^{2+3} = -6x^5$.'
  },
  {
    id: 'ch7_l27_q2',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 2,
    title: 'Nhân đơn thức với đa thức cơ bản',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Nhân đơn thức với đa thức', '#Cơ bản'],
    question: 'Thực hiện phép tính $2x \\cdot (3x^2 - 4x + 1)$:',
    options: [
      '$6x^3 - 8x^2 + 2x$',
      '$6x^3 - 8x + 2$',
      '$6x^2 - 8x + 2$',
      '$5x^3 - 6x^2 + 3x$'
    ],
    correctIndex: 0,
    hint: 'Nhân $2x$ với từng hạng tử trong ngoặc: $2x \\cdot 3x^2 - 2x \\cdot 4x + 2x \\cdot 1$.',
    solution: 'Ta có $2x(3x^2 - 4x + 1) = 2x \\cdot 3x^2 - 2x \\cdot 4x + 2x \\cdot 1 = 6x^3 - 8x^2 + 2x$.'
  },
  {
    id: 'ch7_l27_q3',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 3,
    title: 'Nhân hai đa thức bậc nhất',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Nhân hai đa thức', '#Cơ bản'],
    question: 'Tích của hai đa thức $(x + 2)(x + 3)$ là:',
    options: [
      '$x^2 + 5x + 6$',
      '$x^2 + 6x + 5$',
      '$x^2 + 5x + 5$',
      '$x^2 + 6$'
    ],
    correctIndex: 0,
    hint: 'Khai triển: $x(x + 3) + 2(x + 3) = x^2 + 3x + 2x + 6$.',
    solution: 'Ta có $(x + 2)(x + 3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.'
  },
  {
    id: 'ch7_l27_q4',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 4,
    title: 'Nhân hai nhị thức có dấu trừ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Nhân đa thức', '#Dấu trừ', '#Cơ bản'],
    question: 'Khai triển tích $(x - 4)(x + 4)$ được kết quả là:',
    options: [
      '$x^2 - 16$',
      '$x^2 + 16$',
      '$x^2 - 8x + 16$',
      '$x^2 - 8$'
    ],
    correctIndex: 0,
    hint: '$(x - 4)(x + 4) = x^2 + 4x - 4x - 16 = x^2 - 16$ (hằng đẳng thức hiệu hai bình phương).',
    solution: 'Ta có $(x - 4)(x + 4) = x^2 + 4x - 4x - 16 = x^2 - 16$.'
  },
  {
    id: 'ch7_l27_q5',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 5,
    title: 'Bậc của đa thức tích',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bậc đa thức tích', '#Thông hiểu'],
    question: 'Đa thức $P(x)$ có bậc $3$ và đa thức $Q(x)$ có bậc $4$ (cả hai đa thức đều khác đa thức không). Bậc của đa thức tích $P(x) \\cdot Q(x)$ là:',
    options: [
      '$7$',
      '$12$',
      '$4$',
      '$1$'
    ],
    correctIndex: 0,
    hint: 'Bậc của tích hai đa thức khác 0 bằng TỔNG hai bậc của chúng: $3 + 4 = 7$.',
    solution: 'Khi nhân hai đa thức khác 0, hạng tử có bậc cao nhất của tích là tích của hai hạng tử có bậc cao nhất của từng đa thức: $x^3 \\cdot x^4 = x^{3+4} = x^7$. Do đó bậc của tích là 7.'
  },
  {
    id: 'ch7_l27_q6',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 6,
    title: 'Nhân đa thức với đa thức bậc hai',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Nhân đa thức bậc 2', '#Thông hiểu'],
    question: 'Rút gọn biểu thức $(x - 1)(x^2 + x + 1)$:',
    options: [
      '$x^3 - 1$',
      '$x^3 + 1$',
      '$x^3 - 2x - 1$',
      '$x^3 - x^2 + 1$'
    ],
    correctIndex: 0,
    hint: 'Nhân từng hạng tử: $x(x^2 + x + 1) - 1(x^2 + x + 1) = x^3 + x^2 + x - x^2 - x - 1$.',
    solution: 'Ta có $(x - 1)(x^2 + x + 1) = x^3 + x^2 + x - x^2 - x - 1 = x^3 - 1$.'
  },
  {
    id: 'ch7_l27_q7',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 7,
    title: 'Rút gọn biểu thức chứa phép nhân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Rút gọn', '#Phép nhân', '#Thông hiểu'],
    question: 'Rút gọn biểu thức $A = x(x^2 - 3) - x^2(x + 1)$:',
    options: [
      '$-x^2 - 3x$',
      '$x^2 - 3x$',
      '$-x^2 + 3x$',
      '$2x^3 - x^2 - 3x$'
    ],
    correctIndex: 0,
    hint: 'Khai triển: $x^3 - 3x - x^3 - x^2 = -x^2 - 3x$.',
    solution: 'Ta có $A = x \\cdot x^2 - x \\cdot 3 - x^2 \\cdot x - x^2 \\cdot 1 = x^3 - 3x - x^3 - x^2 = -x^2 - 3x$.'
  },
  {
    id: 'ch7_l27_q8',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 8,
    title: 'Hệ số của một hạng tử trong tích',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hệ số trong tích', '#Thông hiểu'],
    question: 'Hệ số của $x^2$ trong khai triển của tích $(2x - 3)(x^2 + 4x - 5)$ là:',
    options: [
      '$5$',
      '$8$',
      '$-3$',
      '$-12$'
    ],
    correctIndex: 0,
    hint: 'Hạng tử bậc 2 được tạo từ: $2x \\cdot 4x = 8x^2$ và $-3 \\cdot x^2 = -3x^2$. Cộng hai hệ số: $8 + (-3) = 5$.',
    solution: 'Các phép nhân tạo ra hạng tử chứa $x^2$ là:\n$2x \\cdot (4x) = 8x^2$\n$-3 \\cdot (x^2) = -3x^2$\nTổng các hạng tử chứa $x^2$ là $8x^2 - 3x^2 = 5x^2$. Do đó hệ số của $x^2$ là 5.'
  },
  {
    id: 'ch7_l27_q9',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 9,
    title: 'Chứng minh giá trị biểu thức không phụ thuộc vào biến',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Không phụ thuộc biến', '#Vận dụng'],
    question: 'Rút gọn biểu thức $P = (x - 2)(x + 5) - (x + 1)(x + 2)$:',
    options: [
      '$-12$',
      '$12$',
      '$2x - 12$',
      '$-10$'
    ],
    correctIndex: 0,
    hint: 'Khai triển từng tích: $(x^2 + 3x - 10) - (x^2 + 3x + 2)$.',
    solution: 'Khai triển:\n$(x - 2)(x + 5) = x^2 + 5x - 2x - 10 = x^2 + 3x - 10$\n$(x + 1)(x + 2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$\nHiệu là: $P = (x^2 + 3x - 10) - (x^2 + 3x + 2) = -10 - 2 = -12$.\nGiá trị của $P$ luôn bằng $-12$ không phụ thuộc vào biến $x$.'
  },
  {
    id: 'ch7_l27_q10',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 10,
    title: 'Tìm x trong phương trình chứa phép nhân đa thức',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tìm x', '#Phương trình nhân', '#Vận dụng'],
    question: 'Tìm $x$ biết $(x + 3)(x - 2) - x^2 = 7$:',
    options: [
      '$x = 13$',
      '$x = 1$',
      '$x = -13$',
      '$x = 7$'
    ],
    correctIndex: 0,
    hint: 'Khai triển: $(x^2 + x - 6) - x^2 = 7 \\implies x - 6 = 7$.',
    solution: 'Ta có $(x + 3)(x - 2) - x^2 = 7$\n$\\iff (x^2 - 2x + 3x - 6) - x^2 = 7$\n$\\iff x - 6 = 7 \\iff x = 13$.'
  },
  {
    id: 'ch7_l27_q11',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 11,
    title: 'Bài toán diện tích phần lối đi trong vườn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hình học', '#Thực tế', '#Vận dụng'],
    question: 'Một mảnh vườn hình chữ nhật có chiều dài $20\\text{ m}$ và chiều rộng $15\\text{ m}$. Người ta làm một lối đi xung quanh vườn có chiều rộng $x\\text{ m}$ ($0 < x < 7{,}5$). Diện tích phần đất còn lại bên trong vườn để trồng hoa là:',
    options: [
      '$(20 - 2x)(15 - 2x)$',
      '$(20 - x)(15 - x)$',
      '$300 - 2x$',
      '$300 - 35x$'
    ],
    correctIndex: 0,
    hint: 'Lối đi nằm ở cả 2 phía chiều dài và cả 2 phía chiều rộng nên chiều dài còn lại là $20 - 2x$ và chiều rộng còn lại là $15 - 2x$.',
    solution: 'Vì lối đi bao quanh vườn nên ở mỗi chiều đều bị bớt đi hai lần độ rộng lối đi:\nChiều dài trồng hoa là: $20 - 2x\\text{ (m)}$.\nChiều rộng trồng hoa là: $15 - 2x\\text{ (m)}$.\nDiện tích trồng hoa là: $(20 - 2x)(15 - 2x)\\text{ (m}^2\\text{)}$.'
  },
  {
    id: 'ch7_l27_q12',
    lessonId: 'bai_27_phep_nhan_da_thuc_mot_bien',
    order: 12,
    title: 'Khai triển bình phương của một hiệu',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Bình phương hiệu', '#Vận dụng'],
    question: 'Khai triển biểu thức $(2x - 3)^2$ ta được đa thức:',
    options: [
      '$4x^2 - 12x + 9$',
      '$4x^2 - 9$',
      '$4x^2 - 6x + 9$',
      '$2x^2 - 12x + 9$'
    ],
    correctIndex: 0,
    hint: '$(2x - 3)^2 = (2x - 3)(2x - 3) = (2x)^2 - 2 \\cdot 2x \\cdot 3 + 3^2$.',
    solution: 'Ta có $(2x - 3)^2 = (2x - 3)(2x - 3) = 2x(2x - 3) - 3(2x - 3) = 4x^2 - 6x - 6x + 9 = 4x^2 - 12x + 9$.'
  },

  // ==========================================================================
  // BÀI 28: PHÉP CHIA ĐA THỨC MỘT BIẾN (12 CÂU)
  // ==========================================================================

  {
    id: 'ch7_l28_q1',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 1,
    title: 'Chia hai đơn thức một biến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chia đơn thức', '#Cơ bản'],
    question: 'Kết quả của phép chia $12x^5 : 4x^2$ ($x \\neq 0$) là:',
    options: [
      '$3x^3$',
      '$3x^{2{,}5}$',
      '$8x^3$',
      '$3x^7$'
    ],
    correctIndex: 0,
    hint: 'Chia hệ số cho hệ số, chia lũy thừa cho lũy thừa: $(12 : 4)x^{5 - 2} = 3x^3$.',
    solution: 'Áp dụng quy tắc chia hai đơn thức: $12x^5 : 4x^2 = (12 : 4) \\cdot (x^5 : x^2) = 3x^{5 - 2} = 3x^3$.'
  },
  {
    id: 'ch7_l28_q2',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 2,
    title: 'Chia đơn thức khi số mũ bằng nhau',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cùng số mũ', '#Mũ 0', '#Cơ bản'],
    question: 'Kết quả của phép chia $-15x^4 : 3x^4$ ($x \\neq 0$) là:',
    options: [
      '$-5$',
      '$-5x$',
      '$-5x^8$',
      '$5$'
    ],
    correctIndex: 0,
    hint: '$x^4 : x^4 = x^0 = 1$. Kết quả chỉ còn phần hệ số.',
    solution: 'Ta có $-15x^4 : 3x^4 = (-15 : 3) \\cdot (x^4 : x^4) = -5 \\cdot 1 = -5$.'
  },
  {
    id: 'ch7_l28_q3',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 3,
    title: 'Chia đa thức cho đơn thức',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chia đa thức cho đơn thức', '#Cơ bản'],
    question: 'Thực hiện phép tính $(6x^4 - 9x^3 + 3x^2) : 3x^2$ ($x \\neq 0$):',
    options: [
      '$2x^2 - 3x + 1$',
      '$2x^2 - 3x$',
      '$2x^2 - 3x + 3$',
      '$3x^2 - 6x + 1$'
    ],
    correctIndex: 0,
    hint: 'Chia từng hạng tử của đa thức cho $3x^2$: $\\frac{6x^4}{3x^2} - \\frac{9x^3}{3x^2} + \\frac{3x^2}{3x^2}$.',
    solution: 'Ta có $(6x^4 - 9x^3 + 3x^2) : 3x^2 = (6x^4 : 3x^2) - (9x^3 : 3x^2) + (3x^2 : 3x^2) = 2x^2 - 3x + 1$.'
  },
  {
    id: 'ch7_l28_q4',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 4,
    title: 'Điều kiện chia hết của đơn thức',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Điều kiện chia hết', '#Cơ bản'],
    question: 'Đơn thức $A = 8x^n$ chia hết cho đơn thức $B = 2x^3$ khi và chỉ khi số tự nhiên $n$ thỏa mãn:',
    options: [
      '$n \\ge 3$',
      '$n \\le 3$',
      '$n = 3$',
      '$n > 0$'
    ],
    correctIndex: 0,
    hint: 'Đơn thức $x^n$ chia hết cho $x^m$ khi và chỉ khi số mũ $n \\ge m$.',
    solution: 'Để đơn thức $8x^n$ chia hết cho $2x^3$ thì số mũ của biến trong đơn thức bị chia phải lớn hơn hoặc bằng số mũ trong đơn thức chia: $n \\ge 3$.'
  },
  {
    id: 'ch7_l28_q5',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 5,
    title: 'Phép chia hết hai đa thức đã sắp xếp',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Chia hết', '#Đa thức đã sắp xếp', '#Thông hiểu'],
    question: 'Thương của phép chia $(x^2 - 5x + 6) : (x - 2)$ là:',
    options: [
      '$x - 3$',
      '$x + 3$',
      '$x - 2$',
      '$x + 1$'
    ],
    correctIndex: 0,
    hint: 'Phân tích $x^2 - 5x + 6 = (x - 2)(x - 3)$. Lấy tích chia cho $(x - 2)$.',
    solution: 'Ta có $x^2 - 5x + 6 = x^2 - 2x - 3x + 6 = x(x - 2) - 3(x - 2) = (x - 2)(x - 3)$.\nDo đó $(x^2 - 5x + 6) : (x - 2) = x - 3$.'
  },
  {
    id: 'ch7_l28_q6',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 6,
    title: 'Xác định đa thức dư trong phép chia có dư',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Chia có dư', '#Đa thức dư', '#Thông hiểu'],
    question: 'Trong phép chia đa thức $A$ cho đa thức $B$ khác đa thức không, bậc của đa thức dư $R$ phải thỏa mãn điều kiện gì?',
    options: [
      'Bậc của $R$ nhỏ hơn bậc của $B$ (hoặc $R = 0$)',
      'Bậc của $R$ bằng bậc của $B$',
      'Bậc của $R$ lớn hơn bậc của $B$',
      'Bậc của $R$ luôn bằng 0'
    ],
    correctIndex: 0,
    hint: 'Phép chia dừng lại khi bậc của đa thức dư nhỏ hơn bậc của đa thức chia.',
    solution: 'Theo định nghĩa phép chia đa thức một biến: $A = B \\cdot Q + R$, trong đó đa thức dư $R$ có bậc nhỏ hơn bậc của đa thức chia $B$, hoặc $R = 0$ (phép chia hết).'
  },
  {
    id: 'ch7_l28_q7',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 7,
    title: 'Tìm phần dư của phép chia',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm phần dư', '#Thông hiểu'],
    question: 'Phần dư của phép chia $(x^2 + 3x + 5) : (x + 1)$ là:',
    options: [
      '$3$',
      '$5$',
      '$0$',
      '$-3$'
    ],
    correctIndex: 0,
    hint: 'Đặt tính chia: $x^2 + 3x + 5 = (x + 1)(x + 2) + 3$.',
    solution: 'Ta có $x^2 + 3x + 5 = x(x + 1) + 2(x + 1) + 3 = (x + 1)(x + 2) + 3$.\nThương là $x + 2$ và phần dư là 3.'
  },
  {
    id: 'ch7_l28_q8',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 8,
    title: 'Chia đa thức bậc ba cho nhị thức bậc nhất',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Chia bậc 3', '#Thông hiểu'],
    question: 'Kết quả của phép chia $(x^3 - 8) : (x - 2)$ là:',
    options: [
      '$x^2 + 2x + 4$',
      '$x^2 - 2x + 4$',
      '$x^2 - 4$',
      '$x^2 + 4$'
    ],
    correctIndex: 0,
    hint: 'Nhận xét $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ (hằng đẳng thức hiệu hai lập phương).',
    solution: 'Ta có $(x - 2)(x^2 + 2x + 4) = x^3 + 2x^2 + 4x - 2x^2 - 4x - 8 = x^3 - 8$.\nDo đó $(x^3 - 8) : (x - 2) = x^2 + 2x + 4$.'
  },
  {
    id: 'ch7_l28_q9',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 9,
    title: 'Tìm tham số a để phép chia là phép chia hết',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tìm tham số a', '#Chia hết', '#Vận dụng'],
    question: 'Tìm $a$ để đa thức $A(x) = 2x^2 - 3x + a$ chia hết cho đa thức $B(x) = x - 2$:',
    options: [
      '$a = -2$',
      '$a = 2$',
      '$a = -10$',
      '$a = 6$'
    ],
    correctIndex: 0,
    hint: 'Để $A(x)$ chia hết cho $x - 2$ thì phần dư khi thay $x = 2$ phải bằng 0: $A(2) = 0$.',
    solution: 'Theo định lí Bézout (hoặc đặt tính chia), số dư của phép chia $A(x)$ cho $x - 2$ chính là giá trị $A(2)$:\n$A(2) = 2 \\cdot 2^2 - 3 \\cdot 2 + a = 8 - 6 + a = 2 + a$.\nĐể phép chia là phép chia hết thì số dư phải bằng 0:\n$2 + a = 0 \\implies a = -2$.'
  },
  {
    id: 'ch7_l28_q10',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 10,
    title: 'Tìm giá trị nguyên của biến để phân thức nhận giá trị nguyên',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Giá trị nguyên', '#Vận dụng'],
    question: 'Có bao nhiêu số nguyên $x$ để đa thức $2x + 5$ chia hết cho $x + 1$?',
    options: [
      '$4$ số nguyên',
      '$2$ số nguyên',
      '$6$ số nguyên',
      '$1$ số nguyên'
    ],
    correctIndex: 0,
    hint: 'Tách tử: $2x + 5 = 2(x + 1) + 3$. Để chia hết thì $x + 1$ phải là ước của 3.',
    solution: 'Ta có $\\frac{2x + 5}{x + 1} = \\frac{2(x + 1) + 3}{x + 1} = 2 + \\frac{3}{x + 1}$.\nĐể $2x + 5$ chia hết cho $x + 1$ thì $x + 1$ phải là ước của 3:\n$x + 1 \\in \\{\\pm 1; \\pm 3\\} \\implies x \\in \\{0; -2; 2; -4\\}$.\nCó 4 giá trị nguyên của $x$.'
  },
  {
    id: 'ch7_l28_q11',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 11,
    title: 'Ứng dụng hình học: Chiều rộng hình chữ nhật',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hình học', '#Thực tế', '#Vận dụng'],
    question: 'Một hình chữ nhật có diện tích được biểu thị bởi đa thức $S(x) = 2x^2 + 7x + 3$ và chiều dài là $2x + 1$ (với $x > 0$). Chiều rộng của hình chữ nhật đó là:',
    options: [
      '$x + 3$',
      '$x - 3$',
      '$2x + 3$',
      '$x + 1$'
    ],
    correctIndex: 0,
    hint: 'Chiều rộng bằng diện tích chia cho chiều dài: $(2x^2 + 7x + 3) : (2x + 1)$.',
    solution: 'Ta có $2x^2 + 7x + 3 = 2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3)$.\nChiều rộng của hình chữ nhật là:\n$(2x^2 + 7x + 3) : (2x + 1) = x + 3$.'
  },
  {
    id: 'ch7_l28_q12',
    lessonId: 'bai_28_phep_chia_da_thuc_mot_bien',
    order: 12,
    title: 'Tìm thương và dư của đa thức bậc cao',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Chia đa thức bậc 4', '#Vận dụng'],
    question: 'Cho phép chia $(x^4 - 2x^2 + 3) : (x^2 - 1)$. Đa thức thương $Q(x)$ và phần dư $R(x)$ lần lượt là:',
    options: [
      '$Q(x) = x^2 - 1$ và $R(x) = 2$',
      '$Q(x) = x^2 - 1$ và $R(x) = 0$',
      '$Q(x) = x^2 + 1$ và $R(x) = 4$',
      '$Q(x) = x^2 - 2$ và $R(x) = 1$'
    ],
    correctIndex: 0,
    hint: 'Đặt $t = x^2$. Biểu thức trở thành $(t^2 - 2t + 3) : (t - 1) = (t - 1) + \\frac{2}{t - 1}$.',
    solution: 'Ta có $x^4 - 2x^2 + 3 = (x^4 - 2x^2 + 1) + 2 = (x^2 - 1)^2 + 2 = (x^2 - 1)(x^2 - 1) + 2$.\nThương là $Q(x) = x^2 - 1$ và phần dư là $R(x) = 2$.'
  }
];

export default chapter7Exercises;
