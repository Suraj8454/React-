import React from 'react'
import { Link } from 'react-router-dom'

import './Website.css'

export default function Common(props) {
    return (
        <>
            <div className='common'>
                <div className='left'>

                    <h1>{props.inform}
                        <br /><strong>{props.name}</strong></h1>
                    <p>{props.detail}</p>
                    <button><Link to={props.web}>{props.button}<span className='symbol_arrow'>&#8680;</span></Link></button>
                </div>
                <div className='right'>
                    <img src={props.image} height="350px" width={props.w} />
                </div>
            </div>
        </>
    )
}
