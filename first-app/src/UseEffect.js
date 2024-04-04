import React, { useEffect, useState } from 'react'

export default function UseEffect() {

   const [num,setNum]=useState(0);

   const click=()=>{
       setNum(num+1)
   }

   useEffect(()=>{
       document.title=`My Title Is Clicked ${num} Times`

   })
return (
    <>
      <h1>{num}</h1>
      <button onClick={click}>increment</button>
        <button disabled={num<=0} onClick={()=>{setNum(num-1)}}>decrement</button>


    </>
  )
}
