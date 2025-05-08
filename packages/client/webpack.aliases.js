
const path = require('path');

module.exports  =  {
            '@treasury': path.resolve(__dirname, '../../src/mui-treasury/layout-core-v5/'),
                 '@lib': path.resolve(__dirname, 'src/components/lib/'),
     '@toggleComponent': path.resolve(__dirname, 'src/components/toggleComponent/'),
              '@routes': path.resolve(__dirname, 'src/routes/'),
      '@loader/marking': path.resolve(__dirname, '../extractorfile/index.js'),
             '@marking': path.resolve(__dirname, '../extractorfile/*'),
     "@treasury-center": path.resolve(__dirname, "../../src/mui-treasury/"),
              '@client': path.resolve(__dirname, 'src/'),
            "@imagedir": path.resolve(__dirname, './public/images/'),
  };