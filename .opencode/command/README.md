# Commands - Workflow Procedures

## What are Commands?

**Commands** are step-by-step "recipes" for completing specific types of work. Like cooking recipes - follow the steps and get the expected result.

**Simple examples:**
- Need to **fix a bug** -> Use command `/fix` (has 8 specific steps)
- Need to **write code** -> Use command `/code` (has its own workflow)
- Need to **make a plan** -> Use command `/plan` (has ready templates)

---

## Main Commands (10 commands)

| Command | When to Use | Description |
|---------|-------------|-------------|
| `/code` | Need to write new code | Standard coding workflow with tests |
| `/fix` | Need to fix bugs | Debug and fix bug workflow |
| `/test` | Need to write/run tests | Testing workflow |
| `/plan` | Need to make a plan | Analysis and planning workflow |
| `/review-changes` | Need to review code | Quality check workflow |
| `/build` | Need to build project | Application packaging workflow |
| `/debug` | Need deep investigation | Problem analysis workflow |
| `/scout` | Need to search | Smart search workflow |
| `/brainstorm` | Need ideas | Creative solution workflow |

---

## Detailed Commands by Group

### Fix Group (Bug Fixing) - 8 variants

| Command | When to Use | Example Situation |
|---------|-------------|-------------------|
| `/fix` | Regular bug fixing | "Button not clickable" |
| `/fix/fast` | Quick simple fix | "Typo in text" |
| `/fix/hard` | Complex, unclear bug | "App crashes randomly, unknown cause" |
| `/fix/ui` | UI bug | "Layout breaks on mobile" |
| `/fix/test` | Fix failing tests | "Unit test failed after update" |
| `/fix/types` | TypeScript errors | "Type error on compile" |
| `/fix/ci` | CI/CD issues | "Pipeline failed" |
| `/fix/logs` | Fix based on logs | "Production error, have log file" |

### Plan Group - 6 variants

| Command | When to Use | Example Situation |
|---------|-------------|-------------------|
| `/plan` | Regular planning | "Add login feature" |
| `/plan/fast` | Quick plan, small task | "Add export button" |
| `/plan/hard` | Complex planning | "Design microservices system" |
| `/plan/two` | Two-phase plan | "Large project needs phasing" |
| `/plan/validate` | Validate existing plan | "Review existing plan" |
| `/plan/parallel` | Multiple parallel plans | "3 independent features" |

### Code Group - 3 variants

| Command | When to Use | Example Situation |
|---------|-------------|-------------------|
| `/code` | Standard coding (with test) | "Create UserProfile component" |
| `/code/auto` | Automatic coding | "Generate CRUD from schema" |
| `/code/no-test` | Quick code without test | "Quick prototype for demo" |

### Git Commands - 4 variants

| Command | When to Use | Example Situation |
|---------|-------------|-------------------|
| `/git/cm` | Commit code | "Commit recent changes" |
| `/git/pr` | Create Pull Request | "Create PR for review" |
| `/git/merge` | Merge branches | "Merge feature to main" |
| `/git/cp` | Cherry-pick | "Get commit from other branch" |

### Docs Commands - 3 variants

| Command | When to Use | Example Situation |
|---------|-------------|-------------------|
| `/docs/init` | Create new docs | "Initialize docs for new project" |
| `/docs/update` | Update docs | "Update README after adding feature" |
| `/docs/summarize` | Summarize docs | "Summarize for executive" |

### Design Commands - 5 variants

| Command | When to Use | Example Situation |
|---------|-------------|-------------------|
| `/design/fast` | Quick design | "Quick mock for meeting" |
| `/design/good` | Polished design | "Production-ready UI" |
| `/design/screenshot` | Design from image | "Code from this Figma design" |
| `/design/video` | Analyze from video | "Make like demo in video" |
| `/design/3d` | 3D design | "Create Three.js scene" |

### Review Commands - 2 variants

| Command | When to Use | Example Situation |
|---------|-------------|-------------------|
| `/review/codebase` | Review entire codebase | "Evaluate project quality" |
| `/review/post-task` | Review after completion | "Check before commit" |

---

## Summary

| Concept | Explanation |
|---------|-------------|
| **What is Command** | Step-by-step workflow for a task |
| **How many** | 10 main commands + 30+ variants |
| **Who chooses** | AI auto-selects based on request |
| **What are variants** | Specialized versions for specific situations |

---

## Usage Tips

### 1. Choose appropriate variant
```
Simple task -> use /fast
Complex task -> use /hard
Multiple independent tasks -> use /parallel
```

### 2. Combine Commands
```
New feature:
/plan -> /code -> /test -> /review -> /docs
```

### 3. Be specific
```
BAD: "Fix this" (unclear)
GOOD: "Fix layout breaking on mobile" (clear -> AI picks /fix/ui)
```

---

## See Also

- [Agents List (Roles)](../agents/README.md) - Who will do this work
- [Skills List (Knowledge)](../skills/README.md) - What expertise needed
- [Router (Decision Flow)](../router/decision-flow.md) - How AI decides
