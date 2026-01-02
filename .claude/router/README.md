# 🧭 Router - Bộ Não Quyết Định

## Router là gì?

**Router** là "bộ não" giúp AI quyết định **nên dùng cái gì** để xử lý yêu cầu của bạn. Giống như một tổng đài viên thông minh, router phân tích yêu cầu rồi chuyển đến đúng bộ phận.

**Ví dụ đơn giản:**
```
Bạn: "Sửa lỗi login không được"

Router phân tích:
- Từ khóa "sửa lỗi" → Cần agent Debugger
- Loại việc "bug" → Cần command /fix
- Cần kiến thức gì? → Có thể cần skill authentication

→ Router kết nối: Debugger + /fix + better-auth skill
```

---

## Các File Trong Router

| File | Chức Năng | Khi Nào AI Đọc |
|------|-----------|----------------|
| **decision-flow.md** | Hướng dẫn quy trình phân tích từng bước | Khi gặp yêu cầu phức tạp, không rõ ràng |
| **agents-guide.md** | Danh sách đầy đủ 17 agents | Khi cần chọn vai trò phù hợp |
| **commands-guide.md** | Danh sách đầy đủ 50+ commands | Khi cần chọn quy trình làm việc |
| **skills-guide.md** | Danh sách đầy đủ 59 skills | Khi cần kiến thức chuyên môn |
| **workflows-guide.md** | Quy trình phối hợp nhiều agents | Khi công việc lớn, phức tạp |

---

## Quy Trình Router Hoạt Động

```
    Bạn đưa ra yêu cầu
           ↓
┌─────────────────────────────────┐
│  BƯỚC 1: Phân tích yêu cầu      │
│  - Loại việc gì? (code/fix/test)│
│  - Lĩnh vực nào? (frontend/DB)  │
│  - Phức tạp không?              │
└─────────────────────────────────┘
           ↓
┌─────────────────────────────────┐
│  BƯỚC 2: Chọn Agent (Ai làm?)   │
│  → Đọc agents-guide.md          │
│  Ví dụ: debugger, developer...  │
└─────────────────────────────────┘
           ↓
┌─────────────────────────────────┐
│  BƯỚC 3: Chọn Command (Làm sao?)│
│  → Đọc commands-guide.md        │
│  Ví dụ: /fix, /code, /plan...   │
└─────────────────────────────────┘
           ↓
┌─────────────────────────────────┐
│  BƯỚC 4: Chọn Skill (Cần gì?)   │
│  → Đọc skills-guide.md          │
│  Chỉ khi cần kiến thức chuyên   │
└─────────────────────────────────┘
           ↓
┌─────────────────────────────────┐
│  BƯỚC 5: Áp dụng Workflow       │
│  → Đọc workflows-guide.md       │
│  Chỉ khi việc lớn, nhiều bước   │
└─────────────────────────────────┘
           ↓
      Bắt đầu làm việc
```

---

## Chi Tiết Từng File

### 1. decision-flow.md - Quy Trình Quyết Định

**Mục đích:** Hướng dẫn AI cách phân tích yêu cầu từ đầu đến cuối

**Nội dung chính:**
- 5 bước phân tích (như sơ đồ ở trên)
- Cách nhận diện loại công việc
- Cách đánh giá độ phức tạp

**AI đọc file này khi:**
- Yêu cầu không rõ ràng
- Không biết chọn gì
- Cần hướng dẫn từng bước

---

### 2. agents-guide.md - Danh Bạ Chuyên Gia

**Mục đích:** Giúp AI biết có những "chuyên gia" nào và khi nào gọi ai

**Nội dung chính:**
```
Từ khóa → Agent phù hợp

"bug, lỗi, crash"     → debugger (thợ săn lỗi)
"code, viết, tạo"     → developer (lập trình viên)
"kế hoạch, thiết kế"  → planner (kiến trúc sư)
"tìm, ở đâu"          → scout (thám tử)
...
```

**AI đọc file này khi:** Cần biết nên nhập vai ai

---

### 3. commands-guide.md - Sổ Tay Quy Trình

**Mục đích:** Giúp AI biết có những quy trình nào và khi nào dùng

**Nội dung chính:**
```
Từ khóa → Command phù hợp

"sửa lỗi đơn giản"    → /fix/fast
"sửa lỗi phức tạp"    → /fix/hard
"sửa lỗi UI"          → /fix/ui
"viết code có test"   → /code
"viết code nhanh"     → /code/no-test
...
```

**AI đọc file này khi:** Cần biết quy trình làm việc

---

### 4. skills-guide.md - Thư Viện Kiến Thức

**Mục đích:** Giúp AI biết có những kiến thức chuyên môn nào

**Nội dung chính:**
```
Từ khóa → Skill cần load

"React, component"      → frontend-development
"đẹp, UI, thiết kế"     → ui-ux-pro-max
"database, SQL"         → databases
"OAuth, đăng nhập"      → better-auth
"deploy, Docker"        → devops
...
```

