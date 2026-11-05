import { PracticeExercise } from '../../types/curriculum';

export const chapter3Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 8: GÓC Ở VỊ TRÍ ĐẶC BIỆT. TIA PHÂN GIÁC CỦA MỘT GÓC (14 CÂU)
  // ==========================================================================

  {
    id: 'ch3_l08_q1',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 1,
    title: 'Tính số đo góc kề bù cơ bản',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Góc kề bù', '#Cơ bản'],
    question: 'Cho hai góc $\\widehat{xOy}$ và $\\widehat{yOz}$ là hai góc kề bù. Biết $\\widehat{xOy} = 70^\\circ$. Số đo của góc $\\widehat{yOz}$ là:',
    options: [
      '$\\widehat{yOz} = 110^\\circ$',
      '$\\widehat{yOz} = 20^\\circ$',
      '$\\widehat{yOz} = 70^\\circ$',
      '$\\widehat{yOz} = 180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Hai góc kề bù có tổng số đo bằng $180^\\circ$: $\\widehat{yOz} = 180^\\circ - \\widehat{xOy}$.',
    solution: 'Vì $\\widehat{xOy}$ và $\\widehat{yOz}$ là hai góc kề bù nên:\n$$\\widehat{xOy} + \\widehat{yOz} = 180^\\circ$$\n$$\\implies \\widehat{yOz} = 180^\\circ - \\widehat{xOy} = 180^\\circ - 70^\\circ = 110^\\circ$$\nVậy $\\widehat{yOz} = 110^\\circ$.'
  },
  {
    id: 'ch3_l08_q2',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 2,
    title: 'Tính chất hai góc đối đỉnh',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Góc đối đỉnh', '#Cơ bản'],
    question: 'Hai đường thẳng $xx\'$ và $yy\'$ cắt nhau tại điểm $O$. Biết $\\widehat{xOy} = 45^\\circ$. Số đo của góc đối đỉnh $\\widehat{x\'Oy\'}$ là:',
    options: [
      '$\\widehat{x\'Oy\'} = 45^\\circ$',
      '$\\widehat{x\'Oy\'} = 135^\\circ$',
      '$\\widehat{x\'Oy\'} = 90^\\circ$',
      '$\\widehat{x\'Oy\'} = 55^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Định lí: Hai góc đối đỉnh thì bằng nhau.',
    solution: 'Vì góc $\\widehat{xOy}$ và góc $\\widehat{x\'Oy\'}$ là hai góc đối đỉnh nên:\n$$\\widehat{x\'Oy\'} = \\widehat{xOy} = 45^\\circ$$\nVậy $\\widehat{x\'Oy\'} = 45^\\circ$.'
  },
  {
    id: 'ch3_l08_q3',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 3,
    title: 'Tính các góc còn lại khi hai đường thẳng cắt nhau',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Hai đường thẳng cắt nhau', '#Kề bù & Đối đỉnh'],
    question: 'Hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$ tạo thành góc $\\widehat{AOC} = 125^\\circ$. Số đo của góc $\\widehat{AOD}$ là:',
    options: [
      '$\\widehat{AOD} = 55^\\circ$',
      '$\\widehat{AOD} = 125^\\circ$',
      '$\\widehat{AOD} = 65^\\circ$',
      '$\\widehat{AOD} = 180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tia $OC$ và tia $OD$ là hai tia đối nhau, do đó $\\widehat{AOC}$ và $\\widehat{AOD}$ là hai góc kề bù.',
    solution: 'Ta có $\\widehat{AOC}$ và $\\widehat{AOD}$ là hai góc kề bù nên:\n$$\\widehat{AOC} + \\widehat{AOD} = 180^\\circ$$\n$$\\implies \\widehat{AOD} = 180^\\circ - 125^\\circ = 55^\\circ$$\nVậy $\\widehat{AOD} = 55^\\circ$.'
  },
  {
    id: 'ch3_l08_q4',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 4,
    title: 'Tính số đo góc tạo bởi tia phân giác',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tia phân giác', '#Cơ bản'],
    question: 'Cho tia $Oz$ là tia phân giác của góc $\\widehat{xOy}$. Biết $\\widehat{xOy} = 84^\\circ$. Số đo của góc $\\widehat{xOz}$ là:',
    options: [
      '$\\widehat{xOz} = 42^\\circ$',
      '$\\widehat{xOz} = 84^\\circ$',
      '$\\widehat{xOz} = 168^\\circ$',
      '$\\widehat{xOz} = 48^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tia phân giác của một góc chia góc đó thành hai góc bằng nhau: $\\widehat{xOz} = \\frac{\\widehat{xOy}}{2}$.',
    solution: 'Vì $Oz$ là tia phân giác của góc $\\widehat{xOy}$ nên:\n$$\\widehat{xOz} = \\widehat{zOy} = \\frac{\\widehat{xOy}}{2} = \\frac{84^\\circ}{2} = 42^\\circ$$\nVậy $\\widehat{xOz} = 42^\\circ$.'
  },
  {
    id: 'ch3_l08_q5',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 5,
    title: 'Tìm góc ban đầu khi biết góc phân giác',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tia phân giác', '#Số đo góc'],
    question: 'Tia $Ot$ là tia phân giác của góc $\\widehat{mOn}$. Biết $\\widehat{mOt} = 37^\\circ$. Số đo của góc $\\widehat{mOn}$ là:',
    options: [
      '$\\widehat{mOn} = 74^\\circ$',
      '$\\widehat{mOn} = 37^\\circ$',
      '$\\widehat{mOn} = 18,5^\\circ$',
      '$\\widehat{mOn} = 143^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Góc lớn gấp đôi góc do tia phân giác tạo ra: $\\widehat{mOn} = 2 \\cdot \\widehat{mOt}$.',
    solution: 'Vì $Ot$ là tia phân giác của $\\widehat{mOn}$ nên:\n$$\\widehat{mOn} = 2 \\cdot \\widehat{mOt} = 2 \\cdot 37^\\circ = 74^\\circ$$\nVậy $\\widehat{mOn} = 74^\\circ$.'
  },
  {
    id: 'ch3_l08_q6',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 6,
    title: 'Tổng hai góc đối đỉnh bằng một số đo cho trước',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc đối đỉnh', '#Thông hiểu'],
    question: 'Hai đường thẳng $AB$ và $CD$ cắt nhau tại điểm $O$. Biết tổng số đo của hai góc đối đỉnh $\\widehat{AOC} + \\widehat{BOD} = 150^\\circ$. Số đo của góc $\\widehat{AOC}$ và $\\widehat{AOD}$ lần lượt là:',
    options: [
      '$\\widehat{AOC} = 75^\\circ; \\; \\widehat{AOD} = 105^\\circ$',
      '$\\widehat{AOC} = 150^\\circ; \\; \\widehat{AOD} = 30^\\circ$',
      '$\\widehat{AOC} = 75^\\circ; \\; \\widehat{AOD} = 75^\\circ$',
      '$\\widehat{AOC} = 65^\\circ; \\; \\widehat{AOD} = 115^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Hai góc đối đỉnh bằng nhau nên mỗi góc bằng một nửa tổng. Sau đó dùng tính chất kề bù để tìm $\\widehat{AOD}$.',
    solution: 'Vì $\\widehat{AOC}$ và $\\widehat{BOD}$ đối đỉnh nên $\\widehat{AOC} = \\widehat{BOD}$.\nTa có $\\widehat{AOC} + \\widehat{BOD} = 2\\widehat{AOC} = 150^\\circ \\implies \\widehat{AOC} = 75^\\circ$.\nVì $\\widehat{AOD}$ kề bù với $\\widehat{AOC}$ nên:\n$$\\widehat{AOD} = 180^\\circ - 75^\\circ = 105^\\circ$$\nVậy $\\widehat{AOC} = 75^\\circ$ và $\\widehat{AOD} = 105^\\circ$.'
  },
  {
    id: 'ch3_l08_q7',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 7,
    title: 'Tìm hai góc kề bù theo tỉ lệ số đo',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc kề bù', '#Tỉ lệ'],
    question: 'Cho hai góc kề bù $\\widehat{AOB}$ và $\\widehat{BOC}$, biết rằng $\\widehat{AOB} = 3\\widehat{BOC}$. Số đo góc $\\widehat{AOB}$ là:',
    options: [
      '$\\widehat{AOB} = 135^\\circ$',
      '$\\widehat{AOB} = 45^\\circ$',
      '$\\widehat{AOB} = 120^\\circ$',
      '$\\widehat{AOB} = 150^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Đặt $\\widehat{BOC} = x$. Khi đó $\\widehat{AOB} = 3x$. Tổng hai góc bằng $180^\\circ$.',
    solution: 'Vì $\\widehat{AOB}$ và $\\widehat{BOC}$ kề bù nên:\n$$\\widehat{AOB} + \\widehat{BOC} = 180^\\circ$$\nThay $\\widehat{AOB} = 3\\widehat{BOC}$ vào phương trình:\n$$3\\widehat{BOC} + \\widehat{BOC} = 180^\\circ \\iff 4\\widehat{BOC} = 180^\\circ \\implies \\widehat{BOC} = 45^\\circ$$\nDo đó: $\\widehat{AOB} = 3 \\cdot 45^\\circ = 135^\\circ$.'
  },
  {
    id: 'ch3_l08_q8',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 8,
    title: 'Hai góc kề bù có hiệu số đo cho trước',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc kề bù', '#Hiệu số đo'],
    question: 'Cho hai góc kề bù $\\widehat{xOy}$ và $\\widehat{yOz}$ sao cho $\\widehat{xOy} - \\widehat{yOz} = 40^\\circ$. Số đo góc lớn $\\widehat{xOy}$ là:',
    options: [
      '$\\widehat{xOy} = 110^\\circ$',
      '$\\widehat{xOy} = 70^\\circ$',
      '$\\widehat{xOy} = 120^\\circ$',
      '$\\widehat{xOy} = 100^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Bài toán tìm hai số khi biết Tổng ($180^\\circ$) và Hiệu ($40^\\circ$): Số lớn = $\\frac{\\text{Tổng} + \\text{Hiệu}}{2}$.',
    solution: 'Ta có hệ điều kiện:\n$$\\begin{cases} \\widehat{xOy} + \\widehat{yOz} = 180^\\circ \\\\ \\widehat{xOy} - \\widehat{yOz} = 40^\\circ \\end{cases}$$\nCộng vế theo vế:\n$$2\\widehat{xOy} = 180^\\circ + 40^\\circ = 220^\\circ \\implies \\widehat{xOy} = 110^\\circ$$\n(Số đo $\\widehat{yOz} = 180^\\circ - 110^\\circ = 70^\\circ$).\nVậy $\\widehat{xOy} = 110^\\circ$.'
  },
  {
    id: 'ch3_l08_q9',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 9,
    title: 'Góc tạo bởi hai tia phân giác của hai góc kề bù',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tia phân giác', '#Góc kề bù', '#Định lí quan trọng'],
    question: 'Cho hai góc kề bù $\\widehat{xOy}$ và $\\widehat{yOz}$. Kẻ tia $Om$ là tia phân giác của $\\widehat{xOy}$ và tia $On$ là tia phân giác của $\\widehat{yOz}$. Số đo của góc $\\widehat{mOn}$ luôn bằng:',
    options: [
      '$\\widehat{mOn} = 90^\\circ$',
      '$\\widehat{mOn} = 180^\\circ$',
      '$\\widehat{mOn} = 45^\\circ$',
      '$\\widehat{mOn} = 60^\\circ$'
    ],
    correctIndex: 0,
    hint: '$\\widehat{mOn} = \\widehat{mOy} + \\widehat{yOn} = \\frac{\\widehat{xOy}}{2} + \\frac{\\widehat{yOz}}{2} = \\frac{\\widehat{xOy} + \\widehat{yOz}}{2}$.',
    solution: 'Vì $Om, On$ lần lượt là phân giác của hai góc kề bù $\\widehat{xOy}$ và $\\widehat{yOz}$ nên:\n$$\\widehat{mOy} = \\frac{\\widehat{xOy}}{2}, \\qquad \\widehat{yOn} = \\frac{\\widehat{yOz}}{2}$$\nDo tia $Oy$ nằm giữa hai tia $Om$ và $On$ nên:\n$$\\widehat{mOn} = \\widehat{mOy} + \\widehat{yOn} = \\frac{\\widehat{xOy} + \\widehat{yOz}}{2} = \\frac{180^\\circ}{2} = 90^\\circ$$\nKết luận: Hai tia phân giác của hai góc kề bù luôn vuông góc với nhau.'
  },
  {
    id: 'ch3_l08_q10',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 10,
    title: 'Điều kiện đủ để một tia là tia phân giác',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tia phân giác', '#Lí thuyết'],
    question: 'Khẳng định nào sau đây là ĐẦY ĐỦ VÀ CHÍNH XÁC NHẤT để kết luận tia $Oz$ là tia phân giác của góc $\\widehat{xOy}$?',
    options: [
      'Tia $Oz$ nằm giữa hai tia $Ox, Oy$ và $\\widehat{xOz} = \\widehat{zOy}$',
      '$\\widehat{xOz} = \\widehat{zOy}$ (không cần điều kiện nằm giữa)',
      'Tia $Oz$ chia góc $\\widehat{xOy}$ thành hai phần bất kì',
      '$\\widehat{xOz} + \\widehat{zOy} = 180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tia phân giác phải thỏa mãn đồng thời 2 yếu tố: nằm giữa hai cạnh và tạo với hai cạnh ấy hai góc bằng nhau.',
    solution: 'Theo định nghĩa, tia $Oz$ là tia phân giác của góc $\\widehat{xOy}$ khi và chỉ khi: tia $Oz$ nằm giữa hai tia $Ox, Oy$ và $\\widehat{xOz} = \\widehat{zOy} = \\frac{\\widehat{xOy}}{2}$.\nNếu chỉ có $\\widehat{xOz} = \\widehat{zOy}$ mà $Oz$ không nằm giữa (nằm ở hai phía khác nhau của góc) thì $Oz$ không phải là phân giác.'
  },
  {
    id: 'ch3_l08_q11',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 11,
    title: 'Góc giữa hai tia phân giác của hai góc kề nhau',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tia phân giác', '#Vận dụng'],
    question: 'Cho hai góc kề nhau $\\widehat{AOB} = 40^\\circ$ và $\\widehat{BOC} = 80^\\circ$. Gọi $OM$ và $ON$ lần lượt là tia phân giác của $\\widehat{AOB}$ và $\\widehat{BOC}$. Số đo của góc $\\widehat{MON}$ là:',
    options: [
      '$\\widehat{MON} = 60^\\circ$',
      '$\\widehat{MON} = 120^\\circ$',
      '$\\widehat{MON} = 40^\\circ$',
      '$\\widehat{MON} = 90^\\circ$'
    ],
    correctIndex: 0,
    hint: '$\\widehat{MON} = \\widehat{MOB} + \\widehat{BON} = \\frac{40^\\circ}{2} + \\frac{80^\\circ}{2}$.',
    solution: 'Vì $OM$ là phân giác của $\\widehat{AOB}$ nên $\\widehat{MOB} = \\frac{40^\\circ}{2} = 20^\\circ$.\nVì $ON$ là phân giác của $\\widehat{BOC}$ nên $\\widehat{BON} = \\frac{80^\\circ}{2} = 40^\\circ$.\nDo hai góc kề nhau và $OB$ nằm giữa $OM, ON$ nên:\n$$\\widehat{MON} = \\widehat{MOB} + \\widehat{BON} = 20^\\circ + 40^\\circ = 60^\\circ$$\nVậy $\\widehat{MON} = 60^\\circ$.'
  },
  {
    id: 'ch3_l08_q12',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 12,
    title: 'Tia đối của tia phân giác và góc đối đỉnh',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tia đối', '#Phân giác', '#Đối đỉnh'],
    question: 'Cho hai đường thẳng $AB$ và $CD$ cắt nhau tại $O$. Tia $Ot$ là tia phân giác của $\\widehat{AOC}$. Tia $Ot\'$ là tia đối của tia $Ot$. Khẳng định nào sau đây là ĐÚNG?',
    options: [
      '$Ot\'$ là tia phân giác của góc $\\widehat{BOD}$',
      '$Ot\'$ vuông góc với tia $Ot$',
      '$\\widehat{t\'OB} = 90^\\circ$',
      '$Ot\'$ là tia phân giác của góc $\\widehat{AOD}$'
    ],
    correctIndex: 0,
    hint: 'Hai góc đối đỉnh thì bằng nhau. Tia đối của tia phân giác một góc cũng là tia phân giác của góc đối đỉnh với góc đó.',
    solution: 'Ta có $\\widehat{t\'OB}$ đối đỉnh với $\\widehat{tOA}$, và $\\widehat{t\'OD}$ đối đỉnh với $\\widehat{tOC}$.\nVì $Ot$ là tia phân giác của $\\widehat{AOC}$ nên $\\widehat{tOA} = \\widehat{tOC}$.\nSuy ra $\\widehat{t\'OB} = \\widehat{t\'OD}$.\nHơn nữa $Ot\'$ nằm giữa hai tia $OB$ và $OD$ (vì $Ot\'$ là tia đối của $Ot$).\nVậy $Ot\'$ chính là tia phân giác của góc $\\widehat{BOD}$.'
  },
  {
    id: 'ch3_l08_q13',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 13,
    title: 'Ứng dụng thực tế của góc đối đỉnh và kề bù',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Ứng dụng'],
    question: 'Một chiếc kéo cắt vải khi mở ra có góc giữa hai lưỡi kéo là $35^\\circ$. Khi đó góc giữa hai tay cầm của kéo đối diện qua trục xoay và góc kề bù với góc mở của lưỡi kéo lần lượt là:',
    options: [
      '$35^\\circ$ (đối đỉnh) và $145^\\circ$ (kề bù)',
      '$70^\\circ$ và $110^\\circ$',
      '$35^\\circ$ và $55^\\circ$',
      '$145^\\circ$ và $35^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Hai thanh kéo cắt nhau tại khớp xoay tạo thành hai cặp góc đối đỉnh bằng nhau và các cặp góc kề bù có tổng $180^\\circ$.',
    solution: 'Khớp xoay của kéo là giao điểm của hai đường thẳng tạo bởi lưỡi kéo và cán kéo:\n- Góc giữa hai tay cầm đối đỉnh với góc giữa hai lưỡi kéo nên có số đo bằng $35^\\circ$.\n- Góc kề bù có số đo bằng $180^\\circ - 35^\\circ = 145^\\circ$.\nĐáp án đúng là $35^\\circ$ và $145^\\circ$.'
  },
  {
    id: 'ch3_l08_q14',
    lessonId: 'bai_8_goc_o_vi_tri_dac_biet_tia_phan_giac',
    order: 14,
    title: 'Số cặp góc đối đỉnh tạo bởi nhiều đường thẳng cùng đi qua 1 điểm',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Đếm góc đối đỉnh', '#Nâng cao'],
    question: 'Cho $5$ đường thẳng phân biệt cùng đi qua điểm $O$. Số cặp góc đối đỉnh (khác góc bẹt) được tạo thành là:',
    options: [
      '$20$ cặp',
      '$10$ cặp',
      '$25$ cặp',
      '$40$ cặp'
    ],
    correctIndex: 0,
    hint: '$n$ đường thẳng phân biệt cắt nhau tại 1 điểm tạo thành $2n$ tia chung gốc, tạo ra $n(n - 1)$ cặp góc đối đỉnh khác góc bẹt.',
    solution: 'Công thức tổng quát: $n$ đường thẳng cắt nhau tại 1 điểm tạo ra $n(n - 1)$ cặp góc đối đỉnh khác góc bẹt.\nChứng minh:\n- Mỗi đường thẳng tạo ra 2 tia đối nhau, $n$ đường thẳng tạo ra $2n$ tia chung gốc.\n- Số góc tạo thành là: $\\frac{2n(2n - 1)}{2} = n(2n - 1)$ góc.\n- Trong đó có $n$ góc bẹt (mỗi đường thẳng tạo 1 góc bẹt).\n- Số góc không bẹt là: $n(2n - 1) - n = 2n^2 - 2n = 2n(n - 1)$ góc.\n- Cứ 2 góc đối đỉnh ghép thành 1 cặp nên số cặp góc đối đỉnh là: $\\frac{2n(n - 1)}{2} = n(n - 1)$.\nVới $n = 5$: Số cặp góc đối đỉnh là $5 \\times (5 - 1) = 20$ cặp.'
  },

  // ==========================================================================
  // BÀI 9: HAI ĐƯỜNG THẲNG SONG SONG VÀ DẤU HIỆU NHẬN BIẾT (14 CÂU)
  // ==========================================================================

  {
    id: 'ch3_l09_q1',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 1,
    title: 'Nhận biết cặp góc so le trong',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#So le trong', '#Cơ bản'],
    question: 'Đường thẳng $c$ cắt hai đường thẳng $a$ và $b$ tại hai điểm $A$ và $B$. Cặp góc so le trong có hình ảnh liên tưởng trực quan giống chữ cái in hoa nào sau đây?',
    options: [
      'Chữ Z',
      'Chữ F',
      'Chữ X',
      'Chữ U'
    ],
    correctIndex: 0,
    hint: 'Hai góc so le trong nằm ở hai phía khác nhau của đường cắt và ở giữa hai đường thẳng (dạng hình chữ Z hoặc chữ Z ngược).',
    solution: 'Cặp góc so le trong nằm ở miền trong của hai đường thẳng $a, b$ và ở hai phía đối nhau (so le) so với cát tuyến $c$, tạo thành hình chữ Z.'
  },
  {
    id: 'ch3_l09_q2',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 2,
    title: 'Nhận biết cặp góc đồng vị',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đồng vị', '#Cơ bản'],
    question: 'Cặp góc đồng vị tạo bởi một cát tuyến cắt hai đường thẳng có hình ảnh liên tưởng trực quan giống chữ cái in hoa nào?',
    options: [
      'Chữ F',
      'Chữ Z',
      'Chữ N',
      'Chữ H'
    ],
    correctIndex: 0,
    hint: 'Đồng vị nghĩa là "cùng vị trí", hai nhánh của góc cùng chỉ về một hướng (dạng hình chữ F).',
    solution: 'Hai góc đồng vị có cùng vị trí tương ứng tại hai đỉnh giao nhau (cùng ở phía trên bên phải, phía dưới bên trái...), tạo thành hình chữ F.'
  },
  {
    id: 'ch3_l09_q3',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 3,
    title: 'Dấu hiệu nhận biết hai đường thẳng song song cơ bản',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Dấu hiệu song song', '#Định lí'],
    question: 'Nếu đường thẳng $c$ cắt hai đường thẳng phân biệt $a$ và $b$ mà trong các góc tạo thành có một cặp góc so le trong bằng nhau thì:',
    options: [
      '$a$ song song với $b$ ($a \\parallel b$)',
      '$a$ vuông góc với $b$ ($a \\perp b$)',
      '$a$ cắt $b$',
      '$a$ trùng với $b$'
    ],
    correctIndex: 0,
    hint: 'Dấu hiệu nhận biết hai đường thẳng song song: có một cặp góc so le trong bằng nhau hoặc một cặp góc đồng vị bằng nhau.',
    solution: 'Theo dấu hiệu nhận biết hai đường thẳng song song: Nếu đường thẳng $c$ cắt hai đường thẳng phân biệt $a, b$ và trong các góc tạo thành có một cặp góc so le trong bằng nhau thì $a \\parallel b$.'
  },
  {
    id: 'ch3_l09_q4',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 4,
    title: 'Tính góc so le trong khi biết hai đường song song',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính chất song song', '#So le trong'],
    question: 'Cho hai đường thẳng $a \\parallel b$ bị cắt bởi đường thẳng $c$ tại $A$ và $B$. Biết góc $\\widehat{A}_1 = 65^\\circ$. Góc $\\widehat{B}_3$ so le trong với $\\widehat{A}_1$ có số đo là:',
    options: [
      '$\\widehat{B}_3 = 65^\\circ$',
      '$\\widehat{B}_3 = 115^\\circ$',
      '$\\widehat{B}_3 = 25^\\circ$',
      '$\\widehat{B}_3 = 180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Khi hai đường thẳng song song thì các cặp góc so le trong bằng nhau.',
    solution: 'Vì $a \\parallel b$ nên hai góc so le trong có số đo bằng nhau:\n$$\\widehat{B}_3 = \\widehat{A}_1 = 65^\\circ$$'
  },
  {
    id: 'ch3_l09_q5',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 5,
    title: 'Tính góc đồng vị khi biết hai đường song song',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính chất song song', '#Đồng vị'],
    question: 'Cho hai đường thẳng $m \\parallel n$ và một cát tuyến $p$ cắt chúng tại $M$ và $N$. Biết $\\widehat{M}_2 = 118^\\circ$. Góc $\\widehat{N}_2$ ở vị trí đồng vị với $\\widehat{M}_2$ có số đo bằng:',
    options: [
      '$\\widehat{N}_2 = 118^\\circ$',
      '$\\widehat{N}_2 = 62^\\circ$',
      '$\\widehat{N}_2 = 72^\\circ$',
      '$\\widehat{N}_2 = 180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc đồng vị bằng nhau.',
    solution: 'Vì $m \\parallel n$ nên hai góc đồng vị có số đo bằng nhau:\n$$\\widehat{N}_2 = \\widehat{M}_2 = 118^\\circ$$'
  },
  {
    id: 'ch3_l09_q6',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 6,
    title: 'Tính chất của cặp góc trong cùng phía',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Trong cùng phía', '#Thông hiểu'],
    question: 'Cho hai đường thẳng $a \\parallel b$ bị cắt bởi đường thẳng $c$. Một góc trong có số đo bằng $50^\\circ$. Số đo của góc trong cùng phía với nó là:',
    options: [
      '$130^\\circ$',
      '$50^\\circ$',
      '$90^\\circ$',
      '$180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Hai góc trong cùng phía của hai đường thẳng song song thì bù nhau (tổng bằng $180^\\circ$).',
    solution: 'Khi $a \\parallel b$, hai góc trong cùng phía có tổng số đo bằng $180^\\circ$ (bù nhau):\n$$\\text{Góc cần tìm} = 180^\\circ - 50^\\circ = 130^\\circ$$'
  },
  {
    id: 'ch3_l09_q7',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 7,
    title: 'Chứng minh song song từ cặp góc so le trong bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Chứng minh song song', '#So le trong'],
    question: 'Cho hình vẽ có đường thẳng $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$. Biết $\\widehat{A}_2 = 80^\\circ$ và $\\widehat{B}_4 = 80^\\circ$, hai góc này ở vị trí so le trong. Kết luận nào sau đây là ĐÚNG?',
    options: [
      '$a \\parallel b$ vì có một cặp góc so le trong bằng nhau',
      '$a$ cắt $b$ tại một điểm',
      '$a \\perp b$',
      'Chưa đủ dữ kiện để kết luận về vị trí tương đối'
    ],
    correctIndex: 0,
    hint: 'Dấu hiệu nhận biết: Một cặp góc so le trong bằng nhau suy ra hai đường thẳng song song.',
    solution: 'Vì $\\widehat{A}_2 = \\widehat{B}_4 = 80^\\circ$ mà hai góc này ở vị trí so le trong nên theo dấu hiệu nhận biết, đường thẳng $a$ song song với đường thẳng $b$ ($a \\parallel b$).'
  },
  {
    id: 'ch3_l09_q8',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 8,
    title: 'Kiểm tra dấu hiệu song song từ hai góc không cùng tên',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Dấu hiệu song song', '#Biến đổi góc'],
    question: 'Đường thẳng $d$ cắt $x$ tại $M$ và cắt $y$ tại $N$. Biết một góc đồng vị với góc $\\widehat{M}_1$ là $\\widehat{N}_1$ có $\\widehat{M}_1 = 70^\\circ$ và $\\widehat{N}_2$ (kề bù với $\\widehat{N}_1$) có số đo $110^\\circ$. Hai đường thẳng $x$ và $y$ có song song không?',
    options: [
      'Có, $x \\parallel y$ vì $\\widehat{N}_1 = 180^\\circ - 110^\\circ = 70^\\circ = \\widehat{M}_1$ (hai góc đồng vị bằng nhau)',
      'Không, $x$ cắt $y$ vì $70^\\circ \\neq 110^\\circ$',
      'Có, vì $70^\\circ + 110^\\circ = 180^\\circ$ bất kể vị trí',
      'Không xác định được'
    ],
    correctIndex: 0,
    hint: 'Tính số đo góc $\\widehat{N}_1$ qua góc kề bù $\\widehat{N}_2$, sau đó so sánh với góc đồng vị $\\widehat{M}_1$.',
    solution: 'Ta có $\\widehat{N}_1$ kề bù với $\\widehat{N}_2$ nên:\n$$\\widehat{N}_1 = 180^\\circ - \\widehat{N}_2 = 180^\\circ - 110^\\circ = 70^\\circ$$\nVì $\\widehat{M}_1 = 70^\\circ = \\widehat{N}_1$ và hai góc này ở vị trí đồng vị nên $x \\parallel y$.'
  },
  {
    id: 'ch3_l09_q9',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 9,
    title: 'Tính tất cả 8 góc tạo bởi cát tuyến và hai đường song song',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Góc so le', '#Góc đồng vị', '#8 góc'],
    question: 'Cho hai đường thẳng song song $a \\parallel b$ bị cắt bởi cát tuyến $c$. Trong 8 góc tạo thành tại hai đỉnh giao điểm, có bao nhiêu góc có cùng số đo (bằng nhau)?',
    options: [
      'Có 4 góc nhọn bằng nhau và 4 góc tù bằng nhau (hoặc cả 8 góc đều bằng $90^\\circ$ nếu vuông góc)',
      'Cả 8 góc luôn có số đo đôi một khác nhau',
      'Chỉ có đúng 2 góc bằng nhau',
      'Có 6 góc bằng nhau và 2 góc khác biệt'
    ],
    correctIndex: 0,
    hint: 'Do tính chất đối đỉnh, so le trong và đồng vị, 8 góc tạo thành chỉ gồm đúng 2 nhóm số đo bù nhau.',
    solution: 'Khi $a \\parallel b$, 8 góc tạo bởi cát tuyến chia làm 2 nhóm:\n- Nhóm 1: 4 góc bằng nhau (gồm 2 cặp đối đỉnh, so le trong, đồng vị).\n- Nhóm 2: 4 góc bằng nhau và bù với góc nhóm 1.\nTrường hợp đặc biệt nếu cát tuyến vuông góc thì cả 8 góc đều bằng $90^\\circ$.'
  },
  {
    id: 'ch3_l09_q10',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 10,
    title: 'Vẽ hai đường thẳng song song bằng ê-ke và thước kẻ',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Dụng cụ học tập', '#Thực hành vẽ'],
    question: 'Khi sử dụng thước kẻ và ê-ke để vẽ đường thẳng $b$ đi qua điểm $M$ song song với đường thẳng $a$, cơ sở toán học nào đã được áp dụng?',
    options: [
      'Tạo ra một cặp góc đồng vị (hoặc so le trong) có cùng số đo góc nhọn của ê-ke',
      'Tạo ra hai góc đối đỉnh bằng nhau',
      'Tạo ra một góc bẹt $180^\\circ$',
      'Dựa vào tính chất hai đoạn thẳng bằng nhau'
    ],
    correctIndex: 0,
    hint: 'Mép ê-ke tì vào mép thước trượt giữ nguyên độ nghiêng của một góc, tạo thành hai góc đồng vị bằng nhau.',
    solution: 'Khi trượt ê-ke dọc theo mép thước kẻ, góc của ê-ke giữ nguyên hướng nghiêng so với mép thước. Điều này tạo ra hai góc đồng vị bằng nhau, đảm bảo đường vạch mới song song với đường ban đầu.'
  },
  {
    id: 'ch3_l09_q11',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 11,
    title: 'Tính góc chữ Z gãy khúc (đường thẳng phụ qua đỉnh nhọn)',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Kẻ đường phụ', '#Góc gãy khúc', '#Vận dụng'],
    question: 'Cho hai tia $Ax \\parallel By$. Điểm $O$ nằm giữa hai tia sao cho tia $Ax$ và $By$ cùng hướng về phía bên phải. Biết $\\widehat{xAO} = 35^\\circ$ và $\\widehat{OBy} = 45^\\circ$. Số đo góc $\\widehat{AOB}$ là:',
    options: [
      '$\\widehat{AOB} = 80^\\circ$',
      '$\\widehat{AOB} = 10^\\circ$',
      '$\\widehat{AOB} = 100^\\circ$',
      '$\\widehat{AOB} = 70^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Qua điểm $O$, kẻ đường thẳng $Ot \\parallel Ax \\implies Ot \\parallel By$. Khi đó $\\widehat{AOB} = \\widehat{AOt} + \\widehat{tOB}$.',
    solution: 'Qua $O$ kẻ tia $Ot \\parallel Ax$ (hướng về phía bên phải). Vì $Ax \\parallel By$ nên $Ot \\parallel By$.\n- Do $Ot \\parallel Ax$ nên $\\widehat{AOt} = \\widehat{xAO} = 35^\\circ$ (hai góc so le trong).\n- Do $Ot \\parallel By$ nên $\\widehat{tOB} = \\widehat{OBy} = 45^\\circ$ (hai góc so le trong).\nVì tia $Ot$ nằm giữa hai tia $OA$ và $OB$ nên:\n$$\\widehat{AOB} = \\widehat{AOt} + \\widehat{tOB} = 35^\\circ + 45^\\circ = 80^\\circ$$\nVậy $\\widehat{AOB} = 80^\\circ$.'
  },
  {
    id: 'ch3_l09_q12',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 12,
    title: 'Tính góc mũi tên ngược với hai tia song song ngược hướng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Góc khúc khuỷu', '#Vận dụng'],
    question: 'Cho $Ax \\parallel By$. Tia $Ax$ hướng sang phải, tia $By$ hướng sang trái. Điểm $O$ nằm giữa sao cho $\\widehat{xAO} = 130^\\circ$ và $\\widehat{AOB} = 90^\\circ$. Số đo góc nhọn $\\widehat{OBy}$ là:',
    options: [
      '$\\widehat{OBy} = 40^\\circ$',
      '$\\widehat{OBy} = 50^\\circ$',
      '$\\widehat{OBy} = 60^\\circ$',
      '$\\widehat{OBy} = 30^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Qua $O$ kẻ tia $Ot \\parallel Ax$. Tính $\\widehat{AOt}$ bằng góc trong cùng phía với $\\widehat{xAO}$, rồi lấy $90^\\circ - \\widehat{AOt}$.',
    solution: 'Qua $O$ kẻ tia $Ot$ cùng hướng với tia $Ax$ ($Ot \\parallel Ax$).\nVì $Ot \\parallel Ax$ nên cặp góc trong cùng phía bù nhau:\n$$\\widehat{AOt} = 180^\\circ - \\widehat{xAO} = 180^\\circ - 130^\\circ = 50^\\circ$$\nVì $\\widehat{AOB} = 90^\\circ$ nên:\n$$\\widehat{tOB} = \\widehat{AOB} - \\widehat{AOt} = 90^\\circ - 50^\\circ = 40^\\circ$$\nVì $Ot \\parallel Ax$ mà $Ax \\parallel By$ nên $Ot \\parallel By$.\nTia $Ot$ hướng sang phải, $By$ hướng sang trái, nên $\\widehat{OBy}$ và $\\widehat{tOB}$ là hai góc so le trong $\\implies \\widehat{OBy} = \\widehat{tOB} = 40^\\circ$.'
  },
  {
    id: 'ch3_l09_q13',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 13,
    title: 'Hai tia phân giác của hai góc so le trong',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tia phân giác', '#So le trong', '#Chứng minh'],
    question: 'Cho hai đường thẳng song song $a \\parallel b$ bị cắt bởi đường thẳng $c$. Kẻ hai tia phân giác của một cặp góc so le trong. Hai tia phân giác đó có vị trí tương đối thế nào?',
    options: [
      'Song song với nhau',
      'Vuông góc với nhau',
      'Cắt nhau tại trung điểm của đoạn nối hai đỉnh',
      'Trùng nhau'
    ],
    correctIndex: 0,
    hint: 'Mỗi góc phân giác bằng một nửa góc ban đầu. Do hai góc ban đầu bằng nhau nên hai góc phân giác bằng nhau và ở vị trí so le trong.',
    solution: 'Gọi cát tuyến cắt $a, b$ tại $A, B$. Hai góc so le trong $\\widehat{A}_1 = \\widehat{B}_1$.\nTia phân giác $Ax$ tạo ra góc $\\widehat{A}_{11} = \\frac{\\widehat{A}_1}{2}$.\nTia phân giác $By$ tạo ra góc $\\widehat{B}_{11} = \\frac{\\widehat{B}_1}{2}$.\nVì $\\widehat{A}_1 = \\widehat{B}_1 \\implies \\widehat{A}_{11} = \\widehat{B}_{11}$.\nDo hai góc này ở vị trí so le trong nên $Ax \\parallel By$.\nKết luận: Hai tia phân giác của hai góc so le trong thì song song với nhau.'
  },
  {
    id: 'ch3_l09_q14',
    lessonId: 'bai_9_hai_duong_thang_song_song_dau_hieu_nhan_biet',
    order: 14,
    title: 'Ứng dụng thực tế: Khung hàng rào và giàn giáo xây dựng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Kỹ thuật'],
    question: 'Bác thợ mộc đóng khung cửa gỗ có hai thanh nan đứng $a$ và $b$. Để kiểm tra xem hai thanh nan có song song tuyệt đối với nhau không, bác dùng thước đo góc vạch một thanh chéo $c$. Nếu góc ở thanh nan thứ nhất là $62^\\circ$, thì góc so le trong ở thanh nan thứ hai phải bằng bao nhiêu độ để hai thanh nan song song?',
    options: [
      'Chính xác bằng $62^\\circ$',
      'Bằng $118^\\circ$',
      'Bằng $90^\\circ$',
      'Bằng $28^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Theo dấu hiệu nhận biết, hai đường thẳng song song khi cặp góc so le trong bằng nhau.',
    solution: 'Để đảm bảo hai thanh nan $a$ và $b$ song song với nhau, theo dấu hiệu nhận biết hai đường thẳng song song thì góc so le trong ở thanh thứ hai bắt buộc phải bằng chính xác $62^\\circ$.'
  },

  // ==========================================================================
  // BÀI 10: TIÊN ĐỀ EUCLID. TÍNH CHẤT HAI ĐƯỜNG THẲNG SONG SONG (13 CÂU)
  // ==========================================================================

  {
    id: 'ch3_l10_q1',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 1,
    title: 'Phát biểu chuẩn Tiên đề Euclid',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tiên đề Euclid', '#Cơ bản'],
    question: 'Tiên đề Euclid về đường thẳng song song khẳng định rằng: Qua một điểm ở ngoài một đường thẳng, ta vẽ được:',
    options: [
      'Chỉ một và chỉ một (duy nhất một) đường thẳng song song với đường thẳng đó',
      'Vô số đường thẳng song song với đường thẳng đó',
      'Ít nhất hai đường thẳng song song với đường thẳng đó',
      'Không vẽ được đường thẳng nào song song với đường thẳng đó'
    ],
    correctIndex: 0,
    hint: 'Từ khóa then chốt của Tiên đề Euclid là tính "DUY NHẤT" của đường thẳng song song đi qua một điểm.',
    solution: 'Tiên đề Euclid: "Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó."'
  },
  {
    id: 'ch3_l10_q2',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 2,
    title: 'Hệ quả Tiên đề Euclid về hai đường cùng song song',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tiên đề Euclid', '#Hệ quả'],
    question: 'Nếu qua điểm $M$ nằm ngoài đường thẳng $d$, ta vẽ được hai đường thẳng $a$ và $b$ cùng song song với $d$ ($a \\parallel d$ và $b \\parallel d$) thì kết luận nào sau đây là ĐÚNG?',
    options: [
      'Hai đường thẳng $a$ và $b$ trùng nhau ($a \\equiv b$)',
      '$a$ vuông góc với $b$',
      '$a$ cắt $b$ tại điểm khác $M$',
      '$a$ song song với $b$'
    ],
    correctIndex: 0,
    hint: 'Vì qua điểm $M$ chỉ có duy nhất 1 đường thẳng song song với $d$, nên hai đường thẳng $a$ và $b$ phải là một.',
    solution: 'Theo Tiên đề Euclid, qua điểm $M$ chỉ có DUY NHẤT một đường thẳng song song với $d$. Do đó nếu $a \\parallel d$ và $b \\parallel d$ cùng đi qua $M$ thì đường thẳng $a$ và đường thẳng $b$ bắt buộc phải trùng nhau ($a \\equiv b$).'
  },
  {
    id: 'ch3_l10_q3',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 3,
    title: 'Tính chất bắc cầu của quan hệ song song',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Tính chất bắc cầu', '#Cơ bản'],
    question: 'Cho ba đường thẳng phân biệt $a, b, c$. Nếu $a \\parallel c$ và $b \\parallel c$ thì:',
    options: [
      '$a \\parallel b$',
      '$a \\perp b$',
      '$a$ cắt $b$',
      '$a \\equiv b$'
    ],
    correctIndex: 0,
    hint: 'Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì chúng song song với nhau.',
    solution: 'Định lí (tính chất bắc cầu): Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì chúng song song với nhau: $a \\parallel c$ và $b \\parallel c \\implies a \\parallel b$.'
  },
  {
    id: 'ch3_l10_q4',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 4,
    title: 'Từ vuông góc đến song song (Định lí 1)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Từ vuông góc đến song song', '#Cơ bản'],
    question: 'Hai đường thẳng phân biệt $a$ và $b$ cùng vuông góc với đường thẳng $c$ ($a \\perp c$ và $b \\perp c$). Kết luận gì về $a$ và $b$?',
    options: [
      '$a \\parallel b$',
      '$a \\perp b$',
      '$a$ cắt $b$ tạo góc $45^\\circ$',
      '$a$ trùng với $b$'
    ],
    correctIndex: 0,
    hint: 'Hai đường thẳng cùng vuông góc với một đường thẳng tạo ra cặp góc đồng vị bằng $90^\\circ$ nên chúng song song.',
    solution: 'Định lí: Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau:\n$$\\begin{cases} a \\perp c \\\\ b \\perp c \\end{cases} \\implies a \\parallel b$$'
  },
  {
    id: 'ch3_l10_q5',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 5,
    title: 'Từ vuông góc đến song song (Định lí 2)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Từ vuông góc đến song song', '#Tính chất'],
    question: 'Cho hai đường thẳng song song $a \\parallel b$. Nếu đường thẳng $c$ vuông góc với $a$ ($c \\perp a$) thì đường thẳng $c$ có vuông góc với $b$ không?',
    options: [
      'Có, $c \\perp b$',
      'Không, $c \\parallel b$',
      'Chỉ vuông góc nếu $c$ đi qua gốc toạ độ',
      'Không thể khẳng định'
    ],
    correctIndex: 0,
    hint: 'Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.',
    solution: 'Tính chất quan hệ giữa tính vuông góc và tính song song:\nMột đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia ($c \\perp b$).'
  },
  {
    id: 'ch3_l10_q6',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 6,
    title: 'Vận dụng tính chất bắc cầu tính góc',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bắc cầu', '#Tính góc'],
    question: 'Cho ba đường thẳng $a \\parallel b$ và $b \\parallel c$. Một đường thẳng $d$ cắt cả ba đường thẳng trên. Biết góc nhọn tạo bởi $d$ và $a$ là $52^\\circ$. Góc so le trong tạo bởi $d$ và $c$ có số đo là:',
    options: [
      '$52^\\circ$',
      '$128^\\circ$',
      '$38^\\circ$',
      '$90^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Vì $a \\parallel b$ và $b \\parallel c$ nên $a \\parallel c$. Áp dụng tính chất góc so le trong của $a$ và $c$.',
    solution: 'Vì $a \\parallel b$ và $b \\parallel c$ nên theo tính chất bắc cầu ta có $a \\parallel c$.\nKhi đường thẳng $d$ cắt hai đường thẳng song song $a$ và $c$, cặp góc so le trong có số đo bằng nhau.\nDo đó góc cần tìm bằng $52^\\circ$.'
  },
  {
    id: 'ch3_l10_q7',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 7,
    title: 'Phân tích hệ ba đường thẳng vuông góc và song song',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Vuông góc', '#Song song', '#Mệnh đề'],
    question: 'Cho bốn đường thẳng phân biệt $a, b, c, d$ thỏa mãn: $a \\parallel b$, $b \\parallel c$, và $d \\perp a$. Khẳng định nào sau đây là SAI?',
    options: [
      '$d \\parallel c$',
      '$d \\perp b$',
      '$d \\perp c$',
      '$a \\parallel c$'
    ],
    correctIndex: 0,
    hint: 'Vì $a \\parallel b \\parallel c$ mà $d \\perp a$ nên $d$ phải vuông góc với cả $b$ và $c$, do đó $d$ không thể song song với $c$.',
    solution: 'Vì $a \\parallel b$ và $b \\parallel c$ nên $a \\parallel b \\parallel c$.\nDo $d \\perp a$ nên $d \\perp b$ và $d \\perp c$.\nDo đó khẳng định "$d \\parallel c$" là SAI (vì $d \\perp c$).'
  },
  {
    id: 'ch3_l10_q8',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 8,
    title: 'Tính góc trong hình có hai đường vuông góc đáy',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Hình thang vuông', '#Tính góc'],
    question: 'Cho hình vẽ có $AB \\perp AD$ và $CD \\perp AD$. Biết góc $\\widehat{ABC} = 120^\\circ$. Số đo góc $\\widehat{BCD}$ là:',
    options: [
      '$\\widehat{BCD} = 60^\\circ$',
      '$\\widehat{BCD} = 120^\\circ$',
      '$\\widehat{BCD} = 90^\\circ$',
      '$\\widehat{BCD} = 30^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Chứng minh $AB \\parallel CD$ vì cùng vuông góc với $AD$. Sau đó dùng tính chất góc trong cùng phía.',
    solution: 'Vì $AB \\perp AD$ và $CD \\perp AD$ nên $AB \\parallel CD$ (cùng vuông góc với đường thẳng thứ ba $AD$).\nVì $AB \\parallel CD$ nên hai góc $\\widehat{ABC}$ và $\\widehat{BCD}$ là hai góc trong cùng phía bù nhau:\n$$\\widehat{ABC} + \\widehat{BCD} = 180^\\circ$$\n$$\\implies \\widehat{BCD} = 180^\\circ - 120^\\circ = 60^\\circ$$\nVậy $\\widehat{BCD} = 60^\\circ$.'
  },
  {
    id: 'ch3_l10_q9',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 9,
    title: 'Bản chất sự khác nhau giữa Tiên đề và Định lí',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Phương pháp luận', '#Tiên đề & Định lí'],
    question: 'Điểm khác biệt căn bản nhất giữa Tiên đề và Định lí trong toán học là gì?',
    options: [
      'Tiên đề được thừa nhận không cần chứng minh làm nền tảng, còn định lí bắt buộc phải chứng minh bằng suy luận logic',
      'Tiên đề luôn sai còn định lí luôn đúng',
      'Định lí do người Việt Nam phát minh còn tiên đề do người Hy Lạp phát minh',
      'Tiên đề chỉ áp dụng trong đại số còn định lí chỉ áp dụng trong hình học'
    ],
    correctIndex: 0,
    hint: 'Tiên đề là những viên gạch chân lý đầu tiên được công nhận để từ đó xây dựng nên các định lí.',
    solution: 'Trong toán học:\n- Tiên đề (Axiom) là mệnh đề khởi đầu hiển nhiên đúng được công nhận mà không cần chứng minh.\n- Định lí (Theorem) là mệnh đề phải được chứng minh tính đúng đắn dựa trên các tiên đề và định lí đã biết trước đó.'
  },
  {
    id: 'ch3_l10_q10',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 10,
    title: 'Góc giữa hai tia phân giác của hai góc trong cùng phía',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tia phân giác', '#Trong cùng phía', '#Vuông góc'],
    question: 'Cho hai đường thẳng song song $a \\parallel b$. Đường thẳng $c$ cắt $a$ tại $A$ và cắt $b$ tại $B$. Hai tia phân giác của hai góc trong cùng phía tại đỉnh $A$ và $B$ cắt nhau tại $I$. Số đo của góc $\\widehat{AIB}$ là:',
    options: [
      '$\\widehat{AIB} = 90^\\circ$',
      '$\\widehat{AIB} = 60^\\circ$',
      '$\\widehat{AIB} = 120^\\circ$',
      '$\\widehat{AIB} = 45^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tổng hai góc trong cùng phía bằng $180^\\circ$. Tổng hai nửa góc bằng $90^\\circ$. Xét tam giác $IAB$ có tổng ba góc bằng $180^\\circ$.',
    solution: 'Gọi hai góc trong cùng phía là $\\widehat{A}_1$ và $\\widehat{B}_1$. Vì $a \\parallel b$ nên:\n$$\\widehat{A}_1 + \\widehat{B}_1 = 180^\\circ$$\nVì $AI$ và $BI$ là các tia phân giác nên:\n$$\\widehat{IAB} = \\frac{\\widehat{A}_1}{2}, \\qquad \\widehat{IBA} = \\frac{\\widehat{B}_1}{2}$$\n$$\\implies \\widehat{IAB} + \\widehat{IBA} = \\frac{\\widehat{A}_1 + \\widehat{B}_1}{2} = \\frac{180^\\circ}{2} = 90^\\circ$$\nTrong $\\Delta AIB$ ta có:\n$$\\widehat{AIB} = 180^\\circ - (\\widehat{IAB} + \\widehat{IBA}) = 180^\\circ - 90^\\circ = 90^\\circ$$\nKết luận: Hai tia phân giác của hai góc trong cùng phía luôn vuông góc với nhau.'
  },
  {
    id: 'ch3_l10_q11',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 11,
    title: 'Tính góc gãy ba chặng với hai đường thẳng song song',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vận dụng', '#Kẻ đường phụ'],
    question: 'Cho hình vẽ có $AB \\parallel EF$. Biết $\\widehat{ABC} = 140^\\circ$, $\\widehat{CDE} = 110^\\circ$, và $CD \\perp DE$. Số đo của góc nhọn $\\widehat{BCD}$ là:',
    options: [
      '$\\widehat{BCD} = 50^\\circ$',
      '$\\widehat{BCD} = 40^\\circ$',
      '$\\widehat{BCD} = 60^\\circ$',
      '$\\widehat{BCD} = 30^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Qua $C$ kẻ đường thẳng song song với $AB$ (và $EF$), chia góc $\\widehat{BCD}$ thành hai góc thành phần kề bù hoặc so le trong.',
    solution: 'Kẻ đường thẳng $Cx \\parallel AB \\parallel EF$ (hướng sang phải):\n- Vì $Cx \\parallel AB$, hai góc trong cùng phía bù nhau: $\\widehat{BCx} = 180^\\circ - 140^\\circ = 40^\\circ$.\n- Qua phân tích các góc vuông và so le tại đỉnh $D$ và $E$, góc lệch tại $C$ hướng xuống là $10^\\circ$.\n- Do đó $\\widehat{BCD} = 40^\\circ + 10^\\circ = 50^\\circ$.'
  },
  {
    id: 'ch3_l10_q12',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 12,
    title: 'Vận dụng Tiên đề Euclid chứng minh ba điểm thẳng hàng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thẳng hàng', '#Tiên đề Euclid'],
    question: 'Cho điểm $M$ không thuộc đường thẳng $d$. Nếu qua $M$ kẻ được đoạn $MA \\parallel d$ và đoạn $MB \\parallel d$ thì ba điểm $M, A, B$ có quan hệ gì?',
    options: [
      'Ba điểm $M, A, B$ thẳng hàng',
      'Ba điểm $M, A, B$ tạo thành tam giác vuông',
      'Đoạn $MA$ vuông góc với đoạn $MB$',
      'Không có mối liên hệ nào'
    ],
    correctIndex: 0,
    hint: 'Theo Tiên đề Euclid, chỉ có duy nhất một đường thẳng đi qua $M$ và song song với $d$. Do đó đường thẳng $MA$ và $MB$ phải trùng nhau.',
    solution: 'Theo Tiên đề Euclid, qua điểm $M$ ở ngoài đường thẳng $d$ chỉ có duy nhất MỘT đường thẳng song song với $d$.\nVì cả hai đường thẳng $MA$ và $MB$ đều đi qua $M$ và song song với $d$ nên đường thẳng $MA$ và đường thẳng $MB$ phải trùng nhau ($MA \\equiv MB$).\nĐiều đó có nghĩa là ba điểm $M, A, B$ cùng thuộc một đường thẳng (thẳng hàng).'
  },
  {
    id: 'ch3_l10_q13',
    lessonId: 'bai_10_tien_de_euclid_tinh_chat_hai_duong_thang_song_song',
    order: 13,
    title: 'Ứng dụng thực tế: Hai dây dọi của thợ xây dựng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Dây dọi'],
    question: 'Bác thợ xây dùng hai quả dọi treo ở hai vị trí khác nhau trên cùng một bờ tường phẳng. Hai sợi dây dọi luôn có phương thẳng đứng (vuông góc với mặt sàn phẳng nằm ngang). Theo định lí hình học nào ta biết hai sợi dây dọi luôn song song với nhau?',
    options: [
      'Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau',
      'Hai góc đối đỉnh thì bằng nhau',
      'Định lí tổng ba góc trong tam giác bằng $180^\\circ$',
      'Hai đường thẳng song song thì các cặp góc so le trong bằng nhau'
    ],
    correctIndex: 0,
    hint: 'Hai dây dọi cùng vuông góc với đường sàn nằm ngang: $d_1 \\perp s$ và $d_2 \\perp s \\implies d_1 \\parallel d_2$.',
    solution: 'Mỗi sợi dây dọi có phương thẳng đứng, vuông góc với mặt nền nhà nằm ngang.\nÁp dụng định lí: "Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau", ta kết luận hai sợi dây dọi song song với nhau, giúp thợ xây gióng hàng gạch thẳng đứng chuẩn xác.'
  },

  // ==========================================================================
  // BÀI 11: ĐỊNH LÍ VÀ CHỨNG MINH ĐỊNH LÍ (13 CÂU)
  // ==========================================================================

  {
    id: 'ch3_l11_q1',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 1,
    title: 'Khái niệm định lí hình học',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Định lí', '#Cơ bản'],
    question: 'Khẳng định nào sau đây định nghĩa chính xác nhất về "Định lí" trong toán học?',
    options: [
      'Định lí là một khẳng định suy ra từ những khẳng định được coi là đúng, thông qua suy luận logic chặt chẽ',
      'Định lí là một hình vẽ đẹp trên giấy kẻ ô li',
      'Định lí là mệnh đề được kiểm tra bằng thước đo độ 5 lần thấy đúng',
      'Định lí là một câu hỏi chưa có lời giải'
    ],
    correctIndex: 0,
    hint: 'Định lí là kết quả của quá trình suy luận logic từ các tiên đề và định lí trước đó.',
    solution: 'Định lí là một khẳng định được coi là đúng nhờ suy luận logic dựa trên các khẳng định (tiên đề, định lí) đã biết trước đó.'
  },
  {
    id: 'ch3_l11_q2',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 2,
    title: 'Cấu trúc Giả thiết (GT) và Kết luận (KL)',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#GT và KL', '#Cơ bản'],
    question: 'Một định lí thường được phát biểu dưới dạng: "Nếu $A$ thì $B$". Khi đó mệnh đề $A$ và mệnh đề $B$ lần lượt được gọi là:',
    options: [
      '$A$ là Giả thiết (GT), $B$ là Kết luận (KL)',
      '$A$ là Kết luận (KL), $B$ là Giả thiết (GT)',
      'Cả $A$ và $B$ đều là Giả thiết',
      'Cả $A$ và $B$ đều là Kết luận'
    ],
    correctIndex: 0,
    hint: 'Phần nằm giữa "Nếu" và "thì" là điều cho trước (Giả thiết); phần sau "thì" là điều suy ra (Kết luận).',
    solution: 'Trong cấu trúc chuẩn "Nếu $A$ thì $B$":\n- Phần $A$ (sau từ "Nếu") là điều đã cho: gọi là Giả thiết (GT).\n- Phần $B$ (sau từ "thì") là điều suy ra được: gọi là Kết luận (KL).'
  },
  {
    id: 'ch3_l11_q3',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 3,
    title: 'Xác định GT và KL của định lí hai góc đối đỉnh',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#GT và KL', '#Góc đối đỉnh'],
    question: 'Cho định lí: "Hai góc đối đỉnh thì bằng nhau". Phát biểu nào chỉ rõ Giả thiết (GT) và Kết luận (KL) chính xác nhất?',
    options: [
      'GT: Hai góc đối đỉnh; KL: Hai góc đó bằng nhau',
      'GT: Hai góc bằng nhau; KL: Hai góc đó đối đỉnh',
      'GT: Hai đường thẳng cắt nhau; KL: Tổng hai góc bằng $180^\\circ$',
      'GT: Hai góc kề bù; KL: Hai góc bằng nhau'
    ],
    correctIndex: 0,
    hint: 'Phát biểu lại định lí dưới dạng: "Nếu hai góc đối đỉnh thì hai góc đó bằng nhau".',
    solution: 'Dạng chuẩn "Nếu ... thì ...": "Nếu hai góc đối đỉnh thì hai góc đó bằng nhau".\n- Giả thiết (GT): Hai góc đối đỉnh.\n- Kết luận (KL): Hai góc đó bằng nhau.'
  },
  {
    id: 'ch3_l11_q4',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 4,
    title: 'Xác định GT và KL của định lí từ vuông góc đến song song',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#GT và KL', '#Vuông góc đến song song'],
    question: 'Cho định lí: "Nếu hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau". Kết luận (KL) của định lí là:',
    options: [
      'Chúng song song với nhau ($a \\parallel b$)',
      'Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba',
      'Hai đường thẳng đó vuông góc với nhau',
      'Chúng cắt nhau tại một điểm'
    ],
    correctIndex: 0,
    hint: 'Kết luận là phần đứng sau từ "thì".',
    solution: 'Phần đứng sau từ "thì" là: "chúng song song với nhau". Đây chính là Kết luận (KL) của định lí.'
  },
  {
    id: 'ch3_l11_q5',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 5,
    title: 'Bản chất của việc chứng minh một định lí',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Chứng minh định lí', '#Khái niệm'],
    question: 'Thế nào là "Chứng minh một định lí"?',
    options: [
      'Là dùng lập luận từ các khẳng định đã biết là đúng (giả thiết, tiên đề, định lí đã học) để suy ra kết luận',
      'Là dùng thước kẻ và compa vẽ 10 hình vẽ khác nhau',
      'Là tra bảng số liệu có sẵn trong sách bài tập',
      'Là hỏi ý kiến số đông các bạn trong lớp'
    ],
    correctIndex: 0,
    hint: 'Toán học yêu cầu lập luận chặt chẽ bằng tư duy logic có căn cứ lý lẽ.',
    solution: 'Chứng minh một định lí là dùng lập luận suy luận logic xuất phát từ Giả thiết và các kiến thức đã biết là đúng (tiên đề, định lí trước) để khẳng định Kết luận là đúng.'
  },
  {
    id: 'ch3_l11_q6',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 6,
    title: 'Chuyển định lí về dạng "Nếu ... thì ..."',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Nếu thì', '#Phát biểu'],
    question: 'Định lí: "Tia phân giác của một góc chia góc đó thành hai góc có số đo bằng nhau" được viết lại dưới dạng "Nếu ... thì ..." là:',
    options: [
      'Nếu một tia là tia phân giác của một góc thì nó chia góc đó thành hai góc có số đo bằng nhau',
      'Nếu một góc có số đo bằng nhau thì có tia phân giác',
      'Nếu hai góc bằng nhau thì một tia bất kì là phân giác',
      'Nếu chia góc thành hai phần thì tia đó là phân giác'
    ],
    correctIndex: 0,
    hint: 'Tách vế điều kiện "là tia phân giác" đặt sau từ "Nếu", vế tính chất "chia góc thành hai góc bằng nhau" đặt sau từ "thì".',
    solution: 'Cách diễn đạt chuẩn xác logic: "Nếu một tia là tia phân giác của một góc thì nó chia góc đó thành hai góc có số đo bằng nhau."'
  },
  {
    id: 'ch3_l11_q7',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 7,
    title: 'Ghi GT và KL bằng kí hiệu toán học',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Kí hiệu GT KL', '#Thông hiểu'],
    question: 'Cho định lí: "Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia". Khi viết GT và KL bằng kí hiệu toán học cho ba đường thẳng $a, b, c$, ta ghi:',
    options: [
      'GT: $a \\parallel b, \\; c \\perp a$; \\quad KL: $c \\perp b$',
      'GT: $a \\perp b, \\; c \\parallel a$; \\quad KL: $c \\perp a$',
      'GT: $c \\perp b$; \\quad KL: $a \\parallel b, \\; c \\perp a$',
      'GT: $a \\parallel b \\parallel c$; \\quad KL: $a \\perp b$'
    ],
    correctIndex: 0,
    hint: 'Điều đã cho: hai đường song song $a \\parallel b$ và đường thẳng $c$ vuông góc với $a$. Điều cần suy ra: $c \\perp b$.',
    solution: 'Bằng kí hiệu toán học:\n- GT: $a \\parallel b, \\; c \\perp a$\n- KL: $c \\perp b$'
  },
  {
    id: 'ch3_l11_q8',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 8,
    title: 'Điền lý lẽ vào bước chứng minh hai góc đối đỉnh bằng nhau',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bước chứng minh', '#Logic'],
    question: 'Cho hai đường thẳng $xx\'$ và $yy\'$ cắt nhau tại $O$. Để chứng minh $\\widehat{xOy} = \\widehat{x\'Oy\'}$, một bạn học sinh trình bày:\n"Vì $\\widehat{xOy}$ và $\\widehat{xOy\'}$ là hai góc ... (1) ... nên $\\widehat{xOy} + \\widehat{xOy\'} = 180^\\circ$.\nVì $\\widehat{x\'Oy\'}$ và $\\widehat{xOy\'}$ là hai góc ... (2) ... nên $\\widehat{x\'Oy\'} + \\widehat{xOy\'} = 180^\\circ$.\nSuy ra $\\widehat{xOy} = \\widehat{x\'Oy\'}$."\nCụm từ thích hợp điền vào vị trí (1) và (2) là:',
    options: [
      '(1) kề bù; (2) kề bù',
      '(1) đối đỉnh; (2) kề bù',
      '(1) đồng vị; (2) so le trong',
      '(1) trong cùng phía; (2) đối đỉnh'
    ],
    correctIndex: 0,
    hint: 'Hai góc có tổng số đo bằng $180^\\circ$ do có chung một cạnh và hai cạnh kia là hai tia đối nhau là hai góc kề bù.',
    solution: 'Cả hai cặp góc $(\\widehat{xOy}, \\widehat{xOy\'})$ và $(\\widehat{x\'Oy\'}, \\widehat{xOy\'})$ đều là hai góc kề bù (tổng bằng $180^\\circ$).\nDo cùng bù với góc $\\widehat{xOy\'}$ nên $\\widehat{xOy} = \\widehat{x\'Oy\'}$.'
  },
  {
    id: 'ch3_l11_q9',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 9,
    title: 'Quy trình 3 bước chứng minh một định lí hình học',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Quy trình chứng minh', '#Kỹ năng'],
    question: 'Khi trình bày chứng minh một định lí hình học trong vở, thứ tự các bước chuẩn mực là:',
    options: [
      'Bước 1: Vẽ hình minh họa $\\to$ Bước 2: Viết Giả thiết và Kết luận bằng kí hiệu $\\to$ Bước 3: Trình bày chuỗi suy luận logic kèm căn cứ',
      'Bước 1: Viết đáp số $\\to$ Bước 2: Đo đạc bằng thước $\\to$ Bước 3: Vẽ hình',
      'Bước 1: Viết suy luận $\\to$ Bước 2: Vẽ hình $\\to$ Bước 3: Tra sách giáo khoa',
      'Bước 1: Giả thiết $\\to$ Bước 2: Kết luận $\\to$ Bước 3: Đo góc'
    ],
    correctIndex: 0,
    hint: 'Trước hết phải có hình vẽ trực quan để đặt tên các điểm/đường thẳng, sau đó tóm tắt GT/KL rồi mới viết bài chứng minh.',
    solution: 'Quy trình chuẩn khi chứng minh định lí hình học gồm 3 bước:\n1. Vẽ hình vẽ minh họa trực quan.\n2. Viết Giả thiết (GT) và Kết luận (KL) bằng kí hiệu toán học dựa trên hình vẽ.\n3. Trình bày từng dòng suy luận logic, mỗi khẳng định đều có lý do đi kèm trong ngoặc đơn.'
  },
  {
    id: 'ch3_l11_q10',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 10,
    title: 'Bác bỏ một khẳng định sai bằng phản ví dụ',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phản ví dụ', '#Tư duy logic', '#Vận dụng'],
    question: 'Xét khẳng định: "Nếu hai góc bằng nhau thì hai góc đó đối đỉnh". Khẳng định này là ĐÚNG hay SAI và vì sao?',
    options: [
      'SAI, vì có thể chỉ ra phản ví dụ: Hai góc cùng bằng $60^\\circ$ nhưng nằm ở hai vị trí rời nhau (hoặc hai góc so le trong bằng nhau)',
      'ĐÚNG, vì định lí hai góc đối đỉnh khẳng định chúng luôn bằng nhau',
      'ĐÚNG, vì cứ vẽ hai góc bằng nhau thì kéo dài cạnh sẽ thành đối đỉnh',
      'Không thể xác định được tính đúng sai'
    ],
    correctIndex: 0,
    hint: 'Mệnh đề đảo của một định lí chưa chắc đã đúng. Để bác bỏ một mệnh đề, ta chỉ cần đưa ra MỘT phản ví dụ.',
    solution: 'Khẳng định trên là SAI.\nTrong toán học, "Hai góc đối đỉnh thì bằng nhau" là định lí đúng, nhưng chiều ngược lại "Hai góc bằng nhau thì đối đỉnh" là SAI.\nPhản ví dụ: Hai góc so le trong bằng nhau của hai đường thẳng song song (cùng bằng $60^\\circ$) không hề đối đỉnh với nhau.'
  },
  {
    id: 'ch3_l11_q11',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 11,
    title: 'Phát hiện lỗi sai trong lập luận chứng minh',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Lỗi lập luận', '#Vận dụng'],
    question: 'Một học sinh chứng minh hai đường thẳng $a$ và $b$ song song như sau: "Kẻ đường thẳng $c$ cắt $a$ và $b$. Lấy thước đo độ đo thấy $\\widehat{A}_1 = 70^\\circ$ và $\\widehat{B}_1 = 70^\\circ$, suy ra $a \\parallel b$". Lập luận này chưa đạt chuẩn chứng minh toán học vì:',
    options: [
      'Chứng minh toán học đòi hỏi suy luận logic từ giả thiết, không thể dựa vào sai số đo đạc thực nghiệm bằng thước',
      'Vì số đo $70^\\circ$ là góc nhọn không thể song song',
      'Vì không dùng compa',
      'Vì bạn học sinh đó chưa vẽ màu xanh đỏ'
    ],
    correctIndex: 0,
    hint: 'Hình học suy diễn từ thời Euclid yêu cầu tính logic tuyệt đối, mắt nhìn và thước đo luôn có sai số.',
    solution: 'Trong toán học suy diễn, đo đạc bằng thước chỉ mang tính kiểm tra thực nghiệm và luôn có sai số mắt nhìn. Việc chứng minh bắt buộc phải dựa trên chuỗi lập luận logic từ giả thiết đề bài đã cho.'
  },
  {
    id: 'ch3_l11_q12',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 12,
    title: 'Chứng minh định lí về hai tia phân giác của hai góc đồng vị',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Chứng minh định lí', '#Vận dụng'],
    question: 'Cho định lí: "Nếu hai đường thẳng song song thì hai tia phân giác của một cặp góc đồng vị song song với nhau". Giả thiết (GT) và Kết luận (KL) chuẩn bằng kí hiệu cho hình vẽ với cát tuyến $c$ cắt $a, b$ tại $A, B$; tia $Ax$ là phân giác $\\widehat{A}_1$, tia $By$ là phân giác $\\widehat{B}_1$ (với $\\widehat{A}_1, \\widehat{B}_1$ đồng vị) là:',
    options: [
      'GT: $a \\parallel b$, $\\widehat{A}_1, \\widehat{B}_1$ đồng vị, $Ax$ là phân giác $\\widehat{A}_1$, $By$ là phân giác $\\widehat{B}_1$; \\quad KL: $Ax \\parallel By$',
      'GT: $Ax \\parallel By$; \\quad KL: $a \\parallel b$',
      'GT: $\\widehat{A}_1 = \\widehat{B}_1$; \\quad KL: $a \\perp b$',
      'GT: $a \\perp b$; \\quad KL: $Ax \\perp By$'
    ],
    correctIndex: 0,
    hint: 'Phân định rõ điều kiện đã cho (GT) và điều cần chứng minh (KL) bằng kí hiệu ngắn gọn.',
    solution: 'GT là những gì bài toán cho: $a \\parallel b$, hai góc $\\widehat{A}_1, \\widehat{B}_1$ đồng vị, $Ax$ là phân giác $\\widehat{A}_1$, $By$ là phân giác $\\widehat{B}_1$.\nKL là điều cần chứng minh: $Ax \\parallel By$.'
  },
  {
    id: 'ch3_l11_q13',
    lessonId: 'bai_11_dinh_li_va_chung_minh_dinh_li',
    order: 13,
    title: 'Ý nghĩa của tư duy định lí trong đời sống thực tế',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tư duy phản biện', '#Thực tế'],
    question: 'Kỹ năng phân tách Giả thiết (GT) và Kết luận (KL) khi học định lí toán học giúp rèn luyện thói quen tư duy nào có ích nhất trong đời sống hàng ngày?',
    options: [
      'Thói quen tư duy phản biện: Nói có sách mách có chứng, biết phân biệt rõ "thông tin đã có căn cứ" với "kết luận suy diễn"',
      'Thói quen luôn nghi ngờ mọi thứ một cách tiêu cực',
      'Thói quen nói chuyện dài dòng phức tạp',
      'Thói quen không bao giờ lắng nghe người khác'
    ],
    correctIndex: 0,
    hint: 'Học chứng minh định lí giúp rèn luyện khả năng lập luận sắc bén, logic và có căn cứ.',
    solution: 'Cấu trúc định lí rèn luyện tư duy phản biện khoa học: phân biệt rõ đâu là tiền đề thực tế (GT) và đâu là khẳng định rút ra (KL), tránh ngụy biện và đưa ra kết luận thuyết phục dựa trên bằng chứng xác thực.'
  }
];

export default chapter3Exercises;
