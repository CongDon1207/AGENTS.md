# Danh Mục Lệnh (Commands Catalog)

**Commands** (Lệnh) là các quy trình làm việc chuẩn hóa (Standard Operating Procedures - SOP) được đóng gói sẵn. Giống như một công thức nấu ăn, mỗi Command hướng dẫn AI thực hiện từng bước cụ thể để đạt kết quả tốt nhất.

> **Cách dùng:** Gõ `/command` trong khung chat (Ví dụ: `/fix`, `/plan`).

---

## 🏆 Các Lệnh Phổ Biến Nhất

Đây là những lệnh bạn sẽ sử dụng 80% thời gian làm việc:

| Lệnh | Ý nghĩa | Khi nào sử dụng? |
| :--- | :--- | :--- |
| **`/fix`** | **Sửa lỗi** | Khi gặp bug, error message. AI sẽ chạy quy trình Debug 4 bước: Phân tích -> Tìm nguyên nhân -> Sửa -> Kiểm tra. |
| **`/code`** | **Viết code** | Khi cần tạo tính năng mới hoặc viết một đoạn code hoàn chỉnh. Bao gồm cả việc viết test đi kèm. |
| **`/plan`** | **Lập kế hoạch** | Dùng TRƯỚC khi làm task lớn. AI sẽ phân tích yêu cầu và lập ra một bản kế hoạch thực thi (Implementation Plan) chi tiết. |
| **`/test`** | **Kiểm thử** | Khi cần chạy test, viết test case mới, hoặc kiểm tra độ bao phủ mã nguồn. |
| **`/review`** | **Review code** | Yêu cầu AI xem xét code bạn vừa viết hoặc review một file cụ thể để tìm lỗi tiềm ẩn. |
| **`/scout`** | **Tìm kiếm** | Khi bạn quên mất logic nằm ở đâu, hoặc muốn tìm tất cả các chỗ dùng hàm `X`. AI sẽ dùng tool tìm kiếm thông minh. |
| **`/docs/update`** | **Cập nhật Docs** | Chạy sau khi code xong. Tự động cập nhật README hoặc các file tài liệu liên quan để khớp với code mới. |

---

## 🔍 Chi Tiết Theo Nhóm Chức Năng

### 1. Nhóm Sửa Lỗi (Fixing)
Các biến thể của lệnh sửa lỗi cho từng tình huống:

*   **`/fix`**: Quy trình chuẩn (khuyên dùng).
*   **`/fix/fast`**: Sửa nhanh các lỗi nhỏ (typo, syntax đơn giản), bỏ qua bước phân tích sâu.
*   **`/fix/ui`**: Chuyên sửa lỗi giao diện (CSS, Layout vỡ).
*   **`/fix/test`**: Chuyên sửa các bài test đang bị fail.
*   **`/fix/hard`**: Dùng cho các lỗi "siêu khó", lỗi chập chờn, cần điều tra sâu và đặt nhiều giả thuyết.

### 2. Nhóm Lập Kế Hoạch (Planning)
*   **`/plan`**: Lập kế hoạch chuẩn cho tính năng mới.
*   **`/plan/fast`**: Kế hoạch nhanh cho task nhỏ.
*   **`/plan/hard`**: Kế hoạch cho hệ thống phức tạp (Microservices, kiến trúc lớn).
*   **`/plan/validate`**: Nhờ AI đánh giá/phản biện một kế hoạch có sẵn.

### 3. Nhóm Code & Xây Dựng (Coding)
*   **`/code`**: Viết code chuẩn (kèm test).
*   **`/code/auto`**: Tự động sinh code mẫu (scaffold) hoặc code đơn giản.
*   **`/code/no-test`**: Viết code nhanh (prototype) bỏ qua bước viết test (cẩn thận khi dùng).
*   **`/build`**: Chạy lệnh build project và kiểm tra lỗi biên dịch.

### 4. Nhóm Git & Quản Lý Source
*   **`/git/cm`**: Tạo commit message chuẩn semantic (feat, fix, chore...).
*   **`/git/pr`**: Tạo mô tả cho Pull Request tự động.
*   **`/git/merge`**: Hỗ trợ merge code và xử lý conflict.

### 5. Nhóm Tài Liệu (Docs)
*   **`/docs/init`**: Khởi tạo cấu trúc tài liệu cho dự án mới.
*   **`/docs/update`**: Cập nhật tài liệu hiện có.
*   **`/docs/summarize`**: Tóm tắt nội dung file hoặc thư mục.

### 6. Nhóm Thiết Kế (Design)
*   **`/design/fast`**: Phác thảo nhanh ý tưởng giao diện.
*   **`/design/ui`**: Thiết kế chi tiết UI (Màu sắc, Specs).
*   **`/brainstorm`**: Cùng AI "bão não" tìm ý tưởng giải pháp.

### 7. Nhóm Tiện Ích Khác
*   **`/ask`**: Hỏi đáp thông thường (nhưng AI sẽ trả lời có cấu trúc hơn).
*   **`/investigate`**: Điều tra vấn đề (giống `/scout` nhưng sâu hơn về logic).
*   **`/performance`**: Phân tích và tối ưu hiệu năng.
*   **`/security`**: Rà soát bảo mật.

---

## 💡 Mẹo Sử Dụng

1.  **Càng cụ thể càng tốt**: `/fix lỗi login` sẽ tốt hơn `/fix` (AI tự hiểu ngữ cảnh).
2.  **Kết hợp**: Bạn có thể dùng `/plan` để lên kế hoạch trước, sau đó dùng `/code` để thực hiện từng phần của kế hoạch đó.
3.  **Slash Command là "lối tắt"**: Thực ra `/fix` chính là việc gọi Agent **Debugger** + Skill **Bug Diagnosis**. Dùng lệnh giúp bạn tiết kiệm thời gian giải thích quy trình cho AI.
