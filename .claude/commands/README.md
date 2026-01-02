# 📋 Commands - Các Quy Trình Làm Việc

## Commands là gì?

**Commands** là các "công thức" hướng dẫn từng bước để hoàn thành một loại công việc cụ thể. Giống như công thức nấu ăn vậy - bạn làm theo từng bước sẽ ra kết quả mong muốn.

**Ví dụ đơn giản:**
- Muốn **sửa bug** → Dùng command `/fix` (có 8 bước cụ thể)
- Muốn **viết code** → Dùng command `/code` (có quy trình riêng)
- Muốn **lập kế hoạch** → Dùng command `/plan` (có template sẵn)

---

## Các Commands Chính

### 🔨 Commands Cơ Bản (10 commands)

| Command | Dùng Khi Nào | Mô Tả |
|---------|--------------|-------|
| `/code` | Cần viết code mới | Quy trình viết code chuẩn, có test |
| `/fix` | Cần sửa lỗi | Quy trình debug và fix bug |
| `/test` | Cần viết/chạy test | Quy trình kiểm thử |
| `/plan` | Cần lập kế hoạch | Quy trình phân tích và lên kế hoạch |
| `/review-changes` | Cần review code | Quy trình kiểm tra chất lượng |
| `/build` | Cần build dự án | Quy trình đóng gói ứng dụng |
| `/debug` | Cần điều tra sâu | Quy trình phân tích vấn đề |
| `/scout` | Cần tìm kiếm | Quy trình tìm kiếm thông minh |
| `/brainstorm` | Cần ý tưởng | Quy trình sáng tạo giải pháp |
| `/cook` | Làm theo công thức | Thực hiện theo recipe có sẵn |

---

## Commands Chi Tiết Theo Nhóm

### 🐛 Nhóm Fix (Sửa Lỗi) - 8 biến thể

| Command | Khi Nào Dùng | Ví Dụ Tình Huống |
|---------|--------------|------------------|
| `/fix` | Sửa lỗi thông thường | "Button không click được" |
| `/fix/fast` | Sửa nhanh lỗi đơn giản | "Typo trong text" |
| `/fix/hard` | Sửa lỗi phức tạp, khó hiểu | "App crash ngẫu nhiên, không rõ nguyên nhân" |
| `/fix/ui` | Sửa lỗi giao diện | "Layout bị vỡ trên mobile" |
| `/fix/test` | Sửa test bị fail | "Unit test failed sau khi update" |
| `/fix/types` | Sửa lỗi TypeScript | "Type error khi compile" |
| `/fix/ci` | Sửa lỗi CI/CD | "Pipeline failed" |
| `/fix/logs` | Sửa dựa trên log | "Production error, có log file" |

**Cách chọn:**
- Lỗi đơn giản, rõ ràng → `/fix/fast`
- Lỗi UI, CSS → `/fix/ui`
- Lỗi khó, cần điều tra → `/fix/hard`

---

### 📋 Nhóm Plan (Lập Kế Hoạch) - 7 biến thể

| Command | Khi Nào Dùng | Ví Dụ Tình Huống |
|---------|--------------|------------------|
| `/plan` | Lập kế hoạch thông thường | "Thêm tính năng login" |
| `/plan/fast` | Kế hoạch nhanh, việc nhỏ | "Thêm nút export" |
| `/plan/hard` | Kế hoạch phức tạp | "Thiết kế hệ thống microservices" |
| `/plan/two` | Kế hoạch 2 giai đoạn | "Dự án lớn cần chia phase" |
| `/plan/validate` | Kiểm tra kế hoạch | "Review kế hoạch đã có" |
| `/plan/parallel` | Nhiều kế hoạch song song | "3 tính năng độc lập" |
| `/plan/archive` | Lưu trữ kế hoạch cũ | "Hoàn thành, cần archive" |

**Cách chọn:**
- Việc nhỏ, rõ ràng → `/plan/fast`
- Hệ thống phức tạp → `/plan/hard`
- Dự án dài hơi → `/plan/two`

---

### 💻 Nhóm Code (Viết Code) - 3 biến thể

| Command | Khi Nào Dùng | Ví Dụ Tình Huống |
|---------|--------------|------------------|
| `/code` | Viết code chuẩn (có test) | "Tạo component UserProfile" |
| `/code/auto` | Code tự động | "Generate CRUD từ schema" |
| `/code/no-test` | Code nhanh không test | "Prototype nhanh để demo" |

**Cách chọn:**
- Code production → `/code` (luôn có test)
- Prototype/POC → `/code/no-test`

---

### 🎨 Nhóm Design (Thiết Kế) - 6 biến thể

| Command | Khi Nào Dùng | Ví Dụ Tình Huống |
|---------|--------------|------------------|
| `/design/fast` | Thiết kế nhanh | "Mock up nhanh cho meeting" |
| `/design/good` | Thiết kế chỉn chu | "UI production-ready" |
| `/design/screenshot` | Làm theo hình mẫu | "Code theo design Figma này" |
| `/design/video` | Phân tích từ video | "Làm giống demo trong video" |
| `/design/3d` | Thiết kế 3D | "Tạo scene Three.js" |
| `/design/describe` | Mô tả design | "Phân tích UI hiện tại" |

