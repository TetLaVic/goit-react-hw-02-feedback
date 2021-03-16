import { Component } from 'react';
import Statistics from '../Statistics';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleGood = () => {
    const currentState = this.state;
    this.setState(prevState => {
      const updateState = { good: prevState.good + 1 };
      return { ...currentState, ...updateState };
    });
  };

  handleNeutral = () => {
    const currentState = this.state;
    this.setState(prevState => {
      const updateState = { neutral: prevState.neutral + 1 };
      return { ...currentState, ...updateState };
    });
  };

  handleBad = () => {
    const currentState = this.state;
    this.setState(prevState => {
      const updateState = { bad: prevState.bad + 1 };
      return { ...currentState, ...updateState };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
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
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default Feedback;
