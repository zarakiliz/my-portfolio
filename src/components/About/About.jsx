import React from 'react'
import './About.css'

//define About component
const About = () => {
  return (
    //structure for the About Me section
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>

        <div className='about-sections'>
            <div className="about-left">
            <img src="./assets/images/lizz.png" alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a senior CS Student who is passionate about learning new things 
                        and my hobbies. I am interested in pursing a career in Artificial Intelligence within the medical field.
                    </p>
                    <p> Some of my hobbies include playing video games, listening to music, hanging out with friends and my pets,
                        going out on adventures and eating good food.
                    </p>
                </div>

                <div className="about-skills">
                    <div className="about-skill">
                        {/* hr for progress bar */}
                        <p>HTML & CSS</p><hr style={{width: "70%"}}/> 
                    </div>
                    <div className="about-skill">
                        <p>React JS</p><hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>React JS + Vite</p><hr style={{width: "50%"}}/>
                    </div>
                    <div className="about-skill">
                        <p>Javascript</p><hr style={{width: "60%"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About