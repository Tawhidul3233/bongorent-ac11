import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddServices from '../../Page/AddServices/AddServices';
import Blogs from '../../Page/Blogs/Blogs';
import Home from '../../Page/Home/Home/Home';
import Login from '../../Page/Login/Login';
import Register from '../../Page/Register/Register';
import AllServices from '../../Page/ServicesPage/AllServices/AllServices';
import PrivateRouts from '../PrivateRoute/PrivateRouts';


     const router = createBrowserRouter([
          {
               path:'/',
               element: <Main> </Main>,
               children: [
                    {
                         path:'/',
                         element: <Home> </Home>
                    },
                    {
                         path:'/login',
                         element: <Login> </Login>
                    },
                    {
                         path:'/register',
                         element: <Register> </Register>
                    },
                    {
                         path:'/blogs',
                         element: <Blogs></Blogs>
                    },
                    {
                         path:'services',
                         element: <AllServices> </AllServices>
                    },
                    {
                         path:'/addservices',
                         element: <PrivateRouts> <AddServices> </AddServices> </PrivateRouts>
                    }
               ]
          }
     ])


export default router;