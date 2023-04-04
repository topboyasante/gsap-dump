import React, { useEffect } from 'react'
import Swirl from '../assets/swirl.png'
import { gsap,Power3, } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'


function Page5() {
  let textReveal = CSSRulePlugin.getRule('span::after')

    useEffect(()=>{
        gsap.fromTo(".anim1",
            {
                opacity:0,
                y:-50,
            },
            {
                opacity:1,
                duration:1,
                y:0,
                ease:Power3.easeInOut,
                stagger:0.6
            }
        )
        gsap.fromTo("img",
            {
                opacity:0,
                y:30,
            },
            {
                opacity:1,
                duration:1,
                y:0,
                ease:Power3.easeInOut,
                delay:1.4
            }
        )
        gsap.to(textReveal,
            {
                cssRule:{
                    scaleY:0,
                },
                duration:1
            })
    },[])

  return (
    <>
      <main>
       <div className="content text-white">
            <h1 className="anim1">
                <span>Bridging the gap</span>
                <br />
                <span>between dreams</span>
                <br />
                <span>and reality</span>
            </h1>
            <p className="anim1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sed deserunt quae ullam commodi! Nesciunt odit doloremque non fugiat perferendis?</p>
            <a href="#" className="anim1">Start Dreaming</a>
       </div>
      </main>
      <aside>
            <img src={Swirl} alt="Swirl"/>
      </aside>
    </>
  )
}

export default Page5