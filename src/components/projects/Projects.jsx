
import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from '../../assets/index'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id = "projects" className=' w-full bg-[#3c6894] py-20 border-b-[1px] border-b-black' >
      <div className='w-[90%] mx-auto'>


        <div className='flex justify-center items-center text-center'>
            <Title
            title = "VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK" 
            des = "My Projects"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols- gap-6 xl:gap-14' >
            <ProjectCard 
            title = "VTU Website"
            des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis" src={projectOne}/>
            <ProjectCard 
            title = "E-COMMERCE WEBSITE"
            des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis" src={projectTwo}/>
            <ProjectCard 
            title = "CHATTING APP"
            des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis" src={projectThree}/>
            <ProjectCard 
            title = " "
            des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis" src={projectThree}/>
            <ProjectCard 
            title = " "
            des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis" src={projectOne}/>
            <ProjectCard 
            title = ""
            des = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis" src={projectTwo}/>

        </div>
      </div>
    </section>
  )
}

export default Projects