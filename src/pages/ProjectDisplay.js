import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
      <div className='details'>
        <div className='textBlocks'>
        <h1>{project.name}</h1>
        <a href={project.link}>
        <img src={project.image} alt="Project"/>
        </a>
        <p className='skills'>
            <b>Skills Used:</b> {project.skill}
            {/* <a href={project.link}>
              Deployed Site
            </a> */}
        </p> 
        {/* <p className='stories'>
            <b>User Stories:</b>
          
        </p> */}

        </div>
          <a href={project.github}>
            Github Repo
          </a>
        </div>
    </div>
  )
}

export default ProjectDisplay