import React from 'react';
import './list.css';
import { ListItem } from '../list-item/list-item';


export const List = (props) => {
  const {total_cases, total_deaths} = props.global;
   
    return(
      <div className="stats-table">
        <div className='item-headings'>
          <div className="header-block"><span>Country</span></div>
          <div className="header-block"><span>Total Cases</span></div>
          <div className="header-block"><span>Total Deaths</span></div>
          <div className="header-block"><span>% of Global Cases</span></div>
          <div className="header-block"><span>% of Global Deaths</span></div>
          <div className="header-block timeline-block"><span>Timeline</span></div>
        </div>
        <div className='list-items'>
        {
          props.countries.map(country => 
            (<ListItem key={country.ourid} 
                      country={country} 
                      globalCases={total_cases} 
                      globalDeaths={total_deaths}
                      handleViewClick={props.handleViewClick}
            />))
        }
        </div>
      </div>
    );
};


// "title": "Russia",
// "code": "RU",
// "source": "https://thevirustracker.com/russia-coronavirus-information-ru",
// "total_cases": 57999,
// "total_recovered": 4420,
// "total_unresolved": 0,
// "total_deaths": 513,
// "total_new_cases_today": 0,
// "total_new_deaths_today": 0,
// "total_active_cases": 53066,
// "total_serious_cases": 700