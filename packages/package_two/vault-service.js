const { supportedKey } = require("./config")
const { getEnvFromServer } = require('./xmlhttp')
const logger = require('./library/logger')

module.exports.getEnvFromDevToken = function (envJsonContent, localStorageFile) {
    const filter = {}
    supportedKey.map(item => filter[item] = envJsonContent[item]);

    const secretDetails = {};

    getEnvFromServer(filter, function (response, error) {
        if (error) {
            error = JSON.parse(error);
            throw new Error(error.message);
        }
        response = JSON.parse(response);

        for (let item of response) {
            secretDetails[item.name] = item.value;
            

        }
    })
    return secretDetails
}

module.exports.setEnv = function (localEnv, decryptedEnv) {
    try {
        for (let item of Object.keys(decryptedEnv)) {
            if (!localEnv.hasOwnProperty(item)) {
                localEnv[item] = decryptedEnv[item];
            }
        }
        for (let item of Object.keys(localEnv)) {
            process.env[item] = localEnv[item]
        }

        delete process.env.BYJUS_DEVELOPER_TOKEN;
        delete process.env.VAULT_UID;
    } catch (error) {
        throw new Error(error)
    }
}

