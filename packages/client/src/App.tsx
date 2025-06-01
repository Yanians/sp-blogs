
import * as React from "react";
import ClientOnly from "./clientOnly";
import Box from '@mui/material/Box';
import Layout from './layout/Layout';
import ThemeConfig from "./utils";
import LoaderCss from "./components/Loader";
import { AuthProvider, } from './AuthContext';
const sx = { minWidth: { sm: 160 } };
const App=({sSrData, nonce}:{sSrData:any, nonce:any}) => {
   return (
          <ClientOnly>
            <AuthProvider>
               <React.Suspense fallback={<LoaderCss />}>
                  <ThemeConfig nonce={nonce}>
                     <Layout sSrData={sSrData} />
                  </ThemeConfig>
               </React.Suspense>  
            </AuthProvider>
          </ClientOnly>
       );
}
   export default App;
