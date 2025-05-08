const webpack = require('webpack');
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const dotenv = require('dotenv');
const aliases = require('./webpack.aliases');
const workspaceRoot = path.join(process.cwd(),'./');

// Load the environment variables
const env = dotenv.config({ path: './.env.production' }).parsed || {};

// Convert to DefinePlugin format

const envKeys = Object.keys(env).reduce((acc, key) => {
  acc[`process.env.${key}`] = JSON.stringify(env[key]);
  return acc;
},{});

module.exports = {
    target:"web",
    mode: 'development',
     entry: "./src/index.tsx",
     experiments: {
      outputModule: false,
    },
    output: {
        filename: '[name].cipher_tres_client.bundle.js',  // Ensure unique filenames for each bundle
            path: path.resolve(__dirname, "../server/webpack"), // Ensures everything is built in the monorepo
      publicPath: "/",
      clean:true,
    },
    devtool: "source-map",
  // externals: {
  //     express: "commonjs express", // Ensure server dependencies aren't bundled into the client
  //   },
    resolve: {
      modules:[
        path.resolve(__dirname, '../../node_modules'), 
      ],
       fallback: {
             "path": false,
              "url": false,
               "fs": false,
      },
        extensions: [".tsx", ".ts", ".js",".md",".mjs",".cjs",".jsx"],
        plugins: [
          new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../../tsconfig.json'), // or tsconfig.client.json
          }),
        ],
        conditionNames: ['import', 'require', 'default'],
          alias: {
                ...aliases,
        },
    },
    module: {
        rules: [
          {
            test: /\.md$/,
            exclude: /node_modules/,
            oneOf: [
              {
                resourceQuery: /@loader\/@marking/,
                use: [
                  {
                    loader:require.resolve("../extractorfile/"),
                    // loader:'markdown-loader',
                    options: {
                      workspaceRoot,
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
              // {
              //   loader:'markdown-loader',
              // },
              {
                // Used in some /getting-started/templates
                type: "asset/source",
              },
            ]
          },   
          {
            test: /\.(|tsx|ts|js|mjs)$/,
            resolve:{
              fullySpecified: false, // disable fully specified ESM
            },
            exclude: [/node_modules/, /\.md$/],  // <-- Exclude Markdown files from Babel],
            use:{
                loader:"babel-loader",
                options:{
              plugins:[
                        [
                          'babel-plugin-module-resolver',
                          {
                            alias:{
                         '@treasury': path.resolve(__dirname, '../../src/mui-treasury/layout-core-v5/'),
                              '@lib': path.resolve(__dirname, 'src/components/lib/'),
                           '@routes': path.resolve(__dirname, 'src/routes/'),
                   '@loader/marking': path.resolve(__dirname, '../extractorfile/index.js'),
                          '@marking': path.resolve(__dirname, '../extractorfile/*'),
                  "@treasury-center": path.resolve(__dirname, "../../src/mui-treasury/"),
                           '@client': path.resolve(__dirname, 'src/'),
                         "@imagedir": path.resolve(__dirname, './public/images/'),
                            }
                          }
                        ]
                  ],
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
              use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader','postcss-loader'],
          },
          {
            test: /\.(png|jpe?g|jpg|gif|svg)$/i,
            type: 'asset/resource', // Automatically chooses between `inline` and `resource`
            generator: {
              filename: 'assets/[hash][ext][query]'
            },
            parser: {
              dataUrlCondition: {
                maxSize: 8 * 1024 // 8KB threshold for inlining
              }
            }
          }
        ],
    },
    
    plugins: [
         new CleanWebpackPlugin(),
         new CompressionPlugin({
              algorithm: "gzip",
              test: /\.(js|css|html|svg)$/,
              threshold: 10240, // only compress files > 10kb
              minRatio: 0.8,
            }),
         new webpack.DefinePlugin(envKeys),
         new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].css',
          chunkFilename: 'css/[name].[contenthash].css',
        }),
   ],
     cache: {
          type: "filesystem", // Enables persistent caching
          cacheDirectory: path.resolve(__dirname, "../server/dist",".cipher_cache"),
       },
       
    optimization: {
         minimize: true, // minify everything
        //  minimizer: [new TerserPlugin()],
        minimizer:[new TerserPlugin({
          extractComments: false,
                parallel:4,
                terserOptions: {
                  compress: { pure_funcs: ['console.log'] },
                },
              }),
              new CssMinimizerPlugin(),
            ],
        runtimeChunk: {
          name: 'runtime',
        },
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
             reactVendor: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: 'react-vendors',
              chunks: 'all',
              priority: 20,
            },
            muiVendor: {
              test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/,
              name: 'mui-vendors',
              chunks: 'all',
              priority: 15,
            },
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            default: {
              minChunks: 2,
              reuseExistingChunk: true,
              priority: -10,
            },
           },
         }
       }   
};