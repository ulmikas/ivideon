import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from '../css/Image.css';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      image: `${props.imgsrc}&time=${Date.now()}`,
    };
  }

  componentWillMount() {
    // if (!this.state.error) {
    //   this.interval = setInterval(this.refreshImage, 10000);
    // }
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  // getImage = () => {
  //   const img = new Image();
  //   img.src = `${this.props.imgsrc}&time=${Date.now()}`;
  //   img.onload = () => {
  //     this.setState({
  //       image: img.src,
  //       error: false,
  //     });
  //   };
  //   img.onerror = () => {
  //     this.setState({
  //       error: true,
  //     });
  //   };
  // }

  refreshImage = () => {
    this.setState({
      image: `${this.props.imgsrc}&time=${Date.now()}`,
    });
    console.log('refresh');
  }

  onLoad = () => {
    this.setState({
      error: false,
    });
    this.timeout = setTimeout(this.refreshImage, 10000);
    console.log('load');
  }

  onError = () => {
    this.setState({
      error: true,
    });
    if (this.timeout) {
      clearInterval(this.timeout);
    }
    console.log('error');
  }

  render() {
    return (
      <div>
        {(this.state.error) 
          ?
            <div className={style.error}>
              <p>test</p>
              <button onClick={this.refreshImage}>Refresh</button>
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
