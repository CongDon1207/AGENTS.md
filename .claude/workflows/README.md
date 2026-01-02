# 🔄 Workflows - Quy Trình Phối Hợp Nhiều Bước

## Workflows là gì?

**Workflows** là các "kịch bản phối hợp" cho những công việc lớn, phức tạp, cần nhiều bước và nhiều vai trò khác nhau. Giống như đạo diễn một bộ phim - cần kịch bản chi tiết ai làm gì, khi nào, theo thứ tự nào.

**Khi nào cần Workflow:**
- Tính năng mới lớn (cần plan → code → test → review → docs)
- Nhiều người/vai trò phối hợp
- Công việc kéo dài nhiều ngày/tuần
- Cần checkpoints kiểm tra chất lượng

---

## Danh Sách Workflows

| Workflow | Dùng Khi Nào | Mô Tả |
|----------|--------------|-------|
| **primary-workflow.md** | Làm tính năng mới | Quy trình chuẩn từ plan đến hoàn thành |
| **orchestration-protocol.md** | Phối hợp nhiều agents | Cách chuyển giao công việc giữa các vai trò |
| **development-rules.md** | Quy tắc phát triển | Các nguyên tắc bắt buộc khi code |
| **documentation-management.md** | Quản lý tài liệu | Quy trình cập nhật docs |

---

## Chi Tiết Từng Workflow

### 1. primary-workflow.md - Quy Trình Làm Tính Năng

**Dùng khi:** Xây dựng tính năng mới từ đầu đến cuối

**Các giai đoạn:**

```
GIAI ĐOẠN 1: LẬP KẾ HOẠCH
├── Phân tích yêu cầu
├── Thiết kế giải pháp
├── Ước lượng thời gian
└── Xác định rủi ro

    ↓ Checkpoint: Kế hoạch được duyệt

GIAI ĐOẠN 2: IMPLEMENT
├── Viết code theo kế hoạch
├── Tự review code
├── Viết unit tests
└── Fix bugs phát sinh

    ↓ Checkpoint: Code pass tests

GIAI ĐOẠN 3: KIỂM THỬ
├── Chạy toàn bộ tests
├── Test integration
├── Test edge cases
└── Fix issues

    ↓ Checkpoint: Tất cả tests pass

GIAI ĐOẠN 4: REVIEW
├── Code review
├── Security review
├── Performance check
└── Fix feedback

    ↓ Checkpoint: Review approved

GIAI ĐOẠN 5: HOÀN THÀNH
├── Cập nhật docs
├── Update changelog
├── Merge code
└── Deploy (nếu cần)
```

---

### 2. orchestration-protocol.md - Quy Trình Phối Hợp

**Dùng khi:** Cần nhiều "chuyên gia" (agents) làm việc cùng nhau

**Nguyên tắc chuyển giao:**

```
Agent A hoàn thành
       ↓
┌──────────────────────────┐
│ CHUYỂN GIAO              │
│ • Tóm tắt đã làm gì      │
│ • Còn gì cần làm         │
│ • Files đã thay đổi      │
│ • Vấn đề cần lưu ý       │
└──────────────────────────┘
       ↓
Agent B tiếp nhận
```

**Ví dụ phối hợp:**

| Thứ tự | Agent | Làm gì | Chuyển cho |
|--------|-------|--------|------------|
| 1 | Planner | Lập kế hoạch | Developer |
| 2 | Developer | Viết code | Tester |
| 3 | Tester | Viết tests | Reviewer |
| 4 | Reviewer | Review code | Docs Manager |
| 5 | Docs Manager | Viết docs | (Hoàn thành) |

---

### 3. development-rules.md - Quy Tắc Phát Triển

**Dùng khi:** Luôn áp dụng khi viết code

**Các quy tắc chính:**

| Quy tắc | Ý nghĩa |
|---------|---------|
| **Minimal changes** | Chỉ sửa những gì cần thiết, không sửa thừa |
| **Reuse before write** | Dùng code có sẵn trước, không viết lại |
| **Test required** | Code mới phải có test |
| **No magic numbers** | Không dùng số trực tiếp, dùng constants |
| **Clear naming** | Đặt tên rõ ràng, dễ hiểu |
| **File < 300 lines** | File quá dài thì phải tách |

---

### 4. documentation-management.md - Quản Lý Tài Liệu

**Dùng khi:** Cần cập nhật tài liệu dự án

**Quy trình cập nhật:**

```
SAU KHI HOÀN THÀNH CÔNG VIỆC
           ↓
┌─────────────────────────────────┐
│ Kiểm tra cần update docs nào?   │
│ □ README.md (nếu thay đổi lớn)  │
│ □ CHANGELOG.md (mọi thay đổi)   │
│ □ docs/structure.md (cấu trúc)  │
│ □ API docs (nếu thay đổi API)   │
└─────────────────────────────────┘
           ↓
    Cập nhật các file cần thiết
           ↓
    Review và commit
```

---

## Ví Dụ Thực Tế

### Ví dụ: Thêm Tính Năng "Gửi Email Thông Báo"

**Bước 1: Load workflow**
```
AI load: primary-workflow.md
```

**Bước 2: Giai đoạn Planning**
```
Planner agent làm việc:
- Phân tích: Cần gửi email khi nào?
- Thiết kế: Dùng service nào? (SendGrid, SES?)
- Ước lượng: ~2 ngày
- Rủi ro: Rate limiting, spam filter

→ Output: Kế hoạch chi tiết
```

**Bước 3: Giai đoạn Implement**
```
Developer agent làm việc:
- Tạo EmailService class
- Implement sendNotification()
- Viết unit tests
- Tích hợp vào notification flow

→ Output: Code hoàn chỉnh + tests
```

**Bước 4: Giai đoạn Test**
```
Tester agent làm việc:
- Chạy unit tests
- Test gửi email thật (sandbox)
- Test edge cases (email invalid, service down)

→ Output: Test report
```

**Bước 5: Giai đoạn Review**
```
Reviewer agent làm việc:
- Review code quality
- Check security (no hardcoded credentials)
- Check performance

→ Output: Approval hoặc feedback
```

**Bước 6: Giai đoạn Docs**
```
Docs Manager agent làm việc:
- Update README (new feature)
- Update CHANGELOG
- Add API documentation

→ Output: Docs updated
```

---

## Khi Nào Cần Workflow?

| Tình huống | Cần workflow? |
|------------|---------------|
| Sửa typo | ❌ Không |
| Thêm button đơn giản | ❌ Không |
| Thêm tính năng lớn | ✅ primary-workflow |
| Refactor hệ thống | ✅ primary-workflow |
| Nhiều người cùng làm | ✅ orchestration-protocol |
| Cần docs chuẩn | ✅ documentation-management |

---

## Tóm Tắt

| Khái niệm | Giải thích |
|-----------|------------|
| **Workflow là gì** | Kịch bản phối hợp cho công việc lớn |
| **Có bao nhiêu** | 4 workflows chính |
| **Khi nào dùng** | Công việc lớn, nhiều bước, nhiều vai trò |
| **Ai quyết định** | AI tự động khi nhận diện công việc phức tạp |

---

## Xem Thêm

- [Danh sách Agents (Vai trò)](../agents/README.md)
- [Danh sách Commands (Quy trình)](../commands/README.md)
- [Danh sách Skills (Kiến thức)](../skills/README.md)
- [Router (Bộ định tuyến)](../router/README.md)
