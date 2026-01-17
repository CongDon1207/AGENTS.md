---
description: Fix type errors
model: google/antigravity-OpenCode-opus-4-5-thinking
---

**Fix TypeScript/type errors:**

## Workflow

### Step 1: Run Type Check
```bash
# TypeScript
tsc --noEmit

# Or project-specific
npm run typecheck
yarn type-check
```

### Step 2: Parse Errors
For each error, identify:
- File and line number
- Error code (e.g., TS2322)
- Error message
- Expected vs actual type

### Step 3: Fix by Error Type

| Error Code | Issue | Fix |
|------------|-------|-----|
| TS2322 | Type mismatch | Cast, narrow, or fix type |
| TS2339 | Property missing | Add property or fix interface |
| TS2345 | Argument type wrong | Fix argument or parameter type |
| TS2531 | Object possibly null | Add null check |
| TS2551 | Typo in property | Fix spelling |
| TS7006 | Implicit any | Add explicit type |

### Step 4: Common Fixes

**Null/undefined issues:**
```typescript
// Before
user.name.toUpperCase()

// After
user?.name?.toUpperCase()
// or
if (user && user.name) {
  user.name.toUpperCase()
}
```

**Type narrowing:**
```typescript
// Before
function process(input: string | number) {
  return input.toUpperCase() // Error
}

// After
function process(input: string | number) {
  if (typeof input === 'string') {
    return input.toUpperCase()
  }
  return input.toString()
}
```

### Step 5: Verify
- Re-run type check
- Ensure no new errors
- Check build succeeds

### Step 6: Report

```markdown
## Type Errors Fixed

### Errors Fixed
| File | Line | Error | Fix |
|------|------|-------|-----|
| ... | ... | ... | ... |

### Type Check: PASSED
```

