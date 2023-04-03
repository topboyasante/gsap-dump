import React, { useEffect,useState } from 'react'
import { gsap,Power3 } from 'gsap'
import { Link } from 'react-router-dom'

function Page2() {

    const [circleExpanded,setCircleExpanded] = useState(false)

    useEffect(()=>{
        gsap.to(".visibility-hidden",
            {
                css:{
                    visibility:'visible'
                },
                duration:2
            }
        )
  
       gsap.fromTo('.yellow',
            {
                opacity:0,
                x:40,
                ease:Power3.easeOut,
                duration:0.8
            },
            {
                opacity:1,
                x:0,
                ease:Power3.easeOut,
                duration:0.8
            }
        )

       gsap.fromTo('.red',
            {
                opacity:0,
                x:40,
                ease:Power3.easeOut,
                delay:0.2,
                duration:0.8
            },
            {
                opacity:1,
                x:0,
                ease:Power3.easeOut,
                delay:0.2,
                duration:0.8
            }
        )

       gsap.fromTo('.blue',
            {
                opacity:0,
                x:40,
                ease:Power3.easeOut,
                delay:0.4,
                duration:0.8
            },
            {
                opacity:1,
                x:0,
                ease:Power3.easeOut,
                delay:0.4,
                duration:0.8
            }
        )

        gsap.to(".button",
        {
           duration:1,
            opacity:1,
            y:-20,
            ease:Power3.easeOut,
            delay:0.8
        }
    )
    },[])

    function expandCircle(){
        gsap.to('.red',
            {
                width:200,
                height:200,
                ease:Power3.easeOut
            }
        )
        setCircleExpanded(true)
    }
    function reduceCircle(){
        gsap.to('.red',
            {
                width:75,
                height:75,
                ease:Power3.easeOut
            }
        )
        setCircleExpanded(false)
    }

  return (
    <main className='centerContainer visibility-hidden'>
        <div className="circle yellow"></div>
        <div className="circle red" onClick={circleExpanded !== true ?expandCircle:reduceCircle}></div>
        <div className="circle blue"></div>
        <Link to={'/page3'}>
            <p className='button'>{`Click Here to Go to the next animation. 
            But Before that click the red circle!->`}</p>
        </Link>
    </main>
  )
}

export default Page2