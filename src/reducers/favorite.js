import { RECEIVE_FAVORITE } from '../actions/cameras';
import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from '../actions/favorite';
import { saveToStorage } from '../api/api';

const favorite = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      const newState = {
        ...state,
        itemsIds: [...state.itemsIds, action.camera.id],
        items: { ...state.items, [action.camera.id]: action.camera },
      };
      saveToStorage(newState);
      return newState;
    }
    case REMOVE_FROM_FAVORITE: {
      const newItemsIds = state.itemsIds.filter(itemId => itemId !== action.camera.id);
      const newItems = {
        ...Object.keys(state.items).reduce((akk, c) => {
          if (state.items[c].id !== action.camera.id) {
            akk[c] = state.items[c];
          }
          return akk;
        }, {}),
      };
      const newState = {
        itemsIds: newItemsIds,
        items: newItems,
      };
      saveToStorage(newState);
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
