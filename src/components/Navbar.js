import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
//look into NavLink and its isActive() boolean
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();
    
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}> 
        <div className='toggleButton'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
             <ReorderIcon />
            </button>
        </div> 
        <div className='links'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/projects'>Projects</Link>
            {/* <Link className='link' to='/skills'>Skills</Link> */}
            <Link className='link' to='/experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar