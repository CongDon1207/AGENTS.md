# AGENTS.md - Working Conventions

---

## 1) Language
- **Repository artifacts (mandatory)**: All documentation/guides, code comments, and any text written into files should be in **English**.
- **Conversation**: Replies in the chat should be in **Vietnamese**.

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

## 3) Decision Order & Clarification Gate
- **Rule precedence (highest to lowest)**:
  1. Safety and non-destructive behavior
  2. Core Principles (Section 2)
  3. Explicit user request and task scope
  4. Dynamic context loading rules
  5. Output/formatting preferences
- **When to ask before execution**:
  - Missing required inputs (paths, target environment, acceptance criteria)
  - Multiple valid implementation paths with materially different outcomes
  - Any potentially destructive or irreversible action
- **When to execute directly**:
  - Task is clear, low-risk, and can be completed with minimum viable change
- **Question workflow**:
  - Prefer a dedicated question tool when available to ask 1-2 short, decision-driving questions
  - If no question tool is available, ask in chat first, wait for user answer, then execute
  - Do not guess missing critical requirements

---

## 4) Context Discovery & File Reading
- **Before editing/creating files**: Read all relevant files in full to understand context.
- **Before starting a task**: Read at minimum `README.md` and relevant files in `docs/*` (if present).
- **Default discovery tool**: Use `rg` to find source-of-truth implementations quickly.
- **`docs/structure.md` is optional**: Use it when present for broad navigation; do not block work if missing.
- **Path-agnostic resolution**: Resolve skills/agents/commands/workflows in this order:
  1. `.codex/...`
  2. `.opencode/...`
  3. `.agent/...`
  4. root-level fallback (`skills/...`, `agents/...`, `commands/...`, `workflows/...`)
- **If not found in known paths**: Use `rg --files` to locate matching `SKILL.md`, command, workflow, or agent definitions.
- **Structure index updates**: Create or refresh `docs/structure.md` only when requested, or when a major restructure makes navigation unreliable.

---

## 5) Dynamic Context Loading
- **Skill selection algorithm**:
  1. Exact skill name match from user request
  2. Explicit slash command mapping
  3. Keyword-to-skill intent match
  4. Workflow-driven skill loading for complex tasks
  5. `rg`-based fallback discovery in known skill locations
- **Tie-break rule**: If multiple skills match, choose the smallest set that fully covers the task.
- **Keywords**: If the request matches a domain (e.g., debug, test, plan, review), load the best matching skill or agent first.
- **Slash commands**: Treat `/command` as explicit instruction to load the corresponding command file.
- **Complex tasks**: Start from a workflow, then load the minimal set of supporting skills.
- **Minimal context rule**: Load only the files needed for the current task; avoid bulk loading.
- **Transparency rule**: Briefly state which skill(s)/agent(s) are used and why.
- **Unclear intent**: Ask 1-2 clarifying questions before implementation.

---

## 6) Execution Discipline
- **Run only necessary commands**; avoid destructive commands (`rm`, `git reset`...) unless explicitly requested.
- **Timeout**: Default 60s; cap at 70-80s for potentially long-running commands.
- **Permission errors**: Explain clearly and propose safe manual steps.
- **New dependencies**: Do not add unless truly necessary and user agrees.

---

## 7) Auto-Documentation (Conditional)
After completing impactful changes (feature/bugfix/schema/architecture), update briefly:
- `README.md`: If stable info (stack/versions/overview) is affected.
- `HANDOFF.md`, `CHANGELOG.md`, `docs/structure.md`: Update if the file exists, or create only when explicitly requested.
- `CHANGELOG.md` format (when used): `YYYY-MM-DD: <Fix|Add|Change|Remove> <what> at <path> - <impact> (completed).`
