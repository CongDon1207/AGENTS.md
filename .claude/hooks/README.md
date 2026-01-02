# ⚡ Hooks - Tự Động Hóa Theo Sự Kiện

## Hooks là gì?

**Hooks** là các "trigger tự động" - code sẽ tự chạy khi có sự kiện nhất định xảy ra. Giống như cài báo thức vậy - đến giờ thì tự động reo, không cần bạn bấm gì.

**Ví dụ đơn giản:**
- Khi **bắt đầu session** → Tự động chào và kiểm tra trạng thái dự án
- Khi **sửa file** → Tự động format code (Prettier)
- Khi **hoàn thành task** → Tự động review lại code
- Khi **kết thúc session** → Tự động ghi log công việc

---

## Danh Sách Hooks

### 🟢 Hooks Khởi Động

| Hook | Chạy Khi Nào | Làm Gì |
|------|--------------|--------|
| **session-init.cjs** | Bắt đầu session mới | Load context, kiểm tra dự án |
| **subagent-init.cjs** | Khởi tạo subagent | Chuẩn bị context cho subagent |

### 📝 Hooks Khi Sửa File

| Hook | Chạy Khi Nào | Làm Gì |
|------|--------------|--------|
| **post-edit-prettier.cjs** | Sau khi sửa file | Format code bằng Prettier |
| **write-compact-marker.cjs** | Khi ghi file | Đánh dấu compact writes |

### 🔍 Hooks Review & Kiểm Tra

| Hook | Chạy Khi Nào | Làm Gì |
|------|--------------|--------|
| **post-task-review.cjs** | Sau khi hoàn thành task | Tự động review code |
| **workflow-router.cjs** | Khi cần chọn workflow | Định tuyến đến workflow phù hợp |
| **dev-rules-reminder.cjs** | Khi code | Nhắc nhở quy tắc phát triển |

### 🔒 Hooks Bảo Mật

| Hook | Chạy Khi Nào | Làm Gì |
|------|--------------|--------|
| **privacy-block.cjs** | Khi truy cập dữ liệu | Chặn truy cập dữ liệu nhạy cảm |
| **scout-block.cjs** | Khi tìm kiếm | Chặn tìm kiếm vào vùng cấm |

### 📚 Hooks Context

| Hook | Chạy Khi Nào | Làm Gì |
|------|--------------|--------|
| **backend-csharp-context.cjs** | Làm việc với C# | Load context cho C# |
| **frontend-typescript-context.cjs** | Làm việc với TypeScript | Load context cho TS |
| **design-system-context.cjs** | Thiết kế UI | Load design system |
| **scss-styling-context.cjs** | Làm với SCSS | Load SCSS context |

### 📢 Hooks Thông Báo

| Hook | Chạy Khi Nào | Làm Gì |
|------|--------------|--------|
| **notify-waiting.js** | AI đang chờ input | Gửi thông báo cho user |
| **session-end.cjs** | Kết thúc session | Ghi log, dọn dẹp |

---

## Cách Hooks Hoạt Động

### Luồng hoạt động

```
   Sự kiện xảy ra (ví dụ: sửa file)
              ↓
   Hệ thống kiểm tra có hook nào cần chạy
              ↓
┌─────────────────────────────────┐
│  Hook được kích hoạt            │
│  (post-edit-prettier.cjs)       │
│                                 │
│  1. Nhận thông tin file         │
│  2. Chạy Prettier format        │
│  3. Lưu file đã format          │
└─────────────────────────────────┘
              ↓
   Tiếp tục công việc bình thường
```

### Ví dụ cụ thể

**Bạn sửa file `App.tsx`:**

```
1. Bạn lưu file
2. Hook post-edit-prettier.cjs tự động chạy
3. Prettier format lại code
4. File được cập nhật với format chuẩn
```

Bạn không cần làm gì - tất cả tự động!

---

## Cấu Trúc Thư Mục Hooks

