import React from 'react';
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Evann</h2>
        <div className='prompt'> 
          <p>
            An aspiring software developer looking to expand my knowledge (hi Daniel 🫶🏻) and further my career.
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
            <h2> Front-End </h2>
            <span> HTML, CSS, ReactJS, NPM, BootStrap </span>
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span> NodeJS, ExpressJS, MongoDB, Mongoose, Flask, MySQL </span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span> JavaScript, Python, EJS </span>
          </li>
        </ol>
      </div>
      
    </div>
  )
}

export default Home