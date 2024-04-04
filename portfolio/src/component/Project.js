import React, { useEffect, useState } from 'react'
import "./Project.css"
import { NavLink,Link } from 'react-router-dom'


export default function Project() {
  const data = [{ id: 1, name: "Calculator", image: "./photos/calculator.jpeg", category: "single", url:"https://minicalculatoronly.netlify.app"},
  { id: 2, name: "Image Search", image: "./photos/computer.jpeg", category: "website", url:"https://surajmallah.netlify.app"},
  { id: 3, name: "Text Editor", image: "./photos/text.jpeg", category: "website", url:"https://surajtexteditor.netlify.app"},
  { id: 4, name: "Todo List", image: "./photos/todo.jpeg", category: "single", url:"https://todolistonly.netlify.app"},
  { id: 5, name: "Keep Notes", image: "./photos/keep.jpeg", category: "website", url:"https://keepnotesprivacy.netlify.app"},
  { id: 6, name: "Search Movie", image: "./photos/searchmovie.jpeg", category: "website", url:"https://moviesearchonly.netlify.app"},
  { id: 7, name: "Weather", image: "./photos/weather.jpeg", category: "single", url:"https://miniweatheronly.netlify.app"},
  { id: 8, name: "Qr Code", image: "./photos/qrscanner.jpg", category: "single", url:"https://qrcodescanneronly.netlify.app"},
  { id: 9, name: "Calender", image: "./photos/calender.jpeg", category: "single", url:"https://minicalenderonly.netlify.app"},
  { id: 10, name: "Speech Text", image: "./photos/speech.png", category: "single", url:"https://textspeakpnly.netlify.app"},
  { id: 11, name: "Text Speck", image: "./photos/speak.png", category: "single", url:"https://speaktextonly.netlify.app"},
  { id: 12, name: "Quiz", image: "./photos/qui.jpg", category: "single", url:"https://surajquizonly.netlify.app"},
  { id: 13, name: "Proposal", image: "./photos/proposal.png", category: "single", url:"https://surajproposal.netlify.app"}

  ]

  const [all, setAll] = useState(data)
  const [allin, setAllin] = useState(null)


  const filteritem = (web) => {
    const update = data.filter((current) => {
      return current.category === web;
    });
    setAll(update);
  }

  return (
    <>
      <div className='project'>
        <div className='project_heading'>
          <h1>My<span> Project</span></h1>
        </div>
        <div className='project_data'>
          <div className='project_button'>
            <a href='#' className='active' onClick={() => setAll(data)}>All</a>
            <a href='#' className='active' onClick={() => filteritem('website')} >Website</a>
            <a href='#' className='active' onClick={() => filteritem('single')}>Mini Project</a>
          </div>
          <div className='data'>
            {all.map((value, id) => {
              return <>
                <div className="container" key={id}>
                  <img src={value.image} className="image" />
                  <div className="overlay">
                    <Link to={value.url} className="icon">
                      <i className="fa fa-user"></i>
                    </Link>
                    <p>{value.name}</p>
                  </div>
                </div>
                {/* <Link to={value.url}><img key={id} src={value.image} height="350px" width="350px" /></Link> */}
              </>
            })

            }
          </div>
        </div>
      </div>
    </>
  )
}
