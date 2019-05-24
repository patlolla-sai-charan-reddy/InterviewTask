import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Results({ total, label }) {
  return (
    <p>
      {label} : {total}
    </p>
  );
}

class TransactionData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      amount: 0,
      total: 0
    };
  }
  changedAmount(e) {
    e.preventDefault();
    if (e.target.value > 100) {
      this.setState({
        points: this.state.points + (e.target.value - 100) * 2 + 50
      });
    } else if (e.target.value > 50) {
      this.setState({
        points: this.state.points + e.target.value * 1
      });
    } else {
      this.setState({
        points: 0
      });
    }
  }
  render() {
    return (
      <>
        <input onChange={e => this.changedAmount(e)} />
        <Results
          label="Reward Points Earned Per month:"
          total={(this.state.points / 90) * 30}
        />
        <Results
          label="Total Points Earned For 3 Months"
          total={this.state.points}
        />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TransactionData />, rootElement);
