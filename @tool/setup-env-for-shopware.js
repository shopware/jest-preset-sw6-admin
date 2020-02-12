const { join, resolve } = require('path');

const srcPath = resolve(join('../', 'administration'));
const Shopware = require(resolve(join(srcPath, 'src/core/shopware.js')));

module.exports = (() => {
    global.Shopware = Shopware;
    require(resolve(join(srcPath, 'src/app/mixin/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/directive/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/filter/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/filter/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init-pre/state.init.js'))).default(); // eslint-disable-line
})();
