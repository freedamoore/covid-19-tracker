import React from 'react';
import './view-button.css';

export const ViewButton = ({countryName, countryCode, countryCases, countryDeaths, handleViewClick})=>(
    <div>
        {/* <button className='timeline-button' onClick={() => handleViewClick(countryCode, countryName)}>View</button> */}
        <a href="#popup" className='timeline-button' onClick={() => handleViewClick(countryCode, countryName, countryCases, countryDeaths)}>View</a>
    </div>
);