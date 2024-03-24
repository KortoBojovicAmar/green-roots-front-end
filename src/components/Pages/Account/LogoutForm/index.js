import React from 'react';
import '../style.scss'
import { accountService } from '../../../../_services/account.service.js';

const LogoutButton = ({ onLogout }) => {

    const handleLogout = (event) => {
        event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)
        accountService.logout(); // Se déconnecter en appelant la méthode logout du service accountService
        onLogout();
    };

    return (
        <>
            <button onClick={handleLogout}>Déconnexion</button>
        </>
    );
}

export default LogoutButton;