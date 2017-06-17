import React from 'react';
import Header from './Header';
import Footer from '../containers/Footer';
import AllCamerasList from '../containers/AllCamerasList';
import styles from '../css/app.css';

const App = () => (
  <div className={styles.app}>
    <Header />
    <AllCamerasList />
    <Footer />
  </div>
);

export default App;
