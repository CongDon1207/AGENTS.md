---
description: Run test suite and fix issues
argument-hint: [issues]
---

**Fix failing tests:**
<issues>$ARGUMENTS</issues>

## Workflow

### Step 1: Run Tests
- Execute the test suite
- Identify failing tests
- Collect error messages

### Step 2: Analyze Failures
For each failing test:
- Read the test assertion
- Understand expected vs actual
- Identify the component being tested

### Step 3: Categorize Failures

| Type | Approach |
|------|----------|
| **Logic Error** | Fix the implementation code |
| **Outdated Test** | Update test to match new behavior |
| **Missing Mock** | Add/update test mocks |
| **Async Issue** | Fix timing/await handling |
| **Environment** | Fix test configuration |

### Step 4: Fix Each Failure

**If implementation is wrong:**
- Fix the source code
- Keep test unchanged

**If test is outdated:**
- Verify new behavior is correct
- Update test expectations
- Document why changed

**If mock is incorrect:**
- Update mock data
- Ensure mock matches API contract

### Step 5: Re-run Tests
- Run full test suite
- Verify all tests pass
- Check for new failures

### Step 6: Report

```markdown
## Test Fixes Applied

### Tests Fixed
1. `test-name-1`: [What was wrong, how fixed]
2. `test-name-2`: [What was wrong, how fixed]

### Summary
- Total failing: [N]
- Fixed: [N]
- Still failing: [N]

### Notes
[Any important observations]
```

## Forbidden Practices

- Commenting out failing tests
- Changing assertions just to pass
- Using skip/pending without justification
- Removing tests instead of fixing
