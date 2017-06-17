import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoImage from '../components/NoImage';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      image: `${props.imgsrc}&time=${Date.now()}`,
    };
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  onLoad = () => {
    this.setState({
      error: false,
    });
    this.timeout = setTimeout(this.refreshImage, 10000);
  }

  onError = () => {
    this.setState({
      error: true,
    });
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  refreshImage = () => {
    this.setState({
      image: `${this.props.imgsrc}&time=${Date.now()}`,
    });
  }

  render() {
    return (
      <div>
        {(this.state.error)
          ?
            <NoImage onClick={this.refreshImage} />
          : ''
        }
        <img onLoad={this.onLoad} onError={this.onError} src={this.state.image} alt="1" style={{ display: (this.state.error) ? 'none' : 'block' }} />
      </div>
    );
  }
}

Image.propTypes = {
  imgsrc: PropTypes.string.isRequired,
};

export default Image;
