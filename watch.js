const fs = require('fs');
const path = require('path');
const { build } = require('./build');

const slidesDir = path.join(__dirname, 'slides');

const imagesDir = path.join(__dirname, 'images');

console.log('========================================================');
console.log(' [WATCH MODE] 실시간 자동 감시 모드가 시작되었습니다.');
console.log(' - slides/ 폴더 안의 마크다운 파일을 저장(Ctrl+S)하거나');
console.log(' - images/ 폴더에 새 사진(.jpg, .jpeg, .png 등)을 넣으면');
console.log(' 자동으로 감지하여 최신 슬라이드로 즉시 갱신됩니다.');
console.log(' 종료하려면 창을 닫거나 Ctrl + C 를 누르세요.');
console.log('========================================================\n');

// Run initial build
try {
  build();
} catch (e) {}

let debounceTimer = null;
function handleTrigger(folderName, filename) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const timeStr = new Date().toLocaleTimeString();
    console.log(`\n[${timeStr}] [${folderName}] 변경 감지됨: ${filename}`);
    try {
      build();
      console.log(`[${timeStr}] 브라우저에서 F5(새로고침)를 누르시면 최신본이 보입니다.\n`);
    } catch (e) {
      console.error('[ERROR] 빌드 중 오류 발생:', e.message);
    }
  }, 250);
}

fs.watch(slidesDir, { recursive: false }, (eventType, filename) => {
  if (!filename || !filename.endsWith('.md')) return;
  handleTrigger('slides', filename);
});

if (fs.existsSync(imagesDir)) {
  fs.watch(imagesDir, { recursive: false }, (eventType, filename) => {
    if (!filename) return;
    const lower = filename.toLowerCase();
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg') || lower.endsWith('.png') || lower.endsWith('.webp')) {
      handleTrigger('images', filename);
    }
  });
}
