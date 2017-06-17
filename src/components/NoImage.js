import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/image.css';

const NoImage = ({ onClick }) => (
  <div className={styles.error}>
    <div className={styles.error__msg}>Camera is offline</div>
    <button className={styles.error__btn} onClick={onClick}>Refresh</button>
  </div>
);

NoImage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NoImage;
