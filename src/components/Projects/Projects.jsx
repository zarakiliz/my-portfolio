import React from 'react'
import './Projects.css'

//define Projects component
const Projects = () => {
  return (
    //structure for Projects section
    <div id='projects' className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      
      {/* Cat Cafe project with a link to github */}
      <div className="cat-cafe">
        <h2>Cat Cafe Menu</h2>
        {/* <br/> */}
        <p>This project is a small menu that offers a variety of cat food flavors 
            as well as vegetarian options for non-carnivores (my rabbit). I had the idea to make this project
            because me and my mom feed stray cats as well, as our own, and we call our house a Cat Cafe.
        </p>
        <a href='https://github.com/zarakiliz/CatCafeMenu'> Cat Cafe Menu - Github</a>
      </div>

      {/* car meet project with a link to github */}
      <div className="car-meet">
        <h2>Car Meet</h2>
        <p>This project aims to be a showcase of my significant other's favorite cars. It would list his top 3
           cars from each of his top 5 brands. This project is currently in progress.
        </p>
        <a href='https://github.com/zarakiliz/CarMeet'>Car Meet - Github</a>
      </div>
    </div>
  )
}

export default Projects