import React from "react";
import About from '../components/About';
import ServicesSection from "../components/Services";
import FAQSection from "../components/FAQ";
import {motion} from 'framer-motion';
import { pageAnimation } from "../Animation";
import ScrollTop from "../components/scrollTop";


function AboutUs(){
    return(
        
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <About />
            <ServicesSection />
            <FAQSection />
            <ScrollTop/>
        </motion.div>
    )
}

export default AboutUs;