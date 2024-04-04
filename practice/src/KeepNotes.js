import React, { useEffect, useState } from 'react'
import './component/Main.css'
import Header from './component/Header'
// import Footer from './component/Footer'
import Notes from './component/Notes'
import Notesdetail from './component/Notesdetail'


const getlocals=()=>{
    let list=localStorage.getItem('lists');
    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }
    else{
        return [];
    }
}

export default function KeepNotes() {
    const [additem, setAdditem] = useState(getlocals())


    const add1 = (note) => {
        setAdditem((olditem)=>{
            return [...olditem,note]
        }
        )
        
    }

    const deleted = (del) => {
        setAdditem((old) => {
            return old.filter((_, n) => n !== del)
        })
    }

    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(additem))
    }, [additem])

    return (
        <>
            <Header />

            <Notes pass={add1} />
            <div className='notes_container'>

                {additem.map((val, index) => {
                    return <Notesdetail
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteitem={deleted}
                    />
                })
                }
            </div>
            {/* <Footer /> */}
        </>
    )
}
