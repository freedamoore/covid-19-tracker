import React from 'react';
import './list-item.css';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const ListItem = ({country, globalCases, globalDeaths}) => (
   
    <div className='items'>
        <div className='item-block'><span>{country.title}</span></div>
        <div className='item-block'><span>{numberWithCommas(country.total_cases)}</span></div>
        <div className='item-block'><span>{numberWithCommas(country.total_deaths)}</span></div>
        <div className='item-block'><span>{((country.total_cases / globalCases)*100).toFixed(1)}%</span></div>
        <div className='item-block'><span>{((country.total_deaths / globalDeaths)*100).toFixed(1)}%</span></div> 
        <div className='item-block'><button value='{country.code}'>view</button></div>      
    </div>
);