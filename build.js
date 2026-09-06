const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const slidesDir = path.join(rootDir, 'slides');
const imagesDir = path.join(rootDir, 'images');
const presentationPath = path.join(rootDir, 'presentation.md');
const htmlPath = path.join(rootDir, 'index.html');

// Image aliases map: e.g. '교안_1' can match 'textbook_1'
const ALIAS_MAP = {
  'textbook_1': ['textbook_1', '교안_1', '교안1', 'textbook1'],
  'textbook_2': ['textbook_2', '교안_2', '교안2', 'textbook2'],
  'textbook_3': ['textbook_3', '교안_3', '교안3', 'textbook3'],
  'textbook_4': ['textbook_4', '교안_4', '교안4', 'textbook4'],
  'textbook_5': ['textbook_5', '교안_5', '교안5', 'textbook5'],
  'culture_1': ['culture_1', '문화_1', '문화1', 'culture1'],
  'culture_2': ['culture_2', '문화_2', '문화2', 'culture2'],
  'culture_3': ['culture_3', '문화_3', '문화3', 'culture3'],
  'culture_4': ['culture_4', '문화_4', '문화4', 'culture4'],
  'team_photo': ['team_photo', '팀사진', '단체사진'],
  'class_photo': ['class_photo', '수업사진', '실습사진']
};

// Smart Image Auto-Resolver:
// Automatically detects user-placed photos (.jpg, .jpeg, .png, .webp) in images/
// supports Korean/English aliases and falls back to placeholders.
function autoResolveImages(markdownContent) {
  if (!fs.existsSync(imagesDir)) return markdownContent;
  const imageFiles = fs.readdirSync(imagesDir);

  return markdownContent.replace(/images\/([^\s"'()]+?\.(?:svg|png|jpg|jpeg|webp))/gi, (fullMatch, filename) => {
    const lastDot = filename.lastIndexOf('.');
    const baseName = filename.slice(0, lastDot);

    // Check aliases
    const candidateBases = [baseName.toLowerCase()];
    for (const [key, aliases] of Object.entries(ALIAS_MAP)) {
      if (key.toLowerCase() === baseName.toLowerCase() || aliases.some(a => a.toLowerCase() === baseName.toLowerCase())) {
        candidateBases.push(key.toLowerCase());
        aliases.forEach(a => candidateBases.push(a.toLowerCase()));
        break;
      }
    }
    const uniqueCandidates = [...new Set(candidateBases)];

    // 1. Search for real user-added files (excluding placeholders, backups, slides)
    const validExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg'];
    for (const candidate of uniqueCandidates) {
      for (const ext of validExtensions) {
        const match = imageFiles.find(file => {
          const parts = file.split('.');
          if (parts.length < 2) return false;
          const fBase = parts.slice(0, -1).join('.').toLowerCase();
          const fExt = parts[parts.length - 1].toLowerCase();
          if (fBase.includes('_placeholder') || fBase.includes('_orig') || fBase.startsWith('slide.')) return false;
          return fBase === candidate && fExt === ext;
        });

        if (match) {
          if (match !== filename) {
            console.log(`[AUTO-IMAGE] Auto-mapped: images/${filename} ➔ images/${match}`);
          }
          return `images/${match}`;
        }
      }
    }

    // 2. If no user file found, fallback to placeholder if available (e.g. textbook_placeholder_1.png)
    for (const candidate of uniqueCandidates) {
      const placeholderMatch = imageFiles.find(file => {
        const lower = file.toLowerCase();
        return (lower === `${candidate}_placeholder.png` || lower === `${candidate}_placeholder.jpg` || lower === `${candidate}_placeholder.svg`);
      });
      if (placeholderMatch) {
        console.log(`[AUTO-IMAGE] Using placeholder: images/${filename} ➔ images/${placeholderMatch}`);
        return `images/${placeholderMatch}`;
      }
    }

    return fullMatch;
  });
}

// Defensive style sanitizer:
// Automatically detects and fixes editor auto-formatting corruptions
// (e.g., Prettier/VS Code stripping 2-space YAML block scalar indentation or converting /* */ to /_ _/)
function sanitizeStyleContent(content) {
  let text = content.replace(/\/_/g, '/*').replace(/_\//g, '*/');
  const lines = text.split(/\r?\n/);
  const styleIdx = lines.findIndex(l => l.trim().startsWith('style:'));
  if (styleIdx !== -1) {
    for (let i = styleIdx + 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') break;
      if (lines[i].trim().length > 0 && !lines[i].startsWith('  ')) {
        lines[i] = '  ' + lines[i];
      }
    }
    text = lines.join('\n');
  }
  return text;
}

function build() {
  const startTime = Date.now();
  console.log('[BUILD] Merging slides & resolving images...');

  if (!fs.existsSync(slidesDir)) {
    console.error('[ERROR] slides/ directory does not exist!');
    process.exit(1);
  }

  const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.md'));
  
  // _style.md must be first
  const styleFile = files.find(f => f === '_style.md');
  const slideFiles = files.filter(f => f !== '_style.md').sort();

  if (!styleFile) {
    console.error('[ERROR] slides/_style.md not found!');
    process.exit(1);
  }

  const parts = [];
  let rawStyle = fs.readFileSync(path.join(slidesDir, styleFile), 'utf8').trim();
  const sanitizedStyle = sanitizeStyleContent(rawStyle);
  if (sanitizedStyle !== rawStyle) {
    console.log('[AUTO-FIX] slides/_style.md formatting was corrected automatically!');
    try {
      fs.writeFileSync(path.join(slidesDir, styleFile), sanitizedStyle + '\n', 'utf8');
    } catch (e) {}
  }
  parts.push(sanitizedStyle);

  slideFiles.forEach(file => {
    let raw = fs.readFileSync(path.join(slidesDir, file), 'utf8').trim();
    raw = autoResolveImages(raw);
    parts.push(raw);
  });

  const merged = parts.join('\n\n---\n\n') + '\n';
  fs.writeFileSync(presentationPath, merged, 'utf8');
  console.log(`[BUILD] ${slideFiles.length} slides merged into presentation.md`);

  console.log('[BUILD] Compiling with Marp CLI...');
  try {
    execSync('npx.cmd @marp-team/marp-cli presentation.md -o index.html --html --allow-local-files --no-stdin', {
      cwd: rootDir,
      stdio: 'inherit'
    });
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`[SUCCESS] index.html generated in ${duration}s!`);
  } catch (err) {
    console.error('[ERROR] Marp compilation failed:', err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  build();
}

module.exports = { build };
