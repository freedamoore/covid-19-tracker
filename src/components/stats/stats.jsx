import React from 'react';
import './stats.css';

export const Stats = ({date, statsData, countryCases, countryDeaths, index, totalDays, highest}) => {

    function calcPixels(inputVal, totalVal){
        let x;
        // (inputVal>0 && totalVal>0) ? x = Math.ceil((inputVal*400)/(countryCases)):x=0;
        (inputVal>0 && totalVal>0) ? x = Math.ceil((inputVal*400)/ highest):x=0;
        
        return x;
       
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
    <div className='stat-bar-container' style={{left: `${(index)*(900/totalDays)}px`}}>
            <div className='stat-bar' style={{height: `${calcPixels(statsData.new_daily_cases, countryCases)}px`}}>
                <span className="show-count"> {date} cases: {numberWithCommas(statsData.new_daily_cases)} deaths: {numberWithCommas(statsData.new_daily_deaths)}</span>
                <div className='inner-stat-bar' style={{height: `${calcPixels(statsData.new_daily_deaths, countryCases)}px`}}></div>
            </div>
            <div className='timeline-date'> {(index===0)?`Timeline First Case: ${date}`:''}</div>
    </div>
    );
}