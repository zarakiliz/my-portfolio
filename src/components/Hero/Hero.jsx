import React from 'react'
import "./Hero.css"

//define Hero component
const Hero = () => {
  return (
    //structure for Hero section
    <div id='home' className="hero">
        <h1><span>Hello, I'm Elizabeth!</span></h1>
        <p>I am a Senior CS student interested in Artificial Intelligence</p>

        <div className="hero-action">
            {/* <div className="hero-connect">Connect with Me</div> */}
            <div className="hero-resume" >
              <a href='./assets/ElizabethOrellanaResume.pdf'>My Resume</a>
              </div>
        </div>
    </div>
  )
}

export default Hero