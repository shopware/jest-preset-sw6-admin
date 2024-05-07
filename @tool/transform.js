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

/**
 * Overwrite the original process function to add our additions.
 */
const transformer = require('babel-jest').default.createTransformer(babelOptions);
const orgProcess = transformer.process;

transformer.process = function process(src, path, options) {
    // Replace all import.meta.glob statements
    src = src.replaceAll(/import.meta.glob(<.*>)?(\([\S\s]*?\));/gm, '[];');

    // Call original processor
    return orgProcess(src, path, options);
} 

module.exports = transformer;
