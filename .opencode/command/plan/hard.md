---
description: Research, analyze, and create an implementation plan
model: google/antigravity-claude-opus-4-5-thinking
---

**Deep planning with research:**
<task>$ARGUMENTS</task>

## Use When
- Complex feature or system
- Unfamiliar territory
- Architecture decisions needed
- High risk/impact work

## Workflow

### Phase 1: Research (Researcher Agent)

**Step 1: Understand Context**
- Analyze the codebase structure
- Identify relevant existing patterns
- Note integration points

**Step 2: Technical Research**
- Research best practices
- Evaluate options
- Compare approaches

**Step 3: Risk Assessment**
- Identify potential blockers
- Note dependencies
- List unknowns

### Phase 2: Design (Planner Agent)

**Step 4: Architecture Design**
- Design high-level approach
- Define component boundaries
- Plan data flow

**Step 5: Break Down Tasks**
- Create detailed phases
- Estimate effort per phase
- Identify dependencies

### Phase 3: Document

**Step 6: Create Comprehensive Plan**

```markdown
---
title: "{Title}"
description: "{Description}"
model: google/antigravity-claude-opus-4-5-thinking
status: pending
priority: P1
effort: {total hours}
created: {YYYY-MM-DD}
---

# [Plan Title]

## Executive Summary
[2-3 sentences on what and why]

## Background
[Context and motivation]

## Requirements
### Functional
- [requirement 1]
- [requirement 2]

### Non-Functional
- Performance: [criteria]
- Security: [criteria]

## Technical Design

### Architecture
[High-level design]

### Component Details
[Detailed component specs]

### Data Model
[If applicable]

## Implementation Phases

### Phase 1: Foundation
**Effort**: [hours]
**Dependencies**: None
- [ ] Task 1.1
- [ ] Task 1.2

### Phase 2: Core Features
**Effort**: [hours]
**Dependencies**: Phase 1
- [ ] Task 2.1
- [ ] Task 2.2

### Phase 3: Integration
**Effort**: [hours]
**Dependencies**: Phase 2
- [ ] Task 3.1
- [ ] Task 3.2

## Risk Mitigation
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [risk] | Low/Med/High | Low/Med/High | [strategy] |

## Success Criteria
- [ ] Criterion 1
- [ ] Criterion 2

## Open Questions
- [Question 1]
- [Question 2]
```

### Step 7: Save & Report
**Output:** `✓ Hard plan created: [path] - [N] phases, [M] hours estimated`
