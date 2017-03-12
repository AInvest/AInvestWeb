import React from 'react';
import './dashboardStyles/dashboardStyles.css';

export default class dashboardHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  getParameterByName(name) {
    let url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

  render() {
    return (
      <div className="header">
        <div className="info">
          <p>INVESTMENT</p>
          <p className="investmentNum">${this.getParameterByName("investment")}</p>
        </div>
        <div className="info">
          <p>1 YR EARNING</p>
          <p className="earningNum">${Number(this.getParameterByName("investment"))*2}</p>
        </div>
        <div className="info">
          <p>RISK</p>
          <p className="riskChoice">{this.getParameterByName("risk")}</p>
        </div>
        <button>BUY</button>
      </div>
    )
  }
}