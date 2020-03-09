const { join, resolve } = require('path');

const srcPath = global.adminPath;
if (!srcPath) {
    throw new Error('"globals.adminPath" is not defined. A file path to a Shopware 6 administration is required');
}

const Shopware = require(resolve(join(srcPath, 'src/core/shopware.js')));

module.exports = (() => {
    global.Shopware = Shopware;
    require(resolve(join(srcPath, 'src/app/mixin/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/directive/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/filter/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/filter/index.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init-pre/state.init.js'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init/component-helper.init.js'))).default(); // eslint-disable-line
})();
