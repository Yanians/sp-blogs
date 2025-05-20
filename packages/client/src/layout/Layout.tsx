
import * as React from 'react';
import { useParams, useLocation,} from 'react-router-dom';
import Footer  from './Footer';
import Root from './Root';
import Header from './Header';
import Home from '../components/Home';
import GettingStarted from '../blog/components/GettingStarted';
import MainRoute from "../routes/MainRoute";
import Page404 from "../components/Page404";
import BlogWithCards from '../blog/components/BlogWithCards';
import { Routes, Route, } from 'react-router-dom';
import  BlogsOverview  from '../blog/components/BlogsOverview';
import EdgeSideBar from './EdgeSidebar';
import Content from './Content';
import BlogDetail from '../components/BlogDetails';
import Dashboard from '../components/dashboard/Dashboard';
import Profile from '../blog/components/pages/ProfilePage';
import PhotographyImage from '../components/PhotographyGrid';
export default function Layout({ sSrData }: { sSrData: any[],}) {
  const location = useLocation();
  const { title, name, } = useParams();

  console.log(name);

  return (
            <Root>
                {/* Sticky Header */}
              <Header sSrData={sSrData}/>       
                {/* Edge Sidebar */}
                <EdgeSideBar sSrData={sSrData}/>
                  {/* Main Content */}
                     <Content sSrData={sSrData}>
                       <Routes>
                         <Route index path="/" element={<MainRoute />} />
                         <Route path="home" element={<Home />} />
                         <Route path="photography" element={<PhotographyImage sSrData={sSrData} />} />
                         <Route path="blog-card" element={<BlogWithCards posts={sSrData} />} />
                         {/* <Route path="management" element={<Dashboard />} /> */}
                             <Route path="blogs" element={<GettingStarted sSrData={sSrData} />}>
                                  <Route path=":blogsId" element={<BlogsOverview sSrData={sSrData} />}>
                                    <Route path=":name/:profile" element={<Profile sSrData={sSrData} />} />
                                  </Route>  
                               <Route path=":title/:searchId" element={<BlogDetail sSrData={sSrData} />} />  
                             </Route>
                         <Route path="*" element={<Page404 />} />
                       </Routes>   
                     </Content> 
                {/* Footer */}
                <Footer />
            </Root>
  );
};
