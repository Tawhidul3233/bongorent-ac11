import React, { useContext } from 'react';
import { FaForward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import useTitle from '../../../HookTitle/useTitle';


// services cart design and daynamical contant display
const ServicesCart = ({ service }) => {
     useTitle('Services')
     const { title, _id, rating, details, price, available, Booked, thumbnail_url } = service

     return (
          <div className='my-3 '>
               <div className="card border ">
                    <figure>
                         <PhotoProvider>
                              <PhotoView src={thumbnail_url}>
                                   <img src={thumbnail_url} alt="" />
                              </PhotoView>
                         </PhotoProvider>
                    </figure>
                    <div className="card-body">
                         <div className='flex text-end items-center mb-3'>
                              <h2 className="card-title">{title}</h2>
                              <p className='text-2xl font-semibold text-blue-500'>{price}</p>
                         </div>
                         <p>{details.slice(0, 100)}...</p>
                         <div className="card-actions justify-end flex items-center my-3">
                              <p className=''> Available : {available}</p>
                              <p className=''> Booked : {Booked}</p>

                         </div>
                         <div className='mx-auto'>
                              <Link to={`/servicesdetails/${_id}`}>
                                   <button className="btn btn-sm btn-primary">View Details <FaForward className='ml-2'> </FaForward> </button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ServicesCart;