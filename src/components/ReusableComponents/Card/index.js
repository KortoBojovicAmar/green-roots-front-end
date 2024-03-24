import React, { useContext } from 'react';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../../_services/CartContext';
import { ThemeContext } from '../../../_services/ThemeContext';


const Card = ({ id, name, description, CampaignPictures, image_url, kind, price, quantity, campaignId }) => {
    const { theme } = useContext(ThemeContext);
    const { cartItems, dispatch } = useContext(CartContext); // On récupère le panier et la fonction dispatch pour ajouter ou retirer des items du panier

    const location = useLocation(); // On récupère l'URL actuelle pour afficher le bon bouton en fonction de la page sur laquelle on se trouve
    const currentPath = location.pathname; // On récupère le chemin actuel de l'URL, la différence entre location et currentPath est que location est un objet qui contient plusieurs informations sur l'URL, alors que currentPath est une simple chaîne de caractères qui contient le chemin actuel de l'URL

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_ITEM', item: { id, name, price } });
    };

    const handleRemoveFromCart = () => {
        dispatch({ type: 'REMOVE_ITEM', id });
    };

    const itemInCart = cartItems ? cartItems.find(item => item.id === id) : undefined; // On vérifie si l'item est déjà dans le panier pour afficher la quantité actuelle 
    const itemQuantity = itemInCart ? itemInCart.quantity : 0;                         // Si l'item est dans le panier, on récupère la quantité actuelle, sinon on affiche 0

    return (
        <div className={`card ${theme}`}>
<div>
    
                {CampaignPictures && CampaignPictures.length > 0 ? (
                    <img src={CampaignPictures[0].image_url} className='card_img' />)
                    : image_url ? (
                        <img src={image_url} className='card_img' />)
                        : (<img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='card_img' />)}
    
    
                <div className="card_content">
    
    
                    <h3 className="card_title">{name}</h3>
    
                    {kind && <p className="card_kind">Type : {kind}</p>}
    
                    {price && <p className="card_price">Prix : {price}€</p>}
    
                    {quantity && <p className="card_quantity">Quantité disponible : {quantity}</p>}
    
                    <p className="card_desc">{description}</p>
    
                </div>
</div>
                {currentPath !== `/campaign/${id}` && currentPath !== `/campaign/${campaignId}`
                    &&
                    <Link
                        to={CampaignPictures ? `/campaign/${id}` : `/campaign/${campaignId}`}
                        className="card_action">{CampaignPictures ? "Voir plus" : "Voir sa campagne"}
                        <span aria-hidden="true"> →</span>
                    </Link>}
                {currentPath === `/campaign/${id}` || currentPath === `/campaign/${campaignId}`
                    &&
                    <div className='buttons'>
                        <span className='material-symbols-outlined' onClick={handleRemoveFromCart}>remove</span>
                        <span>{itemQuantity}</span>
                        <span className='material-symbols-outlined' onClick={handleAddToCart}>add</span>
                    </div>}
        </div >
    );
};

export default Card;