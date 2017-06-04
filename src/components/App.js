import React from 'react';
import Footer from './Footer';
import FavoritesList from '../containers/FavoritesList';

const App = () => (
  <div>
    <header>
      <h1>Favorite Cameras</h1>
    </header>
    <FavoritesList />
    <Footer />
  </div>
);

export default App;
