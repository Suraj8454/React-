import React from 'react'
import { Link } from 'react-router-dom'
// import './Page3.css'

export default function Page3() {

    const move = () => {
        const touch = document.getElementById("notouch")
        const i = Math.floor(Math.random() * 100)
        const j = Math.floor(Math.random() * 300)

        touch.style.left = -i + 'px';
        touch.style.top = -j + 'px';
        // touch.style.right = i + 'px';
    }

    return (
        <>
            <div className='base'>
            </div>
            <div className='container'>
                <h1>Suraj Proposal</h1>
                <div className='image'>
                    <img src="sad3.jpeg" height="250px" width="250px" />
                </div>
                <div className="buttonrun">
                <h2>Manja na!</h2>
                <h2> Kitna bhav khaegi<span>&#128557;</span></h2>
                <p>Bohat galat baat hai<span>&#128561;</span></p>
                <div className='yes_button'>
                    <Link to="/Yes"><button className='greenone'>Yes</button></Link>
                    <button className='redone' id='notouch' onMouseOver={move} onMouseUp={move} onMouseEnter={move}>No</button>
                </div>
                </div>
            </div>
        </>
    )
}
