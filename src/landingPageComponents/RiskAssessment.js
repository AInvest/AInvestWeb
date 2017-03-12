import React from 'react';
import './landingPageStyles/RiskAssessment.css';

export default class RiskAssessment extends React.Component {
  constructor(props) {
    super(props);
    this.onLowButtonClick = this.onLowButtonClick.bind(this);
    this.onMediumButtonClick = this.onMediumButtonClick.bind(this);
    this.onHighButtonClick = this.onHighButtonClick.bind(this);
  }

  onLowButtonClick() {
    this.props.riskSet("Low");
  }

  onMediumButtonClick() {
    this.props.riskSet("Medium");
  }

  onHighButtonClick() {
    this.props.riskSet("High");
  }

  render() {
    return (
      <div className="riskAssessmentContainer">
        <h2>Risk Assessment</h2>
        <h1>How Lucky Do You Feel?</h1>
        <div className="riskButtonContainer">
          <button className="riskButton" onClick={this.onLowButtonClick}>
            <h1>Low</h1>
            <h2>I'd like a safety net</h2>
          </button>
          <button className="riskButton" onClick={this.onMediumButtonClick}>
            <h1>Medium</h1>
            <h2>I'm open to opportunity</h2>
          </button>
          <button className="riskButton" onClick={this.onHighButtonClick}>
            <h1>High</h1>
            <h2>As lucky as a four-leaf clover</h2>
          </button>
        </div>
        <div className="generatePortfolioContainer">
          <button className="generatePortfolio">
            <h2>Generate My Portfolio</h2>
          </button>
        </div>
      </div>
    );
  }
}