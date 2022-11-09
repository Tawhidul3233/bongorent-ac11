import React from 'react';
import './Banner.css'

const Banner = () => {
     return (
          <div>
               <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                         <div className='img-gradient'>
                              <img alt='' src="https://i.ibb.co/TqbYy34/img2.jpg" className="w-full" />
                         </div>
                         <div className="absolute text-center w-4/5 md:w-2/5 md:text-right md:right-24  right-5   transform -translate-y-1/2   top-1/4">
                              <h1 className='text-3xl font-bold text-white'>
                                   Lowest cost car rent where you<br /> want when    you want </h1>
                         </div>
                         <div className="absolute text-center w-4/5 md:w-2/5 md:text-right md:right-24  right-5  transform -translate-y-1/2 top-1/2">
                              <p className='text-xl text-white'>
                              To start the easy process of booking a car rental on Expedia, simply enter the location along with the dates and times for pickup and drop-off.
                              </p>
                         </div>
                         <div className="absolute flex md:right-24 right-1/3 transform -translate-y-1/2  top-3/4">
                              <button className="btn btn-warning">Click Here</button>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-3">
                              <a href="#slide3" className="btn btn-circle">❮</a>
                              <a href="#slide2" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                    <div className='img-gradient'>
                              <img alt='' src="https://i.ibb.co/LYhcMpN/img1.jpg" className="w-full" />
                         </div>
                         <div className="absolute text-center w-4/5 md:w-2/5 md:text-right md:right-24  right-5   transform -translate-y-1/2   top-1/4">
                              <h1 className='text-3xl font-bold text-white'>
                                   We will deliver The  <br /> Car to your door </h1>
                         </div>
                         <div className="absolute flex text-center w-4/5 md:w-2/5 md:text-right md:right-24  right-5 transform -translate-y-1/2   top-1/2">
                              <p className='text-xl text-white'>
                              Booking car rentals with Expedia makes it easy to find the right rental and book the rest of your trip in a single, convenient location. We also offer flights, hotels, and even activities you can book in advance
                              </p>
                         </div>
                         <div className="absolute flex transform -translate-y-1/2 md:right-24 right-1/3  top-3/4">
                              <button className="btn btn-warning ">Click Here</button>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-3">
                              <a href="#slide1" className="btn btn-circle">❮</a>
                              <a href="#slide3" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                    <div className='img-gradient'>
                              <img alt='' src="https://i.ibb.co/1dxyvbp/img3.jpg" className="w-full" />
                         </div>
                         <div className="absolute text-center w-4/5 md:w-2/5 md:text-right md:right-24  right-5   transform -translate-y-1/2  top-1/4">
                              <h1 className='text-3xl font-bold text-white'>
                                   The car will take you <br /> to your destination </h1>
                         </div>
                         <div className="absolute flex text-center w-4/5 md:w-2/5 md:text-right md:right-24  right-5  transform -translate-y-1/2  top-1/2">
                              <p className='text-xl text-white'>
                              Some car rentals are fully refundable. Each one that qualifies will be marked as such in green text on the search results page. You may also filter for this feature specifically.
                              </p>
                         </div>
                         <div className="absolute flex transform -translate-y-1/2 md:right-24 right-1/3 top-3/4">
                              <button className="btn btn-warning ">Click Here</button>
                         </div>
                         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-3">
                              <a href="#slide2" className="btn btn-circle">❮</a>
                              <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;