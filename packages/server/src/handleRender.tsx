// NODEJS
import { Writable } from "stream"; //from nodejs 
import fs from 'fs';
import path from 'path';
import { Suspense } from "react";

import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express-serve-static-core";

import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";

// @EMOTION
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";

// MUI
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../client/src/redux/reducers/rootReducer";

//LOCAL
import theme from "./mui_lib/theme";
import App from "../../client/src/App";
import { renderFullPage } from "./render";
import createEmotionCache from "./mui_lib/createEmotionCache";


// Generates js file from bundle
function getWebpackScriptTags(): string {
    const webpackDir = path.resolve(__dirname, "../dist/webpack");
    if (!fs.existsSync(webpackDir)) return "";
  
    const files = fs.readdirSync(webpackDir);
    const jsFiles = files.filter(file => file.endsWith(".js"));

    return jsFiles.map(file => `<script src="/${file}" defer></script>`).join("\n");
  }

  export function HandleRender(req:Request, res:Response) {
    
  const preloadedState = {
    cart: {
      items: [{ id: 1, name: "Shoes", price: 50 }],
      totalPrice: 50,
    },
  };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  const nonce = Buffer.from(uuidv4()).toString("base64");
  const preloadedstate = store.getState(); // snapshot of Redux
  const emotionCache = createEmotionCache(); // ✅ Create a new cache per request
    const { 
      extractCriticalToChunks, 
      constructStyleTagsFromChunks 
    } = createEmotionServer(emotionCache);
    
    const jsx = (
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StaticRouter location={req.url} basename="/">
              <Suspense fallback={<div>Loading...</div>}>
                <App />
              </Suspense>  
            </StaticRouter>
          </ThemeProvider>
        </CacheProvider>
      </Provider>
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
            const fullHTML = renderFullPage( html, styleTags, scriptTags, preloadedstate);
            res.send(fullHTML);
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
