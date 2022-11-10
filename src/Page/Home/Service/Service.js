import React from 'react';
import { FaForward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
     const { title, _id, rating, details, price, available, Booked, thumbnail_url } = service
     const {} =rating

     return (
          <div className='my-5'>
               <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={thumbnail_url} alt="Shoes" /></figure>
                    <div className="card-body">
                         <div className='flex text-end items-center mb-3'>
                              <h2 className="card-title">{title}</h2>
                              <p className='text-2xl font-semibold text-blue-500'>{price}</p>
                         </div>
                         <p>{details.slice(0, 100)}...</p>
                         <div className="card-actions justify-end flex items-center my-3">
                              <p className=''> Available : {available}</p>
                              <p className=''> Booked : {Booked}</p>
                              <Link to="/servicesdetails">
                                   <button className="btn btn-primary">View Details <FaForward className='ml-2'> </FaForward> </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Service;