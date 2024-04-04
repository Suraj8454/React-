import React from 'react'

export default function Cards(props) {
    return (
        <>
            <div className='carddetail'>
                <div className="card">
                    <img src={props.urlToImage} alt="" height="300px" width="300px" />
                    <h3>{props.author}</h3>
                    <h5>{props.title.slice(0,50)}..</h5>
                    <p>{props.description.slice(0,150)}...</p>
                    <button> <a href={props.url} target='_blank'>click Me</a></button>
                </div>
            </div>
        </>
    )
}
