//@ts-nocheck
import * as React from "react";
import { Routes, Route, } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './components/Home';
import GettingStarted from './blog/components/GettingStarted';
import BlogDetail from './blog/components/BlogDetails';
import MainRoute from "./routes/MainRoute";
import Page404 from "./components/Page404";
import { Routes, Route, } from 'react-router-dom';
import  BlogsOverview  from './blog/components/BlogsOverview';

const App = () => {
    return (
            <React.Fragment>
              <Routes>
                  <Route index path="/" element={<MainRoute />} />
                  <Route path="home" element={<Home />} />
                  <Route path="blogs" element={<GettingStarted />}>
                     <Route path=":blogsId" element={<BlogsOverview  />} />
                     <Route path=":title/:searchId" element={<BlogDetail />} />  
                  </Route>
                  
                  {/* {generateRoutes(fileToSearch)} */}
                  <Route path="*" element={<Page404 />} />
               </Routes>
            </React.Fragment>   
      );
};

export default App;
