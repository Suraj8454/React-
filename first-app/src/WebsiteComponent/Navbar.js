import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div>
      <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
          <li><Link to="/Form">Regiter</Link></li>
        </ul>
      </div>
    </>
  )
}
