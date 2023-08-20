import React, { useRef, useEffect } from 'react'
import './index.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// we gonna use two hooks -> useEffect and useRef
const App = () => {
  let ImgRef = useRef(null);
  useEffect(() => {
    // we gonna use gsap to animate our image
    const el = ImgRef.current;
    gsap.fromTo(el,
      {
        rotation: 0,
      },{
        rotation: 180, 
        duration: 1,
        scrollTrigger: {
          trigger: el,

        }
      })
  },[])

  return (
    <div className='text-3xl semibold flex flex-col justify-start items-center'>
    <div className="helper h-screen w-screen bg-orange-500 mb-[200px]"></div>
      <div className="image h-40 w-40 mb-[300px] ">
        <img ref={ImgRef} src="../sherlock.png" className="spinning-image border-solid border-yellow rounded-[50px]" alt="this is a image" />
      </div>
    </div>
  )
}

export default App