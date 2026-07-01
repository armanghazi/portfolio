/**
 * Generates public/img/og-cover.png (1200×630) using sharp + inline SVG.
 * Run once: node scripts/gen-og.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'public', 'img', 'og-cover.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a2a3a"/>
      <stop offset="100%" stop-color="#2c3e50"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Accent bar -->
  <rect x="80" y="340" width="120" height="6" rx="3" fill="#3498db"/>

  <!-- Grid dots (decorative) -->
  <g fill="#3498db" opacity="0.12">
    ${Array.from({ length: 8 }, (_, r) =>
      Array.from({ length: 16 }, (_, c) =>
        `<circle cx="${700 + c * 32}" cy="${80 + r * 60}" r="2"/>`
      ).join('')
    ).join('')}
  </g>

  <!-- Name -->
  <text
    x="80" y="260"
    font-family="'Segoe UI', Arial, sans-serif"
    font-size="64"
    font-weight="700"
    fill="#ffffff"
    letter-spacing="-1"
  >Arman Ghaziaskari Naeini</text>

  <!-- Subtitle -->
  <text
    x="80" y="310"
    font-family="'Segoe UI', Arial, sans-serif"
    font-size="30"
    font-weight="400"
    fill="#a8c8e8"
  >GIS &amp; Spatial Data Science · Machine Learning</text>

  <!-- Bottom label -->
  <text
    x="80" y="520"
    font-family="'Segoe UI', Arial, sans-serif"
    font-size="22"
    fill="#3498db"
    opacity="0.9"
  >armanghazi.github.io/portfolio</text>

  <!-- Right accent shape -->
  <circle cx="1100" cy="315" r="180" fill="#3498db" opacity="0.06"/>
  <circle cx="1100" cy="315" r="120" fill="#3498db" opacity="0.06"/>
  <circle cx="1100" cy="315" r="60"  fill="#3498db" opacity="0.08"/>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log('OG cover written to', outPath);
