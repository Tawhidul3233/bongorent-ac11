import React from 'react';
import { FaThumbsUp, FaCalendarDay, FaMagnet, FaCar } from 'react-icons/fa';

// extra section add siteStatus and customer statistics
const SiteStatus = () => {
     return (
          <div className='my-5 '>
               <h1 className='text-center my-5 text-4xl font-semibold'>My Services Status</h1>
               <div className='grid md:grid-cols-4 gap-2'>
                    <div className='  border-4 text-center p-5 rounded-md border-x-indigo-500 border-b-orange-400 border-st'>
                         <FaThumbsUp className='mx-auto ' style={{ width: '80px', height: '80px', color: 'blue' }} ></FaThumbsUp>
                         <p className='text-4xl font-semibold my-4'>100%</p>
                         <p className='text-xl font-semibold'>Satisfaction Guaranteed</p>
                    </div>
                    <div className=' border-4 text-center p-5 rounded-md border-x-indigo-500 border-b-orange-400'>
                         <FaCalendarDay className='mx-auto ' style={{ width: '80px', height: '80px', color: 'blue' }} ></FaCalendarDay>
                         <p className='text-4xl font-semibold my-4'>10</p>
                         <p className='text-xl font-semibold'>Years on Market</p>
                    </div>
                    <div className='  border-4 text-center p-5 rounded-md border-x-indigo-500 border-b-orange-400'>
                         <FaMagnet className='mx-auto ' style={{ width: '80px', height: '80px', color: 'blue' }} ></FaMagnet>
                         <p className='text-4xl font-semibold my-4'>57980</p>
                         <p className='text-xl font-semibold'>Happy Customers</p>
                    </div>
                    <div className=' border-4 text-center p-5 rounded-md border-x-indigo-500 border-b-orange-400'>
                         <FaCar className='mx-auto ' style={{ width: '80px', height: '80px', color: 'blue' }} ></FaCar>
                         <p className='text-4xl font-semibold my-4'>174244</p>
                         <p className='text-xl font-semibold'>Total servics Provided</p>
                    </div>

               </div>

          </div>
     );
};

export default SiteStatus;