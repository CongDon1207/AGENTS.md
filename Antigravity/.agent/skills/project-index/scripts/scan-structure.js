#!/usr/bin/env node
/**
 * Project Structure Scanner
 * Cross-platform script to generate directory tree for AI context
 * 
 * Usage:
 *   node scan-structure.js [rootPath] [maxDepth]
 *   node scan-structure.js . 4
 *   node scan-structure.js /path/to/project 3
 */

const fs = require('fs');
const path = require('path');

// Default ignore patterns
const DEFAULT_IGNORES = [
  'node_modules',
  '.git',
  '.next',
  '.nuxt',
  '.turbo',
  'dist',
  'build',
  'coverage',
  '__pycache__',
  '.cache',
  '.vscode',
  '.idea',
  '*.log',
  '.DS_Store',
  'Thumbs.db',
  '.env',
  '.env.local',
  '*.pyc',
  '*.pyo',
  '.pytest_cache',
  '.mypy_cache',
  'vendor',
  'target',
  'bin',
  'obj',
];

// File type categories for stats
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

class ProjectScanner {
  constructor(rootPath, maxDepth = 4, ignores = DEFAULT_IGNORES) {
    this.rootPath = path.resolve(rootPath);
    this.maxDepth = maxDepth;
    this.ignores = ignores;
    this.stats = {
      totalFiles: 0,
      totalDirs: 0,
      byCategory: {},
      entryPoints: [],
      configFiles: [],
      keyFiles: [],
    };
  }

  shouldIgnore(name) {
    return this.ignores.some(pattern => {
      if (pattern.includes('*')) {
        const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
        return regex.test(name);
      }
      return name === pattern;
    });
  }

  categorizeFile(fileName) {
    const ext = path.extname(fileName).toLowerCase();
    for (const [category, exts] of Object.entries(FILE_CATEGORIES)) {
      if (exts.includes(ext)) return category;
    }
    return 'other';
  }

  isEntryPoint(fileName) {
    const entryPatterns = [
      /^(main|index|app|server|entry)\.(ts|tsx|js|jsx|py|go|rs)$/i,
      /^(Program|Startup)\.(cs)$/i,
    ];
    return entryPatterns.some(p => p.test(fileName));
  }

  isConfigFile(fileName) {
    const configPatterns = [
      /^package\.json$/,
      /^tsconfig.*\.json$/,
      /^vite\.config\./,
      /^next\.config\./,
      /^webpack\.config\./,
      /^\.eslintrc/,
      /^\.prettierrc/,
      /^tailwind\.config\./,
      /^docker-compose/,
      /^Dockerfile$/,
      /^Makefile$/,
      /^\.env\.example$/,
      /^requirements\.txt$/,
      /^pyproject\.toml$/,
      /^Cargo\.toml$/,
      /^go\.mod$/,
      /^\.csproj$/,
      /^\.sln$/,
    ];
    return configPatterns.some(p => p.test(fileName));
  }

  isKeyFile(fileName) {
    const keyPatterns = [
      /^README/i,
      /^CHANGELOG/i,
      /^CONTRIBUTING/i,
      /^LICENSE/i,
      /^AGENTS\.md$/i,
      /^HANDOFF\.md$/i,
    ];
    return keyPatterns.some(p => p.test(fileName));
  }

  scanDirectory(dirPath, depth = 0, prefix = '') {
    const lines = [];
    
    if (depth > this.maxDepth) return lines;

    let entries;
    try {
      entries = fs.readdirSync(dirPath, { withFileTypes: true });
    } catch (err) {
      return lines;
    }

    // Sort: directories first, then files, alphabetically
    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

    // Filter out ignored entries
    entries = entries.filter(e => !this.shouldIgnore(e.name));

    entries.forEach((entry, index) => {
      const isLast = index === entries.length - 1;
      const connector = isLast ? '└── ' : '├── ';
      const childPrefix = isLast ? '    ' : '│   ';
      const fullPath = path.join(dirPath, entry.name);
      const relativePath = path.relative(this.rootPath, fullPath);

      if (entry.isDirectory()) {
        this.stats.totalDirs++;
        lines.push(`${prefix}${connector}${entry.name}/`);
        
        // Recurse into subdirectory
        const childLines = this.scanDirectory(fullPath, depth + 1, prefix + childPrefix);
        lines.push(...childLines);
      } else {
        this.stats.totalFiles++;
        const category = this.categorizeFile(entry.name);
        this.stats.byCategory[category] = (this.stats.byCategory[category] || 0) + 1;

        // Track special files
        if (this.isEntryPoint(entry.name)) {
          this.stats.entryPoints.push(relativePath);
        }
        if (this.isConfigFile(entry.name)) {
          this.stats.configFiles.push(relativePath);
        }
        if (this.isKeyFile(entry.name)) {
          this.stats.keyFiles.push(relativePath);
        }

        lines.push(`${prefix}${connector}${entry.name}`);
      }
    });

    return lines;
  }

  scan() {
    const rootName = path.basename(this.rootPath);
    const lines = [`${rootName}/`, ...this.scanDirectory(this.rootPath)];
    
    return {
      tree: lines.join('\n'),
      stats: this.stats,
    };
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
    const now = new Date().toISOString().replace('T', ' ').substring(0, 16);

    let md = `# Project Structure Index
> Auto-generated by project-index skill. Last updated: ${now}

## Quick Stats
- **Total files**: ${result.stats.totalFiles}
- **Total directories**: ${result.stats.totalDirs}
- **Main language**: ${mainLang}

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
${Object.entries(result.stats.byCategory)
  .sort((a, b) => b[1] - a[1])
  .map(([cat, count]) => `| ${cat} | ${count} |`)
  .join('\n')}
`;

    return md;
  }

  generateJSON() {
    const result = this.scan();
    return JSON.stringify({
      generated: new Date().toISOString(),
      rootPath: this.rootPath,
      stats: result.stats,
      mainLanguage: this.getMainLanguage(),
      tree: result.tree,
    }, null, 2);
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const rootPath = args[0] || '.';
  const maxDepth = parseInt(args[1]) || 4;
  const format = args[2] || 'markdown'; // 'markdown' or 'json'

  const scanner = new ProjectScanner(rootPath, maxDepth);
  
  if (format === 'json') {
    console.log(scanner.generateJSON());
  } else {
    console.log(scanner.generateMarkdown());
  }
}

module.exports = { ProjectScanner, DEFAULT_IGNORES };
