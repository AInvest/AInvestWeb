import React from 'react';
import './landingPageStyles/RiskAssessment.css';

export default class RiskAssessment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      risk: '',
    }
    this.onLowButtonClick = this.onLowButtonClick.bind(this);
    this.onMediumButtonClick = this.onMediumButtonClick.bind(this);
    this.onHighButtonClick = this.onHighButtonClick.bind(this);
    this.onGeneratePortfolioClick = this.onGeneratePortfolioClick.bind(this);
  }

  onLowButtonClick() {
    this.setState({
      risk: 'Low',
    });
  }

  onMediumButtonClick() {
    this.setState({
      risk: 'Medium',
    });
  }

  onHighButtonClick() {
    this.setState({
      risk: 'High',
    });
  }

  onGeneratePortfolioClick() {
    if (this.state.risk) {
      window.location = '/dashboard/?investment=' + this.props.investment + '&risk=' + this.state.risk;
    }
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
            <h1>Generate My Portfolio</h1>
          </button>
        </div>
      </div>
    );
  }
}