---
description: Review all uncommitted changes before commit
---

**Review changes before committing:**

## Workflow

### Step 1: Check Git Status
```bash
git status
git diff
git diff --staged
```

### Step 2: Review Each Changed File
For each file:
- What was changed?
- Is the change correct?
- Any issues?

### Step 3: Apply Review Checklist

**Correctness**
- [ ] Changes achieve intended goal
- [ ] Edge cases handled
- [ ] Error handling present

**Security**
- [ ] No hardcoded secrets
- [ ] Input validated
- [ ] No SQL injection risks

**Quality**
- [ ] Follows project conventions
- [ ] No unnecessary changes
- [ ] Comments where needed

**Testing**
- [ ] Tests added/updated
- [ ] All tests pass

### Step 4: Report

```markdown
## Code Review Summary

### Changes Reviewed
| File | Status | Notes |
|------|--------|-------|
| [path] | ✅ OK | - |
| [path] | ⚠️ Issue | [note] |

### Issues Found
1. [Issue description and fix]

### Recommendation
- **APPROVE**: Ready to commit
- **FIX FIRST**: Address issues before commit

### Suggested Commit Message
```
<type>(<scope>): <description>
```
```

### Step 5: Offer Actions
- If approved: "Ready to commit. Use `/git/cm` to commit."
- If issues: "Fix these issues first, then review again."
