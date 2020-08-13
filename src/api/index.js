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

function postPreview(params = {}) {
  const url = `${baseUrl}/create`;
  return apiPost(url, params);
}

export default {
  apiPost,
  postPreview,
};
