# 🤖 Agents - Các Vai Trò Chuyên Gia

## Agents là gì?

**Agents** giống như các "nhân cách chuyên gia" khác nhau mà AI sẽ nhập vai để làm việc. Mỗi agent có cách suy nghĩ, phương pháp làm việc và chuyên môn riêng.

**Ví dụ đơn giản:**
- Khi bạn nhờ **sửa bug** → AI sẽ nhập vai **Debugger** (thợ săn lỗi)
- Khi bạn nhờ **viết code** → AI sẽ nhập vai **Developer** (lập trình viên)
- Khi bạn nhờ **lập kế hoạch** → AI sẽ nhập vai **Planner** (kiến trúc sư)

---

## Danh Sách 17 Agents

### 👨‍💻 Nhóm Lập Trình

| Agent | Vai Trò | Khi Nào Được Gọi | Công Việc Chính |
|-------|---------|------------------|-----------------|
| **fullstack-developer** | Lập trình viên | Bạn nói: "code", "viết", "tạo", "thêm tính năng" | Viết code, tạo components, xây dựng tính năng |
| **code-reviewer** | Người kiểm tra code | Bạn nói: "review", "kiểm tra code", "refactor" | Đánh giá chất lượng code, đề xuất cải thiện |
| **tester** | Người viết test | Bạn nói: "test", "kiểm thử", "coverage" | Viết test tự động, đảm bảo code chạy đúng |

### 🔧 Nhóm Sửa Lỗi & Tìm Kiếm

| Agent | Vai Trò | Khi Nào Được Gọi | Công Việc Chính |
|-------|---------|------------------|-----------------|
| **debugger** | Thợ săn lỗi | Bạn nói: "bug", "lỗi", "crash", "không chạy" | Tìm nguyên nhân lỗi, phân tích log, sửa bugs |
| **scout** | Thám tử nội bộ | Bạn nói: "tìm", "ở đâu", "file nào" | Tìm kiếm trong code, định vị files và functions |
| **scout-external** | Thám tử bên ngoài | Bạn nói: "tìm docs", "thư viện nào", "API" | Tìm tài liệu, API docs, thư viện bên ngoài |

### 📋 Nhóm Lập Kế Hoạch & Quản Lý

| Agent | Vai Trò | Khi Nào Được Gọi | Công Việc Chính |
|-------|---------|------------------|-----------------|
| **planner** | Kiến trúc sư | Bạn nói: "kế hoạch", "thiết kế", "architecture" | Lập kế hoạch, thiết kế hệ thống |
| **project-manager** | Quản lý dự án | Bạn nói: "tiến độ", "deadline", "task" | Theo dõi công việc, quản lý tiến độ |
| **researcher** | Nhà nghiên cứu | Bạn nói: "nghiên cứu", "tìm hiểu", "so sánh" | Nghiên cứu công nghệ, phân tích giải pháp |

### 🎨 Nhóm Thiết Kế & Nội Dung

| Agent | Vai Trò | Khi Nào Được Gọi | Công Việc Chính |
|-------|---------|------------------|-----------------|
| **ui-ux-designer** | Thiết kế giao diện | Bạn nói: "UI", "giao diện", "layout", "đẹp" | Thiết kế màn hình, cải thiện trải nghiệm |
| **copywriter** | Viết nội dung | Bạn nói: "viết content", "marketing" | Viết văn bản, nội dung marketing |
| **brainstormer** | Sáng tạo ý tưởng | Bạn nói: "ý tưởng", "gợi ý", "brainstorm" | Đưa ra ý tưởng, đề xuất giải pháp sáng tạo |

### 🛠️ Nhóm Hỗ Trợ Kỹ Thuật

| Agent | Vai Trò | Khi Nào Được Gọi | Công Việc Chính |
|-------|---------|------------------|-----------------|
| **git-manager** | Chuyên gia Git | Bạn nói: "commit", "merge", "branch", "PR" | Quản lý phiên bản code, xử lý xung đột |
| **database-admin** | Quản trị cơ sở dữ liệu | Bạn nói: "database", "SQL", "migration" | Thiết kế database, viết queries |
| **docs-manager** | Viết tài liệu | Bạn nói: "docs", "README", "hướng dẫn" | Viết và cập nhật tài liệu |
| **mcp-manager** | Chuyên gia MCP | Bạn nói: "MCP", "tool", "tích hợp" | Quản lý công cụ MCP |
| **journal-writer** | Ghi chép công việc | Bạn nói: "ghi lại", "journal", "log" | Ghi chép tiến độ làm việc |

