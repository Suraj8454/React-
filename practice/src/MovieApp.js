import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Res from './Res'

export default function MovieApp() {
    const url = (`https://www.omdbapi.com/?apikey=62a57373&s=all%20movie`)
    // const url1 = (`https://www.omdbapi.com/?apikey=62a57373&s=`)
    const [movie, setMovie] = useState([])
    const [searchmovie, setSearchmovie] = useState('');

    const change = (event) => {
        setSearchmovie(event.target.value)
    }

    const getAllmovies = async () => {
        let data = await axios.get(url)
        // console.log(data.data.Search)
        setMovie(data.data.Search)
    }
    const getsearchMovie = async () => {
        let data = await axios.get(`https://www.omdbapi.com/?apikey=62a57373&s=${searchmovie}`)
        // console.log(data.data.Search)
        setMovie(data.data.Search)
    }

    useEffect(() => {
        if (searchmovie === "") {
            getAllmovies();
        }
        else{

            getsearchMovie();
        }
        

    }, [searchmovie])



    return (
        <>
            <div>
                <h1>Movie Search Web</h1>
                <input type='text' value={searchmovie} placeholder='search movie' onChange={change} />
                {movie.map((e, ind) => {
                    return <Res key={ind}
                        year={e.Year}
                        image={e.Poster}
                        type={e.Type}
                        rating={e.imdbID} />

                })}
            </div>
        </>
    )
}
