import React from "react";
import {motion, useScroll} from "framer-motion"

const Circle = () => {
    const {scrollYProgress} = useScroll(
        {
            offset: ["start end", "center start"]
        }
    )
    return (               
        <figure className="absolute left-0 first:mt-0 last:mb-0 stroke-dark" >
            <svg width="100" height="100" viewBox='0 0 100 100' >
            <circle cx="75" cy="50" r="20" className='stroke-primary stroke-1 fill-none' />
            <motion.circle cx="75" cy="50" r="20" className='sstroke-[5px] fill-light' />
            <circle cx="75" cy="50" r="20" className='stroke-1 fill-primary' />
            </svg>
        </figure>
    )
}
export default Circle