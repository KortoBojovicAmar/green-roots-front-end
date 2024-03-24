import React from 'react';
import logo from '/public/img/logo_black.svg';
import './style.scss';
import LoginForm from '../LoginForm';

const LoginWelcome = () => {
    return (
        <section className='welcome-container'>
            <h1 tabIndex={0}>Bienvenue sur :
                <img src={logo} alt="" />
            </h1>
            <section className='form-container'>
                <form className='form'>
                    <fieldset >
                        <h2>Veuillez confirmer vos identifiants pour vous connecter</h2>
                        <LoginForm />
                    </fieldset>
                </form>
            </section>
        </section>
    );
};

export default LoginWelcome;