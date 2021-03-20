import './App.css';
import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleGoodFeedback = () => {
    const currentState = this.state;
    this.setState(prevState => {
      const updateState = { good: prevState.good + 1 };
      return { ...currentState, ...updateState };
    });
  };

  handleNeutralFeedback = () => {
    const currentState = this.state;
    this.setState(prevState => {
      const updateState = { neutral: prevState.neutral + 1 };
      return { ...currentState, ...updateState };
    });
  };

  handleBadFeedback = () => {
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
    console.log(Math.round((this.state.good / this.countTotalFeedBack) * 100));
    return Math.round((this.state.good / this.countTotalFeedBack()) * 100);
  };

  render() {
    return (
      <>
        <Section title={'Leave your feedback'}>
          <FeedbackOptions
            onGood={this.handleGoodFeedback}
            onNeutral={this.handleNeutralFeedback}
            onBad={this.handleBadFeedback}
          />
        </Section>
        {this.countTotalFeedBack() ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedBack()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </>
    );
  }
}

export default App;
