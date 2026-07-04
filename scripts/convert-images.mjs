/**
 * Convert heavy PNG/JPG images to WebP.
 * Run once: node scripts/convert-images.mjs
 */
import sharp from 'sharp';
import { unlink, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const root = join(__dir, '..');

const MAX_W = 1000;
const QUALITY = 80;

async function convert(inputPath, outputPath) {
  const before = (await stat(inputPath)).size;
  await sharp(inputPath)
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);
  const after = (await stat(outputPath)).size;
  const pct = (100 - (after / before) * 100).toFixed(1);
  console.log(`✓ ${inputPath.split('/').pop()} → ${outputPath.split('/').pop()} (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, -${pct}%)`);
}

// ── src/assets/img/ imports ──────────────────────────────────────────────────
const srcDir = join(root, 'src/assets/img');
const srcConvert = [
  'air.png',
  'forecast.png',
  'university.png',
  'usa.png',
  'country.png',
];
for (const f of srcConvert) {
  const base = f.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  await convert(join(srcDir, f), join(srcDir, base));
}

// ── public/ static files ──────────────────────────────────────────────────
await convert(join(root, 'public/Arman.png'), join(root, 'public/Arman.webp'));

console.log('\nAll conversions done.');
