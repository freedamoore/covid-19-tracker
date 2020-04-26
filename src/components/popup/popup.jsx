import React from 'react';
import './popup.css';
import {Stats} from '../stats/stats';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Popup = ({timelineData, countryName, countryCases, countryDeaths}) => {
    let highest = 0;
    return(        
    <div className="popup" id="popup">
        <div className="popup__content">
            <a href="#" className="popup__close">&times;</a>
            <h2>{countryName}</h2>
            <div className="headings-box">
                <h3 className="headings-box-1">Total Cases: {numberWithCommas(countryCases)}</h3>
                <h3 className="headings-box-2">Total Deaths: {numberWithCommas(countryDeaths)}</h3>
            </div>
            <div>
                {   //get the highest number of cases for a day to pass into the graph
                    timelineData.map((data, index) => {
                        if(data[0]!== "stat"){
                            highest< data[1].new_daily_cases? highest=data[1].new_daily_cases: highest=highest;
                            } })
                }
            </div>
            <div className="stat-layout">
                {   
                    timelineData.map((data, index) => {
                        if(data[0]!== "stat")
                            return  (<Stats key={data[0]} 
                                            date={data[0]} 
                                            statsData={data[1]} 
                                            countryCases={countryCases}
                                            countryDeaths={countryDeaths}
                                            index={index}
                                            totalDays={timelineData.length}
                                            highest={highest}
                                    />) })
                }
            </div>
            <h4>Hover over bar to see the number of cases for that day.</h4>
        </div>
    </div>
);
}