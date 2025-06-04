import dotenv from 'dotenv';
dotenv.config() // ✅ Correct relative to transpiled location

import 'tsconfig-paths/register';
import path from "path";
import * as fs from 'fs';
import os from "node:os";

// third party
import express, { Request, Response } from "express";
import compression from 'compression';
import passport from 'passport';
import { createServer } from "http";
import { WebSocketServer } from "ws";

//4. Local imports (config/db/routes)
import * as config from './config';
import { connectDatabase } from './authentication/connect';

import './authentication/passport-config'; // make sure this file is imported
import './authentication/passportGoogle';
import './authentication/passportFacebook';

import apiRoute from './apiRoutes';
import HandleRender from "./handleRender";

//  5. Side-effect import: must be after passport and before routes

const app = express();

//for debugging
// app.use(express.urlencoded({ extended: true })); // Facebook sends form-urlencoded
// app.use((req, res, next) => {
//   console.log(`[${req.method}] ${req.url}`);
//   next();
// });

app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} -> ${res.getHeader('Content-Type')}`);
  });
  next();
});

app.use(compression());
app.use(passport.initialize());
app.use('/api',apiRoute);

    const staticDirs = [
      "profiles",
      "blogs_images",
      "backgrounds",
      "svg",
    ];

const buildDir = path.resolve(process.cwd(), process.env.BUILD_DIR || 'build');

console.log(buildDir);

// app.use(express.static(clientBuildPath));
app.use(express.static(buildDir));

staticDirs.forEach(dir => {
  console.log(process.env.PUBLIC_URL+dir)
  app.use(express.static(path.resolve(process.cwd(), process.env.PUBLIC_URL+dir), { index: false }));
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/favicon.ico"));
});

// /^(?!\/api).+/
app.get('*', (req: Request, res: Response, next) => {
  const accept = req.headers.accept || '';
   if (accept.includes('text/html')) {
    return HandleRender(req, res);
  }

// For non-HTML (e.g., .js, .css), let it 404 or fall back to static
  next();
});

const server = createServer(app);
const wss = new WebSocketServer({ server });

// ✅ Create WebSocket server
wss.on("connection", (ws) => {
  console.log("Client connected for live reload");
  ws.send("reload"); // Send reload signal
});

const PORT: number = Number(config.PORT) || 5000;
const HOST: string = config.HOST || 'localhost';

const startServer = async () => {
  await connectDatabase();
server.listen(PORT, HOST,() => {
  console.info(`Express server is listening at ${config.SERVER_URL}`,
       `Free Mem: ${os.freemem() / 4096 / 4096} MB`,
  );
});
}

startServer();