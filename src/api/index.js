import { apiGet, apiPost, apiDelete } from './helpers';

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

function postProject(payload = {}) {
  const url = `${baseUrl}/project`;
  return apiPost(url, payload);
}

function getProject() {
  const url = `${baseUrl}/project`;
  return apiGet(url);
}
function postProjectLogo(payload = {}) {
  const url = `${baseUrl}/project/theme/logo`;
  return apiPost(url, payload);
}

function getProjectTheme() {
  const url = `${baseUrl}/project/theme`;
  return apiGet(url);
}
function postProjectTheme(payload = {}) {
  const url = `${baseUrl}/project/theme`;
  return apiPost(url, payload);
}

function renameTemplate(templateID, payload = {}) {
  const url = `${baseUrl}/template/${templateID}/rename`;
  return apiPost(url, payload);
}

function deleteTemplateByName(templateName) {
  const url = `${baseUrl}/template/${templateName}`;
  return apiDelete(url);
}

function getAPIKey() {
  const url = `${baseUrl}/project/token`;
  return apiGet(url);
}

function postNewAPIKey(payload = {}) {
  const url = `${baseUrl}/project/token`;
  return apiPost(url, payload);
}

function getTemplateTags(templateId) {
  const url = `${baseUrl}/template/tags/${templateId}`;
  return apiGet(url);
}

function getVerifyEmail(token = '') {
  const url = `${baseUrl}/verify/${token}`;
  return apiGet(url);
}

export default {
  postLogin,
  postTemplate,
  getLogout,
  postPreview,
  postPersonalDetailsRego,
  postProject,
  getProject,
  postProjectLogo,
  getTemplate,
  getProjectTheme,
  postProjectTheme,
  renameTemplate,
  deleteTemplateByName,
  getAPIKey,
  postNewAPIKey,
  getTemplateTags,
  getVerifyEmail,
};
