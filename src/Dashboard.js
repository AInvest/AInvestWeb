import React from 'react';
import Header from './dashboardComponents/dashboardHeader';
import ChartView from './dashboardComponents/dashboardChart.js';
import Table from './dashboardComponents/Table.js';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
    };
  }

  render() {
    return (
      <div>
        <Header />
        <ChartView test={this.state.test} />
        <Table />
      </div>
    );
  }
}