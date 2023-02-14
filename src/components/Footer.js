import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        {/* <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/evann-fries/'>
          <LinkedInIcon/>
          </a>
          <a href='https://github.com/evannf'>
          <GitHubIcon />
          </a> */}
        {/* </div> */}
            <p> &copy; 2022 Evann Fries</p>
        </div>

  )
}

export default Footer