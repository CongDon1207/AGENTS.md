# AGENTS.md - Working Conventions

---

## 1) Language
- **Mandatory**: All responses, change descriptions, code comments, explanations must be written in **Vietnamese**.

---

## 2) Core Principles (Non-negotiable)
- Clarify Ambiguity First: If a requirement is unclear or incomplete, ask 1-2 clarifying questions before proceeding. Never guess.
- Code Only What Was Asked: Follow the PRD/ticket scope strictly; no extra features.
- Minimum Viable Change: Deliver the simplest, most idempotent fix that works; avoid over-engineering.
- Reuse Before Rewriting: Prefer existing modules or utilities; avoid duplication.
- File Length Limit: Keep every file under 300 LOC; if a change would exceed this, pause and propose a refactor or split plan.
- Configuration and Secrets: Load all secrets or config from environment variables only; never hardcode.
- When writing code, aim for simplicity and readability, not just brevity. Short code that is hard to read is worse than slightly longer code that is clear.
- Clean Up Temporary Files: Delete any temporary test files immediately after use.

### Core Directives
- WRITE CODE ONLY TO SPEC.
- MINIMUM, NOT MAXIMUM.
- ONE SIMPLE SOLUTION.
- CLARIFY, DON'T ASSUME.

### Philosophy (Non-negotiables)
- Do not add unnecessary files or modules; if a new file is unavoidable, justify it.
- Do not change architecture or patterns unless explicitly required and justified.
- Prioritize readability and maintainability over clever or complex code.

---

## 3) File-reading Rules (Mandatory)
- **Before editing/creating files**: Read all relevant files in full to understand context.
- **Before starting new task**: Read at minimum `README.md` and relevant files in `docs/*`.

---

## 4) Project Structure Index

> **File**: `docs/structure.md` - Single source of truth for project layout.

### When to Read
- **Before searching for files**: Check `docs/structure.md` first to know where to look.
- **Fix bug**: Read structure → Find related modules → Navigate to correct files.
- **Add feature**: Read structure → Identify existing patterns → Follow conventions.
- **Understand codebase**: Read structure → Get full overview without scanning all folders.

### When to Update
- **Project has no `docs/structure.md`**: Generate it using `.claude/skills/project-index/SKILL.md`
- **After major changes**: Added/removed modules, restructured folders
- **Periodic refresh**: Weekly or when index feels outdated
- **User says**: "update structure", "refresh index", "scan project"

### How to Generate/Update
```
Load: .claude/skills/project-index/SKILL.md
→ Scan project tree
→ Identify key files and patterns
→ Write to docs/structure.md
```

---

## 5) Dynamic Context Loading

> **Golden Rule**: Do not preload. Only load files when matching triggers are detected.

### How This Works

```
Request arrives
    │
    ▼
┌─────────────────────────────────────────┐
│ STEP 1: Match Trigger Keywords (below)  │
│ → Found? Load skill directly. FAST.     │
└─────────────────────────────────────────┘
    │ Not found / Complex
    ▼
┌─────────────────────────────────────────┐
│ STEP 2: Read Router (detailed guide)    │
│ → .claude/router/decision-flow.md       │
└─────────────────────────────────────────┘
```

### Router Reference (for complex/unfamiliar requests)

| What | Guide File | Purpose |
|:---|:---|:---|
| **Decision Flow** | `.claude/router/decision-flow.md` | Full pipeline: Analyze → Agent → Command → Skill → Workflow |
| **Agents** | `.claude/router/agents-guide.md` | Full agent list with mindset descriptions |
| **Commands** | `.claude/router/commands-guide.md` | Full command list with workflows |
| **Skills** | `.claude/router/skills-guide.md` | Full skill list organized by domain |
| **Workflows** | `.claude/router/workflows-guide.md` | Multi-step orchestration protocols |

---

### Trigger Keywords → Auto-Load Rules

> **IMPORTANT**: When trigger keywords are detected in request, **MANDATORY** load in order: **Agent → Command → Skill**

---

### 🎯 Slash Commands (Direct Command Loading)

> **Mechanism**: When user types slash command (e.g., `/fix`, `/design/fast`, `/plan/hard`), AI **routes to router** to match and load corresponding command file from `.claude/commands/`

**Full details**: See `.claude/router/commands-guide.md`

---

#### 🐛 Debug / Fix Bug
**Triggers**: `bug`, `lỗi`, `error`, `fix`, `sửa`, `không chạy`, `broken`, `crash`, `failed`, `exception`, `stack trace`, `debug`, `troubleshoot`, `issue`, `problem`, `không hoạt động`
```
→ Agent: .claude/agents/debugger.md
→ Command: .claude/commands/fix.md (hoặc fix/hard.md nếu phức tạp)
→ Skill: .claude/skills/bug-diagnosis/SKILL.md + .claude/skills/debugging/SKILL.md
→ Context: docs/structure.md (để tìm file liên quan)
```

#### 📋 Planning / Lên kế hoạch
**Triggers**: `plan`, `kế hoạch`, `lên kế hoạch`, `strategy`, `chiến lược`, `roadmap`, `approach`, `cách tiếp cận`, `how to`, `làm sao`, `outline`, `phác thảo`, `design system`, `thiết kế hệ thống`, `architect`
```
→ Agent: .claude/agents/planner.md
→ Command: .claude/commands/plan.md (hoặc plan/hard.md nếu complex)
→ Skill: .claude/skills/planning/SKILL.md + .claude/skills/sequential-thinking/SKILL.md
```

