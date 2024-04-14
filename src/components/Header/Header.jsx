import './Header.css'
import logo from '../../images/logo.webp'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
    const [navItems, setNavItems] = useState(true);

    function toogleNavbar() {
        setNavItems(!navItems)
    }


    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="bc-reside-logo" className="h-12" />
                <button className="navbar-toggler" onClick={toogleNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" transform="matrix(-1, 0, 0, -1, 0, 0)">
                        {navItems ? (
                            <>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_02"> <path id="Vector" d="M11 17H19M5 12H19M11 7H19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g>
                            </>
                        ) : (
                            <>
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5 5L9.5 9.5M12 12L19 19" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g>
                            </>
                        )}
                    </svg>
                </button>
            </div>
            <div className={`nav-items ${navItems ? "" : "open"}`} >
                <Link to="/" className="nav-links">
                    HOME
                </Link>
                <Link to="/about" className="nav-links">
                    ABOUT
                </Link>
                <Link to="/services" className="nav-links">
                    SERVICES
                </Link>
                <Link to="/guide" className="nav-links">
                    GUIDE
                </Link>
                <Link to="/mortage" className='nav-links'>
                    MORTGAGE
                </Link>
                <Link to={"/editorloft"} className='nav-links'>
                    EDITORIAL LOFT
                </Link>

                <Link to="/contact" className="nav-links contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 18C6.71667 18 6.47917 17.9042 6.2875 17.7125C6.09583 17.5208 6 17.2833 6 17V15H19V6H21C21.2833 6 21.5208 6.09583 21.7125 6.2875C21.9042 6.47917 22 6.71667 22 7V22L18 18H7ZM2 17V3C2 2.71667 2.09583 2.47917 2.2875 2.2875C2.47917 2.09583 2.71667 2 3 2H16C16.2833 2 16.5208 2.09583 16.7125 2.2875C16.9042 2.47917 17 2.71667 17 3V12C17 12.2833 16.9042 12.5208 16.7125 12.7125C16.5208 12.9042 16.2833 13 16 13H6L2 17ZM15 11V4H4V11H15Z" fill="white" />
                    </svg>CONTACT</Link>
                <div className='animation start-home'></div>
            </div>
        </nav>
    );
}

export default Navbar;
