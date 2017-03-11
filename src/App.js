import React, { Component } from 'react';
import './App.css';

class App extends Component {
  clickFunc() {
    fetch('http://api.glassdoor.com/api/api.htm?t.p=130933&t.k=KSunWfVnK7&userip=127.0.0.1&useragent=&format=json&v=1&action=employers&city=san_francisco&ps=50', {
      method: 'POST',
    }).then(response => response.json())
    .then(value => console.log(value))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to AI-Invest</h2>
        </div>
        <button onClick={this.clickFunc}>Retrieve Info</button>
      </div>
    );
  }
}

export default App;
