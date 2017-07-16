import React from 'react';
import PropTypes from 'prop-types';
import CameraConnector from '../containers/CameraConnector';

const CamerasList = ({ cameras, favorite }) => (
  <div>
    { cameras.map(camera => (
      <CameraConnector
        key={camera.id}
        camera={camera}
        favorite={favorite}
      />))
    }
  </div>
);

CamerasList.propTypes = {
  cameras: PropTypes.arrayOf(PropTypes.object),
  favorite: PropTypes.objectOf(PropTypes.any),
};

CamerasList.defaultProps = {
  isFetching: false,
  cameras: {
    itemsIds: [],
    items: {},
  },
  favorite: {
    itemsIds: [],
    items: {},
  },
};

export default CamerasList;
