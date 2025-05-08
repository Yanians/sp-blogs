
// import fs from 'fs';
// import path from 'path';
// import  markdown  from '@marking/index.mjs';

// const { getHeaders } = markdown;

// export interface BlogProps {
//     slug:string;
//     title:string;
//     description:string;
//     image?:string;
//     tags:Array<string>;
//     authors?:Array<string>;
//     date?:string;
// };

// const blogdir = path.join(process.cwd(), '.');

// export const getBlogFilePaths = (ext = '.md') => {
//     return fs.readdirSync(blogdir).filter(file=>file.endsWith(ext)); //it returns an array of filenames
// }

// export const getBLogPost = (filePath:string): BlogProps => {

//    const slug = filePath.replace(/\.md$/, '');

//    const content = fs.readFileSync(path.join(blogdir),'utf8');

//    const headers = getHeaders(content) as unknown as BlogProps;

//      return {
//         ...headers,
//         slug,
//      }
// };

// const ALLOWED_TAGS = ['Blogs', 'MUI X', 'News', 'Company', 'Feedback News', 'Product'];

// export const getAllBlogPost = () => {
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

//    const allBlogPost = rawBlogPost.filter((post)=>!!post.title)
//    const tagInfo:Record<string, number | undefined> = {};
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





