# Agents List & Roles

This folder defines project-level OpenCode agents (Markdown-based agent configs).

- Path: `.opencode/agent/`
- File name becomes the agent name. Example: `ai-engineer.md` -> `@ai-engineer`
- In this repo, these agents are intended to run as `mode: subagent`.

## How Agents Are Used

### Manual invocation (recommended)
Mention the agent in your message:

```text
@ai-engineer design a minimal RAG pipeline for this service
@code-reviewer review my staged changes
@debugger analyze this stack trace and propose a fix
```

### Automatic invocation
A primary agent may invoke a subagent automatically based on the subagent `description`.

### CLI notes
- `opencode run --agent <name>` only selects primary agents. For subagents, use `@mention`.
- See what OpenCode recognizes: `opencode agent list`.

---

## Development

| Agent | Role | When to use | Main tasks |
| --- | --- | --- | --- |
| `fullstack-developer` | Primary implementation agent | Implement features, modify behavior, build APIs/components | Implement minimal changes, keep code maintainable, add basic tests when requested |
| `code-reviewer` | Code reviewer | Review a diff/PR, spot risks, suggest improvements | Identify bugs/edge cases, security/perf concerns, give actionable feedback |
| `tester` | Test engineer | Add tests, analyze failures, improve coverage | Propose test plan, write unit/integration/E2E tests as requested |
| `mcp-manager` | MCP integration specialist | Configure MCP servers, execute MCP tools, debug MCP issues | Validate server config, run tools, report concise results |

## Investigation

| Agent | Role | When to use | Main tasks |
| --- | --- | --- | --- |
| `debugger` | Root-cause investigator | Bugs, crashes, flaky behavior, regressions | Reproduce, isolate root cause, propose the smallest safe fix, verify |
| `scout` | Codebase navigator | Find files/functions, trace flows, understand structure | Locate relevant code quickly, map call paths, suggest next search targets |
| `scout-external` | External researcher | Need outside docs, library comparisons, web research | Gather sources, summarize trade-offs, suggest best option |

## Planning

| Agent | Role | When to use | Main tasks |
| --- | --- | --- | --- |
| `planner` | Technical planner | Large/ambiguous tasks, architecture, sequencing work | Produce an implementation plan, risks, dependencies, milestones |
| `project-manager` | Progress coordinator | Multi-step work, status tracking, handoffs | Break down tasks, track progress, define checkpoints and next steps |
| `researcher` | Deep technical researcher | Evaluate approaches before coding | Compare options, provide recommendations with rationale |
| `brainstormer` | Idea generator | Need alternatives, naming, product/UX ideas | Generate options, compare pros/cons, pick shortlists |

## Creative / Documentation

| Agent | Role | When to use | Main tasks |
| --- | --- | --- | --- |
| `ui-ux-designer` | UI/UX designer | Improve layout, typography, UX flows | Give design direction + implementation guidance, check accessibility basics |
| `docs-manager` | Documentation writer | Write/update docs, guides, specs | Produce clear docs aligned with current behavior |

## Support

| Agent | Role | When to use | Main tasks |
| --- | --- | --- | --- |
| `git-manager` | Git specialist | Conflicts, branching strategy, PR workflow | Suggest safe git command sequences and resolution steps |
| `database-admin` | DB specialist | Schema changes, migrations, query tuning | Propose schema/index changes, write/validate queries, migration guidance |

## Domain Specialists

| Agent | Role | When to use | Main tasks |
| --- | --- | --- | --- |
| `ai-engineer` | LLM / RAG specialist | Model integrations, RAG, prompt pipelines, agent workflows | Define contracts/schemas, reliability and cost controls, evaluation approach |
| `data-engineer` | Data pipeline specialist | ETL/ELT, warehousing, streaming, data quality | Design idempotent pipelines, incremental loads, monitoring and runbooks |
| `data-scientist` | Modeling specialist | EDA, experiments, ML modeling | Define metrics/assumptions, model baselines, evaluation, limitations |
| `data-analyst` | Metrics & insight specialist | KPI reporting, comparisons, trends | Compute metrics, segment analysis, visualization suggestions |
| `computer-vision-engineer` | Computer vision specialist | OCR/detection/segmentation pipelines | Minimal CV pipeline, evaluation plan, performance/deployment notes |
