import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) {
      c = (c >>> 1) ^ (0xEDB88320 & -(c & 1));
    }
  }
  return ~c >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  const typeAndData = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([lenBuf, typeAndData, crcBuf]);
}

function createPng(width, height, isMaskable = false) {
  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  const rowSize = 1 + width * 4;
  const rawData = Buffer.alloc(rowSize * height);

  const cx = width / 2;
  const cy = height / 2;
  const cornerR = width * 0.22;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;

    const t = y / height;
    const bgR = Math.round(5 * (1 - t) + 4 * t);
    const bgG = Math.round(150 * (1 - t) + 120 * t);
    const bgB = Math.round(105 * (1 - t) + 87 * t);

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      let inside = true;
      if (!isMaskable) {
        let dx = 0;
        let dy = 0;
        if (x < cornerR) dx = cornerR - x;
        else if (x > width - cornerR) dx = x - (width - cornerR);
        if (y < cornerR) dy = cornerR - y;
        else if (y > height - cornerR) dy = y - (height - cornerR);
        if (dx > 0 && dy > 0) {
          inside = Math.sqrt(dx * dx + dy * dy) <= cornerR;
        }
      }

      if (!inside) {
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
        continue;
      }

      const nx = (x - cx) / (width * 0.35);
      const ny = (y - cy) / (height * 0.35);

      let isWhite = false;
      let isGold = false;

      const diamondDist = Math.abs(nx) + Math.abs(ny + 0.2);
      if (diamondDist <= 0.55 && diamondDist >= 0.42 && ny <= 0.2) {
        isWhite = true;
      } else if (diamondDist < 0.42 && diamondDist >= 0.25 && ny <= 0.2) {
        isWhite = true;
      }

      const tasselDist = Math.sqrt((nx - 0.45) * (nx - 0.45) + (ny + 0.1) * (ny + 0.1));
      if (tasselDist < 0.12) {
        isGold = true;
      }

      if (nx >= -0.55 && nx <= -0.05 && ny >= 0.22 && ny <= 0.5) {
        const pageArch = 0.22 + 0.1 * Math.sin((nx + 0.55) * Math.PI / 0.5);
        if (Math.abs(ny - pageArch) < 0.08 || Math.abs(ny - 0.48) < 0.05 || Math.abs(nx - (-0.55)) < 0.05 || Math.abs(nx - (-0.05)) < 0.05) {
          isWhite = true;
        }
      }
      if (nx >= 0.05 && nx <= 0.55 && ny >= 0.22 && ny <= 0.5) {
        const pageArch = 0.22 + 0.1 * Math.sin((0.55 - nx) * Math.PI / 0.5);
        if (Math.abs(ny - pageArch) < 0.08 || Math.abs(ny - 0.48) < 0.05 || Math.abs(nx - 0.55) < 0.05 || Math.abs(nx - 0.05) < 0.05) {
          isWhite = true;
        }
      }

      if (Math.abs(nx) <= 0.2 && ny >= -0.15 && ny <= 0.12) {
        const triY = ny - (-0.15);
        const halfWidthAtY = (triY / 0.27) * 0.16;
        if (Math.abs(Math.abs(nx) - halfWidthAtY) < 0.035 || (Math.abs(ny - 0.12) < 0.035 && Math.abs(nx) <= 0.16)) {
          isGold = true;
        }
      }

      if (isGold) {
        rawData[pxOffset] = 251;
        rawData[pxOffset + 1] = 191;
        rawData[pxOffset + 2] = 36;
        rawData[pxOffset + 3] = 255;
      } else if (isWhite) {
        rawData[pxOffset] = 255;
        rawData[pxOffset + 1] = 255;
        rawData[pxOffset + 2] = 255;
        rawData[pxOffset + 3] = 255;
      } else {
        rawData[pxOffset] = bgR;
        rawData[pxOffset + 1] = bgG;
        rawData[pxOffset + 2] = bgB;
        rawData[pxOffset + 3] = 255;
      }
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.resolve('public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'pwa-192x192.png'), createPng(192, 192, false));
fs.writeFileSync(path.join(outDir, 'pwa-512x512.png'), createPng(512, 512, false));
fs.writeFileSync(path.join(outDir, 'maskable-icon-512x512.png'), createPng(512, 512, true));
fs.writeFileSync(path.join(outDir, 'apple-touch-icon.png'), createPng(180, 180, false));

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.25" />
    </filter>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />
  <g filter="url(#shadow)">
    <polygon points="256,90 410,170 256,245 102,170" fill="#ffffff" />
    <path d="M 150,200 L 150,270 C 150,330 362,330 362,270 L 362,200" fill="none" stroke="#ffffff" stroke-width="20" stroke-linecap="round" />
    <circle cx="410" cy="170" r="14" fill="#fbbf24" />
    <path d="M 410,170 Q 425,230 405,270" fill="none" stroke="#fbbf24" stroke-width="12" stroke-linecap="round" />
    <polygon points="256,128 296,202 216,202" fill="none" stroke="#059669" stroke-width="14" stroke-linejoin="round" />
    <path d="M 130,370 C 180,340 240,345 256,365 C 272,345 332,340 382,370 L 382,410 C 332,380 272,385 256,405 C 240,385 180,380 130,410 Z" fill="#ffffff" />
  </g>
</svg>`;
fs.writeFileSync(path.join(outDir, 'pwa-icon.svg'), svgContent);

console.log('Successfully generated all PWA icons in public/');
