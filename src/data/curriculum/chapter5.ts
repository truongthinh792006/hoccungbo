import { Math7Lesson } from '../../types/curriculum';

export const chapter5Lessons: Math7Lesson[] = [
  // ==========================================================================
  // BÀI 17: THU THẬP VÀ PHÂN LOẠI DỮ LIỆU
  // ==========================================================================
  {
    id: 'bai_17_thu_thap_va_phan_loai_du_lieu',
    order: 20,
    chapterId: 'chuong_5_thu_thap_va_bieu_dien_du_lieu',
    chapterTitle: 'Chương V: Thu Thập và Biểu Diễn Dữ Liệu',
    unit: 'Chương V: Thu thập và biểu diễn dữ liệu',
    term: 2,
    title: 'Bài 17: Thu thập và phân loại dữ liệu',
    subtitle: 'Phương pháp thu thập dữ liệu thống kê, phân loại dữ liệu định tính và định lượng',
    status: 'in_progress',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-17-1',
        level: 'nhan_biet',
        code: 'KNTT-T17-01',
        description: 'Nhận biết các phương pháp thu thập dữ liệu: trực tiếp (quan sát, phỏng vấn, làm thí nghiệm) và gián tiếp (qua sách báo, internet).',
        mastered: true
      },
      {
        id: 'lt-17-2',
        level: 'nhan_biet',
        code: 'KNTT-T17-02',
        description: 'Phân loại được dữ liệu thành dữ liệu định tính (chữ, danh mục) và dữ liệu định lượng (số đo, đếm được).',
        mastered: true
      },
      {
        id: 'lt-17-3',
        level: 'thong_hieu',
        code: 'KNTT-T17-03',
        description: 'Đánh giá tính hợp lí của dữ liệu thống kê dựa trên tiêu chí logic thực tế (không âm, không vượt quá tổng thể, đúng định dạng).',
        mastered: false
      },
      {
        id: 'lt-17-4',
        level: 'van_dung',
        code: 'KNTT-T17-04',
        description: 'Thiết kế phiếu khảo sát ngắn và bảng thống kê số liệu thực tế tại trường học hoặc gia đình.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c17-1',
        title: 'Các phương pháp thu thập dữ liệu thống kê',
        summary: 'Có hai cách chính để thu thập dữ liệu: thu thập trực tiếp (lập phiếu hỏi, đo đạc, phỏng vấn, quan sát) hoặc thu thập gián tiếp (tổng hợp từ bảng biểu có sẵn, sách báo, trang web uy tín).',
        exampleSnippet: 'Khảo sát chiều cao các bạn trong tổ: dùng thước dây đo trực tiếp từng bạn. Thu thập dân số các nước Đông Nam Á: tra cứu số liệu gián tiếp từ Niên giám thống kê.',
        pitfallWarning: 'Thu thập gián tiếp từ Internet cần chọn nguồn chính thống (Tổng cục Thống kê, Bộ GD&ĐT), tránh lấy nguồn từ mạng xã hội không kiểm chứng.',
        realLifeApplication: 'Ứng dụng trong việc làm bảng theo dõi cân nặng - chiều cao định kỳ của học sinh để phòng chống cận thị và vẹo cột sống.'
      },
      {
        id: 'c17-2',
        title: 'Phân loại dữ liệu: Định tính và Định lượng',
        summary: 'Dữ liệu gồm hai loại chính:\n- Dữ liệu định tính: thể hiện bằng chữ hoặc kí hiệu, không đo đếm được (xếp loại học lực, màu sắc yêu thích, giới tính).\n- Dữ liệu định lượng: thể hiện bằng số thực, đo đếm và tính toán được (điểm số, số con, nhiệt độ, chiều cao).',
        latexFormula: '\\text{Dữ liệu} = \\begin{cases} \\text{Định tính: } \\text{Tên, xếp loại, cảm xúc...} \\\\ \\text{Định lượng: } \\text{Số đếm (nguyên), số đo (thực)...} \\end{cases}',
        exampleSnippet: '- Định tính: Danh sách các môn thể thao yêu thích: {Bóng đá, Cầu lông, Bơi lội}.\n- Định lượng: Số bàn thắng mỗi trận: {2, 0, 1, 3, 4}.',
        pitfallWarning: 'Số điện thoại hay số áo cầu thủ tuy viết bằng chữ số nhưng là DỮ LIỆU ĐỊNH TÍNH (chỉ mang ý nghĩa định danh, không thể cộng trừ hay tính trung bình).',
        realLifeApplication: 'Các sàn thương mại điện tử phân loại đánh giá khách hàng: 5 sao (định lượng) và nhận xét chi tiết (định tính).'
      },
      {
        id: 'c17-3',
        title: 'Tính hợp lí của dữ liệu thống kê',
        summary: 'Dữ liệu thống kê phải đảm bảo tính hợp lí: đúng phạm vi giá trị thực tế, tổng các thành phần không vượt quá 100%, không xuất hiện số âm cho các đại lượng đo đạc kích thước hay số lượng người.',
        exampleSnippet: 'Nếu điều tra sĩ số 40 học sinh mà số bạn thích trà sữa là 25 và số bạn không thích là 20 (tổng $25 + 20 = 45 > 40$) thì số liệu không hợp lí.',
        pitfallWarning: 'Cần phân biệt giữa khảo sát chọn 1 đáp án duy nhất (tổng bằng 100%) và khảo sát cho phép chọn nhiều đáp án cùng lúc.',
        realLifeApplication: 'Kế toán kiểm toán soát lỗi báo cáo chi tiêu gia đình khi phát hiện mục chi tiêu có giá trị âm hoặc vượt tổng thu nhập.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q17-1',
        tier: 'nhan_biet',
        question: 'Dãy dữ liệu nào sau đây là dữ liệu định lượng (dữ liệu số)?',
        options: [
          { id: 'opt-17-1a', text: 'Cân nặng (kg) của 5 bạn học sinh: 42; 45; 38; 50; 47', isCorrect: true },
          { id: 'opt-17-1b', text: 'Màu áo đồng phục: Trắng, Xanh dương, Vàng', isCorrect: false },
          { id: 'opt-17-1c', text: 'Xếp loại hạnh kiểm: Tốt, Khá, Đạt', isCorrect: false },
          { id: 'opt-17-1d', text: 'Nơi sinh của các thành viên: Hà Nội, Đà Nẵng, Cần Thơ', isCorrect: false }
        ],
        correctAnswerId: 'opt-17-1a',
        progressiveHints: [
          'Dữ liệu định lượng là dữ liệu biểu diễn bằng số đếm hoặc số đo có thể tính toán được.',
          'Xem dãy nào chứa các con số đo lường khối lượng.'
        ],
        explanation: 'Cân nặng biểu diễn bằng các con số thực (42, 45, 38...) nên là dữ liệu định lượng. Các dãy còn lại đều là chữ/danh mục (dữ liệu định tính).',
        competencyRef: 'KNTT-T17-02',
        points: 25
      },
      {
        id: 'q17-2',
        tier: 'nhan_biet',
        question: 'Để biết số dân của các tỉnh thành Việt Nam năm 2025, ta nên chọn cách thu thập nào là tối ưu nhất?',
        options: [
          { id: 'opt-17-2a', text: 'Tự đi đến từng nhà của mọi tỉnh thành để đếm trực tiếp', isCorrect: false },
          { id: 'opt-17-2b', text: 'Thu thập gián tiếp từ Cổng thông tin Tổng cục Thống kê', isCorrect: true },
          { id: 'opt-17-2c', text: 'Lập phiếu hỏi các bạn trong lớp rồi nhân lên', isCorrect: false },
          { id: 'opt-17-2d', text: 'Ước lượng ngẫu nhiên theo trực giác', isCorrect: false }
        ],
        correctAnswerId: 'opt-17-2b',
        progressiveHints: [
          'Số dân cả nước là dữ liệu quy mô toàn quốc, một cá nhân không thể tự đi khảo sát trực tiếp.',
          'Các cơ quan quản lý nhà nước luôn công bố báo cáo thống kê chính thức.'
        ],
        explanation: 'Thu thập gián tiếp từ cơ quan thống kê chính thống là phương án chính xác, tiết kiệm thời gian và có độ tin cậy cao nhất.',
        competencyRef: 'KNTT-T17-01',
        points: 25
      },
      {
        id: 'q17-3',
        tier: 'thong_hieu',
        question: 'Bạn Minh ghi lại điểm kiểm tra 15 phút Toán của tổ mình như sau: 7; 8; 10; -2; 9; 8. Số liệu nào không hợp lí?',
        options: [
          { id: 'opt-17-3a', text: 'Điểm 10', isCorrect: false },
          { id: 'opt-17-3b', text: 'Điểm -2', isCorrect: true },
          { id: 'opt-17-3c', text: 'Điểm 8', isCorrect: false },
          { id: 'opt-17-3d', text: 'Tất cả điểm số đều hợp lí', isCorrect: false }
        ],
        correctAnswerId: 'opt-17-3b',
        progressiveHints: [
          'Thang điểm kiểm tra học sinh Việt Nam theo quy chế từ 0 đến 10.',
          'Điểm thi có thể mang giá trị âm được không?'
        ],
        explanation: 'Điểm số trong thang điểm giáo dục Việt Nam chỉ nhận giá trị từ $0$ đến $10$, không thể có điểm âm ($-2$).',
        competencyRef: 'KNTT-T17-03',
        points: 25
      },
      {
        id: 'q17-4',
        tier: 'van_dung',
        question: 'Khảo sát 40 học sinh lớp 7A về phương tiện đến trường, bạn Lan ghi nhận: Xe đạp: 22 bạn, Đi bộ: 12 bạn, Xe buýt: 8 bạn, Bố mẹ chở: 5 bạn (mỗi bạn chọn đúng 1 phương tiện). Dữ liệu này có hợp lí không?',
        options: [
          { id: 'opt-17-4a', text: 'Hợp lí vì số bạn ở mỗi nhóm đều là số nguyên dương', isCorrect: false },
          { id: 'opt-17-4b', text: 'Không hợp lí vì tổng số bạn là 47, vượt quá sĩ số 40 học sinh', isCorrect: true },
          { id: 'opt-17-4c', text: 'Hợp lí vì số bạn đi xe đạp là nhiều nhất', isCorrect: false },
          { id: 'opt-17-4d', text: 'Không hợp lí vì không có bạn nào đi tàu điện', isCorrect: false }
        ],
        correctAnswerId: 'opt-17-4b',
        progressiveHints: [
          'Mỗi bạn chỉ chọn một phương tiện, hãy cộng tổng số học sinh ở 4 phương tiện lại.',
          'So sánh tổng đó với sĩ số ban đầu là 40 bạn.'
        ],
        explanation: 'Tổng số học sinh điều tra là $22 + 12 + 8 + 5 = 47$ bạn, lớn hơn sĩ số lớp là $40$. Do đó dữ liệu không hợp lí.',
        competencyRef: 'KNTT-T17-04',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-17-1',
        prompt: 'Bố hỏi con: Số áo cầu thủ hay số điện thoại của mẹ là dữ liệu định tính hay định lượng? Tại sao?',
        contextForParent: 'Kiểm tra xem con có hiểu bản chất của dữ liệu định lượng không (phải tính toán cộng trừ được), hay chỉ nhìn thấy chữ số là đoán định lượng.',
        suggestedAnswerTip: 'Là dữ liệu định tính, vì các con số này chỉ dùng để định danh/gọi tên, không thể đem cộng trừ hay tính trung bình.',
        sampleChildResponse: 'Là định tính ạ! Vì số điện thoại chỉ để liên lạc chứ không ai lấy số điện thoại của mẹ cộng số điện thoại của bố ra số khác!'
      },
      {
        id: 'dp-17-2',
        prompt: 'Bố hỏi con: Khi lớp con bầu ban cán sự hoặc chọn địa điểm đi dã ngoại, các bạn thu thập ý kiến bằng cách nào?',
        contextForParent: 'Giúp con liên hệ phương pháp thu thập dữ liệu trực tiếp trong đời sống lớp học.',
        suggestedAnswerTip: 'Bỏ phiếu kín hoặc biểu quyết giơ tay (thu thập dữ liệu trực tiếp bằng quan sát/phiếu hỏi).',
        sampleChildResponse: 'Lớp con biểu quyết giơ tay trực tiếp rồi bạn lớp trưởng đếm và ghi vào bảng trên bảng ạ.'
      },
      {
        id: 'dp-17-3',
        prompt: 'Bố hỏi con: Nếu xem một bảng thống kê chi tiêu tháng của gia đình mà tổng số tiền các khoản nhỏ lại lớn hơn tổng tiền lương của bố mẹ thì chuyện gì xảy ra?',
        contextForParent: 'Thảo luận về tính hợp lí và logic của số liệu thực tế.',
        suggestedAnswerTip: 'Số liệu ghi chép bị sai sót hoặc gia đình đang chi tiêu thâm hụt (phải rút tiết kiệm hoặc vay mượn).',
        sampleChildResponse: 'Số liệu đó bị bất hợp lí hoặc gia đình mình đang bị âm tiền tháng đó rồi bố ạ!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 18: BIỂU ĐỒ HÌNH QUẠT TRÒN
  // ==========================================================================
  {
    id: 'bai_18_bieu_do_hinh_quat_tron',
    order: 21,
    chapterId: 'chuong_5_thu_thap_va_bieu_dien_du_lieu',
    chapterTitle: 'Chương V: Thu Thập và Biểu Diễn Dữ Liệu',
    unit: 'Chương V: Thu thập và biểu diễn dữ liệu',
    term: 2,
    title: 'Bài 18: Biểu đồ hình quạt tròn',
    subtitle: 'Đọc, phân tích tỉ lệ phần trăm và vẽ biểu đồ hình quạt tròn thể hiện cơ cấu',
    status: 'locked',
    estimatedMinutes: 50,
    learningTargets: [
      {
        id: 'lt-18-1',
        level: 'nhan_biet',
        code: 'KNTT-T18-01',
        description: 'Nhận biết cấu tạo biểu đồ hình quạt tròn: hình tròn đại diện cho $100\\%$, mỗi hình quạt biểu diễn tỉ lệ phần trăm của một thành phần.',
        mastered: true
      },
      {
        id: 'lt-18-2',
        level: 'thong_hieu',
        code: 'KNTT-T18-02',
        description: 'Đọc và trích xuất thông tin từ biểu đồ hình quạt tròn để so sánh thành phần nào chiếm tỉ lệ cao nhất, thấp nhất.',
        mastered: false
      },
      {
        id: 'lt-18-3',
        level: 'van_dung',
        code: 'KNTT-T18-03',
        description: 'Tính toán giá trị thực tế tương ứng với phần trăm từ tổng thể (hoặc ngược lại) từ dữ liệu trên biểu đồ.',
        mastered: false
      },
      {
        id: 'lt-18-4',
        level: 'van_dung_cao',
        code: 'KNTT-T18-04',
        description: 'Chuyển đổi dữ liệu bảng thành tỉ lệ góc ở tâm để vẽ hoặc phác thảo biểu đồ quạt ($1\\% \\leftrightarrow 3,6^\\circ$).',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c18-1',
        title: 'Cấu tạo và ý nghĩa của Biểu đồ hình quạt tròn',
        summary: 'Biểu đồ hình quạt tròn dùng để so sánh các phần với toàn thể:\n- Cả hình tròn tương ứng với toàn bộ tổng thể ($100\\%$ ứng với góc ở tâm $360^\\circ$).\n- Mỗi hình quạt biểu thị tỉ lệ phần trăm của từng đối tượng tương ứng.',
        latexFormula: '100\\% \\leftrightarrow 360^\\circ \\implies 1\\% \\leftrightarrow 3,6^\\circ; \\quad \\text{Góc ở tâm} = \\% \\cdot 3,6^\\circ',
        exampleSnippet: 'Tỉ lệ học sinh thích môn Toán là $25\\%$. Góc ở tâm tương ứng là $25 \\cdot 3,6^\\circ = 90^\\circ$ (chiếm đúng $\\frac{1}{4}$ hình tròn).',
        pitfallWarning: 'Tổng các tỉ lệ phần trăm trên toàn bộ các hình quạt phải luôn bằng chính xác $100\\%$. Nếu tổng khác $100\\%$ là biểu đồ bị sai sót.',
        realLifeApplication: 'Biểu đồ cơ cấu GDP của các ngành kinh tế nông nghiệp, công nghiệp, dịch vụ trên báo đài.'
      },
      {
        id: 'c18-2',
        title: 'Đọc và phân tích thông tin từ biểu đồ quạt tròn',
        summary: 'Khi đọc biểu đồ quạt tròn, ta cần:\n1. Đọc tên biểu đồ và các chú giải màu sắc.\n2. Xác định thành phần chiếm tỉ lệ lớn nhất, nhỏ nhất.\n3. Tính số lượng tuyệt đối: $\\text{Số lượng} = \\text{Tổng thể} \\cdot \\frac{p}{100}$.',
        latexFormula: 'N_{\\text{thành phần}} = N_{\\text{tổng}} \\cdot \\frac{p\\%}{100}',
        exampleSnippet: 'Một trường có $800$ học sinh. Biểu đồ quạt chỉ ra có $40\\%$ học sinh giỏi. Số học sinh giỏi là $800 \\cdot 40\\% = 800 \\cdot 0,4 = 320$ bạn.',
        pitfallWarning: 'Hình quạt có diện tích lớn hơn tương ứng với tỉ lệ phần trăm lớn hơn; chú ý quan sát góc ở tâm để ước lượng nhanh.',
        realLifeApplication: 'Theo dõi cơ cấu chi tiêu hàng tháng: Tiền ăn ($40\\%$), Tiền học ($25\\%$), Tiết kiệm ($20\\%$), Dự phòng ($15\\%$).'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q18-1',
        tier: 'nhan_biet',
        question: 'Trong biểu đồ hình quạt tròn, toàn bộ hình tròn biểu diễn bao nhiêu phần trăm?',
        options: [
          { id: 'opt-18-1a', text: '100%', isCorrect: true },
          { id: 'opt-18-1b', text: '50%', isCorrect: false },
          { id: 'opt-18-1c', text: '360%', isCorrect: false },
          { id: 'opt-18-1d', text: '10%', isCorrect: false }
        ],
        correctAnswerId: 'opt-18-1a',
        progressiveHints: [
          'Hình tròn đại diện cho toàn bộ đối tượng nghiên cứu (tất cả các thành phần cộng lại).',
          'Tỉ lệ phần trăm toàn phần là 100%.'
        ],
        explanation: 'Toàn bộ hình tròn biểu diễn cho 100% của tổng thể dữ liệu.',
        competencyRef: 'KNTT-T18-01',
        points: 25
      },
      {
        id: 'q18-2',
        tier: 'nhan_biet',
        question: 'Góc ở tâm của hình quạt tròn biểu diễn tỉ lệ 25% có số đo bằng bao nhiêu độ?',
        options: [
          { id: 'opt-18-2a', text: '90°', isCorrect: true },
          { id: 'opt-18-2b', text: '45°', isCorrect: false },
          { id: 'opt-18-2c', text: '25°', isCorrect: false },
          { id: 'opt-18-2d', text: '180°', isCorrect: false }
        ],
        correctAnswerId: 'opt-18-2a',
        progressiveHints: [
          'Cả hình tròn là 360 độ tương ứng với 100%.',
          'Tính: 25% của 360 độ là bao nhiêu?'
        ],
        explanation: 'Ta có $25\\% = \\frac{1}{4}$ hình tròn, do đó góc ở tâm tương ứng là $\\frac{360^\\circ}{4} = 90^\\circ$.',
        competencyRef: 'KNTT-T18-04',
        points: 25
      },
      {
        id: 'q18-3',
        tier: 'thong_hieu',
        question: 'Một lớp có 40 học sinh. Biểu đồ quạt tròn cho thấy số học sinh tham gia CLB Cờ vua chiếm 30%. Hỏi có bao nhiêu bạn tham gia CLB Cờ vua?',
        options: [
          { id: 'opt-18-3a', text: '12 học sinh', isCorrect: true },
          { id: 'opt-18-3b', text: '15 học sinh', isCorrect: false },
          { id: 'opt-18-3c', text: '30 học sinh', isCorrect: false },
          { id: 'opt-18-3d', text: '10 học sinh', isCorrect: false }
        ],
        correctAnswerId: 'opt-18-3a',
        progressiveHints: [
          'Nhân tổng sĩ số lớp với tỉ lệ phần trăm tương ứng.',
          'Tính: 40 * 30% = 40 * 0,3'
        ],
        explanation: 'Số học sinh tham gia là $40 \\cdot 30\\% = 40 \\cdot 0,3 = 12$ bạn.',
        competencyRef: 'KNTT-T18-03',
        points: 25
      },
      {
        id: 'q18-4',
        tier: 'van_dung',
        question: 'Biểu đồ chi tiêu của bạn An gồm 3 khoản: Sách vở (45%), Tiết kiệm (35%), Giải trí (x%). Giá trị của x là bao nhiêu?',
        options: [
          { id: 'opt-18-4a', text: '20%', isCorrect: true },
          { id: 'opt-18-4b', text: '25%', isCorrect: false },
          { id: 'opt-18-4c', text: '15%', isCorrect: false },
          { id: 'opt-18-4d', text: '30%', isCorrect: false }
        ],
        correctAnswerId: 'opt-18-4a',
        progressiveHints: [
          'Tổng tỉ lệ phần trăm của tất cả các phần trong hình tròn phải bằng 100%.',
          'Lấy 100% trừ đi tổng của 45% và 35%.'
        ],
        explanation: 'Ta có tổng các phần bằng $100\\%$, do đó $x\\% = 100\\% - (45\\% + 35\\%) = 100\\% - 80\\% = 20\\%$.',
        competencyRef: 'KNTT-T18-02',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-18-1',
        prompt: 'Bố hỏi con: Khi nào thì người ta nên dùng biểu đồ hình quạt tròn thay vì biểu đồ cột?',
        contextForParent: 'Giúp con phân biệt chức năng của từng loại biểu đồ.',
        suggestedAnswerTip: 'Khi muốn làm nổi bật cơ cấu hoặc tỉ lệ phần trăm các thành phần so với toàn thể (tổng 100%).',
        sampleChildResponse: 'Khi muốn so sánh các phần chiếm bao nhiêu phần trăm trong cả tổng thể 100% thì dùng biểu đồ quạt tròn là rõ nhất ạ!'
      },
      {
        id: 'dp-18-2',
        prompt: 'Bố hỏi con: Nhìn vào một chiếc bánh pizza cắt làm 4 phần bằng nhau, mỗi phần tương ứng với bao nhiêu phần trăm và góc bao nhiêu độ?',
        contextForParent: 'Hình dung trực quan về góc và tỉ lệ phần trăm.',
        suggestedAnswerTip: 'Mỗi phần là 25% ứng với góc vuông 90 độ.',
        sampleChildResponse: 'Mỗi miếng là 25% và có góc nhọn ở tâm đúng bằng góc vuông 90 độ bố ạ!'
      },
      {
        id: 'dp-18-3',
        prompt: 'Bố hỏi con: Nếu cộng tỉ lệ phần trăm các múi trong biểu đồ quạt tròn mà ra 98% hoặc 102% thì chứng tỏ điều gì?',
        contextForParent: 'Nhắc con về tính chính xác tuyệt đối của số liệu cơ cấu.',
        suggestedAnswerTip: 'Số liệu đã bị tính sai, nhập nhầm hoặc làm tròn chưa đúng quy chuẩn.',
        sampleChildResponse: 'Chắc chắn là số liệu bị ghi nhầm rồi bố, vì cả vòng tròn bắt buộc phải đủ 100%!'
      }
    ]
  },

  // ==========================================================================
  // BÀI 19: BIỂU ĐỒ ĐOẠN THẲNG & LUYỆN TẬP CHUNG
  // ==========================================================================
  {
    id: 'bai_19_bieu_do_doan_thang',
    order: 22,
    chapterId: 'chuong_5_thu_thap_va_bieu_dien_du_lieu',
    chapterTitle: 'Chương V: Thu Thập và Biểu Diễn Dữ Liệu',
    unit: 'Chương V: Thu thập và biểu diễn dữ liệu',
    term: 2,
    title: 'Bài 19: Biểu đồ đoạn thẳng & Luyện tập chung',
    subtitle: 'Theo dõi xu hướng biến động của dữ liệu theo thời gian và chọn biểu đồ thích hợp',
    status: 'locked',
    estimatedMinutes: 45,
    learningTargets: [
      {
        id: 'lt-19-1',
        level: 'nhan_biet',
        code: 'KNTT-T19-01',
        description: 'Nhận biết trục ngang (thời gian) và trục đứng (đại lượng đo lường) trong biểu đồ đoạn thẳng.',
        mastered: true
      },
      {
        id: 'lt-19-2',
        level: 'thong_hieu',
        code: 'KNTT-T19-02',
        description: 'Đọc và nhận xét xu hướng biến đổi (tăng, giảm, giữ nguyên, dao động mạnh nhất) của dữ liệu qua các mốc thời gian.',
        mastered: false
      },
      {
        id: 'lt-19-3',
        level: 'van_dung',
        code: 'KNTT-T19-03',
        description: 'So sánh và lựa chọn biểu đồ thích hợp (biểu đồ cột, đoạn thẳng, quạt tròn) theo mục đích trình bày dữ liệu.',
        mastered: false
      },
      {
        id: 'lt-19-4',
        level: 'van_dung_cao',
        code: 'KNTT-T19-04',
        description: 'Dự đoán giá trị tương lai và phát hiện điểm bất thường từ độ dốc của đoạn thẳng.',
        mastered: false
      }
    ],
    coreConcepts: [
      {
        id: 'c19-1',
        title: 'Cấu tạo và thế mạnh của Biểu đồ đoạn thẳng',
        summary: 'Biểu đồ đoạn thẳng đặc biệt mạnh trong việc thể hiện sự thay đổi, xu hướng tăng giảm của một đại lượng theo thời gian (ngày, tháng, năm):\n- Trục hoành (nằm ngang): Biểu diễn các mốc thời gian liên tục.\n- Trục tung (thẳng đứng): Biểu diễn giá trị của đại lượng theo đơn vị đo.',
        exampleSnippet: 'Theo dõi nhiệt độ các ngày trong tuần: Thứ Hai ($25^\\circ\\text{C}$), Thứ Ba ($28^\\circ\\text{C}$), Thứ Tư ($31^\\circ\\text{C}$) -> Đường nối đi lên cho thấy xu hướng thời tiết đang ấm dần lên.',
        pitfallWarning: 'Đoạn thẳng đi lên thể hiện xu hướng tăng; đoạn thẳng đi xuống thể hiện xu hướng giảm; đoạn nằm ngang thể hiện sự ổn định (không đổi).',
        realLifeApplication: 'Biểu đồ giá vàng thế giới, biểu đồ chứng khoán và chỉ số nhịp tim của bệnh nhân trên máy monitor.'
      },
      {
        id: 'c19-2',
        title: 'Bí quyết chọn biểu đồ thích hợp (Tổng kết Chương V)',
        summary: 'Khi cần trực quan hóa dữ liệu thống kê:\n- Dùng Biểu đồ cột: Khi so sánh số lượng giữa các đối tượng độc lập (ví dụ: điểm thi các môn).\n- Dùng Biểu đồ quạt tròn: Khi muốn làm nổi bật tỉ lệ phần trăm của các thành phần trong tổng thể $100\\%$.\n- Dùng Biểu đồ đoạn thẳng: Khi cần quan sát xu hướng thay đổi theo thời gian.',
        exampleSnippet: '- Doanh số 5 chi nhánh: Biểu đồ cột.\n- Cơ cấu chi tiêu gia đình: Biểu đồ hình quạt tròn.\n- Chiều cao của con từ 6 tuổi đến 13 tuổi: Biểu đồ đoạn thẳng.',
        pitfallWarning: 'Không dùng biểu đồ đoạn thẳng cho các đại lượng độc lập không có thứ tự thời gian (ví dụ: màu sắc yêu thích).',
        realLifeApplication: 'Báo cáo tổng kết kinh doanh năm của các công ty thường kết hợp cả 3 biểu đồ để ban giám đốc nắm bắt toàn cảnh.'
      }
    ],
    diagnosticQuiz: [
      {
        id: 'q19-1',
        tier: 'nhan_biet',
        question: 'Để theo dõi sự thay đổi nhiệt độ trong 24 giờ tại một trạm khí tượng, loại biểu đồ nào thích hợp nhất?',
        options: [
          { id: 'opt-19-1a', text: 'Biểu đồ đoạn thẳng', isCorrect: true },
          { id: 'opt-19-1b', text: 'Biểu đồ hình quạt tròn', isCorrect: false },
          { id: 'opt-19-1c', text: 'Biểu đồ tranh', isCorrect: false },
          { id: 'opt-19-1d', text: 'Bảng số liệu thô', isCorrect: false }
        ],
        correctAnswerId: 'opt-19-1a',
        progressiveHints: [
          'Nhiệt độ thay đổi liên tục theo thời gian (giờ).',
          'Biểu đồ nào chuyên dùng để thấy xu hướng tăng/giảm qua thời gian?'
        ],
        explanation: 'Biểu đồ đoạn thẳng là công cụ tối ưu nhất để biểu diễn sự biến thiên của dữ liệu theo thời gian.',
        competencyRef: 'KNTT-T19-03',
        points: 25
      },
      {
        id: 'q19-2',
        tier: 'thong_hieu',
        question: 'Trên biểu đồ đoạn thẳng thể hiện cân nặng của một học sinh từ lớp 1 đến lớp 7, đoạn thẳng nối từ mốc lớp 4 sang lớp 5 nằm ngang. Điều đó có ý nghĩa gì?',
        options: [
          { id: 'opt-19-2a', text: 'Cân nặng của học sinh đó không thay đổi trong giai đoạn này', isCorrect: true },
          { id: 'opt-19-2b', text: 'Học sinh đó bị giảm cân nghiêm trọng', isCorrect: false },
          { id: 'opt-19-2c', text: 'Cân nặng tăng gấp đôi', isCorrect: false },
          { id: 'opt-19-2d', text: 'Không đủ thông tin để kết luận', isCorrect: false }
        ],
        correctAnswerId: 'opt-19-2a',
        progressiveHints: [
          'Đoạn nằm ngang nghĩa là giá trị ở trục tung tại hai mốc bằng nhau.',
          'Giá trị đại lượng không tăng cũng không giảm.'
        ],
        explanation: 'Đoạn thẳng nằm ngang biểu thị giá trị của đại lượng giữ nguyên (không đổi) giữa hai mốc thời gian.',
        competencyRef: 'KNTT-T19-02',
        points: 25
      },
      {
        id: 'q19-3',
        tier: 'thong_hieu',
        question: 'Theo dõi giá xăng từ tháng 1 đến tháng 4 ghi nhận: T1 (23.000đ), T2 (24.500đ), T3 (24.500đ), T4 (22.000đ). Đoạn thẳng từ T3 sang T4 có hướng thế nào?',
        options: [
          { id: 'opt-19-3a', text: 'Đi xuống', isCorrect: true },
          { id: 'opt-19-3b', text: 'Đi lên', isCorrect: false },
          { id: 'opt-19-3c', text: 'Nằm ngang', isCorrect: false },
          { id: 'opt-19-3d', text: 'Thẳng đứng', isCorrect: false }
        ],
        correctAnswerId: 'opt-19-3a',
        progressiveHints: [
          'So sánh giá xăng tháng 4 (22.000đ) với tháng 3 (24.500đ).',
          'Giá trị giảm đi thì đường biểu diễn sẽ dốc xuống hay dốc lên?'
        ],
        explanation: 'Vì giá xăng giảm từ $24.500$ xuống $22.000$ đồng nên đoạn thẳng có hướng đi xuống.',
        competencyRef: 'KNTT-T19-02',
        points: 25
      },
      {
        id: 'q19-4',
        tier: 'van_dung',
        question: 'Nhà trường muốn công bố tỉ lệ học sinh xếp loại Tốt, Khá, Đạt, Chưa đạt của khối 7 để phụ huynh thấy được cơ cấu. Loại biểu đồ nào trực quan nhất?',
        options: [
          { id: 'opt-19-4a', text: 'Biểu đồ hình quạt tròn', isCorrect: true },
          { id: 'opt-19-4b', text: 'Biểu đồ đoạn thẳng', isCorrect: false },
          { id: 'opt-19-4c', text: 'Sơ đồ cây', isCorrect: false },
          { id: 'opt-19-4d', text: 'Biểu đồ hình xương cá', isCorrect: false }
        ],
        correctAnswerId: 'opt-19-4a',
        progressiveHints: [
          'Đây là bài toán so sánh các phần xếp loại trong tổng thể 100% học sinh toàn khối.',
          'Biểu đồ quạt tròn chuyên dùng để thể hiện tỉ lệ phần trăm cơ cấu.'
        ],
        explanation: 'Để thể hiện cơ cấu các phần trong một tổng thể (100%), biểu đồ hình quạt tròn là sự lựa chọn tối ưu nhất.',
        competencyRef: 'KNTT-T19-03',
        points: 25
      }
    ],
    dinnerPrompts: [
      {
        id: 'dp-19-1',
        prompt: 'Bố hỏi con: Hãy tưởng tượng con muốn vẽ biểu đồ theo dõi chiều cao của con từ lúc 1 tuổi đến nay, con sẽ chọn loại biểu đồ nào?',
        contextForParent: 'Kiểm tra khả năng vận dụng biểu đồ theo thời gian vào thực tế bản thân của con.',
        suggestedAnswerTip: 'Chọn biểu đồ đoạn thẳng, vì nó thể hiện rõ xu hướng con cao thêm qua từng năm.',
        sampleChildResponse: 'Con chọn biểu đồ đoạn thẳng bố ạ, mỗi năm một điểm chấm rồi nối lại, nhìn đường đi lên là thấy con lớn nhanh thế nào!'
      },
      {
        id: 'dp-19-2',
        prompt: 'Bố hỏi con: Nếu trên biểu đồ đoạn thẳng chứng khoán hay giá xăng mà đường nối dốc đứng xuống thì báo hiệu điều gì?',
        contextForParent: 'Giải thích về độ dốc và tốc độ biến thiên của đại lượng.',
        suggestedAnswerTip: 'Đại lượng đang bị sụt giảm rất nhanh và đột ngột trong thời gian ngắn.',
        sampleChildResponse: 'Báo hiệu giá đang bị giảm rất mạnh và nhanh bố ạ!'
      },
      {
        id: 'dp-19-3',
        prompt: 'Bố hỏi con: Con hãy tóm tắt nhanh bí quyết: Khi nào dùng biểu đồ cột, khi nào dùng biểu đồ quạt tròn và khi nào dùng đoạn thẳng?',
        contextForParent: 'Giúp con khắc sâu năng lực so sánh biểu đồ trọng tâm của Chương V.',
        suggestedAnswerTip: 'Cột: So sánh số liệu; Quạt: Tỉ lệ phần trăm tổng thể; Đoạn thẳng: Thay đổi theo thời gian.',
        sampleChildResponse: 'Dạ: So sánh thì dùng cột, xem tỉ lệ phần trăm thì dùng quạt tròn, còn theo dõi theo thời gian thì dùng đoạn thẳng ạ!'
      }
    ]
  }
];
