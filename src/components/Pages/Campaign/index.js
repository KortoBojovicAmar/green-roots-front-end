import { React, useState, useEffect } from 'react';
import HeadCard from '../../ReusableComponents/HeadCard';
import CardsGrid from '../../ReusableComponents/CardsGrid';
import { API } from '../../../_services/account.service.js';



const Campaign = () => {
    const [campaigns, setCampaigns] = useState([]);

    const handleFetchCampaigns = () => {
        API.get('/campaign')
            .then(response => {
                setCampaigns(response.data);
            }).catch((error) => {
                console.error('Erreur lors de la récupération des campagnes :', error);
            });
    }

    useEffect(() => {
        handleFetchCampaigns();
    }, []);
    return (
        <>
            <HeadCard
                titre="Nos campagnes"
                description="Découvrez nos différentes campagnes pour la préservation de la nature."
                image="https://plus.unsplash.com/premium_photo-1683121339689-9361c0a8bd83?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardsGrid cards={campaigns} />

        </>
    );
};

export default Campaign;