import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Page/Home/Banner/Banner';
import Footer from '../Page/Share/Footer/Footer';
import Navbar from '../Page/Share/Navbar/Navbar';


// add section on Home page
const Main = () => {
     return (
          <div>
               <Navbar> </Navbar>
               <Outlet> </Outlet>
               <Footer> </Footer>
          </div>
     );
};

export default Main;