import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/camera.css';
import Image from '../containers/Image';
import FavBtn from './FavoriteButton';

const Camera = ({ camera_name, description, total_views, preview, camera, server, height, width, favorite, toggleView, onFavCLick }) => (
  <li className={(preview) ? styles.cameraView : styles.camera}>
    {(preview)
      ?
        <div className={styles.imageView}>
          <Image imgsrc={`https://streaming.ivideon.com/preview/live?server=${server}&camera=${camera}`} />
          <button onClick={toggleView} className={styles.close}>&times;</button>
        </div>
      :
        <div onClick={toggleView} className={styles.image}>
          <img
            style={{ width: Math.max(100, (75 * width) / height) + '%' }}
            src={`https://streaming.ivideon.com/preview/live?server=${server}&camera=${camera}`}
            alt=""
          />
        </div>
    }
    <div className={styles.info}>
      <div className={styles.name}>{ camera_name }</div>
      {(preview) ? <div className={styles.description}>{ description }</div> : ''}
      <FavBtn favorite={favorite} onClick={onFavCLick} />
      <div className={styles.totalViews}>TOTAL VIEWS: { total_views }</div>
    </div>
  </li>
);

Camera.propTypes = {
  camera_name: PropTypes.string.isRequired,
  total_views: PropTypes.number.isRequired,
  description: PropTypes.string,
  preview: PropTypes.bool,
  favorite: PropTypes.bool,
  toggleView: PropTypes.func.isRequired,
  onFavCLick: PropTypes.func.isRequired,
  camera: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

Camera.defaultProps = {
  description: '',
  preview: false,
  favorite: false,
};

export default Camera;
