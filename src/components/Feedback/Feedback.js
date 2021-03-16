import { Component } from 'react';
import Statistics from '../Statistics';

class Feedback extends Component {
  render() {
    const { state, total, positivePercentage } = this.props;
    return (
      <div>
        <p>Please leave feedback</p>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}

export default Feedback;
