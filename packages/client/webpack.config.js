const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    target:"web", 
    mode:'development',
    entry: "./src/index.tsx",
    output: {
        filename: '[name].cipher_tres_client.bundle.js',  // Ensure unique filenames for each bundle
        path: path.resolve(__dirname, "../server/webpack"), // Ensures everything is built in the monorepo
        publicPath: "/",
    },
    resolve: {
         fallback: {
             "path": false,
              "cwd": false,
          "process": false,
              "url": false,
               "fs": false,
    "fileUrlToPath": false,
       
        },
        extensions: [".tsx", ".ts", ".js",".md",".mjs"],
          alias:{
            '@treasury': path.resolve(__dirname, '../../src/mui-treasury/layout-core-v5'),
                 '@lib': path.resolve(__dirname, 'src/components/lib'),
              '@routes': path.resolve(__dirname, 'src/routes'),
             '@marking': path.resolve(__dirname, '../extractorfile'),
     "@treasury-center": path.resolve(__dirname, "../../src/mui-treasury"),
              '@client': path.resolve(__dirname, 'src'),
              "@images": path.resolve(__dirname, './public/images'),
                 "path": false,
              "process": false,
                  "cwd": false,
                  "url": false,
                   "fs": false,
        "fileUrlToPath": false,
          
          }
    },

    module: {
        rules: [
          {
            test: /\.md$/,
            exclude: /node_modules/,
            oneOf: [
              {
                resourceQuery: /@loader\/marking/,
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
                  // {
                  //   loader:'markdown-loader',
                  // }
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
                    // sourceType:'mabiguos',
                    plugins:[
                      [
                        'babel-plugin-module-resolver',
                        {
                          alias:{
                        '@treasury': path.resolve(__dirname, '../../src/mui-treasury/layout-core-v5'),
                            '@lib': path.resolve(__dirname, './src/components/lib'),
                          '@routes': path.resolve(__dirname, './src/routes'),
                        '@marking': path.resolve(__dirname, '../extractorfile'),
                "@treasury-center": path.resolve(__dirname, "../../src/mui-treasury"),
                          '@client': path.resolve(__dirname, './src'),
                          "@imagedir": path.resolve(__dirname, './public/images'),
                          }
                        }
                      ]
                    ],
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
        open:false,
        liveReload:true,
        port: 9000,
    },
    optimization:{
      minimize:true,
      minimizer:[new TerserWebpackPlugin({
        parallel:4,
      })],
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