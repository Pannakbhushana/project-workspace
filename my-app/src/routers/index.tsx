import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from '../page/home-page'
import AboutUs from '../page/about-us'
import ContactUs from "../page/contact-us";
import Services from "../page/services/iindex";
import WhyUs from "../page/why-us";
import ScrollToTop from "./scroll-to-top";
import { KnowMore } from "../page/know-more";
import { PageTwo } from "../page/know-more/page.2";
import { PageThird } from "../page/know-more/page.3";

const AllRoutes = ()=> {
    return <ScrollToTop>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about-us" element={<AboutUs/>} />
                <Route path="/contact" element={<ContactUs/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/know-more" element={<KnowMore/>} />
                <Route path="/know-more-second-page" element={<PageTwo/>} />
                <Route path="/know-more-third-page" element={<PageThird/>} />
                <Route path="/why-us" element={<WhyUs/>} />
            </Routes>
    </ScrollToTop>
}

export default AllRoutes