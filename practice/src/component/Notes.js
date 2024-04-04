import React, { useState } from 'react'
import "./Main.css"

export default function Notes(props) {
    const [show, setShow] = useState(false)
    const [note, setNote] = useState([{
        title: "",
        content: "",
    }])

    const change = (event) => {

        const { name, value } = event.target;
        setNote((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })
    }
    const add = (event) => {
        event.preventDefault();
        props.pass(note);
        setNote({
            title: "",
            content: "",
        })
    }
    const showit = () => {
        setShow(true)
    }
    const showitoff = () => {
        setShow(false)
    }
    return (
        <>
            <div className='container'>
                <div className='notes'>
                    <form>
                        {show ?
                            <input type='text' name="title" id={note.title} placeholder='Title' value={note.title} onChange={change} autoComplete='off' required /> : null}
                        <br />
                        <textarea name="content" id={note.title} placeholder='Write a Notes' value={note.content} onChange={change} onClick={showit} onDoubleClick={showitoff} required />
                        <br />
                        <div className='center'>
                            {show ? <button onClick={add} title='Add'>+</button> : null}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
