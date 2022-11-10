import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const ServicesDetails = () => {

     const { user } = useContext(AuthContext)

     const [comment, setComment] =useState()

     const { title, _id, rating, details,
          price, available, Booked, thumbnail_url } = useLoaderData()


          const commentHandler = (event)=>{
               event.preventDefault()
               const form = event.target;
               const email = form.email.value;
               const comments = form.comment.value;
               const name = form.name.value;
               const photo = form.photo.vlaue;

               const comment ={
                    name,
                    email,
                    photo,
                    comments
               }
               fetch('http://localhost:5000/comments', {
                    method: "POST",
                    headers:{
                         'content-type':'application/json'
                    },
                    body: JSON.stringify(comment)
               })
               .then(res => res.json())
               .then(data => {
                    toast.success("comment added")
               })
               .catch(err => console.error(err))
          }

          useEffect(()=>{
               fetch('http://localhost:5000/comments')
               .then(res => res.json())
               .then(data => setComment(data))
               .catch(err => console.log(err))
          },[])

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
               <div className='text-center md:ml-5'>
          
                    {
                         user?.uid ?
                              <form onSubmit={commentHandler} className='grid  gap-4' action="">
                                   <div className='grid gap-4 md:grid-cols-2 text-center'>

                                        <input className=' border-2 p-2' name='name' type="text" placeholder='name'  />
                                        <input className=' border-2 p-2' name='email' type="text" placeholder='Email' defaultValue={user?.email} />

                                   </div>
                                   <input className=' border-2 p-2' name='photo' type="text" placeholder='photo url'  />
                                   <textarea className='border-2 p-4' name="comment" id="" cols="30" rows="10" placeholder='Comment'></textarea>
                                   <div className='text-center'>
                                        <div className="form-control my-6">
                                             <button className="btn btn-primary">Add your comment</button>
                                        </div>
                                   </div>
                              </form> :
                              <div className='text-center'>
                                   <div className="form-control my-6">
                                        <Link className='' to='/login'>
                                             <button className="btn btn-primary">Login and add Comment</button>
                                        </Link>
                                   </div>
                              </div>
                    }
               </div>
               <div>
                    {
                         comment.map(com => <div key={com._id}>
                              
                         </div>)
                    }
               </div>
          </div>
     );
};

export default ServicesDetails;