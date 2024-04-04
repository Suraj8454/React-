import React, { useEffect, useState } from 'react'
import Singlemovie from './Singlemovie';
import Data from './Data';

export default function Home() {
  return (
    <>
        <h1>hii</h1>
       {Data.map((element) => {
        return <Singlemovie title={element.Title}/>
       })}
    </>
  )
}
