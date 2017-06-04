import { connect } from 'react-redux';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../actions';
import CamerasList from '../components/CamerasList';

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  items: state.cameras.items,
});

// const mapDispatchToProps = ({
//   onClick: addLabel,
//   onClick2: removeLabel,
// });

const AllCamerasList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(CamerasList);

export default AllCamerasList;
