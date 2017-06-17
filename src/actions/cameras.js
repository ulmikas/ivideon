import axios from 'axios';

export const RECEIVE_CAMERAS = 'RECEIVE_CAMERAS';
export const REQUEST_CAMERAS = 'REQUEST_CAMERAS';
export const FAILURE_CAMERAS = 'FAILURE_CAMERAS';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';

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

export const receiveFavorite = json => ({
  type: RECEIVE_FAVORITE,
  json,
});

export const fetchCameras = seed => (dispatch) => {
  const curSeed = (seed) ? `?seed=${seed}` : '';
  dispatch(requestCameras(seed));
  return axios
    .get(`https://api.ivideon.com/tv/cameras${curSeed}`)
    .then(res => (res.data.success
        ? dispatch(receiveCameras(res.data.response))
        : dispatch(failureCameras(res.data.response.code_alias))))
    .catch(error => dispatch(failureCameras(error.message)));
};

export const fetchFavorite = () => (dispatch) => {
  dispatch(receiveFavorite(JSON.parse(window.localStorage.getItem('favorite'))));
};
