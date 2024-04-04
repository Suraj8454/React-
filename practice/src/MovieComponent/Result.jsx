import React from 'react'

export default function Result(props) {
    const boxes=props.movie.map((item,index)=>{
        return <Box key={index} title={item.Title}
        year={item.Year} type={item.Type}
        rating={item.imdbID} image={item.Poster}/>
    })
  return (
    <div>
     {boxes}

    </div>
  )
}

const Box=(props)=>{
    return(
        <>
        <div>
            <img src={props.image} height="250px" width="200px"/>
            <h1>{props.title}</h1>
            <h2>{props.year}</h2>
            <h4>{props.type}</h4>
            <h6>{props.rating}</h6>
        </div>
        </>
    )
}
