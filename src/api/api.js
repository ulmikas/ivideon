import axios from 'axios';

const getCameras = (curSeed, success, fail) =>
  axios.get(`https://api.ivideon.com/tv/cameras${curSeed}`)
    .then(success)
    .catch(fail);
const getFromStorage = () => {
  try {
    const serialized = window.localStorage.getItem('favorite');
    if (serialized === null) {
      return {
        itemsIds: [],
        items: {},
      };
    }
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
};
const saveToStorage = payload => window.localStorage.setItem('favorite', JSON.stringify(payload));

export { getCameras, getFromStorage, saveToStorage };
