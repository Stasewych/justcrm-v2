#!/usr/bin/env node
/**
 * IndexNow submitter — повідомляє пошуковики (Bing, Seznam, Naver — спільний
 * протокол IndexNow), що сторінки змінились, щоб вони переіндексувались за
 * години замість тижнів. Bing-індекс живить ChatGPT Search і Copilot, тож це
 * напряму допомагає GEO-видимості.
 *
 * Yandex свідомо не використовуємо (рф). IndexNow б'є по спільному endpoint —
 * api.indexnow.org роздає сабміт усім партнерам, окремих yandex-звернень нема.
 *
 * Джерело URL — згенерований `out/sitemap.xml` (єдине джерело правди), тож
 * запускати ПІСЛЯ `next build` (який пише `out/`).
 *
 * Usage:
 *   npm run build && npm run indexnow        # засабмітити всі URL із sitemap
 *   node scripts/indexnow.mjs --dry-run      # показати, що відправили б, без запиту
 *   node scripts/indexnow.mjs https://justsolution.org/why https://...  # лише ці URL
 */

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const KEY = "6f9598118335d2c728db97bf7dd69232";
const HOST = "justsolution.org";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAP = resolve("out/sitemap.xml");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const explicitUrls = args.filter((a) => a.startsWith("http"));

/** Витягнути <loc> із згенерованого sitemap.xml. */
async function urlsFromSitemap() {
  let xml;
  try {
    xml = await readFile(SITEMAP, "utf8");
  } catch {
    console.error(`✗ Не знайдено ${SITEMAP}. Спершу збери сайт: npm run build`);
    process.exit(1);
  }
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!locs.length) {
    console.error("✗ У sitemap.xml немає <loc>. Перевір app/sitemap.ts.");
    process.exit(1);
  }
  return locs;
}

const urlList = explicitUrls.length ? explicitUrls : await urlsFromSitemap();

console.log(`\nIndexNow → ${HOST}`);
console.log(`Ключ: ${KEY_LOCATION}`);
console.log(`URL до сабміту: ${urlList.length}${explicitUrls.length ? " (вказані вручну)" : " (із sitemap)"}\n`);
urlList.forEach((u) => console.log(`  ${u}`));

if (dryRun) {
  console.log("\n--dry-run: запит не надсилав.\n");
  process.exit(0);
}

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

// IndexNow: 200 = прийнято, 202 = прийнято (ключ ще валідується).
if (res.ok) {
  console.log(`\n✓ Прийнято (HTTP ${res.status}). ${urlList.length} URL у черзі на переіндексацію.\n`);
} else {
  const text = await res.text().catch(() => "");
  console.error(`\n✗ Відмова: HTTP ${res.status}. ${text}`);
  console.error("  403 → ключ-файл недоступний на проді (перевір, що задеплоєно public/" + KEY + ".txt).");
  console.error("  422 → URL не з того хоста або ключ не збігається.\n");
  process.exit(1);
}
