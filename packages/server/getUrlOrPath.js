
'use strict';

const { URL } = require('url');

module.exports = getPublicUrlOrPath;

function getPublicUrlOrPath(isEnvDevelopment, homepage, envPublicUrl) {
  const stubDomain = 'https://create-react-app.dev';

  if (envPublicUrl) {
    // ensure last slash exists
    envPublicUrl = envPublicUrl.endsWith('/')
      ? envPublicUrl
      : envPublicUrl + '/';

    // validate if `envPublicUrl` is a URL or path like
    // `stubDomain` is ignored if `envPublicUrl` contains a domain
    const validPublicUrl = new URL(envPublicUrl, stubDomain);

    return isEnvDevelopment
      ? envPublicUrl.startsWith('.')
        ? '/'
        : validPublicUrl.pathname
      : // Some apps do not use client-side routing with pushState.
        // For these, "homepage" can be set to "." to enable relative asset paths.
        envPublicUrl;
  }

  if (homepage) {
    // strip last slash if exists
    homepage = homepage.endsWith('/') ? homepage : homepage + '/';

    // validate if `homepage` is a URL or path like and use just pathname
    const validHomepagePathname = new URL(homepage, stubDomain).pathname;
    return isEnvDevelopment
      ? homepage.startsWith('.')
        ? '/'
        : validHomepagePathname
      : // Some apps do not use client-side routing with pushState.
      // For these, "homepage" can be set to "." to enable relative asset paths.
      homepage.startsWith('.')
      ? homepage
      : validHomepagePathname;
  }

  return '/';
}
