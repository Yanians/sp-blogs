
import * as React from "react";
import ClientOnly from "./clientOnly";
import Box from '@mui/material/Box';
import Layout from './layout/Layout';
import ThemeConfig from "./utils";
import LoaderCss from "./components/Loader";
const sx = { minWidth: { sm: 160 } };
const App=({sSrData, nonce}:{sSrData:any, nonce:any}) => {
   return (
          <ClientOnly>
            <React.Suspense fallback={<LoaderCss />}>
               <ThemeConfig nonce={nonce}>
                  <Layout sSrData={sSrData} />
               </ThemeConfig>
            </React.Suspense>  
          </ClientOnly>
       );
}
   export default App;
