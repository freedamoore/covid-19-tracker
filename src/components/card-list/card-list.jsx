import React from 'react';
import './card-list.css';
import { Card } from '../card/card';

export const CardList = (props) => {
    
    return(
        <div className="card-list">
        {
          props.countries.map(country => (<Card key={country.ourid} country={country} />))
        }
        </div>
    );
};