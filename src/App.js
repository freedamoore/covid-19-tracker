import React, { Component } from 'react';
import './App.css';
import { CardList} from './components/card-list/card-list';
import { List } from './components/list/list';
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

    Promise.all([fetch(globalStatsUrl), fetch(countryStatsUrl)])
    .then(([resultGlobal, resultCountry]) => { return Promise.all([resultGlobal.json(), resultCountry.json()])})
    .then(items => this.setState({global: items[0].results[0], countries: Object.values(items[1].countryitems[0])}));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { global, countries, searchField } = this.state;

    const filteredCountries = countries.filter(country => 
      (typeof country.title !== 'undefined')? 
        country.title.toLowerCase().includes(searchField.toLowerCase()) 
        : null
      );

    return (
      <div className="App">
        <div className="header">
          <h1>Covid-19 Tracker</h1>
          <CardList global={global} />  
        </div>
        <div className='sub-header'>
            <h3>Affected Countries</h3>
            <SearchBox placeholder='Search Countries' handleChange={this.handleChange}/>
        </div>                      
        <List countries={filteredCountries} global={global} />           
        <div className="footer">Built by <a href="https://freedamoore.github.io/" target="_blank" >Freeda Moore</a> for the ZTM coding_challenge-26 using the virus tracker API.</div>
      </div>
    );
  }
}

export default App;
