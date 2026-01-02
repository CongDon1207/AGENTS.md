# 🤖 AGENTS.md - Hệ Thống Quản Lý AI Agent

## Tổng Quan

Repository này định nghĩa **quy tắc và cấu hình** giúp AI coding agents làm việc thông minh, nhất quán và chuyên nghiệp hơn. Thay vì AI trả lời như chatbot thông thường, hệ thống này biến AI thành một **đội ngũ chuyên gia đầy đủ**.

---

## Tại Sao Cần Hệ Thống Này?

| ❌ Không có AGENTS.md | ✅ Có AGENTS.md |
|----------------------|-----------------|
| AI trả lời chung chung | AI làm việc như chuyên gia |
| Không có quy trình rõ ràng | Quy trình chuẩn cho mọi loại việc |
| Thiếu kiến thức chuyên sâu | 59 bộ kiến thức sẵn sàng |
| Dễ bỏ sót, không nhất quán | Đảm bảo chất lượng, nhất quán |

---

## Hỗ Trợ Các AI Agents

- **GitHub Copilot** - AI pair programmer của Microsoft
- **Cursor** - Code editor tích hợp AI
- **Claude** - AI assistant của Anthropic
- **Các AI coding assistants khác** - Framework mở rộng

---

## Cấu Trúc Repository

```
AGENTS.md/
│
├── 📄 AGENTS.md              ← Quy tắc làm việc chính (AI đọc file này)
├── 📄 README.md              ← File này (hướng dẫn cho người đọc)
│
└── 📁 .claude/               ← Trung tâm điều khiển AI
    │
    ├── 🤖 agents/            ← 17 vai trò chuyên gia
    │   ├── README.md         ← Hướng dẫn về agents
    │   ├── debugger.md       ← Thợ săn lỗi
    │   ├── planner.md        ← Kiến trúc sư
    │   ├── fullstack-developer.md
    │   └── ... (17 agents)
    │
    ├── 📋 commands/          ← 50+ quy trình làm việc
    │   ├── README.md         ← Hướng dẫn về commands
    │   ├── code.md           ← Quy trình viết code
    │   ├── fix.md            ← Quy trình sửa bug
    │   ├── plan.md           ← Quy trình lập kế hoạch
    │   └── ... (50+ commands)
    │
    ├── 📚 skills/            ← 59 bộ kiến thức chuyên môn
    │   ├── README.md         ← Hướng dẫn về skills
    │   ├── frontend-development/
    │   ├── debugging/
    │   ├── ui-ux-pro-max/
    │   └── ... (59 skills)
    │
    ├── 🧭 router/            ← Bộ định tuyến quyết định
    │   ├── README.md         ← Hướng dẫn về router
    │   ├── decision-flow.md  ← Quy trình quyết định
    │   ├── agents-guide.md   ← Danh sách agents
    │   ├── commands-guide.md ← Danh sách commands
    │   └── skills-guide.md   ← Danh sách skills
    │
    ├── 🔄 workflows/         ← 4 kịch bản phối hợp
    │   ├── README.md         ← Hướng dẫn về workflows
    │   ├── primary-workflow.md
    │   └── orchestration-protocol.md
    │
    ├── ⚡ hooks/             ← 15+ scripts tự động
    │   ├── README.md         ← Hướng dẫn về hooks
    │   ├── post-edit-prettier.cjs
    │   └── session-init.cjs
    │
    └── 🔧 scripts/           ← 10+ công cụ tiện ích
        ├── README.md         ← Hướng dẫn về scripts
        ├── scan_skills.py
        └── worktree.cjs
```

---

## Các Thành Phần Chính

### 1. 🤖 Agents (Vai Trò) - "AI sẽ nhập vai ai?"

17 vai trò chuyên gia, mỗi vai có cách suy nghĩ và làm việc riêng:

| Agent | Vai Trò | Khi Nào Dùng |
|-------|---------|--------------|
| debugger | Thợ săn lỗi | "Bug", "lỗi", "crash" |
| planner | Kiến trúc sư | "Kế hoạch", "thiết kế" |
| fullstack-developer | Lập trình viên | "Code", "viết", "tạo" |
| tester | Viết test | "Test", "kiểm tra" |
| ui-ux-designer | Thiết kế UI | "UI", "giao diện", "đẹp" |
| ... | ... | ... |

📖 [Xem đầy đủ 17 agents](.claude/agents/README.md)

---

### 2. 📋 Commands (Quy Trình) - "Làm theo bước nào?"

50+ quy trình chuẩn cho mọi loại việc:

| Command | Chức Năng | Variants |
|---------|-----------|----------|
| `/fix` | Sửa bug | fast, hard, ui, types... |
| `/code` | Viết code | auto, no-test, parallel |
| `/plan` | Lập kế hoạch | fast, hard, two-phase |
| `/design` | Thiết kế UI | fast, good, screenshot |
| ... | ... | ... |

📖 [Xem đầy đủ 50+ commands](.claude/commands/README.md)

