---
description: Analyze and fix small issues [FAST]
model: google/antigravity-claude-opus-4-5-thinking
---

**Quick fix for simple issues:**
<issues>$ARGUMENTS</issues>

## Workflow

### Step 1: Understand the Issue (30 seconds)
- Read the issue description
- Identify affected file(s)
- Determine the scope

### Step 2: Locate the Problem (1-2 minutes)
- Use Grep/Glob to find relevant code
- Read the affected file(s)
- Identify the exact location

### Step 3: Analyze Root Cause (1 minute)
- Understand why the issue occurs
- Check for similar patterns
- Identify the minimal fix

### Step 4: Implement Fix (2-3 minutes)
- Make the minimal necessary change
- Follow existing code patterns
- Add comment if logic is non-obvious

### Step 5: Verify (1 minute)
- Run type check if applicable
- Run affected tests if available
- Confirm the issue is resolved

### Step 6: Report
```markdown
## Fix Applied

**Issue**: [Brief description]
**Root Cause**: [Why it happened]
**Fix**: [What was changed]
**File(s)**: [List of files modified]
```

## Guidelines

- FAST means minimal investigation
- If issue is complex, escalate to `/fix/hard`
- Keep changes focused and minimal
- Don't refactor unrelated code
- Skip extensive testing for trivial fixes
