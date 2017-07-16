import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCameras, fetchFavorite } from '../actions/cameras';
import CamerasList from '../components/CamerasList';
import LoadingOverlay from '../components/LoadingOverlay';


class AllCamerasList extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCameras());
    dispatch(fetchFavorite());
  }

  render() {
    return (
      <div>
        {(this.props.isFetching) ? <LoadingOverlay /> : ''}
        <CamerasList {...this.props} />
      </div>
    );
  }
}

AllCamerasList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const getCamerasList = cameras => ((cameras.itemsIds) ? cameras.itemsIds.map(i => cameras.items[i]) : []);

const mapStateToProps = state => ({
  isFetching: state.cameras.isFetching,
  cameras: getCamerasList(state.cameras),
  favorite: state.favorite,
});

export default connect(
  mapStateToProps,
)(AllCamerasList);
