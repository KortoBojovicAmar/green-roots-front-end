import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


// Créer une instance d'axios avec une URL de base
export const API = axios.create({
    baseURL: 'http://localhost:3001',
});

// Ajouter un intercepteur de requêtes pour ajouter l'en-tête d'autorisation avant chaque requête
API.interceptors.request.use((config) => {
    // Récupérer le token du local storage
    const token = localStorage.getItem('token');

    // Ajouter l'en-tête d'autorisation à la configuration de la requête
    config.headers.Authorization = token ? `Bearer ${token}` : '';


    return config;
});

API.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        logout()
        alert('erreur de connexion, veuillez vous reconnecter');
    } else {
        return Promise.reject(error)
    }
})

let login = async (credentials) => {
    try {
        const response = await API.post('/auth/login', credentials);
        localStorage.setItem('token', response.data.access_token);

        // Décoder le token pour obtenir les informations sur l'utilisateur
        //  const tokenInfo = jwtDecode(response.data.access_token);


        alert('Connecté avec succès');
        // Retourner les données de la réponse en cas de succès ainsi que le nom et le rôle de l'utilisateur
        // return { ...response.data, name: tokenInfo.name, role: tokenInfo.role }; 
        return response.data; // Retourner les données de la réponse en cas de succès
    } catch (error) {
        console.error('Erreur lors de la requête de connexion :', error);
        throw error; // Lancer une erreur en cas d'échec
    }
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let getToken = () => {
    return localStorage.getItem('token')
}

let getTokenInfo = () => {
    return jwtDecode(getToken())
}

export const accountService = {
    login, saveToken, logout, isLogged, getToken, getTokenInfo
}