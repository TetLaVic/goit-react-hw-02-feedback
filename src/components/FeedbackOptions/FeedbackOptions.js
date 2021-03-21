import { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  render() {
    console.log(this);
    const { onGood, onNeutral, onBad } = this.props;
    return (
      <div>
        <button type="button" onClick={onGood}>
          Good
        </button>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default Feedback;
