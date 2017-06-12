import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../actions';
import FavoriteButton from '../components/FavoriteButton';

const isFavorite = (favs, uin) => Object.prototype.hasOwnProperty.call(favs, uin);

const mapStateToProps = (state, ownProps) => {
  return ({
    cams: state.cameras.items,
  favorite: isFavorite(state.favorite, ownProps.uin),
  favs: state.favorite,
});
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('fl', ownProps);
  return ({
  onClick: () => {
    if (isFavorite(ownProps.favorite, ownProps.uin)) {
      dispatch(removeFromFavorite(ownProps.uin));
    } else {
      dispatch(addToFavorite(ownProps.uin));
    }
  },
});
}
const FavoriteLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteButton);

export default FavoriteLink;
