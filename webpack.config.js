require('source-map-support/register');

const webpack = require('webpack');
const configFactory = require('./packages/client/webpack.build');

// Determine mode (can be dynamic, here we hardcode to 'development')
const config = configFactory('development');

// Create the compiler
const compiler = webpack(config);

// Start compiler in watch mode (live development)
compiler.watch({}, (err, stats) => {
  if (err) {
    console.error('Fatal error during watch:', err);
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error('Compilation errors:');
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn('Compilation warnings:');
    console.warn(info.warnings);
  }

  console.log('Build completed successfully at', new Date().toLocaleTimeString());
});
