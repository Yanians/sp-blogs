"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBlogPost = exports.getBLogPost = exports.getBlogFilePaths = void 0;
exports.HandleRender = HandleRender;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
// NODEJS
const stream_1 = require("stream"); //from nodejs 
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const react_1 = tslib_1.__importDefault(require("react"));
const uuid_1 = require("uuid");
const extractorfile_1 = tslib_1.__importDefault(require("./extractorfile"));
const server_1 = require("react-dom/server");
const react_router_1 = require("react-router");
// @EMOTION
// import createCache from "@emotion/cache";
const create_instance_1 = tslib_1.__importDefault(require("@emotion/server/create-instance"));
// MUI
// Redux
const slugify_1 = require("./utils/slugify");
const react_redux_1 = require("react-redux");
const toolkit_1 = require("@reduxjs/toolkit");
const rootReducer_1 = tslib_1.__importDefault(require("../../client/src/redux/reducers/rootReducer"));
const App_1 = tslib_1.__importDefault(require("../../client/src/App"));
//LOCAL
const render_1 = require("./render");
const createEmotionCache_1 = tslib_1.__importDefault(require("./mui_lib/createEmotionCache"));
// import Layout from "../../client/src/layout";
const ALLOWED_TAGS = [
    'NODEJS',
    'TOOLING',
    'AI',
    'CSS',
    'HTML-CSS',
    'REACT-HOOKS',
    'PHP',
    '3D',
    'CSS-SVG',
    'JAVASCRIPT',
    'WEB',
    'LATEST-TRENDS',
    'SERVERSIDE',
];
const blogdir = path_1.default.join(__dirname, '../../client/src/blog/mdfiles');
const getBlogFilePaths = (ext = '.md') => {
    return fs_1.default.readdirSync(blogdir).filter(file => file.endsWith(ext)); //it returns an array of filenames
};
exports.getBlogFilePaths = getBlogFilePaths;
const getBLogPost = (filePath) => {
    const { renderMarkdown, createRender, removeFrontmatter, getTitle, getHeaders, render } = extractorfile_1.default;
    const slug = filePath.replace(/\.md$/, '');
    const content = fs_1.default.readFileSync(path_1.default.join(blogdir, filePath), { encoding: 'utf8' });
    const headers = getHeaders(content);
    const noHeaders = removeFrontmatter(content);
    const title = getTitle(content);
    const markdownRender = renderMarkdown(content);
    const blogPost = render(markdownRender);
    const renders = createRender({
        options: {
            env: {
                BLOGS_SERVER_ENV: '',
            }
        }
    });
    const outputRender = renders(content);
    return {
        ...headers,
        title: (0, slugify_1.slugify)(title),
        blogPost,
        outputRender,
        slug,
    };
};
exports.getBLogPost = getBLogPost;
const getAllBlogPost = () => {
    const filePaths = (0, exports.getBlogFilePaths)();
    const rawBlogPost = filePaths.map((name) => (0, exports.getBLogPost)(name))
        .sort((post1, post2) => {
        if (post1.date && post2.date) {
            return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
        }
        if (post1.date && !post2.date) {
            return 1;
        }
        return -1;
    });
    //  console.log('rawBlogPost value: ',rawBlogPost)
    const allBlogPost = rawBlogPost.filter((post) => !!post.title);
    const tagInfo = {};
    allBlogPost.forEach((post) => {
        post.tags.forEach((tag) => {
            if (!ALLOWED_TAGS.includes(tag)) {
                throw new Error(`The tag "${tag}" in "${post.title}" was not whiteListed are you sure it is not a type ? `);
            }
            tagInfo[tag] = (tagInfo[tag] || 0) + 1;
        });
    });
    return {
        allBlogPost, // post with at least a title
        tagInfo,
    };
};
exports.getAllBlogPost = getAllBlogPost;
// Generates js file from bundle
function OptionalDir() {
    const webpackDir = path_1.default.resolve(__dirname, "../../../../build/");
    if (!fs_1.default.existsSync(webpackDir)) {
        return " ";
    }
    // if(webpackDir = path.resolve(__dirname, "../webpack")){
    //      if(!fs.existsSync(webpackDir)){
    //           return webpackDir = path.resolve(__dirname, "../../client/dist/webpack");      
    //      }    
    //      webpackDir = path.resolve(__dirname, "../webpack");
    // }
    return webpackDir;
}
function getWebpackScriptTags() {
    const typeofDir = OptionalDir();
    const files = fs_1.default.readdirSync(typeofDir);
    const jsFiles = files.filter(file => file.endsWith(".js"));
    return jsFiles.map(file => `<script src="/${file}" defer></script>`).join("\n");
}
function HandleRender(req, res) {
    const { allBlogPost } = (0, exports.getAllBlogPost)();
    // const preloadedState = {
    //   post:allBlogPost,
    // };
    const store = (0, toolkit_1.configureStore)({
        reducer: rootReducer_1.default,
        // preloadedState,
    });
    const nonce = Buffer.from((0, uuid_1.v4)()).toString("base64");
    // const preloadedstate = store.getState(); // snapshot of Redux
    const emotionCache = (0, createEmotionCache_1.default)(); // ✅ Create a new cache per request
    const { extractCriticalToChunks,
    // constructStyleTagsFromChunks 
     } = (0, create_instance_1.default)(emotionCache);
    const jsx = ((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsx)(react_router_1.StaticRouter, { location: req.url, children: (0, jsx_runtime_1.jsx)(App_1.default, { sSrData: allBlogPost, nonce: nonce }) }) }) }));
    const { pipe } = (0, server_1.renderToPipeableStream)(jsx, {
        onAllReady() {
            const chunks = [];
            const writable = new stream_1.Writable({
                write(chunk, _encoding, callback) {
                    chunks.push(Buffer.from(chunk));
                    callback();
                },
                final(callback) {
                    const html = Buffer.concat(chunks).toString("utf8");
                    // Emotion style extraction
                    const { styles } = extractCriticalToChunks(html);
                    const styleTags = styles.map(({ key, ids, css }) => (`<style name="client_extraction" data-emotion="${key} ${ids.join(" ")}"  nonce="${nonce}">${css}</style>`))
                        .join("");
                    const scriptTags = getWebpackScriptTags(); // optional if you dynamically load chunks
                    const fullHTML = (0, render_1.renderFullPage)(html, styleTags, scriptTags, allBlogPost);
                    res.status(200).send(fullHTML);
                    callback();
                },
            });
            pipe(writable); // <— ✅ here's the pipe usage
        },
        onError(error) {
            console.error("Streaming error:", error);
            res.status(500).send("Internal Server Error");
        },
    });
}
exports.default = HandleRender;
