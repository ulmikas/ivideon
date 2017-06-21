import { getCameras, getFromStorage } from '../api/api';

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
  const fetchSuccess = res => (res.data.success
      ? dispatch(receiveCameras(res.data.response))
      : dispatch(failureCameras(res.data.response.code_alias)));
  const fetchFail = error => dispatch(failureCameras(error.message));
  dispatch(requestCameras(seed));
  return getCameras(curSeed, fetchSuccess, fetchFail);
};

export const fetchFavorite = () => (dispatch) => {
  dispatch(receiveFavorite(getFromStorage()));
};
