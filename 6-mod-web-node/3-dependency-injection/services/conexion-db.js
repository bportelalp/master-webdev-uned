require("dotenv").config();
let debug = require("debug")("singleton-db:conexion-db");
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_DB;
const client = new MongoClient(uri, { compressors: "zlib" });

client.on("connectionPoolCreated", event => debug("connectionPoolCreated", event));
client.on("connectionPoolClosed", event => debug("connectionPoolClosed", event));


const loadDb = async function run() {
  try {
    await client.connect();
    debug("Conectado a %s", uri);
    
    await client.db("admin").command({ ping: 1 });
    debug("Ping adminDb OK");
    return;
  }
  catch (ex) {
    debug("Connection error: %o", ex);
  }
}

loadDb();

module.exports = client;