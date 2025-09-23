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

## 2. Philosophy (Non-negotiables)
- Do not add unnecessary files or modules; if a new file is unavoidable, justify it.
- Do not change architecture or patterns unless explicitly required and justified.
- Prioritize readability and maintainability over clever or complex code.

## READING FILE
- Before editing or creating a new file, you must read the related files.
- When reading a file, you must go through the entire code in that file to fully understand the context.

## 3. Pre-Task Checklist
Before starting a new conversation, confirm you have read and understood:
- The user's immediate request and overall goal (PRD or ticket).
- Key project documentation: README.md, AGENTS.md, and docs/*.
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

## 5. MCP Tool Usage Protocol - Agent Rules
**Primary directive:** Always choose the most specific tool. Priority: Serena -> Context7 -> DeepWiki -> Web Search -> Playwright-MCP. Use Sequential Thinking as a meta-tool to plan before acting.

**Serena - Local codebase intelligence**
- Use when: analyzing or modifying the current project, navigating symbols or call graphs or ownership, performing small-to-medium refactors, updating tests, running lint or format or unit tests, preparing small patches with rationale.
- Avoid when: you need official API details (use Context7), community patterns (DeepWiki), or news (Web Search).

**Context7 - Official documentation search**
- Use when: checking official docs for signatures, flags, breaking changes, migrations, or configuration; confirming behavior or versioning instead of guessing.
- Avoid when: editing local code (Serena) or seeking implementation patterns (DeepWiki).

**DeepWiki - Public codebase knowledge**
- Use when: sampling or comparing open-source implementations to learn patterns and pitfalls; extracting concise examples to inform design (never copy-paste).
- Avoid when: you need authoritative API definitions (Context7) or local code insights (Serena).

**Web Search - General and real-time info**
- Use when: looking for release notes, incidents, ecosystem changes, credible blog posts, or non-code context such as pricing, service status, or announcements.
- Avoid when: official docs exist (Context7) or you only need code patterns (DeepWiki).

**Sequential Thinking - Meta-tool**
- Use when: tasks are complex or multi-step.
- Rule: Print a brief step-by-step plan first, execute tools in that order, update the plan if reality diverges.

**Playwright-MCP - Web automation and live UI inspection**
- Use when: interacting with real webpages (click or fill or navigate), capturing the accessibility tree for stable references, detecting or logging runtime or network errors (HTTP >= 400, request failures, console errors), reproducing end-to-end UI bugs, or extracting dynamic content (SPAs, login flows).
- Minimal workflow: 1) Open the target URL (headless or headful). 2) Snapshot the accessibility tree. 3) Act on deterministic element references (click, fill, press). 4) Observe `response`, `requestfailed`, and console output for failures. 5) Assert DOM text, roles, or attributes. 6) Clean up the session or persist the profile when needed.
- Safety: whitelist origins (localhost or staging), prefer isolated profiles, group actions to minimize calls, log every HTTP >= 400.

## 6. Global Operational Rules
- Call MCP tools only when necessary; never use them to summarize known context.
- Tool timeouts and retries: limit each call to 8 seconds; if it times out, retry once with a narrower scope (for example, lower top_k or a tighter selector or URL). If it still fails, report succinctly and propose a manual fallback.
- Checkpointing: after every 3-5 tool calls, provide a summary of 100 words or fewer covering what you did, what you found, and the next step.
- Evidence hierarchy: escalate Serena -> Context7 -> DeepWiki -> Web Search only when earlier tiers cannot answer.
- Privacy and safety: avoid production impact unless explicitly allowed; do not take destructive actions; do not exfiltrate data.

## 7. Decision Quick-Guide
1. Need to touch local code -> use Serena.
2. Need authoritative API info -> use Context7.
3. Need community implementation patterns -> use DeepWiki.
4. Need news or real-time context -> use Web Search.
5. Need a plan -> use Sequential Thinking.
6. Need live web interaction or network diagnostics -> use Playwright-MCP.

## 8. Issue Handling and Debugging Protocol
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

## 9. Core Directives
- WRITE CODE ONLY TO SPEC.
- MINIMUM, NOT MAXIMUM.
- ONE SIMPLE SOLUTION.
- CLARIFY, DON'T ASSUME.

