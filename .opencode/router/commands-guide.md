# Commands Guide

> **Purpose**: Each command file contains step-by-step workflow for a specific task type.
> **Location**: `.opencode/commands/<command>.md` or `.opencode/commands/<category>/<variant>.md`
> **When to load**: After selecting an Agent, to know the exact steps to execute.

---

## Main Commands

| Trigger | Command | Load File |
|:---|:---|:---|
| code, write code, implement | `/code` | `.opencode/commands/code.md` |
| fix, fix bug, fix error | `/fix` | `.opencode/commands/fix.md` |
| test, run tests | `/test` | `.opencode/commands/test.md` |
| plan, make plan | `/plan` | `.opencode/commands/plan.md` |
| review, review code | `/review-changes` | `.opencode/commands/review-changes.md` |
| build, compile, package | `/build` | `.opencode/commands/build.md` |
| debug, investigate | `/debug` | `.opencode/commands/debug.md` |
| scout, search | `/scout` | `.opencode/commands/scout.md` |
| brainstorm | `/brainstorm` | `.opencode/commands/brainstorm.md` |

---

## Sub-commands (Specialized Variants)

### Fix Variants
| Trigger | Load File |
|:---|:---|
| quick fix | `.opencode/commands/fix/fast.md` |
| hard fix, complex bug | `.opencode/commands/fix/hard.md` |
| fix UI issue | `.opencode/commands/fix/ui.md` |
| fix failing tests | `.opencode/commands/fix/test.md` |
| fix type errors | `.opencode/commands/fix/types.md` |
| fix CI/CD | `.opencode/commands/fix/ci.md` |

### Plan Variants
| Trigger | Load File |
|:---|:---|
| quick plan | `.opencode/commands/plan/fast.md` |
| complex plan | `.opencode/commands/plan/hard.md` |

### Code Variants
| Trigger | Load File |
|:---|:---|
| code without tests | `.opencode/commands/code/no-test.md` |

### Git Commands
| Trigger | Load File |
|:---|:---|
| commit | `.opencode/commands/git/cm.md` |
| PR, pull request | `.opencode/commands/git/pr.md` |

### Docs Commands
| Trigger | Load File |
|:---|:---|
| init docs | `.opencode/commands/docs/init.md` |
| update docs | `.opencode/commands/docs/update.md` |

---

## Usage Rules

1. **Prefer specific over generic**: Use `/fix/ui` instead of `/fix` when fixing UI bugs.
2. **Command = Workflow**: The file contains exact steps to follow.
3. **Combine with Agent**: Agent defines mindset, Command defines process.