---

## Cách AI Chọn Agent

### Bước 1: Bạn đưa ra yêu cầu
```
"Sửa lỗi đăng nhập không được"
```

### Bước 2: AI nhận diện từ khóa
```
Từ khóa "sửa lỗi" → Cần vai trò Debugger (thợ săn lỗi)
```

### Bước 3: AI nhập vai chuyên gia
```
AI đọc file: agents/debugger.md
→ Học cách suy nghĩ như thợ săn lỗi chuyên nghiệp
```

### Bước 4: AI làm việc theo phong cách chuyên gia
```
Debugger sẽ:
1. Hỏi: "Lỗi hiện như thế nào? Có thông báo gì không?"
2. Phân tích log để tìm manh mối
3. Tìm ra nguyên nhân gốc rễ (không chỉ sửa triệu chứng)
4. Đề xuất cách sửa và kiểm tra lại
```

---

## Ví Dụ Thực Tế

### Ví dụ 1: Việc đơn giản (1 agent)

**Bạn hỏi:** "Tìm hàm xử lý thanh toán trong dự án"

**AI chọn:** `scout` (thám tử)

**Vì sao:** Từ "tìm" → cần người chuyên tìm kiếm

---

### Ví dụ 2: Việc phức tạp (nhiều agents phối hợp)

**Bạn hỏi:** "Thêm tính năng dark mode cho app"

**AI chọn theo thứ tự:**

| Thứ tự | Agent | Làm gì |
|--------|-------|--------|
| 1 | **planner** | Lập kế hoạch: cần sửa gì, thêm gì |
| 2 | **ui-ux-designer** | Chọn màu sắc cho dark mode |
| 3 | **fullstack-developer** | Viết code thực hiện |
| 4 | **tester** | Viết test kiểm tra |
| 5 | **docs-manager** | Cập nhật hướng dẫn sử dụng |

---

## Tại Sao Cần Agents?

| ❌ Không có Agents | ✅ Có Agents |
|-------------------|--------------|
| AI trả lời chung chung | AI trả lời như chuyên gia thực thụ |
| Không có quy trình rõ ràng | Làm việc theo quy trình chuyên nghiệp |
| Dễ bỏ sót bước quan trọng | Đảm bảo đầy đủ các bước cần thiết |
| Thiếu chiều sâu chuyên môn | Có kiến thức chuyên sâu từng lĩnh vực |

---

## Mỗi File Agent Chứa Gì?

Ví dụ file `debugger.md`:

```markdown
# Debugger - Thợ Săn Lỗi

## Vai trò
Chuyên tìm và sửa lỗi trong code

## Cách suy nghĩ
- Luôn tìm nguyên nhân gốc rễ, không chỉ sửa triệu chứng
- Phân tích log và stack trace cẩn thận
- Đặt câu hỏi "Tại sao?" liên tục

## Quy trình làm việc
1. Thu thập thông tin về lỗi
2. Tái tạo lỗi
3. Phân tích nguyên nhân
4. Sửa lỗi
5. Kiểm tra lại

## Công cụ thường dùng
- Đọc log: get_errors, run_in_terminal
- Tìm code: grep_search, read_file
```

---

## Tóm Tắt

| Khái niệm | Giải thích |
|-----------|------------|
| **Agent là gì** | Vai trò chuyên gia mà AI sẽ nhập vai |
| **Có bao nhiêu** | 17 agents cho 17 loại công việc |
| **Ai chọn agent** | AI tự động chọn dựa trên từ khóa bạn dùng |
| **Khi nào dùng nhiều agents** | Khi công việc phức tạp cần nhiều chuyên môn |

---

## Xem Thêm

- [Danh sách Commands (Quy trình)](../commands/README.md) - Các bước thực hiện công việc
- [Danh sách Skills (Kiến thức)](../skills/README.md) - Kiến thức chuyên môn
- [Router (Bộ định tuyến)](../router/README.md) - Cách AI quyết định
