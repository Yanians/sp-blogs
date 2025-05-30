'use strict'

const path = require('path');
const fs = require('fs')
// import getPublicUrlOrPath  from './global';
const   getPublicUrlOrPath = require('./publicUrlOrPath');
// import getPublicUrlOrPath  from './publicUrlOrPath.js';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL
);

const buildPath = process.env.BUILD_PATH || 'build';

const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
];

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }
  return resolveFn(`${filePath}.js`);
};

function readEnvFile(file, type){
    if(!fs.existsSync(file)){
      throw new Error(
         `You specified ${type } in your env, but the file "${file }" can't be found.`
      )
    }
    return fs.readFileSync(file);
};

function getHttpsConfig() {
  const { SSL_CRT_FILE, SSL_KEY_FILE, HTTPS } = process.env;
  const isHttps = HTTPS === 'true';

  if (isHttps && SSL_CRT_FILE && SSL_KEY_FILE) {
    const crtFile = path.resolve(paths.appPath, SSL_CRT_FILE);
    const keyFile = path.resolve(paths.appPath, SSL_KEY_FILE);
    const config = {
      cert: readEnvFile(crtFile, 'SSL_CRT_FILE'),
      key: readEnvFile(keyFile, 'SSL_KEY_FILE'),
    };

    validateKeyAndCerts({ ...config, keyFile, crtFile });
    return config;
  }
  return isHttps;
}

module.exports = {
        clientSrc: resolveApp('./src'),
          appPath: resolveApp('.'),
   appPackageJson: resolveApp('package.json'),
      appJsConfig: resolveApp('jsconfig.json'),
       proxySetup: resolveApp('src/setupProxy.js'),
      appTsConfig: resolveApp('tsconfig.json'),
   appNodeModules: resolveApp('node_modules'),
         appIndex: resolveModule(resolveApp, 'src/index'),
      appImageDir: resolveApp('public/static/images/'),
  appWebpackCache: resolveApp('node_modules/.cache'),
         appBuild: resolveApp('../server/webpack'),
appTsBuildInfoFile: resolveApp('node_modules/.cache/tsconfig.tsbuildinfo'),
moduleFileExtensions,
 publicUrlOrPath,
};

module.exports.moduleFileExtensions = moduleFileExtensions;