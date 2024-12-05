import React from 'react'
import '../assets/css/banner.css'
import Image from '../assets/images/headphone.png'

function Banner() {
  return (
    <div>
         <section className="hero-section">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 className="hero-title">
          All <span>Modern Style</span> <br/>
          Product Available Here.
        </h1>
        <p className="mt-3 banner-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
        </p>
        <button className="hero-btn mt-4">Shop Now</button>
      </div>
      <div className="col-lg-6 position-relative">
        <div className="gradient-circle"></div>
        <img src={Image} alt="Headphone" className="product-image img-fluid" />
        
        <div className="offer-card">
          <h6 className="fw-bold mb-1">Get Up To 30% Off</h6>
          <p className="text-dark mb-lg-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
         
        </div>

        <div className="review-card">
          <h6 className="fw-bold mb-lg-0">139K Total Review</h6>
          <p className="text-warning mb-lg-0">4.5 Recieved</p>
          <div className="text-warning d-flex rating gap-1 justify-content-center">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Banner