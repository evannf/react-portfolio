import React from 'react';
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import 'animate.css'
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>
            <span className='fun'>Fun&nbsp;</span>
            <span className='in'>In&nbsp;</span>
            <span className='the'>The&nbsp;</span>
            <span className='front'>Front</span>
            <span className='end'>-End</span>
        </h2>
        <h2>Business In The Back</h2>
        <div className='prompt'> 
          <p>
          My name is Evann, and I'm an aspiring software developer looking to create or improve your web apps!
          </p>
          <div className='icons'>
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
      </div> 
    </div>
  )
}

export default Home