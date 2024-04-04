import axios from 'axios';
import React, { useEffect, useState } from 'react'

const imagesurl = "https://api.unsplash.com/search/photos"
const api_key = "szp-Z9d3Z1wdlNOR1-wp5aTMlm0Mp4Q5UYygOlCq8WY"
export default function Image() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([])


    const change = (event) => {
        setSearch(event.target.value)
    }

    const getimage = () => {
        axios.get(`https://api.unsplash.com/search/photos?query=${search}&page=1&client_id=${api_key}`)
            .then((res) => {

                setData([...res.data.results])
            })
    }
    // console.log(data)
    useEffect(() => {
        getimage();
    }, [search])

    // const image=`https://source.unsplash.com/400x300/?${search}`;
    return (
        <>
            <div className='search'>
                <h1>Image Search</h1>
                <input type='text' value={search} placeholder='Search' onChange={change} />
                {/* <img src={image} height="200px" width="150px"/> */}

                </div>
                {data.map((e, id) => {

                    return <div key={id}>
                        <img src={e.urls.small} height="200px" width="150px" />
                        <p>photo by {e.user.name}</p>
                    </div>

                })}
        </>
    )
}
