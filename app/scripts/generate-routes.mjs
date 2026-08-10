import { readdirSync, existsSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const appDir   = join(__dirname, "..");
const pagesDir = join(appDir, "src", "pages", "blog");
const distDir  = join(appDir, "dist");

const indexPath = join(distDir, "index.html");
if (!existsSync(indexPath)) {
  console.error("❌ dist/index.html not found — run `npm run build` first.");
  process.exit(1);
}

// Each file in src/pages/blog/*.tsx becomes one route: /blog/<name>
const slugs = existsSync(pagesDir)
  ? readdirSync(pagesDir)
      .filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
      .map((f) => f.replace(/\.(tsx|ts)$/, ""))
      .filter((slug) => slug !== "index") // skip a future listing page
  : [];

if (slugs.length === 0) {
  console.log("ℹ️  No blog pages found — nothing to generate.");
  process.exit(0);
}

let count = 0;
for (const slug of slugs) {
  const outDir = join(distDir, "blog", slug);
  mkdirSync(outDir, { recursive: true });
  copyFileSync(indexPath, join(outDir, "index.html"));
  count++;
  console.log(`✅ dist/blog/${slug}/index.html`);
}

console.log(`\nGenerated ${count} route page(s).`);