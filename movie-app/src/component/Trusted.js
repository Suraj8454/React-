import React from 'react'
import "./service.css"
import CountUp from 'react-countup'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HotelIcon from '@mui/icons-material/Hotel';
import WatchIcon from '@mui/icons-material/Watch';


function Trusted() {
  return (
    <div className='trusted'>
      <h1>Trusted by <CountUp start={0} end={90} delay={0} duration={2}/>
         + companies</h1>
      <div className='company-name'>
        <h4>yahoo</h4>
        <h4>parle</h4>
        <h4><PhoneIphoneIcon/>iphone</h4>
        <h4><WatchIcon/>Rolex</h4>
        <h4><HotelIcon/> Book Myshow</h4>
      </div>
    </div>
  )
}

export default Trusted
