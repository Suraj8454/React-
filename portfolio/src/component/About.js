import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'



export default function About() {
  return (
    <>
      <div className='about'>
        <div className='about_heading'>
          <h1>Abouts<span> Us</span></h1>
        </div>
        <div className='about_main'>
          <div className='about_image'>
            <img src='./photos/human.jpeg' height="400px" width="300px" />
          </div>
          <div className='about_info'>
            <h2>Suraj Mallah</h2>
            <br />
            <p>
              Hii Everyone,This is a My About Page For Personal Information and Also in this Page You Got it Full Details in this Portfolio Web site and You Personaly Contact Me Easily with their Social Media and Whatever,You Enjoyed My Portfolio Web Page,<span>THANK YOU.</span>
            </p>
            <div className='about_button'>
              <Link to="/Project"><button>My Project</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
