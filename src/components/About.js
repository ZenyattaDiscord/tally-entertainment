import React from "react";
import home1 from '../img/home1.png';
//import styled from 'styled-components';
import { AboutStyle, Description, Hide, Image } from "../Styles";
import {motion} from 'framer-motion';
import { titleAnim, fade, photoAnim } from "../Animation";
import Wave from "./Wave";

/*About component, made using a styled component as imported in styles
  Animations also imported and used as different variants */

function About()
{


    

    return(
        <AboutStyle>
            <Description>
                <motion.div className="title" >
                    <Hide>
                        <motion.h2 variants={titleAnim}  >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography ideas you might have! We
                    have professionals with amazing skills.
                </motion.p>
                <motion.button variants={fade}>Contact</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1}></motion.img>
            </Image>
            <Wave />
        </AboutStyle>
    )
}

export default About;

