import { RECEIVE_CAMERAS, REQUEST_CAMERAS, RECEIVE_FAVORITE } from '../actions/cameras';

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
            if (!action.json[c]) {
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

export default cameras;
