import axios from 'axios';
import {BASE_URL} from './constants';
import {errorCodeMessageMapper} from './errorCodes';

export const formatTimer = totalSeconds => {
  const seconds = totalSeconds % 60;
  const minutes = (totalSeconds - seconds) / 60;

  return appendZero(minutes) + ':' + appendZero(seconds);
};

const appendZero = val => {
  if (val >= 0 && val <= 9) {
    return '0' + val;
  }

  return val;
};

export const getActualPrice = (price, discount) => {
  if (discount) {
    return price - price * discount;
  }

  return price;
};



export const showError = errorCode => {
  alert(errorCodeMessageMapper[errorCode]);
};

export const cutLongName = (name, maxChars = 9) => {
  if (name.length > maxChars) {
    return name.slice(0, maxChars - 3) + '...';
  }

  return name;
};


export const configureAxios = () => {
  axios.defaults.baseURL = BASE_URL;
};
