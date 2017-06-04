import { combineReducers } from 'redux';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, RECEIVE_CAMERAS, REQUEST_CAMERAS } from '../actions';

const favorite = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [...state, action.uin];
    case REMOVE_FROM_FAVORITE:
      return [...state.filter(c => c !== action.uin)];
    default:
      return state;
  }
};

const cameras = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CAMERAS:
      return {
        ...state,
        isFetching: false,
        items: action.json.cameras,
      };
    case REQUEST_CAMERAS:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

const favoriteCams = combineReducers({
  cameras,
  favorite,
});

export default favoriteCams;
