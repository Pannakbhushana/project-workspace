import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from '../page/home-page'
import AboutUs from '../page/about-us'
import ContactUs from "../page/contact-us";
import Services from "../page/services/iindex";
import WhyUs from "../page/why-us";

const AllRoutes = ()=> {
    return <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactUs/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/why-us" element={<WhyUs/>} />
            </Routes>
    </>
}

export default AllRoutes