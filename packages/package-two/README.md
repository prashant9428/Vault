# vault-env

vault-env is a NPM library for syncing environment variables with the help of node env, vault uid and byjus developer token

## Installation

Use the node package manager [npm](https://docs.npmjs.com/about-npm) to install Byjus vault setup.

```bash
npm install @byjus-orders/vaultenv@1.0.0
```

## Usage
 Step I:- Create .env file in your repository and add your VAULT_UID, BYJUS_DEVELOPER_TOKEN ,ENABLE_VAULT_CACHING and NODE_ENV as shown below

> Note:- 1) ENABLE_VAULT_CACHING  will be optional field and by default it will be true (Which means if flag is true then it will give data from radis cache otherwise data will be pulled from database )
2)NODE_ENV Will be optional by default it will be local

```npm
BYJUS_DEVELOPER_TOKEN=922fdad3-2da3-4dbd-a47c-ab6c282f95f1
VAULT_UUID=vault_oms_webapp_dev
NODE_ENV=local // Optional variable (local ,dev or prod)
ENABLE_VAULT_CACHING=false // Optional flag (true or false)
```
Step II :- Import library in environment file

```npm
require('@byjus-orders/vaultenv').config();
```
Step III:- Restart your server
## Features :-
- With the help of byjus vault will avoid sharing of environment variables over social site like(Email,slack,what's app etc)
- Vault system will maintain the secrets (such as environment vars ,api keys,etc)
- Secrets are encrypted in persistent storage for better security.
- Supports different types of secrets, currently supporting env vars and Other-type-of secrets placeholders to add more types in upcoming versions.
- Secrets Inheritance. (Maintain global secrets and inherit other secrets).

## Contributing
For major changes, please open an issue first to discuss what you would like to change.

