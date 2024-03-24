import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const existingCartItem = state.find(item => item.id === action.item.id);
            if (existingCartItem) {
                return state.map(item =>
                    item.id === action.item.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...state, { ...action.item, quantity: 1 }];
            }
        case 'REMOVE_ITEM':
            const existingItem = state.find(item => item.id === action.id);
            if (existingItem.quantity > 1) {
                return state.map(item =>
                    item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
                );
            } else {
                return state.filter(item => item.id !== action.id);
            }
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};