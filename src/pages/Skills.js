import React from 'react'
import '../styles/Skills.css'

function Skills() {
  return (
    <div className='skills'> 
        <h1>Skills</h1> 
        <ol className='list'>
          <li className='item'>
            <h2> Languages </h2>
            <span> JavaScript, Python, HTML, CSS, EJS, Typescript </span>
          </li>
          <li className='item'>
            <h2> Libraries and Frameworks </h2>
            <span> React, Express.js, Mongoose, Flask </span>
          </li>
          <li className='item'>
            <h2> Databases/Other </h2>
            <span> MongoDB, Strapi, MySQL, PostgreSQL, Git, Postman, Debugging </span>
          </li>
        </ol>
      </div>
  )
}

export default Skills