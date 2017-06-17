import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/camera.css';
import CameraItem from '../containers/CameraItem';

const CamerasList = ({ isFetching, items, favorite }) => (
  <div>
    {!isFetching &&
      <ul className={styles.camerasList}>
        { Object.keys(items).map(i => (
          <CameraItem
            key={i}
            camera={items[i]}
            favorite={favorite}
          />))
        }
      </ul>
    }
  </div>
);

CamerasList.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.objectOf(PropTypes.object),
  favorite: PropTypes.objectOf(PropTypes.object),
};

CamerasList.defaultProps = {
  isFetching: false,
  items: {},
  favorite: {},
};

export default CamerasList;
