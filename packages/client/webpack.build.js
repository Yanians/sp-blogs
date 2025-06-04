
const webpack = require('webpack');
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require('fs');
const resolve = require('resolve');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
// const dotenv = require('dotenv');
const ModuleScopePlugin = require('./moduleScopePlugin');
const modules = require('./modules');
const aliases = require('./webpack.aliases');
// const ESLintPlugin = require('eslint-webpack-plugin');
const workspaceRoot = path.join(process.cwd(),'./');
const getClientEnvironment = require('./environment')
const paths = require('./configEnv');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true';
const ForkTsCheckerWebpackPlugin =
  process.env.TSC_COMPILE_ON_ERROR === 'true'
    ? require('./forkTsCheckerWarningWebpackPlugin') // there is warning deprecation on this glob@7.2.3 prior to v9 are no longer supported
    : require('fork-ts-checker-webpack-plugin');
// Load the environment variables
// const env = dotenv.config({ path: './.env.production' }).parsed || {};
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const getCSSModuleLocalIdent = require('./getCssModuleLocalIndent');
const getCacheIdentifier = require('./getCacheIdentifier');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const reactRefreshRuntimeEntry = require.resolve('react-refresh/runtime');
const babelRuntimeEntry = require.resolve('@babel/preset-react');
const reactRefreshWebpackPluginRuntimeEntry = require.resolve(
  '@pmmmwh/react-refresh-webpack-plugin'
);

const babelRuntimeEntryHelpers = require.resolve(
  '@babel/runtime/helpers/esm/assertThisInitialized',
  { paths: [babelRuntimeEntry] }
);

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false;
  }

  try {
    require.resolve('react/jsx-runtime');
    return true;
  } catch (e) {
    return false;
  }
})();

const babelRuntimeRegenerator = require.resolve('@babel/runtime/regenerator', {
  paths: [babelRuntimeEntry],
});

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));
// console.log('environment variable from publicUrl: ',env);
// console.log(paths.publicUrlOrPath);
// console.log('[DEBUG] env.stringified:', env.stringified);

// console.log('[DEBUG] paths.clientSrc =', paths.clientSrc);
// console.log('[DEBUG] typeof devtoolModuleFilenameTemplate =', 
  // typeof (info => path.relative(paths.clientSrc, info.absoluteResourcePath).replace(/\\/g, '/')));

// console.log('entry point ',paths.appIndex);

const useTypeScript = fs.existsSync(paths.appTsConfig);

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

const createEnvironmentHash = require('./createHash');

// console.log('paths.clientSrc:', paths.clientSrc);

