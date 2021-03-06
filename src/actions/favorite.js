export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const addToFavorite = camera => ({
  type: ADD_TO_FAVORITE,
  camera,
});

export const removeFromFavorite = camera => ({
  type: REMOVE_FROM_FAVORITE,
  camera,
});
