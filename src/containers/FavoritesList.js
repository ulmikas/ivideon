import { connect } from 'react-redux';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../actions';
import CamerasList from '../components/CamerasList';

const mapStateToProps = (state) => {
  console.log('FList', state);
  return {
    isFetching: state.isFetching,
    items: state.cameras.items,
    favorite: state.favorite,
  };
};

// const mapDispatchToProps = ({
//   onClick: addLabel,
//   onClick2: removeLabel,
// });

const FavoritesList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(CamerasList);

export default FavoritesList;
