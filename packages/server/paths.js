// import fs from 'fs';
// import path from 'path';
// // import { realpathSync, existsSync, realpathSync } from 'fs';
// // import getPublicUrlOrPath from './getUrlOrPath';

// // const appDirectory = realpathSync(process.cwd());
// const serverFileRoot = path.resolve(__dirname, ".."); // this is the root folder server
// const resolveApp = relativePath =>path.resolve(serverFileRoot, relativePath);
// /**
//  * Normalize a file path to ensure it starts from the server root
//  * @param {string} absolutePath - The full absolute path
//  * @returns {string} - The normalized relative path
//  */
// function normalizePath(absolutePath) {
//   // Convert both paths to consistent format
//   const relativePath = absolutePath.replace(serverFileRoot, "").replace(/\\/g, "/");
//   // Ensure no leading slashes
//   return relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;
// }
//     const directives =  {
//         tresClient:normalizePath(resolveApp('./client/dist/bundle.js')),
//         tresBundle:normalizePath(resolveApp('dist/main.cipher_tres.bundle.js')),
//         tresHtml: normalizePath(resolveApp('public/index.html')),
//         tresSource: normalizePath(resolveApp('src')),
//         tresModule:normalizePath(resolveApp('node_modules')),
//         tresFavicon:normalizePath(resolveApp('public/favicon.ico')),
//         tresPath:normalizePath(resolveApp('server')),
//     } 

//     console.log('✅ Resolved directives tresPath:',directives.tresClient); // Debugging
//     export default directives;