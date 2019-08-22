const { override, fixBabelImports } = require('customize-cra');

//  module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd-mobile',
//         style: 'css',
//     }),
//  );
const _config = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
 )
console.log(_config);
module.exports = function override(config, env) {
   // do stuff with the webpack config...
//    console.log(config);
   return config;
};