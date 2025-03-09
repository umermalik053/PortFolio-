import React from 'react'
import ProjectCard from '../Components/common/ProjectCard'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import ProjectSection from '../Components/Project/ProjectSection'

const Project = () => {
  return (
    <>
    <div className='bg-[#0d0d0d] pt-[30px]'>
      <Header/>
    </div>
    <ProjectSection/>
    <Footer/>
    
    </>
  )
}

export default Project
