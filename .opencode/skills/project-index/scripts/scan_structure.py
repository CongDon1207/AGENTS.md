#!/usr/bin/env python3
"""
Project Structure Scanner
Cross-platform script to generate an AI-friendly project map + directory tree.

Usage:
  python scan_structure.py [root_path] [max_depth] [format]
  python scan_structure.py . 4
  python scan_structure.py . 4 json
  python scan_structure.py . 4 --no-gitignore
"""

from __future__ import annotations

import fnmatch
import json
import os
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple

# Goal: keep output focused on "main" project directories and avoid common noise.
BASE_IGNORES: Set[str] = {
    # VCS / OS
    ".git",
    ".DS_Store",
    "Thumbs.db",
    # Dependencies / build outputs
    "node_modules",
    "dist",
    "build",
    "out",
    "coverage",
    ".next",
    ".nuxt",
    ".turbo",
    # Python virtualenv / caches
    "venv",
    ".venv",
    "env",
    ".tox",
    "__pycache__",
    ".pytest_cache",
    ".mypy_cache",
    ".ruff_cache",
    # Tooling caches / IDE
    ".cache",
    ".idea",
    ".vscode",
    # .NET / Rust typical outputs
    "bin",
    "obj",
    "target",
    # Secrets (files)
    ".env",
    ".env.local",
    ".env.development.local",
    ".env.test.local",
    ".env.production.local",
}


FILE_CATEGORIES: Dict[str, Set[str]] = {
    "typescript": {".ts", ".tsx", ".mts", ".cts"},
    "javascript": {".js", ".jsx", ".mjs", ".cjs"},
    "python": {".py", ".pyw", ".pyi"},
    "csharp": {".cs", ".csx"},
    "java": {".java"},
    "go": {".go"},
    "rust": {".rs"},
    "ruby": {".rb"},
    "php": {".php"},
    "styles": {".css", ".scss", ".sass", ".less", ".styl"},
    "markup": {".html", ".htm", ".vue", ".svelte"},
    "config": {".json", ".yaml", ".yml", ".toml", ".xml", ".ini"},
    "markdown": {".md", ".mdx"},
}


ENTRY_PATTERNS = [
    re.compile(r"^(main|index|app|server|entry)\.(ts|tsx|js|jsx|py|go|rs)$", re.I),
    re.compile(r"^(Program|Startup)\.(cs)$", re.I),
]

CONFIG_PATTERNS = [
    re.compile(r"^package\.json$", re.I),
    re.compile(r"^tsconfig.*\.json$", re.I),
    re.compile(r"^vite\.config\.", re.I),
    re.compile(r"^next\.config\.", re.I),
    re.compile(r"^webpack\.config\.", re.I),
    re.compile(r"^\.eslintrc", re.I),
    re.compile(r"^\.prettierrc", re.I),
    re.compile(r"^tailwind\.config\.", re.I),
    re.compile(r"^docker-compose", re.I),
    re.compile(r"^Dockerfile$", re.I),
    re.compile(r"^Makefile$", re.I),
    re.compile(r"^\.env\.example$", re.I),
    re.compile(r"^requirements\.txt$", re.I),
    re.compile(r"^pyproject\.toml$", re.I),
    re.compile(r"^Cargo\.toml$", re.I),
    re.compile(r"^go\.mod$", re.I),
]

KEY_PATTERNS = [
    re.compile(r"^README", re.I),
    re.compile(r"^CHANGELOG", re.I),
    re.compile(r"^CONTRIBUTING", re.I),
    re.compile(r"^LICENSE", re.I),
    re.compile(r"^AGENTS\.md$", re.I),
    re.compile(r"^HANDOFF\.md$", re.I),
]


def parse_gitignore(gitignore_path: Path) -> List[str]:
    patterns: List[str] = []
    if not gitignore_path.exists():
        return patterns

    try:
        for raw in gitignore_path.read_text(encoding="utf-8").splitlines():
            line = raw.strip()
            if not line or line.startswith("#"):
                continue
            if line.startswith("!"):
                continue
            if line.startswith("/"):
                line = line[1:]
            patterns.append(line)
    except Exception as exc:
        print(f"Warning: Could not read .gitignore: {exc}", file=sys.stderr)

    return patterns


def normalize_rel_path(p: Path) -> str:
    return str(p).replace(os.sep, "/")


