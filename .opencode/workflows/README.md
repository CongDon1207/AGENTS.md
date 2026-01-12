# Workflows

Workflows define multi-step processes that coordinate multiple agents and ensure quality gates.

## Available Workflows

| Workflow | Purpose |
|----------|---------|
| [primary-workflow.md](./primary-workflow.md) | Standard feature development: plan → code → test → review |
| [development-rules.md](./development-rules.md) | Code quality standards and conventions |

## When to Use Workflows

**Use a workflow when:**
- Building a new feature (multiple phases)
- Complex task requiring multiple agents
- Work needs formal quality gates
- Changes affect multiple parts of codebase

**Skip workflows when:**
- Quick, simple fix
- Single-file change
- Trivial task

## Workflow Principles

1. **Sequential Quality Gates**: Each phase must pass before proceeding
2. **Agent Collaboration**: Different experts handle different phases
3. **Documentation**: Keep track of progress and decisions
4. **Verification**: Always verify work before moving on

## Standard Flow

```
1. PLAN (Planner Agent)
   ↓
2. IMPLEMENT (Developer Agent)
   ↓
3. TEST (Tester Agent)
   ↓
4. REVIEW (Code Reviewer Agent)
   ↓
5. FINALIZE (Commit & Document)
```
