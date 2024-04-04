import React from 'react'

export default function Footer() {
     let newdate=new Date().getFullYear();


  return (
    <div className='footer'>
      <h4><span>Suraj Mallah</span>-CopyRight{newdate}</h4>
    </div>
  )
}
