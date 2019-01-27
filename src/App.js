import React, { Component } from 'react';
import logo from './block-bird-p.png';
import './App.css';
import TopMarketCapChart from './components/TopMarketCapChart';

class App extends Component {
  render() {
    return (
      <div classNameName="ui container">
        <div className="ui small image" style={{ padding: 5 }}>
          <img src={logo} alt="BlockBird Logo"></img>
        </div>
        <div className="ui five buttons">
          <button className="ui positive button">Top 10 Cryptos</button>
          <button className="ui basic green button">Visualization 2</button>
          <button className="ui basic green button">Visualization 3</button>
          <button className="ui basic green button">Visualization 4</button>
          <button className="ui basic green button">Visualization 5</button>
        </div>
        <div classNameName="ui piled segment">
          <TopMarketCapChart chartType="bar" legendPosition="bottom" />
          <TopMarketCapChart chartType="doughnut" legendPosition="bottom" />
        </div>
      </div>
    );
  }
}

export default App;