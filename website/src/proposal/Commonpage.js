import React from 'react'
import { Link } from 'react-router-dom'


export default function Commonpage(props) {
  return (
    <>
    <div className='base'>
        </div>
        <div className='container'>
          <h1>Suraj Proposal</h1>
          <div className='click'>
            <img src={props.img} height="250px" width="250px" />
          </div>
          <h2>{props.comment}<span>{props.emoji}</span></h2>
          <h2>{props.comment1}<span>{props.emoji1}</span></h2>
          <p>{props.comment2}<span>{props.emoji2}</span></p>
          <div className='click'>
            <Link to={props.yes}><button className='green'>Yes</button></Link>
            <Link to={props.no}><button className='red'>No</button></Link>
          </div>
        {/* </div> */}
        </div>
    </>
  )
}
