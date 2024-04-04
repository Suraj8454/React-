import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { fetchdata } from './Utils/api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGenres } from './store/homeslices';
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"
import Home from './pages/home/Home';
import Error from './pages/404/Error';
import Seach from './pages/searchresult/Seach';
import Explore from './pages/explore/Explore';
import Detail from './pages/details/Detail';






function App() {
  const dispatch = useDispatch()
  const { url } = useSelector((state) => state.home);

  const test = () => {
    fetchdata('/configuration')
      .then((res) => {
        console.log(res)
        const url={
          backdrop: res.images.secure_base_url + "orginal",
          poster: res.images.secure_base_url + "orginal",
          profile: res.images.
          secure_base_url + "orginal",
        }
        // console.log(url)
        dispatch(getApiConfiguration(url))
      })
  }
  useEffect(() => {
    test()
  }, []);
  return (
    <>
      {/* {url?.total_pages}
   {url?.total_results} */}
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Explore/:mediaType' element={<Explore />} />
          <Route path='/:mediaType/:id' element={<Detail />} />
          <Route path='/Seach/:query' element={<Seach />} />
          <Route path='*' element={<Error />} />

        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
