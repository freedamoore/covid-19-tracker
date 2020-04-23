import React, { Component } from 'react';
import './App.css';
import { CardList} from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      global: [],
      countries: [],
      searchField: ''
    };

  }

  componentDidMount(){
    const globalStatsUrl = 'https://api.thevirustracker.com/free-api?global=stats';
    const countryStatsUrl = 'https://api.thevirustracker.com/free-api?countryTotals=ALL';

    // fetch(globalStatsUrl)
    // .then(response => response.json())
    // .then(items => console.log(items.results));

    // fetch(countryStatsUrl)
    // .then(response => response.json())
    // .then(items => console.log(items.countryitems));

    Promise.all([fetch(globalStatsUrl), fetch(countryStatsUrl)])
    .then(([resultGlobal, resultCountry]) => { return Promise.all([resultGlobal.json(), resultCountry.json()])})
    // .then(items => console.log(items[0].results, Object.values(items[1].countryitems[0])));
    .then(items => this.setState({global: items[0].results[0], countries: Object.values(items[1].countryitems[0])}));

    // fetch('https://api.covid19api.com/summary')
    //   .then(response => response.json())
    //   // .then(items => console.log(items.Countries));
    //   .then(items => this.setState({global: items.Global, countries: items.Countries.filter(item => item.TotalConfirmed > 0)}) );
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { global, countries, searchField } = this.state;

    const filteredCountries = countries.filter(country => 
      (typeof country.title !== 'undefined')? country.title.toLowerCase().includes(searchField.toLowerCase()) : null
      );

    return (
      <div className="App">
        <h1>Covid-19 Tracker</h1>
        <h2>New Cases: {global.total_new_cases_today}</h2>
        <h2>Total Cases: {global.total_cases}</h2>
        <h2>New Deaths: {global.total_new_deaths_today}</h2>
        <h2>Total Deaths: {global.total_deaths}</h2>
        <h2> total_affected_countries: {global.total_affected_countries}</h2>
        <h2>Total REcovered: {global.total_recovered}</h2>
        <h2>Total Unresolved: {global.total_unresolved}</h2>
        <h2> Total Active: {global.total_active_cases}</h2>
        <h2>Total Serious: {global.total_serious_cases}</h2>
        <h3>Affected Countries</h3>
        <SearchBox placeholder='Search Countries' handleChange={this.handleChange}/>
        <CardList countries={filteredCountries} />
      </div>
    );
  }
}

export default App;
