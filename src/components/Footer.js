import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <LinkedInIcon />
        <GitHubIcon />
            <p> &copy; 2022 Evann Fries</p>
        </div>
    </div>
  )
}

export default Footer