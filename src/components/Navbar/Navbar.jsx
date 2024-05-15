import React from 'react'
import './Navbar.css'

//Defines component for Navbar
const Navbar = () => {
  return (
    <>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                {/* <img className='logo' src='./assets/images/' alt=''/> */}
                {/* displays name on navbar */}
                <h2 className='name'>Elizabeth Orellana</h2>
                <ul>
                    <li>
                        <a href='#home' className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href='#about' className='menu-item'>About Me</a>
                    </li>
                    {/* <li>
                        <a className='menu-item'>Skills</a>
                    </li> */}
                    <li>
                        <a href='#projects' className='menu-item'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact' className='menu-item'>Contact</a>
                    </li>

                    {/* //button to create hire me button
                    <button className='hire-btn' onClick={() => {}}>Hire Me!</button> */}
                </ul>

                {/* hamburger menu */}
                {/* <button className='menu-btn' onClick={() => {}}>
                    <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                    </span>
                </button> */}
            </div>
        </nav>
    </>
  )
}

export default Navbar