import React from 'react';
import PropTypes from 'prop-types';
// import { fetchCameras } from '../actions';

const Camera = ({ camera_name, description, total_views, favorite }) => (
  <li className="camera">
    <div className="camera__image" />
    <div className="camera__info">
      <div className="camera__name">{ camera_name }</div>
      <div className="camera__description">{ description }</div>
      <button type="button" className="camera__favorite">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="17px" viewBox="0 0 488 466" version="1.1" focusable="false">
          <path stroke="#999" strokeWidth="16" fill={(favorite) ? '#F6A623' : 'none'} d="M382.437 465.1 C379.306 465.1 376.2 464.3 373.3 462.8 L244 394.8 L114.72 462.8 C108.084 466.3 100 465.7 94 461.3 C87.919 456.9 84.9 449.4 86.1 442 L110.84 298 L6.254 196.1 C0.897 190.9 -1.1 183 1.3 175.9 C3.595 168.8 9.7 163.6 17.2 162.5 L161.686 141.5 L226.336 10.6 C232.953 -2.9 255 -2.9 261.6 10.6 L326.295 141.5 L470.817 162.5 C478.241 163.6 484.4 168.8 486.7 175.9 C489.032 183.1 487.1 190.9 481.7 196.1 L377.14 298.1 L401.185 438.3 C402.051 440.4 402.5 442.8 402.5 445.4 C402.505 456.3 393.7 465.1 382.8 465.1 C382.754 465.1 382.6 465.1 382.4 465.1 L382.437 465.1 Z" />
        </svg>
      </button>
      <div className="camera__total-views">{ total_views }</div>
    </div>
  </li>
);

Camera.propTypes = {
  camera_name: PropTypes.string.isRequired,
  totalViews: PropTypes.number,
  favorite: PropTypes.bool,
};

Camera.defaultProps = {
  totalViews: 0,
  favorite: false,
};

export default Camera;
