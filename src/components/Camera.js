import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/camera.css';

import FavoriteLink from '../containers/FavoriteLink';

// import { fetchCameras } from '../actions';

const Camera = ({ camera_name, description, total_views, uin, favorite }) => (
  <li className={styles.camera}>
    <div className={styles.image} style={{ backgroundImage: 'url(http://lorempixel.com/1400/600/sports/1/)' }} />
    <div className={styles.info}>
      <div className={styles.name}>{ camera_name }</div>
      <div className={styles.description}>{ description }</div>
      <FavoriteLink favorite={favorite} uin={uin} />
      <div className={styles.totalViews}>{ total_views }</div>
    </div>
  </li>
);

Camera.propTypes = {
  camera_name: PropTypes.string.isRequired,
  total_views: PropTypes.number,
  favorite: PropTypes.arrayOf(PropTypes.number),
};

Camera.defaultProps = {
  total_views: 0,
  favorite: [],
};

export default Camera;
