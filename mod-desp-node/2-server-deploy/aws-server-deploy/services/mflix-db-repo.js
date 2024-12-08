const client = require('./conexion-db');
let debug = require("debug")("singleton-db:repo-db");
const db = client.db('sample_mflix');

async function executeQueryEncapsulate(queryFunc) {
    return new Promise(async (resolve, reject) => {
        const result = await queryFunc
        debug('Executed query on: ', db.databaseName);
        resolve({ data: result })
    })
}
const adaptador = {
    get: entity => executeQueryEncapsulate(db.collection(entity).find().limit(100).toArray()),
    getById: (entity, id) => executeQueryEncapsulate(db.collection(entity).findOne({ id: parseInt(id) })),
    post: (entity, body) => executeQueryEncapsulate(db.collection(entity).insertOne(body)),
    put: (entity, body) => executeQueryEncapsulate(db.collection(entity).updateOne({ id: id }, body)),
    delete: entity => executeQueryEncapsulate(db.collection(entity).deleteOne({ id: id }))
}

module.exports = { dbInstance: adaptador }


