# Danh Sách & Vai Trò Agents

Thư mục này định nghĩa các "Agent" (Nhân sự ảo) mà AI có thể nhập vai. Mỗi agent là một chuyên gia với bộ kỹ năng, tư duy và checklist riêng biệt để xử lý các loại công việc khác nhau một cách chuyên nghiệp.

> **Ví dụ:** Khi bạn nhờ sửa lỗi, AI sẽ không dùng "kiến thức chung" mà sẽ nhập vai **Debugger** với quy trình sắn lỗi chuyên sâu.

---

## 🛠 Nhóm Phát Triển (Development)

Nhóm chuyên trách về code, kiểm thử và chất lượng phần mềm.

| Agent | Vai trò chuyên môn | Khi nào sử dụng? | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **`fullstack-developer`** | **Lập trình viên** | Khi cần viết code, thêm tính năng, sửa đổi logic, tạo component mới. | - Viết code sạch (Clean Code)<br>- Implement tính năng<br>- Refactor code nhỏ |
| **`code-reviewer`** | **Người kiểm duyệt** | Khi cần đánh giá chất lượng code, kiểm tra Pull Request, hoặc tìm lỗi tiềm ẩn. | - Review code theo tiêu chuẩn<br>- Tìm lỗ hổng logic/bảo mật<br>- Đề xuất tối ưu hóa |
| **`tester`** | **Kỹ sư kiểm thử** | Khi cần viết Unit Test, Integration Test hoặc kiểm tra độ bao phủ (coverage). | - Viết kịch bản test<br>- Viết code test tự động (Jest, xUnit...)<br>- Đảm bảo logic đúng đắn |
| **`mcp-manager`** | **Chuyên gia MCP** | Khi cần tích hợp, cài đặt hoặc sửa lỗi liên quan đến Model Context Protocol (MCP). | - Quản lý kết nối tool ngoài<br>- Debug lỗi server MCP |

## 🔍 Nhóm Điều Tra & Xử Lý Sự Cố (Investigation)

Nhóm chuyên trách việc tìm kiếm thông tin và sửa lỗi.

| Agent | Vai trò chuyên môn | Khi nào sử dụng? | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **`debugger`** | **Thợ săn lỗi** | Khi gặp bug, crash, error message hoặc hành vi hệ thống bất thường. | - Phân tích Stack Trace<br>- Khoanh vùng lỗi (Root Cause Analysis)<br>- Đề xuất và kiểm chứng bản fix |
| **`scout`** | **Thám tử nội bộ** | Khi bạn quên vị trí file, muốn tìm hàm nào đó, hoặc hiểu cấu trúc dự án. | - Tìm kiếm file/code trong dự án<br>- Vẽ bản đồ cấu trúc thư mục<br>- Trích xuất thông tin code |
| **`scout-external`** | **Thám tử Internet** | Khi cần tìm thư viện mới, tra cứu API docs bên ngoài, hoặc so sánh công nghệ. | - Tìm tài liệu kỹ thuật<br>- So sánh các thư viện open-source<br>- Tra cứu lỗi trên mạng |

## 🧠 Nhóm Quản Lý & Kế Hoạch (Planning)

Nhóm định hướng, thiết kế và quản lý tiến độ.

| Agent | Vai trò chuyên môn | Khi nào sử dụng? | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **`planner`** | **Kiến trúc sư** | Khi bắt đầu một task lớn, cần thiết kế hệ thống hoặc chia nhỏ công việc. | - Lập Implementation Plan<br>- Thiết kế Architecture<br>- Phân tích rủi ro |
| **`project-manager`** | **Quản lý dự án** | Khi cần theo dõi tiến độ, cập nhật trạng thái task, hoặc tạo báo cáo. | - Quản lý file `task.md`<br>- Theo dõi checklist<br>- Báo cáo tiến độ |
| **`researcher`** | **Nhà nghiên cứu** | Khi cần phân tích sâu về một giải pháp, công nghệ mới trước khi quyết định. | - Nghiên cứu chuyên sâu (Deep Dive)<br>- So sánh Pros/Cons<br>- Đề xuất giải pháp tối ưu |
| **`brainstormer`** | **Người sáng tạo** | Khi bí ý tưởng, cần giải pháp đột phá hoặc tìm góc nhìn mới. | - Gợi ý ý tưởng (Brainstorm)<br>- Phản biện giả thuyết<br>- Đề xuất giải pháp sáng tạo |

## 🎨 Nhóm Thiết Kế & Nội Dung (Creative)

Nhóm chịu trách nhiệm về giao diện và tài liệu.

| Agent | Vai trò chuyên môn | Khi nào sử dụng? | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **`ui-ux-designer`** | **Nhà thiết kế** | Khi cần làm giao diện đẹp, cải thiện trải nghiệm người dùng (UX). | - Thiết kế UI/UX<br>- Đề xuất màu sắc/bố cục<br>- Review giao diện |
| **`docs-manager`** | **Người viết tài liệu** | Khi cần viết README, hướng dẫn sử dụng, API docs. | - Viết và cập nhật tài liệu kỹ thuật<br>- Đảm bảo tài liệu đồng bộ với code |
| **`copywriter`** | **Người viết nội dung** | (Tùy chọn) Viết nội dung marketing, thông báo release. | - Viết Changelog<br>- Viết thông báo người dùng |

## 🔧 Nhóm Hỗ Trợ Kỹ Thuật (Support)

Nhóm công cụ hỗ trợ hạ tầng và quy trình.

| Agent | Vai trò chuyên môn | Khi nào sử dụng? | Nhiệm vụ chính |
| :--- | :--- | :--- | :--- |
| **`git-manager`** | **Chuyên gia Git** | Khi cần xử lý conflict, merge branch, quản lý version control phức tạp. | - Quản lý git flow<br>- Xử lý merge conflict<br>- Cherry-pick, Rebase |
| **`database-admin`** | **Quản trị CSDL** | Khi thiết kế database, viết query phức tạp, migration dữ liệu. | - Thiết kế Schema<br>- Tối ưu SQL/NoSQL query<br>- Quản lý Migration |

---

## 💡 Cơ Chế Hoạt Động

1.  **Tự động nhận diện**: System sẽ phân tích yêu cầu của bạn (ví dụ: "Sửa lỗi X...") để chọn Agent phù hợp (Debugger).
2.  **Kích hoạt thủ công**: Bạn có thể yêu cầu cụ thể "Dùng Planner để lập kế hoạch cho tôi...".
3.  **Hợp tác**: Các Agent có thể làm việc cùng nhau (ví dụ: Planner lập kế hoạch -> Developer thực hiện -> Tester kiểm tra).
