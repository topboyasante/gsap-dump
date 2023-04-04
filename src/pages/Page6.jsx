import { Power3, gsap } from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Page6() {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        
        let tl = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:".mainItem",
                    toggleActions:"restart pause resume pause",
                    scrub:true,
                    start:"50% center",
                    end:"bottom 50%",
                },

            }
        )

        tl.to(".mainItem",
        {
            backgroundColor:'red', 
            duration:3,
            ease:Power3.easeOut
        })
        tl.to(".mainItem",
        {
            backgroundColor:'yellow', 
            duration:3,
            ease:Power3.easeOut
        })
        tl.to(".mainItem",
        {
            backgroundColor:'green', 
            duration:3,
            ease:Power3.easeOut
        })
        tl.to(".mainItem",
        {
            backgroundColor:'blue', 
            duration:3,
            ease:Power3.easeOut
        })
    })

  return (
    <main>
        <p className="text-white fixed bg-[#242424] w-screen h-[10vh] z-[50] flex justify-center items-center text-syne text-4xl">Scroll Down!</p>
        <div className="mainItem w-[100%] h-[500vh] bg-white relative">
        </div>
    </main>
  )
}

export default Page6