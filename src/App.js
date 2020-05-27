import React, { Component } from 'react';
import './App.css';
import { CardList} from './components/card-list/card-list';
import { List } from './components/list/list';
import { SearchBox } from './components/search-box/search-box';
import  {Popup} from './components/popup/popup';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      global: [],
      countries: [],
      searchField: '',
      countryName:'',
      countryCases: '',
      countryDeaths: '',
      timelineData: [],
      apiDown: false
    };
  }

  componentDidMount(){
    const globalStatsUrl = 'https://api.thevirustracker.com/free-api?global=stats';
    const countryStatsUrl = 'https://api.thevirustracker.com/free-api?countryTotals=ALL';

    Promise.all([fetch(globalStatsUrl), fetch(countryStatsUrl)])
    .then(([resultGlobal, resultCountry]) => { return Promise.all([resultGlobal.json(), resultCountry.json()])})
    .then(items => this.setState({global: items[0].results[0], countries: Object.values(items[1].countryitems[0])}))
    .catch(err => {console.log(err); this.setState({apiDown: true})} );
  }

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  handleViewClick = (code, name, cases, deaths) => {
    const url = 'https://api.thevirustracker.com/free-api?countryTimeline=' + code;
    fetch(url)
      .then(response => response.json())
      //  .then(items => console.log(Object.entries(items.timelineitems[0])));
      .then(items => this.setState({countryName: name, countryCases: cases, countryDeaths: deaths, timelineData: Object.entries(items.timelineitems[0])}));
  }

  render(){
    const { global, countries, searchField, timelineData, countryName, countryCases, countryDeaths, apiDown } = this.state;

    const filteredCountries = countries.filter(country => 
      (typeof country.title !== 'undefined')? 
        country.title.toLowerCase().includes(searchField.toLowerCase()) 
        : null
      );
      
    return (
      <div className="App">
        <div className="header">
          <h1>Covid-19 Tracker</h1>
          {apiDown? <h2 style={{color:"#e8308c",paddingBottom:"50px"}}>The API we retrieve our data from is down at the moment. Please try again later</h2>: <CardList global={global} />  }
        </div>
        <div className='sub-header'>
            <h3>Affected Countries</h3>
            <SearchBox placeholder='Search Countries' handleChange={this.handleChange}/>
        </div>                      
        <List countries={filteredCountries} global={global} handleViewClick={this.handleViewClick}/>       
        <div className="footer">Built by <a href="https://freedamoore.github.io/" target="_blank" >Freeda Moore</a> for the ZTM coding_challenge-26 using the virus tracker API.</div>
        <Popup timelineData={timelineData} countryName={countryName} countryCases={countryCases} countryDeaths={countryDeaths}/>
      </div>
    );
  }
}

export default App;
