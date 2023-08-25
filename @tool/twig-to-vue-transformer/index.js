const crypto = require('crypto');

function getCacheKey(fileData, filePath, configStr) {
    return crypto.createHash('md5')
        .update(fileData + filePath + configStr, 'utf8')
        .digest('hex');
}
exports.getCacheKey = getCacheKey;

function process(src) {
    return {
        code: '/* istanbul ignore file */\nmodule.exports = ' + JSON.stringify(src) + ';' //eslint-disable-line
    };
}
exports.process = process;
