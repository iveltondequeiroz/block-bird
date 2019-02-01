import React, { Component } from 'react';
import logo from './block-bird-p.png';
import TopMarketCapChart from './components/TopMarketCapChart';
import 'semantic-ui-css/semantic.min.css'
class App extends Component {
  render() {
    return (
      <div classNameName="ui container">

        <div>
          <img src={logo} alt="BlockBird Logo" style={{ padding: 5 }} ></img>
        </div>
        <div className="ui five buttons">
          <button className="ui positive button">Top 10 Cryptos</button>
          <button className="ui basic green button">Visualization 2</button>
          <button className="ui basic green button">Visualization 3</button>
          <button className="ui basic green button">Visualization 4</button>
          <button className="ui basic green button">Visualization 5</button>
        </div>
        <div class="ui horizontal segments">
          <div class="ui segment">
            <TopMarketCapChart chartType="bar" legendPosition="bottom" />
          </div>
          <div class="ui segment">
            <TopMarketCapChart chartType="doughnut" legendPosition="bottom" />
          </div>
        </div>
      </div >
    );
  }
}

export default App;