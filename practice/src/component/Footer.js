import React from 'react'
import './Main.css'

export default function Footer() {
    let year=new Date().getFullYear()
  return (
    <>
    <div className='footer'>
      <footer>
        <p>Suraj Mallah<span> - CopyRight@{year}</span> </p>
      </footer>
      </div>
    </>
  )
}
