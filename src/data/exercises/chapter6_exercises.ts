import { PracticeExercise } from '../../types/curriculum';

export const chapter6Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 20: TỈ LỆ THỨC (15 CÂU)
  // ==========================================================================

  {
    id: 'ch6_l20_q1',
    lessonId: 'bai_20_ti_le_thuc',
    order: 1,
    title: 'Định nghĩa tỉ lệ thức',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tỉ lệ thức', '#Định nghĩa', '#Cơ bản'],
    question: 'Tỉ lệ thức là đẳng thức của hai tỉ số có dạng nào sau đây?',
    options: [
      '$\\frac{a}{b} = \\frac{c}{d}$ (với $b, d \\neq 0$)',
      '$\\frac{a}{b} + \\frac{c}{d} = 0$',
      '$a \\cdot b = c \\cdot d$',
      '$\\frac{a}{c} = \\frac{d}{b}$ (với $a, d = 0$)'
    ],
    correctIndex: 0,
    hint: 'Theo SGK Toán 7, tỉ lệ thức là đẳng thức của hai tỉ số $\\frac{a}{b} = \\frac{c}{d}$ (còn viết là $a : b = c : d$).',
    solution: 'Tỉ lệ thức là đẳng thức của hai tỉ số $\\frac{a}{b} = \\frac{c}{d}$ với các mẫu số $b, d \\neq 0$. Các số hạng $a, d$ gọi là ngoại tỉ, $b, c$ gọi là trung tỉ.'
  },
  {
    id: 'ch6_l20_q2',
    lessonId: 'bai_20_ti_le_thuc',
    order: 2,
    title: 'Nhận biết cặp tỉ số lập thành tỉ lệ thức',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Lập tỉ lệ thức', '#Rút gọn', '#Cơ bản'],
    question: 'Cặp tỉ số nào sau đây lập thành một tỉ lệ thức?',
    options: [
      '$\\frac{12}{16}$ và $\\frac{15}{20}$',
      '$\\frac{3}{5}$ và $\\frac{6}{15}$',
      '$\\frac{4}{7}$ và $\\frac{8}{21}$',
      '$\\frac{5}{2}$ và $\\frac{2}{5}$'
    ],
    correctIndex: 0,
    hint: 'Rút gọn hai tỉ số về phân số tối giản hoặc kiểm tra tích chéo $a \\cdot d = b \\cdot c$.',
    solution: 'Ta có $\\frac{12}{16} = \\frac{3}{4}$ và $\\frac{15}{20} = \\frac{3}{4}$.\nVì $\\frac{12}{16} = \\frac{15}{20} = \\frac{3}{4}$ nên hai tỉ số này lập thành tỉ lệ thức.'
  },
  {
    id: 'ch6_l20_q3',
    lessonId: 'bai_20_ti_le_thuc',
    order: 3,
    title: 'Tính chất cơ bản của tỉ lệ thức (tích chéo)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tích chéo', '#Ngoại tỉ', '#Cơ bản'],
    question: 'Nếu $\\frac{a}{b} = \\frac{c}{d}$ ($b, d \\neq 0$) thì khẳng định nào sau đây là đúng?',
    options: [
      '$a \\cdot d = b \\cdot c$',
      '$a \\cdot b = c \\cdot d$',
      '$a \\cdot c = b \\cdot d$',
      '$a + d = b + c$'
    ],
    correctIndex: 0,
    hint: 'Tính chất cơ bản của tỉ lệ thức: Tích các ngoại tỉ bằng tích các trung tỉ.',
    solution: 'Theo tính chất cơ bản của tỉ lệ thức, nếu $\\frac{a}{b} = \\frac{c}{d}$ thì tích chéo $a \\cdot d = b \\cdot c$.'
  },
  {
    id: 'ch6_l20_q4',
    lessonId: 'bai_20_ti_le_thuc',
    order: 4,
    title: 'Tìm x trong tỉ lệ thức cơ bản',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tìm x', '#Tỉ lệ thức', '#Cơ bản'],
    question: 'Tìm $x$ biết $\\frac{x}{6} = \\frac{5}{3}$:',
    options: [
      '$x = 10$',
      '$x = 9$',
      '$x = 12$',
      '$x = 15$'
    ],
    correctIndex: 0,
    hint: 'Sử dụng công thức nhân chéo chia ngang: $x = \\frac{6 \\cdot 5}{3}$.',
    solution: 'Từ $\\frac{x}{6} = \\frac{5}{3}$, ta suy ra:\n$x \\cdot 3 = 6 \\cdot 5 \\implies 3x = 30 \\implies x = 10$.'
  },
  {
    id: 'ch6_l20_q5',
    lessonId: 'bai_20_ti_le_thuc',
    order: 5,
    title: 'Tìm x ở vị trí mẫu số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tìm x', '#Mẫu số', '#Cơ bản'],
    question: 'Tìm $x$ trong tỉ lệ thức $\\frac{14}{x} = \\frac{21}{15}$:',
    options: [
      '$x = 10$',
      '$x = 8$',
      '$x = 12$',
      '$x = 7$'
    ],
    correctIndex: 0,
    hint: 'Nhân chéo: $21 \\cdot x = 14 \\cdot 15 \\implies x = \\frac{14 \\cdot 15}{21}$.',
    solution: 'Ta có $21 \\cdot x = 14 \\cdot 15 = 210 \\implies x = \\frac{210}{21} = 10$.'
  },
  {
    id: 'ch6_l20_q6',
    lessonId: 'bai_20_ti_le_thuc',
    order: 6,
    title: 'Các tỉ lệ thức suy ra từ đẳng thức tích',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hoán vị', '#Đẳng thức tích', '#Thông hiểu'],
    question: 'Từ đẳng thức $3 \\cdot 12 = 4 \\cdot 9$, tỉ lệ thức nào sau đây là SAI?',
    options: [
      '$\\frac{3}{12} = \\frac{4}{9}$',
      '$\\frac{3}{4} = \\frac{9}{12}$',
      '$\\frac{3}{9} = \\frac{4}{12}$',
      '$\\frac{12}{4} = \\frac{9}{3}$'
    ],
    correctIndex: 0,
    hint: 'Kiểm tra tích chéo của từng đáp án: Tỉ lệ thức đúng phải có tích chéo bằng $3 \\cdot 12$ và $4 \\cdot 9$.',
    solution: 'Ở phương án A, tích chéo là $3 \\cdot 9 = 27$ và $12 \\cdot 4 = 48$ ($27 \\neq 48$), nên $\\frac{3}{12} = \\frac{4}{9}$ là khẳng định SAI.'
  },
  {
    id: 'ch6_l20_q7',
    lessonId: 'bai_20_ti_le_thuc',
    order: 7,
    title: 'Tìm x với số âm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm x', '#Số âm', '#Thông hiểu'],
    question: 'Tìm $x$ biết $\\frac{x}{-4} = \\frac{-9}{x}$:',
    options: [
      '$x = 6$ hoặc $x = -6$',
      '$x = 6$',
      '$x = -6$',
      '$x = 36$'
    ],
    correctIndex: 0,
    hint: 'Nhân chéo: $x \\cdot x = (-4) \\cdot (-9) \\implies x^2 = 36$. Chú ý số âm cũng có bình phương bằng 36.',
    solution: 'Ta có $x^2 = (-4) \\cdot (-9) = 36$.\nDo đó $x = 6$ hoặc $x = -6$.'
  },
  {
    id: 'ch6_l20_q8',
    lessonId: 'bai_20_ti_le_thuc',
    order: 8,
    title: 'Tìm x trong biểu thức chứa x ở tử',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phương trình', '#Thông hiểu'],
    question: 'Tìm giá trị của $x$ thỏa mãn $\\frac{x - 2}{3} = \\frac{4}{6}$:',
    options: [
      '$x = 4$',
      '$x = 2$',
      '$x = 6$',
      '$x = 8$'
    ],
    correctIndex: 0,
    hint: 'Rút gọn $\\frac{4}{6} = \\frac{2}{3}$, từ đó so sánh hai tử số có cùng mẫu.',
    solution: 'Ta có $\\frac{x - 2}{3} = \\frac{4}{6} = \\frac{2}{3}$.\nVì mẫu số đều bằng 3 nên $x - 2 = 2 \\implies x = 4$.'
  },
  {
    id: 'ch6_l20_q9',
    lessonId: 'bai_20_ti_le_thuc',
    order: 9,
    title: 'Lập tỉ số từ tỉ số thập phân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Số thập phân', '#Thông hiểu'],
    question: 'Tỉ số $1{,}5 : 2{,}5$ bằng tỉ số của hai số nguyên nào sau đây?',
    options: [
      '$3 : 5$',
      '$15 : 2$',
      '$5 : 3$',
      '$2 : 3$'
    ],
    correctIndex: 0,
    hint: 'Nhân cả tử và mẫu với 10 rồi rút gọn: $\\frac{1{,}5}{2{,}5} = \\frac{15}{25}$.',
    solution: 'Ta có $1{,}5 : 2{,}5 = \\frac{15}{25} = \\frac{3}{5} = 3 : 5$.'
  },
  {
    id: 'ch6_l20_q10',
    lessonId: 'bai_20_ti_le_thuc',
    order: 10,
    title: 'Bốn số có thể lập thành tỉ lệ thức',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Lập tỉ lệ thức', '#Thông hiểu'],
    question: 'Từ 4 số nào dưới đây ta KHÔNG THỂ lập được một tỉ lệ thức?',
    options: [
      '$2; 3; 4; 8$',
      '$2; 4; 6; 12$',
      '$3; 5; 9; 15$',
      '$1; 4; 5; 20$'
    ],
    correctIndex: 0,
    hint: 'Muốn lập được tỉ lệ thức thì tích của hai số này phải bằng tích của hai số kia. Hãy thử ghép tích các cặp số.',
    solution: 'Với bộ số $2, 3, 4, 8$:\nCác tích có thể: $2 \\cdot 8 = 16 \\neq 3 \\cdot 4 = 12$; $2 \\cdot 4 = 8 \\neq 3 \\cdot 8 = 24$; $2 \\cdot 3 = 6 \\neq 4 \\cdot 8 = 32$.\nKhông tồn tại hai cặp số có tích bằng nhau, do đó không lập được tỉ lệ thức.'
  },
  {
    id: 'ch6_l20_q11',
    lessonId: 'bai_20_ti_le_thuc',
    order: 11,
    title: 'Tìm x khi cả hai vế đều chứa x',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phương trình bậc nhất', '#Vận dụng'],
    question: 'Tìm $x$ biết $\\frac{x + 1}{x - 2} = \\frac{3}{2}$ ($x \\neq 2$):',
    options: [
      '$x = 8$',
      '$x = -8$',
      '$x = 5$',
      '$x = 4$'
    ],
    correctIndex: 0,
    hint: 'Nhân chéo: $2(x + 1) = 3(x - 2)$, sau đó khai triển và chuyển vế tìm $x$.',
    solution: 'Nhân chéo ta được:\n$2(x + 1) = 3(x - 2)$\n$2x + 2 = 3x - 6$\n$3x - 2x = 2 + 6 \\implies x = 8$.'
  },
  {
    id: 'ch6_l20_q12',
    lessonId: 'bai_20_ti_le_thuc',
    order: 12,
    title: 'Tỉ lệ bản đồ thực tế',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Bản đồ', '#Vận dụng'],
    question: 'Khoảng cách giữa hai thành phố trên bản đồ tỉ lệ $1 : 1\\,000\\,000$ là $4{,}5\\text{ cm}$. Khoảng cách thực tế giữa hai thành phố đó là bao nhiêu ki-lô-mét?',
    options: [
      '$45\\text{ km}$',
      '$4{,}5\\text{ km}$',
      '$450\\text{ km}$',
      '$4500\\text{ km}$'
    ],
    correctIndex: 0,
    hint: 'Khoảng cách thực tế bằng khoảng cách trên bản đồ nhân với mẫu số tỉ lệ: $4{,}5 \\times 1\\,000\\,000\\text{ cm}$, rồi đổi sang ki-lô-mét ($1\\text{ km} = 100\\,000\\text{ cm}$).',
    solution: 'Khoảng cách thực tế là:\n$4{,}5 \\times 1\\,000\\,000 = 4\\,500\\,000\\text{ cm} = 45\\,000\\text{ m} = 45\\text{ km}$.'
  },
  {
    id: 'ch6_l20_q13',
    lessonId: 'bai_20_ti_le_thuc',
    order: 13,
    title: 'Bài toán pha chế dung dịch tỉ lệ',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Pha chế', '#Vận dụng'],
    question: 'Để pha nước cam chuẩn vị, tỉ lệ giữa nước cốt cam và nước lọc là $2 : 5$. Nếu có $300\\text{ ml}$ nước cốt cam thì cần thêm bao nhiêu mi-li-lít nước lọc?',
    options: [
      '$750\\text{ ml}$',
      '$600\\text{ ml}$',
      '$1500\\text{ ml}$',
      '$500\\text{ ml}$'
    ],
    correctIndex: 0,
    hint: 'Gọi lượng nước lọc cần thêm là $x\\text{ ml}$. Lập tỉ lệ thức: $\\frac{300}{x} = \\frac{2}{5}$.',
    solution: 'Gọi $x$ là lượng nước lọc cần thêm ($x > 0$).\nTheo đề bài ta có tỉ lệ thức:\n$\\frac{300}{x} = \\frac{2}{5} \\implies x = \\frac{300 \\cdot 5}{2} = 750\\text{ ml}$.'
  },
  {
    id: 'ch6_l20_q14',
    lessonId: 'bai_20_ti_le_thuc',
    order: 14,
    title: 'Tìm x với lũy thừa bậc hai',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Lũy thừa', '#Vận dụng'],
    question: 'Giá trị dương của $x$ thỏa mãn tỉ lệ thức $\\frac{x}{2} = \\frac{18}{x}$ là:',
    options: [
      '$x = 6$',
      '$x = 9$',
      '$x = 36$',
      '$x = 3$'
    ],
    correctIndex: 0,
    hint: 'Nhân chéo $x^2 = 2 \\cdot 18 = 36$. Đề bài yêu cầu tìm giá trị dương.',
    solution: 'Ta có $x^2 = 2 \\cdot 18 = 36$.\nVì $x > 0$ nên $x = \\sqrt{36} = 6$.'
  },
  {
    id: 'ch6_l20_q15',
    lessonId: 'bai_20_ti_le_thuc',
    order: 15,
    title: 'Tỉ số diện tích hai hình chữ nhật',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hình học', '#Thực tế', '#Vận dụng'],
    question: 'Hai hình chữ nhật có cùng chiều rộng. Chiều dài của hình thứ nhất là $16\\text{ m}$, chiều dài của hình thứ hai là $24\\text{ m}$. Nếu diện tích hình thứ nhất là $80\\text{ m}^2$ thì diện tích hình thứ hai là:',
    options: [
      '$120\\text{ m}^2$',
      '$100\\text{ m}^2$',
      '$160\\text{ m}^2$',
      '$96\\text{ m}^2$'
    ],
    correctIndex: 0,
    hint: 'Khi chiều rộng bằng nhau, tỉ số diện tích bằng tỉ số chiều dài: $\\frac{S_1}{S_2} = \\frac{d_1}{d_2}$.',
    solution: 'Vì hai hình chữ nhật có cùng chiều rộng nên tỉ số diện tích bằng tỉ số chiều dài:\n$\\frac{80}{S_2} = \\frac{16}{24} = \\frac{2}{3} \\implies S_2 = \\frac{80 \\cdot 3}{2} = 120\\text{ m}^2$.'
  },

  // ==========================================================================
  // BÀI 21: TÍNH CHẤT CỦA DÃY TỈ SỐ BẰNG NHAU (15 CÂU)
  // ==========================================================================

  {
    id: 'ch6_l21_q1',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 1,
    title: 'Tính chất dãy hai tỉ số bằng nhau (tổng)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Dãy tỉ số', '#Công thức', '#Cơ bản'],
    question: 'Từ tỉ lệ thức $\\frac{a}{b} = \\frac{c}{d}$ ($b, d \\neq 0; b \\neq -d$), khẳng định nào sau đây là đúng theo tính chất của dãy tỉ số bằng nhau?',
    options: [
      '$\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b + d}$',
      '$\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b - d}$',
      '$\\frac{a}{b} = \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$',
      '$\\frac{a}{b} = \\frac{c}{d} = \\frac{a + d}{b + c}$'
    ],
    correctIndex: 0,
    hint: 'Cộng tử với tử, mẫu với mẫu tương ứng: $\\frac{a+c}{b+d}$.',
    solution: 'Theo tính chất của dãy tỉ số bằng nhau: $\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b + d} = \\frac{a - c}{b - d}$ (với điều kiện các mẫu số khác 0).'
  },
  {
    id: 'ch6_l21_q2',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 2,
    title: 'Tính chất dãy hai tỉ số bằng nhau (hiệu)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Dãy tỉ số', '#Hiệu', '#Cơ bản'],
    question: 'Cho $\\frac{x}{3} = \\frac{y}{5}$. Theo tính chất của dãy tỉ số bằng nhau, tỉ số này bằng với:',
    options: [
      '$\\frac{x - y}{3 - 5}$',
      '$\\frac{x - y}{5 - 3}$',
      '$\\frac{x + y}{3 - 5}$',
      '$\\frac{x - y}{3 + 5}$'
    ],
    correctIndex: 0,
    hint: 'Nếu tử số lấy $x - y$ thì mẫu số phải lấy tương ứng $3 - 5$.',
    solution: 'Ta có $\\frac{x}{3} = \\frac{y}{5} = \\frac{x - y}{3 - 5} = \\frac{y - x}{5 - 3}$.'
  },
  {
    id: 'ch6_l21_q3',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 3,
    title: 'Tìm hai số khi biết tổng và tỉ số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tìm hai số', '#Tổng', '#Cơ bản'],
    question: 'Tìm hai số $x$ và $y$ biết $\\frac{x}{2} = \\frac{y}{3}$ và $x + y = 20$:',
    options: [
      '$x = 8; y = 12$',
      '$x = 10; y = 10$',
      '$x = 6; y = 14$',
      '$x = 12; y = 8$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng tính chất: $\\frac{x}{2} = \\frac{y}{3} = \\frac{x + y}{2 + 3} = \\frac{20}{5} = 4$.',
    solution: 'Áp dụng tính chất của dãy tỉ số bằng nhau:\n$\\frac{x}{2} = \\frac{y}{3} = \\frac{x + y}{2 + 3} = \\frac{20}{5} = 4$.\nSuy ra:\n$x = 4 \\cdot 2 = 8$; $y = 4 \\cdot 3 = 12$.'
  },
  {
    id: 'ch6_l21_q4',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 4,
    title: 'Tìm hai số khi biết hiệu và tỉ số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tìm hai số', '#Hiệu', '#Cơ bản'],
    question: 'Tìm hai số $x$ và $y$ biết $\\frac{x}{7} = \\frac{y}{4}$ và $x - y = 12$:',
    options: [
      '$x = 28; y = 16$',
      '$x = 21; y = 9$',
      '$x = 35; y = 23$',
      '$x = 14; y = 2$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng tính chất: $\\frac{x}{7} = \\frac{y}{4} = \\frac{x - y}{7 - 4} = \\frac{12}{3} = 4$.',
    solution: 'Áp dụng tính chất của dãy tỉ số bằng nhau:\n$\\frac{x}{7} = \\frac{y}{4} = \\frac{x - y}{7 - 4} = \\frac{12}{3} = 4$.\nSuy ra:\n$x = 4 \\cdot 7 = 28$; $y = 4 \\cdot 4 = 16$.'
  },
  {
    id: 'ch6_l21_q5',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 5,
    title: 'Dãy ba tỉ số bằng nhau cơ bản',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Ba tỉ số', '#Tổng 3 số', '#Thông hiểu'],
    question: 'Tìm $x, y, z$ biết $\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{5}$ và $x + y + z = 30$:',
    options: [
      '$x = 6; y = 9; z = 15$',
      '$x = 4; y = 6; z = 20$',
      '$x = 8; y = 10; z = 12$',
      '$x = 5; y = 10; z = 15$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng tính chất: $\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{5} = \\frac{x + y + z}{2 + 3 + 5} = \\frac{30}{10} = 3$.',
    solution: 'Áp dụng tính chất của dãy tỉ số bằng nhau:\n$\\frac{x}{2} = \\frac{y}{3} = \\frac{z}{5} = \\frac{x + y + z}{2 + 3 + 5} = \\frac{30}{10} = 3$.\nSuy ra:\n$x = 3 \\cdot 2 = 6$; $y = 3 \\cdot 3 = 9$; $z = 3 \\cdot 5 = 15$.'
  },
  {
    id: 'ch6_l21_q6',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 6,
    title: 'Dãy ba tỉ số với hệ số nhân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hệ số nhân', '#Thông hiểu'],
    question: 'Tìm $x, y$ biết $\\frac{x}{3} = \\frac{y}{4}$ và $2x + y = 30$:',
    options: [
      '$x = 9; y = 12$',
      '$x = 6; y = 8$',
      '$x = 12; y = 16$',
      '$x = 15; y = 20$'
    ],
    correctIndex: 0,
    hint: 'Biến đổi $\\frac{x}{3} = \\frac{2x}{6}$. Khi đó $\\frac{2x}{6} = \\frac{y}{4} = \\frac{2x + y}{6 + 4}$.',
    solution: 'Ta có $\\frac{x}{3} = \\frac{2x}{6}$. Do đó:\n$\\frac{2x}{6} = \\frac{y}{4} = \\frac{2x + y}{6 + 4} = \\frac{30}{10} = 3$.\nSuy ra:\n$x = 3 \\cdot 3 = 9$; $y = 3 \\cdot 4 = 12$.'
  },
  {
    id: 'ch6_l21_q7',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 7,
    title: 'Tính tỉ số của ba số',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tỉ lệ 3 số', '#Thông hiểu'],
    question: 'Biết $a : b : c = 2 : 4 : 5$ và $a + b - c = 6$. Giá trị của $a$ là:',
    options: [
      '$a = 12$',
      '$a = 6$',
      '$a = 8$',
      '$a = 4$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng tính chất: $\\frac{a}{2} = \\frac{b}{4} = \\frac{c}{5} = \\frac{a + b - c}{2 + 4 - 5} = \\frac{6}{1} = 6$.',
    solution: 'Ta có $\\frac{a}{2} = \\frac{b}{4} = \\frac{c}{5} = \\frac{a + b - c}{2 + 4 - 5} = \\frac{6}{1} = 6$.\nSuy ra $a = 6 \\cdot 2 = 12$.'
  },
  {
    id: 'ch6_l21_q8',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 8,
    title: 'Chia số học sinh theo tỉ lệ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Thực tế', '#Chia tỉ lệ', '#Thông hiểu'],
    question: 'Số học sinh của ba lớp 7A, 7B, 7C tỉ lệ với $8; 9; 10$. Biết tổng số học sinh của ba lớp là $108$ em. Số học sinh lớp 7A là:',
    options: [
      '$32$ học sinh',
      '$36$ học sinh',
      '$40$ học sinh',
      '$30$ học sinh'
    ],
    correctIndex: 0,
    hint: 'Gọi số học sinh 3 lớp là $x, y, z$. Áp dụng $\\frac{x}{8} = \\frac{y}{9} = \\frac{z}{10} = \\frac{108}{27} = 4$.',
    solution: 'Gọi số học sinh của 7A, 7B, 7C lần lượt là $x, y, z$.\nTa có: $\\frac{x}{8} = \\frac{y}{9} = \\frac{z}{10} = \\frac{x + y + z}{8 + 9 + 10} = \\frac{108}{27} = 4$.\nSố học sinh lớp 7A là: $x = 4 \\cdot 8 = 32$ em.'
  },
  {
    id: 'ch6_l21_q9',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 9,
    title: 'Chia tiền thưởng theo tỉ lệ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Thực tế', '#Tiền thưởng', '#Thông hiểu'],
    question: 'Hai bạn An và Bình được thưởng số tiền tỉ lệ với $3$ và $5$. Biết Bình được thưởng nhiều hơn An $80\\,000$ đồng. Hỏi An được thưởng bao nhiêu tiền?',
    options: [
      '$120\\,000$ đồng',
      '$200\\,000$ đồng',
      '$160\\,000$ đồng',
      '$240\\,000$ đồng'
    ],
    correctIndex: 0,
    hint: 'Gọi số tiền của An và Bình là $x, y$. Ta có $\\frac{x}{3} = \\frac{y}{5} = \\frac{y - x}{5 - 3} = \\frac{80\\,000}{2} = 40\\,000$.',
    solution: 'Gọi số tiền thưởng của An và Bình lần lượt là $x, y$ (đồng).\nTa có $\\frac{x}{3} = \\frac{y}{5}$ và $y - x = 80\\,000$.\nÁp dụng tính chất của dãy tỉ số bằng nhau:\n$\\frac{x}{3} = \\frac{y}{5} = \\frac{y - x}{5 - 3} = \\frac{80\\,000}{2} = 40\\,000$.\nSố tiền An nhận được là: $x = 40\\,000 \\cdot 3 = 120\\,000$ đồng.'
  },
  {
    id: 'ch6_l21_q10',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 10,
    title: 'Ba góc trong một tam giác tỉ lệ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình học', '#Tổng 3 góc', '#Thông hiểu'],
    question: 'Tam giác $ABC$ có các góc $\\widehat{A}, \\widehat{B}, \\widehat{C}$ tỉ lệ với $1; 2; 3$. Số đo của góc lớn nhất trong tam giác là:',
    options: [
      '$90^\\circ$',
      '$60^\\circ$',
      '$120^\\circ$',
      '$75^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tổng ba góc của một tam giác luôn bằng $180^\\circ$. Áp dụng $\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3} = \\frac{180^\\circ}{6} = 30^\\circ$.',
    solution: 'Ta có $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.\nÁp dụng tính chất của dãy tỉ số bằng nhau:\n$\\frac{\\widehat{A}}{1} = \\frac{\\widehat{B}}{2} = \\frac{\\widehat{C}}{3} = \\frac{180^\\circ}{1 + 2 + 3} = \\frac{180^\\circ}{6} = 30^\\circ$.\nGóc lớn nhất là $\\widehat{C} = 30^\\circ \\cdot 3 = 90^\\circ$ (tam giác vuông).'
  },
  {
    id: 'ch6_l21_q11',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 11,
    title: 'Tìm hai số khi biết tích',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tích hai số', '#Đặt ẩn phụ k', '#Vận dụng'],
    question: 'Tìm hai số dương $x, y$ biết $\\frac{x}{2} = \\frac{y}{3}$ và $x \\cdot y = 54$:',
    options: [
      '$x = 6; y = 9$',
      '$x = 4; y = 6$',
      '$x = 8; y = 12$',
      '$x = 9; y = 6$'
    ],
    correctIndex: 0,
    hint: 'Đặt $\\frac{x}{2} = \\frac{y}{3} = k$. Suy ra $x = 2k, y = 3k$. Khi đó $x \\cdot y = 6k^2 = 54$.',
    solution: 'Đặt $\\frac{x}{2} = \\frac{y}{3} = k$ ($k > 0$ do $x, y$ dương).\nTa có $x = 2k; y = 3k$.\n$x \\cdot y = 2k \\cdot 3k = 6k^2 = 54 \\implies k^2 = 9 \\implies k = 3$.\nVậy $x = 2 \\cdot 3 = 6$; $y = 3 \\cdot 3 = 9$.'
  },
  {
    id: 'ch6_l21_q12',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 12,
    title: 'Tìm hai số khi biết tổng bình phương',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tổng bình phương', '#Vận dụng'],
    question: 'Tìm các số $x, y$ dương thỏa mãn $\\frac{x}{3} = \\frac{y}{4}$ và $x^2 + y^2 = 100$:',
    options: [
      '$x = 6; y = 8$',
      '$x = 3; y = 4$',
      '$x = 9; y = 12$',
      '$x = 8; y = 6$'
    ],
    correctIndex: 0,
    hint: 'Đặt $x = 3k, y = 4k$. Khi đó $x^2 + y^2 = 9k^2 + 16k^2 = 25k^2 = 100$.',
    solution: 'Đặt $\\frac{x}{3} = \\frac{y}{4} = k$ ($k > 0$). Suy ra $x = 3k, y = 4k$.\nTa có $x^2 + y^2 = (3k)^2 + (4k)^2 = 9k^2 + 16k^2 = 25k^2 = 100$.\n$\\implies k^2 = 4 \\implies k = 2$.\nVậy $x = 3 \\cdot 2 = 6$; $y = 4 \\cdot 2 = 8$.'
  },
  {
    id: 'ch6_l21_q13',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 13,
    title: 'Nối hai tỉ số thành dãy ba tỉ số',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Quy đồng tỉ số', '#Nối dãy', '#Vận dụng'],
    question: 'Cho $\\frac{x}{2} = \\frac{y}{3}$ và $\\frac{y}{4} = \\frac{z}{5}$. Tỉ số $x : y : z$ bằng:',
    options: [
      '$8 : 12 : 15$',
      '$2 : 3 : 5$',
      '$4 : 6 : 10$',
      '$6 : 12 : 15$'
    ],
    correctIndex: 0,
    hint: 'Đưa đại lượng chung $y$ về cùng một số mẫu (BCNN của 3 và 4 là 12): $\\frac{x}{8} = \\frac{y}{12} = \\frac{z}{15}$.',
    solution: 'Ta có:\n$\\frac{x}{2} = \\frac{y}{3} \\implies \\frac{x}{8} = \\frac{y}{12}$\n$\\frac{y}{4} = \\frac{z}{5} \\implies \\frac{y}{12} = \\frac{z}{15}$\nDo đó $\\frac{x}{8} = \\frac{y}{12} = \\frac{z}{15} \\implies x : y : z = 8 : 12 : 15$.'
  },
  {
    id: 'ch6_l21_q14',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 14,
    title: 'Bài toán thực tế chia ba phần trồng cây',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Trồng cây', '#Vận dụng'],
    question: 'Ba lớp 7A, 7B, 7C tham gia phong trào trồng cây. Số cây trồng được của ba lớp lần lượt tỉ lệ với $4; 5; 6$. Biết số cây lớp 7C trồng được nhiều hơn lớp 7A là $18$ cây. Tổng số cây cả ba lớp trồng được là:',
    options: [
      '$135$ cây',
      '$120$ cây',
      '$150$ cây',
      '$180$ cây'
    ],
    correctIndex: 0,
    hint: 'Gọi số cây là $x, y, z$. Ta có $\\frac{x}{4} = \\frac{y}{5} = \\frac{z}{6} = \\frac{z - x}{6 - 4} = \\frac{18}{2} = 9$.',
    solution: 'Gọi số cây của 3 lớp là $x, y, z$ ($x, y, z \\in \\mathbb{N}^*$).\nTheo đề bài: $\\frac{x}{4} = \\frac{y}{5} = \\frac{z}{6}$ và $z - x = 18$.\nÁp dụng tính chất dãy tỉ số bằng nhau:\n$\\frac{x}{4} = \\frac{y}{5} = \\frac{z}{6} = \\frac{z - x}{6 - 4} = \\frac{18}{2} = 9$.\nTổng số cây của ba lớp là:\n$x + y + z = 9 \\cdot (4 + 5 + 6) = 9 \\cdot 15 = 135$ cây.'
  },
  {
    id: 'ch6_l21_q15',
    lessonId: 'bai_21_tinh_chat_day_ti_so_bang_nhau',
    order: 15,
    title: 'Tính giá trị biểu thức đại số đối xứng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Biểu thức đại số', '#Vận dụng'],
    question: 'Cho $\\frac{a}{b} = \\frac{c}{d}$ (với $b, d \\neq 0; b \\neq d$). Giá trị của tỉ số $\\frac{a + 2c}{b + 2d}$ bằng:',
    options: [
      '$\\frac{a}{b}$',
      '$\\frac{2a}{b}$',
      '$\\frac{a + c}{b + d}$',
      '$\\frac{3a}{2b}$'
    ],
    correctIndex: 0,
    hint: 'Từ $\\frac{a}{b} = \\frac{c}{d} = \\frac{2c}{2d}$, áp dụng tính chất cộng tử với tử, mẫu với mẫu.',
    solution: 'Ta có $\\frac{a}{b} = \\frac{c}{d} = \\frac{2c}{2d}$.\nÁp dụng tính chất của dãy tỉ số bằng nhau:\n$\\frac{a}{b} = \\frac{2c}{2d} = \\frac{a + 2c}{b + 2d}$.\nDo đó tỉ số $\\frac{a + 2c}{b + 2d}$ luôn bằng $\\frac{a}{b}$.'
  },

  // ==========================================================================
  // BÀI 22: ĐẠI LƯỢNG TỈ LỆ THUẬN (12 CÂU)
  // ==========================================================================

  {
    id: 'ch6_l22_q1',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 1,
    title: 'Định nghĩa đại lượng tỉ lệ thuận',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tỉ lệ thuận', '#Định nghĩa', '#Cơ bản'],
    question: 'Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức nào sau đây (với hằng số $k \\neq 0$) thì ta nói $y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $k$?',
    options: [
      '$y = k \\cdot x$',
      '$y = \\frac{k}{x}$',
      '$x \\cdot y = k$',
      '$y = k + x$'
    ],
    correctIndex: 0,
    hint: 'Đại lượng $y$ tỉ lệ thuận với $x$ khi $y = kx$ ($k$ là hằng số khác 0).',
    solution: 'Theo định nghĩa, đại lượng $y$ tỉ lệ thuận với đại lượng $x$ theo hệ số tỉ lệ $k$ ($k \\neq 0$) khi và chỉ khi $y = kx$.'
  },
  {
    id: 'ch6_l22_q2',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 2,
    title: 'Xác định hệ số tỉ lệ k',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hệ số tỉ lệ', '#Cơ bản'],
    question: 'Biết $y$ tỉ lệ thuận với $x$ và khi $x = 3$ thì $y = 12$. Hệ số tỉ lệ $k$ của $y$ đối với $x$ là:',
    options: [
      '$k = 4$',
      '$k = \\frac{1}{4}$',
      '$k = 36$',
      '$k = 9$'
    ],
    correctIndex: 0,
    hint: 'Thay số vào công thức $y = kx \\implies k = \\frac{y}{x}$.',
    solution: 'Vì $y$ tỉ lệ thuận với $x$ nên $y = kx \\implies k = \\frac{y}{x} = \\frac{12}{3} = 4$.'
  },
  {
    id: 'ch6_l22_q3',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 3,
    title: 'Hệ số tỉ lệ thuận đảo ngược',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tỉ lệ thuận đảo', '#Cơ bản'],
    question: 'Nếu $y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $k = 5$ thì $x$ tỉ lệ thuận với $y$ theo hệ số tỉ lệ nào?',
    options: [
      '$\\frac{1}{5}$',
      '$5$',
      '$-5$',
      '$\\frac{5}{1}$'
    ],
    correctIndex: 0,
    hint: 'Nếu $y = kx$ thì $x = \\frac{1}{k}y$.',
    solution: 'Vì $y = 5x$ nên $x = \\frac{1}{5}y$. Do đó $x$ tỉ lệ thuận với $y$ theo hệ số tỉ lệ $\\frac{1}{5}$.'
  },
  {
    id: 'ch6_l22_q4',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 4,
    title: 'Tính chất tỉ số các giá trị tương ứng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính chất', '#Tỉ số', '#Cơ bản'],
    question: 'Cho hai đại lượng $x$ và $y$ tỉ lệ thuận với nhau. Với hai giá trị $x_1, x_2$ có hai giá trị tương ứng là $y_1, y_2$. Khẳng định nào sau đây là đúng?',
    options: [
      '$\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = k$',
      '$x_1 \\cdot y_1 = x_2 \\cdot y_2$',
      '$\\frac{y_1}{y_2} = \\frac{x_2}{x_1}$',
      '$y_1 + y_2 = x_1 + x_2$'
    ],
    correctIndex: 0,
    hint: 'Tỉ số hai giá trị tương ứng của chúng luôn không đổi và bằng hệ số tỉ lệ $k$.',
    solution: 'Theo tính chất của đại lượng tỉ lệ thuận: $\\frac{y_1}{x_1} = \\frac{y_2}{x_2} = k$ và $\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$.'
  },
  {
    id: 'ch6_l22_q5',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 5,
    title: 'Tìm giá trị còn thiếu trong bảng tỉ lệ thuận',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bảng giá trị', '#Thông hiểu'],
    question: 'Cho $x$ và $y$ là hai đại lượng tỉ lệ thuận. Biết khi $x = 2$ thì $y = -6$. Khi $x = 5$ thì giá trị của $y$ là:',
    options: [
      '$y = -15$',
      '$y = 15$',
      '$y = -10$',
      '$y = -30$'
    ],
    correctIndex: 0,
    hint: 'Tìm hệ số tỉ lệ $k = \\frac{-6}{2} = -3$, sau đó tính $y = k \\cdot 5$.',
    solution: 'Hệ số tỉ lệ là $k = \\frac{y_1}{x_1} = \\frac{-6}{2} = -3$.\nKhi $x = 5$, ta có $y = (-3) \\cdot 5 = -15$.'
  },
  {
    id: 'ch6_l22_q6',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 6,
    title: 'Khối lượng và thể tích của kim loại',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Vật lí', '#Khối lượng riêng', '#Thông hiểu'],
    question: 'Khối lượng $m\\text{ (g)}$ tỉ lệ thuận với thể tích $V\\text{ (cm}^3\\text{)}$ theo công thức $m = D \\cdot V$. Một thanh sắt có thể tích $10\\text{ cm}^3$ nặng $78\\text{ g}$. Thanh sắt thứ hai có thể tích $25\\text{ cm}^3$ sẽ nặng bao nhiêu gam?',
    options: [
      '$195\\text{ g}$',
      '$156\\text{ g}$',
      '$210\\text{ g}$',
      '$185\\text{ g}$'
    ],
    correctIndex: 0,
    hint: 'Khối lượng riêng $D = \\frac{78}{10} = 7{,}8\\text{ g/cm}^3$. Tính $m_2 = 7{,}8 \\times 25$.',
    solution: 'Khối lượng riêng của sắt là: $D = \\frac{78}{10} = 7{,}8\\text{ g/cm}^3$.\nKhối lượng của thanh sắt thứ hai là: $m_2 = 7{,}8 \\times 25 = 195\\text{ g}$.'
  },
  {
    id: 'ch6_l22_q7',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 7,
    title: 'Quãng đường chuyển động thẳng đều',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Vận tốc đều', '#Chuyển động', '#Thông hiểu'],
    question: 'Một xe máy đi đều với vận tốc $40\\text{ km/h}$. Quãng đường $s\\text{ (km)}$ đi được tỉ lệ thuận với thời gian $t\\text{ (giờ)}$ theo công thức $s = 40t$. Xe máy đó đi được bao xa sau $2$ giờ $15$ phút?',
    options: [
      '$90\\text{ km}$',
      '$86\\text{ km}$',
      '$100\\text{ km}$',
      '$80\\text{ km}$'
    ],
    correctIndex: 0,
    hint: 'Đổi $2$ giờ $15$ phút $= 2{,}25$ giờ, sau đó tính $s = 40 \\times 2{,}25$.',
    solution: 'Đổi $2$ giờ $15$ phút $= 2 + \\frac{15}{60} = 2{,}25$ giờ.\nQuãng đường xe máy đi được là:\n$s = 40 \\times 2{,}25 = 90\\text{ km}$.'
  },
  {
    id: 'ch6_l22_q8',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 8,
    title: 'Mua hàng số lượng lớn theo tỉ lệ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Thực tế', '#Mua sắm', '#Thông hiểu'],
    question: 'Mua $5$ quyển vở cùng loại hết $45\\,000$ đồng. Hỏi bạn Nam mua $12$ quyển vở cùng loại đó thì phải trả bao nhiêu tiền?',
    options: [
      '$108\\,000$ đồng',
      '$96\\,000$ đồng',
      '$120\\,000$ đồng',
      '$112\\,000$ đồng'
    ],
    correctIndex: 0,
    hint: 'Giá tiền một quyển vở là $45\\,000 : 5 = 9\\,000$ đồng. Nhân với 12 quyển.',
    solution: 'Số tiền tỉ lệ thuận với số lượng vở.\nGiá mỗi quyển vở là: $45\\,000 : 5 = 9\\,000$ đồng.\nSố tiền mua 12 quyển vở là: $9\\,000 \\times 12 = 108\\,000$ đồng.'
  },
  {
    id: 'ch6_l22_q9',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 9,
    title: 'Nhận diện tình huống KHÔNG tỉ lệ thuận',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phân biệt', '#Bẫy tư duy', '#Thông hiểu'],
    question: 'Cặp đại lượng nào sau đây KHÔNG tỉ lệ thuận với nhau?',
    options: [
      'Tuổi của con và tuổi của mẹ theo thời gian',
      'Chu vi hình vuông và độ dài cạnh của nó ($P = 4a$)',
      'Số tiền mua xăng và số lít xăng mua cùng giá ($T = a \\cdot x$)',
      'Quãng đường đi được và thời gian đi với vận tốc không đổi ($s = v \\cdot t$)'
    ],
    correctIndex: 0,
    hint: 'Nếu $y$ tỉ lệ thuận với $x$ thì tỉ số $\\frac{y}{x}$ phải không đổi. Khi thời gian trôi qua, hiệu số tuổi mẹ và con không đổi nhưng tỉ số tuổi thay đổi liên tục.',
    solution: 'Mỗi năm mẹ và con đều tăng 1 tuổi nên hiệu số tuổi không đổi, nhưng tỉ số tuổi mẹ trên tuổi con thay đổi theo từng năm (không có dạng $y = kx$), do đó không phải là quan hệ tỉ lệ thuận.'
  },
  {
    id: 'ch6_l22_q10',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 10,
    title: 'Tính giá trị hiệu hai đại lượng tỉ lệ thuận',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vận dụng', '#Hiệu giá trị'],
    question: 'Cho hai đại lượng $x$ và $y$ tỉ lệ thuận với nhau. Biết khi $x = x_1, x = x_2$ thì $y = y_1, y = y_2$ thỏa mãn $x_1 - x_2 = 3$ và $y_1 - y_2 = -9$. Công thức biểu diễn $y$ theo $x$ là:',
    options: [
      '$y = -3x$',
      '$y = 3x$',
      '$y = -\\frac{1}{3}x$',
      '$y = -9x$'
    ],
    correctIndex: 0,
    hint: 'Theo tính chất tỉ lệ thuận: $k = \\frac{y_1 - y_2}{x_1 - x_2}$.',
    solution: 'Theo tính chất của dãy tỉ số bằng nhau:\n$k = \\frac{y_1}{x_1} = \\frac{y_2}{x_2} = \\frac{y_1 - y_2}{x_1 - x_2} = \\frac{-9}{3} = -3$.\nVậy công thức biểu diễn $y$ theo $x$ là $y = -3x$.'
  },
  {
    id: 'ch6_l22_q11',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 11,
    title: 'Đổi tiền ngoại tệ thực tế',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Tiền tệ', '#Vận dụng'],
    question: 'Tỉ giá quy đổi ngày hôm nay là $1\\text{ USD} = 25\\,000\\text{ VNĐ}$. Một du khách nước ngoài muốn đổi $320\\text{ USD}$ sang tiền Việt Nam và phải trả phí giao dịch $1\\%$ trên tổng số tiền nhận được. Số tiền thực tế du khách nhận được là:',
    options: [
      '$7\\,920\\,000\\text{ VNĐ}$',
      '$8\\,000\\,000\\text{ VNĐ}$',
      '$7\\,900\\,000\\text{ VNĐ}$',
      '$8\\,080\\,000\\text{ VNĐ}$'
    ],
    correctIndex: 0,
    hint: 'Tổng số tiền quy đổi là $320 \\times 25\\,000 = 8\\,000\\,000\\text{ VNĐ}$. Trừ đi $1\\%$ phí giao dịch.',
    solution: 'Tổng giá trị tiền đổi: $320 \\times 25\\,000 = 8\\,000\\,000\\text{ VNĐ}$.\nPhí giao dịch là $1\\%: 8\\,000\\,000 \\times 1\\% = 80\\,000\\text{ VNĐ}$.\nSố tiền du khách thực nhận là: $8\\,000\\,000 - 80\\,000 = 7\\,920\\,000\\text{ VNĐ}$.'
  },
  {
    id: 'ch6_l22_q12',
    lessonId: 'bai_22_dai_luong_ti_le_thuan',
    order: 12,
    title: 'Tam giác có ba cạnh tỉ lệ thuận',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hình học', '#Chu vi', '#Vận dụng'],
    question: 'Một tam giác có chu vi bằng $36\\text{ cm}$ và độ dài ba cạnh tỉ lệ thuận với $3; 4; 5$. Tam giác đó là loại tam giác gì?',
    options: [
      'Tam giác vuông',
      'Tam giác đều',
      'Tam giác cân nhưng không vuông',
      'Tam giác nhọn không đều'
    ],
    correctIndex: 0,
    hint: 'Tìm độ dài ba cạnh qua dãy tỉ số: $\\frac{a}{3} = \\frac{b}{4} = \\frac{c}{5} = \\frac{36}{12} = 3$. Sau đó kiểm tra định lí Pythagore đảo: $a^2 + b^2 = c^2$.',
    solution: 'Độ dài ba cạnh là $a = 3 \\cdot 3 = 9\\text{ cm}, b = 4 \\cdot 3 = 12\\text{ cm}, c = 5 \\cdot 3 = 15\\text{ cm}$.\nKiểm tra: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$.\nTheo định lí Pythagore đảo, đây là tam giác vuông (bộ ba số Pytago kinh điển).'
  },

  // ==========================================================================
  // BÀI 23: ĐẠI LƯỢNG TỈ LỆ NGHỊCH (12 CÂU)
  // ==========================================================================

  {
    id: 'ch6_l23_q1',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 1,
    title: 'Định nghĩa đại lượng tỉ lệ nghịch',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tỉ lệ nghịch', '#Định nghĩa', '#Cơ bản'],
    question: 'Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức nào sau đây (với $a$ là hằng số khác $0$) thì $y$ tỉ lệ nghịch với $x$?',
    options: [
      '$y = \\frac{a}{x}$ hay $x \\cdot y = a$',
      '$y = a \\cdot x$',
      '$y = a - x$',
      '$\\frac{y}{x} = a$'
    ],
    correctIndex: 0,
    hint: 'Hai đại lượng tỉ lệ nghịch khi tích của chúng là một hằng số không đổi: $x \\cdot y = a$.',
    solution: 'Theo định nghĩa SGK Toán 7, $y$ tỉ lệ nghịch với $x$ khi $y = \\frac{a}{x}$ hay $x \\cdot y = a$ ($a \\neq 0$ là hệ số tỉ lệ nghịch).'
  },
  {
    id: 'ch6_l23_q2',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 2,
    title: 'Xác định hệ số tỉ lệ nghịch',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hệ số tỉ lệ', '#Cơ bản'],
    question: 'Biết $y$ tỉ lệ nghịch với $x$ và khi $x = 4$ thì $y = 6$. Hệ số tỉ lệ $a$ là:',
    options: [
      '$a = 24$',
      '$a = \\frac{3}{2}$',
      '$a = \\frac{2}{3}$',
      '$a = 10$'
    ],
    correctIndex: 0,
    hint: 'Hệ số tỉ lệ nghịch bằng tích của hai giá trị: $a = x \\cdot y$.',
    solution: 'Vì $y$ tỉ lệ nghịch với $x$ nên hệ số tỉ lệ $a = x \\cdot y = 4 \\cdot 6 = 24$.'
  },
  {
    id: 'ch6_l23_q3',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 3,
    title: 'Tính chất tích hai giá trị tương ứng tỉ lệ nghịch',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính chất', '#Tích không đổi', '#Cơ bản'],
    question: 'Nếu hai đại lượng $x$ và $y$ tỉ lệ nghịch với nhau thì khẳng định nào sau đây là đúng?',
    options: [
      '$x_1 \\cdot y_1 = x_2 \\cdot y_2 = a$',
      '$\\frac{x_1}{x_2} = \\frac{y_1}{y_2}$',
      '$\\frac{y_1}{x_1} = \\frac{y_2}{x_2}$',
      '$x_1 + y_1 = x_2 + y_2$'
    ],
    correctIndex: 0,
    hint: 'Tích hai giá trị tương ứng của hai đại lượng tỉ lệ nghịch luôn không đổi: $x_1 y_1 = x_2 y_2$.',
    solution: 'Đặc trưng cốt lõi của quan hệ tỉ lệ nghịch là tích của hai giá trị tương ứng luôn không đổi: $x_1 y_1 = x_2 y_2 = a$, hay $\\frac{x_1}{x_2} = \\frac{y_2}{y_1}$.'
  },
  {
    id: 'ch6_l23_q4',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 4,
    title: 'Tính giá trị y trong tỉ lệ nghịch',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính giá trị', '#Cơ bản'],
    question: 'Cho $x$ và $y$ là hai đại lượng tỉ lệ nghịch với hệ số tỉ lệ $a = 36$. Khi $x = -4$ thì $y$ bằng:',
    options: [
      '$y = -9$',
      '$y = 9$',
      '$y = -40$',
      '$y = -144$'
    ],
    correctIndex: 0,
    hint: 'Dùng công thức $y = \\frac{a}{x} = \\frac{36}{-4}$.',
    solution: 'Ta có $y = \\frac{a}{x} = \\frac{36}{-4} = -9$.'
  },
  {
    id: 'ch6_l23_q5',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 5,
    title: 'Vận tốc và thời gian trên cùng một quãng đường',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Vận tốc', '#Thời gian', '#Thông hiểu'],
    question: 'Trên cùng một quãng đường $s$, nếu vận tốc của ô tô tăng lên $2$ lần thì thời gian đi hết quãng đường đó sẽ:',
    options: [
      'Giảm đi $2$ lần',
      'Tăng lên $2$ lần',
      'Không thay đổi',
      'Giảm đi $4$ lần'
    ],
    correctIndex: 0,
    hint: 'Vì $s = v \\cdot t$ không đổi nên $v$ và $t$ là hai đại lượng tỉ lệ nghịch.',
    solution: 'Quãng đường $s = v \\cdot t$ là một hằng số. Do đó vận tốc $v$ và thời gian $t$ là hai đại lượng tỉ lệ nghịch. Khi vận tốc tăng lên 2 lần thì thời gian giảm đi 2 lần.'
  },
  {
    id: 'ch6_l23_q6',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 6,
    title: 'Bài toán năng suất công nhân và số ngày hoàn thành',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Năng suất', '#Thực tế', '#Thông hiểu'],
    question: 'Một đội gồm $12$ công nhân xây xong một ngôi nhà trong $30$ ngày. Nếu bổ sung thêm $6$ công nhân (năng suất như nhau) thì ngôi nhà đó được xây xong trong bao nhiêu ngày?',
    options: [
      '$20$ ngày',
      '$15$ ngày',
      '$25$ ngày',
      '$18$ ngày'
    ],
    correctIndex: 0,
    hint: 'Số công nhân sau khi bổ sung là $12 + 6 = 18$ người. Vì số công nhân và số ngày hoàn thành tỉ lệ nghịch: $12 \\times 30 = 18 \\times x$.',
    solution: 'Số công nhân mới là: $12 + 6 = 18$ người.\nVì khối lượng công việc không đổi nên số người và số ngày là hai đại lượng tỉ lệ nghịch:\n$18 \\cdot x = 12 \\cdot 30 = 360 \\implies x = \\frac{360}{18} = 20$ ngày.'
  },
  {
    id: 'ch6_l23_q7',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 7,
    title: 'Phân biệt tỉ lệ thuận và tỉ lệ nghịch',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phân biệt', '#Bẫy tư duy', '#Thông hiểu'],
    question: 'Tình huống nào sau đây biểu diễn hai đại lượng TỈ LỆ NGHỊCH?',
    options: [
      'Chiều dài và chiều rộng của hình chữ nhật có diện tích không đổi',
      'Số kẹo và số tiền phải trả khi mua kẹo cùng giá',
      'Chu vi hình tròn và bán kính của nó ($C = 2\\pi r$)',
      'Lượng gạo ăn mỗi ngày và tổng số gạo ăn trong 1 tháng'
    ],
    correctIndex: 0,
    hint: 'Hình chữ nhật có $S = a \\cdot b$ (diện tích không đổi). Khi chiều dài tăng thì chiều rộng phải giảm tương ứng để tích không đổi.',
    solution: 'Diện tích hình chữ nhật $S = a \\cdot b$. Khi diện tích $S$ không đổi thì chiều dài $a$ và chiều rộng $b$ tỉ lệ nghịch với nhau vì $a \\cdot b = S$ (hằng số).'
  },
  {
    id: 'ch6_l23_q8',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 8,
    title: 'Vòi nước chảy vào bể',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Vòi nước', '#Thực tế', '#Thông hiểu'],
    question: 'Để bơm đầy một bể nước, nếu dùng $4$ máy bơm cùng công suất thì mất $6$ giờ. Nếu muốn bơm đầy bể đó chỉ trong $3$ giờ thì cần dùng bao nhiêu máy bơm như vậy?',
    options: [
      '$8$ máy bơm',
      '$6$ máy bơm',
      '$12$ máy bơm',
      '$7$ máy bơm'
    ],
    correctIndex: 0,
    hint: 'Số máy bơm và thời gian bơm đầy bể tỉ lệ nghịch: $4 \\times 6 = x \\times 3$.',
    solution: 'Vì dung tích bể không đổi nên số máy bơm và thời gian tỉ lệ nghịch:\n$x \\cdot 3 = 4 \\cdot 6 = 24 \\implies x = \\frac{24}{3} = 8$ máy bơm.'
  },
  {
    id: 'ch6_l23_q9',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 9,
    title: 'Tìm x khi biết hiệu hai giá trị tỉ lệ nghịch',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vận dụng', '#Phương trình'],
    question: 'Cho hai đại lượng $x$ và $y$ tỉ lệ nghịch với nhau. Biết khi $x = 2$ thì $y = y_1$; khi $x = 5$ thì $y = y_2$ và $y_1 - y_2 = 12$. Hệ số tỉ lệ $a$ là:',
    options: [
      '$a = 40$',
      '$a = 24$',
      '$a = 60$',
      '$a = 30$'
    ],
    correctIndex: 0,
    hint: 'Ta có $y_1 = \\frac{a}{2}$ và $y_2 = \\frac{a}{5}$. Do đó $\\frac{a}{2} - \\frac{a}{5} = 12$.',
    solution: 'Ta có $y_1 = \\frac{a}{2}$ và $y_2 = \\frac{a}{5}$.\nTheo đề bài: $y_1 - y_2 = \\frac{a}{2} - \\frac{a}{5} = 12$\n$\\implies \\frac{3a}{10} = 12 \\implies 3a = 120 \\implies a = 40$.'
  },
  {
    id: 'ch6_l23_q10',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 10,
    title: 'Chia phần tỉ lệ nghịch ba số',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Chia tỉ lệ nghịch', '#Dãy tỉ số', '#Vận dụng'],
    question: 'Chia số $104$ thành ba phần tỉ lệ nghịch với $2; 3; 4$. Số lớn nhất trong ba số đó là:',
    options: [
      '$48$',
      '$36$',
      '$52$',
      '$32$'
    ],
    correctIndex: 0,
    hint: 'Tỉ lệ nghịch với $2; 3; 4$ nghĩa là tỉ lệ thuận với $\\frac{1}{2}; \\frac{1}{3}; \\frac{1}{4}$. Quy đồng mẫu chung là 12, ta được tỉ lệ $6 : 4 : 3$.',
    solution: 'Gọi ba phần là $x, y, z$.\nVì $x, y, z$ tỉ lệ nghịch với $2; 3; 4$ nên $2x = 3y = 4z$.\nChia cho BCNN của $2, 3, 4$ là 12:\n$\\frac{2x}{12} = \\frac{3y}{12} = \\frac{4z}{12} \\implies \\frac{x}{6} = \\frac{y}{4} = \\frac{z}{3}$.\nÁp dụng tính chất dãy tỉ số bằng nhau:\n$\\frac{x}{6} = \\frac{y}{4} = \\frac{z}{3} = \\frac{x + y + z}{6 + 4 + 3} = \\frac{104}{13} = 8$.\nSố lớn nhất là $x = 8 \\cdot 6 = 48$.'
  },
  {
    id: 'ch6_l23_q11',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 11,
    title: 'Hai chuyển động cùng quãng đường',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Chuyển động', '#Thời gian', '#Vận dụng'],
    question: 'Một người đi xe đạp từ A đến B với vận tốc $12\\text{ km/h}$ hết $3$ giờ. Lúc về, người đó đi với vận tốc $18\\text{ km/h}$. Thời gian người đó đi từ B về A là:',
    options: [
      '$2$ giờ',
      '$2{,}5$ giờ',
      '$1{,}5$ giờ',
      '$1$ giờ $45$ phút'
    ],
    correctIndex: 0,
    hint: 'Quãng đường AB là $12 \\times 3 = 36\\text{ km}$. Thời gian về là $t = \\frac{36}{18}$.',
    solution: 'Quãng đường AB là: $s = 12 \\times 3 = 36\\text{ km}$.\nThời gian lúc về là: $t_2 = \\frac{s}{v_2} = \\frac{36}{18} = 2$ giờ.'
  },
  {
    id: 'ch6_l23_q12',
    lessonId: 'bai_23_dai_luong_ti_le_nghich',
    order: 12,
    title: 'Bánh răng ăn khớp quay theo chu kì',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vật lí cơ học', '#Bánh răng', '#Vận dụng'],
    question: 'Hai bánh răng ăn khớp với nhau. Bánh răng lớn có $36$ răng và quay $20$ vòng mỗi phút. Bánh răng nhỏ có $15$ răng thì sẽ quay bao nhiêu vòng mỗi phút?',
    options: [
      '$48$ vòng/phút',
      '$40$ vòng/phút',
      '$30$ vòng/phút',
      '$54$ vòng/phút'
    ],
    correctIndex: 0,
    hint: 'Số răng và số vòng quay trong một phút của hai bánh răng ăn khớp là hai đại lượng tỉ lệ nghịch: $36 \\times 20 = 15 \\times x$.',
    solution: 'Số răng và số vòng quay là hai đại lượng tỉ lệ nghịch vì tổng số răng ăn khớp qua lại trong một phút phải bằng nhau:\n$15 \\cdot x = 36 \\cdot 20 = 720 \\implies x = \\frac{720}{15} = 48$ vòng/phút.'
  }
];

export default chapter6Exercises;
