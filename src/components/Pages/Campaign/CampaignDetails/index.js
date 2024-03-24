import { React, useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../../../_services/account.service.js';
import './style.scss';

import "react-image-gallery/styles/css/image-gallery.css";
import ImagesGallery from 'react-image-gallery';

import HeadCard from '../../../ReusableComponents/HeadCard/index.js';
import CardsGrid from '../../../ReusableComponents/CardsGrid/index.js';

import { ThemeContext } from '../../../../_services/ThemeContext';


const CampaignDetails = () => {
    const { theme } = useContext(ThemeContext);
    const [campaign, setCampaign] = useState(null); // On initialise la campagne à null pour éviter les erreurs de rendu avant que la campagne ne soit récupérée
    const { id } = useParams(); // useParams permet de récupérer les paramètres de l'URL (ici, l'id de la campagne) et de les stocker dans une variable
    const [cart, setCart] = useState([]); // On initialise le panier à vide pour éviter les erreurs de rendu avant que le panier ne soit récupéré
    const addToCart = (id, name, price) => {
        const newCartItem = { id, name, price, quantity: 1 };
        setCart(prevCart => [...prevCart, newCartItem]);
    };

    useEffect(() => {
        API.get(`/campaign/${id}`)
            .then(response => {
                setCampaign(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des détails de la campagne :', error);
            });
    }, [id]);

    const images = campaign && campaign.CampaignPictures ? campaign.CampaignPictures.map(picture => picture.image_url) : [];
    const carouselImages = images.slice(1); // Exclut la première image car elle est déjà affichée dans le HeadCard
    const items = carouselImages.map(image => ({ // Formatage des données pour le composant importé depuis la librairie react-image-gallery 
        original: image,
    }));

    if (!campaign) { // Si la campagne n'est pas encore récupérée, on affiche un message de chargement pour éviter les erreurs de rendu 
        return <p>Chargement en cours...</p>;
    }



    return (
        <div className={theme}>
            {/* Le titre de la campagne est normalisé pour enlever les accents, étant donné que la police des titres ne prend pas en charge les accents */}
            <HeadCard titre={campaign.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")} description={campaign.description} image={campaign.CampaignPictures[0].image_url} />
            <div className={`campaign ${theme}`}>
                <div className='campaign-details-container'>
                    {campaign.CampaignPictures && campaign.CampaignPictures.length > 0 && (
                        <ImagesGallery
                            additionalClass='carousel'
                            items={items}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            showThumbnails={false}
                        />)}
                    <div className='campaign-details'>
                        {campaign.place && <p>Lieu : {campaign.place}</p>}
                        {campaign.place && <p>Date de début : {new Date(campaign.starting_date).toLocaleDateString()}</p>}
                        {campaign.place && <p>Date de fin : {new Date(campaign.ending_date).toLocaleDateString()}</p>}
                    </div>
                    <h2>Les arbres de la campagne :</h2>
                </div>

                {campaign.Trees ?
                    <CardsGrid
                        cards={campaign.Trees}
                        addToCart={addToCart}
                    /> : <h3>pas d'arbres disponibles</h3>}

            </div>
        </div>
    );
};

export default CampaignDetails;