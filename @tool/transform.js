const babelOptions = {
    presets: ['@babel/preset-typescript'],
    plugins: ['require-context-hook'],
    env: {
        test: {
            presets: [
                '@babel/preset-env'
            ],
        }
    },
    ignore: [],
    exclude: []
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);
