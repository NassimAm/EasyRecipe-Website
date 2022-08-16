import React from 'react';
import './style.css';
import searchIcon from '../ressources/icons8-search-30.png'
import userIcon from '../ressources/icons8-user-48.png'
import menuIcon from '../ressources/icons8-menu-30.png'

const NavBar = () => {
    return(
        <div className='navbar'>
            <div>
                <p className='navbar-logo-name'>EasyRecipe</p>
            </div>
            <div className='navbar-buttons'>
                <a className='navbar-link' href='#'>Home</a>
                <a className='navbar-link' href='#'>Cook</a>
                <a className='navbar-link' href='#'>How it works</a>
                <a className='navbar-link' href='#'>About</a>
                <a className='navbar-link' href='#'>Contact</a>
            </div>
            <div className='navbar-icons'>
                <img className='navbar-icons-desk' src={searchIcon} alt="Search"/>
                <img className='navbar-icons-desk' src={userIcon} alt="User" />
                <img className='navbar-icons-mobile' src={menuIcon} alt="Menu" />
            </div>
        </div>
    );
}

export default NavBar;