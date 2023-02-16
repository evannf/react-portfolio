import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
      <div className='details'>
        <h1>{project.name}</h1>
        <a href={project.link}>
        <img src={project.image} alt="Project"/>
        </a>
        <p className='projectDesc'>
            <b>Skills Used:</b> {project.skill}
            {/* <a href={project.link}>
              Deployed Site
            </a> */}
        </p>
          <a href={project.github}>
          <GitHubIcon />
          </a>
        </div>
    </div>
  )
}

export default ProjectDisplay