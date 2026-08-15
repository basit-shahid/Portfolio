#!/usr/bin/env node
/**
 * ping-indexnow.mjs
 * ──────────────────────────────────────────────────────────────
 * Run this script after every Vercel deploy to instantly notify
 * Bing, Yandex, Naver, and Seznam about updated pages.
 * Also pings Google's sitemap endpoint.
 *
 * Usage:  node ping-indexnow.mjs
 * ──────────────────────────────────────────────────────────────
 */

const SITE = "https://abdulbasitshahid.vercel.app";
const INDEX_NOW_KEY = "f4a3b2c1d5e6f7890123456789abcdef";

// All pages you want indexed fast
const URLS = [
  `${SITE}/`,
  `${SITE}/about/`,
  `${SITE}/llms.txt`,
  `${SITE}/llms-full.txt`,
  `${SITE}/sitemap-index.xml`,
];

// ── IndexNow Submission (Bing, Yandex, Naver, Seznam) ──────────
const INDEX_NOW_ENGINES = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function pingIndexNow() {
  const payload = JSON.stringify({
    host: "abdulbasitshahid.vercel.app",
    key: INDEX_NOW_KEY,
    keyLocation: `${SITE}/${INDEX_NOW_KEY}.txt`,
    urlList: URLS,
  });

  console.log("\n🚀 IndexNow — Submitting URLs to search engines...\n");

  for (const engine of INDEX_NOW_ENGINES) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: payload,
      });
      const status = res.status;
      const emoji = status === 200 || status === 202 ? "✅" : "⚠️";
      console.log(`  ${emoji}  ${engine}  →  HTTP ${status}`);
    } catch (err) {
      console.log(`  ❌  ${engine}  →  ${err.message}`);
    }
  }
}

// ── Google Sitemap Ping ─────────────────────────────────────────
async function pingGoogle() {
  const sitemapUrl = `${SITE}/sitemap-index.xml`;
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  console.log("\n🔔 Google — Pinging sitemap...\n");

  try {
    const res = await fetch(pingUrl);
    const emoji = res.status === 200 ? "✅" : "⚠️";
    console.log(`  ${emoji}  Google Sitemap Ping  →  HTTP ${res.status}`);
  } catch (err) {
    console.log(`  ❌  Google Sitemap Ping  →  ${err.message}`);
  }
}

// ── Bing Sitemap Ping ───────────────────────────────────────────
async function pingBingSitemap() {
  const sitemapUrl = `${SITE}/sitemap-index.xml`;
  const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  console.log("\n🔔 Bing — Pinging sitemap...\n");

  try {
    const res = await fetch(pingUrl);
    const emoji = res.status === 200 ? "✅" : "⚠️";
    console.log(`  ${emoji}  Bing Sitemap Ping  →  HTTP ${res.status}`);
  } catch (err) {
    console.log(`  ❌  Bing Sitemap Ping  →  ${err.message}`);
  }
}

// ── Run All ─────────────────────────────────────────────────────
async function main() {
  console.log("═══════════════════════════════════════════════════");
  console.log("  Abdul Basit Shahid — Instant Indexing Pinger");
  console.log("═══════════════════════════════════════════════════");
  console.log(`  Site: ${SITE}`);
  console.log(`  URLs: ${URLS.length}`);

  await pingIndexNow();
  await pingGoogle();
  await pingBingSitemap();

  console.log("\n═══════════════════════════════════════════════════");
  console.log("  Done! Your URLs have been submitted.");
  console.log("  Bing: Check indexing in ~10-30 minutes");
  console.log("  Google: Re-crawl expected within hours-1 day");
  console.log("═══════════════════════════════════════════════════\n");
}

main();
