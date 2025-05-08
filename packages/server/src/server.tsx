import 'tsconfig-paths/register';
import path from "path";
import express, { Request, Response } from "express";
import * as config from './config';
import apiRoute from './apiRoutes';
import os from "node:os";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import compression from 'compression';
import HandleRender from "./handleRender";

const app = express();
app.use(compression());
app.use(express.static(path.resolve(__dirname, "../../client/public/images/profiles"),{index:false}));
app.use(express.static(path.resolve(__dirname, "../../client/public/images/blogs_images"),{index:false}));
app.use(express.static(path.resolve(__dirname, "../../client/public/images/backgrounds"),{index:false}));
app.use(express.static(path.resolve(__dirname, "../../client/public/images/svg"),{index:false}));
app.use(express.static(path.resolve(__dirname, "../../client/public"),{index:false}));
app.use(express.static(path.resolve(__dirname, "../webpack"),{index:false}));
app.use('/api',apiRoute);

// ✅ Create WebSocket server
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected for live reload");
  ws.send("reload"); // Send reload signal
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/favicon.ico"));
});

app.get('/', (req: Request, res: Response,) => {
  HandleRender(req, res);
});

app.get(/^(?!\/api).+/, (req: Request, res: Response,) => {
  HandleRender(req, res);
});

const PORT: number = Number(config.PORT) || 5000;
const HOST: string = 'localhost';

server.listen(PORT, HOST,() => {
  console.info(`Express server is listening at ${config.SERVER_URL}`,
       `Free Mem: ${os.freemem() / 4096 / 4096}`,
  );
});

