import React from 'react'
import Header from '../../Components/Header/Header'
import MainSection from '../../Components/MainSection/MainSection'
import AboutSection from '../../Components/Aboutsection/AboutSection'
import Skill from '../../Components/SkillsSection/Skill'
import Project from '../../Components/Project/ProjectSection'
import { FaEnvelope } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Footer from '../../Components/Footer/Footer'
import ServicesSection from '../../Components/ServicesSection'

const Home = () => {
  return (
    <div>
      
      <MainSection/>
      <AboutSection/>
      <Skill/>
      <Project/>
     <ServicesSection/>
      <Footer/>
     

    
    </div>
  )
}

export default Home
