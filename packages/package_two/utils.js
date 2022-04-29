const { supportedKey } = require('./config')

module.exports.getParsedEnv = function (path) {
    const { parsed } = require('dotenv').config()
    if (!parsed) throw new Error(`Please provide .env file`)
    return parsed
}

/**
 * 
 * @param {*} envJsonData 
 * @returns 
 */

module.exports.isRequiredKeyPresent = function (envJsonData) {
    let result = {};
    const envKeys = Object.keys(envJsonData);
    const notFoundAttr = [];
    

    for (let item of supportedKey) {
        if (!envKeys.includes(item) && item !== "ENABLE_VAULT_CACHING" && item !== "NODE_ENV") notFoundAttr.push(item);
    }

    if (notFoundAttr.length > 0) {
        result['isKeyFound'] = false;
        result['notFoundAttr'] = notFoundAttr;
    } else {
        result['isKeyFound'] = true;
        result['notFoundAttr'] = [];
    }
    return result
}
