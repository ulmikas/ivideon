import axios from 'axios';

export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const RECEIVE_CAMERAS = 'RECEIVE_CAMERAS';
export const REQUEST_CAMERAS = 'REQUEST_CAMERAS';
export const FAILURE_CAMERAS = 'FAILURE_CAMERAS';

export const addToFavorite = uin => ({
  type: ADD_TO_FAVORITE,
  uin,
});

export const removeFromFavorite = uin => ({
  type: REMOVE_FROM_FAVORITE,
  uin,
});

export const receiveCameras = json => ({
  type: RECEIVE_CAMERAS,
  json,
});

export const requestCameras = seed => ({
  type: REQUEST_CAMERAS,
  seed,
});

export const failureCameras = error => ({
  type: FAILURE_CAMERAS,
  error,
});

export const fetchCameras = seed => (dispatch) => {
  const curSeed = (seed) ? `?seed=${seed}` : '';
  dispatch(requestCameras(seed));
  return axios
    .get(`http://api.ivideon.com/tv/cameras${curSeed}`)
    .then(res => (res.data.success
        ? dispatch(receiveCameras(res.data.response))
        : dispatch(failureCameras(res.data.response.code_alias))))
    .catch(error => dispatch(failureCameras(error.message)));
};
