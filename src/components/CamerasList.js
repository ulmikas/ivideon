import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import { fetchCameras } from '../actions';
import Camera from './Camera';

const CamerasList = ({ isFetching, items }) => (
  <div>
    {/*sdfas {isFetching}, {items.map(i => <p key={i.uin}>{i.uin}</p>)}*/}
    {!isFetching &&
      <ul>
        { items.map(i => (
          <Camera
            key={i.uin}
            {...i}
            favorite={false}
          />))
        }
      </ul>
    }
  </div>
);

CamerasList.propTypes = {
  isFetching: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
};

CamerasList.defaultProps = {
  isFetching: false,
  items: [],
};

export default CamerasList;
