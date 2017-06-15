import React from 'react';
import PropTypes from 'prop-types';
// import styles from '../css/Image.css';

const NoImage = ({ onClick }) => (
  <div>
    <p>Camer is offline</p>
    <button type="button" onClick={onClick}>Refresh</button>
  </div>
);

NoImage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NoImage;
