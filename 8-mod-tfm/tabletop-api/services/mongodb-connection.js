import { MongoClient } from "mongodb";
import dotenv from "dotenv"
import debugLib from "debug"

dotenv.config();
const debug = debugLib("api:mongodb-connection");

debug('Instanciado conexion');
const uri = process.env.MONGO_DB;
const client = new MongoClient(uri, { compressors: "zlib" });

client.on("connectionPoolCreated", event => debug("Connected to", uri));
client.on("connectionPoolClosed", event => debug("Disconnected from", uri));


const loadDb = async function run() {
  try {
    debug("Connecting to %s", uri);
    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    debug("Ping adminDb OK");
    return;
  }
  catch (ex) {
    debug("Connection error: %o", ex);
  }
}

loadDb();

export default client.db("tabletop-data");