import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/cameras.css';

// import { fetchCameras } from '../actions';
import Camera from './Camera';

const CamerasList = ({ isFetching, items, favorite }) => (
  <div>
    {/*sdfas {isFetching}, {items.map(i => <p key={i.uin}>{i.uin}</p>)}*/}
    {!isFetching &&
      <ul className={styles.list}>
        { Object.keys(items).map(i => (
          <Camera
            key={items[i].uin}
            {...items[i]}
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
