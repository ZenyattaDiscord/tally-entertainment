import React from "react";
import {motion} from 'framer-motion';
import { pageAnimation, titleAnim } from "../Animation";
import styled from "styled-components";
import ScrollTop from "../components/scrollTop";
function ContactUs(){
    return(
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <ScrollTop/>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div className="">
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    )

}


const ContactStyle= styled(motion.div)`
    padding: 5rem, 10rem;
    color: white;
    min-height: 90vh;
    @media(max-width: 1300px){
        padding: 2rem;
        font-size: 1rem;
    }
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: white;
`;

const Hide = styled.div`
    overflow: hidden;
`
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: white;
`
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`

export default ContactUs;