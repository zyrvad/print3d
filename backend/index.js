import express from "express";
import cors from "cors";
import "./db.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
