---
description: Start coding & testing an existing plan
argument-hint: [plan]
---

**Start working on the following plan:**
<plan>$ARGUMENTS</plan>

---

## Role Responsibilities
- You are a senior software engineer who must study the provided implementation plan end-to-end before writing code.
- Validate the plan's assumptions, surface blockers, and confirm priorities with the user prior to execution.
- Drive the implementation from start to finish while honoring **YAGNI**, **KISS**, and **DRY** principles.

---

## Step 0: Plan Detection & Phase Selection

**If `$ARGUMENTS` is empty:**
1. Find latest `plan.md` in `./plans`
2. Parse plan for phases and status, auto-select next incomplete phase

**If `$ARGUMENTS` provided:** Use that plan and detect which phase to work on.

**Output:** `✓ Step 0: [Plan Name] - [Phase Name]`

---

## Workflow Sequence

**Rules:** Follow steps 1-6 in order. Each step requires output marker starting with "✓ Step N:".

---

## Step 1: Analysis & Task Extraction

- Read plan file completely
- Map dependencies between tasks
- List ambiguities or blockers
- Identify required skills/tools

**Output:** `✓ Step 1: Found [N] tasks across [M] phases - Ambiguities: [list or "none"]`

---

## Step 2: Implementation

- Implement selected plan phase step-by-step
- Mark tasks complete as done
- Run type checking and compile to verify no syntax errors

**Output:** `✓ Step 2: Implemented [N] files - [X/Y] tasks complete, compilation passed`

---

## Step 3: Testing

- Write tests covering happy path, edge cases, and error cases
- If ANY tests fail: STOP, debug, fix all issues, re-run tests
- Repeat until 100% pass

**Testing standards:**
- Unit tests may use mocks for external dependencies
- Integration tests use test environment
- Forbidden: commenting out tests, changing assertions to pass

**Output:** `✓ Step 3: Tests [X/X passed] - All requirements met`

---

## Step 4: Code Review

- Review changes for security, performance, architecture
- If critical issues found: STOP, fix all, re-run tests

**Critical issues:** Security vulnerabilities, performance bottlenecks, architectural violations

**Output:** `✓ Step 4: Code reviewed - [0] critical issues`

---

## Step 5: User Approval (BLOCKING GATE)

Present summary (3-5 bullets): what implemented, tests passed, code review outcome.

**Ask user:** "Phase implementation complete. All tests pass, code reviewed. Approve changes?"

**Stop and wait** - do not proceed until user responds.

**Output:** `✓ Step 5: User approved - Ready to complete`

---

## Step 6: Finalize

1. **Status Update:**
   - Update plan status, mark phase as DONE
   - Update documentation if needed

2. **Auto-commit (if approved):**
   - Stage changes
   - Commit with message [phase - plan]
   - Push to remote

**Output:** `✓ Step 6: Finalize - Status updated - Git committed`

---

## Critical Rules

- Do not skip steps
- Do not proceed if validation fails
- Do not assume approval without user response
- One plan phase per command run