#### 💡 Idea Development / Phát triển ý tưởng
**Triggers**: `ý tưởng`, `idea`, `brainstorm`, `suggest`, `đề xuất`, `recommend`, `gợi ý`, `consider`, `explore`, `khám phá`, `what if`, `nếu như`, `improve`, `cải thiện`, `enhance`, `nâng cao`
```
→ Agent: .claude/agents/brainstormer.md
→ Command: .claude/commands/brainstorm.md
→ Skill: .claude/skills/problem-solving/SKILL.md + .claude/skills/sequential-thinking/SKILL.md
```

#### 🔍 Research / Investigation
**Triggers**: `research`, `nghiên cứu`, `investigate`, `điều tra`, `analyze`, `phân tích`, `understand`, `hiểu`, `how does`, `explain`, `giải thích`, `what is`, `là gì`, `why`, `tại sao`, `compare`, `so sánh`
```
→ Agent: .claude/agents/researcher.md
→ Command: .claude/commands/scout.md (nếu tìm trong code)
→ Skill: .claude/skills/research/SKILL.md + .claude/skills/feature-investigation/SKILL.md
```

#### ⚡ Feature Implementation
**Triggers**: `implement`, `thực hiện`, `build`, `xây dựng`, `create`, `tạo`, `add`, `thêm`, `develop`, `phát triển`, `make`, `làm`, `new feature`, `tính năng mới`, `functionality`, `code`
```
→ Agent: .claude/agents/fullstack-developer.md
→ Command: .claude/commands/code.md (hoặc create-feature.md)
→ Skill: .claude/skills/feature-implementation/SKILL.md
→ Context: docs/structure.md (BẮT BUỘC)
→ Domain-specific: frontend-development/, backend-development/, etc.
```

#### 🧪 Testing
**Triggers**: `test`, `kiểm tra`, `testing`, `unit test`, `integration`, `e2e`, `coverage`, `spec`, `verify`, `xác minh`, `validate`
```
→ Agent: .claude/agents/tester.md
→ Command: .claude/commands/test.md
→ Skill: .claude/skills/test-generation/SKILL.md + .claude/skills/tasks-test-generation/SKILL.md
```

#### 📝 Code Review
**Triggers**: `review`, `đánh giá`, `check code`, `kiểm tra code`, `PR`, `pull request`, `merge`, `feedback`
```
→ Agent: .claude/agents/code-reviewer.md
→ Command: .claude/commands/review-changes.md
→ Skill: .claude/skills/code-review/SKILL.md + .claude/skills/dual-pass-review/SKILL.md
```

#### 📚 Documentation
**Triggers**: `docs`, `document`, `tài liệu`, `README`, `guide`, `hướng dẫn`, `explain code`, `giải thích code`, `comment`, `changelog`
```
→ Agent: .claude/agents/docs-manager.md
→ Command: .claude/commands/docs/update.md (hoặc docs/init.md)
→ Skill: .claude/skills/documentation/SKILL.md + .claude/skills/tasks-documentation/SKILL.md
```

#### 🎨 UI/UX / Frontend Design
**Triggers**: `UI`, `UX`, `design`, `thiết kế`, `beautiful`, `đẹp`, `styling`, `layout`, `component`, `responsive`, `animation`, `screenshot`
```
→ Agent: .claude/agents/ui-ux-designer.md
→ Command: .claude/commands/design/good.md (hoặc design/screenshot.md)
→ Skill: .claude/skills/ui-ux-pro-max/SKILL.md + .claude/skills/frontend-design/SKILL.md
```

#### 🔄 Refactoring
**Triggers**: `refactor`, `tái cấu trúc`, `clean up`, `dọn dẹp`, `restructure`, `reorganize`, `simplify`, `đơn giản hóa`, `split`, `tách`, `modularize`, `optimize`
```
→ Agent: .claude/agents/code-reviewer.md
→ Command: .claude/commands/code.md
→ Skill: .claude/skills/code-review/SKILL.md
→ Context: docs/structure.md
→ Post-task: .claude/skills/dual-pass-review/SKILL.md
```



## 6) Execution Discipline
- **Run only necessary commands**; avoid destructive commands (`rm`, `git reset`...) unless explicitly requested.
- **Timeout**: Default 60s; cap at 70-80s for potentially long-running commands.
- **Permission errors**: Explain clearly and propose safe manual steps.
- **New dependencies**: Do not add unless truly necessary and user agrees.

---

## 7) Auto-Documentation
After completing impactful changes (feature/bugfix/schema/architecture), update briefly:
- `README.md`: If stable info (stack/versions/overview) affected.
- `HANDOFF.md`: Current status + next steps + latest test results.
- `CHANGELOG.md`: Add one line: `YYYY-MM-DD: <Fix|Add|Change|Remove> <what> at <path> - <impact> (completed).`
- `docs/structure.md`: If added/removed files or restructured folders.

---

*This file is core principle and a router. Do not preload everything. Only read referenced files when needed.*