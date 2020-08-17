import { apiGet, apiPost } from './helpers';

const baseUrl = `${process.env.VUE_APP_TAGMAIL_API_URL}/app`;

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
function postProjectTheme(payload = {}) {
  const url = `${baseUrl}/project/theme`;
  return apiPost(url, payload);
}

export default {
  postLogin,
  postTemplate,
  getLogout,
  postPreview,
  postPersonalDetailsRego,
  getProject,
  getProjectTheme,
  postProjectTheme,
  getTemplate,
};
