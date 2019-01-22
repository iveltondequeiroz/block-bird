import React, { Component } from 'react';
import logo from './block-bird-p.png';
import './App.css';

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
      </div>
    );
  }
}

export default App;
