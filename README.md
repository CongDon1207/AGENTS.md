# AGENTS.md - AI Agent Management System

Transform generic AI assistants into a professional engineering team. This repository defines the **rules, roles, and workflows** that enable AI coding agents (OpenCode, Claude, Cursor, Copilot) to work with the consistency and expertise of senior engineers.

---

## Core Architecture

- **Agents (17 Roles):** Specialized personas with distinct mindsets (e.g., `debugger`, `planner`, `fullstack-developer`, `ui-ux-designer`).
- **Commands (50+):** Standardized operating procedures for common tasks (e.g., `/fix`, `/code`, `/plan`, `/test`).
- **Skills (61+):** Modular knowledge packages loaded on demand (e.g., `frontend-development`, `payment-integration`, `senior-data-engineer`, `senior-data-scientist`).
- **Router:** Decision logic that selects the right agent, command, and skill for the job.
- **Workflows:** Orchestration protocols for complex, multi-step engineering tasks.
- **Hooks:** Automated scripts for formatting, review, and context management.

---

## Project Structure

```text
AGENTS.md/
│
├── AGENTS.md                 # Working conventions (the AI reads this)
├── README.md                 # Documentation (this file)
│
├── .opencode/                # OpenCode control center
│   ├── agent/                # Role definitions
│   ├── commands/             # Task procedures
│   └── skills/               # Knowledge base
│
├── .claude/                  # Claude-specific configuration (optional)
└── .agent/                   # Other agent configs (optional)
```

---

## Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/AGENTS.md
   ```

2. **Integrate into Your Project (OpenCode)**
   Copy the core configuration to your project root:
   ```bash
   cp -r AGENTS.md/.opencode your-project/
   cp AGENTS.md/AGENTS.md your-project/
   ```

3. **Start Working**
   Your AI assistant will automatically detect the configuration in `.opencode/` and `AGENTS.md` to begin working as a structured team.

---

## Customization

Extend the system by adding Markdown files to the respective directories:

- **New Agent:** Create `.opencode/agent/my-agent.md`
- **New Command:** Create `.opencode/commands/my-command.md`
- **New Skill:** Create `.opencode/skills/my-skill/SKILL.md`

---

## Featured Skills

### Senior Data Engineer (`senior-data-engineer`)
World-class data engineering skill for building scalable data pipelines, ETL/ELT systems, and data infrastructure. Expertise in Python, SQL, Spark, Airflow, dbt, Kafka, and the modern data stack. Includes data modeling, pipeline orchestration, data quality, and DataOps.

**Use when:**
- Designing data architectures
- Building data pipelines
- Optimizing data workflows
- Implementing data governance

**Tech stack:** Python, SQL, R, Scala, Go, Spark, Airflow, dbt, Kafka, Databricks, Docker, Kubernetes


---

## License

Apache 2.0 - See [LICENSE](LICENSE) for details.

---

## Acknowledgments & Attribution

This repository is curated from multiple public open-source repositories. I am not the original author of the underlying content; my contribution lies in selecting, customizing, and adapting it to fit specific use cases and workflows. All credit belongs to the original authors and the open-source community.

The `.claude` directory is sourced from [original repo](https://github.com/duc01226/EasyPlatform).

The `.agent` directory is sourced from [original repo](https://github.com/vudovn/antigravity-kit).
