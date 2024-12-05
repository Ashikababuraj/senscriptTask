import React from 'react'

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/css/offers.css';

import offer1 from '../assets/images/offer1.png';
import offer2 from '../assets/images/offer2.png';
import offer3 from '../assets/images/offer3.png';
import offer4 from '../assets/images/offer4.png';


function Offers() {

  const offerZone = [
    { id: 1, name: 'Up to 50% ', price: '$9.99', img: offer1 },
    { id: 2, name: 'Up to 50% ', price: '$9.99', img: offer2 },
    { id: 3, name: 'Up to 50% ', price: '$9.99', img: offer3 },
    { id: 4, name: 'Up to 50% ', price: '$9.99', img: offer4 },
    { id: 5, name: 'Up to 50% ', price: '$9.99', img: offer3 },
  ];

  return (
    <>
   <div className='offers pt-3'>
    <div className='container'>
      <div className='row'>
        <div className="col-lg-12">
         

          <div className="swiper mySwiper">
    <div className="swiper-wrapper offers">
      <div className="swiper-slide">

      <div className="main-title">
            <h2 className='mb-4'>Real People, Real Savings</h2>
          </div>

      <div className="slider-navigation">
        <button className="offer-button-prev"><i className="bi bi-chevron-left"></i></button>
        <button className="offer-button-next"><i className="bi bi-chevron-right"></i></button>
      </div>
      
      <Swiper
       modules={[Navigation, Pagination,Autoplay, Scrollbar, A11y]}
       spaceBetween={20}
       slidesPerView={4}
       navigation={{
        nextEl: '.offer-button-next',
        prevEl: '.offer-button-prev',
      }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       loop={true}
       autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1, 
      },
      576: {
        slidesPerView: 2, 
    },
      768: {
          slidesPerView: 4, 
      },
    }}
    >
      {offerZone.map((offer) => (
            <SwiperSlide  key={offer.id}>
        <div className='offer-items'>
            <img src={offer.img} className='img-fluid' />
            <div className='offer-details d-flex justify-content-between'>
                <h5>{offer.name}</h5>
                <i className="bi bi-arrow-right"></i>
              
            </div>
        </div>
      </SwiperSlide>
       ))}
      

  
    </Swiper>
        
      </div>
    
    </div>

 


  </div>

        </div>
      </div>
    </div>
   </div>
    
    </>
  )
}

export default Offers