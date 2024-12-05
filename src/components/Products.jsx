import React from 'react'
import '../assets/css/products.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import Deals from './Deals';
import PopularItems from './PopularItems';
import DealOfTheDay from './DealOfTheDay';
import SpotlightItems from './SpotlightItems';

function Products() {


    
  return (
    <>

<section className="pt-5 pb-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <Deals></Deals>
        <PopularItems></PopularItems>

        
      </div>
      <div className="col-lg-3">
        <div className='row'>
            <DealOfTheDay></DealOfTheDay>
        </div>

        <div className='row'>
            <SpotlightItems></SpotlightItems>
        </div>

      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Products