---
description: Run tests locally and analyze the summary report
model: google/antigravity-claude-opus-4-5-thinking
---

**Run test suite and analyze results:**

## Workflow

### Step 1: Detect Test Framework
- Check package.json for test script
- Identify framework (Jest, Vitest, pytest, etc.)
- Note any configuration

### Step 2: Run Tests
```bash
# JavaScript/TypeScript
npm test
yarn test
pnpm test

# Python
pytest
python -m pytest

# Other
go test ./...
cargo test
```

### Step 3: Parse Results
- Count passed/failed/skipped
- Identify failing tests
- Extract error messages

### Step 4: Analyze Failures
For each failure:
- What is being tested?
- What was expected vs actual?
- Is it a test issue or code issue?

### Step 5: Report

```markdown
## Test Results

### Summary
- **Total**: [N] tests
- **Passed**: [N] ✅
- **Failed**: [N] ❌
- **Skipped**: [N] ⏭️
- **Coverage**: [N]% (if available)

### Failures
| Test | Error | Likely Cause |
|------|-------|--------------|
| test-name | error-msg | assessment |

### Recommendations
1. [Action 1]
2. [Action 2]

### Next Steps
- [ ] Fix failing tests with `/fix/test`
- [ ] Improve coverage if low
```

### Step 6: Offer Actions
- If failures: "Want me to fix these with `/fix/test`?"
- If coverage low: "Want me to add more tests?"
- If all pass: "All tests passing! Ready for next step."
