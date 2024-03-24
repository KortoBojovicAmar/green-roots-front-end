import React from 'react';
import './style.scss';

const Policy = () => {
    return (
        <>
            <div className='policy-header'>
                <h1>Politique de Confidentialite</h1>
                <p>
                    Nous attachons une grande importance à la protection de vos données personnelles.
                    Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web.
                </p>
            </div>
            <div className='policy-page'>
                <article className='policy-article'>
                        <h2>Collecte des Informations</h2>
                        <p>
                            Nous collectons des informations personnelles lorsque vous vous inscrivez sur notre site, passez une commande ou remplissez un formulaire.
                            Les informations collectées peuvent inclure votre nom, votre adresse e-mail,
                            votre numéro de téléphone et d'autres informations nécessaires au traitement de votre commande.
                        </p>
                </article>
                <article className='policy-article'>
                        <h2>Utilisation des Informations</h2>
                        <p>
                            Les informations que nous collectons auprès de vous peuvent être utilisées de plusieurs manières :
                            Pour personnaliser votre expérience et répondre à vos besoins individuels.
                            Pour traiter les transactions : vos informations, qu'elles soient publiques ou privées, ne seront ni vendues, échangées, transférées ou données à une autre société pour quelque raison que ce soit, sans votre consentement,
                            en dehors de ce qui est nécessaire pour répondre à une demande et/ou une transaction, comme par exemple pour expédier une commande.
                            Pour envoyer des e-mails périodiques : l'adresse e-mail que vous fournissez pour le traitement des commandes peut être utilisée pour vous envoyer des informations et des mises à jour relatives à votre commande,
                            ainsi que des nouvelles de temps en temps.
                        </p>
                </article>
                <article className='policy-article'>
                        <h2>Protection des Informations</h2>
                        <p>
                            Nous mettons en œuvre une variété de mesures de sécurité pour garantir la sécurité de vos informations personnelles lorsque vous passez une commande ou accédez à vos informations personnelles.
                        </p>
                </article>
                <article className='policy-article'>
                        <h2>Divulgation à des Tiers</h2>
                        <p>
                            Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers.
                            Cela n'inclut pas les tiers de confiance qui nous aident à exploiter notre site web ou à mener nos activités, tant que ces parties s'engagent à garder ces informations confidentielles.
                        </p>
                </article>
                <article className='policy-article'>
                        <h2>Consentement</h2>
                        <p>
                            En utilisant notre site, vous consentez à notre politique de confidentialité en ligne.
                        </p>
                </article>
                <article className='policy-article'>
                        <h2>Modifications de la Politique de Confidentialité</h2>
                        <p>
                            Si nous décidons de modifier notre politique de confidentialité, nous publierons ces changements sur cette page
                        </p>
                </article>
            </div>
        </>
    );
};

export default Policy;