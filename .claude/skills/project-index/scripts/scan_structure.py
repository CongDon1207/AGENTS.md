#!/usr/bin/env python3
"""
Project Structure Scanner
Cross-platform script to generate directory tree for AI context

Usage:
    python scan_structure.py [root_path] [max_depth]
    python scan_structure.py . 4
    python scan_structure.py /path/to/project 3
"""

import os
import sys
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Set, Tuple
import re

# Default ignore patterns (base minimum)
DEFAULT_IGNORES = {
    '.git',
    '__pycache__',
    '.DS_Store',
    'Thumbs.db',
}

def parse_gitignore(gitignore_path: Path) -> Set[str]:
    """Parse .gitignore file and return set of patterns to ignore"""
    ignores = set()
    
    if not gitignore_path.exists():
        return ignores
    
    try:
        with open(gitignore_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                # Skip empty lines and comments
                if not line or line.startswith('#'):
                    continue
                
                # Remove leading slash
                if line.startswith('/'):
                    line = line[1:]
                
                # Remove trailing slash for directories
                if line.endswith('/'):
                    line = line[:-1]
                
                # Convert ** to * for simplicity
                line = line.replace('**/', '').replace('**', '*')
                
                # Skip negation patterns for now (TODO: implement properly)
                if line.startswith('!'):
                    continue
                
                ignores.add(line)
    except Exception as e:
        print(f"Warning: Could not read .gitignore: {e}", file=sys.stderr)
    
    return ignores

# File type categories
FILE_CATEGORIES = {
    'typescript': {'.ts', '.tsx', '.mts', '.cts'},
    'javascript': {'.js', '.jsx', '.mjs', '.cjs'},
    'python': {'.py', '.pyw', '.pyi'},
    'csharp': {'.cs', '.csx'},
    'java': {'.java'},
    'go': {'.go'},
    'rust': {'.rs'},
    'ruby': {'.rb'},
    'php': {'.php'},
    'styles': {'.css', '.scss', '.sass', '.less', '.styl'},
    'markup': {'.html', '.htm', '.vue', '.svelte'},
    'config': {'.json', '.yaml', '.yml', '.toml', '.xml', '.ini'},
    'markdown': {'.md', '.mdx'},
}

# Entry point patterns
ENTRY_PATTERNS = [
    r'^(main|index|app|server|entry)\.(ts|tsx|js|jsx|py|go|rs)$',
    r'^(Program|Startup)\.(cs)$',
]

# Config file patterns
CONFIG_PATTERNS = [
    r'^package\.json$',
    r'^tsconfig.*\.json$',
    r'^vite\.config\.',
    r'^next\.config\.',
    r'^webpack\.config\.',
    r'^\.eslintrc',
    r'^\.prettierrc',
    r'^tailwind\.config\.',
    r'^docker-compose',
    r'^Dockerfile$',
    r'^Makefile$',
    r'^\.env\.example$',
    r'^requirements\.txt$',
    r'^pyproject\.toml$',
    r'^Cargo\.toml$',
    r'^go\.mod$',
]

# Key file patterns
KEY_PATTERNS = [
    r'^README',
    r'^CHANGELOG',
    r'^CONTRIBUTING',
    r'^LICENSE',
    r'^AGENTS\.md$',
    r'^HANDOFF\.md$',
]


class ProjectScanner:
    def __init__(self, root_path: str, max_depth: int = 4, ignores: Set[str] = None, respect_gitignore: bool = True):
        self.root_path = Path(root_path).resolve()
        self.max_depth = max_depth
        
        # Start with default ignores
        self.ignores = DEFAULT_IGNORES.copy()
        
        # Add .gitignore patterns if requested
        if respect_gitignore:
            gitignore_path = self.root_path / '.gitignore'
            gitignore_patterns = parse_gitignore(gitignore_path)
            self.ignores.update(gitignore_patterns)
        
        # Add custom ignores if provided
        if ignores:
            self.ignores.update(ignores)
        
        self.stats = {
            'total_files': 0,
            'total_dirs': 0,
            'by_category': {},
            'entry_points': [],
            'config_files': [],
            'key_files': [],
        }

    def should_ignore(self, name: str, rel_path: str = '') -> bool:
        """Check if file/directory should be ignored based on patterns"""
        # Check exact name match
        if name in self.ignores:
            return True
        
        # Check relative path match (for patterns like data/)
        if rel_path in self.ignores:
            return True
        
        # Check wildcard patterns
        for pattern in self.ignores:
            if '*' in pattern:
                # Convert glob pattern to regex
                regex = '^' + pattern.replace('.', r'\.').replace('*', '.*') + '$'
                if re.match(regex, name) or re.match(regex, rel_path):
                    return True
            # Check if pattern matches any part of the path
            elif pattern in rel_path.split('/'):
                return True
        
        return False

    def categorize_file(self, filename: str) -> str:
        ext = Path(filename).suffix.lower()
        for category, exts in FILE_CATEGORIES.items():
            if ext in exts:
                return category
        return 'other'

    def matches_patterns(self, filename: str, patterns: List[str]) -> bool:
        return any(re.match(p, filename, re.IGNORECASE) for p in patterns)

    def scan_directory(self, dir_path: Path, depth: int = 0, prefix: str = '') -> List[str]:
        lines = []
        
        if depth > self.max_depth:
            return lines

        try:
            entries = list(dir_path.iterdir())
        except PermissionError:
            return lines

        # Sort: directories first, then files
        entries.sort(key=lambda e: (not e.is_dir(), e.name.lower()))
        
        # Filter ignored - check both name and relative path
        filtered_entries = []
        for e in entries:
            try:
                rel_path = str(e.relative_to(self.root_path))
                if not self.should_ignore(e.name, rel_path):
                    filtered_entries.append(e)
            except ValueError:
                # If relative_to fails, just check name
                if not self.should_ignore(e.name):
                    filtered_entries.append(e)
        
        entries = filtered_entries

        for i, entry in enumerate(entries):
            is_last = i == len(entries) - 1
            connector = '└── ' if is_last else '├── '
            child_prefix = '    ' if is_last else '│   '
            relative_path = entry.relative_to(self.root_path)

            if entry.is_dir():
                self.stats['total_dirs'] += 1
                lines.append(f'{prefix}{connector}{entry.name}/')
                child_lines = self.scan_directory(entry, depth + 1, prefix + child_prefix)
                lines.extend(child_lines)
            else:
                self.stats['total_files'] += 1
                category = self.categorize_file(entry.name)
                self.stats['by_category'][category] = self.stats['by_category'].get(category, 0) + 1

                # Track special files
                if self.matches_patterns(entry.name, ENTRY_PATTERNS):
                    self.stats['entry_points'].append(str(relative_path))
                if self.matches_patterns(entry.name, CONFIG_PATTERNS):
                    self.stats['config_files'].append(str(relative_path))
                if self.matches_patterns(entry.name, KEY_PATTERNS):
                    self.stats['key_files'].append(str(relative_path))

                lines.append(f'{prefix}{connector}{entry.name}')

        return lines

    def scan(self) -> Dict:
        root_name = self.root_path.name
        lines = [f'{root_name}/'] + self.scan_directory(self.root_path)
        
        return {
            'tree': '\n'.join(lines),
            'stats': self.stats,
        }

    def get_main_language(self) -> str:
        code_categories = ['typescript', 'javascript', 'python', 'csharp', 'java', 'go', 'rust', 'ruby', 'php']
        max_category = 'unknown'
        max_count = 0
        
        for cat in code_categories:
            count = self.stats['by_category'].get(cat, 0)
            if count > max_count:
                max_count = count
                max_category = cat
        
        return max_category

    def generate_markdown(self) -> str:
        result = self.scan()
        main_lang = self.get_main_language()
        now = datetime.now().strftime('%Y-%m-%d %H:%M')

        entry_points = '\n'.join(f'- {f}' for f in result['stats']['entry_points']) or '- (none detected)'
        config_files = '\n'.join(f'- {f}' for f in result['stats']['config_files']) or '- (none detected)'
        key_files = '\n'.join(f'- {f}' for f in result['stats']['key_files']) or '- (none detected)'
        
        distribution = '\n'.join(
            f'| {cat} | {count} |'
            for cat, count in sorted(result['stats']['by_category'].items(), key=lambda x: -x[1])
        )

        return f"""# Project Structure Index
> Auto-generated by project-index skill. Last updated: {now}

## Quick Stats
- **Total files**: {result['stats']['total_files']}
- **Total directories**: {result['stats']['total_dirs']}
- **Main language**: {main_lang}

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
        return json.dumps({
            'generated': datetime.now().isoformat(),
            'root_path': str(self.root_path),
            'stats': result['stats'],
            'main_language': self.get_main_language(),
            'tree': result['tree'],
        }, indent=2)


def main():
    args = sys.argv[1:]
    root_path = args[0] if len(args) > 0 else '.'
    max_depth = int(args[1]) if len(args) > 1 else 4
    fmt = args[2] if len(args) > 2 else 'markdown'
    
    # Check for --no-gitignore flag
    respect_gitignore = '--no-gitignore' not in args

    scanner = ProjectScanner(root_path, max_depth, respect_gitignore=respect_gitignore)
    
    if fmt == 'json':
        print(scanner.generate_json())
    else:
        print(scanner.generate_markdown())


if __name__ == '__main__':
    main()
