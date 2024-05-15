import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import About from './components/About/About'

const App = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App