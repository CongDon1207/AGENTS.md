---
description: Intelligent plan creation with prompt enhancement
argument-hint: [task]
---

**Create implementation plan for:**
<task>$ARGUMENTS</task>

## Workflow

### Step 1: Analyze Request
- Understand what needs to be built
- Identify ambiguities
- Ask clarifying questions if needed

### Step 2: Research (if needed)
- Check existing codebase for patterns
- Identify integration points
- Note dependencies

### Step 3: Route to Appropriate Plan Type

| Complexity | Route To |
|------------|----------|
| Simple, clear scope | `/plan/fast` |
| Complex, needs research | `/plan/hard` |
| Multiple approaches | `/plan/two` |
| Parallel work possible | `/plan/parallel` |

### Step 4: Create Plan Document

```markdown
---
title: "{Brief title}"
description: "{One sentence}"
status: pending
priority: P2
effort: {estimated hours}
created: {YYYY-MM-DD}
---

# [Plan Title]

## Overview
[What this plan accomplishes]

## Requirements
[Bullet list of requirements]

## Technical Approach
[How we'll build it]

## Phases

### Phase 1: [Name]
- [ ] Task 1
- [ ] Task 2

### Phase 2: [Name]
- [ ] Task 3
- [ ] Task 4

## Risks
[Potential issues]

## Success Criteria
[How we know it's done]
```

### Step 5: Save Plan
- Save to `./plans/{date}-{slug}/plan.md`
- Report path to user

**Output:** `✓ Plan created: [path]`
