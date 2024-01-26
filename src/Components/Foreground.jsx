import React, { useRef } from 'react'
import Card from './Card'



function Foreground() {

    const ref = useRef(null)

    const data = [
        {image: <img src="https://picsum.photos/id/1/200/300
        " alt="" />,
        title: "Sagar Nawaz",
        desc: "Frontend Developer",
    },
    {image: <img src="https://picsum.photos/id/2/200/300
    " alt="" />,
    title: "Muddasir Shabbir",
    desc: "Frontend Developer"
},
{image: <img src="https://picsum.photos/id/3/200/300
" alt="" />,
        title: "Abdul Ahad",
        desc: "Frontend Developer"
    }]
  return (
    <>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-5 flex-wrap p-5'>
            {data.map((item, index)=>(
                <Card data={item} reference={ref}  /> 
            ))}
        
        </div> 
    </>
  )
}

export default Foreground