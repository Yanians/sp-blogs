
import * as React from 'react';
import { useParams, useLocation,} from 'react-router-dom';
import Footer  from './Footer';
import Root from './Root';
import Header from './Header';
import Home from '../components/Home';
import GettingStarted from '../blog/components/GettingStarted';
import MainRoute from "../routes/MainRoute";
import Page404 from "../components/Page404";
import CarouselSlick from '../blog/components/CarouselSlick';
import { Routes, Route, } from 'react-router-dom';
import  BlogsOverview  from '../blog/components/BlogsOverview';
import Authentication from '../redirect';
import EdgeSideBar from './EdgeSidebar';
import Content from './Content';

import { styled  } from "@mui/material/styles";

import BlogDetail from '../blog/components/BlogDetails';
import Profile from '../blog/components/pages/ProfilePage';
import Registration from '../authentication/Register';
import PhotographyImage from '../components/PhotographyGrid';

const AuthenticationWrapper = styled('div')(({theme})=>({
   '& .body, .html ':{
      margin: 0,
    padding: 0,
    height: '100%',
   },

   '& .registration-container':{
    display: 'table',
    width: '50%',
    margin: '0 auto',
    height: '100vh',
    }, 
  '& .registration-content': {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  }
}))

export default function Layout({ sSrData }: { sSrData: any[],}) {
const location = useLocation();
   
   if(location.pathname.includes('/authentication')){
      return(
        <AuthenticationWrapper>
         <div className="html">
           <div  className="body">
              <div className="registration-container">
                  <div className="registration-content">
                    <Routes>
                      <Route path="authentication" element={<Registration />} />
                    </Routes>
                  </div>
              </div>
           </div>
         </div> 
        </AuthenticationWrapper>
      )
   }

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
                         <Route path="/redirecting" element={<Authentication />} />
                         <Route path="photography" element={<PhotographyImage sSrData={sSrData} />} />
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
