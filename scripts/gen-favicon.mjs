import sharp from "sharp";
import path from "node:path";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#111111"/>
  <text x="256" y="300" font-family="Arial, Helvetica, sans-serif" font-size="300" font-weight="800" fill="#28E98C" text-anchor="middle">V</text>
</svg>
`;

const appDir = fileURLToPath(new URL("../src/app/", import.meta.url));

async function main() {
  const base = sharp(Buffer.from(svg));

  await base.clone().resize(32, 32).png().toFile(path.join(appDir, "icon.png"));
  await base
    .clone()
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));

  // Build a real multi-size .ico (16/32/48) for maximum browser/OS compatibility.
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((s) => sharp(Buffer.from(svg)).resize(s, s).png().toBuffer()),
  );
  const ico = pngToIco(pngBuffers, sizes);
  writeFileSync(path.join(appDir, "favicon.ico"), ico);

  console.log("Generated icon.png, apple-icon.png, favicon.ico in", appDir);
}

// Minimal ICO container (no extra deps): pack PNG buffers as ICO entries.
function pngToIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += buf.length;
    dirEntries.push(entry);
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
