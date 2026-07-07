import mongoose from "mongoose";

const cached = global._mongoose ?? (global._mongoose = { conn: null, promise: null });

export async function connectDB() {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set — add it to .env");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { bufferCommands: false }).then((m) => m);
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    // Don't let a transient failure poison every future call — let the next
    // request try a fresh connection instead of re-throwing this forever.
    cached.promise = null;
    throw err;
  }

  return cached.conn;
}
