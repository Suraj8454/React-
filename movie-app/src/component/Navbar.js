// import { useState } from 'react'
import React ,{useState}from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar() {
    const [toggle, setToggle] = useState(false)

    const handleclickicon = () => {
      setToggle(!toggle)
    }
  
    return (
      <>
      <div className='navbarcontainer'>
        <div className='header'>
          <h1>suraj</h1>
        </div>
        <div className='navbar'>
        <div className='toggleicon' onClick={handleclickicon}>
          {toggle ? <span>&#10540;</span> : <span>&#9776;</span>}
        </div>
          <ol className={`show ${toggle ? 'open' : ""}`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/cart"><AddShoppingCartIcon/><span>13</span></NavLink></li>           
          </ol>
        </div>
        </div>
      </>
    )
}

export default Navbar
