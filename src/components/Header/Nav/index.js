import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import React, { useContext } from 'react';
import { ThemeContext } from '../../../_services/ThemeContext';

const Nav = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger size={30} direction="right" rounded label="Show menu" />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                    <li><Link id="1" to="/">Accueil</Link></li>
                        <li><Link id="1" to="/account">Mon compte</Link></li>
                        <li><Link id="2" to="/campaign">Campagnes</Link></li>
                        <li><Link id="3" to="/trees-catalog">Catalogue</Link></li>
                        <li><Link id="4" to="/about ">A propos</Link></li>
                        <li><span className='material-symbols-outlined' onClick={toggleTheme}>
                            {
                                theme === 'light' ?
                                    'dark_mode' : 'light_mode'
                            }
                        </span></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav