
// // const fs = require('fs');
// // const path = require('path');
// // const chalk = require('react-dev-utils/chalk');
// // const resolve = require('resolve');
// import fs from 'fs';
// import path from 'path';
// import chalk from 'chalk';
// import resolve from 'resolve';
// import paths from './paths';

// function getAdditionalModulePaths(options = {}) {
//   const baseUrl = options.baseUrl;

//   if (!baseUrl) {
//     return '';
//   }

//   const baseUrlResolved = path.resolve(paths.appPath, baseUrl);

//   // We don't need to do anything if `baseUrl` is set to `node_modules`. This is
//   // the default behavior.
//   if (path.relative(paths.tresModule, baseUrlResolved) === '') {
//     return null;
//   }

//   // Allow the user set the `baseUrl` to `appSrc`.
//   if (path.relative(paths.appSrc, baseUrlResolved) === '') {
//     return [paths.appSrc];
//   }

//   // If the path is equal to the root directory we ignore it here.
//   // We don't want to allow importing from the root directly as source files are
//   // not transpiled outside of `src`. We do allow importing them with the
//   // absolute path (e.g. `src/Components/Button.js`) but we set that up with
//   // an alias.
//   if (path.relative(paths.appPath, baseUrlResolved) === '') {
//     return null;
//   }

//   // Otherwise, throw an error.
//   throw new Error(
//     chalk.red.bold(
//       "Your project's `baseUrl` can only be set to `src` or `node_modules`." +
//         ' Create React App does not support other values at this time.'
//     )
//   );
// }
