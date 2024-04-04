import React from 'react'
import Common from './Common'
import Footer from './Footer';
import { ReactTyped } from "react-typed";



export default function Home() {
  return (
    <>
   <Common inform={<ReactTyped strings={["Grow Your Business with","Developer is"]} typeSpeed={100} backSpeed={100} loop />}
   name="Suraj Mallah"
   detail="This is my first web page in react"
   button="explore"
   web="/Service"
   image="./goku2.jpeg" w="350px"/>
   <Footer/>
    </>
  )
}
