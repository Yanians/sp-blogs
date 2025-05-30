
const webpack = require('webpack');
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require('fs');
const resolve = require('resolve');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const dotenv = require('dotenv');
const ModuleScopePlugin = require('./moduleScopePlugin');
const modules = require('./modules');
const aliases = require('./webpack.aliases');
const ESLintPlugin = require('eslint-webpack-plugin');
const workspaceRoot = path.join(process.cwd(),'./');
const getClientEnvironment = require('./environment')
const paths = require('./configEnv');

const disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true';
const ForkTsCheckerWebpackPlugin =
  process.env.TSC_COMPILE_ON_ERROR === 'true'
    ? require('react-dev-utils/ForkTsCheckerWarningWebpackPlugin') // there is warining deprecation on this glob@7.2.3 prior to v9 are no longer supported
    : require('react-dev-utils/ForkTsCheckerWebpackPlugin');
// Load the environment variables
// const env = dotenv.config({ path: './.env.production' }).parsed || {};
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
const babelRuntimeRegenerator = require.resolve('@babel/runtime/regenerator', {
  paths: [babelRuntimeEntry],
});
// Convert to DefinePlugin format

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));


// const envKeys = {
//   'process.env': Object.entries(env)
//     .filter(([key]) => key.startsWith('REACT_APP_'))
//     .reduce((acc, [key, val]) => {
//       acc[key] = JSON.stringify(val);
//       return acc;
//     }, {})
// };
// const envKeys = Object.keys(env).reduce((acc, key) => {
//   acc[`process.env.${key}`] = JSON.stringify(env[key]);
//   return acc;
// },{});

// const swSrc = paths.swSrc;

// console.log('[DEBUG] paths.clientSrc =', paths.clientSrc);
// console.log('[DEBUG] typeof devtoolModuleFilenameTemplate =', 
//   typeof (info => path.relative(paths.clientSrc, info.absoluteResourcePath).replace(/\\/g, '/')));

const useTypeScript = fs.existsSync(paths.appTsConfig);
// console.log('Use TypeScript:', useTypeScript, 'TS config path:', paths.appTsConfig);
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

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

const imageInlineSizeLimit = parseInt(
  process.env.IMAGE_INLINE_SIZE_LIMIT || '10000'
);

const createEnvironmentHash = require('./createHash');

