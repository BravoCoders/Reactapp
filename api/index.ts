// api/index.ts
import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "../routes";
import { serveStatic, log } from "../vite";
import { createServer } from "http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      log(logLine);
    }
  });

  next();
});

let serverInitialized = false;

async function ensureServerInitialized() {
  if (!serverInitialized) {
    await registerRoutes(app);
    serveStatic(app); // remove if not needed
    serverInitialized = true;
  }
}

export default async function handler(req: Request, res: Response, next: NextFunction) {
  await ensureServerInitialized();

  const server = createServer(app);
  server.emit("request", req, res);
}