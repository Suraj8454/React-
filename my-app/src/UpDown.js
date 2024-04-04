import React, { useState } from 'react'
import './UpDown.css'
export default function UpDown() {
    const [data, setData] = useState(0);
    const increment = () => {
        setData(data + 1)
    }
    const decrement = () => {
        setData(data - 1)
    }
    return (
        <>
            <div className='maincontainer'>
                <h1>{data}</h1>
                <button onClick={decrement} disabled={(data <= 0)} className='red'>-</button>
                <button onClick={increment} className='green'>+</button>

            </div>
        </>
    )
}
