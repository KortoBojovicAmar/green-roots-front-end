import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
    return (
        <div className='cart' >
            <Link to="/cart" aria-label="Voir le panier">
                {/* utilisation de l'icône cart de googleAPI, importée dans l'index.html */}
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
            </Link>
        </div>
    );
};

export default CartIcon;