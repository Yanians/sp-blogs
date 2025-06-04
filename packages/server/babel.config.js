// "presets": ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
const bpmr = require('babel-plugin-module-resolver');
const fse = require('fs-extra');
const path = require('path');

function resolvePath(sourcePath, currentFile, opts) {
  if (sourcePath === '/server/src') {
    const base = currentFile.substring(__dirname.length).slice(0, -3);
    return `${__dirname}/server/src/${base}/`;
  }

  return bpmr.resolvePath(sourcePath, currentFile, opts);
}

const alias = {
//   '@treasury': path.resolve(__dirname, './src/mui-treasury/layout-core-v5/'),
  '@lib': path.resolve(__dirname, '../client/src/components/lib/'),
//   '@routes': path.resolve(__dirname, './src/routes/'),
//   '@loader/marking': path.resolve(__dirname, '../extractorfile/index.js'),
//   '@treasury-center': path.resolve(__dirname, './src/mui-treasury/'),
//   '@client': path.resolve(__dirname, './src'),  // Alias for the client folder
//   '@imagedir': path.resolve(__dirname, './pulic/static/images'),
  '@extractor': path.resolve(__dirname, './src/extractorfile/'),  // Alias for markdown extractor files
};

// const { version: transformRuntimeVersion } = fse.readJSONSync(
//   require.resolve('@babel/runtime-corejs2/package.json')
// );

module.exports = {
  presets: [
    [
      '@babel/preset-env', // ECMAScript features
      {
         targets: '> 0.25%, not dead',
         useBuiltIns: "usage",
         corejs: 3
      },
    ],
    [
      '@babel/preset-react', // JSX/React support
      {
        runtime: 'automatic', // React 17 JSX transform
      },
    ],
    '@babel/preset-typescript', // TypeScript support
  ],
  plugins: [
    ["@babel/plugin-transform-runtime", { corejs:3, regenerator: true }], // ✅ Correct placement
    [
      'babel-plugin-module-resolver',
      {
        alias: {
            ...alias,
      },
        transformFunctions: ['require', 'require.context'],
        resolvePath,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    ],
  ],
  ignore: [/@babel[\\|/]runtime/], // Fix for Windows issue
    env: {
        production: {
        plugins: [
            '@babel/plugin-transform-react-constant-elements',
            ['babel-plugin-transform-react-remove-prop-types', { mode: 'remove' }],
        ],
        },
    },
  };
