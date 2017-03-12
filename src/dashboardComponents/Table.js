import React from 'react';
import './dashboardStyles/dashboardStyles.css';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tableContainer">
        <div className="table"></div>
      </div>
    );
  }
}