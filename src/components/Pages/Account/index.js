import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { accountService } from '../../../_services/account.service.js';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

const Account = () => {
    const [isConnected, setIsConnected] = useState(accountService.isLogged());

    useEffect(() => {
        setIsConnected(accountService.isLogged());
    }, []);

    const handleLogout = () => {
        accountService.logout();
        setIsConnected(false);
    };

    return (
        <section className='form-container'>
            <form className='form'>
                <fieldset >
                    {/* tabIndex0 sert à permettre le focus avec tab pour l'accessibilité,
                    selon si on est connecté, le contenu s'adapte */}
                    <h1 tabIndex={0}>{isConnected ? "Mon compte" : "Connexion"}</h1>
                    <h2 tabIndex={0}>{isConnected ? "Vous êtes connecté" : "Vous n'êtes pas connecté"}</h2>

                    <nav>
                        {isConnected && <LogoutForm onLogout={handleLogout} />}
                        {!isConnected && <LoginForm />}
                        {!isConnected && <Link to="/account/signup">Créer un compte</Link>}
                    </nav>
                </fieldset>
            </form>
        </section>
    );
};

export default Account;