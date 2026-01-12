---
description: Stage all files and create a commit
argument-hint: (empty - auto-generate message)
---

**Create a git commit:**

## Workflow

### Step 1: Check Status
```bash
git status
git diff --stat
```

### Step 2: Analyze Changes
- List all modified files
- Understand what changed
- Categorize changes

### Step 3: Generate Commit Message

Follow Conventional Commits:
```
<type>(<scope>): <description>

[optional body]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

### Step 4: Stage and Commit
```bash
git add .
git commit -m "<message>"
```

### Step 5: Report

```markdown
## Commit Created

**Hash**: [short hash]
**Message**: [commit message]

### Files Committed
- [file 1]
- [file 2]

### Next Steps
- Push with: `git push`
- Create PR with: `/git/pr`
```

## Safety Rules

**Check before commit:**
- No `.env` files
- No API keys or secrets
- No `node_modules`
- No large binary files

**If secrets detected:**
"⚠️ Found potential secrets in [file]. Remove before committing."
