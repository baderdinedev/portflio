import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {projectOne,projectTwo,projectThree} from '../../assets/index'
const Projects = () => {
  return (
    <section
       id="projects"
       className='w-full py-20 border-b-[1px] border-b-black'
    >
    <div className='flex justify-center items-center text-center'>
        <Title 
          title="VISIT MY PORTFLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
       />
    </div>
    <div className='grid grid-cols-3 gap-14'>
        <ProjectCard 
          title="test"
          des="testazajdzaz"
          src={projectOne}
        />
                <ProjectCard 
          title="test"
          des="testazajdzaz"
          src={projectTwo}
        />
                        <ProjectCard 
          title="test"
          des="testazajdzaz"
          src={projectThree}
        />
    </div>
    </section>
  )
}

export default Projects