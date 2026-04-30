import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import contactRoutes from "./routes/contactRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();
const defaultAllowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://manishwashimkar.vercel.app",
];

const configuredAllowedOrigins = (process.env.CLIENT_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);
const allowAnyOrigin = configuredAllowedOrigins.includes("*");

const vercelOrigin = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const allowedOrigins = new Set([
  ...defaultAllowedOrigins,
  ...configuredAllowedOrigins,
  vercelOrigin,
].filter(Boolean));

const isPrivateNetworkDevOrigin = (origin) => {
  if (process.env.NODE_ENV === "production") {
    return false;
  }

  try {
    const { hostname, port } = new URL(origin);
    const isVitePort = port === "5173" || port === "4173";
    const isLocalHostname = hostname === "localhost" || hostname === "127.0.0.1";
    const isPrivateNetworkHostname =
      hostname.startsWith("192.168.") ||
      hostname.startsWith("10.") ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname);

    return isVitePort && (isLocalHostname || isPrivateNetworkHostname);
  } catch {
    return false;
  }
};

app.use(
  cors({
    origin(origin, callback) {
      if (allowAnyOrigin || !origin || allowedOrigins.has(origin) || isPrivateNetworkDevOrigin(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked request from origin: ${origin}`));
    },
  }),
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "Portfolio API is running." });
});

app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
