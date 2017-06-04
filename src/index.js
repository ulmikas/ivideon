import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import favoriteCamsStore from './stores';
import App from './components/App';

// import { addToFavorite, removeFromFavorite, fetchCameras } from './actions';
import { fetchCameras } from './actions';

const rootElement = document.querySelector('.app');

console.log(favoriteCamsStore.getState());
// favoriteCamsStore.dispatch(addToFavorite('234234'));
// favoriteCamsStore.dispatch(addToFavorite('wrwer'));
favoriteCamsStore.dispatch(fetchCameras());
// console.log(favoriteCamsStore.getState());
// favoriteCamsStore.dispatch(removeFromFavorite('wrwer'));
// favoriteCamsStore.dispatch(removeFromFavorite('234'));
// console.log(favoriteCamsStore.getState());

render(
  <Provider store={favoriteCamsStore}>
    <App />
  </Provider>,
  rootElement,
);
