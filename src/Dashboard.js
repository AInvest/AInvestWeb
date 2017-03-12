import React from 'react';
import Header from './dashboardComponents/dashboardHeader';
import ChartView from './dashboardComponents/dashboardChart.js';
import Table from './dashboardComponents/Table.js';
import HoverCard from './dashboardComponents/HoverCard.js';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
    };

    this.onHover = this.onHover.bind(this);
  }

  onHover() {
    this.setState({
      showCard: true
    });
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