**AI đọc file này khi:** Công việc cần kiến thức chuyên sâu

---

### 5. workflows-guide.md - Kịch Bản Phối Hợp

**Mục đích:** Hướng dẫn cách phối hợp nhiều agents cho việc lớn

**Nội dung chính:**
- Quy trình làm tính năng mới (plan → code → test → review)
- Cách chuyển giao giữa các agents
- Checkpoints kiểm tra chất lượng

**AI đọc file này khi:** Công việc lớn, cần nhiều bước và nhiều vai trò

---

## Ví Dụ Router Làm Việc

### Ví dụ 1: Yêu cầu đơn giản

```
Bạn: "Tìm file xử lý payment"

Router quyết định nhanh:
- Từ khóa "tìm" → Agent: scout
- Không cần command đặc biệt → /scout
- Không cần skill (việc đơn giản)

→ Kết quả: AI dùng scout để tìm kiếm
```

### Ví dụ 2: Yêu cầu phức tạp

```
Bạn: "Xây dựng hệ thống chat real-time"

Router phân tích kỹ:
1. Đọc decision-flow.md
   - Loại việc: Tạo tính năng mới
   - Lĩnh vực: Backend + Frontend
   - Độ phức tạp: Cao

2. Chọn agents (agents-guide.md):
   - planner → developer → tester → docs-manager

3. Chọn commands (commands-guide.md):
   - /plan/hard → /code → /test → /docs/update

4. Chọn skills (skills-guide.md):
   - backend-development (WebSocket)
   - frontend-development (React)
   - databases (lưu messages)

5. Áp dụng workflow (workflows-guide.md):
   - Dùng primary-workflow.md (nhiều giai đoạn)

→ Kết quả: AI có kế hoạch đầy đủ để thực hiện
```

### Ví dụ 3: Yêu cầu mơ hồ

```
Bạn: "Làm cho app tốt hơn"

Router nhận ra không đủ thông tin:
- Đọc decision-flow.md
- Không rõ: Tốt hơn về cái gì?

→ AI hỏi lại: "Bạn muốn cải thiện về mặt nào? 
   - Tốc độ (performance)?
   - Giao diện (UI)?
   - Tính năng mới?
   - Sửa lỗi?"

Bạn: "Tốc độ"

→ Router chọn:
   - Agent: debugger + planner
   - Skill: arch-performance-optimization
   - Command: /debug → /plan
```

---

## Hệ Thống Từ Khóa

Router dùng từ khóa để nhận diện nhanh:

### Từ khóa → Agent
| Bạn nói | AI chọn Agent |
|---------|---------------|
| bug, lỗi, crash, không chạy | debugger |
| code, viết, tạo, implement | fullstack-developer |
| kế hoạch, architecture, thiết kế hệ thống | planner |
| tìm, ở đâu, file nào | scout |
| test, kiểm tra, coverage | tester |
| đẹp, UI, giao diện | ui-ux-designer |

### Từ khóa → Command
| Bạn nói | AI chọn Command |
|---------|-----------------|
| sửa lỗi | /fix |
| sửa nhanh | /fix/fast |
| lỗi phức tạp | /fix/hard |
| lỗi giao diện | /fix/ui |
| lập kế hoạch | /plan |
| kế hoạch chi tiết | /plan/hard |

### Từ khóa → Skill
| Bạn nói | AI load Skill |
|---------|---------------|
| React, component | frontend-development |
| đẹp, stunning | ui-ux-pro-max |
| database, SQL | databases |
| login, OAuth | better-auth |
| deploy, CI/CD | devops |

---

## Tại Sao Cần Router?

| ❌ Không có Router | ✅ Có Router |
|-------------------|--------------|
| AI làm bừa, không có hệ thống | AI làm theo quy trình chuẩn |
| Dễ chọn sai công cụ | Luôn chọn đúng công cụ |
| Thiếu hoặc thừa kiến thức | Load đúng kiến thức cần thiết |
| Không nhất quán | Kết quả nhất quán, chất lượng |

---

## Tóm Tắt

| Khái niệm | Giải thích |
|-----------|------------|
| **Router là gì** | Bộ não giúp AI quyết định dùng gì |
| **Có mấy file** | 5 files hướng dẫn |
| **Hoạt động thế nào** | Phân tích từ khóa → Chọn agent/command/skill |
| **Khi nào dùng** | Tự động, mỗi khi bạn đưa ra yêu cầu |

---

## Xem Thêm

- [Danh sách Agents (Vai trò)](../agents/README.md)
- [Danh sách Commands (Quy trình)](../commands/README.md)
- [Danh sách Skills (Kiến thức)](../skills/README.md)
- [Danh sách Workflows (Phối hợp)](../workflows/README.md)
