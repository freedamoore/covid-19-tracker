import React from 'react';
import './list-item.css';
import {ViewButton} from '../view-button/view-button';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const ListItem = ({country, globalCases, globalDeaths, handleViewClick}) => (
    <div className='items'>
        <div className='item-block'><span>{country.title}</span></div>
        <div className='item-block'><span>{numberWithCommas(country.total_cases)}</span></div>
        <div className='item-block'><span>{numberWithCommas(country.total_deaths)}</span></div>
        <div className='item-block'><span>{((country.total_cases / globalCases)*100).toFixed(1)}%</span></div>
        <div className='item-block'><span>{((country.total_deaths / globalDeaths)*100).toFixed(1)}%</span></div> 
        <div className='item-block'><ViewButton countryName = {country.title} 
                                                countryCode={country.code} 
                                                countryCases={country.total_cases}
                                                countryDeaths={country.total_deaths}
                                                handleViewClick={handleViewClick}/></div>
    </div>
);