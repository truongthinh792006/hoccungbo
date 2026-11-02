import { Lesson } from '../types/curriculum';
import { SocraticMessage } from '../types/study';

export interface SocraticResponse {
  message: string;
  mathFormula?: string;
  hintLevel: 1 | 2 | 3;
  suggestedAction?: string;
  quickReplies?: string[];
}

export const SocraticTutorEngine = {
  getInitialWelcomeMessage(lesson: Lesson): SocraticMessage {
    const isToan = lesson.subjectId === 'toan';
    return {
      id: `msg-${Date.now()}-welcome`,
      sender: 'assistant',
      content: isToan
        ? `Chào Minh Quân! Thầy/cô là Trợ lý Socratic môn Toán 7. 🎯\nThầy/cô sẽ đồng hành cùng em khám phá bài **"${lesson.title}"**.\n\nỞ đây, thầy/cô sẽ không làm bài hộ hay đọc đáp án ngay, mà sẽ đặt các câu hỏi gợi mở để chính em tự tìm ra chân lý toán học! Em đang gặp băn khoăn ở phần nào?`
        : `Chào Minh Quân! Thầy/cô là Trợ lý Socratic môn Khoa học tự nhiên 7. 🔬\nHôm nay chúng ta sẽ cùng khám phá thế giới vi mô kỳ thú trong bài **"${lesson.title}"**!\n\nHãy nhớ: Không có câu hỏi nào là ngớ ngẩn cả. Bất cứ khi nào em chưa hiểu rõ về nguyên tử, hạt proton, electron hay khối lượng amu, cứ nhắn cho thầy/cô nhé!`,
      mathFormula: isToan ? '\\mathbb{Q} = \\frac{a}{b} \\quad (b \\neq 0)' : 'p^+ = e^- \\implies \\text{Trung hòa điện}',
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      hintLevel: 1,
      quickReplies: isToan
        ? [
            'Làm sao để so sánh hai số hữu tỉ âm?',
            'Cho em ví dụ về số không phải số hữu tỉ?',
            'Quy tắc chuyển vế đổi dấu như thế nào?',
            'Em muốn thử thách một câu hỏi gợi mở!'
          ]
        : [
            'Tại sao nguyên tử lại trung hòa về điện?',
            'Khối lượng electron sao lại bỏ qua được?',
            'Làm sao để nhớ kí hiệu 20 nguyên tố đầu?',
            'Thử thách câu hỏi mô hình Rutherford!'
          ]
    };
  },

  generateResponse(userQuery: string, _currentLesson: Lesson, currentHintLevel: number = 1): SocraticResponse {
    const q = userQuery.toLowerCase().trim();

    // 1. Math: Nhận biết số hữu tỉ & Điều kiện mẫu số khác 0 (Ví dụ 5/0)
    if (q.includes('5/0') || q.includes('mẫu') || q.includes('không phải số hữu tỉ') || q.includes('điều kiện')) {
      return {
        message: `Em đang chạm đúng vào "bẫy" kinh điển nhất của chương Số hữu tỉ! 🎯\n\nHãy nhớ lại định nghĩa chuẩn: Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$, trong đó $a, b \\in \\mathbb{Z}$ và điều kiện tối quan trọng của mẫu số $b$ là gì?\n\nTrong phép toán học, ta có bao giờ thực hiện được phép chia một số cho số **0** không? Vậy số $\\frac{5}{0}$ có hợp lệ không nào?`,
        mathFormula: 'b \\neq 0 \\implies \\frac{5}{0} \\notin \\mathbb{Q}',
        hintLevel: 1,
        suggestedAction: 'Xem lại điều kiện mẫu số b khác 0.',
        quickReplies: ['Mẫu số b phải khác 0', 'Phép chia cho 0 không xác định', 'Cho em thêm ví dụ về số hữu tỉ']
      };
    }

    // 1b. Math: Số hữu tỉ khác gì số nguyên?
    if (q.includes('khác số nguyên') || q.includes('khác gì') || q.includes('định nghĩa')) {
      return {
        message: `Câu hỏi rất hay để thấu hiểu bản chất mở rộng của tập số! 💡\n\n- Tập số nguyên $\\mathbb{Z}$ chỉ gồm: các số nguyên âm $(\\dots, -2, -1)$, số $0$, và các số nguyên dương $(1, 2, \\dots)$.\n- Còn tập số hữu tỉ $\\mathbb{Q}$ thì rộng hơn rất nhiều: Mọi số nguyên đều là số hữu tỉ (vì $n = \\frac{n}{1}$), ngoài ra $\\mathbb{Q}$ còn có thêm các phân số (như $\\frac{3}{4}$, $-\\frac{2}{5}$), hỗn số ($1\\frac{1}{3}$) và các số thập phân hữu hạn ($-0,6 = -\\frac{3}{5}$).\n\nTheo em, tập $\\mathbb{Z}$ có phải là tập con của $\\mathbb{Q}$ không?`,
        mathFormula: '\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q}',
        hintLevel: 2,
        suggestedAction: 'Hình dung sơ đồ ven tập hợp số.',
        quickReplies: ['Z là tập con của Q', 'Số -0,6 đổi thành phân số thế nào?', 'Biểu diễn trên trục số']
      };
    }

    // 1c. Math: Trục số & Vị trí bên trái hay bên phải số 0
    if (q.includes('trục số') || q.includes('bên trái') || q.includes('bên phải') || q.includes('-3/4')) {
      return {
        message: `Hãy tưởng tượng trục số nằm ngang như một chiếc nhiệt kế hay thước đo độ cao! 📏\n\n- Gốc tọa độ là điểm **0**.\n- Chiều từ trái sang phải là chiều dương $(+)$. Các số dương nằm về phía bên phải điểm 0.\n- Chiều ngược lại là chiều âm $(-)$. Các số âm nằm về phía bên trái điểm 0.\n\nPhân số $-\\frac{3}{4}$ mang dấu trừ (số âm), vậy trên trục số nó bắt buộc phải nằm về bên nào của số 0? Và số đối của nó sẽ nằm ở đâu?`,
        mathFormula: '-\\frac{3}{4} < 0 \\implies \\text{Nằm bên trái điểm } 0; \\quad \\text{Số đối } \\frac{3}{4} > 0 \\implies \\text{Nằm bên phải}',
        hintLevel: 1,
        suggestedAction: 'Xác định dấu của phân số.',
        quickReplies: ['Nằm bên trái điểm 0', 'Số đối là 3/4 nằm bên phải', 'Khoảng cách đến điểm 0 bằng bao nhiêu?']
      };
    }

    // 2. Math: Số hữu tỉ âm / So sánh
    if (q.includes('so sánh') || q.includes('số âm') || q.includes('dấu trừ')) {
      if (currentHintLevel === 1) {
        return {
          message: `Một câu hỏi rất sắc bén! Trước khi so sánh hai số hữu tỉ âm bất kì, hãy cùng nhớ lại:\n\n1. Nếu hai phân số có mẫu khác nhau, bước đầu tiên em cần làm gì để đưa chúng về cùng một "ngôn ngữ"?\n2. Khi so sánh hai số nguyên âm, ví dụ số **-9** và **-10**, số nào nằm ở bên phải hơn trên trục số?`,
          mathFormula: '-9 > -10 \\implies -\\frac{9}{12} \\;?\\; -\\frac{10}{12}',
          hintLevel: 1,
          suggestedAction: 'Hãy thử trả lời xem: -9 hay -10 lớn hơn?',
          quickReplies: ['-9 lớn hơn -10', '-10 lớn hơn -9', 'Quy đồng mẫu số chung dương']
        };
      } else {
        return {
          message: `Chính xác! Với các số nguyên âm, số có phần tự nhiên nhỏ hơn thì thực chất lại **lớn hơn** (vì nó ở gần gốc 0 hơn về bên phải).\n\nDo đó, khi so sánh $-\\frac{3}{4}$ và $-\\frac{5}{6}$:\n- Ta quy đồng về mẫu số dương 12: $-\\frac{9}{12}$ và $-\\frac{10}{12}$.\n- Vì $-9 > -10$ nên $-\\frac{9}{12} > -\\frac{10}{12}$.\n\nEm đã thấy sự thú vị chưa? Em có muốn thử với một cặp số âm khác không?`,
          mathFormula: '-\\frac{3}{4} = -\\frac{9}{12} > -\\frac{10}{12} = -\\frac{5}{6}',
          hintLevel: 2,
          quickReplies: ['Thử thách em cặp phân số âm khác', 'Em đã hiểu rồi, cảm ơn Thầy/Cô!']
        };
      }
    }

    // 2. Math: Chuyển vế đổi dấu
    if (q.includes('chuyển vế') || q.includes('đổi dấu') || q.includes('tìm x')) {
      return {
        message: `Quy tắc chuyển vế là "vũ khí" quan trọng nhất của Đại số lớp 7! ⚖️\n\nHãy tưởng tượng đẳng thức như một chiếc cân thăng bằng. Khi em nhấc một quả cân từ đĩa trái sang đĩa phải, để giữ thăng bằng, em phải **đổi dấu** của nó:\n\n- Đang là dấu cộng $(+)$ chuyển vế thành dấu trừ $(-)$.\n- Đang là dấu trừ $(-)$ chuyển vế thành dấu cộng $(+)$.\n\nVí dụ trong bài $x + \\frac{1}{4} = -\\frac{2}{3}$, nếu chuyển $+\\frac{1}{4}$ sang vế phải, vế phải sẽ thành phép tính gì?`,
        mathFormula: 'x = -\\frac{2}{3} - \\frac{1}{4}',
        hintLevel: 2,
        suggestedAction: 'Thử chuyển vế và tính ra x!',
        quickReplies: ['x = -2/3 - 1/4', 'Quy đồng mẫu số 12', 'Cho em thêm gợi ý bước quy đồng']
      };
    }

    // 3. KHTN: Trung hòa về điện
    if (q.includes('trung hòa') || q.includes('điện giật') || q.includes('điện tích')) {
      return {
        message: `Câu hỏi này rất trực quan và gắn liền với thực tế! 💡\n\nTrong nguyên tử có 3 loại hạt: hạt nhân chứa **proton** mang điện tích $+1$, **neutron** không mang điện; còn lớp vỏ chứa các **electron** mang điện tích $-1$.\n\nThầy/cô đố em nhé: Nếu một nguyên tử có 11 proton trong hạt nhân, thì lớp vỏ của nó bắt buộc phải có bao nhiêu electron? Và tổng điện tích $(+11) + (-11)$ bằng mấy?`,
        mathFormula: 'q_{\\text{nguyên tử}} = (+p) + (-e) = 0 \\quad (\\text{vì } p = e)',
        hintLevel: 1,
        suggestedAction: 'Suy nghĩ về tương quan số lượng hạt p và e.',
        quickReplies: ['Có đúng 11 electron và tổng bằng 0', 'Em chưa rõ tại sao p lại bằng e', 'Cho em ví dụ về nguyên tử Carbon']
      };
    }

    // 4. KHTN: Khối lượng nguyên tử & amu
    if (q.includes('amu') || q.includes('khối lượng') || q.includes('electron')) {
      return {
        message: `Tại sao ta lại không cộng khối lượng electron khi tính khối lượng nguyên tử? 🤔\n\nHãy tưởng tượng thế này: Con voi nặng 4.000 kg, một chú muỗi nặng 0.002 g bay đến đậu lên lưng con voi. Khi cân cả con voi và chú muỗi, người ta có cần ghi chi tiết số gam của chú muỗi không?\n\nKhối lượng của electron cũng vậy: $m_e \\approx \\frac{1}{1836} m_p$ (nhỏ hơn gần 2000 lần so với proton). Vì thế khoa học quy ước coi khối lượng nguyên tử xấp xỉ bằng khối lượng của gì nào?`,
        mathFormula: 'm_{\\text{nguyên tử}} \\approx m_{\\text{hạt nhân}} = m_p + m_n \\;(\\text{amu})',
        hintLevel: 2,
        quickReplies: ['Bằng khối lượng hạt nhân (p + n)', '1 amu bằng bao nhiêu gam?', 'Thử tính khối lượng của Nhôm Al (13p, 14n)']
      };
    }

    // 5. Default Socratic Progressive Fallback
    return {
      message: `Ý kiến của em rất đáng chú ý! Để cùng nhau làm sáng tỏ vấn đề này, hãy phân tích từng mảnh ghép nhỏ:\n\n1. Điều kiện tiên quyết hay công thức trọng tâm của bài này là gì?\n2. Em đã thử nháp bước đầu tiên chưa? Hãy chia sẻ cách em đang bắt đầu suy nghĩ, thầy/cô sẽ chỉ ra điểm nút then chốt cho em!`,
      hintLevel: (Math.min(3, currentHintLevel + 1) as 1 | 2 | 3),
      quickReplies: ['Cho em xem lại định nghĩa lý thuyết', 'Gợi ý cho em bước 1', 'Em muốn thử làm bài trắc nghiệm']
    };
  }
};
