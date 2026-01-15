# Danh mục Kỹ năng (Skills Catalog)

Thư mục này chứa các "Kỹ năng" (Skills) mà AI Agent có thể sử dụng để giải quyết các nhiệm vụ chuyên biệt. Mỗi skill bao gồm hướng dẫn quy trình (SOP), các mẫu code, và checklist chất lượng.

> **Lưu ý**: Để sử dụng skill, Agent sẽ tự động "đọc" file `SKILL.md` tương ứng khi phát hiện từ khóa liên quan trong yêu cầu của bạn.

---

## 📚 Bảng Tra Cứu Kỹ Năng

| Tên Skill | Nhóm (Category) | Mô tả chi tiết & Công dụng | Khi nào sử dụng? |
| :--- | :--- | :--- | :--- |
| **`ai-artist`** | AI & Prompting | Chuyên gia về Prompt Engineering. Giúp viết, tối ưu và tinh chỉnh prompt cho các model AI khác (Gemini, ChatGPT, Midjourney, Stable Diffusion). | Khi cần tạo ảnh, video, hoặc cần một prompt "chuẩn chỉ" để hỏi AI khác. |
| **`arch-performance-optimization`** | Architecture | Quy trình phân tích và tối ưu hóa hiệu năng hệ thống. Bao gồm checklist kiểm tra DB Index, Caching strategy, nén API response và tối ưu Frontend rendering. | Khi ứng dụng chạy chậm, API lag, hoặc cần audit hiệu năng trước khi release. |
| **`arch-security-review`** | Architecture | Kiểm tra bảo mật toàn diện. Rà soát các vấn đề về Authentication, Authorization (RBAC/ABAC), Input Validation, và Data Encryption. | Trước khi deploy tính năng nhạy cảm hoặc định kỳ rà soát bảo mật. |
| **`backend-development`** | Development | Hướng dẫn phát triển Backend chuẩn công nghiệp. Bao gồm cấu trúc dự án (Clean Arch), REST/GraphQL API design, Error Handling, và Logging. | Khi bắt đầu dự án backend mới hoặc refactor module backend. |
| **`bug-diagnosis`** | Debugging | Quy trình chẩn đoán lỗi khoa học. Hướng dẫn phân tích Stack Trace, Log patterns, và phương pháp khoanh vùng lỗi để tìm Root Cause. | Khi gặp lỗi crash, exception, hoặc hành vi hệ thống không mong muốn. |
| **`chrome-devtools`** | Automation | Điều khiển trình duyệt Chrome qua Puppeteer. Hỗ trợ chụp ảnh màn hình, cào dữ liệu (scraping), điền form tự động và debug giao diện. | Khi cần test UI tự động, lấy dữ liệu web, hoặc kiểm tra hiển thị. |
| **`code-review`** | Quality | Quy trình Review Code nghiêm ngặt. Tập trung vào tư duy phản biện, kỹ thuật "Nhận xét" và "Phản hồi" review để đảm bảo chất lượng code cao nhất. | Khi cần review PR (Pull Request) hoặc tự review code trước khi commit. |
| **`databases`** | Database | Chuyên gia về cơ sở dữ liệu (MongoDB, PostgreSQL). Hướng dẫn thiết kế Schema, viết Query tối ưu, Indexing, và quản lý Migration. | Khi thiết kế CSDL mới, viết query phức tạp, hoặc tối ưu DB. |
| **`debugging`** | Debugging | Framework debug nâng cao 4 bước (Truy vết - Khoanh vùng - Giả thuyết - Kiểm chứng). Tập trung vào tư duy giải quyết vấn đề hệ thống. | Khi lỗi phức tạp, khó tái hiện, hoặc liên quan đến nhiều service. |
| **`docs-seeker`** | Research | Máy tìm kiếm tài liệu kỹ thuật thông minh. Tự động tìm và trích xuất thông tin từ documentation của các thư viện/framework phổ biến. | Khi quên cú pháp, cần tra cứu API của thư viện (ví dụ: React, NestJS...). |
| **`document-skills`** | Utilities | Bộ công cụ xử lý file văn phòng: Đọc/Ghi Word (DOCX), Excel (XLSX), PowerPoint (PPTX) và PDF. | Khi cần trích xuất dữ liệu từ file báo cáo hoặc tạo báo cáo tự động. |
| **`documentation`** | Documentation | Chiến lược và quy trình xây dựng tài liệu dự án. Bao gồm Audit tài liệu hiện có, phân tích thiếu hụt (Gap Analysis) và lập kế hoạch viết docs. | Khi dự án thiếu tài liệu hoặc cần cấu trúc lại kho tri thức. |
| **`dual-pass-review`** | Quality | Quy trình review kép bắt buộc. Pass 1: Kiểm tra logic & syntax. Pass 2: Kiểm tra convention & best practices. | Dùng sau khi code xong tính năng để tự kiểm tra lần cuối. |
| **`feature-docs`** | Documentation | Tạo tài liệu kỹ thuật cho tính năng (Feature Docs). Bao gồm mô tả tính năng, luồng dữ liệu, và Test Cases đã được kiểm chứng. | Khi hoàn thành một tính năng mới và cần bàn giao (handoff). |
| **`feature-implementation`** | Development | Quy trình Implement tính năng từ A-Z. Từ phân tích yêu cầu -> Design -> Code -> Test. Đảm bảo không bỏ sót bước nào. | Khi bắt đầu code một tính năng mới. |
| **`feature-investigation`** | Investigation | Kỹ năng "Thám tử" codebase. Hướng dẫn cách trace code, tìm hiểu luồng hoạt động của một tính năng có sẵn mà không cần document. | Khi cần sửa/nâng cấp tính năng cũ mà mình không phải tác giả. |
| **`frontend-design`** | Design | Tạo giao diện Frontend hiện đại, đẹp mắt. Tập trung vào thẩm mỹ, bố cục, màu sắc và trải nghiệm người dùng (UX). | Khi cần dựng giao diện mới hoặc làm đẹp giao diện cũ. |
| **`frontend-development`** | Development | Hướng dẫn phát triển Frontend (React/Vue/Angular). Các best practices về Component design, State management, và Performance. | Khi code frontend, cấu trúc component. |
| **`mcp-builder`** | Integration | Hướng dẫn xây dựng MCP Server (Model Context Protocol). Giúp kết nối AI với các công cụ/API bên ngoài của riêng bạn. | Khi muốn mở rộng khả năng của AI kết nối với tool nội bộ. |
| **`package-upgrade`** | Maintenance | Quy trình nâng cấp thư viện/dependencies an toàn. Phân tích Changelog, Breaking Changes và chiến lược update giảm rủi ro. | Khi cần update npm packages hoặc thư viện backend. |
| **`plan-analysis`** | Planning | Phân tích và đánh giá bản kế hoạch (Pre-mortem). Tìm các lỗ hổng logic, rủi ro tiềm ẩn trong Implementation Plan trước khi thực thi. | Sau khi có kế hoạch (Implementation Plan), dùng skill này để "soi" lỗi. |
| **`planning`** | Planning | Kỹ năng lập kế hoạch kỹ thuật tổng thể. Chia nhỏ task, xác định dependencies, ước lượng rủi ro và tài nguyên. | Bước đầu tiên của mọi task phức tạp. |
| **`planning-with-files`** | Planning | Quản lý kế hoạch bằng file Markdown (theo phong cách Project Management). Theo dõi tiến độ qua các file `todo.md`, `plan.md`. | Dùng cho các dự án dài hơi cần theo dõi trạng thái chi tiết. |
| **`problem-solving`** | Thinking | Bộ công cụ tư duy giải quyết vấn đề (First Principles, 5 Whys, Inversion). Giúp thoát khỏi bế tắc khi gặp vấn đề khó. | Khi bí ý tưởng hoặc gặp vấn đề hóc búa không biết bắt đầu từ đâu. |
| **`project-index`** | Utilities | Tạo bản đồ cấu trúc dự án (`docs/structure.md`). Giúp AI và Developer mới nắm bắt nhanh vị trí các file/module quan trọng. | Chạy khi mới join dự án hoặc cấu trúc folder thay đổi nhiều. |
| **`readme-improvement`** | Documentation | Chuyên gia về README. Viết README dự án chuẩn, hấp dẫn, đầy đủ hướng dẫn cài đặt, sử dụng và đóng góp. | Khi khởi tạo repo mới hoặc muốn làm đẹp bộ mặt dự án. |
| **`repomix`** | Utilities | Đóng gói toàn bộ source code thành 1 file text duy nhất (dùng công cụ Repomix). Tối ưu cho việc nạp Context vào AI. | Khi cần gửi code cho AI khác review hoặc phân tích. |
| **`research`** | Research | Quy trình nghiên cứu công nghệ/giải pháp mới. So sánh Pros/Cons, tìm kiếm thư viện phù hợp và đánh giá tính khả thi. | Khi cần chọn công nghệ hoặc tìm giải pháp cho vấn đề mới. |
| **`sequential-thinking`** | Thinking | Mô hình tư duy tuần tự (Step-by-step). Giúp giải quyết các bài toán logic phức tạp bằng cách chia nhỏ thành các bước suy luận nối tiếp. | Dùng cho các bài toán thuật toán hoặc logic nghiệp vụ rắc rối. |
| **`skill-creator`** | Meta | Hướng dẫn tạo ra... Skill mới. Quy trình chuẩn hóa kiến thức thành file `SKILL.md` để tái sử dụng sau này. | Khi bạn muốn dạy AI một kỹ năng mới. |
| **`tasks-code-review`** | Execution | **Thực thi** review code. Chứa các checklist cụ thể, lệnh grep tìm lỗi, template báo cáo review. (Bổ trợ cho `code-review`). | Khi đang thực sự ngồi review một PR cụ thể. |
| **`tasks-documentation`** | Execution | **Thực thi** viết tài liệu. Chứa code snippet mẫu cho JSDoc, C# XML Comments, Swagger annotations. (Bổ trợ cho `documentation`). | Khi đang ngồi viết comments hoặc API docs trong code. |
| **`tasks-spec-update`** | Execution | **Thực thi** cập nhật Spec. Quy trình đồng bộ ngược từ Code -> Specification file (`.spec.md`). | Dùng sau khi code xong, cần cập nhật lại tài liệu thiết kế. |
| **`tasks-test-generation`** | Execution | **Thực thi** viết Unit Test. Chứa template code test cho xUnit, Jest, Vitest. (Bổ trợ cho `test-generation`). | Khi đang ngồi viết code test. |
| **`template-skill`** | Meta | Skill mẫu (Boilerplate). File rỗng chuẩn cấu trúc để copy-paste khi tạo skill mới. | Dùng làm bản sao khi tạo skill mới. |
| **`ui-ux-pro-max`** | Design | Skill thiết kế UI/UX cao cấp nhất. Kho tàng kiến thức về 50+ style thiết kế, bảng màu, font chữ, bố cục hiện đại. | Khi cần thiết kế giao diện "đỉnh cao", wow-effect. |
| **`webapp-testing`** | Testing | Test module Web App. Sử dụng Playwright để kiểm tra thực tế trên trình duyệt (Click, Type, Nav). | Khi cần test integration/E2E cho ứng dụng web. |

---

## 💡 Cách sử dụng hiệu quả

1.  **Không cần nhớ hết**: Chỉ cần nhớ từ khóa chính (ví dụ: "debug", "test", "design"). Hệ thống sẽ tự gợi ý skill phù hợp.
2.  **Kết hợp Skills**: Các skill thường làm việc tốt nhất khi kết hợp (ví dụ: `feature-implementation` + `tasks-test-generation` + `dual-pass-review`).
3.  **Meta Skills**: Đừng quên các skill tư duy như `sequential-thinking` hay `problem-solving` khi gặp bài toán khó, chúng giúp AI thông minh hơn đáng kể.
