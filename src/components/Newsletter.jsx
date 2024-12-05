import React from 'react'
import '../assets/css/newsletter.css'
import img from '../assets/images/Newsletter.svg'

function Newsletter() {
  return (
    <>

<section className="newsletter py-5">
<div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-6">
        <div className="newsletter-content d-flex">
          <img src={img} className="img-fluid me-3" style={{ height: "55px" }}/>
          <div>
            <h3>Join our newsletter now!</h3>
            <p>Register now and get our latest updates and promos.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <form className="d-flex">
          <input type="text" name="" placeholder="Enter your Email..."/>
          <input type="submit" value="Join"/>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Newsletter