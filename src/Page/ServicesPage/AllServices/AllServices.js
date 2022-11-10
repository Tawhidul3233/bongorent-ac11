import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import ServicesCart from '../ServicesCart/ServicesCart';


const AllServices = () => {
     const {loading , setLoading} = useContext(AuthContext)
     const [allServices, setAllServices] = useState([]);
      
     // useing  useEffect to loade data from api
     useEffect(()=>{
          fetch('http://localhost:5000/allservices')
          .then(res => res.json())
          .then(data => setAllServices(data))
     },[])

     
     if(loading){
          return <div className='text-center my-60'><button className="btn loading ">loading</button></div>
     }

     // map allservices to send data servicescart useing params
     return (
          <div className='grid md:grid-cols-3'>
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