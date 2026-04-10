import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { getAllDesignMd } from "../data/design-md";

const outDir = resolve(process.cwd(), "dist", "design-md");
mkdirSync(outDir, { recursive: true });

for (const item of getAllDesignMd()) {
  const file = resolve(outDir, `${item.brand}.md`);
  writeFileSync(file, item.content, "utf8");
}

console.log(`Generated ${getAllDesignMd().length} files to ${outDir}`);
