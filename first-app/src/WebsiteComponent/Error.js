import React from 'react'
import { useFormAction, useHref, useLocation, useParams } from 'react-router-dom'

export default function Error() {
    const {name}=useParams()
    const location=useLocation()
   
    // console.log(useHref())
  return (
    <div>
      <h1>OOPS.this is error {name} and path{location.pathname}</h1>
    </div>
  )
}
