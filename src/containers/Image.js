import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/image.css';

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
      clearInterval(this.timeout);
    }
  }

  refreshImage = () => {
    this.setState({
      image: `${this.props.imgsrc}&time=${Date.now()}`,
    });
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
      clearInterval(this.timeout);
    }
  }

  render() {
    return (
      <div>
        {(this.state.error)
          ?
            <div className={styles.error}>
              <div className={styles.error__msg}>Camera is offline</div>
              <button className={styles.error__btn} onClick={this.refreshImage}>Refresh</button>
            </div>
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
