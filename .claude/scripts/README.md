# 🔧 Scripts - Công Cụ Hỗ Trợ

## Scripts là gì?

**Scripts** là các "công cụ tiện ích" - các chương trình nhỏ giúp tự động hóa những việc lặp đi lặp lại. Giống như hộp công cụ trong nhà - cần thì lấy ra dùng.

**Ví dụ đơn giản:**
- **scan_skills.py** - Quét tất cả skills, tạo danh sách tự động
- **worktree.cjs** - Quản lý git worktrees
- **resolve_env.py** - Đọc và xử lý biến môi trường

---

## Cài Đặt

```bash
cd .claude/scripts
pip install -r requirements.txt
```

---

## Danh Sách Scripts

### 📋 Scripts Quản Lý

| Script | Chức Năng | Cách Dùng |
|--------|-----------|-----------|
| **scan_skills.py** | Quét tất cả skills trong thư mục | Tự động tạo danh sách skills |
| **scan_commands.py** | Quét tất cả commands | Tự động tạo danh sách commands |
| **generate_catalogs.py** | Tạo catalogs từ skills/commands | Tổng hợp thành file dễ đọc |

### 🌿 Scripts Git

| Script | Chức Năng | Cách Dùng |
|--------|-----------|-----------|
| **worktree.cjs** | Quản lý git worktrees | Tạo/xóa/list worktrees |
| **set-active-plan.cjs** | Đặt plan đang làm | Track task hiện tại |

### ⚙️ Scripts Tiện Ích

| Script | Chức Năng | Cách Dùng |
|--------|-----------|-----------|
| **resolve_env.py** | Xử lý biến môi trường | Load .env files |
| **ck-help.py** | Hiện trợ giúp commands | Tra cứu cách dùng |
| **win_compat.py** | Tương thích Windows | Fix path issues |

### 📄 Files Dữ Liệu

| File | Chức Năng | Ghi Chú |
|------|-----------|---------|
| **skills_data.yaml** | Dữ liệu skills | Được generate tự động |
| **commands_data.yaml** | Dữ liệu commands | Được generate tự động |
| **requirements.txt** | Python dependencies | Cài bằng pip |

---

## Chi Tiết Scripts Quan Trọng

### 1. resolve_env.py - Xử Lý Biến Môi Trường

**Chức năng:** Đọc biến môi trường theo thứ tự ưu tiên

**Thứ tự ưu tiên (cao → thấp):**
```
1. process.env (biến runtime)              ← CAO NHẤT
2. PROJECT/.claude/skills/<skill>/.env     ← Skill cụ thể trong project
3. PROJECT/.claude/skills/.env             ← Chung cho skills trong project
4. PROJECT/.claude/.env                    ← Chung cho project
5. ~/.claude/skills/<skill>/.env           ← Skill cụ thể của user
6. ~/.claude/skills/.env                   ← Chung cho skills của user
7. ~/.claude/.env                          ← Chung cho user
                                           ← THẤP NHẤT
```

**Cách dùng:**
```bash
# Lấy biến cho skill cụ thể
python resolve_env.py --skill frontend-development --key API_KEY

# Lấy biến chung
python resolve_env.py --key DATABASE_URL
```

---

### 2. scan_skills.py - Quét Skills

**Chức năng:** Tự động quét thư mục skills và tạo danh sách

**Cách chạy:**
```bash
cd .claude/scripts
python scan_skills.py
```

**Output:** File `skills_data.yaml` chứa:
```yaml
skills:
  - name: frontend-development
    path: skills/frontend-development
    description: React/TypeScript development
  - name: debugging
    path: skills/debugging
    description: Bug diagnosis framework
  # ... và tất cả skills khác
```

**Khi nào dùng:**
- Sau khi thêm skill mới
- Cần cập nhật danh sách skills

---

### 3. worktree.cjs - Quản Lý Worktrees

**Chức năng:** Quản lý git worktrees (làm nhiều branches song song)

**Git worktree là gì?**
```
Bình thường:
project/
└── (chỉ 1 branch tại một thời điểm)

Với worktree:
project/           ← branch main
project-feature/   ← branch feature (thư mục riêng)
project-hotfix/    ← branch hotfix (thư mục riêng)

→ Có thể làm nhiều branches cùng lúc!
```

**Các lệnh:**
```bash
# Tạo worktree mới
node worktree.cjs create feature/login

# Liệt kê worktrees
node worktree.cjs list

# Xóa worktree
node worktree.cjs remove feature/login
```

---

### 4. ck-help.py - Trợ Giúp Commands

**Chức năng:** Hiển thị hướng dẫn sử dụng commands

**Cách dùng:**
```bash
# Xem tất cả commands
python ck-help.py

# Xem chi tiết 1 command
python ck-help.py fix

# Xem command variants
python ck-help.py fix --all
```

**Output:**
```
/fix - Sửa bugs
  Variants:
  - /fix/fast  - Sửa nhanh lỗi đơn giản
  - /fix/hard  - Sửa lỗi phức tạp
  - /fix/ui    - Sửa lỗi giao diện
  ...
```

---

## Cấu Trúc Thư Mục

```
scripts/
├── README.md                 ← File này
│
├── scan_skills.py           ← Quét skills
├── scan_commands.py         ← Quét commands
├── generate_catalogs.py     ← Tạo catalogs
│
├── worktree.cjs             ← Quản lý worktrees
├── worktree.test.cjs        ← Tests cho worktree
├── set-active-plan.cjs      ← Set plan hiện tại
│
├── resolve_env.py           ← Xử lý .env
├── ck-help.py               ← Trợ giúp
├── win_compat.py            ← Windows compatibility
│
├── skills_data.yaml         ← Data skills (generated)
├── commands_data.yaml       ← Data commands (generated)
└── requirements.txt         ← Python dependencies
```

---

## Ví Dụ Sử Dụng

### Ví dụ 1: Cập nhật danh sách skills

```bash
# 1. Thêm skill mới vào thư mục skills/
# 2. Chạy scan
cd .claude/scripts
python scan_skills.py

# 3. Kiểm tra kết quả
cat skills_data.yaml
```

### Ví dụ 2: Làm việc song song 2 features

```bash
# 1. Tạo worktree cho feature A
node worktree.cjs create feature/login

# 2. Tạo worktree cho feature B  
node worktree.cjs create feature/payment

# 3. Làm việc trên feature A
cd ../project-feature-login
# ... code ...

# 4. Xong thì xóa worktrees
node worktree.cjs remove feature/login
```

### Ví dụ 3: Tra cứu command

```bash
python ck-help.py fix --all
```

---

## Tóm Tắt

| Khái niệm | Giải thích |
|-----------|------------|
| **Scripts là gì** | Công cụ tiện ích tự động hóa |
| **Có bao nhiêu** | ~10 scripts chính |
| **Viết bằng gì** | Python (.py) và Node.js (.cjs) |
| **Khi nào dùng** | Khi cần tự động hóa việc lặp lại |

---

## Xem Thêm

- [Hooks (Tự động hóa)](../hooks/README.md)
- [Skills (Kiến thức)](../skills/README.md)
- [Commands (Quy trình)](../commands/README.md)
