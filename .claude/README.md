# 🏠 .claude - Trung Tâm Điều Khiển AI

## .claude là gì?

Thư mục **`.claude`** là "bộ não mở rộng" của AI - nơi chứa tất cả cấu hình, kiến thức và quy trình giúp AI làm việc thông minh hơn, chuyên nghiệp hơn.

**Ví dụ đơn giản:**
- Không có `.claude`: AI trả lời như chatbot thông thường
- Có `.claude`: AI làm việc như đội ngũ chuyên gia đầy đủ

---

## Cấu Trúc Tổng Quan

```
.claude/
│
├── 🤖 agents/          ← VAI TRÒ (Ai làm?)
│   └── 17 chuyên gia khác nhau
│
├── 📋 commands/        ← QUY TRÌNH (Làm thế nào?)
│   └── 50+ quy trình làm việc
│
├── 📚 skills/          ← KIẾN THỨC (Cần biết gì?)
│   └── 59 bộ kiến thức chuyên môn
│
├── 🧭 router/          ← ĐỊNH TUYẾN (Chọn gì?)
│   └── 5 files hướng dẫn AI quyết định
│
├── 🔄 workflows/       ← PHỐI HỢP (Làm việc lớn)
│   └── 4 kịch bản phối hợp
│
├── ⚡ hooks/           ← TỰ ĐỘNG (Trigger events)
│   └── 15+ scripts tự động chạy
│
├── 🔧 scripts/         ← CÔNG CỤ (Utilities)
│   └── 10+ scripts tiện ích
│
└── ⚙️ settings.json    ← CẤU HÌNH (Tùy chỉnh)
```

---

## Giải Thích Từng Thư Mục

### 🤖 agents/ - Các Vai Trò Chuyên Gia

**Là gì:** 17 "nhân cách" khác nhau mà AI sẽ nhập vai

**Ví dụ:**
| Bạn nói | AI nhập vai |
|---------|-------------|
| "Sửa bug" | Debugger (thợ săn lỗi) |
| "Viết code" | Developer (lập trình viên) |
| "Lập kế hoạch" | Planner (kiến trúc sư) |

📖 [Xem chi tiết agents/README.md](agents/README.md)

---

### 📋 commands/ - Quy Trình Làm Việc

**Là gì:** 50+ "công thức" hướng dẫn từng bước cho mỗi loại việc

**Ví dụ:**
| Command | Làm gì |
|---------|--------|
| `/fix` | 5 bước sửa bug chuẩn |
| `/code` | Quy trình viết code có test |
| `/plan` | Template lập kế hoạch |

📖 [Xem chi tiết commands/README.md](commands/README.md)

---

### 📚 skills/ - Kiến Thức Chuyên Môn

**Là gì:** 59 "bộ kiến thức" AI sẽ học khi cần

**Ví dụ:**
| Skill | Chứa gì |
|-------|---------|
| `ui-ux-pro-max` | 50 styles, 21 bảng màu, 50 fonts |
| `debugging` | Framework debug 4 bước |
| `better-auth` | Hướng dẫn OAuth, 2FA |

📖 [Xem chi tiết skills/README.md](skills/README.md)

---

### 🧭 router/ - Bộ Định Tuyến

**Là gì:** "Bộ não quyết định" - giúp AI chọn đúng agent/command/skill

**Cách hoạt động:**
```
Bạn: "Sửa lỗi login"
        ↓
Router phân tích từ khóa
        ↓
Chọn: Debugger + /fix + better-auth
        ↓
AI bắt đầu làm việc
```

📖 [Xem chi tiết router/README.md](router/README.md)

---

### 🔄 workflows/ - Phối Hợp Nhiều Bước

**Là gì:** Kịch bản cho công việc lớn cần nhiều người phối hợp

**Ví dụ:** Tính năng mới
```
Planner → Developer → Tester → Reviewer → Docs Manager
```

📖 [Xem chi tiết workflows/README.md](workflows/README.md)

---

### ⚡ hooks/ - Tự Động Hóa

**Là gì:** Code tự động chạy khi có sự kiện

**Ví dụ:**
| Sự kiện | Hook chạy |
|---------|-----------|
| Sửa file | Tự động format (Prettier) |
| Xong task | Tự động review |
| Bắt đầu session | Tự động load context |

📖 [Xem chi tiết hooks/README.md](hooks/README.md)

---

### 🔧 scripts/ - Công Cụ Tiện Ích

**Là gì:** Các scripts tiện ích hỗ trợ

**Ví dụ:**
| Script | Làm gì |
|--------|--------|
| `scan_skills.py` | Quét và tạo danh sách skills |
| `worktree.cjs` | Quản lý git worktrees |
| `ck-help.py` | Tra cứu commands |

📖 [Xem chi tiết scripts/README.md](scripts/README.md)

---

## Cách Mọi Thứ Phối Hợp

### Ví dụ: "Thêm dark mode cho app"

```
BƯỚC 1: Router phân tích
├── Từ khóa: "thêm", "dark mode"
├── Loại việc: Feature mới
└── Độ phức tạp: Trung bình

BƯỚC 2: Chọn resources
├── Agents: planner → developer → tester
├── Commands: /plan → /code → /test
├── Skills: ui-ux-pro-max, frontend-development
└── Workflow: primary-workflow

BƯỚC 3: Thực hiện
├── Planner lên kế hoạch
├── Developer viết code
├── Tester viết tests
└── Hooks tự động format, review

BƯỚC 4: Hoàn thành
├── Code merged
├── Docs updated (tự động)
└── Changelog ghi nhận (tự động)
```

---

## Bảng Tham Khảo Nhanh

| Cần gì | Xem ở đâu |
|--------|-----------|
| AI làm việc như ai | `agents/` |
| Làm theo quy trình nào | `commands/` |
| Cần kiến thức gì | `skills/` |
| AI quyết định thế nào | `router/` |
| Việc lớn nhiều bước | `workflows/` |
| Tự động hóa | `hooks/` |
| Công cụ tiện ích | `scripts/` |

---

## Các Files Cấu Hình

| File | Chức năng |
|------|-----------|
| `settings.json` | Cấu hình chung |
| `.env` | Biến môi trường (không commit) |
| `.env.example` | Template biến môi trường |
| `.mcp.json.example` | Cấu hình MCP servers |
| `.gitignore` | Files không commit |

---

## Tóm Tắt

| Thư mục | Số lượng | Chức năng |
|---------|----------|-----------|
| agents | 17 | Vai trò chuyên gia |
| commands | 50+ | Quy trình làm việc |
| skills | 59 | Kiến thức chuyên môn |
| router | 5 | Định tuyến quyết định |
| workflows | 4 | Phối hợp nhiều bước |
| hooks | 15+ | Tự động hóa |
| scripts | 10+ | Công cụ tiện ích |

---

## Bắt Đầu Từ Đâu?

### Nếu bạn mới:
1. Đọc [agents/README.md](agents/README.md) - Hiểu các vai trò
2. Đọc [commands/README.md](commands/README.md) - Hiểu các quy trình
3. Thử nghiệm với các yêu cầu đơn giản

### Nếu bạn muốn customize:
1. Xem [skills/README.md](skills/README.md) - Tạo skill riêng
2. Xem [hooks/README.md](hooks/README.md) - Thêm automation
3. Xem [router/README.md](router/README.md) - Hiểu logic quyết định

---

## Liên Kết Nhanh

- [📖 AGENTS.md](../AGENTS.md) - Quy tắc làm việc chính
- [📖 README.md](../README.md) - Tổng quan project
- [🔧 Settings](settings.json) - Cấu hình
