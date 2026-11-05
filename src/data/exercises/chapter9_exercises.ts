import { PracticeExercise } from '../../types/curriculum';

export const chapter9Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 31: QUAN HỆ GIỮA GÓC VÀ CẠNH ĐỐI DIỆN TRONG MỘT TAM GIÁC (12 CÂU)
  // ==========================================================================

  {
    id: 'ch9_l31_q1',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 1,
    title: 'Góc đối diện với cạnh lớn hơn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Góc đối diện', '#Cạnh đối diện', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ có $AB = 4\\text{ cm}, AC = 6\\text{ cm}$. Khẳng định nào sau đây là đúng về mối quan hệ giữa hai góc $\\widehat{B}$ và $\\widehat{C}$?',
    options: [
      '$\\widehat{B} > \\widehat{C}$',
      '$\\widehat{B} < \\widehat{C}$',
      '$\\widehat{B} = \\widehat{C}$',
      '$\\widehat{B} + \\widehat{C} = 90^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Góc đối diện với cạnh $AC$ là $\\widehat{B}$; góc đối diện với cạnh $AB$ là $\\widehat{C}$. Áp dụng định lí: Cạnh lớn hơn đối diện góc lớn hơn.',
    solution: 'Trong $\\Delta ABC$, góc đối diện với cạnh $AC$ là $\\widehat{B}$, góc đối diện với cạnh $AB$ là $\\widehat{C}$.\nVì $AC > AB$ ($6\\text{ cm} > 4\\text{ cm}$) nên theo định lí quan hệ giữa góc và cạnh đối diện, ta có $\\widehat{B} > \\widehat{C}$.'
  },
  {
    id: 'ch9_l31_q2',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 2,
    title: 'Cạnh đối diện với góc lớn hơn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cạnh đối diện', '#Định lí đảo', '#Cơ bản'],
    question: 'Cho $\\Delta MNP$ có $\\widehat{M} = 75^\\circ$ và $\\widehat{N} = 45^\\circ$. So sánh độ dài hai cạnh $NP$ và $MP$:',
    options: [
      '$NP > MP$',
      '$NP < MP$',
      '$NP = MP$',
      '$NP = 2MP$'
    ],
    correctIndex: 0,
    hint: 'Cạnh đối diện với góc $\\widehat{M}$ là $NP$; cạnh đối diện với góc $\\widehat{N}$ là $MP$. Góc lớn hơn đối diện cạnh lớn hơn.',
    solution: 'Trong $\\Delta MNP$, cạnh đối diện với $\\widehat{M}$ là $NP$, cạnh đối diện với $\\widehat{N}$ là $MP$.\nVì $\\widehat{M} > \\widehat{N}$ ($75^\\circ > 45^\\circ$) nên theo định lí đảo, ta có $NP > MP$.'
  },
  {
    id: 'ch9_l31_q3',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 3,
    title: 'Cạnh lớn nhất trong tam giác vuông',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác vuông', '#Cạnh huyền', '#Cơ bản'],
    question: 'Trong một tam giác vuông, cạnh nào luôn là cạnh có độ dài lớn nhất?',
    options: [
      'Cạnh huyền (đối diện góc vuông)',
      'Cạnh góc vuông kề góc nhọn lớn hơn',
      'Cạnh góc vuông kề góc nhọn nhỏ hơn',
      'Đường cao ứng với cạnh huyền'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác vuông, góc vuông $90^\\circ$ là góc lớn nhất. Cạnh đối diện góc vuông là cạnh huyền.',
    solution: 'Trong tam giác vuông, góc vuông ($90^\\circ$) là góc lớn nhất (hai góc nhọn còn lại đều $< 90^\\circ$). Do đó, cạnh đối diện góc vuông (cạnh huyền) là cạnh lớn nhất.'
  },
  {
    id: 'ch9_l31_q4',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 4,
    title: 'Cạnh lớn nhất trong tam giác tù',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác tù', '#Góc tù', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ có góc $\\widehat{A}$ là góc tù ($\\widehat{A} > 90^\\circ$). Cạnh lớn nhất của tam giác $ABC$ là:',
    options: [
      'Cạnh $BC$',
      'Cạnh $AB$',
      'Cạnh $AC$',
      'Không xác định được'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác tù, góc tù là góc lớn nhất. Cạnh đối diện góc $\\widehat{A}$ là cạnh $BC$.',
    solution: 'Vì tam giác chỉ có tối đa một góc tù, nên góc tù $\\widehat{A}$ là góc lớn nhất trong $\\Delta ABC$. Cạnh đối diện với góc $\\widehat{A}$ là cạnh $BC$, do đó $BC$ là cạnh lớn nhất.'
  },
  {
    id: 'ch9_l31_q5',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 5,
    title: 'Sắp xếp số đo các góc theo độ dài cạnh',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Sắp xếp góc', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có $AB = 5\\text{ cm}, BC = 7\\text{ cm}, AC = 8\\text{ cm}$. Sắp xếp các góc của tam giác theo thứ tự từ nhỏ đến lớn:',
    options: [
      '$\\widehat{C} < \\widehat{A} < \\widehat{B}$',
      '$\\widehat{A} < \\widehat{B} < \\widehat{C}$',
      '$\\widehat{B} < \\widehat{A} < \\widehat{C}$',
      '$\\widehat{C} < \\widehat{B} < \\widehat{A}$'
    ],
    correctIndex: 0,
    hint: 'So sánh các cạnh: $AB < BC < AC$. Góc đối diện tương ứng lần lượt là $\\widehat{C}, \\widehat{A}, \\widehat{B}$.',
    solution: 'Ta có $AB = 5\\text{ cm} < BC = 7\\text{ cm} < AC = 8\\text{ cm}$.\n- Góc đối diện cạnh $AB$ là $\\widehat{C}$.\n- Góc đối diện cạnh $BC$ là $\\widehat{A}$.\n- Góc đối diện cạnh $AC$ là $\\widehat{B}$.\nSuy ra: $\\widehat{C} < \\widehat{A} < \\widehat{B}$.'
  },
  {
    id: 'ch9_l31_q6',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 6,
    title: 'Sắp xếp độ dài cạnh theo số đo ba góc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Sắp xếp cạnh', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có $\\widehat{A} = 80^\\circ$ và $\\widehat{B} = 40^\\circ$. Sắp xếp độ dài ba cạnh theo thứ tự giảm dần:',
    options: [
      '$BC > AB > AC$',
      '$BC > AC > AB$',
      '$AB > BC > AC$',
      '$AC > BC > AB$'
    ],
    correctIndex: 0,
    hint: 'Bước 1: Tính góc $\\widehat{C} = 180^\\circ - (80^\\circ + 40^\\circ) = 60^\\circ$. Bước 2: So sánh $\\widehat{A} > \\widehat{C} > \\widehat{B}$.',
    solution: 'Trong $\\Delta ABC$: $\\widehat{C} = 180^\\circ - (80^\\circ + 40^\\circ) = 60^\\circ$.\nTa có: $\\widehat{A} = 80^\\circ > \\widehat{C} = 60^\\circ > \\widehat{B} = 40^\\circ$.\nCạnh đối diện lần lượt là: $BC > AB > AC$.'
  },
  {
    id: 'ch9_l31_q7',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 7,
    title: 'So sánh cạnh đáy và cạnh bên tam giác cân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác cân', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ cân tại $A$ có góc ở đỉnh $\\widehat{A} = 50^\\circ$. So sánh độ dài cạnh đáy $BC$ và cạnh bên $AB$:',
    options: [
      '$BC < AB$',
      '$BC > AB$',
      '$BC = AB$',
      'Không so sánh được'
    ],
    correctIndex: 0,
    hint: 'Tính góc đáy $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - 50^\\circ}{2} = 65^\\circ$. So sánh $\\widehat{A}$ và $\\widehat{B}$.',
    solution: 'Trong $\\Delta ABC$ cân tại $A$: $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - 50^\\circ}{2} = 65^\\circ$.\nVì $\\widehat{A} = 50^\\circ < \\widehat{B} = 65^\\circ$ nên cạnh đối diện góc $\\widehat{A}$ nhỏ hơn cạnh đối diện góc $\\widehat{B}$, tức là $BC < AC = AB$.'
  },
  {
    id: 'ch9_l31_q8',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 8,
    title: 'Tam giác có góc đỉnh tù',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác tù', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ cân tại $A$ có góc đỉnh $\\widehat{A} = 110^\\circ$. Khẳng định nào sau đây là đúng?',
    options: [
      '$BC > AB$',
      '$BC < AB$',
      '$BC = AB$',
      '$AB > BC + AC$'
    ],
    correctIndex: 0,
    hint: 'Góc $\\widehat{A} = 110^\\circ$ là góc tù nên là góc lớn nhất trong tam giác. Cạnh $BC$ đối diện góc lớn nhất.',
    solution: 'Vì $\\widehat{A} = 110^\\circ > 90^\\circ$ là góc tù, do đó $\\widehat{A}$ là góc lớn nhất trong $\\Delta ABC$. Cạnh đối diện $BC$ là cạnh lớn nhất, suy ra $BC > AB$.'
  },
  {
    id: 'ch9_l31_q9',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 9,
    title: 'Điểm nằm giữa trên cạnh tam giác',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc ngoài', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có $AB < AC$. Lấy điểm $D$ nằm giữa $B$ và $C$ ($D \\neq B, D \\neq C$). So sánh góc $\\widehat{ADC}$ và $\\widehat{B}$:',
    options: [
      '$\\widehat{ADC} > \\widehat{B}$',
      '$\\widehat{ADC} < \\widehat{B}$',
      '$\\widehat{ADC} = \\widehat{B}$',
      '$\\widehat{ADC} + \\widehat{B} = 90^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Góc $\\widehat{ADC}$ là góc ngoài tại đỉnh $D$ của $\\Delta ABD$. Số đo góc ngoài lớn hơn mỗi góc trong không kề.',
    solution: 'Xét $\\Delta ABD$, góc $\\widehat{ADC}$ là góc ngoài tại đỉnh $D$, do đó $\\widehat{ADC} = \\widehat{B} + \\widehat{BAD} > \\widehat{B}$.'
  },
  {
    id: 'ch9_l31_q10',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 10,
    title: 'So sánh đoạn nối đỉnh với điểm trên cạnh đối diện',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vận dụng', '#So sánh đoạn thẳng'],
    question: 'Cho $\\Delta ABC$ cân tại $A$. Lấy điểm $D$ nằm giữa $B$ và $C$. So sánh độ dài $AD$ và $AB$:',
    options: [
      '$AD < AB$',
      '$AD > AB$',
      '$AD = AB$',
      '$AD \\ge AB$'
    ],
    correctIndex: 0,
    hint: 'Góc $\\widehat{ADC}$ là góc ngoài của $\\Delta ABD$ nên $\\widehat{ADC} > \\widehat{B}$. Mà $\\widehat{B} = \\widehat{C} \\implies \\widehat{ADC} > \\widehat{C}$.',
    solution: 'Ta có $\\widehat{ADC}$ là góc ngoài của $\\Delta ABD \\implies \\widehat{ADC} > \\widehat{B} = \\widehat{C}$.\nTrong $\\Delta ADC$, góc $\\widehat{ADC} > \\widehat{C} \\implies AC > AD$. Vì $AB = AC$ nên $AD < AB$.'
  },
  {
    id: 'ch9_l31_q11',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 11,
    title: 'Tam giác vuông kẻ đường cao',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác vuông', '#Đường cao', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$ có $\\widehat{B} > 45^\\circ$. Kẻ đường cao $AH \\perp BC$ ($H \\in BC$). So sánh độ dài $HB$ và $HC$:',
    options: [
      '$HB < HC$',
      '$HB > HC$',
      '$HB = HC$',
      '$HB = 2HC$'
    ],
    correctIndex: 0,
    hint: 'Vì $\\widehat{B} > 45^\\circ$ nên $\\widehat{C} = 90^\\circ - \\widehat{B} < 45^\\circ \\implies \\widehat{B} > \\widehat{C} \\implies AC > AB$.',
    solution: 'Ta có $\\widehat{B} > 45^\\circ \\implies \\widehat{C} < 45^\\circ \\implies \\widehat{B} > \\widehat{C} \\implies AC > AB$.\nHình chiếu của cạnh lớn hơn thì lớn hơn: $AC > AB \\implies HC > HB$ hay $HB < HC$.'
  },
  {
    id: 'ch9_l31_q12',
    lessonId: 'bai_31_quan_he_giua_goc_va_canh_doi_dien',
    order: 12,
    title: 'Ứng dụng thực tế: Góc sút bóng vào khung thành',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Góc nhìn', '#Vận dụng'],
    question: 'Cầu thủ bóng đá đứng ở vị trí $M$. Khung thành kéo dài từ cột cọc $A$ đến cột cọc $B$. Nếu cầu thủ di chuyển sao cho khoảng cách $MA$ ngắn hơn $MB$ ($MA < MB$), khẳng định nào sau đây là đúng về góc nhìn của cầu thủ?',
    options: [
      'Góc $\\widehat{MAB} > \\widehat{MBA}$, cầu thủ tiến gần cột gôn A hơn',
      'Góc $\\widehat{MAB} < \\widehat{MBA}$',
      'Khoảng cách sút bóng không đổi',
      'Góc sút khung thành $\\widehat{AMB} = 90^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Trong $\\Delta MAB$, cạnh đối diện góc $\\widehat{MAB}$ là $MB$, cạnh đối diện góc $\\widehat{MBA}$ là $MA$. Áp dụng $MB > MA$.',
    solution: 'Trong $\\Delta MAB$, vì $MB > MA$ nên góc đối diện với cạnh $MB$ lớn hơn góc đối diện với cạnh $MA$, tức là $\\widehat{MAB} > \\widehat{MBA}$.'
  },

  // ==========================================================================
  // BÀI 32: QUAN HỆ GIỮA ĐƯỜNG VUÔNG GÓC VÀ ĐƯỜNG XIÊN (12 CÂU)
  // ==========================================================================

  {
    id: 'ch9_l32_q1',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 1,
    title: 'Đường ngắn nhất từ một điểm đến một đường thẳng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đường vuông góc', '#Đường xiên', '#Cơ bản'],
    question: 'Trong các đoạn thẳng nối từ một điểm $A$ nằm ngoài đường thẳng $d$ đến đường thẳng $d$, đoạn thẳng có độ dài ngắn nhất là:',
    options: [
      'Đoạn thẳng vuông góc kẻ từ A đến d',
      'Đoạn thẳng xiên dài nhất',
      'Đoạn thẳng xiên ngắn nhất',
      'Đoạn thẳng nối A với một điểm bất kì'
    ],
    correctIndex: 0,
    hint: 'Định lí: Trong các đường xiên và đường vuông góc kẻ từ một điểm ở ngoài một đường thẳng đến đường thẳng đó, đường vuông góc là đường ngắn nhất.',
    solution: 'Định lí SGK: Đường vuông góc là đoạn ngắn nhất trong tất cả các đoạn thẳng nối từ điểm $A$ đến đường thẳng $d$.'
  },
  {
    id: 'ch9_l32_q2',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 2,
    title: 'Khoảng cách từ điểm đến đường thẳng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Khoảng cách', '#Cơ bản'],
    question: 'Cho điểm $A$ nằm ngoài đường thẳng $d$, $AH \\perp d$ tại $H$. Độ dài đoạn thẳng $AH$ được gọi là:',
    options: [
      'Khoảng cách từ điểm A đến đường thẳng d',
      'Đường xiên từ A đến d',
      'Hình chiếu của điểm H trên d',
      'Trung trực của đường thẳng d'
    ],
    correctIndex: 0,
    hint: 'Độ dài của đoạn thẳng vuông góc kẻ từ một điểm đến một đường thẳng chính là khoảng cách từ điểm đó đến đường thẳng.',
    solution: 'Độ dài đoạn vuông góc $AH$ kẻ từ điểm $A$ đến đường thẳng $d$ được định nghĩa là khoảng cách từ điểm $A$ đến đường thẳng $d$.'
  },
  {
    id: 'ch9_l32_q3',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 3,
    title: 'Hình chiếu của hai đường xiên bằng nhau',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hình chiếu', '#Đường xiên bằng nhau', '#Cơ bản'],
    question: 'Kẻ $AH \\perp d$ ($H \\in d$). Lấy hai điểm $B, C \\in d$. Nếu hai đường xiên $AB = AC$ thì hai hình chiếu $HB$ và $HC$ như thế nào?',
    options: [
      '$HB = HC$',
      '$HB > HC$',
      '$HB < HC$',
      '$HB = 2HC$'
    ],
    correctIndex: 0,
    hint: 'Hai đường xiên bằng nhau thì hai hình chiếu bằng nhau và ngược lại.',
    solution: 'Theo định lí mối quan hệ giữa đường xiên và hình chiếu: Nếu hai đường xiên bằng nhau ($AB = AC$) thì hai hình chiếu tương ứng bằng nhau ($HB = HC$).'
  },
  {
    id: 'ch9_l32_q4',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 4,
    title: 'Đường xiên có hình chiếu lớn hơn',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hình chiếu lớn hơn', '#Cơ bản'],
    question: 'Kẻ $AH \\perp d$ ($H \\in d$). Lấy hai điểm $B, C \\in d$ sao cho $HB > HC$. Khẳng định nào sau đây là đúng?',
    options: [
      '$AB > AC$',
      '$AB < AC$',
      '$AB = AC$',
      '$AB + AC = AH$'
    ],
    correctIndex: 0,
    hint: 'Đường xiên nào có hình chiếu lớn hơn thì lớn hơn.',
    solution: 'Định lí: Đường xiên nào có hình chiếu lớn hơn thì lớn hơn. Vì hình chiếu $HB > HC$ nên đường xiên $AB > AC$.'
  },
  {
    id: 'ch9_l32_q5',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 5,
    title: 'So sánh đường vuông góc và đường xiên cụ thể',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#So sánh độ dài', '#Thông hiểu'],
    question: 'Cho điểm $A$ cách đường thẳng $d$ một khoảng bằng $6\\text{ cm}$. Điểm $B$ nằm trên đường thẳng $d$. Độ dài đoạn thẳng $AB$ **không thể** nhận giá trị nào sau đây?',
    options: [
      '$5\\text{ cm}$',
      '$6\\text{ cm}$',
      '$7\\text{ cm}$',
      '$10\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Khoảng cách từ $A$ đến $d$ là $6\\text{ cm}$ (đường vuông góc ngắn nhất). Mọi đoạn $AB \\ge 6\\text{ cm}$.',
    solution: 'Vì đường vuông góc là đoạn ngắn nhất nên với mọi điểm $B \\in d$, ta luôn có $AB \\ge 6\\text{ cm}$. Do đó độ dài $AB$ không thể bằng $5\\text{ cm}$.'
  },
  {
    id: 'ch9_l32_q6',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 6,
    title: 'So sánh ba đường xiên từ một điểm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình chiếu', '#Thông hiểu'],
    question: 'Cho $AH \\perp d$ tại $H$. Trên đường thẳng $d$ lấy ba điểm $B, C, D$ sao cho $H, B, C, D$ thẳng hàng theo thứ tự đó. So sánh độ dài ba đoạn thẳng $AB, AC, AD$:',
    options: [
      '$AB < AC < AD$',
      '$AD < AC < AB$',
      '$AC < AB < AD$',
      '$AB = AC = AD$'
    ],
    correctIndex: 0,
    hint: 'So sánh các hình chiếu: $HB < HC < HD$. Suy ra quan hệ giữa các đường xiên.',
    solution: 'Vì $H, B, C, D$ theo thứ tự nên hình chiếu thỏa mãn: $HB < HC < HD$.\nTheo định lí quan hệ giữa đường xiên và hình chiếu, ta có $AB < AC < AD$.'
  },
  {
    id: 'ch9_l32_q7',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 7,
    title: 'Đoạn thẳng từ đỉnh tam giác vuông đến cạnh huyền',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác vuông', '#Đường xiên', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$. Lấy điểm $M$ bất kì trên cạnh huyền $BC$ ($M$ không trùng với $B$ và $C$). Khẳng định nào sau đây luôn đúng?',
    options: [
      '$AM < BC$',
      '$AM > BC$',
      '$AM = BC$',
      '$AM = AB + AC$'
    ],
    correctIndex: 0,
    hint: 'Góc $\\widehat{B}$ và $\\widehat{C}$ là các góc nhọn. Đoạn thẳng kẻ từ đỉnh góc vuông đến cạnh huyền luôn nhỏ hơn cạnh huyền.',
    solution: 'Trong $\\Delta ABC$ vuông tại $A$, cạnh huyền $BC$ là cạnh lớn nhất. Mọi đoạn $AM$ nối từ $A$ đến điểm trên cạnh huyền đều thỏa mãn $AM < BC$.'
  },
  {
    id: 'ch9_l32_q8',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 8,
    title: 'Tam giác nhọn có đường cao',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đường cao', '#Đường xiên', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ nhọn có đường cao $AH$. Khẳng định nào sau đây là đúng?',
    options: [
      '$AH < AB$ và $AH < AC$',
      '$AH > AB$',
      '$AH > AC$',
      '$AH = \\frac{AB + AC}{2}$'
    ],
    correctIndex: 0,
    hint: '$AH$ là đường vuông góc kẻ từ $A$ đến $BC$, còn $AB$ và $AC$ là các đường xiên.',
    solution: 'Vì $AH \\perp BC$ nên $AH$ là đường vuông góc, còn $AB$ và $AC$ là hai đường xiên kẻ từ $A$ đến đường thẳng chứa cạnh $BC$. Do đó $AH < AB$ và $AH < AC$.'
  },
  {
    id: 'ch9_l32_q9',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 9,
    title: 'Hai điểm đối xứng qua đường vuông góc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình chiếu', '#Trung điểm', '#Thông hiểu'],
    question: 'Cho $AH \\perp d$ tại $H$. Lấy $B, C \\in d$ sao cho $H$ là trung điểm của $BC$. Khi đó $\\Delta ABC$ là tam giác gì?',
    options: [
      'Tam giác cân tại $A$',
      'Tam giác vuông tại $A$',
      'Tam giác đều',
      'Tam giác tù tại $A$'
    ],
    correctIndex: 0,
    hint: 'Vì $H$ là trung điểm của $BC$ nên hai hình chiếu $HB = HC$. Suy ra hai đường xiên $AB = AC$.',
    solution: 'Ta có $HB = HC$ (do $H$ là trung điểm của $BC$). Theo định lí, hai hình chiếu bằng nhau thì hai đường xiên bằng nhau: $AB = AC$. Do đó $\\Delta ABC$ cân tại $A$.'
  },
  {
    id: 'ch9_l32_q10',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 10,
    title: 'So sánh đoạn nối từ điểm trên đường cao',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đường cao', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ có $AB < AC$. Kẻ đường cao $AH \\perp BC$. Lấy điểm $M$ bất kì nằm trên đoạn $AH$ ($M \\neq A, M \\neq H$). So sánh $MB$ và $MC$:',
    options: [
      '$MB < MC$',
      '$MB > MC$',
      '$MB = MC$',
      'Không so sánh được'
    ],
    correctIndex: 0,
    hint: 'Từ $AB < AC \\implies HB < HC$ (đường xiên nhỏ hơn thì hình chiếu nhỏ hơn). Điểm $M$ cũng có các hình chiếu là $HB$ và $HC$.',
    solution: 'Từ $AB < AC \\implies HB < HC$ (hình chiếu của $AB$ nhỏ hơn hình chiếu của $AC$).\nVới điểm $M \\in AH$, hình chiếu của hai đường xiên $MB$ và $MC$ trên $BC$ vẫn là $HB$ và $HC$.\nVì $HB < HC$ nên $MB < MC$.'
  },
  {
    id: 'ch9_l32_q11',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 11,
    title: 'Đoạn vuông góc kẻ đến hai cạnh tam giác cân',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác cân', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ cân tại $A$. Lấy điểm $D$ trên cạnh đáy $BC$ gần $B$ hơn $C$ ($DB < DC$). Kẻ $DH \\perp AB$ và $DK \\perp AC$. So sánh $DH$ và $DK$:',
    options: [
      '$DH < DK$',
      '$DH > DK$',
      '$DH = DK$',
      '$DH = 2DK$'
    ],
    correctIndex: 0,
    hint: 'Sử dụng công thức diện tích hoặc tính chất khoảng cách: điểm $D$ nằm lệch về phía $B$ thì khoảng cách từ $D$ đến $AB$ nhỏ hơn đến $AC$.',
    solution: 'Vẽ điểm đối xứng hoặc so sánh góc: Điểm $D$ nằm gần $B$ hơn thì góc tạo bởi $AD$ với $AB$ lớn hơn, do đó khoảng cách $DH < DK$.'
  },
  {
    id: 'ch9_l32_q12',
    lessonId: 'bai_32_quan_he_giua_duong_vuong_goc_va_duong_xien',
    order: 12,
    title: 'Ứng dụng thực tế: Đường bơi ngắn nhất vào bờ',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Bơi vào bờ', '#Vận dụng'],
    question: 'Một người đang ở vị trí $A$ dưới nước cách bờ sông thẳng $d$ một đoạn. Để bơi vào bờ với quãng đường ngắn nhất và tốn ít sức nhất, người đó nên bơi theo hướng nào?',
    options: [
      'Bơi theo đường vuông góc từ A đến bờ sông d',
      'Bơi chếch một góc $45^\\circ$ xuôi dòng',
      'Bơi chếch một góc $60^\\circ$ ngược dòng',
      'Bơi theo hướng song song với bờ'
    ],
    correctIndex: 0,
    hint: 'Đường vuông góc là đoạn thẳng ngắn nhất từ một điểm đến một đường thẳng.',
    solution: 'Theo định lí hình học, đoạn thẳng vuông góc kẻ từ vị trí $A$ đến bờ sông thẳng $d$ có độ dài ngắn nhất trong tất cả các quỹ đạo bơi. Do đó bơi theo phương vuông góc sẽ tối ưu nhất.'
  },

  // ==========================================================================
  // BÀI 33: QUAN HỆ GIỮA BA CẠNH CỦA TAM GIÁC - BẤT ĐẲNG THỨC TAM GIÁC (15 CÂU)
  // ==========================================================================

  {
    id: 'ch9_l33_q1',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 1,
    title: 'Phát biểu bất đẳng thức tam giác',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Bất đẳng thức tam giác', '#Định lí', '#Cơ bản'],
    question: 'Trong một tam giác bất kì với ba cạnh $a, b, c$, khẳng định nào sau đây luôn đúng?',
    options: [
      '$a < b + c$',
      '$a > b + c$',
      '$a = b + c$',
      '$a^2 = b^2 + c^2$'
    ],
    correctIndex: 0,
    hint: 'Bất đẳng thức tam giác: Trong một tam giác, độ dài một cạnh luôn nhỏ hơn tổng độ dài hai cạnh kia.',
    solution: 'Định lí SGK: Trong một tam giác, độ dài một cạnh luôn nhỏ hơn tổng độ dài hai cạnh kia: $a < b + c$.'
  },
  {
    id: 'ch9_l33_q2',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 2,
    title: 'Hệ quả bất đẳng thức tam giác',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hệ quả', '#Hiệu hai cạnh', '#Cơ bản'],
    question: 'Trong $\\Delta ABC$, độ dài cạnh $BC$ luôn thỏa mãn điều kiện nào sau đây?',
    options: [
      '$|AB - AC| < BC < AB + AC$',
      '$BC > AB + AC$',
      '$BC = AB - AC$',
      '$BC < |AB - AC|$'
    ],
    correctIndex: 0,
    hint: 'Độ dài một cạnh luôn lớn hơn hiệu và nhỏ hơn tổng độ dài hai cạnh kia.',
    solution: 'Hệ quả bất đẳng thức tam giác: $|AB - AC| < BC < AB + AC$.'
  },
  {
    id: 'ch9_l33_q3',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 3,
    title: 'Kiểm tra bộ ba độ dài cạnh (Bộ 1)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Kiểm tra độ dài', '#Cơ bản'],
    question: 'Bộ ba độ dài nào sau đây **có thể** là độ dài ba cạnh của một tam giác?',
    options: [
      '$3\\text{ cm}, 4\\text{ cm}, 5\\text{ cm}$',
      '$2\\text{ cm}, 3\\text{ cm}, 6\\text{ cm}$',
      '$1\\text{ cm}, 2\\text{ cm}, 3\\text{ cm}$',
      '$4\\text{ cm}, 5\\text{ cm}, 10\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Kiểm tra: Cạnh lớn nhất phải nhỏ hơn tổng hai cạnh còn lại. $5 < 3 + 4 = 7$ (Thỏa mãn).',
    solution: '- $3, 4, 5$: Ta có $5 < 3 + 4 = 7$ (Thỏa mãn).\n- $2, 3, 6$: $6 > 2 + 3 = 5$ (Loại).\n- $1, 2, 3$: $3 = 1 + 2$ (Loại).\n- $4, 5, 10$: $10 > 4 + 5 = 9$ (Loại).'
  },
  {
    id: 'ch9_l33_q4',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 4,
    title: 'Kiểm tra bộ ba độ dài cạnh (Bộ 2)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Kiểm tra độ dài', '#Cơ bản'],
    question: 'Bộ ba đoạn thẳng nào sau đây **không thể** ghép thành một tam giác?',
    options: [
      '$3\\text{ cm}, 5\\text{ cm}, 8\\text{ cm}$',
      '$4\\text{ cm}, 6\\text{ cm}, 8\\text{ cm}$',
      '$5\\text{ cm}, 5\\text{ cm}, 8\\text{ cm}$',
      '$6\\text{ cm}, 7\\text{ cm}, 8\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Nếu tổng hai cạnh nhỏ hơn bằng đúng cạnh lớn nhất ($3 + 5 = 8$) thì ba điểm thẳng hàng, không tạo thành tam giác.',
    solution: 'Ta có $3 + 5 = 8$. Vì tổng hai cạnh bằng cạnh thứ ba nên ba điểm thẳng hàng, không thể tạo thành tam giác.'
  },
  {
    id: 'ch9_l33_q5',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 5,
    title: 'Khoảng giá trị của cạnh thứ ba',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Khoảng giá trị', '#Cơ bản'],
    question: 'Một tam giác có độ dài hai cạnh là $2\\text{ cm}$ và $7\\text{ cm}$. Độ dài cạnh thứ ba $x$ phải thỏa mãn:',
    options: [
      '$5\\text{ cm} < x < 9\\text{ cm}$',
      '$2\\text{ cm} < x < 7\\text{ cm}$',
      '$x > 9\\text{ cm}$',
      '$x < 5\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng: $7 - 2 < x < 7 + 2$.',
    solution: 'Theo bất đẳng thức tam giác: $7 - 2 < x < 7 + 2 \\implies 5\\text{ cm} < x < 9\\text{ cm}$.'
  },
  {
    id: 'ch9_l33_q6',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 6,
    title: 'Tìm độ dài cạnh là số nguyên',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Số nguyên', '#Thông hiểu'],
    question: 'Tam giác $ABC$ có $AB = 1\\text{ cm}, AC = 4\\text{ cm}$. Biết độ dài cạnh $BC$ là một số nguyên (đơn vị cm). Độ dài cạnh $BC$ là:',
    options: [
      '$4\\text{ cm}$',
      '$3\\text{ cm}$',
      '$5\\text{ cm}$',
      '$2\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: '$4 - 1 < BC < 4 + 1 \\implies 3 < BC < 5$. Số nguyên duy nhất thỏa mãn là gì?',
    solution: 'Ta có: $4 - 1 < BC < 4 + 1 \\implies 3 < BC < 5$.\nVì $BC$ là số nguyên nên $BC = 4\\text{ cm}$.'
  },
  {
    id: 'ch9_l33_q7',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 7,
    title: 'Tam giác cân biết độ dài hai cạnh',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác cân', '#Thông hiểu'],
    question: 'Một tam giác cân có độ dài hai cạnh là $3\\text{ cm}$ và $7\\text{ cm}$. Chu vi của tam giác đó là:',
    options: [
      '$17\\text{ cm}$',
      '$13\\text{ cm}$',
      '$15\\text{ cm}$',
      '$20\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Cạnh thứ ba có thể là $3\\text{ cm}$ hoặc $7\\text{ cm}$. Kiểm tra bất đẳng thức tam giác: Bộ $(3, 3, 7)$ có tạo thành tam giác được không?',
    solution: '- Nếu cạnh thứ ba là $3\\text{ cm}$: Bộ $(3, 3, 7)$ có $3 + 3 = 6 < 7$ (Loại do vi phạm bất đẳng thức tam giác).\n- Do đó cạnh thứ ba bắt buộc là $7\\text{ cm}$: Bộ $(3, 7, 7)$ thỏa mãn $3 + 7 > 7$.\nChu vi tam giác là: $P = 3 + 7 + 7 = 17\\text{ cm}$.'
  },
  {
    id: 'ch9_l33_q8',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 8,
    title: 'Chọn thanh gỗ ghép khung tam giác',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Thực tế', '#Ghép que', '#Thông hiểu'],
    question: 'Em có 4 que gỗ với độ dài: $2\\text{ cm}, 3\\text{ cm}, 5\\text{ cm}, 6\\text{ cm}$. Có bao nhiêu cách chọn ra 3 que để ghép thành một tam giác?',
    options: [
      '2 cách',
      '1 cách',
      '3 cách',
      '4 cách'
    ],
    correctIndex: 0,
    hint: 'Liệt kê các bộ 3 que: $(2, 3, 5)$, $(2, 3, 6)$, $(2, 5, 6)$, $(3, 5, 6)$ và kiểm tra từng bộ.',
    solution: '- Bộ $(2, 3, 5)$: $2 + 3 = 5$ (Không tạo được tam giác)\n- Bộ $(2, 3, 6)$: $2 + 3 = 5 < 6$ (Không tạo được)\n- Bộ $(2, 5, 6)$: $2 + 5 = 7 > 6$ (Tạo được tam giác)\n- Bộ $(3, 5, 6)$: $3 + 5 = 8 > 6$ (Tạo được tam giác)\nVậy có 2 cách chọn.'
  },
  {
    id: 'ch9_l33_q9',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 9,
    title: 'So sánh tổng khoảng cách với nửa chu vi',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Điểm trong tam giác', '#Thông hiểu'],
    question: 'Lấy điểm $M$ bất kì nằm trong $\\Delta ABC$. So sánh tổng khoảng cách $MA + MB$ với tổng hai cạnh $AC + BC$:',
    options: [
      '$MA + MB < AC + BC$',
      '$MA + MB > AC + BC$',
      '$MA + MB = AC + BC$',
      '$MA + MB = \\frac{AC + BC}{2}$'
    ],
    correctIndex: 0,
    hint: 'Kéo dài $AM$ cắt $BC$ tại $D$. Sử dụng bất đẳng thức tam giác trong $\\Delta ABD$ và $\\Delta MCD$.',
    solution: 'Kéo dài $AM$ cắt $BC$ tại $D$. Ta có $MB < MD + DB$.\n$\\implies MA + MB < MA + MD + DB = AD + DB$.\nLại có $AD < AC + CD \\implies AD + DB < AC + CD + DB = AC + BC$.\nVậy $MA + MB < AC + BC$.'
  },
  {
    id: 'ch9_l33_q10',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 10,
    title: 'Độ dài cạnh thứ ba của tam giác cân',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác cân', '#Thông hiểu'],
    question: 'Tam giác cân có một cạnh bằng $8\\text{ cm}$ và một cạnh bằng $3\\text{ cm}$. Cạnh đáy của tam giác đó dài bao nhiêu cm?',
    options: [
      '$3\\text{ cm}$',
      '$8\\text{ cm}$',
      '$5\\text{ cm}$',
      '$11\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Nếu cạnh đáy là $8\\text{ cm}$ thì hai cạnh bên là $3\\text{ cm}, 3\\text{ cm}$, khi đó $3 + 3 < 8$ (vi phạm). Vậy cạnh đáy bắt buộc là bao nhiêu?',
    solution: 'Nếu cạnh bên là $3\\text{ cm}$ thì $3 + 3 = 6 < 8$ (vô lí). Do đó hai cạnh bên phải là $8\\text{ cm}$ và cạnh đáy là $3\\text{ cm}$.'
  },
  {
    id: 'ch9_l33_q11',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 11,
    title: 'Bất đẳng thức chu vi tam giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Chu vi', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ có chu vi bằng $18\\text{ cm}$. Khẳng định nào sau đây là đúng về độ dài cạnh lớn nhất $a$?',
    options: [
      '$a < 9\\text{ cm}$',
      '$a \\ge 9\\text{ cm}$',
      '$a = 9\\text{ cm}$',
      '$a > 10\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Theo bất đẳng thức tam giác: $a < b + c$. Cộng thêm $a$ vào cả hai vế: $2a < a + b + c = 18$.',
    solution: 'Ta có $a < b + c \\implies a + a < a + b + c \\implies 2a < 18 \\implies a < 9\\text{ cm}$.\nVậy độ dài cạnh lớn nhất luôn nhỏ hơn nửa chu vi.'
  },
  {
    id: 'ch9_l33_q12',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 12,
    title: 'Điểm trong tam giác và chu vi',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Nửa chu vi', '#Vận dụng'],
    question: 'Cho điểm $O$ nằm trong $\\Delta ABC$ có chu vi $P$. Tổng khoảng cách $(OA + OB + OC)$ luôn thỏa mãn:',
    options: [
      '$\\frac{P}{2} < OA + OB + OC < P$',
      '$OA + OB + OC > P$',
      '$OA + OB + OC < \\frac{P}{2}$',
      '$OA + OB + OC = P$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng $OA + OB > AB, OB + OC > BC, OC + OA > CA$ để tìm chặn dưới. Dùng tính chất điểm trong để tìm chặn trên.',
    solution: 'Cộng từng vế: $2(OA + OB + OC) > AB + BC + CA = P \\implies OA + OB + OC > \\frac{P}{2}$.\nMặt khác $OA + OB < AC + BC$, tương tự cộng lại ta được $OA + OB + OC < P$.'
  },
  {
    id: 'ch9_l33_q13',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 13,
    title: 'Trung tuyến nhỏ hơn nửa tổng hai cạnh',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Trung tuyến', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$, gọi $AM$ là đường trung tuyến ứng với cạnh $BC$. Khẳng định nào sau đây là đúng?',
    options: [
      '$AM < \\frac{AB + AC}{2}$',
      '$AM > \\frac{AB + AC}{2}$',
      '$AM = \\frac{AB + AC}{2}$',
      '$AM = AB + AC$'
    ],
    correctIndex: 0,
    hint: 'Trên tia đối của tia $MA$ lấy điểm $D$ sao cho $MD = MA$. Chứng minh $\\Delta MAB = \\Delta MDC \\implies CD = AB$. Áp dụng bất đẳng thức vào $\\Delta ACD$.',
    solution: 'Lấy điểm $D$ sao cho $M$ là trung điểm $AD$. Ta có $\\Delta MAB = \\Delta MDC$ (c.g.c) $\\implies CD = AB$.\nTrong $\\Delta ACD$: $AD < AC + CD \\implies 2AM < AC + AB \\implies AM < \\frac{AB + AC}{2}$.'
  },
  {
    id: 'ch9_l33_q14',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 14,
    title: 'Tìm số tam giác có chu vi và cạnh nguyên',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Toán rời rạc', '#Vận dụng'],
    question: 'Có bao nhiêu tam giác không bằng nhau có chu vi bằng $10\\text{ cm}$ và độ dài các cạnh đều là các số nguyên (đơn vị cm)?',
    options: [
      '2 tam giác',
      '1 tam giác',
      '3 tam giác',
      '4 tam giác'
    ],
    correctIndex: 0,
    hint: 'Gọi 3 cạnh là $a \\le b \\le c$. Ta có $a + b + c = 10$ và $c < 5$. Liệt kê các bộ số.',
    solution: 'Vì $c < \\frac{10}{2} = 5$ nên $c$ chỉ có thể là 4 hoặc 3.\n- Nếu $c = 4$: $a + b = 6$ với $a \\le b \\le 4$. Các bộ thỏa mãn: $(2, 4, 4)$ và $(3, 3, 4)$.\n- Nếu $c = 3$: $a + b = 7$ mà $a \\le b \\le 3 \\implies a + b \\le 6$ (Vô lí).\nVậy có đúng 2 tam giác thỏa mãn: $(2, 4, 4)$ và $(3, 3, 4)$.'
  },
  {
    id: 'ch9_l33_q15',
    lessonId: 'bai_33_quan_he_giua_ba_canh_cua_tam_giac',
    order: 15,
    title: 'Ứng dụng thực tế: Đường đi thẳng ngắn hơn đi vòng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Đường chim bay', '#Vận dụng'],
    question: 'Thành phố A, B, C không thẳng hàng. Quãng đường thẳng từ A đến B là $40\\text{ km}$, từ B đến C là $30\\text{ km}$. Quãng đường bay thẳng từ A đến C có thể bằng $75\\text{ km}$ được không, vì sao?',
    options: [
      'Không thể, vì đường bay thẳng $AC < AB + BC = 70\\text{ km}$ theo bất đẳng thức tam giác',
      'Có thể, vì bay trên trời nhanh hơn đi đường bộ',
      'Có thể, nếu góc $\\widehat{B}$ là góc tù',
      'Không thể, vì AC bắt buộc phải bằng $50\\text{ km}$'
    ],
    correctIndex: 0,
    hint: 'Theo bất đẳng thức tam giác, cạnh $AC < AB + BC$.',
    solution: 'Ba điểm A, B, C tạo thành một tam giác, do đó $AC < AB + BC = 40 + 30 = 70\\text{ km}$. Vì vậy quãng đường thẳng $AC$ không thể bằng $75\\text{ km}$.'
  },

  // ==========================================================================
  // BÀI 34: SỰ ĐỒNG QUY CỦA BA ĐƯỜNG TRUNG TUYẾN, BA ĐƯỜNG PHÂN GIÁC (15 CÂU)
  // ==========================================================================

  {
    id: 'ch9_l34_q1',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 1,
    title: 'Điểm đồng quy của ba đường trung tuyến',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trọng tâm', '#Trung tuyến', '#Cơ bản'],
    question: 'Ba đường trung tuyến của một tam giác cùng đi qua một điểm. Điểm đó được gọi là:',
    options: [
      'Trọng tâm của tam giác',
      'Trực tâm của tam giác',
      'Tâm đường tròn ngoại tiếp',
      'Tâm đường tròn nội tiếp'
    ],
    correctIndex: 0,
    hint: 'Điểm giao nhau của 3 đường trung tuyến gọi là Trọng tâm (kí hiệu là G).',
    solution: 'Định nghĩa SGK: Điểm đồng quy của ba đường trung tuyến trong một tam giác được gọi là trọng tâm của tam giác.'
  },
  {
    id: 'ch9_l34_q2',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 2,
    title: 'Tỉ lệ khoảng cách trọng tâm đến đỉnh',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trọng tâm', '#Tỉ lệ 2/3', '#Cơ bản'],
    question: 'Cho $G$ là trọng tâm của $\\Delta ABC$ với đường trung tuyến $AM$. Khẳng định nào sau đây là đúng?',
    options: [
      '$AG = \\frac{2}{3}AM$',
      '$AG = \\frac{1}{2}AM$',
      '$AG = \\frac{1}{3}AM$',
      '$AG = AM$'
    ],
    correctIndex: 0,
    hint: 'Trọng tâm cách mỗi đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó.',
    solution: 'Định lí tính chất ba đường trung tuyến: $AG = \\frac{2}{3}AM$, $GM = \\frac{1}{3}AM$, $AG = 2GM$.'
  },
  {
    id: 'ch9_l34_q3',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 3,
    title: 'Tính khoảng cách từ trọng tâm đến trung điểm',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trọng tâm', '#Tính độ dài', '#Cơ bản'],
    question: 'Cho $\\Delta ABC$ có đường trung tuyến $AM = 9\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác. Độ dài đoạn thẳng $GM$ là:',
    options: [
      '$GM = 3\\text{ cm}$',
      '$GM = 6\\text{ cm}$',
      '$GM = 4{,}5\\text{ cm}$',
      '$GM = 2\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: '$GM = \\frac{1}{3}AM$.',
    solution: 'Ta có $GM = \\frac{1}{3}AM = \\frac{1}{3} \\times 9 = 3\\text{ cm}$ (và $AG = 6\\text{ cm}$).'
  },
  {
    id: 'ch9_l34_q4',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 4,
    title: 'Điểm đồng quy của ba đường phân giác',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Phân giác', '#Tâm nội tiếp', '#Cơ bản'],
    question: 'Ba đường phân giác của một tam giác đồng quy tại một điểm. Điểm này có tính chất đặc biệt nào?',
    options: [
      'Cách đều ba cạnh của tam giác',
      'Cách đều ba đỉnh của tam giác',
      'Cách mỗi đỉnh một khoảng bằng $\\frac{2}{3}$ đường phân giác',
      'Trùng với trọng tâm tam giác'
    ],
    correctIndex: 0,
    hint: 'Điểm đồng quy của 3 đường phân giác là tâm đường tròn nội tiếp, cách đều ba cạnh của tam giác.',
    solution: 'Định lí: Ba đường phân giác của một tam giác cùng đi qua một điểm. Điểm này cách đều ba cạnh của tam giác.'
  },
  {
    id: 'ch9_l34_q5',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 5,
    title: 'Tính chất phân giác trong tam giác cân',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác cân', '#Đường phân giác', '#Cơ bản'],
    question: 'Trong một tam giác cân, đường phân giác xuất phát từ đỉnh đối diện với cạnh đáy đồng thời là:',
    options: [
      'Đường trung tuyến, đường cao và đường trung trực ứng với cạnh đáy',
      'Chỉ là đường cao, không phải đường trung tuyến',
      'Chỉ là đường trung trực, không đi qua đỉnh',
      'Đường thẳng song song với cạnh đáy'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác cân, 4 đường xuất phát từ đỉnh (phân giác, trung tuyến, đường cao, trung trực) trùng nhau.',
    solution: 'Định lí: Trong tam giác cân, đường phân giác của góc ở đỉnh đồng thời là đường trung tuyến, đường cao và đường trung trực ứng với cạnh đáy.'
  },
  {
    id: 'ch9_l34_q6',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 6,
    title: 'Tính độ dài trung tuyến khi biết AG',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Trọng tâm', '#Thông hiểu'],
    question: 'Cho $G$ là trọng tâm của tam giác $ABC$, $AM$ là trung tuyến. Biết $AG = 8\\text{ cm}$. Độ dài trung tuyến $AM$ là:',
    options: [
      '$AM = 12\\text{ cm}$',
      '$AM = 10\\text{ cm}$',
      '$AM = 16\\text{ cm}$',
      '$AM = 24\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: '$AG = \\frac{2}{3}AM \\implies AM = \\frac{3}{2}AG$.',
    solution: 'Ta có $AM = \\frac{3}{2}AG = \\frac{3}{2} \\times 8 = 12\\text{ cm}$.'
  },
  {
    id: 'ch9_l34_q7',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 7,
    title: 'Góc tạo bởi hai đường phân giác',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phân giác', '#Góc tạo bởi', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ có hai đường phân giác của góc $\\widehat{B}$ và $\\widehat{C}$ cắt nhau tại $I$. Biết $\\widehat{A} = 70^\\circ$. Số đo góc $\\widehat{BIC}$ là:',
    options: [
      '$\\widehat{BIC} = 125^\\circ$',
      '$\\widehat{BIC} = 110^\\circ$',
      '$\\widehat{BIC} = 135^\\circ$',
      '$\\widehat{BIC} = 140^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Công thức tính góc giữa hai phân giác trong: $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2}$.',
    solution: 'Ta có $\\widehat{B} + \\widehat{C} = 180^\\circ - 70^\\circ = 110^\\circ$.\nVì $BI, CI$ là các tia phân giác nên: $\\widehat{IBC} + \\widehat{ICB} = \\frac{\\widehat{B} + \\widehat{C}}{2} = 55^\\circ$.\nTrong $\\Delta IBC$: $\\widehat{BIC} = 180^\\circ - 55^\\circ = 125^\\circ$ (hoặc dùng công thức $90^\\circ + \\frac{70^\\circ}{2} = 125^\\circ$).'
  },
  {
    id: 'ch9_l34_q8',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 8,
    title: 'Hai đường trung tuyến bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Trung tuyến bằng nhau', '#Tam giác cân', '#Thông hiểu'],
    question: 'Tam giác có hai đường trung tuyến bằng nhau là:',
    options: [
      'Tam giác cân',
      'Tam giác vuông',
      'Tam giác vuông cân',
      'Mọi tam giác bất kì'
    ],
    correctIndex: 0,
    hint: 'Nếu hai trung tuyến $BM = CN$ thì $GB = GC \\implies \\Delta GBC$ cân $\\implies \\Delta ABC$ cân.',
    solution: 'Định lí: Tam giác có hai đường trung tuyến bằng nhau thì tam giác đó là tam giác cân.'
  },
  {
    id: 'ch9_l34_q9',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 9,
    title: 'Khoảng cách từ tâm nội tiếp đến ba cạnh',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tâm nội tiếp', '#Khoảng cách', '#Thông hiểu'],
    question: 'Gọi $I$ là giao điểm của ba đường phân giác trong $\\Delta ABC$. Kẻ $ID \\perp BC, IE \\perp AC, IF \\perp AB$. Khẳng định nào sau đây là đúng?',
    options: [
      '$ID = IE = IF$',
      '$ID + IE = IF$',
      '$IA = IB = IC$',
      '$ID = \\frac{1}{2}BC$'
    ],
    correctIndex: 0,
    hint: 'Giao điểm của ba đường phân giác cách đều ba cạnh của tam giác.',
    solution: 'Theo định lí về sự đồng quy của ba đường phân giác, điểm $I$ cách đều ba cạnh $BC, AC, AB$. Do đó $ID = IE = IF$.'
  },
  {
    id: 'ch9_l34_q10',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 10,
    title: 'Diện tích các tam giác tạo bởi trọng tâm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Trọng tâm', '#Diện tích', '#Thông hiểu'],
    question: 'Gọi $G$ là trọng tâm của $\\Delta ABC$. Nối $GA, GB, GC$. Ba tam giác $\\Delta GAB, \\Delta GBC, \\Delta GCA$ có:',
    options: [
      'Diện tích bằng nhau',
      'Chu vi bằng nhau',
      'Đều là tam giác cân',
      'Có cùng độ dài các cạnh'
    ],
    correctIndex: 0,
    hint: 'Mỗi trung tuyến chia tam giác thành 2 phần diện tích bằng nhau. Trọng tâm chia tam giác thành 3 tam giác có diện tích bằng nhau.',
    solution: 'Tính chất trọng tâm: Trọng tâm $G$ chia tam giác thành ba tam giác nhỏ $\\Delta GAB, \\Delta GBC, \\Delta GCA$ có diện tích bằng nhau và bằng $\\frac{1}{3}S_{\\Delta ABC}$.'
  },
  {
    id: 'ch9_l34_q11',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 11,
    title: 'Chứng minh điểm thẳng hàng với trọng tâm',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Trọng tâm', '#Thẳng hàng', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ có trung tuyến $AM$. Trên đoạn $AM$ lấy điểm $G$ sao cho $AG = 2GM$. Tia $BG$ cắt $AC$ tại $N$. Khi đó điểm $N$ là:',
    options: [
      'Trung điểm của cạnh $AC$',
      'Chân đường cao hạ từ B',
      'Điểm tùy ý trên AC',
      'Điểm chia AC theo tỉ lệ 1:3'
    ],
    correctIndex: 0,
    hint: 'Vì $AG = 2GM$ nên $G$ chính là trọng tâm của $\\Delta ABC$. Đường thẳng đi qua đỉnh và trọng tâm là đường trung tuyến.',
    solution: 'Điều kiện $AG = 2GM \\implies AG = \\frac{2}{3}AM$, chứng tỏ $G$ là trọng tâm của $\\Delta ABC$.\nDo đó đoạn thẳng $BN$ đi qua $G$ phải là đường trung tuyến thứ hai, nghĩa là $N$ là trung điểm của $AC$.'
  },
  {
    id: 'ch9_l34_q12',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 12,
    title: 'Tam giác đều có trọng tâm và tâm nội tiếp',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác đều', '#Trùng nhau', '#Vận dụng'],
    question: 'Trong một tam giác đều $ABC$, trọng tâm $G$ và giao điểm ba đường phân giác $I$ có vị trí như thế nào?',
    options: [
      'Trùng nhau',
      'Cách nhau một khoảng $1\\text{ cm}$',
      'Nằm về hai phía khác nhau của tâm tam giác',
      'Chỉ trùng nhau khi tam giác có cạnh bằng $6\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác đều, đường trung tuyến đồng thời là đường phân giác của mỗi góc.',
    solution: 'Trong tam giác đều, ba đường trung tuyến cũng chính là ba đường phân giác, do đó giao điểm của chúng (trọng tâm $G$ và tâm nội tiếp $I$) trùng nhau.'
  },
  {
    id: 'ch9_l34_q13',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 13,
    title: 'Tính góc A khi biết góc giữa hai phân giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phân giác', '#Tính ngược', '#Vận dụng'],
    question: 'Hai đường phân giác của góc $B$ và góc $C$ trong $\\Delta ABC$ cắt nhau tại $I$. Biết số đo góc $\\widehat{BIC} = 130^\\circ$. Số đo góc $A$ của tam giác là:',
    options: [
      '$\\widehat{A} = 80^\\circ$',
      '$\\widehat{A} = 70^\\circ$',
      '$\\widehat{A} = 65^\\circ$',
      '$\\widehat{A} = 90^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng công thức $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2} \\implies \\frac{\\widehat{A}}{2} = 130^\\circ - 90^\\circ$.',
    solution: 'Ta có $\\widehat{BIC} = 90^\\circ + \\frac{\\widehat{A}}{2} \\implies 130^\\circ = 90^\\circ + \\frac{\\widehat{A}}{2} \\implies \\frac{\\widehat{A}}{2} = 40^\\circ \\implies \\widehat{A} = 80^\\circ$.'
  },
  {
    id: 'ch9_l34_q14',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 14,
    title: 'Tam giác vuông có trung tuyến ứng với cạnh huyền',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác vuông', '#Trung tuyến', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$ có cạnh huyền $BC = 12\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác. Độ dài đoạn thẳng $AG$ là:',
    options: [
      '$AG = 4\\text{ cm}$',
      '$AG = 6\\text{ cm}$',
      '$AG = 3\\text{ cm}$',
      '$AG = 8\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác vuông, trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = \\frac{1}{2}BC = 6\\text{ cm}$. Sau đó tính $AG = \\frac{2}{3}AM$.',
    solution: 'Trung tuyến $AM = \\frac{1}{2}BC = \\frac{1}{2} \\times 12 = 6\\text{ cm}$.\nKhoảng cách từ trọng tâm đến đỉnh: $AG = \\frac{2}{3}AM = \\frac{2}{3} \\times 6 = 4\\text{ cm}$.'
  },
  {
    id: 'ch9_l34_q15',
    lessonId: 'bai_34_su_dong_quy_cua_ba_duong_trung_tuyen_phan_giac',
    order: 15,
    title: 'Ứng dụng thực tế: Điểm thăng bằng của tấm bìa tam giác',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Trọng tâm vật lí', '#Vận dụng'],
    question: 'Để đặt một tấm bìa cứng hình tam giác thăng bằng nằm ngang trên đầu một chiếc bút chì, mũi bút chì phải được đặt đúng vào vị trí nào của tấm bìa?',
    options: [
      'Trọng tâm của tam giác',
      'Trực tâm của tam giác',
      'Trung điểm của cạnh dài nhất',
      'Một trong ba đỉnh của tam giác'
    ],
    correctIndex: 0,
    hint: 'Trong vật lí học, trọng tâm hình học của một bản phẳng đồng chất tam giác chính là tâm phân bố khối lượng (điểm đặt trọng lực).',
    solution: 'Trọng tâm hình học $G$ của tam giác đồng chất chính là tâm tỉ cự khối lượng. Đặt đầu bút chì tại trọng tâm $G$ sẽ giữ cho tấm bìa thăng bằng tuyệt đối.'
  },

  // ==========================================================================
  // BÀI 35: SỰ ĐỒNG QUY CỦA BA ĐƯỜNG TRUNG TRỰC, BA ĐƯỜNG CAO (15 CÂU)
  // ==========================================================================

  {
    id: 'ch9_l35_q1',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 1,
    title: 'Điểm đồng quy của ba đường trung trực',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Trung trực', '#Tâm ngoại tiếp', '#Cơ bản'],
    question: 'Ba đường trung trực của một tam giác cùng đi qua một điểm. Điểm này có tính chất:',
    options: [
      'Cách đều ba đỉnh của tam giác (Tâm đường tròn ngoại tiếp)',
      'Cách đều ba cạnh của tam giác',
      'Cách mỗi đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường cao',
      'Nằm trên cạnh huyền của mọi tam giác'
    ],
    correctIndex: 0,
    hint: 'Giao điểm của 3 đường trung trực cách đều 3 đỉnh của tam giác: $OA = OB = OC$.',
    solution: 'Định lí SGK: Ba đường trung trực của tam giác đồng quy tại một điểm. Điểm đó cách đều ba đỉnh của tam giác và là tâm đường tròn ngoại tiếp tam giác.'
  },
  {
    id: 'ch9_l35_q2',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 2,
    title: 'Điểm đồng quy của ba đường cao',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đường cao', '#Trực tâm', '#Cơ bản'],
    question: 'Ba đường cao của một tam giác cùng đi qua một điểm. Điểm đó được gọi là:',
    options: [
      'Trực tâm của tam giác',
      'Trọng tâm của tam giác',
      'Tâm đường tròn ngoại tiếp',
      'Tâm đối xứng của tam giác'
    ],
    correctIndex: 0,
    hint: 'Giao điểm của 3 đường cao được gọi là Trực tâm (kí hiệu là H).',
    solution: 'Định nghĩa SGK: Điểm đồng quy của ba đường cao trong một tam giác gọi là trực tâm của tam giác.'
  },
  {
    id: 'ch9_l35_q3',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 3,
    title: 'Tâm ngoại tiếp của tam giác vuông',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác vuông', '#Tâm ngoại tiếp', '#Cơ bản'],
    question: 'Trong một tam giác vuông, tâm của đường tròn ngoại tiếp (giao điểm ba đường trung trực) nằm ở vị trí nào?',
    options: [
      'Là trung điểm của cạnh huyền',
      'Trùng với đỉnh góc vuông',
      'Nằm bên ngoài tam giác',
      'Nằm trong tam giác'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác vuông, trung điểm cạnh huyền cách đều ba đỉnh.',
    solution: 'Định lí: Trong tam giác vuông, tâm đường tròn ngoại tiếp là trung điểm của cạnh huyền.'
  },
  {
    id: 'ch9_l35_q4',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 4,
    title: 'Trực tâm của tam giác vuông',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác vuông', '#Trực tâm', '#Cơ bản'],
    question: 'Trực tâm của tam giác vuông $ABC$ vuông tại $A$ nằm ở đâu?',
    options: [
      'Trùng với đỉnh góc vuông A',
      'Nằm ở trung điểm cạnh huyền BC',
      'Nằm bên ngoài tam giác',
      'Trùng với trọng tâm tam giác'
    ],
    correctIndex: 0,
    hint: 'Hai cạnh góc vuông $AB$ và $AC$ chính là hai đường cao, chúng cắt nhau tại đỉnh góc vuông $A$.',
    solution: 'Trong tam giác vuông, hai cạnh góc vuông chính là hai đường cao xuất phát từ hai đỉnh góc nhọn. Giao điểm của ba đường cao chính là đỉnh góc vuông $A$.'
  },
  {
    id: 'ch9_l35_q5',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 5,
    title: 'Vị trí trực tâm trong tam giác tù',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tam giác tù', '#Trực tâm', '#Cơ bản'],
    question: 'Cho tam giác có một góc tù. Trực tâm của tam giác đó nằm ở vị trí nào?',
    options: [
      'Nằm ở phía bên ngoài tam giác',
      'Nằm ở phía bên trong tam giác',
      'Nằm trên cạnh dài nhất',
      'Trùng với đỉnh góc tù'
    ],
    correctIndex: 0,
    hint: 'Hai đường cao hạ từ hai đỉnh góc nhọn nằm ở phía ngoài tam giác, nên trực tâm nằm ngoài tam giác.',
    solution: 'Định lí SGK: Trong tam giác tù, trực tâm nằm ở phía bên ngoài tam giác.'
  },
  {
    id: 'ch9_l35_q6',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 6,
    title: 'Tính bán kính đường tròn ngoại tiếp tam giác vuông',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bán kính ngoại tiếp', '#Tam giác vuông', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ vuông tại $A$ có cạnh huyền $BC = 10\\text{ cm}$. Bán kính $R$ của đường tròn ngoại tiếp tam giác là:',
    options: [
      '$R = 5\\text{ cm}$',
      '$R = 10\\text{ cm}$',
      '$R = 2{,}5\\text{ cm}$',
      '$R = 7\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Bán kính đường tròn ngoại tiếp tam giác vuông bằng nửa cạnh huyền: $R = \\frac{BC}{2}$.',
    solution: 'Vì tâm đường tròn ngoại tiếp tam giác vuông là trung điểm cạnh huyền $BC$, nên bán kính $R = \\frac{BC}{2} = \\frac{10}{2} = 5\\text{ cm}$.'
  },
  {
    id: 'ch9_l35_q7',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 7,
    title: 'Góc giữa hai đường cao trong tam giác nhọn',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Trực tâm', '#Góc giữa hai đường cao', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$ nhọn có hai đường cao $BD$ và $CE$ cắt nhau tại trực tâm $H$. Biết $\\widehat{A} = 65^\\circ$. Số đo góc $\\widehat{BHC}$ là:',
    options: [
      '$\\widehat{BHC} = 115^\\circ$',
      '$\\widehat{BHC} = 125^\\circ$',
      '$\\widehat{BHC} = 65^\\circ$',
      '$\\widehat{BHC} = 135^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tứ giác $ADHE$ có $\\widehat{D} = \\widehat{E} = 90^\\circ \\implies \\widehat{DHE} = 180^\\circ - \\widehat{A}$. Góc $\\widehat{BHC}$ đối đỉnh với $\\widehat{DHE}$.',
    solution: 'Trong tứ giác $ADHE$ có $\\widehat{ADH} = \\widehat{AEH} = 90^\\circ$.\nTổng các góc bằng $360^\\circ \\implies \\widehat{DHE} = 180^\\circ - 65^\\circ = 115^\\circ$.\nVì $\\widehat{BHC}$ và $\\widehat{DHE}$ là hai góc đối đỉnh nên $\\widehat{BHC} = 115^\\circ$.'
  },
  {
    id: 'ch9_l35_q8',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 8,
    title: 'Tính chất bốn điểm đặc biệt trong tam giác đều',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tam giác đều', '#Bốn tâm trùng nhau', '#Thông hiểu'],
    question: 'Trong tam giác đều, bốn điểm: Trọng tâm $G$, trực tâm $H$, tâm ngoại tiếp $O$ và tâm nội tiếp $I$:',
    options: [
      'Trùng nhau tại một điểm duy nhất',
      'Tạo thành một hình vuông nhỏ',
      'Thẳng hàng nhưng không trùng nhau',
      'Hoàn toàn phân biệt'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác đều, mỗi đường cao đồng thời là trung tuyến, phân giác và trung trực.',
    solution: 'Vì trong tam giác đều, các đường trung tuyến, đường cao, đường phân giác và đường trung trực xuất phát từ mỗi đỉnh đều trùng nhau, nên 4 điểm $G, H, O, I$ trùng nhau tại một điểm.'
  },
  {
    id: 'ch9_l35_q9',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 9,
    title: 'Đường cao thứ ba đi qua giao điểm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tính chất trực tâm', '#Thông hiểu'],
    question: 'Cho $\\Delta ABC$. Hai đường cao xuất phát từ $B$ và $C$ cắt nhau tại điểm $H$. Đường thẳng nối từ $A$ qua $H$ cắt $BC$ tại $D$. Khi đó:',
    options: [
      '$AD \\perp BC$ ($AD$ là đường cao thứ ba)',
      '$D$ là trung điểm của $BC$',
      '$AD$ là tia phân giác của góc $A$',
      '$AD = BC$'
    ],
    correctIndex: 0,
    hint: 'Vì $H$ là giao điểm của hai đường cao nên $H$ là trực tâm. Đường thẳng đi qua đỉnh và trực tâm bắt buộc là đường cao thứ ba.',
    solution: 'Theo định lí về sự đồng quy của ba đường cao: Điểm $H$ là trực tâm của tam giác, do đó đường thẳng $AH$ bắt buộc phải vuông góc với cạnh $BC$ tại $D$.'
  },
  {
    id: 'ch9_l35_q10',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 10,
    title: 'Vị trí tâm ngoại tiếp trong tam giác tù',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tâm ngoại tiếp', '#Tam giác tù', '#Thông hiểu'],
    question: 'Cho tam giác $ABC$ có góc $\\widehat{A} = 120^\\circ$. Tâm đường tròn ngoại tiếp của tam giác $ABC$ nằm ở đâu?',
    options: [
      'Nằm ở phía bên ngoài tam giác',
      'Nằm ở phía bên trong tam giác',
      'Trùng với đỉnh A',
      'Nằm trên cạnh BC'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác nhọn tâm ngoại tiếp ở trong; tam giác vuông ở trên cạnh huyền; tam giác tù ở ngoài.',
    solution: 'Định lí: Đối với tam giác có góc tù, tâm đường tròn ngoại tiếp luôn nằm ở phía bên ngoài tam giác.'
  },
  {
    id: 'ch9_l35_q11',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 11,
    title: 'Trực tâm của các tam giác tạo bởi trực tâm ban đầu',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Trực tâm', '#Vận dụng'],
    question: 'Cho $H$ là trực tâm của $\\Delta ABC$ nhọn. Khi đó trực tâm của $\\Delta HBC$ là điểm nào?',
    options: [
      'Điểm A',
      'Trọng tâm G',
      'Điểm B',
      'Điểm C'
    ],
    correctIndex: 0,
    hint: 'Vì $AH \\perp BC$ và $AB \\perp HC$, các đường cao của $\\Delta HBC$ cùng đi qua điểm $A$.',
    solution: 'Trong $\\Delta HBC$, đường cao hạ từ $H$ vuông góc với $BC$ chính là đường thẳng chứa $HA$. Đường cao hạ từ $B$ vuông góc với $HC$ chính là đường thẳng chứa $BA$. Chúng cắt nhau tại $A$. Do đó $A$ là trực tâm của $\\Delta HBC$.'
  },
  {
    id: 'ch9_l35_q12',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 12,
    title: 'Khoảng cách từ tâm ngoại tiếp đến trung điểm cạnh trong tam giác đều',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tam giác đều', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ đều có độ dài đường cao bằng $6\\text{ cm}$. Bán kính $R$ của đường tròn ngoại tiếp tam giác là:',
    options: [
      '$R = 4\\text{ cm}$',
      '$R = 3\\text{ cm}$',
      '$R = 2\\text{ cm}$',
      '$R = 5\\text{ cm}$'
    ],
    correctIndex: 0,
    hint: 'Trong tam giác đều, tâm ngoại tiếp trùng với trọng tâm $G$. Do đó $R = OA = AG = \\frac{2}{3}h$.',
    solution: 'Vì tam giác đều có tâm ngoại tiếp $O$ trùng với trọng tâm $G$, nên bán kính $R = OA = \\frac{2}{3}h = \\frac{2}{3} \\times 6 = 4\\text{ cm}$.'
  },
  {
    id: 'ch9_l35_q13',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 13,
    title: 'Đường thẳng Euler qua ba điểm đặc biệt',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đường thẳng Euler', '#Vận dụng'],
    question: 'Trong một tam giác không đều, ba điểm Trực tâm $H$, Trọng tâm $G$ và Tâm ngoại tiếp $O$ có tính chất nổi tiếng nào (Đường thẳng Euler)?',
    options: [
      'Luôn thẳng hàng và thỏa mãn $HG = 2GO$',
      'Tạo thành một tam giác vuông cân',
      'Luôn có khoảng cách bằng nhau: $HG = GO$',
      'Luôn nằm trên một cạnh của tam giác'
    ],
    correctIndex: 0,
    hint: 'Đường thẳng Euler là một định lí hình học nổi tiếng: $H, G, O$ luôn thẳng hàng với tỉ lệ $HG = 2GO$.',
    solution: 'Định lí Euler: Trong mọi tam giác, trực tâm $H$, trọng tâm $G$ và tâm đường tròn ngoại tiếp $O$ luôn cùng thuộc một đường thẳng (gọi là đường thẳng Euler) và $HG = 2GO$.'
  },
  {
    id: 'ch9_l35_q14',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 14,
    title: 'Tính góc giữa hai đường trung trực',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Trung trực', '#Góc tâm ngoại tiếp', '#Vận dụng'],
    question: 'Cho $\\Delta ABC$ nhọn có tâm đường tròn ngoại tiếp là $O$. Biết $\\widehat{A} = 50^\\circ$. Số đo góc $\\widehat{BOC}$ là:',
    options: [
      '$\\widehat{BOC} = 100^\\circ$',
      '$\\widehat{BOC} = 130^\\circ$',
      '$\\widehat{BOC} = 50^\\circ$',
      '$\\widehat{BOC} = 80^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Góc ở tâm chắn cung $BC$ gấp đôi góc nội tiếp: $\\widehat{BOC} = 2\\widehat{A}$. Hoặc tính qua các tam giác cân $OAB, OAC, OBC$.',
    solution: 'Vì $O$ là tâm ngoại tiếp nên $OA = OB = OC$. Dễ dàng chứng minh góc ở tâm $\\widehat{BOC} = 2\\widehat{A} = 2 \\times 50^\\circ = 100^\\circ$.'
  },
  {
    id: 'ch9_l35_q15',
    lessonId: 'bai_35_su_dong_quy_cua_ba_duong_trung_truc_duong_cao',
    order: 15,
    title: 'Ứng dụng thực tế: Xây dựng bệnh viện cách đều ba khu dân cư',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Tâm ngoại tiếp', '#Vận dụng'],
    question: 'Ba khu dân cư A, B, C nằm ở ba vị trí tạo thành một tam giác. Chính quyền muốn chọn một vị trí để xây dựng một bệnh viện đa khoa sao cho khoảng cách từ bệnh viện đến ba khu dân cư là như nhau. Vị trí xây bệnh viện là:',
    options: [
      'Giao điểm ba đường trung trực của tam giác ABC',
      'Giao điểm ba đường cao của tam giác ABC',
      'Giao điểm ba đường phân giác của tam giác ABC',
      'Trọng tâm của tam giác ABC'
    ],
    correctIndex: 0,
    hint: 'Điểm cách đều 3 đỉnh $A, B, C$ chính là giao điểm của ba đường trung trực (tâm đường tròn ngoại tiếp).',
    solution: 'Điểm cách đều ba vị trí $A, B, C$ phải nằm trên các đường trung trực của $AB, BC, CA$. Vì vậy, vị trí đặt bệnh viện chính là giao điểm của ba đường trung trực của tam giác $ABC$.'
  }
];

export default chapter9Exercises;
