import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Load .env before using process.env
dotenv.config({ path: path.resolve("./.env") });

console.log("MONGO_URI =", process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.log("MONGO_URI is not defined. Check your .env file and dotenv import.");
}

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));
