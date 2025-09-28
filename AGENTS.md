# AGENT CODE RULES - Solo Vibe, Fix Nhan

**Language mandate:** All outputs (comments, explanations, etc.) must be in Vietnamese. The rest of this document stays in English for precision.

## 1. Core Principles
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

## 2.1 Philosophy (Non-negotiables)
- Do not add unnecessary files or modules; if a new file is unavoidable, justify it.
- Do not change architecture or patterns unless explicitly required and justified.
- Prioritize readability and maintainability over clever or complex code.

## 2.2 READING FILE
- Before editing or creating a new file, you must read the related files.
- When reading a file, you must go through the entire code in that file to fully understand the context.

## 3. Pre-Task Checklist
Before starting a new conversation, confirm you have read and understood:
- The user's immediate request and overall goal (PRD or ticket).
- Key project documentation:
  - **README.md**: To understand the project's architecture and folder structure before searching for any file.
  - **CHANGELOG.md**: To review what has been completed and avoid redundant work.
  - **HANDOFF.md**: To grasp the current status, pending tasks, and next steps.
  - Other relevant files in `docs/*`.
- Project configuration or execution files: docker-compose*.yml, .env*.

## 4. Response and Execution Protocol
**Response format (every reply):**
- Requirement: Quote 1-2 lines that restate the user's request verbatim.
- Plan: Provide a short, ordered list of 2-3 steps you will take.
- Changes: List modified files using `path:line` and explain each minimal patch.
- Test: Provide the exact verification commands with expected pass criteria and say whether a service restart is required and why.
- Result: Summarize the changes, the root cause (if fixing a bug), and the final status.

**Execution constraints:**
- Run only necessary commands; avoid long-running or destructive commands (for example, `rm`, `git reset`) unless explicitly requested.
- Enforce a watchdog on every command: default timeout is 60 seconds; if a process streams or could block, cap runtime at 75 seconds (70-80 second window) before terminating and report the timeout with context.
- If you hit permission or resource errors, report them clearly and suggest safe manual steps.
- Do not add new dependencies unless absolutely required and pre-approved.
- Default to wrapping any long-lived command with a shell-level timeout (e.g., `timeout 70s docker exec ...`) to ensure Codex terminates runaway processes automatically.
- after excution completely, read section 10. Auto-Docs for Project Memory in AGENTS.md and update docs

## 5. Decision Quick-Guide
1. Need to touch local code -> use Serena.
2. Need authoritative API info -> use Context7.
3. Need news or real-time context -> use Web Search.
4. Need live web interaction or network diagnostics -> use chrome-devtools-MCP.

## 6. MCP Tool Usage Protocol - Agent Rules
**Primary directive:** Always choose the most specific tool. Call MCP tools only when necessary; never use them to summarize known context.

**Serena - Local codebase intelligence**
- Use when: analyzing or modifying the current project, navigating symbols or call graphs or ownership, performing small-to-medium refactors, updating tests, running lint or format or unit tests, preparing small patches with rationale.
- Avoid when: you need official API details (use Context7), community patterns (DeepWiki), or news (Web Search).

**Context7 - Official documentation search**
- Use when: checking official docs for signatures, flags, breaking changes, migrations, or configuration; confirming behavior or versioning instead of guessing.
- Avoid when: editing local code (Serena) or seeking implementation patterns (DeepWiki).

**Web Search - General and real-time info**
- Use when: looking for release notes, incidents, ecosystem changes, credible blog posts, or non-code context such as pricing, service status, or announcements.
- Avoid when: official docs exist (Context7) or you only need code patterns (DeepWiki).

**chrome-devtools-MCP - Web automation and live UI inspection**
- Use when: interacting with real webpages (click or fill or navigate), capturing the accessibility tree for stable references, detecting or logging runtime or network errors (HTTP >= 400, request failures, console errors), reproducing end-to-end UI bugs, or extracting dynamic content (SPAs, login flows).
- Minimal workflow: 1) Open the target URL (headless or headful). 2) Snapshot the accessibility tree. 3) Act on deterministic element references (click, fill, press). 4) Observe `response`, `requestfailed`, and console output for failures. 5) Assert DOM text, roles, or attributes. 6) Clean up the session or persist the profile when needed.
- Safety: whitelist origins (localhost or staging), prefer isolated profiles, group actions to minimize calls, log every HTTP >= 400.

## 7. Issue Handling and Debugging Protocol
**Step 1 - Intake & Initial Analysis**
- Objective: understand the incident from the incoming report.
- Inputs the agent must capture:
  - Full error message and stack trace.
  - The input data or user action that triggered the failure.
