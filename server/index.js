require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = Number(process.env.PORT) || 5000;
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";
const mongoUri = process.env.MONGO_URI;

app.use(cors({ origin: clientUrl }));
app.use(express.json());

app.get("/api/health", (_request, response) => {
  const databaseConnected = mongoose.connection.readyState === 1;

  response.status(databaseConnected ? 200 : 503).json({
    status: "ok",
    database: databaseConnected ? "connected" : "disconnected",
  });
});

async function startServer() {
  if (!mongoUri) {
    throw new Error("MONGO_URI is required. Copy .env.example to .env and configure it.");
  }

  await mongoose.connect(mongoUri);
  app.listen(port, () => {
    console.log(`API server listening on http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start API server:", error);
  process.exitCode = 1;
});
