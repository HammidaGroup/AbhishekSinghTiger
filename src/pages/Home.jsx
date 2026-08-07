import React from 'react'
import Header from '../components/Header'
import "./Home.css"
import Hero from '../components/Hero'
import About from './About'
import Mission from './Mission'
import Gallery from './Gallery'
const Home = () => {
  return (
   <>
   <div className="homeDiv">
   <Header/>
<Hero/>
<About/>
<Mission/>
<Gallery/>
   </div>
   </>
  )
}

export default Home