import React from 'react'

export default function Notesdetail(props) {
  const del = () => {
    props.deleteitem(props.id);
  }
  return (
    <>
      <div className='notesdetail'>
        <h1>{props.title}</h1>
        <textarea rows={5}>{props.content}</textarea>
        <div className='center'>
        <button onClick={del} title='Delete'>-</button>

      </div>
    </div>
  
    </>
  )
}

