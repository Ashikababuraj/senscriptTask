import React from 'react'
import '../assets/css/navbar.css'


function Navbar() {
  return (
    <div>
        <header>
         <nav className="navbar navbar-expand-lg">
            <div className="container">
               <a className="navbar-brand logo" href="index.html">EBrands</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0 ebrands-menu">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#">Collection</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link">Sale</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link">FAQ</a>
                     </li>
                  </ul>
                  <div className="d-flex align-items-center gap-3 ebrand-buttons">
                     <button className="btn btn-outline-dark d-flex align-items-center gap-2">
                     <i className="bi bi-cart"></i> 24 Products
                     </button>
                     <button className="btn btn-outline-dark me-5">$2,957.75</button>
                     <button className="gap-2 ms-5 login-btn">Log In <i className="bi bi-box-arrow-in-right"></i></button>
                  </div>
               </div>
            </div>
         </nav>
      </header>
    </div>
  )
}

export default Navbar