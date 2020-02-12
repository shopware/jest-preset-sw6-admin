# Jest Test preset for Shopware 6 administration unit tests

![GitHub](https://img.shields.io/github/license/shopware/jest-preset-sw6-admin)
![GitHub last commit](https://img.shields.io/github/last-commit/shopware/jest-preset-sw6-admin)
![David](https://img.shields.io/david/shopware/jest-preset-sw6-admin)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/shopware/jest-preset-sw6-admin)

Default [Jest](https://jestjs.io/) preset for Shopware 6 administration development.

```bash
npm install @shopware-ag/jest-preset-sw6-admin --save-dev
```

## Setup

### Via `jest.config.json` or `jest` field in `package.json`

```json
{
  "preset": "@shopware-ag/jest-preset-sw6-admin
}
```

## Usage
It's important to configure the preset using the following configuration:

```js
module.exports = {
    preset: '@shopware-ag/jest-preset-sw6-admin',
    globals: {
        artifactsPath: 'build/artifacts', // optional
        adminPath: '<path-to-sw6-administration>', // required
        suiteName: 'My Shopware 6 jest test suite' // optional
    }
}
```

## Options the preset sets up for you

* `collectCoverage` - Code coverage will be generated using the reporters listed under `coverageReporters`
* `coverageReporters` - The presets uses `lcov`, `text` & `clover` as coverage reporters
* `coverageDirectory` - Code coverage will be generated into the `globals.artifactsPath`, if `undefined`, it will be generated into the folder which contains the `jest.config.js` / `package.json` file
* `watchPathIgnorePatterns` - Ignores the `node_modules` folder for the watch mode of Jest
* `clearMocks` - Automatically clear mock calls and instances before every test. 
* `moduleFileExtensions` - File with the extension `js` will automatically used as extensions your module use.
* `moduleNameMapper` - All `css`, `less` & `scss` files will be mocked and relative paths to `src` are getting mapped to the correct src directory
* `transform` - Transforms `js` files using [babel-jest](https://www.npmjs.com/package/babel-jest) and `twig` files are transformed using a custom twig transformer which we use in the administration as well
* `modulePathIgnorePatterns` - Ignores e2e test specs by default
* `setupFilesAfterEnv` - Provides a polyfill for Webpack' `require.context` and sets up the global Shopware third-party interface for every test. The object can be accessed using `global.Shopware` in test files.
* `testMatch` - Matches all files containing `.spec.js` in the test directory
* `reporters` - Uses the reporters `default` and [`jest-junit`](https://www.npmjs.com/package/jest-junit). `jest-junit` is automatically configured. It can be customized using `global.suiteName` & `global.artifactsPath`