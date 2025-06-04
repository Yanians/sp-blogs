"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderFullPage = renderFullPage;
// import App from "../../client/src/App";
function renderFullPage(markup, emotionCss, scriptTags, allBlogPost) {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
     <meta charset="UTF-8" />
     <meta http-equiv="Cache-Control" content="no-store" />
     <meta http-equiv="Pragma" content="no-cache" />
        <title>SP-BLOGS 2025 SSR MANUAL</title>
         ${emotionCss}
     <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />   
  </head>
  <body>
    <div id="root">${markup}</div>  
      <script>
        /**
         * 
         * WARNING: See Redux SSR security recommendations:
         * https://redux.js.org/usage/server-rendering#security-considerations
         * 
         **/ 
            window.__PRELOADED_STATE__ = ${JSON.stringify(allBlogPost).replace(/</g, "\\u003c")};
      </script>
    ${scriptTags}
  </body>
</html>`;
}
// function ServerRender(req: Request, res: Response) {
//   const cache = createEmotionCache(); // ✅ Create a new cache per request
//   const { extractCriticalToChunks } = createEmotionServer(cache);
//   const nonce = Buffer.from(uuidv4()).toString("base64");
//   // ✅ Preloaded Redux state
//   const preloadedState = {
//     cart: {
//       items: [{ id: 1, name: "Shoes", price: 50 }],
//       totalPrice: 50,
//     },
//   };
//   // ✅ Create a Redux store instance
//   const store = configureStore({
//     reducer: rootReducer,
//     preloadedState,
//   });
//   // ✅ Render the component to a string
//   const html = renderToString(
//            <Provider store={store}>
//                 <ThemeConfig nonce={nonce}>
//                     <StaticRouter location={req.url}>
//                          <App />
//                     </StaticRouter>
//                 </ThemeConfig>   
//            </Provider>    
//          );
//   // ✅ Extract styles from Emotion
//   const { styles } = extractCriticalToChunks(html);
//   let stylesHTML = '';
//   styles
//     .map(
//       ({ key, ids, css }) => {
//         const emotionKey = `${key} ${ids.join(" ")}`;
//         const nesStyleTag = `<style data-emotion="${emotionKey} nonce="${nonce}">${css}</style>`;
//         stylesHTML = `${stylesHTML}${nesStyleTag}`;
//       }    
//     )
//   // ✅ Return the rendered content
//   return {
//     markup:html,
//     stylesHTML,
//     preloadedstate: store.getState(),
//   };
// }
// export default ServerRender;
