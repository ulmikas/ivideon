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
        { items.map(i => (
          <Camera
            key={i.uin}
            {...i}
            favorite={favorite}
          />))
        }
      </ul>
    }
  </div>
);

CamerasList.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  favorite: PropTypes.arrayOf(PropTypes.number),
};

CamerasList.defaultProps = {
  isFetching: false,
  items: [],
  favorite: [],
};

export default CamerasList;
