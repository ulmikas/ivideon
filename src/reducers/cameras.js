import { RECEIVE_CAMERAS, REQUEST_CAMERAS, RECEIVE_FAVORITE } from '../actions/cameras';

const cameras = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CAMERAS:
      return {
        ...state,
        isFetching: false,
        itemsIds: [...state.itemsIds, ...action.cameras.itemsIds],
        items: { ...state.items, ...action.cameras.items },
        nextSeed: action.seeds.next,
      };
    case REQUEST_CAMERAS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_FAVORITE: {
      const newState = {
        ...state,
        itemsIds: [...action.json.itemsIds, ...state.itemsIds],
        items: { ...action.json.items, ...state.items },
      };
      return newState;
    }
    default:
      return state;
  }
};

export default cameras;
