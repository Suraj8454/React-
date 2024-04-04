import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Website.css'
import { ReactTyped } from "react-typed";
import Footer from './Footer';



const api_key = "szp-Z9d3Z1wdlNOR1-wp5aTMlm0Mp4Q5UYygOlCq8WY"
export default function Service() {
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
  useEffect(() => {
    getimage();
  }, [search])

  return (
    <>
      <div className='service'>
        <div className='service_header'>

          <h1><ReactTyped strings={["Our Service", "Search Image"]} typeSpeed={100} backSpeed={100} loop /></h1>
        </div>
        <div className='service_input'>
          <input type='text' value={search} placeholder='Search' onChange={change} />
        </div>
        {search === "" ?
          <><p className='service_p'><span >&#9760;</span></p>
            <h3 className='loading'>Loading
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </h3></> :
          <div className='service_image'>
            {data.map((e, id) => {
              return <div className='single_image' key={id}>
                <img src={e.urls.small} height="200px" width="200px" />
              </div>
            })}
          </div>
        }
      </div>
    </>
  )
}
