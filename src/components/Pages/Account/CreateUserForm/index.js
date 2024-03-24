import React, { useState } from 'react';
import { API } from '../../../../_services/account.service.js';
import '../style.scss'
import { useNavigate } from 'react-router-dom';

function CreateUserComponent() {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const handleAddUser = (event) => {
        event.preventDefault();
        // Ajouter un nouvel utilisateur
        API.post('/users', {
            lastname,
            firstname,
            email,
            password,
            role
        })
            .then(response => {
                // Réinitialiser le formulaire après l'inscription (pour éviter le double envoi)
                setLastname('');
                setFirstname('');
                setEmail('');
                setPassword('');
                setRole('');
                alert('Utilisateur créé avec succès');
                navigate('/account/welcome');
            })
            .catch((error) => {
                console.error('Erreur de création d\'un utilisateur :', error);
            });
    };

    return (
        <div className='form-container'>
            <form className='form' onSubmit={handleAddUser}>
                <fieldset >
                    <h1>Créer un compte</h1>
                    <input autoComplete='family-name' type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Nom" required />
                    <input autoComplete='first-name' type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Prénom" required />
                    <input autoComplete='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                    <input autoComplete='on' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />

                    <select value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="">Sélectionnez un rôle</option>
                        <option value="user">Utilisateur</option>
                        <option value="manager">Chef de projet</option>
                        <option value="partner">Partenaire</option>
                    </select>

                    <button type="submit">Créer</button>
                </fieldset>
            </form>
        </div>
    );
}

export default CreateUserComponent;