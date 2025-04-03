
import * as React from "react";
import { Routes, Route, useLocation, useParams } from 'react-router-dom';
import Blog from './blog/post_one.mjs';
// import MarkdownRenderer from '../../extractorfile/markdownRenderer';
const Layout = React.lazy(() => import('./layout'));
const MainRoute = React.lazy(() => import('@routes/MainRoute'));
import Content from "./layout/Content";
const App = () => {
   
    return (
         <>
           <Layout>
               <div>
                  {/* <Blog /> */}
                  
               </div>
              <Routes>
                 <Route index path="/" element={<MainRoute />} />
                 <Route path="getting-started/blogs" element={<Blog />} />
               </Routes>
           </Layout>
         </>  
      );
};

export default App;
