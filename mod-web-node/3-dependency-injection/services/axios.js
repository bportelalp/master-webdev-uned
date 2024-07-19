const axios = require('axios');

const instanciaJsonPlaceHolderOriginal = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
})

const adaptador = {
    get : url => instanciaJsonPlaceHolderOriginal.get(url),
    post : (url, body) => instanciaJsonPlaceHolderOriginal.post(url,body),
    put : (url, body) => instanciaJsonPlaceHolderOriginal.put(url, body),
    delete : url => instanciaJsonPlaceHolderOriginal.delete(url)
}

module.exports = {instanciaJsonPlaceHolder: adaptador}