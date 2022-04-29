const path = require('path');

const config = {
    devBaseUri:"https://dev-nucleus.byjusorders.com/nucleusapi/",
    prodBaseUri:"https://nucleus.byjusorders.com/nucleusapi/",
    supportedFileExt: 'env',
    supportedKey: ['BYJUS_DEVELOPER_TOKEN', 'VAULT_UID' ,'ENABLE_VAULT_CACHING','NODE_ENV'],
    apiKey: "R@#$789^FDSsdvf#$%",
    contentType:'application/json',
    console: {
        color: {
            cyan: '\x1b[36m%s\x1b[0m',
            green: "\x1b[32m%s\x1b[0m",
            red: "\x1b[31m%s\x1b[0m",
            yellow: '\x1b[33m%s\x1b[0m',
        },
        emojis: {
            plug: String.fromCodePoint(0x1F50C),
            laptop: String.fromCodePoint(0x1F4BB),
            world: String.fromCodePoint(0x1F30E),
            smileyNerd: String.fromCodePoint(0x1F60E),
            siren: String.fromCodePoint(0x1F6A8),
            monitor: String.fromCodePoint(0x1F5A5),
            rocket: String.fromCodePoint(0x1F680),
        }
    },
    literals: {
        loadingTemplateNotFound: 'Please provide .env file!',
        fileNotFound: "No .env file found in the available repository",
        invalidFilePath: "incorrect file has been provided, please provide .env file.",
        notExist: "does not exist.",
        noContentFound: "No content found in env file.",
        refreshTimePending: 'Env is already synced! \n   update the VAULT_CACHE_REFRESH if you want recent changes.',
        validationError: 'VAULT_CACHE_REFRESH key requires boolean value (true/false).'
    },
}


module.exports = config