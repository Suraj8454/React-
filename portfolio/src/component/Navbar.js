import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"



export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  const handleclickicon = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className='navbar'>
      <div className='toggleicon' onClick={handleclickicon}>
        {toggle ? <span>&#10540;</span> : <span>&#9776;</span>}
      </div>
        <ol className={`show ${toggle ? 'open' : ""}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Skills">Skills</NavLink></li>
          <li><NavLink to="/Project">Project</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ol>
      </div>
    </>
  )
}
