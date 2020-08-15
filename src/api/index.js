import axios from 'axios';

const baseUrl = `${process.env.VUE_APP_TAGMAIL_API_URL}/app`;
// const baseUrl = 'http://localhost:9001/app';

function apiPost(url = '', data = {}, headers = {}) {
  return axios.post(url, data, {
    headers: {
      ...headers,
    },
    withCredentials: true,
  });
}

function apiGet(url = '', headers = {}) {
  return axios.get(url, {
    headers: {
      ...headers,
    },
    withCredentials: true,
  });
}

function postPreview(params = {}) {
  const url = `${baseUrl}/create`;
  return apiPost(url, params);
}

function loadTemplate() {
  const url = `${baseUrl}/load-template`;
  return apiGet(url);
}

export default {
  apiPost,
  postPreview,
  loadTemplate,
};
