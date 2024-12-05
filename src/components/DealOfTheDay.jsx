import React from 'react'
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/css/dayDeals.css'

import deal1 from '../assets/images/sneakers.png';
import deal2 from '../assets/images/watch.png';



function DealOfTheDay() {

    const dealofDay = [
        { id: 1, name: 'Mrs. Wages Pickled Okra and Vegetables Quick', price: '$9.99', img: deal1 },
        { id: 2, name: 'RightRice - Garlic Herb (7oz. Pack of 6)', price: '$9.99', img: deal2 },
  
      ];

  return (
    <>
        

        <div className="main-title mt-5">
            <h4 className="mb-4"><strong>DEAL OF THE DAY</strong></h4>
        </div>

          <div className="swiper mySwiper">
    <div className="swiper-wrapper bestDeals dayDeals">
      <div className="swiper-slide">

      <div className="slider-navigation">
        <button className="swiper-button-prev day-button-prev"><i className="bi bi-arrow-left"></i></button>
        <button className="swiper-button-next day-button-next"><i className="bi bi-arrow-right"></i></button>
      </div>

      <Swiper
       modules={[Navigation, Pagination,Autoplay, Scrollbar, A11y]}
       spaceBetween={0}
       slidesPerView={1}
       navigation={{
        nextEl: '.day-button-next',
        prevEl: '.day-button-prev',
      }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       loop={true}
    //    autoplay={{
    //     delay: 6000,
    //     disableOnInteraction: true,
    //   }}
    >
      {dealofDay.map((dealDay, index) => (
            <SwiperSlide  key={dealDay.id}>
        <div className='product-items' style={{border:"none"}}>
            <img src={dealDay.img} className='img-fluid' />
            <div className='details'>
                <h5>{dealDay.name}</h5>
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
                            <h6>{dealDay.price}<small className='ms-3 text-grey'><del>$9.99</del></small></h6>
                            <div className='cart-btn'>
                            <i className="bi bi-cart"></i>
                            </div>
                        </div>
                        ) : (
                            <div className='d-flex justify-content-between'>
                            <h6>{dealDay.price}</h6>
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

export default DealOfTheDay