import React, { useEffect } from 'react'
import ImageX from '../assets/people.webp'
import { gsap,Power2 } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import { Link } from 'react-router-dom'


function Page3() {

  //Used To Target Pseudo Elements:
  let imageReveal = CSSRulePlugin.getRule('.img-container::after')

  const tl = gsap.timeline()

  useEffect(()=>{
    tl.to('.container', {
      css:{
        visibility:'visible'
      },
      duration:1
    })

    tl.to(imageReveal,{
      duration:1.4,
      width:'0%',
      ease:Power2.easeInOut
    })

    tl.from('.scrollreveal-img',{
      duration:1.4,
      scale:1.6,
      ease:Power2.easeOut,
      // delay:-1.4
    })

    tl.to(".button",
    {
       duration:1,
        opacity:1,
        y:-10,
        ease:Power2.easeOut,
    })

  })
  

  return (
    <main className='centerContainer'>
      <div className="container">
        <>
          <div className="img-container">
            <img
              src={ImageX}
              className='scrollreveal-img'
            />
          </div>
        </>
      </div>
      <Link to={'/page4'}>
            <p className='button'>{`Has The Image Loaded? Click Here to Go to the next animation! ->`}</p>
      </Link>
    </main>
  )
}

export default Page3