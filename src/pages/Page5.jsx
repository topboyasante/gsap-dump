import { gsap } from 'gsap'
import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

function Page5() {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        
        let tl = gsap.timeline(
            {
                scrollTrigger:{
                    trigger:".c",
                    toggleActions:"restart pause resume pause",
    
                    /* restart none none none : restarts the animation when the target is in view
                       restart pause none none : pauses the animation when you scroll past it
                       restart pause resume none : pauses the animation when you scroll past it, and resumes it when the target is back in view
                       restart pause reverse none : pauses the animation when you scroll past it, and reverses it when the target is back in view
                       restart pause reverse pause : pauses the animation when you scroll past it downwards , 
                       reverses it when the target is back in view, and pauses it when you scroll past it upwards
                    */
    
                       start:"top center",
                       /*
                       top center: the animation starts when the top of the target hits the center of the viewport
                       */
    
                       end:"bottom 100px",
                        /*
                       bottom 100px: the animation ends when the bottom of the target is at 100px from the top of the viewport
                       */
    
                        scrub:true,
                        // Locks the animation to the scroll bar. set it to a number to determine the number of seconds to catch up
    
                       markers:true
                },
            }
        )
        tl.to(".c",
        {
            x:800,
            rotation:360,
            duration:3
        })
        tl.to(".c",
        {
           backgroundColor:'purple',
           duration:1
        })
        tl.to(".c",
        {
            x:0,
            duration:3
        })
    })

  return (
    <main className='p-5'>
        <div className="a bg-red-500 w-[200px] h-[200px] my-[5em]"></div>
        <div className="b bg-yellow-500 w-[200px] h-[200px] my-[5em]"></div>
        <div className="b bg-yellow-500 w-[200px] h-[200px] my-[5em]"></div>
        <div className="b bg-yellow-500 w-[200px] h-[200px] my-[5em]"></div>
        <div className="c bg-green-500 w-[200px] h-[200px] my-[5em] p-3">
            <Link to={'/page6'}>
                <p className='text-white'>{`Click Here to Go to the next animation! ->`}</p>
            </Link>
        </div>
        <div className="b bg-yellow-500 w-[200px] h-[200px] my-[5em]"></div>
        <div className="b bg-yellow-500 w-[200px] h-[200px] my-[5em]"></div>
        <div className="b bg-yellow-500 w-[200px] h-[200px] my-[5em]"></div>
        <div className="b bg-yellow-500 w-[200px] h-[200px] my-[5em]"></div>
    </main>
  )
}

export default Page5