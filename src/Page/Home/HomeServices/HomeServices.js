import { linkWithCredential } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';



const HomeServices = () => {

     const [services, setServices] = useState([])

     useEffect(() => {
          fetch('http://localhost:5000/services')
               .then(res => res.json())
               .then(data => setServices(data))
     }, [])


     return (
          <div className=''>
               <h1 className='text-center text-4xl font-semibold my-5'>My Service Area</h1>
               <div className='grid md:grid-cols-3 gap-5 '>
                    {
                         services.map(service => <Service
                              key={service._id}
                              service={service}
                         ></Service>)
                    }
               </div>
               <div className='text-center my-5'>
                    <Link to='/services'>
                         <button className="btn btn-primar mb-5 px-5">See all Services</button>
                    </Link>
               </div>
          </div>
     );
};

export default HomeServices;