// Run with: npm run upload:cloudinary
// Uploads every file under public/images to Cloudinary (using CLOUDINARY_* vars from .env)
// and writes a local-path -> secure_url mapping to scripts/cloudinary-map.json.
import { v2 as cloudinary } from "cloudinary";
import { readdir, stat, mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");
const MAP_FILE = path.join(__dirname, "cloudinary-map.json");
const CLOUDINARY_FOLDER = "parkqueen";
const CONCURRENCY = 6;

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET must be set in .env");
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

function toPublicId(relativePath) {
  const parsed = path.parse(relativePath);
  const sanitizedDir = parsed.dir.split(path.sep).map(sanitize).join("/");
  const sanitizedName = sanitize(parsed.name);
  return [CLOUDINARY_FOLDER, sanitizedDir, sanitizedName].filter(Boolean).join("/");
}

function sanitize(segment) {
  return segment
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function uploadOne(absPath, relPath) {
  const publicId = toPublicId(relPath);
  const localUrl = `/images/${relPath.split(path.sep).join("/")}`;
  try {
    const result = await cloudinary.uploader.upload(absPath, {
      public_id: publicId,
      overwrite: true,
      unique_filename: false,
      resource_type: "image",
    });
    console.log(`✓ ${localUrl} -> ${result.secure_url}`);
    return [localUrl, result.secure_url];
  } catch (err) {
    console.error(`✗ ${localUrl}: ${err.message}`);
    return [localUrl, null];
  }
}

async function runPool(items, worker, concurrency) {
  const results = [];
  let index = 0;
  async function next() {
    while (index < items.length) {
      const i = index++;
      results[i] = await worker(items[i]);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, next));
  return results;
}

const files = await walk(IMAGES_DIR);
console.log(`Found ${files.length} images under public/images. Uploading to Cloudinary folder "${CLOUDINARY_FOLDER}"...`);

const entries = await runPool(
  files,
  (absPath) => uploadOne(absPath, path.relative(IMAGES_DIR, absPath)),
  CONCURRENCY
);

const map = Object.fromEntries(entries.filter(([, url]) => url));
const failed = entries.filter(([, url]) => !url).map(([localUrl]) => localUrl);

await mkdir(path.dirname(MAP_FILE), { recursive: true });
await writeFile(MAP_FILE, JSON.stringify(map, null, 2));

console.log(`\nUploaded ${Object.keys(map).length}/${files.length} images.`);
if (failed.length) {
  console.log(`Failed (${failed.length}):`);
  failed.forEach((f) => console.log(`  - ${f}`));
}
console.log(`Mapping written to ${path.relative(ROOT, MAP_FILE)}`);
