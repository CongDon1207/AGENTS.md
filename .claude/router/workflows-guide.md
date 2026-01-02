# Workflows Guide

> **Purpose**: Workflows define orchestration patterns for large, multi-step tasks.
> **Location**: `.claude/workflows/<workflow-name>.md`
> **When to load**: Only for complex tasks requiring multiple agents or phases.

---

## Available Workflows

| Trigger | Workflow | Load File | Use Case |
|:---|:---|:---|:---|
| New feature, large task | **Primary Workflow** | `.claude/workflows/primary-workflow.md` | Full feature development cycle |
| Multi-agent coordination | **Orchestration Protocol** | `.claude/workflows/orchestration-protocol.md` | Sequential/parallel agent chains |
| Dev rules, conventions | **Development Rules** | `.claude/workflows/development-rules.md` | Coding standards reference |
| Documentation management | **Doc Management** | `.claude/workflows/documentation-management.md` | Docs lifecycle |

---

## When to Use Workflows

### Use Primary Workflow when:
- Building a new feature from scratch
- Task has multiple phases (plan → code → test → review)
- Need to coordinate between planning, implementation, and testing

### Use Orchestration Protocol when:
- Multiple agents need to work together
- Tasks can be parallelized
- Need sequential handoff between agents

### Skip Workflows when:
- Simple bug fix
- Single-file change
- Quick question/answer
- Small refactor

---

## Workflow Patterns

### Sequential Chaining
```
Planner → Developer → Tester → Reviewer
```
- Each agent completes before next begins
- Pass context between agents
- Use for dependent tasks

### Parallel Execution
```
┌─ Developer (Feature A)
│
├─ Developer (Feature B)
│
└─ Tester (Write tests)
```
- Independent tasks run simultaneously
- No file conflicts allowed
- Plan merge strategy first

---

## Usage Rules

1. **Workflows = Orchestration**: For coordinating complex multi-step work.
2. **Not for simple tasks**: Skip if task is straightforward.
3. **Combine all layers**: Workflow coordinates Agents, who follow Commands, enhanced by Skills.
