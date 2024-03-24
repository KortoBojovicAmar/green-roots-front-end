import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../../public/img/logo_white.svg';
import { ThemeContext } from '../../_services/ThemeContext';


const Footer = () => {

    const { theme } = React.useContext(ThemeContext);

    return (
        <footer className={theme}>

            <div className={`footer-section ${theme}`}>
                <img className='footer-section_logo' src={logo} alt="Logo du site et lien vers l'accueil" />

                <nav className='footer-section_items'>
                    <ul>
                        <li><Link to="/account">Mon compte</Link></li>
                        <li><Link to="/campaign">Campagnes</Link></li>
                        <li><Link to="/trees-catalog">Catalogue</Link></li>
                        <li><Link to="/about ">A propos</Link></li>
                    </ul>
                </nav>

                <nav className='footer-section_items'>
                    <ul>
                        <li><Link to="/rgpd-policy">Politique de confidentialité</Link></li>
                        <li><Link to="/campaign">Mentions légales</Link></li>
                        <li><Link to="/about">Politique de cookies</Link></li>
                        <li><Link to="/account">Conditions générales </Link></li>
                    </ul>
                </nav>

                <nav>
                    <div className='footer-section_socials'><XIcon /></div>
                    <div className='footer-section_socials'><InstagramIcon /></div>
                    <div className='footer-section_socials'><YouTubeIcon /></div>
                    <div className='footer-section_socials'><FacebookIcon /></div>
                </nav>
            </div>

        </footer>
    );
};

export default Footer;