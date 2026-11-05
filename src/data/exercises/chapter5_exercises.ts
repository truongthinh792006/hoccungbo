import { PracticeExercise } from '../../types/curriculum';

export const chapter5Exercises: PracticeExercise[] = [
  // ==========================================================================
  // BÀI 17: THU THẬP VÀ PHÂN LOẠI DỮ LIỆU (14 CÂU)
  // ==========================================================================

  {
    id: 'ch5_l17_q1',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 1,
    title: 'Nhận biết dữ liệu định lượng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Dữ liệu định lượng', '#Cơ bản'],
    question: 'Dãy dữ liệu nào sau đây là dữ liệu định lượng (dữ liệu số có thể tính toán được)?',
    options: [
      'Chiều cao (cm) của 5 học sinh: $152; 155; 148; 160; 158$',
      'Màu sắc yêu thích: Xanh lá, Đỏ, Vàng, Tím',
      'Xếp loại rèn luyện: Tốt, Khá, Đạt, Chưa đạt',
      'Nơi sinh của các thành viên: Hà Nội, Huế, Cần Thơ'
    ],
    correctIndex: 0,
    hint: 'Dữ liệu định lượng biểu diễn bằng số đếm hoặc số đo có thể thực hiện các phép tính cộng, trừ, tính trung bình.',
    solution: 'Chiều cao (cm) của học sinh là các con số thực ($152, 155, 148...$) có thể đo đạc và tính giá trị trung bình, do đó là dữ liệu định lượng. Các dãy còn lại đều là chữ/danh mục (dữ liệu định tính).'
  },
  {
    id: 'ch5_l17_q2',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 2,
    title: 'Nhận biết dữ liệu định tính',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Dữ liệu định tính', '#Cơ bản'],
    question: 'Dãy dữ liệu nào sau đây là dữ liệu định tính (dữ liệu chữ hoặc danh mục không đo đếm bằng số)?',
    options: [
      'Môn thể thao yêu thích của học sinh lớp 7A: Bóng đá, Cầu lông, Bơi lội, Bóng rổ',
      'Số bàn thắng của một đội bóng qua 4 trận: $2; 0; 3; 1$',
      'Số lượng học sinh giỏi của 3 lớp: $15; 18; 12$',
      'Nhiệt độ trung bình các ngày trong tuần: $28^\\circ\\text{C}; 30^\\circ\\text{C}; 27^\\circ\\text{C}$'
    ],
    correctIndex: 0,
    hint: 'Dữ liệu định tính thể hiện bằng từ ngữ, tên gọi, danh mục hoặc phẩm chất.',
    solution: 'Danh sách môn thể thao {Bóng đá, Cầu lông, Bơi lội, Bóng rổ} biểu thị danh mục không dùng số đo nên là dữ liệu định tính.'
  },
  {
    id: 'ch5_l17_q3',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 3,
    title: 'Phương pháp thu thập dữ liệu trực tiếp',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Thu thập trực tiếp', '#Phương pháp'],
    question: 'Hoạt động nào sau đây là phương pháp thu thập dữ liệu trực tiếp?',
    options: [
      'Cân từng học sinh trong lớp bằng cân y tế để ghi chép cân nặng',
      'Tra cứu số liệu dân số các nước trên trang web của Tổng cục Thống kê',
      'Đọc báo cáo tài chính năm ngoái của công ty trên tạp chí',
      'Tìm kiếm diện tích các tỉnh thành Việt Nam trên Internet'
    ],
    correctIndex: 0,
    hint: 'Thu thập trực tiếp là tự mình thực hiện đo đạc, quan sát, phỏng vấn hoặc làm thí nghiệm trên đối tượng.',
    solution: 'Dùng cân y tế trực tiếp cân và ghi chép số đo của từng học sinh là phương pháp thu thập trực tiếp (đo đạc thực tế). Các cách còn lại là thu thập gián tiếp qua tài liệu có sẵn.'
  },
  {
    id: 'ch5_l17_q4',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 4,
    title: 'Phương pháp thu thập dữ liệu gián tiếp',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Thu thập gián tiếp', '#Phương pháp'],
    question: 'Để thống kê sản lượng lúa xuất khẩu của Việt Nam từ năm 2015 đến năm 2024, phương pháp thu thập số liệu tối ưu và khả thi nhất là:',
    options: [
      'Thu thập gián tiếp từ Niên giám thống kê của Bộ Nông nghiệp & Phát triển Nông thôn',
      'Tự mình đến từng ruộng lúa của cả nước để cân đong',
      'Hỏi ngẫu nhiên 10 bác nông dân ở một xã rồi nhân lên',
      'Tự ước lượng theo cảm tính cá nhân'
    ],
    correctIndex: 0,
    hint: 'Dữ liệu quy mô quốc gia trong nhiều năm bắt buộc phải tổng hợp gián tiếp từ nguồn tin cậy của nhà nước.',
    solution: 'Thu thập gián tiếp từ báo cáo chính thống của Bộ NN&PTNT hoặc Tổng cục Thống kê là cách thu thập khoa học, chính xác và khả thi nhất.'
  },
  {
    id: 'ch5_l17_q5',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 5,
    title: 'Bẫy số học trong phân loại dữ liệu định tính',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Bẫy số học', '#Định tính'],
    question: 'Dãy số áo thi đấu của các cầu thủ ra sân: $7; 10; 9; 11; 4$ là loại dữ liệu nào?',
    options: [
      'Dữ liệu định tính (dùng để định danh, không thể tính toán cộng trừ)',
      'Dữ liệu định lượng (vì đều là các số tự nhiên)',
      'Vừa là định tính vừa là định lượng',
      'Không phải dữ liệu thống kê'
    ],
    correctIndex: 0,
    hint: 'Các con số này có dùng để cộng lại hay tính trung bình không? Chúng đóng vai trò như tên gọi của cầu thủ.',
    solution: 'Mặc dù số áo được viết bằng chữ số, nhưng chúng chỉ có ý nghĩa định danh (phân biệt cầu thủ), không dùng để đo lường hay tính toán cộng trừ. Vì vậy, số áo thi đấu là DỮ LIỆU ĐỊNH TÍNH.'
  },
  {
    id: 'ch5_l17_q6',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 6,
    title: 'Kiểm tra tính hợp lí của thang điểm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tính hợp lí', '#Thang điểm'],
    question: 'Bạn Minh ghi lại điểm kiểm tra giữa kì môn Toán của một nhóm học sinh như sau: $8; 9; 7; -1; 10; 6$. Số liệu nào trong dãy là KHÔNG HỢP LÍ?',
    options: [
      'Điểm số $-1$',
      'Điểm số $10$',
      'Điểm số $6$',
      'Tất cả các điểm số đều hợp lí'
    ],
    correctIndex: 0,
    hint: 'Thang điểm kiểm tra của học sinh theo quy định của Bộ Giáo dục & Đào tạo nằm trong khoảng từ $0$ đến $10$.',
    solution: 'Thang điểm kiểm tra ở trường phổ thông chỉ nhận giá trị từ $0$ đến $10$, không có điểm âm. Do đó giá trị $-1$ là hoàn toàn không hợp lí.'
  },
  {
    id: 'ch5_l17_q7',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 7,
    title: 'Kiểm tra tính hợp lí của tổng số đối tượng khảo sát',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tính hợp lí', '#Sĩ số'],
    question: 'Lớp 7A có đúng $38$ học sinh. Bạn lớp trưởng khảo sát món ăn sáng yêu thích của cả lớp (mỗi bạn chỉ chọn một món duy nhất) và ghi nhận: Bánh mì ($18$ bạn), Phở ($12$ bạn), Xôi ($10$ bạn), Bún ($5$ bạn). Dữ liệu này có hợp lí không?',
    options: [
      'Không hợp lí, vì tổng số học sinh được chọn là $45$ bạn, vượt quá sĩ số $38$ học sinh của lớp',
      'Hợp lí, vì số bạn thích bánh mì là nhiều nhất',
      'Hợp lí, vì tất cả số liệu đều là số tự nhiên dương',
      'Không hợp lí, vì không có bạn nào nhịn ăn sáng'
    ],
    correctIndex: 0,
    hint: 'Cộng tổng số học sinh ở tất cả các món ăn rồi so sánh với sĩ số lớp ($38$).',
    solution: 'Tổng số học sinh ghi nhận trong bảng khảo sát là:\n$$18 + 12 + 10 + 5 = 45 \\text{ (học sinh)}$$\nVì mỗi bạn chỉ được chọn đúng một món ăn sáng mà $45 > 38$ (vượt quá sĩ số của lớp) nên số liệu này không hợp lí.'
  },
  {
    id: 'ch5_l17_q8',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 8,
    title: 'Phân loại dữ liệu định tính có thể sắp thứ tự',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Định tính', '#Thứ tự'],
    question: 'Dãy dữ liệu định tính nào sau đây CÓ THỂ sắp xếp theo thứ tự từ thấp đến cao (hoặc ngược lại)?',
    options: [
      'Kết quả học tập học kì: Chưa đạt, Đạt, Khá, Tốt',
      'Nơi sinh của học sinh: Hà Nội, Hải Phòng, Nam Định',
      'Phương tiện đến trường: Xe đạp, Đi bộ, Xe buýt',
      'Màu sắc đồ dùng: Xanh, Đỏ, Vàng, Tím'
    ],
    correctIndex: 0,
    hint: 'Tìm nhóm danh mục có cấp bậc rõ ràng, xếp thứ tự từ mức thấp đến mức cao được quy định chuẩn.',
    solution: 'Xếp loại kết quả học tập {Chưa đạt, Đạt, Khá, Tốt} là dữ liệu định tính có thể so sánh và sắp xếp thứ tự logic rõ ràng theo mức độ tiến bộ. Các nhóm còn lại không có thứ tự hơn kém.'
  },
  {
    id: 'ch5_l17_q9',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 9,
    title: 'Đánh giá tính đại diện của mẫu khảo sát',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tính đại diện', '#Phương pháp'],
    question: 'Để khảo sát số giờ chơi điện tử trung bình trong một tuần của toàn bộ $600$ học sinh khối 7, nhóm bạn An chỉ phát phiếu hỏi cho $40$ bạn học sinh nam chơi trong đội bóng đá của trường. Cách chọn mẫu này có tính đại diện cho toàn khối không?',
    options: [
      'Không có tính đại diện, vì chỉ khảo sát các bạn nam trong đội bóng, bỏ qua học sinh nữ và các bạn học sinh khác trong khối',
      'Có tính đại diện, vì $40$ bạn là số lượng đủ lớn',
      'Có tính đại diện, vì đội bóng đá phản ánh tốt mọi thói quen',
      'Không có tính đại diện, vì phiếu hỏi phải phát cho toàn thể phụ huynh'
    ],
    correctIndex: 0,
    hint: 'Mẫu khảo sát có tính đại diện khi các thành phần được chọn ngẫu nhiên từ cả nam, nữ và các lớp khác nhau.',
    solution: 'Mẫu khảo sát trên bị thiên lệch (bias) nghiêm trọng vì chỉ hỏi các bạn nam chơi thể thao, không đại diện cho toàn bộ đối tượng học sinh (gồm cả nam, nữ với nhiều sở thích và mức độ học tập khác nhau) của khối 7.'
  },
  {
    id: 'ch5_l17_q10',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 10,
    title: 'Lập bảng tần số từ dữ liệu thô',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Bảng tần số', '#Đếm số liệu'],
    question: 'Điều tra số con trong $10$ gia đình ở một khu phố thu được dãy số liệu: $2; 1; 2; 3; 2; 1; 2; 2; 1; 4$. Số gia đình có đúng $2$ con chiếm bao nhiêu phần trăm?',
    options: [
      '$50\\%$',
      '$40\\%$',
      '$20\\%$',
      '$30\\%$'
    ],
    correctIndex: 0,
    hint: 'Đếm số lần xuất hiện của số $2$ trong dãy $10$ số, sau đó chia cho $10$ rồi nhân $100\\%$.',
    solution: 'Đếm trong dãy số liệu ta thấy số $2$ xuất hiện đúng $5$ lần.\nTỉ lệ gia đình có đúng $2$ con là:\n$$\\frac{5}{10} \\times 100\\% = 50\\%$$'
  },
  {
    id: 'ch5_l17_q11',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 11,
    title: 'Phát hiện số liệu bất thường trong chi tiêu gia đình',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thực tế', '#Kiểm toán số liệu'],
    question: 'Bảng ghi chép tỉ lệ các khoản chi tiêu trong tháng của một hộ gia đình ghi: Tiền ăn: $50\\%$; Tiền điện nước: $20\\%$; Tiền học phí: $25\\%$; Tiết kiệm: $15\\%$. Người kiểm tra phát hiện lỗi bất thường nào?',
    options: [
      'Tổng các tỉ lệ phần trăm bằng $110\\%$, vượt quá tổng thể $100\\%$ thu nhập',
      'Tiền ăn chiếm $50\\%$ là quá nhiều',
      'Tiết kiệm $15\\%$ là quá ít',
      'Không có lỗi bất thường nào'
    ],
    correctIndex: 0,
    hint: 'Cộng tất cả các phần trăm chi tiêu lại: $50\\% + 20\\% + 25\\% + 15\\% = ?$',
    solution: 'Tổng các tỉ lệ chi tiêu trong báo cáo là:\n$$50\\% + 20\\% + 25\\% + 15\\% = 110\\%$$\nVì tổng thể toàn bộ thu nhập gia đình chỉ tương ứng với đúng $100\\%$, nên tổng bằng $110\\%$ chứng tỏ số liệu đã bị ghi sai sót hoặc tính toán nhầm.'
  },
  {
    id: 'ch5_l17_q12',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 12,
    title: 'Tính số lượng tuyệt đối từ tỉ lệ phần trăm',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tỉ lệ phần trăm', '#Tính toán'],
    question: 'Khảo sát $250$ học sinh khối 7 về loại sách yêu thích thu được bảng tỉ lệ: Truyện tranh ($40\\%$), Sách khoa học ($28\\%$), Sách lịch sử ($20\\%$), Sách văn học ($12\\%$). Số học sinh thích sách khoa học nhiều hơn số học sinh thích sách lịch sử là bao nhiêu bạn?',
    options: [
      '$20$ học sinh',
      '$25$ học sinh',
      '$15$ học sinh',
      '$30$ học sinh'
    ],
    correctIndex: 0,
    hint: 'Tính chênh lệch phần trăm giữa hai loại sách: $28\\% - 20\\% = 8\\%$. Sau đó nhân với tổng số $250$ học sinh.',
    solution: 'Chênh lệch tỉ lệ giữa sách khoa học và sách lịch sử là:\n$$28\\% - 20\\% = 8\\%$$\nSố học sinh chênh lệch là:\n$$250 \\times 8\\% = 250 \\times 0,08 = 20 \\text{ (học sinh)}$$'
  },
  {
    id: 'ch5_l17_q13',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 13,
    title: 'Thiết kế câu hỏi khảo sát chuẩn mực',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Thiết kế phiếu hỏi', '#Kỹ năng'],
    question: 'Để thu thập dữ liệu về mức độ hài lòng của học sinh đối với căng-tin trường học, câu hỏi khảo sát nào sau đây là KHÁCH QUAN VÀ CHUẨN MỰC NHẤT?',
    options: [
      '"Bạn đánh giá chất lượng đồ ăn tại căng-tin ở mức nào? (Rất tốt / Tốt / Bình thường / Chưa tốt)"',
      '"Đồ ăn căng-tin trường mình rất ngon đúng không bạn?" (Câu hỏi dẫn dắt)',
      '"Tại sao bạn lại ghét đồ ăn ở căng-tin trường?" (Câu hỏi áp đặt định kiến)',
      '"Bạn có nghĩ đồ ăn căng-tin dở tệ không?"'
    ],
    correctIndex: 0,
    hint: 'Một câu hỏi khảo sát chuẩn phải trung tính, không gợi ý hay dẫn dắt câu trả lời của người được hỏi.',
    solution: 'Câu hỏi chuẩn mực trong nghiên cứu thống kê phải có giọng điệu trung tính, khách quan và cung cấp các lựa chọn cân bằng từ tích cực đến tiêu cực (Rất tốt, Tốt, Bình thường, Chưa tốt).'
  },
  {
    id: 'ch5_l17_q14',
    lessonId: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 14,
    title: 'Ứng dụng dự báo số lượng hàng bán trong hội chợ trường',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Dự báo', '#Thực tế'],
    question: 'Chi đội 7B mở gian hàng bán trà sữa tại Hội chợ xuân. Khảo sát thử $50$ học sinh ngẫu nhiên thấy có $35$ bạn muốn mua trà sữa trân châu đường đen. Nếu hội chợ dự kiến có $800$ học sinh tham gia, chi đội 7B nên chuẩn bị khoảng bao nhiêu ly trà sữa loại này?',
    options: [
      '$560$ ly',
      '$700$ ly',
      '$400$ ly',
      '$500$ ly'
    ],
    correctIndex: 0,
    hint: 'Tính tỉ lệ học sinh thích trà sữa trong mẫu thử: $\\frac{35}{50} = 70\\%$. Sau đó nhân với tổng số $800$ học sinh.',
    solution: 'Tỉ lệ học sinh muốn mua trong mẫu khảo sát là:\n$$\\frac{35}{50} = 0,7 = 70\\%$$\nƯớc tính số lượng ly trà sữa cần chuẩn bị cho $800$ học sinh là:\n$$800 \\times 70\\% = 800 \\times 0,7 = 560 \\text{ (ly)}$$'
  },

  // ==========================================================================
  // BÀI 18: BIỂU ĐỒ HÌNH QUẠT TRÒN (15 CÂU)
  // ==========================================================================

  {
    id: 'ch5_l18_q1',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 1,
    title: 'Ý nghĩa toàn bộ hình tròn trong biểu đồ quạt',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Cấu tạo biểu đồ', '#Cơ bản'],
    question: 'Trong biểu đồ hình quạt tròn, toàn bộ hình tròn biểu diễn cho bao nhiêu phần trăm của tổng thể dữ liệu?',
    options: [
      '$100\\%$ (tương ứng góc ở tâm $360^\\circ$)',
      '$50\\%$ (tương ứng góc ở tâm $180^\\circ$)',
      '$360\\%$ (tương ứng góc ở tâm $100^\\circ$)',
      '$1000\\%$'
    ],
    correctIndex: 0,
    hint: 'Toàn bộ hình tròn tượng trưng cho toàn thể $100\\%$.',
    solution: 'Toàn bộ hình tròn đại diện cho $100\\%$ của tổng thể đối tượng nghiên cứu, tương ứng với trọn vẹn góc ở tâm $360^\\circ$.'
  },
  {
    id: 'ch5_l18_q2',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 2,
    title: 'Góc ở tâm tương ứng với tỉ lệ 25%',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Góc ở tâm', '#Cơ bản'],
    question: 'Hình quạt tròn biểu diễn tỉ lệ $25\\%$ của tổng thể có số đo góc ở tâm bằng bao nhiêu độ?',
    options: [
      '$90^\\circ$ (góc vuông, chiếm $\\frac{1}{4}$ hình tròn)',
      '$45^\\circ$',
      '$25^\\circ$',
      '$180^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Vì $25\\% = \\frac{1}{4}$ nên góc ở tâm là $\\frac{360^\\circ}{4} = ?$',
    solution: 'Ta có $25\\% = \\frac{25}{100} = \\frac{1}{4}$ hình tròn.\nSố đo góc ở tâm tương ứng là:\n$$360^\\circ \\times 25\\% = 360^\\circ \\times 0,25 = 90^\\circ$$'
  },
  {
    id: 'ch5_l18_q3',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 3,
    title: 'Góc ở tâm tương ứng với tỉ lệ 50%',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Góc bẹt', '#Nửa hình tròn'],
    question: 'Hình quạt tròn biểu diễn tỉ lệ $50\\%$ của tổng thể tương ứng với hình gì?',
    options: [
      'Nửa hình tròn có góc ở tâm là góc bẹt $180^\\circ$',
      'Một góc vuông $90^\\circ$',
      'Góc nhọn $50^\\circ$',
      'Góc tù $120^\\circ$'
    ],
    correctIndex: 0,
    hint: '$50\\%$ là một nửa hình tròn ($360^\\circ : 2 = 180^\\circ$).',
    solution: 'Tỉ lệ $50\\%$ ứng với nửa hình tròn, có số đo góc ở tâm bằng:\n$$360^\\circ \\times 50\\% = 180^\\circ \\; (\\text{góc bẹt})$$'
  },
  {
    id: 'ch5_l18_q4',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 4,
    title: 'Quy tắc đổi 1% sang số đo góc ở tâm',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Công thức', '#Góc ở tâm'],
    question: 'Mỗi $1\\%$ trên biểu đồ hình quạt tròn tương ứng với góc ở tâm có số đo bằng bao nhiêu?',
    options: [
      '$3,6^\\circ$',
      '$1^\\circ$',
      '$0,36^\\circ$',
      '$36^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Toàn bộ $100\\%$ là $360^\\circ$, lấy $360^\\circ : 100 = ?$',
    solution: 'Ta có $100\\% \\leftrightarrow 360^\\circ \\implies 1\\% \\leftrightarrow \\frac{360^\\circ}{100} = 3,6^\\circ$.\nCông thức: $\\text{Góc ở tâm} = p \\times 3,6^\\circ$ (với $p$ là tỉ lệ phần trăm).'
  },
  {
    id: 'ch5_l18_q5',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 5,
    title: 'Đọc thành phần chiếm tỉ lệ lớn nhất',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đọc biểu đồ', '#Cơ bản'],
    question: 'Quan sát một biểu đồ quạt tròn về các loại quả ưa thích của học sinh có: Táo ($35\\%$), Xoài ($30\\%$), Chuối ($20\\%$), Cam ($15\\%$). Loại quả được ưa thích nhiều nhất là:',
    options: [
      'Táo ($35\\%$)',
      'Xoài ($30\\%$)',
      'Chuối ($20\\%$)',
      'Cam ($15\\%$)'
    ],
    correctIndex: 0,
    hint: 'So sánh các số liệu phần trăm và chọn giá trị lớn nhất.',
    solution: 'Táo chiếm tỉ lệ cao nhất là $35\\%$ nên là loại quả được ưa thích nhiều nhất.'
  },
  {
    id: 'ch5_l18_q6',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 6,
    title: 'Tính số lượng thực tế từ tỉ lệ phần trăm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Số lượng thực tế', '#Thông hiểu'],
    question: 'Một trường trung học có $800$ học sinh. Biểu đồ quạt tròn cho biết có $35\\%$ học sinh tham gia câu lạc bộ STEM. Số học sinh tham gia câu lạc bộ STEM của trường là:',
    options: [
      '$280$ học sinh',
      '$350$ học sinh',
      '$240$ học sinh',
      '$320$ học sinh'
    ],
    correctIndex: 0,
    hint: 'Nhân tổng số học sinh ($800$) với tỉ lệ phần trăm ($35\\%$).',
    solution: 'Số học sinh tham gia CLB STEM là:\n$$800 \\times 35\\% = 800 \\times 0,35 = 280 \\text{ (học sinh)}$$'
  },
  {
    id: 'ch5_l18_q7',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 7,
    title: 'Tìm phần trăm còn thiếu trên biểu đồ quạt tròn',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tổng 100%', '#Tìm x'],
    question: 'Biểu đồ quạt tròn biểu diễn cơ cấu các môn thể thao của lớp 7C gồm 4 môn: Bóng đá ($40\\%$), Cầu lông ($25\\%$), Bóng rổ ($15\\%$) và môn Bơi lội ($x\\%$). Giá trị của $x$ là:',
    options: [
      '$x = 20\\%$',
      '$x = 25\\%$',
      '$x = 15\\%$',
      '$x = 30\\%$'
    ],
    correctIndex: 0,
    hint: 'Tổng tỉ lệ phần trăm các thành phần trong hình tròn luôn bằng $100\\%$.',
    solution: 'Vì tổng các phần trên biểu đồ hình quạt tròn bằng $100\\%$ nên:\n$$x\\% = 100\\% - (40\\% + 25\\% + 15\\%) = 100\\% - 80\\% = 20\\%$$\nVậy $x = 20\\%$.'
  },
  {
    id: 'ch5_l18_q8',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 8,
    title: 'Tính số đo góc ở tâm tương ứng với 15%',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đổi góc ở tâm', '#Tính toán'],
    question: 'Trong biểu đồ hình quạt tròn, hình quạt biểu thị tỉ lệ $15\\%$ có số đo góc ở tâm bằng:',
    options: [
      '$54^\\circ$',
      '$15^\\circ$',
      '$30^\\circ$',
      '$45^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Áp dụng công thức: $\\text{Góc ở tâm} = 15 \\times 3,6^\\circ$.',
    solution: 'Số đo góc ở tâm tương ứng là:\n$$15 \\times 3,6^\\circ = 54^\\circ$$'
  },
  {
    id: 'ch5_l18_q9',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 9,
    title: 'Đổi từ góc ở tâm sang tỉ lệ phần trăm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Đổi phần trăm', '#Góc ở tâm'],
    question: 'Một hình quạt tròn trên biểu đồ có góc ở tâm đo được bằng $72^\\circ$. Thành phần này chiếm bao nhiêu phần trăm tổng thể?',
    options: [
      '$20\\%$',
      '$25\\%$',
      '$18\\%$',
      '$15\\%$'
    ],
    correctIndex: 0,
    hint: 'Lấy số đo góc ở tâm chia cho $360^\\circ$ rồi nhân với $100\\%$, hoặc lấy $72 : 3,6$.',
    solution: 'Tỉ lệ phần trăm tương ứng là:\n$$\\frac{72^\\circ}{360^\\circ} \\times 100\\% = \\frac{1}{5} \\times 100\\% = 20\\%$$\n(Hoặc: $72 : 3,6 = 20\\%$).'
  },
  {
    id: 'ch5_l18_q10',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 10,
    title: 'So sánh gấp bao nhiêu lần giữa hai thành phần',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#So sánh', '#Tỉ số'],
    question: 'Biểu đồ quạt tròn khảo sát loại phương tiện đi học: Xe đạp chiếm $45\\%$, Xe buýt chiếm $15\\%$. Tỉ lệ học sinh đi xe đạp gấp bao nhiêu lần tỉ lệ học sinh đi xe buýt?',
    options: [
      '$3$ lần',
      '$4$ lần',
      '$2$ lần',
      '$2,5$ lần'
    ],
    correctIndex: 0,
    hint: 'Lấy phần trăm xe đạp chia cho phần trăm xe buýt: $45\\% : 15\\% = ?$',
    solution: 'Ta có:\n$$\\frac{45\\%}{15\\%} = 3$$\nVậy tỉ lệ học sinh đi xe đạp gấp $3$ lần tỉ lệ học sinh đi xe buýt.'
  },
  {
    id: 'ch5_l18_q11',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 11,
    title: 'Tìm tổng thể khi biết số lượng của một thành phần',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tìm tổng thể', '#Vận dụng'],
    question: 'Biểu đồ quạt tròn cho biết tỉ lệ học sinh xuất sắc của một trường là $16\\%$. Biết rằng trường đó có đúng $96$ học sinh xuất sắc. Tổng số học sinh của toàn trường là:',
    options: [
      '$600$ học sinh',
      '$800$ học sinh',
      '$500$ học sinh',
      '$640$ học sinh'
    ],
    correctIndex: 0,
    hint: 'Tìm một số khi biết giá trị phần trăm của nó: $\\text{Tổng} = \\frac{\\text{Số lượng}}{p\\%} = 96 : 16\\%$.',
    solution: 'Tổng số học sinh toàn trường là:\n$$96 : 16\\% = 96 : 0,16 = 600 \\text{ (học sinh)}$$'
  },
  {
    id: 'ch5_l18_q12',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 12,
    title: 'Chuyển dữ liệu bảng số lượng sang góc ở tâm',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Vẽ biểu đồ', '#Góc ở tâm'],
    question: 'Một lớp học có $40$ học sinh, trong đó có $14$ bạn xếp loại Tốt. Khi biểu diễn dữ liệu này lên biểu đồ hình quạt tròn, góc ở tâm của hình quạt biểu thị loại Tốt bằng:',
    options: [
      '$126^\\circ$',
      '$140^\\circ$',
      '$108^\\circ$',
      '$90^\\circ$'
    ],
    correctIndex: 0,
    hint: 'Tính tỉ lệ phần trăm của loại Tốt: $\\frac{14}{40} = 35\\%$. Sau đó tính góc ở tâm: $35 \\times 3,6^\\circ$.',
    solution: 'Tỉ lệ học sinh loại Tốt trong lớp là:\n$$\\frac{14}{40} = 0,35 = 35\\%$$\nGóc ở tâm tương ứng là:\n$$35 \\times 3,6^\\circ = 126^\\circ$$'
  },
  {
    id: 'ch5_l18_q13',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 13,
    title: 'Phân tích tài chính gia đình từ biểu đồ quạt',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tài chính', '#Thực tế'],
    question: 'Thu nhập hàng tháng của gia đình bác Hùng là $24$ triệu đồng. Biểu đồ chi tiêu của gia đình gồm: Tiền ăn uống ($40\\%$), Tiền học tập cho con ($25\\%$), Tiết kiệm ($20\\%$), Chi tiêu khác ($15\\%$). Số tiền gia đình bác Hùng dành để tiết kiệm mỗi tháng là:',
    options: [
      '$4,8$ triệu đồng',
      '$6$ triệu đồng',
      '$3,6$ triệu đồng',
      '$5,2$ triệu đồng'
    ],
    correctIndex: 0,
    hint: 'Lấy thu nhập $24$ triệu nhân với tỉ lệ tiết kiệm $20\\%$.',
    solution: 'Số tiền gia đình tiết kiệm được mỗi tháng là:\n$$24 \\times 20\\% = 24 \\times 0,2 = 4,8 \\text{ (triệu đồng)}$$'
  },
  {
    id: 'ch5_l18_q14',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 14,
    title: 'Phát hiện lỗi sai cấu trúc hình quạt tròn',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Phát hiện lỗi', '#Vận dụng'],
    question: 'Bạn Mai vẽ một biểu đồ hình quạt tròn gồm 3 múi: Múi A ($45\\%$), Múi B ($35\\%$), Múi C ($25\\%$). Bạn Nam nhìn thấy liền bảo biểu đồ này chắc chắn bị vẽ sai. Lý do bạn Nam đưa ra là:',
    options: [
      'Tổng tỉ lệ phần trăm của 3 múi là $45\\% + 35\\% + 25\\% = 105\\% > 100\\%$ (vi phạm tính toàn vẹn của hình tròn)',
      'Vì múi B không được có số lẻ $35\\%$',
      'Vì biểu đồ bắt buộc phải có ít nhất 4 múi',
      'Vì góc của múi A quá nhỏ'
    ],
    correctIndex: 0,
    hint: 'Cộng tất cả các phần trăm lại xem có bằng đúng $100\\%$ không.',
    solution: 'Toàn bộ hình tròn chỉ đại diện cho $100\\%$. Tổng các tỉ lệ trong biểu đồ của Mai là $45\\% + 35\\% + 25\\% = 105\\% > 100\\%$ nên biểu đồ này sai sót nghiêm trọng về mặt toán học.'
  },
  {
    id: 'ch5_l18_q15',
    lessonId: 'bai_18_bieu_do_hinh_quat_tron',
    order: 15,
    title: 'Ứng dụng thực tế: Cơ cấu nguồn phát điện Việt Nam',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Năng lượng', '#Thực tế'],
    question: 'Biểu đồ cơ cấu sản lượng điện năm 2024 của một tỉnh gồm: Thủy điện ($40\\%$), Nhiệt điện than ($35\\%$), Năng lượng tái tạo (điện gió, mặt trời) ($25\\%$). Biết tổng sản lượng điện đạt $12$ tỉ kWh. Sản lượng điện sạch từ Năng lượng tái tạo đạt bao nhiêu tỉ kWh?',
    options: [
      '$3$ tỉ kWh',
      '$4,8$ tỉ kWh',
      '$4,2$ tỉ kWh',
      '$2,5$ tỉ kWh'
    ],
    correctIndex: 0,
    hint: 'Lấy tổng sản lượng $12$ tỉ nhân với tỉ lệ năng lượng tái tạo $25\\%$.',
    solution: 'Sản lượng điện từ năng lượng tái tạo là:\n$$12 \\times 25\\% = 12 \\times 0,25 = 3 \\text{ (tỉ kWh)}$$'
  },

  // ==========================================================================
  // BÀI 19: BIỂU ĐỒ ĐOẠN THẲNG & LUYỆN TẬP CHUNG (14 CÂU)
  // ==========================================================================

  {
    id: 'ch5_l19_q1',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 1,
    title: 'Cấu tạo các trục của biểu đồ đoạn thẳng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Biểu đồ đoạn thẳng', '#Cơ bản'],
    question: 'Trong biểu đồ đoạn thẳng, trục nằm ngang (trục hoành) và trục thẳng đứng (trục tung) thường lần lượt biểu diễn những thông tin gì?',
    options: [
      'Trục ngang biểu diễn các mốc thời gian; Trục đứng biểu diễn giá trị của đại lượng theo đơn vị đo',
      'Trục ngang biểu diễn tên người; Trục đứng biểu diễn màu sắc',
      'Trục ngang biểu diễn phần trăm $100\\%$; Trục đứng biểu diễn góc ở tâm',
      'Hai trục có vai trò hoàn toàn hoán đổi không theo quy chuẩn'
    ],
    correctIndex: 0,
    hint: 'Biểu đồ đoạn thẳng theo dõi sự biến đổi theo thời gian (ngày, tháng, năm).',
    solution: 'Theo quy chuẩn thống kê, trục nằm ngang luôn biểu diễn các mốc thời gian liên tục (tháng, năm, giờ...), còn trục thẳng đứng biểu diễn giá trị của đại lượng nghiên cứu theo đơn vị đo lường tương ứng.'
  },
  {
    id: 'ch5_l19_q2',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 2,
    title: 'Nhận biết xu hướng tăng trên biểu đồ đoạn thẳng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Xu hướng tăng', '#Cơ bản'],
    question: 'Trên biểu đồ đoạn thẳng, một đoạn thẳng có hướng đi lên từ trái sang phải biểu thị điều gì?',
    options: [
      'Đại lượng có xu hướng tăng qua giai đoạn thời gian đó',
      'Đại lượng có xu hướng giảm sút',
      'Đại lượng không thay đổi',
      'Dữ liệu bị mất giá trị'
    ],
    correctIndex: 0,
    hint: 'Nhìn từ trái sang phải: đường đi lên nghĩa là giá trị sau lớn hơn giá trị trước.',
    solution: 'Đoạn thẳng đi lên từ trái sang phải cho biết giá trị tại mốc sau lớn hơn mốc trước, thể hiện xu hướng tăng.'
  },
  {
    id: 'ch5_l19_q3',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 3,
    title: 'Nhận biết xu hướng giảm trên biểu đồ đoạn thẳng',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Xu hướng giảm', '#Cơ bản'],
    question: 'Trên biểu đồ đoạn thẳng theo dõi nhiệt độ, đoạn thẳng nối từ mốc 14 giờ đến 18 giờ dốc xuống từ trái sang phải. Điều này phản ánh:',
    options: [
      'Nhiệt độ đang giảm dần trong khoảng thời gian từ 14h đến 18h',
      'Nhiệt độ đang tăng cao',
      'Nhiệt độ giữ nguyên không đổi',
      'Trời bắt đầu có tuyết rơi'
    ],
    correctIndex: 0,
    hint: 'Đường dốc xuống nghĩa là giá trị đại lượng bị sụt giảm theo thời gian.',
    solution: 'Đoạn thẳng dốc xuống từ trái sang phải phản ánh nhiệt độ đang giảm dần theo chiều thời gian.'
  },
  {
    id: 'ch5_l19_q4',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 4,
    title: 'Ý nghĩa của đoạn thẳng nằm ngang',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Nằm ngang', '#Ổn định'],
    question: 'Khi theo dõi cân nặng của một bạn nhỏ qua các năm, đoạn thẳng nối từ mốc 10 tuổi đến 11 tuổi nằm ngang song song với trục thời gian. Ý nghĩa là:',
    options: [
      'Cân nặng của bạn nhỏ giữ nguyên (không thay đổi) giữa năm 10 tuổi và 11 tuổi',
      'Bạn nhỏ bị sụt cân nghiêm trọng',
      'Cân nặng tăng vọt gấp đôi',
      'Số liệu bị bỏ trống không đo'
    ],
    correctIndex: 0,
    hint: 'Đoạn nằm ngang nghĩa là hai điểm có cùng độ cao trên trục tung (giá trị bằng nhau).',
    solution: 'Đoạn thẳng nằm ngang biểu thị giá trị đại lượng không thay đổi (giữ nguyên mức ổn định) giữa hai mốc thời gian khảo sát.'
  },
  {
    id: 'ch5_l19_q5',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 5,
    title: 'Đọc giá trị mốc thời gian cụ thể',
    level: 'co_ban',
    difficulty: 'co_ban',
    tags: ['#Đọc biểu đồ', '#Cơ bản'],
    question: 'Biểu đồ đoạn thẳng ghi nhận điểm số của bạn Hưng qua 4 bài kiểm tra: Bài 1 ($7$ điểm), Bài 2 ($8$ điểm), Bài 3 ($6$ điểm), Bài 4 ($9$ điểm). Bài kiểm tra nào Hưng đạt điểm cao nhất và điểm thấp nhất?',
    options: [
      'Cao nhất là Bài 4 ($9$ điểm), Thấp nhất là Bài 3 ($6$ điểm)',
      'Cao nhất là Bài 2 ($8$ điểm), Thấp nhất là Bài 1 ($7$ điểm)',
      'Cao nhất là Bài 1, Thấp nhất là Bài 4',
      'Cả 4 bài điểm bằng nhau'
    ],
    correctIndex: 0,
    hint: 'Tìm điểm cao nhất (đỉnh cao nhất) và điểm thấp nhất (đáy sâu nhất) trên đồ thị.',
    solution: 'Điểm cao nhất là Bài 4 ($9$ điểm), điểm thấp nhất là Bài 3 ($6$ điểm).'
  },
  {
    id: 'ch5_l19_q6',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 6,
    title: 'Xác định khoảng thời gian tăng mạnh nhất',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tăng mạnh nhất', '#Độ dốc'],
    question: 'Biểu đồ doanh thu một cửa hàng trong 4 quý: Quý 1 ($100$ triệu), Quý 2 ($120$ triệu), Quý 3 ($130$ triệu), Quý 4 ($180$ triệu). Giai đoạn nào doanh thu tăng mạnh nhất?',
    options: [
      'Từ Quý 3 đến Quý 4 (tăng $50$ triệu, đoạn thẳng dốc nhất)',
      'Từ Quý 1 đến Quý 2 (tăng $20$ triệu)',
      'Từ Quý 2 đến Quý 3 (tăng $10$ triệu)',
      'Doanh thu tăng đều như nhau qua các quý'
    ],
    correctIndex: 0,
    hint: 'Tính mức tăng ở từng giai đoạn: Quý 1-2: $+20$; Quý 2-3: $+10$; Quý 3-4: $+50$.',
    solution: 'Mức tăng giữa các quý:\n- Q1 $\\to$ Q2: $120 - 100 = 20$ triệu.\n- Q2 $\\to$ Q3: $130 - 120 = 10$ triệu.\n- Q3 $\\to$ Q4: $180 - 130 = 50$ triệu.\nDo đó giai đoạn từ Quý 3 sang Quý 4 có mức tăng lớn nhất ($50$ triệu) tương ứng với độ dốc đứng nhất.'
  },
  {
    id: 'ch5_l19_q7',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 7,
    title: 'Tính mức tăng trưởng tuyệt đối giữa hai năm',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tăng trưởng', '#Tính toán'],
    question: 'Biểu đồ đoạn thẳng số lượng học sinh đạt giải quốc tế của Việt Nam: Năm 2021 ($24$ giải), Năm 2024 ($38$ giải). Số giải đạt được năm 2024 tăng thêm bao nhiêu giải so với năm 2021?',
    options: [
      '$14$ giải',
      '$12$ giải',
      '$16$ giải',
      '$10$ giải'
    ],
    correctIndex: 0,
    hint: 'Lấy số giải năm 2024 trừ đi số giải năm 2021: $38 - 24 = ?$',
    solution: 'Số giải năm 2024 tăng thêm so với năm 2021 là:\n$$38 - 24 = 14 \\text{ (giải)}$$'
  },
  {
    id: 'ch5_l19_q8',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 8,
    title: 'Tính tỉ lệ phần trăm tăng trưởng',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Tỉ lệ tăng trưởng', '#Thông hiểu'],
    question: 'Biểu đồ đoạn thẳng ghi nhận giá trị xuất khẩu hạt điều tháng 1 là $200$ triệu USD, tháng 2 là $250$ triệu USD. Tỉ lệ tăng trưởng của kim ngạch xuất khẩu hạt điều từ tháng 1 sang tháng 2 là:',
    options: [
      '$25\\%$',
      '$20\\%$',
      '$50\\%$',
      '$125\\%$'
    ],
    correctIndex: 0,
    hint: 'Tốc độ tăng trưởng = $\\frac{\\text{Mức tăng}}{\\text{Giá trị gốc}} \\times 100\\% = \\frac{250 - 200}{200} \\times 100\\%$.',
    solution: 'Mức tăng tuyệt đối là $250 - 200 = 50$ triệu USD.\nTỉ lệ tăng trưởng là:\n$$\\frac{50}{200} \\times 100\\% = 25\\%$$'
  },
  {
    id: 'ch5_l19_q9',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 9,
    title: 'Lựa chọn biểu đồ thích hợp theo mục đích trình bày',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Chọn biểu đồ', '#Tổng hợp'],
    question: 'Để biểu diễn sự thay đổi của dân số Việt Nam qua các cuộc tổng điều tra năm 1989, 1999, 2009, 2019, 2024, ta nên chọn loại biểu đồ nào là thích hợp nhất?',
    options: [
      'Biểu đồ đoạn thẳng',
      'Biểu đồ hình quạt tròn',
      'Biểu đồ tranh',
      'Sơ đồ mạng nhện'
    ],
    correctIndex: 0,
    hint: 'Dữ liệu thể hiện sự biến thiên liên tục theo các mốc thời gian cách nhau qua các năm.',
    solution: 'Biểu đồ đoạn thẳng chuyên dùng để theo dõi sự biến đổi và xu hướng phát triển của dữ liệu theo chuỗi thời gian.'
  },
  {
    id: 'ch5_l19_q10',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 10,
    title: 'Khi nào nên dùng biểu đồ cột thay vì đoạn thẳng?',
    level: 'thong_hieu',
    difficulty: 'thong_hieu',
    tags: ['#Biểu đồ cột', '#Phân biệt'],
    question: 'Trong trường hợp nào dưới đây thì BIỂU ĐỒ CỘT thích hợp hơn biểu đồ đoạn thẳng?',
    options: [
      'So sánh diện tích tự nhiên của $5$ thành phố trực thuộc Trung ương (Hà Nội, Hải Phòng, Đà Nẵng, TP.HCM, Cần Thơ)',
      'Theo dõi nhịp tim của bệnh nhân từ 8 giờ đến 12 giờ',
      'Theo dõi biến động giá vàng trong tuần',
      'Theo dõi chiều cao của cây ngô gieo sau mỗi ngày'
    ],
    correctIndex: 0,
    hint: '5 thành phố là các đối tượng độc lập, không có quan hệ tiếp nối theo thời gian.',
    solution: 'Diện tích 5 thành phố là các đại lượng riêng biệt độc lập không theo trình tự thời gian, do đó biểu đồ cột là lựa chọn tối ưu để so sánh độ cao/thấp.'
  },
  {
    id: 'ch5_l19_q11',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 11,
    title: 'Phân tích biểu đồ đoạn thẳng kép so sánh hai đại lượng',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Biểu đồ kép', '#Vận dụng'],
    question: 'Một biểu đồ đoạn thẳng kép theo dõi nhiệt độ cao nhất và thấp nhất trong ngày tại Sa Pa: Thứ Hai ($18^\\circ\\text{C}$ và $8^\\circ\\text{C}$), Thứ Ba ($20^\\circ\\text{C}$ và $12^\\circ\\text{C}$), Thứ Tư ($15^\\circ\\text{C}$ và $10^\\circ\\text{C}$). Biên độ chênh lệch nhiệt độ trong ngày lớn nhất vào ngày nào?',
    options: [
      'Thứ Hai (chênh lệch $18 - 8 = 10^\\circ\\text{C}$)',
      'Thứ Ba (chênh lệch $20 - 12 = 8^\\circ\\text{C}$)',
      'Thứ Tư (chênh lệch $15 - 10 = 5^\\circ\\text{C}$)',
      'Cả ba ngày có biên độ chênh lệch như nhau'
    ],
    correctIndex: 0,
    hint: 'Tính biên độ nhiệt = Nhiệt độ cao nhất trừ Nhiệt độ thấp nhất của từng ngày.',
    solution: 'Biên độ nhiệt từng ngày:\n- Thứ Hai: $18 - 8 = 10^\\circ\\text{C}$.\n- Thứ Ba: $20 - 12 = 8^\\circ\\text{C}$.\n- Thứ Tư: $15 - 10 = 5^\\circ\\text{C}$.\nVậy ngày Thứ Hai có khoảng cách giữa hai đường biểu diễn lớn nhất ($10^\\circ\\text{C}$).'
  },
  {
    id: 'ch5_l19_q12',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 12,
    title: 'Phát hiện điểm bất thường từ độ dốc đột biến',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Điểm bất thường', '#Thực tế'],
    question: 'Biểu đồ lượng khách du lịch đến một thành phố biển các tháng trong năm ghi nhận: T4 ($50.000$ khách), T5 ($80.000$ khách), T6 ($120.000$ khách), T7 ($15.000$ khách), T8 ($110.000$ khách). Điểm dữ liệu tháng 7 bất thường giảm sâu có thể bắt nguồn từ lý do thực tế nào?',
    options: [
      'Tháng 7 thành phố gặp phải đợt bão lũ lớn kéo dài khiến du khách hủy chuyến',
      'Do tháng 7 là mùa cao điểm nghỉ hè',
      'Do trục tung biểu đồ bị in hoa',
      'Do khách du lịch thích tắm biển mùa bão'
    ],
    correctIndex: 0,
    hint: 'Một điểm sụt giảm đột ngột trong chuỗi thời gian thường phản ánh sự cố thiên tai, dịch bệnh hoặc biến động bất thường ngoài thực tế.',
    solution: 'Lượng khách tháng 7 giảm bất thường từ $120.000$ xuống còn $15.000$ (trong khi tháng 6 và tháng 8 đều trên $100.000$) phản ánh sự cố đột xuất trong thực tế như bão biển hoặc thiên tai khiến việc du lịch bị đình trệ.'
  },
  {
    id: 'ch5_l19_q13',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 13,
    title: 'Dự đoán giá trị tương lai theo xu thế đường nối',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Dự đoán', '#Xu thế'],
    question: 'Số lượng cây xanh trồng được của một trường học tăng đều đặn qua các năm: Năm 2021 ($50$ cây), Năm 2022 ($70$ cây), Năm 2023 ($90$ cây), Năm 2024 ($110$ cây). Nếu xu hướng tăng đều này tiếp tục duy trì, dự đoán số cây trồng được trong năm 2025 là:',
    options: [
      '$130$ cây',
      '$120$ cây',
      '$150$ cây',
      '$140$ cây'
    ],
    correctIndex: 0,
    hint: 'Nhận xét quy luật mỗi năm số cây trồng tăng thêm $20$ cây ($70 - 50 = 90 - 70 = 20$).',
    solution: 'Ta thấy qua mỗi năm, số lượng cây trồng tăng đều đặn $20$ cây.\nDo đó dự đoán số cây trồng trong năm 2025 là:\n$$110 + 20 = 130 \\text{ (cây)}$$'
  },
  {
    id: 'ch5_l19_q14',
    lessonId: 'bai_19_bieu_do_doan_thang',
    order: 14,
    title: 'Tổng kết Chương V: Ghép nối biểu đồ đúng nhu cầu đời sống',
    level: 'van_dung',
    difficulty: 'van_dung',
    tags: ['#Tổng kết chương', '#Bí quyết biểu đồ'],
    question: 'Ghép cặp loại biểu đồ (1 - Biểu đồ cột; 2 - Biểu đồ quạt tròn; 3 - Biểu đồ đoạn thẳng) với mục đích trực quan phù hợp nhất:\n(a) Thể hiện cơ cấu tỉ lệ phần trăm các thành phần trong toàn thể $100\\%$.\n(b) Theo dõi xu hướng tăng giảm của đại lượng qua chuỗi thời gian.\n(c) So sánh số lượng giữa các đối tượng độc lập.',
    options: [
      '1 - c; 2 - a; 3 - b',
      '1 - a; 2 - b; 3 - c',
      '1 - b; 2 - c; 3 - a',
      '1 - c; 2 - b; 3 - a'
    ],
    correctIndex: 0,
    hint: 'Cột: So sánh số liệu độc lập (c). Quạt tròn: Tỉ lệ phần trăm toàn phần (a). Đoạn thẳng: Xu hướng theo thời gian (b).',
    solution: 'Quy tắc vàng trực quan hóa dữ liệu thống kê:\n- Biểu đồ cột: So sánh số liệu giữa các đối tượng độc lập (1 - c).\n- Biểu đồ quạt tròn: Thể hiện cơ cấu tỉ lệ phần trăm các thành phần trong tổng thể $100\\%$ (2 - a).\n- Biểu đồ đoạn thẳng: Theo dõi xu hướng tăng giảm theo thời gian (3 - b).'
  }
];

export default chapter5Exercises;