module.exports = function(webpackEnv) {

    return {
    target:["browserslist"],
     stats: 'errors-warnings',
      mode: webpackEnv === 'production' ? 'production' : 'development',
     devtool: webpackEnv === 'production' ? 'source-map' : 'eval-source-map',
           entry: paths.appIndex,
     experiments: {
      outputModule: false,
    },

    output: {
      filename: '[name].cipher_tres_production.bundle.js',
        // filename:'[name].cipher_tres_development.bundle.js',
            path: paths.appBuild, // Ensures everything is built in the monorepo
            pathinfo:true,
      publicPath:paths.publicUrlOrPath,
     clean: true, // ✅ This tells Webpack to clean the output directory before emit
    devtoolModuleFilenameTemplate: info => {
        const basePath = paths.appSrc;
        const absPath = info.absoluteResourcePath;
      if (webpackEnv === 'production') {
        return path.relative(basePath, absPath).replace(/\\/g, '/');
      } else if (webpackEnv  === 'development') {
        return path.resolve(absPath).replace(/\\/g, '/');
      }
  // Fallback (should never hit if env is correct)
    return absPath;
  }
},

resolve: {
  modules: ['node_modules', paths.appNodeModules].concat(
    modules.additionalModulePaths || [],
  ),
  //   fallback: {
  //     "process": require.resolve("process/browser.js"),
  //     "buffer": require.resolve("buffer/"),
  //     "stream": require.resolve("stream-browserify"),
  //     "crypto": require.resolve("crypto-browserify"),
  //     "zlib": require.resolve("browserify-zlib"),
  //     "http": require.resolve("stream-http"),
  //     "https": require.resolve("https-browserify"),
  //       // "vm": require.resolve("vm-browserify"),
  //     "vm": false,
  //  },
        extensions: [".tsx", ".ts", ".js",".md",".mjs",".jsx",".json"],
        // extensions: paths.moduleFileExtensions
        // .map(ext => `.${ext}`)
        // .filter(ext => useTypeScript || !ext.includes('ts')),
         mainFields: ['browser', 'module', 'main'], // 👈 this line is critical
        plugins: [
          new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, './tsconfig.json'), // or tsconfig.client.json
          }),
          new ModuleScopePlugin(paths.clientSrc, [
          paths.appPackageJson,
          reactRefreshRuntimeEntry,
          reactRefreshWebpackPluginRuntimeEntry,
          babelRuntimeEntry,
          babelRuntimeEntryHelpers,
          babelRuntimeRegenerator,
        ]),
      ],
        conditionNames: ['import', 'require', 'default'],
          alias: {
            ...aliases,
            // 'axios': require.resolve('axios'),
          },
    },
  module: {
    // strictExportPresence: true,
      rules: [
            {
            test: /\.(tsx?|jsx?|mjs|js)$/,
            include:paths.clientSrc,
            resolve:{
              fullySpecified: false, // disable fully specified ESM
            },
            exclude: [/node_modules/, /\.md$/],  // <-- Exclude Markdown files from Babel],
            use:{
                loader:require.resolve("babel-loader"),
                options:{
                  presets:[
                         "@babel/preset-react",
                         "@babel/preset-env",
                         "@babel/preset-typescript",
                    ],
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
                              "@imagedir": path.resolve(__dirname, './public/static/images/'),
                        }
                      }
                    ]
                 ],
              }
            }
          },
          {
          enforce: 'pre',
            exclude: [
              /node_modules/,
              /@babel(?:\/|\\{1,2})runtime/,
            ],
          test: /\.(js|mjs|jsx|ts|tsx|css)$/,
          loader: require.resolve('source-map-loader'),
          },
          {
            test: /\.(png|jpe?g|jpg|gif|avif|svg)$/i,
            type: 'asset/resource', // Automatically chooses between `inline` and `resource`
            generator: {
              filename: 'assets/[hash][ext][query]'
            },
            parser: {
              dataUrlCondition: {
                maxSize: 8 * 1024 // 8KB threshold for inlining
              }
            }
          },
          {
            test: /\.md$/,
            exclude: /node_modules/,
            oneOf: [
              {
                resourceQuery: /@loader\/@marking/,
                use: [
                  {
                    loader:require.resolve("../extractorfile/loader.js"),
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
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false // needed for some packages using "exports"
            }
          },   

          // Process any JS outside of the app with Babel.
          // Unlike the application JS, we only compile the standard ES features.

          {
              test: /\.css$/,
              use: [/*MiniCssExtractPlugin.loader*/'style-loader', 'css-loader','postcss-loader'],
          },
         
          {
          // oneOf: [
          //   {
          //     test: [/\.avif$/],
          //     type: 'asset',
          //     mimetype: 'image/avif',
          //     parser: {
          //       dataUrlCondition: {
          //         maxSize: imageInlineSizeLimit,
          //       },
          //     },
          //   },
          //   {
          //     test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
          //     type: 'asset',
          //     parser: {
          //       dataUrlCondition: {
          //         maxSize: imageInlineSizeLimit,
          //       },
          //     },
          //   },
          //   {
          //     test: /\.svg$/,
          //     use: [
          //       {
          //         loader: require.resolve('@svgr/webpack'),
          //         options: {
          //           prettier: false,
          //           svgo: false,
          //           svgoConfig: {
          //             plugins: [{ removeViewBox: false }],
          //           },
          //           titleProp: true,
          //           ref: true,
          //         },
          //       },
          //       {
          //         loader: require.resolve('file-loader'),
          //         options: {
          //           name: 'static/media/[name].[hash].[ext]',
          //         },
          //       },
          //     ],
          //     issuer: {
          //       and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          //     },
          //   },
          //   {
          //     test: /\.(js|mjs|jsx|ts|tsx)$/,
          //     include: paths.appSrc,
          //     loader: require.resolve('babel-loader'),
          //     options: {
          //       customize: require.resolve(
          //         'babel-preset-react-app/webpack-overrides'
          //       ),
          //       presets: [
          //         [
          //           require.resolve('babel-preset-react-app'),
          //           {
          //             runtime: hasJsxRuntime ? 'automatic' : 'classic',
          //           },
          //         ],
          //       ],
          //       babelrc: false,
          //       configFile: false,
          //       cacheIdentifier: getCacheIdentifier(
          //         isEnvProduction
          //           ? 'production'
          //           : isEnvDevelopment && 'development',
          //         [
          //           'babel-plugin-named-asset-import',
          //           'babel-preset-react-app',
          //           'react-dev-utils',
          //           'react-scripts',
          //         ]
          //       ),
          //       plugins: [
          //         isEnvDevelopment &&
          //           shouldUseReactRefresh &&
          //           require.resolve('react-refresh/babel'),
          //       ].filter(Boolean),
          //       cacheDirectory: true,
          //       cacheCompression: false,
          //       compact: isEnvProduction,
          //     },
          //   },
          //   {
          //     test: /\.(js|mjs)$/,
          //     exclude: /@babel(?:\/|\\{1,2})runtime/,
          //     loader: require.resolve('babel-loader'),
          //     options: {
          //       babelrc: false,
          //       configFile: false,
          //       compact: false,
          //       presets: [
          //         [
          //           require.resolve('babel-preset-react-app/dependencies'),
          //           { helpers: true },
          //         ],
          //       ],
          //       cacheDirectory: true,
          //       cacheCompression: false,
          //       cacheIdentifier: getCacheIdentifier(
          //         isEnvProduction
          //           ? 'production'
          //           : isEnvDevelopment && 'development',
          //         [
          //           'babel-plugin-named-asset-import',
          //           'babel-preset-react-app',
          //           'react-dev-utils',
          //           'react-scripts',
          //         ]
          //       ),
          //       sourceMaps: shouldUseSourceMap,
          //       inputSourceMap: shouldUseSourceMap,
          //     },
          //   },
          //   {
          //     test: cssRegex,
          //     exclude: cssModuleRegex,
          //     use: getStyleLoaders({
          //       importLoaders: 1,
          //       sourceMap: isEnvProduction
          //         ? shouldUseSourceMap
          //         : isEnvDevelopment,
          //       modules: {
          //         mode: 'icss',
          //       },
          //     }),
            
          //     sideEffects: true,
          //   },
           
          //   {
          //     test: cssModuleRegex,
          //     use: getStyleLoaders({
          //       importLoaders: 1,
          //       sourceMap: isEnvProduction
          //         ? shouldUseSourceMap
          //         : isEnvDevelopment,
          //       modules: {
          //         mode: 'local',
          //         getLocalIdent: getCSSModuleLocalIdent,
          //       },
          //     }),
          //   },
          //   // Opt-in support for SASS (using .scss or .sass extensions).
          //   // By default we support SASS Modules with the
          //   // extensions .module.scss or .module.sass
          //   {
          //     test: sassRegex,
          //     exclude: sassModuleRegex,
          //     use: getStyleLoaders(
          //       {
          //         importLoaders: 3,
          //         sourceMap: isEnvProduction
          //           ? shouldUseSourceMap
          //           : isEnvDevelopment,
          //         modules: {
          //           mode: 'icss',
          //         },
          //       },
          //       'sass-loader'
          //     ),
          //     sideEffects: true,
          //   },
          //   {
          //     test: sassModuleRegex,
          //     use: getStyleLoaders(
          //       {
          //         importLoaders: 3,
          //         sourceMap: isEnvProduction
          //           ? shouldUseSourceMap
          //           : isEnvDevelopment,
          //         modules: {
          //           mode: 'local',
          //           getLocalIdent: getCSSModuleLocalIdent,
          //         },
          //       },
          //       'sass-loader'
          //     ),
          //   },
          //   {
          //     exclude: [/^$/, /\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
          //     type: 'asset/resource',
          //   },
          //   // ** STOP ** Are you adding a new loader?
          //   // Make sure to add the new loader(s) before the "file" loader.
          // ],
          },
      
        ],
    },
    
    plugins: [
        new ReactRefreshWebpackPlugin({
          overlay: false,
        }),
        // new MiniCssExtractPlugin({
        //   filename: 'static/css/[name].[contenthash:8].css',
        //   chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        // }),
         new CleanWebpackPlugin(), // use this only in production
         new CompressionPlugin({
              algorithm: "gzip",
              test: /\.(js|css|html|svg)$/,
              threshold: 10240, // only compress files > 10kb
              minRatio: 0.8,
            }),
          new webpack.DefinePlugin(env.raw),
          new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
          }),
   ],
  //  performance:false,
     cache: {
          type: "filesystem", // Enables persistent caching
          version:createEnvironmentHash(env.raw),
          cacheDirectory: paths.appWebpackCache,
          store:'pack',
          buildDependencies: {
           defaultWebpack: ['webpack/lib/'],
           config: [__filename],
            tsconfig: [paths.appTsConfig].filter(f =>
              fs.existsSync(f)
            ),
          },
       },

       infrastructureLogging: {
         level: 'none',
       },
       
    optimization: {
         minimize: true, // minify everything
        minimizer:[
        
              //  new ImageMinimizerPlugin({
              //   minimizer: {
              //     implementation: ImageMinimizerPlugin.imageminGenerate,
              //     options: {
              //        severityError: 'warning', // Or 'off'
              //       plugins: [
              //         ['gifsicle', { interlaced: true }],
              //         ['mozjpeg', { quality: 70 }],
              //         ['pngquant', { quality: [0.6, 0.8] }],
              //         ['webp', { quality: 75 }],
              //         ['avif', { quality: 50 }],
              //       ],
              //     },
              //   },
              // }),
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
    }
  }