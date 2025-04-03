// App.tsx
import * as React from 'react';

import Footer  from './Footer';
import Root from './Root';
import Header from './Header';

import InsetSideBar from './InsetSidebar';
import EdgeSideBar from './EdgeSidebar';
import Content from './Content';

export default function Layout({children}:{children:React.ReactNode}){
  return (
            <Root>
              {/* Sticky Header */}
                <Header />       
              {/* Edge Sidebar */}
                <EdgeSideBar />
              {/* Inset Sidebar (optional right) */}
                    {/* <InsetSideBar /> */}
              {/* Main Content */}
                   <Content>
                      {children}
                    </Content> 
              {/* Footer */}
                  <Footer />
            </Root>
  );
};
