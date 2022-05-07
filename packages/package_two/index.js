const logger = require('./library/logger')
const { isRequiredKeyPresent, getParsedEnv } = require('./utils')
const { getEnvFromDevToken, setEnv } = require("./vault-service")
const { console } = require('./config')

function config({ dotenvPath = "" } = {}) {
 
    try {



  
        const jsonFromEnv = getParsedEnv(dotenvPath);
        const { isKeyFound, notFoundAttr } = isRequiredKeyPresent(jsonFromEnv);
        if (!isKeyFound) return logger.error(console.color.yellow, `${console.emojis.siren}Vaultenv Warning:Environment variable [${notFoundAttr.join(",")}] not found! ${console.emojis.siren}`);
        const environmentVariables = getEnvFromDevToken(jsonFromEnv);
        
        setEnv(jsonFromEnv, environmentVariables); 
        logger.log(console.color.green, `${console.emojis.smileyNerd} Variables are synced in environment`);
    } catch (error) {
        
        return logger.error(console.color.yellow, `${console.emojis.siren} Vaultenv warning: ${error.message} ${console.emojis.siren}`);
    }



}

module.exports = {
    config
};