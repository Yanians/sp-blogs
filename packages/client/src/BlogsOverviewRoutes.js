import * as React from 'react';
import { Navigate, useRoutes, useLocation, useParams } from 'react-router-dom';
// layouts
import BlogsOverview from './blog/components/BlogsOverview';
import Home from './components/Home';
import { tagInfo } from './blog/first.md?@mui/marking'
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Movies from './pages/Movies';
import Blog from './blog/first';
// import User from './pages/User';
// import NotFound from './pages/Page404';
//--------------------------

export default function Router() {
  const {blogsId} = useParams();
  const location = useLocation();
  return useRoutes([
    {
      path: '/',element: <Home />,
      children: [
        { path: 'blogs', element: <Blog />,
           children:[
             {path: 'overview', element:<BlogsOverview />}
           ]
        },
        // { path: 'user', element: <User /> },
        // { path: 'products', element: <Movies /> },
        // { path: 'blog', element: <Blog /> }
      ]
    },
    // {
    //   path: '/',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: 'login', element: <Login /> },
    //     { path: 'register', element: <Register /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '/', element: <Navigate to="/dashboard" /> },
    //     { path: '*', element: <Navigate to="/404" /> }
    //   ]
    // },
    // { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

