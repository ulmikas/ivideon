import React from 'react';
import PropTypes from 'prop-types';
import FavoriteLink from '../containers/FavoriteLink';
import styles from '../css/camera.css';

// import { fetchCameras } from '../actions';

const CameraView = ({ camera_name, description, total_views, uin, preview, favorite }) => (
  <li className={styles.cameraView}>
    <div className={styles.imageView}>
      <img alt="" src="http://lorempixel.com/1400/600/sports/1/" />
      <button className={styles.close}>&times;</button>
    </div>
    <div className={styles.info}>
      <div className={styles.name}>{ camera_name }</div>
      <div className={styles.description}>{ description }</div>
      <FavoriteLink favorite={favorite} uin={uin} />
      <div className={styles.totalViews}>TOTAL VIEWS: { total_views }</div>
    </div>
  </li>
);

CameraView.propTypes = {
  cameraView_name: PropTypes.string.isRequired,
  total_views: PropTypes.number.isRequired,
  uin: PropTypes.string.isRequired,
  description: PropTypes.string,
  preview: PropTypes.bool,
  favorite: PropTypes.objectOf(PropTypes.object),
};

CameraView.defaultProps = {
  description: '',
  preview: true,
  favorite: {},
};

export default CameraView;
