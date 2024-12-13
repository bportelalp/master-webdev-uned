require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_DB_MFLIX;  // 1 
console.log("Connecting to ", uri);
const client = new MongoClient(uri);                        // 2
async function run() {
  try {
    const database = client.db('mflix');                    // 3
    const movies = database.collection('movies');

    const query = { title: 'The Great Train Robbery' };
    console.log("Query movie with title: ", query.title);
    const movie = await movies.findOne(query);              // 4
    console.log("Result: ", movie);

  } finally {
    await client.close();                                   // 5
  }
}
run().catch(console.dir);
