export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const addToFavorite = uin => ({
  type: ADD_TO_FAVORITE,
  uin,
});

export const removeFromFavorite = uin => ({
  type: REMOVE_FROM_FAVORITE,
  uin,
});
