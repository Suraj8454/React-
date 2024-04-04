import React, { useState } from 'react'
import './App.css'
// import BackspaceIcon from '@material-ui/icons/Backspace';

export default function Calculator() {
    const [result, setResult] = useState('')
    const click = (event) => {
        setResult(result.concat(event.target.value))
    }

    const allclear = () => {
        setResult("")
    }

    const answer = () => {
        setResult(eval(result).toString())
    }
    const cut = (e) => {
        // setResult((e) => {
        //   return result.slice(e.target, -1)
        // })
        setResult(result.slice(e.target, -1))
    }

    return (
        <>
            <div className='container'>
                <div className='heading'>
                    <h1>Calculator</h1>
                </div>
                <div className='display'>
                    <input type='text' placeholder='0' value={result} />
                </div>
                <div className='number'>
                    <div className='row1'>
                        <input type='button' value="AC" onClick={allclear} />
                        <input type='button' value="%" onClick={click} />
                        <input type='button' value="C" onClick={cut}/>
                        <input type='button' value="/" onClick={click} />
                    </div>
                    <div className='row1'>
                        <input type='button' value="7" onClick={click} />
                        <input type='button' value="8" onClick={click} />
                        <input type='button' value="9" onClick={click} />
                        <input type='button' value="*" onClick={click} />
                    </div>
                    <div className='row1'>
                        <input type='button' value="4" onClick={click} />
                        <input type='button' value="5" onClick={click} />
                        <input type='button' value="6" onClick={click} />
                        <input type='button' value="-" onClick={click} />
                    </div>
                    <div className='row1'>
                        <input type='button' value="1" onClick={click} />
                        <input type='button' value="2" onClick={click} />
                        <input type='button' value="3" onClick={click} />
                        <input type='button' value="+" onClick={click} />
                    </div>
                    <div className='row1'>
                        <input type='button' value="00" onClick={click} />
                        <input type='button' value="0" onClick={click} />
                        <input type='button' value="." onClick={click} />
                        <input type='button' value="=" onClick={answer} />
                    </div>
                </div>
            </div>
        </>
    )
}
