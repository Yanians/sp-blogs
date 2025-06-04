
import { 
    createRender,
    getContents,
    getDescription,
    getHeaders,
    getTitle,
    render,
    removeHeaders,
    escape,
    removeFrontmatter,
    renderMarkdown,
    renderInline, 
} from './parseMarkDown.js';

import prepareMarkdown from './prepareMarkdown.js';
// import data,{ getAllBlogPost } from './loader.mjs';

// const { allPost, }= Loader();

export default { 
    createRender, 
    // allPost,
    // data,
    // getAllBlogPost,
    removeHeaders,
    renderMarkdown,
    render,
    removeFrontmatter,
    escape,
    getHeaders, 
    getTitle,
    prepareMarkdown,
    getContents,
    getDescription,
    renderInline
 };
