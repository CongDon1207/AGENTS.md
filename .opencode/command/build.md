---
description: Build backend and/or frontend projects
model: google/antigravity-claude-opus-4-5-thinking
---

**Build the project:**

## Workflow

### Step 1: Detect Build System
- Check for package.json, Makefile, Cargo.toml, etc.
- Identify build command
- Note any prerequisites

### Step 2: Pre-build Checks
```bash
# Check dependencies
npm install  # or yarn, pnpm
pip install -r requirements.txt
go mod download
```

### Step 3: Run Build
```bash
# JavaScript/TypeScript
npm run build
yarn build

# Python
python setup.py build
pip install -e .

# Go
go build ./...

# Rust
cargo build --release
```

### Step 4: Verify Build
- Check for errors
- Verify output artifacts
- Note any warnings

### Step 5: Report

```markdown
## Build Results

### Status: [SUCCESS/FAILED]

### Output
- Artifacts: [location]
- Size: [size]
- Time: [duration]

### Warnings
- [any warnings]

### Next Steps
- [deployment or testing steps]
```

## Common Issues

| Error | Solution |
|-------|----------|
| Missing dependency | Run install command |
| Type error | Fix with `/fix/types` |
| Out of memory | Increase Node memory |
| Permission denied | Check file permissions |
