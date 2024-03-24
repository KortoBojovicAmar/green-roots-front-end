import { React, useContext } from 'react';
import './style.scss';
import CartIcon from './CartIcon';
import Logo from './Logo';
import Nav from './Nav';
import { ThemeContext } from '../../_services/ThemeContext';

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <header className={theme}>
            <Nav />
            <Logo />
            <CartIcon />
        </header>
    );
};

export default Header;
