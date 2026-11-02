# Học Cùng Con 7 (GDPT 2018)

Ứng dụng web tự học & đồng hành phụ huynh dành riêng cho học sinh Lớp 7 theo Chương trình Giáo dục Phổ thông 2018 (GDPT 2018).

---

## 🌟 Tính Năng Cốt Lõi

### 1. Curriculum Engine (`/curriculum`)
- **Phân cấp dữ liệu:** Môn học -> Bộ sách giáo khoa (Cánh Diều, Kết nối tri thức, Chân trời sáng tạo) -> Chủ đề/Chương -> Bài học -> Yêu cầu cần đạt chuẩn năng lực (Biết, Hiểu, Vận dụng, Vận dụng cao).
- Hỗ trợ các môn trọng tâm: Toán 7, Khoa học tự nhiên 7, Ngữ văn 7, Tiếng Anh 7, Tin học 7.

### 2. Student Learning Portal (`/study`)
- **Lý thuyết trọng tâm:** Tóm tắt công thức chuẩn KaTeX ($\mathbb{Q} = \frac{a}{b}$, $m \approx p + n$), cảnh báo bẫy hay mắc lỗi, ví dụ và ứng dụng đời sống.
- **Trợ lý Socratic AI:** Gia sư phản biện gợi mở 3 cấp độ gợi ý, không cung cấp đáp án sẵn mà dẫn dắt học sinh tự tư duy và làm chủ lời giải.
- **Luyện tập 3 cấp độ:**
  - Cấp độ 1: Trắc nghiệm 4 phương án (Multiple Choice).
  - Cấp độ 2: Đánh giá ĐÚNG / SAI 4 mệnh đề a, b, c, d (Chuẩn định dạng mới GDPT 2018).
  - Cấp độ 3: Trả lời ngắn / Điền kết quả (Short Answer).
  - Giải thích chi tiết từng bước bằng KaTeX và ghi nhận điểm yếu tự động.

### 3. Parent Dashboard (`/parent`)
- **Nhật ký tiến độ:** Thống kê thời gian học, độ chính xác, bài học hoàn thành trong ngày.
- **Nhận diện điểm yếu (Weak Concepts):** Báo cáo những phần con còn lúng túng cùng lời khuyên sư phạm cho cha mẹ hỗ trợ con nhẹ nhàng.
- **Gợi ý mâm cơm (Dinner Conversation Prompts):** 2-3 câu hỏi gợi mở đời thường do AI đề xuất để cha mẹ trò chuyện cùng con bên bữa cơm gia đình mà không tạo áp lực thi cử.
- **Mục tiêu & Hộp quà phần thưởng:** Thỏa thuận mục tiêu tuần và trao thưởng động viên (chọn phim cuối tuần, chọn thực đơn món ngon).
- **Lời nhắn động viên:** Gửi lời khen ngợi từ Bố/Mẹ đến góc tự học của con.

---

## 🛠 Công Nghệ Sử Dụng
- **Framework:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS (bảng màu pastel thanh nhã, thân thiện với học sinh và phụ huynh)
- **Biểu tượng:** Lucide Icons
- **Hiển thị Toán học:** KaTeX (`katex`)
- **Lưu trữ & Offline:** LocalStorage / IndexedDB architecture (Offline-First resilience, sẵn sàng đồng bộ REST/Supabase)

---

## 🚀 Khởi Chạy Ứng Dụng

```bash
# Cài đặt thư viện
npm install

# Chạy môi trường phát triển
npm run dev

# Hoặc chạy bản preview
npm run build
npm run preview
```
Ứng dụng khả dụng tại: `http://localhost:3000/` hoặc `http://localhost:3001/`
