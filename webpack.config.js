const path = require("path");

module.exports = {
  context: {
    client: path.resolve(__dirname, "./packages/client"),
    server: path.resolve(__dirname, "./packages/server"),
  },  
  resolve: {
    modules: [
      path.resolve(__dirname, "client"),
      "node_modules"
    ],
    fallback: {
      "path": false,
      "crypto": false,
      "util": false,
      "os": false,
      "fs": false,
      "zlib": false,
      "http": false,
      "https": false,
      "buffer": false,
 },
    alias: {
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
      "@client": path.resolve(__dirname, "client"),
      "@server": path.resolve(__dirname, "server"),
      "@markdown": path.resolve(__dirname, "./packages/extratorfile"),
      "@src": path.resolve(__dirname, "./packages/client/src/"),
      "@src": path.resolve(__dirname, "./packages/server/src/"),
      "path": false,
      "path": false,
      "crypto": false,
      "util": false,
      "os": false,
      "fs": false,
      "zlib": false,
      "http": false,
      "https": false,
      "buffer": false,
      "tty":false,
    },
    extensions: [".ts", ".tsx", ".js", ".jsx",".json"]
 }
}