/**
 * Regenerates the web logo assets from the supplied brand JPEG.
 * Run with: node crop-logo.mjs
 */
import sharp from 'sharp';

const SRC = 'brand/logo-source.jpeg';

const trimmed = await sharp(SRC)
  .trim({ background: '#ffffff', threshold: 12 })
  .toBuffer({ resolveWithObject: true });
console.log('trimmed to', trimmed.info.width + 'x' + trimmed.info.height);

// Header mark — trimmed tight, 2x for retina.
await sharp(trimmed.data)
  .resize({ height: 128, fit: 'contain', background: '#ffffff' })
  .png({ compressionLevel: 9 })
  .toFile('public/monoedge-mark.png');

// Favicon — square, with padding so it reads at 16px.
await sharp(trimmed.data)
  .resize({ width: 148, height: 148, fit: 'contain', background: '#ffffff' })
  .extend({ top: 14, bottom: 14, left: 14, right: 14, background: '#ffffff' })
  .png({ compressionLevel: 9 })
  .toFile('public/favicon.png');

console.log('wrote public/monoedge-mark.png and public/favicon.png');
