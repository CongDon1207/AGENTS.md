
**MANDATORY AI WORKFLOW — MUST COMPLY 100%**
> **Hard requirement:**  outputs (comments,explanations) **must be in Vietnamese**. The rules below are written in English for precise parsing.
### Objectives

* Fix according to the exact requirement, no scope creep; prioritize minimal, clear, idempotent solutions.
* Modify only necessary files; do not create new files unless strictly required with justification.

### Required Reading

* `README.md`, `AGENTS.md`, and relevant documents under `docs/*` (architecture, data-flow, makefile-guide).
* `Makefile`, `docker-compose*.yml`, `.env*` files (reference only; do not overwrite).

### Response Workflow (applies to every response)

* **Requirement**: Quote 1–2 lines precisely restating the user’s request.
* **Plan**: 2–3 short ordered steps.
* **Changes**: List modified files with exact `path:line`; minimal patches; no architecture/pattern changes.
* **Test**: Provide verification commands and pass criteria; state if service restart is required and why.
* **Result**: Summarize changes, root cause, and post-fix status.

### Constraints

* No new files unless mandatory; if added, specify reason and files replaced/deleted.
* Do not alter architecture/patterns unless essential.
* Patch >300 lines: pause and propose refactor/split plan before proceeding.
* Language: Vietnamese for explanations; keep logs/errors/commands in original context.
* Favor simple, sufficient solutions; reuse existing code; only introduce complexity when necessary.
* Do not touch code outside scope.
* Create new files only when strictly necessary, and remove unused ones.
* Use MCP only when truly beneficial; select correct server/tool; avoid unnecessary MCP calls.
* Do not remove or alter any requirements in the task; keep all intact, even if irrelevant, unless explicitly told to remove.
* Do not compress, omit, or reinterpret requirements; if unclear, ask 1–2 clarifying questions before proceeding.

### Command Execution Rules

* Prefer `rg` for searches; read files in ≤250 line chunks.
* Run only necessary commands; avoid heavy/long operations; no destructive actions (rm/reset) unless requested.
* No commits; no new libraries unless absolutely required to fix.
* On permission/resource errors: report clearly and suggest safe manual steps.
* For major changes: Kill old process → restart new server.

### Answer Formatting

* Short title (if needed); concise, active tone.
* **Bullets**: bold keyword, one-line description.
* Use backticks for commands, file paths, environment vars, identifiers.
* Cite file edits as `path:line` (not ranges). Example: `influxdb/init/onboarding.sh:42`.
* Do not add ANSI/strange formatting; do not mix bold with monospace.

### Definition of Done (DoD)

* Requirement met; nothing extra; verify/tests pass; no redundant files; `.env` untouched.
* Secrets safe; >300-line files considered for refactor; root cause and applied changes documented.

### MCP Tooling Rules

* Prefer MCP for: search, file read/write, command execution, internal queries. Use alternatives only if MCP fails; state reason briefly.
* If MCP unavailable/timeout/error: specify cause briefly and suggest safe manual fallback.
* For document/code-related queries: call `context7.search` first. Use `top_k <= 5`, request snippets ±3 sentences with metadata. Do not pull full text.
* For optional params (paths, repo, ruleset), read from `memory.get` before asking user.
* For pipelines/special checks: call `serena.*`, request concise JSON (summary, next\_actions).
* Summarize tool output ≤250 words before reasoning; avoid long verbatim dumps.
* Token limits: input ≤3000, output ≤600. If exceeded, reduce `top_k` or narrow scope.
* Tool timeout: 8s, 1 retry with lower `top_k`. If still failing: report briefly and propose next step.
* Do not store secrets in memory. Use memory for short-term context; use context7 for document search.

**MCP decision rules (cost-aware):**

* Call MCP only when needing unseen content, command execution, or validation. If summarizing known context → do not call.
* Scope limiting to reduce tokens:

  * **search**: `top_k ≤ 5`, narrow queries, ±3 sentence snippets + metadata only.
  * **read\_file**: use offset/limit, ≤250 lines per read; prefer multiple small reads over full.
  * **commands/logs**: add `--no-pager`, use `tail/head/grep`; no long dumps.
* Avoid duplication: don’t repeat prior content; prefer ≤250 word references/summaries.
* Checkpoint after 3–5 tool calls: summarize ≤100 words of findings; if incomplete, refine query/path before continuing.
* Abort/shrink if exceeding token budget: if input >3000 or output >600, split queries or reduce `top_k`.

### Clarifying Ambiguities

* If lacking info (org/bucket/token, endpoint, test conditions, etc.), ask 1–2 clarifying questions before making changes.
* Require user to supply missing info; do not guess.

### Example Response Format

* **Requirement**: “…”
* **Plan**: 1) … 2) … 3) …
* **Changes**: modified `path:line` …; reason …
* **Test**: run `command`; expected …
* **Result**: pass/fail + root cause

> **Reminder:** Despite English rules, **all outputs must be in Vietnamese**.