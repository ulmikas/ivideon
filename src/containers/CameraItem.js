import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../actions/favorite';
import Camera from '../components/Camera';

class CameraItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: false,
      favorite: !!props.favorite[props.camera.uin],
    };
  }

  onFavCLick = () => {
    if (this.state.favorite) {
      this.props.dispatch(removeFromFavorite(this.props.camera.uin));
    } else {
      this.props.dispatch(addToFavorite(this.props.camera));
    }
    this.setState({
      favorite: !this.state.favorite,
    });
  }

  toggleView = () => {
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

export default connect(
  mapStateToProps,
)(CameraItem);
