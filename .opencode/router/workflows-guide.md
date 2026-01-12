# Workflows Guide

> **Purpose**: Workflows orchestrate multi-step tasks with multiple agents.
> **Location**: `.opencode/workflows/<workflow-name>.md`
> **When to load**: For large, complex tasks requiring coordination.

---

## Available Workflows

| Workflow | Use When |
|:---|:---|
| primary-workflow | New features requiring plan -> code -> test -> review |
| development-rules | Reference for code quality standards |

---

## When to Use Workflows

**Use workflow when:**
- Task has multiple distinct phases
- Multiple agents need to collaborate
- Work needs to be tracked and coordinated
- Quality gates are required

**Skip workflow when:**
- Simple, single-step task
- Only one agent needed
- Quick fix or small change

---

## Workflow Structure

```
1. Planning Phase (Planner Agent)
   - Analyze requirements
   - Create implementation plan
   
2. Implementation Phase (Developer Agent)
   - Code according to plan
   - Run compile checks
   
3. Testing Phase (Tester Agent)
   - Write tests
   - Verify functionality
   
4. Review Phase (Code Reviewer Agent)
   - Review changes
   - Verify quality
   
5. Finalization Phase
   - Update documentation
   - Commit and push
```
