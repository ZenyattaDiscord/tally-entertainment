import React from "react";
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { AboutStyle, Description, Hide, Image } from "../Styles";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
//use animation allows for control of when to animate
import { useAnimation } from "framer-motion";
import { fade } from "../Animation";
import { UseScroll } from "./UseScroll";


function ServicesSection(){
    const [element,controls] = UseScroll();

    return (
        <Services ref={element} animate={controls} initial="hidden" variants={fade}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="" />
                            <h3>efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="" />
                            <h3>diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="" />
                            <h3>money</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="" />
            </Image>
        </Services>

    )
}
//Customize services style based on about
const Services = styled(AboutStyle)`
    h2{
        padding-bottom:5rem;
    }
    p{
        width:70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    text-align: center;         
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 1300px){
        justify-content: center;
    }
`;

const Card = styled.div`
    flex-basis: 15rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;
export default ServicesSection;