import React from 'react';
import { FaThumbsUp, FaCalendarDay, FaMagnet, FaCar } from 'react-icons/fa';
import CountUp from 'react-countup';
import { screen } from '@testing-library/react';

// extra section add siteStatus and customer statistics
const SiteStatus = () => {

     return (
          <div className='my-5 mx-3 '>
               <h1 className=' ml-3 my-5 text-2xl font-semibold'>My Services Status</h1>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
                    <div className='  border-4 text-center p-2 rounded-md '>

                         <img className=' w-48 mx-auto' src="https://i.ibb.co/ggfbdzR/image-removebg-preview.png" alt="" />

                         <p className='text-4xl font-semibold my-2'>
                              <CountUp end={100} />%
                         </p>
                         <p className='text-xl font-semibold'>Satisfaction Guaranteed</p>
                    </div>
                    <div className=' border-4 text-center p-2 rounded-md  '>
                        
                         <img className=' w-40 mx-auto' src="https://i.ibb.co/NSv2FGB/image-removebg-preview-1.png" alt="" />

                         <p className='text-4xl font-semibold my-2'>
                              <CountUp end={10} />
                         </p>
                         <p className='text-xl font-semibold'>Years on Market</p>
                    </div>
                    <div className='  border-4 text-center p-2 rounded-md  '>
                         
                         <img className=' w-32 mx-auto' src="https://i.ibb.co/kHKqYWn/image-removebg-preview-2.png" alt="" />

                         <p className='text-4xl font-semibold my-2'>
                              <CountUp end={51402} />
                         </p>
                         <p className='text-xl font-semibold'>Happy Customers</p>
                    </div>
                    <div className=' border-4 text-center p-2 rounded-md  '>
                         
                         <img className=' w-52 mx-auto' src="https://i.ibb.co/4jS2B8P/image-removebg-preview-3.png" alt="" />

                         <p className='text-4xl font-semibold my-2'>
                              <CountUp end={173149} />
                         </p>
                         <p className='text-xl font-semibold'>Total servics Provided</p>
                    </div>

               </div>

          </div>
     );
};

export default SiteStatus;