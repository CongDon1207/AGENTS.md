# AGENTS.md - Antigravity Kit

**Turn your AI Coding Assistant into a Professional Engineering Team.**

This repository serves as the core configuration for **Antigravity Kit**, a modular system that provides specialized agents, workflows, and skills to AI models (OpenCode, Cursor, Windsurf, etc.). It transforms a generic AI into a structured, high-performance engineering workforce.

---

## 🏗️ Project Structure

The kit is organized into modular directories that the AI reads to understand its role, capabilities, and operational rules:

```plaintext
AGENTS.md/
├── AGENTS.md                 # Core Operational Protocols & Rules (The "Constitution")
├── README.md                 # This documentation
│
├── .agent/                   # Antigravity Base Layer (Core Library)
│   ├── agents/               # 20+ Specialist Personas (e.g., Backend, Frontend, DevOps)
│   ├── skills/               # 35+ Core Skills (e.g., React, Node.js, Testing)
│   ├── workflows/            # Automation Workflows (e.g., /plan, /deploy)
│   └── ARCHITECTURE.md       # Detailed System Architecture
│
├── .codex/                   # User/Project Specific Extensions (Overrides)
│   └── skills/               # Custom and Project-specific Skills
│
├── .opencode/                # OpenCode Platform Configurations
│   ├── agent/                # OpenCode Agent definitions
│   └── README.md             # Skills Catalog (Vietnamese)
│
└── .claude/                  # Claude-specific Configuration (Legacy/Optional)
```

---

## 🤖 Core Architecture

The system operates on a resolution priority (Top → Bottom) defined in `AGENTS.md`, ensuring that user-specific customizations (`.codex`) always override core defaults.

### Key Components

-   **Agents (20+ Roles)**:
    Specialized personas with distinct mindsets and capabilities.
    -   `orchestrator`: Manages multi-agent coordination.
    -   `frontend-specialist`: Expert in React, Tailwind, and UI/UX.
    -   `backend-specialist`: Expert in API design, DB schemas, and Node.js.
    -   `security-auditor`: Focuses on OWASP and vulnerability scanning.

-   **Skills (60+ Modules)**:
    Modular knowledge packages loaded on-demand.
    -   **Tech Stack**: Next.js, NestJS, Python, Rust, Docker.
    -   **Methodologies**: TDD, Clean Code, System Design, Security Auditing.
    -   **Meta-Skills**: Sequential Thinking, Brainstorming, Problem Solving.
    -   *Sources*: `.agent/skills` (Core) + `.codex/skills` (Custom).

-   **Workflows (Slash Commands)**:
    Standardized operating procedures invoked via chat.
    -   `/plan`: Create detailed implementation plans.
    -   `/create`: Scaffold new features or apps.
    -   `/debug`: Run systematic root cause analysis.
    -   `/review`: Perform code reviews.

---

## 🚀 Getting Started

1.  **Installation**
    Clone this repository or copy the configuration directories (`.agent`, `.codex`, `.opencode`, `AGENTS.md`) into your project root.

2.  **Initialization**
    Your AI assistant (if configured with Antigravity support) will automatically detect the `AGENTS.md` rules and the `.agent` logic.

3.  **Basic Usage**
    Start by defining your task or using a workflow command:
    > "I need to build a new login page. @[frontend-specialist]"
    > "/plan Refactor the database schema for better performance"

---

## 📜 Operational Conventions

As defined in only `AGENTS.md`:

-   **Language**:
    -   **Artifacts (Docs, Code Comments)**: MUST be in **English**.
    -   **Communication (Chat)**: MUST be in **Vietnamese**.
-   **Workflow**:
    -   **Clarify First**: AI must ask clarifying questions for ambiguous tasks.
    -   **Plan**: Complex changes require an approved `implementation_plan.md`.
    -   **Verify**: All code must be verified with provided scripts (`checklist.py`).

---

## 🔗 References

-   **[System Architecture](.agent/ARCHITECTURE.md)**: Detailed breakdown of all agents and skills.
-   **[Skills Catalog (.opencode)](.opencode/README.md)**: Detailed guide to available skills (Vietnamese).

---

## Acknowledgments & Attribution

This repository is curated from multiple public open-source repositories. I am not the original author of the underlying content; my contribution lies in selecting, customizing, and adapting it to fit specific use cases and workflows. All credit belongs to the original authors and the open-source community.

- The `.claude` directory is sourced from [original repo](https://github.com/duc01226/EasyPlatform).
- The `.agent` directory is sourced from [original repo](https://github.com/vudovn/antigravity-kit).
- Besides, the [antigravity-ide](https://github.com/Dokhacgiakhoa/antigravity-ide.git) is integrated automatically to project many fields.
