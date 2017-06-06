import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../actions';
import FavoriteButton from '../components/FavoriteButton';

const isFavorite = (favs, uin) => favs.indexOf(uin) > -1;

const mapStateToProps = (state, ownProps) => ({
  favorite: isFavorite(state.favorite, ownProps.uin),
  favs: state.favorite,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    if (isFavorite(ownProps.favorite, ownProps.uin)) {
      dispatch(removeFromFavorite(ownProps.uin));
    } else {
      dispatch(addToFavorite(ownProps.uin));
    }
  },
});

const FavoriteLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteButton);

export default FavoriteLink;