module.exports = function (webpackEnv){
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  const isEnvProductionProfile = isEnvProduction && process.argv.includes('--profile');
  const shouldUseReactRefresh = env.raw.FAST_REFRESH;

    return {
    target:["browserslist"],
     stats: 'errors-warnings',
      mode: 'development',
    //  mode:'development',
     devtool:'eval-source-map',
    // devtool: isEnvProduction
    //     ? shouldUseSourceMap
    //     ? 'source-map'
    //     : false
    //     : isEnvDevelopment && 'cheap-module-source-map',
    entry: paths.appIndex,
     experiments: {
      outputModule: false,
    },

    output: {
      filename: '[name].cipher_tres_development.bundle.js',
        // filename:'[name].cipher_tres_development.bundle.js',
            path: paths.appBuild, // Ensures everything is built in the monorepo
            pathinfo:isEnvDevelopment,
      publicPath:paths.publicUrlOrPath,
     clean: true, // ✅ This tells Webpack to clean the output directory before emit
    devtoolModuleFilenameTemplate: info => {
        const basePath = paths.appSrc;
        const absPath = info.absoluteResourcePath;
      if (isEnvProduction) {
        return path.relative(basePath, absPath).replace(/\\/g, '/');
      } else if (isEnvDevelopment) {
        return path.resolve(absPath).replace(/\\/g, '/');
      }
  // Fallback (should never hit if env is correct)
  return absPath;
}

    },

    resolve: {
      modules: ['node_modules', paths.appNodeModules].concat(
        modules.additionalModulePaths || [],
        // paths.appImageDir,
      ),
      // modules:[
      //   path.resolve(__dirname, '../../node_modules'), 
      // ],
       fallback: {
         "process": require.resolve("process/browser.js"),
          "buffer": require.resolve("buffer/"),
          "stream": require.resolve("stream-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "zlib": require.resolve("browserify-zlib"),
          "http": require.resolve("stream-http"),
          "https": require.resolve("https-browserify"),
            // "vm": require.resolve("vm-browserify"),
            "vm": false,
      },
        extensions: [".tsx", ".ts", ".js",".md",".mjs",".jsx",".json"],
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
      strictExportPresence: true,
        rules: [
          {
            test: /\.(js|mjs|jsx|ts|tsx|css)$/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: [
              /node_modules/,
              /@babel(?:\/|\\{1,2})runtime/,
            ],
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
          {
            test: /\.(tsx?|jsx?|mjs)$/,
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
          // Process any JS outside of the app with Babel.
          // Unlike the application JS, we only compile the standard ES features.
          {
              test: /\.css$/,
              use: [/*MiniCssExtractPlugin.loader*/'style-loader', 'css-loader','postcss-loader'],
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

       useTypeScript &&
        new ForkTsCheckerWebpackPlugin({
          async: isEnvDevelopment,
          typescript: {
            typescriptPath: resolve.sync('typescript', {
              basedir: paths.appNodeModules,
            }),
            configOverwrite: {
              compilerOptions: {
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
                skipLibCheck: true,
                inlineSourceMap: false,
                declarationMap: false,
                noEmit: true,
                incremental: true,
                tsBuildInfoFile: paths.appTsBuildInfoFile,
              },
            },
            context: paths.appPath,
            diagnosticOptions: {
              syntactic: true,
            },
            mode: 'write-references',
            // profile: true,
          },
          issue: {
            // This one is specifically to match during CI tests,
            // as micromatch doesn't match
            // '../cra-template-typescript/template/src/App.tsx'
            // otherwise.
            include: [
              { file: '../**/src/**/*.{ts,tsx}' },
              { file: '**/src/**/*.{ts,tsx}' },
            ],
            exclude: [
              { file: '**/src/**/__tests__/**' },
              { file: '**/src/**/?(*.){spec|test}.*' },
              { file: '**/src/setupProxy.*' },
              { file: '**/src/setupTests.*' },
              { file: '**/src/mui-treasury/layout-core-v5/**/*.test.ts' },
              { file: '**/src/mui-treasury/layout-core-v5/Root**/*.test.tsx' },
              { file: '**/src/mui-treasury/layout-core-v5/EdgeSidebar/useEdgeSidebar.test.tsx' },
              { file: '**/src/mui-treasury/layout-core-v5/InsetSidebar/InsetContainer.tsx' },
            ],
          },
          logger: {
            infrastructure: 'silent',
          },
        }),
        //  new CleanWebpackPlugin(), // use this only in production
         new CompressionPlugin({
              algorithm: "gzip",
              test: /\.(js|css|html|svg)$/,
              threshold: 10240, // only compress files > 10kb
              minRatio: 0.8,
            }),
          new webpack.DefinePlugin(env.stringified),
          new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
          })
        //  new MiniCssExtractPlugin({
        //   filename: 'css/[name].[contenthash].css',
        //   chunkFilename: 'css/[name].[contenthash].css',
        // }),
   ],
     cache: {
          type: "filesystem", // Enables persistent caching
          version:createEnvironmentHash(env.raw),
          cacheDirectory: paths.appWebpackCache,
          // cacheDirectory: path.resolve(__dirname, "../server/dist",".cipher_cache"),
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
       
    // optimization: {
    //      minimize: true, // minify everything
    //     minimizer:[new TerserPlugin({
    //         terserOptions:{
    //            parse:{
    //              ecma:8,
    //            },
    //            compress:{
    //             ecma:5,
    //             inline:2,
    //            },
    //            mangle: {
    //             safari10: true,
    //            },
    //            keep_classnames: isEnvProductionProfile,
    //            keep_fnames: isEnvProductionProfile,
    //         output: {
    //           ecma: 5,
    //             comments: false,
    //             ascii_only: true,
    //           },
    //         },
    //       extractComments: false,
    //             parallel:4,
    //             // terserOptions: {
    //             //   compress: { pure_funcs: ['console.log'] },
    //             // },
    //           }),
    //           new CssMinimizerPlugin(),
    //         ],
    //     runtimeChunk: {
    //       name: 'runtime',
    //     },

    //      usedExports: true, // Enables tree shaking
    //      splitChunks: {
    //        chunks: 'all',
    //        minSize: 20000, // Minimum size for a chunk
    //        maxSize: 500000, // Try to keep chunks below 500KB
    //        cacheGroups: {
    //          vendors: {
    //            test: /[\\/]node_modules[\\/]/,
    //            name: 'vendors',
    //            chunks: 'all',
    //            enforce: true,
    //            reuseExistingChunk: true,
    //          },
    //          reactVendor: {
    //           test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
    //           name: 'react-vendors',
    //           chunks: 'all',
    //           priority: 20,
    //         },
    //         muiVendor: {
    //           test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/,
    //           name: 'mui-vendors',
    //           chunks: 'all',
    //           priority: 15,
    //         },
    //         defaultVendors: {
    //           test: /[\\/]node_modules[\\/]/,
    //           name: 'vendors',
    //           chunks: 'all',
    //           priority: 10,
    //         },
    //         default: {
    //           minChunks: 2,
    //           reuseExistingChunk: true,
    //           priority: -10,
    //         },
    //        },
    //      }
    //   }  
    }
}