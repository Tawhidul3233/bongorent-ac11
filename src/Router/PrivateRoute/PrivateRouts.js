import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


// Private router If any person not login . Than this route send your login page
const PrivateRouts = ({children}) => {
     
     const {user, loading } = useContext(AuthContext)
     const location = useLocation()

     if(loading){
          return <div className='text-center my-64'><button className="btn loading ">loading</button></div>
     }
     if(!user){
          return <Navigate to='/login' state={{from: location}} replace></Navigate>
     }
     return children;
};

export default PrivateRouts;