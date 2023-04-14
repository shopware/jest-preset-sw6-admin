const { join, resolve } = require('path');

const srcPath = global.adminPath;
if (!srcPath) {
    throw new Error('"globals.adminPath" is not defined. A file path to a Shopware 6 administration is required');
}

const Shopware = require(resolve(join(srcPath, `src/core/shopware.ts`))).default;

module.exports = (() => {
    global.Shopware = Shopware;
    require(resolve(join(srcPath, 'src/app/mixin/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/directive/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/filter/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init-pre/state.init'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init/component-helper.init'))).default(); // eslint-disable-line
})();
