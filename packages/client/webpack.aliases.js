
const path = require('path');

module.exports  =  {
            '@treasury': path.resolve(__dirname, 'packages/client/src/mui-treasury/layout-core-v5/'),
                 '@lib': path.resolve(__dirname, 'packages/client/src/components/lib/'),
     '@toggleComponent': path.resolve(__dirname, 'packages/client/src/components/toggleComponent/'),
              '@routes': path.resolve(__dirname, 'packages/client/src/routes/'),
      '@loader/marking': path.resolve(__dirname, 'packaes/extractorfile/index.js'),
             '@marking': path.resolve(__dirname, 'packages/extractorfile/*'),
              '@client': path.resolve(__dirname, 'packages/cient/src/'),
            "@imagedir": path.resolve(__dirname, 'packages/client/public/static/images/'),
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  };