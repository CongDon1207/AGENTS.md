# GEMINI.md - Antigravity Operational Protocols

---

## 1) Language
- **Repository artifacts (Standard)**: Code comments, README, and general documentation should be in **English**.
- **Agent Artifacts**: `task.md`, `implementation_plan.md`, `walkthrough.md` must be in **Vietnamese**.
- **Conversation**: Replies in the chat should be in **Vietnamese**.

---

## 2) Core Principles (Non-negotiable)
- **Clarify Ambiguity First**: If a requirement is unclear or incomplete, ask 1-2 clarifying questions before proceeding. Never guess.
- **Code Only What Was Asked**: Follow the request scope strictly; no extra features.
- **Minimum Viable Change**: Deliver the simplest, most idempotent fix that works; avoid over-engineering.
- **Reusability**: Prefer existing modules, utilities, or skills; avoid duplication.
- **Configuration**: Load secrets/config from environment variables; never hardcode.

### Core Directives
- WRITE CODE ONLY TO SPEC.
- MINIMUM, NOT MAXIMUM.
- ONE SIMPLE SOLUTION.
- CLARIFY, DON'T ASSUME.

---

## 3) File-reading Rules (Mandatory)
- **Before editing/creating files**: Read all relevant files in full to understand context.
- **Before starting a task**: Read `README.md` and check `docs/structure.md` (if present).
- **If info is missing**: Use `rg` to locate source of truth.

---

## 4) Project Structure Index

> **File**: `docs/structure.md` - Single source of truth for project layout.
> *If missing, use the `project-index` skill to generate it.*

---

## 5) Dynamic Capability Loading (Skills & MCP)

> **Golden Rule**: Only load context when matching triggers are detected.

### Dynamic Skills
- **Location**: `.agent/skills/`
- **Mechanism**: When a user request matches a specific domain (e.g., "Excel", "Debug", "Design", "DevOps"), check the `.agent/skills/` directory.
- **Action**: Use `view_file` to read the relevant `SKILL.md` (e.g., `.agent/skills/debugging/SKILL.md`) to understand the Standard Operating Procedure (SOP) before proceeding.

### MCP Servers
- Utilize available MCP tools (e.g., `browser`, `mongodb-mcp-server`) when the task requires external system interaction or specialized data processing.

---

## 6) Agentic Workflow (Antigravity Native)

### Task Mode (`task_boundary`)
**Mandatory** for any multi-step task involving planning, coding, and verification.
- **PLANNING**: Research, design, and create `implementation_plan.md`.
- **EXECUTION**: Write code, apply changes.
- **VERIFICATION**: Run tests, verify fixes, create `walkthrough.md`.

### Artifacts strategy
- **`task.md`**: Maintain a living checklist of the current objective.
- **`implementation_plan.md`**: Create this during the PLANNING phase for complex changes.
- **`walkthrough.md`**: Create/Update this during the VERIFICATION phase to prove the work is done.

### Communication
- **`notify_user`**: The ONLY way to communicate during Task Mode. Use it to:
    - Request review of `implementation_plan.md`.
    - Ask blocking clarifying questions.
    - Confirm task completion with `walkthrough.md`.

---

## 7) Auto-Documentation
After completing impactful changes:
- Update `README.md` if stable info changed.
- Update `docs/structure.md` if file structure changed.
- Add an entry to `CHANGELOG.md`.

---
*This file is the core operational protocol for Antigravity. Keep it concise.*
