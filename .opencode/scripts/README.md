# Scripts

Utility scripts for catalog generation and management.

## Available Scripts

| Script | Purpose |
|--------|---------|
| `commands_data.yaml` | Auto-generated catalog of all commands |
| `skills_data.yaml` | Auto-generated catalog of all skills |

## Usage

These YAML catalogs help the AI quickly find the right command or skill for a given request.

### Commands Catalog

Lists all available commands with:
- Name (e.g., `/fix`, `/plan/fast`)
- Description
- Category
- Arguments

### Skills Catalog

Lists all available skills with:
- Name (e.g., `debugging`, `planning`)
- Category
- Description
- References availability

## Regenerating Catalogs

To update the catalogs after adding new commands or skills:

```bash
# Scan commands and update catalog
python .opencode/scripts/scan_commands.py

# Scan skills and update catalog
python .opencode/scripts/scan_skills.py
```
