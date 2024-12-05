import React from 'react'
import payments from '../assets/images/payment.png'

function Footer() {
  return (
    <>
    <footer>
  <div className="container">
    <div className="row">
      
      <div className="col-lg-6">
        <div className="footer-links">
          <a className="navbar-brand logo" href="index.html">EBrands</a>
          <p>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor.</p>
          <ul className="link-data">
            <li><i className="bi bi-telephone me-3"></i>+1234567890</li>
            <li><i className="bi bi-envelope me-3"></i>lovia@support.com</li>
          </ul>
        </div>
      </div>

   
      <div className="col-lg-6">
        <div className="row">
      
          <div className="col-lg-4">
            <div className="footer-links">
              <h4>Company</h4>
              <ul className="link-data">
                <li><a href="">About</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Career</a></li>
              </ul>
            </div>
          </div>

     
          <div className="col-lg-4">
            <div className="footer-links">
              <h4>Information</h4>
              <ul className="link-data">
                <li><a href="">Help Center</a></li>
                <li><a href="">Payment Methods</a></li>
                <li><a href="">Return & Refund</a></li>
                <li><a href="">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

       
          <div className="col-lg-4">
            <div className="footer-links">
              <h4>Follow Us</h4>
              <ul className="social icons d-flex mt-4">
                <li><a href=""><i className="bi bi-instagram"></i></a></li>
                <li><a href=""><i className="bi bi-twitter"></i></a></li>
                <li><a href=""><i className="bi bi-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="copyright">
        <div className="d-flex justify-content-between">
          <p>Copyright © 2021 Tronix. All Right Reseved</p>
          <img src={payments} className="img-fluid" style={{ height:"20px" }}/>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer