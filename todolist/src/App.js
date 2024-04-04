import React, { useState } from 'react'
// import './Todolist.css'
import './App.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function TodoListApp() {
  const [list, setList] = useState('')
  const [data, setData] = useState([])
  const [show, setShow] = useState(false)


  const change = (e) => {
    setList(e.target.value)
  }

  const add = () => {
    if(list==""){
      alert("please enter the word")
    }
    else{
    setData((value) => {
      return [...value, list]
    })
    setList('')
  }
  }

  const cut = (value) => {
    setData((olddata) => {
      return olddata.filter((_, i) => i !== value)
    })
  }

  const opendesign = () => {
    setShow(true)
  }
  const closedesign = () => {
    setShow(false)
  }
  return (
    <>
        <div className='container'>
          {show ? <h1>Todo List</h1> : null}
          <div className='input'>
           <input type='text' placeholder='Enter text' onChange={change} value={list} onClick={opendesign} onDoubleClick={closedesign} />
           <button onClick={add}><AddBoxIcon style={{fontSize:"30px"}}/></button>
          </div>
          <ol>
            {data.map((val, id) => {
              return (
                <>
                  
                  <li key={id}><button onClick={() => cut(id)}><DeleteIcon/></button>
                    {val}
                  </li>
                </>
              )
            })}
          </ol>
        </div>
    </>
  )
}
