import React, { Component } from 'react';
import logo from './block-bird-p.png';
import './App.css';
import TopMarketCapChart from './components/TopMarketCapChart';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div class="ui small image" style={{ padding: 5 }}>
          <img src={logo} alt="BlockBird Logo"></img>
        </div>
        <div class="ui five buttons">
          <button class="ui positive button">Top 10 Cryptos</button>
          <button class="ui basic green button">Visualization 2</button>
          <button class="ui basic green button">Visualization 3</button>
          <button class="ui basic green button">Visualization 4</button>
          <button class="ui basic green button">Visualization 5</button>
        </div>
        <div className="ui piled segment">
          <TopMarketCapChart legendPosition="bottom" />
        </div>
      </div>
    );
  }
}

export default App;