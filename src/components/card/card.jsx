import React from 'react';
import './card.css';

export const Card = (props) => (
    <div className='card-container'>
        <h2>{props.country.Country}</h2>
        <p>Total Cases Confirmed: {props.country.TotalConfirmed}</p>
    </div>
);