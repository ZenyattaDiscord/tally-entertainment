import React from "react";
import { useInView } from "react-intersection-observer";
//use animation allows for control of when to animate
import { useAnimation } from "framer-motion";

export const UseScroll = () => {
    const [element, view] = useInView({threshold: 0.3});
    const controls = useAnimation();

    if(view){
        controls.start('show');
    }
    else{
        controls.start('hidden');
    }
    return(
        [element, controls]
    )
};