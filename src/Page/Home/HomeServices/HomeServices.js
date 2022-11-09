import { linkWithCredential } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const HomeServices = () => {

     const [services, setServices] = useState([])

     useEffect(() => {
          fetch('http://localhost:5000/services')
               .then(res => res.json())
               .then(data => setServices(data))
     }, [])


     return (
          <div>
               <h1 className='text-center text-4xl font-semibold my-5'>My Service Area</h1>
               <div>
                    {
                         services.map(service => <Service
                         key={service._id}
                         service={service}
                         ></Service>)
                    }
               </div>
          </div>
     );
};

export default HomeServices;