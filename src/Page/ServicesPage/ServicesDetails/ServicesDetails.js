import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
     const { title, _id, rating, details,
          price, available, Booked, thumbnail_url } = useLoaderData()

     return (
          <div className='m-5 grid md:grid-cols-2'>
               <div className=' border-x-4 rounded-md'>
                    <div>
                         <img src={thumbnail_url} alt="" />
                    </div>
                    <div className="card-body">
                         <div className=' bg-sky-400 p-5 rounded-md'>
                              <div className='flex  text-end items-center mb-3'>
                                   <h2 className="card-title text-2xl">{title}</h2>
                                   <p className='text-3xl font-semibold text-white'>{price}</p>
                              </div>
                              <div className="card-actions  justify-end flex items-center my-3">
                                   <p className='text-xl font-semibold'> Available : {available}</p>
                                   <p className='text-xl font-semibold'> Booked : {Booked}</p>
                                   <Link to={`/servicesdetails/${_id}`}>
                                        <button className="btn btn-primary">Book Now</button>
                                   </Link>
                              </div>
                         </div>
                         <div>
                              <p>{details}</p>
                         </div>
                    </div>
               </div>
               <div className='text-center '>
                    comment
               </div>
          </div>
     );
};

export default ServicesDetails;