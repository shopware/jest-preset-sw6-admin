const { join, resolve } = require('path');

const srcPath = global.adminPath;
if (!srcPath) {
    throw new Error('"globals.adminPath" is not defined. A file path to a Shopware 6 administration is required');
}

global.window._features_ = {};

const Shopware = require(resolve(join(srcPath, `src/core/shopware.ts`))).ShopwareInstance;

const envBefore = process.env.NODE_ENV;

// src/Administration/Resources/app/administration/node_modules/vue/dist/vue.cjs.js loads different files based on NODE_ENV
process.env.NODE_ENV = 'production';

// Enable Pinia Support
const { createApp } = require(resolve(join(srcPath, 'node_modules/vue/dist/vue.cjs.js')));
const app = createApp();
app.use(Shopware.Store._rootState)

// Reset NODE_ENV to previous value
process.env.NODE_ENV = envBefore;

module.exports = (() => {
    global.Shopware = Shopware;
    require(resolve(join(srcPath, 'src/app/mixin/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/directive/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/filter/index'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init-pre/state.init'))).default(); // eslint-disable-line
    require(resolve(join(srcPath, 'src/app/init/component-helper.init'))).default(); // eslint-disable-line
})();
