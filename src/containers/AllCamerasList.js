import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCameras, fetchFavorite } from '../actions/cameras';
import CamerasList from '../components/CamerasList';

class AllCamerasList extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCameras());
    dispatch(fetchFavorite());
  }

  render() {
    return (
      <CamerasList {...this.props} />
    );
  }
}

AllCamerasList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isFetching: state.cameras.isFetching,
  items: state.cameras.items,
  favorite: state.favorite,
});

export default connect(
  mapStateToProps,
)(AllCamerasList);
