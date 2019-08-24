const { override, fixBabelImports } = require('customize-cra');
const paths = require('./config/paths');

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
    config.output.path = config.mode === 'production' ? 'F:\\tokenclass-web\\docs' : undefined;
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    // rewiredPath()
 );