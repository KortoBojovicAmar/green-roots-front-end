import React from 'react';
import Card from '../Card';
import './style.scss';

const CardsGrid = ({ cards, addToCart }) => {
    return (
        <section className="card-grid">
            {cards.map(card => <Card key={card.id} {...card} addToCart={addToCart} />)}
        </section>
    );
};

export default CardsGrid;