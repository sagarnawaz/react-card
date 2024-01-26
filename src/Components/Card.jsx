import React from 'react'
import { motion } from "framer-motion"


function Card({data, reference}) {
  return (
    < motion.div drag dragConstraints={reference} 
    whileDrag={{scale: 1.2}} 
    dragElastic={0.1} 
    dragTransition={ {bounceStiffness: 100, bounceDamping: 100 }} 
    className='relative flex-shrink-0 w-44 h-[20rem] bg-zinc-400 rounded-[25px] overflow-hidden'> 
   <div  > {data.image}</div>
<div className='px-5'>
<h1 className='font-semibold'>{data.title}</h1>
<p>{data.desc}</p>
</div>


    
    </motion.div>

    )
}

export default Card