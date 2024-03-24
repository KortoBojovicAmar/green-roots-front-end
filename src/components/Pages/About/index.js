import React from 'react';
import './style.scss';
import imagesection1 from '../../../../public/img/aboutPage/ciocan-ciprian-dWsb2mf_0D4-unsplash.jpg';
import imagesection2 from '../../../../public/img/aboutPage/leonhard-niederwimmer-ZMfJrboHNzc-unsplash.jpg';
import imagesection3 from '../../../../public/img/aboutPage/jan-huber-4OhFZSAT3sw-unsplash.jpg';
import imagesection4 from '../../../../public/img/aboutPage/rene-bieder-yTP1jCwocYs-unsplash.jpg';
import imagesection5 from '../../../../public/img/aboutPage/christian-kielberg-ofuwUDd15_s-unsplash.jpg';

const About = () => {
    return (
        <>
            <div className='about-title'>
                <h1>qui sommes-nous ?</h1>
            </div>
            <div className='about-page'>
                <section className='about-section'>
                    <div className='text'>
                        <h2>Manifeste</h2>
                        <p>
                            Chez Green Roots, nous croyons en un avenir vert, un arbre à la fois.
                            Notre entreprise est née de la conviction profonde que chaque individu a le pouvoir de faire une différence dans la préservation de notre planète.
                            Fondée sur les principes de la reforestation, de la transparence et de l'engagement communautaire,
                            Green Roots s'efforce de restaurer les écosystèmes locaux et de lutter contre les effets du changement climatique.
                        </p>
                    </div>
                    <div className='image'>
                        <img src={imagesection1} alt=''/>
                    </div>
                </section>
                <section className='about-section'>
                    <div className='text'>
                        <h2>Notre Mission</h2>
                        <p>
                            Notre mission est simple : redonner à la nature, un arbre à la fois.
                            En partenariat avec des municipalités, des associations de protection de l'environnement et des amoureux de la nature,
                            nous avons créé un concept unique d'e-commerce qui permet aux individus de contribuer directement à la reforestation.
                            Chaque achat effectué sur notre plateforme est une déclaration d'amour envers la Terre que nous partageons, une promesse de créer un avenir plus vert pour les générations futures.
                        </p>
                    </div>
                    <div className='image'>
                        <img src={imagesection2} alt=''/>
                    </div>
                </section>
                <section className='about-section'>
                    <div className='text'>
                        <h2>Notre Approche</h2>
                        <p>
                            Chez Green Roots, nous croyons en la transparence à chaque étape du processus.
                            Lorsque vous achetez un arbre sur notre plateforme, vous pouvez suivre sa croissance en ligne et voir comment votre contribution aide à faire du monde un endroit plus vert.
                            Nous travaillons en étroite collaboration avec les autorités locales pour planter les arbres dans des zones spécifiques où ils peuvent avoir le plus grand impact écologique.
                        </p>
                    </div>
                    <div className='image'>
                        <img src={imagesection3} alt=''/>
                    </div>
                </section>
                <section className='about-section'>
                    <div className='text'>
                        <h2>Notre Engagement</h2>
                        <p>
                            Notre engagement envers l'environnement va au-delà de la simple plantation d'arbres.
                            Nous sommes déterminés à sensibiliser les gens à l'importance de la reforestation, à restaurer les écosystèmes locaux, et à créer des espaces verts durables pour les générations futures.
                            En reconnectant les individus à la nature et en leur permettant de laisser leur empreinte personnelle dans le monde, nous croyons que nous pouvons créer un avenir meilleur, un arbre à la fois.
                        </p>
                    </div>
                    <div className='image'>
                        <img src={imagesection4} alt=''/>
                    </div>
                </section>
                <section className='about-section'>
                    <div className='text'>
                        <h2>Rejoignez-nous !!</h2>
                        <p>
                            Nous invitons chacun à se joindre à nous dans notre mission pour un avenir plus vert.
                            Que vous soyez un amoureux de l'environnement passionné, une entreprise engagée dans la responsabilité sociale et environnementale,
                            ou simplement à la recherche d'un cadeau significatif à offrir à vos proches, Green Roots offre une opportunité de faire une différence concrète pour notre planète.
                            Ensemble, plantons un avenir meilleur, un arbre à la fois, avec Green Roots.
                        </p>
                    </div>
                    <div className='image'>
                        <img src={imagesection5} alt=''/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;