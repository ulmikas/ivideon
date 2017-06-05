import React from 'react';
import Footer from './Footer';
import FavoritesList from '../containers/FavoritesList';
import styles from '../css/app.css';

const App = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <h1>Favorite Cameras</h1>
    </header>
    <FavoritesList />
    <Footer className={styles.footer} />
  </div>
);

export default App;
