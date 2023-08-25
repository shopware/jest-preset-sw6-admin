
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
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
