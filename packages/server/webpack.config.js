const nodeExternals = require("webpack-node-externals");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
     context: path.resolve(__dirname, "../.."), // Set the monorepo root as base
    //  target: "node", // use require() & use NodeJs CommonJS style
        target:"web", //Ensure it's targeting the browser
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    externalsPresets: {
        node: true // in order to ignore built-in modules like path, fs, etc. 
    },
      entry: path.resolve(__dirname,"./src/server.tsx"),
    output: {
         filename: "[name].server.bundle.js",  // Ensure unique filenames for each bundle
    chunkFilename: '[name].server_chunk.js',  // Avoid vendor conflicts
    path: path.resolve(__dirname, "./dist/server/webpack"), // Ensures everything is built in the monorepo
    // libraryTarget: "commonjs2", // Ensures proper exports for Node.js
    // libraryTarget: "umd",  // ✅ Change from 'commonjs2' to 'umd'
    globalObject: "this",  // ✅ Prevents `window is not defined` issues
       publicPath: '/',
    },
     resolve: {
         modules: [
      path.resolve(__dirname, "../../", "node_modules"), // Root monorepo node_modules
      path.resolve(__dirname, "../../", "mui_lib"), // Root mui_lib  node_modules
      path.resolve(__dirname, "../client/src/redux/reducers"),
      'node_modules', // Default node_modules lookup
    ],
        fallback: {
            // "fs": false, // Avoid bundling Node.js modules
            // "path": require.resolve("path-browserify"),
    },
        extensions: [".tsx", ".ts", ".js",".mjs"],
        alias: {
          "@client": path.resolve(__dirname, "../client/src"),
          "@server": path.resolve(__dirname, "../server/src"),
          "@reduxsrc": path.resolve(__dirname, "../client/src/redux/reducers"),
          "@treasury": path.resolve(__dirname, "../../src/mui-treasury/layout-core-v5"),
          "@treasury-center": path.resolve(__dirname, "../../src/mui-treasury"),
          "@lib": path.resolve(__dirname, "../client/src/components/lib"),
          "@routes": path.resolve(__dirname, "../client/src/routes"),
        },
    },
    mode:'production',
    devtool:'source-map',// Useful for debugging in dev mode
    module: {
        rules: [
          {
            test: /\.md$/,
            exclude: /node_modules/,
            oneOf: [
              {
                resourceQuery: /@marking/,
                use: [
                  {
                    loader:require.resolve("../extractorfile/loader.mjs"),
                    options: {
                      pedantic: false, // Loosen markdown parsing rules
                      gfm: true, // GitHub Flavored Markdown
                      breaks: true, // Convert line breaks into <br>
                      smartLists: true, // Better list handling
                      smartypants: true, // Convert smart quotes
                      highlight: function (code, lang) {
                        const hljs = require('highlight.js');
                        return hljs.highlightAuto(code, [lang]).value;
                      },
                    },  
                  },
                ],
              },
              {
                // Used in some /getting-started/templates
                type: "asset/source",
              },
            ]
          },   
          {
            test: /\.(js|tsx|ts|mjs)$/,
            exclude: /node_modules/,
              use:{
                  loader:"babel-loader",
                  options:{
                    presets:[
                      "@babel/preset-env",
                      "@babel/preset-react",
                      "@babel/preset-typescript"
                      ]
                  }
              }
            },
        ]
    },
     cache: {
       type: "filesystem", // Enables persistent caching
       cacheDirectory: path.resolve(__dirname, ".cipher_cache"),
    },
     plugins: [
    // new BundleAnalyzerPlugin(),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
  }),
     ],
     optimization: {
      minimize: true, // minify everything
      minimizer: [new TerserPlugin()],
      usedExports: true, // Enables tree shaking
      splitChunks: {
        chunks: 'all',
        minSize: 20000, // Minimum size for a chunk
        maxSize: 500000, // Try to keep chunks below 500KB
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            enforce: true,
            reuseExistingChunk: true,
          },
        },
      }
    }   
};
