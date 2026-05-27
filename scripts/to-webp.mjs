#!/usr/bin/env node
/**
 * Batch PNG/JPG → WebP converter (uses sharp, already a Next.js dependency).
 *
 * Mirrors the Squoosh workflow: lossy WebP at quality ~90, which typically
 * lands UI screenshots in the 200–300 KB range without visible loss.
 *
 * Usage:
 *   node scripts/to-webp.mjs <srcDir> [options]
 *
 * Options:
 *   --out <dir>       Output dir (default: same folder as each source file)
 *   --quality <n>     WebP quality 0–100 (default: 90)
 *   --max-width <px>  Downscale if wider than this (default: off — keep size)
 *   --max-kb <n>      Size budget: if a file exceeds it, step quality down by 5
 *                     (floor q50) until it fits (default: off)
 *   --recursive       Recurse into subfolders
 *
 * Examples:
 *   node scripts/to-webp.mjs ~/Desktop/screens --out public/images
 *   node scripts/to-webp.mjs ./raw --out public/images --max-kb 300 --max-width 2000
 */

import sharp from "sharp";
import { readdir, stat, mkdir, writeFile } from "node:fs/promises";
import { join, extname, basename, resolve, dirname } from "node:path";

const args = process.argv.slice(2);
const opts = { quality: 90, out: null, maxWidth: null, maxKb: null, recursive: false };
let srcDir = null;

for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--out") opts.out = args[++i];
  else if (a === "--quality") opts.quality = Number(args[++i]);
  else if (a === "--max-width") opts.maxWidth = Number(args[++i]);
  else if (a === "--max-kb") opts.maxKb = Number(args[++i]);
  else if (a === "--recursive") opts.recursive = true;
  else if (!a.startsWith("--")) srcDir = a;
}

if (!srcDir) {
  console.error("✗ Вкажи теку з вихідними зображеннями.\n  node scripts/to-webp.mjs <srcDir> [--out dir] [--quality 90] [--max-width 2000] [--max-kb 300]");
  process.exit(1);
}
srcDir = resolve(srcDir);

const IN_EXT = new Set([".png", ".jpg", ".jpeg"]);
const kb = (bytes) => (bytes / 1024).toFixed(0);

async function collect(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    const s = await stat(p);
    if (s.isDirectory()) {
      if (opts.recursive) out.push(...(await collect(p)));
    } else if (IN_EXT.has(extname(name).toLowerCase())) {
      out.push(p);
    }
  }
  return out;
}

/** Encode one file to WebP, honouring the optional size budget. */
async function encode(srcPath) {
  const outDir = opts.out ? resolve(opts.out) : dirname(srcPath);
  await mkdir(outDir, { recursive: true });
  const outPath = join(outDir, basename(srcPath, extname(srcPath)) + ".webp");

  const srcBytes = (await stat(srcPath)).size;
  let q = opts.quality;
  let buf;

  // Try once at target quality, then step down only if over budget.
  while (true) {
    let pipe = sharp(srcPath);
    if (opts.maxWidth) {
      pipe = pipe.resize({ width: opts.maxWidth, withoutEnlargement: true });
    }
    buf = await pipe.webp({ quality: q }).toBuffer();
    if (!opts.maxKb || buf.length / 1024 <= opts.maxKb || q <= 50) break;
    q -= 5;
  }

  await writeFile(outPath, buf); // write the encoded buffer directly — no re-encode
  const saved = (100 * (1 - buf.length / srcBytes)).toFixed(0);
  const flag = buf.length / 1024 > 400 ? "  ⚠️ >400KB" : "";
  console.log(
    `${basename(srcPath).padEnd(34)} ${kb(srcBytes).padStart(6)}KB → ${kb(buf.length).padStart(5)}KB  (-${saved}%, q${q})${flag}`
  );
  return { srcBytes, outBytes: buf.length };
}

const files = await collect(srcDir);
if (!files.length) {
  console.error(`✗ У ${srcDir} немає .png/.jpg.`);
  process.exit(1);
}

console.log(`\n${files.length} файл(ів) · q${opts.quality}${opts.maxWidth ? ` · max ${opts.maxWidth}px` : ""}${opts.maxKb ? ` · бюджет ${opts.maxKb}KB` : ""}\n`);

let totIn = 0, totOut = 0;
for (const f of files) {
  const r = await encode(f);
  totIn += r.srcBytes;
  totOut += r.outBytes;
}

console.log(
  `\nРазом: ${kb(totIn)}KB → ${kb(totOut)}KB  (-${(100 * (1 - totOut / totIn)).toFixed(0)}%)`
);
console.log(`Вивід: ${opts.out ? resolve(opts.out) : "поруч із джерелом"}\n`);
