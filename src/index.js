import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import favoriteCamsStore from './stores';
import App from './components/App';

// import { fetchCameras } from './actions';

const rootElement = document.querySelector('.app');

// favoriteCamsStore.dispatch(fetchCameras());

render(
  <Provider store={favoriteCamsStore}>
    <App />
  </Provider>,
  rootElement,
);
