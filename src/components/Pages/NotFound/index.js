import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const NotFound = () => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '20vh' }}>
            <Typography variant="h1" align="center" gutterBottom>
                Erreur 404
            </Typography>
            <Typography variant="subtitle1" align="center" gutterBottom>
                La page que vous recherchez est introuvable.
            </Typography>
            <br />
            <Button variant="contained" color="primary" href="/" fullWidth>
                Retour à la page d'accueil
            </Button>
            <br />
        </Container >
    );
};

export default NotFound;