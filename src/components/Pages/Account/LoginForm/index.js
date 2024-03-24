import React, { useState } from 'react';
import '../style.scss'
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../../../_services/account.service.js';

const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Ajouter un état pour le message d'erreur

    const handleLogin = (event) => {
        event.preventDefault();

        // Se connecter
        accountService.login({
            email,
            password
        })
            .then(() => {
                // Rediriger vers la page d'accueil après une connexion réussie
                navigate('/');
            })
            .catch((error) => {
                console.error('Erreur:', error);
                setError('Erreur de connexion'); // Mettre à jour l'état d'erreur lorsqu'une erreur se produit
            });
    };

    return (
        <>
            <input autoComplete='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
            {error && <div>{error}</div >} {/* Afficher le message d'erreur si l'état d'erreur n'est pas vide */}
            <button onClick={handleLogin}>Connexion</button>
        </>
    );
}

export default LoginForm;
