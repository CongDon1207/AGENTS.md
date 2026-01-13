---
description: Use subagents to plan and fix hard issues
model: google/antigravity-claude-opus-4-5-thinking
---

**Complex fix requiring investigation and planning:**
<issues>$ARGUMENTS</issues>

## Workflow

### Phase 1: Investigation (Debugger Agent)

**Step 1: Gather Information**
- Collect error messages and stack traces
- Identify affected components
- Check recent changes that might have caused it
- Review related logs

**Step 2: Reproduce the Issue**
- Create steps to reproduce
- Document expected vs actual behavior
- Identify environment factors

**Step 3: Root Cause Analysis**
- Trace execution path
- Use 5 Whys technique
- Document findings

### Phase 2: Planning (Planner Agent)

**Step 4: Design Solution**
- Identify affected files
- Plan minimal changes
- Consider side effects
- Document approach

**Step 5: Create Fix Plan**
```markdown
## Fix Plan

### Problem
[Root cause description]

### Solution
[Approach to fix]

### Changes Required
1. File: [path]
   - Change: [description]

### Verification
- [ ] Test case 1
- [ ] Test case 2
```

### Phase 3: Implementation (Developer Agent)

**Step 6: Implement Fix**
- Follow the plan exactly
- Make incremental changes
- Test after each change

**Step 7: Verify Fix**
- Run all related tests
- Confirm original issue is resolved
- Check for regressions

### Phase 4: Review (Code Reviewer Agent)

**Step 8: Code Review**
- Review changes for quality
- Check for security implications
- Ensure no unintended side effects

## Output

```markdown
## Hard Fix Completed

### Issue
[Original issue description]

### Root Cause
[What was actually wrong]

### Solution
[How it was fixed]

### Files Changed
- [file list with line references]

### Tests Added/Updated
- [test list]

### Verification
- [ ] Original issue resolved
- [ ] No regressions introduced
- [ ] Code reviewed
```
