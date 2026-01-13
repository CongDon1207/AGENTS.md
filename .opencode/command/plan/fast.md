---
description: No research. Only analyze and create an implementation plan
model: google/antigravity-claude-opus-4-5-thinking
---

**Quick plan without deep research:**
<task>$ARGUMENTS</task>

## Use When
- Task is clear and well-defined
- You already know the codebase
- Speed is important
- Scope is small to medium

## Workflow

### Step 1: Quick Analysis (2-3 min)
- Parse the request
- Identify core requirements
- List obvious tasks

### Step 2: Structure Plan (3-5 min)

```markdown
---
title: "{Brief title}"
description: "{One sentence}"
model: google/antigravity-claude-opus-4-5-thinking
status: pending
priority: P2
effort: {estimate}
created: {YYYY-MM-DD}
---

# [Title]

## Goal
[One sentence goal]

## Tasks
1. [ ] Task 1
2. [ ] Task 2
3. [ ] Task 3

## Files to Change
- [file 1]
- [file 2]

## Notes
[Any quick observations]
```

### Step 3: Save & Report
- Save to `./plans/` directory
- Report path

**Output:** `✓ Fast plan created: [path]`

## What This Skips
- Deep codebase exploration
- Alternative approach analysis
- Extensive risk assessment
- Detailed phase breakdown

## When to Escalate
If during quick analysis you discover:
- Hidden complexity -> use `/plan/hard`
- Multiple valid approaches -> use `/plan/two`
- Need more research -> use `/plan`
