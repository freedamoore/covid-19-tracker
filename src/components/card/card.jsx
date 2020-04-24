import React from 'react';
import './card.css';

function numberWithCommas(x) {
    x = x + ""; //to get rid of TypeError: Cannot read property 'toString' of undefined
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Card = ({title, count}) => (
    <div className='card-border'>
        <div className='card-container'>
            <h2>{title}</h2>
            <p>{numberWithCommas(count)}</p>
        </div>
    </div>
);