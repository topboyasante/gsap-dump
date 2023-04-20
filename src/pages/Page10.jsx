import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import React, { useEffect } from 'react'
import { useRef } from 'react'

function Page10() {

  const square = useRef(null)
  const square2 = useRef(null)

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.to(square.current,
      {
        backgroundColor:"blue",

        scrollTrigger:{
          trigger:square2.current,
          scrub:true,
          start:'top top',
          end:"bottom bottom",
          pin:square.current,
          pinSpacing:false,
          markers:true,
        }
      }
    )
  })
  return (
    <main>
      <div className="w-screen h-screen bg-black"></div>

      <div className="w-screen h-[100vh] bg-gray-500 section-2 flex">

        <div className="w-[50vw] h-screen bg-yellow-400 pin-box" ref={square}></div>

        <div className='pin-trigger h-[200vh]' ref={square2}>
          <div className="w-[50vw] h-[100vh] bg-red-400"></div>
          <div className="w-[50vw] h-[100vh] bg-green-400"></div>
        </div>

      </div>
    </main>
  )
}

export default Page10