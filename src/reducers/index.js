import { combineReducers } from 'redux';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, RECEIVE_CAMERAS, RECEIVE_FAVORITE, REQUEST_CAMERAS } from '../actions';

const favorite = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      const newState = { ...state, [action.camera.uin]: action.camera };
      window.localStorage.setItem('favorite', JSON.stringify(newState));
      return newState;
    }
    case REMOVE_FROM_FAVORITE: {
      const newState = {
        ...Object.keys(state).reduce((akk, c) => {
          if (c !== action.uin) {
            akk[c] = state[c];
          }
          return akk;
        }, {}),
      };
      window.localStorage.setItem('favorite', JSON.stringify(newState));
      return newState;
    }
    case RECEIVE_FAVORITE: {
      return {
        ...state,
        ...action.json,
      };
    }
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
        items: {
          ...state.items,
          ...action.json.cameras.reduce((akk, c) => {
            akk[c.uin.toString()] = c;
            return akk;
          }, {}),
        },
        nextSeed: action.json.seeds.next,
      };
    case REQUEST_CAMERAS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_FAVORITE: {
      return {
        ...state,
        items: {
          ...{},
          ...action.json,
          ...Object.keys(state.items).reduce((akk, c) => {
            if (!action.json.hasOwnProperty(c)) {
              akk[c] = state.items[c];
            }
            return akk;
          }, {}),
        },
      };
    }
    default:
      return state;
  }
};

const favoriteCams = combineReducers({
  cameras,
  favorite,
});

export default favoriteCams;
