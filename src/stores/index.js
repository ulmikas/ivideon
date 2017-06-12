import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import favoriteCams from '../reducers';

const initialState = {
  cameras: {
    isFetching: false,
    items: {},
    nextSeed: '',
  },
  favorite: {},
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(favoriteCams, initialState, composeEnhancers(applyMiddleware(thunk)));
