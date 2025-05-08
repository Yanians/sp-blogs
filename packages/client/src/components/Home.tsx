
import * as React from 'react';
import { useLocation, Outlet, useParams } from 'react-router-dom';
// import { getAllBlogPost } from 'getAllBlogPost?@marking';
export default function Home(){
      const location = useLocation();
      const { blogsId } = useParams();
      console.log('from Homepage=========',blogsId)
      const { pathname } = location;
            return (
                  <div>Home Page with SSR rendering</div>
            )
     
};

