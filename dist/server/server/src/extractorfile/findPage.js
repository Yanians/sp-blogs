"use strict";
// import * as fs from 'fs';
// import * as url from 'url';
// import * as path from 'path';
// const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));
// const pageRegex = /(\.js|\.tsx)$/;
// const blackList = [
//   '/webpack.build.js', 
//   '/babel.config.js', 
//   '/package.json',
//   'tsconfig.json',
//   'webpack.build.js',
//   'webpack.config.js',
//   'package-lock.json'
// ];
// interface NextJSPage {
//   pathname: string;
//   children?: NextJSPage[];
// }
// interface FindPagesOptions {
//   front?: boolean;
// }
//   export function findPages(
//     options: FindPagesOptions = {},
//     directory: string = path.resolve(currentDirectory, '../client'),
//     pages: NextJSPage[] = [],
//   ): NextJSPage[] {
//     fs.readdirSync(directory).forEach((item) => {
//       const itemPath = path.resolve(directory, item);
//       const pathname = itemPath
//         .replace(new RegExp(`\\${path.sep}`, 'g'), '/')
//         .replace(/^.*\/ecommerse/, '')
//         .replace('.mjs', '')
//         .replace('.md', '')
//         .replace(/^\/index$/, '/') // Replace `index` by `/`.
//         .replace(/\/index$/, '');
//       if (options.front && !pathname.includes('/src') && !pathname.includes('/blog')) {
//         return;
//       }
//       if (fs.statSync(itemPath).isDirectory()) {
//         const children: NextJSPage[] = [];
//         pages.push({
//           pathname,
//           children,
//         });
//         findPages(options, itemPath, children);
//         return;
//       }
//       if (!pageRegex.test(item) || blackList.includes(pathname)) {
//         return;
//       }
//       pages.push({
//         pathname,
//       });
//     });
//     // sort by pathnames without '-' so that e.g. card comes before card-action
//     pages.sort((a, b) => {
//       const pathnameA = a.pathname.replace(/-/g, '');
//       const pathnameB = b.pathname.replace(/-/g, '');
//       if (pathnameA < pathnameB) {
//         return -1;
//       }
//       if (pathnameA > pathnameB) {
//         return 1;
//       }
//       return 0;
//     });
//     console.log('from pages', pages);
//     return pages;
//   }
