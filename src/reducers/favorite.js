import { RECEIVE_FAVORITE } from '../actions/cameras';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../actions/favorite';

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

export default favorite;
