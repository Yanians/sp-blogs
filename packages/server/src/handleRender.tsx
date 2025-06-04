// NODEJS
import { Writable } from "stream"; //from nodejs 
import fs from 'fs'
import path from 'path';
import React, { Suspense } from "react";

import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express-serve-static-core";
import postDirectives from "./extractorfile";
import { BlogProps } from "../../client/src/components/lib/signatureProps";

import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
// @EMOTION
// import createCache from "@emotion/cache";
import createEmotionServer from "@emotion/server/create-instance";
// MUI
// Redux
import { slugify } from "./utils/slugify";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../client/src/redux/reducers/rootReducer";
import App from "../../client/src/App";

//LOCAL
import { renderFullPage } from "./render";
import createEmotionCache from "./mui_lib/createEmotionCache";
import ThemeConfig from "../../client/src/utils";
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

const blogdir = path.join(__dirname, '../../client/src/blog/mdfiles');

export const getBlogFilePaths = (ext = '.md') => {
    return fs.readdirSync(blogdir).filter(file=>file.endsWith(ext)); //it returns an array of filenames
}

 export const getBLogPost = (filePath:string):BlogProps => {

  const { renderMarkdown, createRender,removeFrontmatter, getTitle, getHeaders, render} = postDirectives;

   const slug = filePath.replace(/\.md$/, '');

   const content = fs.readFileSync(path.join(blogdir,filePath),{encoding:'utf8'});

   const headers = getHeaders(content);
   const noHeaders = removeFrontmatter(content);
   const title = getTitle(content);
   const markdownRender = renderMarkdown(content);
   const blogPost:any = render(markdownRender);

   const renders = createRender({
      options:{
        env:{
          BLOGS_SERVER_ENV:'',
        }
      }
   });   

   const outputRender = renders(content);
    
   return {
      ...headers,
         title:slugify(title),
          blogPost,
        outputRender,
      slug,
   } as any;
};

 export const getAllBlogPost = () => {
   const filePaths = getBlogFilePaths();

   const rawBlogPost = filePaths.map((name)=> getBLogPost(name))
   .sort((post1, post2)=> {
    if(post1.date && post2.date){
        return new Date(post1.date) > new Date(post2.date) ? -1 : 1;
    }

    if(post1.date && !post2.date){
        return 1;
    }
    return -1;
   });

  //  console.log('rawBlogPost value: ',rawBlogPost)

   const allBlogPost = rawBlogPost.filter((post)=>!!post.title)
   const tagInfo:Record<string, number | undefined> = {};
   allBlogPost.forEach((post)=>{
    post.tags.forEach((tag)=> {
        if(!ALLOWED_TAGS.includes(tag)){
            throw new Error(`The tag "${tag}" in "${post.title}" was not whiteListed are you sure it is not a type ? `,)
        }
        tagInfo[tag] = (tagInfo[tag] || 0) + 1;
    });
   });   

   return {
    allBlogPost, // post with at least a title
    tagInfo,
   }
}  

// Generates js file from bundle
function OptionalDir(): string {
   const webpackDir = path.resolve(__dirname, "../../../../build/");
     if(!fs.existsSync(webpackDir)){
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

  function getWebpackScriptTags(){

    const typeofDir = OptionalDir();
    const files = fs.readdirSync(typeofDir);
    const jsFiles = files.filter(file => file.endsWith(".js"));  
    return jsFiles.map(file => `<script src="/${file}" defer></script>`).join("\n");
  }

  export function HandleRender(req:Request, res:Response) {
    const { allBlogPost } = getAllBlogPost();
    // const preloadedState = {
    //   post:allBlogPost,
    // };

    const store = configureStore({
      reducer: rootReducer,
      // preloadedState,
    });

  const nonce = Buffer.from(uuidv4()).toString("base64");
  // const preloadedstate = store.getState(); // snapshot of Redux
  const emotionCache = createEmotionCache(); // ✅ Create a new cache per request
    const { 
      extractCriticalToChunks, 
      // constructStyleTagsFromChunks 
    } = createEmotionServer(emotionCache);
    
const jsx = (
    <React.StrictMode>
      <Provider store={store}>
          <StaticRouter location={req.url}>
             <App sSrData={allBlogPost} nonce={nonce}/>
          </StaticRouter>    
      </Provider>
    </React.StrictMode>     
);
  
    const { pipe } = renderToPipeableStream(jsx, {

      onAllReady() {
        const chunks: Buffer[] = [];
        const writable = new Writable({
          write(chunk, _encoding, callback) {
            chunks.push(Buffer.from(chunk));
            callback();
          },
          final(callback) {

            const html = Buffer.concat(chunks).toString("utf8");
  
            // Emotion style extraction
            const { styles } = extractCriticalToChunks(html);

            const styleTags = styles.map(({key, ids, css})=>
              (`<style name="client_extraction" data-emotion="${key} ${ids.join(" ")}"  nonce="${nonce}">${css}</style>`))
              .join("");

            const scriptTags = getWebpackScriptTags(); // optional if you dynamically load chunks
            const fullHTML = renderFullPage( html, styleTags, scriptTags, allBlogPost);
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

export default HandleRender;
