import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from '../page/home-page'
import AboutUs from '../page/about-us'

const AllRoutes = ()=> {
    return <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-us" element={<AboutUs/>} />
            </Routes>
    </>
}

export default AllRoutes