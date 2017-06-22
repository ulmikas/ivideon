import React from 'react';
import PropTypes from 'prop-types';
import CameraConnector from '../containers/CameraConnector';
import styles from './cameraList.css';

const CamerasList = ({ isFetching, items, favorite }) => (
  <div>
    {(isFetching)
    ?
      <div className={styles.loading}>
        loading
      </div>
    :
      <div className={styles.camerasList}>
        { Object.keys(items).map(i => (
          <CameraConnector
            key={i}
            camera={items[i]}
            favorite={favorite}
          />))
        }
      </div>
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
