import React, { useState } from 'react'
// import Nav from './Nav'
export default function Main(props) {

    const handlechange = (event) => {
        setText(event.target.value)
    }
    const big = () => {
        let newone = text.toUpperCase();
        setText(newone)
    }
    const small = () => {
        let newtwo = text.toLowerCase();
        setText(newtwo)
    }
    const clear = () => {
        setText('')
    }

    const [text, setText] = useState("")
    return (
        <div className='main'>
            <h1>Text Editer</h1>
            <textarea placeholder='Enter Text Here' value={text} onChange={handlechange}></textarea>
            <div className='buttons'>
                <button disabled={text.length === 0} onClick={big}>BIG</button>
                <button disabled={text.length === 0} onClick={small}>SMALL</button>
                <button disabled={text.length === 0} onClick={clear}>CLEAR</button>
            </div>
            <div>
                <p><span>{text.split(' ').filter((e) => { return e.length != 0 }).length}</span> Word And<span> {text.length} </span>Characters</p>

            </div>
        </div>
    )
}
