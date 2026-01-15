# AGENTS.md - Working Conventions

---

## 1) Language
- **Repository artifacts (mandatory)**: All documentation/guides, code comments, and any text written into files must be in **English**.
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

## 3) File-reading Rules (Mandatory)
- **Before editing/creating files**: Read all relevant files in full to understand context.
- **Before starting a task**: Read at minimum `README.md` and relevant files in `docs/*` (if present).
- **If docs are missing or likely stale**: Use `rg` to locate the source of truth quickly.

---

## 4) Project Structure Index

> **File**: `docs/structure.md` - Single source of truth for project layout.

### When to use `docs/structure.md`
- **Hard-to-locate tasks** (large repo/monorepo): read it first to get the map and narrow the search area.
- **Very broad keywords** (e.g., auth/payment/logging): use structure to pick the right folder before searching deeper.
- **New project / onboarding**: structure gives a fast overview of the main areas.

### When to use `rg`
- **Normal tasks**: use `rg` directly to find the real implementation (does not depend on whether structure is up to date).
- **You already have concrete identifiers** (file name / function / class / route / endpoint): `rg` is faster than structure.
- **You suspect structure is stale**: prefer `rg` first, then refresh structure if needed.

### When to Update
- **Project has no `docs/structure.md`**: Generate it using `skills/project-index/SKILL.md`.
- **After major changes**: Added/removed modules, restructured folders.
- **Periodic refresh**: Weekly or when index feels outdated.
- **User says**: "update structure", "refresh index", "scan project".

### How to Generate/Update
```
Load: skills/project-index/SKILL.md
- Scan project tree
- Identify key files and patterns
- Write to docs/structure.md
```

---

## 5) Dynamic Context Loading

> **Golden Rule**: Only load context when matching triggers are detected.

### Automatic Context Triggers
- **Keywords**: If the request matches a domain (e.g., "debug", "test", "plan", "review"), ALWAYS load the corresponding **Skill** (`skills/**/SKILL.md`) or **Agent** (`agents/**`) first.
- **Slash Commands**: Treat `/command` as an explicit instruction to load `commands/<command>.md` (e.g., `/fix`, `/plan`, `/test`).
- **Complex Tasks**: For multi-step objectives, load `workflows/**` to orchestrate the process.

### Hierarchy of Context
1. **Workflows** (`workflows/**`): High-level orchestration for multi-step processes.
2. **Agents** (`agents/**`): Specific personas/mindsets for a task type.
3. **Skills** (`skills/**`): Domain-specific knowledge and playbooks.
4. **Commands** (`commands/**`): Reusable execution scripts/procedures.

### Discovery
If a request is unclear, check `router/decision-flow.md` or scan `skills/` and `commands/` directories to find the best tool for the job. Never guess if a specialized tool exists.

---

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
