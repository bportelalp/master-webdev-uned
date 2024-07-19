const {instanciaJsonPlaceHolder: instanciaAPI} = require('./jsonPlaceholderApi');
const {instanciaJsonPlaceHolder: instanciaDb} = require('./jsonPlaceholderDb');
require('dotenv').config();

let implementation;
if(process.env.JSON_PLACEHOLDER_CLIENT == 'API')
    implementation = instanciaAPI;
else if (process.env.JSON_PLACEHOLDER_CLIENT == 'DB')
    implementation = instanciaDb;

module.exports = {
    instanciaJsonPlaceHolder: implementation
}