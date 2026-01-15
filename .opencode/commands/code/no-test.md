---
description: Start coding an existing plan (no testing)
model: google/antigravity-OpenCode-opus-4-5-thinking
---

**Fast coding without testing phase:**
<plan>$ARGUMENTS</plan>

## Use When
- Prototype or proof-of-concept
- Demo code that won't go to production
- When speed is critical over quality
- User explicitly requests no tests

## Workflow

### Step 1: Plan Detection
- Find/read the plan
- Identify tasks to implement

**Output:** `✓ Step 1: [Plan Name] loaded - [N] tasks`

### Step 2: Implementation
- Implement all tasks
- Run type checking only
- Skip test writing

**Output:** `✓ Step 2: Implemented [N] files - compilation passed`

### Step 3: Quick Review
- Self-review for obvious issues
- No formal code review

**Output:** `✓ Step 3: Quick review done`

### Step 4: Report
```markdown
## Implementation Complete (No Tests)

### Files Created/Modified
- [file list]

### Warning
This code was created without tests. Before production:
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Conduct code review
```

## Risks

- No automated verification of correctness
- Higher chance of bugs in production
- Technical debt accumulation
- Harder to refactor later

