const { join, resolve } = require('path');

const srcPath = global.adminPath;
if (!srcPath) {
    throw new Error('"globals.adminPath" is not defined. A file path to a Shopware 6 administration is required');
}

const disableJestCompatMode = process.env.DISABLE_JEST_COMPAT_MODE === 'true' ?? false;

global.window._features_ = {};

if (!disableJestCompatMode) {
    global.console.warn = () => {};
}

const Shopware = require(resolve(join(srcPath, `src/core/shopware.ts`))).ShopwareInstance;

// Take all keys out of Shopware.compatConfig but set them to true
const compatConfig = Object.fromEntries(Object.keys(Shopware.compatConfig).map(key => [key, !disableJestCompatMode]));
const envBefore = process.env.NODE_ENV;

// src/Administration/Resources/app/administration/node_modules/@vue/compat/index.js loads different files based on NODE_ENV
process.env.NODE_ENV = 'production';
const configureCompat = require(resolve(join(srcPath, 'node_modules/@vue/compat/dist/vue.cjs.js'))).configureCompat;

// Enable Pinia support
const vueUse = require(resolve(join(srcPath, 'node_modules/@vue/compat/dist/vue.cjs.js'))).use;
vueUse(Shopware.Store._rootState);

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
configureCompat(compatConfig);

process.env.NODE_ENV = envBefore;

module.exports = (() => {
    global.Shopware = Shopware;
    require(resolve(join(srcPath, 'src/app/mixin/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/directive/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/filter/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init-pre/state.init'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init/component-helper.init'))).default(); // eslint-disable-line
})();
