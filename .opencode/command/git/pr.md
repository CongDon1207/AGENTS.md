---
description: Create a Pull Request
model: google/antigravity-claude-opus-4-5-thinking
---

**Create a Pull Request:**

## Workflow

### Step 1: Pre-flight Checks
```bash
git status
git log origin/main..HEAD
git diff origin/main..HEAD --stat
```

### Step 2: Ensure Changes are Pushed
```bash
git push -u origin <branch>
```

### Step 3: Analyze Changes
- Review all commits in branch
- Summarize what changed
- List affected areas

### Step 4: Generate PR Content

```markdown
## Summary
[2-3 sentences on what this PR does]

## Changes
- [Change 1]
- [Change 2]
- [Change 3]

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing done

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)

## Related Issues
Closes #[issue-number]
```

### Step 5: Create PR
```bash
gh pr create --title "<title>" --body "<body>"
```

### Step 6: Report

```markdown
## PR Created

**URL**: [PR URL]
**Title**: [PR title]
**Branch**: [source] -> [target]

### Summary
[Brief description]

### Next Steps
- Wait for review
- Address any feedback
- Merge when approved
```

## PR Title Guidelines

Good:
- `feat(auth): add OAuth2 login support`
- `fix(api): handle null response from payment service`
- `docs: update API documentation for v2`

Bad:
- `Update code`
- `Fix bug`
- `WIP`
