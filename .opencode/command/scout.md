---
description: Search codebase for files and functions
argument-hint: [query]
---

**Search the codebase for:**
<query>$ARGUMENTS</query>

## Workflow

### Step 1: Parse Query
- Understand what user is looking for
- Identify search type (file, function, pattern, concept)

### Step 2: Choose Search Strategy

| Looking For | Tool | Pattern |
|-------------|------|---------|
| File by name | Glob | `**/name*.ts` |
| Function definition | Grep | `function name\|def name` |
| Class definition | Grep | `class Name` |
| Import/export | Grep | `import.*name\|export.*name` |
| Usage | Grep | `name(` |
| Config | Glob | `*.config.*\|*.json` |

### Step 3: Execute Search
- Start with broad pattern
- Narrow based on results
- Follow imports/references

### Step 4: Report

```markdown
## Search Results: [query]

### Files Found
| File | Line | Context |
|------|------|---------|
| `src/file.ts` | 42 | function definition |
| `src/other.ts` | 15 | imported and used |

### Summary
[Brief explanation of what was found]

### Suggested Actions
- Read [file] for details
- The main implementation is in [file:line]
```

## Search Tips

**Finding definitions:**
```
# TypeScript/JavaScript
"function <name>"
"const <name> ="
"class <name>"
"interface <name>"

# Python
"def <name>"
"class <name>"
```

**Finding usages:**
```
"<name>("        # function calls
"import.*<name>" # imports
"<name>."        # method access
```
