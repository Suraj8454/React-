import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

export default function Time() {
  const [data, setData] = useState("")



  setInterval(() => {
    let newtime = new Date().toLocaleTimeString();

    setData(newtime)
  }, 1000)
   
  return (
    <>
      <h1>{data}</h1>
      {/* <button onClick={call}>click</button> */}
    </>
  )
}
