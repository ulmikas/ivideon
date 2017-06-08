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

export default createStore(favoriteCams, initialState, applyMiddleware(thunk));
