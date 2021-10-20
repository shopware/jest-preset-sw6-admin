const babelOptions = {
    presets: ['@babel/preset-typescript'],
    plugins: ['require-context-hook'],
    ignore: [],
    exclude: []
};

module.exports = require('babel-jest').createTransformer(babelOptions);
