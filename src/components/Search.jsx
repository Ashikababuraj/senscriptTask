import React from 'react'
import '../assets/css/search.css'

function Search() {
  return (
    <div>
        <section className="searchBox">
        <div className="container">
          <div className="d-flex">
            <div className="container my-4">
              <form className="d-flex align-items-center gap-2">
               
                <i className="bi bi-search"></i>
                <input 
                  type="text" 
                  className="form-control form-control" 
                  placeholder="Search" 
                  aria-label="Search"
                />
              
                <button className="btn btn-dark" type="submit">
                   Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search