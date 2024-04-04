import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './ecommerceComponent/Home'
import About from './ecommerceComponent/About'
import Singledetail from './ecommerceComponent/Singledetail'
import Product from './ecommerceComponent/Product'
import Contact from './ecommerceComponent/Contact'
import Cart from './ecommerceComponent/Cart'
import Errorpage from './ecommerceComponent/Errorpage'
// import Header from './component/Header'
import Navbar from './component/Navbar'

function Ecommerce() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/singledetail/:id' element={<Singledetail/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='*' element={<Errorpage/>}/>

   </Routes>
   </BrowserRouter>
  )
}

export default Ecommerce