```
hooks/
├── session-init.cjs            ← Khởi động session
├── session-end.cjs             ← Kết thúc session
├── post-edit-prettier.cjs      ← Format sau khi edit
├── post-task-review.cjs        ← Review sau task
├── workflow-router.cjs         ← Định tuyến workflow
├── privacy-block.cjs           ← Bảo vệ privacy
├── scout-block.cjs             ← Chặn tìm kiếm cấm
├── dev-rules-reminder.cjs      ← Nhắc quy tắc
├── notify-waiting.js           ← Thông báo chờ
│
├── lib/                        ← Thư viện dùng chung
│   └── helpers.js
│
├── notifications/              ← Cấu hình thông báo
│   └── config.json
│
├── docs/                       ← Tài liệu hooks
│   └── how-to-create.md
│
└── tests/                      ← Tests cho hooks
    └── *.test.js
```

---

## Hooks Quan Trọng Nhất

### 1. session-init.cjs - Khởi Động Session

**Chạy khi:** Bạn bắt đầu làm việc với Claude

**Làm gì:**
- Đọc context dự án
- Load settings
- Kiểm tra có task dang dở không
- Chào bạn và tóm tắt trạng thái

---

### 2. post-edit-prettier.cjs - Auto Format

**Chạy khi:** Bạn sửa file code

**Làm gì:**
- Phát hiện loại file (JS, TS, CSS...)
- Chạy Prettier với config phù hợp
- Lưu file đã format

**Lợi ích:** Code luôn format chuẩn, không cần manual format

---

### 3. post-task-review.cjs - Auto Review

**Chạy khi:** Hoàn thành một task

**Làm gì:**
- Review code vừa viết
- Check conventions
- Báo cáo nếu có vấn đề

**Lợi ích:** Phát hiện lỗi sớm, trước khi commit

---

### 4. privacy-block.cjs - Bảo Vệ Dữ Liệu

**Chạy khi:** AI truy cập files

**Làm gì:**
- Kiểm tra file có nhạy cảm không (.env, secrets...)
- Chặn truy cập nếu cấm
- Log các truy cập

**Lợi ích:** Bảo vệ dữ liệu nhạy cảm

---

## Tạo Hook Mới

Nếu muốn tạo hook riêng:

**1. Tạo file trong thư mục hooks:**
```
hooks/my-custom-hook.cjs
```

**2. Viết code hook:**
```javascript
// hooks/my-custom-hook.cjs

module.exports = {
  // Tên hook
  name: 'my-custom-hook',
  
  // Chạy khi nào
  trigger: 'post-edit', // hoặc 'pre-edit', 'session-start'...
  
  // Logic xử lý
  async run(context) {
    // Lấy thông tin file vừa sửa
    const { filePath, content } = context;
    
    // Làm gì đó
    console.log(`File ${filePath} đã được sửa`);
    
    // Trả về kết quả (nếu cần)
    return { success: true };
  }
};
```

**3. Đăng ký hook** (trong settings.json)

---

## Tóm Tắt

| Khái niệm | Giải thích |
|-----------|------------|
| **Hook là gì** | Code tự động chạy khi có sự kiện |
| **Có bao nhiêu** | ~15 hooks có sẵn |
| **Khi nào chạy** | Tự động theo trigger (edit, save, session start...) |
| **Có thể tạo thêm** | Có, theo template trên |

---

## Lợi Ích Của Hooks

| Không có Hooks | Có Hooks |
|----------------|----------|
| Phải manual format code | ✅ Tự động format |
| Quên review trước commit | ✅ Tự động review |
| Context bị mất giữa sessions | ✅ Tự động load context |
| Có thể truy cập file nhạy cảm | ✅ Tự động chặn |

---

## Xem Thêm

- [Scripts (Công cụ)](../scripts/README.md)
- [Workflows (Quy trình)](../workflows/README.md)
- [Settings (Cấu hình)](../settings.json)
