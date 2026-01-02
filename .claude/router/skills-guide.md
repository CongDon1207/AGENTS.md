# Skills Guide

> **Purpose**: Skills provide deep expert knowledge for specific domains/technologies.
> **Location**: `.claude/skills/<skill-name>/SKILL.md`
> **When to load**: Only when task requires specialized expertise. Skip for simple tasks.

---

## Loading Rules

1. **Scan keywords** in user request
2. **Only load when needed**: Simple tasks don't need skills
3. **Minimum set**: If multiple skills match, choose the smallest set that covers the request
4. **Ask if ambiguous**: If unsure which skill, ask 1 clarifying question

---

## Available Skills by Domain

### Project Navigation
| Trigger Keywords | Skill Folder |
|:---|:---|
| Project structure, index, tree, folder layout | `.claude/skills/project-index/` |

### Frontend & UI
| Trigger Keywords | Skill Folder |
|:---|:---|
| CSS, Tailwind, styling | `.claude/skills/ui-styling/` |
| UI/UX advanced | `.claude/skills/ui-ux-pro-max/` |
| Angular component | `.claude/skills/frontend-angular-component/` |
| Angular form | `.claude/skills/frontend-angular-form/` |
| Angular store | `.claude/skills/frontend-angular-store/` |
| Angular API service | `.claude/skills/frontend-angular-api-service/` |
| Frontend design | `.claude/skills/frontend-design/`, `.claude/skills/frontend-design-pro/` |
| Frontend development | `.claude/skills/frontend-development/` |
| Three.js, 3D | `.claude/skills/threejs/` |

### Backend & Database
| Trigger Keywords | Skill Folder |
|:---|:---|
| Backend, API | `.claude/skills/backend-development/` |
| Database, SQL, query | `.claude/skills/databases/` |
| EasyPlatform backend | `.claude/skills/easyplatform-backend/` |

### Testing & Debugging
| Trigger Keywords | Skill Folder |
|:---|:---|
| Test generation | `.claude/skills/test-generation/` |
| Webapp testing | `.claude/skills/webapp-testing/` |
| Bug diagnosis | `.claude/skills/bug-diagnosis/` |
| Debugging | `.claude/skills/debugging/` |
| Chrome DevTools | `.claude/skills/chrome-devtools/` |

### Architecture & Performance
| Trigger Keywords | Skill Folder |
|:---|:---|
| Cross-service, microservice | `.claude/skills/arch-cross-service-integration/` |
| Performance optimization | `.claude/skills/arch-performance-optimization/` |
| Security review | `.claude/skills/arch-security-review/` |

### Documentation & Planning
| Trigger Keywords | Skill Folder |
|:---|:---|
| Documentation | `.claude/skills/documentation/` |
| Feature docs | `.claude/skills/feature-docs/` |
| README improvement | `.claude/skills/readme-improvement/` |
| Planning | `.claude/skills/planning/` |
| Plan analysis | `.claude/skills/plan-analysis/` |
| Plans kanban | `.claude/skills/plans-kanban/` |

### AI & Media
| Trigger Keywords | Skill Folder |
|:---|:---|
| AI multimodal, image, vision | `.claude/skills/ai-multimodal/` |
| AI artist | `.claude/skills/ai-artist/` |
| Media processing | `.claude/skills/media-processing/` |

### DevOps & Tools
| Trigger Keywords | Skill Folder |
|:---|:---|
| DevOps, CI/CD | `.claude/skills/devops/` |
| MCP builder | `.claude/skills/mcp-builder/` |
| MCP management | `.claude/skills/mcp-management/` |
| Repomix | `.claude/skills/repomix/` |
| Package upgrade | `.claude/skills/package-upgrade/` |

### Code Quality
| Trigger Keywords | Skill Folder |
|:---|:---|
| Code review | `.claude/skills/code-review/` |
| Dual pass review | `.claude/skills/dual-pass-review/` |
| Tasks code review | `.claude/skills/tasks-code-review/` |

### Research & Problem Solving
| Trigger Keywords | Skill Folder |
|:---|:---|
| Research | `.claude/skills/research/` |
| Problem solving | `.claude/skills/problem-solving/` |
| Sequential thinking | `.claude/skills/sequential-thinking/` |
| Feature investigation | `.claude/skills/feature-investigation/` |
| Feature implementation | `.claude/skills/feature-implementation/` |

### Specialized
| Trigger Keywords | Skill Folder |
|:---|:---|
| Better Auth | `.claude/skills/better-auth/` |
| Shopify | `.claude/skills/shopify/` |
| Payment integration | `.claude/skills/payment-integration/` |
| Mobile development | `.claude/skills/mobile-development/` |
| Web frameworks | `.claude/skills/web-frameworks/` |
| Google ADK Python | `.claude/skills/google-adk-python/` |
| Claude Code | `.claude/skills/claude-code/` |
| Domain brainstormer | `.claude/skills/domain-name-brainstormer/` |
| Branch comparison | `.claude/skills/branch-comparison/` |
| Developer growth | `.claude/skills/developer-growth-analysis/` |
| Docs seeker | `.claude/skills/docs-seeker/` |
| Markdown novel viewer | `.claude/skills/markdown-novel-viewer/` |
| Skill creator | `.claude/skills/skill-creator/` |

---

## Usage Rules

1. **Skills = Expert knowledge**: Load to get deep domain expertise.
2. **Not always needed**: Simple code/fix tasks often don't need skills.
3. **Read SKILL.md first**: It contains the main knowledge and may reference other files.
4. **Combine with Agent + Command**: Skill enhances capability, doesn't replace workflow.