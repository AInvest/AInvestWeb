import React, { Component } from 'react';
import Chart from 'chart.js';
// import styles from './dashboardStyles/dashboardStyles.css';

class ChartView extends Component {
  constructor(props) {
    super(props);
  } 
  componentDidMount() {
    if (this.props.test) {
    //   var promptLabels = this.props.promptDisplay.map((choice) => {
    //     return choice.choice;
    //   });

    //   var promptData = this.props.promptDisplay.map((choice) => {
    //     return choice.tally;
    //   });
      let promptChart = new Chart(this.refs.promptChartRef, {
        type: 'line',
        data: {
          labels: ['Dec 2016', 'Jan 2017', 'Feb 2017', 'Mar 2017', 'Apr 2017', 'May 2017', 'Jun 2017'],
          datasets: [{
            label: ['With AInvest', ],
            data: [20000, 26403, 24803, 32500, 32940, 45029, 47001 ],
            backgroundColor: [
              'rgba(0,255,0,0.3)',
            ],
            lineTension: 0,
            borderColor: [
              'rgba(0,255,0,0.3)',
            ],
            borderWidth: 1
          }, {
            label: 'Without AInvest',
            data: [20000, 23032, 24803, 30320, 22840, 32029, 30321],
            backgroundColor: [
              'rgba(0,0,255,0.3)',
            ],
            lineTension: 0,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }

  render() {
    return (
      <div>
        <div style={{position: 'absolute', top: '150px', left: '300px', width: '900px', height: '800px'}}>
          <canvas ref="promptChartRef" id="promptChart"></canvas>
        </div>
      </div>
    );
  }
}

export default ChartView;