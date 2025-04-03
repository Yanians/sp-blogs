import path from "path";
import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import compression from 'compression';
import HandleRender from "./handleRender";

const app = express();


app.use(compression());
app.use(express.static(path.resolve(__dirname, "../dist/webpack")));

// ✅ Create WebSocket server
const server = createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected for live reload");
  ws.send("reload"); // Send reload signal
});


// ✅ Serve Favicon
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/favicon.ico"));
});


// ✅ Handle all routes except `/api`
app.get(/^(?!\/api).+/, (req: Request, res: Response) => {
  HandleRender(req, res);
});



app.use(HandleRender);
// ✅ Start the server
server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
