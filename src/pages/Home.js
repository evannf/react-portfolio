import React from 'react';
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Evann</h2>
        <div className='prompt'> 
          <p>
            An aspiring software developer looking to expand my knowledge and further my career.
          </p>
          <a href='https://www.linkedin.com/in/evann-fries/'>
          <LinkedInIcon/>
          </a>
          <a href='https://github.com/evannf'>
          <GitHubIcon />
          </a>
          <a>
          <EmailIcon />
          </a>
        </div>
      </div> 
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
      
    </div>
  )
}

export default Home