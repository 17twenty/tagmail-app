import axios from 'axios';

export function apiPost(url = '', data = {}, headers = {}) {
  return axios.post(url, data, {
    headers: {
      ...headers,
    },
    withCredentials: true,
  });
}

export function apiGet(url = '', headers = {}) {
  return axios.get(url, {
    headers: {
      ...headers,
    },
    withCredentials: true,
  });
}
