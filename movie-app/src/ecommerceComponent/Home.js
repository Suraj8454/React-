import React from 'react'
import "./Home.css"
import Services from '../component/Services';
import Trusted from '../component/Trusted';
import Footer from '../component/Footer';
import Feauterproduct from '../component/Feauterproduct';

function Home() {
    return (
        <>
            <div className='home'>
                <div className='home_container'>
                    <div className='left'>
                        <h3>Welcome to</h3>
                        <h1>Fake Stores</h1>
                        <p>This is a fake store of product only for practice of e commerce web site.
                            minimun prdoct in this web site for the practice and create my own ideas.
                        </p>
                        <button>Explore</button>
                    </div>
                    <div className='right'>
                        <img src='/ecommerce.jpeg' height="400px" width="400px" />
                    </div>
                </div>
            </div>
            <Feauterproduct/>
            <Services />
            <Trusted/>
            <Footer/>
        </>
    )
}


export default Home;
