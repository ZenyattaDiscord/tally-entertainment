import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import { useLocation } from "react-router-dom";
import frame1 from '../img/frame1.png';

function Nav(){
    const {pathname} = useLocation();

    return(
        <StyledNav>
            <h1 className=""><Link id="logo" to='/'>Tally Entertainment</Link></h1>
            <ul>
                <li>
                    <Link  className="link" to='/'>About Us </Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}}
                    animate={{width: pathname ==='/' ? "50%" : "0%"}} />
                </li>
                <li>
                    <Link  className="link" to='/work'>Our Work </Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}}
                    animate={{width: pathname ==='/work' ? "50%" : "0%"}} />
                </li>
                <li>
                    <Link  className="link" to='/contactus'>Contact Us</Link>
                    <Line transition={{duration: 0.75}} initial={{width: "0%"}}
                    animate={{width: pathname ==='/contactus' ? "50%" : "0%"}} />
                </li>
            </ul>
        </StyledNav>
    )

}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 1.8rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    @media(max-width: 1300px){
        flex-direction: column;
        padding: 2rem 1rem;
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li{
            padding: 0;
        }
        #logo{
            display: inline-block;
            margin: 2rem;
        }
    }

`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media(max-width: 1500px ){
        left: 0%;
    }
`
export default Nav;