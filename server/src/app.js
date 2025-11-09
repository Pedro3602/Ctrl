import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
