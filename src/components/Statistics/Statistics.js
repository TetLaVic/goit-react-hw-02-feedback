import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        {/* <p>Statistics </p> */}
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {good > 0 ? positivePercentage : 0}%</span>
      </div>
    );
  }
}

export default Statistics;
