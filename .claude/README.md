# 🏠 .claude - AI Control Center

## What is .claude?

The **`.claude`** directory is the "extended brain" of the AI - containing all configurations, knowledge, and processes that enable the AI to work smarter and more professionally.

**Simple Example:**
- Without `.claude`: The AI responds like a standard chatbot.
- With `.claude`: The AI operates as a full team of specialized experts.

---

## Overview Structure

```
.claude/
│
├── 🤖 agents/          ← ROLES (Who does it?)
│   └── 17 distinct expert personas
│
├── 📋 commands/        ← PROCEDURES (How is it done?)
│   └── 50+ standardized workflows
│
├── 📚 skills/          ← KNOWLEDGE (What to know?)
│   └── 59 domain-specific knowledge bases
│
├── 🧭 router/          ← ROUTING (What to choose?)
│   └── 5 decision-making guides
│
├── 🔄 workflows/       ← ORCHESTRATION (Big tasks)
│   └── 4 collaboration scenarios
│
├── ⚡ hooks/           ← AUTOMATION (Trigger events)
│   └── 15+ automated scripts
│
├── 🔧 scripts/         ← UTILITIES (Tools)
│   └── 10+ helper scripts
│
└── ⚙️ settings.json    ← CONFIG (Customization)
```

---

## Directory Explanation

### 🤖 agents/ - Expert Roles

**What it is:** 17 different "personas" the AI can embody.

**Examples:**
| You say | AI embodies |
|---------|-------------|
| "Fix bug" | Debugger (Bug Hunter) |
| "Write code" | Developer (Programmer) |
| "Make a plan" | Planner (Architect) |

📖 [See details in agents/README.md](agents/README.md)

---

### 📋 commands/ - Workflows

**What it is:** 50+ step-by-step "recipes" for specific tasks.

**Examples:**
| Command | Action |
|---------|--------|
| `/fix` | Standard 5-step bug fix |
| `/code` | Coding workflow with testing |
| `/plan` | Planning template |

📖 [See details in commands/README.md](commands/README.md)

---

### 📚 skills/ - Specialized Knowledge

**What it is:** 59 knowledge packages loaded on demand.

**Examples:**
| Skill | Contains |
|-------|----------|
| `ui-ux-pro-max` | 50 styles, 21 palettes, 50 fonts |
| `debugging` | 4-step debug framework |
| `better-auth` | OAuth, 2FA guides |

📖 [See details in skills/README.md](skills/README.md)

---

### 🧭 router/ - Decision Engine

**What it is:** The "decision brain" - helps AI select the right agent/command/skill.

**How it works:**
```
You: "Fix login error"
        ↓
Router analyzes keywords
        ↓
Selects: Debugger + /fix + better-auth
        ↓
AI starts working
```

📖 [See details in router/README.md](router/README.md)

---

### 🔄 workflows/ - Multi-step Collaboration

**What it is:** Scripts for large tasks requiring coordination.

**Example:** New Feature
```
Planner → Developer → Tester → Reviewer → Docs Manager
```

📖 [See details in workflows/README.md](workflows/README.md)

---

### ⚡ hooks/ - Automation

**What it is:** Code that runs automatically on events.

**Examples:**
| Event | Hook runs |
|-------|-----------|
| File edit | Auto-format (Prettier) |
| Task done | Auto-review |
| Session start | Auto-load context |

📖 [See details in hooks/README.md](hooks/README.md)

---

### 🔧 scripts/ - Utility Tools

**What it is:** Helper scripts.

**Examples:**
| Script | Action |
|--------|--------|
| `scan_skills.py` | Scans and generates skills list |
| `worktree.cjs` | Manages git worktrees |
| `ck-help.py` | Command lookup |

📖 [See details in scripts/README.md](scripts/README.md)

---

## How It All Works Together

### Example: "Add dark mode to app"

```
STEP 1: Router Analysis
├── Keywords: "add", "dark mode"
├── Task Type: New Feature
└── Complexity: Medium

STEP 2: Resource Selection
├── Agents: planner → developer → tester
├── Commands: /plan → /code → /test
├── Skills: ui-ux-pro-max, frontend-development
└── Workflow: primary-workflow

STEP 3: Execution
├── Planner creates plan
├── Developer writes code
├── Tester writes tests
└── Hooks auto-format & review

STEP 4: Completion
├── Code merged
├── Docs updated (automated)
└── Changelog recorded (automated)
```

---

## Quick Reference

| Need | Look in |
|------|---------|
| Who does the work | `agents/` |
| What process to follow | `commands/` |
| What knowledge is needed | `skills/` |
| How AI decides | `router/` |
| Large multi-step tasks | `workflows/` |
| Automation | `hooks/` |
| Utility tools | `scripts/` |

---

## Configuration Files

| File | Function |
|------|----------|
| `settings.json` | General config |
| `.env` | Environment variables (do not commit) |
| `.env.example` | Env var template |
| `.mcp.json.example` | MCP server config |
| `.gitignore` | Ignored files |

---

## Summary

| Directory | Count | Function |
|-----------|-------|----------|
| agents | 17 | Expert Roles |
| commands | 50+ | Workflows |
| skills | 59 | Specialized Knowledge |
| router | 5 | Decision Routing |
| workflows | 4 | Orchestration |
| hooks | 15+ | Automation |
| scripts | 10+ | Utilities |

---

## Where to Start?

### If you are new:
1. Read [agents/README.md](agents/README.md) - Understand roles
2. Read [commands/README.md](commands/README.md) - Understand workflows
3. Try simple requests

### If you want to customize:
1. See [skills/README.md](skills/README.md) - Create custom skills
2. See [hooks/README.md](hooks/README.md) - Add automation
3. See [router/README.md](router/README.md) - Understand decision logic

---

## Quick Links

- [📖 AGENTS.md](../AGENTS.md) - Core Ruleset
- [📖 README.md](../README.md) - Project Overview
- [🔧 Settings](settings.json) - Configuration
