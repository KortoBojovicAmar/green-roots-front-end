import React from 'react';
import logo from '/public/img/logo_green.svg';
import darkLogo from '/public/img/logo_blue.svg';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../_services/ThemeContext';

const Logo = () => {

    const { theme } = React.useContext(ThemeContext);

    return (
        <div className='logo'>
            <Link to="/" >
                {theme === 'light' ?
                    <img src={logo} alt="Logo du site et lien vers l'accueil" />
                    :
                    <img src={darkLogo} alt="Logo du site et lien vers l'accueil" />
                }
            </Link>
        </div>
    );
};

export default Logo;