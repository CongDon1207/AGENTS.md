#!/usr/bin/env node
/**
 * Project Structure Scanner
 * Cross-platform script to generate an AI-friendly project map + directory tree.
 *
 * Usage:
 *   node scan-structure.js [rootPath] [maxDepth] [format]
 *   node scan-structure.js . 4
 *   node scan-structure.js . 4 json
 *   node scan-structure.js . 4 --no-gitignore
 */

const fs = require('fs');
const os = require('os');
const path = require('path');

const BASE_IGNORES = [
  // VCS / OS
  '.git',
  '.DS_Store',
  'Thumbs.db',

  // Dependencies / build outputs
  'node_modules',
  'dist',
  'build',
  'out',
  'coverage',
  '.next',
  '.nuxt',
  '.turbo',

  // Python virtualenv / caches
  'venv',
  '.venv',
  'env',
  '.tox',
  '__pycache__',
  '.pytest_cache',
  '.mypy_cache',
  '.ruff_cache',

  // Tooling caches / IDE
  '.cache',
  '.idea',
  '.vscode',

  // .NET / Rust typical outputs
  'bin',
  'obj',
  'target',

  // Secrets (files)
  '.env',
  '.env.local',
  '.env.development.local',
  '.env.test.local',
  '.env.production.local',
];

const FILE_CATEGORIES = {
  typescript: ['.ts', '.tsx', '.mts', '.cts'],
  javascript: ['.js', '.jsx', '.mjs', '.cjs'],
  python: ['.py', '.pyw', '.pyi'],
  csharp: ['.cs', '.csx'],
  java: ['.java'],
  go: ['.go'],
  rust: ['.rs'],
  ruby: ['.rb'],
  php: ['.php'],
  styles: ['.css', '.scss', '.sass', '.less', '.styl'],
  markup: ['.html', '.htm', '.vue', '.svelte'],
  config: ['.json', '.yaml', '.yml', '.toml', '.xml', '.ini'],
  markdown: ['.md', '.mdx'],
  other: [],
};

function normalizeRelPath(p) {
  return p.split(path.sep).join('/');
}

function parseGitignore(rootPath) {
  const gitignorePath = path.join(rootPath, '.gitignore');
  if (!fs.existsSync(gitignorePath)) return [];

  try {
    const raw = fs.readFileSync(gitignorePath, 'utf8');
    return raw
      .split(/\r?\n/g)
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'))
      .filter(line => !line.startsWith('!'))
      .map(line => (line.startsWith('/') ? line.slice(1) : line));
  } catch {
    return [];
  }
}

function globToRegex(pattern) {
  // Minimal glob: "*" and "?" only. Treat "/" as path separator in normalized paths.
  const escaped = pattern.replace(/[.+^${}()|[\]\\]/g, '\\$&');
  const regex = '^' + escaped.replace(/\*/g, '.*').replace(/\?/g, '.') + '$';
  return new RegExp(regex);
}

function describeTopLevelEntry(name, isDir) {
  if (!isDir) {
    const lower = name.toLowerCase();
    if (lower === 'readme.md') return 'Project overview and getting started';
    if (lower === 'agents.md') return 'Agent working conventions / repo rules';
    if (['changelog.md', 'handoff.md', 'contributing.md', 'license', 'license.md'].includes(lower)) {
      return 'Project process / legal / handoff documentation';
    }
    if (['package.json', 'pnpm-lock.yaml', 'yarn.lock', 'package-lock.json'].includes(lower)) {
      return 'JavaScript/TypeScript dependencies and scripts';
    }
    if (['pyproject.toml', 'requirements.txt', 'poetry.lock', 'pipfile', 'pipfile.lock'].includes(lower)) {
      return 'Python dependencies and tooling';
    }
    if (['.gitignore', '.gitattributes'].includes(lower)) return 'Git configuration';
    return 'Key file (see tree for context)';
  }

  const lower = name.toLowerCase();
  if (lower === 'src') return 'Main application source code';
  if (['app', 'apps'].includes(lower)) return 'Application(s) (often runnable targets)';
  if (['packages', 'pkg'].includes(lower)) return 'Packages (shared modules/libraries)';
  if (['libs', 'lib'].includes(lower)) return 'Shared libraries/utilities';
  if (['services', 'service'].includes(lower)) return 'Backend services / service layer';
  if (['api', 'apis'].includes(lower)) return 'API layer (routes/controllers/handlers)';
  if (['tests', 'test', '__tests__'].includes(lower)) return 'Tests';
  if (['docs', 'documentation'].includes(lower)) return 'Documentation';
  if (['scripts', 'tools'].includes(lower)) return 'Automation scripts / tooling';
  if (['public', 'static', 'assets'].includes(lower)) return 'Static assets';
  if (lower === '.github') return 'GitHub configuration (CI, templates, workflows)';
  if (lower === '.claude') return 'AI tooling / agent workflows (project-local)';
  if (lower === '.codex') return 'Codex CLI skills / configuration (project-local)';
  if (['infra', 'infrastructure', 'deploy', 'ops', 'k8s', 'terraform'].includes(lower)) {
    return 'Infrastructure / deployment';
  }
  return 'Project-specific directory (see tree)';
}

class ProjectScanner {
  constructor(rootPath, maxDepth = 4, respectGitignore = true) {
    this.rootPath = path.resolve(rootPath);
    this.maxDepth = maxDepth;
    this.respectGitignore = respectGitignore;
    this.gitignorePatterns = respectGitignore ? parseGitignore(this.rootPath) : [];

    this.stats = {
      totalFiles: 0,
      totalDirs: 0,
      byCategory: {},
      entryPoints: [],
      configFiles: [],
      keyFiles: [],
    };
  }

  shouldIgnore(name, relativePath) {
    if (BASE_IGNORES.includes(name) || BASE_IGNORES.includes(relativePath)) return true;

    const relNorm = normalizeRelPath(relativePath);
    const parts = relNorm ? relNorm.split('/') : [];
    if (parts.some(p => BASE_IGNORES.includes(p))) return true;

    // Apply gitignore patterns (simplified)
    for (const rawPattern of this.gitignorePatterns) {
      const p = normalizeRelPath(rawPattern);

      if (p.endsWith('/')) {
        const dir = p.slice(0, -1);
        if (relNorm === dir || relNorm.startsWith(dir + '/')) return true;
        continue;
      }

      const re = globToRegex(p);
      if (p.includes('/')) {
        if (re.test(relNorm)) return true;
      } else {
        if (re.test(name)) return true;
      }
    }

    return false;
  }

  categorizeFile(fileName) {
    const ext = path.extname(fileName).toLowerCase();
    for (const [category, exts] of Object.entries(FILE_CATEGORIES)) {
      if (exts.includes(ext)) return category;
    }
    return 'other';
  }

  isEntryPoint(fileName) {
    return [
      /^(main|index|app|server|entry)\.(ts|tsx|js|jsx|py|go|rs)$/i,
      /^(Program|Startup)\.(cs)$/i,
    ].some(p => p.test(fileName));
  }

  isConfigFile(fileName) {
    return [
      /^package\.json$/i,
      /^tsconfig.*\.json$/i,
      /^vite\.config\./i,
      /^next\.config\./i,
      /^webpack\.config\./i,
      /^\.eslintrc/i,
      /^\.prettierrc/i,
      /^tailwind\.config\./i,
      /^docker-compose/i,
      /^Dockerfile$/i,
      /^Makefile$/i,
      /^\.env\.example$/i,
      /^requirements\.txt$/i,
      /^pyproject\.toml$/i,
      /^Cargo\.toml$/i,
      /^go\.mod$/i,
      /^.*\.(csproj|sln)$/i,
    ].some(p => p.test(fileName));
  }

  isKeyFile(fileName) {
    return [
      /^README/i,
      /^CHANGELOG/i,
      /^CONTRIBUTING/i,
      /^LICENSE/i,
      /^AGENTS\.md$/i,
      /^HANDOFF\.md$/i,
    ].some(p => p.test(fileName));
  }

  getTopLevelMap() {
    const items = [];
    let entries = [];
    try {
      entries = fs.readdirSync(this.rootPath, { withFileTypes: true });
    } catch {
      return items;
    }

    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

    for (const entry of entries) {
      const rel = entry.name; // top-level
      if (this.shouldIgnore(entry.name, rel)) continue;
      const isDir = entry.isDirectory();
      items.push({
        path: isDir ? `${entry.name}/` : entry.name,
        type: isDir ? 'dir' : 'file',
        purpose: describeTopLevelEntry(entry.name, isDir),
      });
    }

    return items;
  }

