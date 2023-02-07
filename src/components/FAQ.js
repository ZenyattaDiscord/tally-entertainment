import React from "react";
import styled  from "styled-components";
import { AboutStyle } from "../Styles";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../Animation";
import { UseScroll } from "./UseScroll";

/**Animate shared layout allows for detection of the layout being changed.
 * when the toggle children enter and leave the screen, we will detect it and animate the layout
 * Toggle component is reusable component in which we pass a title prop and allow for drop down when clicked
 */

function FAQSection(){
    const [element, controls] = UseScroll();


    return(
        <FAQ variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>Any questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                        <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                        <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                </Toggle> 
                <Toggle title="Different Payment Methods">
                        <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                </Toggle>
                <Toggle title="What products do you offer?">
                        <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </FAQ>
    )
}


const FAQ = styled(AboutStyle)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;
export default FAQSection;