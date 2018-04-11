import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
  render() {
    const now = new Date();
    const bucketList = ["React","Angular","CSS","Vue"];
    return (
      <div className="App">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>Current time: {now.toTimeString()}</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { bucketList.map(bucket => <li>{bucket}</li>) }
      </div>
    );
  }
}

export default App;