class ProjectScanner:
    def __init__(self, root_path: str, max_depth: int = 4, respect_gitignore: bool = True):
        self.root_path = Path(root_path).resolve()
        self.max_depth = max_depth

        self.respect_gitignore = respect_gitignore
        self.gitignore_patterns: List[str] = (
            parse_gitignore(self.root_path / ".gitignore") if respect_gitignore else []
        )

        self.stats = {
            "total_files": 0,
            "total_dirs": 0,
            "by_category": {},
            "entry_points": [],
            "config_files": [],
            "key_files": [],
        }

    def should_ignore(self, name: str, rel_path: str) -> bool:
        if name in BASE_IGNORES or rel_path in BASE_IGNORES:
            return True

        rel_path_norm = rel_path.replace(os.sep, "/")
        parts = rel_path_norm.split("/") if rel_path_norm else []

        # Base ignore by segment
        if any(part in BASE_IGNORES for part in parts):
            return True

        for pattern in self.gitignore_patterns:
            p = pattern.replace(os.sep, "/")

            # Directory pattern (ends with "/")
            if p.endswith("/"):
                p_dir = p[:-1]
                if rel_path_norm == p_dir or rel_path_norm.startswith(p_dir + "/"):
                    return True
                continue

            # Path pattern
            if "/" in p:
                if fnmatch.fnmatch(rel_path_norm, p):
                    return True
                continue

            # Name pattern
            if fnmatch.fnmatch(name, p):
                return True

        return False

    def categorize_file(self, file_name: str) -> str:
        ext = Path(file_name).suffix.lower()
        for category, exts in FILE_CATEGORIES.items():
            if ext in exts:
                return category
        return "other"

    def matches_any(self, name: str, patterns: List[re.Pattern]) -> bool:
        return any(p.search(name) for p in patterns)

    def is_entry_point(self, name: str) -> bool:
        return self.matches_any(name, ENTRY_PATTERNS)

    def is_config_file(self, name: str) -> bool:
        return self.matches_any(name, CONFIG_PATTERNS)

    def is_key_file(self, name: str) -> bool:
        return self.matches_any(name, KEY_PATTERNS)

    def get_main_language(self) -> str:
        code_categories = [
            "typescript",
            "javascript",
            "python",
            "csharp",
            "java",
            "go",
            "rust",
            "ruby",
            "php",
        ]
        max_category = "unknown"
        max_count = 0
        for cat in code_categories:
            count = int(self.stats["by_category"].get(cat, 0))
            if count > max_count:
                max_count = count
                max_category = cat
        return max_category

    def describe_top_level_entry(self, name: str, is_dir: bool) -> str:
        if not is_dir:
            lower = name.lower()
            if lower == "readme.md":
                return "Project overview and getting started"
            if lower == "agents.md":
                return "Agent working conventions / repo rules"
            if lower in {"changelog.md", "handoff.md", "contributing.md", "license", "license.md"}:
                return "Project process / legal / handoff documentation"
            if lower in {"package.json", "pnpm-lock.yaml", "yarn.lock", "package-lock.json"}:
                return "JavaScript/TypeScript dependencies and scripts"
            if lower in {"pyproject.toml", "requirements.txt", "poetry.lock", "pipfile", "pipfile.lock"}:
                return "Python dependencies and tooling"
            if lower in {".gitignore", ".gitattributes"}:
                return "Git configuration"
            return "Key file (see tree for context)"

        lower = name.lower()
        if lower == "src":
            return "Main application source code"
        if lower in {"app", "apps"}:
            return "Application(s) (often runnable targets)"
        if lower in {"packages", "pkg"}:
            return "Packages (shared modules/libraries)"
        if lower in {"libs", "lib"}:
            return "Shared libraries/utilities"
        if lower in {"services", "service"}:
            return "Backend services / service layer"
        if lower in {"api", "apis"}:
            return "API layer (routes/controllers/handlers)"
        if lower in {"tests", "test", "__tests__"}:
            return "Tests"
        if lower in {"docs", "documentation"}:
            return "Documentation"
        if lower in {"scripts", "tools"}:
            return "Automation scripts / tooling"
        if lower in {"public", "static", "assets"}:
            return "Static assets"
        if lower == ".github":
            return "GitHub configuration (CI, templates, workflows)"
        if lower == ".claude":
            return "AI tooling / agent workflows (project-local)"
        if lower == ".codex":
            return "Codex CLI skills / configuration (project-local)"
        if lower in {"infra", "infrastructure", "deploy", "ops", "k8s", "terraform"}:
            return "Infrastructure / deployment"
        return "Project-specific directory (see tree)"

    def get_top_level_map(self) -> List[Tuple[str, str, str]]:
        items: List[Tuple[str, str, str]] = []
        try:
            entries = list(self.root_path.iterdir())
        except PermissionError:
            return items

        entries.sort(key=lambda e: (not e.is_dir(), e.name.lower()))
        for entry in entries:
            rel_path = normalize_rel_path(entry.relative_to(self.root_path))
            if self.should_ignore(entry.name, rel_path):
                continue

            is_dir = entry.is_dir()
            display = f"{entry.name}/" if is_dir else entry.name
            typ = "dir" if is_dir else "file"
            purpose = self.describe_top_level_entry(entry.name, is_dir=is_dir)
            items.append((display, typ, purpose))
        return items

    def scan_directory(self, dir_path: Path, depth: int = 0, prefix: str = "") -> List[str]:
        lines: List[str] = []
        if depth > self.max_depth:
            return lines

        try:
            entries = list(dir_path.iterdir())
        except (PermissionError, OSError):
            return lines

        # Sort: directories first, then files
        entries.sort(key=lambda e: (not e.is_dir(), e.name.lower()))

        # Filter ignored
        filtered: List[Path] = []
        for entry in entries:
            try:
                rel = normalize_rel_path(entry.relative_to(self.root_path))
            except ValueError:
                rel = entry.name
            if not self.should_ignore(entry.name, rel):
                filtered.append(entry)

        for idx, entry in enumerate(filtered):
            is_last = idx == len(filtered) - 1
            connector = "`-- " if is_last else "|-- "
            child_prefix = "    " if is_last else "|   "

            try:
                rel_path = normalize_rel_path(entry.relative_to(self.root_path))
            except ValueError:
                rel_path = entry.name

            if entry.is_dir():
                self.stats["total_dirs"] += 1
                lines.append(f"{prefix}{connector}{entry.name}/")
                lines.extend(self.scan_directory(entry, depth + 1, prefix + child_prefix))
                continue

            self.stats["total_files"] += 1
            category = self.categorize_file(entry.name)
            self.stats["by_category"][category] = int(self.stats["by_category"].get(category, 0)) + 1

            if self.is_entry_point(entry.name):
                self.stats["entry_points"].append(rel_path)
            if self.is_config_file(entry.name):
                self.stats["config_files"].append(rel_path)
            if self.is_key_file(entry.name):
                self.stats["key_files"].append(rel_path)

            lines.append(f"{prefix}{connector}{entry.name}")

        return lines

    def scan(self) -> Dict[str, object]:
        root_name = self.root_path.name
        lines = [f"{root_name}/"] + self.scan_directory(self.root_path)
        return {"tree": "\n".join(lines), "stats": self.stats}

    def generate_markdown(self) -> str:
        result = self.scan()
        main_lang = self.get_main_language()
        now = datetime.now().strftime("%Y-%m-%d %H:%M")

        top_level = self.get_top_level_map()
        top_level_table = (
            "\n".join(f"| {p} | {t} | {purpose} |" for p, t, purpose in top_level)
            or "| (none) | - | - |"
        )

        entry_points = "\n".join(f"- {f}" for f in self.stats["entry_points"]) or "- (none detected)"
        config_files = "\n".join(f"- {f}" for f in self.stats["config_files"]) or "- (none detected)"
        key_files = "\n".join(f"- {f}" for f in self.stats["key_files"]) or "- (none detected)"

        distribution = "\n".join(
            f"| {cat} | {count} |"
            for cat, count in sorted(self.stats["by_category"].items(), key=lambda x: -int(x[1]))
        )
        if not distribution:
            distribution = "| (none) | 0 |"

        return f"""# Project Structure Index
> Auto-generated by project-index. Last updated: {now}

## Quick Stats
- **Total files**: {self.stats['total_files']}
- **Total directories**: {self.stats['total_dirs']}
- **Main language**: {main_lang}

## Top-Level Map
| Path | Type | Purpose |
|:---|:---:|:---|
{top_level_table}

## Directory Tree
```
{result['tree']}
```

## Entry Points
{entry_points}

## Config Files
{config_files}

## Key Files
{key_files}

## File Distribution
| Category | Count |
|:---|---:|
{distribution}
"""

    def generate_json(self) -> str:
        result = self.scan()
        return json.dumps(
            {
                "generated": datetime.now().isoformat(),
                "root_path": str(self.root_path),
                "max_depth": self.max_depth,
                "respect_gitignore": self.respect_gitignore,
                "stats": self.stats,
                "main_language": self.get_main_language(),
                "top_level_map": [
                    {"path": p, "type": t, "purpose": purpose} for p, t, purpose in self.get_top_level_map()
                ],
                "tree": result["tree"],
            },
            indent=2,
        )


def main() -> None:
    args = sys.argv[1:]
    root_path = args[0] if len(args) > 0 else "."
    max_depth = int(args[1]) if len(args) > 1 and args[1].isdigit() else 4
    fmt = args[2] if len(args) > 2 and not args[2].startswith("--") else "markdown"

    respect_gitignore = "--no-gitignore" not in args

    scanner = ProjectScanner(root_path, max_depth=max_depth, respect_gitignore=respect_gitignore)
    if fmt == "json":
        print(scanner.generate_json())
    else:
        print(scanner.generate_markdown())


if __name__ == "__main__":
    main()
