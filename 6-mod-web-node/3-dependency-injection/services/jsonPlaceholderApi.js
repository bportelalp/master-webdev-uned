require('dotenv').config();
const axios = require('axios');

const instanciaJsonPlaceHolderOriginal = axios.create({
    baseURL: process.env.JSON_PLACEHOLDER_API
})

const adaptador = {
    get : entity =>  instanciaJsonPlaceHolderOriginal.get(`/${entity}`),
    getById : (entity, id) => instanciaJsonPlaceHolderOriginal.get(`/${entity}/${id}`),
    post : (entity, body) => instanciaJsonPlaceHolderOriginal.post(`/${entity}/${id}`,body),
    put : (entity, body) => instanciaJsonPlaceHolderOriginal.put(`/${entity}/${id}`, body),
    delete : entity => instanciaJsonPlaceHolderOriginal.delete(`/${entity}/${id}`)
}

module.exports = {instanciaJsonPlaceHolder: adaptador}