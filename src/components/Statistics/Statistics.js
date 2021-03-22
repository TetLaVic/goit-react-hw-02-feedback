import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={styles.stats}>
        <span className={styles.statsItem}>
          <span className={styles.statsItemText}>Neutral:</span> {neutral}
        </span>
        <span className={styles.statsItem}>
          <span className={styles.statsItemText}>Bad:</span> {bad}
        </span>
        <span className={styles.statsItem}>
          <span className={styles.statsItemText}>Good:</span> {good}
        </span>
        <span className={styles.statsItem}>
          <span className={styles.statsItemText}>Total:</span>
          {total}
        </span>
        <span className={styles.statsItem}>
          <span className={styles.statsItemText}>Positive feedback:</span>
          {good > 0 ? positivePercentage : 0}%
        </span>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
