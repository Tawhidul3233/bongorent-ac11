import { fromJSON } from 'postcss';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../HookTitle/useTitle';



const AddServices = () => {
     useTitle('AddServices')
     const serviceSubmitHandler = (event) => {
          event.preventDefault()
          const form = event.target;
          const title = form.title.value;
          const price = form.price.value;
          const Booked = form.Booked.value;
          const available = form.available.value;
          const thumbnail_url = form.thumbnail_url.value;
          const email = form.email.value;
          const details = form.details.value;

          // make a object 
          const services={
               title,
               price,
               Booked,
               available,
               thumbnail_url,
               email,
               details,
          }
          // send object to mongodb database
          fetch('http://localhost:5000/allservices',{
               method: 'POST',
               headers:{
                    'content-type':"application/json"
               },
               body: JSON.stringify(services)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               // added toast if user successfully submit his services then notify this toast
               toast.success('Service add successfylly Go all services option and check')
               form.reset()
          })
          .catch(err => console.log(err))

     }


     return (
          <div className='m-5'>
               <h1 className='my-5 text-3xl font-semibold'> Create New Services</h1>
               <form onSubmit={serviceSubmitHandler} className='grid  gap-4' action="">
                    <d className='grid gap-4 md:grid-cols-2'>
                         <input className=' border-2 p-2' name='title' type="text" placeholder='Services Name' required />

                         <input className=' border-2 p-2' name='price' type="text" placeholder='Price$'  required />

                         <input className=' border-2 p-2' name='Booked' type="text" placeholder='Booked' />

                         <input className=' border-2 p-2' name='available' type="text" placeholder='Available' />

                         <input className=' border-2 p-2' name='thumbnail_url' type="text" placeholder='Thumbnail_url' />

                         <input className=' border-2 p-2' name='email' type="text" placeholder='Email' required />

                    </d>
                    <textarea className='border-2 p-4' name="details" id="" cols="30" rows="10" placeholder='Details'></textarea>
                    <div className='text-center'>
                         <div className="form-control my-6">
                              <button className="btn btn-primary">Add your new services</button>
                         </div>
                    </div>
               </form>

          </div>
     );
};

export default AddServices;