import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, desc, id }) {
    const navigate = useNavigate();
  return (
    <div 
     className='projectItem'
     onClick={() => {
        navigate('/project/' + id)
     }}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1> {name} </h1>
        <p>{desc}</p>
    </div>
  )
}

export default ProjectItem