# Agents Guide

> **Purpose**: Each agent file defines an expert persona with specific mindset and methodology.
> **Location**: `.opencode/agents/<agent-name>.md`
> **When to load**: Based on the type of work requested.

---

## Agent Selection

| Work Type | Agent | File |
|:---|:---|:---|
| Write/implement code | fullstack-developer | `.opencode/agents/fullstack-developer.md` |
| Fix bugs/errors | debugger | `.opencode/agents/debugger.md` |
| Review code quality | code-reviewer | `.opencode/agents/code-reviewer.md` |
| Write/run tests | tester | `.opencode/agents/tester.md` |
| Create plans | planner | `.opencode/agents/planner.md` |
| Search codebase | scout | `.opencode/agents/scout.md` |
| Design UI/UX | ui-ux-designer | `.opencode/agents/ui-ux-designer.md` |
| Manage git | git-manager | `.opencode/agents/git-manager.md` |
| Write documentation | docs-manager | `.opencode/agents/docs-manager.md` |
| Research technologies | researcher | `.opencode/agents/researcher.md` |
| Track project progress | project-manager | `.opencode/agents/project-manager.md` |
| Generate ideas | brainstormer | `.opencode/agents/brainstormer.md` |
| Manage databases | database-admin | `.opencode/agents/database-admin.md` |

---

## Selection Rules

1. **Primary Agent**: Choose 1 main agent based on core task
2. **Collaboration**: Complex tasks may involve multiple agents
3. **Handoff**: Agents can delegate to others for specialized work

---

## Example Selections

| Request | Primary Agent | Supporting Agents |
|:---|:---|:---|
| "Fix the login bug" | debugger | - |
| "Add user profile feature" | planner (first), then developer | tester, reviewer |
| "Optimize database queries" | database-admin | developer |
| "Review my code changes" | code-reviewer | - |
| "Find where auth is implemented" | scout | - |
