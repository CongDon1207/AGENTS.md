# Commands Guide

> **Purpose**: Each command file contains step-by-step workflow for a specific task type.
> **Location**: `.claude/commands/<command>.md` or `.claude/commands/<category>/<variant>.md`
> **When to load**: After selecting an Agent, to know the exact steps to execute.

---

## Main Commands

| Trigger | Command | Load File |
|:---|:---|:---|
| code, write code, implement | `/code` | `.claude/commands/code.md` |
| fix, fix bug, fix error | `/fix` | `.claude/commands/fix.md` |
| test, run tests | `/test` | `.claude/commands/test.md` |
| plan, make plan | `/plan` | `.claude/commands/plan.md` |
| review, review code | `/review-changes` | `.claude/commands/review-changes.md` |
| build, compile, package | `/build` | `.claude/commands/build.md` |
| debug, investigate | `/debug` | `.claude/commands/debug.md` |
| scout, search | `/scout` | `.claude/commands/scout.md` |
| brainstorm | `/brainstorm` | `.claude/commands/brainstorm.md` |

---

## Sub-commands (Specialized Variants)

### Code Variants
| Trigger | Load File |
|:---|:---|
| auto code, automatic | `.claude/commands/code/auto.md` |
| code without tests | `.claude/commands/code/no-test.md` |
| parallel coding | `.claude/commands/code/parallel.md` |

### Fix Variants
| Trigger | Load File |
|:---|:---|
| quick fix | `.claude/commands/fix/fast.md` |
| hard fix, complex bug | `.claude/commands/fix/hard.md` |
| fix UI issue | `.claude/commands/fix/ui.md` |
| fix failing tests | `.claude/commands/fix/test.md` |
| fix type errors, typescript | `.claude/commands/fix/types.md` |
| fix CI/CD | `.claude/commands/fix/ci.md` |
| fix from logs | `.claude/commands/fix/logs.md` |
| parallel fixing | `.claude/commands/fix/parallel.md` |

### Plan Variants
| Trigger | Load File |
|:---|:---|
| quick plan | `.claude/commands/plan/fast.md` |
| complex plan | `.claude/commands/plan/hard.md` |
| parallel planning | `.claude/commands/plan/parallel.md` |
| two-phase plan | `.claude/commands/plan/two.md` |
| validate plan | `.claude/commands/plan/validate.md` |
| archive plan | `.claude/commands/plan/archive.md` |
| CRO plan | `.claude/commands/plan/cro.md` |

### Git Commands
| Trigger | Load File |
|:---|:---|
| commit | `.claude/commands/git/cm.md` |
| cherry-pick | `.claude/commands/git/cp.md` |
| merge | `.claude/commands/git/merge.md` |
| PR, pull request | `.claude/commands/git/pr.md` |

### Docs Commands
| Trigger | Load File |
|:---|:---|
| init docs | `.claude/commands/docs/init.md` |
| update docs | `.claude/commands/docs/update.md` |
| summarize docs | `.claude/commands/docs/summarize.md` |

### Design Commands
| Trigger | Load File |
|:---|:---|
| quick design | `.claude/commands/design/fast.md` |
| good design | `.claude/commands/design/good.md` |
| design from screenshot | `.claude/commands/design/screenshot.md` |
| design from video | `.claude/commands/design/video.md` |
| 3D design | `.claude/commands/design/3d.md` |
| describe design | `.claude/commands/design/describe.md` |

### Review Commands
| Trigger | Load File |
|:---|:---|
| review codebase | `.claude/commands/review/codebase.md` |
| post-task review | `.claude/commands/review/post-task.md` |

### Skill Management
| Trigger | Load File |
|:---|:---|
| add skill | `.claude/commands/skill/add.md` |
| create skill | `.claude/commands/skill/create.md` |
| plan skill | `.claude/commands/skill/plan.md` |
| optimize skill | `.claude/commands/skill/optimize.md` |

### Other Commands
| Trigger | Load File |
|:---|:---|
| bootstrap project | `.claude/commands/bootstrap.md` |
| create feature | `.claude/commands/create-feature.md` |
| db migrate | `.claude/commands/db-migrate.md` |
| generate DTO | `.claude/commands/generate-dto.md` |
| lint | `.claude/commands/lint.md` |
| kanban | `.claude/commands/kanban.md` |
| preview | `.claude/commands/preview.md` |
| worktree | `.claude/commands/worktree.md` |
| use MCP | `.claude/commands/use-mcp.md` |
| cook (recipe) | `.claude/commands/cook.md` |
| journal | `.claude/commands/journal.md` |
| watzup (status) | `.claude/commands/watzup.md` |
| coding level | `.claude/commands/coding-level.md` |
| ask (Q&A) | `.claude/commands/ask.md` |
| scout external | `.claude/commands/scout/ext.md` |
| test UI | `.claude/commands/test/ui.md` |

---

## Usage Rules

1. **Prefer specific over generic**: Use `/fix/ui` instead of `/fix` when fixing UI bugs.
2. **Command = Workflow**: The file contains exact steps to follow.
3. **Combine with Agent**: Agent defines mindset, Command defines process.