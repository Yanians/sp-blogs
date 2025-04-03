const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    target:["web","es202"],
    mode:'development',
    entry: "./src/index.tsx",
    output: {
        filename: '[name].cipher_tres_client.bundle.js',  // Ensure unique filenames for each bundle
        path: path.resolve(__dirname, "../server/dist/webpack"), // Ensures everything is built in the monorepo
        publicPath: "/",
    },
    resolve: {
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
          "tty":false
        },
        extensions: [".tsx", ".ts", ".js",".md"],
        alias:{
          '@treasury': path.resolve(__dirname,'../../src/mui-treasury'),
               '@lib': path.resolve(__dirname,'src/components/lib'),
            '@routes': path.resolve(__dirname,'src/routes'),
          '@markdown': path.resolve(__dirname,'../extractorfile/loader'),
            '@client': path.resolve(__dirname,'src/components/layout')
        }
    },

    module: {
        rules: [
          {
            test: /\.md$/,
            exclude: /node_modules/,
            oneOf: [
              {
                resourceQuery: /@markdown/,
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
                exclude: [/node_modules/, /\.md$/],  // <-- Exclude Markdown files from Babel],
                use:{
                    loader:"babel-loader",
                    options:{
                      presets:[
                        "@babel/preset-env",
                        "@babel/preset-react",
                        "@babel/preset-typescript"
                        ]
                    },
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader','postcss-loader'],
            }
        ],
    },

    devServer: {
         static: {
          directory: path.join(__dirname, "./dist/webpack"),
         },
        historyApiFallback: true,
        hot: true,
        open:true,
        liveReload:true,
        port: 9000,
    },
    plugins: [
    new HtmlWebpackPlugin({
      title:'CSR Manual Setup',
      template: "./public/index.html", // Webpack will use this HTML file
      filename: "index.html",
    //   inject:'body'
    }),
  ],
};