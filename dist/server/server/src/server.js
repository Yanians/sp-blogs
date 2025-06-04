"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config(); // ✅ Correct relative to transpiled location
require("tsconfig-paths/register");
const path_1 = tslib_1.__importDefault(require("path"));
const fs = tslib_1.__importStar(require("fs"));
const node_os_1 = tslib_1.__importDefault(require("node:os"));
// third party
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const http_1 = require("http");
const ws_1 = require("ws");
//4. Local imports (config/db/routes)
const config = tslib_1.__importStar(require("./config"));
const connect_1 = require("./authentication/connect");
require("./authentication/passport-config"); // make sure this file is imported
require("./authentication/passportGoogle");
require("./authentication/passportFacebook");
const apiRoutes_1 = tslib_1.__importDefault(require("./apiRoutes"));
const handleRender_1 = tslib_1.__importDefault(require("./handleRender"));
//  5. Side-effect import: must be after passport and before routes
const app = (0, express_1.default)();
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
app.use((0, compression_1.default)());
app.use(passport_1.default.initialize());
app.use('/api', apiRoutes_1.default);
const staticDirs = [
    "profiles",
    "blogs_images",
    "backgrounds",
    "svg",
];
const rootdir = fs.realpathSync(process.cwd());
// const clientBuildPath = path.resolve(rootdir, '../../build');
//this is link to root build folder that ready for production the issue of < error is from here
// but this is properly link to that folder
// const rootBuildPath = path.resolve(rootdir, '../../../../../build');
const buildDir = path_1.default.resolve(process.cwd(), process.env.BUILD_DIR || 'build');
// console.log(clientBuildPath);
console.log(buildDir);
// app.use(express.static(clientBuildPath));
app.use(express_1.default.static(buildDir));
staticDirs.forEach(dir => {
    console.log(process.env.PUBLIC_URL + dir);
    app.use(express_1.default.static(path_1.default.resolve(process.cwd(), process.env.PUBLIC_URL + dir), { index: false }));
});
app.get("/favicon.ico", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../public/favicon.ico"));
});
// /^(?!\/api).+/
app.get('*', (req, res, next) => {
    const accept = req.headers.accept || '';
    if (accept.includes('text/html')) {
        return (0, handleRender_1.default)(req, res);
    }
    // For non-HTML (e.g., .js, .css), let it 404 or fall back to static
    next();
});
const server = (0, http_1.createServer)(app);
const wss = new ws_1.WebSocketServer({ server });
// ✅ Create WebSocket server
wss.on("connection", (ws) => {
    console.log("Client connected for live reload");
    ws.send("reload"); // Send reload signal
});
const PORT = Number(config.PORT) || 5000;
const HOST = config.HOST || 'localhost';
const startServer = async () => {
    await (0, connect_1.connectDatabase)();
    server.listen(PORT, HOST, () => {
        console.info(`Express server is listening at ${config.SERVER_URL}`, `Free Mem: ${node_os_1.default.freemem() / 4096 / 4096} MB`);
    });
};
startServer();
