import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers';

const initialState = {
  cameras: {
    isFetching: false,
    itemsIds: [],
    items: {},
    nextSeed: '',
  },
  favorite: {
    itemsIds: [],
    items: {},
  },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(mainReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
