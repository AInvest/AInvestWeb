import React from 'react';
import './landingPageStyles/PotentialEarnings.css';

export default class PotentialEarnings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentValue: 5000,
    }

    this.onChangeFunc = this.onChangeFunc.bind(this);
  }

  onChangeFunc(input) {
    console.log(input);
    this.setState({
      investmentValue: input.target.value,
    });
    this.props.updateInvestment(input.target.value);
  }

  render() {
    return (
      <div className="potentialEarningsContainer">
        <h3>LET'S GET STARTED</h3>
        <h1>How much do you want to invest?</h1>
        <input type="number" value={this.state.investmentValue} onChange={this.onChangeFunc}/>
        <p>1 Year Potential Earnings: ${this.state.investmentValue*2}</p>
      </div>
      );
  }
}