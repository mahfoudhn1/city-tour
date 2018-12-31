import React from 'react';
import './navbar';
import '../../logo.png';
import './navbar.scss';

function navbar() {
  return (
  <nav className='navbar'>
    <img src={require('../../logo.png')} alt='next Direction'/>
    <ul className="nav-links">
        <li>
            <a href='/' className='nav-link'>Home</a>
        </li>
        <li>
            <a href='#' className='nav-link'>About</a>
        </li>
        <li>
            <a href='#' className='nav-link'>Tours</a>
        </li>

    </ul>
  
  
  </nav>
  )
}



export default navbar;