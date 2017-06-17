import { combineReducers } from 'redux';
import cameras from './cameras';
import favorite from './favorite';

const mainReducer = combineReducers({
  cameras,
  favorite,
});

export default mainReducer;
