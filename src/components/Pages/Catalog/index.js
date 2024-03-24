import { React, useState, useEffect } from 'react';
import HeadCard from '../../ReusableComponents/HeadCard';
import CardsGrid from '../../ReusableComponents/CardsGrid';
import { API } from '../../../_services/account.service';


const Catalog = () => {
    const [trees, setTrees] = useState([]);

    const handleFetchTrees = () => {
        API.get('/tree')
            .then(response => {
                setTrees(response.data);
            }).catch((error) => {
                console.error('Erreur lors de la récupération des arbres :', error);
            });
    }

    useEffect(() => {
        handleFetchTrees();
    }, []);


    return (
        <>
            <HeadCard
                titre="Catalogue"
                description="Découvrez les arbres de toutes les campagnes en cours dans ce catalogue, vous pouvez participer à plusieurs campagnes de reforestation à travers le monde en quelques clics."
                image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CardsGrid cards={trees} />
        </>
    );
};

export default Catalog;