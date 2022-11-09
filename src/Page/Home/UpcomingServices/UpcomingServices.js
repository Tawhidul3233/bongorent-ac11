import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const UpcomingServices = () => {
     return (
          <div>
               <h2 className='text-center text-4xl font-semibold my-5'>Display upcoming Services</h2>
               <p className='mx-auto text-center w-3/5'> We will start Biman Service and Launch Service . You Want to Know Dhaka to Barishal Launch Ticket Price or Dhaka to Barishal Launch Schedule? Yes! you get all information about Barishal to Dhaka launch schedule in this post.</p>
               <div className='grid md:grid-cols-2 gap-5 m-5'>
                    <div className=' border-2 rounded-md'>
                         <PhotoProvider>
                              <PhotoView src='https://i.ibb.co/Tr6mNkV/biman.jpg'>
                                   <img src="https://i.ibb.co/Tr6mNkV/biman.jpg" alt="" />
                              </PhotoView>
                         </PhotoProvider>
                         {/* <PhotoView>
                              <img src="https://i.ibb.co/QHLm1cJ/lonce.jpg" alt="" />
                         </PhotoView> */}
                         <div className='p-5'>
                              <h3 className='text-3xl font-semibold'>Biman Service </h3>
                              <p className=''>Biman serves over 5 domestic and more than 15 international destinations across several countries in the Middle East, some destinations in South and South East Asia and in Europe. However, it has air service agreements with 43 countries in the future. Biman has been the only Bangladeshi airline allowed by the government to offer.</p>
                              <button className="btn btn-primary  my-4 ">Book your space Early</button>
                         </div>

                    </div>
                    <div className=' border-2 rounded-md'>
                         <PhotoProvider>
                              <PhotoView src='https://i.ibb.co/QHLm1cJ/lonce.jpg'>
                                   <img src="https://i.ibb.co/QHLm1cJ/lonce.jpg" alt="" />
                              </PhotoView>
                         </PhotoProvider>
                         <div className='p-5'>
                              <h3 className='text-3xl font-semibold'>Launch Service </h3>
                              <p className=''> One of the most popular ways to go south is bypassed by waterways. Launch can be a very nice way to go from Dhaka to Barisal or other areas nearby.Cheaper than landline, it is also very comfortable to spend a little more. Large launches are very comfortable. Thunderstorms due to huge size or too safe at any time.</p>
                              <button className="btn btn-primary  my-4 ">Book your space Early</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UpcomingServices;