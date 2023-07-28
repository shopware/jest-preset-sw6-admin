# Jest Test preset for Shopware 6 administration unit tests

![GitHub](https://img.shields.io/github/license/shopware/jest-preset-sw6-admin)
![GitHub last commit](https://img.shields.io/github/last-commit/shopware/jest-preset-sw6-admin)
![Libraries.io](https://img.shields.io/librariesio/release/npm/%40shopware-ag/jest-preset-sw6-admin/latest)
![Latest version](https://img.shields.io/github/package-json/v/shopware/jest-preset-sw6-admin)

Default [Jest](https://jestjs.io/) preset for Shopware 6 administration development.

```bash
npm install jest @shopware-ag/jest-preset-sw6-admin @babel/preset-env @babel/plugin-proposal-class-properties --save-dev
```

## Setup

After installaing the necessary required packages, please create a file called `babel.config.json` right next to your own `package.json` with the following content:

```json
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

### Via `jest.config.js`

Next up, create a file `jest.config.js` which should contain the following content:

```js
module.exports = {
    preset: '@shopware-ag/jest-preset-sw6-admin',
    globals: {
        adminPath: '<file-path-to-sw6-administration>', // required, e.g. /www/sw6/platform/src/Administration/Resources/app/administration
    }
}
```

## Options the preset sets up for you

* `collectCoverage` - Code coverage will be generated using the reporters listed under `coverageReporters`
* `coverageReporters` - The presets uses `lcov`, `text` & `clover` as coverage reporters
* `watchPathIgnorePatterns` - Ignores the `node_modules` folder for the watch mode of Jest
* `clearMocks` - Automatically clear mock calls and instances before every test. 
* `moduleFileExtensions` - File with the extension `js` will automatically used as extensions your module use.
* `moduleNameMapper` - All `css`, `less` & `scss` files will be mocked and relative paths to `src` are getting mapped to the correct src directory
* `transform` - Transforms `js` files using [babel-jest](https://www.npmjs.com/package/babel-jest) and `twig` files are transformed using a custom twig transformer which we use in the administration as well
* `modulePathIgnorePatterns` - Ignores e2e test specs by default
* `setupFilesAfterEnv` - Provides a polyfill for Webpack' `require.context` and sets up the global Shopware third-party interface for every test. The object can be accessed using `global.Shopware` in test files.
* `testMatch` - Matches all files containing `.spec.js` in the test directory