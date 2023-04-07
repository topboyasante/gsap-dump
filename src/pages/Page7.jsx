import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Page7() {
  
    useEffect(()=>{
      const cards = document.querySelectorAll(".card")

      const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
          entry.target.classList.toggle("show",entry.isIntersecting)
          // if(entry.isIntersecting){
          //   observer.unobserve(entry.target) 
          //   //one the target is visible it is no longer observed by the intersection observer
          // }
        })
      },{
        threshold:1 //runs the function when 100% of the element is shown on screen
      })

      cards.forEach(card=>{
        observer.observe(card)
      })

    },[])

  return (
    <main>
       <Link to={'/page8'}>
                <p className='text-white'>{`Click Here to Go to the next animation! ->`}</p>
        </Link>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
      <div className="card">This is a card.</div>
    </main>
  )

}

export default Page7