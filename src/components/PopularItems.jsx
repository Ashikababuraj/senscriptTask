import React from 'react'
import '../assets/css/popular.css'

import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';

function PopularItems() {

    const products = [
        { id: 1, img: p1 },
        { id: 2, img: p2 },
        { id: 3, img: p3 },
        { id: 4, img: p2 },
        { id: 5, img: p4 },
        { id: 6, img: p1 },
        { id: 7, img: p3 },
        { id: 8, img: p1 },
        { id: 9, img: p4 },
      ];

  return (
    <>

        <div className="main-title mt-5">
          <h2 className='mb-4'>Populer items</h2>
        </div>

        <div className='row'>
        {products.map((product, index) => (
            <div className='col-lg-4' key={products.id}>
                <div className='product-card'>
                    <div className='text-center'><img src={product.img} className='img-fluid' /></div>
                    <div className='pdtDetails'>
                        <div className='d-flex justify-content-between'>
                            <h5>Lorem Ipsum</h5>
                            <h5 className='text-danger'>$200.00</h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5>Shoes</h5>
                            <h5 className='text-grey-light'>$3400.00</h5>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5>Reviews</h5>
                            <div className="text-warning d-flex rating gap-1">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                        
                            </div>
                        </div>
                    </div>
                    {
                    (index === 0 || index === 1 || index === 2) && (
                        <span>
                            <span className='offerTagProduct'>
                            50% Off
                            </span>
                        </span>
                        )}

                </div>
            </div>
        ))}
        </div>

    </>
  )
}

export default PopularItems