import React from 'react'
import "./service.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Services() {
  return (
    <div className='services'>
    <div className='box1'>
      <h3>Super fast and free delivery</h3>
      <div className='middle'>
      <img src='/truck.jpeg' height="200px" width="200px"/>
      </div>
    </div>
    <div className='box2'>
    <div className='box2_body'>
      <h3>Non-contact shipping</h3>
      <div className='middle'>
      <img src='/non-contact.jpeg' height="50px" width="50px"/>
      </div>
      </div>
        <div className='box2_body'>
      <h3>money back gurrenty </h3>
      <div className='middle'>
      <img src='/moneyback.jpeg' height="30px" width="30px"/>
      </div>
      </div>
    </div>
    <div className='box3'>
        <h3>Super fast payment system</h3>
        <div className='middle'>
      <img src='/payment.jpeg' height="200px" width="200px"/>
      </div>
    </div>
    </div>
  )
}

export default Services

