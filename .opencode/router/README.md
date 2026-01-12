# Router - Decision and Routing System

The Router helps AI determine which agents, commands, skills, and workflows to use for each request.

## Core Files

| File | Purpose |
|------|---------|
| `decision-flow.md` | Main routing logic and decision tree |
| `agents-guide.md` | Guide for selecting appropriate agent |
| `commands-guide.md` | Guide for selecting appropriate command |
| `skills-guide.md` | Guide for loading specialized skills |
| `workflows-guide.md` | Guide for multi-step workflows |

## How It Works

1. **Analyze Request** - Understand what user needs
2. **Select Agent** - Choose expert persona
3. **Select Command** - Choose workflow steps
4. **Load Skills** - Add specialized knowledge if needed
5. **Apply Workflow** - Use orchestration for complex tasks
6. **Execute** - Perform the work

## Quick Reference

```
User Request
    ↓
[Analyze: work type, domain, complexity]
    ↓
[Select Agent: who will do it]
    ↓
[Select Command: how to do it]
    ↓
[Load Skills: specialized knowledge]
    ↓
[Apply Workflow: for complex tasks]
    ↓
Execute!
```

## See Also

- [Decision Flow](./decision-flow.md) - Detailed routing logic
- [Agents Guide](./agents-guide.md) - Agent selection
- [Commands Guide](./commands-guide.md) - Command selection
- [Skills Guide](./skills-guide.md) - Skill loading
- [Workflows Guide](./workflows-guide.md) - Workflow orchestration
