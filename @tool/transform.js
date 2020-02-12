const babelOptions = {
    plugins: ['require-context-hook'],
    ignore: [],
    exclude: []
};

module.exports = require('babel-jest').createTransformer(babelOptions);
