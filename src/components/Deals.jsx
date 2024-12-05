import React from 'react'

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import d1 from '../assets/images/d1.png';
import d2 from '../assets/images/d2.png';
import d3 from '../assets/images/d3.png';
import d4 from '../assets/images/d4.png';

function Deals() {

    const deals = [
        { id: 1, name: 'Mrs. Wages Pickled Okra and Vegetables Quick', price: '$9.99', img: d1 },
        { id: 2, name: 'RightRice - Garlic Herb (7oz. Pack of 6)', price: '$9.99', img: d2 },
        { id: 3, name: 'Real Foods Organic Corn Thins - Original', price: '$9.99', img: d3 },
        { id: 4, name: 'Mario Camacho Organic Green Olives Stuffed', price: '$9.99', img: d4 },
        { id: 5, name: 'Mario Camacho Organic Green Olives Stuffed', price: '$9.99', img: d3 },
      ];

  return (
    <>

        <div className="main-title">
          <h2 className='mb-4'>Highlighted Deals of the Week</h2>
        </div>

          <div className="swiper mySwiper">
    <div className="swiper-wrapper bestDeals">
      <div className="swiper-slide">

      <div className="slider-navigation">
        <button className="swiper-button-prev deal-btn-prev"><i className="bi bi-arrow-left"></i></button>
        <button className="swiper-button-next deal-btn-next"><i className="bi bi-arrow-right"></i></button>
      </div>
      <Swiper
       modules={[Navigation, Pagination,Autoplay, Scrollbar, A11y]}
       spaceBetween={0}
       slidesPerView={4}
       navigation={{
        nextEl: '.deal-btn-next',
        prevEl: '.deal-btn-prev',
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
      {deals.map((deal, index) => (
            <SwiperSlide  key={deal.id}>
        <div className='product-items'>
            <img src={deal.img} className='img-fluid' />
            <div className='details'>
                <h5>{deal.name}</h5>
                <div className="text-warning d-flex rating gap-1">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <span className='text-grey ms-2' style={{fontSize:'13px'}}>(5.0)</span>
                </div>

                {
                    index === 0 || index === 3 ? (
                        <div className='d-flex justify-content-between'>
                            <h6>{deal.price}<small className='ms-3 text-grey'><del>$9.99</del></small></h6>
                            <div className='cart-btn'>
                            <i className="bi bi-cart"></i>
                            </div>
                        </div>
                        ) : (
                            <div className='d-flex justify-content-between'>
                            <h6>{deal.price}</h6>
                            <div className='cart-btn'>
                            <i className="bi bi-cart"></i>
                            </div>
                        </div>
                    )
                }

                

                {index === 3 && (
          <span>
            <span className='offerTag'>
              15% OFF
            </span>
          </span>
        )}
                
            </div>
        </div>
      </SwiperSlide>
       ))}
      

  
    </Swiper>
        
      </div>
    
    </div>

 


  </div>

    </>
  )
}

export default Deals