import { apiPost, apiGet, apiPostNoTransform } from './helpers';

export const PROVIDER_MAILJET = 'mailjet';
export const PROVIDER_SES = 'ses';
export const PROVIDER_SENDGRID = 'sendgrid';
export const PROVIDER_MAILGUN = 'mailgun';

const baseUrl = `${process.env.VUE_APP_TAGMAIL_API_URL}/app/project/provider`;

function postMailJet({ privateKey, publicKey }) {
  return apiPost(baseUrl, {
    provider: PROVIDER_MAILJET,
    config: {
      mj_apikey_public: publicKey,
      mj_apikey_private: privateKey,
    },
  });
}

function postSes({ publicKey, privateKey, region }) {
  return apiPost(baseUrl, {
    provider: PROVIDER_SES,
    config: {
      access_key_id: publicKey,
      secret_access_key: privateKey,
      region,
    },
  });
}

function postSendGrid({ privateKey }) {
  return apiPost(baseUrl, {
    provider: PROVIDER_SENDGRID,
    config: {
      key: privateKey,
    },
  });
}

function postMailgun({ domain, privateApiKey }) {
  return apiPostNoTransform(baseUrl, {
    provider: PROVIDER_MAILGUN,
    config: {
      privateApiKey,
      domain,
    },
  });
}

function getProvider() {
  return apiGet(baseUrl);
}

export default {
  postMailJet,
  postSes,
  postSendGrid,
  postMailgun,
  getProvider,
};
