const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = __dirname;
const slidesDir = path.join(rootDir, 'slides');
const presentationPath = path.join(rootDir, 'presentation.md');
const htmlPath = path.join(rootDir, 'index.html');

function build() {
  const startTime = Date.now();
  console.log('[BUILD] Merging slides...');

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
  parts.push(fs.readFileSync(path.join(slidesDir, styleFile), 'utf8').trim());

  slideFiles.forEach(file => {
    parts.push(fs.readFileSync(path.join(slidesDir, file), 'utf8').trim());
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
