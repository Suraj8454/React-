import React from 'react'

export default function Res(props) {

    return (
        <>

            <img src={props.image} height="250px" width="200px" />
            <h1>{props.title}</h1>
            <h2>{props.year}</h2>
            <h4>{props.type}</h4>
            <h6>{props.rating}</h6>
        </>
    )
}

