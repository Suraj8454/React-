import React, { useState } from 'react'
import './Website.css'
import { Link, NavLink } from 'react-router-dom'


export default function NavBarWebsite() {
  const [navoption,setNavoption]=useState(false)
  return (
    <>
      <div className='header'>
        <div className='name'>

          <h1><span>&#9760;</span> $ur@J...</h1>
        </div>


        <div className='navbar'>
          <div className='menu' onClick={()=>{
            setNavoption(!navoption)
          }}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ol className= {navoption ? "open" : ""}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Service">Service</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/Service">Service</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li> */}
          </ol>
        </div>
      </div>
    </>
  )
}
