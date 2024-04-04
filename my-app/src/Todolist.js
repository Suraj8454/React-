import React, { useState } from 'react'
import './Todolist.css'

export default function Todolist() {
  const [list, setList] = useState("")
  const [inputlist, setInputlist] = useState([])
  const [condition, setCondition] = useState("")


  const inputchange = (event) => {
    setList(event.target.value)
  }

  const click = () => {
    if (list == "") {
      setCondition('Enter Text Here *')
    }
    else {
      setInputlist((oldinputlist) => {
        return [...oldinputlist, list]
      })
      setList("")
      setCondition("")
    }

  }

  const cut = () => {
    setInputlist((e, index) => {
      return inputlist.slice(e.target, -1)
    })
  }
  

  const deleted = () => {
    if (inputlist == "") {
      setCondition("No Result")
    }
    else {
      setInputlist([])
    }
  }
  return (
    <>
      <div className='bodycontainer'>
        <div className='container'>
          <br />
          <h1>ToDo Lists</h1>
          <br />
          {/* <div className='main'> */}

          <input type='text' placeholder='Enter Here'
            onChange={inputchange} value={list}></input>
          <button className='btn' onClick={click}>+</button>
          <p>{condition}</p>
          {/* </div> */}

          <ol>
            {inputlist.map((data,index) => {
              return (
                <>
                  <li key={index}><span onClick={cut} id={index} >x</span>{data}</li>
                </>
              )
            })}
          </ol>
          <br />
          <div className='bottom'>
            <a href='/' onClick={deleted}>Clear All </a>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}
