import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from '@mui/icons-material/Search';

// import 'wind.png' from '../public/images/wind.png'
// import SearchIcon from '@mui/icons-material/Search';
// import AirIcon from '@mui/icons-material/Air';
// import { click } from '@testing-library/user-event/dist/click';

const apikey = "fc28cdd3827de3327cb0622302f3e7b3";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


export default function WeatherApp() {
    // const [search, setSearch] = useState('mumbai')
    const [icon, setIcon] = useState('')
    const [display,setDisplay]=useState(false)



    // const change = (event) => {
    //     setSearch(event.target.value)
    // }

    // useEffect(() => {
    //     const fetchdata = async () => {

    //         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${search}&units=metric&appid=${apikey}`);
    //         const collect = await response.json();
    //         console.log(collect)
    //         setCity(collect)

    //     }
    //     fetchdata();
    // }, [search])

    const searching = async () => {
        const element = document.getElementsByClassName("cityname");
        if (element[0].value === "") {
           return <p>please write</p>
        }
        else{
          setDisplay(true)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${element[0].value}&units=metric&appid=${apikey}`);
        const collect = await response.json();
        console.log(collect);
        
        const hum = document.getElementsByClassName("humidity");
        const city = document.getElementsByClassName("city");
        const temp = document.getElementsByClassName("temperature");
        const wind = document.getElementsByClassName("windspeed");


        hum[0].innerHTML = collect.main.humidity + " %";
        city[0].innerHTML = collect.name;
        temp[0].innerHTML = collect.main.temp + " c";
        wind[0].innerHTML = collect.wind.speed + " km/pr";

        if (collect.weather[0].icon === '01d' || collect.weather[0].icon === '01n') {
            setIcon('./images/clear.png')
        }
        else if (collect.weather[0].icon === '02d' || collect.weather[0].icon === '02n') {
            setIcon('./images/clouds.png')
        }
        else if (collect.weather[0].icon === '03d' || collect.weather[0].icon === '03n') {
            setIcon('./images/drizzle.png')
        }
        else if (collect.weather[0].icon === '04d' || collect.weather[0].icon === '04n') {
            setIcon('./images/drizzle.png')
        }
        else if (collect.weather[0].icon === '09d' || collect.weather[0].icon === '09n') {
            setIcon('./images/rain.png')
        }
        else if (collect.weather[0].icon === '13d' || collect.weather[0].icon === '13n') {
            setIcon('./images/snow.png')
        }
        else {
            setIcon('./images/clear.png')
        }
      }
    }

    return (
        <>

            <div className='main_container'>

                <div className='search'>
                    <input type='text' list="data" className='cityname' placeholder='Search City' />
                    <datalist id='data'>
                        <option value="Mumbai"></option>
                        <option value="Delhi"></option>
                        <option value="New york"></option>
                        <option value="Berlin"></option>
                        <option value="Gorakhpur"></option>

                    </datalist>
                    <button onClick={() => searching()}>
                       <SearchIcon/>
                    </button>
                </div>
                {display ?
                <div className='second_container'>
                    <div className='image'>
                        <img src={icon} height="100px" width="100px" />
                    </div>
                    <div className='temperature'></div>
                    <div className='city'></div>
                    <div className='data'>
                        <div>
                            <div className='one-two'>
                                <img src='./images/humidity.png' height="18px" width="18px" />
                            </div>
                            <h3 className='humidity'></h3>
                            <p>Humidity</p>
                        </div>
                        <div className='wind'>
                            <div className='one-two'>
                                <img src='./images/wind.png' height="18px" width="18px" />
                            </div>
                            <h3 className='windspeed'></h3>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>: null} 
            </div>
        </>
    )
}
