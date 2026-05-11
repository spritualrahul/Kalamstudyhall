import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input  = path.join(__dirname, '../public/kalam-logo.png');
const output = path.join(__dirname, '../public/kalam-logo.png');

const { data, info } = await sharp(input)
  .ensureAlpha()          // add alpha channel (RGBA)
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = data;
const { width, height, channels } = info; // channels = 4 (RGBA)

// Threshold: pixels "close to white" become transparent
const THRESHOLD = 30; // tweak 0–255; lower = stricter white removal

for (let i = 0; i < width * height; i++) {
  const r = pixels[i * channels + 0];
  const g = pixels[i * channels + 1];
  const b = pixels[i * channels + 2];

  const isNearWhite =
    r > (255 - THRESHOLD) &&
    g > (255 - THRESHOLD) &&
    b > (255 - THRESHOLD);

  if (isNearWhite) {
    pixels[i * channels + 3] = 0; // transparent
  }
}

await sharp(pixels, { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log(`✅ White background removed → ${output}`);
