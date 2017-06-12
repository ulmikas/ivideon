import axios from 'axios';

export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const RECEIVE_CAMERAS = 'RECEIVE_CAMERAS';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REQUEST_CAMERAS = 'REQUEST_CAMERAS';
export const FAILURE_CAMERAS = 'FAILURE_CAMERAS';

export const REQUEST_IMAGE = 'REQUEST_IMAGE';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const FAILURE_IMAGE = 'FAILURE_IMAGE';

export const addToFavorite = camera => ({
  type: ADD_TO_FAVORITE,
  camera,
});

export const removeFromFavorite = uin => ({
  type: REMOVE_FROM_FAVORITE,
  uin: uin,
});

export const receiveFavorite = json => ({
  type: RECEIVE_FAVORITE,
  json,
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

export const requestImage = (serverId, cameraId) => console.log(serverId, cameraId) && ({
  type: REQUEST_IMAGE,
  serverId,
  cameraId,
});

export const receiveImage = img => ({
  type: RECEIVE_IMAGE,
  img,
});

export const imageFailure = error => ({
  type: FAILURE_IMAGE,
  error,
});

export const fetchImage = (serverId, cameraId) => (dispatch) => {
  dispatch(requestImage(serverId, cameraId));
  return axios
    .get(`https://streaming.ivideon.com/preview/live?server=${serverId}&camera=${cameraId}`)
    .then(res => {console.log(res); return (res.data.success
        ? dispatch(receiveImage(res.data.response))
        : dispatch(imageFailure(res.data.response.code_alias)))})
    .catch(error => dispatch(imageFailure(error.message)));
};


export const fetchFavorite = () => (dispatch) => {
  dispatch(receiveFavorite(JSON.parse(window.localStorage.getItem('favorite'))));
};

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
