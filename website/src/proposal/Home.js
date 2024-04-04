import React from 'react'
import './Main.css'
import First from './First';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Yes from './Yes';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<First />} />
                    <Route path="/Page1" element={<Page1 />} />
                    <Route path="/Page2" element={<Page2 />} />
                    <Route path="/Page3" element={<Page3 />} />
                    <Route path="/Yes" element={<Yes />} />



                </Routes>
            </Router>
        </div>
    )
}
