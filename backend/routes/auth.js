import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/profile", auth, (req, res) => {
  res.json({ userId: req.userId });
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Hash password
  const passwordHash = await bcrypt.hash(password, 10);

  // 2️⃣ Save user
  await User.create({ email, passwordHash });

  res.status(201).json({ message: "User created" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Find user
  const user = await User.findOne({ email });
  if (!user) return res.sendStatus(401);

  // 2️⃣ Compare password
  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) return res.sendStatus(401);

  // 3️⃣ Create JWT
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

export default router;
