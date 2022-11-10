import React, { useEffect, useState } from 'react';
import ServicesCart from '../ServicesCart/ServicesCart';


const AllServices = () => {

     const [allServices, setAllServices] = useState([]);
      
     useEffect(()=>{
          fetch('http://localhost:5000/allservices')
          .then(res => res.json())
          .then(data => setAllServices(data))
     },[])

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