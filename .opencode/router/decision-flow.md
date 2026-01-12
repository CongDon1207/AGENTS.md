# Decision Flow - How AI Routes Requests

## Request Processing Pipeline

```
User Request
    |
    v
+-----------------------------------------------------------+
| STEP 1: Analyze Request                                    |
| - Identify WORK TYPE (code/fix/test/plan/review...)        |
| - Identify DOMAIN (frontend/backend/database/devops...)    |
| - Identify COMPLEXITY (simple/complex/multi-step)          |
+-----------------------------------------------------------+
    |
    v
+-----------------------------------------------------------+
| STEP 2: Select Agent (PRIMARY ROLE)                        |
| - Simple task: Pick 1 most suitable Agent                  |
| - Complex task: May need multiple Agents coordination      |
| -> Load file `.opencode/agents/<agent-name>.md` for mindset|
| -> See: .opencode/router/agents-guide.md                   |
+-----------------------------------------------------------+
    |
    v
+-----------------------------------------------------------+
| STEP 3: Select Command (WORKFLOW)                          |
| - Identify main command (code/fix/test/plan...)            |
| - If more specific variant exists, use sub-command         |
| -> Load file `.opencode/commands/<command>.md` for steps   |
| -> See: .opencode/router/commands-guide.md                 |
+-----------------------------------------------------------+
    |
    v
+-----------------------------------------------------------+
| STEP 4: Load Skill (EXPERT KNOWLEDGE) - IF NEEDED          |
| - Scan keywords in request                                 |
| - Only load when deep expertise is required                |
| -> Load file `.opencode/skills/<skill>/SKILL.md`           |
| -> See: .opencode/router/skills-guide.md                   |
+-----------------------------------------------------------+
    |
    v
+-----------------------------------------------------------+
| STEP 5: Apply Workflow (IF large/complex task)             |
| - New feature -> primary-workflow.md                       |
| - Multi-agent -> orchestration-protocol.md                 |
| -> Load file `.opencode/workflows/<workflow>.md`           |
| -> See: .opencode/router/workflows-guide.md                |
+-----------------------------------------------------------+
    |
    v
  EXECUTE
```

---

## Quick Decision Matrix

| Situation | Agent | Command | Skill | Workflow |
|:---|:---|:---|:---|:---|
| Small bug, clear cause | Debugger | `/fix/fast` | - | - |
| Hard bug, needs investigation | Debugger | `/fix/hard` | `debugging/` | - |
| New feature code | Developer | `/code` | By domain | `primary-workflow` |
| Create unit tests | Tester | `/test` | `test-generation/` | - |
| Code review before merge | Reviewer | `/review-changes` | `code-review/` | - |
| Plan large task | Planner | `/plan` | `planning/` | - |
| Find file/function in repo | Scout | `/scout` | - | - |
| Create PR with proper message | Git Manager | `/git/pr` | - | - |
| Design UI from screenshot | UI/UX Designer | `/design/screenshot` | `frontend-design/` | - |
| Complex multi-step task | Planner -> Developer -> Tester | `/plan` -> `/code` -> `/test` | Multiple | `primary-workflow` |

---

## Selection Principles

1. **Agent**: Always pick 1 primary agent. Only coordinate multiple agents when truly needed.
2. **Command**: Prefer specific sub-command over generic command (e.g., `/fix/ui` over `/fix`).
3. **Skill**: Only load when deep expertise is required. Skip for simple tasks.
4. **Workflow**: Only use for large, multi-step tasks requiring orchestration.

---

## Example Routing

| User Request | -> Agent | -> Command | -> Skill | -> Workflow |
|:---|:---|:---|:---|:---|
| "Fix UI bug" | `.opencode/agents/debugger.md` | `.opencode/commands/fix/ui.md` | - | - |
| "Write tests for feature X" | `.opencode/agents/tester.md` | `.opencode/commands/test.md` | `.opencode/skills/test-generation/` | - |
| "Create PR" | `.opencode/agents/git-manager.md` | `.opencode/commands/git/pr.md` | - | - |
| "Optimize performance" | `.opencode/agents/developer.md` | `.opencode/commands/code.md` | `.opencode/skills/performance/` | - |
| "Plan microservice architecture" | `.opencode/agents/planner.md` | `.opencode/commands/plan.md` | `.opencode/skills/planning/` | `.opencode/workflows/primary-workflow` |
