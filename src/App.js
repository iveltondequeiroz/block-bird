import React, { Component } from 'react';
import logo from './block-bird-p.png';
import './App.css';
import Todos from './components/Todos';
import TopMarketCapChart from './components/TopMarketCapChart';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logos" alt="logo" />
          <p>
            Block Bird
          </p>
        </header>
        <TopMarketCapChart legendPosition="bottom" />
        <Todos />

      </div>
    );
  }
}

export default App;