import React from 'react'
import Common from './Common'
import Footer from './Footer'
import { ReactTyped } from "react-typed";


export default function About() {
  return (
    <>
  <Common inform={<ReactTyped strings={['Welcome to About Page']} typeSpeed={100} backSpeed={100} loop/>}
   name="Suraj Mallah"
   detail="Believe in Your Self"
   button="Contact Now"
   web="/contact"
   image="./goku3.jpeg" w="300px"/>
    </>
  )
}
