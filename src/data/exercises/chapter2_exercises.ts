import { PracticeExercise } from '../../types/curriculum';

export const chapter2Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 5: LÀM QUEN VỚI SỐ THẬP PHÂN VÔ HẠN TUẦN HOÀN (12 CÂU)
  // ==========================================================================

  {
    id: 'ch2_l05_q1',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 1,
    title: 'Nhận biết số thập phân hữu hạn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số thập phân hữu hạn', '#Mẫu số', '#Cơ bản'],
    question: 'Phân số tối giản nào sau đây viết được dưới dạng số thập phân hữu hạn?',
    options: [
      '$\\frac{3}{8}$',
      '$\\frac{1}{6}$',
      '$\\frac{5}{7}$',
      '$\\frac{4}{9}$'
    ],
    correctIndex: 0,
    hint: 'Phân số tối giản với mẫu dương viết được dưới dạng số thập phân hữu hạn khi và chỉ khi mẫu không có ước nguyên tố nào khác 2 và 5.',
    solution: 'Ta có $8 = 2^3$ chỉ chứa ước nguyên tố 2, nên $\\frac{3}{8} = 0{,}375$ là số thập phân hữu hạn. Các phân số còn lại có mẫu chứa thừa số nguyên tố 3 hoặc 7 nên là số thập phân vô hạn tuần hoàn.'
  },
  {
    id: 'ch2_l05_q2',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 2,
    title: 'Chu kì của số thập phân vô hạn tuần hoàn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chu kì', '#Kí hiệu', '#Cơ bản'],
    question: 'Chu kì của số thập phân vô hạn tuần hoàn $0{,}8333\\dots = 0{,}8(3)$ là:',
    options: [
      '$3$',
      '$83$',
      '$8$',
      '$33$'
    ],
    correctIndex: 0,
    hint: 'Chữ số hoặc cụm chữ số lặp lại vô hạn lần được gọi là chu kì và được đặt trong dấu ngoặc đơn.',
    solution: 'Trong số $0{,}8(3)$, chữ số 3 được lặp lại vô hạn lần kể từ sau chữ số 8, do đó chu kì của số này là 3.'
  },
  {
    id: 'ch2_l05_q3',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 3,
    title: 'Chuyển phân số sang số thập phân tuần hoàn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chuyển đổi', '#Chia số', '#Cơ bản'],
    question: 'Phân số $\\frac{5}{9}$ được viết dưới dạng số thập phân vô hạn tuần hoàn là:',
    options: [
      '$0{,}(5)$',
      '$0{,}55$',
      '$0{,}5(9)$',
      '$0{,}0(5)$'
    ],
    correctIndex: 0,
    hint: 'Đặt tính chia $5 : 9 = 0{,}555\\dots$. Chữ số 5 lặp lại liên tục.',
    solution: 'Thực hiện phép chia tử cho mẫu: $5 : 9 = 0{,}5555\\dots = 0{,}(5)$.'
  },
  {
    id: 'ch2_l05_q4',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 4,
    title: 'Chuyển đổi số thập phân tuần hoàn đơn giản sang phân số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Phân số tối giản', '#Cơ bản'],
    question: 'Số thập phân vô hạn tuần hoàn $0{,}(3)$ viết dưới dạng phân số tối giản là:',
    options: [
      '$\\frac{1}{3}$',
      '$\\frac{3}{10}$',
      '$\\frac{3}{100}$',
      '$\\frac{1}{9}$'
    ],
    correctIndex: 0,
    hint: 'Ta có $0{,}(1) = \\frac{1}{9} \\implies 0{,}(3) = \\frac{3}{9} = \\frac{1}{3}$.',
    solution: 'Ta có $0{,}(3) = \\frac{3}{9} = \\frac{1}{3}$.'
  },
  {
    id: 'ch2_l05_q5',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 5,
    title: 'Rút gọn trước khi nhận xét mẫu số',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Rút gọn tối giản', '#Bẫy mẫu số', '#Thông hiểu'],
    question: 'Vì sao phân số $\\frac{9}{15}$ viết được dưới dạng số thập phân hữu hạn dù mẫu số $15 = 3 \\cdot 5$ có chứa thừa số nguyên tố 3?',
    options: [
      'Vì khi rút gọn tối giản ta được $\\frac{3}{5}$, mẫu số 5 chỉ có ước nguyên tố là 5',
      'Vì tử số 9 chia hết cho 3',
      'Vì 15 là số lẻ',
      'Khẳng định sai, $\\frac{9}{15}$ là số thập phân vô hạn tuần hoàn'
    ],
    correctIndex: 0,
    hint: 'Quy tắc nhận biết số thập phân hữu hạn CHỈ ÁP DỤNG cho phân số ĐÃ ĐƯỢC RÚT GỌN TỐI GIẢN.',
    solution: 'Phân số $\\frac{9}{15}$ chưa tối giản. Rút gọn: $\\frac{9}{15} = \\frac{3}{5}$. Mẫu số là 5 (chỉ chứa thừa số 5), nên $\\frac{9}{15} = 0{,}6$ là số thập phân hữu hạn.'
  },
  {
    id: 'ch2_l05_q6',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 6,
    title: 'Phân loại số thập phân tuần hoàn đơn và tạp',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tuần hoàn tạp', '#Thông hiểu'],
    question: 'Số thập phân vô hạn tuần hoàn nào sau đây có chu kì gồm $2$ chữ số?',
    options: [
      '$1{,}(25)$',
      '$0{,}1(6)$',
      '$2{,}34(5)$',
      '$0{,}(7)$'
    ],
    correctIndex: 0,
    hint: 'Đếm số lượng chữ số nằm bên trong dấu ngoặc đơn chu kì.',
    solution: 'Số $1{,}(25)$ có chu kì là 25 gồm 2 chữ số (2 và 5). Các số còn lại có chu kì gồm 1 chữ số: $6$, $5$ và $7$.'
  },
  {
    id: 'ch2_l05_q7',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 7,
    title: 'Làm tròn số thập phân đến hàng phần mười',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Làm tròn', '#Hàng phần mười', '#Thông hiểu'],
    question: 'Làm tròn số $4{,}367$ đến hàng phần mười (chữ số thập phân thứ nhất) được kết quả là:',
    options: [
      '$4{,}4$',
      '$4{,}3$',
      '$4{,}37$',
      '$4{,}5$'
    ],
    correctIndex: 0,
    hint: 'Chữ số ngay sau hàng làm tròn là chữ số 6 (ở hàng phần trăm). Vì $6 \\ge 5$ nên ta cộng thêm 1 vào chữ số hàng phần mười: $3 + 1 = 4$.',
    solution: 'Chữ số hàng phần mười là 3. Chữ số ngay sau nó là 6 ($6 \\ge 5$) nên ta làm tròn lên: $4{,}367 \\approx 4{,}4$.'
  },
  {
    id: 'ch2_l05_q8',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 8,
    title: 'Làm tròn số thập phân đến hàng phần trăm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Làm tròn', '#Hàng phần trăm', '#Thông hiểu'],
    question: 'Làm tròn số $\\pi \\approx 3{,}141592\\dots$ đến hàng phần trăm (chữ số thập phân thứ hai) được kết quả là:',
    options: [
      '$3{,}14$',
      '$3{,}15$',
      '$3{,}1$',
      '$3{,}142$'
    ],
    correctIndex: 0,
    hint: 'Chữ số hàng phần trăm là 4. Chữ số ngay sau nó là 1 ($1 < 5$) nên giữ nguyên chữ số 4.',
    solution: 'Chữ số hàng phần trăm là 4. Chữ số liền sau ở hàng phần nghìn là 1 ($1 < 5$), do đó ta giữ nguyên: $\\pi \\approx 3{,}14$.'
  },
  {
    id: 'ch2_l05_q9',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 9,
    title: 'So sánh hai số thập phân tuần hoàn',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#So sánh', '#Tuần hoàn', '#Thông hiểu'],
    question: 'So sánh hai số $x = 0{,}(4)$ và $y = 0{,}44$:',
    options: [
      '$x > y$',
      '$x < y$',
      '$x = y$',
      'Không so sánh được'
    ],
    correctIndex: 0,
    hint: 'Viết dưới dạng khai triển: $x = 0{,}4444\\dots$ và $y = 0{,}4400\\dots$. So sánh chữ số ở hàng phần nghìn ($4 > 0$).',
    solution: 'Khai triển: $x = 0{,}4444\\dots$ và $y = 0{,}4400\\dots$.\nSo sánh từng hàng từ trái sang phải, ở hàng phần nghìn: $4 > 0$, do đó $x > y$.'
  },
  {
    id: 'ch2_l05_q10',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 10,
    title: 'Chuyển đổi số thập phân tuần hoàn có chu kì 2 chữ số',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Quy tắc chuyển đổi', '#Vận dụng'],
    question: 'Số thập phân vô hạn tuần hoàn $0{,}(45)$ viết dưới dạng phân số tối giản là:',
    options: [
      '$\\frac{5}{11}$',
      '$\\frac{45}{100}$',
      '$\\frac{9}{20}$',
      '$\\frac{45}{9}$'
    ],
    correctIndex: 0,
    hint: 'Quy tắc: $0{,}(ab) = \\frac{ab}{99}$. Rút gọn $\\frac{45}{99}$ cho 9.',
    solution: 'Ta có $0{,}(45) = \\frac{45}{99} = \\frac{45 : 9}{99 : 9} = \\frac{5}{11}$.'
  },
  {
    id: 'ch2_l05_q11',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 11,
    title: 'Tính tổng các số thập phân tuần hoàn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tính toán', '#Chuyển phân số', '#Vận dụng'],
    question: 'Giá trị của biểu thức $A = 0{,}(3) + 0{,}(6)$ là:',
    options: [
      '$1$',
      '$0{,}(9)$',
      '$\\frac{8}{9}$',
      '$0{,}9$'
    ],
    correctIndex: 0,
    hint: 'Đổi ra phân số: $0{,}(3) = \\frac{1}{3}$ và $0{,}(6) = \\frac{2}{3}$.',
    solution: 'Đổi các số sang phân số tối giản:\n$0{,}(3) = \\frac{3}{9} = \\frac{1}{3}$\n$0{,}(6) = \\frac{6}{9} = \\frac{2}{3}$\nDo đó $A = \\frac{1}{3} + \\frac{2}{3} = \\frac{3}{3} = 1$.'
  },
  {
    id: 'ch2_l05_q12',
    lessonId: 'bai_5_lam_quen_so_thap_phan_vo_han_tuan_hoan',
    order: 12,
    title: 'Ứng dụng làm tròn số tiền thực tế',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Làm tròn tiền', '#Vận dụng'],
    question: 'Hóa đơn tiền điện tháng này của gia đình là $856\\,750$ đồng. Nếu làm tròn đến hàng nghìn đồng để thanh toán qua ngân hàng thì số tiền là:',
    options: [
      '$857\\,000$ đồng',
      '$856\\,000$ đồng',
      '$860\\,000$ đồng',
      '$856\\,800$ đồng'
    ],
    correctIndex: 0,
    hint: 'Hàng nghìn là chữ số 6. Chữ số ngay sau nó là chữ số 7 ở hàng trăm ($7 \\ge 5$).',
    solution: 'Chữ số ở hàng nghìn là 6. Chữ số ngay sau nó ở hàng trăm là 7 ($7 \\ge 5$), do đó ta cộng 1 vào hàng nghìn và thay các chữ số sau bằng số 0: $856\\,750 \\approx 857\\,000$ đồng.'
  },

  // ==========================================================================
  // BÀI 6: SỐ VÔ TỈ. CĂN BẬC HAI SỐ HỌC (15 CÂU)
  // ==========================================================================

  {
    id: 'ch2_l06_q1',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 1,
    title: 'Khái niệm số vô tỉ',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số vô tỉ', '#Định nghĩa', '#Cơ bản'],
    question: 'Số vô tỉ là số được viết dưới dạng nào sau đây?',
    options: [
      'Số thập phân vô hạn không tuần hoàn',
      'Số thập phân vô hạn tuần hoàn',
      'Số thập phân hữu hạn',
      'Phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z}, b \\neq 0$'
    ],
    correctIndex: 0,
    hint: 'Theo định nghĩa SGK Toán 7: Số vô tỉ là số thập phân vô hạn không tuần hoàn. Tập hợp số vô tỉ kí hiệu là $\\mathbb{I}$.',
    solution: 'Số vô tỉ là số viết được dưới dạng số thập phân vô hạn KHÔNG tuần hoàn (ví dụ $\\sqrt{2} = 1{,}41421356\\dots$; $\\pi = 3{,}14159265\\dots$).'
  },
  {
    id: 'ch2_l06_q2',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 2,
    title: 'Nhận biết số vô tỉ tiêu biểu',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số vô tỉ', '#Nhận biết', '#Cơ bản'],
    question: 'Số nào sau đây là SỐ VÔ TỈ?',
    options: [
      '$\\sqrt{2}$',
      '$\\sqrt{4}$',
      '$0{,}(3)$',
      '$-2{,}5$'
    ],
    correctIndex: 0,
    hint: '$\\sqrt{4} = 2$ (số hữu tỉ), $0{,}(3) = \\frac{1}{3}$ (số hữu tỉ), $-2{,}5 = -\\frac{5}{2}$ (số hữu tỉ). $\\sqrt{2}$ không phải là phân số.',
    solution: 'Ta có $\\sqrt{4} = 2 \\in \\mathbb{Q}$; $0{,}(3) = \\frac{1}{3} \\in \\mathbb{Q}$; $-2{,}5 \\in \\mathbb{Q}$. Chỉ có $\\sqrt{2} \\approx 1{,}4142\\dots$ là số thập phân vô hạn không tuần hoàn (số vô tỉ).'
  },
  {
    id: 'ch2_l06_q3',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 3,
    title: 'Định nghĩa căn bậc hai số học',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Căn bậc hai số học', '#Định nghĩa', '#Cơ bản'],
    question: 'Căn bậc hai số học của số $a$ không âm là số $x$ thỏa mãn điều kiện nào?',
    options: [
      '$x \\ge 0$ và $x^2 = a$',
      '$x^2 = a$',
      '$x \\le 0$ và $x^2 = a$',
      '$x = a^2$'
    ],
    correctIndex: 0,
    hint: 'Căn bậc hai số học của số không âm $a$ là số KHÔNG ÂM $x$ sao cho $x^2 = a$. Kí hiệu $\\sqrt{a}$.',
    solution: 'Theo định nghĩa, căn bậc hai số học của số $a$ ($a \\ge 0$) là số $x$ không âm ($x \\ge 0$) sao cho $x^2 = a$. Kí hiệu là $\\sqrt{a}$.'
  },
  {
    id: 'ch2_l06_q4',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 4,
    title: 'Tính căn bậc hai của số chính phương',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Căn bậc hai', '#Số chính phương', '#Cơ bản'],
    question: 'Giá trị của $\\sqrt{49}$ bằng:',
    options: [
      '$7$',
      '$-7$',
      '$\\pm 7$',
      '$24{,}5$'
    ],
    correctIndex: 0,
    hint: 'Tìm số không âm có bình phương bằng 49. Vì $7 \\ge 0$ và $7^2 = 49$ nên $\\sqrt{49} = 7$.',
    solution: 'Căn bậc hai số học luôn là một số không âm: $\\sqrt{49} = 7$ (vì $7 \\ge 0$ và $7^2 = 49$). Lưu ý căn bậc hai số học không lấy giá trị âm.'
  },
  {
    id: 'ch2_l06_q5',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 5,
    title: 'Căn bậc hai của phân số',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Căn phân số', '#Cơ bản'],
    question: 'Giá trị của $\\sqrt{\\frac{16}{81}}$ bằng:',
    options: [
      '$\\frac{4}{9}$',
      '$\\frac{8}{40{,}5}$',
      '$\\pm\\frac{4}{9}$',
      '$\\frac{2}{3}$'
    ],
    correctIndex: 0,
    hint: '$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$. Tính $\\sqrt{16} = 4$ và $\\sqrt{81} = 9$.',
    solution: 'Ta có $\\sqrt{\\frac{16}{81}} = \\frac{\\sqrt{16}}{\\sqrt{81}} = \\frac{4}{9}$.'
  },
  {
    id: 'ch2_l06_q6',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 6,
    title: 'Căn bậc hai của số thập phân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Căn số thập phân', '#Thông hiểu'],
    question: 'Tính $\\sqrt{0{,}64}$:',
    options: [
      '$0{,}8$',
      '$0{,}08$',
      '$0{,}32$',
      '$8$'
    ],
    correctIndex: 0,
    hint: 'Vì $0{,}8 \\ge 0$ và $(0{,}8)^2 = 0{,}64$ nên $\\sqrt{0{,}64} = 0{,}8$.',
    solution: 'Ta có $(0{,}8)^2 = 0{,}64$ và $0{,}8 > 0$ nên $\\sqrt{0{,}64} = 0{,}8$.'
  },
  {
    id: 'ch2_l06_q7',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 7,
    title: 'Tìm x biết căn bậc hai của x',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tìm x', '#Bình phương 2 vế', '#Thông hiểu'],
    question: 'Tìm $x$ biết $\\sqrt{x} = 5$:',
    options: [
      '$x = 25$',
      '$x = \\sqrt{5}$',
      '$x = 10$',
      '$x = \\pm 25$'
    ],
    correctIndex: 0,
    hint: 'Bình phương hai vế: $(\\sqrt{x})^2 = 5^2 \\implies x = 25$.',
    solution: 'Với $x \\ge 0$, ta có $\\sqrt{x} = 5 \\implies x = 5^2 = 25$.'
  },
  {
    id: 'ch2_l06_q8',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 8,
    title: 'Tìm x thỏa mãn x bình phương bằng a',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phương trình bậc hai', '#2 nghiệm', '#Thông hiểu'],
    question: 'Tìm tất cả các giá trị của $x$ thỏa mãn $x^2 = 64$:',
    options: [
      '$x = 8$ hoặc $x = -8$',
      '$x = 8$',
      '$x = -8$',
      '$x = 32$'
    ],
    correctIndex: 0,
    hint: 'Phương trình $x^2 = a$ ($a > 0$) luôn có 2 nghiệm đối nhau: $x = \\sqrt{a}$ hoặc $x = -\\sqrt{a}$.',
    solution: 'Vì $8^2 = 64$ và $(-8)^2 = 64$ nên phương trình $x^2 = 64$ có hai nghiệm là $x = 8$ hoặc $x = -8$.'
  },
  {
    id: 'ch2_l06_q9',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 9,
    title: 'So sánh căn bậc hai với một số nguyên',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#So sánh căn', '#Thông hiểu'],
    question: 'So sánh $\\sqrt{26}$ và $5$:',
    options: [
      '$\\sqrt{26} > 5$',
      '$\\sqrt{26} < 5$',
      '$\\sqrt{26} = 5$',
      'Không so sánh được'
    ],
    correctIndex: 0,
    hint: 'Đưa số 5 vào trong căn: $5 = \\sqrt{25}$. Sau đó so sánh $\\sqrt{26}$ và $\\sqrt{25}$.',
    solution: 'Ta có $5 = \\sqrt{25}$. Vì $26 > 25 > 0$ nên $\\sqrt{26} > \\sqrt{25} = 5$.'
  },
  {
    id: 'ch2_l06_q10',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 10,
    title: 'Tính cạnh hình vuông khi biết diện tích',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình học', '#Thực tế', '#Thông hiểu'],
    question: 'Một khu vườn hình vuông có diện tích là $121\\text{ m}^2$. Độ dài cạnh của khu vườn đó là:',
    options: [
      '$11\\text{ m}$',
      '$12\\text{ m}$',
      '$60{,}5\\text{ m}$',
      '$22\\text{ m}$'
    ],
    correctIndex: 0,
    hint: 'Diện tích hình vuông $S = a^2 \\implies a = \\sqrt{S} = \\sqrt{121}$.',
    solution: 'Gọi độ dài cạnh hình vuông là $a$ ($a > 0$). Ta có $a^2 = 121 \\implies a = \\sqrt{121} = 11\\text{ m}$.'
  },
  {
    id: 'ch2_l06_q11',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 11,
    title: 'Tìm x trong biểu thức dưới dấu căn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Căn phức hợp', '#Vận dụng'],
    question: 'Tìm $x$ biết $\\sqrt{2x - 3} = 5$:',
    options: [
      '$x = 14$',
      '$x = 4$',
      '$x = 11$',
      '$x = 16$'
    ],
    correctIndex: 0,
    hint: 'Bình phương hai vế: $2x - 3 = 5^2 = 25$. Chuyển vế tìm $x$.',
    solution: 'Bình phương hai vế:\n$2x - 3 = 5^2 = 25$\n$2x = 25 + 3 = 28 \\implies x = 14$.'
  },
  {
    id: 'ch2_l06_q12',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 12,
    title: 'Tính giá trị biểu thức chứa nhiều căn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tính toán căn', '#Vận dụng'],
    question: 'Giá trị của biểu thức $P = \\sqrt{100} - \\sqrt{36} + \\sqrt{0{,}25}$ là:',
    options: [
      '$4{,}5$',
      '$3{,}5$',
      '$4{,}25$',
      '$5$'
    ],
    correctIndex: 0,
    hint: 'Tính từng căn bậc hai: $\\sqrt{100} = 10$, $\\sqrt{36} = 6$, $\\sqrt{0{,}25} = 0{,}5$.',
    solution: 'Ta có $P = 10 - 6 + 0{,}5 = 4 + 0{,}5 = 4{,}5$.'
  },
  {
    id: 'ch2_l06_q13',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 13,
    title: 'Kẹp số vô tỉ giữa hai số nguyên liên tiếp',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Kẹp số nguyên', '#Vận dụng'],
    question: 'Số $\\sqrt{10}$ nằm giữa hai số nguyên liên tiếp nào?',
    options: [
      '$3$ và $4$',
      '$2$ và $3$',
      '$4$ và $5$',
      '$9$ và $16$'
    ],
    correctIndex: 0,
    hint: 'Ta có $9 < 10 < 16$. Lấy căn bậc hai: $\\sqrt{9} < \\sqrt{10} < \\sqrt{16}$.',
    solution: 'Vì $9 < 10 < 16$ nên $\\sqrt{9} < \\sqrt{10} < \\sqrt{16}$, tức là $3 < \\sqrt{10} < 4$.\nVậy $\\sqrt{10}$ nằm giữa hai số nguyên liên tiếp là 3 và 4.'
  },
  {
    id: 'ch2_l06_q14',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 14,
    title: 'Bài toán thực tế thời gian vật rơi tự do',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vật lí', '#Thực tế', '#Vận dụng'],
    question: 'Thời gian rơi $t\\text{ (giây)}$ của một vật từ độ cao $h\\text{ (m)}$ được tính gần đúng theo công thức $t = \\sqrt{\\frac{2h}{g}}$. Nếu một vật rơi từ độ cao $h = 45\\text{ m}$ với gia tốc trọng trường $g = 10\\text{ m/s}^2$ thì thời gian rơi là:',
    options: [
      '$3\\text{ giây}$',
      '$9\\text{ giây}$',
      '$4{,}5\\text{ giây}$',
      '$2\\text{ giây}$'
    ],
    correctIndex: 0,
    hint: 'Thay số vào công thức: $t = \\sqrt{\\frac{2 \\times 45}{10}} = \\sqrt{\\frac{90}{10}} = \\sqrt{9}$.',
    solution: 'Thay $h = 45\\text{ m}$ và $g = 10\\text{ m/s}^2$ vào công thức:\n$t = \\sqrt{\\frac{2 \\cdot 45}{10}} = \\sqrt{\\frac{90}{10}} = \\sqrt{9} = 3\\text{ giây}$.'
  },
  {
    id: 'ch2_l06_q15',
    lessonId: 'bai_6_so_vo_ti_can_bac_hai_so_hoc',
    order: 15,
    title: 'Căn bậc hai của một bình phương',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hằng đẳng thức căn', '#Vận dụng'],
    question: 'Giá trị của biểu thức $\\sqrt{(1 - \\sqrt{3})^2}$ bằng:',
    options: [
      '$\\sqrt{3} - 1$',
      '$1 - \\sqrt{3}$',
      '$\\sqrt{2}$',
      '$4 - 2\\sqrt{3}$'
    ],
    correctIndex: 0,
    hint: 'Quy tắc: $\\sqrt{A^2} = |A|$. Vì $1 < \\sqrt{3}$ nên $1 - \\sqrt{3} < 0$, suy ra $|1 - \\sqrt{3}| = \\sqrt{3} - 1$.',
    solution: 'Ta có $\\sqrt{(1 - \\sqrt{3})^2} = |1 - \\sqrt{3}|$.\nVì $1 < \\sqrt{3}$ nên $1 - \\sqrt{3} < 0$, do đó $|1 - \\sqrt{3}| = -(1 - \\sqrt{3}) = \\sqrt{3} - 1$.'
  },

  // ==========================================================================
  // BÀI 7: TẬP HỢP CÁC SỐ THỰC. GIÁ TRỊ TUYỆT ĐỐI CỦA MỘT SỐ THỰC (15 CÂU)
  // ==========================================================================

  {
    id: 'ch2_l07_q1',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 1,
    title: 'Cấu thành của tập hợp số thực R',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số thực', '#Tập hợp R', '#Cơ bản'],
    question: 'Tập hợp các số thực $\\mathbb{R}$ bao gồm các tập hợp số nào?',
    options: [
      'Tập hợp số hữu tỉ $\\mathbb{Q}$ và tập hợp số vô tỉ $\\mathbb{I}$',
      'Tập hợp số tự nhiên $\\mathbb{N}$ và tập hợp số nguyên $\\mathbb{Z}$',
      'Chỉ gồm các số nguyên và phân số',
      'Tập hợp số nguyên $\\mathbb{Z}$ và tập hợp số vô tỉ $\\mathbb{I}$'
    ],
    correctIndex: 0,
    hint: 'Số hữu tỉ và số vô tỉ cùng nhau tạo thành tập hợp số thực: $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$.',
    solution: 'Tập hợp số thực $\\mathbb{R}$ bao gồm tất cả các số hữu tỉ $\\mathbb{Q}$ và các số vô tỉ $\\mathbb{I}$. Kí hiệu: $\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}$.'
  },
  {
    id: 'ch2_l07_q2',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 2,
    title: 'Số đối của một số thực',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Số đối', '#Số thực', '#Cơ bản'],
    question: 'Số đối của số thực $-\\sqrt{5}$ là:',
    options: [
      '$\\sqrt{5}$',
      '$-\\sqrt{5}$',
      '$5$',
      '$-5$'
    ],
    correctIndex: 0,
    hint: 'Số đối của số thực $x$ là số $-x$. Hai số đối nhau nằm đối xứng qua gốc 0 trên trục số.',
    solution: 'Số đối của $-\\sqrt{5}$ là $-\\left(-\\sqrt{5}\\right) = \\sqrt{5}$.'
  },
  {
    id: 'ch2_l07_q3',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 3,
    title: 'Giá trị tuyệt đối của số âm',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Giá trị tuyệt đối', '#Cơ bản'],
    question: 'Giá trị của $|-\\sqrt{7}|$ bằng:',
    options: [
      '$\\sqrt{7}$',
      '$-\\sqrt{7}$',
      '$7$',
      '$-7$'
    ],
    correctIndex: 0,
    hint: 'Giá trị tuyệt đối của một số luôn là một số không âm: $|-a| = a$ với $a > 0$.',
    solution: 'Theo định nghĩa, khoảng cách từ điểm $-\\sqrt{7}$ đến gốc 0 trên trục số là $\\sqrt{7}$, do đó $|-\\sqrt{7}| = \\sqrt{7}$.'
  },
  {
    id: 'ch2_l07_q4',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 4,
    title: 'Trục số thực',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trục số thực', '#Cơ bản'],
    question: 'Khẳng định nào sau đây là ĐÚNG về trục số thực?',
    options: [
      'Mỗi số thực được biểu diễn bởi một điểm trên trục số và ngược lại',
      'Trên trục số chỉ biểu diễn được các số hữu tỉ',
      'Các số vô tỉ không thể biểu diễn được trên trục số',
      'Giữa hai số thực không có số thực nào khác'
    ],
    correctIndex: 0,
    hint: 'Các điểm biểu diễn số thực lấp đầy toàn bộ trục số, do đó trục số còn gọi là trục số thực.',
    solution: 'Mỗi số thực được biểu diễn bởi một điểm trên trục số và ngược lại, mỗi điểm trên trục số đều biểu diễn một số thực. Các số thực lấp đầy trục số.'
  },
  {
    id: 'ch2_l07_q5',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 5,
    title: 'Dãy bao hàm các tập hợp số',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tập hợp số', '#Bao hàm', '#Thông hiểu'],
    question: 'Dãy bao hàm nào sau đây là ĐÚNG?',
    options: [
      '$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$',
      '$\\mathbb{N} \\subset \\mathbb{Q} \\subset \\mathbb{Z} \\subset \\mathbb{R}$',
      '$\\mathbb{R} \\subset \\mathbb{Q} \\subset \\mathbb{Z} \\subset \\mathbb{N}$',
      '$\\mathbb{I} \\subset \\mathbb{Q} \\subset \\mathbb{R}$'
    ],
    correctIndex: 0,
    hint: 'Số tự nhiên $\\subset$ Số nguyên $\\subset$ Số hữu tỉ $\\subset$ Số thực.',
    solution: 'Mọi số tự nhiên đều là số nguyên, mọi số nguyên đều là số hữu tỉ, mọi số hữu tỉ đều là số thực. Do đó: $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.'
  },
  {
    id: 'ch2_l07_q6',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 6,
    title: 'Phương trình giá trị tuyệt đối cơ bản',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phương trình trị tuyệt đối', '#Thông hiểu'],
    question: 'Tìm tất cả các số thực $x$ thỏa mãn $|x| = \\sqrt{3}$:',
    options: [
      '$x = \\sqrt{3}$ hoặc $x = -\\sqrt{3}$',
      '$x = \\sqrt{3}$',
      '$x = 3$',
      '$x = 3$ hoặc $x = -3$'
    ],
    correctIndex: 0,
    hint: 'Với số $a > 0$, phương trình $|x| = a$ có hai nghiệm là $x = a$ hoặc $x = -a$.',
    solution: 'Vì $\\sqrt{3} > 0$ nên $|x| = \\sqrt{3} \\iff x = \\sqrt{3}$ hoặc $x = -\\sqrt{3}$.'
  },
  {
    id: 'ch2_l07_q7',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 7,
    title: 'So sánh số vô tỉ và số nguyên',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#So sánh số thực', '#Thông hiểu'],
    question: 'So sánh hai số thực $a = \\sqrt{5}$ và $b = 2$:',
    options: [
      '$a > b$',
      '$a < b$',
      '$a = b$',
      'Không so sánh được'
    ],
    correctIndex: 0,
    hint: 'Viết $2 = \\sqrt{4}$. Vì $5 > 4$ nên $\\sqrt{5} > \\sqrt{4} = 2$.',
    solution: 'Ta có $2 = \\sqrt{4}$. Vì $5 > 4$ nên $\\sqrt{5} > \\sqrt{4}$, tức là $\\sqrt{5} > 2$, do đó $a > b$.'
  },
  {
    id: 'ch2_l07_q8',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 8,
    title: 'Tính chất giá trị tuyệt đối của hiệu',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tính chất', '#Khoảng cách', '#Thông hiểu'],
    question: 'Hình học: Giá trị tuyệt đối $|a - b|$ biểu diễn ý nghĩa gì trên trục số thực?',
    options: [
      'Khoảng cách giữa hai điểm biểu diễn số $a$ và số $b$',
      'Tổng khoảng cách từ $a$ và $b$ đến gốc $0$',
      'Điểm chính giữa của hai số $a$ và $b$',
      'Tích khoảng cách của $a$ và $b$'
    ],
    correctIndex: 0,
    hint: 'Khoảng cách giữa hai điểm $A(a)$ và $B(b)$ trên trục số luôn bằng $|a - b| = |b - a|$.',
    solution: 'Trên trục số thực, $|a - b|$ chính là khoảng cách giữa hai điểm biểu diễn số thực $a$ và số thực $b$.'
  },
  {
    id: 'ch2_l07_q9',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 9,
    title: 'So sánh hai số thực âm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#So sánh số âm', '#Thông hiểu'],
    question: 'So sánh hai số thực âm: $u = -\\pi$ và $v = -3{,}15$ (lấy $\\pi \\approx 3{,}1416$):',
    options: [
      '$u > v$',
      '$u < v$',
      '$u = v$',
      '$u = -v$'
    ],
    correctIndex: 0,
    hint: 'So sánh giá trị tuyệt đối: $|u| = \\pi \\approx 3{,}1416$ và $|v| = 3{,}15$. Vì $3{,}1416 < 3{,}15$ nên số âm có giá trị tuyệt đối nhỏ hơn sẽ lớn hơn.',
    solution: 'Ta có $|u| = \\pi \\approx 3{,}1416$ và $|v| = 3{,}15$.\nVì $3{,}1416 < 3{,}15$ nên $-\\pi > -3{,}15$, do đó $u > v$.'
  },
  {
    id: 'ch2_l07_q10',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 10,
    title: 'Giải phương trình chứa dấu giá trị tuyệt đối',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phương trình', '#Vận dụng'],
    question: 'Tìm tất cả các giá trị của $x$ thỏa mãn $|2x - 3| = 5$:',
    options: [
      '$x = 4$ hoặc $x = -1$',
      '$x = 4$',
      '$x = -1$',
      '$x = 1$ hoặc $x = -4$'
    ],
    correctIndex: 0,
    hint: 'Xét hai trường hợp: $2x - 3 = 5$ hoặc $2x - 3 = -5$.',
    solution: 'Ta có hai trường hợp:\nTH1: $2x - 3 = 5 \\implies 2x = 8 \\implies x = 4$.\nTH2: $2x - 3 = -5 \\implies 2x = -2 \\implies x = -1$.\nVậy $x = 4$ hoặc $x = -1$.'
  },
  {
    id: 'ch2_l07_q11',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 11,
    title: 'Giá trị tuyệt đối bằng một số âm',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Bẫy nghiệm', '#Vận dụng'],
    question: 'Tìm số nghiệm thực của phương trình $|x - 7| = -2$:',
    options: [
      '$0$ nghiệm',
      '$1$ nghiệm',
      '$2$ nghiệm',
      'Vô số nghiệm'
    ],
    correctIndex: 0,
    hint: 'Giá trị tuyệt đối của mọi số thực luôn không âm ($|A| \\ge 0$).',
    solution: 'Vì $|x - 7| \\ge 0$ với mọi $x \\in \\mathbb{R}$, trong khi vế phải là $-2 < 0$. Do đó phương trình vô nghiệm (0 nghiệm).'
  },
  {
    id: 'ch2_l07_q12',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 12,
    title: 'Tính giá trị biểu thức chứa căn và trị tuyệt đối',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phối hợp phép tính', '#Vận dụng'],
    question: 'Giá trị của biểu thức $M = |-\\sqrt{16}| + |3 - 5| - \\sqrt{9}$ là:',
    options: [
      '$3$',
      '$5$',
      '$-1$',
      '$1$'
    ],
    correctIndex: 0,
    hint: '$|-\\sqrt{16}| = |-4| = 4$; $|3 - 5| = |-2| = 2$; $\\sqrt{9} = 3$.',
    solution: 'Ta có:\n$|-\\sqrt{16}| = |-4| = 4$\n$|3 - 5| = |-2| = 2$\n$\\sqrt{9} = 3$\nDo đó $M = 4 + 2 - 3 = 3$.'
  },
  {
    id: 'ch2_l07_q13',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 13,
    title: 'Giá trị nhỏ nhất của tổng giá trị tuyệt đối',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Bất đẳng thức', '#GTNN', '#Vận dụng'],
    question: 'Giá trị nhỏ nhất của biểu thức $A = |x - 2| + |x - 5|$ là:',
    options: [
      '$3$',
      '$0$',
      '$2$',
      '$5$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng bất đẳng thức $|a| + |b| \\ge |a + b|$ với $a = x - 2$ và $b = 5 - x$. Khi đó $|x - 2| + |5 - x| \\ge |x - 2 + 5 - x| = 3$.',
    solution: 'Ta có $A = |x - 2| + |5 - x| \\ge |(x - 2) + (5 - x)| = |3| = 3$.\nDấu "=" xảy ra khi $(x - 2)(5 - x) \\ge 0 \\iff 2 \\le x \\le 5$.\nVậy giá trị nhỏ nhất của $A$ là 3.'
  },
  {
    id: 'ch2_l07_q14',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 14,
    title: 'Tổng hai số không âm bằng 0',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tổng không âm', '#Vận dụng'],
    question: 'Tìm các số thực $x, y$ thỏa mãn $|x - 1| + \\sqrt{y - 4} = 0$:',
    options: [
      '$x = 1; y = 4$',
      '$x = -1; y = -4$',
      '$x = 1; y = -4$',
      'Vô nghiệm'
    ],
    correctIndex: 0,
    hint: 'Vì $|x - 1| \\ge 0$ và $\\sqrt{y - 4} \\ge 0$, tổng của chúng bằng 0 khi và chỉ khi cả hai số hạng đồng thời bằng 0.',
    solution: 'Ta có $|x - 1| \\ge 0$ và $\\sqrt{y - 4} \\ge 0$ với mọi $x, y \\ge 4$.\nTổng của hai số không âm bằng 0 khi và chỉ khi:\n$x - 1 = 0 \\implies x = 1$ và $y - 4 = 0 \\implies y = 4$.\nVậy $x = 1; y = 4$.'
  },
  {
    id: 'ch2_l07_q15',
    lessonId: 'bai_7_tap_hop_cac_so_thuc',
    order: 15,
    title: 'Phá dấu giá trị tuyệt đối theo điều kiện',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Rút gọn biểu thức', '#Vận dụng'],
    question: 'Rút gọn biểu thức $P = |x - 3| - x + 5$ khi $x < 3$:',
    options: [
      '$8 - 2x$',
      '$2$',
      '$-2$',
      '$2x - 8$'
    ],
    correctIndex: 0,
    hint: 'Khi $x < 3$ thì $x - 3 < 0$, do đó $|x - 3| = -(x - 3) = 3 - x$.',
    solution: 'Vì $x < 3$ nên $x - 3 < 0$.\nTheo định nghĩa giá trị tuyệt đối: $|x - 3| = -(x - 3) = 3 - x$.\nThay vào $P$: $P = (3 - x) - x + 5 = 8 - 2x$.'
  },

  // ==========================================================================
  // BÀI TẬP CUỐI CHƯƠNG II: ÔN TẬP TỔNG HỢP SỐ THỰC (10 CÂU)
  // ==========================================================================

  {
    id: 'ch2_l08_q1',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 1,
    title: 'Tính giá trị biểu thức phối hợp căn, lũy thừa, trị tuyệt đối',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tổng hợp phép tính', '#Thông hiểu'],
    question: 'Tính giá trị của biểu thức $A = \\sqrt{25} - \\left(-\\frac{1}{2}\\right)^2 + |0{,}75 - 1|$:',
    options: [
      '$5$',
      '$4{,}5$',
      '$5{,}5$',
      '$4$'
    ],
    correctIndex: 0,
    hint: '$\\sqrt{25} = 5$; $\\left(-\\frac{1}{2}\\right)^2 = \\frac{1}{4} = 0{,}25$; $|0{,}75 - 1| = |-0{,}25| = 0{,}25$.',
    solution: 'Ta có:\n$\\sqrt{25} = 5$\n$\\left(-\\frac{1}{2}\\right)^2 = 0{,}25$\n$|0{,}75 - 1| = |-0{,}25| = 0{,}25$\nDo đó $A = 5 - 0{,}25 + 0{,}25 = 5$.'
  },
  {
    id: 'ch2_l08_q2',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 2,
    title: 'Tìm x trong phương trình căn bậc hai',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phương trình căn', '#Thông hiểu'],
    question: 'Tìm $x$ biết $2\\sqrt{x} - 6 = 0$:',
    options: [
      '$x = 9$',
      '$x = 3$',
      '$x = 6$',
      '$x = 81$'
    ],
    correctIndex: 0,
    hint: '$2\\sqrt{x} = 6 \\implies \\sqrt{x} = 3 \\implies x = 3^2 = 9$.',
    solution: 'Ta có $2\\sqrt{x} = 6 \\implies \\sqrt{x} = 3$.\nBình phương hai vế: $x = 3^2 = 9$.'
  },
  {
    id: 'ch2_l08_q3',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 3,
    title: 'Ước lượng kết quả phép tính',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Ước lượng', '#Làm tròn', '#Thông hiểu'],
    question: 'Ước lượng kết quả của phép tính $39{,}8 \\times 5{,}1$ bằng cách làm tròn các thừa số đến hàng đơn vị:',
    options: [
      '$200$',
      '$2000$',
      '$150$',
      '$250$'
    ],
    correctIndex: 0,
    hint: 'Làm tròn $39{,}8 \\approx 40$ và $5{,}1 \\approx 5$. Tính $40 \\times 5$.',
    solution: 'Làm tròn đến hàng đơn vị: $39{,}8 \\approx 40$ và $5{,}1 \\approx 5$.\nTích ước lượng là: $40 \\times 5 = 200$.'
  },
  {
    id: 'ch2_l08_q4',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 4,
    title: 'Phân loại các số trong một tập hợp',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phân loại số', '#Thông hiểu'],
    question: 'Trong các số sau: $0; -3; \\frac{2}{7}; \\sqrt{5}; 0{,}(12); \\pi; \\sqrt{9}$, có bao nhiêu số là SỐ VÔ TỈ?',
    options: [
      '$2$ số (gồm $\\sqrt{5}$ và $\\pi$)',
      '$3$ số (gồm $\\sqrt{5}, \\pi, 0{,}(12)$)',
      '$1$ số (chỉ có $\\pi$)',
      '$4$ số'
    ],
    correctIndex: 0,
    hint: '$\\sqrt{9} = 3$ (hữu tỉ); $0{,}(12) = \\frac{12}{99}$ (hữu tỉ). Chỉ có $\\sqrt{5}$ và $\\pi$ là số thập phân vô hạn không tuần hoàn.',
    solution: 'Các số hữu tỉ: $0; -3; \\frac{2}{7}; 0{,}(12) = \\frac{4}{33}; \\sqrt{9} = 3$.\nCác số vô tỉ: $\\sqrt{5}$ và $\\pi$ (có 2 số vô tỉ).'
  },
  {
    id: 'ch2_l08_q5',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 5,
    title: 'Tìm x thỏa mãn phương trình tích căn và trị tuyệt đối',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phương trình tích', '#Vận dụng'],
    question: 'Số nghiệm thực của phương trình $(|x| - 4)(\\sqrt{x} - 3) = 0$ là:',
    options: [
      '$3$ nghiệm ($x = 4, x = -4$ bị loại vì đk căn, $x = 9, x = 4$)',
      '$2$ nghiệm ($x = 4$ và $x = 9$)',
      '$4$ nghiệm',
      '$1$ nghiệm'
    ],
    correctIndex: 1,
    hint: 'Điều kiện xác định của $\\sqrt{x}$ là $x \\ge 0$. Do đó $x = -4$ bị loại.',
    solution: 'Điều kiện xác định: $x \\ge 0$.\nPhương trình tương đương:\n1) $|x| - 4 = 0 \\implies |x| = 4 \\implies x = 4$ (nhận) hoặc $x = -4$ (loại vì $x \\ge 0$).\n2) $\\sqrt{x} - 3 = 0 \\implies \\sqrt{x} = 3 \\implies x = 9$ (nhận).\nVậy phương trình có đúng 2 nghiệm thực là $x = 4$ và $x = 9$.'
  },
  {
    id: 'ch2_l08_q6',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 6,
    title: 'So sánh hai biểu thức chứa căn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#So sánh căn thức', '#Vận dụng'],
    question: 'So sánh $A = \\sqrt{7} + \\sqrt{15}$ và $B = 7$:',
    options: [
      '$A < B$',
      '$A > B$',
      '$A = B$',
      '$A = 2B$'
    ],
    correctIndex: 0,
    hint: 'Bình phương $A$: $A^2 = 7 + 15 + 2\\sqrt{105} = 22 + 2\\sqrt{105}$. So sánh $\\sqrt{105} < \\sqrt{121} = 11 \\implies A^2 < 22 + 22 = 44 < 49 = 7^2$.',
    solution: 'Ta có $A^2 = (\\sqrt{7} + \\sqrt{15})^2 = 7 + 15 + 2\\sqrt{105} = 22 + 2\\sqrt{105}$.\nVì $105 < 121$ nên $\\sqrt{105} < 11 \\implies 2\\sqrt{105} < 22$.\nDo đó $A^2 < 22 + 22 = 44$.\nMà $B^2 = 7^2 = 49$.\nVì $A^2 < 44 < 49 = B^2$ nên $A < B$.'
  },
  {
    id: 'ch2_l08_q7',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 7,
    title: 'Giá trị nhỏ nhất của biểu thức chứa căn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#GTNN', '#Căn thức', '#Vận dụng'],
    question: 'Giá trị nhỏ nhất của biểu thức $P = \\sqrt{x - 1} + 3$ là:',
    options: [
      '$3$ khi $x = 1$',
      '$0$ khi $x = 1$',
      '$4$ khi $x = 2$',
      'Không có giá trị nhỏ nhất'
    ],
    correctIndex: 0,
    hint: 'Điều kiện $x \\ge 1$. Ta luôn có $\\sqrt{x - 1} \\ge 0$.',
    solution: 'Với mọi $x \\ge 1$, ta có $\\sqrt{x - 1} \\ge 0$.\nSuy ra $P = \\sqrt{x - 1} + 3 \\ge 0 + 3 = 3$.\nDấu "=" xảy ra khi $x - 1 = 0 \\iff x = 1$.\nVậy giá trị nhỏ nhất của $P$ là 3 khi $x = 1$.'
  },
  {
    id: 'ch2_l08_q8',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 8,
    title: 'Mệnh đề đúng sai về tập hợp số thực',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Mệnh đề', '#Lí thuyết số', '#Vận dụng'],
    question: 'Trong các phát biểu sau, phát biểu nào là SAI?',
    options: [
      'Tổng của hai số vô tỉ luôn là một số vô tỉ',
      'Căn bậc hai số học của một số không âm luôn là số không âm',
      'Nếu một số thực không phải là số hữu tỉ thì nó là số vô tỉ',
      'Mọi số nguyên đều là số thực'
    ],
    correctIndex: 0,
    hint: 'Xét phản ví dụ: $\\sqrt{2}$ và $-\\sqrt{2}$ đều là số vô tỉ, nhưng tổng của chúng là $\\sqrt{2} + (-\\sqrt{2}) = 0$ (là số hữu tỉ).',
    solution: 'Phát biểu "Tổng của hai số vô tỉ luôn là một số vô tỉ" là SAI.\nPhản ví dụ: Lấy $a = \\sqrt{3}$ và $b = -\\sqrt{3}$ đều là số vô tỉ, nhưng $a + b = 0$ là số hữu tỉ.'
  },
  {
    id: 'ch2_l08_q9',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 9,
    title: 'Diện tích hình chữ nhật ước lượng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Diện tích', '#Ước lượng', '#Vận dụng'],
    question: 'Một căn phòng hình chữ nhật có chiều dài $5{,}25\\text{ m}$ và chiều rộng $3{,}82\\text{ m}$. Bác thợ ước tính diện tích phòng bằng cách làm tròn mỗi kích thước đến hàng đơn vị rồi nhân lại. Diện tích ước tính là bao nhiêu mét vuông?',
    options: [
      '$20\\text{ m}^2$',
      '$19\\text{ m}^2$',
      '$24\\text{ m}^2$',
      '$15\\text{ m}^2$'
    ],
    correctIndex: 0,
    hint: 'Làm tròn $5{,}25 \\approx 5$ và $3{,}82 \\approx 4$. Diện tích ước tính là $5 \\times 4$.',
    solution: 'Làm tròn đến hàng đơn vị: chiều dài $5{,}25\\text{ m} \\approx 5\\text{ m}$; chiều rộng $3{,}82\\text{ m} \\approx 4\\text{ m}$.\nDiện tích ước tính là: $5 \\times 4 = 20\\text{ m}^2$.'
  },
  {
    id: 'ch2_l08_q10',
    lessonId: 'luyen_tap_chung_chuong_2',
    order: 10,
    title: 'Tìm x nguyên để biểu thức căn có giá trị nguyên',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Số nguyên', '#Căn thức', '#Vận dụng'],
    question: 'Có bao nhiêu số nguyên không âm $x < 50$ để $\\sqrt{x}$ là một số nguyên?',
    options: [
      '$8$ số ($0, 1, 4, 9, 16, 25, 36, 49$)',
      '$7$ số',
      '$9$ số',
      '$6$ số'
    ],
    correctIndex: 0,
    hint: '$\\sqrt{x}$ là số nguyên khi $x$ là số chính phương: $x = k^2$ với $k \\in \\mathbb{N}$ và $k^2 < 50$.',
    solution: '$\\sqrt{x}$ là số nguyên khi $x$ là số chính phương. Ta tìm các số $k \\in \\mathbb{N}$ sao cho $k^2 < 50$.\nCác giá trị $k$ thỏa mãn là $k \\in \\{0; 1; 2; 3; 4; 5; 6; 7\\}$ (vì $7^2 = 49 < 50$ và $8^2 = 64 > 50$).\nCác giá trị của $x$ tương ứng là: $\\{0; 1; 4; 9; 16; 25; 36; 49\\}$ (gồm 8 số).'
  }
];

export default chapter2Exercises;
