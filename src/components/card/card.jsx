import React from 'react';
import './card.css';

export const Card = (props) => (
    <div className='card-container'>
        <h2>{props.country.title}</h2>
        <p>Total Cases Confirmed: {props.country.total_cases}</p>
    </div>
);