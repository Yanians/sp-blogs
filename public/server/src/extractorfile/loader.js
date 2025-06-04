"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const url_1 = tslib_1.__importDefault(require("url"));
const fs_1 = require("fs");
const path_1 = tslib_1.__importStar(require("path"));
const parseMarkDown_mjs_1 = require("./parseMarkDown.mjs");
const prepareMarkdown_js_1 = tslib_1.__importDefault(require("./prepareMarkdown.js"));
// import { cwd } from 'process';
// const __filename = url.fileURLToPath(new URL(".",import.meta.url));
// const __dirname = dirname(__filename);
// const notEnglishMarkdownRegExp = /-([a-z]{2})\.md$/;
// const blogdir = path.join(__dirname, '../client/src/blog/');
// export const getBlogFilePaths = (ext = '.md') => {
//     return readdirSync(blogdir).filter(file=>file.endsWith(ext)); //it returns an array of filenames
// }
//  const getBLogPost = (filePath) => {
//    const slug = filePath.replace(/\.md$/, '');
//    const content = readFileSync(path.join(blogdir,filePath),'utf-8');
//    const headers = getHeaders(content);
//    const textContent = getContents(content);
//    const markdownRender = renderMarkdown(content);
//     const blogsContent = render(markdownRender);
//      return {
//         ...headers,
//           textContent,
//           blogsContent,
//         slug,
//      }
// };
// const ALLOWED_TAGS = ['Blogs', 'Authorize Blogs', 'TRES', 'Company', 'Feedback News', 'PAYLAS'];
//  export const getAllBlogPost = () => {
//    const filePaths = getBlogFilePaths();
//    const rawBlogPost = filePaths.map((name)=> getBLogPost(name))
//    .sort((post1, post2)=> {
//     if(post1.date && post2.date){
//         return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
//     }
//     if(post1.date && !post2.date){
//         return 1;
//     }
//     return -1;
//    });
//   //  console.log('rawBlogPost value: ',rawBlogPost)
//    const allBlogPost = rawBlogPost.filter((post)=>!!post.title)
//    const tagInfo = {};
//    allBlogPost.forEach((post)=>{
//     post.tags.forEach((tag)=> {
//         if(!ALLOWED_TAGS.includes(tag)){
//             throw new Error(`The tag "${tag}" in "${post.title}" was not whiteListed are you sure it is not a type ? `,)
//         }
//         tagInfo[tag] = (tagInfo[tag] || 0) + 1;
//     });
//    });   
//    return {
//     allBlogPost, // post with at least a title
//     tagInfo,
//    }
// }  
/**************************************************************************************************************************/
function upperCaseFirst(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}
function moduleIDToJSIdentifier(moduleID) {
    const delimiter = /(\.|-|\/)/;
    return moduleID
        .split(delimiter)
        .filter((part) => !delimiter.test(part))
        .map((part) => (part.length === 0 ? '$' : part))
        .map(upperCaseFirst)
        .join('-');
}
const componentPackageMapping = {
    'blogs': {},
    'ecommerse': {},
    base: {},
};
const packages = [
    {
        pages: 'blogs',
        paths: [
            path_1.default.join(__dirname, '../client/src/blog'),
        ],
    },
    {
        pages: 'ecommerse',
        paths: [
            path_1.default.join(__dirname, '../client/ecommerse/src')
        ],
    },
];
packages.forEach((pkg) => {
    pkg.paths.forEach((pkgPath) => {
        const match = pkgPath.match(/client(?:\\|\/)([^/\\]+)(?:\\|\/)src/);
        const packageName = match ? match[1] : null;
        if (!packageName) {
            throw new Error(`cannot find package name from path: ${pkgPath}`);
        }
        const filePaths = (0, fs_1.readdirSync)(pkgPath);
        filePaths.forEach((folder) => {
            if (folder.match(/^[A-Za-z]/)) {
                if (!componentPackageMapping[pkg.pages]) {
                    throw new Error(`componentPackageMapping must have "${pkg.pages}" as a key`);
                }
                // filename starts with Uppercase = component
                componentPackageMapping[pkg.pages][folder] = packageName;
            }
        });
    });
});
async function Loader() {
    const englishFilepath = this.resourcePath;
    const englishFilename = (0, path_1.basename)(englishFilepath, '.md');
    console.log(englishFilename);
    const files = await readdir((0, path_1.dirname)(englishFilepath)); // returns all files inside the blog directory
    // console.log('files to be parse: ',files);
    const translations = await Promise.all(files
        .map((filename) => {
        if (filename === `${englishFilename}.md`) {
            return {
                filename,
                userLanguage: 'en',
            };
        }
        return null;
    })
        .filter((translation) => translation)
        .map(async (translation) => {
        const filepath = (0, path_1.join)((0, path_1.dirname)(englishFilepath), translation.filename);
        this.addDependency(filepath);
        const markdown = await readFile(filepath, { encoding: 'utf-8' });
        return {
            ...translation,
            markdown,
        };
    }));
    // console.log('content of componentPackageMapping',componentPackageMapping)
    // console.log('afer translated:  ',translations)
    const pageFilename = this.context.replace(this.rootContext, '')
        // win32 to posix
        .replace(/\\/g, '/');
    // console.log('this is the pagefilename:  ',pageFilename);
    const { docs } = (0, prepareMarkdown_js_1.default)({ pageFilename, translations, componentPackageMapping });
    const { allBlogPost, tagInfo, } = getAllBlogPost();
    //     const transformed = `
    //         export const docs = ${JSON.stringify(docs, null, 2)};
    //      export const allPost =  ${JSON.stringify(allBlogPost)};
    //      export const tagInfo = ${JSON.stringify(tagInfo, null, 2)};
    //  `;
    // const allPost =  ${JSON.stringify(allBlogPost, null, 2)};
    // const tagInfo = ${JSON.stringify(tagInfo, null, 2)};
    return {
        docs,
        allPost: allBlogPost,
        tagInfo,
    };
    // .join('\n')}};
    // return transformed;
}
;
const data = Loader().then((result) => {
    return {
        docs: result.docs,
        allPost: result.allPost,
        tagInfo: result.tagInfo,
    };
});
exports.default = data;
