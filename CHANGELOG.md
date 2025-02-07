
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [v6.0.1] - 2025-02-07
- Replace `babel-plugin-transform-vite-meta-glob` with `babel-plugin-shopware-vite-meta-glob`

## [v6.0.0] - 2025-02-06
- Breaking change: Removed `require.context` support for Webpack code.
- Added support for `import.meta.glob` for Vite code.

## [v5.0.0] - 2025-02-06

### Changed
- Breaking change: Removed support for the Vue 2 compatibility mode. The Vue 3 mode is now the default mode.

## [v4.3.4] - 2024-06-26

### Changed
- Changed global Pinia store to be added to created app instance instead of global Vue object which only works with Vue compat mode

### Changed
- Activate feature flag "DISABLE_VUE_COMPAT" when Vue compat mode is disabled

## [v4.3.3] - 2024-06-25

### Changed
- Activate feature flag "DISABLE_VUE_COMPAT" when Vue compat mode is disabled

## [v4.3.2] - 2024-06-17

### Changed
- Enabled Pinia support in `setup-env-for-shopware.js`

## [v4.3.1] - 2024-06-13

### Changed
- Enable the console warnings when Vue compat mode is disabled

## [v4.3.0] - 2024-06-12

### Added
- Added the possibiliy to disable the Vue compat mode by setting the environment variable `DISABLE_JEST_COMPAT_MODE` to `true`

## [v4.2.5] - 2024-05-28

### Changed
- Changed `setup-env-for-shopware.js` to hide `console.warn` as long as Vue compat is enabled

## [v4.2.4] - 2024-05-07

### Added
- Added support for platform `*.vite` files

## [v4.2.3] - 2024-01-17

### Added
- Added `meteor-admin-sdk` to transform option

## [v4.2.2] - 2023-08-25

### Added
- Added `window._features_.vue3` in Vue 2 with false

## [v4.2.1] - 2023-08-25

### Changed
- Changed a wrong negation for the Vue 3 flag

## [v4.2.0] - 2023-08-25
 
### Added
- Added Vue 3 support

### Changed
- Changed `twig-to-vue-transformer` to replace html and vue comments with empty strings similar to our webpack setup

 ## [v4.1.0] - 2023-07-26
 
### Added
- Added `@babel/preset-env` to transform test env

 ## [v4.0.2] - 2023-04-14
 
### Changed
- Make default imports for mixins, directives, filters, states and the component helper independent of file type (TS or JS)

 ## [v4.0] - 2022-10-20
 
Only load `*.spec.js|ts` from `src` 
### Added
- Added support for spec files in the src folder.

### Removed
- Removed support for spec files in the test folder.

## [v3.1] - 2022-10-13
 
Here we added support to transform `.html` files.
 
### Added
- Added transform support for `.html` files.
