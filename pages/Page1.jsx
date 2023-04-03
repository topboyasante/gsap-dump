import React , {useRef,useEffect} from 'react'
import ReactLogo from '../src/assets/react.svg'
import { gsap,Power3 } from 'gsap'
import { Link } from 'react-router-dom'

function Page1() {
  let logoItem = useRef(null)

  useEffect(()=>{
    gsap.to(logoItem,
        {
            duration:1,
            opacity:1,
            y:-20,
            ease:Power3.easeOut
        }
    )
    gsap.to('.headerText',
    {
        duration:1,
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay:0.4
    })
    gsap.to('.button',
    {
        duration:1,
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay:0.8
    })
  },[])

  return (
    <main className='centerContainer'>
        <img src={ReactLogo} alt="react" 
        ref={logo=> {logoItem=logo}} className='react-icon'
        />
        <p className='headerText'>Welcome to GSAP.</p>
        <Link to={'page2'}>
            <p className='button'>{`Click Here to Go to the next animation.->`}</p>
        </Link>
    </main>
  )
}

export default Page1