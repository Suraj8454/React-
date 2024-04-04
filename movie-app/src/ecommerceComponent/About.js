import React, { useContext } from 'react'
import { AppContext } from '../context/Productcontext'

function About() {
  const name=useContext(AppContext);
  return (
    <div>
      {/* {name} */}
    </div>
  )
}

export default About
