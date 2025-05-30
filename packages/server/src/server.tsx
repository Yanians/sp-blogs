import 'tsconfig-paths/register';
import path from "path";
import os from "node:os";

// third party
import express, { Request, Response } from "express";
import compression from 'compression';
import passport from 'passport';
import { createServer } from "http";
import { WebSocketServer } from "ws";

import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' }); // 👈 Load `.env.local`
//4. Local imports (config/db/routes)
import * as config from './config';
import { connectDatabase } from './authentication/connect';

import './authentication/passport-config'; // make sure this file is imported
import './authentication/passportGoogle';
import apiRoute from './apiRoutes';
import HandleRender from "./handleRender";

//  5. Side-effect import: must be after passport and before routes



const app = express();

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.use(compression());
app.use(passport.initialize());
app.use('/api',apiRoute);

const staticDirs = [
  "../public/static/images/profiles",
  "../public/static/images/blogs_images",
  "../public/static/images/backgrounds",
  "../public/static/images/svg",
  "../public/static/images",
  "../webpack"
];

staticDirs.forEach(dir => {
  app.use(express.static(path.resolve(__dirname, dir), { index: false }));
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/favicon.ico"));
});

app.get(/^(?!\/api).+/, (req: Request, res: Response,) => {
  HandleRender(req, res);
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