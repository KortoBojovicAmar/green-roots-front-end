import React from 'react';
import './style.scss';

const HeadCard = ({ titre, description, image }) => {
    return (
        <section className="headcard">
            <img src={image} alt="Illustration" />
            <div className="container">
                <h1 tabIndex="0">{titre}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default HeadCard;