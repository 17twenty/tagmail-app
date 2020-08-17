import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';

/**
 * Utility function to convert object properties into camel case
 * @param {Object} data Object or Array
 * @returns object with properties converted into camel case
 */
export function transformCamelCase(data) {
  if (data) {
    return camelcaseKeys(data, { deep: true });
  }
  return data;
}

export function apiPost(url = '', data = {}, headers = {}) {
  return axios.post(url, data, {
    headers: {
      ...headers,
    },
    withCredentials: true,
    transformResponse: [
      ...axios.defaults.transformResponse,
      transformCamelCase,
    ],
  });
}

export function apiGet(url = '', headers = {}) {
  return axios.get(url, {
    headers: {
      ...headers,
    },
    withCredentials: true,
    transformResponse: [
      ...axios.defaults.transformResponse,
      transformCamelCase,
    ],
  });
}
