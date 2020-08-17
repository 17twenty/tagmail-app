import { apiGet, apiPost } from './helpers';

const baseUrl = `${process.env.VUE_APP_TAGMAIL_API_URL}/app`;

function postLogin(params = {}) {
  const url = `${baseUrl}/login`;
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
function loadTemplate() {
  const url = `${baseUrl}/load-template`;
  return apiGet(url);
}

function postPersonalDetailsRego(form = {}) {
  const url = `${baseUrl}/register`;
  return apiPost(url, form);
}

function getProject() {
  const url = `${baseUrl}/project`;
  return apiGet(url);
}
function getProjectTheme() {
  const url = `${baseUrl}/project/theme`;
  return apiGet(url);
}

export default {
  postLogin,
  getLogout,
  postPreview,
  loadTemplate,
  postPersonalDetailsRego,
  getProject,
  getProjectTheme,
};
