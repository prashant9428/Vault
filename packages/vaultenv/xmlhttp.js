const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const os = require('os');
const userOs = os.type();
const { apiKey, contentType, devBaseUri, prodBaseUri } = require('./config')

function getEnvFromServer(reqData, callback) {

    const { BYJUS_DEVELOPER_TOKEN, VAULT_UID, ENABLE_VAULT_CACHING, NODE_ENV } = reqData
    const checkNodeEnv = NODE_ENV ? NODE_ENV : "local";
    const envirnoment = checkNodeEnv == "local" || checkNodeEnv == "development" ? "dev" : "prod";
    const baseUri = envirnoment == "dev" ? devBaseUri : prodBaseUri;

    const noCache = ENABLE_VAULT_CACHING ? ENABLE_VAULT_CACHING : true;
    var xhr = new XMLHttpRequest();
    var data = { vaultUuid: VAULT_UID }

    xhr.open("POST", baseUri + "usermanagement/vault/vaultmanagement/environmentSecretByVaultUuid", false);
    xhr.setRequestHeader('x-developer-token', BYJUS_DEVELOPER_TOKEN)
    xhr.setRequestHeader('x-api-key', apiKey)
    xhr.setRequestHeader('Content-Type', contentType)
    xhr.setRequestHeader('x-no-cache', noCache)
    xhr.setRequestHeader('x-user-os', userOs)
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(xhr.responseText, null);
            } else {
                callback(null, xhr.responseText);
            }
        }
    };
    xhr.onerror = function (e) {
        callback(null, xhr.responseText);
    };
    xhr.send(JSON.stringify(data));
}


module.exports = {
    getEnvFromServer
};