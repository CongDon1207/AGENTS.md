# OpenCode Configuration

This folder contains AI agent configuration for OpenCode - modular prompts, workflows, and expert knowledge.

## Quick Start

The AI will automatically:
1. Analyze your request
2. Select appropriate agent (expert role)
3. Follow the matching command (workflow)
4. Load skills if specialized knowledge needed

## Structure

```
.opencode/
├── agents/           # Expert personas (debugger, developer, planner...)
├── commands/         # Step-by-step workflows (/fix, /code, /plan...)
├── router/           # Decision flow and routing guides
├── workflows/        # Multi-step orchestration
├── skills/           # Deep domain expertise
└── scripts/          # Catalogs and utilities
```

## Core Components

### Agents (Who)
Expert personas that define how to think about a task.
- `fullstack-developer` - Writing code
- `debugger` - Finding and fixing bugs
- `planner` - Creating implementation plans
- `tester` - Writing and running tests
- `code-reviewer` - Reviewing code quality

[See all agents →](./agents/README.md)

### Commands (How)
Step-by-step workflows for specific tasks.
- `/code` - Implement from a plan
- `/fix` - Debug and fix issues
- `/plan` - Create implementation plans
- `/test` - Run and analyze tests
- `/review-changes` - Review before commit

[See all commands →](./commands/README.md)

### Router (Decision)
Helps AI choose the right agent and command.
- [Decision Flow](./router/decision-flow.md) - Main routing logic
- [Agents Guide](./router/agents-guide.md)
- [Commands Guide](./router/commands-guide.md)

### Skills (Knowledge)
Deep expertise for specialized tasks.
- `debugging` - Systematic debugging methodology
- `planning` - Strategic planning frameworks

[See all skills →](./skills/README.md)

### Workflows (Orchestration)
Multi-step processes for complex tasks.
- `primary-workflow` - Standard feature development
- `development-rules` - Code quality standards

[See all workflows →](./workflows/README.md)

## Usage Examples

**Fix a bug:**
```
User: "The login button doesn't work"
AI: Uses debugger agent + /fix/ui command
```

**Build a feature:**
```
User: "Add user profile page"
AI: Uses planner agent + /plan command
Then: developer agent + /code command
Then: tester agent + /test command
```

**Review code:**
```
User: "Review my changes before commit"
AI: Uses code-reviewer agent + /review-changes command
```

## Customization

Add new capabilities by:
1. **New agent**: Add `.md` file in `agents/`
2. **New command**: Add `.md` file in `commands/`
3. **New skill**: Add folder in `skills/` with `SKILL.md`
4. **Update catalogs**: Edit `scripts/*_data.yaml`

## Based On

This configuration is adapted from the `.claude` system for OpenCode compatibility.
