// Run with: npm run seed:admin
// Reads ADMIN_EMAIL / ADMIN_PASSWORD / ADMIN_NAME from .env and upserts the first admin account.
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { MONGODB_URI, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env;

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set in .env");
  process.exit(1);
}
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env before seeding.");
  process.exit(1);
}

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);
const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

await mongoose.connect(MONGODB_URI);

const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
const email = ADMIN_EMAIL.toLowerCase().trim();

const admin = await Admin.findOneAndUpdate(
  { email },
  { email, passwordHash, name: ADMIN_NAME || "Admin" },
  { upsert: true, returnDocument: "after", setDefaultsOnInsert: true }
);

console.log(`Admin account ready: ${admin.email}`);
await mongoose.disconnect();
process.exit(0);
