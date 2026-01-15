---
description: Analyze Github Actions logs and fix issues
model: google/antigravity-OpenCode-opus-4-5-thinking
---

**Fix CI/CD pipeline issues:**
<url>$ARGUMENTS</url>

## Workflow

### Step 1: Access CI Logs
- Open GitHub Actions URL
- Or use `gh run view` command
- Find the failing job/step

### Step 2: Analyze Failure
- Read the error output
- Identify the failing command
- Note the exit code

### Step 3: Categorize Issue

| Category | Common Causes |
|----------|---------------|
| **Build Failure** | Syntax error, missing dependency, type error |
| **Test Failure** | Failed assertion, timeout, flaky test |
| **Lint Failure** | Code style violation |
| **Deploy Failure** | Config error, permission issue |
| **Environment** | Missing secret, wrong Node version |

### Step 4: Fix by Category

**Build Failure:**
- Check `package.json` dependencies
- Run build locally to reproduce
- Fix compilation errors

**Test Failure:**
- Run tests locally
- Check for environment differences
- Fix or update tests

**Lint Failure:**
- Run linter locally
- Apply auto-fix if available
- Manual fix for complex issues

**Deploy Failure:**
- Check deployment config
- Verify secrets are set
- Check permissions

### Step 5: Verify Locally
- Run the same commands as CI
- Ensure they pass locally
- Check environment variables

### Step 6: Push and Monitor
- Commit fixes
- Push to trigger new run
- Monitor CI for success

### Step 7: Report

```markdown
## CI Fix Applied

### Pipeline
[GitHub Actions URL]

### Failure
- Job: [job name]
- Step: [step name]
- Error: [error message]

### Root Cause
[What caused the failure]

### Fix
[What was changed]

### Status
- [ ] Fix pushed
- [ ] CI passing
```

