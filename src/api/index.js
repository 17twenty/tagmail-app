import axios from 'axios';

const baseUrl = `${process.env.VUE_APP_TAGMAIL_API_URL}/app`;

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

function postLogin(params = {}) {
  const url = `${baseUrl}/login`;
  return apiPost(url, params);
}

function getTemplate(templateID = null) {
  if (templateID) {
    const url = `${baseUrl}/template/${templateID}`;
    return apiGet(url);
  }
  const url = `${baseUrl}/template`;
  return apiGet(url);
}

function postTemplate(templateID = null, params = {}) {
  if (templateID) {
    const url = `${baseUrl}/template/${templateID}`;
    return apiPost(url, params);
  }
  const url = `${baseUrl}/template`;
  return apiPost(url, params);
}

function postPreview(params = {}) {
  const url = `${baseUrl}/create`;
  return apiPost(url, params);
}

function getLogout() {
  const url = `${baseUrl}/logout`;
  return apiGet(url);
}

export default {
  apiPost,
  apiGet,
  postLogin,
  postTemplate,
  getLogout,
  postPreview,
  getTemplate,
};
