# Skills Guide

> **Purpose**: Skills provide deep domain expertise for specialized tasks.
> **Location**: `.opencode/skills/<skill-name>/SKILL.md`
> **When to load**: When deep expertise is needed beyond basic commands.

---

## Available Skills

| Skill | Category | Use When |
|:---|:---|:---|
| debugging | utilities | Deep debugging, root cause analysis |
| planning | utilities | Complex planning, architecture design |
| test-generation | testing | Writing comprehensive test suites |
| code-review | utilities | Detailed code review practices |
| frontend-design | frontend | UI/UX implementation |
| backend-development | backend | API design, database patterns |
| performance | optimization | Performance analysis and tuning |
| security | utilities | Security review and hardening |

---

## Loading Rules

1. **Load on demand**: Only when specialized knowledge is needed
2. **Stack skills**: Can combine multiple skills for complex tasks
3. **Skip for simple**: Don't load skills for straightforward work

---

## Example Usage

| Task | Skills to Load |
|:---|:---|
| Investigate flaky test | debugging |
| Design microservice architecture | planning |
| Create comprehensive test suite | test-generation |
| Build responsive UI | frontend-design |
| Implement OAuth flow | backend-development, security |
| Optimize slow queries | performance, backend-development |
