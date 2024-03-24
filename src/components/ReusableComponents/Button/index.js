
import React from 'react';
import './style.scss';
const Button = ({ onClick, label, className }) => {
    return (
        <button className={`custom-btn ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
