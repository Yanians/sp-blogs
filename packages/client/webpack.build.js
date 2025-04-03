const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");

module.exports = {
    target:["web","es5"],
    entry: "./src/index.tsx",
    output: {
        filename: '[name].cipher_tres_client.bundle.js',  // Ensure unique filenames for each bundle
        path: path.resolve(__dirname, "../server/dist/webpack"), // Ensures everything is built in the monorepo
        publicPath: "/",
    },
    devtool:"source-map",
    mode:'development',
    externals:{
        express: "commonjs express", // Ensure server dependencies aren't bundled into the client
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
    {
      test: /\.(|tsx|ts)$/,
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
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader','postcss-loader'],
    }
        ],
    },
    
    plugins: [
         new CompressionPlugin({
              algorithm: "gzip",
              test: /\.(js|css|html|svg)$/,
            }),
   ],
     cache: {
          type: "filesystem", // Enables persistent caching
          cacheDirectory: path.resolve(__dirname, "../server/dist",".cipher_cache"),
       },
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