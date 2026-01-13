---
description: Analyze and fix UI issues
model: google/antigravity-claude-opus-4-5-thinking
---

**Fix UI/UX issues:**
<issues>$ARGUMENTS</issues>

## Workflow

### Step 1: Understand the UI Issue
- Identify affected component(s)
- Note expected vs actual appearance/behavior
- Check which devices/browsers affected
- Get screenshot if available

### Step 2: Locate the Code
- Find component file(s)
- Identify CSS/styling rules
- Check responsive breakpoints
- Review related components

### Step 3: Analyze the Problem
- Is it CSS-related?
- Is it component logic?
- Is it responsive design issue?
- Is it a state management issue?

### Step 4: Implement Fix

**For CSS Issues:**
- Use browser devtools approach mentally
- Fix specificity issues
- Check responsive breakpoints
- Ensure consistent spacing

**For Component Issues:**
- Fix rendering logic
- Handle edge cases
- Check prop handling

**For Responsive Issues:**
- Test breakpoints
- Use mobile-first approach
- Fix flexbox/grid issues

### Step 5: Verify
- Check on multiple viewport sizes
- Verify accessibility (contrast, focus)
- Test interactions (hover, click)
- Compare with design if available

### Step 6: Report

```markdown
## UI Fix Applied

**Issue**: [Visual/interaction issue]
**Component**: [affected component path]
**Fix**: [CSS/component changes made]
**Verification**: 
- [ ] Desktop OK
- [ ] Tablet OK
- [ ] Mobile OK
- [ ] Accessibility OK
```

## Common UI Fixes

| Issue | Likely Fix |
|-------|------------|
| Layout broken | flexbox/grid properties |
| Text overflow | overflow, text-wrap |
| Spacing issues | margin/padding adjustments |
| Responsive break | media query breakpoints |
| Z-index issues | stacking context |
| Alignment | flex align/justify |
