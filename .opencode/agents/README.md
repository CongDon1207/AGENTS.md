# Agents - Expert Roles

## What are Agents?

**Agents** are specialized "expert personas" that the AI embodies to perform work. Each agent has its own thinking style, methodology, and domain expertise.

**Simple examples:**
- When you need **bug fixing** -> AI becomes **Debugger** (bug hunter)
- When you need **code writing** -> AI becomes **Developer** (programmer)
- When you need **planning** -> AI becomes **Planner** (architect)

---

## Agent List (17 Agents)

### Development Group

| Agent | Role | Triggered By | Main Tasks |
|-------|------|--------------|------------|
| **fullstack-developer** | Developer | "code", "write", "create", "add feature" | Write code, create components, build features |
| **code-reviewer** | Code Inspector | "review", "check code", "refactor" | Evaluate code quality, suggest improvements |
| **tester** | Test Writer | "test", "testing", "coverage" | Write automated tests, ensure code correctness |

### Debugging & Search Group

| Agent | Role | Triggered By | Main Tasks |
|-------|------|--------------|------------|
| **debugger** | Bug Hunter | "bug", "error", "crash", "not working" | Find bug causes, analyze logs, fix issues |
| **scout** | Internal Detective | "find", "where", "which file" | Search codebase, locate files and functions |
| **scout-external** | External Detective | "find docs", "which library", "API" | Find documentation, external APIs, libraries |

### Planning & Management Group

| Agent | Role | Triggered By | Main Tasks |
|-------|------|--------------|------------|
| **planner** | Architect | "plan", "design", "architecture" | Create plans, design systems |
| **project-manager** | Project Manager | "progress", "deadline", "task" | Track work, manage timelines |
| **researcher** | Researcher | "research", "explore", "compare" | Research technologies, analyze solutions |

### Design & Content Group

| Agent | Role | Triggered By | Main Tasks |
|-------|------|--------------|------------|
| **ui-ux-designer** | UI Designer | "UI", "interface", "layout", "beautiful" | Design screens, improve UX |
| **copywriter** | Content Writer | "write content", "marketing" | Write text, marketing content |
| **brainstormer** | Idea Generator | "ideas", "suggest", "brainstorm" | Generate ideas, propose creative solutions |

### Technical Support Group

| Agent | Role | Triggered By | Main Tasks |
|-------|------|--------------|------------|
| **git-manager** | Git Expert | "commit", "merge", "branch", "PR" | Manage code versions, handle conflicts |
| **database-admin** | Database Admin | "database", "SQL", "migration" | Design databases, write queries |
| **docs-manager** | Documentation Writer | "docs", "README", "guide" | Write and update documentation |
| **mcp-manager** | MCP Expert | "MCP", "tool", "integration" | Manage MCP tools |
| **journal-writer** | Work Logger | "log", "journal", "record" | Record work progress |

---

## How AI Selects Agents

### Step 1: You make a request
```
"Fix login not working"
```

### Step 2: AI identifies keywords
```
Keyword "fix error" -> Needs Debugger role (bug hunter)
```

### Step 3: AI embodies the expert
```
AI reads file: agents/debugger.md
-> Learns to think like a professional bug hunter
```

### Step 4: AI works in expert style
```
Debugger will:
1. Ask: "How does the error appear? Any error message?"
2. Analyze logs for clues
3. Find the root cause (not just symptoms)
4. Propose fix and verify
```

---

## Why Use Agents?

| Without Agents | With Agents |
|----------------|-------------|
| Generic AI responses | Expert-level responses |
| No clear process | Professional workflow |
| May miss important steps | Ensures all necessary steps |
| Lacks depth | Deep domain knowledge |

---

## See Also

- [Commands List (Workflows)](../commands/README.md) - Step-by-step procedures
- [Skills List (Knowledge)](../skills/README.md) - Domain expertise
- [Router (Decision Flow)](./decision-flow.md) - How AI decides
