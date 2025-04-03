import * as React from "react";
import { renderToString } from "react-dom/server";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express-serve-static-core";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

/**  MUI */
import theme from "./mui_lib/theme";
import createEmotionServer from "@emotion/server/create-instance";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "./mui_lib/createEmotionCache";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../client/src/redux/reducers/rootReducer";
import App from "../../client/src/App";

export function renderFullPage(markup:string, emotionCss: string, scriptTags:string, preloadedState: any) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
     <meta charset="UTF-8" />
        <title>React Router v7 SSR</title>
         ${emotionCss}
     <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")};
      </script>
    ${scriptTags}
  </body>
</html>`;
}

function ServerRender(req: Request, res: Response) {
  const cache = createEmotionCache(); // ✅ Create a new cache per request
  const { extractCriticalToChunks } = createEmotionServer(cache);
  // const nonce = Buffer.from(uuidv4()).toString("base64");

  // ✅ Preloaded Redux state
  const preloadedState = {
    cart: {
      items: [{ id: 1, name: "Shoes", price: 50 }],
      totalPrice: 50,
    },
  };

  // ✅ Create a Redux store instance
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  // ✅ Render the component to a string
  const html = renderToString(
           <Provider store={store}>
              <CacheProvider value={cache}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                    <StaticRouter location={req.url} basename="app">
                      <App />
                    </StaticRouter>
                </ThemeProvider>   
              </CacheProvider>   
           </Provider>    
         );
  // ✅ Extract styles from Emotion
  const { styles } = extractCriticalToChunks(html);
  const stylesHTML = styles
    .map(
      ({ key, ids, css }) =>
        `<style data-emotion="${key} ${ids.join(" ")}" nonce="${undefined}">${css}</style>`
    )
    .join("");

  // ✅ Return the rendered content
  return {
    markup: html,
    stylesHTML,
    preloadedstate: store.getState(),
  };
}

export default ServerRender;
