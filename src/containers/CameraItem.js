import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite, requestImage } from '../actions';
import Camera from '../components/Camera';

class CameraItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,
      favorite: this.isFavorite(),
    };

    this.toggleView = this.toggleView.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
    this.onFavCLick = this.onFavCLick.bind(this);
  }

  componentDidMount() {
  }

  onFavCLick() {
    if (this.state.favorite) {
      this.props.dispatch(removeFromFavorite(this.props.camera.uin));
    } else {
      this.props.dispatch(addToFavorite(this.props.camera));
    }
    this.setState({
      favorite: !this.state.favorite,
    });
  }

  isFavorite() {
    return Object.prototype.hasOwnProperty.call(this.props.favorite, this.props.camera.uin);
  }

  toggleView() {
    this.setState({
      preview: !this.state.preview,
    });
  }

  render() {
    return (
      <Camera {...this.props.camera} toggleView={this.toggleView} onFavCLick={this.onFavCLick} preview={this.state.preview} favorite={this.state.favorite} />
    );
  }
}

const mapStateToProps = state => ({
  favorite: state.favorite,
});


CameraItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorite: PropTypes.objectOf(PropTypes.object).isRequired,
  camera: PropTypes.objectOf(PropTypes.any).isRequired,
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   // console.log('CI ', ownProps, Object.prototype.hasOwnProperty.call(ownProps.favorite, ownProps.camera.uin));
//   console.log('!', dispatch);
//   return ({
//   onFavCLick: () => {
//     console.log('favclick');
//     if (Object.prototype.hasOwnProperty.call(ownProps.favorite, ownProps.camera.uin)) {
//       dispatch(removeFromFavorite(ownProps.uin));
//     } else {
//       dispatch(addToFavorite(ownProps.camera));
//     }
//   },
// });
// }
export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(CameraItem);
