"use strict";
// import { Request, Response } from "express";
// import { renderToPipeableStream, renderToString } from "react-dom/server";
// import { v4 as uuidv4 } from "uuid";
// import { Provider } from "react-redux";
// import { StaticRouter } from "react-router-dom";
// /** MUI */
// import theme from "./mui_lib/theme";
// import createEmotionServer from "@emotion/server/create-instance";
// import { CacheProvider } from "@emotion/react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/material/styles";
// import createEmotionCache from "./mui_lib/createEmotionCache";
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "../../client/src/redux/reducers/rootReducer";
// import App from "../../client/src/App";
// import { PassThrough } from "stream";
// import path from 'path';
// import fs from 'fs';
// import { renderFullPage } from "./render";
// function getWebpackScriptTags(): string {
//     const webpackDir = path.resolve(__dirname, "../dist/webpack");
//     if (!fs.existsSync(webpackDir)) return "";
//     const files = fs.readdirSync(webpackDir);
//     const jsFiles = files.filter(file => file.endsWith(".js"));
//     return jsFiles.map(file => `<script src="/${file}" defer></script>`).join("\n");
//   }
// export default function ServerRender(req: Request, res: Response) {
//     const nonce = Buffer.from(uuidv4()).toString("base64");
//     const cache = createEmotionCache();
//     const { extractCriticalToChunks, } = createEmotionServer(cache);
//   const preloadedState = {
//     cart: {
//       items: [{ id: 1, name: "Shoes", price: 50 }],
//       totalPrice: 50,
//     },
//   };
//   const store = configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
//   const html = renderToString(
//     <Provider store={store}>
//       <CacheProvider value={cache}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//              <StaticRouter location={req.url}>
//                 <App />
//              </StaticRouter>
//           </ThemeProvider>
//         </CacheProvider>
//     </Provider>)
//   let didError = false;
//   const { pipe } = renderToPipeableStream(
//     <Provider store={store}>
//       <CacheProvider value={cache}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//              <StaticRouter location={req.url}>
//                 <App />
//              </StaticRouter>
//           </ThemeProvider>
//         </CacheProvider>
//     </Provider>,
//     {
//       onAllReady() {
//             const { styles } = extractCriticalToChunks(html); // html must contain your pre-rendered HTML
//             const stylesHTML = styles
//               .map(
//                 ({ key, ids, css, }) =>
//                   `<style data-emotion="${key} ${ids.join(" ")}" nonce="${nonce}">${css}</style>`
//               )
//               .join("");
//             const scriptTags = getWebpackScriptTags(); // <script src="/main.js"> etc.
//         res.send(renderFullPage(html,stylesHTML,  scriptTags, preloadedState,nonce))          
//           },
//     });     
// }
// // ${getWebpackScriptTags()}
