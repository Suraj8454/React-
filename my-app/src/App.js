import React, { useState } from 'react'
import './App.css'
export default function App() {
    const [fulldata, setFulldata] = useState({
        fname: "",
        lname: "",
        gmail: "",
        password: ""
    })
    const [first, setFirst] = useState()
    const [last, setLast] = useState()

    // const [fdata, setFdata] = useState("")
    // const [data1, setData1] = useState()

    // const [fdata1, setFdata1] = useState("")
    const input = (event) => {
        // setFulldata(event.target.value)
        // console.log(event.target.name)
        // const value = event.target.value;
        // if (name === 'fname') {
            //     return {
                //         fname: value,
                //         lname: preValue.name
                //         //  setFulldata((preValue)=>{
                    
                    //     }
                    // }
                    // else {
                        //     return {
                            //         fname: preValue.fname,
                            //         lname: value
                            //     }
                            // }
            const { name, value } = event.target;
             setFulldata((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    // const input1 = (event) => {
    //     setFdata(event.target.value)
    // }

    const clickme = (event) => {
        event.preventDefault();
        alert('FORM SUBMIT');
        setFirst(fulldata.fname)
        setLast(fulldata.lname)
        // setData1(data)
        // setFdata1(fdata)

    }

    return (
        <>
            <div className='container'>
                <form>
                    <h1>hello{first}{last} </h1>
                    <input type='text' name='fname' placeholder='Enter Your Name' onChange={input}
                        value={fulldata.fname}></input>
                    <input type='text' name='lname' placeholder='Enter Your Nick Nmae' onChange={input}
                        value={fulldata.lname}></input>
                    <input type='email' name='gmail' placeholder='Enter Your Email' onChange={input}
                        value={fulldata.gmail}></input>
                    <input type='password' name='password' placeholder='Enter Your Password' onChange={input}
                        value={fulldata.password}></input>
                    <button onClick={clickme}>Submit</button>
                </form>
            </div>
        </>
    )
}
