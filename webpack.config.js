/**
 * DO NOT MODIFY THIS IS FIRMED (I ONLY USED THIS FOR REGRESSION)
 */
const path = require("path");

module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias:{
      '@client': path.resolve(__dirname, "./packages/client/src"),
      '@server': path.resolve(__dirname, "./packages/server/src"),
          react: path.resolve(__dirname, 'node_modules/react'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx",".json",".mjs",".md",".cjs"]
 }
}