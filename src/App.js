import './App.css';
import { Component } from 'react';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <p>Statistics</p>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
      </>
    );
  }
}

export default App;
