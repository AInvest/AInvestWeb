import React from 'react';
import './dashboardStyles/dashboardStyles.css';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverCard: false,
    }
    this.onHoverCard = this.onHoverCard.bind(this);
  }

  onHoverCard() {
    this.setState({
      hoverCard: !this.state.hoverCard,
    })
    console.log(this.state.hoverCard);
  }

  render() {
    return (
      <div className="tableContainer">
        {!this.state.hoverCard &&
          <div className="table" onMouseOver={this.onHoverCard}></div>
        }
        {this.state.hoverCard &&
          <div className="tableHover" onMouseOut={this.onHoverCard}></div>
        }
      </div>
    );
  }
}