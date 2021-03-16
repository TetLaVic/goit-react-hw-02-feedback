import { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    const total = good + neutral + bad;

    return (
      <div>
        <p>Statistics </p>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>
          Positive feedback: {total ? Math.round((good / total) * 100) : 0}%
        </span>
      </div>
    );
  }
}

export default Statistics;
