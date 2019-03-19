require('dotenv').config();

const fallback = require('./defaults.json');

const appData = {
  analytics: process.env.ANALYTICS || fallback.analytics,
  apiUrl: process.env.API_URL || fallback.apiUrl,
  author: fallback.author,
  authorUrl: fallback.authorUrl,
  captcha: process.env.CAPTCHA || fallback.captcha,
  defaultLang: fallback.defaultLang,
  description: fallback.description,
  domain: process.env.DOMAIN || fallback.domain,
  email: fallback.email,
  facebookApp: process.env.FACEBOOK_APP || fallback.facebookApp,
  keywords: process.env.KEYWORDS || fallback.keywords,
  name: fallback.name,
  theme: fallback.theme,
  websiteName: fallback.websiteName,
};

module.exports = appData;