**Cách chọn:**
- Có hình mẫu → `/design/screenshot`
- Cần đẹp, chuẩn → `/design/good`
- Cần nhanh → `/design/fast`

---

### 📝 Nhóm Git - 4 biến thể

| Command | Khi Nào Dùng | Ví Dụ Tình Huống |
|---------|--------------|------------------|
| `/git/cm` | Commit code | "Commit thay đổi vừa làm" |
| `/git/pr` | Tạo Pull Request | "Tạo PR để review" |
| `/git/merge` | Merge branches | "Merge feature vào main" |
| `/git/cp` | Cherry-pick | "Lấy commit từ branch khác" |

---

### 📚 Nhóm Docs (Tài Liệu) - 3 biến thể

| Command | Khi Nào Dùng | Ví Dụ Tình Huống |
|---------|--------------|------------------|
| `/docs/init` | Tạo tài liệu mới | "Khởi tạo docs cho dự án mới" |
| `/docs/update` | Cập nhật tài liệu | "Update README sau khi thêm tính năng" |
| `/docs/summarize` | Tóm tắt tài liệu | "Tóm tắt cho executive" |

---

### 🔍 Nhóm Review - 2 biến thể

| Command | Khi Nào Dùng | Ví Dụ Tình Huống |
|---------|--------------|------------------|
| `/review/codebase` | Review toàn bộ code | "Đánh giá chất lượng dự án" |
| `/review/post-task` | Review sau khi làm xong | "Kiểm tra trước khi commit" |

---

### 🛠️ Nhóm Khác

| Command | Khi Nào Dùng | Mô Tả |
|---------|--------------|-------|
| `/bootstrap` | Khởi tạo dự án mới | Tạo cấu trúc dự án từ đầu |
| `/create-feature` | Tạo tính năng hoàn chỉnh | End-to-end từ plan đến test |
| `/db-migrate` | Thay đổi database | Tạo và chạy migrations |
| `/lint` | Kiểm tra code style | Chạy linter và format |
| `/preview` | Xem trước thay đổi | Chạy dev server để xem |
| `/kanban` | Quản lý tasks | Xem và cập nhật task board |
| `/watzup` | Xem trạng thái | Kiểm tra nhanh tình hình dự án |
| `/ask` | Hỏi đáp | Hỏi bất kỳ câu hỏi nào |

---

## Cách AI Chọn Command

### Ví dụ 1: Sửa lỗi đơn giản
```
Bạn: "Sửa lỗi typo trong trang About"

AI nhận diện:
- Từ khóa: "sửa lỗi" → nhóm /fix
- Độ phức tạp: đơn giản → /fix/fast
- Loại: text → không phải UI

→ AI chọn: /fix/fast
```

### Ví dụ 2: Tính năng mới phức tạp
```
Bạn: "Thêm hệ thống thanh toán với Stripe"

AI nhận diện:
- Từ khóa: "thêm", "hệ thống" → cần plan trước
- Độ phức tạp: cao (payment, security)
- Cần nhiều bước

→ AI chọn theo thứ tự:
1. /plan/hard (lên kế hoạch kỹ)
2. /code (implement từng phần)
3. /test (viết test)
4. /docs/update (cập nhật tài liệu)
```

---

## Quy Trình Trong Mỗi Command

Ví dụ `/fix` có các bước:

```
1. Thu thập thông tin
   - Lỗi xảy ra khi nào?
   - Có error message không?
   - Có thể tái tạo không?

2. Phân tích
   - Đọc log và stack trace
   - Tìm file/function liên quan
   - Xác định nguyên nhân

3. Sửa lỗi
   - Viết code fix
   - Giải thích thay đổi

4. Kiểm tra
   - Test lại xem hết lỗi chưa
   - Đảm bảo không tạo lỗi mới

5. Hoàn thành
   - Tóm tắt đã sửa gì
   - Gợi ý cách tránh lỗi tương tự
```

---

## Tóm Tắt

| Khái niệm | Giải thích |
|-----------|------------|
| **Command là gì** | Quy trình từng bước để làm một việc |
| **Có bao nhiêu** | 10 commands chính + 30+ biến thể |
| **Ai chọn command** | AI tự động chọn dựa trên yêu cầu |
| **Biến thể là gì** | Phiên bản đặc biệt cho từng tình huống |

---

## Mẹo Sử Dụng

### 1. Chọn biến thể phù hợp
```
Việc đơn giản → dùng /fast
Việc phức tạp → dùng /hard
Nhiều việc độc lập → dùng /parallel
```

### 2. Kết hợp Commands
```
Tính năng mới:
/plan → /code → /test → /review → /docs
```

### 3. Nói rõ yêu cầu
```
❌ "Sửa cái này" (không rõ ràng)
✅ "Sửa lỗi layout vỡ trên mobile" (rõ ràng → AI chọn /fix/ui)
```

---

## Xem Thêm

- [Danh sách Agents (Vai trò)](../agents/README.md) - Ai sẽ làm việc này
- [Danh sách Skills (Kiến thức)](../skills/README.md) - Cần kiến thức gì
- [Router (Bộ định tuyến)](../router/README.md) - Cách AI quyết định
