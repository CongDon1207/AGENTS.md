# Decision Flow - How AI Routes Requests

## Request Processing Pipeline

```
User Request
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 1: Analyze Request                                 │
│ - Identify WORK TYPE (code/fix/test/plan/review...)     │
│ - Identify DOMAIN (frontend/backend/database/devops...) │
│ - Identify COMPLEXITY (simple/complex/multi-step)       │
└─────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 2: Select Agent (PRIMARY ROLE)                     │
│ - Simple task: Pick 1 most suitable Agent               │
│ - Complex task: May need multiple Agents coordination   │
│ → Load file `.claude/agents/<agent-name>.md` for mindset│
│ → See: .claude/router/agents-guide.md                   │
└─────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 3: Select Command (WORKFLOW)                       │
│ - Identify main command (code/fix/test/plan...)         │
│ - If more specific variant exists, use sub-command      │
│ → Load file `.claude/commands/<command>.md` for steps   │
│ → See: .claude/router/commands-guide.md                 │
└─────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 4: Load Skill (EXPERT KNOWLEDGE) - IF NEEDED       │
│ - Scan keywords in request                              │
│ - Only load when deep expertise is required             │
│ → Load file `.claude/skills/<skill>/SKILL.md`           │
│ → See: .claude/router/skills-guide.md                   │
└─────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│ STEP 5: Apply Workflow (IF large/complex task)          │
│ - New feature → primary-workflow.md                     │
│ - Multi-agent → orchestration-protocol.md               │
│ → Load file `.claude/workflows/<workflow>.md`           │
│ → See: .claude/router/workflows-guide.md                │
└─────────────────────────────────────────────────────────┘
    │
    ▼
  EXECUTE
```

---

## Quick Decision Matrix

| Situation | Agent | Command | Skill | Workflow |
|:---|:---|:---|:---|:---|
| Small bug, clear cause | Debugger | `/fix/fast` | ❌ | ❌ |
| Hard bug, needs investigation | Debugger | `/fix/hard` | `debugging/` | ❌ |
| New feature code | Developer | `/code` | By domain | `primary-workflow` |
| Create unit tests | Tester | `/test` | `test-generation/` | ❌ |
| Code review before merge | Reviewer | `/review-changes` | `code-review/` | ❌ |
| Plan large task | Planner | `/plan` | `planning/` | ❌ |
| Find file/function in repo | Scout | `/scout` | ❌ | ❌ |
| Create PR with proper message | Git Manager | `/git/pr` | ❌ | ❌ |
| Design UI from screenshot | UI/UX Designer | `/design/screenshot` | `frontend-design/` | ❌ |
| Complex multi-step task | Planner → Developer → Tester | `/plan` → `/code` → `/test` | Multiple | `primary-workflow` |

---

## Selection Principles

1. **Agent**: Always pick 1 primary agent. Only coordinate multiple agents when truly needed.
2. **Command**: Prefer specific sub-command over generic command (e.g., `/fix/ui` over `/fix`).
3. **Skill**: Only load when deep expertise is required. Skip for simple tasks.
4. **Workflow**: Only use for large, multi-step tasks requiring orchestration.

---

## Example Routing

| User Request | → Agent | → Command | → Skill | → Workflow |
|:---|:---|:---|:---|:---|
| "Fix UI bug" | `.claude/agents/debugger.md` | `.claude/commands/fix/ui.md` | ❌ | ❌ |
| "Write tests for feature X" | `.claude/agents/tester.md` | `.claude/commands/test.md` | `.claude/skills/test-generation/` | ❌ |
| "Create PR" | `.claude/agents/git-manager.md` | `.claude/commands/git/pr.md` | ❌ | ❌ |
| "Optimize performance" | `.claude/agents/developer.md` | `.claude/commands/code.md` | `.claude/skills/arch-performance-optimization/` | ❌ |
| "Plan microservice architecture" | `.claude/agents/planner.md` | `.claude/commands/plan.md` | `.claude/skills/arch-cross-service-integration/` | `.claude/workflows/primary-workflow` |
