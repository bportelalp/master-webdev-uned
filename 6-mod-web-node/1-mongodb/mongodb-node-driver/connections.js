require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_DB_MFLIX;  
console.log("Connecting to ", uri);
const client = new MongoClient(uri);  
client.on("connectionPoolCreated", e => console.log("Evento de conexión: ", e));              
async function run() {
  try {
    console.log("Conectando a db...");
    await client.connect();
    console.log("Conectado!");
  } finally {
    await client.close();                
  }
}
run().catch(console.dir);
