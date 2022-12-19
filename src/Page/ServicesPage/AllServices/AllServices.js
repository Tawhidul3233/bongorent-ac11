import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ServicesCart from '../ServicesCart/ServicesCart';


const AllServices = () => {
     const {loading , setLoading} = useContext(AuthContext)
     const [allServices, setAllServices] = useState([]);
      
     // useing  useEffect to loade data from api
     useEffect(()=>{
          fetch('https://bongorent-server.vercel.app/allservices')
          .then(res => res.json())
          .then(data => setAllServices(data))
     },[])

     
     if(loading){
          return <div className='text-center my-60'><button className="btn loading ">loading</button></div>
     }

     // map allservices to send data servicescart useing params
     return (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-3'>
               {
                    allServices.map(service => <ServicesCart
                    key={service._id}
                    service={service}
                    ></ServicesCart>)
               }
          </div>
     );
};

export default AllServices;