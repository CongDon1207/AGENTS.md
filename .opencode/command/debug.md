---
description: Debugging technical issues and providing solutions
---

**Deep debugging for technical issues:**
<issues>$ARGUMENTS</issues>

## Workflow

### Phase 1: Information Gathering

**Step 1: Collect Evidence**
- Get error messages and stack traces
- Identify when issue started
- Note any recent changes
- Check environment factors

**Step 2: Reproduce Issue**
- Create minimal reproduction steps
- Document expected vs actual behavior
- Identify conditions that trigger it

### Phase 2: Analysis

**Step 3: Trace Execution**
- Follow code path
- Check state at each step
- Identify where behavior diverges

**Step 4: Root Cause Analysis**
Use 5 Whys technique:
1. Why did this error occur? -> [cause 1]
2. Why did [cause 1] happen? -> [cause 2]
3. Continue until root cause found

### Phase 3: Solution

**Step 5: Design Fix**
- Identify minimal fix
- Consider side effects
- Plan verification

**Step 6: Implement and Verify**
- Apply fix
- Test reproduction case
- Check for regressions

### Phase 4: Report

```markdown
## Debug Report

### Issue
[Description of the problem]

### Reproduction Steps
1. [Step 1]
2. [Step 2]
3. [Expected vs Actual]

### Root Cause
[Technical explanation]

### Solution
[What was fixed and how]

### Prevention
[How to avoid similar issues]
```

## Debugging Techniques

| Technique | When to Use |
|-----------|-------------|
| Console logging | Quick state inspection |
| Breakpoints | Step-through analysis |
| Binary search | Finding which commit broke |
| Minimal reproduction | Isolating the issue |