---

### 3. 📚 Skills (Kiến Thức) - "Cần biết gì?"

59 bộ kiến thức chuyên sâu, AI load khi cần:

| Nhóm | Số Skills | Ví Dụ |
|------|-----------|-------|
| Frontend & UI | 11 | ui-ux-pro-max, frontend-development |
| Backend & DB | 4 | backend-development, databases |
| Testing & Debug | 5 | debugging, test-generation |
| DevOps & Tools | 7 | devops, mcp-builder |
| AI & Multimodal | 3 | ai-multimodal, ai-artist |
| ... | ... | ... |

📖 [Xem đầy đủ 59 skills](.claude/skills/README.md)

---

### 4. 🧭 Router (Định Tuyến) - "Chọn gì?"

Bộ não giúp AI quyết định dùng agent/command/skill nào:

```
Yêu cầu: "Sửa lỗi login không được"
              ↓
         Router phân tích
              ↓
    Agent: debugger
    Command: /fix
    Skill: better-auth (nếu cần)
              ↓
         AI bắt đầu làm
```

📖 [Xem chi tiết router](.claude/router/README.md)

---

### 5. 🔄 Workflows (Phối Hợp) - "Việc lớn làm sao?"

Kịch bản cho công việc phức tạp nhiều bước:

```
Tính năng mới:
Planner → Developer → Tester → Reviewer → Docs Manager
```

📖 [Xem chi tiết workflows](.claude/workflows/README.md)

---

### 6. ⚡ Hooks (Tự Động) - "Tự động làm gì?"

Scripts tự động chạy khi có sự kiện:

| Sự kiện | Hook làm gì |
|---------|-------------|
| Sửa file | Tự động format code |
| Xong task | Tự động review |
| Bắt đầu session | Tự động load context |

📖 [Xem chi tiết hooks](.claude/hooks/README.md)

---

## Cách Sử Dụng

### Bước 1: Clone repository
```bash
git clone https://github.com/your-repo/AGENTS.md
```

### Bước 2: Copy vào project của bạn
```bash
cp -r AGENTS.md/.claude your-project/
cp AGENTS.md/AGENTS.md your-project/
```

### Bước 3: (Tùy chọn) Cài dependencies cho skills
```bash
cd your-project/.claude/skills
./install.sh  # Linux/macOS
# hoặc
.\install.ps1  # Windows
```

### Bước 4: Bắt đầu làm việc với AI

AI sẽ tự động đọc `AGENTS.md` và `.claude/` để hiểu cách làm việc.

---

## Ví Dụ Thực Tế

### Ví dụ 1: Sửa bug đơn giản
```
Bạn: "Sửa lỗi button không click được"

AI:
- Load: debugger agent + /fix/ui command
- Phân tích: Tìm button, check event handler
- Sửa: Thêm onClick handler
- Verify: Test lại
```

### Ví dụ 2: Tính năng phức tạp
```
Bạn: "Thêm hệ thống thanh toán Stripe"

AI:
- Load: planner → developer → tester
- Load: /plan/hard → /code → /test
- Load skills: payment-integration, backend-development
- Workflow: primary-workflow (nhiều giai đoạn)
- Kết quả: Code + Tests + Docs
```

---

## Tùy Chỉnh

### Thêm agent mới
Tạo file `.claude/agents/my-agent.md` theo template.

### Thêm command mới
Tạo file `.claude/commands/my-command.md` theo template.

### Thêm skill mới
Tạo thư mục `.claude/skills/my-skill/SKILL.md` theo template.

📖 [Xem hướng dẫn tạo skill](.claude/skills/skill-creator/SKILL.md)

---

## Đóng Góp

1. Fork repository
2. Tạo branch: `git checkout -b feature/ten-tinh-nang`
3. Commit: `git commit -m "Thêm tính năng X"`
4. Push: `git push origin feature/ten-tinh-nang`
5. Tạo Pull Request

---

## Tài Liệu Tham Khảo

| Tài liệu | Mô tả |
|----------|-------|
| [.claude/README.md](.claude/README.md) | Tổng quan thư mục .claude |
| [agents/README.md](.claude/agents/README.md) | Hướng dẫn agents |
| [commands/README.md](.claude/commands/README.md) | Hướng dẫn commands |
| [skills/README.md](.claude/skills/README.md) | Hướng dẫn skills |
| [router/README.md](.claude/router/README.md) | Hướng dẫn router |
| [AGENTS.md](AGENTS.md) | Quy tắc làm việc chính |

---

## License

Apache 2.0 - Xem file [LICENSE](LICENSE) để biết chi tiết.

---

## Thống Kê

| Thành phần | Số lượng |
|------------|----------|
| Agents | 17 |
| Commands | 50+ |
| Skills | 59 |
| Workflows | 4 |
| Hooks | 15+ |
| Scripts | 10+ |

---

*Được tạo để giúp AI làm việc thông minh hơn, chuyên nghiệp hơn.* 🚀

