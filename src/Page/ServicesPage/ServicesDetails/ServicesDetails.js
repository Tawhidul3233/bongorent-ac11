import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const ServicesDetails = () => {

     const { user } = useContext(AuthContext)

     const [comment, setComment] = useState([])

     const { title, _id, rating, details,
          price, available, Booked, thumbnail_url } = useLoaderData()


     const commentHandler = (event) => {
          event.preventDefault()
          const form = event.target;
          const comments = form.comment.value;

          const comment = {
               name: user?.displayName,
               email: user?.email,
               photo: user?.photoURL,
               comments,
               id: _id
          }

          fetch('https://bongorent-server.vercel.app/comments', {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(comment)
          })
               .then(res => res.json())
               .then(data => {
                    toast.success("comment added")
                    form.reset()
                    console.log(data)
               })
               .catch(err => console.error(err))
     }

     useEffect(() => {
          fetch('https://bongorent-server.vercel.app/comments')
               .then(res => res.json())
               .then(data => setComment(data))
               .catch(err => console.log(err))
     }, [])

     return (
          <div className='md:m-5 grid md:grid-cols-2'>
               <div className=' border-x-4 rounded-md'>
                    <div>
                         <img src={thumbnail_url} alt="" />
                    </div>
                    <div className="">
                         <div className=' bg-sky-400 p-5 sm:flex justify-between items-center '>
                              <div >
                                   <div className='flex text-end items-center mb-3'>
                                        <h2 className="card-title text-lg">{title}: </h2>
                                        <p className='text-xl ml-2 font-semibold text-white'>{price}</p>
                                   </div>
                                   <div className="card-actions  ">
                                        <p className='text-lg font-semibold'> Available : {available}</p>
                                        <p className='text-lg font-semibold'> Booked : {Booked}</p>
                                   </div>
                              </div>
                              <div className='mt-3'>
                                   <Link to={`/servicesdetails/${_id}`}>
                                        <button className="btn btn-sm md:btn-md btn-primary">Book Now</button>
                                   </Link>
                              </div>
                         </div>
                         <div>
                              <p className='p-3'>{details}</p>
                         </div>
                    </div>
               </div>
               <div className='text-center md:ml-5'>

                    {
                         user?.uid ?
                              <form onSubmit={commentHandler} className='grid  gap-4' action="">
                                   

                                   <textarea className='border-2 p-4 mt-5 md:mt-0 mx-2 md:mx-0' name="comment" id="" cols="30" rows="10" placeholder='Comment'></textarea>
                                   <div className='text-center'>
                                        <div className="form-control my-6">
                                             <button className="btn btn-primary mx-2 md:mx-0">Add your comment</button>
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
                    <div>

                         {
                              comment.map(com => <div key={com._id}
                                   className="m-5"
                              >
                                   {
                                        com?.id === _id &&
                                        <div>
                                             <div className='flex'>
                                                  {
                                                       com?.photo ?
                                                            <div style={{ width: '50px' }}>

                                                                 <img className=' rounded-full' src={com?.photo} alt="" />

                                                            </div> :
                                                            <div style={{ width: '50px' }}>

                                                                 <img src='https://i.ibb.co/GC5Zm7T/image-removebg-preview-4.png' alt="" />

                                                            </div>
                                                  }
                                                  <div className='ml-3'>
                                                       <h1 className='text-lg font-semibold text-left'>{com?.name}</h1>
                                                       <h1 className=' text-xs'>{com?.email}</h1>
                                                  </div>
                                             </div>
                                             <div className=' text-left'>
                                                  Comment: {com?.comments}
                                             </div>
                                        </div>
                                   }
                              </div>)
                         }
                    </div>
               </div>

          </div>
     );
};

export default ServicesDetails;