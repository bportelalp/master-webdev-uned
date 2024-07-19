const client = require('../services/conexion-db');
const db = client.db('json-placeholder');

async function executeQueryEncapsulate(queryFunc) {
    return new Promise(async (resolve, reject) => {
        const result = await queryFunc
        console.log(result);
        resolve({ data: result })
    })
}
const adaptador = {
    get: entity => executeQueryEncapsulate(db.collection(entity).find().toArray()),
    getById: (entity, id) => executeQueryEncapsulate(db.collection(entity).findOne({ id: parseInt(id) })),
    post: (entity, body) => executeQueryEncapsulate(db.collection(entity).insertOne(body)),
    put: (entity, body) => executeQueryEncapsulate(db.collection(entity).updateOne({ id: id }, body)),
    delete: entity => executeQueryEncapsulate(db.collection(entity).deleteOne({ id: id }))
}

module.exports = { instanciaJsonPlaceHolder: adaptador }


