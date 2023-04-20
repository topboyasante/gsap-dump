import React, { useEffect } from 'react'
import "../text-scroll.css"
import { Link } from 'react-router-dom'


function Page9() {
     
    useEffect(()=>{
        let scroll = window.scrollY/1.5

        function updateScroll(){
            scroll = window.scrollY/1.5
            document.getElementById("ticker").style.transform=
            "translateX(-" +scroll+"px)"
        
        }

        setInterval(updateScroll,1)
    })

  return (
    <main>
        <div className="main-container">
            <div className="sub-container">
                <div className="text">
                    <div className="ticker-reel" id="ticker">
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                        <div className="reel-item">&nbsp; - Animated Text on Scroll</div>
                    </div>
                </div>
               
            </div>
        </div>
        <div className="scrolling-text">
            scroll to animate
            <Link to={'/page10'}>
                <p className='text-white'>{`Click Here to Go to the next animation! ->`}</p>
            </Link>
        </div>
       
    </main>
  )
}

export default Page9