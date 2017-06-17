import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/favbutton.css';

const FavoriteButton = ({ favorite, onClick }) => (
  <button type="button" className={styles.favorite} onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#999" d="M20 7.7l-6.9-1L10 .4 6.9 6.8 0 7.8l5.1 4.9-1.3 6.9 6.2-3.3 6.2 3.3-1.1-6.9z"/><path fill={(favorite) ? '#F6A623' : '#fff'} d="M10 15.2l-4.8 2.5.9-5.3-3.9-3.9 5.3-.9L10 2.8l2.4 4.8 5.3.9-3.9 3.8.9 5.3z"/></svg>
  </button>
);

FavoriteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default FavoriteButton;
