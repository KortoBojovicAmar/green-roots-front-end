import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { API } from '../../../_services/account.service.js';

import HeadCard from '../../ReusableComponents/HeadCard';
import foret from '../../../../public/img/foret.jpg';
import CardsGrid from '../../ReusableComponents/CardsGrid';
import Banner from '../../ReusableComponents/Banner';
import Slider from '../../ReusableComponents/Slider';
import './style.scss';

import "./style.scss";

const Home = () => {

    const [campaigns, setCampaigns] = useState([]);
    const [trees, setTrees] = useState([]);

    //* Récupération des campagnes
    console.log(campaigns);
    const handleFetchCampaigns = () => {
        API.get('/campaign')
            .then(response => {
                setCampaigns(response.data.slice(0, 6));
            }).catch((error) => {
                console.error('Erreur lors de la récupération des campagnes :', error);
            });
    }

    //* Récupération des arbres

    const handleFetchTrees = () => {
        API.get('/tree')
            .then(response => {
                setTrees(response.data.slice(0, 6));
            }).catch((error) => {
                console.error('Erreur lors de la récupération des arbres :', error);
            });
    }

    //* Récupération des campagnes et des arbres au chargement de la page

    useEffect(() => {
        handleFetchCampaigns();
        handleFetchTrees();
    }, []);

    return (
        <>
            <HeadCard
                titre="GreenRoots vous souhaite la bienvenue"
                description="Participez à la préservation de la nature en découvrant nos différentes actions."
                image={foret}
            />
            <section className='home'>
                <article>
                    <h2>Que proposons nous ?</h2>
                    <p>"Sur greenroots nous proposons de nombreuses campagnes pour la préservation et/ou la reconstruction de la nature.
                        Participez à ces campagnes en faisant un don ou en participant à des actions de terrain.
                        Ces actions organisées par des campagnes de plantation à grande échelle sont menées par des associations partenaires qui ont besoin de votre aide pour mener à bien leurs projets."</p>
                </article>
                <h2>Les campagnes disponibles :</h2>
                <Slider datas={campaigns} />
                {/* <CardsGrid cards={campaigns} />
                <Link to="/campaign" className="btn">Voir toutes les campagnes</Link> */}

                <br />
                <br />
                <article>
                    <h2>La planete a besoin de vous</h2>
                    <p>"Notre planète est en danger en raison du changement climatique, de la pollution et de la perte de biodiversité. Chacun de nous a le pouvoir d'agir.
                        En adoptant des habitudes plus durables, en réduisant notre consommation d'énergie et en soutenant les initiatives écologiques, nous pouvons tous contribuer à la protection de notre planète.
                        Agissons maintenant pour un avenir meilleur."</p>
                </article>
                <br />
                <br />
                <h2>Les arbres disponibles :</h2>
                <CardsGrid cards={trees} />
                <Link to="/trees-catalog" className="btn">Voir tous les arbres</Link>
            </section>
        </>
    );
};

export default Home;