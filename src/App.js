import React, { Component } from 'react';
import PotentialEarnings from './landingPageComponents/PotentialEarnings';
import RiskAssessment from './landingPageComponents/RiskAssessment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRisk: '',
      userInvestment: 0,
    }
    this.setUserRisk = this.setUserRisk.bind(this);
    this.setUserInvestment = this.setUserInvestment.bind(this);
  }

  clickFunc() {
    fetch('http://api.glassdoor.com/api/api.htm?t.p=130933&t.k=KSunWfVnK7&userip=127.0.0.1&useragent=&format=json&v=1&action=employers&city=san_francisco&ps=50', {
      method: 'POST',
    }).then(response => response.json())
    .then(value => console.log(value))
  }

  setUserInvestment(investment) {
    this.setState({
      userInvestment: investment,
    })
  }

  setUserRisk(riskString) {
    this.setState({
      userRisk: riskString,
    })
  }

  render() {
    return (
      <div className="App">
        <PotentialEarnings updateInvestment={this.setUserInvestment}/>
        <RiskAssessment riskSet={this.setUserRisk}/>
      </div>
    );
  }
}

export default App;
