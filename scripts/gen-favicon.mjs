import sharp from "sharp";
import path from "node:path";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0b1116"/>
  <path d="M32 7 L34.6 15.4 L43 18 L34.6 20.6 L32 29 L29.4 20.6 L21 18 L29.4 15.4 Z" fill="#2EE6C5"/>
  <path d="M10 47 L25 30 L32 38 L39 30 L54 47" fill="none" stroke="#ECF2F5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13 55 Q19.5 51 26 55 T39 55 T52 55" fill="none" stroke="#2EE6C5" stroke-width="4" stroke-linecap="round"/>
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
