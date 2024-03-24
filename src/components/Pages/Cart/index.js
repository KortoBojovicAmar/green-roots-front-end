import React, { useContext } from 'react';
import { CartContext } from '../../../_services/CartContext';
import { ThemeContext } from '../../../_services/ThemeContext';
import './style.scss';

const Cart = () => {
    const { theme } = useContext(ThemeContext);
    const { cartItems, dispatch } = useContext(CartContext);

    const handleIncrease = (id) => { dispatch({ type: 'ADD_ITEM', item: { id } }) };
    const handleDecrease = (id) => { dispatch({ type: 'REMOVE_ITEM', id }) };
    const handleClear = () => { dispatch({ type: 'CLEAR_CART' }) };

    const handleRemove = (id) => {
        const itemToRemove = cartItems.find(item => item.id === id);
        for (let i = 0; i < itemToRemove.quantity; i++) {
            dispatch({ type: 'REMOVE_ITEM', id });
        }
    };

    return (
        <section className={`cart-container ${theme}`}>
            <h1 className="cart_header">Panier</h1>

            {cartItems.length > 0 ?
                cartItems.map(item => (
                    <div key={item.id} className="cart_item">
                        <div>
                            <p>Nom : {item.name}</p>
                            <p>Prix : {item.price}</p>
                            <p>Quantité : {item.quantity}</p>
                        </div>
                        <div className='cart_buttons'>
                            <span class="material-symbols-outlined" onClick={() => handleIncrease(item.id)}>add</span>
                            <span>{item.quantity}</span>
                            <span class="material-symbols-outlined" onClick={() => handleDecrease(item.id)}>remove</span>
                            <span class="material-symbols-outlined" onClick={() => handleRemove(item.id)}>delete</span>
                        </div>
                    </div>
                ))

                : <h2 className="cart_empty">Votre panier est vide</h2>}

            <section className='cart_buttons_bottom'>
                <button onClick={handleClear}>Vider le panier</button>
                <button >Valider le panier</button>
            </section>
        </section>
    );
};

export default Cart;