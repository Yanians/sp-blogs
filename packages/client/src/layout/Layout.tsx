
import * as React from 'react';
import Footer  from './Footer';
import Root from './Root';
import Header from './Header';
import Home from '../components/Home';
import GettingStarted from '../blog/components/GettingStarted';
import MainRoute from "../routes/MainRoute";
import Page404 from "../components/Page404";
import { Routes, Route, } from 'react-router-dom';
import  BlogsOverview  from '../blog/components/BlogsOverview';
import EdgeSideBar from './EdgeSidebar';
import Content from './Content';
import { useParams } from 'react-router-dom';
import BlogDetail from '../components/BlogDetails';
import ThemeToggleButton from '../components/toggleComponent/toggleModeButton';

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function ThemeToggleTest() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const handleChangeMode = () => {
    console.log('Button clicked');
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ padding: 20 }}>
      <IconButton onClick={handleChangeMode}>
        {mode === 'dark' ? (
          <LightModeIcon color="warning" />
        ) : (
          <DarkModeIcon color="warning" />
        )}
      </IconButton>
    </div>
  );
}


export default function Layout({ sSrData }: { sSrData: any[],}) {
   const { title } = useParams();
   const [mode, setMode ] = React.useState(false);
   console.log('What wvalue is this ?::::::::::::',title);

   const handleChangeMode=()=>{
    setMode((prev=>!prev))
    console.log('fired it!')
   }
console.log('from news:::::::::: ',mode)
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
                        <Route path="news" element={<ThemeToggleButton handleChangeMode={handleChangeMode} mode={mode} />} />
                            <Route path="blogs" element={<GettingStarted sSrData={sSrData} />}>
                              <Route path=":blogsId" element={<BlogsOverview sSrData={sSrData} />} />
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
