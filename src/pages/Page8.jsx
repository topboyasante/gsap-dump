import React, { useEffect } from 'react'
import "../grain-effect.css"
import "../text-reveal.css"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Link } from 'react-router-dom'

function Page8() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".text p",
      {
        backgroundPositionX:"0%",
        stagger:1,
        scrollTrigger:{
          trigger:".text p",
          scrub:1,
          start:"top center",
          end:"bottom top",
        }
      })
  },[])

  return (
    <main>
      <div className="noise"></div>
      <div className="noise-container">
        <div className="noise-text">
          <h1 className='text-8xl'>Nana 
            <br/>
            Kwasi 
            <br/>
            Asante</h1>
        </div>
      </div>

      <div className="text-reveal-container">
        <div className="text">
          <p>Surprising</p>
          <p>and playful ways</p>
          <p>to tell a story</p>
         
        </div>
      </div>
      <Link to={'/page9'}>
                <p className='text-white'>{`Click Here to Go to the next animation! ->`}</p>
        </Link>
    </main>
  )
}

export default Page8