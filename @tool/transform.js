const babelOptions = {
    presets: ['@babel/preset-typescript'],
    plugins: [
        'shopware-vite-meta-glob'
    ],
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
