import { PracticeExercise } from '../../types/curriculum';

export const chapter8Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 29: LÀM QUEN VỚI BIẾN CỐ (15 CÂU)
  // ==========================================================================

  {
    id: 'ch8_l29_q1',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 1,
    title: 'Khái niệm Biến cố chắc chắn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Biến cố chắc chắn', '#Cơ bản'],
    question: 'Gieo một con xúc xắc 6 mặt cân đối. Biến cố nào sau đây là "Biến cố chắc chắn" (luôn luôn xảy ra)?',
    options: [
      'Số chấm xuất hiện trên mặt xúc xắc là số tự nhiên nhỏ hơn 7',
      'Số chấm xuất hiện là số chẵn',
      'Số chấm xuất hiện bằng 6',
      'Số chấm xuất hiện là số lẻ'
    ],
    correctIndex: 0,
    hint: 'Xúc xắc 6 mặt chỉ mang các số chấm từ 1 đến 6. Tất cả các số này đều nhỏ hơn 7.',
    solution: 'Vì các mặt của con xúc xắc chỉ có số chấm là {1; 2; 3; 4; 5; 6}, tất cả đều nhỏ hơn 7, nên biến cố "Số chấm xuất hiện nhỏ hơn 7" chắc chắn luôn xảy ra trong mọi lần gieo.'
  },
  {
    id: 'ch8_l29_q2',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 2,
    title: 'Khái niệm Biến cố không thể',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Biến cố không thể', '#Cơ bản'],
    question: 'Trong một hộp kín chỉ có 6 viên bi màu xanh và 4 viên bi màu đỏ. Lấy ngẫu nhiên ra 1 viên bi. Biến cố nào sau đây là "Biến cố không thể" (không bao giờ xảy ra)?',
    options: [
      'Lấy ra được một viên bi màu vàng',
      'Lấy ra được một viên bi màu xanh',
      'Lấy ra được một viên bi màu đỏ',
      'Lấy ra được một viên bi màu xanh hoặc màu đỏ'
    ],
    correctIndex: 0,
    hint: 'Trong hộp hoàn toàn không có viên bi màu vàng nào.',
    solution: 'Vì trong hộp chỉ có bi màu xanh và đỏ, không hề có bi màu vàng nên việc lấy được viên bi màu vàng là không thể xảy ra (biến cố không thể).'
  },
  {
    id: 'ch8_l29_q3',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 3,
    title: 'Khái niệm Biến cố ngẫu nhiên',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Biến cố ngẫu nhiên', '#Cơ bản'],
    question: 'Biến cố nào sau đây là "Biến cố ngẫu nhiên" (có thể xảy ra hoặc không xảy ra tùy thuộc vào kết quả phép thử)?',
    options: [
      'Tung một đồng xu cân đối, mặt xuất hiện là mặt Ngửa',
      'Một tuần lễ có đúng 7 ngày',
      'Nhiệt độ sôi của nước nguyên chất ở áp suất chuẩn là $0^\\circ\\text{C}$',
      'Mặt trời mọc ở hướng Tây vào sáng mai'
    ],
    correctIndex: 0,
    hint: 'Biến cố ngẫu nhiên là hiện tượng chưa thể biết trước kết quả trước khi phép thử diễn ra.',
    solution: 'Khi tung đồng xu, ta không thể biết chắc mặt xuất hiện là Sấp hay Ngửa; nó có thể xảy ra hoặc không, do đó là biến cố ngẫu nhiên.'
  },
  {
    id: 'ch8_l29_q4',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 4,
    title: 'Phân loại biến cố trong đời sống tự nhiên',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đời sống', '#Phân loại'],
    question: 'Xét hiện tượng: "Ngày mai tại Hà Nội trời sẽ có mưa rào". Đây là loại biến cố nào?',
    options: [
      'Biến cố ngẫu nhiên',
      'Biến cố chắc chắn',
      'Biến cố không thể',
      'Không phải là biến cố'
    ],
    correctIndex: 0,
    hint: 'Thời tiết ngày mai có thể có mưa hoặc không có mưa.',
    solution: 'Thời tiết ngày mai là hiện tượng tự nhiên biến động ngẫu nhiên theo khí quyển, không ai khẳng định chắc chắn 100% hay khẳng định không thể 0%, nên đây là biến cố ngẫu nhiên.'
  },
  {
    id: 'ch8_l29_q5',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 5,
    title: 'Số kết quả có thể khi tung một đồng xu',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đồng xu', '#Số kết quả'],
    question: 'Tung một đồng xu cân đối một lần. Có bao nhiêu kết quả có thể xảy ra đối với mặt xuất hiện của đồng xu?',
    options: [
      '2 kết quả: Mặt Sấp (S) hoặc Mặt Ngửa (N)',
      '1 kết quả duy nhất',
      '4 kết quả',
      'Vô số kết quả'
    ],
    correctIndex: 0,
    hint: 'Đồng xu có 2 mặt phân biệt: Mặt Sấp và Mặt Ngửa.',
    solution: 'Khi tung một đồng xu, chỉ có 2 kết quả có thể xảy ra: xuất hiện mặt Sấp (S) hoặc xuất hiện mặt Ngửa (N).'
  },
  {
    id: 'ch8_l29_q6',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 6,
    title: 'Số kết quả có thể khi gieo một con xúc xắc',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Xúc xắc', '#Kết quả'],
    question: 'Gieo một con xúc xắc 6 mặt cân đối một lần. Số kết quả có thể xảy ra là:',
    options: [
      '6 kết quả: {1; 2; 3; 4; 5; 6}',
      '12 kết quả',
      '2 kết quả: Chẵn hoặc Lẻ',
      '36 kết quả'
    ],
    correctIndex: 0,
    hint: 'Con xúc xắc có 6 mặt đánh số từ 1 đến 6 chấm.',
    solution: 'Có 6 kết quả có thể xảy ra ứng với số chấm xuất hiện trên mặt trên: {1; 2; 3; 4; 5; 6}.'
  },
  {
    id: 'ch8_l29_q7',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 7,
    title: 'Kiểm tra biến cố xảy ra với kết quả cụ thể',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Kiểm tra kết quả', '#Thông hiểu'],
    question: 'Gieo một con xúc xắc 6 mặt và kết quả mặt trên xuất hiện 4 chấm. Biến cố nào sau đây ĐÃ XẢY RA?',
    options: [
      'Biến cố $A$: "Số chấm xuất hiện là số chia hết cho 2"',
      'Biến cố $B$: "Số chấm xuất hiện là số lẻ"',
      'Biến cố $C$: "Số chấm xuất hiện lớn hơn 5"',
      'Biến cố $D$: "Số chấm xuất hiện là số nguyên tố"'
    ],
    correctIndex: 0,
    hint: 'Kiểm tra số 4 có chia hết cho 2, có phải số lẻ, lớn hơn 5 hay là số nguyên tố không.',
    solution: 'Vì số 4 là số chẵn ($4 \\;\\vdots\\; 2$), nên biến cố $A$: "Số chấm xuất hiện là số chia hết cho 2" đã xảy ra. (Các biến cố $B, C, D$ không xảy ra vì 4 không phải số lẻ, không lớn hơn 5 và không là số nguyên tố).'
  },
  {
    id: 'ch8_l29_q8',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 8,
    title: 'Liệt kê các kết quả thuận lợi cho một biến cố',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Kết quả thuận lợi', '#Tập hợp'],
    question: 'Gieo một con xúc xắc 6 mặt. Tập hợp các kết quả thuận lợi cho biến cố $E$: "Số chấm xuất hiện là số nguyên tố" là:',
    options: [
      '{2; 3; 5} (gồm 3 kết quả)',
      '{1; 2; 3; 5}',
      '{2; 4; 6}',
      '{3; 5}'
    ],
    correctIndex: 0,
    hint: 'Nhớ lại: Số 1 không phải là số nguyên tố! Các số nguyên tố từ 1 đến 6 là 2, 3, 5.',
    solution: 'Trong tập hợp các mặt xúc xắc {1; 2; 3; 4; 5; 6}, các số nguyên tố là 2, 3 và 5. Do đó tập các kết quả thuận lợi là {2; 3; 5}.'
  },
  {
    id: 'ch8_l29_q9',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 9,
    title: 'Số kết quả có thể khi tung hai đồng xu',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hai đồng xu', '#Tổ hợp kết quả'],
    question: 'Tung đồng thời hai đồng xu cân đối. Tập hợp tất cả các kết quả có thể xảy ra đối với mặt xuất hiện của hai đồng xu (kí hiệu S là Sấp, N là Ngửa) là:',
    options: [
      '{(S, S); (S, N); (N, S); (N, N)} (gồm 4 kết quả)',
      '{(S, S); (N, N)} (gồm 2 kết quả)',
      '{S; N} (gồm 2 kết quả)',
      '{(S, N); (N, S)} (gồm 2 kết quả)'
    ],
    correctIndex: 0,
    hint: 'Mỗi đồng xu có 2 khả năng, hai đồng xu độc lập tạo ra $2 \\times 2 = 4$ cặp kết quả.',
    solution: 'Tất cả các kết quả có thể xảy ra khi tung hai đồng xu là 4 cặp:\n1. Đồng xu 1 sấp, đồng xu 2 sấp: (S, S)\n2. Đồng xu 1 sấp, đồng xu 2 ngửa: (S, N)\n3. Đồng xu 1 ngửa, đồng xu 2 sấp: (N, S)\n4. Đồng xu 1 ngửa, đồng xu 2 ngửa: (N, N).'
  },
  {
    id: 'ch8_l29_q10',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 10,
    title: 'Nhận diện biến cố chắc chắn qua bất đẳng thức',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Biến cố chắc chắn', '#Toán học'],
    question: 'Chọn ngẫu nhiên một số tự nhiên có một chữ số từ tập hợp $X = \\{0; 1; 2; 3; 4; 5; 6; 7; 8; 9\\}$. Biến cố nào sau đây là biến cố chắc chắn?',
    options: [
      'Số được chọn là số tự nhiên nhỏ hơn 10',
      'Số được chọn là số lớn hơn 5',
      'Số được chọn là số chẵn',
      'Số được chọn khác 0'
    ],
    correctIndex: 0,
    hint: 'Mọi phần tử trong tập $X$ đều nhỏ hơn 10.',
    solution: 'Tất cả các số từ 0 đến 9 đều là số tự nhiên nhỏ hơn 10, vì vậy biến cố "Số được chọn nhỏ hơn 10" luôn luôn xảy ra (biến cố chắc chắn).'
  },
  {
    id: 'ch8_l29_q11',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 11,
    title: 'Phân tích biến cố trong trò chơi bốc thăm may mắn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Bốc thăm', '#Vận dụng'],
    question: 'Một hộp có 10 lá thăm được đánh số từ 1 đến 10. Bạn An bốc ngẫu nhiên một lá thăm. Biến cố $M$: "Số ghi trên lá thăm bốc được là số chia hết cho 11" là loại biến cố nào?',
    options: [
      'Biến cố không thể, vì trong các số từ 1 đến 10 không có số nào chia hết cho 11',
      'Biến cố ngẫu nhiên, vì có thể bốc trúng số may mắn',
      'Biến cố chắc chắn',
      'Không xác định được'
    ],
    correctIndex: 0,
    hint: 'Số nhỏ nhất chia hết cho 11 là 11 (hoặc 0), nhưng hộp chỉ có từ 1 đến 10.',
    solution: 'Trong tập hợp các số từ 1 đến 10, không có bất kì số nào chia hết cho 11. Do đó việc bốc được số chia hết cho 11 là không thể xảy ra (biến cố không thể).'
  },
  {
    id: 'ch8_l29_q12',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 12,
    title: 'Xác định biến cố trong thí nghiệm gieo hai con xúc xắc',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hai xúc xắc', '#Vận dụng'],
    question: 'Gieo đồng thời hai con xúc xắc 6 mặt và quan sát tổng số chấm xuất hiện ở mặt trên. Biến cố nào sau đây là "Biến cố chắc chắn"?',
    options: [
      'Tổng số chấm xuất hiện lớn hơn hoặc bằng 2 và nhỏ hơn hoặc bằng 12',
      'Tổng số chấm xuất hiện bằng 7',
      'Tổng số chấm xuất hiện là số chẵn',
      'Tổng số chấm xuất hiện lớn hơn 10'
    ],
    correctIndex: 0,
    hint: 'Mỗi xúc xắc nhỏ nhất là 1 (tổng nhỏ nhất $1 + 1 = 2$), lớn nhất là 6 (tổng lớn nhất $6 + 6 = 12$).',
    solution: 'Vì số chấm trên mỗi con xúc xắc nhận giá trị từ 1 đến 6 nên tổng số chấm nhỏ nhất là $1 + 1 = 2$ và lớn nhất là $6 + 6 = 12$.\nDo đó tổng luôn nằm trong đoạn $[2; 12]$, biến cố này chắc chắn luôn xảy ra.'
  },
  {
    id: 'ch8_l29_q13',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 13,
    title: 'Ý nghĩa của việc tung đồng xu trong bóng đá',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Bóng đá', '#Thực tế'],
    question: 'Trước mỗi trận bóng đá, trọng tài thường cho hai đội trưởng chọn mặt đồng xu và tung lên để chọn sân bóng. Cơ sở khoa học của hành động này là gì?',
    options: [
      'Tung đồng xu là phép thử ngẫu nhiên có tính đối xứng và đồng khả năng ($50\\% - 50\\%$), đảm bảo sự công bằng tuyệt đối cho cả hai đội',
      'Để kiểm tra xem đồng xu có làm bằng kim loại thật không',
      'Do luật bóng đá yêu cầu biểu diễn kỹ năng tung đồng xu',
      'Vì đội khách luôn có quyền ưu tiên chọn mặt Sấp'
    ],
    correctIndex: 0,
    hint: 'Đồng xu cân đối cho 2 khả năng Sấp và Ngửa hoàn toàn ngang nhau, không ai can thiệp được.',
    solution: 'Đồng xu cân đối có 2 mặt với khả năng xuất hiện ngang nhau ($50\\% - 50\\%$). Việc tung đồng xu tạo ra một biến cố ngẫu nhiên hoàn toàn khách quan, không chịu sự can thiệp chủ quan của con người, đảm bảo công bằng cho cả hai đội bóng.'
  },
  {
    id: 'ch8_l29_q14',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 14,
    title: 'Đếm số kết quả thuận lợi trong bài toán thẻ số',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đếm kết quả', '#Thẻ số'],
    question: 'Có 20 chiếc thẻ cùng loại được đánh số từ 1 đến 20. Rút ngẫu nhiên một chiếc thẻ. Có bao nhiêu kết quả thuận lợi cho biến cố $K$: "Số ghi trên thẻ là số chính phương"?',
    options: [
      '4 kết quả: {1; 4; 9; 16}',
      '5 kết quả: {1; 4; 9; 16; 25}',
      '3 kết quả: {4; 9; 16}',
      '2 kết quả'
    ],
    correctIndex: 0,
    hint: 'Số chính phương là bình phương của một số tự nhiên ($1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25 > 20$).',
    solution: 'Các số chính phương từ 1 đến 20 là:\n$$1^2 = 1, \\quad 2^2 = 4, \\quad 3^2 = 9, \\quad 4^2 = 16$$\n(Vì $5^2 = 25 > 20$ nên dừng lại). Có đúng 4 kết quả thuận lợi: {1; 4; 9; 16}.'
  },
  {
    id: 'ch8_l29_q15',
    lessonId: 'bai_29_lam_quen_voi_bien_co',
    order: 15,
    title: 'Phân tích trò chơi rút thăm có hoàn lại và không hoàn lại',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Rút thăm', '#Tư duy logic'],
    question: 'Trong túi có 3 viên kẹo cam và 2 viên kẹo dâu. Bạn Nam rút 1 viên kẹo và ăn luôn (không bỏ lại vào túi). Sau đó bạn Bình rút tiếp 1 viên. Biến cố $B$: "Bình rút được kẹo dâu" có bị ảnh hưởng bởi kết quả của Nam không?',
    options: [
      'Có bị ảnh hưởng, vì số kẹo trong túi đã giảm đi và phụ thuộc vào việc Nam đã ăn kẹo gì',
      'Không bị ảnh hưởng, vì Bình rút hoàn toàn độc lập',
      'Biến cố $B$ trở thành biến cố chắc chắn',
      'Biến cố $B$ trở thành biến cố không thể'
    ],
    correctIndex: 0,
    hint: 'Nếu Nam ăn mất 1 viên dâu thì trong túi chỉ còn 1 viên dâu; nếu Nam ăn cam thì trong túi còn nguyên 2 viên dâu.',
    solution: 'Vì Nam rút không hoàn lại (đã ăn viên kẹo), số lượng kẹo trong túi bị thay đổi. Nếu Nam rút trúng kẹo cam thì Bình còn 2 viên dâu trên 4 viên; nếu Nam rút trúng kẹo dâu thì Bình chỉ còn 1 viên dâu trên 4 viên. Kết quả của Bình hoàn toàn bị ảnh hưởng.'
  },

  // ==========================================================================
  // BÀI 30: XÁC SUẤT CỦA BIẾN CỐ (16 CÂU)
  // ==========================================================================

  {
    id: 'ch8_l30_q1',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 1,
    title: 'Thang đo giá trị của xác suất',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Thang đo xác suất', '#Cơ bản'],
    question: 'Xác suất $P(A)$ của một biến cố $A$ bất kì luôn nhận giá trị thỏa mãn điều kiện nào sau đây?',
    options: [
      '$0 \\le P(A) \\le 1$ (hoặc từ $0\\%$ đến $100\\%$)',
      '$-1 \\le P(A) \\le 1$',
      '$P(A) \\ge 1$',
      '$P(A)$ nhận bất kì giá trị số thực nào'
    ],
    correctIndex: 0,
    hint: 'Khả năng xảy ra thấp nhất là 0 (không thể) và cao nhất là 1 (chắc chắn).',
    solution: 'Theo định nghĩa toán học, xác suất của một biến cố luôn là một số thực nằm trong đoạn từ 0 đến 1: $0 \\le P(A) \\le 1$.'
  },
  {
    id: 'ch8_l30_q2',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 2,
    title: 'Xác suất của biến cố chắc chắn và biến cố không thể',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chắc chắn & Không thể', '#Cơ bản'],
    question: 'Xác suất của biến cố chắc chắn và xác suất của biến cố không thể lần lượt bằng:',
    options: [
      '$1$ và $0$',
      '$0$ và $1$',
      '$100$ và $0$',
      '$0,5$ và $0,5$'
    ],
    correctIndex: 0,
    hint: 'Biến cố chắc chắn có cơ hội xảy ra $100\\%$ ($=1$), biến cố không thể có cơ hội $0\\%$ ($=0$).',
    solution: 'Quy ước xác suất:\n- Xác suất của biến cố chắc chắn bằng $1$ (tức $100\\%$).\n- Xác suất của biến cố không thể bằng $0$.'
  },
  {
    id: 'ch8_l30_q3',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 3,
    title: 'Công thức xác suất cổ điển trong mô hình đồng khả năng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Công thức xác suất', '#Cơ bản'],
    question: 'Trong một phép thử có $n$ kết quả có thể xảy ra và đồng khả năng, biến cố $A$ có $m$ kết quả thuận lợi. Xác suất của biến cố $A$ được tính theo công thức:',
    options: [
      '$P(A) = \\frac{m}{n}$',
      '$P(A) = \\frac{n}{m}$',
      '$P(A) = m \\times n$',
      '$P(A) = n - m$'
    ],
    correctIndex: 0,
    hint: 'Xác suất bằng tỉ số giữa số kết quả thuận lợi chia cho tổng số kết quả có thể.',
    solution: 'Công thức tính xác suất cổ điển:\n$$P(A) = \\frac{\\text{Số kết quả thuận lợi cho } A}{\\text{Tổng số kết quả có thể}} = \\frac{m}{n}$$'
  },
  {
    id: 'ch8_l30_q4',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 4,
    title: 'Xác suất xuất hiện mặt Ngửa khi tung một đồng xu',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tung đồng xu', '#Cơ bản'],
    question: 'Tung một đồng xu cân đối một lần. Xác suất để xuất hiện mặt Ngửa là:',
    options: [
      '$\\frac{1}{2}$ (hay $50\\%$)',
      '$\\frac{1}{4}$',
      '$1$',
      '$0$'
    ],
    correctIndex: 0,
    hint: 'Tổng số kết quả là 2 (Sấp, Ngửa); kết quả thuận lợi cho mặt Ngửa là 1.',
    solution: 'Có 2 kết quả có thể xảy ra {S; N} và 1 kết quả thuận lợi (N).\n$$P = \\frac{1}{2} = 50\\%$$'
  },
  {
    id: 'ch8_l30_q5',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 5,
    title: 'Xác suất xuất hiện một mặt cụ thể của con xúc xắc',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Gieo xúc xắc', '#Cơ bản'],
    question: 'Gieo một con xúc xắc 6 mặt cân đối. Xác suất để xuất hiện mặt có đúng 5 chấm là:',
    options: [
      '$\\frac{1}{6}$',
      '$\\frac{5}{6}$',
      '$\\frac{1}{2}$',
      '$\\frac{1}{5}$'
    ],
    correctIndex: 0,
    hint: 'Tổng số mặt là 6; mặt có 5 chấm chỉ có đúng 1 mặt.',
    solution: 'Tổng số kết quả có thể là $n = 6$. Số kết quả thuận lợi là $m = 1$.\n$$P = \\frac{1}{6}$$'
  },
  {
    id: 'ch8_l30_q6',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 6,
    title: 'Xác suất xuất hiện mặt số chẵn khi gieo xúc xắc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Số chẵn', '#Thông hiểu'],
    question: 'Gieo một con xúc xắc 6 mặt cân đối. Xác suất để mặt xuất hiện có số chấm là số chẵn bằng:',
    options: [
      '$\\frac{1}{2}$',
      '$\\frac{1}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{1}{6}$'
    ],
    correctIndex: 0,
    hint: 'Các mặt chẵn là {2; 4; 6} (gồm 3 kết quả thuận lợi trên tổng số 6 kết quả).',
    solution: 'Số kết quả có thể là $n = 6$.\nCác kết quả thuận lợi cho mặt chẵn là {2; 4; 6} nên $m = 3$.\nXác suất là:\n$$P = \\frac{3}{6} = \\frac{1}{2}$$'
  },
  {
    id: 'ch8_l30_q7',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 7,
    title: 'Xác suất xuất hiện số nguyên tố khi gieo xúc xắc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Số nguyên tố', '#Xác suất'],
    question: 'Gieo một con xúc xắc 6 mặt cân đối. Xác suất để số chấm xuất hiện là số nguyên tố bằng:',
    options: [
      '$\\frac{1}{2}$',
      '$\\frac{1}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{5}{6}$'
    ],
    correctIndex: 0,
    hint: 'Các số nguyên tố từ 1 đến 6 là {2; 3; 5} (lưu ý: 1 không phải là số nguyên tố).',
    solution: 'Các mặt có số chấm là số nguyên tố là {2; 3; 5} gồm $m = 3$ kết quả thuận lợi.\nTổng số kết quả là $n = 6$.\nXác suất là:\n$$P = \\frac{3}{6} = \\frac{1}{2}$$'
  },
  {
    id: 'ch8_l30_q8',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 8,
    title: 'Xác suất xuất hiện số chấm lớn hơn 4',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Gieo xúc xắc', '#Tính toán'],
    question: 'Gieo một con xúc xắc 6 mặt cân đối. Xác suất để mặt xuất hiện có số chấm lớn hơn 4 là:',
    options: [
      '$\\frac{1}{3}$',
      '$\\frac{2}{3}$',
      '$\\frac{1}{2}$',
      '$\\frac{1}{6}$'
    ],
    correctIndex: 0,
    hint: 'Các mặt có số chấm lớn hơn 4 là {5; 6} (gồm 2 kết quả).',
    solution: 'Các kết quả thuận lợi là {5; 6} $\\implies m = 2$.\nXác suất là:\n$$P = \\frac{2}{6} = \\frac{1}{3}$$'
  },
  {
    id: 'ch8_l30_q9',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 9,
    title: 'Xác suất lấy bi từ túi hỗn hợp',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Lấy bi', '#Mô hình hộp'],
    question: 'Trong túi kín có 5 viên bi đỏ, 3 viên bi xanh và 2 viên bi vàng có cùng kích thước. Lấy ngẫu nhiên 1 viên bi. Xác suất để lấy được viên bi màu đỏ là:',
    options: [
      '$\\frac{1}{2}$ (hay $50\\%$)',
      '$\\frac{3}{10}$',
      '$\\frac{1}{5}$',
      '$\\frac{2}{5}$'
    ],
    correctIndex: 0,
    hint: 'Tổng số bi trong túi là $5 + 3 + 2 = 10$ viên. Số bi đỏ là 5 viên.',
    solution: 'Tổng số kết quả có thể xảy ra là:\n$$n = 5 + 3 + 2 = 10$$\nSố kết quả thuận lợi để lấy được bi đỏ là $m = 5$.\nXác suất là:\n$$P = \\frac{5}{10} = \\frac{1}{2} = 50\\%$$'
  },
  {
    id: 'ch8_l30_q10',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 10,
    title: 'Xác suất biến cố phủ định (không phải màu này)',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Biến cố đối', '#Thông hiểu'],
    question: 'Trong một hộp có 4 viên bi xanh, 5 viên bi đỏ và 1 viên bi vàng. Rút ngẫu nhiên 1 viên bi. Xác suất để viên bi rút được KHÔNG PHẢI MÀU VÀNG là:',
    options: [
      '$\\frac{9}{10}$ (hay $90\\%$)',
      '$\\frac{1}{10}$',
      '$\\frac{4}{10}$',
      '$\\frac{1}{2}$'
    ],
    correctIndex: 0,
    hint: 'Không phải màu vàng nghĩa là màu xanh hoặc đỏ ($4 + 5 = 9$ viên). Hoặc dùng $1 - P(\\text{vàng})$.',
    solution: 'Tổng số bi là $4 + 5 + 1 = 10$ viên.\nSố viên bi không phải màu vàng là $4 + 5 = 9$ viên.\nXác suất là:\n$$P = \\frac{9}{10} = 90\\%$$'
  },
  {
    id: 'ch8_l30_q11',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 11,
    title: 'Xác suất rút thẻ chia hết cho 3 từ 1 đến 15',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Rút thẻ', '#Chia hết'],
    question: 'Có 15 tấm thẻ được đánh số từ 1 đến 15. Rút ngẫu nhiên một tấm thẻ. Xác suất để rút được tấm thẻ ghi số chia hết cho 3 là:',
    options: [
      '$\\frac{1}{3}$',
      '$\\frac{1}{5}$',
      '$\\frac{2}{5}$',
      '$\\frac{4}{15}$'
    ],
    correctIndex: 0,
    hint: 'Liệt kê các số từ 1 đến 15 chia hết cho 3: {3; 6; 9; 12; 15} -> có 5 số.',
    solution: 'Các số chia hết cho 3 từ 1 đến 15 là:\n$$\\{3; 6; 9; 12; 15\\} \\implies m = 5$$\nTổng số thẻ là $n = 15$.\nXác suất là:\n$$P = \\frac{5}{15} = \\frac{1}{3}$$'
  },
  {
    id: 'ch8_l30_q12',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 12,
    title: 'Xác suất tung hai đồng xu cùng xuất hiện mặt Ngửa',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Hai đồng xu', '#Tổ hợp'],
    question: 'Tung đồng thời hai đồng xu cân đối. Xác suất để cả hai đồng xu đều xuất hiện mặt Ngửa (N, N) bằng:',
    options: [
      '$\\frac{1}{4}$ (hay $25\\%$)',
      '$\\frac{1}{2}$',
      '$\\frac{3}{4}$',
      '$\\frac{1}{8}$'
    ],
    correctIndex: 0,
    hint: 'Tổng số kết quả có thể là 4: {(S, S), (S, N), (N, S), (N, N)}. Kết quả thuận lợi (N, N) là 1.',
    solution: 'Không gian các kết quả có thể là:\n$$\\{(S, S); (S, N); (N, S); (N, N)\\} \\implies n = 4$$\nChỉ có đúng 1 kết quả cả hai mặt đều ngửa là $(N, N) \\implies m = 1$.\nXác suất là:\n$$P = \\frac{1}{4} = 25\\%$$'
  },
  {
    id: 'ch8_l30_q13',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 13,
    title: 'Xác suất có ít nhất một mặt ngửa khi tung hai đồng xu',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Ít nhất một', '#Vận dụng'],
    question: 'Tung đồng thời hai đồng xu cân đối. Xác suất để có ít nhất một đồng xu xuất hiện mặt Ngửa là:',
    options: [
      '$\\frac{3}{4}$ (hay $75\\%$)',
      '$\\frac{1}{2}$',
      '$\\frac{1}{4}$',
      '$1$'
    ],
    correctIndex: 0,
    hint: '"Ít nhất một mặt Ngửa" gồm: (S, N), (N, S), (N, N) (3 kết quả thuận lợi trên tổng số 4).',
    solution: 'Trong 4 kết quả có thể, chỉ có duy nhất trường hợp $(S, S)$ là không có mặt ngửa nào.\nCác kết quả có ít nhất một mặt ngửa là {(S, N); (N, S); (N, N)} $\\implies m = 3$.\nXác suất là:\n$$P = \\frac{3}{4} = 75\\%$$'
  },
  {
    id: 'ch8_l30_q14',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 14,
    title: 'Xác suất thực nghiệm qua số lần thử nghiệm',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Xác suất thực nghiệm', '#Vòng quay'],
    question: 'Bạn Trang quay một vòng quay may mắn có 4 ô màu $120$ lần và ghi nhận kim chỉ vào ô màu đỏ được $36$ lần. Xác suất thực nghiệm của biến cố "Kim dừng lại ở ô màu đỏ" bằng:',
    options: [
      '$\\frac{3}{10}$ (hay $30\\%$)',
      '$\\frac{1}{4}$ (hay $25\\%$)',
      '$\\frac{36}{100}$',
      '$\\frac{1}{3}$'
    ],
    correctIndex: 0,
    hint: 'Xác suất thực nghiệm = $\\frac{\\text{Số lần xuất hiện}}{\\text{Tổng số lần thực hiện phép thử}} = \\frac{36}{120}$.',
    solution: 'Xác suất thực nghiệm được tính bằng tỉ số:\n$$P = \\frac{36}{120} = \\frac{3}{10} = 0,3 = 30\\%$$'
  },
  {
    id: 'ch8_l30_q15',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 15,
    title: 'Đưa ra quyết định đời sống dựa trên xác suất dự báo',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Ra quyết định', '#Thực tế'],
    question: 'Trung tâm Khí tượng Thủy văn phát thông báo: "Xác suất trời mưa chiều nay tại khu vực bạn ở là $85\\%$". Hành động nào sau đây là ứng xử toán học hợp lí nhất?',
    options: [
      'Nên chủ động mang theo áo mưa hoặc ô vì khả năng xảy ra mưa là rất cao ($85\\% > 50\\%$)',
      'Không cần mang áo mưa vì chưa đạt $100\\%$',
      'Chắc chắn trời sẽ không mưa vì đây là con số dự đoán',
      'Ở trong nhà cả ngày không đi đâu'
    ],
    correctIndex: 0,
    hint: 'Xác suất $85\\%$ là rất gần 1, rủi ro gặp mưa là rất lớn.',
    solution: 'Xác suất $85\\%$ là thước đo định lượng cho thấy khả năng mưa là cực kì cao (trung bình cứ 100 ngày có điều kiện tương tự thì có tới 85 ngày mưa). Quyết định hợp lí và an toàn nhất là chủ động chuẩn bị áo mưa.'
  },
  {
    id: 'ch8_l30_q16',
    lessonId: 'bai_30_xac_suat_cua_bien_co',
    order: 16,
    title: 'Cảnh báo toán học về cờ bạc và trò chơi may rủi',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Giáo dục tài chính', '#Tư duy phản biện'],
    question: 'Trong các trò chơi cá cược cờ bạc hoặc vòng quay trúng thưởng tại hội chợ, các nhà cái thiết kế trò chơi dựa trên nguyên lý xác suất nào?',
    options: [
      'Xác suất thắng của người chơi luôn được thiết kế nhỏ hơn xác suất thắng của nhà cái, chơi càng nhiều lần thì người chơi chắc chắn càng mất tiền',
      'Xác suất thắng của người chơi luôn là $50\\% - 50\\%$ công bằng',
      'Người chơi càng kiên trì chơi lâu thì xác suất thắng càng tiến về $100\\%$',
      'Xác suất thắng phụ thuộc vào độ may mắn bẩm sinh của từng người'
    ],
    correctIndex: 0,
    hint: 'Luật số lớn và kì vọng toán học: Nhà cái luôn giữ tỉ lệ lợi thế (house edge) để đảm bảo sinh lời.',
    solution: 'Mọi trò chơi cờ bạc có tổ chức đều được thiết kế sao cho xác suất thắng của người chơi luôn thấp hơn xác suất có lợi cho nhà cái (House Edge). Theo quy luật số lớn trong xác suất, chơi càng nhiều thì người chơi càng tiến gần tới việc thua lỗ toàn bộ vốn.'
  }
];

export default chapter8Exercises;
