import React, { useEffect, useState } from 'react'
import './Covid.css'
import axios from 'axios'

export default function Covid() {
    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [move, setMove] = useState()

//     const { name, value } = event.target;
//     setFulldata((preValue) => {
//    return {
//        ...preValue,
//        [name]: value,
//    }
// })


    async function covid() {
        let alldata = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(alldata.data.name);
        setMove(alldata.data.moves.length)
    }
    useEffect(() => {
        covid();
    }, [num])
    return (
        <>

            <h1>pokemon</h1>
            {/* <h4>{num}</h4> */}

            <h2>{name}</h2>
            <h2>{move}</h2>

            <input type='text' name="hii" value={num} onChange={(e) => { setNum(e.target.value) }}/>
 
            {/* <select value={num} onChange={(e) => { setNum(e.target.value) }}> */}
                {/* <option >1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>

            </select> */}



        </>
    )
}
