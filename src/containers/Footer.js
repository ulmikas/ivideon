import React from 'react';
import { connect } from 'react-redux';
import { fetchCameras } from '../actions';
import styles from '../css/footer.css';

const Footer = ({nextSeed, onMoreClick}) => (
  <div className={styles.footer}>
    <button onClick={() => { window.scrollTo(0, 0); }}>TOP</button>
    <button onClick={e => { onMoreClick(nextSeed); }}>MORE</button>
    {nextSeed}
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
