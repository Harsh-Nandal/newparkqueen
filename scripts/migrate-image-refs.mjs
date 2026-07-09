// Run with: npm run migrate:cloudinary
// Replaces every local /images/... reference in app/, components/, lib/ with its
// Cloudinary URL from scripts/cloudinary-map.json, then patches any DB documents
// (e.g. homepagecontents) that store image paths directly.
import { readFile, writeFile, readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const MAP_FILE = path.join(__dirname, "cloudinary-map.json");
const SOURCE_DIRS = ["app", "components", "lib"].map((d) => path.join(ROOT, d));

const map = JSON.parse(await readFile(MAP_FILE, "utf-8"));
const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length);

async function walk(dir) {
  const items = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) files.push(...(await walk(full)));
    else if (item.name.endsWith(".js")) files.push(full);
  }
  return files;
}

let filesChanged = 0;
let replacementsTotal = 0;

for (const dir of SOURCE_DIRS) {
  const files = await walk(dir);
  for (const file of files) {
    let content = await readFile(file, "utf-8");
    let fileReplacements = 0;
    for (const [localPath, cloudUrl] of entries) {
      if (content.includes(localPath)) {
        const count = content.split(localPath).length - 1;
        content = content.split(localPath).join(cloudUrl);
        fileReplacements += count;
      }
    }
    if (fileReplacements > 0) {
      await writeFile(file, content);
      filesChanged += 1;
      replacementsTotal += fileReplacements;
      console.log(`✓ ${path.relative(ROOT, file)} (${fileReplacements} replacement${fileReplacements > 1 ? "s" : ""})`);
    }
  }
}

console.log(`\nUpdated ${filesChanged} file(s), ${replacementsTotal} reference(s) replaced.`);

// --- Patch DB documents that store image paths directly ---
const { MONGODB_URI } = process.env;
if (MONGODB_URI) {
  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection.db;

  function remap(value) {
    if (typeof value === "string") return map[value] || value;
    if (Array.isArray(value)) return value.map(remap);
    return value;
  }

  const collections = await db.listCollections().toArray();
  for (const { name } of collections) {
    const docs = await db.collection(name).find().toArray();
    for (const doc of docs) {
      const update = {};
      for (const [key, value] of Object.entries(doc)) {
        if (key === "_id") continue;
        const remapped = remap(value);
        if (JSON.stringify(remapped) !== JSON.stringify(value)) {
          update[key] = remapped;
        }
      }
      if (Object.keys(update).length) {
        await db.collection(name).updateOne({ _id: doc._id }, { $set: update });
        console.log(`✓ DB ${name}/${doc._id}: updated ${Object.keys(update).join(", ")}`);
      }
    }
  }
  await mongoose.disconnect();
} else {
  console.log("MONGODB_URI not set — skipped DB migration.");
}

console.log("\nDone.");
