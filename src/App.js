import './App.css';
import { Component } from 'react';
import Feedback from './components/Feedback';
// import Statistics from './components/Statistics';

class App extends Component {
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

  countTotalFeedBack = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedBack) * 100);
  };

  render() {
    return (
      <Feedback
        state={this.state}
        total={this.countTotalFeedBack()}
        positivePercentage={this.countPositiveFeedbackPercentage}
      />
    );
  }
}

export default App;
