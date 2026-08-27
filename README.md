

# AGENTS.md - Antigravity Kit

**Turn your AI coding assistant into a structured engineering team.**

This repository is the core configuration for **Antigravity Kit**, a modular system of agents, workflows, and skills that can be reused across coding assistants. It adapts a generic model into a more disciplined engineering workflow.

---

## Project Structure

The kit is organized into modular directories that define rules, skills, and active agent roles:

```plaintext
AGENTS.md/
|-- AGENTS.md                 # Core operational protocols and rules
|-- README.md                 # This documentation
|
|-- .agent/                   # Base Antigravity layer
|   |-- agents/               # Legacy base agent library
|   |-- skills/               # Core shared skills
|   |-- workflows/            # Slash-command workflows
|   |-- rules/                # Global rules
|   `-- ARCHITECTURE.md       # Legacy architecture reference
|
|-- .codex/                   # Codex-native overrides
|   |-- agents/               # Active Codex subagents (.toml)
|   `-- skills/               # Custom and project-specific skills
|
|-- plugins/                  # Repo-local Codex plugins and marketplace targets
|
|-- .opencode/                # OpenCode-compatible configuration
|   |-- agent/                # OpenCode agent definitions
|   `-- README.md             # Skills catalog
|
`-- .claude/                  # Legacy/optional Claude configuration
```

---

## Core Architecture

The system follows the resolution priority defined in `AGENTS.md`, so project-specific Codex configuration in `.codex/` overrides base defaults when both exist.

### Key Components

- **Codex Subagents (18 roles)**  
  The active Codex role set lives in `.codex/agents/` and is the source of truth for Codex-native delegation.
  - `fullstack-developer`: Default implementation fallback for multi-layer product work.
  - `planner`: Turns large or ambiguous requests into a concrete implementation plan.
  - `scout`: Performs fast local codebase navigation and symbol mapping.
  - `debugger`: Investigates root causes for bugs, regressions, and flaky behavior.
  - `code-reviewer`: Reviews changes for correctness, regressions, and missing coverage.
  - `tester`: Designs and adds deterministic tests.
  - `researcher`: Compares options using primary sources.
  - `mcp-manager`: Handles MCP-centric tasks when MCP is central to the request.

- **Skills (shared + custom modules)**  
  Skills are loaded on demand from `.agent/skills`, `.opencode/skills`, and `.codex/skills`.
  - Tech stack examples: Next.js, NestJS, Python, Rust, Docker
  - Method examples: TDD, clean code, system design, security review
  - Meta-skills: planning, brainstorming, debugging, problem solving

- **Workflows (slash commands)**  
  Standard operating procedures can be invoked through commands such as `/plan`, `/debug`, and `/review`.

---

## Getting Started

1. **Installation**  
   Clone this repository or copy `AGENTS.md`, `.agent`, `.codex`, and `.opencode` into your project root.

2. **Initialization**  
   Your assistant reads `AGENTS.md` plus the relevant role and skill files for the current task.

3. **Basic Usage**  
   Start with a direct task or agent mention:
   > "I need to build a new login page. @fullstack-developer"  
   > "Review my staged changes. @code-reviewer"  
   > "Plan a safe schema rollout. @planner"

---

## Operational Conventions

As defined in `AGENTS.md`:

- **Language**
  - Repository artifacts such as docs and code comments must be in English.
  - Chat communication should be in Vietnamese.
- **Workflow**
  - Clarify ambiguous requirements first.
  - Keep changes minimal and scoped.
  - Verify code with the available checks before claiming completion.

---

## References

- **[System Architecture](.agent/ARCHITECTURE.md)**: Legacy base-layer architecture from Antigravity Kit. Useful for historical context, but not the source of truth for active Codex subagents.
- **[Skills Catalog (.opencode)](.opencode/README.md)**: Detailed guide to the available skills.

---

## Codex Subagents

- Codex subagents live in `.codex/agents/` as `.toml` files.
- They are a cleaned-up port of the OpenCode agents from `.opencode/agent/`.
- Active roles: `ai-engineer`, `brainstormer`, `code-reviewer`, `computer-vision-engineer`, `data-analyst`, `data-engineer`, `data-scientist`, `database-admin`, `debugger`, `docs-manager`, `fullstack-developer`, `git-manager`, `mcp-manager`, `planner`, `researcher`, `scout`, `tester`, `ui-ux-designer`.
- Removed from the OpenCode role set for Codex: `project-manager`, `scout-external`.
- When documentation disagrees, prefer `.codex/agents/*.toml` over legacy `.agent` or `.opencode` examples.

---

## Acknowledgments & Attribution

This repository is curated from multiple public open-source repositories. The value here is in selection, adaptation, and integration for specific workflows. Credit belongs to the original authors and the broader open-source community.

- The `.claude` directory is sourced from [original repo](https://github.com/duc01226/EasyPlatform).
- The `.agent` directory is sourced from [original repo](https://github.com/vudovn/antigravity-kit).
- The [antigravity-ide](https://github.com/Dokhacgiakhoa/antigravity-ide.git) is also integrated into this project in selected areas.
