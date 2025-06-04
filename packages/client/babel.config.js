const bpmr = require('babel-plugin-module-resolver');
const fse = require('fs-extra');
const path = require('path');

function resolvePath(sourcePath, currentFile, opts) {
  if (sourcePath === 'packages/client/src') {
    const base = currentFile.substring(__dirname.length).slice(0, -3);
    return `${__dirname}/packages/client/src/${base}/`;
  }

  return bpmr.resolvePath(sourcePath, currentFile, opts);
}

const alias = {
  '@treasury': path.resolve(__dirname, 'packages/client/src/mui-treasury/layout-core-v5/'),
  '@lib': path.resolve(__dirname, 'packages/src/components/lib/'),
  '@routes': path.resolve(__dirname, 'packages/src/routes/'),
  '@loader/marking': path.resolve(__dirname, 'packages/extractorfile/index.js'),
  '@treasury-center': path.resolve(__dirname, 'packages/client/src/mui-treasury/'),
  '@client': path.resolve(__dirname, 'packages/client/src'),  // Alias for the client folder
  '@imagedir': path.resolve(__dirname, 'packages/client/pulic/static/images'),
  '@marking': path.resolve(__dirname, 'packages/extractorfile/'),  // Alias for markdown extractor files
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
        alias:{
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
