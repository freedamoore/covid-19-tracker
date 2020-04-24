import React from 'react';
import './card-list.css';
import { Card } from '../card/card';

export const CardList = (props) => {
  const {total_cases, total_deaths, total_affected_countries} = props.global;
  
    return(
        <div className="card-list">
          <Card title='Total Cases' count={ total_cases }/>
          <Card title='Total Deaths' count={ total_deaths }/>
          <Card title='Countries Affected' count={ total_affected_countries }/>
        </div>
    );
};
