import { gsap,Power2 } from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Page4() {

  useEffect(()=>{
      gsap.fromTo('.mainImg',
        {
          opacity:0,
          x:"200vw"
        },
        {
          opacity:1,
          x:0,
          duration:1
        }
      )
      gsap.fromTo('.headerText',
        {
          opacity:0,
          x:"-100vw"
        },
        {
          opacity:1,
          x:0,
          delay:1,
          duration:1,
        }
      )
      
      gsap.fromTo('.subtext',
        {
          opacity:0,
          y:"200vh"
        },
        {
          opacity:1,
          y:0,
          duration:1,
          delay:2
        }
      )

      gsap.to(".button",
      {
         duration:1,
          opacity:1,
          y:-10,
          ease:Power2.easeOut,
          delay:3
      })
  })

  return (
    <main className='p-5'>
       <section className='flex justify-between items-center'>
          <section className='w-[50%] p-5'>
              <h1 className="text-syne font-bold text-8xl headerText uppercase ">Boxed Water Is Better.</h1>
          </section>
          <img src="https://images.unsplash.com/photo-1679678691007-67ae3f68a13e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80" alt="water" 
          className='w-[50%] mainImg'/>
       </section>
       <section className='my-5'>
        <p className="text-syne subtext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit libero aspernatur, veniam beatae inventore sed non placeat numquam cum ea?</p>
       </section>
       <Link to={'/page4'}>
            <p className='button'>{`Click Here to Go to the next animation! ->`}</p>
      </Link>
    </main>
  )
}

export default Page4