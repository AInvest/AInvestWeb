import React from 'react';
import './landingPageStyles/PotentialEarnings.css';

export default class PotentialEarnings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investmentValue: 5000,
      earnings: 10000
    }

    this.onChangeFunc = this.onChangeFunc.bind(this);
  }

  onChangeFunc(input) {
    console.log(input);
    this.setState({
      investmentValue: input.target.value,
    });
  }

  render() {
    return (
      <div>
        <p>Invest with AI:</p>
        <br />
        <p>How much do you want to invest? (min $5000)</p>
        <input type="number" value={this.state.investmentValue} onChange={this.onChangeFunc}/>
        <p>Potential earnings: {this.state.investmentValue*2}</p>
      </div>
      );
  }
}