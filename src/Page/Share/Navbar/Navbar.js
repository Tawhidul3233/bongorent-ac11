import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {

     const { logOutAccount, user } = useContext(AuthContext);

     const logOutHandler = () => {
          logOutAccount()
               .then(result => {
                    toast.success("logOut successfully")
               })
               .catch(error => console.log(error))
     }

     const menuItem = <>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/blogs">Blogs</Link> </li>
          {
               user?.uid ? <>
                    <li> <Link onClick={logOutHandler} to="">LogOut</Link> </li>
                    <li> <Link to="/myservices">My services</Link> </li>
                    <li> <Link to="/myreviews">My Reviews</Link> </li>
               </> :
                    <>
                         <li> <Link to="/login">Login</Link> </li>
                         <li> <Link to="/register">Register</Link> </li>
                    </>
          }


     </>

     return (
          <div>
               <div className="navbar h-20  bg-base-300">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                   {menuItem}
                              </ul>
                         </div>
                         <div className='flex'>
                              <img style={{ width: '60px' }} alt='' src="https://i.ibb.co/4Mfnn4d/favicon.png" />
                              <a href="/" className="btn btn-ghost normal-case text-xl">BongoRent</a>
                         </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal p-0">
                              {menuItem}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <a href="/" className="btn">Get started</a>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;