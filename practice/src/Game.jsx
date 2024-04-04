import React from 'react'

export default function Game() {

    let a = Math.floor(Math.random() * 3)
    let b = Math.floor(Math.random() * 3)
    let c = Math.floor(Math.random() * 3)

    let arry1 = ['x', 'y', 'z']
    let arry2 = ['x', 'y', 'z']
    let arry3 = ['x', 'y', 'z']

    let a1 = arry1[a]
    let b1 = arry1[b]
    let c1 = arry1[c]

    if (a1 == b1 && a1 == c1) {
        return (
            <>
             <div className='container'>
                <h1>{a1}  {b1}  {c1}</h1>
                <p>Matching</p>
                
                </div>
            </>
        )
    }
    else {
        return (
            <>
             <div className='container'>
                 
                <h1>{a1}  {b1}  {c1}</h1>
                <p>Not Matching</p>
                </div>

            </>
        )
    }

}
