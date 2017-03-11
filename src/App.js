import React, { Component } from 'react';
import PotentialEarnings from './landingPageComponents/PotentialEarnings';
import RiskAssessment from './landingPageComponents/RiskAssessment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRisk: ''
    }
    this.riskSetter = this.riskSetter.bind(this);
  }

  clickFunc() {
    fetch('http://api.glassdoor.com/api/api.htm?t.p=130933&t.k=KSunWfVnK7&userip=127.0.0.1&useragent=&format=json&v=1&action=employers&city=san_francisco&ps=50', {
      method: 'POST',
    }).then(response => response.json())
    .then(value => console.log(value))
  }

  riskSetter(riskString) {
    this.setState({
      userRisk: riskString,
    })
  }

  render() {
    return (
      <div className="App">
        <PotentialEarnings />
        <RiskAssessment riskSet={this.riskSetter}/>
        <button onClick={this.clickFunc}>Retrieve Info</button>
      </div>
    );
  }
}

export default App;
