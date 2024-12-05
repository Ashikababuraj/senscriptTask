// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Banner from './components/Banner'
import Products from './components/Products'
import Footer from './components/Footer'
import Offers from './components/Offers'
import Newsletter from './components/Newsletter'

import './assets/css/responsive.css'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <Navbar></Navbar>
      <Search></Search>
      <Banner></Banner>
      <Products></Products>
      <Offers></Offers>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  )
}

export default App
