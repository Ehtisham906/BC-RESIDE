import './Header.css'
import logo from '../../images/logo.webp'
import React, { useState } from 'react';
function Navbar() {
    const [navItems,setNavItems]= useState(true);

    function toogleNavbar(){
        setNavItems(!navItems)
    }
     

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="bc-reside-logo" className="h-12" />
                <button className="navbar-toggler"  onClick={toogleNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z" fill="#000000" />
                    </svg>
                </button>
            </div>
            <div className={`nav-items ${navItems ? "":"open"}`} >
                <a href="#" className="nav-links">HOME</a>
                <a href="#" className="nav-links">ABOUT</a>
                <a href="#" className="nav-links">SERVICES</a>
                <a href="#" className="nav-links">GUIDE</a>
                <a href="#" className="nav-links">MORTGAGE</a>
                <a href="#" className="nav-links">EDITORIAL LOFT</a>
                <a href="#" className="nav-links contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 18C6.71667 18 6.47917 17.9042 6.2875 17.7125C6.09583 17.5208 6 17.2833 6 17V15H19V6H21C21.2833 6 21.5208 6.09583 21.7125 6.2875C21.9042 6.47917 22 6.71667 22 7V22L18 18H7ZM2 17V3C2 2.71667 2.09583 2.47917 2.2875 2.2875C2.47917 2.09583 2.71667 2 3 2H16C16.2833 2 16.5208 2.09583 16.7125 2.2875C16.9042 2.47917 17 2.71667 17 3V12C17 12.2833 16.9042 12.5208 16.7125 12.7125C16.5208 12.9042 16.2833 13 16 13H6L2 17ZM15 11V4H4V11H15Z" fill="white" />
                    </svg>
                    CONTACT</a>
            </div>
        </nav>
    );
}

export default Navbar;
