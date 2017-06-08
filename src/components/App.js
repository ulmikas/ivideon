import React from 'react';
import Header from './Header';
import Footer from '../containers/Footer';
import FavoritesCameras from '../containers/FavoritesCameras';
import styles from '../css/app.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <FavoritesCameras />
    <Footer />
  </div>
);

export default App;
