import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from '../../_services/CartContext';
import { ThemeProvider, ThemeContext } from '../../_services/ThemeContext';

import Header from '../Header';
import Footer from '../Footer';

import Home from '../Pages/Home';
import Account from '../Pages/Account';
import LoginWelcome from '../Pages/Account/LoginWelcome';
import CreateUserForm from '../Pages/Account/CreateUserForm';
import Campaign from '../Pages/Campaign';
import Catalog from '../Pages/Catalog';
import About from '../Pages/About';
import Policy from '../Pages/rgpdPolicy';
import Cart from '../Pages/Cart';
import NotFound from '../Pages/NotFound';
import CampaignDetails from '../Pages/Campaign/CampaignDetails';

const App = () => {
    return (
        <Router>  {/* On enveloppe tout le contenu de l'application avec le Router pour que les routes soient accessibles partout */}
            <ThemeProvider> {/* On enveloppe tout le contenu de l'application avec le ThemeProvider pour que le thème soit accessible partout */}
                <CartProvider> {/* On enveloppe tout le contenu de l'application avec le CartProvider pour que le panier soit accessible partout */}
                    <Header />  {/* le composant header doit être affiché sur toutes les pages donc on le place ici sans condition de route */}
                    <MainContent /> {/* On sépare le composant MainContent qui est juste en dessous */}
                    <Footer /> {/* le composant footer doit être affiché sur toutes les pages donc on le place ici sans condition de route */}
                </CartProvider>
            </ThemeProvider>
        </Router>
    );
};

// On sépare le composant MainContent pour pouvoir changer la classe du body en fonction du thème choisi
// Si on ne le fait pas, le thème ne peut pas être appliqué dans app car on ne peut pas utiliser le hook useContext dans un composant de plus haut niveau

const MainContent = () => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <main id="maincontent">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="account" element={<Account />} />
                <Route path="campaign" element={<Campaign />} />
                <Route path="campaign/:id" element={<CampaignDetails />} />
                <Route path="trees-catalog" element={<Catalog />} />
                <Route path="about" element={<About />} />
                <Route path="rgpd-policy" element={<Policy />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />

                <Route path="account/signup" element={<CreateUserForm />} />
                <Route path="account/login" element={<Account />} />
                <Route path="account/welcome" element={<LoginWelcome />} />
            </Routes>
        </main>
    );
};

export default App;