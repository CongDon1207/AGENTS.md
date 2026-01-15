# AGENTS.md - AI Agent Management System

Transform generic AI assistants into a professional engineering team. This repository defines the **rules, roles, and workflows** that enable AI coding agents (Claude, Cursor, Copilot) to work with the consistency and expertise of senior engineers.

---

## 🏗 Core Architecture

*   **🤖 Agents (17 Roles):** Specialized personas with distinct mindsets (e.g., `debugger`, `planner`, `fullstack-developer`, `ui-ux-designer`).
*   **📋 Commands (50+):** Standardized operating procedures for any task (e.g., `/fix`, `/code`, `/plan`, `/test`).
*   **📚 Skills (59+):** Modular knowledge packages loaded on demand (e.g., `frontend-development`, `payment-integration`).
*   **🧭 Router:** Intelligent decision engine that selects the right agent, command, and skill for the job.
*   **🔄 Workflows:** Orchestration protocols for complex, multi-step engineering tasks.
*   **⚡ Hooks:** Automated scripts for code formatting, review, and context management.

---

## 📂 Project Structure

```text
AGENTS.md/
│
├── 📄 AGENTS.md              # Core Ruleset (The AI reads this)
├── 📄 README.md              # Documentation (This file)
│
└── 📁 .claude/               # AI Control Center
    ├── 🤖 agents/            # Role definitions
    ├── 📋 commands/          # Task procedures
    ├── 📚 skills/            # Knowledge base
    ├── 🧭 router/            # Decision logic
    ├── 🔄 workflows/         # Complex orchestration
    └── ⚡ hooks/             # Automation scripts
```

---

## 🚀 Quick Start

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-repo/AGENTS.md
    ```

2.  **Integrate into Your Project**
    Copy the core configuration to your project root:
    ```bash
    cp -r AGENTS.md/.claude your-project/
    cp AGENTS.md/AGENTS.md your-project/
    ```

3.  **Start Working**
    Your AI assistant will automatically detect the configuration in `.claude/` and `AGENTS.md` to begin working as a structured team.

---

## 🛠 Customization

Extend the system by adding Markdown files to the respective directories:

*   **New Agent:** Create `.claude/agents/my-agent.md`
*   **New Command:** Create `.claude/commands/my-command.md`
*   **New Skill:** Create `.claude/skills/my-skill/SKILL.md`

---

## 📄 License

Apache 2.0 - See [LICENSE](LICENSE) for details.

---

## 🌎 Acknowledgments & Attribution

This repository is compiled from multiple public open-source repositories. I am not the original author of the underlying content; my contribution lies in selecting, customizing, and adapting it to fit specific use cases and workflows. All credit belongs to the original authors and the open-source community.
