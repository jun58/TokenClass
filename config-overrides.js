const { override, fixBabelImports } = require('customize-cra');
const path = require('path');

//  module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd-mobile',
//         style: 'css',
//     }),
//  );
// const _config = override(
//     fixBabelImports('import', {
//         libraryName: 'antd-mobile',
//         style: 'css',
//     }),
//  )
// console.log(_config);
const rewiredPath = () => config => {
    // if (config.mode == 'production') {
    //     config.output.path = path.resolve(__dirname,'docs');
    // }
    console.log(config);
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    rewiredPath()
 );