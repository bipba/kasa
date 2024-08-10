import React, { Children } from 'react'
import {createBrowserRouter,Outlet} from "react-router-dom";
import Navbar from '../Layouts/header/Navbar';
import App from '../pages/App';
import Footer from '../Layouts/footer/Footer';
import Main from '../Layouts/container/Main';
import LocationPage from '../pages/LocationPage';
import Apropos from '../pages/Apropos';
import Error404 from '../pages/Error404';


const LayoutHeaderFooter = () => {
  return(
  <>
  
    <Navbar/>
    <Main>
      <Outlet/>
    </Main>
    <Footer/>
  </>
  );
};

export const router = createBrowserRouter ([//installation du router
  {
   
    element:<LayoutHeaderFooter />,

     children: [
      {
        path:"/",
        element:<App/>

      },
      {
        path:"/locat",
        element:<LocationPage />
      },
      {
      path:"/aPropos",
      element: <Apropos/>
    }
    ,
    {
      path:"*",
      element: <Error404/>
    }
     ],
  },
 
 ])