  scanDirectory(dirPath, depth = 0, prefix = '') {
    const lines = [];
    if (depth > this.maxDepth) return lines;

    let entries;
    try {
      entries = fs.readdirSync(dirPath, { withFileTypes: true });
    } catch {
      return lines;
    }

    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

    // Filter ignored entries (check name + relative path)
    const filtered = [];
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const rel = normalizeRelPath(path.relative(this.rootPath, fullPath));
      if (!this.shouldIgnore(entry.name, rel)) filtered.push({ entry, rel, fullPath });
    }

    filtered.forEach(({ entry, rel, fullPath }, index) => {
      const isLast = index === filtered.length - 1;
      const connector = isLast ? '`-- ' : '|-- ';
      const childPrefix = isLast ? '    ' : '|   ';

      if (entry.isDirectory()) {
        this.stats.totalDirs++;
        lines.push(`${prefix}${connector}${entry.name}/`);
        lines.push(...this.scanDirectory(fullPath, depth + 1, prefix + childPrefix));
        return;
      }

      this.stats.totalFiles++;
      const category = this.categorizeFile(entry.name);
      this.stats.byCategory[category] = (this.stats.byCategory[category] || 0) + 1;

      if (this.isEntryPoint(entry.name)) this.stats.entryPoints.push(rel);
      if (this.isConfigFile(entry.name)) this.stats.configFiles.push(rel);
      if (this.isKeyFile(entry.name)) this.stats.keyFiles.push(rel);

      lines.push(`${prefix}${connector}${entry.name}`);
    });

    return lines;
  }

  scan() {
    const rootName = path.basename(this.rootPath);
    const lines = [`${rootName}/`, ...this.scanDirectory(this.rootPath)];
    return { tree: lines.join('\n'), stats: this.stats, topLevelMap: this.getTopLevelMap() };
  }

  getMainLanguage() {
    const codeCategories = ['typescript', 'javascript', 'python', 'csharp', 'java', 'go', 'rust', 'ruby', 'php'];
    let maxCategory = 'unknown';
    let maxCount = 0;
    for (const cat of codeCategories) {
      const count = this.stats.byCategory[cat] || 0;
      if (count > maxCount) {
        maxCount = count;
        maxCategory = cat;
      }
    }
    return maxCategory;
  }

  generateMarkdown() {
    const result = this.scan();
    const mainLang = this.getMainLanguage();
    const now = new Date().toISOString().replace('T', ' ').slice(0, 16);

    const topLevelTable = result.topLevelMap.length
      ? result.topLevelMap.map(i => `| ${i.path} | ${i.type} | ${i.purpose} |`).join('\n')
      : '| (none) | - | - |';

    const dist = Object.entries(result.stats.byCategory)
      .sort((a, b) => b[1] - a[1])
      .map(([cat, count]) => `| ${cat} | ${count} |`)
      .join('\n') || '| (none) | 0 |';

    return `# Project Structure Index
> Auto-generated by project-index. Last updated: ${now}

## Quick Stats
- **Total files**: ${result.stats.totalFiles}
- **Total directories**: ${result.stats.totalDirs}
- **Main language**: ${mainLang}

## Top-Level Map
| Path | Type | Purpose |
|:---|:---:|:---|
${topLevelTable}

## Directory Tree
\`\`\`
${result.tree}
\`\`\`

## Entry Points
${result.stats.entryPoints.map(f => `- ${f}`).join('\n') || '- (none detected)'}

## Config Files
${result.stats.configFiles.map(f => `- ${f}`).join('\n') || '- (none detected)'}

## Key Files
${result.stats.keyFiles.map(f => `- ${f}`).join('\n') || '- (none detected)'}

## File Distribution
| Category | Count |
|:---|---:|
${dist}
`;
  }

  generateJSON() {
    const result = this.scan();
    return JSON.stringify(
      {
        generated: new Date().toISOString(),
        rootPath: this.rootPath,
        maxDepth: this.maxDepth,
        respectGitignore: this.respectGitignore,
        stats: result.stats,
        mainLanguage: this.getMainLanguage(),
        topLevelMap: result.topLevelMap,
        tree: result.tree,
      },
      null,
      2
    );
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const rootPath = args[0] || '.';
  const maxDepth = Number.isFinite(Number(args[1])) ? Number(args[1]) : 4;
  const format = args.find(a => a === 'json') ? 'json' : 'markdown';
  const respectGitignore = !args.includes('--no-gitignore');

  const scanner = new ProjectScanner(rootPath, maxDepth, respectGitignore);
  if (format === 'json') console.log(scanner.generateJSON());
  else console.log(scanner.generateMarkdown());
}

module.exports = { ProjectScanner };
