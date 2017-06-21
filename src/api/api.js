import axios from 'axios';

const getCameras = (curSeed, success, fail) =>
  axios.get(`https://api.ivideon.com/tv/cameras${curSeed}`)
    .then(success)
    .catch(fail);
const getFromStorage = () => JSON.parse(window.localStorage.getItem('favorite') || '{}');
const saveToStorage = payload => window.localStorage.setItem('favorite', JSON.stringify(payload));

export { getCameras, getFromStorage, saveToStorage };
