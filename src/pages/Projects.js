import React from 'react';
import "../styles/Projects.css";
import ProjectItem from './ProjectItem';
import { projectList } from '../helpers/ProjectList'


function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects </h1>
      <div className='projectList'>
        {projectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} desc={project.desc}/>
        })}
      </div>
    </div>
  )
}

export default Projects