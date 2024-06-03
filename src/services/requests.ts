import axios from 'axios';
import {isEmpty} from 'lodash';
import {AsyncStorageKey} from '@src/utils/constants';
import ApiConfig from './api-config';
import {load} from '@src/utils/storage';

const api = axios.create({
  baseURL: ApiConfig.baseUrl,
  timeout: 15000, // Request timeout in milliseconds
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

api.interceptors.request.use(
  async config => {
    let accessToken = await load(AsyncStorageKey.AUTH_TOKEN)
      .then(token => token)
      .catch(err => {
        console.debug(err);
      });
    console.log('accessToken ', accessToken);
    if (!isEmpty(accessToken)) {
      config.headers.common.Authorization = 'Bearer ' + accessToken;
    }
    return config;
  },
  function (error) {
    // handle error refresh token
    console.log('Requesterr', error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    // console.log('response', response)
    return response;
  },
  async function (err) {
    // console.log('Request response err', err);
    return Promise.reject(err);
  },
);

const get = async (endpoint: string, params: any) => {
  try {
    const response = await api.get(endpoint, {params});
    const {statusText, status, data} = response;
    return await Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      data: data,
    });
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
};

const post = async (endpoint: string, bodyData: any) => {
  try {
    const response = await api.post(endpoint, bodyData);
    if (response && response.status === 200) {
      return await Promise.resolve({
        success: true,
        message: response.statusText,
        statusCode: response.status,
        data: response.data,
      });
    }
  } catch (error: any) {
    const {response} = error;
    let msg;
    let statusCode;
    if (response && response instanceof Object) {
      const {data, statusText} = response;
      statusCode = response.status;
      msg = data?.message || statusText;
    } else {
      statusCode = 600;
      msg = error?.message || 'Network Error';
    }
    return Promise.reject({
      success: false,
      statusCode,
      message: msg,
    });
  }
};

export {get, post};
