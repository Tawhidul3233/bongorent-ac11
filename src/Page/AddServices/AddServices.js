import React from 'react';

const AddServices = () => {


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
          console.log(title, price, Booked, available, thumbnail_url, details, email)
     }


     return (
          <div className='m-5'>
               <h1 className='my-5 text-3xl font-semibold'> Create New Services</h1>
               <form onSubmit={serviceSubmitHandler} className='grid  gap-4' action="">
                    <d className='grid gap-4 md:grid-cols-2'>
                         <input className=' border-2 p-2' name='title' type="text" placeholder='Services Name' />

                         <input className=' border-2 p-2' name='price' type="text" placeholder='Price$' />

                         <input className=' border-2 p-2' name='Booked' type="text" placeholder='Booked' />

                         <input className=' border-2 p-2' name='available' type="text" placeholder='Available' />

                         <input className=' border-2 p-2' name='thumbnail_url' type="text" placeholder='Thumbnail_url' />

                         <input className=' border-2 p-2' name='email' type="text" placeholder='Email' />

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