- Actions:
  - Parse the error and stack trace to identify likely fault points in the codebase.
  - When necessary, pull additional context automatically (environment variables, configuration files, library versions, latest logs, etc.).

**Step 2 - Isolation & Reproduction**
- Objective: reproduce the defect reliably inside a minimal environment.
- Required actions:
  - Build a Minimal Reproducible Example (MRE) such as a script, API call, or single test that consistently triggers the failure.
  - Make the MRE deterministic (pin versions, fix random seeds, disable caches) so the output is stable.
- Exit criteria: the MRE fails consistently and documents the "fail-before" state.

**Step 3 - Root Cause Analysis & Patch Generation**
- Objective: iterate on hypotheses, validate the true root cause, and prepare a fix.
- Loop for each hypothesis:
  - Form a root-cause hypothesis based on the MRE and collected context (logic error, bad data, missing configuration, etc.).
  - Investigate by comparing diffs, instrumenting with temporary logs/asserts, and tracing control flow to confirm or reject the hypothesis.
  - Once validated, craft a minimal, targeted patch (`patch.diff`) that resolves the underlying defect.

**Step 4 - Self-Verification & Outcome Reporting**
- Objective: prove the fix works before exiting the incident.
- Required sequence:
  - Re-run the MRE to capture the failing baseline one more time.
  - Apply the generated patch inside the MRE environment.
  - Re-run the MRE and any related checks.
- Completion rules:
  - Success: the post-patch MRE passes and no new errors appear; publish the final patch.
  - Failure: if the MRE still fails or new faults emerge, revert the patch, return to Step 3 with a new hypothesis, and if no hypotheses remain, escalate with a failure report.

**Step 5 - Code Review & Quality Check**
- Objective: ensure the patch is clean, maintainable, and consistent.
- Required actions:
  - Conduct code review to verify adherence to coding conventions.
  - Assess maintainability, readability, and long-term impact.
  - Examine potential edge cases and side effects of the patch.

**Step 6 - Regression Testing**
- Objective: prevent recurrence of the same bug.
- Required actions:
  - Add a new test case derived from the MRE to guard against the same bug.
  - Update and expand the test suite if necessary.
  - Run regression tests broadly to confirm no unrelated features are broken.
### Debugging Guidelines
- **Be Systematic**: Follow the phases methodically, don't jump to solutions
- **Think Incrementally**: Make small, testable changes rather than large refactors
- **Consider Context**: Understand the broader system impact of changes
- **Communicate Clearly**: Provide regular updates on progress and findings
- **Stay Focused**: Address the specific bug without unnecessary changes
- **Test Thoroughly**: Verify fixes work in various scenarios and environments

## 8. Auto-Docs for Project Memory (README.md / HANDOFF.md / CHANGELOG.md)
Goal: Store the project's "live state" in 3 concise files. A new session only needs to read these 3 files to continue, without scanning the entire repo.

### 8.1 Role of the 3 Files
- README.md (stable overview):
  - Project goal/scope.
  - Architecture & folder structure (high-level).
  - Stack & exact versions,...
- HANDOFF.md (current state for next steps):
  - Current status (what's being done/fixed, short reason).
  - TODO & next steps (3-7 priority items).
  - Key paths: module/folder/artifact/dataset/log.
  - Brief test results (see 10.4), schema/contract name + version.
  - Environment & lockfiles (venv/conda/poetry/npm...).
- CHANGELOG.md (log of completed work):
  - Records a chronological history of all completed tasks, features, and bug fixes. It serves as a definitive log of the project's progress, showing what has been accomplished over time.

### 8.2 When to Auto-Update (triggers)
Update immediately after any of the following changes:
- A feature/work step/screen/endpoint/script is completed.
- A bug fix affecting behavior, API, UI, or data.
- A change in folder structure/architecture, schema/contract, or environment/dependency versions.
- A major milestone or progress checkpoint is reached.

### 8.3 What to Update (concise content)
- README.md (relevant sections only):
  - Stack & Versions, Architecture (1-2 sentences), Recent decisions (1-3 lines).
- HANDOFF.md:
  - Current status (1-3 lines), Open issues & Next steps (short bullets),
  - Paths/Artifacts (key paths), Latest checks (brief test results),
  - Schemas/Contracts (name + version), Environment (lockfile, versions).
- CHANGELOG.md (1 line/COMPLETED task):
  - Log any significant completed work item. This is crucial for tracking project velocity and history.
  - Examples of what to log: "login page UI", "user authentication controller", "homepage frontend module".
  - Format: `YYYY-MM-DD: <Fix|Add|Change|Remove> <what> at <path/module/area> - <impact/reason>; PR #<id> (completed).`
