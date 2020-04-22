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
    fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      // .then(items => console.log(items.Countries));
      .then(items => this.setState({global: items.Global, countries: items.Countries.filter(item => item.TotalConfirmed > 0)}) );
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { global, countries, searchField } = this.state;
    const filteredCountries = countries.filter(country => 
      country.Country.toLowerCase().includes(searchField.toLowerCase())

      );
    return (
      <div className="App">
        <h1>Covid-19 Tracker</h1>
        <h2>New Confirmed: {global.NewConfirmed}</h2>
        <h2>Total Confirmed: {global.TotalConfirmed}</h2>
        <h2>New Deaths: {global.NewDeaths}</h2>
        <h2>Total Deaths: {global.TotalDeaths}</h2>
        <h2>New Recovered: {global.NewRecovered}</h2>
        <h2>Total REcovered: {global.TotalRecovered}</h2>
        <h3>Affected Countries</h3>
        <SearchBox placeholder='Search Countries' handleChange={this.handleChange}/>
        <CardList countries={filteredCountries} />
      </div>
    );
  }
}

export default App;
