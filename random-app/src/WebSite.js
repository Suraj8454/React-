import React from 'react'
import NavBarWebsite from './component/NavBarWebsite'
import Home from './component/Home';
import Service from './component/Service';
import About from './component/About';
import Contact from './component/Contact';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
// import Footer from './component/Footer';

export default function WebSite() {
  return (
    <>
      <Router>
        <NavBarWebsite />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}
