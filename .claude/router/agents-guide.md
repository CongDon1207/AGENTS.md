# Agents Guide

> **Purpose**: Each agent file contains mindset, approach, and behavioral patterns for a specific role.
> **Location**: `.claude/agents/<agent-name>.md`
> **When to load**: After identifying the primary role needed for the task.

---

## Available Agents

| Trigger Keywords | Agent | Load File |
|:---|:---|:---|
| plan, architecture, system design, phase, roadmap | **Planner** | `.claude/agents/planner.md` |
| code, implement, feature, logic, component | **Developer** | `.claude/agents/fullstack-developer.md` |
| review, code quality, refactor, optimize code | **Reviewer** | `.claude/agents/code-reviewer.md` |
| test, unit test, coverage, e2e, integration test | **Tester** | `.claude/agents/tester.md` |
| bug, error, debug, log, trace, crash, exception | **Debugger** | `.claude/agents/debugger.md` |
| find, search, scan, locate, where, which file | **Scout** | `.claude/agents/scout.md` |
| external search, web, API docs, library docs | **Scout External** | `.claude/agents/scout-external.md` |
| git, branch, commit, merge, conflict, PR | **Git Manager** | `.claude/agents/git-manager.md` |
| database, SQL, schema, migration, query | **DB Admin** | `.claude/agents/database-admin.md` |
| docs, documentation, README, changelog, notes | **Docs Manager** | `.claude/agents/docs-manager.md` |
| UI, UX, interface, layout, wireframe | **UI/UX Designer** | `.claude/agents/ui-ux-designer.md` |
| brainstorm, ideas, creative, suggestions | **Brainstormer** | `.claude/agents/brainstormer.md` |
| content, copy, writing, marketing | **Copywriter** | `.claude/agents/copywriter.md` |
| research, investigate, analyze, study | **Researcher** | `.claude/agents/researcher.md` |
| MCP, tool, server, integration | **MCP Manager** | `.claude/agents/mcp-manager.md` |
| project, task, deadline, management | **Project Manager** | `.claude/agents/project-manager.md` |
| journal, diary, session log | **Journal Writer** | `.claude/agents/journal-writer.md` |

---

## Usage Rules

1. **Single agent for simple tasks**: Pick the most suitable one.
2. **Multiple agents for complex tasks**: Chain them sequentially (e.g., Planner → Developer → Tester).
3. **Load file to get mindset**: The agent file defines HOW to think and approach problems.
4. **Combine with Command**: Agent = WHO, Command = WHAT workflow to follow.
