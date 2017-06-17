import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCameras } from '../actions/cameras';
import styles from '../css/footer.css';

const Footer = ({ nextSeed, onMoreClick }) => (
  <div className={styles.footer}>
    <button className={styles.footer__top} onClick={() => { window.scrollTo(0, 0); }}>&uarr;&nbsp;TOP</button>
    <button className={styles.footer__more} onClick={() => { onMoreClick(nextSeed); }}>MORE</button>
  </div>
);

const mapStateToProps = state => ({
  nextSeed: state.cameras.nextSeed,
});

const mapDispatchToProps = dispatch => ({
  onMoreClick: (seed) => {
    dispatch(fetchCameras(seed));
  },
});

Footer.propTypes = {
  nextSeed: PropTypes.string.isRequired,
  onMoreClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
