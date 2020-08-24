import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

/**
 * Returns if parameter is an object
 * @param {any} value any
 * @returns boolean
 */
export function isObject(value) {
  return (typeof value === 'object' && value instanceof Object);
}

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

/**
 * Utility function to convert object properties into snake case
 * @param {Object} data Object or Array
 * @returns object with properties converted into snake case
 */
export function transformSnakeCase(data) {
  if (isObject(data) || Array.isArray(data)) {
    return snakecaseKeys(data, { deep: true });
  }
  if (typeof data === 'string') {
    try {
      const parsedString = JSON.parse(data);
      const snakeCase = snakecaseKeys(parsedString, { deep: true });
      return JSON.stringify(snakeCase);
    } catch (error) {
      // It's not valid JSON, don't do anything with it
      return data;
    }
  }
  return data;
}

export function apiPost(url = '', data = {}, headers = {}) {
  return axios.post(url, data, {
    headers: {
      ...headers,
    },
    withCredentials: true,
    transformRequest: [
      ...axios.defaults.transformRequest,
      transformSnakeCase,
    ],
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
    transformRequest: [
      ...axios.defaults.transformRequest,
      transformSnakeCase,
    ],
    transformResponse: [
      ...axios.defaults.transformResponse,
      transformCamelCase,
    ],
  });
}

export function apiDelete(url = '', headers = {}) {
  return axios.delete(url, {
    headers: {
      ...headers,
    },
    withCredentials: true,
    transformRequest: [
      ...axios.defaults.transformRequest,
      transformSnakeCase,
    ],
    transformResponse: [
      ...axios.defaults.transformResponse,
      transformCamelCase,
    ],
  });
}
