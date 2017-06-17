import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import appStore from './stores';
import App from './components/App';

const rootElement = document.querySelector('.app');

render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  rootElement,
);
