import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactTyped } from 'react-typed'
import "./Home.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
export default function Home() {
  return (
    <>
      <div className='home'>
        <div className='home_container'>
          <div className='left'>
            <h3>Hello,It's Me</h3>
            <h1>Suraj Mallah</h1>
            <h4>And I'm a <ReactTyped strings={["Fronted Developer", "Web Designer"]} typeSpeed={100} backSpeed={150} loop /></h4>
            <p>I'm a wed Developer and designer with new stylish
              web site for looking good.create new web design day by day for good in web site.
            </p>
            <div className='socialmedia'>
              <div className='whatsapp'>
                <Link to="https://wa.me/918454091165"><WhatsAppIcon style={{ fontSize: "40px", marginTop: "15px", marginRight: "15px", color: "blueviolet" }} /></Link>
              </div>
              <div className='instagram'>
                <Link to="https://www.instagram.com/____.surajjjj._/"><InstagramIcon style={{ fontSize: "40px", marginTop: "15px", color: "blueviolet" }} /></Link>
              </div>
              <div className='contact'>
                <Link to="tel:8454091165"><CallIcon style={{ fontSize: "40px", marginTop: "15px", marginLeft: "15px", color: "blueviolet" }} /></Link>
              </div>
            </div>
            <Link to="/Contact"><button>Hire Me</button></Link>
          </div>
          <div className='right'>
            <img src='./photos/me.jpeg' height="400px" width="300px" />
          </div>
        </div>
      </div>
    </>
  )
}


// https://wa.me/1XXXXXXXXXX                                                 