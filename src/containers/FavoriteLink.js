import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../actions';
import FavoriteButton from '../components/FavoriteButton';

const isFavorite = (favs, uin) => {
  console.log('is ', favs);
  return (favs.indexOf(uin) > -1);
}

const mapStateToProps = (state, ownProps) => {
  console.log('FL ', state, ownProps);
  return {
    favorite: isFavorite(state.favorite, ownProps.uin),
    favs: state.favorite,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('FLD ', ownProps);
  return {
    onClick: () => {
      if (isFavorite(ownProps.favorite, ownProps.uin)) {
        dispatch(removeFromFavorite(ownProps.uin));
      } else {
        dispatch(addToFavorite(ownProps.uin));
      }
    }
  }
}

const FavoriteLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteButton);

export default FavoriteLink;
